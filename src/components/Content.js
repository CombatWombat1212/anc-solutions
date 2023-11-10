import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import Selection from "../pages/Selection";
import Schematic from "../pages/Schematic";
import Sizes from "../pages/Sizes";
import Paper from "../pages/Paper";
import Dock from "./Dock";
import DOCK_DATA from "../data/DOCK_DATA";

function Content({ view }) {
  const { page, pageRef } = view;

  const DOCK_PAGES = Object.keys(DOCK_DATA);
  const [show, setShow] = useState(DOCK_PAGES.includes(page));

  useEffect(() => {
    setShow(DOCK_PAGES.includes(page));
  }, [page]);

  return (
    <>
      <div className={`viewer--content content ${page}`} ref={pageRef}>
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

      <div className={`content--inner ${page}--inner`}>
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
    </>
  );
}

export default Content;
