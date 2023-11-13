import { useState, useEffect, useCallback } from 'react';

const useIsResizing = (debounceTime = 200) => {
  const [isResizing, setIsResizing] = useState(false);
  let debounceTimer = null;

  const handleResizeStart = () => {
    // Clear the timer if resizing is happening continuously
    clearTimeout(debounceTimer);
    // Set the resizing state to true immediately when resize starts
    setIsResizing(true);
  };

  const handleResizeEnd = useCallback(() => {
    // Debounce the setting of isResizing to false
    debounceTimer = setTimeout(() => {
      setIsResizing(false);
    }, debounceTime);
  }, [debounceTime]);

  // Set up event listeners for resize start and end
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined; // Skip for server-side rendering
    }

    // Add the event listener for the resize event
    window.addEventListener('resize', handleResizeStart);

    // Call handleResizeEnd on resize events, debounced
    const debouncedHandleResize = debounce(handleResizeEnd, debounceTime);
    window.addEventListener('resize', debouncedHandleResize);

    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', handleResizeStart);
      window.removeEventListener('resize', debouncedHandleResize);
      clearTimeout(debounceTimer);
    };
  }, [handleResizeEnd, debounceTime]);

  return isResizing;
};

// Debounce function as before
function debounce(func, wait) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

export default useIsResizing;
