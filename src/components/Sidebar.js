import { useEffect, useRef } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { H1, H2 } from "./Text";
import useHoverAndFocus from "../scripts/hooks/useHoverAndFocus";
const { ROLL_TYPES } = PRODUCT_DATA;



function Sidebar({ view }) {
  const rollTypesArray = Object.values(ROLL_TYPES.types);

  return (
    <div className="viewer--sidebar sidebar">
      <Title />
      {rollTypesArray.map((type) => (
        <Panel key={type.id} type={type} view={view} />
      ))}
    </div>
  );
}

function Title() {
  return (
    <div className="sidebar--title sidebar--panel">
      <H1>Pre-Rolls</H1>
    </div>
  );
}

function Panel({ view, type }) {
  const ind = String(type.index).padStart(2, "0");

  const panel = useRef(null);
  const hovered = useHoverAndFocus(panel);

  useEffect(() => {
    if (!hovered) return;
    view.setSideItem(type.id);
  }, [hovered]);

  return (
    <a className="sidebar--panel sidebar--button" ref={panel}>
      <H2 className="sidebar--index">{ind}</H2>
      <H2 className="sidebar--name">{type.long}</H2>
    </a>
  );
}

export default Sidebar;
