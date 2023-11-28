import { defaultProps, PropTypes } from "prop-types";
import { useEffect, useState } from "react";


function Mask({ className, src, alt, width, height, img, style, graphicElementProps }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  style = style || {};

  if (img) {
    src = img.src;
    alt = img.alt;
    width = img.width;
    height = img.height;
  }

  if (src[0] === ".") {
    src = src.slice(1);
  }

  const reference = graphicElementProps ? graphicElementProps.innerRef : null;
  const onLoad = graphicElementProps ? graphicElementProps.onLoad : null;

  useEffect(() => {
    const image = new Image();
    image.src = src;
    
    const handleLoad = () => {
      setImageLoaded(true);
      if (onLoad) {
        onLoad();
      }
    };

    if (image.complete) {
      handleLoad();
    } else {
      image.addEventListener('load', handleLoad);
      return () => image.removeEventListener('load', handleLoad);
    }
  }, [src, onLoad]);

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
        ref={reference}
        alt={alt}></div>

      {/* Render only if image has not loaded yet */}
      {!imageLoaded && <img src={src} alt={alt} style={{ display: "none" }} />}
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
