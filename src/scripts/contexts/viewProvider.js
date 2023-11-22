// ViewProvider.js
import React, { useState, useRef, useEffect } from "react";
import { ViewContext } from "./viewContext";

const ViewProvider = ({ children }) => {
  const [hoveredSideBtn, setHoveredSideBtn] = useState(false);
  const [page, setPage] = useState("selection");
  const [pageType, setPageType] = useState(false);
  const [dockType, setDockType] = useState(false);
  const [dockStats, setDockStats] = useState(false);
  const [dockActiveObj, setDockActiveObj] = useState(false);
  const pageRef = useRef(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageReady, setPageReady] = useState(false);
  const [previousPage, setPreviousPage] = useState({ page: "selection", type: false });

  useEffect(() => {
    let timeoutId;

    if (pageLoading) {
        // Set pageReady to true after 250ms if pageLoading is true
        timeoutId = setTimeout(() => setPageReady(true), 250);
    } else if (!pageLoading && pageReady) {
        // Set pageReady to false after 250ms if pageLoading is false
        timeoutId = setTimeout(() => setPageReady(false), 250);
    }

    return () => clearTimeout(timeoutId); // Cleanup the timeout if the component unmounts
}, [pageLoading]); // Dependency array



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

    pageLoading: pageLoading,
    setPageLoading: setPageLoading,

    pageReady: pageReady,
    setPageReady: setPageReady,

    // hoveredSideBtn: hoveredSideBtn,
    pageRef: pageRef,

    side: {
      active: hoveredSideBtn,
      setActive: setHoveredSideBtn,
    },
  };

  return <ViewContext.Provider value={view}>{children}</ViewContext.Provider>;
};

export default ViewProvider;
