import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { splitS } from "../scripts/Split";
import useInOut from "../scripts/hooks/useInOut";
import { Body, H2 } from "../components/Text";
import Graphic from "../components/Graphic";

function RollTypes({ view }) {
  const rollTypesArray = Object.values(PRODUCT_DATA);

  const [active, setActive] = useState(false);
  const [description, setDescription] = useState(false);

  const setActiveByTypeRef = useRef(); // Create a ref to store the timeout ID

  const setActiveByType = (input) => {
    let rollType = false;
    if (input === false || input === null) {
      rollType = false;
    } else if (typeof input === "string") {
      rollType = PRODUCT_DATA[input] ? PRODUCT_DATA[input] : false;
    } else if (input && input.currentTarget.dataset.rollType) {
      rollType = PRODUCT_DATA[input.currentTarget.dataset.rollType] ? PRODUCT_DATA[input.currentTarget.dataset.rollType] : false;
    }

    const timeoutDur = view.pageRef.current ? getComputedStyle(view.pageRef.current).getPropertyValue("--roll-types-mouse-leave-timeout") : "200ms";
    const timeout = splitS(timeoutDur);

    clearTimeout(setActiveByTypeRef.current); // Clear any existing timeouts
    if (rollType) {
      setActive(rollType);
    } else {
      setActiveByTypeRef.current = setTimeout(() => {
        setActive(rollType); // Only set to false if not interrupted by a new roll
      }, timeout);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(setActiveByTypeRef.current);
    };
  }, []);

  useEffect(() => {
    setActiveByType(view.side.active);
  }, [view.side.active]);

  useEffect(() => {
    if (!active) return;
    setDescription(active.pages["roll-types"].description);
  }, [active]);

  const modalState = useInOut(active);

  const handleMouseEnter = (e) => {
    setActiveByType(e);
  };

  const handleMouseLeave = () => {
    setActiveByType(false);
  };

  const handleClick = (e) => {
    // const type = e.currentTarget.dataset.rollType;
    // const id = ROLL_TYPES.types[type].id;
    // view.setPage("schematic");
    // view.setType(id);
  };

  return (
    <>
      <div className="roll-types--body">
        {rollTypesArray.map((type) => (
          <a
            className={`content--col roll-types--col`}
            key={type.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-roll-type={type.id}
            onClick={handleClick}>
            <Head type={type} active={active} />
            <Visual type={type} active={active} />
          </a>
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

function Head({ type, active }) {
  const [style, setStyle] = useState("idle");

  useEffect(() => {
    if (active) {
      setStyle(type.id === active.id ? "active" : "inactive");
    } else {
      setStyle("idle");
    }
  }, [active, type.id]);

  return (
    <div className={`roll-types--head roll-types--head__${style}`}>
      <H2 className={"roll-types--label__main"}>{type.short}</H2>
      <H2 className={"roll-types--label__sub"}>Figure {String(type.index).padStart(2, "0")}</H2>
    </div>
  );
}

function Visual({ type, active }) {
  const [style, setStyle] = useState("idle");

  const imgs = type.pages["roll-types"].images;

  useEffect(() => {
    if (active) {
      setStyle(type.id === active.id ? "active" : "inactive");
    } else {
      setStyle("idle");
    }
  }, [active, type.id]);

  return (
    <div className="roll-types--visual">
      <Graphic
        className={`roll-types--graphic roll-types--graphic-photo__${style} roll-types--graphic-photo roll-types--graphic__${style}`}
        img={imgs.photo}
      />
      <Graphic
        className={`roll-types--graphic roll-types--graphic-vector__${style} roll-types--graphic-vector roll-types--graphic__${style}`}
        img={imgs.vector}
      />
    </div>
  );
}

export default RollTypes;
