import { useEffect, useRef, useState } from "react";
import Graphic from "../components/Graphic";
import SCHEMATIC_IMGS from "../data/SCHEMATIC_IMGS";
import SVG from "react-inlinesvg";
import PRODUCT_DATA, { PAGE_DATA } from "../data/PRODUCT_DATA";
// import { HARDCODED_PAGES } from "../data/LAYOUT_DATA";
import { SelectionHead } from "./Selection";

function Schematic({ view }) {
  const img = SCHEMATIC_IMGS[view.type];
  const options = Object.values(PRODUCT_DATA[view.type].pages).filter((x) => x.level == "sub");
  // const options = Object.values(PAGE_DATA).filter((page) => HARDCODED_PAGES[view.type].includes(page.id));

  const [components, setComponents] = useState(false);
  const [loaded, setLoaded] = useState(false);

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

    setLoaded(true);
  }, [components]);

  // const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    if (!components || !loaded) return;

    const processComponents = new Promise((resolve) => {
      Object.keys(components).forEach((key) => {
        const query = Array.from(graphic.current.querySelectorAll(`[id*='${key}']`));

        query.forEach((element) => {
          element.classList.add("schematic--vector__idle");
          element.classList.remove("schematic--vector__hidden");
          element.classList.remove("schematic--vector__active");
        });
      });
      resolve();
    });

    processComponents.then(() => {
      // TODO: this could be better, i think if you made the transition time 0 and then only made it 200ms after the svg loaded, it would work
      setTimeout(() => {
        // setSvgLoaded(true);
        view.setPageLoading(false);
      }, 100);
    });
  }, [loaded, components]);

  useEffect(() => {
    if (!components || view.side.active === undefined || !loaded) return;

    Object.keys(components).forEach((key) => {
      const page = options.find((x) => x.id === key);
      const componentId = page.id;
      const query = Array.from(graphic.current.querySelectorAll(`[id*='${componentId}']`));

      query.forEach((element) => {
        if (view.side.active === false) {
          element.classList.remove("schematic--vector__hidden");
          element.classList.remove("schematic--vector__active");
          element.classList.add("schematic--vector__idle");
        } else {
          if (components[view.side.active] && components[view.side.active].includes(element)) {
            element.classList.remove("schematic--vector__hidden");
            element.classList.remove("schematic--vector__idle");
            element.classList.add("schematic--vector__active");
          } else {
            element.classList.remove("schematic--vector__active");
            element.classList.remove("schematic--vector__idle");
            element.classList.add("schematic--vector__hidden");
          }
        }
      });
    });
  }, [view.side.active, components, loaded]);




  return (
    <>
    <SelectionHead type={PRODUCT_DATA[view.type]} active={view.type} className="schematic--head"/>
      {img && (
        <SVG
          className={`schematic--graphic schematic--graphic__${loaded ? "loaded" : "loading"}`}
          // style={transitionStyle}
          src={img.src}
          width={img.height}
          height={img.width}
          innerRef={graphic}
          onLoad={handleSvgLoad}
        />
      )}
    </>
  );
}

export default Schematic;
