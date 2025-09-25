import { noop } from "../figma_app/465776";
import { nearlyEqual } from "../figma_app/492908";
import { SymbolIdHandler, StateGroupIdHandler, StyleIdHandler, VariableIdHandler, VariableOverrideIdHandler, VariableSetIdCompatHandler, ResponsiveSetIdHandler, CodeComponentIdHandler, CodeFileIdHandler, CodeLibraryIdHandler } from "../figma_app/243058";
import { sg, Xf, iU } from "../905/859698";
import { hashToHexString } from "../figma_app/385874";
import { STYLE_TYPES } from "../figma_app/646357";
import { c1, dB } from "../905/589717";
import { STYLE_PROPERTY_IDS, BACKGROUND_PAINT_PROPERTIES } from "../905/71";
import { s as _$$s } from "../905/6512";
import { uy } from "../905/252555";
import { QB, B_, $7 } from "../905/258397";
import { redactText } from "../figma_app/841197";
export class $$g0 extends _$$s {
  constructor(e, t, i) {
    super(e);
    this.id = e;
    this.nodeChange = t;
    this.scene = i;
    t.guid || console.error("Node is missing guid", t);
  }
  get name() {
    return redactText(this.nodeChange.name ?? "", this.scene.resource.sensitiveTextPolicy);
  }
  get text() {
    return redactText(this.nodeChange.textData?.characters ?? "", this.scene.resource.sensitiveTextPolicy);
  }
  get guidObj() {
    return this.nodeChange.guid ?? {
      localID: -1,
      sessionID: -1
    };
  }
  get guid() {
    return c1.fromKiwi(this.guidObj);
  }
  get parentGuid() {
    let e = this.nodeChange.parentIndex?.guid;
    return e ? c1.fromKiwi(e) : null;
  }
  get nodeType() {
    return this.nodeChange.type || "NONE";
  }
  get type() {
    let e = this.nodeType;
    if ("INSTANCE" === e) return "PRIMARY_INSTANCE";
    if ("VARIABLE_SET" === e) return "VARIABLE_COLLECTION";
    if (this.isStateGroup) return "STATE_GROUP";
    if (this.isStyle) {
      let e = this.nodeChange.styleType;
      switch (e) {
        case "FILL":
          return "FILL_STYLE";
        case "STROKE":
          return "STROKE_STYLE";
        case "TEXT":
          return "TEXT_STYLE";
        case "EFFECT":
          return "EFFECT_STYLE";
        case "EXPORT":
          return "EXPORT_STYLE";
        case "GRID":
          return "GRID_STYLE";
        default:
          noop(e);
      }
    } else if ("FRAME" === e && this.nodeChange.resizeToFit) return "GROUP";
    return e;
  }
  get overrideKey() {
    let e = this.nodeChange.overrideKey;
    return e ? c1.fromKiwi(e) : null;
  }
  get key() {
    return sg(this.nodeChange.key ?? this.nodeChange.componentKey ?? (this.nodeChange.sharedStyleMasterData?.styleKey || this.nodeChange.sharedStyleReference?.styleKey || null));
  }
  get version() {
    return Xf(this.nodeChange.version ?? this.nodeChange.sharedSymbolVersion ?? null);
  }
  get assetRef() {
    return iU.fromKiwi({
      key: this.key ?? void 0,
      version: this.version ?? void 0
    });
  }
  _assetId(e) {
    return this.isSubscribedAsset ? this.assetRef ? e.fromRef(this.assetRef) : null : e.fromLocalNodeIdStr(this.guid);
  }
  get symbolId() {
    return this.isSymbol ? this._assetId(SymbolIdHandler) : null;
  }
  get stateGroupId() {
    return this.isStateGroup ? this._assetId(StateGroupIdHandler) : null;
  }
  get styleId() {
    return this.isStyle ? this._assetId(StyleIdHandler) : null;
  }
  get variableId() {
    return this.isVariable ? this._assetId(VariableIdHandler) : null;
  }
  get variableOverrideId() {
    return this.isVariableOverride ? this._assetId(VariableOverrideIdHandler) : null;
  }
  get overriddenVariableId() {
    return this.isVariableOverride && this.nodeChange.overriddenVariableId ? VariableIdHandler.fromKiwi(this.nodeChange.overriddenVariableId) : null;
  }
  get variableCollectionId() {
    return this.isVariableCollection ? this._assetId(VariableSetIdCompatHandler) : this.isVariable && this.nodeChange.variableSetID ? VariableSetIdCompatHandler.fromKiwi(this.nodeChange.variableSetID) : null;
  }
  get responsiveSetAssetId() {
    return this.isResponsiveSetAsset ? this._assetId(ResponsiveSetIdHandler) : null;
  }
  get codeComponentId() {
    return this.isCodeComponentAsset ? this._assetId(CodeComponentIdHandler) : null;
  }
  get codeFileId() {
    return this.isCodeFileAsset ? this._assetId(CodeFileIdHandler) : null;
  }
  get codeLibraryId() {
    return this.isCodeLibraryAsset ? this._assetId(CodeLibraryIdHandler) : null;
  }
  get publishId() {
    let e = this.nodeChange.publishID;
    return e ? c1.fromKiwi(e) : null;
  }
  get isRenderingNode() {
    return !this.isDocument && !this.isCanvas && !this.isStyle && !this.isVariable && !this.isVariableCollection && !this.isVariableOverride;
  }
  get isInstance() {
    return "INSTANCE" === this.nodeType;
  }
  get isSymbol() {
    return "SYMBOL" === this.nodeType;
  }
  get isStateGroup() {
    return "FRAME" === this.nodeType && null != this.nodeChange.isStateGroup;
  }
  get isComponentish() {
    return this.isSymbol || this.isStateGroup;
  }
  get isStyle() {
    return this.nodeChange.styleType && STYLE_TYPES.indexOf(this.nodeChange.styleType) > -1;
  }
  get isVariable() {
    return "VARIABLE" === this.nodeType;
  }
  get isVariableCollection() {
    return this.isRootVariableCollection || this.isExtendedVariableCollection;
  }
  get isRootVariableCollection() {
    return !!("VARIABLE_SET" === this.nodeType && !this.nodeChange.backingVariableSetId);
  }
  get isExtendedVariableCollection() {
    return !!("VARIABLE_SET" === this.nodeType && this.nodeChange.backingVariableSetId);
  }
  get isVariableOverride() {
    return "VARIABLE_OVERRIDE" === this.nodeType;
  }
  get isResponsiveSetAsset() {
    return "RESPONSIVE_SET" === this.nodeType;
  }
  get isCodeComponentAsset() {
    return "CODE_COMPONENT" === this.nodeType;
  }
  get isCodeFileAsset() {
    return "CODE_FILE" === this.nodeType;
  }
  get isCodeLibraryAsset() {
    return "CODE_LIBRARY" === this.nodeType;
  }
  get isModule() {
    return "MODULE" === this.nodeType;
  }
  get isAsset() {
    return this.isSymbol || this.isStateGroup || this.isStyle || this.isVariable || this.isVariableCollection || this.isVariableOverride || this.isResponsiveSetAsset || this.isCodeComponentAsset || this.isCodeFileAsset || this.isCodeLibraryAsset || this.isModule;
  }
  get isLocalAsset() {
    return this.isAsset && !this.isSubscribedAsset;
  }
  get isSubscribedAsset() {
    return this.isComponentish ? null != this.nodeChange.sourceLibraryKey : this.isStyle ? this.nodeChange.key && this.nodeChange.version : (!!this.isVariable || !!this.isVariableCollection || !!this.isResponsiveSetAsset || !!this.isCodeComponentAsset || !!this.isModule) && !!this.nodeChange.key;
  }
  get isStack() {
    return null != this.nodeChange.stackMode && "NONE" !== this.nodeChange.stackMode;
  }
  get isCanvas() {
    return "CANVAS" === this.nodeChange.type;
  }
  get isPage() {
    return this.isCanvas;
  }
  get isDocument() {
    return "DOCUMENT" === this.nodeChange.type;
  }
  get backingSymbolId() {
    let e = this.nodeChange.overriddenSymbolID ?? this.nodeChange.symbolData?.symbolID;
    return e ? c1.fromKiwi(e) : null;
  }
  get transform() {
    return this.nodeChange.transform;
  }
  get isImmutableFrame() {
    let e = this.nodeType;
    return "STICKY" === e || "SHAPE_WITH_TEXT" === e || "CONNECTOR" === e || "CODE_BLOCK" === e || "MEDIA" === e || "SECTION_OVERLAY" === e || "TABLE" === e;
  }
  get overridesList() {
    return this.nodeChange.symbolData?.symbolOverrides ?? [];
  }
  get dsdList() {
    return this.nodeChange.derivedSymbolData ?? [];
  }
  get immutableFrameSublayerOverridesList() {
    return this.nodeChange.nodeGenerationData?.overrides ?? [];
  }
  get difdList() {
    return this.nodeChange.derivedImmutableFrameData?.overrides ?? [];
  }
  get imageHashes() {
    let e = [];
    let t = t => {
      t?.hash && e.push(hashToHexString(t));
    };
    let i = e => {
      t(e.image);
      t(e.imageThumbnail);
      t(e.animatedImage);
    };
    let n = e => {
      if (e) for (let t of e) i(t);
    };
    n(this.nodeChange.fillPaints);
    n(this.nodeChange.strokePaints);
    n(this.nodeChange.backgroundPaints);
    n(this.nodeChange.widgetHoverStyle?.fillPaints);
    n(this.nodeChange.widgetHoverStyle?.strokePaints);
    let r = t => {
      t && e.push(t);
    };
    r(this.nodeChange.embedData?.thumbnailImageHash);
    r(this.nodeChange.embedData?.faviconImageHash);
    r(this.nodeChange.linkPreviewData?.thumbnailImageHash);
    r(this.nodeChange.linkPreviewData?.faviconImageHash);
    r(this.nodeChange.richMediaData?.mediaHash);
    return e;
  }
  get consumedStyleIds() {
    let e = [];
    function t(t) {
      for (let i of STYLE_PROPERTY_IDS) {
        let n = t[i];
        if (n) {
          let t = StyleIdHandler.fromKiwi(n);
          t && e.push(t);
        }
      }
    }
    for (let e of (t(this.nodeChange), this.nodeChange.symbolData?.symbolOverrides ?? [])) t(e);
    for (let e of this.nodeChange.textData?.styleOverrideTable ?? []) t(e);
    for (let e of this.nodeChange.vectorData?.styleOverrideTable ?? []) t(e);
    for (let e of this.nodeChange.nodeGenerationData?.overrides ?? []) t(e);
    return e;
  }
  get consumedVariableIds() {
    let e = new Set();
    function t(t) {
      if (!t) return;
      let i = VariableIdHandler.fromKiwi(t);
      i && e.add(i);
    }
    for (let e of BACKGROUND_PAINT_PROPERTIES) !function (e) {
      for (let i of e ?? []) t(i.colorVar?.value?.alias);
    }(this.nodeChange[e]);
    function i(e) {
      for (let n of e.expressionArguments ?? []) {
        t(n.value?.alias);
        n.value?.expressionValue && i(n.value.expressionValue);
      }
    }
    for (let e of this.nodeChange.parameterConsumptionMap?.entries ?? []) {
      t(e.variableData?.value?.alias);
      e.variableData?.value?.expressionValue && i(e.variableData.value.expressionValue);
    }
    for (let e of this.nodeChange.variableConsumptionMap?.entries ?? []) {
      t(e.variableData?.value?.alias);
      e.variableData?.value?.expressionValue && i(e.variableData.value.expressionValue);
    }
    return [...e.values()];
  }
  generateTrackingInfoItem() {
    return null;
  }
  generateRawProperties() {
    return this.scene.generateNodeChangeItems(this.nodeChange);
  }
  generateDisplayProperties() {
    let e = [];
    this.isStack && e.push({
      type: "info",
      value: "Stack"
    });
    return {
      leftBadges: [{
        type: "type",
        value: this.type
      }],
      primaryId: c1.format(this.guid),
      secondaryId: this.overrideKey ? c1.format(this.overrideKey) : null,
      name: this.name,
      longName: this.name,
      rightBadges: e,
      memoryFraction: null
    };
  }
  generateSearchProperties() {
    return {
      id: this.id,
      guid: this.guid,
      type: [this.type, this.nodeType, uy[this.type]],
      parentGuid: this.parentGuid,
      overrideKey: this.overrideKey,
      backingSymbolId: this.backingSymbolId,
      publishId: this.publishId,
      consumedStyleIds: this.consumedStyleIds.map(StyleIdHandler.toString),
      name: this.name,
      field: Object.keys(this.nodeChange),
      text: this.text,
      key: this.key,
      version: this.version,
      imageHashes: this.imageHashes,
      symbolId: this.symbolId,
      stateGroupId: this.stateGroupId,
      styleId: this.styleId,
      variableId: this.variableId,
      variableOverrideId: this.variableOverrideId,
      variableCollectionId: this.variableCollectionId,
      codeComponentId: this.codeComponentId,
      codeFileId: this.codeFileId,
      codeLibraryId: this.codeLibraryId
    };
  }
  generateComputedProperties() {
    return QB([this.generateDimensionalInfoItem(), this.generateDesignSystemsInfoItem(), this.generateFigJamInfoItem(), this.generateTrackingInfoItem()]);
  }
  generateDimensionalInfoItem() {
    if (!this.isRenderingNode) return null;
    let e = this.nodeChange.size;
    return {
      label: "Dimensional info",
      children: QB([e && B_("Width", {
        type: "numeric",
        value: e.x
      }), e && B_("Height", {
        type: "numeric",
        value: e.y
      }), this.transform && this.generatePositionItem("Relative position", this.transform)])
    };
  }
  generateDesignSystemsInfoItem() {
    let e = this.isAsset;
    let t = this.isInstance;
    let i = e ? this.key : void 0;
    let n = e ? this.version : void 0;
    return {
      label: "Design systems info",
      children: QB([e && B_("Asset publish type", {
        type: "nonUserText",
        value: this.isSubscribedAsset ? "Subscribed" : "Local"
      }), i && B_("Asset key", {
        type: "nonUserText",
        value: i,
        sensitive: !1
      }), n && B_("Asset version", {
        type: "nonUserText",
        value: n,
        sensitive: !1
      }), $7({
        label: "Consumed variables",
        list: this.consumedVariableIds,
        generateChild: this.scene.generateVariableLinkItem
      }), $7({
        label: "Consumed styles",
        list: this.consumedStyleIds,
        generateChild: this.scene.generateStyleLinkItem
      }), t && this.scene.generateNodeLinkItem("Backing symbol", this.backingSymbolId), t && this.generateOverridesListItem("Instance overrides", this.overridesList), t && this.generateOverridesListItem("Derived symbol data", this.dsdList)])
    };
  }
  generateFigJamInfoItem() {
    let e = this.isImmutableFrame;
    return {
      label: "FigJam info",
      children: QB([e && this.generateOverridesListItem("Overrides", this.immutableFrameSublayerOverridesList), e && this.generateOverridesListItem("Derived immutable frame data", this.difdList)])
    };
  }
  generateOverridesListItem(e, t) {
    return {
      label: e,
      children: [...t].sort((e, t) => function (e, t) {
        let i = e.guids ?? [];
        let n = t.guids ?? [];
        for (let e = 0; e < Math.min(i.length, n.length); e++) {
          let t = i[e];
          let r = n[e];
          if (t.sessionID !== r.sessionID) return t.sessionID - r.sessionID;
          if (t.localID !== r.localID) return t.localID - r.localID;
        }
        return i.length - n.length;
      }(e.guidPath || {}, t.guidPath || {})).map(e => this.generateOverrideItem(this, e))
    };
  }
  generateOverrideItem(e, {
    guidPath: t,
    overrideLevel: i,
    ...n
  }) {
    let r = dB.format(dB.fromKiwi(t ?? {}));
    return {
      label: 0 === i ? r : `${r} (level ${i})`,
      children: this.scene.generateNodeChangeItems(n)
    };
  }
  generatePositionItem(e, t) {
    let {
      m00,
      m01,
      m02,
      m10,
      m11,
      m12
    } = t;
    let d = m00 * m11 - m01 * m10;
    let c = (() => {
      let e = 180 / Math.PI * Math.atan2(m10, m00);
      return nearlyEqual(e, 0, 1e-4) ? 0 : -1 * e;
    })();
    let u = d < 0 ? nearlyEqual(c, 0, 1e-4) ? "Vertically" : nearlyEqual(Math.abs(c), 180, 1e-4) ? "Horizontally" : "Yes" : "No";
    return {
      label: e,
      children: [B_("X", {
        type: "numeric",
        value: m02
      }), B_("Y", {
        type: "numeric",
        value: m12
      }), B_("Angle", {
        type: "numeric",
        value: c
      }), B_("Scale", {
        type: "numeric",
        value: d
      }), B_("Mirrored", {
        type: "nonUserText",
        value: u
      })],
      expandByDefault: !0
    };
  }
}
export const R = $$g0;