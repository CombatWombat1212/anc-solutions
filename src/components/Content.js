import PRODUCT_DATA from "../data/PRODUCT_DATA";
import Graphic from "./Graphic";
import { Body, H1, H2, H3, H4, Label1, Label2 } from "./Text";
const { ROLL_TYPES } = PRODUCT_DATA;

function Content({ view }) {
  const { page } = view;

  return (
    <>
      <div className={`viewer--content content ${page}`}>
        <Inner view={view} />
      </div>
    </>
  );
}

function Inner({ view }) {
  const { page } = view;
  return (
    <div className={`content--inner ${page}--inner`}>
      <RollTypes />
    </div>
  );
}

function RollTypes({ view }) {
  const rollTypesArray = Object.values(ROLL_TYPES.types);

  return (
    <>
      <div className="roll-types--body">
        {rollTypesArray.map((type) => (
          <div className={`content--col roll-types--col`} key={type.id}>
            <div className="roll-types--head">
              <H2 className={"roll-types--label__main"}>{type.short}</H2>
              <H2 className={"roll-types--label__sub"}>Figure {String(type.index).padStart(2, "0")}</H2>
            </div>

            <div className="roll-types--visual">
              <Graphic className={`content--graphic roll-types--graphic roll-types--graphic__photo`} img={type.images.photo} />
              <Graphic className={`content--graphic roll-types--graphic roll-types--graphic__vector`} img={type.images.vector} />
            </div>
          </div>
        ))}
      </div>

      <div className="roll-types--description">
            
            <div className="roll-types--modal">
            <Body>wassup</Body>
            </div>

      </div>
    </>
  );
}

export default Content;
