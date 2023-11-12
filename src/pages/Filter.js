import { useEffect, useState } from "react";
import { ContentModal } from "../components/Content";
import PRODUCT_DATA from "../data/PRODUCT_DATA";





function Filter({ view }) {


  return (
    <>
      {view.dockData && (
        <>
          <ContentModal title={view.dockData.title} pref={"filter"}>
            <div>Enter</div>
          </ContentModal>
          <div className="filter--visual"> </div>
        </>
      )}
    </>
  );
}

export default Filter;
