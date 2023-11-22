import { useEffect, useRef, useState } from "react";

function useGraphicLoadManager(view, { count = 0 } = {}) {
    const [loaded, setLoaded] = useState(false);
    const [graphics, setGraphics] = useState([]);
  
    useEffect(() => {
      if (graphics.length === count) {
        const allLoaded = graphics.reduce((allLoaded, graphic) => {
          return allLoaded && graphic.loaded;
        }, true);
        setLoaded(allLoaded);
      } else {
        setLoaded(false);
      }
    }, [graphics, count]);
  
    useEffect(() => {
      if (!loaded) return;
      view.setPageLoading(false);
    }, [loaded]);
  
    return {
      loaded,
      setLoaded,
      graphics,
      setGraphics,
  
      graphicContainerProps: {
        // graphics: graphics,
        setGraphics: setGraphics,
        // view: view,
      },
    };
  }
  
  function useGraphicLoadTracker(graphicContainerProps, { index = 0 } = {}) {
    const { setGraphics } = graphicContainerProps;
  
    const [graphicLoaded, setGraphicLoaded] = useState(false);
    const graphicRef = useRef(null);
  
    const handleLoad = (e) => {
      setGraphicLoaded(true);
    };
  
    useEffect(() => {
      const graphic = {
        ref: graphicRef,
        loaded: graphicLoaded,
        index: index,
      };
      setGraphics((prevGraphics) => {
        const otherGraphics = prevGraphics.filter((m) => m.ref.current !== graphicRef.current || m.index !== index);
        return [...otherGraphics, graphic];
      });
    }, [graphicLoaded]);
  
    return {
      graphicLoaded,
      graphicRef,
      handleLoad,
      graphicElementProps: {
        innerRef: graphicRef,
        onLoad: handleLoad,
      },
    };
  }
  

  
  export {useGraphicLoadManager, useGraphicLoadTracker};