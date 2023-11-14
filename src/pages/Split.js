import { ContentModal, ContentVisual, Stat } from "../components/Content";
import SVG from "react-inlinesvg";
import FILTER_IMGS from "../data/FILTER_IMGS";
import END_IMGS from "../data/END_IMGS";
import PAPER_IMGS from "../data/PAPER_IMGS";
import { useEffect, useRef, useState } from "react";
import useElementStyle from "../scripts/hooks/useElementStyle";

const DATABASE = {
  filter: FILTER_IMGS,
  end: END_IMGS,
  paper: PAPER_IMGS,
};

function Split({ view }) {
  const modal = useRef(null);
  const img = DATABASE[view.page][view.type];
  const pref = view.page;

  const {columns} = usePaper(view, modal);

  return (
    <>
      {view.dockActiveObj && (
        <>
          <ContentModal title={view.dockActiveObj.title} pref={pref} type="split" reference={modal}>
            {view.dockActiveObj.stats.map((stat, index) => {
              const className = getPaperClassNames(columns, view, index);
              return <Stat stat={stat} key={index} className={className} />;
            })}
          </ContentModal>
          <ContentVisual className={`${pref}--visual`} type="split">
            <SVG className={`${pref}--graphic content--graphic__split`} src={img.src} width={img.width} height={img.height} />
          </ContentVisual>
        </>
      )}
    </>
  );
}



const checkPaperRowType = (view, rowIndex, columns) => {
    const startIndex = rowIndex * columns;
    const endIndex = startIndex + columns;
    const rowStats = view.dockActiveObj.stats.slice(startIndex, endIndex);

    const isAllBar = rowStats.every((stat) => stat.type === "bar");
    const isPrevAllBar = rowIndex > 0 && view.dockActiveObj.stats.slice((rowIndex - 1) * columns, startIndex).every((stat) => stat.type === "bar");
    const isPrevRowMixed = rowIndex > 0 && !isPrevAllBar; // Check if previous row is not all bar

    return {
      isAllBar: isAllBar,
      isPrevAllBar: isPrevAllBar,
      isPrevRowMixed: isPrevRowMixed,
    };
  };


function getPaperClassNames(columns, view, index) {
  if (view.page != "paper") return "";

  const rowIndex = Math.floor(index / columns);
  const rowType = checkPaperRowType(view, rowIndex, columns);
  let className = "";

  if (rowType.isAllBar && rowType.isPrevRowMixed) {
    className = "paper--stat-row__bar";
  } else if (rowType.isPrevAllBar) {
    className = "paper--stat-row__after-bar";
  }

  return className;
}

function usePaper(view, modal) {
//   const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

//   const rowCount = useElementStyle(modal, "--viewer-modal-rows");
  const colCount = useElementStyle(modal, "--viewer-modal-columns");

//   useEffect(() => {
//     if(view.page != "paper") return;
//     if (rowCount && !isNaN(Number(rowCount))) {
//       setRows(Number(rowCount));
//     } else {
//       setRows(0);
//     }
//   }, [rowCount]);

  useEffect(() => {
    if(view.page != "paper") return;
    if (colCount && !isNaN(Number(colCount))) {
      setColumns(Number(colCount));
    } else {
      setColumns(0);
    }
  }, [colCount]);


//   return { modal, rows, columns };
  return { modal, columns };
}

export default Split;
