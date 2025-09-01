import { isNotNullish } from "../figma_app/95419";
import { PK, gr, sD, _H, Tq, YB, eJ } from "../figma_app/243058";
import { qO } from "../figma_app/766708";
import { M_, Lm, kf, Kg, SE, _o, WX, ar, r4, Ox, rP, wA, hd, FE, W_, aP, hV, OA, yp, qx, aY, Rt } from "../905/71";
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
      if (M_(t, e)) return {
        type: "blobIndex",
        value: t,
        scene: this
      };
      if (Lm(t)) return {
        type: "boolean",
        value: t
      };
      if (kf(t)) return {
        type: "numeric",
        value: t
      };
      if (Kg(t)) return ("position" === e || "sortPosition" === e) && qO(t) ? {
        type: "position",
        value: t
      } : SE(t, e) ? {
        type: "userInputtedText",
        value: t
      } : {
        type: "nonUserText",
        value: t
      };
      if (_o(t)) return {
        type: "color",
        value: t
      };
      if (WX(t)) return {
        type: "vector",
        value: t
      };
      if (ar(e)) {
        let e = PK.fromKiwi(t);
        if (e) return {
          type: "styleId",
          value: e,
          scene: this
        };
      }
      if (r4(e)) {
        let e = gr.fromKiwi(t);
        if (e) return {
          type: "variableCollectionId",
          value: e,
          scene: this
        };
      }
      if (Ox(e)) {
        let e = sD.fromKiwi(t);
        if (e) return {
          type: "variableId",
          value: e,
          scene: this
        };
      }
      if (rP(e)) {
        let e = _H.fromKiwi(t);
        if (e) return {
          type: "codeComponentId",
          value: e,
          scene: this
        };
      }
      if (wA(e)) {
        let e = Tq.fromKiwi(t);
        if (e) return {
          type: "codeFileId",
          value: e,
          scene: this
        };
      }
      if (hd(e)) return {
        type: "canvasNodeId",
        value: YB.fromKiwi(t),
        scene: this
      };
      if (FE(e)) {
        let e = eJ.fromKiwi(t);
        if (e) return {
          type: "codeLibraryId",
          value: e,
          scene: this
        };
      }
      if (W_(t)) return aP(e, i) ? {
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
      if (hV(t)) {
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
      if (OA(t)) return {
        type: "matrix",
        value: t
      };
      let l = yp(t);
      return l ? {
        type: "matrix",
        value: l
      } : qx(t, e) ? {
        type: "imageHash",
        value: t
      } : aY(t) ? {
        type: "bytes",
        value: t
      } : Rt(t) ? {
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