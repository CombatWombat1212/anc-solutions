import { useEffect, useRef, useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";


function Viewer() {


    const [hoveredSideBtn, setHoveredSideBtn] = useState(false);
    const [page, setPage] = useState("selection");
    const [pageType, setPageType] = useState(false);
    const [dockType, setDockType] = useState(false);
    const [dockStats, setDockStats] = useState(false);
    const [dockActiveObj, setDockActiveObj] = useState(false);
    const pageRef = useRef(null);


    const view = {

        page: page,
        setPage: setPage,
        type: pageType,
        setType: setPageType,
        dock: dockType,
        setDock: setDockType,
        dockStats: dockStats,
        setDockStats: setDockStats,
        dockActiveObj: dockActiveObj,
        setDockActiveObj: setDockActiveObj,

        hoveredSideBtn: hoveredSideBtn,
        pageRef: pageRef,
        
        side:{
            active: hoveredSideBtn,
            setActive: setHoveredSideBtn,
        },
    
    }




  return (
    <div className="viewer">
      <Sidebar view={view} />
      <Content view={view} />
    </div>
  );
}



export default Viewer;
