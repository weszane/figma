import _require2 from "../vendor/200464";
import _require from "../vendor/895287";
import s from "../vendor/663827";
import { validate } from "../vendor/341607";
let {
  buildOptions
} = _require;
let {
  prettify
} = _require2;
class h {
  constructor(e) {
    this.externalEntities = {};
    this.options = buildOptions(e);
  }
  parse(e, r) {
    if ("string" == typeof e) ;else if (e.toString) e = e.toString();else throw Error("XML data is accepted in String or Bytes[] form.");
    if (r) {
      !0 === r && (r = {});
      let n = validate(e, r);
      if (!0 !== n) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`);
    }
    let n = new s(this.options);
    n.addExternalEntities(this.externalEntities);
    let i = n.parseXml(e);
    return this.options.preserveOrder || void 0 === i ? i : prettify(i, this.options);
  }
  addEntity(e, r) {
    if (-1 !== r.indexOf("&")) throw Error("Entity value can't have '&'");
    if (-1 !== e.indexOf("&") || -1 !== e.indexOf(";")) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if ("&" === r) throw Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = r;
  }
}
module.exports = h;