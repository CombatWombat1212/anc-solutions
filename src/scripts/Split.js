
function splitPx(str) {
    str = Number(str.split("px")[0]);
    return str;
  }
  
  function splitRem(str) {
    str = Number(str.split("rem")[0]) * 16;
    return str;
  }
  
  function splitS(str) {
    if (str.includes("s")) {
      str = Number(str.split("s")[0]) * 1000;
    } else if (str.includes("ms")) {
      str = Number(str.split("ms")[0]);
    }
    return str;
  }

  

  export { splitPx, splitRem, splitS };