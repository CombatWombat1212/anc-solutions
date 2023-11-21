import { defaultProps, PropTypes } from "prop-types";

function Mask({ className, src, alt, width, height, img, style}) {
  style = style || {};

  if (img) {
    src = img.src;
    alt = img.alt;
    width = img.width;
    height = img.height;
  }

  var imgSrc = src;
  if (src[0] == ".") {
    imgSrc = src.slice(1);
    src = imgSrc;
  }


  return (
    <>
        <div
          className={"viewer--mask" + (className ? ` ${className}` : "")}
          style={{
            "--mask-aspect-width": width,
            "--mask-aspect-height": height,
            "--mask-img": `url('${src}')`,
            maskImage: `url('${src}')`,
            WebkitMaskImage: `url('${src}')`,
            ...style,
          }}
          alt={alt}></div>
    </>
  );
}

Mask.displayName = "Mask";

Mask.defaultProps = {
  img: undefined,
};

Mask.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Mask;
