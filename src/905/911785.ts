export class $$n0 {
  constructor() {
    this.data = [];
  }
  append(e) {
    this.data.push(e);
    return this;
  }
  codefence(e, t = "jsx") {
    this.data.push("```");
    this.data.push(t);
    this.data.push("\n");
    this.data.push(e());
    this.data.push("\n");
    this.data.push("```");
    return this;
  }
  newline() {
    this.data.push("\n");
    return this;
  }
  toString(e = "") {
    return this.data.join(e);
  }
}
export const f = $$n0;