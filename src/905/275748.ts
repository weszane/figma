import { setupAdvancedLazyLoader } from "src/905/992467";
export class $$r0 {
  constructor(e) {
    this.args = e;
  }
  get name() {
    return this.args.name;
  }
  createLazyComponent(e, t) {
    return setupAdvancedLazyLoader(this.name, e, t);
  }
}
export const b = $$r0;
