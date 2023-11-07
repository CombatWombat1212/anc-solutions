import PRODUCT_DATA from "../data/PRODUCT_DATA";
const { ROLL_TYPES } = PRODUCT_DATA;

function Viewer() {
  return (
    <div className="viewer">
      <Sidebar className="viewer--sidebar" />
      <div className="viewer--content"></div>
    </div>
  );
}





function Sidebar({ className }) {
  return (
    <div className={`${className} sidebar`}>
      <Title />
      {ROLL_TYPES.types.map((type) => (
        <Panel key={type.id} type={type} />
      ))}
    </div>
  );
}

function Title() {
  return (
    <div className="sidebar--title sidebar--panel">
      <h1 className="viewer--h1 viewer__underline">Pre-Rolls</h1>
    </div>
  );
}

function Panel({ type }) {
  const ind = String(type.index).padStart(2, "0");

  return (
    <div className="sidebar--panel sidebar--button">
      <h2 className="viewer--h2 sidebar--index">{ind}</h2>
      <h2 className="viewer--h2 sidebar--name">{type.long}</h2>
    </div>
  );
}

export default Viewer;
