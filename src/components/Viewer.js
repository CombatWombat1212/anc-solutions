import { useRef, useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import Content from "./Content";
import Sidebar from "./Sidebar";
const { ROLL_TYPES } = PRODUCT_DATA;




function Viewer() {


    const [hoveredSideBtn, setHoveredSideBtn] = useState(false);
    

    const [page, setPage] = useState("selection");
    const [pageType, setPageType] = useState("none");


    const pageRef = useRef(null);


    const view = {

        page: page,
        setPage: setPage,
        type: pageType,
        setType: setPageType,

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
