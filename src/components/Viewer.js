import PRODUCT_DATA from "../data/PRODUCT_DATA";
const { ROLL_TYPES } = PRODUCT_DATA;

function Viewer() {
  return (
    <div className="viewer">
      <div className="viewer--sidebar">
        <Title />

        <div className="viewer--sidebar-panel viewer--sidebar-button">
          <h2 className="viewer--h2">Traditional Pre-Rolls</h2>
        </div>
        <div className="viewer--sidebar-panel viewer--sidebar-button">
          <h2 className="viewer--h2">Cigarette Pre-Rolls</h2>
        </div>
      </div>

      <div className="viewer--content"></div>
    </div>
  );
}

function Title() {
  return (
    <div className="viewer--title viewer--sidebar-panel">
      <h1 className="viewer--h1 viewer__underline">Pre-Rolls</h1>
    </div>
  );
}

// function Viewer() {
//     return (
//         <div>
//             Enter
//         </div>
//     );
// }

export default Viewer;
