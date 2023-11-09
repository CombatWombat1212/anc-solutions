import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import Graphic from "./Graphic";
import { Body, H1, H2, H3, H4, Label1, Label2 } from "./Text";
import useInOut from "../scripts/hooks/useInOut";
import { splitS } from "../scripts/Split";
import useConnectingLine, { BoundingBox } from "../scripts/hooks/useConnectingLine";
const { ROLL_TYPES } = PRODUCT_DATA;

function Content({ view }) {
  const { page, pageRef } = view;

  return (
    <>
      <div className={`viewer--content content ${page}`} ref={pageRef}>
        <Inner view={view} />
      </div>
    </>
  );
}

function Inner({ view }) {
  const { page } = view;


    // const one = useRef(null);
    // const two = useRef(null);


  return (
    <>
    {/* <BoundingBox startRef={one} endRef={two}/>

      <div>
        <p ref={one}>rtest</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /><br /><p ref={two}>asdiojasidojhasiuhdiuashd</p>
      </div> */}


      <div className={`content--inner ${page}--inner`}>
        <RollTypes view={view} />
      </div>
    </>
  );
}

function RollTypes({ view }) {
  const rollTypesArray = Object.values(ROLL_TYPES.types);
  const [selectedRoll, setSelectedRoll] = useState(false);
  const [prevSelectedRoll, setPrevSelectedRoll] = useState();
  const [description, setDescription] = useState(false);

  const setSelectedRollByTypeRef = useRef(); // Create a ref to store the timeout ID

  const setSelectedRollByType = (input) => {
    const type = input === false || input === null ? false : typeof input === "string" ? input : input.currentTarget.dataset.rollType;
    const roll = type && ROLL_TYPES.types[type] ? ROLL_TYPES.types[type] : false;
    const timeout = splitS(
      view.pageRef.current ? getComputedStyle(view.pageRef.current).getPropertyValue("--roll-types-mouse-leave-timeout") : "200ms"
    );
    clearTimeout(setSelectedRollByTypeRef.current); // Clear any existing timeouts
    if (roll) {
      setSelectedRoll(roll);
    } else {
      // Wait for 500ms before setting to false
      setSelectedRollByTypeRef.current = setTimeout(() => {
        setSelectedRoll(roll); // Only set to false if not interrupted by a new roll
      }, timeout);
    }
  };

  // Don't forget to clear the timeout when the component unmounts or when setSelectedRollByType is no longer relevant.
  useEffect(() => {
    return () => {
      clearTimeout(setSelectedRollByTypeRef.current);
    };
  }, []);

  const handleMouseEnter = (e) => {
    setSelectedRollByType(e);
  };

  const handleMouseLeave = () => {
    setSelectedRollByType(false);
  };

  useEffect(() => {
    setSelectedRollByType(view.sideItem);
  }, [view.sideItem]);

  useEffect(() => {
    if (prevSelectedRoll || selectedRoll) {
      setDescription(selectedRoll.description || prevSelectedRoll.description);
    }
  }, [selectedRoll, prevSelectedRoll]);

  const modalState = useInOut(selectedRoll);

  return (
    <>
      <div className="roll-types--body">
        {rollTypesArray.map((type) => (
          <div
            className={`content--col roll-types--col`}
            key={type.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-roll-type={type.id}>
            <Head type={type} selectedRoll={selectedRoll} />
            <Visual type={type} selectedRoll={selectedRoll} />
          </div>
        ))}
      </div>
      <div className="roll-types--description">
        <div className={`roll-types--modal roll-types--modal__${modalState}`}>
          <Body>{description}</Body>
        </div>
      </div>
    </>
  );
}

function Head({ type, selectedRoll }) {
  const [active, setActive] = useState("idle");

  useEffect(() => {
    if (selectedRoll) {
      setActive(type.id === selectedRoll.id ? "active" : "inactive");
    } else {
      setActive("idle");
    }
  }, [selectedRoll, type.id]);

  return (
    <div className={`roll-types--head roll-types--head__${active}`}>
      <H2 className={"roll-types--label__main"}>{type.short}</H2>
      <H2 className={"roll-types--label__sub"}>Figure {String(type.index).padStart(2, "0")}</H2>
    </div>
  );
}

function Visual({ type, selectedRoll }) {
  const [active, setActive] = useState("idle");

  useEffect(() => {
    if (selectedRoll) {
      setActive(type.id === selectedRoll.id ? "active" : "inactive");
    } else {
      setActive("idle");
    }
  }, [selectedRoll, type.id]);

  return (
    <div className="roll-types--visual">
      <Graphic
        className={`roll-types--graphic roll-types--graphic-photo__${active} roll-types--graphic-photo roll-types--graphic__${active}`}
        img={type.images.photo}
      />
      <Graphic
        className={`roll-types--graphic roll-types--graphic-vector__${active} roll-types--graphic-vector roll-types--graphic__${active}`}
        img={type.images.vector}
      />
    </div>
  );
}

export default Content;
