import { useState } from "react";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import Content from "./Content";
import Sidebar from "./Sidebar";
const { ROLL_TYPES } = PRODUCT_DATA;




function Viewer() {


    const [hovered, setHovered] = useState(false);

    const [page, setPage] = useState("roll-types");
    const view = {
        page: page,
        setPage: setPage,
    }




  return (
    <div className="viewer">
      <Sidebar view={view} />
      <Content view={view} />
    </div>
  );
}



export default Viewer;
