import React, { useState, useEffect } from "react";

// Hook to calculate the bounding box
const useConnectingLine = ({ start, end }) => {
    const [box, setBox] = useState({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      startWidth: 0,
      startHeight: 0,
      endWidth: 0,
      endHeight: 0,
    });
  
    const updateBoundingBox = () => {
      if (start.current && end.current) {
        const startRect = start.current.getBoundingClientRect();
        const endRect = end.current.getBoundingClientRect();
  
        // Get positions
        const top = Math.min(startRect.top, endRect.top);
        const left = Math.min(startRect.left, endRect.left);
        const right = Math.max(startRect.right, endRect.right);
        const bottom = Math.max(startRect.bottom, endRect.bottom);
  
        // Set the bounding box state including the size of start and end elements
        setBox({
          top,
          left,
          width: right - left,
          height: bottom - top,
          startWidth: startRect.width,
          startHeight: startRect.height,
          endWidth: endRect.width,
          endHeight: endRect.height,
        });
      }
    };
  
    useEffect(() => {
      // Initial update
      updateBoundingBox();
  
      // Add event listeners for resize and scroll events
      window.addEventListener("resize", updateBoundingBox);
      window.addEventListener("scroll", updateBoundingBox);
  
      // Cleanup event listeners when the component is unmounted
      return () => {
        window.removeEventListener("resize", updateBoundingBox);
        window.removeEventListener("scroll", updateBoundingBox);
      };
    }, [start, end]); // Add refs to the dependency array to update if they change
  
    return box;
  };
// Component to render the bounding box
const BoundingBox = ({ startRef, endRef }) => {

  const {
    top,
    left,
    width,
    height,
    startWidth,
    startHeight,
    endWidth,
    endHeight,
  } = useConnectingLine({ start: startRef, end: endRef });

  return (
    <div
      className="connecting-line"
      style={{
        "--box-top": `${top}px`,
        "--box-left": `${left}px`,
        "--box-width": `${width}px`,
        "--box-height": `${height}px`,
        "--start-width": `${startWidth}px`,
        "--start-height": `${startHeight}px`,
        "--end-width": `${endWidth}px`,
        "--end-height": `${endHeight}px`,

      }}
    />
  );
};

export { BoundingBox };

export default useConnectingLine;
