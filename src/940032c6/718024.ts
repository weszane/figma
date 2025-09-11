import _require from "../6223/496223";
import { jsx } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { getFeatureFlags } from "../905/601108";
import { DecoratorNode, $applyNodeReplacement } from "lexical";
let r = lazy(() => _require);
export class $$o1 extends DecoratorNode {
  constructor({
    hash: e,
    src: t,
    altText: i,
    originalImageWidth: n,
    originalImageHeight: l,
    key: a
  }) {
    super(a);
    this.hash = e;
    this.src = t;
    this.altText = i;
    this.originalImageWidth = n;
    this.originalImageHeight = l;
  }
  static getType() {
    return "image";
  }
  static clone(e) {
    return new $$o1({
      hash: e.hash,
      src: e.src,
      altText: e.altText,
      originalImageWidth: e.originalImageWidth,
      originalImageHeight: e.originalImageHeight,
      key: e.getKey()
    });
  }
  static importJSON(e) {
    let {
      altText,
      originalImageWidth,
      originalImageHeight,
      src,
      hash
    } = e;
    return $$d2({
      hash,
      src,
      altText,
      originalImageHeight,
      originalImageWidth
    });
  }
  exportJSON() {
    return {
      type: "image",
      version: 1,
      hash: this.hash,
      src: this.src,
      altText: this.altText,
      originalImageWidth: this.originalImageWidth,
      originalImageHeight: this.originalImageHeight
    };
  }
  static importDOM() {
    let e = e => {
      if (!getFeatureFlags().cms_rt_field_image_embed) return null;
      if (e instanceof HTMLImageElement) {
        let {
          alt,
          src,
          width,
          height
        } = e;
        return {
          node: $$d2({
            hash: e.getAttribute("data-image-hash") ?? "",
            src,
            altText: alt,
            originalImageWidth: width,
            originalImageHeight: height
          })
        };
      }
      return null;
    };
    return {
      img: t => ({
        conversion: e,
        priority: 0
      })
    };
  }
  exportDOM() {
    let e = document.createElement("img");
    e.setAttribute("src", this.src);
    e.setAttribute("alt", this.altText);
    e.setAttribute("width", this.originalImageWidth.toString());
    e.setAttribute("height", this.originalImageHeight.toString());
    e.setAttribute("data-image-hash", this.hash);
    return {
      element: e
    };
  }
  createDOM(e) {
    let t = document.createElement("span");
    let i = e.theme.image;
    void 0 !== i && (t.className = i);
    return t;
  }
  updateDOM() {
    return !1;
  }
  decorate() {
    return jsx(Suspense, {
      fallback: null,
      children: jsx(r, {
        src: this.src,
        nodeKey: this.getKey(),
        altText: this.altText,
        width: this.originalImageWidth,
        height: this.originalImageHeight
      })
    });
  }
  setAltText(e) {
    this.altText = e;
  }
  exportAsAssetForPublish() {
    return {
      type: "image",
      hash: this.hash,
      width: this.originalImageWidth,
      height: this.originalImageHeight
    };
  }
}
export function $$d2(e) {
  return $applyNodeReplacement(new $$o1(e));
}
export function $$c0(e) {
  return e instanceof $$o1;
}
export const Eh = $$c0;
export const K1 = $$o1;
export const uC = $$d2;
