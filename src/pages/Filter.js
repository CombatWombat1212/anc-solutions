import { useEffect, useState } from "react";
import { ContentModal, Stat } from "../components/Content";
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import SVG from "react-inlinesvg";
import FILTER_IMGS from "../data/FILTER_IMGS";

function Filter({ view }) {
    
  const img = FILTER_IMGS[view.type];

  return (
    <>
      {view.dockActiveObj && (
        <>
          <ContentModal title={view.dockActiveObj.title} pref={"filter"}>
            {view.dockActiveObj.stats.map((stat, index) => {
              return <Stat stat={stat} key={index} />;
            })}
          </ContentModal>
          <div className="filter--visual">
            <SVG
              className="paper--graphic"
              src={img.src}
              width={img.width} // Fixed attribute order, it should be width then height
              height={img.height}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Filter;
