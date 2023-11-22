import { useContext, useEffect } from "react";
import { ViewContext } from "../scripts/contexts/viewContext";

function Link({ children, onClick, action, reference = null, click = true, loading=true, ...props }) {
  const view = useContext(ViewContext);

  // const handleClick = (event) => {

  //   if(!loading){
  //     if(onClick) onClick(event);
  //     return;
  //   }

  //   if (!click) return;

  //   view.setPageLoading(true);

  //   if (!onClick) return;

  //   setTimeout(() => {
  //     onClick(event);
  //   }, 250);

  // };

  const handleClick = (event) => {
    if (loading) {
      if (click) {
        view.setPageLoading(true);
        setTimeout(() => onClick?.(event), 250);
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
