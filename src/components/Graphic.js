function Graphic({ img, className, onLoad, reference=null }) {



  var wrapperStyles = {
      [`--img-aspect-width`]: img.width,
      [`--img-aspect-height`]: img.height,
  };

  return (
      <div className={`viewer--graphic graphic ${className || ""}`} style={wrapperStyles}>
          <img
              className="graphic--img"
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              onLoad={onLoad} 
              ref={reference}
          />
      </div>
  );
}

export default Graphic;
