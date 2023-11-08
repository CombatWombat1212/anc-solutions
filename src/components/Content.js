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
  const [modalVisible, setModalVisible] = useState(false);

  const setSelectedRollByType = (input) => {
    const type = typeof input === "string" ? input : input.currentTarget.dataset.rollType;
    const roll = ROLL_TYPES.types[type];

    if (roll) {
      setSelectedRoll(roll);
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const handleMouseEnter = (e) => {
    setSelectedRollByType(e);
  };

  const handleMouseLeave = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (view.sideItem && ROLL_TYPES.types[view.sideItem]) {
      setSelectedRollByType(view.sideItem);
    }
  }, [view.sideItem]);

  const modalState = useInOut(modalVisible);


  
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
          <Body>{selectedRoll.description && selectedRoll.description}</Body>
        </div>
      </div>
    </>
  );
}

// either they're hovered, someone else is hovered, or no one is hovered, active, inactive, or idle

function Visual({ type, selectedRoll }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(selectedRoll && selectedRoll.id === type.id);
  }, [selectedRoll]);

  return (
    <div className="roll-types--visual">
      <VisualVariant type={type} active={active} graphicType="photo" />
      <VisualVariant type={type} active={active} graphicType="vector" />
    </div>
  );
}

const VisualVariant = ({ type, active, graphicType }) => {
  const isActive = active ? "active" : "inactive";
  const graphicClass = `roll-types--graphic roll-types--graphic-${graphicType} roll-types--graphic-${graphicType}__${isActive} roll-types--graphic__${isActive}`;
  return <Graphic className={graphicClass} img={type.images[graphicType]} />;
};

export default Content;
