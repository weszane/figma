export class SeverityError extends Error {
  severity = "high";
  errorDetail;
  constructor(e, t) {
    super(e);
    Object.setPrototypeOf(this, SeverityError.prototype);
    t && t instanceof Error && (this.cause = t);
  }
}
export const pr = SeverityError;
