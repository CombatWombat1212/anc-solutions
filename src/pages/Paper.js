// import { useEffect, useRef, useState } from "react";
// import Graphic from "../components/Graphic";
// import { Body, H2, H3, H4, Label2 } from "../components/Text";
// import useAttrObserver from "../scripts/hooks/useAttrObserver";
// import useElementStyle from "../scripts/hooks/useElementStyle";
// import PAPER_IMGS from "../data/PAPER_IMGS";
// import SVG from "react-inlinesvg";
// import { ContentModal, ContentVisual, Stat } from "../components/Content";
// import PRODUCT_DATA from "../data/PRODUCT_DATA";




// function Paper({ view }) {
//   return <>{view.dock && <Wrapper view={view} />}</>;
// }

// function Wrapper({ view }) {
//   const img = PAPER_IMGS[view.type];

//   const [rows, setRows] = useState(0);
//   const [columns, setColumns] = useState(0);

//   const modal = useRef(null);
//   const rowCount = useElementStyle(modal, "--viewer-modal-rows");
//   const colCount = useElementStyle(modal, "--viewer-modal-columns");

//   useEffect(() => {
//     if (rowCount && !isNaN(Number(rowCount))) {
//       setRows(Number(rowCount));
//     } else {
//       setRows(0);
//     }
//   }, [rowCount]);

//   useEffect(() => {
//     if (colCount && !isNaN(Number(colCount))) {
//       setColumns(Number(colCount));
//     } else {
//       setColumns(0);
//     }
//   }, [colCount]);

//   const checkRowType = (rowIndex) => {
//     const startIndex = rowIndex * columns;
//     const endIndex = startIndex + columns;
//     const rowStats = view.dockActiveObj.stats.slice(startIndex, endIndex);

//     const isAllBar = rowStats.every((stat) => stat.type === "bar");
//     const isPrevAllBar = rowIndex > 0 && view.dockActiveObj.stats.slice((rowIndex - 1) * columns, startIndex).every((stat) => stat.type === "bar");
//     const isPrevRowMixed = rowIndex > 0 && !isPrevAllBar; // Check if previous row is not all bar

//     return {
//       isAllBar: isAllBar,
//       isPrevAllBar: isPrevAllBar,
//       isPrevRowMixed: isPrevRowMixed,
//     };
//   };

//   return (
//     <>
//       {view.dockActiveObj && (
//         <>
//           <ContentModal pref={"paper"} title={view.dockActiveObj.title} reference={modal} type="split">
//             {view.dockActiveObj.stats.map((stat, index) => {
//               const rowIndex = Math.floor(index / columns);
//               const rowType = checkRowType(rowIndex);
//               let className = "";

//               if (rowType.isAllBar && rowType.isPrevRowMixed) {
//                 className = "paper--stat-row__bar";
//               } else if (rowType.isPrevAllBar) {
//                 className = "paper--stat-row__after-bar";
//               }

//               return <Stat stat={stat} key={index} className={className} />;
//             })}
//           </ContentModal>

//           <ContentVisual className="paper--visual" type="split">
//             <SVG
//               className="paper--graphic"
//               src={img.src}
//               width={img.width}
//               height={img.height}
//             />
//           </ContentVisual>
//         </>
//       )}
//     </>
//   );
// }

// export default Paper;
