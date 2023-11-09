import { useEffect, useRef, useState } from "react";
import Graphic from "../components/Graphic";
import SCHEMATIC_IMGS from "../data/SCHEMATIC_IMGS";
import SVG from "react-inlinesvg";
import PRODUCT_DATA from "../data/PRODUCT_DATA";

function Schematic({ view }) {
  const img = SCHEMATIC_IMGS[view.type];
  const options = PRODUCT_DATA[view.type].pages.schematic.options;

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

  //   TODO: fix fonts as well

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
    if (!components || view.hoveredSideBtn === undefined || !ready) return;

    console.log(components);

    Object.keys(components).forEach((key) => {
      const componentId = options[key].id;
      const query = Array.from(graphic.current.querySelectorAll(`[id*='${componentId}']`));
      query.forEach((element) => {
        if (view.hoveredSideBtn === false) {
          element.classList.add("schematic--vector__idle");
          element.classList.remove("schematic--vector__hidden");
          element.classList.remove("schematic--vector__active");
        } else {
          if (!components[view.hoveredSideBtn]) {
            return;
          }

          if (components[view.hoveredSideBtn].includes(element)) {
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
  }, [ready, components, view.hoveredSideBtn]);

  return (
    <>
      <SVG
        className={`schematic--graphic schematic--graphic__${ready ? "ready" : "loading"}`}
        src={img.src}
        width={img.height / 2}
        height={img.width / 2}
        innerRef={graphic}
        onLoad={handleSvgLoad}
      />
    </>
  );
}

export default Schematic;