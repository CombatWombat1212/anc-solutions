import { useContext, useEffect } from "react";
import { ViewContext } from "../scripts/contexts/viewContext";

function Link({ children, onClick,reference=null, click=true, ...props }) {
  const view = useContext(ViewContext);





  const handleClick = (event) => {
    if (!click) return;

    view.setPageLoading(true);

    if (!onClick) return;

    setTimeout(() => {
    onClick(event);
    }, 500);
  };





  return (
    <a {...props} onClick={handleClick} ref={reference}>
      {children}
    </a>
  );
}

export default Link;
