function createUpdateConditions(propsToCheck) {
  return function updateConditions(prevProps, nextProps) {
    for (const propName of propsToCheck) {
      if (propName.includes(".")) {
        const [objName, key] = propName.split(".");
        if (prevProps[objName][key] !== nextProps[objName][key]) {
          return false;
        }
      } else {
        if (prevProps[propName] !== nextProps[propName]) {
          return false;
        }
      }
    }
    return true;
  };
}

export default createUpdateConditions;
