import { ContentModal, Stat } from "../components/Content";
import SVG from "react-inlinesvg";
import FILTER_IMGS from "../data/FILTER_IMGS";
import END_IMGS from "../data/END_IMGS";

function End({ view }) {
    
  const img = END_IMGS[view.type];

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

export default End;
