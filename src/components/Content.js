import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import RollTypes from "../pages/RollTypes";
import Schematic from "../pages/Schematic";

function Content({ view }) {
  const { page, pageRef } = view;

  return (
    <>
      <div className={`viewer--content content ${page}`} ref={pageRef}>
        <Inner view={view} />
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
  return <>
  {view.page == "roll-types" && <RollTypes view={view} />}
  {/* {view.page == "schematic" && <Schematic view={view} />} */}
  </>;
}

export default Content;
