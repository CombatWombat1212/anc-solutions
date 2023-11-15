import { useContext, useEffect, useRef, useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { ViewContext } from "../scripts/contexts/viewContext";

function Viewer() {

  const view = useContext(ViewContext);

  return (
      <div className="viewer">
        <Sidebar view={view} />
        <Content view={view} />
      </div>
  );
}

export default Viewer;
