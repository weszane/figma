export class $$t0 extends Error {
  constructor(e, n = "warn") {
    super(e);
    this.message = e;
    this.name = new.target.prototype.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
    this.logLevel = n;
  }
}
export const U = $$t0;