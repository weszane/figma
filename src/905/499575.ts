import type { TSSceneGraph } from '../figma_app/518682';
import type { Bindings } from '../905/21872';
import { ResponsiveSetMixin } from '../905/26360';
import { createAnnotationsMixin, createArcDataMixin, createBorderCornerMixin, createCanvasGridMixin, createCooperFrameMixin, createCountMixin, createDecorativeImageMixin, createDraftMixin, createEmptyMixin, createEmptyMixin2, createEmptyMixin3, createEmptyMixin4, createEmptyMixin7, createEmptyMixin9, createEmptyMixin10, createEmptyMixin14, createEmptyMixin16, createEmptyMixin17, createEmptyMixin20, createEmptyMixin22, createEmptyMixin23, createEmptyMixin24, createEmptyMixin26, createEmptyMixin27, createEmptyMixin30, createLayoutMixin, createModuleMixin, createOverlayMixin, createPageMixin, createResponsiveMixin, createStateGroupMixin, createTextMixin, createVisualStylingMixin, createWidgetMixin } from '../905/112832';
import { ServiceCategories as _$$e } from '../905/165054';
import { v as _$$v2 } from '../905/219968';
import { Axis } from '../905/229717';
import { isSpecialNodeType } from '../905/266460';
import { kiwiParserCodec as _$$w } from '../905/294864';
import { hasStyleType, withStyleMixin } from '../905/311324';
import { approximateEqual } from '../905/382883';
import { isVariableNode, setupVariableMixin } from '../905/383429';
import { v as _$$v } from '../905/439972';
import { _T, E5, jv, k4, Yi } from '../905/531551';
import { decodeBase64, encodeBase64 } from '../905/561685';
import { C_, dG, xg } from '../905/709354';
import { l as _$$l } from '../905/716947';
import { ConnectorMixin } from '../905/739338';
import { k as _$$k } from '../905/749197';
import { F7, Rf, sg } from '../905/859698';
import { colorManagementStateJs, ColorProfileEnum } from '../905/864609';
import { defaultSessionLocalIDString } from '../905/871411';
import { logMessage } from '../905/954389';
import { h as _$$h, n as _$$n } from '../905/992140';
import { AnimationBindings, AppStateTsApi, Confirmation, HandoffBindingsCpp, HistoryChangesBindings, PluginType, SceneGraphHelpers, SceneNodeCpp, SitesBindingsCpp, WhiteboardSectionPresetPickerCppBindings, WhiteboardTsApi } from '../figma_app/13528';
import { assertNotNullish } from '../figma_app/95419';
import { BuildStatus, CompiledVectorData_Internal, ComponentPropType, FacetType, ImageFillMode, InteractiveSlideElementFacetTsApiGenerated, MutableCollaborativePlainText, MutableSceneGraph, NodeTsApiGenerated, PrototypeInteractions_Internal, TextData_Internal, TextFacetTsApiGenerated } from '../figma_app/175377';
import { VariableSetIdCompatHandler } from '../figma_app/243058';
import { $P } from '../figma_app/276332';
import { SceneGraphNode } from '../figma_app/404307';
// import { NodeTsApiGenerated } from '../figma_app/763686'

function b(e) {
  switch (e) {
    case 'FILL':
      return ImageFillMode.FILL;
    case 'FIT':
      return ImageFillMode.FIT;
    case 'STRETCH':
      return ImageFillMode.STRETCH;
    case 'TILE':
      return ImageFillMode.TILE;
    default:
      throw new Error('Invalid ImageScaleMode');
  }
}

/**
 * Builds a complex class hierarchy for SceneNode types using mixins.
 * Each step in the chain adds specific capabilities to the node class.
 * Original function: L
 */
