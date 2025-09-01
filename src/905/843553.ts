export class $$n2 extends Error {
  constructor(e) {
    super();
    this.reportToSentry = !!e;
  }
}
export class $$r1 extends $$n2 {
  constructor(e, t) {
    super(t?.reportToSentry);
    this.name = "ContentFillInternalError";
    e && (this.message = e);
  }
}
export class $$a4 extends $$n2 {
  constructor(e, t) {
    super(t?.reportToSentry);
    this.name = "InvalidSelectionError";
    e && (this.message = e);
  }
}
export class $$s5 extends $$n2 {
  constructor(e, t) {
    super(t?.reportToSentry);
    this.name = "LayerGenerationError";
    e && (this.message = e);
  }
}
export class $$o3 extends $$n2 {
  constructor(e, t) {
    super(t?.reportToSentry);
    this.name = "TooManyNodesError";
    e && (this.message = e);
  }
}
export class $$l0 extends $$n2 {
  constructor(e, t) {
    super(t?.reportToSentry);
    this.name = "NoDuplicateNodesError";
    e && (this.message = e);
  }
}
export const Aq = $$l0;
export const IL = $$r1;
export const JB = $$n2;
export const Lg = $$o3;
export const SA = $$a4;
export const YK = $$s5;