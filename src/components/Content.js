import { useEffect, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import Graphic from "./Graphic";
import { Body, H1, H2, H3, H4, Label1, Label2 } from "./Text";
import useInOut from "../scripts/hooks/useInOut";
const { ROLL_TYPES } = PRODUCT_DATA;

function Content({ view }) {
  const { page } = view;

  return (
    <>
      <div className={`viewer--content content ${page}`}>
        <Inner view={view} />
      </div>
    </>
  );
}

function Inner({ view }) {
  const { page } = view;
  return (
    <div className={`content--inner ${page}--inner`}>
      <RollTypes view={view} />
    </div>
  );
}

function RollTypes({ view }) {
  const rollTypesArray = Object.values(ROLL_TYPES.types);

  const [selectedRoll, setSelectedRoll] = useState(false);
  const [prevSelectedRoll, setPrevSelectedRoll] = useState();
  const [description, setDescription] = useState(false);



  
  const setSelectedRollByType = (input) => {
    const type = input === false || input === null ? false : typeof input === "string" ? input : input.currentTarget.dataset.rollType;
    const roll = type && ROLL_TYPES.types[type] ? ROLL_TYPES.types[type] : false;
    if (roll) {
      setPrevSelectedRoll(selectedRoll);
    }
    setSelectedRoll(roll);
  };





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
    if (selectedRoll || prevSelectedRoll) {
      setDescription(prevSelectedRoll.description || selectedRoll.description);
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
            onMouseEnter={handleMouseEnter} // Set description on hover
            onMouseLeave={handleMouseLeave} // Clear description when not hovering
            data-roll-type={type.id}>
            <div className="roll-types--head">
              <H2 className={"roll-types--label__main"}>{type.short}</H2>
              <H2 className={"roll-types--label__sub"}>Figure {String(type.index).padStart(2, "0")}</H2>
            </div>

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

// either they're hovered, someone else is hovered, or no one is hovered, active, inactive, or idle

function Visual({ type, selectedRoll }) {

  const [active, setActive] = useState('idle');

  useEffect(() => {
    if (selectedRoll) {
      setActive(type.id === selectedRoll.id ? 'active' : 'inactive');
    } else {
      setActive('idle');
    }
  }, [selectedRoll, type.id]);


  return (
    <div className="roll-types--visual">


      <Graphic className={`roll-types--graphic roll-types--graphic-photo__${active} roll-types--graphic-photo roll-types--graphic__${active}`} img={type.images.photo} />
      <Graphic className={`roll-types--graphic roll-types--graphic-vector__${active} roll-types--graphic-vector roll-types--graphic__${active}`} img={type.images.vector} />



    </div>
  );
}


export default Content;
