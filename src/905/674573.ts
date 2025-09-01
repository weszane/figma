import { zl } from "../figma_app/27355";
export class $$r0 {
  constructor(e, t, i) {
    this.codeFileGuid = e;
    this.atom = t;
    this.editorView = i;
    this.unsubscribe = zl.sub(t, () => {
      this.checkForAtomEvent();
    });
    zl.get(t) && setTimeout(() => {
      this.checkForAtomEvent();
    }, 0);
  }
  destroy() {
    this.unsubscribe();
  }
  checkForAtomEvent() {
    let e = zl.get(this.atom);
    if (e?.codeFileGuid !== this.codeFileGuid) return;
    let {
      fromCharIndex,
      toCharIndex
    } = e;
    this.goToRange(fromCharIndex, toCharIndex);
    zl.set(this.atom, null);
  }
  goToLineAndColumn(e, t) {
    let i = this.editorView.state.doc;
    let n = Math.max(Math.min(e, i.lines), 1);
    let r = n === e ? Math.max(Math.min(t, i.line(n).length), 1) : i.line(n).length;
    this.goToRange(i.line(n).from + r - 1);
  }
  goToRange(e, t) {
    this.editorView.dispatch({
      selection: {
        anchor: e,
        head: t
      },
      scrollIntoView: !0
    });
    this.editorView.focus();
  }
}
export const l = $$r0;