function createMixinNodes() {
  // Decorative image base (e)
  let DecorativeImageBase = SceneGraphNode;
  // Decorative image (t)
  class DecorativeImage extends createDecorativeImageMixin(DecorativeImageBase) { }
  ;
  // Annotation support (i)
  class AnnotatedNode extends createAnnotationsMixin(DecorativeImage) {
    get canHaveAnnotation() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getCanHaveAnnotation(this.sceneGraph.nodeContext);
    }
    addAnnotation(e) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.setAnnotations([...this.annotations, e], this.sceneGraph.nodeContext);
    }
    setAnnotations(e) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.setAnnotations(e.filter(e => e.label !== '' || e.properties.length > 0), this.sceneGraph.nodeContext);
    }
    removeAnnotation(e) {
      this.setGlobalNodeID();
      let t = this.annotations.filter((t, i) => i !== e);
      return this.bindings.NodeTsApi.setAnnotations(t, this.sceneGraph.nodeContext);
    }
    updateAnnotation(e, t) {
      this.setGlobalNodeID();
      let i = {
        ...this.annotations[e],
        ...t
      };
      let n = [...this.annotations];
      n[e] = i;
      return this.bindings.NodeTsApi.setAnnotations(n, this.sceneGraph.nodeContext);
    }
    get measurements() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getMeasurements(this.sceneGraph.nodeContext) || [];
    }
    addMeasurement(e, t, i, n, r, a = '') {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.addMeasurement(e, t, i, n, r, a, this.sceneGraph.nodeContext);
    }
    removeMeasurement(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.removeMeasurement(e, this.sceneGraph.nodeContext);
    }
    updateMeasurement(e, t) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.updateMeasurement(e, t, this.sceneGraph.nodeContext);
    }
    updateMeasurementFreeText(e, t) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.updateMeasurementFreeText(e, t, this.sceneGraph.nodeContext);
    }
  }
  ;
  // Asset-related node (o)
  class AssetNode extends createEmptyMixin(AnnotatedNode) {
    get assetKey() {
      let e = SceneGraphHelpers.getAssetKey(this.guid);
      return e === 'INVALID' ? null : e;
    }
    setAssetKeyForTest(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setAssetKeyForTest(e, this.sceneGraph.nodeContext);
    }
    get assetKeyForPublish() {
      let e = SceneGraphHelpers.getAssetKeyForPublish(this.guid);
      return e === 'INVALID' ? null : e;
    }
    get isSubscribedAsset() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.isSubscribedAsset(this.sceneGraph.nodeContext);
    }
    get remote() {
      return this.isSubscribedAsset;
    }
    get userFacingVersion() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getUserFacingAssetVersion(this.sceneGraph.nodeContext);
    }
    get isPublishable() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsPublishable(this.sceneGraph.nodeContext);
    }
    set isPublishable(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setIsPublishable(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get description() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDescription(this.sceneGraph.nodeContext);
    }
    set description(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setDescription(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    setDescriptionRich(e, t) {
      this.setGlobalNodeID();
      let i = this.bindings.NodeTsApi.setDescriptionRich(e, t, this.sceneGraph.nodeContext);
      if (i) throw new Error(i);
    }
    get componentKey() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getComponentKey(this.sceneGraph.nodeContext);
      return e && e !== sg.INVALID ? e : null;
    }
    get stateGroupKey() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getStateGroupKey(this.sceneGraph.nodeContext);
      return e && e !== sg.INVALID ? e : null;
    }
    get sourceLibraryKey() {
      this.setGlobalNodeID();
      return _$$l(this.bindings.NodeTsApi.getSourceLibraryKey(this.sceneGraph.nodeContext));
    }
    set sourceLibraryKey(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setSourceLibraryKey(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get sharedSymbolVersion() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getSharedSymbolVersion(this.sceneGraph.nodeContext);
      return e && e !== F7.INVALID ? e : null;
    }
    getSharedSymbolVersion() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getSharedSymbolVersion(this.sceneGraph.nodeContext);
    }
    get sharedStateGroupVersion() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getSharedStateGroupVersion(this.sceneGraph.nodeContext);
      return e && e !== Rf.INVALID ? e : null;
    }
    getSharedStateGroupVersion() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getSharedStateGroupVersion(this.sceneGraph.nodeContext);
    }
    get publishID() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getPublishID(this.sceneGraph.nodeContext) ?? null;
    }
  }
  ;
  // Brush type node (l)
  class BrushTypeNode extends createEmptyMixin2(AssetNode) {
    get brushType() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getBrushType(this.sceneGraph.nodeContext);
    }
  }
  ;
  // Stroke brush node (c)
  class StrokeBrushNode extends createEmptyMixin3(BrushTypeNode) {
    get strokeBrushGuid() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStrokeBrushGuid(this.sceneGraph.nodeContext);
    }
    set strokeBrushGuid(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStrokeBrushGuid(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get scatterStrokeSettings() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getScatterStrokeSettings(this.sceneGraph.nodeContext);
    }
    set scatterStrokeSettings(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setScatterStrokeSettings(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get stretchStrokeSettings() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStretchStrokeSettings(this.sceneGraph.nodeContext);
    }
    set stretchStrokeSettings(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStretchStrokeSettings(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
  }
  ;
  // Cooper frame node (m)
  class CooperFrameNode extends createCooperFrameMixin(StrokeBrushNode) {
    containingCooperFrame() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.containingCooperFrameId(this.sceneGraph.nodeContext);
      return this.sceneGraph.get(e);
    }
    containingCooperFrameId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.containingCooperFrameId(this.sceneGraph.nodeContext) || null;
    }
    getBuzzTextFields() {
      this.setGlobalNodeID();
      let e = this.containingCooperFrame();
      if (!e) return [];
      let t = Yi([e.guid], this.sceneGraph) || k4([e.guid], this.sceneGraph) || '-1:1';
      let i = {};
      let n = [e.guid];
      let r = this.sceneGraph.get(t);
      for (let e of (r && n.push(r.guid), n)) {
        let t = this.sceneGraph.get(e);
        t && Object.assign(i, t.componentPropsJsonForNode);
      }
      let a: any[] = i[t]?.defs ? Object.values(i[t].defs) : [];
      let s = _T(e, this.sceneGraph);
      let o = E5(s, a, e.guid);
      let l = a.filter(e => e.type === ComponentPropType.TEXT);
      let d = i[t]?.assignments?.[e.guid];
      return jv(e, l, d, n, this.sceneGraph, e => this.sceneGraph.getCurrentPage()?.setSelectionToSingleNode(e), o);
    }
  }
  ;
  class PageNode extends createPageMixin(CooperFrameNode) {
    getEditModeNode() {
      this.setGlobalNodeID();
      return this.sceneGraph.get(this.bindings.NodeTsApi.getEditModeNode(this.sceneGraph.nodeContext));
    }
    get editModeType() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getEditModeType(this.sceneGraph.nodeContext) ?? null;
    }
    setSelectionToSingleNode(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setSelectionToSingleNode(e, this.sceneGraph.nodeContext);
    }
    get containingCanvas() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.findContainingCanvas(this.sceneGraph.nodeContext) || null;
    }
  }
  ;
  // Canvas grid node (f)
  class CanvasGridNode extends createCanvasGridMixin(PageNode) { }
  ;
  // State group node (F)
  class StateGroupNode extends createStateGroupMixin(CanvasGridNode) {
    get isComponentish() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsComponentish(this.sceneGraph.nodeContext);
    }
    get isState() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsState(this.sceneGraph.nodeContext);
    }
    get containingSymbolId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getContainingSymbolId(this.sceneGraph.nodeContext) ?? null;
    }
    get symbolLinks() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getSymbolLinks(this.sceneGraph.nodeContext);
    }
    set symbolLinks(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setSymbolLinks(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get isSymbolPublishable() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsSymbolPublishable(this.sceneGraph.nodeContext);
    }
    set isSymbolPublishable(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setIsSymbolPublishable(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    set hiddenFromPublishing(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setIsPublishable(!e, this.sceneGraph.nodeContext);
    }
    get hiddenFromPublishing() {
      this.setGlobalNodeID();
      return !this.bindings.NodeTsApi.getIsPublishable(this.sceneGraph.nodeContext);
    }
    get isLooseComponent() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsLooseComponent(this.sceneGraph.nodeContext);
    }
    get simplifyInstancePanels() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getSimplifyInstancePanels(this.sceneGraph.nodeContext);
    }
  }
  ;
  // Component property references node (eT)
  class ComponentPropRefsNode extends createEmptyMixin7(StateGroupNode) {
    componentPropertyReferences() {
      this.setGlobalNodeID();
      return SceneNodeCpp ? SceneNodeCpp.componentPropertyReferences() : {};
    }
    setComponentPropertyReferences(e) {
      this.setGlobalNodeID();
      if (SceneNodeCpp) return SceneNodeCpp.setComponentPropertyReferences(e);
    }
    get propRefs() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getPropRefs(this.sceneGraph.nodeContext);
    }
  }
  ;
  // Constraints and aspect ratio node (M, j)
  let ConstraintsNode = ConnectorMixin(ComponentPropRefsNode);
  class AspectRatioNode extends createEmptyMixin9(ConstraintsNode) {
    get proportionsConstrained() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getProportionsConstrained(this.sceneGraph.nodeContext);
    }
    set proportionsConstrained(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setProportionsConstrained(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get targetAspectRatio() {
      this.setGlobalNodeID();
      return this.bindings.ConstraintsFacetTsApiGenerated.getTargetAspectRatio(this.sceneGraph.nodeContext);
    }
    set targetAspectRatio(e) {
      this.setGlobalNodeID();
      let t = this.bindings.ConstraintsFacetTsApiGenerated.setTargetAspectRatio(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    lockAspectRatio() {
      this.setGlobalNodeID();
      SceneNodeCpp && SceneNodeCpp.setTargetAspectRatioImplicitly(!0, this.sceneGraph.nodeContext);
    }
    unlockAspectRatio() {
      this.setGlobalNodeID();
      SceneNodeCpp && SceneNodeCpp.setTargetAspectRatioImplicitly(!1, this.sceneGraph.nodeContext);
    }
    updateAspectRatioAfterSizeChange() {
      this.setGlobalNodeID();
      SceneNodeCpp && SceneNodeCpp.updateExistingTargetAspectRatioIfDifferentEnough(this.sceneGraph.nodeContext);
    }
    resizeWithConstraints(e, t) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.resizeWithConstraints(e, t, this.sceneGraph.nodeContext);
    }
    resizeWithoutConstraints(e, t) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.resizeWithoutConstraints(e, t, this.sceneGraph.nodeContext);
      this.updateAspectRatioAfterSizeChange();
    }
  }
  ;
  // Diagram node (B)
  class DiagramNode extends createEmptyMixin10(AspectRatioNode) {
    get isDiagramNode() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsDiagramNode(this.sceneGraph.nodeContext);
    }
    get isDiagramRoot() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsDiagramRoot(this.sceneGraph.nodeContext);
    }
    get isDiagramLayoutPaused() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsDiagramLayoutPaused(this.sceneGraph.nodeContext);
    }
    get hasDiagramRule() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getHasDiagramRule(this.sceneGraph.nodeContext);
    }
    get diagramParentId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDiagramParentId(this.sceneGraph.nodeContext) ?? null;
    }
    get diagramChildIds() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDiagramChildIds(this.sceneGraph.nodeContext);
    }
    get diagramDirection() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDiagramDirection(this.sceneGraph.nodeContext);
    }
    get diagramPosition() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDiagramPosition(this.sceneGraph.nodeContext) ?? null;
    }
  }
  ;
  class DraftNode extends createDraftMixin(DiagramNode) {
    get firstDraftData() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getFirstDraftData(this.sceneGraph.nodeContext) ?? null;
    }
    set firstDraftData(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setFirstDraftData(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get firstDraftKitElementData() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getFirstDraftKitElementData(this.sceneGraph.nodeContext) ?? null;
    }
    set firstDraftKitElementData(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setFirstDraftKitElementData(e, this.sceneGraph.nodeContext);
    }
    get isOrInFirstDraft() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsOrInFirstDraft(this.sceneGraph.nodeContext);
    }
    get isFirstDraftBuildingBlock() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsFirstDraftBuildingBlock(this.sceneGraph.nodeContext);
    }
    getFirstDraftJSON() {
      this.setGlobalNodeID();
      return SceneNodeCpp?.getFirstDraftJSON();
    }
  }
  ;
  // Top-level frame/group node (z)
  class TopLevelFrameNode extends createEmptyMixin17(DraftNode) {
    isTopLevelFrame() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.isTopLevelFrame(this.sceneGraph.nodeContext) ?? !1;
    }
    get depthFromTopLevelFrame() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.depthFromTopLevelFrame(this.sceneGraph.nodeContext);
    }
    findContainingTopLevelFrameOrSelf() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.findContainingTopLevelFrameOrSelf(this.sceneGraph.nodeContext);
    }
    get isGroup() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsGroup(this.sceneGraph.nodeContext);
    }
    get thumbnailInfo() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getThumbnailInfo(this.sceneGraph.nodeContext);
    }
    setThumbnailInfo(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setThumbnailInfo(e, this.sceneGraph.nodeContext);
    }
    clearThumbnailInfo() {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.clearThumbnailInfo(this.sceneGraph.nodeContext);
    }
  }
  ;
  // Guides node (K)
  class GuidesNode extends createEmptyMixin16(TopLevelFrameNode) {
    get guides() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getGuides(this.sceneGraph.nodeContext);
      return e === '' ? [] : _$$w.decodeNodeChange(decodeBase64(e)).guides || [];
    }
    set guides(e) {
      let t = _$$w.encodeNodeChange({
        guides: e
      });
      let i = _$$w.decodeNodeChange(t).guides;
      if (!approximateEqual(e, i)) throw new Error('Invalid format for guides');
      this.setGlobalNodeID();
      let s = this.bindings.NodeTsApi.setGuides(encodeBase64(t), this.sceneGraph.nodeContext);
      if (s) throw new Error(s);
    }
  }
  ;
  // Instance node (q)
  class InstanceNode extends createEmptyMixin14(GuidesNode) {
    get isInstance() {
      return this.type === 'INSTANCE';
    }
    get isPrimaryInstance() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsPrimaryInstance(this.sceneGraph.nodeContext);
    }
    get isSwappedNestedInstance() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsSwappedNestedInstance(this.sceneGraph.nodeContext);
    }
    get isInstanceSublayer() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsInstanceSublayer(this.sceneGraph.nodeContext);
    }
    get containingInstanceId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getContainingInstanceId(this.sceneGraph.nodeContext) ?? null;
    }
    get isVisibleInInstance() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.isVisibleInInstance(this.sceneGraph.nodeContext);
    }
    get instanceScaleFactor() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getInstanceScaleFactor(this.sceneGraph.nodeContext);
    }
    set instanceScaleFactor(e) {
      this.setGlobalNodeID();
      let t = SceneNodeCpp.setInstanceScaleFactor(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get symbolId() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getSymbolId(this.sceneGraph.nodeContext);
      return e && e !== defaultSessionLocalIDString ? e : null;
    }
    get mainComponent() {
      let e = this.symbolId;
      return e ? this.sceneGraph.get(e) : null;
    }
    swapComponent(e) {
      if (!this.isInstance) throw new Error('Can only perform swaps on instances');
      this.setGlobalNodeID();
      return SceneNodeCpp.swapComponent(e.guid);
    }
    updateIfIsNestedInstance() {
      if (this.isInstance) {
        this.setGlobalNodeID();
        return SceneNodeCpp.updateIfIsNestedInstance();
      }
    }
    detachInstance() {
      if (!this.isInstance) throw new Error('Can only detach instances');
      this.setGlobalNodeID();
      return SceneNodeCpp.detachInstance(this.sceneGraph.nodeContext);
    }
    get detachedInfo() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDetachedInfo(this.sceneGraph.nodeContext) ?? null;
    }
    getSublayerByOverridePath(e) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getSublayerByOverridePath(e);
    }
    get instanceOverridePath() {
      this.setGlobalNodeID();
      return SceneNodeCpp.instanceOverridePath(this.sceneGraph.nodeContext);
    }
    get overrides() {
      this.setGlobalNodeID();
      return SceneNodeCpp.overrides(this.sceneGraph.nodeContext, PluginType.PLUGIN);
    }
    get overridesInternal() {
      this.setGlobalNodeID();
      return SceneNodeCpp.overrides(this.sceneGraph.nodeContext, PluginType.INTERNAL);
    }
    resetOverrides() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.resetOverrides();
      if (e) throw new Error(e);
    }
    get exposedInstances() {
      if (!this.isInstance) throw new Error('Can only get exposed instances of an instance');
      this.setGlobalNodeID();
      let e = SceneNodeCpp.exposedInstances(this.sceneGraph.nodeContext);
      return this.sceneGraph.getNodes(e);
    }
    getMatchingInstanceSublayer(e) {
      if (!this.isInstance) return null;
      let t = this.sceneGraph.get(e);
      return t ? this.sceneGraph.get(t.getSublayerIdForInstanceOfSymbol(this.guid)) : null;
    }
    get backingLayerId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getBackingLayerId(this.sceneGraph.nodeContext) ?? null;
    }
    get overrideKey() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getOverrideKey();
    }
  }
  ;
  // Interactive slide node ($)
  class InteractiveSlideNode extends createEmptyMixin4(InstanceNode) {
    get interactiveSlideConfigData() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getInteractiveSlideConfigData(this.sceneGraph.nodeContext);
    }
    setInteractiveSlideConfigData(e, t) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setInteractiveSlideConfigData(e, t, this.sceneGraph.nodeContext);
    }
    deleteInteractiveSlideConfigData(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.deleteInteractiveSlideConfigData(e, this.sceneGraph.nodeContext);
    }
    get interactiveSlideParticipantData() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getInteractiveSlideParticipantData(this.sceneGraph.nodeContext);
    }
    setInteractiveSlideParticipantData(e, t) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setInteractiveSlideParticipantData(e, t, this.sceneGraph.nodeContext);
    }
    resetInteractiveSlideParticipantData() {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.resetInteractiveSlideParticipantData(this.sceneGraph.nodeContext);
    }
    get interactiveSlideElementType() {
      this.setGlobalNodeID();
      return _$$w.FlappType[InteractiveSlideElementFacetTsApiGenerated.getInteractiveSlideElementType(this.sceneGraph.nodeContext)];
    }
    set interactiveSlideElementType(e) {
      let t = _$$w.FlappType[e];
      if (typeof t == 'number' && void 0 !== t) {
        this.setGlobalNodeID();
        InteractiveSlideElementFacetTsApiGenerated.setInteractiveSlideElementType(t, this.sceneGraph.nodeContext);
      } else {
        throw new Error('Invalid value for interactiveSlideElementType');
      }
    }
  }
  ;
  // JSX node (Z)
  class JsxNode extends createEmptyMixin26(InteractiveSlideNode) {
    get jsxProps() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getJSXProps(this.sceneGraph.nodeContext);
    }
    setJSXProps(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setJSXProps(new Map(Object.entries(e)), this.sceneGraph.nodeContext);
      if (t) throw new Error(`Cannot set JSX node props: ${t}`);
    }
    get jsxOverrides() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getJSXOverrides(this.sceneGraph.nodeContext);
    }
    clearJSXOverrides() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.clearJSXOverrides(this.sceneGraph.nodeContext);
      if (e) throw new Error(`Cannot clear JSX overrides: ${e}`);
    }
  }
  ;
  // Expandable node (X)
  class ExpandableNode extends createEmptyMixin2(JsxNode) {
    get locked() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getLocked(this.sceneGraph.nodeContext);
    }
    set locked(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setLocked(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get isExpandable() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsExpandable(this.sceneGraph.nodeContext);
    }
    get isExpanded() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsExpanded(this.sceneGraph.nodeContext);
    }
    set isExpanded(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setIsExpanded(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get isTemporarilyExpanded() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsTemporarilyExpanded(this.sceneGraph.nodeContext);
    }
    set isTemporarilyExpanded(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setIsTemporarilyExpanded(e, this.sceneGraph.nodeContext);
    }
    get visibleChildren() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVisibleChildren(this.sceneGraph.nodeContext);
    }
    getVisibleDescendantIds(e = []) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVisibleDescendants(e, this.sceneGraph.nodeContext);
    }
    getVisibleDescendantNodes(e = []) {
      this.setGlobalNodeID();
      return this.sceneGraph.getNodes(this.bindings.NodeTsApi.getVisibleDescendants(e, this.sceneGraph.nodeContext));
    }
  }
  ;
  // Module node (ee)
  class ModuleNode extends createModuleMixin(ExpandableNode) {
    get containingModuleId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getContainingModuleId(this.sceneGraph.nodeContext) ?? null;
    }
  }
  ;
  // Variable consumption node (et)
  class VariableConsumptionNode extends createEmptyMixin20(ModuleNode) {
    getVariableConsumptionMap() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableConsumptionMap(this.sceneGraph.nodeContext);
    }
    updateVariableConsumption(e, t) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.updateVariableConsumption(e, t, this.sceneGraph.nodeContext);
    }
    clearVariableConsumption(e) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.clearVariableConsumption(e, this.sceneGraph.nodeContext);
    }
  }
  ;
  // Platform shape node (ei)
  class PlatformShapeNode extends createEmptyMixin2(VariableConsumptionNode) {
    findContainingPlatformShape() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.findContainingPlatformShape(this.sceneGraph.nodeContext);
    }
  }
  ;
  // Plugin data node (en)
  class PluginDataNode extends createEmptyMixin22(PlatformShapeNode) {
    getPluginData(e, t) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getPluginData(e, t, this.sceneGraph.nodeContext);
    }
    setPluginData(e, t, i) {
      this.setGlobalNodeID();
      let n = this.bindings.NodeTsApi.setPluginData(e, t, i, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getPluginDataKeys(e) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getPluginDataKeys(e, this.sceneGraph.nodeContext);
    }
    getSharedPluginData(e, t) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getSharedPluginData(e, t, this.sceneGraph.nodeContext);
    }
    setSharedPluginData(e, t, i) {
      this.setGlobalNodeID();
      let n = this.bindings.NodeTsApi.setSharedPluginData(e, t, i, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getSharedPluginDataKeys(e) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getSharedPluginDataKeys(e, this.sceneGraph.nodeContext);
    }
    getRelaunchData(e) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getPluginRelaunchData(e);
    }
    setRelaunchData(e, t) {
      this.setGlobalNodeID();
      let i = this.bindings.NodeTsApi.setPluginRelaunchData(e, t);
      if (i) throw new Error(i);
    }
  }
  ;
  // Count node (er)
  class CountNode extends createCountMixin(PluginDataNode) { }
  ;
  // Overlay node (ea)
  class OverlayNode extends createOverlayMixin(CountNode) {
    get hasPrototypeStartingPoint() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getHasPrototypeStartingPoint(this.sceneGraph.nodeContext);
    }
    get effectivePrototypeStartNodeId() {
      this.setGlobalNodeID();
      return SceneNodeCpp?.getEffectivePrototypeStartNodeId(this.sceneGraph.nodeContext) ?? null;
    }
    get flowStartingPoints() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getFlowStartingPoints(this.sceneGraph.nodeContext);
    }
    set flowStartingPoints(e) {
      this.setGlobalNodeID();
      let t = SceneNodeCpp.setFlowStartingPoints(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get prototypeBackgroundColor() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getPrototypeBackgroundColor(this.sceneGraph.nodeContext);
      return {
        r: e.red,
        g: e.green,
        b: e.blue,
        a: e.alpha
      };
    }
    set prototypeBackgroundColor(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setPrototypeBackgroundColor({
        red: e.r,
        green: e.g,
        blue: e.b,
        alpha: e.a
      }, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get overlayBackground() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getOverlayBackgroundAppearance(this.sceneGraph.nodeContext);
      return e == null || _$$w.OverlayBackgroundType[e.backgroundType] === 'NONE' ? {
        type: 'NONE'
      } : {
        type: 'SOLID_COLOR',
        color: {
          r: e.backgroundColor.red,
          g: e.backgroundColor.green,
          b: e.backgroundColor.blue,
          a: e.backgroundColor.alpha
        }
      };
    }
    set prototypeInteractions(e) {
      let t = _$$w.encodeNodeChange({
        prototypeInteractions: e
      });
      let i = _$$w.decodeNodeChange(t).prototypeInteractions;
      if (!approximateEqual(e, i)) throw new Error('Invalid format for prototypeInteractions');
      this.setGlobalNodeID();
      let r = this.bindings.NodeTsApi.setPrototypeInteractions(t, this.sceneGraph.nodeContext);
      if (r) throw new Error(r);
    }
    get prototypeInteractions() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getPrototypeInteractions(this.sceneGraph.nodeContext);
      return PrototypeInteractions_Internal.getOrCreateJsCopy(e);
    }
    set objectAnimations(e) {
      let t = _$$w.encodeNodeChange({
        objectAnimations: e
      });
      let i = _$$w.decodeNodeChange(t).objectAnimations;
      if (!approximateEqual(e, i)) throw new Error('Invalid format for objectAnimations');
      this.setGlobalNodeID();
      let r = this.bindings.NodeTsApi.setObjectAnimations(t, this.sceneGraph.nodeContext);
      if (r) throw new Error(r);
    }
    get objectAnimations() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getObjectAnimationsJs(this.sceneGraph.nodeContext);
    }
    removeObjectAnimation(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.removeObjectAnimation(this.sceneGraph.nodeContext, e);
    }
  }
  ;
  // Responsive node (eT, es)
  class ResponsiveNode extends createResponsiveMixin(OverlayNode) {
    get isPrimaryDerivedBreakpoint() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsPrimaryDerivedBreakpoint(this.sceneGraph.nodeContext);
    }
    get isInPrimaryDerivedBreakpoint() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsInPrimaryDerivedBreakpoint(this.sceneGraph.nodeContext);
    }
    get containingDerivedBreakpoint() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.findContainingDerivedBreakpoint(this.sceneGraph.nodeContext);
      return this.sceneGraph.get(e);
    }
    get containingWebpage() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.findContainingWebpage(this.sceneGraph.nodeContext);
      return this.sceneGraph.get(e);
    }
  }
  ;
  let ResponsiveNodeWithMixins = ResponsiveSetMixin(ResponsiveNode);
  // Background node (eo)
  class BackgroundNode extends createEmptyMixin23(ResponsiveNodeWithMixins) {
    get backgroundColor() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getBackgroundColor(this.sceneGraph.nodeContext);
      return {
        r: e.red,
        g: e.green,
        b: e.blue,
        a: e.alpha
      };
    }
    get backgroundPaints() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getBackgroundPaints(this.sceneGraph.nodeContext);
      return e.length === 0 ? {
        data: [],
        blobs: []
      } : assertNotNullish(dG('backgroundPaints', e), 'Figma Internal Error: backgroundPaints not found');
    }
    set backgroundPaints(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setBackgroundPaints(C_('backgroundPaints', e), this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
  }
  ;
  // Visual styling node (el)
  class VisualStylingNode extends createVisualStylingMixin(BackgroundNode) {
    get dynamicStrokeSettings() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDynamicStrokeSettings(this.sceneGraph.nodeContext);
    }
    set dynamicStrokeSettings(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setDynamicStrokeSettings(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get variableWidthPoints() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableWidthPoints(this.sceneGraph.nodeContext);
    }
    set variableWidthPoints(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setVariableWidthPoints(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
  }
  ;
  // Border/corner node (ed)
  class BorderCornerNode extends createBorderCornerMixin(VisualStylingNode) {
    get cornerRadiusOrMixed() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getCornerRadiusOrMixed(this.sceneGraph.nodeContext);
    }
    get cornerRadiusValues() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getCornerRadiusValues(this.sceneGraph.nodeContext);
    }
    setCornerRadiusAndClobber(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setCornerRadiusAndClobber(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
  }
  ;
  // Layout node (ec, eT, eu)
  class LayoutNode extends createEmptyMixin24(BorderCornerNode) {
    invalidateRenderTreeForSelfAndParents() {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.invalidateRenderTreeForSelfAndParents(this.sceneGraph.nodeContext);
    }
  }
  ;
  class LayoutNodeWithMixins extends createLayoutMixin(LayoutNode) {
    get stackMode() {
      this.setGlobalNodeID();
      return _$$w.StackMode[this.bindings.NodeTsApi.getStackMode(this.sceneGraph.nodeContext)] || 'NONE';
    }
    set stackMode(e) {
      let t = _$$w.StackMode[e];
      if (typeof t == 'number' && void 0 !== t) {
        this.setGlobalNodeID();
        this.bindings.NodeTsApi.setStackMode(t, this.sceneGraph.nodeContext);
      } else {
        throw new Error('Invalid value for stackMode');
      }
    }
    get stackWrap() {
      this.setGlobalNodeID();
      return _$$w.StackWrap[this.bindings.StackFacetTsApiGenerated.getStackWrap(this.sceneGraph.nodeContext)] || 'NO_WRAP';
    }
    set stackWrap(e) {
      let t = _$$w.StackWrap[e];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        this.bindings.StackFacetTsApiGenerated.setStackWrap(t, this.sceneGraph.nodeContext);
      } else {
        throw new TypeError('Invalid value for stackWrap');
      }
    }
    get stackTopPadding() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStackTopPadding(this.sceneGraph.nodeContext);
    }
    set stackTopPadding(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStackTopPadding(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get stackRightPadding() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStackRightPadding(this.sceneGraph.nodeContext);
    }
    set stackRightPadding(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStackRightPadding(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get stackBottomPadding() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStackBottomPadding(this.sceneGraph.nodeContext);
    }
    set stackBottomPadding(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStackBottomPadding(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get stackLeftPadding() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStackLeftPadding(this.sceneGraph.nodeContext);
    }
    set stackLeftPadding(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStackLeftPadding(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get stackPrimaryAlignItems() {
      this.setGlobalNodeID();
      return _$$w.StackJustify[this.bindings.NodeTsApi.getStackPrimaryAlignItems(this.sceneGraph.nodeContext)] || null;
    }
    set stackPrimaryAlignItems(e) {
      let t = _$$w.StackJustify[e];
      if (typeof t == 'number' && void 0 !== t) {
        this.setGlobalNodeID();
        this.bindings.NodeTsApi.setStackPrimaryAlignItems(t, this.sceneGraph.nodeContext);
      } else {
        throw new Error('Invalid value for stackPrimaryAlignItems');
      }
    }
    get stackCounterSpacing() {
      this.setGlobalNodeID();
      return this.bindings.StackFacetTsApiGenerated.getStackCounterSpacing(this.sceneGraph.nodeContext);
    }
    set stackCounterSpacing(e) {
      this.setGlobalNodeID();
      let t = e == null ? this.bindings.NodeTsApi.syncStackCounterSpacing(this.sceneGraph.nodeContext) : this.bindings.StackFacetTsApiGenerated.setStackCounterSpacing(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get stackReverseZIndex() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStackReverseZIndex(this.sceneGraph.nodeContext) || !1;
    }
    set stackReverseZIndex(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStackReverseZIndex(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get stackHorizontalLayoutSize() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStackHorizontalLayoutSize(this.sceneGraph.nodeContext);
    }
    set stackHorizontalLayoutSize(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStackHorizontalLayoutSize(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get stackVerticalLayoutSize() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStackVerticalLayoutSize(this.sceneGraph.nodeContext);
    }
    set stackVerticalLayoutSize(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setStackVerticalLayoutSize(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get inferredAutoLayoutResult() {
      return (this.setGlobalNodeID(), SceneNodeCpp) ? SceneNodeCpp.getInferredAutoLayoutResult(this.sceneGraph.nodeContext) : null;
    }
  }
  ;
  // State group variant node (eh, eT, eg)
  class StateGroupVariantNode extends createEmptyMixin27(LayoutNodeWithMixins) {
    get stateAbbreviatedName() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStateAbbreviatedName(this.sceneGraph.nodeContext);
    }
    get containingStateGroupId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getContainingStateGroupId(this.sceneGraph.nodeContext) ?? null;
    }
    get topmostBackingStateId() {
      this.setGlobalNodeID();
      return SceneNodeCpp?.getTopmostBackingStateId(this.sceneGraph.nodeContext) ?? null;
    }
    variantProperties(e = Confirmation.NO) {
      if (!this.isInstance && !this.isState) throw new Error('Can only get variant properties of a variant or variant instance');
      this.setGlobalNodeID();
      return SceneNodeCpp?.variantProperties(e) ?? null;
    }
  }
  ;
  class StateGroupVariantNode2 extends createEmptyMixin4(StateGroupVariantNode) {
    get isDiagramNode() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsDiagramNode(this.sceneGraph.nodeContext);
    }
    get isDiagramRoot() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsDiagramRoot(this.sceneGraph.nodeContext);
    }
    get isDiagramLayoutPaused() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsDiagramLayoutPaused(this.sceneGraph.nodeContext);
    }
    get hasDiagramRule() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getHasDiagramRule(this.sceneGraph.nodeContext);
    }
    get diagramParentId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDiagramParentId(this.sceneGraph.nodeContext) ?? null;
    }
    get diagramChildIds() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDiagramChildIds(this.sceneGraph.nodeContext);
    }
    get diagramDirection() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDiagramDirection(this.sceneGraph.nodeContext);
    }
    get diagramPosition() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDiagramPosition(this.sceneGraph.nodeContext) ?? null;
    }
  }
  ;
  let StateGroupVariantNodeWithMixins = withStyleMixin(StateGroupVariantNode2);
  // Table node (ef)
  class TableNode extends createEmptyMixin30(StateGroupVariantNodeWithMixins) {
    get tableNumRows() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.tableNumRows(this.sceneGraph.nodeContext);
    }
    get tableNumColumns() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.tableNumColumns(this.sceneGraph.nodeContext);
    }
    get tableCellRowIndex() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.tableCellRowIndex(this.sceneGraph.nodeContext);
    }
    get tableCellColumnIndex() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.tableCellColumnIndex(this.sceneGraph.nodeContext);
    }
    get sortedTableCells() {
      return SceneNodeCpp ? (this.setGlobalNodeID(), SceneNodeCpp.getSortedTableCells(this.sceneGraph.nodeContext)) : [];
    }
  }
  ;
  // Text node (e_)
  class TextNode extends createTextMixin(TableNode) {
    get fontSize() {
      if (this.setGlobalNodeID(), !TextFacetTsApiGenerated) throw new Error('TextFacetTsApiGenerated is not defined');
      return TextFacetTsApiGenerated.getFontSize(this.sceneGraph.nodeContext);
    }
    set fontSize(e) {
      this.setGlobalNodeID();
      let t = SceneNodeCpp.setRangeFontSize(0, -1, e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get fontSizeOrMixed() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeFontSize(0, -1, this.sceneGraph.nodeContext);
    }
    get textDecoration() {
      if (this.setGlobalNodeID(), !TextFacetTsApiGenerated) throw new Error('TextFacetTsApiGenerated is not defined');
      return _$$w.TextDecoration[TextFacetTsApiGenerated.getTextDecoration(this.sceneGraph.nodeContext)] || null;
    }
    set textDecoration(e) {
      let t = _$$w.TextDecoration[e];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = SceneNodeCpp.setRangeTextDecoration(0, -1, t, this.sceneGraph.nodeContext);
        if (e) throw new Error(e);
      } else {
        throw new TypeError('Invalid value for textDecoration');
      }
    }
    get textDecorationOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeTextDecoration(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : _$$w.TextDecoration[e] || null;
    }
    get textDecorationStyle() {
      if (this.setGlobalNodeID(), !TextFacetTsApiGenerated) throw new Error('TextFacetTsApiGenerated is not defined');
      return _$$w.TextDecorationStyle[TextFacetTsApiGenerated.getTextDecorationStyle(this.sceneGraph.nodeContext)] || null;
    }
    set textDecorationStyle(e) {
      let t = _$$w.TextDecorationStyle[e];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = SceneNodeCpp.setRangeTextDecorationStyle(0, -1, t, this.sceneGraph.nodeContext);
        if (e) throw new Error(e);
      } else {
        throw new TypeError('Invalid value for textDecorationStyle');
      }
    }
    get textDecorationStyleOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeTextDecorationStyle(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' || e === null ? e : _$$w.TextDecorationStyle[e] || null;
    }
    get textData() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getTextData(this.sceneGraph.nodeContext);
      return e === -1 ? null : TextData_Internal.getOrCreateJsCopy(e);
    }
    getPlaceholderText() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getPlaceholderText(this.sceneGraph.nodeContext);
    }
    get derivedTextDataLaidGlyphLength() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDerivedTextDataLaidGlyphLength(this.sceneGraph.nodeContext);
    }
    get textPathStartData() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getTextPathStartData(this.sceneGraph.nodeContext);
    }
    get hyperlink() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeHyperlink(0, -1, this.sceneGraph.nodeContext);
    }
    getPlaceholderFontStyle() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getPlaceholderFontStyle(this.sceneGraph.nodeContext);
    }
    get textCase() {
      this.setGlobalNodeID();
      return _$$w.TextCase[this.bindings.NodeTsApi.getTextCase(this.sceneGraph.nodeContext)] || null;
    }
    set textCase(e) {
      let t = _$$w.TextCase[e];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = SceneNodeCpp.setRangeTextCase(0, -1, t, this.sceneGraph.nodeContext);
        if (e) throw new Error(e);
      } else {
        throw new TypeError('Invalid value for textCase');
      }
    }
    get textCaseOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeTextCase(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : _$$w.TextCase[e] || null;
    }
    get textDecorationSkipInkOrMixed() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeTextDecorationSkipInk(0, -1, this.sceneGraph.nodeContext);
    }
    get textDecorationOffset() {
      throw new Error('Figma Internal Error: direct call to textDecorationOffset getter not supported');
    }
    set textDecorationOffset(e) {
      let t = _$$w.NumberUnits[e.units];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let i = SceneNodeCpp.setRangeTextDecorationOffset(0, -1, e.value, t, this.sceneGraph.nodeContext);
        if (i) throw new Error(i);
      } else {
        throw new TypeError('Invalid format for textDecorationOffset');
      }
    }
    get textDecorationOffsetOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeTextDecorationOffset(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' || e === null ? e : {
        value: e.value,
        units: _$$w.NumberUnits[e.units]
      };
    }
    get textDecorationThickness() {
      throw new Error('Figma Internal Error: direct call to textDecorationThickness getter not supported');
    }
    set textDecorationThickness(e: any) {
      let t = _$$w.NumberUnits[e.units];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let i = SceneNodeCpp.setRangeTextDecorationThickness(0, -1, e.value, t, this.sceneGraph.nodeContext);
        if (i) throw new Error(i);
      } else {
        throw new TypeError('Invalid format for textDecorationThickness');
      }
    }
    get textDecorationThicknessOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeTextDecorationThickness(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' || e === null ? e : {
        value: e.value,
        units: _$$w.NumberUnits[e.units]
      };
    }
    get textDecorationFills() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getJsTextDecorationFillPaints(this.sceneGraph.nodeContext);
    }
    set textDecorationFills(e) {
      this.setGlobalNodeID();
      let t = SceneNodeCpp.setRangeTextDecorationFillPaints(0, -1, C_('textDecorationFillPaints', {
        data: e,
        blobs: []
      }), this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get textDecorationFillsOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeTextDecorationFillPaints(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' || e === null ? e : this.textDecorationFills;
    }
    get letterSpacing() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getLetterSpacing(this.sceneGraph.nodeContext);
      return {
        value: e.value,
        units: _$$w.NumberUnits[e.units]
      };
    }
    set letterSpacing(e) {
      let t = _$$w.NumberUnits[e.units];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let i = SceneNodeCpp.setRangeLetterSpacing(0, -1, e.value, t, this.sceneGraph.nodeContext);
        if (i) throw new Error(i);
      } else {
        throw new TypeError('Invalid format for letterSpacing');
      }
    }
    get letterSpacingOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeLetterSpacing(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : {
        value: e.value,
        units: _$$w.NumberUnits[e.units]
      };
    }
    get lineHeight() {
      throw new Error('Figma Internal Error: direct call to lineHeight getter not supported');
    }
    set lineHeight(e) {
      let t = _$$w.NumberUnits[e.units];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let i = SceneNodeCpp.setRangeLineHeight(0, -1, e.value, t, this.sceneGraph.nodeContext);
        if (i) throw new Error(i);
      } else {
        throw new TypeError('Invalid format for lineHeight');
      }
    }
    get lineHeightOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeLineHeight(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : {
        value: e.value,
        units: _$$w.NumberUnits[e.units]
      };
    }
    get leadingTrim() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getLeadingTrim(this.sceneGraph.nodeContext);
      return _$$w.LeadingTrim[e];
    }
    set leadingTrim(e) {
      let t = _$$w.LeadingTrim[e];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = this.bindings.NodeTsApi.setLeadingTrim(t, this.sceneGraph.nodeContext);
        if (e) throw new Error(e);
      } else {
        throw new TypeError('Invalid value for leadingTrim');
      }
    }
    get hyperlinkOrMixed() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeHyperlink(0, -1, this.sceneGraph.nodeContext);
    }
    get fontName() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getFontName(this.sceneGraph.nodeContext);
    }
    set fontName(e) {
      this.setGlobalNodeID();
      let t = SceneNodeCpp.setRangeFontName(0, -1, e.family, e.style, e.postscript, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get fontNameOrMixed() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeFontName(0, -1, this.sceneGraph.nodeContext);
    }
    get hasMissingFont() {
      this.setGlobalNodeID();
      return SceneNodeCpp.hasMissingFont(this.sceneGraph.nodeContext);
    }
    get fontWeightOrMixed() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeFontWeight(0, -1, this.sceneGraph.nodeContext);
    }
    get fontVariantNumericFigure() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeFontVariantNumericFigure(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : _$$w.FontVariantNumericFigure[e] || null;
    }
    get fontVariantNumericSpacing() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeFontVariantNumericSpacing(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : _$$w.FontVariantNumericSpacing[e] || null;
    }
    get fontVariantNumericFraction() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeFontVariantNumericFraction(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : _$$w.FontVariantNumericFraction[e] || null;
    }
    get fontVariantPosition() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeFontVariantPosition(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : _$$w.FontVariantPosition[e] || null;
    }
    get toggledOnOpenTypeFeatures() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeToggledOnOTFeatures(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : e.map(e => _$$w.OpenTypeFeature[e] || null);
    }
    get toggledOffOpenTypeFeatures() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeToggledOffOTFeatures(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : e.map(e => _$$w.OpenTypeFeature[e] || null);
    }
    get fontVariantCapsOrMixed() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getRangeFontVariantCaps(0, -1, this.sceneGraph.nodeContext);
      return e === 'mixed' ? e : _$$w.FontVariantCaps[e] || null;
    }
    set fontVariantCaps(e) {
      let t = _$$w.FontVariantCaps[e];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = SceneNodeCpp.setRangeFontVariantCaps(0, -1, t, this.sceneGraph.nodeContext);
        if (e) throw new Error(e);
      } else {
        throw new TypeError('Invalid value for fontVariantCaps');
      }
    }
    get textBidiVersion() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getTextBidiVersion();
    }
    set textBidiVersion(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setTextBidiVersion(e);
      if (t) throw new Error(t);
    }
    getRangeFontSize(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeFontSize(e, t, this.sceneGraph.nodeContext);
    }
    setRangeFontSize(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeFontSize(e, t, i, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getRangeFontName(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeFontName(e, t, this.sceneGraph.nodeContext);
    }
    setRangeFontName(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeFontName(e, t, i.family, i.style, i.postscript, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getRangeAllFontNames(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeAllFontNames(e, t, this.sceneGraph.nodeContext);
    }
    getRangeAllFontOpenTypeFeatures(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeAllFontOpenTypeFeatures(e, t, this.sceneGraph.nodeContext);
    }
    getRangeFontWeight(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeFontWeight(e, t, this.sceneGraph.nodeContext);
    }
    getRangeFontVariantCaps(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeFontVariantCaps(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : _$$w.FontVariantCaps[i] || null;
    }
    getRangeFontVariantNumericFigure(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeFontVariantNumericFigure(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : _$$w.FontVariantNumericFigure[i] || null;
    }
    getRangeFontVariantNumericSpacing(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeFontVariantNumericSpacing(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : _$$w.FontVariantNumericSpacing[i] || null;
    }
    getRangeFontVariantNumericFraction(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeFontVariantNumericFraction(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : _$$w.FontVariantNumericFraction[i] || null;
    }
    getRangeFontVariantPosition(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeFontVariantPosition(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : _$$w.FontVariantPosition[i] || null;
    }
    getRangeToggledOnOpenTypeFeatures(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeToggledOnOTFeatures(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : i.map(e => _$$w.OpenTypeFeature[e] || null);
    }
    getRangeToggledOffOpenTypeFeatures(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeToggledOffOTFeatures(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : i.map(e => _$$w.OpenTypeFeature[e] || null);
    }
    getRangeTextCase(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeTextCase(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : _$$w.TextCase[i] || null;
    }
    setRangeTextCase(e, t, i) {
      let r = _$$w.TextCase[i];
      if (typeof r == 'number') {
        this.setGlobalNodeID();
        let i = SceneNodeCpp.setRangeTextCase(e, t, r, this.sceneGraph.nodeContext);
        if (i) throw new Error(i);
      } else {
        throw new TypeError('Invalid value for setRangeTextCase');
      }
    }
    setRangeFontVariantCaps(e, t, i) {
      let r = _$$w.FontVariantCaps[i];
      if (typeof r == 'number') {
        this.setGlobalNodeID();
        let i = SceneNodeCpp.setRangeFontVariantCaps(e, t, r, this.sceneGraph.nodeContext);
        if (i) throw new Error(i);
      } else {
        throw new TypeError('Invalid value for setRangeFontVariantCaps');
      }
    }
    getRangeTextDecoration(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeTextDecoration(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : _$$w.TextDecoration[i] || null;
    }
    setRangeTextDecoration(e, t, i) {
      let r = _$$w.TextDecoration[i];
      if (typeof r == 'number') {
        this.setGlobalNodeID();
        let i = SceneNodeCpp.setRangeTextDecoration(e, t, r, this.sceneGraph.nodeContext);
        if (i) throw new Error(i);
      } else {
        throw new TypeError('Invalid value for setRangeTextDecoration');
      }
    }
    getRangeTextDecorationStyle(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeTextDecorationStyle(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' || i === null ? i : _$$w.TextDecorationStyle[i] || null;
    }
    setRangeTextDecorationStyle(e, t, i) {
      let r = _$$w.TextDecorationStyle[i];
      if (typeof r == 'number') {
        this.setGlobalNodeID();
        let i = SceneNodeCpp.setRangeTextDecorationStyle(e, t, r, this.sceneGraph.nodeContext);
        if (i) throw new Error(i);
      } else {
        throw new TypeError('Invalid value for setRangeTextDecorationStyle');
      }
    }
    getRangeTextDecorationSkipInk(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeTextDecorationSkipInk(e, t, this.sceneGraph.nodeContext);
    }
    setRangeTextDecorationSkipInk(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeTextDecorationSkipInk(e, t, i, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getRangeTextDecorationOffset(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeTextDecorationOffset(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' || i === null ? e : {
        value: i.value,
        units: _$$w.NumberUnits[i.units]
      };
    }
    setRangeTextDecorationOffset(e, t, i) {
      let r = _$$w.NumberUnits[i.units];
      if (typeof r == 'number') {
        this.setGlobalNodeID();
        let n = SceneNodeCpp.setRangeTextDecorationOffset(e, t, i.value, r, this.sceneGraph.nodeContext);
        if (n) throw new Error(n);
      } else {
        throw new TypeError('Invalid format for setRangeTextDecorationOffset');
      }
    }
    getRangeTextDecorationThickness(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeTextDecorationThickness(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' || i === null ? e : {
        value: i.value,
        units: _$$w.NumberUnits[i.units]
      };
    }
    setRangeTextDecorationThickness(e, t, i) {
      let r = _$$w.NumberUnits[i.units];
      if (typeof r == 'number') {
        this.setGlobalNodeID();
        let n = SceneNodeCpp.setRangeTextDecorationThickness(e, t, i.value, r, this.sceneGraph.nodeContext);
        if (n) throw new Error(n);
      } else {
        throw new TypeError('Invalid format for setRangeTextDecorationThickness');
      }
    }
    getRangeTextDecorationFillPaints(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeTextDecorationFillPaints(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' || i === null ? i : assertNotNullish(dG('textDecorationFillPaints', i), 'Figma Internal Error: textDecorationFillPaints not found');
    }
    setRangeTextDecorationFillPaints(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeTextDecorationFillPaints(e, t, C_('textDecorationFillPaints', i), this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getRangeParagraphSpacing(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeParagraphSpacing(e, t, this.sceneGraph.nodeContext);
    }
    setRangeParagraphSpacing(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeParagraphSpacing(e, t, i, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getRangeLetterSpacing(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeLetterSpacing(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : {
        value: i.value,
        units: _$$w.NumberUnits[i.units]
      };
    }
    setRangeLetterSpacing(e, t, i) {
      let r = _$$w.NumberUnits[i.units];
      if (typeof r == 'number') {
        this.setGlobalNodeID();
        let n = SceneNodeCpp.setRangeLetterSpacing(e, t, i.value, r, this.sceneGraph.nodeContext);
        if (n) throw new Error(n);
      } else {
        throw new TypeError('Invalid format for setRangeLetterSpacing');
      }
    }
    getRangeLineHeight(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeLineHeight(e, t, this.sceneGraph.nodeContext);
      return i === 'mixed' ? i : {
        value: i.value,
        units: _$$w.NumberUnits[i.units]
      };
    }
    setRangeLineHeight(e, t, i) {
      let r = _$$w.NumberUnits[i.units];
      if (typeof r == 'number') {
        this.setGlobalNodeID();
        let n = SceneNodeCpp.setRangeLineHeight(e, t, i.value, r, this.sceneGraph.nodeContext);
        if (n) throw new Error(n);
      } else {
        throw new TypeError('Invalid format for setRangeLineHeight');
      }
    }
    getRangeLineType(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeLineType(e, t, this.sceneGraph.nodeContext);
    }
    setRangeLineType(e, t, i) {
      this.setGlobalNodeID();
      let r = 0;
      let a = _$$w.LineType[i];
      typeof a == 'number' && (r = a);
      let s = SceneNodeCpp.setRangeLineType(e, t, r, this.sceneGraph.nodeContext);
      if (s) throw new Error(s);
    }
    getRangeListSpacing(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeListSpacing(e, t, this.sceneGraph.nodeContext);
    }
    setRangeListSpacing(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeListSpacing(e, t, i, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getRangeLineIndentation(e, t) {
      this.setGlobalNodeID();
      let i = SceneNodeCpp.getRangeIndentation(e, t, this.sceneGraph.nodeContext);
      return i === -1 ? 'mixed' : i;
    }
    setRangeLineIndentation(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeIndentation(e, t, i, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getRangeParagraphIndent(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeParagraphIndent(e, t, this.sceneGraph.nodeContext);
    }
    setRangeParagraphIndent(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeParagraphIndent(e, t, i, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    getRangeHyperlink(e, t) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeHyperlink(e, t, this.sceneGraph.nodeContext);
    }
    setRangeHyperlink(e, t, i) {
      this.setGlobalNodeID();
      let n = SceneNodeCpp.setRangeHyperlink(e, t, i && i.type === 'URL' ? i.value : '', i && i.type === 'NODE' ? i.value : null, i && i.openInNewTab ? i.openInNewTab : null, this.sceneGraph.nodeContext);
      if (n) throw new Error(n);
    }
    spliceCharacters(e, t, i, n) {
      this.setGlobalNodeID();
      let r = SceneNodeCpp.spliceCharacters(e, t, i, n, this.sceneGraph.nodeContext);
      if (r) throw new Error(r);
    }
  }
  ;
  // Variable node (eb)
  class VariableNode extends createEmptyMixin(setupVariableMixin(TextNode)) {
    get valuesByMode() {
      this.setGlobalNodeID();
      let {
        errorMsg,
        values
      } = this.bindings.NodeTsApi.getVariableDataValues(this.sceneGraph.nodeContext);
      if (errorMsg) throw new Error(errorMsg);
      return values;
    }
    setValueForMode(e, t) {
      this.setGlobalNodeID();
      let {
        errorMsg
      } = this.bindings.NodeTsApi.setVariableDataForMode(e, t, this.sceneGraph.nodeContext);
      if (errorMsg) throw new Error(errorMsg);
    }
    get variableKey() {
      let e = this.assetKey;
      return e;
    }
    get variableKeyForPublish() {
      let e = this.assetKeyForPublish;
      return e;
    }
    get variableDataValues() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableDataValues(this.sceneGraph.nodeContext);
    }
  }
  ;
  // Variable collection node (eE)
  class VariableCollectionNode extends createEmptyMixin(VariableNode) {
    get ownVariableCollectionId() {
      this.setGlobalNodeID();
      let e = VariableSetIdCompatHandler.fromString(this.bindings.NodeTsApi.getVariableSetID(this.sceneGraph.nodeContext));
      if (!e) throw new Error('Invalid variable collection id');
      return e;
    }
    get variableCollectionKey() {
      let e = this.assetKey;
      return e;
    }
    get variableCollectionKeyForPublish() {
      let e = this.assetKeyForPublish;
      return e;
    }
    get variableIds() {
      this.setGlobalNodeID();
      return this.bindings.SceneGraphTsApi.getVariableIdsInCollection();
    }
    get inheritedVariableIds() {
      this.setGlobalNodeID();
      return this.bindings.SceneGraphTsApi.getInheritedVariableIdsInCollection();
    }
    get localVariableIds() {
      this.setGlobalNodeID();
      return this.bindings.SceneGraphTsApi.getLocalVariableIdsInCollection();
    }
    setVariableCollectionKeyForTest(e) {
      this.setAssetKeyForTest(e);
    }
    get modes() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableSetModesSorted(this.sceneGraph.nodeContext);
    }
    addMode(e) {
      this.setGlobalNodeID();
      let {
        newModeId,
        errorMsg
      } = this.bindings.NodeTsApi.addVariableCollectionMode(e, this.sceneGraph.nodeContext);
      if (errorMsg) throw new Error(errorMsg);
      return newModeId;
    }
    removeMode(e) {
      this.setGlobalNodeID();
      let {
        errorMsg
      } = this.bindings.NodeTsApi.removeVariableCollectionMode(e, this.sceneGraph.nodeContext);
      if (errorMsg) throw new Error(errorMsg);
    }
    renameMode(e, t) {
      this.setGlobalNodeID();
      let {
        errorMsg
      } = this.bindings.NodeTsApi.renameVariableCollectionMode(e, t, this.sceneGraph.nodeContext);
      if (errorMsg) throw new Error(errorMsg);
    }
    get defaultModeId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableCollectionDefaultModeID(this.sceneGraph.nodeContext);
    }
    setDefaultMode(e) {
      this.setGlobalNodeID();
      let {
        errorMsg
      } = this.bindings.NodeTsApi.setVariableCollectionModeAsDefault(e, this.sceneGraph.nodeContext);
      if (errorMsg) throw new Error(errorMsg);
    }
    get backingVariableCollectionId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getBackingVariableCollectionId(this.sceneGraph.nodeContext);
    }
    resolvedVariableModes() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getResolvedVariableModes(this.sceneGraph.nodeContext);
    }
    resolvedVariableModesForPrototype() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getResolvedVariableModesForPrototype(this.sceneGraph.nodeContext);
    }
    explicitVariableModes() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getExplicitVariableModes(this.sceneGraph.nodeContext);
    }
    clearExplicitVariableConsumerModeForCollection(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.clearExplicitVariableConsumerModeForCollection(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    setExplicitVariableModeForCollection(e, t) {
      this.setGlobalNodeID();
      let i = this.bindings.NodeTsApi.setExplicitVariableModeForCollection(e, t, this.sceneGraph.nodeContext);
      if (i) throw new Error(i);
    }
    get variableOverrides() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableOverridesForExtendedCollection(this.sceneGraph.nodeContext);
    }
    setVariableOverrideForMode(e, t, i) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setVariableOverrideForMode(e, t, i, this.sceneGraph.nodeContext);
    }
    removeOverrideForMode(e, t) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.removeOverrideForMode(e, t, this.sceneGraph.nodeContext);
    }
    deleteOverridesForVariable(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.deleteOverridesForVariable(e, this.sceneGraph.nodeContext);
    }
  }
  ;
  // Arc data node (ex)
  class ArcDataNode extends createArcDataMixin(VariableCollectionNode) {
    get handleMirroring() {
      this.setGlobalNodeID();
      return _$$w.VectorMirror[this.bindings.NodeTsApi.getHandleMirroring(this.sceneGraph.nodeContext)] || null;
    }
    set handleMirroring(e) {
      if (!SceneNodeCpp) return;
      let t = _$$w.VectorMirror[e];
      if (typeof t == 'number' && void 0 !== t) {
        this.setGlobalNodeID();
        let e = SceneNodeCpp.setHandleMirroring(t, this.sceneGraph.nodeContext);
        if (e) throw new Error(e);
      } else {
        throw new Error('Invalid value for handleMirroring');
      }
    }
    get vectorDataInfo() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getVectorData(this.sceneGraph.nodeContext);
      if (e === -1) return null;
      let t = CompiledVectorData_Internal.getOrCreateJsCopy(e);
      return assertNotNullish(t, 'Figma Internal Error: vectorData not found');
    }
    set vectorDataInfo(e) {
      let t = e.data.vectorNetworkBlob;
      if (t == null || t < 0 || t >= e.blobs.length) throw new Error('Invalid input for vectorData');
      this.setGlobalNodeID();
      let i = this.bindings.NodeTsApi.setVectorData(xg('vectorData', e), this.sceneGraph.nodeContext);
      if (i) throw new Error(i);
    }
  }
  ;
  // Boolean operation node (eS)
  class BooleanOperationNode extends createEmptyMixin(ArcDataNode) {
    get booleanOperation() {
      this.setGlobalNodeID();
      return _$$w.BooleanOperation[this.bindings.NodeTsApi.getBooleanOperation(this.sceneGraph.nodeContext)] || null;
    }
    set booleanOperation(e) {
      let t = e != null ? _$$w.BooleanOperation[e] : null;
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = this.bindings.NodeTsApi.setBooleanOperation(t, this.sceneGraph.nodeContext);
        if (e) throw new Error(e);
      } else {
        throw new TypeError('Invalid value for booleanOperation');
      }
    }
  }
  ;
  // Widget node (eC)
  class WidgetNode extends createWidgetMixin(BooleanOperationNode) {
    get isInWidget() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsInWidget(this.sceneGraph.nodeContext);
    }
    get widgetId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getWidgetId() || null;
    }
    get widgetVersionId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getWidgetVersionId();
    }
    set widgetVersionId(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setWidgetVersionId(e);
    }
    get isHTMLWidget() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsHTMLWidget(this.sceneGraph.nodeContext);
    }
    get widgetInputTextNodeType() {
      this.setGlobalNodeID();
      return _$$w.WidgetInputTextNodeType[this.bindings.NodeTsApi.getWidgetInputTextNodeType()] || null;
    }
    set widgetInputTextNodeType(e) {
      let t = e != null ? _$$w.WidgetInputTextNodeType[e] : null;
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = this.bindings.NodeTsApi.setWidgetInputTextNodeType(t);
        if (e) throw new Error(e);
      } else {
        throw new TypeError('Invalid value for widgetInputTextNodeType');
      }
    }
    get widgetHoverStyle() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getWidgetHoverStyle();
      let t: any = {};
      Object.prototype.hasOwnProperty.call(e, 'fill') && (t.fill = dG('fillPaints', e.fill));
      Object.prototype.hasOwnProperty.call(e, 'stroke') && (t.stroke = dG('strokePaints', e.stroke));
      Object.prototype.hasOwnProperty.call(e, 'opacity') && (t.opacity = e.opacity);
      return t;
    }
    set widgetHoverStyle(e) {
      let t: any = {};
      Object.prototype.hasOwnProperty.call(e, 'fill') && (t.fill = C_('fillPaints', e.fill));
      Object.prototype.hasOwnProperty.call(e, 'stroke') && (t.stroke = C_('strokePaints', e.stroke));
      Object.prototype.hasOwnProperty.call(e, 'opacity') && (t.opacity = e.opacity);
      this.bindings.NodeTsApi.setWidgetHoverStyle(t);
    }
    get widgetInputBehavior() {
      this.setGlobalNodeID();
      return _$$w.WidgetInputBehavior[this.bindings.NodeTsApi.getWidgetInputBehavior()] || null;
    }
    set widgetInputBehavior(e) {
      let t = e != null ? _$$w.WidgetInputBehavior[e] : null;
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = this.bindings.NodeTsApi.setWidgetInputBehavior(t);
        if (e) throw new Error(e);
      } else {
        throw new TypeError('Invalid value for widgetInputBehavior');
      }
    }
    get isRichTextInputInWidget() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsRichTextInputInWidget();
    }
    get shouldHideCursorsOnWidgetHover() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getShouldHideCursorsOnWidgetHover();
    }
    set shouldHideCursorsOnWidgetHover(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setShouldHideCursorsOnWidgetHover(e);
    }
    get widgetName() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getWidgetName();
    }
    set widgetName(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setWidgetName(e);
    }
    set shouldPreventWidgetAutoUpdate(e) {
      this.setGlobalNodeID();
      this.setPluginData('WIDGET_INTERNAL', 'shouldPreventWidgetAutoUpdate', `${e}`);
    }
    get shouldPreventWidgetAutoUpdate() {
      this.setGlobalNodeID();
      return this.getPluginData('WIDGET_INTERNAL', 'shouldPreventWidgetAutoUpdate') === 'true';
    }
    setWidgetPropertyMenuItems(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setWidgetPropertyMenuItems(e);
    }
    setWidgetSyncedState(e, t) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setWidgetSyncedState(e, t);
    }
    setInitialWidgetSyncedState(e, t) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setInitialWidgetSyncedState(e, t);
    }
    deleteWidgetSyncedState(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.deleteWidgetSyncedState(e);
    }
    clearWidgetSyncedState() {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.clearWidgetSyncedState();
    }
    getWidgetSyncedState() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getWidgetSyncedState();
    }
    get widgetSyncedState() {
      return this.getWidgetSyncedState();
    }
    get widgetCachedAncestor() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getWidgetCachedAncestor() || '';
    }
    set widgetCachedAncestor(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setWidgetCachedAncestor(e);
    }
    removeWidgetWithoutSafetyChecks() {
      if (this.type !== 'WIDGET') throw new Error('Can only remove widgets');
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.removeSelfAndChildrenWithoutSafetyChecks(this.sceneGraph.nodeContext);
    }
    get renderedSyncedState() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getRenderedSyncedState();
    }
    set renderedSyncedState(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setRenderedSyncedState(e);
    }
  }
  ;
  // Final node class with all mixins
  class MixinNodes extends WidgetNode {
    get mask() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsMask(this.sceneGraph.nodeContext);
    }
    set mask(e) {
      this.setGlobalNodeID();
      let t = NodeTsApiGenerated.setIsMask(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get size() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getSize(this.sceneGraph.nodeContext);
    }
    set size(e) {
      this.setGlobalNodeID();
      let t = NodeTsApiGenerated.setSize(e, this.sceneGraph.nodeContext);
      if (t) throw new Error(t);
    }
    get shapeWithTextType() {
      this.setGlobalNodeID();
      let e = NodeTsApiGenerated.getShapeWithTextType(this.sceneGraph.nodeContext);
      let t = _$$w.ShapeWithTextType[e];
      if (t != null) return t;
      throw new Error(`Invalid value for shapeWithTextType: ${e}`);
    }
    set shapeWithTextType(e) {
      let t = _$$w.ShapeWithTextType[e];
      if (typeof t == 'number') {
        this.setGlobalNodeID();
        let e = NodeTsApiGenerated.setShapeWithTextType(t, this.sceneGraph.nodeContext);
        if (e) throw new Error(e);
      } else {
        throw new TypeError(`Invalid value for shapeWithTextType: ${e}`);
      }
    }
    get slotBackingLayerId() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getSlotBackingLayerId(this.sceneGraph.nodeContext);
    }
    get visualGroupHash() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getVisualGroupHash(this.sceneGraph.nodeContext);
    }
    get isReactFiber() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsReactFiber(this.sceneGraph.nodeContext);
    }
    get isGrid() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsGrid(this.sceneGraph.nodeContext);
    }
    get isLayoutContainer() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsLayoutContainer(this.sceneGraph.nodeContext);
    }
    get isLayoutChild() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsLayoutChild(this.sceneGraph.nodeContext);
    }
    get isLayoutPositioned() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsLayoutPositioned(this.sceneGraph.nodeContext);
    }
    get isGridChild() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsGridChild(this.sceneGraph.nodeContext);
    }
    get gridRowCount() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getGridRowCount(this.sceneGraph.nodeContext);
    }
    get gridColumnCount() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getGridColumnCount(this.sceneGraph.nodeContext);
    }
    get gridColumnAnchorIndex() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getGridColumnAnchorIndex(this.sceneGraph.nodeContext);
    }
    get gridRowAnchorIndex() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getGridRowAnchorIndex(this.sceneGraph.nodeContext);
    }
    get gridRowSizesInOrder() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getGridRowSizesInOrder(this.sceneGraph.nodeContext);
    }
    get gridColumnSizesInOrder() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getGridColumnSizesInOrder(this.sceneGraph.nodeContext);
    }
    get hasCodeInstanceDescendant() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getHasCodeInstanceDescendant(this.sceneGraph.nodeContext);
    }
    get isVectorLike() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsVectorLike(this.sceneGraph.nodeContext);
    }
    get isEmbeddedPrototype() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsEmbeddedPrototype(this.sceneGraph.nodeContext);
    }
    get isSlotReactive() {
      this.setGlobalNodeID();
      return NodeTsApiGenerated.getIsSlotReactive(this.sceneGraph.nodeContext);
    }
  }
  ;
  return MixinNodes;
}
let F: any = null;
export function $$M1(e) {
  F = e;
}
export class SceneNode extends createMixinNodes() {
  update() {
    this.setGlobalNodeID();
    new MutableSceneGraph(this.sceneGraph.scene).updateNode(this.guid);
  }
  get developerFriendlyId() {
    this.setGlobalNodeID();
    return _$$v.fromString(SceneNodeCpp.developerFriendlyIdFromGuid(this.guid, this.sceneGraph.scene));
  }
  get stablePath() {
    this.setGlobalNodeID();
    return SceneNodeCpp.stablePath(this.sceneGraph.nodeContext);
  }
  get isPageDivider() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsPageDivider(this.sceneGraph.nodeContext);
  }
  set isPageDivider(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setIsPageDivider(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get nodeMemoryUsage() {
    return AppStateTsApi.getMemoryUsage(this.guid);
  }
  get rootMemoryUsage() {
    return AppStateTsApi.getRootMemoryUsage();
  }
  get absoluteTransform() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApiGenerated.getAbsoluteTransform(this.sceneGraph.nodeContext);
  }
  get hasPaintedFill() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getHasPaintedFill(this.sceneGraph.nodeContext);
  }
  get absoluteRenderBounds() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getAbsoluteRenderBounds(this.sceneGraph.nodeContext);
    return e ? {
      h: e.size.y,
      w: e.size.x,
      x: e.origin.x,
      y: e.origin.y
    } : null;
  }
  get absoluteBoundingBox() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getAbsoluteBoundingBox(this.sceneGraph.nodeContext);
    return {
      h: e.size.y,
      w: e.size.x,
      x: e.origin.x,
      y: e.origin.y
    };
  }
  get minWidth() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getMinWidth(this.sceneGraph.nodeContext) ?? null;
  }
  set minWidth(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setMinWidth(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get minHeight() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getMinHeight(this.sceneGraph.nodeContext) ?? null;
  }
  set minHeight(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setMinHeight(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get maxWidth() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getMaxWidth(this.sceneGraph.nodeContext) ?? null;
  }
  set maxWidth(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setMaxWidth(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get maxHeight() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getMaxHeight(this.sceneGraph.nodeContext) ?? null;
  }
  set maxHeight(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setMaxHeight(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get richMediaInfo() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getRichMediaInfo(this.sceneGraph.nodeContext) ?? null;
  }
  get stampData() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getStampData(this.sceneGraph.nodeContext) ?? null;
  }
  get isFaceStamp() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.isFaceStamp(this.sceneGraph.nodeContext) ?? !1;
  }
  get childrenAreAllGhosts() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.childrenAreAllGhosts(this.sceneGraph.nodeContext);
  }
  get isUnderHiddenSection() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.isUnderHiddenSection(this.sceneGraph.nodeContext);
  }
  get whiteboardColor() {
    this.setGlobalNodeID();
    return WhiteboardTsApi.getWhiteboardColor(this.sceneGraph.nodeContext);
  }
  get objectsPanelThumbnailId() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getObjectsPanelThumbnailId();
  }
  get textContent() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getTextContent(this.sceneGraph.nodeContext);
  }
  set textContent(e) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setTextContent(e, this.sceneGraph.nodeContext);
  }
  get accessibleLabel() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getAccessibleLabel(this.sceneGraph.nodeContext);
  }
  set accessibleLabel(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setAccessibleLabel(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get ariaAttributes() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getAriaAttributes(this.sceneGraph.nodeContext);
  }
  get accessibleHTMLTag() {
    this.setGlobalNodeID();
    return _$$w.HTMLTag[this.bindings.PrototypingFacetTsApiGenerated.getAccessibleHtmlTag(this.sceneGraph.nodeContext)];
  }
  set accessibleHTMLTag(e) {
    this.setGlobalNodeID();
    let t = this.bindings.PrototypingFacetTsApiGenerated.setAccessibleHtmlTag(_$$w.HTMLTag[e], this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get textSublayer() {
    return (this.setGlobalNodeID(), SceneNodeCpp) ? this.sceneGraph.get(SceneNodeCpp.getTextSublayer(this.sceneGraph.nodeContext)) : null;
  }
  get immutableFrameShape() {
    return (this.setGlobalNodeID(), SceneNodeCpp) ? this.sceneGraph.get(SceneNodeCpp.getImmutableFrameShape(this.sceneGraph.nodeContext)) : null;
  }
  get immutableFrameLabel() {
    return (this.setGlobalNodeID(), SceneNodeCpp) ? this.sceneGraph.get(SceneNodeCpp.getImmutableFrameLabel(this.sceneGraph.nodeContext)) : null;
  }
  get exportSettings() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getExportSettings(this.sceneGraph.nodeContext);
    return e === '' ? [] : _$$w.decodeNodeChange(decodeBase64(e)).exportSettings || [];
  }
  set exportSettings(e) {
    let t = _$$w.encodeNodeChange({
      exportSettings: e
    });
    let i = _$$w.decodeNodeChange(t).exportSettings;
    if (!approximateEqual(e, i)) throw new Error('Invalid format for export settings');
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setExportSettings(encodeBase64(t), this.sceneGraph.nodeContext);
  }
  get devToolsOrderedVisibleChildren() {
    let e = this.isStack && this.inferredAutoLayoutResult;
    this.setGlobalNodeID();
    let t = e ? SceneNodeCpp.getInferredSortedChildren(this.sceneGraph.nodeContext) : this.bindings.NodeTsApi.getVisibleChildren(this.sceneGraph.nodeContext);
    this.childrenDisplayOrder === _$$k.DESIGN && t.reverse();
    return t;
  }
  get uiOrderedChildren() {
    this.setGlobalNodeID();
    let e = this.childrenDisplayOrder === _$$k.DESIGN;
    return !this.simplifyInstancePanels || this.containingSymbolId || this.containingStateGroupId ? e ? SceneNodeCpp.getReversedChildren(this.sceneGraph.nodeContext) : this.bindings.NodeTsApi.getChildren(this.sceneGraph.nodeContext) : SceneNodeCpp.getSimplifiedChildrenIfNotExpanded(this.sceneGraph.nodeContext, e);
  }
  findContainingFragmentOrSelf() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.findContainingFragmentOrSelf(this.sceneGraph.nodeContext);
  }
  isProbablyContainerFrame() {
    this.setGlobalNodeID();
    return !!this.bindings.NodeTsApi.isProbablyContainerFrame(this.sceneGraph.nodeContext);
  }
  get hasVideoPaintOrHasVideoPaintDescendant() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.hasVideoPaintOrHasVideoPaintDescendant(this.sceneGraph.nodeContext) || !1;
  }
  findContainingTopLevelNodeWithWidthConstraint(e) {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.findContainingTopLevelNodeWithWidthConstraint(this.sceneGraph.nodeContext, e);
  }
  get fixedChildrenCount() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getFixedChildrenCount(this.sceneGraph.nodeContext);
  }
  set fixedChildrenCount(e) {
    this.setGlobalNodeID();
    let t = SceneNodeCpp.setFixedChildrenCount(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get isStackOrFixedSizeContainer() {
    return isSpecialNodeType(this.type) && !this.isGroup;
  }
  get isSection() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsSection(this.sceneGraph.nodeContext);
  }
  get hasBeenEditedSinceLastStatusChange() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.hasBeenEditedSinceLastStatusChange(this.sceneGraph.nodeContext);
  }
  get canHaveStatus() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.canHaveStatus(this.sceneGraph.nodeContext);
  }
  get hasStatus() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getStatusInfo(this.sceneGraph.nodeContext).status !== BuildStatus.NONE;
  }
  get hasReadyStatus() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getStatusInfo(this.sceneGraph.nodeContext).status === BuildStatus.BUILD;
  }
  get hasCompletedStatus() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getStatusInfo(this.sceneGraph.nodeContext).status === BuildStatus.COMPLETED;
  }
  getStatusInfo() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getStatusInfo(this.sceneGraph.nodeContext);
  }
  setStatus(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.setStatus({
      status: e,
      userId: t,
      description: i
    }, this.sceneGraph.nodeContext);
    if (n) throw new Error(n);
  }
  get hasEnabledStaticImagePaint() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getHasEnabledStaticImagePaint(this.sceneGraph.nodeContext);
  }
  get hasEnabledAnimatedPaint() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getHasEnabledAnimatedPaint(this.sceneGraph.nodeContext);
  }
  get hasEnabledVideoPaint() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getHasEnabledVideoPaint(this.sceneGraph.nodeContext);
  }
  get isCodeLibrary() {
    this.setGlobalNodeID();
    return this.type === 'CODE_LIBRARY';
  }
  get isCodeFile() {
    this.setGlobalNodeID();
    return this.type === 'CODE_FILE';
  }
  get isCodeComponent() {
    this.setGlobalNodeID();
    return this.type === 'CODE_COMPONENT';
  }
  get isCodeInstance() {
    this.setGlobalNodeID();
    return this.type === 'CODE_INSTANCE';
  }
  get isMakeResponsiveSet() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsMakeResponsiveSet(this.sceneGraph.nodeContext);
  }
  get isInstanceOrCodeInstance() {
    this.setGlobalNodeID();
    return this.isInstance || this.isCodeInstance;
  }
  get isTemplate() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsTemplate(this.sceneGraph.nodeContext);
  }
  get editInfo() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getEditInfo(this.sceneGraph.nodeContext) ?? null;
  }
  set editInfo(e) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setEditInfo(this.sceneGraph.nodeContext, e);
  }
  get hubFileAttribution() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getHubFileAttribution(this.sceneGraph.nodeContext) ?? null;
  }
  set hubFileAttribution(e) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setHubFileAttribution(e, this.sceneGraph.nodeContext);
  }
  get id() {
    return isVariableNode(this) ? this.variableID : _$$v2(this) ? this.ownVariableCollectionId : hasStyleType(this) ? this.styleAssetId : super.id;
  }
  get hasHiddenChildrenWhenSimplified() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getHasHiddenChildrenWhenSimplified(this.sceneGraph.nodeContext);
  }
  get isBubbled() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsBubbled(this.sceneGraph.nodeContext);
  }
  get componentPropsJsonForNode() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getComponentPropsJsonForNode(this.sceneGraph.nodeContext);
  }
  getCombinedCodeBehaviorPropAssignments(e) {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCombinedCodeBehaviorPropAssignments(this.sceneGraph.nodeContext, e);
  }
  get sectionContentsHidden() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getSectionContentsHidden(this.sceneGraph.nodeContext);
  }
  set sectionContentsHidden(e) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setSectionContentsHidden(e, this.sceneGraph.nodeContext);
  }
  setImageInFillPaint(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.setImageInFillPaint(this.sceneGraph.nodeContext, e, t || 0, i ? b(i) : null);
    if (n) throw new Error(n);
  }
  insertImageInFillPaint(e, t = 'FILL', i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.insertImageInFillPaint(this.sceneGraph.nodeContext, e, b(t), void 0 !== i ? i : null);
    if (n) throw new Error(n);
  }
  setImageInPropAssignment(e, t) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setImageInPropAssignment(this.sceneGraph.nodeContext, e, t);
    if (i) throw new Error(i);
  }
  setFillPaintEnabled(e, t) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setFillPaintEnabled(this.sceneGraph.nodeContext, e, t);
    if (i) throw new Error(i);
  }
  get chunkChangeStatus() {
    this.setGlobalNodeID();
    return HistoryChangesBindings.getChunkChangeStatus();
  }
  get nodeChangeStatus() {
    this.setGlobalNodeID();
    return HistoryChangesBindings.getNodeChangeStatus();
  }
  get canvasSearchHighlightsCount() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCanvasSearchHighlightsCount();
  }
  applyTextStylingAction(e) {
    this.setGlobalNodeID();
    return SceneNodeCpp.applyTextStylingAction(e, this.sceneGraph.nodeContext);
  }
  get isEmbed() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsEmbed(this.sceneGraph.nodeContext);
  }
  get isLinkPreview() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsLinkPreview(this.sceneGraph.nodeContext);
  }
  get relativeTransform() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getRelativeTransform(this.sceneGraph.nodeContext);
  }
  set relativeTransform(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setRelativeTransform(e.m00, e.m01, e.m02, e.m10, e.m11, e.m12, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get x() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getRelativeTransform(this.sceneGraph.nodeContext).m02;
  }
  set x(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.getRelativeTransform(this.sceneGraph.nodeContext);
    let i = this.bindings.NodeTsApi.setRelativeTransform(t.m00, t.m01, e, t.m10, t.m11, t.m12, this.sceneGraph.nodeContext);
    if (i) throw new Error(i);
  }
  get y() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getRelativeTransform(this.sceneGraph.nodeContext).m12;
  }
  set y(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.getRelativeTransform(this.sceneGraph.nodeContext);
    let i = this.bindings.NodeTsApi.setRelativeTransform(t.m00, t.m01, t.m02, t.m10, t.m11, e, this.sceneGraph.nodeContext);
    if (i) throw new Error(i);
  }
  get rotation() {
    this.setGlobalNodeID();
    return 180 / Math.PI * _$$h(this.relativeTransform);
  }
  set rotation(e) {
    this.setGlobalNodeID();
    this.relativeTransform = _$$n(this.relativeTransform, Math.PI / 180 * e);
  }
  get rotationOrigin() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getRotationOrigin(this.sceneGraph.nodeContext);
  }
  setRelativeTransformWithAnimation(e, t, i) {
    this.setGlobalNodeID();
    return parseInt(AnimationBindings.setRelativeTransform(this.sceneGraph.nodeContext, {
      ...e
    }, t, i));
  }
  get overlayTransform() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getOverlayTransform(this.sceneGraph.nodeContext);
  }
  set overlayTransform(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setOverlayTransform(e.m00, e.m01, e.m02, e.m10, e.m11, e.m12, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get localOpacity() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getLocalOpacity(this.sceneGraph.nodeContext);
  }
  set localOpacity(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setLocalOpacity(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  removeLocalOpacity() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.removeLocalOpacity(this.sceneGraph.nodeContext);
    if (e) throw new Error(e);
  }
  get behaviorStatePreviewEnabled() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getBehaviorStatePreviewEnabled(this.sceneGraph.nodeContext);
  }
  set behaviorStatePreviewEnabled(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setBehaviorStatePreviewEnabled(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  setOpacityWithAnimation(e, t, i) {
    this.setGlobalNodeID();
    return parseInt(AnimationBindings.setOpacity(this.sceneGraph.nodeContext, e, t, i));
  }
  get characters() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getCharacters(this.sceneGraph.nodeContext);
  }
  set characters(e) {
    this.setGlobalNodeID();
    this.spliceCharacters(0, this.characters.length, e, 'BEFORE');
  }
  get starInnerScale() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getStarInnerScale(this.sceneGraph.nodeContext);
  }
  set starInnerScale(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setStarInnerScale(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get authorName() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getAuthorName(this.sceneGraph.nodeContext);
  }
  get authorNodeId() {
    this.setGlobalNodeID();
    return SceneNodeCpp?.getAuthorNodeId(this.sceneGraph.nodeContext) ?? null;
  }
  get authorVisible() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getAuthorVisible(this.sceneGraph.nodeContext);
  }
  set authorVisible(e) {
    this.setGlobalNodeID();
    let t = SceneNodeCpp.setAuthorVisible(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get isWideWidth() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getIsWideWidth(this.sceneGraph.nodeContext);
  }
  set isWideWidth(e) {
    this.setGlobalNodeID();
    let t = SceneNodeCpp.setIsWideWidth(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get consumers() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getStyleConsumers();
  }
  get codeBlockLanguage() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCodeBlockLanguage(this.sceneGraph.nodeContext);
  }
  set codeBlockLanguage(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setCodeBlockLanguage(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get fills() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getJsFillPaints(this.sceneGraph.nodeContext);
  }
  set fills(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setRangeFillPaints(0, -1, C_('fillPaints', {
      data: e,
      blobs: []
    }), this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get fillsOrMixed() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getRangeFillPaints(0, -1, this.sceneGraph.nodeContext);
    return e === 'mixed' ? e : this.fills;
  }
  set fillPaintsForPluginOnly(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setRangeFillPaints(0, -1, C_('fillPaints', e), this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get strokePaints() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getJsStrokePaints(this.sceneGraph.nodeContext);
    return {
      data: assertNotNullish(e, 'Got empty strokePaints from C++'),
      blobs: []
    };
  }
  set strokePaints(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setStrokePaints(C_('strokePaints', e), this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  setImageInStrokePaint(e, t) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setImageInStrokePaint(this.sceneGraph.nodeContext, e, t || 0);
    if (i) throw new Error(i);
  }
  insertImageInStrokePaint(e, t = 'FILL', i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.insertImageInStrokePaint(this.sceneGraph.nodeContext, e, b(t), void 0 !== i ? i : null);
    if (n) throw new Error(n);
  }
  initializeVideoTextureInFillPaint(e, t, i) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.initializeVideoTextureInFillPaint(this.sceneGraph.nodeContext, e, t, i);
  }
  setVideoElementInFillPaint(e, t) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setVideoElementInFillPaint(this.sceneGraph.nodeContext, e, t);
  }
  setVideoCurrentTimeInFillPaint(e, t) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setVideoCurrentTimeInFillPaint(this.sceneGraph.nodeContext, e, t);
  }
  setVideoIsPlayingInFillPaint(e, t) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setVideoIsPlayingInFillPaint(this.sceneGraph.nodeContext, e, t);
  }
  get directlySelectedNodes() {
    this.setGlobalNodeID();
    return this.sceneGraph.getNodes(SceneNodeCpp.getDirectlySelectedNodes(this.sceneGraph.nodeContext));
  }
  set directlySelectedNodes(e) {
    this.setGlobalNodeID();
    let t = SceneNodeCpp.setDirectlySelectedNodes(e.map(e => e.guid), this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get layoutGrids() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getLayoutGrids(this.sceneGraph.nodeContext);
    return e === '' ? [] : _$$w.decodeNodeChange(decodeBase64(e)).layoutGrids || [];
  }
  set layoutGrids(e) {
    let t = _$$w.encodeNodeChange({
      layoutGrids: e
    });
    let i = _$$w.decodeNodeChange(t).layoutGrids;
    if (!approximateEqual(e, i)) throw new Error('Invalid format for layoutGrids');
    this.setGlobalNodeID();
    let s = this.bindings.NodeTsApi.setLayoutGrids(encodeBase64(t), this.sceneGraph.nodeContext);
    if (s) throw new Error(s);
  }
  get effects() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getJsEffects(this.sceneGraph.nodeContext);
  }
  set effects(e) {
    let t = _$$w.encodeNodeChange({
      effects: e
    });
    let i = _$$w.decodeNodeChange(t).effects;
    if (!approximateEqual(e, i)) throw new Error('Invalid format for effects');
    this.setGlobalNodeID();
    let s = this.bindings.NodeTsApi.setEffects(encodeBase64(t), this.sceneGraph.nodeContext);
    if (s) throw new Error(s);
  }
  get canHaveGlassEffect() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.canHaveGlassEffect(this.sceneGraph.nodeContext);
  }
  set videoPlayback(e) {
    if (this.setGlobalNodeID(), void 0 === e.autoplay || void 0 === e.mediaLoop || void 0 === e.muted) throw new Error('Missing playback setting');
    let t = this.bindings.NodeTsApi.setVideoPlayback({
      autoplay: e.autoplay,
      mediaLoop: e.mediaLoop,
      muted: e.muted,
      showControls: e.showControls ?? !1
    }, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get videoPlayback() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getVideoPlayback(this.sceneGraph.nodeContext);
    return {
      autoplay: e.autoplay,
      mediaLoop: e.mediaLoop,
      muted: e.muted,
      showControls: e.showControls
    };
  }
  get dashPattern() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getDashPattern(this.sceneGraph.nodeContext);
    return e === '' ? [] : _$$w.decodeNodeChange(decodeBase64(e)).dashPattern || [];
  }
  set dashPattern(e) {
    let t = _$$w.encodeNodeChange({
      dashPattern: e
    });
    let i = _$$w.decodeNodeChange(t).dashPattern;
    if (!approximateEqual(e, i)) throw new Error('Invalid format for dashPattern');
    this.setGlobalNodeID();
    let s = this.bindings.NodeTsApi.setDashPattern(encodeBase64(t), this.sceneGraph.nodeContext);
    if (s) throw new Error(s);
  }
  get hangingPunctuation() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getHangingPunctuation(this.sceneGraph.nodeContext);
  }
  set hangingPunctuation(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setHangingPunctuation(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get hangingList() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getHangingList(this.sceneGraph.nodeContext);
  }
  set hangingList(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setHangingList(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get maxLines() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getMaxLines(this.sceneGraph.nodeContext) ?? null;
  }
  set maxLines(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setMaxLines(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get paragraphIndent() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getParagraphIndent(this.sceneGraph.nodeContext);
  }
  set paragraphIndent(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setParagraphIndent(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get paragraphIndentOrMixed() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getRangeParagraphIndent(0, -1, this.sceneGraph.nodeContext);
  }
  get paragraphSpacing() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getParagraphSpacing(this.sceneGraph.nodeContext);
  }
  set paragraphSpacing(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setParagraphSpacing(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get paragraphSpacingOrMixed() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getRangeParagraphSpacing(0, -1, this.sceneGraph.nodeContext);
  }
  get listSpacing() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getListSpacing(this.sceneGraph.nodeContext);
  }
  set listSpacing(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setListSpacing(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get listSpacingOrMixed() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getRangeListSpacing(0, -1, this.sceneGraph.nodeContext);
  }
  get fillGeometry() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getFillGeometry(this.sceneGraph.nodeContext);
  }
  get strokeGeometry() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getStrokeGeometry(this.sceneGraph.nodeContext);
  }
  get strokeCap() {
    this.setGlobalNodeID();
    return _$$w.StrokeCap[this.bindings.NodeTsApi.getStrokeCap(this.sceneGraph.nodeContext)] || null;
  }
  set strokeCap(e) {
    let t = _$$w.StrokeCap[e];
    if (typeof t == 'number') {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.setStrokeCap(t, this.sceneGraph.nodeContext);
      if (e) throw new Error(e);
    } else {
      throw new TypeError('Invalid value for strokeCap');
    }
  }
  get strokeCapOrMixed() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getStrokeCapOrMixed(this.sceneGraph.nodeContext);
    return e === 'mixed' ? e : _$$w.StrokeCap[e] || null;
  }
  get strokeJoin() {
    this.setGlobalNodeID();
    return _$$w.StrokeJoin[this.bindings.NodeTsApi.getStrokeJoin(this.sceneGraph.nodeContext)] || null;
  }
  set strokeJoin(e) {
    let t = _$$w.StrokeJoin[e];
    if (typeof t == 'number') {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.setStrokeJoin(t, this.sceneGraph.nodeContext);
      if (e) throw new Error(e);
    } else {
      throw new TypeError('Invalid value for strokeJoin');
    }
  }
  get strokeJoinOrMixed() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getStrokeJoinOrMixed(this.sceneGraph.nodeContext);
    return e === 'mixed' ? e : _$$w.StrokeJoin[e] || null;
  }
  get strokeMiterLimit() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getStrokeMiterLimit(this.sceneGraph.nodeContext);
  }
  set strokeMiterLimit(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setStrokeMiterLimit(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get handleMirroringOrMixed() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getHandleMirroringOrMixed(this.sceneGraph.nodeContext);
    return e === 'mixed' ? e : _$$w.VectorMirror[e] || null;
  }
  get overriddenInheritedFillStyles() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getOverriddenInheritedFillStyles(this.sceneGraph.nodeContext) ?? {};
    for (let t in e) e[t]?.fills && (e[t].fills = assertNotNullish(dG('fillPaints', e[t].fills), 'Figma Internal Error: fillPaints not found'));
    return e;
  }
  get inheritedFillStyle() {
    return this.getInheritedStyleKey('inheritFillStyleKey');
  }
  set inheritedFillStyle(e) {
    this.setInheritedStyleKey('inheritFillStyleKey', e);
  }
  get inheritedFillStyleOrMixed() {
    return this.getInheritedStyleKeyOrMixed('inheritFillStyleKey');
  }
  get inheritedFillStyleForStroke() {
    return this.getInheritedStyleKey('inheritFillStyleKeyForStroke');
  }
  set inheritedFillStyleForStroke(e) {
    this.setInheritedStyleKey('inheritFillStyleKeyForStroke', e);
  }
  get inheritedEffectStyle() {
    return this.getInheritedStyleKey('inheritEffectStyleKey');
  }
  set inheritedEffectStyle(e) {
    this.setInheritedStyleKey('inheritEffectStyleKey', e);
  }
  get inheritedTextStyle() {
    return this.getInheritedStyleKey('inheritTextStyleKey');
  }
  set inheritedTextStyle(e) {
    this.setInheritedStyleKey('inheritTextStyleKey', e);
  }
  get inheritedTextStyleOrMixed() {
    return this.getInheritedStyleKeyOrMixed('inheritTextStyleKey');
  }
  get inheritedGridStyle() {
    return this.getInheritedStyleKey('inheritGridStyleKey');
  }
  set inheritedGridStyle(e) {
    this.setInheritedStyleKey('inheritGridStyleKey', e);
  }
  get isForcedStickable() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsForcedStickable();
  }
  set isForcedStickable(e) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setIsForcedStickable(e);
  }
  get stuckNodes() {
    this.setGlobalNodeID();
    let e = this.bindings.SceneGraphTsApi.getStuckNodes();
    return this.sceneGraph.getNodes(e);
  }
  get stickableHost() {
    this.setGlobalNodeID();
    let e = this.bindings.SceneGraphTsApi.getStickableHost();
    return e && e !== '-1:-1' ? e : null;
  }
  get linkPreviewData() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getLinkPreviewData(this.sceneGraph.nodeContext);
    for (let t of Object.keys(e)) typeof e[t] == 'string' && (e[t] = decodeURIComponent(e[t]));
    return e;
  }
  get embedData() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getEmbedData(this.sceneGraph.nodeContext);
    for (let t of Object.keys(e)) typeof e[t] == 'string' && (e[t] = decodeURIComponent(e[t]));
    return e;
  }
  get mediaData() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getMediaData(this.sceneGraph.nodeContext);
    for (let t of Object.keys(e)) typeof e[t] == 'string' && (e[t] = decodeURIComponent(e[t]));
    return e;
  }
  get sectionPresetShelfId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getSectionPresetShelfId(this.sceneGraph.nodeContext) ?? null;
  }
  get sectionPresetTemplateId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getSectionPresetTemplateId(this.sceneGraph.nodeContext) ?? null;
  }
  get canvasSpaceSectionTopLeft() {
    this.setGlobalNodeID();
    return WhiteboardSectionPresetPickerCppBindings.calculateSectionTopLeft(this.sceneGraph.nodeContext);
  }
  get sectionPresetPickerCalloutPosition() {
    this.setGlobalNodeID();
    return WhiteboardSectionPresetPickerCppBindings.calculateCalloutPosition(this.sceneGraph.nodeContext);
  }
  get tonePosition() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getTonePosition(this.sceneGraph.nodeContext);
  }
  setTonePosition(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setTonePosition(this.sceneGraph.nodeContext, e);
    if (t) throw new Error(t);
  }
  get focusedNodeId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getFocusedNodeId(this.sceneGraph.nodeContext);
  }
  set focusedNodeId(e) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setFocusedNodeId(this.sceneGraph.nodeContext, e);
  }
  get hasSectionPresetWithEdits() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getHasSectionPresetWithEdits(this.sceneGraph.nodeContext);
  }
  clone() {
    this.setGlobalNodeID();
    let e = SceneNodeCpp.cloneNode(this.sceneGraph.nodeContext);
    if (!e) throw new Error('Failed to clone node');
    return e;
  }
  ungroupNodeRecursive() {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.ungroupNodeRecursive(this.sceneGraph.nodeContext);
  }
  rescale(e) {
    this.setGlobalNodeID();
    SceneNodeCpp.rescale(e, this.sceneGraph.nodeContext);
  }
  outlineStroke() {
    this.setGlobalNodeID();
    return SceneNodeCpp?.outlineStroke(this.sceneGraph.nodeContext) ?? null;
  }
  export(e) {
    this.setGlobalNodeID();
    if (!e) return SceneNodeCpp.exportAsImage('', this.sceneGraph.nodeContext);
    {
      let t = encodeBase64(_$$w.encodeNodeChange({
        exportSettings: e
      }));
      return SceneNodeCpp.exportAsImage(t, this.sceneGraph.nodeContext);
    }
  }
  async loadImagesAndExport(e) {
    await F?.(this, e || []);
    return this.export(e);
  }
  getSelectedTextRange() {
    this.setGlobalNodeID();
    return SceneNodeCpp?.getSelectedTextRange(this.sceneGraph.nodeContext) ?? null;
  }
  setSelectedTextRange(e, t, i) {
    this.setGlobalNodeID();
    let n = SceneNodeCpp.setSelectedTextRange(e, t, i, this.sceneGraph.nodeContext);
    if (n) throw new Error(n);
  }

  /**
   * Returns styled text segments for a given range.
   * Original method: getStyledTextSegments
   * @param {number} start - Start index of the range.
   * @param {number} [end] - End index of the range.
   * @param {number} [altEnd] - Alternative end index.
   * @returns {Array} Array of styled text segment objects.
   */
  getStyledTextSegments(start: number, end: number = -1, altEnd: number = -1) {
    this.setGlobalNodeID();
    const rawSegments = SceneNodeCpp.getStyledTextSegments(start, end, altEnd, this.sceneGraph.nodeContext);

    // Helper to decode paint data if present
    const decodePaints = (data: any, key: string, decodeFn: (k: string, v: any) => any, errMsg: string) => data ? assertNotNullish(decodeFn(key, data), errMsg) : data;
    const segments = rawSegments.map(segment => {
      const {
        fills,
        textDecorationFills,
        ...rest
      } = segment;
      const result: any = {
        ...rest
      };
      if ('fills' in segment) {
        result.fills = decodePaints(fills, 'fillPaints', dG, 'Figma Internal Error: fillPaints not found');
      }
      if ('textDecorationFills' in segment) {
        result.textDecorationFills = decodePaints(textDecorationFills, 'textDecorationFillPaints', dG, 'Figma Internal Error: textDecorationFillPaints not found');
      }
      return result;
    });

    // Adjust characters and range if a specific range is requested
    if (end !== -1 && altEnd !== -1 && segments.length > 0) {
      const first = segments[0];
      const last = segments[segments.length - 1];
      if (first.start < end || last.end > altEnd) {
        if (first === last) {
          first.characters = first.characters.substring(end - first.start, first.characters.length - (last.end - altEnd));
        } else {
          first.characters = first.characters.substring(end - first.start);
          last.characters = last.characters.substring(0, last.characters.length - (last.end - altEnd));
        }
        first.start = end;
        last.end = altEnd;
      }
    }
    return segments;
  }
  getRangeFillPaints(e, t) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.getRangeFillPaints(e, t, this.sceneGraph.nodeContext);
    return i === 'mixed' ? i : assertNotNullish(dG('fillPaints', i), 'Figma Internal Error: fillPaints not found');
  }
  setRangeFillPaints(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.setRangeFillPaints(e, t, C_('fillPaints', i), this.sceneGraph.nodeContext);
    if (n) throw new Error(n);
  }
  getRangeInheritedFillStyle(e, t) {
    return this.getRangeInheritedStyleKey(e, t, 'inheritFillStyleKey');
  }
  setRangeInheritedFillStyle(e, t, i) {
    this.setRangeInheritedStyleKey(e, t, 'inheritFillStyleKey', i);
  }
  getRangeInheritedTextStyle(e, t) {
    return this.getRangeInheritedStyleKey(e, t, 'inheritTextStyleKey');
  }
  setRangeInheritedTextStyle(e, t, i) {
    this.setRangeInheritedStyleKey(e, t, 'inheritTextStyleKey', i);
  }
  get isInImmutableFrame() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsInImmutableFrame(this.sceneGraph.nodeContext);
  }
  setProperties(e, t = !1, i = Confirmation.NO) {
    this.setGlobalNodeID();
    SceneNodeCpp.setProperties(e, t, i);
  }
  findAllWithCriteria(e) {
    this.setGlobalNodeID();
    return SceneNodeCpp.findAllWithCriteria(e, this.sceneGraph.nodeContext);
  }
  findAllWithCriteriaGUIDs(e) {
    this.setGlobalNodeID();
    return SceneNodeCpp.findAllWithCriteriaGUIDs(e, this.sceneGraph.nodeContext);
  }
  componentPropertyDefinitions(e = Confirmation.NO) {
    if (!this.isLooseComponent && !this.isStateGroup && !this.isCodeComponent) throw new Error('Can only get component property definitions of a component set or non-variant component');
    this.setGlobalNodeID();
    return SceneNodeCpp.componentPropertyDefinitions(e);
  }
  componentProperties(e = Confirmation.NO) {
    if (!this.isInstanceOrCodeInstance) throw new Error('Can only get component properties of an instance');
    return this.isAlive ? (this.setGlobalNodeID(), SceneNodeCpp.componentProperties(e)) : {};
  }
  setPropsAreBubbled(e) {
    return this.isPrimaryInstance ? (this.setGlobalNodeID(), SceneNodeCpp.setPropsAreBubbled(e, this.sceneGraph.nodeContext)) : 'Can only expose primary instances.';
  }
  get canBeSlot() {
    this.setGlobalNodeID();
    return SceneNodeCpp?.canNodeBeSlot(this.sceneGraph.nodeContext) ?? !1;
  }
  canReferenceExplicitSlotComponentPropertyDefinition(e) {
    this.setGlobalNodeID();
    return SceneNodeCpp?.canNodeReferenceExplicitSlotComponentPropertyDefinition(e, this.sceneGraph.nodeContext) ?? !1;
  }
  cellAt(e, t) {
    this.setGlobalNodeID();
    let i = SceneNodeCpp?.cellAt(e, t);
    return i && i !== defaultSessionLocalIDString ? i : null;
  }
  insertRow(e) {
    this.setGlobalNodeID();
    let t = SceneNodeCpp.insertRow(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  insertColumn(e) {
    this.setGlobalNodeID();
    let t = SceneNodeCpp.insertColumn(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  removeRow(e) {
    this.setGlobalNodeID();
    let t = SceneNodeCpp.removeRow(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  removeColumn(e) {
    this.setGlobalNodeID();
    let t = SceneNodeCpp.removeColumn(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  moveRow(e, t) {
    this.setGlobalNodeID();
    let i = SceneNodeCpp.moveRow(e, t, this.sceneGraph.nodeContext);
    if (i) throw new Error(i);
  }
  moveColumn(e, t) {
    this.setGlobalNodeID();
    let i = SceneNodeCpp.moveColumn(e, t, this.sceneGraph.nodeContext);
    if (i) throw new Error(i);
  }
  resizeRow(e, t) {
    this.setGlobalNodeID();
    let i = SceneNodeCpp.resizeRow(e, t, this.sceneGraph.nodeContext);
    if (i) throw new Error(i);
  }
  resizeColumn(e, t) {
    this.setGlobalNodeID();
    let i = SceneNodeCpp.resizeColumn(e, t, this.sceneGraph.nodeContext);
    if (i) throw new Error(i);
  }
  addComponentPropertyDefinition(e, t, i, r) {
    if (!this.isLooseComponent && !this.isStateGroup) throw new Error('Can only set component property definitions on a product component');
    let a = _$$w.ComponentPropType[t];
    if (typeof a == 'number') {
      this.setGlobalNodeID();
      return SceneNodeCpp.addComponentPropertyDefinition(e, a, i, r ?? null, this.sceneGraph.nodeContext);
    }
    throw new Error('Invalid value for propertyType');
  }
  editComponentPropertyDefinition(e, t = '', i, n) {
    if (!this.isLooseComponent && !this.isStateGroup) throw new Error('Can only edit component property definitions on a product component');
    this.setGlobalNodeID();
    return SceneNodeCpp.editComponentPropertyDefinition(e, t, i, n ?? null, this.sceneGraph.nodeContext);
  }
  deleteComponentPropertyDefinition(e) {
    if (!this.isLooseComponent && !this.isStateGroup) throw new Error('Can only delete component property definitions on a product component');
    this.setGlobalNodeID();
    SceneNodeCpp.deleteComponentPropertyDefinition(e, this.sceneGraph.nodeContext);
  }
  getRestfulJSON() {
    this.setGlobalNodeID();
    return SceneNodeCpp.getRestfulJSON();
  }
  getSitesJSON(e) {
    this.setGlobalNodeID();
    if (!SitesBindingsCpp) throw new Error('SitesBindingsCpp is not available in getSitesJSON');
    return SitesBindingsCpp.generateSitesBundleJson([this.guid], e ?? null);
  }
  filterSubtreeNodes(e) {
    this.setGlobalNodeID();
    return SceneNodeCpp.filterSubtreeNodes(e);
  }
  materializeDescendants() {
    this.setGlobalNodeID();
    return SceneNodeCpp.materializeDescendants(this.sceneGraph.nodeContext);
  }
  get childrenDisplayOrder() {
    return isSpecialNodeType(this.type) && this.isStack ? _$$k.DOM : _$$k.DESIGN;
  }
  get documentColorProfile() {
    let e = void 0 !== colorManagementStateJs && colorManagementStateJs.documentColorProfile().getCopy() != null ? colorManagementStateJs.documentColorProfile().getCopy() : ColorProfileEnum.LEGACY;
    return ColorProfileEnum[e];
  }
  get annotationCategories() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getAnnotationCategories(this.sceneGraph.nodeContext) ?? null;
  }
  get isIconLike() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsIconLike(this.sceneGraph.nodeContext);
  }
  get isStickyText() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsStickyText(this.sceneGraph.nodeContext) ?? !1;
  }
  get isImage() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsImage(this.sceneGraph.nodeContext) ?? !1;
  }
  get isIconLikeContainer() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsIconLikeContainer(this.sceneGraph.nodeContext);
  }
  setAnnotationCategories(e) {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.setAnnotationCategories(e, this.sceneGraph.nodeContext);
  }
  initializeAnnotationCategories() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.initializeAnnotationCategories(this.sceneGraph.nodeContext);
  }
  get behaviors() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getBehaviors(this.sceneGraph.nodeContext);
  }
  set behaviors(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setBehaviors(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get sourceCode() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getSourceCode(this.sceneGraph.nodeContext);
  }
  get collaborativeSourceCode() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getCollaborativeSourceCode(this.sceneGraph.nodeContext);
    return e === -1 ? null : new MutableCollaborativePlainText(e);
  }
  get sourceCodeLength() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getSourceCodeLength(this.sceneGraph.nodeContext) ?? 0;
  }
  set sourceCode(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setSourceCode(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  setCodeSnapshot(e, t, i, n, r) {
    this.setGlobalNodeID();
    let a = this.bindings.NodeTsApi.setCodeSnapshot(this.sceneGraph.nodeContext, e, t, i, n, r);
    if (a) throw new Error(a);
  }
  set codeComponentError(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setCodeComponentError(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  startCodeSnapshottingState(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.startCodeSnapshottingState(this.sceneGraph.nodeContext, e);
    if (t) throw new Error(t);
  }
  get isInitialCodeSnapshot() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.isInitialCodeSnapshot(this.sceneGraph.nodeContext);
  }
  createCodeLayerFromDesign(e, t, i) {
    this.setGlobalNodeID();
    return SceneNodeCpp.createCodeLayerFromDesign(e, t, i, this.sceneGraph.nodeContext);
  }
  get backingCodeComponent() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getBackingCodeComponentId(this.sceneGraph.nodeContext);
    if (!e) return null;
    let t = this.bindings.SceneGraphTsApi.getGUIDForAssetId(this.sceneGraph.scene, e, FacetType.CODE_COMPONENT);
    return t ? this.sceneGraph.get(t) : null;
  }
  get codeFilePath() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCodeFilePath(this.sceneGraph.nodeContext) ?? null;
  }
  set codeFilePath(e) {
    this.setGlobalNodeID();
    let t = e.split('/');
    t[t.length - 1]?.includes('.') && (t.pop(), console.warn('codeFilePath should not include the filename', e));
    let i = this.bindings.NodeTsApi.setCodeFilePath(this.sceneGraph.nodeContext, t.join('/'));
    if (i) throw new Error(i);
  }
  get exportedFromCodeFile() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getExportedFromCodeFileId(this.sceneGraph.nodeContext);
    if (!e) return null;
    let t = this.bindings.SceneGraphTsApi.getGUIDForAssetId(this.sceneGraph.scene, e, FacetType.CODE_FILE);
    return t ? this.sceneGraph.get(t) : null;
  }
  get codeFileCanvasNode() {
    if (this.setGlobalNodeID(), !this.isCodeFile) return null;
    let e = this.bindings.NodeTsApi.getCodeFileCanvasNodeGuid(this.sceneGraph.nodeContext);
    return e ? this.sceneGraph.get(e) : null;
  }
  get belongsToCodeLibrary() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getBelongsToCodeLibraryId(this.sceneGraph.nodeContext);
    if (!e) return null;
    let t = this.bindings.SceneGraphTsApi.getGUIDForAssetId(this.sceneGraph.scene, e, FacetType.CODE_LIBRARY);
    return t ? this.sceneGraph.get(t) : null;
  }
  get codeExportName() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCodeExportName(this.sceneGraph.nodeContext);
  }
  get codeBehaviorData() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCodeBehaviorData(this.sceneGraph.nodeContext);
  }
  get isCodeBehavior() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsCodeBehavior(this.sceneGraph.nodeContext);
  }
  forceRerenderCodeNodePreview() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.forceRerenderCodeNodePreview(this.sceneGraph.nodeContext);
  }
  get importedCodeFiles() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getRelativeCodeFileImports(this.sceneGraph.nodeContext);
  }
  set importedCodeFiles(e) {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.setRelativeCodeFileImports(this.sceneGraph.nodeContext, e);
  }
  materializeCodeComponents(e, t, i, n) {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.materializeCodeComponents(this.sceneGraph.nodeContext, e, t, i, n);
  }
  materializeCodeLayer(e) {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.materializeCodeLayer(this.sceneGraph.nodeContext, e);
  }
  get hasBeenManuallyRenamed() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getHasBeenManuallyRenamed(this.sceneGraph.nodeContext);
  }
  setHasBeenManuallyRenamed(e) {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.setHasBeenManuallyRenamed(this.sceneGraph.nodeContext, e);
  }
  get backingSourceCodeNodeId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getBackingSourceCodeNodeId(this.sceneGraph.nodeContext) ?? null;
  }
  get chatMessages() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getChatMessages(this.sceneGraph.nodeContext);
  }
  set chatMessages(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setChatMessages(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get chatCompressionState() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getChatCompressionState(this.sceneGraph.nodeContext);
  }
  set chatCompressionState(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setChatCompressionState(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get codeCreatedFromDesign() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCodeCreatedFromDesign(this.sceneGraph.nodeContext);
  }
  get codeCreatedFromDesignNode() {
    this.setGlobalNodeID();
    let e = this.bindings.NodeTsApi.getCodeCreatedFromDesignNodeGuid(this.sceneGraph.nodeContext);
    return e ? this.sceneGraph.get(e) : null;
  }
  canBeRestoredToDesignNode() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.canBeRestoredToDesignNode(this.sceneGraph.nodeContext);
  }
  get codeFileFullPath() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCodeFileFullPath(this.sceneGraph.nodeContext);
  }
  get codeFileFullPathWithoutScheme() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCodeFileFullPath(this.sceneGraph.nodeContext).replace(/^file:\/\//, '');
  }
  get isLayerLikeCodeNode() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsLayerLikeCodeNode(this.sceneGraph.nodeContext);
  }
  get isMainComponentLikeCodeNode() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getIsMainComponentLikeCodeNode(this.sceneGraph.nodeContext);
  }
  restoreCodeInstanceWithSoftDeletedBackingNodes() {
    this.setGlobalNodeID();
    return SceneNodeCpp?.restoreCodeInstanceWithSoftDeletedBackingNodes(this.sceneGraph.nodeContext);
  }
  set isCullingDisabledForGroup(e) {
    this.setGlobalNodeID();
    let t = this.bindings.StackFacetTsApiGenerated.setIsCullingDisabledForGroup(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get isDevModeAsset() {
    this.setGlobalNodeID();
    return HandoffBindingsCpp.isDevModeAsset(this.guid, this.sceneGraph.nodeContext);
  }
  setDakotaLinkFieldBindingOnPrototypeAction(e, t) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setDakotaLinkFieldBindingOnPrototypeAction(e, t ?? null, this.sceneGraph.nodeContext);
    if (i) throw new Error(i);
  }
  setDakotaItemPageLinkBindingOnHyperlink(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setDakotaItemPageLinkBindingOnHyperlink(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  isInFirstDakotaRepeaterChild() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.isInFirstDakotaRepeaterChild(this.sceneGraph.nodeContext);
  }
  setRepeaterToItemPageLinkOnPrototypeInteraction(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setRepeaterToItemPageLinkOnPrototypeInteraction(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  setCmsItemPageLinkOnHyperlink(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.setCmsItemPageLinkOnHyperlink(e, t, i, this.sceneGraph.nodeContext);
    if (n) throw new Error(n);
  }
  setCmsItemPageLinkOnPrototypeInteraction(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.setCmsItemPageLinkOnPrototypeInteraction(e, t, i, this.sceneGraph.nodeContext);
    if (n) throw new Error(n);
  }
  updateDakotaSelectorLimit(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.updateDakotaSelectorLimit(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  setDakotaSelectorCollection(e, t) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setDakotaSelectorCollection(e, this.sceneGraph.nodeContext, t);
    if (i) throw new Error(i);
  }
  setDakotaSelectorSingleItemFilter(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setDakotaSelectorSingleItemFilter(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  setDakotaItemDatas(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.setDakotaItemDatas(e, this.sceneGraph.nodeContext);
    n && logMessage(_$$e.CMS, new Error('Error: failed setDakotaItemDatas'), {
      extra: {
        error: n,
        nodeId: t,
        collectionId: i
      }
    });
  }
  getNodesForCmsBinding(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.getNodeIdsForCmsBinding(e ?? null, this.sceneGraph.nodeContext);
    return this.sceneGraph.getNodes(t);
  }
  getNearestDakotaCollectionId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getNearestDakotaCollectionId(this.sceneGraph.nodeContext);
  }
  getNearestAncestorDakotaCollectionId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getNearestAncestorDakotaCollectionId(this.sceneGraph.nodeContext);
  }
  getNearestDakotaCollectionItemId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getNearestDakotaCollectionItemId(this.sceneGraph.nodeContext);
  }
  getDakotaItemData() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getDakotaItemData(this.sceneGraph.nodeContext);
  }
  getDakotaSelectorCollectionId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getDakotaSelectorCollectionId(this.sceneGraph.nodeContext) ?? null;
  }
  getDakotaFieldIds() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getDakotaFieldIds(this.sceneGraph.nodeContext);
  }
  getDakotaFieldId() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getDakotaFieldId(this.sceneGraph.nodeContext);
  }
  getDakotaSelector() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getDakotaSelector(this.sceneGraph.nodeContext);
  }
  get isBoundToDakotaField() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.isBoundToDakotaField(this.sceneGraph.nodeContext);
  }
  get isInDakotaRepeater() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.isInDakotaRepeater(this.sceneGraph.nodeContext);
  }
  get imageImports() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getImageImports(this.sceneGraph.nodeContext);
  }
  setImageImports(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setImageImports(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  getCmsRichTextStyleMap() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getCmsRichTextStyleMap(this.sceneGraph.nodeContext);
  }
  setCmsRichTextStyle(e, t) {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.setCmsRichTextStyle(e, t, this.sceneGraph.nodeContext);
  }
  invalidateCanvasSpaceBoundsForSelfAndParents() {
    this.setGlobalNodeID();
    this.bindings.NodeTsApi.invalidateCanvasSpaceBoundsForSelfAndParents(this.sceneGraph.nodeContext);
  }
  createUntrackedCodeInstanceOnInternalCanvas() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.createUntrackedCodeInstanceOnInternalCanvas(this.sceneGraph.nodeContext);
  }
  getInheritedStyleKey(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.getInheritedStyle(e);
    return t && $P(t) ? t : null;
  }
  getInheritedStyleKeyOrMixed(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.getRangeInheritedStyle(0, -1, e, this.sceneGraph.nodeContext) ?? null;
    return t === 'mixed' ? 'mixed' : $P(t) ? t : null;
  }
  setInheritedStyleKey(e, t) {
    if (t && !$P(t)) throw new Error(`Invalid style key ${t.key} and version ${t.version}`);
    let i = t ?? {
      key: 'INVALID',
      version: 'INVALID'
    };
    this.setGlobalNodeID();
    let n = SceneNodeCpp?.setRangeInheritedStyle(0, -1, e, i.key, i.version, this.sceneGraph.nodeContext);
    if (n) throw new Error(`Cannot set style successfully: ${n}`);
  }
  getRangeInheritedStyleKey(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.getRangeInheritedStyle(e, t, i, this.sceneGraph.nodeContext);
    return n === 'mixed' ? n : $P(n) ? n : null;
  }
  setRangeInheritedStyleKey(e, t, i, n) {
    if (n && !$P(n)) throw new Error(`Invalid style key ${n.key} and version ${n.version}`);
    let r = n ?? {
      key: 'INVALID',
      version: 'INVALID'
    };
    this.setGlobalNodeID();
    let a = SceneNodeCpp.setRangeInheritedStyle(e, t, i, r.key, r.version, this.sceneGraph.nodeContext);
    if (a) throw new Error(`Cannot set style successfully: ${a}`);
  }
  get gridRowSizingCSS() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.gridRowSizingCSS(this.sceneGraph.nodeContext);
  }
  get gridColumnSizingCSS() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.gridColumnSizingCSS(this.sceneGraph.nodeContext);
  }
  setGridRowCount(e, t = !1) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setGridRowCount(this.sceneGraph.nodeContext, e, t);
    if (i) throw new Error(`Cannot set grid row count: ${i}`);
  }
  setGridColumnCount(e, t = !1) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setGridColumnCount(this.sceneGraph.nodeContext, e, t);
    if (i) throw new Error(`Cannot set grid column count: ${i}`);
  }
  setGridChildPosition(e, t) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setGridChildPosition(this.sceneGraph.nodeContext, e, t);
    if (i) throw new Error(`Cannot set grid child position: ${i}`);
  }
  appendChildToGridAtPosition(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.appendChildToGridAtPosition(this.sceneGraph.nodeContext, e, t, i);
    if (n) throw new Error(`Cannot append child to grid at specified position: ${n}`);
  }
  setSpanAndUpdateChildPositions(e, t) {
    this.setGlobalNodeID();
    let i = this.bindings.NodeTsApi.setSpanAndUpdateChildPositions(this.sceneGraph.nodeContext, e, t);
    if (i) throw new Error(`Cannot set span and update child positions: ${i}`);
  }
  setGridTrackSize(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.setGridTrackSize(this.sceneGraph.nodeContext, e === 'row' ? Axis.Y : Axis.X, t, i ?? 1);
    if (n) throw new Error(`Cannot set grid track size: ${n}`);
  }
  setGridTrackType(e, t, i) {
    this.setGlobalNodeID();
    let n = this.bindings.NodeTsApi.setGridTrackType(this.sceneGraph.nodeContext, e === 'row' ? Axis.Y : Axis.X, t, i);
    if (n) throw new Error(`Cannot set grid track sizing type: ${n}`);
  }
  get aiChatThread() {
    this.setGlobalNodeID();
    return this.bindings.NodeTsApi.getAIChatThread(this.sceneGraph.nodeContext) ?? null;
  }
  set aiChatThread(e) {
    this.setGlobalNodeID();
    let t = this.bindings.NodeTsApi.setAIChatThread(e, this.sceneGraph.nodeContext);
    if (t) throw new Error(t);
  }
  get parentNode() {
    let e = super.parentNode;
    return e || null;
  }
  get childrenNodes() {
    return super.childrenNodes;
  }
  get reversedChildrenNodes() {
    return super.reversedChildrenNodes;
  }
  createInstance() {
    return super.createInstance();
  }
  constructor(guid: string, sceneGraph: TSSceneGraph, bindings: Bindings) {
    super(guid, sceneGraph, bindings);
  }
}
export const D = SceneNode;
export const c = $$M1;
