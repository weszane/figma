import { debug } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import a from "../vendor/635";
import { FuzzyMatcher } from "../figma_app/616261";
import { dU, cT } from "../905/660732";
import { hasSeparator, hasHeader, hasRenderFunction, hasActionOrCallback } from "../figma_app/847915";
import { a as _$$a } from "../905/69481";
import { Yh } from "../figma_app/357047";
import { EG } from "../figma_app/995580";
import { isQaSearchFrecencyEnabled } from "../figma_app/144974";
import { x0 } from "../figma_app/963341";
import { UN } from "../905/525678";
import { r as _$$r } from "../905/454477";
import { ou } from "../905/942991";
var s = a;
export class $$E2 {
  constructor(e, t, r, n) {
    for (let i of (this.searchMap = {}, this.searchMapKeys = [], this.includeDisabled = !1, this.acceptsUnicode = !1, this.queryStringMap = {}, this.includeDisabled = !!(n && n.includeDisabled), this.acceptsUnicode = !!(n && n.acceptsUnicode), r.forEach(r => this.addFigmaMenuItemsToSearchMap(e, t, r)), this.searchMapKeys = Object.keys(this.searchMap), this.searchMapKeys)) {
      let e = this.searchMap[i];
      let t = e.queryString ? `${e.queryString} ${i}` : i;
      this.queryStringMap[t] = e;
    }
  }
  addFigmaMenuItemsToSearchMap(e, t, r) {
    if (!r || hasSeparator(r) || hasHeader(r) || hasRenderFunction(r) || !UN(r, {
      isDesktopMenu: !1,
      isReadOnly: e.isReadOnly,
      isSearching: !0,
      selectedView: t
    })) return;
    let i = "children" in r;
    if (!hasActionOrCallback(r) || i || r.hideForQuickCommand || this._addToIndexInternal(r), "plugins-menu" !== r.name && "widgets-menu" !== r.name && i) for (let i of (debug(null != r.children, "this should be the type of menu groups that has FullscreenMenuItem as children"), r.children)) this.addFigmaMenuItemsToSearchMap(e, t, i);
  }
  _addToIndexInternal(e) {
    let {
      itemDisplayText,
      searchItem
    } = $$y0(e);
    this.searchMap[itemDisplayText] = searchItem;
  }
  getItem(e, t) {
    if (!(t in this.searchMap)) return;
    let r = {
      ...this.searchMap[t].fullscreenMenuAction
    };
    r.disabled = $$b1(e, r);
    return r;
  }
  _buildSearchResult(e, t, r, n) {
    let i = {
      ...t
    };
    let a = {
      ...i.fullscreenMenuAction
    };
    a.stringMatchedAgainst = r?.text || "";
    a.substringMatchScore = n?.score || 0;
    a.substringMatchedAgainst = n?.text || "";
    a.stringMatchScore = this._getStringMatchScore(a, r);
    a.popularityScore = _$$a(a.action);
    a.disabled = $$b1(e, a);
    return {
      ...i,
      fullscreenMenuAction: a
    };
  }
  _getStringMatchScore(e, t) {
    return void 0 !== e.isLowPriorityMatch && e.isLowPriorityMatch ? 0 : t?.score || 0;
  }
  _searchByFuzzyMatchAndSubstringMatch(e, t) {
    if (!t) return [];
    let r = new FuzzyMatcher(t, this.acceptsUnicode);
    if (!r.isValidQuery()) return [];
    let n = new dU(t);
    let i = [];
    for (let [t, a] of Object.entries(this.queryStringMap)) {
      let o = r.matchAgainstText(t);
      let d = o?.score || 0;
      let c = [];
      for (let e of (c.push(n.matchAgainstText(t, cT.VISIBLE)), a.fullscreenMenuAction.searchSynonyms || [])) {
        let t = n.matchAgainstText(e, cT.HIDDEN);
        c.push(t);
      }
      let u = s()(c, e => e.score);
      let p = u?.score || 0;
      (d > 0 || p > 0) && i.push(this._buildSearchResult(e, a, o, u));
    }
    return i;
  }
  _searchByFuzzyMatch(e, t) {
    let r = new FuzzyMatcher(t, this.acceptsUnicode);
    if (!r.isValidQuery()) return [];
    let n = [];
    let i = r.matchAgainst(Object.keys(this.queryStringMap));
    if (i.length) for (let t of i) {
      if (isQaSearchFrecencyEnabled() && t.score < 1) continue;
      let r = {
        ...this.queryStringMap[t.text]
      };
      n.push(this._buildSearchResult(e, r, t));
    }
    return n;
  }
  _searchForSearchItem(e, t) {
    if (!t) return [];
    let r = [];
    r = isQaSearchFrecencyEnabled() ? this._searchByFuzzyMatchAndSubstringMatch(e, t) : this._searchByFuzzyMatch(e, t);
    let n = isQaSearchFrecencyEnabled() ? ou({
      ...x0(),
      acceptsUnicode: this.acceptsUnicode
    }) : _$$r;
    r = r.sort((e, r) => n.sort(t, e, r));
    this.includeDisabled || (r = r.filter(e => !e.fullscreenMenuAction.disabled));
    return r;
  }
  search(e, t) {
    return this._searchForSearchItem(e, t).map(e => e.fullscreenMenuAction);
  }
  searchIncludeKey(e, t) {
    return this._searchForSearchItem(e, t).map(e => [e.searchKey, e.fullscreenMenuAction]);
  }
  list(e) {
    let t = this.searchMapKeys.map(t => {
      let r = {
        ...this.searchMap[t].fullscreenMenuAction
      };
      r.popularityScore = _$$a(r.action);
      r.disabled = $$b1(e, r);
      return r;
    });
    t.sort((e, t) => (t.popularityScore || 0) - (e.popularityScore || 0));
    return t;
  }
  map(e) {
    let t = {};
    this.searchMapKeys.forEach(r => {
      let n = {
        ...this.searchMap[r].fullscreenMenuAction
      };
      n.popularityScore = _$$a(n.action);
      n.disabled = $$b1(e, n);
      t[n.name || n.action || r] = n;
    });
    return t;
  }
}
export function $$y0(e) {
  let t = EG(e);
  let r = {
    fullscreenMenuAction: e,
    queryString: "",
    searchKey: t
  };
  if ("plugins-menu-item" === e.name) {
    let t = e.extensionSearchString || "";
    r.searchKey = t;
  }
  e.isRepairCommand && getFeatureFlags().internal_only_debug_tools && !isQaSearchFrecencyEnabled() && (r.queryString = "repair");
  e.searchSynonyms && !isQaSearchFrecencyEnabled() && (r.queryString = [r.queryString, ...e.searchSynonyms].join(" "));
  return {
    itemDisplayText: t,
    searchItem: r
  };
}
export function $$b1(e, t) {
  return t.disabled ? t.disabled : !(t.name || Yh(e, t.action) || t.quickAction?.alwaysEnabled);
}
export const _g = $$y0;
export const oG = $$b1;
export const xm = $$E2;