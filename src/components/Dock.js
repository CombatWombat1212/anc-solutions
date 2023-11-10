import { useEffect, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { Body, H2, Label1, Label2 } from "./Text";
import Graphic from "./Graphic";
import useInOut from "../scripts/hooks/useInOut";
import Mask from "./Mask";

function Dock({ view }) {
  const { page, type } = view;
  const [data, setData] = useState(PRODUCT_DATA[view.type].pages.subpages[view.page].dock);

  useEffect(() => {
    view.setDock(data[0]);
  }, []);

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
        <Item item={item} index={index} key={index} view={view} />
      ))}
    </div>
  );
}

function Item({ item, index, view }) {
  const [hovered, setHovered] = useState(false);
  const [state, setState] = useState("inactive");

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    view.setDock(item);
  };

  useEffect(() => {
    if (hovered || view.dock.id === item.id) {
      setState("active");
    } else {
      setState("inactive");
    }
  }, [view.dock, hovered]);

  return (
    <>
      <a
        className={`dock--item dock--item__${state} dock--item__${state}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}>
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
