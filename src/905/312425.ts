import { _ } from "../905/199441";
export class $$r0 {
  constructor() {
    this.THRESHOLD_MS_TO_CONCATENATE_MESSAGES = 3e3;
    this.THRESHOLD_CHARS_TO_NEW_PARAGRAPH = 300;
    this.THRESHOLD_CHARS_TO_NEW_CAPTION = 500;
    this.THRESHOLD_PARAGRAPHS_TO_NEW_CAPTION = 6;
    this.store = _(null);
  }
  subscribe(e) {
    this.store.subscribe(e);
  }
  unsubscribe(e) {
    this.store.unsubscribe(e);
  }
  clear() {
    this.store.set([]);
  }
  addNewCaption(e, t, i) {
    let n = this.store.get() || [];
    if (!n.length) {
      this.createAndAppendNewAudioCaption(e, t, i);
      return;
    }
    let r = n[n.length - 1];
    if (r.userId !== e) {
      this.createAndAppendNewAudioCaption(e, t, i);
      return;
    }
    if (t - r.timestamp > this.THRESHOLD_MS_TO_CONCATENATE_MESSAGES) {
      this.addCaptionAsNewParagraph(e, t, i);
      return;
    }
    this.concatenateCaption(e, t, i);
  }
  concatenateCaption(e, t, i) {
    let n = this.store.get() || [];
    let r = n[n.length - 1];
    let a = r.text[r.text.length - 1];
    if (a.reduce((e, t) => e + t.length, 0) > this.THRESHOLD_CHARS_TO_NEW_PARAGRAPH) {
      this.addCaptionAsNewParagraph(e, t, i);
      return;
    }
    r.text[r.text.length - 1] = [...a, i];
    r.timestamp = t;
    this.store.set([...n]);
  }
  addCaptionAsNewParagraph(e, t, i) {
    let n = this.store.get() || [];
    let r = n[n.length - 1];
    if (r.text.length >= this.THRESHOLD_PARAGRAPHS_TO_NEW_CAPTION) {
      this.createAndAppendNewAudioCaption(e, t, i);
      return;
    }
    let a = 0;
    if (r.text.forEach(e => e.forEach(e => a += e.length)), a > this.THRESHOLD_CHARS_TO_NEW_CAPTION) {
      this.createAndAppendNewAudioCaption(e, t, i);
      return;
    }
    r.timestamp = t;
    r.text = [...r.text, [i]];
    this.store.set([...n]);
  }
  createAndAppendNewAudioCaption(e, t, i) {
    let n = this.store.get() || [];
    this.store.set([...n, {
      text: [[i]],
      timestamp: t,
      userId: e
    }]);
  }
}
export const T = $$r0;