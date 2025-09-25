import { isNotNullish } from "../figma_app/95419";
import { StyleIdHandler, VariableSetIdCompatHandler, VariableIdHandler, CodeComponentIdHandler, CodeFileIdHandler, CanvasNodeIdHandler, CodeLibraryIdHandler } from "../figma_app/243058";
import { isPrintableAscii } from "../figma_app/766708";
import { isNumberForBlobProperty, isBoolean, isNumberOrBigint, isString, isStringForRedactableProperty, hasRgbaColorProperties, hasCoordinates, isStylePropertyId, isVariableSetIdProperty, isVariableIdProperty, isBackingCodeComponentIdProperty, isCodeFileIdProperty, isCodeFileCanvasNodeIdProperty, isCodeLibraryIdProperty, hasSessionAndLocalIds, isSymbolOrSpecialIdProperty, hasValidGuidArray, hasMatrixTransformProperties, arrayToMatrixTransform, isUint8ArrayHash, isUint8Array, hasTypeAndLabel } from "../905/71";
import { c1 } from "../905/589717";
import { B_, $7, o8, QB } from "../905/258397";
export class $$d0 {
  constructor() {
    this.generateNodeLinkItem = (e, t) => B_(e, {
      type: "nodeGuid",
      value: t,
      scene: this
    });
    this.generateStyleLinkItem = (e, t) => B_(e, {
      type: "styleId",
      value: t,
      scene: this
    });
    this.generateVariableLinkItem = (e, t) => B_(e, {
      type: "variableId",
      value: t,
      scene: this
    });
    this.generateVariableOverrideLinkItem = (e, t) => B_(e, {
      type: "variableOverrideId",
      value: t,
      scene: this
    });
    this.generateVariableCollectionLinkItem = (e, t) => B_(e, {
      type: "variableCollectionId",
      value: t,
      scene: this
    });
    this.generateNodeFieldItemValue = (e, t, i) => {
      if (null === t) return {
        type: "metadata",
        value: "null"
      };
      if (void 0 === t) return {
        type: "metadata",
        value: "undefined"
      };
      if (isNumberForBlobProperty(t, e)) return {
        type: "blobIndex",
        value: t,
        scene: this
      };
      if (isBoolean(t)) return {
        type: "boolean",
        value: t
      };
      if (isNumberOrBigint(t)) return {
        type: "numeric",
        value: t
      };
      if (isString(t)) return ("position" === e || "sortPosition" === e) && isPrintableAscii(t) ? {
        type: "position",
        value: t
      } : isStringForRedactableProperty(t, e) ? {
        type: "userInputtedText",
        value: t
      } : {
        type: "nonUserText",
        value: t
      };
      if (hasRgbaColorProperties(t)) return {
        type: "color",
        value: t
      };
      if (hasCoordinates(t)) return {
        type: "vector",
        value: t
      };
      if (isStylePropertyId(e)) {
        let e = StyleIdHandler.fromKiwi(t);
        if (e) return {
          type: "styleId",
          value: e,
          scene: this
        };
      }
      if (isVariableSetIdProperty(e)) {
        let e = VariableSetIdCompatHandler.fromKiwi(t);
        if (e) return {
          type: "variableCollectionId",
          value: e,
          scene: this
        };
      }
      if (isVariableIdProperty(e)) {
        let e = VariableIdHandler.fromKiwi(t);
        if (e) return {
          type: "variableId",
          value: e,
          scene: this
        };
      }
      if (isBackingCodeComponentIdProperty(e)) {
        let e = CodeComponentIdHandler.fromKiwi(t);
        if (e) return {
          type: "codeComponentId",
          value: e,
          scene: this
        };
      }
      if (isCodeFileIdProperty(e)) {
        let e = CodeFileIdHandler.fromKiwi(t);
        if (e) return {
          type: "codeFileId",
          value: e,
          scene: this
        };
      }
      if (isCodeFileCanvasNodeIdProperty(e)) return {
        type: "canvasNodeId",
        value: CanvasNodeIdHandler.fromKiwi(t),
        scene: this
      };
      if (isCodeLibraryIdProperty(e)) {
        let e = CodeLibraryIdHandler.fromKiwi(t);
        if (e) return {
          type: "codeLibraryId",
          value: e,
          scene: this
        };
      }
      if (hasSessionAndLocalIds(t)) return isSymbolOrSpecialIdProperty(e, i) ? {
        type: "nodeGuid",
        value: c1.fromKiwi(t),
        scene: this
      } : {
        type: "genericGuid",
        value: c1.fromKiwi(t)
      };
      if ("__nodeLinkBrand__" in t) return {
        type: "nodeGuid",
        value: t.guid,
        scene: this
      };
      if (hasValidGuidArray(t)) {
        let {
          guids
        } = t;
        return guids ? {
          type: "guidPath",
          value: guids.map(c1.fromKiwi).filter(isNotNullish)
        } : {
          type: "error",
          value: "Invalid Fig.GUIDPath"
        };
      }
      if (hasMatrixTransformProperties(t)) return {
        type: "matrix",
        value: t
      };
      let l = arrayToMatrixTransform(t);
      return l ? {
        type: "matrix",
        value: l
      } : isUint8ArrayHash(t, e) ? {
        type: "imageHash",
        value: t
      } : isUint8Array(t) ? {
        type: "bytes",
        value: t
      } : hasTypeAndLabel(t) ? {
        type: "editScope",
        value: t
      } : null;
    };
    this.generateNodeFieldItem = (e, t, i) => {
      let n = this.generateNodeFieldItemValue(e, t, i);
      if (null != n) return B_(e, n);
      if (Array.isArray(t)) return $7({
        label: e,
        list: t,
        generateChild: (e, t) => this.generateNodeFieldItem(e, t),
        expandByDefault: !1
      });
      {
        let i = ["connectorStart", "connectorEnd", "symbolData"].includes(e);
        return o8({
          label: e,
          object: t,
          generateChild: (e, t) => this.generateNodeFieldItem(e, t),
          expandByDefault: i
        });
      }
    };
  }
  generateNodeChangeItems(e) {
    return QB(Object.entries(e).map(([e, t]) => this.generateNodeFieldItem(e, t)));
  }
}
export const X = $$d0;