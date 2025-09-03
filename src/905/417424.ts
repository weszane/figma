import { assert } from "../figma_app/465776";
import { b } from "../905/428797";
import { q as _$$q } from "../905/113809";
class s {
  constructor(e, t) {
    this.variableContext = t;
    this.tokens = e;
    this.pos = 0;
  }
  current() {
    return this.tokens[this.pos];
  }
  next() {
    this.pos++;
    return this.pos < this.tokens.length;
  }
  findRuleAndParse(e, t) {
    for (let i of b[e]) if (this.current().type === i.tokenMatch) {
      this.next();
      let r = this.parseAtLevel(e);
      assert(!!i.parseOperator);
      return i.parseOperator(t ? [t, r] : [r]);
    }
    return null;
  }
  parse() {
    return this.parseAllLevels();
  }
  parseAllLevels() {
    return this.parseAtLevel(b.length - 1);
  }
  parseAtLevel(e) {
    if (0 === e) return this.parseHighestPrecedence();
    if (1 === e) {
      let t = this.findRuleAndParse(e, null);
      if (t) return t;
    }
    let t = this.parseAtLevel(e - 1);
    if (1 === e && this.current()?.type === "TOKEN_SUBTRACTION") return t;
    if (this.current()) {
      let i = this.findRuleAndParse(e, t);
      if (i) return i;
    }
    return t;
  }
  parseHighestPrecedence() {
    for (let e of b[0]) if (this.current().type === e.tokenMatch) {
      assert(!!e.parseToken);
      let t = e.parseToken(this, this.variableContext);
      this.next();
      return t;
    }
    throw Error("parse error");
  }
}
export function $$o0(e, t) {
  let i = new s(_$$q(e), t);
  let n = i.parse();
  if (i.current()) throw Error("Unexpected character at end: " + i.current().stringValue);
  if (null === n) throw Error("Parse result is null");
  return n;
}
export const q = $$o0;