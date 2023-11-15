import { useEffect, useRef, useState } from "react";
import PRODUCT_DATA, { PAGE_DATA } from "../data/PRODUCT_DATA";
import { H1, H2 } from "./Text";
import useHoverAndFocus from "../scripts/hooks/useHoverAndFocus";
import { HARDCODED_PAGES } from "../data/LAYOUT_DATA";
import useAttrObserver from "../scripts/hooks/useAttrObserver";

function Sidebar({ view }) {
  const [panels, setPanels] = useState([]);

  let optionArray = [];

  // if(view.type){
  //   optionArray = Object.values(PRODUCT_DATA[view.type].pages).filter((x) => x.level == "sub");
  // } else {
  //   optionArray = Object.values(PRODUCT_DATA).map((x) => x.pages.selection);
  // }

  if (!view.type) {
    optionArray = Object.values(PRODUCT_DATA).map((x) => x.pages.selection);
  } else {
    const options = Object.values(PAGE_DATA).filter((page) => HARDCODED_PAGES[view.type].includes(page.id));
    optionArray = (() => {
      const options = Object.values(PAGE_DATA).filter((page) => HARDCODED_PAGES[view.type].includes(page.id));

      // harded coded name change for blunt, should be done a better way but good for launch
      if (view.type === "blunt") {
        return options.map((option) => {
          if (option.id === "paper") {
            return { ...option, title: "Wrap Type" };
          }
          return option;
        });
      }

      return options;
    })();
  }

  useEffect(() => {
    if (!panels.length > 0) return;
    const hoveredPanels = panels.filter((p) => p.hovered);
    if (hoveredPanels.length === 1) {
      view.side.setActive(hoveredPanels[0].option.id);
    } else {
      view.side.setActive(false);
    }
  }, [panels]);

  const schematic = view.page == "schematic";







  // const sidebar = useRef(null);
  // const mousePosition = useMousePosition();
  // const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   if (!panels || panels.length === 0) return;
  
  //   const checkIfPanelsAreHovered = () => {
  //     const hoveredPanel = panels.find(panel => {
  //       if (!panel.ref.current) return false;
  //       const rect = panel.ref.current.getBoundingClientRect();
  //       return mousePosition.x >= rect.left &&
  //              mousePosition.x <= rect.right &&
  //              mousePosition.y >= rect.top &&
  //              mousePosition.y <= rect.bottom;
  //     });
  
  //     if (hoveredPanel) {
  //       console.log(`Hovered Panel:`, hoveredPanel);
  //       setIsHovered(true);
  //     } else {
  //       setIsHovered(false);
  //     }
  //   };
  
  //   checkIfPanelsAreHovered();
  // }, [mousePosition, panels, view.page, view.type]);
    
  // useEffect(() => {
  //   console.log(`isHovered: ${isHovered}`);
  // }, [isHovered]);



  return (
    <div className="viewer--sidebar sidebar"
    //  ref={sidebar}
     >
      <Title view={view} />
      {optionArray.map((option, i) => {
        return <Panel key={i} option={option} view={view} panels={panels} setPanels={setPanels} />;
      })}

      {schematic && <Back view={view} />}
    </div>
  );
}

function Title({ view }) {
  const copy =
    view.type && typeof view.type === "string"
      ? view.type
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ")
      : "Pre-Rolls";

  return (
    <div className="sidebar--title sidebar--panel">
      <H1>{copy}</H1>
    </div>
  );
}


// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState({ x: null, y: null });

//   useEffect(() => {
//     const updateMousePosition = (ev) => {
//       setMousePosition({ x: ev.clientX, y: ev.clientY });
//     };

//     window.addEventListener('mousemove', updateMousePosition);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//     };
//   }, []);

//   return mousePosition;
// };



function Panel({ view, option, setPanels }) {
  const panelRef = useRef(null);
  const hovered = useHoverAndFocus(panelRef);
  const optionId = useAttrObserver(panelRef, 'data-option-id', {bool:false});

  useEffect(() => {
    const panel = {
      ref: panelRef,
      hovered: hovered,
      option: option,
    };
    setPanels((prevPanels) => {
      const otherPanels = prevPanels.filter((p) => p.ref.current !== panelRef.current);
      return [...otherPanels, panel];
    });
  }, [hovered,optionId]);

  const schematic = view.page == "schematic" ? "schematic" : "other";

  const handleClick = () => {
    if (view.page == "schematic") return;

    const page = view.type && option[view.type] ? option[view.type].link.page : option.link.page;
    const type = view.type && option[view.type] ? option[view.type].link.type : option.link.type;

    view.setPage(page);
    view.setType(type);
  };

  useEffect(() => {
    const dock = PRODUCT_DATA[view.type]?.pages?.subpages?.[view.page]?.dock;
    if (dock && dock.length > 0) {
      view.setDock(dock[0].id);
    }
  }, [view.page, view.type]);

  const title = option.title.long || option.title.short || option.title;
  const ind = String(option.index + 1).padStart(2, "0");





  return (
    <a className={`sidebar--panel sidebar--button sidebar--button__${schematic}`} ref={panelRef} onClick={handleClick} 
    data-option-id={option.id}
    >
      <H2 className="sidebar--index">{ind}</H2>
      <H2 className="sidebar--name">{title}</H2>
    </a>
  );
}

function Back({ view }) {
  const handleClick = () => {
    view.setPage("selection");
    view.setType(false);
  };

  return (
    <a className={`sidebar--panel sidebar--button sidebar--back`} onClick={handleClick}>
      <H2 className="sidebar--name">Back</H2>
    </a>
  );
}

export default Sidebar;
