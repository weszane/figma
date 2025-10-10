import { GraphicElement } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { primaryNodeTypes, searchOptions, NodeType } from "../figma_app/421886";
import { A } from "../3850/868552";
import { A as _$$A } from "../3850/839808";
import { A as _$$A2 } from "../2854/372209";
import { A as _$$A3 } from "../svg/547085";
import { A as _$$A4 } from "../2854/160761";
import { A as _$$A5 } from "../5724/882384";
import { A as _$$A6 } from "../svg/370498";
let $$_5 = {
  [GraphicElement.TEXT]: 0,
  [GraphicElement.FRAME_OR_GROUP]: 0,
  [GraphicElement.COMPONENT]: 0,
  [GraphicElement.INSTANCE]: 0,
  [GraphicElement.IMAGE]: 0,
  [GraphicElement.SHAPE]: 0,
  [GraphicElement.OTHER]: 0
};
let $$h0 = [...primaryNodeTypes, ...searchOptions];
let $$m1 = searchOptions;
export function $$g3(e) {
  return primaryNodeTypes.filter(t => e[t]);
}
export var $$f2 = (e => (e[e.PREV = -1] = "PREV", e[e.NONE = 0] = "NONE", e[e.NEXT = 1] = "NEXT", e))($$f2 || {});
export function $$E4(e) {
  switch (e) {
    case NodeType.Text:
      return getI18nString("canvas_search.filter.text");
    case NodeType.FrameOrGroup:
      return getI18nString("canvas_search.filter.frame_or_group");
    case NodeType.Component:
      return getI18nString("canvas_search.filter.component");
    case NodeType.Instance:
      return getI18nString("canvas_search.filter.instance");
    case NodeType.Image:
      return getI18nString("canvas_search.filter.image");
    case NodeType.Shape:
      return getI18nString("canvas_search.filter.shape");
    case NodeType.Other:
      return getI18nString("canvas_search.filter.other");
    case NodeType.MatchCase:
      return getI18nString("canvas_search.filter.match_case");
    case NodeType.WholeWords:
      return getI18nString("canvas_search.filter.whole_words");
  }
}
export function $$y6(e) {
  switch (e) {
    case NodeType.Text:
      return _$$A4;
    case NodeType.FrameOrGroup:
      return A;
    case NodeType.Component:
      return _$$A2;
    case NodeType.Instance:
      return _$$A;
    case NodeType.Image:
      return _$$A6;
    case NodeType.Shape:
      return _$$A3;
    case NodeType.Other:
      return _$$A5;
    case NodeType.MatchCase:
    case NodeType.WholeWords:
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