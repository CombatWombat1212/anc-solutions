import { useState, useEffect, useRef } from "react";

const useAttrObserver = (ref, propertyName, options = {}) => {
  const { bool = true } = options;
  const [state, setState] = useState(false);

  const handlePropertyValue = (propertyValue) => {
    if (bool) {
      setState(propertyValue === "true");
    } else {
      setState(propertyValue);
    }
  };

  // Function to read the property value and update the state
  const readAndHandleProperty = () => {

    if (ref.current) {
      let propertyValue;
      if (propertyName.startsWith("--")) {
        // CSS variable
        propertyValue = window.getComputedStyle(ref.current).getPropertyValue(propertyName).trim();
      } else {
        // Regular attribute
        propertyValue = ref.current.getAttribute(propertyName);
      }
      handlePropertyValue(propertyValue);
    }
  };

  useEffect(() => {
    // Call the function once to handle the initial value
    readAndHandleProperty();

    // Set up the MutationObserver to handle subsequent mutations
    if (!ref.current) return;

    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if ((mutation.type === "attributes" && propertyName.startsWith("--") && mutation.attributeName === "style") ||
            (mutation.type === "attributes" && mutation.attributeName === propertyName)) {
          readAndHandleProperty();
        }
      }
    });

    observer.observe(ref.current, {
      attributes: true,
      attributeFilter: ["style", propertyName],
    });

    // Cleanup function to disconnect the observer
    return () => {
      observer.disconnect();
    };
  }, [ref, propertyName]); // Only re-run the effect if ref or propertyName changes


  return state;
};

export default useAttrObserver;
