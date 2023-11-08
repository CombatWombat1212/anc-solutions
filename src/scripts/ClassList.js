class ClassList {
  constructor(pref) {
    this.pref = pref;
    this.classList = [pref];
    this.prefDefault = true;
  }

  processNames(names) {
    if (Array.isArray(names)) {
      return names;
    } else if (typeof names === "string") {
      return names.split(" ");
    }
    return [];
  }

  getClassName(name, hasPref) {
    if (hasPref) {
      return `${this.pref}__${name}`;
    } else {
      return name;
    }
  }

  addClassNames(names, hasPref) {
    this.processNames(names).forEach((name) => this.classList.push(this.getClassName(name, hasPref)));
  }

  removeClassNames(names, hasPref) {
    this.processNames(names).forEach((name) => {
      const index = this.classList.indexOf(this.getClassName(name, hasPref));
      if (index > -1) {
        this.classList.splice(index, 1);
      }
    });
  }

  add(names, options = {}) {
    const { pref: hasPref = this.prefDefault } = options;
    this.addClassNames(names, hasPref);
  }

  addIf(names, condition, options = {}) {
    const { pref: hasPref = this.prefDefault } = options;
    if (condition) {
      this.addClassNames(names, hasPref);
    } else {
      this.removeClassNames(names, hasPref);
    }
  }

  addEither(condition, names1, names2, options = {}) {
    const { pref: hasPref = this.prefDefault } = options;
    if (condition) {
      this.addClassNames(names1, hasPref);
      this.removeClassNames(names2, hasPref);
    } else {
      this.addClassNames(names2, hasPref);
      this.removeClassNames(names1, hasPref);
    }
  }

  addOnly(names) {
    this.processNames(names).forEach((name) => this.classList.push(name));
  }

  addOnlyIf(names, condition) {
    if (condition) {
      this.processNames(names).forEach((name) => this.classList.push(name));
    } else {
      this.processNames(names).forEach((name) => {
        const index = this.classList.indexOf(name);
        if (index > -1) {
          this.classList.splice(index, 1);
        }
      });
    }
  }

  get() {
    return this.classList.join(" ");
  }
}

export default ClassList;
