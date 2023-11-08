




function Graphic({ img, className }) {


    var wrapperStyles = {
        [`--img-aspect-width`]: img.width,
        [`--img-aspect-height`]: img.height,
      };
    


  return (
    <div className={`viewer--graphic graphic ${className || ""}`} style={wrapperStyles}>
      <img className={`graphic--img`} src={img.src} alt={img.alt} width={img.width} height={img.height}></img>
    </div>
  );
}

export default Graphic;
