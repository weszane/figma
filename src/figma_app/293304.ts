import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef, useContext } from "react";
import { flushSync } from "react-dom";
import { useDispatch } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { KeyCodes } from "../905/63728";
import { generateRecordingKey, useHandleFocusEvent, useHandleKeyboardEvent, SKIP_RECORDING } from "../figma_app/878298";
import { P } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { setIsRenamingSelectedStyle } from "../905/879323";
import { splitAndJoinPath } from "../figma_app/80990";
import { fullscreenValue } from "../figma_app/455680";
import { getDirname, getBasename } from "../905/309735";
import { t as _$$t } from "../figma_app/440177";
import { zK, zM } from "../905/182453";
import { JU, ks } from "../figma_app/626177";
import { we, RO, Qv } from "../figma_app/393980";
import { dGl } from "../figma_app/27776";
export let $$N0 = 300;
export function $$C1({
  selectedStyleProperties: e,
  styleName: t,
  styleNameInputPrefix: r,
  isInspectPanel: i,
  viewOnly: a,
  recordingKey: s,
  showProperties: o = !0,
  showStylePreview: l = !1,
  onEnterPressed: d
}) {
  return jsxs(AutoLayout, {
    direction: "vertical",
    spacing: 0,
    height: "hug-contents",
    children: [l && jsx(we, {
      selectedStyleProperties: e
    }), jsxs(P, {
      maxHeight: 300,
      width: $$N0,
      children: [jsx(w, {
        styleName: t,
        styleNameInputPrefix: r,
        selectedStyleProperties: e,
        isInspectPanel: i,
        viewOnly: a,
        recordingKey: s,
        onEnterPressed: d
      }), o && (i ? jsx(_$$t, {
        recordingKey: generateRecordingKey(s, "inspectionPanel")
      }) : jsx(RO, {
        recordingKey: s
      }))]
    })]
  });
}
function w({
  selectedStyleProperties: e,
  styleName: t,
  styleNameInputPrefix: r,
  recordingKey: h,
  viewOnly: I,
  onEnterPressed: N
}) {
  let [C, w] = useState(O(t, r));
  useEffect(() => {
    w(O(t, r));
  }, [t, r, w]);
  let R = useDispatch();
  let L = e.guid;
  let P = e.styleType;
  let D = useRef(null);
  let k = useContext(zK);
  let M = useHandleFocusEvent(generateRecordingKey(h, "styleName"), "submit", () => {
    if ("" === C) return;
    let r = t ? getDirname(t) : void 0;
    let n = r ? r + "/" + C : C;
    permissionScopeHandler.user("rename-style", () => Fullscreen?.renameNode(sessionLocalIDToString(L), splitAndJoinPath(n)));
    fullscreenValue.triggerAction("commit");
    F();
    trackEventAnalytics("Style Renamed", {
      styleType: e.styleType
    });
  });
  let F = () => {
    R(setIsRenamingSelectedStyle({
      isRenaming: !1
    }));
  };
  let j = useHandleKeyboardEvent(h, "keydown", e => {
    if (e.keyCode === KeyCodes.TAB) M();else if (e.keyCode === KeyCodes.ENTER) {
      M();
      k === zM.EDIT_STYLE && "" === C || N?.();
    } else {
      if (e.keyCode !== KeyCodes.ESCAPE) return SKIP_RECORDING;
      flushSync(() => {
        w(t ? getBasename(t) : "");
      });
      F();
      D.current?.blur();
    }
  });
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.gap8.pl16.pr16.pt8.pb8.bb1.bSolid.colorBorder.$,
    children: [jsx(JU, {
      disabled: I,
      children: renderI18nText("design_systems.create_style.name")
    }), I ? jsx(AutoLayout, {
      padding: {
        vertical: parsePxInt(dGl)
      },
      width: "hug-contents",
      height: "hug-contents",
      verticalAlignItems: "start",
      children: t
    }) : jsx(ks, {
      autoComplete: "off",
      className: "slides_styles_properties_form--textInput--H1F0- raw_components--textInput--t9D8g raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u",
      delay: 50,
      innerRef: D,
      name: "styleName",
      onBlur: M,
      onChange: e => {
        w(e.target.value);
      },
      onFocus: () => (R(setIsRenamingSelectedStyle({
        isRenaming: !0
      })), w(C), SKIP_RECORDING),
      onKeyDown: j,
      placeholder: Qv(P),
      recordingKey: generateRecordingKey(h, "styleName"),
      value: C
    })]
  });
}
function O(e, t) {
  return (t ?? "") + (e ? getBasename(e) : "");
}
export function $$R2(e, t, r) {
  let n = "";
  e ? n = e.name || "" : sessionLocalIDToString(t?.guid) && r && (n = r);
  return n;
}
export const Gf = $$N0;
export const _f = $$C1;
export const Zv = $$R2;