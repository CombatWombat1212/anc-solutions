import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA, { PAGE_DATA } from "../data/PRODUCT_DATA";
import { H1, H2 } from "./Text";
import useHoverAndFocus from "../scripts/hooks/useHoverAndFocus";

function Sidebar({ view }) {
  const [panels, setPanels] = useState([]);

  const optionArray =  view.type ? 
  Object.values(PRODUCT_DATA[view.type].pages[view.page].options) :
  Object.values(PRODUCT_DATA).map((x) => x.pages.selection);






  useEffect(() => {
    if (!panels.length > 0) return;
    const hoveredPanels = panels.filter((p) => p.hovered);
    if (hoveredPanels.length === 1) {
      view.side.setActive(hoveredPanels[0].option.id);
    } else {
      view.side.setActive(false);
    }
  }, [panels]);



  return (
    <div className="viewer--sidebar sidebar">
      <Title view={view} />
      {optionArray.map((option, i) => (
        <Panel key={i} option={option} view={view} panels={panels} setPanels={setPanels} />
      ))}
    </div>
  );
}

function Title({view}) {
  const copy = (view.type && typeof view.type === 'string') ? view.type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') : "Pre-Rolls";


  return (
    <div className="sidebar--title sidebar--panel">
      <H1>{copy}</H1>
    </div>
  );
}

function Panel({ view, option, setPanels }) {

  const panelRef = useRef(null);
  const hovered = useHoverAndFocus(panelRef);

  useEffect(() => {
    const panel = {
      ref: panelRef,
      hovered: hovered,
      option: option,
    };
    setPanels((prevPanels) => {
      const otherPanels = prevPanels.filter((p) => p.ref.current !== panelRef.current);
      return [...otherPanels, panel];
    });
  }, [hovered]);



  const handleClick = () => {
    const page = (view.type && option[view.type]) ? option[view.type].link.page : option.link.page;
    const type = (view.type && option[view.type]) ? option[view.type].link.type : option.link.type;
    view.setPage(page);
    view.setType(type);
  };


  
  const title = option.title.long || option.title.short || option.title;
  const ind = String(option.index).padStart(2, "0");



  return (
    <a className="sidebar--panel sidebar--button" ref={panelRef}
      onClick={handleClick}
    >
      <H2 className="sidebar--index">{ind}</H2>
      <H2 className="sidebar--name">{title}</H2>
    </a>
  );
}

export default Sidebar;
