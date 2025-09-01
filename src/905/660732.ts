class n {
  constructor(e, t) {
    this.score = e;
    this.text = t;
  }
}
export var $$r0 = (e => (e.VISIBLE = "VISIBLE", e.HIDDEN = "HIDDEN", e))($$r0 || {});
export class $$a1 {
  constructor(e) {
    this.matchAgainstText = (e, t) => {
      let i = 0;
      let r = e.toLowerCase().indexOf(this.query);
      r > -1 && (i = 100 - Math.min(r, 100), "VISIBLE" === t && (i += 100));
      return new n(i, e);
    };
    this.perfectScore = () => this.matchAgainstText(this.query, "VISIBLE").score;
    this.query = e.toLowerCase();
  }
}
export const cT = $$r0;
export const dU = $$a1;