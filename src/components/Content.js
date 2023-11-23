import { useContext, useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import Selection from "../pages/Selection";
import Schematic from "../pages/Schematic";
import Sizes from "../pages/Sizes";
// import Paper from "../pages/Paper";
import Dock from "./Dock";
import DOCK_DATA from "../data/DOCK_DATA";
import { Body, H2, H3, Label2 } from "./Text";
// import Filter from "../pages/Filter";
import LAYOUT_DATA from "../data/LAYOUT_DATA";
// import End from "../pages/End";
import Compaction from "../pages/Compaction";
import Split from "../pages/Split";
import { ViewContext } from "../scripts/contexts/viewContext";

function Content({ view }) {
  const { page, pageRef } = view;

  const DOCK_PAGES = Object.keys(DOCK_DATA);
  const [show, setShow] = useState(DOCK_PAGES.includes(page));

  useEffect(() => {
    setShow(DOCK_PAGES.includes(page));
  }, [page]);

  return (
    <>
      <div
        className={`viewer--content content ${page}`}
        ref={pageRef}
        style={{
          "--content-has-dock": show ? 1 : 0,
        }}>
        <Inner view={view} />

        {show && <Dock view={view} />}
      </div>
    </>
  );
}

function Inner({ view }) {
  const { page, pageLoading } = view;
  const isSplit = LAYOUT_DATA.split.includes(page);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(pageLoading);
    }, 50);
  }, [pageLoading]);

  return (
    <>
      <div
        className={`content--inner ${page}--inner ${isSplit ? "content--inner__split" : ""}
      
      content--inner__${pageLoading ? "loading" : "loaded"}
      `}>
        <Page view={view} />
      </div>
    </>
  );
}

function Page({ view }) {
  const split = LAYOUT_DATA.split.includes(view.page);
  const type = LAYOUT_DATA.specialty.includes(view.page) ? "specialty" : "default";

  return (
    <>
      {view.page == "selection" && <Selection view={view} />}
      {view.page == "schematic" && <Schematic view={view} />}
      {view.page == "sizes" && <Sizes view={view} />}
      {view.page == "compaction" && <Compaction view={view} />}

      {split && <Split view={view} type={type} />}
    </>
  );
}

function getType(type) {
  let split = false;
  let specialty = false;

  if (type == "split") split = true;
  if (type == "specialty") specialty = true;
  if (typeof type == "object") {
    split = type.split || false;
    specialty = type.specialty || false;
  }

  return {
    split,
    specialty,
  };
}

function ContentModal({ pref = false, title, children, className, reference = null, type = "default" }) {
  const { split, specialty } = getType(type);

  const lists = {
    body: ["content--body"],
    title: ["content--title"],
    modal: ["content--modal"],
  };

  const classes = Object.keys(lists).reduce((acc, key) => {
    const list = lists[key];
    if (pref) list.push(`${pref}--${key}`);
    if (split) list.push(`${list[0]}__split`);
    if (specialty) list.push(`${list[0]}__specialty`);
    acc[key] = list.join(" ");
    return acc;
  }, {});

  return (
    <div className={classes.body}>
      <div className={classes.title}>
        <H3>{title}</H3>
      </div>
      <div className={classes.modal} ref={reference}>
        {children}
      </div>
    </div>
  );
}

function ContentVisual({ children, className, type = "default" }) {
  const { split, specialty } = getType(type);

  const list = ["content--visual"];
  if (className) list.push(className);
  if (split) list.push("content--visual__split");
  if (specialty) list.push("content--visual__specialty");
  const classes = list.join(" ");

  return (
    <>
      <div className={classes}>{children}</div>
    </>
  );
}

function Stat({ stat, className, index }) {
  return (
    <div className={`paper--stat paper--stat__${stat.type} ${className}`}>
      <H2 className="paper--h2">{stat.title}</H2>
      {stat.description && <Description stat={stat} />}
      {stat.bar && <Bar stat={stat} index={index} />}
    </div>
  );
}

function Description({ stat }) {
  return <Body className={"paper--description"}>{stat.description}</Body>;
}

function Bar({ stat, index }) {
  const view = useContext(ViewContext);

  const delay = index * 100;


  return (
    <div
      className="bar--wrapper"
      style={{
        "--bar-value": stat.bar.value,
        "--bar-value_percent": `${!view.pageLoading ? stat.bar.value : 0}%`,
        "--bar-label-count": stat.bar.labels.length,
        "--bar-transition-delay": delay + "ms",
      }}>
      <div className="bar">
        <div className="bar--value"></div>
      </div>
      <div className="bar--x">
        {stat.bar.labels.map((label, index) => (
          // <div className="bar--label" key={index}>
            <div className="bar--notch">{/* <Label2 className="bar--text">{label}</Label2> */}</div>
          // </div>
        ))}
      </div>
      <div className="bar--label">
        {[stat.bar.labels[0], stat.bar.labels[stat.bar.labels.length - 1]].map((label, index) => (
          <Label2 className="bar--text">{label}</Label2>
        ))}
      </div>
    </div>
  );
}

export { ContentVisual, ContentModal, Stat, Description, Bar };

export default Content;
