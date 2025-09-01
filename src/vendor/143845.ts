class r {
  constructor(e) {
    this.tagname = e;
    this.child = [];
    this[":@"] = {};
  }
  add(e, r) {
    "__proto__" === e && (e = "#__proto__");
    this.child.push({
      [e]: r
    });
  }
  addChild(e) {
    "__proto__" === e.tagname && (e.tagname = "#__proto__");
    e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
      [e.tagname]: e.child,
      ":@": e[":@"]
    }) : this.child.push({
      [e.tagname]: e.child
    });
  }
}
module.exports = r;