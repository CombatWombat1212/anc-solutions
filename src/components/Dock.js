import React, { useEffect, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { Body, H2, Label1, Label2 } from "./Text";
import Graphic from "./Graphic";
import useInOut from "../scripts/hooks/useInOut";
import Mask from "./Mask";
import createUpdateConditions from "../scripts/createUpdateConditions";

// data is the array of dock elements
// view.dock is the id of the active dock element

function Dock({ view }) {
  const { page, type } = view;
  const [data, setData] = useState(PRODUCT_DATA[view.type].pages.subpages[view.page].dock);

  useEffect(() => {
    const dock = PRODUCT_DATA[view.type].pages.subpages[view.page].dock;
    if (!dock) return;
    setData(dock);
    view.setDock(dock[0].id);
  }, [view.page, view.type]);

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(view.dock);
  }, [view.dock]);

  const dockMaxItems = 6;
  const dockMinItems = 4;
  const dockItemCount = data.length;
  const dockIsFull = dockItemCount >= dockMinItems && dockItemCount <= dockMaxItems ? 1 : 0;

  return (
    <div
      className="dock"
      style={{
        "--dock-item-count": dockItemCount,
        "--dock-max-items": dockMaxItems,
        "--dock-min-items": dockMinItems,
        "--dock-is-full": dockIsFull,
      }}>
      {data.map((item, index) => (
        <Item item={item} index={index} key={index} view={view} active={active} />
      ))}
    </div>
  );
}

function Item({ item, index, view, active }) {
  const [hovered, setHovered] = useState(false);
  const [state, setState] = useState(view.dock == item.id ? "active" : "inactive");

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    view.setDock(item.id);
  };

  useEffect(() => {
    setState(view.dock == item.id || hovered ? "active" : "inactive");
  }, [active, hovered]);

  return (
    <>
      <a className={`dock--item dock--item__${state}`} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleClick}>
        <H2 className={`dock--h2 dock--h2__${state}`}>{item.title}</H2>
        <Mask className={`dock--graphic dock--graphic__${state}`} img={item.img} />
      </a>
      <div
        className={`dock--item-background dock--item-background__${state}`}
        style={{
          "--dock-background-index": index,
        }}></div>
    </>
  );
}

export default Dock;
