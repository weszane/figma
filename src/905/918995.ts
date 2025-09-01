import { Z9 } from "../figma_app/770359";
import { IC } from "../figma_app/346422";
export class $$a0 {
  constructor() {
    this.handlers = [];
    this.inFlightFormatRequests = new Map();
  }
  register(e) {
    this.handlers.push(e);
  }
  async format() {
    for (let e of this.handlers) {
      if (this.inFlightFormatRequests.has(e)) {
        await this.inFlightFormatRequests.get(e);
        continue;
      }
      let t = e.onFormatTriggered().$$finally(() => {
        this.inFlightFormatRequests.$$delete(e);
      });
      this.inFlightFormatRequests.set(e, t);
      await t;
    }
  }
}
export function $$s1(e) {
  return e ? /\.(ts|tsx)$/i.test(e) ? "typescript" : /\.(css)$/i.test(e) ? "css" : /\.(md|mdx)$/i.test(e) ? "markdown" : null : null;
}
class o {
  constructor(e, t, i) {
    this.parserName = t;
    this.editorView = i;
    this.documentEditCounter = 0;
    e.register(this);
  }
  async onFormatTriggered() {
    for (let e = 0; e < 3; e++) {
      let e = this.editorView.state.doc.toString();
      let t = this.documentEditCounter;
      let i = await IC(e, this.parserName);
      if (this.documentEditCounter === t) {
        i.length > 0 && this.editorView.dispatch({
          changes: i
        });
        return Promise.resolve();
      }
    }
    return Promise.reject();
  }
  update(e) {
    e.docChanged && 0 !== e.transactions.length && this.documentEditCounter++;
  }
}
export function $$l2(e, t) {
  return Z9.define(i => new o(e, t, i));
}
export const Mq = $$a0;
export const h3 = $$s1;
export const xN = $$l2;