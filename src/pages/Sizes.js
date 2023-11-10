import Graphic from "../components/Graphic";
import { Body, Label1 } from "../components/Text";
import SIZES_IMGS from "../data/SIZES_IMGS";

import SVG from "react-inlinesvg";

function Sizes({ view }) {
  const imgs = Object.values(SIZES_IMGS[view.type]);

  return (
    <>
      <div className="sizes--body">
        {imgs.map((img, i) => {
          return <Item imgs={imgs} index={i} key={i} />;
        })}
        <div className="sizes--background">
          <Label1 className="sizes--background-label sizes--background-label__x">Grams</Label1>
          <Label1 className="sizes--background-label sizes--background-label__y">Length</Label1>
        </div>
      </div>
    </>
  );
}

function Item({ imgs, index }) {
  const img = imgs[index];
  const columns = imgs.length;

  return (
    <div
      className="sizes--col"
      style={{
        "--img-src": img.src,
        "--sizes-columns": columns,
        "--graphic-width": img.width,
        "--graphic-height": img.height,
      }}>
      <SVG className={`sizes--graphic`} src={img.src} width={img.width} height={img.height} />

      <Brace img={img} />
    </div>
  );
}

function Brace({ img }) {
  return (
    <div className="sizes--brace-wrapper">
      <div className="sizes--brace" />
      <div className="sizes--brace-line" />
      <div className="sizes--brace-dot" />
      <Body className="sizes--brace-label">{img.label}</Body>
    </div>
  );
}

export default Sizes;
