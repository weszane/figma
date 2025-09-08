import { c2 } from "../905/382883";
import { SelectionPaintHelpers, VariableResolvedDataType } from "../figma_app/763686";
import { GP } from "../figma_app/15927";
import { atom, atomStoreManager } from "../figma_app/27355";
import { gq } from "../905/125333";
import { Gm } from "../figma_app/91703";
import { QA, Xp, n0, Lh, uQ, Mc, oI } from "../905/854717";
import { Yr, o$ } from "../figma_app/8833";
import { Gp, uH } from "../figma_app/646357";
import { S, K } from "../905/733706";
import { Z as _$$Z } from "../905/939602";
import { E_ } from "../figma_app/177697";
export let $$m0 = atom({});
export class $$g1 {
  constructor(e) {
    this.store = e;
    this.dispatch = e => {
      this.store.dispatch(e);
    };
  }
  showEyedropper(e, t, r, n, i, a, s, o, d, c) {
    this.dispatch(Gm({
      color: e,
      width: t,
      height: r,
      rgba: n,
      grid: i,
      cursorPosition: a,
      assetId: s,
      variableSetModeId: o,
      resolvedVariableColor: d,
      dropperData: c
    }));
  }
  hideEyedropper() {
    this.dispatch(Gm(null));
  }
  updateSelectionImages(e) {
    let t = atomStoreManager.get($$m0);
    let r = Object.keys(e).length !== Object.keys(t).length;
    if (!r) {
      for (let n in t) if (!e[n]) {
        r = !0;
        break;
      }
    }
    r && atomStoreManager.set($$m0, e);
  }
  updateSelectionPaintsWithFillEncodedPaints(e, t, r, i, a, s, o, l) {
    let c = S(e, t, r, i, a, s, l);
    let u = this.store.getState().mirror.selectionPaints;
    (!c2(u.paints, c) || u.emptyDueToLimitExceeded || o) && (this.store.dispatch(QA(c)), o && this.store.dispatch(Xp(!0)));
  }
  updatePaintsDirectlyOnSingleNodeWithFillEncodedPaints(e, t) {
    var r = [];
    for (let t of e) {
      let e = K(t);
      e ? r.push(e) : console.error(`Failed to decode: ${t}`);
    }
    r = r.map((e, r) => (e.variableScopes = new Set(t ? t[r] : []), e));
    let i = this.store.getState().mirror.selectionPaints;
    (!c2(i.paintsDirectlyOnSingleNode, r) || i.emptyDueToLimitExceeded) && this.store.dispatch(n0(r));
  }
  updatePaintStyles(e, t, r) {
    let i = this.store.getState().library;
    let a = this.store.getState().mirror.sceneGraph;
    let s = t.map(e => {
      let t = Gp(e.key, e.guids, i);
      return t ? {
        styleKey: e.key,
        version: e.version,
        styleGUIDs: e.guids,
        count: e.count,
        uniqueNodesCount: e.uniqueNodesCount,
        styleName: uH(t, a),
        variableScopes: new Set(e.variableScopes),
        isOnlyDirectlySelected: e.isOnlyDirectlySelected
      } : {
        styleKey: e.key,
        version: e.version,
        styleGUIDs: e.guids,
        count: e.count,
        uniqueNodesCount: e.uniqueNodesCount,
        styleName: "",
        variableScopes: new Set(e.variableScopes),
        isOnlyDirectlySelected: e.isOnlyDirectlySelected
      };
    });
    s.sort((e, t) => e.count > t.count ? -1 : e.count === t.count && e.styleName < t.styleName ? -1 : 1);
    (!c2(e, s) || this.store.getState().mirror.selectionPaints.emptyDueToLimitExceeded) && this.store.dispatch(r(s));
  }
  updateSelectionPaintsWithStyles(e) {
    this.updatePaintStyles(this.store.getState().mirror.selectionPaints.styles, e, Lh);
  }
  updateSelectionTextAndEffectStyles(e) {
    gq.syncFromFullscreen({
      styles: e
    });
  }
  updatePaintsDirectlyOnSingleNodeWithStyles(e) {
    this.updatePaintStyles(this.store.getState().mirror.selectionPaints.stylesDirectlyOnSingleNode, e, uQ);
  }
  clearSelectionPaintsDueToLimitExceeded() {
    this.store.dispatch(Mc());
  }
  clearSelectionTextAndEffectStylesDueToLimitExceeded() {
    gq.syncFromFullscreen({
      styles: []
    });
  }
  updateSelectionPaintFromDropper(e) {
    let t = this.store.getState().currentSelectionPaintInPicker;
    if (null == t.originalPaint) return !1;
    let r = K(e);
    return null == r ? (console.error(`Failed to apply paint: ${e}`), !1) : (SelectionPaintHelpers?.updatePaint(GP(t.originalPaint), e, !0, null), this.store.dispatch(oI({
      ...t,
      updatedPaintFromDropper: r.paint
    })), !0);
  }
  pickerHasSelectionPaintOpen() {
    return null != this.store.getState().currentSelectionPaintInPicker.originalPaint;
  }
  originalPaintForCurrentSelectionPaintsPicker() {
    let e = this.store.getState().currentSelectionPaintInPicker.originalPaint;
    return null == e ? "" : GP(e);
  }
  colorPickerSelectedVariable() {
    let e = this.store.getState().variablePickerShown;
    if (e.isShown && e.resolvedType === VariableResolvedDataType.COLOR && "variable-picker-alias" === e.type) return {
      varId: e.variableID,
      modeId: e.modeID
    };
    let t = this.store.getState().pickerShown?.id;
    let r = t?.startsWith(Yr);
    let n = atomStoreManager.get(E_);
    return r && n ? n : {};
  }
  isPrototypingModalOpen() {
    return this.store.getState().pickerShown?.id === o$;
  }
  validateCopyBuffer(e, t) {
    let r = this.store.getState().openFile?.key;
    r && _$$Z.postValidateCopy({
      nodeIds: e,
      fileKey: r,
      copyType: t
    });
  }
}
export const O = $$m0;
export const Z = $$g1;