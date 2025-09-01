class i {
  static DEFAULTS = {
    modules: {}
  };
  static themes = {
    default: i
  };
  modules = {};
  constructor(t, e) {
    this.quill = t;
    this.options = e;
  }
  init() {
    Object.keys(this.options.modules).forEach(t => {
      null == this.modules[t] && this.addModule(t);
    });
  }
  addModule(t) {
    let e = this.quill.constructor.$$import(`modules/${t}`);
    this.modules[t] = new e(this.quill, this.options.modules[t] || {});
    return this.modules[t];
  }
}
export let $$n0 = i;
export const A = $$n0;