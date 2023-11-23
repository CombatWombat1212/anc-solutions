import { ContentModal, ContentVisual, Stat } from "../components/Content";
import SVG from "react-inlinesvg";
import { useEffect, useRef, useState } from "react";
import useElementStyle from "../scripts/hooks/useElementStyle";
import FILTER_IMGS from "../data/FILTER_IMGS";
import END_IMGS from "../data/END_IMGS";
import PAPER_IMGS from "../data/PAPER_IMGS";
import SOLID_IMGS from "../data/SOLID_IMGS";
import FLUID_IMGS from "../data/FLUID_IMGS";
import TERPENES_IMGS from "../data/TERPENES_IMGS";
import { useGraphicLoadManager, useGraphicLoadTracker } from "../scripts/hooks/useGraphicLoadManager";

const DATABASE = {
  filter: FILTER_IMGS,
  end: END_IMGS,
  paper: PAPER_IMGS,
  solid: SOLID_IMGS,
  fluid: FLUID_IMGS,
  terpenes: TERPENES_IMGS,
};

function Split({ view, type }) {
  const modal = useRef(null);
  const pref = view.page;

  let img;

  if (DATABASE[view.page][view.type]?.src) {
    img = DATABASE[view.page][view.type];
  } else {
    img = DATABASE[view.page][view.type][view.dock] || DATABASE[view.page][view.type];
  }

  const specialty = type == "specialty" ? true : false;
  const typeProp = {
    split: true,
    specialty: specialty,
  };

  const { columns } = usePaper(view, modal);

  
  const { graphicContainerProps } = useGraphicLoadManager(view, { count: 1 });
  const { graphicElementProps } = useGraphicLoadTracker(graphicContainerProps, {key: img.src});



  



  return (
    <>
      {view.dockActiveObj && (
        <>
          <ContentModal title={view.dockActiveObj.title} pref={pref} type={typeProp} reference={modal}>
            {view.dockActiveObj.stats.map((stat, index) => {
              const className = getPaperClassNames(columns, view, index);
              return <Stat stat={stat} key={index} className={`${pref}--stat-row ` + className} />;
            })}
          </ContentModal>
          <ContentVisual className={`${pref}--visual`} type={typeProp}>
            <SVG
              className={`${pref}--graphic content--graphic__split`}
              src={img.src}
              width={img.width}
              height={img.height}
              {...graphicElementProps}
            />
          </ContentVisual>
        </>
      )}
    </>
  );
}

function checkPaperRowType(view, rowIndex, columns) {
  const totalRows = Math.ceil(view.dockActiveObj.stats.length / columns);
  const isLastRow = rowIndex === totalRows - 1;

  const startIndex = rowIndex * columns;
  const endIndex = startIndex + columns;
  const rowStats = view.dockActiveObj.stats.slice(startIndex, endIndex);

  const hasBar = rowStats.some((stat) => stat.type === "bar");
  const isNextRowHasBar = rowIndex < totalRows - 1 
    && view.dockActiveObj.stats.slice(endIndex, endIndex + columns).some((stat) => stat.type === "bar");

  return {
    hasBar: hasBar,
    isNextRowHasBar: isNextRowHasBar,
    isLastRow: isLastRow,
  };
};

function getPaperClassNames(columns, view, index) {
  if (view.page != "paper") return "";

  const rowIndex = Math.floor(index / columns);
  const rowType = checkPaperRowType(view, rowIndex, columns);
  let className = "";

  if (rowType.hasBar && rowType.isLastRow) {
    className = "paper--stat-row__bar-last";
  } else if (rowType.hasBar) {
    className = "paper--stat-row__bar";
  } else if (rowType.isNextRowHasBar) {
    className = "paper--stat-row__before-bar";
  }

  return className;
}

// const checkPaperRowType = (view, rowIndex, columns) => {
//   const startIndex = rowIndex * columns;
//   const endIndex = startIndex + columns;
//   const rowStats = view.dockActiveObj.stats.slice(startIndex, endIndex);

//   const isAllBar = rowStats.every((stat) => stat.type === "bar");
//   const isPrevAllBar = rowIndex > 0 && view.dockActiveObj.stats.slice((rowIndex - 1) * columns, startIndex).every((stat) => stat.type === "bar");
//   const isPrevRowMixed = rowIndex > 0 && !isPrevAllBar; // Check if previous row is not all bar

//   return {
//     isAllBar: isAllBar,
//     isPrevAllBar: isPrevAllBar,
//     isPrevRowMixed: isPrevRowMixed,
//   };
// };

// function getPaperClassNames(columns, view, index) {
//   if (view.page != "paper") return "";

//   const rowIndex = Math.floor(index / columns);
//   const rowType = checkPaperRowType(view, rowIndex, columns);
//   let className = "";

//   if (rowType.isAllBar && rowType.isPrevRowMixed) {
//     className = "paper--stat-row__bar";
//   } else if (rowType.isPrevAllBar) {
//     className = "paper--stat-row__after-bar";
//   }

//   return className;
// }


// function getPaperClassNames(columns, view, index) {
//   if (view.page != "paper") return "";

//   const rowIndex = Math.floor(index / columns);
//   const rowType = checkPaperRowType(view, rowIndex, columns);
//   let className = "";

//   // Check if the current row is the last row
//   const isLastRow = rowIndex === Math.ceil(view.dockActiveObj.stats.length / columns) - 1;

//   if (rowType.isAllBar && rowType.isPrevRowMixed) {
//     className = "paper--stat-row__bar";
//   } else if (rowType.isPrevAllBar) {
//     className = "paper--stat-row__after-bar";
//   }

//   // Append 'paper--stat-row__bar-last' if it's a bar row and the last row
//   if (rowType.isAllBar && isLastRow) {
//     className += " paper--stat-row__bar-last";
//   }

//   return className;
// }



function usePaper(view, modal) {
  const [columns, setColumns] = useState(0);
  const colCount = useElementStyle(modal, "--viewer-modal-columns");

  useEffect(() => {
    if (view.page != "paper") return;
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
