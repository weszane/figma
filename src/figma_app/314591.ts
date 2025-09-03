import { throwTypeError } from "../figma_app/465776";
import { isNotNullish } from "../figma_app/95419";
import { xal, v4N, Hcu, Egt, Uze, J0O, SoG } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { w } from "../905/5147";
import { zS } from "../figma_app/930338";
import { KV } from "../figma_app/952446";
import { Fy } from "../figma_app/623300";
import { throwTypeError } from "../figma_app/164212";
import { E as _$$E } from "../905/142894";
import { y as _$$y } from "../905/829723";
import { dB, c1, SW } from "../905/589717";
import { QB, B_, $7, o8, U1, Sv } from "../905/258397";
import { X } from "../905/776923";
import { $ } from "../905/819786";
import { m as _$$m } from "../905/168176";
import { H } from "../figma_app/23564";
export class $$b0 extends $ {
  constructor({
    name: e,
    sensitiveTextPolicy: t,
    type: r,
    pagesList: n,
    migrationVersion: i
  }) {
    super({
      name: e,
      sensitiveTextPolicy: t
    });
    this.type = r;
    this.pagesList = n;
    this.migrationVersion = i;
    this.scene = new I(this);
  }
  getSearch() {
    return this.scene.getSearch();
  }
  get metadata() {
    return {
      "Migration version": this.migrationVersion?.toString()
    };
  }
  setSceneGraphValidationInfo(e) {
    this.sceneGraphValidationInfo = new _$$m(this.scene, e);
  }
  setNodeWarnings(e) {
    this.nodeWarnings = e;
  }
  getAdditionalProperties(e) {
    let t = [];
    let r = this.sceneGraphValidationInfo?.generateProperty(e);
    if (r && t.push(r), this.pagesList) {
      let r = this.scene.getNodeById(e);
      let n = r?.isPage ? r : r?.containingPage;
      t.push({
        label: "Dynamic page loading info",
        children: QB([r && n && r !== n && this.scene.generateNodeLinkItem("Containing page", n.guid), n && B_("Page status", (() => {
          switch (Fy(this.pagesList, n.guid)) {
            case xal.REQUESTED:
              return {
                type: "error",
                value: "Page loading in progress"
              };
            case xal.NOT_LOADED:
              return {
                type: "error",
                value: "Page not loaded due to incremental loading"
              };
            default:
              return {
                type: "nonUserText",
                value: "Page loaded"
              };
          }
        })())])
      });
    }
    let n = this.nodeWarnings?.get(e);
    (n?.length ?? 0) > 0 && t.push($7({
      label: "Runtime warnings",
      list: n ?? [],
      generateChild: (e, t) => ({
        label: e,
        value: {
          type: "error",
          value: t.message
        },
        children: QB([B_("Severity", {
          type: "nonUserText",
          value: t.severity
        }), B_("Message", {
          type: "nonUserText",
          value: t.message
        }), void 0 !== t.timestamp && B_("Time", {
          type: "timestamp",
          value: t.timestamp
        }), t.filePath && B_("File path", {
          type: "nonUserText",
          value: `${t.filePath}${t.lineNumber ? `:${t.lineNumber}` : ""}`
        }), t.data && o8({
          label: "Data",
          object: t.data,
          generateChild: (e, t) => B_(e, {
            type: "nonUserText",
            value: String(t)
          })
        })])
      })
    }));
    return t;
  }
  getAdditionalBadges(e) {
    let t = [];
    let r = this.sceneGraphValidationInfo?.generateBadges(e);
    r && t.push(...r);
    let n = this.scene.getNodeById(e);
    if (n?.isPage && this.pagesList) switch (Fy(this.pagesList, n.guid)) {
      case xal.LOADED:
        break;
      case xal.REQUESTED:
        t.push({
          type: "warning",
          value: "LOADING",
          title: "Page loading in progress"
        });
        break;
      case xal.NOT_LOADED:
        t.push({
          type: "warning",
          value: "NOT LOADED",
          title: "Page not loaded due to incremental loading"
        });
    }
    let i = this.nodeWarnings?.get(e);
    let s = i?.length ?? 0;
    s > 0 && t.push({
      type: "warning",
      value: `${s} WARNINGS`
    });
    return t;
  }
}
export class $$T1 extends $ {
  constructor({
    name: e,
    sensitiveTextPolicy: t
  }) {
    super({
      name: e,
      sensitiveTextPolicy: t
    });
    this.type = "standalone";
    this.scene = new I(this, v4N.SECONDARY);
  }
  getSearch() {
    return this.scene.getSearch();
  }
  get metadata() {
    return {};
  }
}
class I extends X {
  constructor(e, t = v4N.PRIMARY) {
    super();
    this.resource = e;
    this.nodesById = new Map();
    this.stylesById = new Map();
    this.variablesById = new Map();
    this.variableOverridesById = new Map();
    this.variableCollectionsById = new Map();
    this.codeFilesById = new Map();
    this.codeComponentsById = new Map();
    this.codeLibrariesById = new Map();
    this.searchDB = new H();
    this.isComplete = !0;
    this.sceneType = t;
    this.totalMemoryUsage = this.rootNodes.reduce((e, t) => e + t.treeMemoryUsage, 0);
  }
  get document() {
    return this.rootNodes.find(e => e.isDocument);
  }
  get pages() {
    return this.document.children;
  }
  get internalCanvas() {
    return this.pages.find(e => e.nodeChange.internalOnly) ?? null;
  }
  get rootNodes() {
    return this.fetchNodesFromFullscreen(() => Hcu?.getRootNodes(this.sceneType) ?? []);
  }
  getNodeById(e) {
    return this.getNodeFromCache(e) || this.fetchNodeFromFullscreen(() => Hcu?.getNode(A(e), this.sceneType) ?? null);
  }
  getNodeByGuid(e) {
    return this.fetchNodeFromFullscreen(() => Hcu?.getNodeByGuid(e, this.sceneType) ?? null);
  }
  getChildrenByParentGuid(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getChildrenByParentGuid(e, this.sceneType) ?? []);
  }
  getStyleByStyleId(e) {
    return this.getStyleFromCache(e) || this.fetchNodeFromFullscreen(() => Hcu?.getStyle(e, this.sceneType) ?? null);
  }
  getVariableByVariableId(e) {
    return this.getVariableFromCache(e) || this.fetchNodeFromFullscreen(() => Hcu?.getVariable(e, this.sceneType) ?? null);
  }
  getVariableOverrideByVariableOverrideId(e) {
    return this.getVariableOverrideFromCache(e) || this.fetchNodeFromFullscreen(() => Hcu?.getVariableOverride(e, this.sceneType) ?? null);
  }
  getVariableCollectionByCollectionId(e) {
    return this.getVariableCollectionFromCache(e) || this.fetchNodeFromFullscreen(() => Hcu?.getVariableCollection(e, this.sceneType) ?? null);
  }
  getCodeComponentById(e) {
    return this.getCodeComponentFromCache(e) || this.fetchNodeFromFullscreen(() => Hcu?.getCodeComponent(e, this.sceneType) ?? null);
  }
  getCodeFileById(e) {
    return this.getCodeFileFromCache(e) || this.fetchNodeFromFullscreen(() => Hcu?.getCodeFile(e, this.sceneType) ?? null);
  }
  getCodeLibraryById(e) {
    return this.getCodeLibraryFromCache(e) || this.fetchNodeFromFullscreen(() => Hcu?.getCodeLibrary(e, this.sceneType) ?? null);
  }
  getStyleConsumers(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getStyleConsumers(e, this.sceneType) ?? []);
  }
  getConsumedStyles(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getConsumedStyles(A(e), this.sceneType) ?? []);
  }
  getConsumedVariables(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getConsumedVariables(A(e), this.sceneType) ?? []);
  }
  getVariablesInCollection(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getVariablesInCollection(e, this.sceneType) ?? []);
  }
  getVariableOverridesInExtendedCollection(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getVariableOverridesInExtendedCollection(e, this.sceneType) || []);
  }
  getNodesWithExplicitModeForVariableSet(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getNodesWithExplicitModeForVariableSet(e, this.sceneType) ?? []);
  }
  getVariableConsumers(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getVariableConsumers(e, this.sceneType) || []);
  }
  getDsaComponentCounts(e) {
    let t = Hcu.getDsaComponentCounts(A(e), this.sceneType);
    return {
      all: this.convertDsaAssetCounts(t.all),
      unnested: this.convertDsaAssetCounts(t.unnested)
    };
  }
  getDsaStyleCounts(e) {
    let t = Hcu.getDsaStyleCounts(A(e), this.sceneType);
    return {
      all: this.convertDsaAssetCounts(t.all),
      unnested: this.convertDsaAssetCounts(t.unnested)
    };
  }
  getDsaVariableCounts(e) {
    let t = Hcu.getDsaVariableCounts(A(e), this.sceneType);
    return {
      all: this.convertDsaAssetCounts(t.all),
      unnested: this.convertDsaAssetCounts(t.unnested)
    };
  }
  convertDsaAssetCounts(e) {
    let t = [];
    for (let r of e) {
      let e = this.createAndCacheNode(r.asset);
      e && t.push({
        node: e,
        count: r.count
      });
    }
    t.sort((e, t) => t.count - e.count);
    return t;
  }
  getDirectVariableDependenciesToVariable(e) {
    return this.fetchNodesFromFullscreen(() => Hcu?.getDirectVariableDependenciesToVariable(e, this.sceneType) ?? []);
  }
  getPropDefs(e) {
    return Hcu?.getPropDefs(A(e), this.sceneType) ?? [];
  }
  getCombinedPropAssignments(e) {
    return Hcu?.getCombinedPropAssignments(A(e), this.sceneType) ?? [];
  }
  getTransitiveDependencyPaths(e, t) {
    return Hcu?.getTransitiveDependencyPaths(A(e), t, this.sceneType) ?? [];
  }
  getAllOverridesForLayer(e) {
    let t = Hcu?.getLayerOverrides(A(e), this.sceneType);
    return t ? t.map(e => ({
      ...e,
      fields: w.decodeMessage(e.fields).nodeChanges[0]
    })) : [];
  }
  getDSDOverridesForLayer(e) {
    let t = Hcu?.getLayerDSDOverrides(A(e), this.sceneType);
    if (t && t.length) return w.decodeMessage(t).nodeChanges?.[0];
  }
  getAllSublayerInfoForImmutableFrame(e) {
    return Hcu?.getImmutableFrameSubLayerInfo(A(e), this.sceneType) ?? new Map();
  }
  getOverrideStash(e) {
    let t = Hcu?.getOverrideStash(A(e), this.sceneType);
    return t ? t.map(e => ({
      ...e,
      overrides: e.overrides.map(e => ({
        ...e,
        fields: w.decodeMessage(e.fields).nodeChanges[0]
      }))
    })) : [];
  }
  getTextInsertionStyle(e) {
    let t;
    let r = Hcu?.getTextInsertionStyle(A(e), this.sceneType);
    if (!r || 0 === r.length) return null;
    try {
      t = w.decodeMessage(r).nodeChanges;
    } catch (e) {
      console.warn("FigmaScope: error decoding node changes", e);
      return null;
    }
    return t ? t.length > 1 ? (console.warn("FigmaScope: more than one node change found for text insertion style"), null) : t[0] : (console.warn("FigmaScope: buffer did not contain node changes"), null);
  }
  getBlobByIndex(e) {
    return _$$y;
  }
  getNodeByKiwiOverridePath(e, t) {
    let r = [e, ...dB.fromKiwi(t)];
    return this.getNodeById(v(r));
  }
  get supportsNodePreviews() {
    switch (this.resource.type) {
      case "editor":
        return !0;
      case "viewer":
        return !1;
      case "standalone":
        return "hide" !== this.resource.sensitiveTextPolicy;
    }
  }
  getNodeFromCache(e) {
    return this.nodesById.get(e) ?? null;
  }
  getStyleFromCache(e) {
    return this.stylesById.get(e) ?? null;
  }
  getVariableFromCache(e) {
    return this.variablesById.get(e) ?? null;
  }
  getVariableOverrideFromCache(e) {
    return this.variableOverridesById.get(e) ?? null;
  }
  getVariableCollectionFromCache(e) {
    return this.variableCollectionsById.get(e) ?? null;
  }
  getCodeComponentFromCache(e) {
    return this.codeComponentsById.get(e) ?? null;
  }
  getCodeFileFromCache(e) {
    return this.codeFilesById.get(e) ?? null;
  }
  getCodeLibraryFromCache(e) {
    return this.codeLibrariesById.get(e) ?? null;
  }
  fetchNodeFromFullscreen(e) {
    let t = null;
    try {
      t = e();
    } catch (e) {
      console.error("FigmaScope: error fetching nodes");
    }
    return t ? this.createAndCacheNode(t) : null;
  }
  fetchNodesFromFullscreen(e) {
    let t = [];
    try {
      t = e();
    } catch (e) {
      console.error("FigmaScope: error fetching nodes");
    }
    return t.map(e => this.createAndCacheNode(e)).filter(isNotNullish);
  }
  createAndCacheNode(e) {
    let t;
    try {
      t = w.decodeNodeChange(e.nodeChange);
    } catch (e) {
      console.error("FigmaScope: error decoding node changes", e);
      return null;
    }
    let r = dB.fromStrings(e.stablePath);
    let n = v(r);
    let i = this.nodesById.get(n);
    if (i) return i;
    let s = new S(n, {
      ...e,
      nodeChange: t,
      stablePath: r
    }, this);
    this.nodesById.set(s.id, s);
    s.styleId && this.stylesById.set(s.styleId, s);
    s.isVariable && s.variableId && this.variablesById.set(s.variableId, s);
    s.isVariableCollection && s.variableCollectionId && this.variableCollectionsById.set(s.variableCollectionId, s);
    s.isVariableOverride && s.variableOverrideId && this.variableOverridesById.set(s.variableOverrideId, s);
    s.isCodeFileAsset && s.codeFileId && this.codeFilesById.set(s.codeFileId, s);
    s.isCodeLibraryAsset && s.codeLibraryId && this.codeLibrariesById.set(s.codeLibraryId, s);
    s.isCodeComponentAsset && s.codeComponentId && this.codeComponentsById.set(s.codeComponentId, s);
    "standalone" === this.resource.type && s.isPrimaryInstance && Hcu?.materializeInstance(s.guid, this.sceneType);
    return s;
  }
  getSearch(e) {
    if (this._indexedSearchDB) return this._indexedSearchDB;
    let t = 0;
    let r = this.rootNodes;
    let n = async () => {
      await scheduler.postTask(async () => {
        let i = Date.now();
        for (; Date.now() - i < 100;) {
          let n = r.pop();
          if (!n) return;
          e && ++t % 5e3 == 0 && e(t);
          this.searchDB.indexObject(n);
          r.push(...n.children.filter(e => e.guid));
        }
        await n();
      });
    };
    let i = n().then(() => this.searchDB);
    return this._indexedSearchDB = i;
  }
}
class S extends _$$E {
  constructor(e, t, r) {
    super(e, t.nodeChange, r);
    this.id = e;
    this.data = t;
    this.scene = r;
  }
  get type() {
    return this.isNestedInstance ? "NESTED_INSTANCE" : super.type;
  }
  get parent() {
    return this.parentGuid ? this.scene.getNodeByGuid(this.parentGuid) : null;
  }
  get children() {
    return this.scene.getChildrenByParentGuid(this.guid);
  }
  get consumedStyleIds() {
    return this.scene.getConsumedStyles(this.id).map(e => e.styleId).filter(isNotNullish);
  }
  get consumedStyles() {
    return this.scene.getConsumedStyles(this.id);
  }
  get consumedVariableIds() {
    return this.consumedVariables.map(e => e.variableId).filter(isNotNullish);
  }
  get consumedVariables() {
    return this.scene.getConsumedVariables(this.id);
  }
  get key() {
    return super.key ?? Egt?.getAssetKeyForPublish(this.guid) ?? null;
  }
  get stablePath() {
    return this.data.stablePath;
  }
  get isTracked() {
    return this.data.tracked;
  }
  get isUntracked() {
    return this.stablePath.length > 1;
  }
  get containingTrackedNode() {
    return this.isTracked ? this : this.parent?.containingTrackedNode ?? null;
  }
  get isPrimaryInstance() {
    return this.isInstance && (this.isTracked || this.isAssignedSlotPrimaryInstance);
  }
  get isAssignedSlotPrimaryInstance() {
    return this.data.derivedProperties.jsonSerialized["is-assigned-slot-primary-instance"];
  }
  get containingInstance() {
    return this.findAncestor(e => e.isInstance);
  }
  get containingPrimaryInstance() {
    return this.findAncestor(e => e.isPrimaryInstance);
  }
  get containingImmutableFrame() {
    return this.findAncestor(e => e.isImmutableFrame);
  }
  get isInstanceSublayer() {
    return null != this.containingInstance;
  }
  get isImmutableFrameSublayer() {
    return null != this.containingImmutableFrame;
  }
  get isNestedInstance() {
    return this.isInstance && this.isInstanceSublayer && !this.isAssignedSlotPrimaryInstance;
  }
  get isSwappedNestedInstance() {
    return this.isNestedInstance && null != this.nodeChange.overriddenSymbolID;
  }
  get ownMemoryUsage() {
    return (this._ownMemoryUsage = this._ownMemoryUsage ?? Hcu?.getNodeMemoryUsage(this.stablePath, this.scene.sceneType)) ?? 0;
  }
  get treeMemoryUsage() {
    return (this._treeMemoryUsage = this._treeMemoryUsage ?? Hcu?.getSubtreeMemoryUsage(this.stablePath, this.scene.sceneType)) ?? 0;
  }
  secondaryId() {
    return this.stablePath.length > 1 ? dB.format(this.stablePath.slice(1)) : this.overrideKey ? c1.format(this.overrideKey) : this.overriddenVariableId ? this.overriddenVariableId : null;
  }
  generateDisplayProperties() {
    let e = super.generateDisplayProperties();
    let t = e.leftBadges.map(e => "type" === e.type ? {
      ...e,
      tracked: this.isTracked
    } : e);
    return {
      ...e,
      leftBadges: t,
      secondaryId: this.secondaryId(),
      memoryFraction: KV(this.treeMemoryUsage, this.scene.totalMemoryUsage)
    };
  }
  generateRawProperties() {
    return [{
      label: "Tracked fields",
      children: super.generateRawProperties(),
      expandByDefault: !0
    }, {
      label: "Untracked fields",
      children: this.generateNonKiwiFieldProperties(this.data.untrackedFields),
      expandByDefault: !0
    }, {
      label: "Derived properties",
      children: this.generateNonKiwiFieldProperties(this.data.derivedProperties),
      expandByDefault: !0
    }];
  }
  generateTrackingInfoItem() {
    return B_("Node tracked", {
      type: "boolean",
      value: this.isTracked,
      sensitive: !1
    });
  }
  generateNonKiwiFieldProperties({
    jsonSerialized: e,
    stringSerialized: t
  }) {
    let r = [];
    let n = [];
    for (let [t, n] of Object.entries(e)) r.push(this.scene.generateNodeFieldItem(zS(t), n));
    for (let [e, r] of Object.entries(t)) n.push({
      label: zS(e),
      value: {
        type: "error",
        value: "No toJson() support"
      },
      children: [B_("Debug string", {
        type: "nonUserText",
        value: r,
        sensitive: !1
      })]
    });
    return QB(r).concat(QB(n));
  }
  generateComputedProperties() {
    let e = QB([...super.generateComputedProperties(), this.generateMemoryUsageItem(), this.generateGeometrySection(), this.generateTextInfoItem(), this.generateRenderTreeItem()]);
    let t = this.generateNodePreviewItem();
    t && e.push(t);
    return e;
  }
  generateMemoryUsageItem() {
    return {
      label: "Memory usage",
      children: [B_("Own data", {
        type: "numeric",
        value: this.ownMemoryUsage
      }), B_("Tree data", {
        type: "numeric",
        value: this.treeMemoryUsage
      })],
      expandByDefault: !0
    };
  }
  generateGeometryInfo(e) {
    return 0 === e.segments.length ? [] : [$7({
      label: "vertices",
      list: e.vertices,
      generateChild: (e, t) => U1(e, t)
    }), $7({
      label: "segments",
      list: e.segments,
      generateChild: (e, t) => U1(e, t)
    }), $7({
      label: "regions",
      list: e.regions,
      generateChild: (e, t) => U1(e, t)
    })];
  }
  generateGeometrySection() {
    let e = Hcu?.getGeometryInfo(A(this.id), this.scene.sceneType);
    return e ? {
      label: "Geometry",
      children: QB([B_("fillGeometryInFileMatchesCacheGeometry", {
        type: "boolean",
        value: e.fillGeometryInFileMatchesCacheGeometry
      }), {
        label: "fillGeometryField",
        children: this.generateGeometryInfo(e.fillGeometryField)
      }, {
        label: "fillGeometryCacheValue",
        children: this.generateGeometryInfo(e.fillGeometryCacheValue)
      }, B_("strokeGeometryInFileMatchesCacheGeometry", {
        type: "boolean",
        value: e.strokeGeometryInFileMatchesCacheGeometry
      }), {
        label: "strokeGeometryField",
        children: this.generateGeometryInfo(e.strokeGeometryField)
      }, {
        label: "strokeGeometryCacheValue",
        children: this.generateGeometryInfo(e.strokeGeometryCacheValue)
      }])
    } : null;
  }
  generateDesignSystemsInfoItem() {
    return Sv(super.generateDesignSystemsInfoItem(), [this.generateVariableOverridesInExtendedCollectionItem(), this.generateComponentPropDefsItem(), this.generateComponentPropAssignmentsItem(), this.generateSymbolDependencyPathsItem(Uze.FROM), this.generateSymbolDependencyPathsItem(Uze.TO), this.generateLayerOverridesSection(), this.generateLayerDSDOverridesSection(), this.generateDsaSection(), this.generateInstanceDataItem()]);
  }
  generateTextInfoItem() {
    if ("TEXT" !== this.type) return null;
    let e = this.scene.getTextInsertionStyle(this.id);
    return {
      label: "Text info",
      children: QB([e && o8({
        label: "Text insertion style",
        object: e,
        generateChild: this.scene.generateNodeFieldItem,
        showChildCount: !0
      })])
    };
  }
  generateNodePreviewItem() {
    return this.scene.supportsNodePreviews && this.isRenderingNode && !this.isStateGroup ? {
      label: "Node preview",
      children: [B_("", {
        type: "nodeThumbnail",
        value: this.guidObj
      })]
    } : null;
  }
  generateOverrideItem(e, t) {
    let r = this.scene.getNodeByKiwiOverridePath(e.guid, t.guidPath ?? {});
    return {
      ...super.generateOverrideItem(e, t),
      value: r ? {
        type: "nodeGuid",
        value: r.guid,
        scene: this.scene
      } : void 0
    };
  }
  generateVariableOverridesInExtendedCollectionItem() {
    return this.isExtendedVariableCollection ? {
      label: "Variable overrides in extended collection",
      children: this.scene.getVariableOverridesInExtendedCollection(this.variableCollectionId).map(e => ({
        variable: e.overriddenVariableId ? this.scene.getVariableByVariableId(e.overriddenVariableId) : null,
        varOverride: e
      })).sort((e, t) => (e.variable?.name ?? "").localeCompare(t.variable?.name ?? "")).map(({
        variable: e,
        varOverride: t
      }) => this.scene.generateVariableOverrideLinkItem(e?.name ?? "<unknown>", t.variableOverrideId))
    } : null;
  }
  generateComponentPropDefsItem() {
    if (!this.isSymbol && !this.isStateGroup) return null;
    let e = this.scene.getPropDefs(this.id);
    let t = this.isState ? this.parentGuid : null;
    return {
      label: "Component prop defs",
      children: e.map(e => ({
        label: c1.format(e.defID),
        value: {
          type: "userInputtedText",
          value: e.name,
          scene: this.scene
        },
        children: [B_("Is explicit", {
          type: "boolean",
          value: e.isExplicit
        }), B_("Default value", this.generateComponentPropValue(e.propType, e.defaultValue)), ...this.generateComponentPropProperties(e, t)]
      }))
    };
  }
  generateComponentPropAssignmentsItem() {
    if (!this.isInstance) return null;
    let e = this.scene.getCombinedPropAssignments(this.id);
    let t = this.backingStateGroup?.guid ?? null;
    return {
      label: "Component prop assignments (combined)",
      children: e.map(e => ({
        label: c1.format(e.assignmentID),
        value: {
          type: "userInputtedText",
          value: e.name,
          scene: this.scene
        },
        children: [B_("Value", this.generateComponentPropValue(e.propType, e.assignmentValue)), B_("Is mixed", {
          type: "boolean",
          value: e.isMixed
        }), ...this.generateComponentPropProperties(e, t)]
      }))
    };
  }
  generateComponentPropProperties(e, t) {
    let {
      error,
      propType,
      explicitDefID,
      refNodes
    } = e;
    return QB([!!error && B_("Error", {
      type: "error",
      value: error
    }), !!propType && B_("Prop type", {
      type: "nonUserText",
      value: throwTypeError(propType)
    }), !!explicitDefID && B_("Explicit def ID", {
      type: "genericGuid",
      value: c1.fromString(explicitDefID)
    }), t && this.scene.generateNodeLinkItem("Containing state group", t), $7({
      label: "Ref Nodes",
      list: refNodes,
      generateChild: (e, t) => this.generateRefNodeItem(e, t)
    })]);
  }
  generateComponentPropValue(e, t) {
    switch (e) {
      case J0O.BOOL:
        return {
          type: "boolean",
          value: t.boolValue
        };
      case J0O.TEXT:
        return {
          type: "userInputtedText",
          value: t.textValue
        };
      case J0O.INSTANCE_SWAP:
        return {
          type: "nodeGuid",
          value: c1.fromString(t.instanceSwapValue),
          scene: this.scene
        };
      default:
        return t.untypedValue ? {
          type: "nonUserText",
          value: t.untypedValue
        } : {
          type: "error",
          value: "Unknown prop type"
        };
    }
  }
  generateRefNodeItem(e, t) {
    return {
      label: e,
      children: QB([this.scene.generateNodeLinkItem("Ref node", c1.fromString(t.refNodeGuid)), B_("Ref field", {
        type: "nonUserText",
        value: t.nodeField
      }), null != t.paintIndex && B_("Ref paint index", {
        type: "numeric",
        value: t.paintIndex
      })]),
      expandByDefault: !0
    };
  }
  generateSymbolDependencyPathsItem(e) {
    return this.isPrimaryInstance || this.isSymbol ? $7({
      label: e === Uze.FROM ? "Symbol Dependencies" : "Symbol Dependents",
      list: this.scene.getTransitiveDependencyPaths(this.id, e),
      generateChild: (t, {
        edges: r
      }) => ({
        label: t,
        value: {
          type: "nodeGuid",
          value: c1.fromString(e === Uze.FROM ? r[r.length - 1].toGuid : r[0].fromGuid),
          scene: this.scene
        },
        children: 1 === r.length ? this.generateSymbolDependencyProperties(r[0], !1) : [B_("Type", {
          type: "nonUserText",
          value: "Transitive"
        }), $7({
          label: "Edges",
          list: r,
          generateChild: (e, t) => ({
            label: e,
            children: this.generateSymbolDependencyProperties(t, !0),
            expandByDefault: !0
          }),
          expandByDefault: !0
        })]
      })
    }) : this.isStateGroup ? $7({
      label: e === Uze.FROM ? "Symbol dependencies by state" : "Symbol dependents by state",
      list: this.children,
      generateChild: (t, r) => ({
        ...r.generateSymbolDependencyPathsItem(e),
        label: `State ${t}`,
        value: {
          type: "nodeGuid",
          value: r.guid,
          scene: this.scene
        }
      })
    }) : null;
  }
  generateSymbolDependencyProperties({
    fromGuid: e,
    toGuid: t,
    type: r,
    pathToOverride: i,
    propDefId: s
  }, o) {
    let l = [B_("Type", {
      type: "nonUserText",
      value: (() => {
        switch (r) {
          case SoG.PRIMARY_INSTANCE_BACKED_BY_SYMBOL:
            return "Primary instance backed by symbol";
          case SoG.PRIMARY_INSTANCE_WITH_NESTED_SWAP_TO_SYMBOL:
            return "Primary instance with nested swap to symbol";
          case SoG.PRIMARY_INSTANCE_WITH_TOP_LEVEL_PROP_ASSIGNMENT_TO_SYMBOL:
            return "Primary instance with top level prop assignment to symbol";
          case SoG.PRIMARY_INSTANCE_WITH_NESTED_PROP_ASSIGNMENT_TO_SYMBOL:
            return "Primary instance with nested prop assignment to symbol";
          case SoG.PRODUCT_COMPONENT_WITH_PROP_DEF_TO_SYMBOL:
            return "Product component with prop def to symbol";
          case SoG.STATE_WITH_PROP_DEF_TO_SYMBOL:
            return "State with prop def to symbol";
          case SoG.SYMBOL_CONTAINING_PRIMARY_INSTANCE:
            return "Symbol containing primary instance";
          case SoG.INVALID:
            return "Invalid";
          default:
            throwTypeError(r);
        }
      })()
    })];
    o && (l.push(this.scene.generateNodeLinkItem("From", c1.fromString(e))), l.push(this.scene.generateNodeLinkItem("To", c1.fromString(t))));
    i.length > 1 && l.push(B_("Path to override", {
      type: "guidPath",
      value: dB.fromStrings(i)
    }));
    s && c1.isValid(s) && l.push(B_("Prop def id", {
      type: "genericGuid",
      value: c1.fromString(s)
    }));
    return l;
  }
  generateBackingLayerItem() {
    if (!this.isInstance && !this.isInstanceSublayer) return null;
    let e = Hcu?.getBackingLayerId(A(this.id), this.scene.sceneType);
    return e ? this.scene.generateNodeLinkItem("Backing layer", c1.fromString(e)) : null;
  }
  generateInstanceDataItem() {
    if (!this.isInstance && !this.isInstanceSublayer) return null;
    let e = Hcu?.getInstanceData(A(this.id), this.scene.sceneType);
    if (!e) return null;
    let t = [this.scene.generateNodeLinkItem("Backing layer", c1.fromString(e.backingLayerId)), this.scene.generateNodeLinkItem("Primary instance", c1.fromString(e.primaryId)), B_("Path", {
      type: "guidPath",
      value: dB.fromStrings(e.path)
    })];
    e.overridePath && t.push(B_("Override path", {
      type: "guidPath",
      value: dB.fromStrings(e.overridePath)
    }));
    return $7({
      label: "Instance data",
      list: t,
      expandByDefault: !1,
      generateChild: (e, t) => t
    });
  }
  generateLayerOverridesSection() {
    if (!this.isInstance && !this.isInstanceSublayer) return null;
    let e = this.scene.getAllOverridesForLayer(this.id);
    let t = {};
    for (let {
      primaryInstanceId,
      containingSymbolId,
      fields,
      savedLevel,
      inheritanceLevel
    } of e) for (let [e, o] of Object.entries(fields)) {
      t[e] = t[e] || [];
      t[e][inheritanceLevel] = {
        primaryInstanceId,
        containingSymbolId,
        value: o,
        savedLevel
      };
    }
    let r = Object.keys(t).sort();
    return 0 === r.length ? null : $7({
      label: "Layer overrides",
      list: r,
      expandByDefault: !1,
      generateChild: (e, r) => {
        let n = t[r];
        let a = n.findIndex(isNotNullish);
        let s = n[a].value;
        return {
          label: r,
          value: {
            type: "metadata",
            value: 0 === a ? "Direct override" : "Inherited override"
          },
          expandByDefault: !1,
          children: [{
            ...this.scene.generateNodeFieldItem(r, s),
            label: "Resolved value"
          }, {
            label: "Sources",
            expandByDefault: !1,
            children: QB(n.map(({
              primaryInstanceId: e,
              containingSymbolId: t,
              value: n,
              savedLevel: i
            }, a) => ({
              label: 0 === a ? "Direct override" : "Inherited from",
              key: `Level ${a}`,
              value: t ? {
                type: "nodeGuid",
                value: c1.fromString(t),
                scene: this.scene
              } : void 0,
              children: QB([{
                ...this.scene.generateNodeFieldItem(r, n),
                label: "Value"
              }, i > 0 && B_("Saved level", {
                type: "numeric",
                value: i
              }), this.scene.generateNodeLinkItem("Primary instance", c1.fromString(e))])
            })))
          }]
        };
      }
    });
  }
  generateLayerDSDOverridesSection() {
    if (!this.isInstance && !this.isInstanceSublayer) return null;
    let e = this.scene.getDSDOverridesForLayer(this.id);
    if (!e) return null;
    let t = {};
    for (let [r, n] of Object.entries(e)) t[r] = n;
    return $7({
      label: "Layer DSD overrides",
      list: Object.keys(t),
      expandByDefault: !1,
      generateChild: (e, r) => this.scene.generateNodeFieldItem(r, t[r])
    });
  }
  generateDsaSection() {
    if (!getFeatureFlags().dsa_figmascope) return null;
    let e = this.scene.getDsaComponentCounts(this.id);
    let t = this.scene.getDsaStyleCounts(this.id);
    let r = this.scene.getDsaVariableCounts(this.id);
    return {
      label: "Design system analyltics",
      children: [{
        label: "Components",
        children: [{
          label: "All",
          children: this.generateDsaComponentCounts(e.all)
        }, {
          label: "Unnested",
          children: this.generateDsaComponentCounts(e.unnested)
        }]
      }, {
        label: "Styles",
        children: [{
          label: "All",
          children: this.generateDsaStyleCounts(t.all)
        }, {
          label: "Unnested",
          children: this.generateDsaStyleCounts(t.unnested)
        }]
      }, {
        label: "Variables",
        children: [{
          label: "All",
          children: this.generateDsaVariableCounts(r.all)
        }, {
          label: "Unnested",
          children: this.generateDsaVariableCounts(r.unnested)
        }]
      }]
    };
  }
  generateDsaComponentCounts(e) {
    return e.filter(({
      node: e
    }) => !!e.guid).map(({
      node: e,
      count: t
    }) => ({
      label: e.name,
      key: e.id,
      value: {
        type: "metadata",
        value: t
      },
      children: [this.scene.generateNodeLinkItem("node", e.guid), B_("count", {
        type: "numeric",
        value: t
      })]
    }));
  }
  generateDsaStyleCounts(e) {
    return e.filter(({
      node: e
    }) => !!e.styleId).map(({
      node: e,
      count: t
    }) => ({
      label: e.name,
      key: e.id,
      value: {
        type: "metadata",
        value: t
      },
      children: [this.scene.generateStyleLinkItem("style", e.styleId), B_("count", {
        type: "numeric",
        value: t
      })]
    }));
  }
  generateDsaVariableCounts(e) {
    return e.filter(({
      node: e
    }) => !!e.variableId).map(({
      node: e,
      count: t
    }) => ({
      label: e.name,
      key: e.id,
      value: {
        type: "metadata",
        value: t
      },
      children: [this.scene.generateVariableLinkItem("var", e.variableId), B_("count", {
        type: "numeric",
        value: t
      })]
    }));
  }
  generateRenderTreeItem() {
    let e = Hcu?.getRenderTree(this.stablePath, this.scene.sceneType);
    return e ? this.generateRenderTreeNodeItem("Render tree", e) : null;
  }
  generateRenderTreeNodeItem(e, t) {
    let {
      op,
      children,
      ...i
    } = t;
    let a = o8({
      label: e,
      value: {
        type: "nonUserText",
        value: op
      },
      object: i,
      generateChild: this.scene.generateNodeFieldItem
    });
    Array.isArray(children) && children.length > 0 && a.children.push($7({
      label: "children",
      list: children,
      generateChild: (e, t) => this.generateRenderTreeNodeItem(e, t)
    }));
    return a;
  }
}
function v(e) {
  return SW.fromString(e.join(";"));
}
function A(e) {
  return dB.fromStrings(e.split(";"));
}
export const G2 = $$b0;
export const lX = $$T1;