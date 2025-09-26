import { X } from "../905/545629";
import { r } from "../905/500700";
import { A } from "../905/966808";
import { l as _$$l } from "../905/723538";
import { W } from "../905/977664";
import { w } from "../905/866036";
import { M } from "../905/720609";
import { b as _$$b } from "../905/669604";
import { R } from "../905/351865";
import { a as _$$a } from "../905/78349";
import { _ as _$$_ } from "../905/750682";
import { Y } from "../905/560360";
import { O } from "../905/193528";
import { V } from "../905/260951";
import { H } from "../905/422489";
import { Ro } from "../905/962457";
import { Z } from "../905/512040";
import { VideoInteractionHandler } from "../905/905728";
export let $$n0;
let I = {
  ArrangeAsListBehavior: _$$b,
  ConnectorToolBehavior: _$$a,
  TableBehavior: H,
  TemplatePreviewBehavior: Z,
  VideoBehavior: VideoInteractionHandler,
  SectionPresetBehavior: V,
  DevHandoffAnnotationsMouseBehavior: _$$l,
  WebpageBehavior: O,
  SitesBlockBehavior: Y,
  SlideDeckAddBehavior: w,
  SlideDeckReorderRowBehavior: M,
  MoveEmbeddedPrototypeBehavior: W,
  BuzzGridAddBehavior: X,
  BuzzGridReorderRowBehavior: r,
  BuzzGridStateGroupErrorBehavior: A,
  FrameQuickAddBehavior: _$$_,
  CMSRepeaterCandidateBehavior: R
};
class S {
  createMouseBehavior(e) {
    if (e in I) return new I[e](e);
    throw Error("unexpected mouse behavior name: " + e);
  }
  tableUiReorderHandleHoveredLength() {
    return Ro.reorderHandleHoveredLength;
  }
  tableUiAddButtonHoveredRadius() {
    return Ro.addButtonHoveredRadius;
  }
}
export function $$v1() {
  $$n0 = new S();
}
export const Dt = $$n0;
export const fG = $$v1;