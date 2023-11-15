import { useEffect, useRef, useState } from "react";
import Graphic from "../components/Graphic";
import SCHEMATIC_IMGS from "../data/SCHEMATIC_IMGS";
import SVG from "react-inlinesvg";
import PRODUCT_DATA, { PAGE_DATA } from "../data/PRODUCT_DATA";
import { HARDCODED_PAGES } from "../data/LAYOUT_DATA";

function Schematic({ view }) {
  const img = SCHEMATIC_IMGS[view.type];
  // const options = Object.values(PRODUCT_DATA[view.type].pages).filter((x) => x.level == "sub");
  const options = Object.values(PAGE_DATA).filter(page => HARDCODED_PAGES[view.type].includes(page.id));


  const [components, setComponents] = useState(false);
  const [ready, setReady] = useState(false);

  const graphic = useRef(null);

  const handleSvgLoad = () => {
    const svg = graphic.current;

    let elements = {};

    Object.keys(options).forEach((key) => {
      const componentId = options[key].id;
      const query = Array.from(svg.querySelectorAll(`[id*='${componentId}']`));
      elements[componentId] = query;
    });


    setComponents(elements);

  };

  useEffect(() => {
    if (!components) return;

    Object.values(components).forEach((value) => {
      value.forEach((element) => {
        element.classList.add("schematic--vector");
      });
    });

    const getElemByIdContaining = (keyword) => {
      let elements = [];
      Object.values(components).forEach((value) => {
        value.forEach((element) => {
          if (!element.id.includes(keyword)) return;
          elements.push(element);
        });
      });
      return elements;
    };

    const titles = getElemByIdContaining("title");
    const bodies = getElemByIdContaining("body");

    titles.forEach((title) => {
      title.classList.add("viewer--h2");
    });
    bodies.forEach((body) => {
      body.classList.add("viewer--body");
    });

    setReady(true);
  }, [components]);


  


  useEffect(() => {
    if (!components || !ready) return;
  
    Object.keys(components).forEach((key) => {
      const query = Array.from(graphic.current.querySelectorAll(`[id*='${key}']`));
  
      query.forEach((element) => {
        element.classList.add("schematic--vector__idle");
        element.classList.remove("schematic--vector__hidden");
        element.classList.remove("schematic--vector__active");
      });
    });
  }, [ready, components]);
  


  useEffect(() => {
    if (!components || view.hoveredSideBtn === undefined || !ready) return;
  
    Object.keys(components).forEach((key) => {
      const page = options.find((x) => x.id === key);
      const componentId = page.id;
      const query = Array.from(graphic.current.querySelectorAll(`[id*='${componentId}']`));
  
      query.forEach((element) => {
        if (view.hoveredSideBtn === false) {
          element.classList.add("schematic--vector__idle");
          element.classList.remove("schematic--vector__hidden");
          element.classList.remove("schematic--vector__active");
        } else {
          if (components[view.hoveredSideBtn] && components[view.hoveredSideBtn].includes(element)) {
            element.classList.add("schematic--vector__active");
            element.classList.remove("schematic--vector__hidden");
            element.classList.remove("schematic--vector__idle");
          } else {
            element.classList.add("schematic--vector__hidden");
            element.classList.remove("schematic--vector__active");
            element.classList.remove("schematic--vector__idle");
          }
        }
      });
    });
  }, [view.hoveredSideBtn, components, ready]);
  


  // useEffect(() => {

  //   // if (!components || view.hoveredSideBtn === undefined || !ready) return;
  //   if (!components || view.hoveredSideBtn === undefined || !ready) return;

  //   console.log(view.hoveredSideBtn);

  //   Object.keys(components).forEach((key) => {
  //     const page = options.find((x) => x.id === key);
  //     const componentId = page.id;
  //     const query = Array.from(graphic.current.querySelectorAll(`[id*='${componentId}']`));

  //     query.forEach((element) => {
  //       if (view.hoveredSideBtn === false) {
  //         element.classList.add("schematic--vector__idle");
  //         element.classList.remove("schematic--vector__hidden");
  //         element.classList.remove("schematic--vector__active");
  //       } else {
  //         if (!components[view.hoveredSideBtn]) {
  //           return;
  //         }

  //         if (components[view.hoveredSideBtn].includes(element)) {
  //           element.classList.add("schematic--vector__active");
  //           element.classList.remove("schematic--vector__hidden");
  //           element.classList.remove("schematic--vector__idle");
  //         } else {
  //           element.classList.add("schematic--vector__hidden");
  //           element.classList.remove("schematic--vector__active");
  //           element.classList.remove("schematic--vector__idle");
  //         }
  //       }
  //     });
  //   });

    
  // }, [ready, components, view.hoveredSideBtn]);




  return (
    <>
      {img && <SVG
        className={`schematic--graphic schematic--graphic__${ready ? "ready" : "loading"}`}
        src={img.src}
        width={img.height}
        height={img.width}
        innerRef={graphic}
        onLoad={handleSvgLoad}
      />}
    </>
  );
}

export default Schematic;
