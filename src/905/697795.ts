import { d4 } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { ce } from "../figma_app/347146";
import { eD } from "../figma_app/876459";
import { Ay, s0 } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { Ay as _$$Ay2 } from "../figma_app/778880";
import { t as _$$t } from "../905/303541";
import { UN, V3 } from "../figma_app/976345";
import { wr } from "../figma_app/387599";
import { OE } from "../figma_app/930386";
import { nF } from "../905/350402";
import { sf } from "../905/929976";
import { VB } from "../figma_app/91703";
import { Ce } from "../905/156213";
import { c5, p4 } from "../905/93909";
import { NR } from "../905/977218";
import { XE } from "../figma_app/976749";
import { Xm } from "../905/760074";
import { Y5 } from "../figma_app/455680";
import { nT, wN } from "../figma_app/53721";
import { O as _$$O } from "../905/833838";
import { P as _$$P } from "../905/200237";
import { f as _$$f } from "../figma_app/252485";
import { yt } from "../905/766303";
import { GT } from "../figma_app/840917";
import { AE, Nn } from "../905/225144";
import { TA } from "../905/372672";
import { Iu, vU } from "../figma_app/193867";
let n;
export function $$D3() {
  return getInitialOptions().release_manifest_git_commit;
}
function L(e, t, i = "") {
  if (ce()) {
    document.title = t ? `${i}${t}` : e;
    return;
  }
  if (e !== (n ? n + document.title : document.title)) {
    if ("safari" !== _$$Ay2.browserType) {
      let t;
      let i = AE(e);
      t = document.getElementById("custom-emoji-favicon");
      i ? (n = i, t || ((t = document.createElement("link")).id = "custom-emoji-favicon", t.rel = "icon", document.head.appendChild(t)), t.href = "data:image/svg+xml," + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">{text}</text></svg>'.replace("{text}", i)) : (t && t.remove(), n = void 0);
      i && (e = Nn(e, i));
    }
    document.title = e;
    eD && t && eD.setTitle(t, i);
  }
}
export function $$F6(e, t = null, i = "") {
  let n = function (e) {
    switch (e) {
      case nT.Whiteboard:
        return " \u2013 FigJam";
      case nT.Slides:
        return " \u2013 Figma Slides";
      case nT.Sites:
        return " \u2013 Figma Sites";
      case nT.Cooper:
        return " \u2013 Figma Buzz";
      case nT.Figmake:
        return " \u2013 Figma Make";
      default:
        return " \u2013 Figma";
    }
  }(t);
  L(`${i}${e}${n}`, e, i);
}
export function $$M2(e, t) {
  let i = Iu(e, t);
  if (!i) {
    L("Figma", null);
    return;
  }
  if ("fullscreen" === t.view && t.tryPluginName) {
    e.openFile ? L(e.openFile.name, i) : L(_$$t("community.try.plugin_name_with_community", {
      pluginName: t.tryPluginName
    }), i);
    return;
  }
  if ("prototype" === t.view) {
    let n;
    let r = "";
    if (_$$f(t.file.editor_type)) n = r = `${t.isPresenterView ? _$$t("slides.general.presenter") : _$$t("slides.general.slide_deck")} \xb7 ${i} - ${_$$t("slides.general.slides")}`;else {
      let t = function (e) {
        let t = e.prototype;
        for (let e of t.pages) if (e.nodeId === t.currentPageId) return e.name;
        return "";
      }(e);
      t && e.prototype.pages.length > 1 ? (r = `\u25B6 ${i} - ${t}`, n = `${i} - ${t}`) : (r = `\u25B6 ${i}`, n = i);
    }
    L(r, n);
    return;
  }
  if ("fullscreen" === t.view && !e.openFile) {
    let e = GT();
    e?.name ? i = e.name : t?.localFileName && (i = t.localFileName);
  }
  let n = yt(e);
  if (n && Xm(n)) {
    L(`\u2325 ${i}`, `${i}`);
    return;
  }
  $$F6(i, XE(t));
}
export let $$j1 = nF(e => Ay.listen(t => {
  "POP" === t && function (t) {
    if (t) {
      let i = e.getState();
      let n = i.selectedView;
      if (!s0(t)) return;
      let {
        jsCommitHash,
        searchSessionId,
        ...s
      } = t;
      if (void 0 !== jsCommitHash && jsCommitHash !== $$D3()) {
        Ay.reload("Navigating to a state that was pushed by an older version of this application");
        return;
      }
      if ("fullscreen" === n.view && !Y5.isReady()) {
        Ay.reload("User navigated before fullscreen fully initialized");
        return;
      }
      if ("fullscreen" === s.view && !s.fileKey) {
        window.history.back();
        return;
      }
      if ("fullscreen" === n.view && ("fullscreen" !== s.view || n.fileKey !== s.fileKey)) e.dispatch(VB({
        oldSelectedView: n,
        newSelectedView: s
      }));else {
        if (e.dispatch(Ce()), "communityHub" === s.view && "searchAndBrowse" === s.subView && OE(s.data)) {
          let t = wr(i);
          t && e.dispatch(NR({
            sessionId: t
          }));
        }
        e.dispatch(sf({
          ...s,
          fromPopstate: !0
        }));
        $$M2(i, s);
      }
    }
  }(Ay.location.state);
  s0(Ay.location.state) || function () {
    let t = e.getState();
    let i = vU(t, Ay.location.pathname, Ay.location.search, Ay.location.hash, null);
    null !== i && e.dispatch(sf({
      ...i,
      fromPopstate: !0
    }));
  }();
}));
export function $$U4(e, t, i, n) {
  e(UN({
    fileKey: t.key
  }));
  let r = i || n;
  let a = i ? _$$O.ORG : _$$O.TEAM;
  e(r ? c5({
    planId: r,
    planType: a
  }) : p4({
    planId: i || _$$P
  }));
  e(sf({
    view: "fullscreen",
    fileKey: t.key,
    editorType: t.editorType ? wN(t.editorType) : nT.Design
  }));
}
export function $$B8(e, t, i, n) {
  sx("Open File in New Tab Click", {
    fileKey: t,
    uiSelectedView: JSON.stringify(i)
  });
  n(UN({
    fileKey: t
  }));
  Ay.redirect(e, "_blank");
}
export function $$V0(e, t, i, n) {
  sx("Open Prototype in New Tab Click", {
    fileKey: t,
    pageId: i,
    uiSelectedView: JSON.stringify(n)
  });
  Ay.redirect(e, "_blank");
}
export function $$G5(e, t) {
  t(V3({
    url: e
  }));
}
export function $$z7(e, t) {
  let i = TA();
  let n = e || t;
  let s = d4(e => getFeatureFlags().limited_plan_spaces ? e.plans : i ? e.authedUsers.byId[i]?.plans : null);
  return !!s?.find(e => e.plan_id === n);
}
export const D4 = $$V0;
export const De = $$j1;
export const OR = $$M2;
export const Qr = $$D3;
export const Tq = $$U4;
export const Wq = $$G5;
export const hL = $$F6;
export const jm = $$z7;
export const nz = $$B8;