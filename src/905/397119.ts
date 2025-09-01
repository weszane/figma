import { Z9 } from "../figma_app/770359";
import { lV } from "../figma_app/617606";
import { Ho, a5 } from "../figma_app/337924";
import { aI } from "../figma_app/552876";
import { A } from "../905/866368";
export class $$l1 {
  constructor() {
    this.handlers = [];
  }
  register(e) {
    this.handlers.push(e);
  }
  unregister(e) {
    let t = this.handlers.indexOf(e);
    -1 !== t && this.handlers.splice(t, 1);
  }
  setText(e) {
    for (let t of this.handlers) t.setText(e);
  }
  appendText(e) {
    for (let t of this.handlers) t.appendText(e);
  }
}
class d extends A {
  constructor(e, t) {
    super(t);
    this.trigger = e;
    this.editorView = t;
    e.register(this);
  }
  setText(e) {
    try {
      let t = this.editorView.state.doc.toString();
      if (e !== t) {
        if (e.startsWith(t)) {
          let i = e.slice(t.length);
          return this.appendText(i);
        }
        this.editorView.dispatch({
          changes: [{
            from: 0,
            to: t.length,
            insert: e
          }]
        });
      }
    } catch (t) {
      let e = aI() ? lV.FIGMAKE : lV.CODE_IN_SITES;
      Ho(t, e, a5.EDIT_LOCALLY, {
        editorViewState: JSON.stringify(this.editorView.state)
      });
    }
  }
  appendText(e) {
    this.editorView.dispatch({
      changes: [{
        from: this.editorView.state.doc.length,
        insert: e
      }]
    });
    this.isAutoScrollAllowed({
      checkNearBottom: !0
    }) && requestAnimationFrame(() => {
      let e = this.editorView.scrollDOM;
      e.scrollTop = e.scrollHeight;
    });
  }
  destroy() {
    this.trigger.unregister(this);
  }
}
export function $$c0(e) {
  return Z9.define(t => new d(e, t));
}
export const h = $$c0;
export const p = $$l1;