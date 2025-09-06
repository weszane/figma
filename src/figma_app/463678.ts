import { D1Y } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { b4, _V, kM } from "../figma_app/421886";
import { A } from "../3850/868552";
import { A as _$$A } from "../3850/839808";
import { A as _$$A2 } from "../2854/372209";
import { A as _$$A3 } from "../svg/547085";
import { A as _$$A4 } from "../2854/160761";
import { A as _$$A5 } from "../5724/882384";
import { A as _$$A6 } from "../svg/370498";
let $$_5 = {
  [D1Y.TEXT]: 0,
  [D1Y.FRAME_OR_GROUP]: 0,
  [D1Y.COMPONENT]: 0,
  [D1Y.INSTANCE]: 0,
  [D1Y.IMAGE]: 0,
  [D1Y.SHAPE]: 0,
  [D1Y.OTHER]: 0
};
let $$h0 = [...b4, ..._V];
let $$m1 = _V;
export function $$g3(e) {
  return b4.filter(t => e[t]);
}
export var $$f2 = (e => (e[e.PREV = -1] = "PREV", e[e.NONE = 0] = "NONE", e[e.NEXT = 1] = "NEXT", e))($$f2 || {});
export function $$E4(e) {
  switch (e) {
    case kM.Text:
      return getI18nString("canvas_search.filter.text");
    case kM.FrameOrGroup:
      return getI18nString("canvas_search.filter.frame_or_group");
    case kM.Component:
      return getI18nString("canvas_search.filter.component");
    case kM.Instance:
      return getI18nString("canvas_search.filter.instance");
    case kM.Image:
      return getI18nString("canvas_search.filter.image");
    case kM.Shape:
      return getI18nString("canvas_search.filter.shape");
    case kM.Other:
      return getI18nString("canvas_search.filter.other");
    case kM.MatchCase:
      return getI18nString("canvas_search.filter.match_case");
    case kM.WholeWords:
      return getI18nString("canvas_search.filter.whole_words");
  }
}
export function $$y6(e) {
  switch (e) {
    case kM.Text:
      return _$$A4;
    case kM.FrameOrGroup:
      return A;
    case kM.Component:
      return _$$A2;
    case kM.Instance:
      return _$$A;
    case kM.Image:
      return _$$A6;
    case kM.Shape:
      return _$$A3;
    case kM.Other:
      return _$$A5;
    case kM.MatchCase:
    case kM.WholeWords:
      return null;
  }
}
export const D4 = $$h0;
export const IM = $$m1;
export const OP = $$f2;
export const kH = $$g3;
export const p9 = $$E4;
export const rA = $$_5;
export const sW = $$y6;