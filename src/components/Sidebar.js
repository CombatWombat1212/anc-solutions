
import PRODUCT_DATA from "../data/PRODUCT_DATA";
import { H1, H2 } from "./Text";
const { ROLL_TYPES } = PRODUCT_DATA;




function Sidebar() {
    const rollTypesArray = Object.values(ROLL_TYPES.types);

    return (
      <div className="viewer--sidebar sidebar">
        <Title />
        {rollTypesArray.map((type) => (
                <Panel key={type.id} type={type} />
            ))}
      </div>
    );
  }
  
  function Title() {
    return (
      <div className="sidebar--title sidebar--panel">
        <H1>Pre-Rolls</H1>
      </div>
    );
  }
  
  function Panel({ type }) {
    const ind = String(type.index).padStart(2, "0");
  
    return (
      <div className="sidebar--panel sidebar--button">
        <H2 className="sidebar--index">{ind}</H2>
        <H2 className="sidebar--name">{type.long}</H2>
      </div>
    );
  }

  
    export default Sidebar;