import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { H1, H2 } from "./Text";
import useHoverAndFocus from "../scripts/hooks/useHoverAndFocus";
const { ROLL_TYPES } = PRODUCT_DATA;

function Sidebar({ view }) {
  const rollTypesArray = Object.values(ROLL_TYPES.types);
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    if (!panels.length > 0) return;
    const hoveredPanels = panels.filter((p) => p.hovered);
    if (hoveredPanels.length === 1) {
      view.setSideItem(hoveredPanels[0].type.id);
    } else {
      view.setSideItem(false);
    }
  }, [panels]);

  return (
    <div className="viewer--sidebar sidebar">
      <Title />
      {rollTypesArray.map((type) => (
        <Panel key={type.id} type={type} view={view} panels={panels} setPanels={setPanels} />
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

function Panel({ type, panels, setPanels }) {
  const ind = String(type.index).padStart(2, "0");

  const panelRef = useRef(null);
  const hovered = useHoverAndFocus(panelRef);

  useEffect(() => {
    const panel = {
      ref: panelRef,
      hovered: hovered,
      type: type,
    };
    setPanels((prevPanels) => {
      const otherPanels = prevPanels.filter((p) => p.ref.current !== panelRef.current);
      return [...otherPanels, panel];
    });
  }, [hovered]);

  return (
    <a className="sidebar--panel sidebar--button" ref={panelRef}>
      <H2 className="sidebar--index">{ind}</H2>
      <H2 className="sidebar--name">{type.long}</H2>
    </a>
  );
}

export default Sidebar;
