// ViewProvider.js
import React, { useState, useRef } from 'react';
import { ViewContext } from './viewContext';

const ViewProvider = ({ children }) => {

    const [hoveredSideBtn, setHoveredSideBtn] = useState(false);
    const [page, setPage] = useState("selection");
    const [pageType, setPageType] = useState(false);
    const [dockType, setDockType] = useState(false);
    const [dockStats, setDockStats] = useState(false);
    const [dockActiveObj, setDockActiveObj] = useState(false);
    const pageRef = useRef(null);
    const [pageLoading, setPageLoading] = useState(true);
    const [previousPage, setPreviousPage] = useState({page: "selection", type: false});


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

        // hoveredSideBtn: hoveredSideBtn,
        pageRef: pageRef,
        
        side:{
            active: hoveredSideBtn,
            setActive: setHoveredSideBtn,
        },
    
    }



    return (
        <ViewContext.Provider value={view}>
            {children}
        </ViewContext.Provider>
    );
};

export default ViewProvider;
