import { NC } from "../905/17179";
import { ky } from "../figma_app/925970";
import { createOptimistThunk } from "../905/350402";
import { fullscreenValue } from "../figma_app/455680";
import { getFullscreenViewEditorType } from "../figma_app/300692";
import { Rt } from "../figma_app/979658";
import { t as _$$t } from "../905/192333";
import { s as _$$s } from "../figma_app/504088";
import { W } from "../905/80656";
let $$p6 = NC("UNIVERSAL_INSERT_UPDATE_SOURCE_RECT");
let $$m8 = createOptimistThunk((e, {
  id: t,
  isWidget: i
}) => {
  let n = e.getState();
  let r = getFullscreenViewEditorType();
  let a = {
    id: t,
    type: i ? Rt.WIDGETS : Rt.PLUGINS
  };
  let d = {
    id: t,
    type: i ? _$$s.WIDGET : _$$s.PLUGIN
  };
  n.universalInsertModal.showing ? e.dispatch($$A1({
    fdPreviewResource: "figma" === r || "dev" === r ? d : void 0,
    previewResource: "figjam" === r ? a : void 0
  })) : (fullscreenValue.triggerAction("clear-tool", {
    source: "menu"
  }), e.dispatch($$b0({
    initialX: 0,
    initialY: 0,
    fdPreviewResource: "figma" === r ? d : void 0,
    previewResource: "figjam" === r ? a : void 0
  })));
});
let $$h7 = createOptimistThunk((e, t) => {
  t.pinned === _$$t.PINNED_AND_DOCKED_LEFT && W("left", () => {
    e.getState().universalInsertModal.pinned === _$$t.PINNED_AND_DOCKED_LEFT && e.dispatch($$f2());
  });
  e.dispatch($$g3(t));
});
let $$g3 = NC("SET_UNIVERSAL_INSERT_MODAL_PIN");
let $$f2 = createOptimistThunk(e => {
  e.getState().search.sessionId && e.dispatch(ky());
  e.dispatch($$_5());
});
let $$_5 = NC("SET_UNIVERSAL_INSERT_MODAL_ClOSE");
let $$A1 = NC("SET_UNIVERSAL_INSERT_VIEW_RESOURCE_DETAILS");
let $$y4 = NC("SET_UNIVERSAL_INSERT_SCROLLED_DEVELOPMENT_SECTION_INTO_VIEW");
let $$b0 = NC("SET_UNIVERSAL_INSERT_MODAL_OPEN");
export const En = $$b0;
export const IN = $$A1;
export const KE = $$f2;
export const Kl = $$g3;
export const SI = $$y4;
export const eo = $$_5;
export const jx = $$p6;
export const jy = $$h7;
export const pM = $$m8;