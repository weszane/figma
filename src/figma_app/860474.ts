import { U } from "../905/807535";
import { YEY, D1Y, EW4, glU, AjQ } from "../figma_app/763686";
import { A } from "../vendor/292399";
import { debugState } from "../905/407919";
import { o as _$$o } from "../figma_app/516794";
import { At } from "../905/973142";
import { j_, El } from "../figma_app/9619";
import { Fk, Ch, Wy, ml, hw, yo } from "../905/125333";
import { t } from "../905/303541";
import { F } from "../905/302958";
import { sV } from "../figma_app/712525";
import { H1, z, XJ, X0 } from "../figma_app/451700";
import { kM } from "../figma_app/421886";
import { uA } from "../figma_app/781512";
export let $$$$n1;
export function $$E0(e) {
  $$$$n1 = {
    FocusEvent: _$$o(),
    rerunSearch(e, t) {
      H1.search(e).then(({
        resultsByPage: e
      }) => {
        YEY.setSearchResultsAfterSceneGraphChange(Object.keys(e).map((t) => ({
          pageId: t,
          results: e[t]
        })), t);
      });
    },
    getTextMatches(t, r) {
      let {
        [kM.MatchCase]: n = !1,
        [kM.WholeWords]: i = !1
      } = e.getState().canvasSearch.filters;
      let a = {
        useExtendedSearch: !0,
        ...z
      };
      let o = {
        matchCase: n,
        wholeWords: i
      };
      let l = new A([XJ(t)], a);
      let d = `'"${XJ(r).trim()}"`;
      let c = l.search(d);
      let u = [];
      for (let e of c) for (let t of e.matches) u.push(...X0(t, r, o));
      return u;
    },
    rebuildIndex() {
      H1.initializeIndex();
    },
    logIndex() {
      H1.logIndex();
    },
    setResultInfo(e, t, r, n) {
      null != e && Fk.syncFromFullscreen({
        total: e
      });
      Ch.syncFromFullscreen({
        pageId: t,
        index: r
      });
      Wy.syncFromFullscreen((e) => {
        let t;
        for (let r of (t = n.clearAllPreviousResults ? new Map() : new Map(e), n.addedActiveTextMatches)) (t.get(r.node) ?? t.set(r.node, new Set()).get(r.node)).add(r.matchIndex);
        for (let e of n.removedActiveTextMatches) {
          let r = t.get(e.node);
          r && (r.$$delete(e.matchIndex), r.size || t.$$delete(e.node));
        }
        return t;
      });
      ml.syncFromFullscreen((e) => {
        let t;
        if (!n) return new Set();
        for (let r of (t = n.clearAllPreviousResults ? new Set() : new Set(e), n.addedDirectSelection)) t.add(r);
        for (let e of n.removedDirectSelection) t.$$delete(e);
        for (let e of n.addedIndirectSelection) t.$$delete(e);
        return t;
      });
      hw.syncFromFullscreen((e) => {
        let t;
        if (!n) return new Set();
        for (let r of (t = n.clearAllPreviousResults ? new Set() : new Set(e), n.addedIndirectSelection)) t.add(r);
        for (let e of n.removedIndirectSelection) t.$$delete(e);
        return t;
      });
    },
    setFocusAndNavigate(e) {
      this.FocusEvent.emit(e);
    },
    setCategoryCounts(e) {
      let t = {};
      for (let r of U(D1Y)) t[r] = e[r];
      yo.syncFromFullscreen(t);
    },
    updateCategoryCounts(e) {
      yo.syncFromFullscreen((t) => {
        let r = {};
        for (let n of U(D1Y)) r[n] = t[n] + e[n];
        return r;
      });
    },
    showReplace() {
      e.dispatch(sV(EW4.REPLACE));
    },
    showMissingFontBell() {
      e.dispatch(F.enqueue({
        type: "canvas-search-missing-fonts",
        message: t("canvas_search.missing_fonts"),
        button: {
          text: t("canvas_search.show_missing_fonts"),
          action: () => {
            glU.findMissingFontsAndShowPopover();
          }
        }
      }));
    },
    detectTextTransform(e) {
      let t = !1;
      for (let r of e) {
        if (!RegExp("\\p{Lu}", "u").test(r)) return t ? AjQ.UPPER_FIRST : AjQ.NONE;
        t = !0;
      }
      return AjQ.UPPER_ALL;
    },
    applyTextTransform(e, t) {
      switch (t) {
        case AjQ.NONE:
          return e;
        case AjQ.UPPER_FIRST:
          {
            let t = String.fromCodePoint(e.codePointAt(0));
            let r = e.substring(t.length);
            return t.toLocaleUpperCase() + r;
          }
        case AjQ.UPPER_ALL:
          return e.toLocaleUpperCase();
      }
    },
    getAnnotationTextContent(e) {
      let t = debugState.getState().mirror.sceneGraph;
      let r = t.get(e);
      let n = t.getRoot();
      return r && n ? r.annotations.map((e) => {
        let t = "";
        if (e.categoryId) {
          let r = n.annotationCategories?.find((t) => t.id === e.categoryId);
          r && (t = uA(r) + " ");
        }
        return t + ("lexical" === j_(e.label) ? El(e.label) : At(e.label));
      }).join(" ") : "";
    }
  };
}
export const n = $$E0;
export const r = $$$$n1;