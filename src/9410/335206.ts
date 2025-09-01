import { jsx, jsxs } from "react/jsx-runtime";
import { wA, d4 } from "../vendor/514228";
import { glU, NLJ } from "../figma_app/763686";
import { l7 as _$$l, nc } from "../905/189185";
import { Pt } from "../figma_app/806412";
import { n as _$$n } from "../905/734251";
import { t as _$$t } from "../905/303541";
import { qC } from "../figma_app/972736";
import { ES, $O } from "../905/156213";
import { ay } from "../figma_app/147952";
import { BI } from "../figma_app/546509";
import { M as _$$M } from "../9410/228122";
import { kg } from "../9410/139332";
import { AE, Ik } from "../9410/36414";
import { Vq } from "../figma_app/979658";
import { ds, $A, vt } from "../905/862883";
import { fM, mn, Qp, G$, mO, NI, V6, YA, v8, Bo } from "../9410/183049";
import { cX } from "../figma_app/920333";
import { t as _$$t2 } from "../9410/47995";
import { b as _$$b } from "../905/635568";
import { useRef, useCallback, useEffect } from "react";
import { Tc } from "../905/797478";
import { ts } from "../figma_app/120210";
import { Ju } from "../905/102752";
import { Ao, F_ } from "../905/748636";
import { q } from "../3276/826587";
import { jT, N1, hQ } from "../3276/770360";
import { j as _$$j } from "../9410/630757";
import { MR, OO } from "../figma_app/913518";
import { V } from "../9410/365876";
import { X } from "../figma_app/765161";
let N = "delightful-toolbar-media-button";
let A = "InsertMediaModal";
let O = Ju(function () {
  let e = wA();
  let t = d4(e => !!e.modalShown?.data?.shouldMountCenter);
  let i = useRef(null);
  let s = t ? {
    kind: "mountCenter"
  } : {
    kind: "buttonTarget",
    buttonTarget: N
  };
  let {
    initialModalPosition,
    modalPosition,
    setModalPosition
  } = ts(s, 157, 320);
  let p = useCallback(() => {
    glU.triggerAction("set-tool-default", null);
    e(ES({
      type: A
    }));
  }, [e]);
  let h = useCallback(e => {
    setModalPosition(e);
  }, [setModalPosition]);
  let m = !modalPosition || !!initialModalPosition?.equals(modalPosition);
  return (useEffect(() => {
    let e = e => {
      let t = i.current?.getEl();
      let r = Tc(N);
      if (!t || !r) return;
      let n = t.contains(e.target);
      let a = r.contains(e.target);
      !m || n || a || p();
    };
    document.addEventListener("pointerdown", e);
    return () => {
      document.removeEventListener("pointerdown", e);
    };
  }, [p, m]), initialModalPosition) ? jsx(Ao, {
    ref: i,
    arrowPosition: F_.BOTTOM,
    arrowRelativeX: t ? void 0 : 160,
    containerClassName: jT,
    dragHeaderOnly: !0,
    headerClassName: N1,
    initialPosition: initialModalPosition,
    initialWidth: 320,
    isFigJam: !0,
    onClose: p,
    onDragEnd: h,
    onDragStart: () => glU.triggerActionInUserEditScope("set-tool-default", null),
    smallArrow: !0,
    title: _$$t("whiteboard.embeds.insert_embed_modal.title"),
    children: jsx("div", {
      className: hQ,
      "data-testid": "insert-media-modal",
      children: jsx(q, {
        onSuccess: p
      })
    })
  }) : null;
}, A);
let P = "figjam_universal_inserts";
export function $$F11(e) {
  let t = function (e) {
    switch (e) {
      case "Table":
        return NLJ.TABLE;
      case "CodeBlock":
        return NLJ.CODE_BLOCK;
      case "MindMap":
        return NLJ.SHAPE_WHITEBOARD_MINDMAP_TREE_NUCLEUS;
      case "Text":
        return NLJ.TYPE;
      case "Section":
        return NLJ.SECTION;
      default:
        throw Error(`Unknown tool: ${e}`);
    }
  }(e);
  let i = () => {
    _$$l.user("click-insert-tool", () => glU.createNodeAtViewportCenterFromTool(t));
  };
  return {
    insertToolWithDragAction: e => {
      let {
        dropPosition,
        isClick
      } = e;
      isClick ? i() : _$$l.user("drag-insert-tool", () => glU.createNodeFromTool(t, dropPosition.x, dropPosition.y));
    },
    insertToolOnClickAction: i
  };
}
function B(e) {
  let t;
  let i = _$$b();
  let a = wA();
  let d = d4(e => e.user?.id);
  let {
    tabManager,
    searchQuery
  } = cX();
  kg(e.resourceType) && (t = e.resourceType);
  let h = !!AE(e.resourceType);
  let y = t && ds(t) && h;
  let E = () => {
    y && t && a(ay({
      currentUserId: d,
      storeInRecentsKey: $A.FigJam,
      item: {
        id: t,
        type: vt.WhiteboardTool
      }
    }));
    i();
  };
  let T = i => {
    if (t) {
      let {
        insertToolWithDragAction,
        insertToolOnClickAction
      } = $$F11(t);
      i ? insertToolWithDragAction(i) : insertToolOnClickAction();
    }
    e.onInsert?.();
    E();
  };
  let w = e => {
    T(e);
  };
  let S = () => {
    T();
  };
  e.editScopeLabel && (w = nc.user(e.editScopeLabel, w), S = nc.user(e.editScopeLabel, S));
  let {
    dragState,
    onInsertableResourcePointerDown
  } = Ik({
    resource: e.resourceType,
    insertAction: w,
    clickToInsert_DEPRECATED: !1,
    afterSuccessfulInsert: E,
    triggeredFrom: Vq(tabManager.activeTab),
    searchQuery,
    icon: h ? void 0 : e.icon
  });
  return jsxs(_$$n.div, {
    onPointerDown: e.disableDragAndDrop ? void 0 : onInsertableResourcePointerDown,
    "data-testid": "draggable-insert-action",
    children: [jsx(_$$t2, {
      text: e.text,
      description: e.description,
      onClick: S,
      iconComponent: e.icon,
      recordingKey: Pt("inserts", "more", e.recordingKey)
    }), jsx(_$$M, {
      dragState,
      icon: h ? void 0 : e.icon
    })]
  });
}
export function $$U8() {
  return jsx(B, {
    resourceType: "Table",
    text: _$$t("whiteboard.inserts.table_title"),
    description: _$$t("whiteboard.inserts.table_description"),
    recordingKey: "table",
    icon: fM()
  });
}
export function $$G9() {
  return jsx(B, {
    resourceType: "Text",
    text: _$$t("whiteboard.inserts.text_title"),
    description: _$$t("whiteboard.inserts.text_description"),
    recordingKey: "text",
    icon: mn()
  });
}
export function $$K7() {
  let e = _$$b();
  return jsx(_$$t2, {
    text: _$$t("whiteboard.inserts.stamp_title"),
    description: _$$t("whiteboard.inserts.stamp_description"),
    onClick: () => {
      X({
        source: P
      });
      e();
    },
    iconComponent: Qp(),
    recordingKey: Pt("inserts", "more", "stamp")
  });
}
export function $$H1() {
  let e = _$$b();
  return jsx(_$$t2, {
    text: _$$t("whiteboard.inserts.comments_title"),
    description: _$$t("whiteboard.inserts.comments_description"),
    onClick: () => {
      e();
      glU.triggerActionInUserEditScope("set-tool-comments", {
        source: P
      });
    },
    iconComponent: G$(),
    recordingKey: Pt("inserts", "more", "comments")
  });
}
export function $$z6() {
  return jsx(B, {
    resourceType: "Section",
    text: _$$t("whiteboard.inserts.section_title"),
    description: _$$t("whiteboard.inserts.section_description"),
    recordingKey: "section",
    icon: mO()
  });
}
export function $$V5() {
  let e = V();
  return jsx(_$$t2, {
    text: _$$t("whiteboard.inserts.quick_actions_v2"),
    description: _$$t("whiteboard.inserts.quick_actions_v2_description"),
    onClick: e,
    iconComponent: jsx(_$$j, {}),
    recordingKey: Pt("inserts", "more", "quick-actions-v2")
  });
}
export function $$W0() {
  return jsx(B, {
    resourceType: "CodeBlock",
    text: _$$t("whiteboard.inserts.code_block_title"),
    description: _$$t("whiteboard.inserts.code_block_description"),
    recordingKey: "codeBlock",
    icon: NI()
  });
}
export function $$Y4() {
  return jsx(B, {
    resourceType: "MindMap",
    text: _$$t("whiteboard.inserts.mind_map_title"),
    description: _$$t("whiteboard.inserts.mind_map_description"),
    recordingKey: "mindMap",
    icon: V6(),
    editScopeLabel: "insert-mindmap"
  });
}
export function $$J10() {
  let e = MR();
  return jsx(B, {
    resourceType: "Timer",
    text: _$$t("whiteboard.inserts.timer_title"),
    description: _$$t("whiteboard.inserts.timer_description"),
    recordingKey: "timer",
    icon: YA(),
    onInsert: () => {
      e({
        source: OO.INSERTS_MENU
      });
    }
  });
}
export function $$q2() {
  let e = wA();
  let t = BI()?.shouldOptimizeForIpadApp;
  return jsx(B, {
    resourceType: "Image",
    text: _$$t("whiteboard.inserts.media_title"),
    description: _$$t("whiteboard.inserts.media_description"),
    recordingKey: "images",
    icon: v8(),
    onInsert: () => {
      glU.triggerAction("set-tool-default", null);
      glU.triggerAction("place", {
        source: "MEDIA_MODAL"
      });
      e(qC({
        open: !0
      }));
    },
    disableDragAndDrop: t
  });
}
export function $$X3() {
  let e = wA();
  return jsx(B, {
    resourceType: "Link",
    text: _$$t("whiteboard.inserts.links_title"),
    description: _$$t("whiteboard.inserts.links_description"),
    recordingKey: "links",
    icon: Bo(),
    onInsert: () => {
      glU.triggerAction("set-tool-default", null);
      e($O({
        type: O.type,
        data: {
          shouldMountCenter: !0
        }
      }));
    }
  });
}
export const j6 = $$W0;
export const v7 = $$H1;
export const G0 = $$q2;
export const fQ = $$X3;
export const l7 = $$Y4;
export const Lf = $$V5;
export const Sn = $$z6;
export const Ox = $$K7;
export const vh = $$U8;
export const ue = $$G9;
export const m_ = $$J10;
export const Yx = $$F11;