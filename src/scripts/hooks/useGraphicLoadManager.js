import { useEffect, useRef, useState } from "react";

function useGraphicLoadManager(view, { count = 0, dependent = true, set = null } = {}) {
  const [loaded, setLoaded] = useState(false);
  const [graphics, setGraphics] = useState([]);

  useEffect(() => {
    if (graphics.length === count) {
      const allGraphicsLoaded = graphics.reduce((allLoaded, graphic) => {
        return allLoaded && graphic.loaded;
      }, true);

      // Set 'loaded' to true only if all graphics are loaded and 'dependent' is true
      // if (allGraphicsLoaded && dependent) {
      //   setLoaded(true);
      // } else {
      //   setLoaded(false);
      // }
      setLoaded(allGraphicsLoaded && dependent);
    } else {
      setLoaded(false);
    }
  }, [graphics, count, dependent]); // Include 'dependent' in the dependency array

  useEffect(() => {
    if (!loaded) return;
    if (!set) view.setPageLoading(false);
    else set(false);

    return () => {
      if (set) set(true);
    };
  }, [loaded]);

  return {
    loaded,
    setLoaded,
    graphics,
    setGraphics,

    graphicContainerProps: {
      setGraphics: setGraphics,
    },
  };
}

// function useGraphicLoadTracker(graphicContainerProps, { index = 0 } = {}) {
function useGraphicLoadTracker(graphicContainerProps, { key = 0, dependent = true } = {}) {
  const { setGraphics } = graphicContainerProps;

  const [graphicLoaded, setGraphicLoaded] = useState(false);
  const [graphicReady, setGraphicReady] = useState(false);

  const graphicRef = useRef(null);

  const handleTrackerLoad = (e) => {
    setGraphicLoaded(true);
  };

  useEffect(() => {
    if (!dependent) return;
    if (!graphicLoaded) return;
    setGraphicReady(true);
  }, [graphicLoaded, dependent]);

  useEffect(() => {
    setGraphicReady(false);
    setGraphicLoaded(false);
    setGraphics([]);
  }, [key]);

  useEffect(() => {
    const graphic = {
      ref: graphicRef,
      loaded: graphicReady,
      key: key,
    };
    setGraphics((prevGraphics) => {
      const otherGraphics = prevGraphics.filter((m) => m.ref.current !== graphicRef.current || m.key !== key);
      return [...otherGraphics, graphic];
    });
  }, [graphicReady]);

  return {
    graphicLoaded: graphicReady,
    graphicRef,
    handleTrackerLoad,
    graphicElementProps: {
      innerRef: graphicRef,
      onLoad: handleTrackerLoad,
    },
  };
}

export { useGraphicLoadManager, useGraphicLoadTracker };
