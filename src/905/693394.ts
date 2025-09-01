import { isNotNullish } from "../figma_app/95419";
import r from "../vendor/267721";
import { t as _$$t } from "../905/303541";
import { LX } from "../figma_app/646357";
import { Dh } from "../figma_app/177697";
import { I } from "../905/883812";
import { b } from "../905/857767";
var a = r;
export class $$u0 {
  constructor(e) {
    this.result = [];
    this.fileIndex = 0;
    this.rowSize = e ? 1 : 6;
  }
  getResult() {
    return this.result;
  }
  addItem(e) {
    this.result.push(e);
    e.type === b.LibraryName || e.type === b.HierarchyPathName ? I(e.type, e.name) : e.type === b.SlideThemeName && I(e.type, e.name, e.secondaryText);
  }
  addLibraryStyleItemsToResult(e, t, i, n, r) {
    0 !== e.length && (r && this.addItem({
      type: b.LibraryName,
      name: r,
      fileKey: i,
      libraryKey: n
    }), e.forEach((e, n) => {
      let r = t[e];
      r && 0 !== r.length && (e && this.addItem({
        type: b.HierarchyPathName,
        name: e,
        fileKey: i
      }), a()(r, this.rowSize).forEach((e, t) => this.addItem({
        type: b.StylesRow,
        styles: e,
        fileIndex: this.fileIndex,
        hierarchyPathIndex: n,
        rowIndex: t,
        rowSize: this.rowSize
      })));
    }), this.fileIndex++);
  }
  _addSlideThemeItemsToResult(e, t, i, n, r) {
    this.addItem({
      type: b.SlideThemeName,
      name: i,
      fileKey: e,
      themeId: t,
      secondaryText: r
    });
    n.length > 0 && (a()(n, this.rowSize).forEach((e, t) => this.addItem({
      type: b.StylesRow,
      styles: e,
      fileIndex: this.fileIndex,
      hierarchyPathIndex: 0,
      rowIndex: t,
      rowSize: this.rowSize
    })), this.fileIndex++);
  }
  addSlideThemesToResult(e, t, i, r) {
    let a = Object.keys(r).sort((e, t) => e === i ? -1 : t === i ? 1 : 0);
    for (let d of a) {
      let c = r[d] ?? "";
      let u = Dh(d);
      if (u) {
        let r = d === i ? _$$t("slides.properties_panel.variable_list.current_slide") : void 0;
        let a = u.styleGUIDs.map(e => t[e]).filter(isNotNullish);
        LX(a);
        a.length > 0 && this._addSlideThemeItemsToResult(e, d, c, a, r);
      }
      d === i && a.length > 1 && this.addSeparator();
    }
  }
  addSeparator() {
    this.addItem({
      type: b.Separator
    });
  }
}
export const V = $$u0;