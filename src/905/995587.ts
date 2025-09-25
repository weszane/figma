import { traverseTree, collectTree, filterTree, findInTree, someInTree, everyInTree, countTree } from "../905/809288";
export class $$r0 {
  constructor({
    name: e,
    sensitiveTextPolicy: t
  }) {
    this.name = e;
    this.sensitiveTextPolicy = t;
  }
  forEach(e, t) {
    return traverseTree(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  map(e, t) {
    return collectTree(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  filter(e, t) {
    return filterTree(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  find(e, t) {
    return findInTree(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  some(e, t) {
    return someInTree(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  every(e, t) {
    return everyInTree(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
  count(e, t) {
    return countTree(this.rootObjects, "children", e, {
      ...t,
      includeSelf: !0
    });
  }
}
export const R = $$r0;