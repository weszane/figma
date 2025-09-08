import { NodeType } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, atomStoreManager } from "../figma_app/27355";
import { WB } from "../905/761735";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { v } from "../figma_app/314838";
let $$c2 = atom(-1);
let $$u11 = atom([]);
let $$p7 = atom(!1);
let $$_0 = atom(void 0);
let $$h4 = atom(0);
export function $$m5(e, t) {
  WB().optimisticallyDeleteWithUUID({
    ColorPalette: {
      [e]: null
    }
  }, v.deleteColorPalette(e)).then(() => t(F.enqueue({
    message: getI18nString("fullscreen.color_palette.delete_success")
  }))).catch(() => t(F.enqueue({
    message: getI18nString("fullscreen.color_palette.delete_failure")
  })));
}
export function $$g8(e, t, r) {
  let {
    uuid
  } = e;
  WB().optimisticallyCreateWithUUID({
    ColorPalette: {
      [uuid]: e
    }
  }, v.createColorPalette(e)).then(() => {
    t(F.enqueue({
      message: getI18nString("fullscreen.color_palette.saved_success")
    }));
  }).catch(() => {
    t(F.enqueue({
      message: getI18nString("fullscreen.color_palette.saved_failure")
    }));
    r();
  });
}
export function $$f3(e, t, r) {
  let {
    uuid
  } = e;
  WB().optimisticallyUpdateWithUUID({
    ColorPalette: {
      [uuid]: e
    }
  }, v.updateColorPalette(e)).then(() => t(F.enqueue({
    message: getI18nString("fullscreen.color_palette.saved_success")
  }))).catch(() => {
    t(F.enqueue({
      message: getI18nString("fullscreen.color_palette.saved_failure")
    }));
    r();
  });
}
export function $$E10(e, t, r) {
  WB().optimisticallyUpdate({
    Team: {
      [e]: {
        defaultColorPaletteUuid: t
      }
    }
  }, v.setTeamDefaultPalette(e, t)).catch(() => {
    r(F.enqueue({
      message: getI18nString("whiteboard.color_palettes.visual_bell.failed_to_set_team_default")
    }));
  });
}
export function $$y1(e, t) {
  WB().optimisticallyUpdate({
    Team: {
      [e]: {
        defaultColorPaletteUuid: null
      }
    }
  }, v.clearTeamDefaultPalette(e)).catch(() => {
    t(F.enqueue({
      message: getI18nString("whiteboard.color_palettes.visual_bell.failed_to_clear_team_default")
    }));
  });
}
export function $$b12(e) {
  let {
    base,
    sticky,
    highlight
  } = e.variations;
  return 0 === base.length || 0 === sticky.length || 0 === highlight.length ? null : {
    pencilColor: base[0],
    highlighterColor: highlight[0],
    shapeColor: base.length > 1 ? base[1] : base[0],
    stickyColor: sticky[Math.floor(Math.random() * sticky.length)],
    sectionColor: base[Math.floor(Math.random() * base.length)]
  };
}
export function $$T6(e) {
  switch (e) {
    case NodeType.STICKY:
      return ["sticky"];
    case NodeType.HIGHLIGHT:
      return ["highlight"];
    default:
      return ["base", "baseLight"];
  }
}
export function $$I9() {
  let e = atomStoreManager.get($$_0);
  if (!e) return;
  let t = e.base;
  if (!t) return;
  let r = getSingletonSceneGraph().getDirectlySelectedNodes().filter(e => "STICKY" === e.type || "SHAPE_WITH_TEXT" === e.type || "SECTION" === e.type || "CONNECTOR" === e.type || "VECTOR" === e.type || "HIGHLIGHT" === e.type);
  let n = new Map();
  r.forEach(e => {
    e.immutableFrameShape && (e = e.immutableFrameShape);
    let t = e.fills.length > 0 ? e.fills[0].color : void 0;
    let r = e.strokePaints.data.length > 0 ? e.strokePaints.data[0].color : void 0;
    let i = t || r;
    i && (n.has(i) ? n.set(i, n.get(i) + 1) : n.set(i, 1));
  });
  let s = Array.from(n.entries()).sort((e, t) => t[1] - e[1]);
  let o = new Map();
  let l = t.sort(() => Math.random() - .5);
  s.forEach((e, t) => {
    o.set(e[0], l[t % l.length]);
  });
  r.forEach(e => {
    if (e.immutableFrameShape && (e = e.immutableFrameShape), e.fills.length > 0) {
      let t = e.fills[0].color;
      let r = t ? o.get(t) : void 0;
      r && (e.fills = [{
        type: "SOLID",
        color: r
      }]);
    } else if (e.strokePaints.data.length > 0) {
      let t = e.strokePaints.data[0].color;
      let r = t ? o.get(t) : void 0;
      r && (e.strokePaints = {
        data: [{
          type: "SOLID",
          color: r
        }],
        blobs: []
      });
    }
  });
}
export const $R = $$_0;
export const In = $$y1;
export const Jq = $$c2;
export const NK = $$f3;
export const Qv = $$h4;
export const RN = $$m5;
export const Uh = $$T6;
export const Ze = $$p7;
export const cl = $$g8;
export const db = $$I9;
export const dq = $$E10;
export const rN = $$u11;
export const zd = $$b12;