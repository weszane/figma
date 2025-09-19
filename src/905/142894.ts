import { isNotNullish } from "../figma_app/95419";
import { StateGroupIdHandler, VariableIdHandler } from "../figma_app/243058";
import { AffineTransform } from "../905/583953";
import { c1 } from "../905/589717";
import { R } from "../905/741991";
import { Sv, $7 } from "../905/258397";
export class $$d0 extends R {
  constructor(e, t, i) {
    super(e, t, i);
    this.id = e;
    this.nodeChange = t;
    this.scene = i;
  }
  get parent() {
    return this.parentGuid ? this.scene.getNodeByGuid(this.parentGuid) : null;
  }
  get children() {
    return this.scene.getChildrenByParentGuid(this.guid);
  }
  get type() {
    return this.isState ? "STATE" : super.type;
  }
  get otherVersions() {
    if (!this.isSubscribedAsset) return [];
    let e = this.scene.internalCanvas;
    if (!e) return [];
    let t = this.key;
    return t ? e.children.filter(e => e.type == e.type && e.key === t && e.id != e.id) : [];
  }
  get consumedStyles() {
    return this.consumedStyleIds.map(e => this.scene.getStyleByStyleId(e)).filter(isNotNullish);
  }
  get consumedVariables() {
    return this.consumedVariableIds.map(e => this.scene.getVariableByVariableId(e)).filter(isNotNullish);
  }
  get internalOnly() {
    return this.nodeChange.internalOnly || this.parent?.internalOnly || !1;
  }
  get stateGroupId() {
    return this.isStateGroup ? this._assetId(StateGroupIdHandler) : this.isSymbol ? this.parent?.stateGroupId ?? null : null;
  }
  get backingSymbol() {
    let e = this.backingSymbolId;
    return e ? this.scene.getNodeByGuid(e) : null;
  }
  get backingStateGroup() {
    let e = this.backingSymbol;
    if (!e) return null;
    let t = e.parent;
    return t && t.isStateGroup ? t : null;
  }
  get absoluteTransform() {
    let e = this.transform;
    let t = this.parent?.absoluteTransform;
    if (!e || !t) return AffineTransform.identity().toFigMatrix();
    {
      let i = AffineTransform.fromFigMatrix(t);
      i.multiply(AffineTransform.fromFigMatrix(e));
      return i.toFigMatrix();
    }
  }
  get containingSymbol() {
    return this.findAncestor(e => e.isSymbol);
  }
  get containingPage() {
    return this.findAncestor(e => e.isPage);
  }
  get isState() {
    return this.isSymbol && !!this.parent?.isStateGroup;
  }
  get isPrimaryInstance() {
    return this.isInstance;
  }
  get isLooseComponent() {
    return this.isSymbol && !this.isState;
  }
  get isProductComponent() {
    return this.isStateGroup || this.isLooseComponent;
  }
  get isInternalOnly() {
    return this.someAncestor(e => !!e.nodeChange.internalOnly, {
      includeSelf: !0
    });
  }
  getFriendlyVariableModeString(e) {
    if (!this.isVariableCollection) return "";
    let t = c1.fromKiwi(e);
    let i = this.nodeChange.variableSetModes?.find(e => e.id && c1.fromKiwi(e.id) === t);
    return i ? `${i.name} (${t})` : `<missing mode> (${t})`;
  }
  get variableDependenciesByModeId() {
    if (!this.isVariable) return {};
    let e = {};
    let t = this.scene;
    let i = t.getVariableCollectionByCollectionId(this.variableCollectionId);
    this.nodeChange.variableDataValues?.entries?.forEach(n => {
      if (n.modeID) {
        let a = i?.getFriendlyVariableModeString(n.modeID) ?? c1.fromKiwi(n.modeID);
        e[a] = [];
        (function i(n, a) {
          if (a?.dataType === "ALIAS") !function (i, n) {
            if (!n?.value?.alias) return;
            let a = VariableIdHandler.fromKiwi(n.value.alias);
            if (!a) return;
            let s = t.getVariableByVariableId(a);
            s && e[i].push(s);
          }(n, a);else if (a?.dataType === "EXPRESSION") !function (e, t) {
            for (let n of t?.value?.expressionValue?.expressionArguments ?? []) i(e, n);
          }(n, a);else if (a?.dataType === "MAP") return function (e, t) {
            for (let n of t?.value?.mapValue?.values ?? []) i(e, n.value);
          }(n, a);
        })(a, n.variableData);
      }
    });
    return e;
  }
  generateDisplayProperties() {
    let e = super.generateDisplayProperties();
    let t = this.containingPage;
    let i = e.rightBadges;
    null != this.parent || this.isDocument || i.push({
      type: "error",
      value: "Orphan"
    });
    return {
      ...e,
      longName: t ? `${t.displayProperties.name} > ${this.name}` : this.name,
      rightBadges: i
    };
  }
  generateDimensionalInfoItem() {
    let e = super.generateDimensionalInfoItem();
    return null == e ? null : Sv(e, [this.absoluteTransform && this.generatePositionItem("Absolute position", this.absoluteTransform)]);
  }
  generateDesignSystemsInfoItem() {
    return Sv(super.generateDesignSystemsInfoItem(), [this.isPrimaryInstance && this.backingStateGroup && this.scene.generateNodeLinkItem("Backing state group", this.backingStateGroup.guid), this.isStyle && this.styleId && $7({
      label: "Style consumers",
      list: this.scene.getStyleConsumers(this.styleId),
      generateChild: (e, t) => this.scene.generateNodeLinkItem(e, t.guid)
    }), this.isVariable && this.variableId && $7({
      label: "Variable consumers",
      list: this.scene.getVariableConsumers(this.variableId),
      generateChild: (e, t) => this.scene.generateNodeLinkItem(e, t.guid)
    }), this.isVariableCollection && this.variableCollectionId && $7({
      label: "Nodes with explicit mode",
      list: this.scene.getNodesWithExplicitModeForVariableSet(this.variableCollectionId),
      generateChild: (e, t) => this.scene.generateNodeLinkItem(e, t.guid)
    }), this.isAsset && $7({
      label: "Other versions",
      list: this.otherVersions,
      generateChild: (e, t) => this.scene.generateNodeLinkItem(e, t.guid)
    }), this.isVariable && this.variableCollectionId && this.scene.generateVariableCollectionLinkItem("Variable collection", this.variableCollectionId), this.isVariableCollection && this.variableCollectionId && $7({
      label: "Variables in collection",
      list: this.scene.getVariablesInCollection(this.variableCollectionId),
      generateChild: (e, t) => this.scene.generateNodeLinkItem(e, t.guid)
    })]);
  }
}
export const E = $$d0;