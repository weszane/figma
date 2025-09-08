import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef, useContext } from "react";
import { flushSync } from "../vendor/944059";
import { useDispatch } from "../vendor/514228";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { Uz } from "../905/63728";
import { Pt, of, v_, aH } from "../figma_app/806412";
import { P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { Y } from "../905/830372";
import { ay } from "../905/879323";
import { J_ } from "../figma_app/80990";
import { fullscreenValue } from "../figma_app/455680";
import { In, kH } from "../905/309735";
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
  return jsxs(Y, {
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
        recordingKey: Pt(s, "inspectionPanel")
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
  let M = of(Pt(h, "styleName"), "submit", () => {
    if ("" === C) return;
    let r = t ? In(t) : void 0;
    let n = r ? r + "/" + C : C;
    permissionScopeHandler.user("rename-style", () => Fullscreen?.renameNode(sessionLocalIDToString(L), J_(n)));
    fullscreenValue.triggerAction("commit");
    F();
    trackEventAnalytics("Style Renamed", {
      styleType: e.styleType
    });
  });
  let F = () => {
    R(ay({
      isRenaming: !1
    }));
  };
  let j = v_(h, "keydown", e => {
    if (e.keyCode === Uz.TAB) M();else if (e.keyCode === Uz.ENTER) {
      M();
      k === zM.EDIT_STYLE && "" === C || N?.();
    } else {
      if (e.keyCode !== Uz.ESCAPE) return aH;
      flushSync(() => {
        w(t ? kH(t) : "");
      });
      F();
      D.current?.blur();
    }
  });
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap8.pl16.pr16.pt8.pb8.bb1.bSolid.colorBorder.$,
    children: [jsx(JU, {
      disabled: I,
      children: renderI18nText("design_systems.create_style.name")
    }), I ? jsx(Y, {
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
      onFocus: () => (R(ay({
        isRenaming: !0
      })), w(C), aH),
      onKeyDown: j,
      placeholder: Qv(P),
      recordingKey: Pt(h, "styleName"),
      value: C
    })]
  });
}
function O(e, t) {
  return (t ?? "") + (e ? kH(e) : "");
}
export function $$R2(e, t, r) {
  let n = "";
  e ? n = e.name || "" : sessionLocalIDToString(t?.guid) && r && (n = r);
  return n;
}
export const Gf = $$N0;
export const _f = $$C1;
export const Zv = $$R2;