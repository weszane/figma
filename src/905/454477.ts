export let $$n0 = {
  sort(e, t, i) {
    let n = t.fullscreenMenuAction;
    let r = i.fullscreenMenuAction;
    return n.menuActionType && r.menuActionType && "run-local-plugin" === n.menuActionType && "run-installed-plugin" === r.menuActionType || void 0 !== n.stringMatchScore && void 0 !== r.stringMatchScore && void 0 !== n.popularityScore && void 0 !== r.popularityScore && (n.stringMatchScore > r.stringMatchScore || n.stringMatchScore === r.stringMatchScore && n.popularityScore > r.popularityScore) ? -1 : 1;
  }
};
export const r = $$n0;