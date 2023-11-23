// ViewProvider.js
import React, { useState, useRef, useEffect } from "react";
import { ViewContext } from "./viewContext";
import useDelayedProps from "../hooks/useDelayedProps";

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
    let timer;
  
    if (!pageLoading) {
      // Set a timer to update pageReady to true after 250ms
      timer = setTimeout(() => {
        setPageReady(true);
      }, 250);
    } else {
      // If pageLoading is true, set pageReady to false and clear any existing timer
      setPageReady(false);
      if (timer) {
        clearTimeout(timer);
      }
    }
  
    // Clean up the timer when the component unmounts or if pageLoading changes
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [pageLoading]);


  useEffect(() => {
    console.log(pageLoading);
  }, [pageLoading]);
  


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
    // setPageReady: setPageReady,

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
