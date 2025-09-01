export class $$n0 {
  constructor(e) {
    this.selectors = e;
  }
  pathToSelectedView(e, t, i, n) {
    for (let r of this.selectors) {
      let a = r.pathToSelectedView(e, t, i, n);
      if (null != a) return a;
    }
    return null;
  }
  requireHistoryChange(e, t) {
    for (let i of this.selectors) if (i.requireHistoryChange(e, t)) return !0;
    return !1;
  }
  selectedViewToPath(e, t) {
    for (let i of this.selectors) {
      let n = i.selectedViewToPath(e, t);
      if (null != n) return n;
    }
    return null;
  }
  selectedViewName(e, t) {
    for (let i of this.selectors) {
      let n = i.selectedViewName(e, t);
      if (null != n) return n;
    }
    return null;
  }
  selectedViewHasMissingResources(e, t) {
    for (let i of this.selectors) if (i.selectedViewHasMissingResources && i.selectedViewHasMissingResources(e, t)) return !0;
    return !1;
  }
}
export const k = $$n0;