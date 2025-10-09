import { throwTypeError } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { atom, atomStoreManager } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { getCodeEditingSnippet } from "../figma_app/346422";
import { $5 } from "../figma_app/504321";
import { D } from "../905/382895";
import { E } from "../905/618325";
export class $$u1 {
  constructor(e, t) {
    this.openCodeWindowForNode = e;
    this.setCurrentHighlightedCode = t;
    this._unsubscribes = [];
    this.selectedElementIdAtom = atom(e => e(this._latestInspectedElementUIEventAtom)?.selectedElement?.figmaFiberId ?? null);
    this.selectedElementInfoAtom = atom(e => e(this._latestInspectedElementUIEventAtom)?.selectedElement ?? null);
    this.selectedElementComputedStylesWithLocalEdits = atom(e => {
      let t = e(this.selectedElementInfoAtom);
      if (!t) return {};
      let r = e(this._editedStylesAtom)[t.figmaFiberId];
      return r ? {
        ...t.computedStyles,
        ...r
      } : t.computedStyles;
    });
    this.selectedElementsClassToStyles = new Map();
    this.hasPopoverOpenAtom = atom(!1);
    this._bundledSourceCode = null;
    this.sourceCodeOffsetRemapper = new E();
    this.codeFileNodeIdsWithRecentlyAddedImageAssetImports = new Set();
    this._directManipulationEnabledAtom = atom(!1);
    this._latestInspectedElementUIEventAtom = atom(null);
    this._editingSnippetAtom = atom({
      snippet: null,
      isLoading: !0
    });
    this._editedStylesAtom = atom({});
    this.flowAnalytics = null;
    this.selectedElementAnalytics = null;
    this._unsubscribes.push(atomStoreManager.sub(this.selectedElementIdAtom, () => {
      this.selectedElementIdChanged();
    }));
    this._unsubscribes.push(atomStoreManager.sub(this._directManipulationEnabledAtom, () => {
      this.enabledChanged();
    }));
  }
  destroy() {
    for (let e of this._unsubscribes) e();
    this._unsubscribes = [];
  }
  get directManipulationEnabledAtom() {
    return this._directManipulationEnabledAtom;
  }
  directManipulationEnabled() {
    return atomStoreManager.get(this._directManipulationEnabledAtom);
  }
  get latestInspectedElementUIEvent() {
    return this._latestInspectedElementUIEventAtom;
  }
  addClassStyleFromLocalEdit(e, t) {
    this.selectedElementsClassToStyles.set(e, t);
  }
  get editingSnippetAtom() {
    return this._editingSnippetAtom;
  }
  get bundledSourceCode() {
    return this._bundledSourceCode;
  }
  async getCachedOrFetchCodeSnippets(e) {
    if (e) {
      let e = atomStoreManager.get(this._editingSnippetAtom)?.snippet;
      if (e) return [e];
    }
    let t = await this.fetchNewCodeSnippets();
    return t ? [t] : null;
  }
  async fetchNewCodeSnippets() {
    let e = atomStoreManager.get(this.selectedElementInfoAtom);
    let t = atomStoreManager.get(this.latestInspectedElementUIEvent)?.codeBuildId;
    let r = this._bundledSourceCode;
    if (!e || !t || !r) {
      atomStoreManager.set(this._editingSnippetAtom, {
        snippet: null,
        isLoading: !1
      });
      return null;
    }
    let n = [];
    for (let i of e.elementAndParentSources) {
      let e = this.sourceCodeOffsetRemapper.translateBundledSourceCodeToCurrentCodeFileOffsets(i, t, r);
      if (!e) {
        atomStoreManager.set(this._editingSnippetAtom, {
          snippet: null,
          isLoading: !1
        });
        return null;
      }
      n.push(e);
    }
    atomStoreManager.set(this._editingSnippetAtom, e => ({
      ...e,
      isLoading: !0
    }));
    let i = await getCodeEditingSnippet(n);
    let s = atomStoreManager.get(this.selectedElementInfoAtom);
    if ((s?.figmaFiberId ?? null) !== e.figmaFiberId) return null;
    if (atomStoreManager.set(this._editingSnippetAtom, {
      snippet: i,
      isLoading: !1
    }), s && this.selectedElementAnalytics) {
      this.selectedElementAnalytics.classNamesEditable = !!i && $5(i);
      let e = s.elementAndParentSources[0].sourceCodeJSXCallId;
      this.selectedElementAnalytics.isEditingSupportedComponent = !!i && i.sourceCodeJSXCallId !== e;
    }
    return i;
  }
  addLocalComputedStyleEditToSelectedNodes(e) {
    let t = atomStoreManager.get(this.selectedElementIdAtom);
    t && atomStoreManager.set(this._editedStylesAtom, r => {
      let n = structuredClone(r);
      for (let r of (n[t] = {}, e)) for (let e of r.cssRules) for (let r of e.propertiesExpandedFromShorthand.length > 0 ? e.propertiesExpandedFromShorthand : [e.property]) n[t][r] = e.computedStylesValue;
      return n;
    });
  }
  clearLocalComputedStyleEditForSelectedNodes(e) {
    let t = atomStoreManager.get(this.selectedElementIdAtom);
    t && atomStoreManager.set(this._editedStylesAtom, r => {
      let n = structuredClone(r);
      let i = n[t];
      if (!i) return r;
      for (let t of e) delete i[t];
      return n;
    });
  }
  get editedStylesAtom() {
    return this._editedStylesAtom;
  }
  processEvent(e, t) {
    if (this._bundledSourceCode = t, "elementChanged" === e.type) {
      if (atomStoreManager.set(this._directManipulationEnabledAtom, !0), atomStoreManager.set(this._latestInspectedElementUIEventAtom, t => this.memoizeEventPieces(e, t)), e.selectedElement) for (let t of e.selectedElement.classToStyles) this.selectedElementsClassToStyles.set(t.className, t);
    } else "enabledChanged" === e.type ? (atomStoreManager.set(this._directManipulationEnabledAtom, e.enabled), e.enabled || atomStoreManager.set(this._latestInspectedElementUIEventAtom, null)) : throwTypeError(e);
  }
  selectedElementIdChanged() {
    let e = atomStoreManager.get(this.selectedElementIdAtom);
    let t = null !== e;
    if (this.selectedElementsClassToStyles.clear(), atomStoreManager.set(this._editingSnippetAtom, {
      snippet: null,
      isLoading: t
    }), t && this.fetchNewCodeSnippets(), this.selectedElementAnalytics && (this.fireAnalyticsEventSelectionEnded(this.selectedElementAnalytics, this.getOrCreateFlowAnalytics()), this.selectedElementAnalytics = null), e) {
      let t = atomStoreManager.get(this.selectedElementInfoAtom);
      t && (this.selectedElementAnalytics = {
        elementId: e,
        elementIdForAnalytics: `${e}_${this.getOrCreateFlowAnalytics().flowId}`,
        elementTagName: t.tagName,
        isTextContainer: t.isTextContainer,
        editedProperties: [],
        imagesSwappedFromSources: [],
        numberOfGoToSourceClicks: 0
      });
      let r = this.getOrCreateFlowAnalytics();
      r.numberOfSelectedElements++;
    }
  }
  enabledChanged() {
    this.directManipulationEnabled() ? this.getOrCreateFlowAnalytics() : (this.flowAnalytics && (this.selectedElementAnalytics && (this.fireAnalyticsEventSelectionEnded(this.selectedElementAnalytics, this.flowAnalytics), this.selectedElementAnalytics = null), this.fireAnalyticsEventFlowFinished(this.flowAnalytics), this.flowAnalytics = null), atomStoreManager.set(this._editedStylesAtom, {}));
  }
  fireAnalyticsEventSelectionEnded(e, t) {
    analyticsEventManager.trackDefinedEvent("sites.point_and_edit.selection_ended", {
      flowId: t.flowId,
      elementId: e.elementIdForAnalytics,
      elementTagName: e.elementTagName,
      isTextContainer: e.isTextContainer,
      isEditingSupportedComponent: e.isEditingSupportedComponent,
      classNamesEditable: e.classNamesEditable,
      imageEditable: e.imageEditable,
      editedProperties: e.editedProperties.join(","),
      numberOfPropertyEdits: e.editedProperties.length,
      imagesSwappedFromSources: e.imagesSwappedFromSources.join(","),
      numberOfImageSwaps: e.imagesSwappedFromSources.length,
      numberOfGoToSourceClicks: e.numberOfGoToSourceClicks
    });
  }
  fireAnalyticsEventPropertyEdited(e, t) {
    let {
      flowId
    } = this.getOrCreateFlowAnalytics();
    analyticsEventManager.trackDefinedEvent("sites.point_and_edit.property_edited", {
      flowId,
      elementId: e.elementIdForAnalytics,
      elementTagName: e.elementId,
      propertyEdited: t
    });
  }
  fireAnalyticsEventFlowFinished(e) {
    analyticsEventManager.trackDefinedEvent("sites.point_and_edit.flow_finished", {
      flowId: e.flowId,
      numberOfSelectedElements: e.numberOfSelectedElements,
      numberOfPropertyEdits: e.numberOfPropertyEdits,
      numberOfImageSwaps: e.numberOfImageSwaps,
      numberOfGoToSourceClicks: e.numberOfGoToSourceClicks
    });
  }
  memoizeEventPieces(e, t) {
    t && (t.selectedElement && e.selectedElement && (deepEqual(t.selectedElement.rect, e.selectedElement.rect) && (e.selectedElement.rect = t.selectedElement.rect), deepEqual(t.selectedElement.elementAndParentSources, e.selectedElement.elementAndParentSources) && (e.selectedElement.elementAndParentSources = t.selectedElement.elementAndParentSources), deepEqual(t.selectedElement.computedStyles, e.selectedElement.computedStyles) && (e.selectedElement.computedStyles = t.selectedElement.computedStyles), deepEqual(t.selectedElement, e.selectedElement) && (e.selectedElement = t.selectedElement)), deepEqual(t.hoveredElement, e.hoveredElement) && (e.hoveredElement = t.hoveredElement));
    return e;
  }
  updateAnalyticsSelectedElementCanEditImage(e, t) {
    this.selectedElementAnalytics && this.selectedElementAnalytics.elementId === t && (this.selectedElementAnalytics.imageEditable = e);
  }
  updateAnalyticsRecordClassNameEdit(e) {
    this.selectedElementAnalytics && !this.selectedElementAnalytics.editedProperties.includes(e) && (this.selectedElementAnalytics.editedProperties.push(e), this.fireAnalyticsEventPropertyEdited(this.selectedElementAnalytics, e), this.getOrCreateFlowAnalytics().numberOfPropertyEdits++);
  }
  updateAnalyticsRecordGoToSourceClick() {
    this.selectedElementAnalytics && this.selectedElementAnalytics.numberOfGoToSourceClicks++;
    this.getOrCreateFlowAnalytics().numberOfGoToSourceClicks++;
  }
  goToSource() {
    let e = atomStoreManager.get(this.editingSnippetAtom);
    let t = e?.snippet;
    t && (this.updateAnalyticsRecordGoToSourceClick(), D(t, this.openCodeWindowForNode, this.setCurrentHighlightedCode));
  }
  updateAnalyticsRecordImageSwappedFromSource(e) {
    this.selectedElementAnalytics && this.selectedElementAnalytics.imagesSwappedFromSources.push(e);
    this.getOrCreateFlowAnalytics().numberOfImageSwaps++;
  }
  getOrCreateFlowAnalytics() {
    this.flowAnalytics || (this.flowAnalytics = {
      flowId: Math.random().toString(36).substring(2),
      numberOfSelectedElements: 0,
      numberOfPropertyEdits: 0,
      numberOfImageSwaps: 0,
      numberOfGoToSourceClicks: 0
    });
    return this.flowAnalytics;
  }
}
export function $$p0(e, t, r, n, i) {
  let a = e.collaborativeSourceCode;
  return !!a && a.replaceSourceCodeRegionWithVersionAdjustment(t, r, n, i, 0);
}
export const W = $$p0;
export const w = $$u1;