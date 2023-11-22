import { useEffect, useRef, useState } from "react";
import Graphic from "../components/Graphic";
import { Body, Label1 } from "../components/Text";
import SIZES_IMGS from "../data/SIZES_IMGS";

import SVG from "react-inlinesvg";
import { useGraphicLoadManager, useGraphicLoadTracker } from "../scripts/hooks/useGraphicLoadManager";
import { useSpring, useTransition, animated } from '@react-spring/web';



function Sizes({ view }) {
  const imgs = Object.values(SIZES_IMGS[view.type]);

  const { graphicContainerProps } = useGraphicLoadManager(view, { count: imgs.length });


  useEffect(() => {
    console.log(view.pageLoading);
  }, [view.pageLoading]);

  
  return (
    <>
      <div className="sizes--body">
      {imgs.map((img, i) => {
  return <Item imgs={imgs} index={i} key={i} view={view} {...graphicContainerProps} />;
})}
        <div className="sizes--background">
          <Label1 className="sizes--background-label sizes--background-label__x">Grams</Label1>
          <Label1 className="sizes--background-label sizes--background-label__y">Length</Label1>
        </div>
      </div>
    </>
  );
}

function Item({ imgs, index, view, ...props }) {
  const img = imgs[index];
  const columns = imgs.length;

  const { graphicElementProps } = useGraphicLoadTracker(props, { index: index });

  const springStyle = useSpring({
    from: { opacity: 0, transform: 'translateX(-1rem)' },
    to: { opacity: view.pageReady ? 1 : 0, transform: view.pageReady ? 'translateX(0)' : 'translateX(-1rem)' },
    delay: index * 100, // Delay each item slightly
  });

  return (
    <animated.div
      className="sizes--col"
      style={{
        ...springStyle,
        "--img-src": img.src,
        "--sizes-columns": columns,
        "--graphic-width": img.width,
        "--graphic-height": img.height,
      }}>
      <SVG className={`sizes--graphic`} src={img.src} width={img.width} height={img.height} {...graphicElementProps} />
      <Brace img={img} />
    </animated.div>
  );
}

function Brace({ img }) {
  return (
    <div className="sizes--brace-wrapper">
      <div className="sizes--brace" />
      <div className="sizes--brace-line" />
      <div className="sizes--brace-dot" />
      <Body className="sizes--brace-label">{img.label}</Body>
    </div>
  );
}

export default Sizes;
