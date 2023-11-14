// import { ContentModal, ContentVisual, Stat } from "../components/Content";
// import SVG from "react-inlinesvg";
// import FILTER_IMGS from "../data/FILTER_IMGS";
// import END_IMGS from "../data/END_IMGS";


// function End({ view }) {
//   const img = END_IMGS[view.type];

//   return (
//     <>
//       {view.dockActiveObj && (
//         <>
//           <ContentModal title={view.dockActiveObj.title} pref={"end"} type="split">
//             {view.dockActiveObj.stats.map((stat, index) => {
//               return <Stat stat={stat} key={index} />;
//             })}
//           </ContentModal>
//           <ContentVisual className="end--visual" type="split">
//             <SVG
//               className="end--graphic"
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

// export default End;
