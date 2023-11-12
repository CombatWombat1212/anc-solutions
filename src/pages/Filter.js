import { useEffect, useState } from "react";
import { ContentModal } from "../components/Content";
import PRODUCT_DATA from "../data/PRODUCT_DATA";





function Filter({ view }) {
  const title = view.dock.title;
  const stats = view.dock.stats;

  const [data, setData] = useState(false);

  useEffect(() => {
    const dock = PRODUCT_DATA[view.type]?.pages?.subpages?.[view.page]?.dock?.find((item) => item.id === view.dock);

    if (!dock) return;
    setData(dock);
  }, [view.dock]);

  return (
    <>
      {data && (
        <>
          <ContentModal title={title} pref={"filter"}>
            <div>Enter</div>
          </ContentModal>
          <div className="filter--visual"> </div>
        </>
      )}
    </>
  );
}

export default Filter;
