import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { H1, H2 } from "./Text";
import useHoverAndFocus from "../scripts/hooks/useHoverAndFocus";

function Sidebar({ view }) {
  const selectionArray = Object.values(PRODUCT_DATA);
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    if (!panels.length > 0) return;
    const hoveredPanels = panels.filter((p) => p.hovered);
    if (hoveredPanels.length === 1) {
      view.side.setActive(hoveredPanels[0].type.id);
    } else {
      view.side.setActive(false);
    }
  }, [panels]);

  return (
    <div className="viewer--sidebar sidebar">
      <Title />
      {selectionArray.map((type) => (
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

function Panel({ view, type, setPanels }) {
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



  const handleClick = () => {
    const page = type.pages[view.page].link.page;
    const link = type.pages[view.page].link.type;
    view.setPage(page);
    view.setType(link);
  };




  return (
    <a className="sidebar--panel sidebar--button" ref={panelRef}
      onClick={handleClick}
    >
      <H2 className="sidebar--index">{ind}</H2>
      <H2 className="sidebar--name">{type.long}</H2>
    </a>
  );
}

export default Sidebar;
