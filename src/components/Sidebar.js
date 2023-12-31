import React, { useEffect, useRef, useState } from "react";
import PRODUCT_DATA, { PAGE_DATA } from "../data/PRODUCT_DATA";
import { H1, H2 } from "./Text";
import useHoverAndFocus from "../scripts/hooks/useHoverAndFocus";
// import { HARDCODED_PAGES } from "../data/LAYOUT_DATA";
import useAttrObserver from "../scripts/hooks/useAttrObserver";
import Link from "./Link";
import { useSpring, animated } from "@react-spring/web";
import Graphic from "./Graphic";
import ICON_IMGS from "../data/ICON_IMGS";
import Mask from "./Mask";

function Sidebar({ view }) {
  const [panels, setPanels] = useState([]);

  let optionArray = [];

  // if(view.type){
  //   optionArray = Object.values(PRODUCT_DATA[view.type].pages).filter((x) => x.level == "sub");
  // } else {
  //   optionArray = Object.values(PRODUCT_DATA).map((x) => x.pages.selection);
  // }

  if (!view.type) {
    optionArray = Object.values(PRODUCT_DATA).map((x) => x.pages.selection);
  } else {
    // const options = Object.values(PAGE_DATA).filter((page) => HARDCODED_PAGES[view.type].includes(page.id));
    optionArray = (() => {
      const options = Object.values(PRODUCT_DATA[view.type].pages).filter((x) => x.level == "sub");

      if (view.type === "blunt") {
        return options.map((option) => {
          if (option.id === "paper") {
            return { ...option, title: "Wrap Type" };
          }
          return option;
        });
      }

      return options;
    })();
  }

  useEffect(() => {
    if (!panels.length > 0) return;
    const hoveredPanels = panels.filter((p) => p.hovered);
    if (hoveredPanels.length === 1) {
      view.side.setActive(hoveredPanels[0].option.id);
    } else {
      view.side.setActive(false);
    }
  }, [panels]);

  useEffect(() => {
    setPanels([]);
   
  }, [view.page]);

  const subpage = view.page != "selection";

  return (
    <div
      className="viewer--sidebar sidebar"
      //  ref={sidebar}
    >
      <Title view={view} />
      {optionArray.map((option, i) => {
        return <Panel key={i} option={option} view={view} panels={panels} setPanels={setPanels} index={i} />;
      })}

      {subpage && <Back view={view} />}
    </div>
  );
}

function Title({ view }) {
  const copy =
    view.type && typeof view.type === "string"
      ? view.type
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ")
      : "Pre-Rolls";

  return (
    <div className="sidebar--title sidebar--panel">
      <H1>{copy}</H1>
    </div>
  );
}

function Panel({ view, option, setPanels, index }) {
  const panelRef = useRef(null);
  const hovered = useHoverAndFocus(panelRef);
  const optionId = useAttrObserver(panelRef, "data-option-id", { bool: false });

  useEffect(() => {
    const panel = {
      ref: panelRef,
      hovered: hovered,
      option: option,
    };
    setPanels((prevPanels) => {
      const otherPanels = prevPanels.filter((p) => p.ref.current !== panelRef.current && p.option.id !== option.id);
      return [...otherPanels, panel];
    });
  }, [hovered, optionId]);

  const schematic = view.page == "schematic" ? "schematic" : "other";
  const isSchematic = view.page == "schematic" ? true : false;

  const handleClick = () => {
    // if (view.page == "schematic") return;

    const page = view.type && option[view.type] ? option[view.type].link.page : option.link.page;
    const type = view.type && option[view.type] ? option[view.type].link.type : option.link.type;

    view.setPage(page);
    view.setType(type);
  };

  useEffect(() => {
    const dock = PRODUCT_DATA[view.type]?.pages?.subpages?.[view.page]?.dock;
    if (dock && dock.length > 0) {
      view.setDock(dock[0].id);
    }
  }, [view.page, view.type]);

  const title = option.title.long || option.title.short || option.title;
  // const ind = String(option.index + 1).padStart(2, "0");
  const ind = String(index + 1).padStart(2, "0");

  // TODO: make it so that you can't click on it if you're already on that page

  const isCurrentPage =
    view.page === (view.type && option[view.type] ? option[view.type].link.page : option.link.page) &&
    view.type === (view.type && option[view.type] ? option[view.type].link.type : option.link.type);
  const Tag = isCurrentPage ? "a" : Link;

  return (
    <div className="sidebar--panel-wrapper">
      <Tag
        className={`sidebar--panel sidebar--button sidebar--button__${schematic}`}
        reference={panelRef}
        onClick={handleClick}
        data-option-id={option.id}>
        <div className="sidebar--text">
          <H2 className="sidebar--index">{ind}</H2>
          <H2 className="sidebar--name">{title}</H2>
        </div>
        <Mask className={"sidebar--icon"} img={ICON_IMGS.next}></Mask>
      </Tag>
    </div>
  );
}

function Back({ view }) {
  const handleClick = () => {
    view.setPage("selection");
    view.setType(false);
  };

  return (
      <Link className={`sidebar--panel sidebar--button sidebar--back`} onClick={handleClick}>
        <div className="sidebar--back-inner">
          <div className="sidebar--back-icon-wrapper">
            <Mask className={"sidebar--icon sidebar--back-icon"} img={ICON_IMGS.back}></Mask>
          </div>
          <H2 className="sidebar--name">Back</H2>
        </div>
      </Link>
  );
}

export default Sidebar;
