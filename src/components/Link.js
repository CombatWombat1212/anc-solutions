import { useContext, useEffect } from "react";
import { ViewContext } from "../scripts/contexts/viewContext";
import { PAGE_LOAD_DELAY } from "../scripts/contexts/viewProvider";

function Link({ children, onClick, action, reference = null, click = true, loading=true, ...props }) {
  const view = useContext(ViewContext);


  const handleClick = (event) => {
    if (loading) {
      if (click) {
        view.setPageLoading(true);
        setTimeout(() => onClick?.(event), PAGE_LOAD_DELAY);
      }
    } else {
      onClick?.(event);
    }
  };
  


  return (
    <a {...props} onClick={handleClick} ref={reference}>
      {children}
    </a>
  );
}

export default Link;
