import { jJ, Tj, pb, I6, zN, Si, U9 } from "../905/809288";
export class $$r0 {
  constructor({
    name: e,
    sensitiveTextPolicy: t
  }) {
    this.name = e;
    this.sensitiveTextPolicy = t;
  }
  forEach(e, t) {
    return jJ(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  map(e, t) {
    return Tj(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  filter(e, t) {
    return pb(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  find(e, t) {
    return I6(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  some(e, t) {
    return zN(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  every(e, t) {
    return Si(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  count(e, t) {
    return U9(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
}
export const R = $$r0;