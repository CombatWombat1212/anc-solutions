import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import Selection from "../pages/Selection";
import Schematic from "../pages/Schematic";
import Sizes from "../pages/Sizes";
import Paper from "../pages/Paper";
import Dock from "./Dock";
import DOCK_DATA from "../data/DOCK_DATA";
import { Body, H2, H3, Label2 } from "./Text";
import Filter from "../pages/Filter";
import LAYOUT_DATA from "../data/LAYOUT_DATA";
import End from "../pages/End";
import Compaction from "../pages/Compaction";

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
  const { page } = view;

  // const one = useRef(null);
  // const two = useRef(null);

  const isModal = LAYOUT_DATA.modal.includes(page);

  return (
    <>
      {/* <BoundingBox startRef={one} endRef={two}/>

      <div>
        <p ref={one}>rtest</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /><br /><p ref={two}>asdiojasidojhasiuhdiuashd</p>
      </div> */}

      <div className={`content--inner ${page}--inner ${isModal ? "content--inner__split" : ""}`}>
        <Page view={view} />
      </div>
    </>
  );
}

function Page({ view }) {
  return (
    <>
      {view.page == "selection" && <Selection view={view} />}
      {view.page == "schematic" && <Schematic view={view} />}
      {view.page == "sizes" && <Sizes view={view} />}
      {view.page == "paper" && <Paper view={view} />}
      {view.page == "filter" && <Filter view={view} />}
      {view.page == "end" && <End view={view} />}
      {view.page == "compaction" && <Compaction view={view} />}
    </>
  );
}

function ContentModal({ pref = false, title, children, className, reference = null, type = "default" }) {

  

  let split = false;
  if (type == "split") split = true;

  const lists = {
    body: ["content--body"],
    title: ["content--title"],
    modal: ["content--modal"],
  }

  const classes = Object.keys(lists).reduce((acc, key) => {
    const list = lists[key];
    if(pref) list.push(`${pref}--${key}`);
    if(split) list.push(`${list[0]}__split`);
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
  
  
  let split = false;
  if (type == "split") split = true;
  const list = ["content--visual"];
  if(className) list.push(className);
  if(split) list.push("content--visual__split");
  const classes = list.join(" ");

  
  return (
    <>
      <div className={classes}>{children}</div>
    </>
  );
}

function Stat({ stat, className }) {
  return (
    <div className={`paper--stat paper--stat__${stat.type} ${className}`}>
      <H2 className="paper--h2">{stat.title}</H2>
      {stat.description && <Description stat={stat} />}
      {stat.bar && <Bar stat={stat} />}
    </div>
  );
}

function Description({ stat }) {
  return <Body className={"paper--description"}>{stat.description}</Body>;
}

function Bar({ stat }) {
  return (
    <div
      className="bar--wrapper"
      style={{
        "--bar-value": stat.bar.value,
        "--bar-value_percent": stat.bar.value + "%",
        "--bar-label-count": stat.bar.labels.length,
      }}>
      <div className="bar">
        <div className="bar--value"></div>
      </div>
      <div className="bar--x">
        {stat.bar.labels.map((label, index) => (
          <div className="bar--label" key={index}>
            <div className="bar--notch">
              <Label2 className="bar--text">{label}</Label2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ContentVisual, ContentModal, Stat, Description, Bar };

export default Content;
