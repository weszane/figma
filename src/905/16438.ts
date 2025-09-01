export class $$n0 extends Error {
  severity = "high";
  errorDetail;
  constructor(e, t) {
    super(e);
    Object.setPrototypeOf(this, $$n0.prototype);
    t && t instanceof Error && (this.cause = t);
  }
}
export const pr = $$n0;