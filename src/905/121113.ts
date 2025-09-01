export class $$n1 {
  constructor(e) {
    this.node = e;
  }
  get size() {
    return Math.max(this.node.width, this.node.height);
  }
  get strokes() {
    return this.node.strokes;
  }
  get strokeAlign() {
    return this.node.strokeAlign;
  }
  get strokeBottomWeight() {
    return this.node.strokeWeight;
  }
  get strokeTopWeight() {
    return this.node.strokeWeight;
  }
  get strokeLeftWeight() {
    return this.node.strokeWeight;
  }
  get strokeRightWeight() {
    return this.node.strokeWeight;
  }
  get bottomRightRadius() {
    return this.size;
  }
  get topLeftRadius() {
    return this.size;
  }
  get topRightRadius() {
    return this.size;
  }
  get bottomLeftRadius() {
    return this.size;
  }
  get dashPattern() {
    return this.node.dashPattern;
  }
}
export class $$r0 {
  constructor(e, t, i) {
    this.node = e;
    this._width = t;
    this._height = i;
  }
  get layoutGrow() {
    return this.node.layoutGrow;
  }
  get layoutAlign() {
    return this.node.layoutAlign;
  }
  get constraints() {
    return this.node.constraints;
  }
  get layoutPositioning() {
    return this.node.layoutPositioning;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get minHeight() {
    return this.node.minHeight;
  }
  get maxHeight() {
    return this.node.maxHeight;
  }
  get minWidth() {
    return this.node.minWidth;
  }
  get maxWidth() {
    return this.node.maxWidth;
  }
  get relativeTransform() {
    return [[1, 0, this.node.x], [0, 1, this.node.y]];
  }
  get targetAspectRatio() {
    return null;
  }
}
export class $$a2 {
  constructor(e) {
    this.node = e;
  }
  get constraints() {
    return {
      vertical: "STRETCH",
      horizontal: "STRETCH"
    };
  }
  get layoutGrow() {
    return this.node.layoutGrow;
  }
  get layoutAlign() {
    return this.node.layoutAlign;
  }
  get layoutPositioning() {
    return this.node.layoutPositioning;
  }
  get width() {
    return this.node.width;
  }
  get height() {
    return this.node.height;
  }
  get relativeTransform() {
    return this.node.relativeTransform;
  }
  get parent() {
    return this.node.parent;
  }
  get minHeight() {
    return this.node.minHeight;
  }
  get maxHeight() {
    return this.node.maxHeight;
  }
  get minWidth() {
    return this.node.minWidth;
  }
  get maxWidth() {
    return this.node.maxWidth;
  }
  get targetAspectRatio() {
    return this.node.targetAspectRatio ?? null;
  }
}
export const Q = $$r0;
export const Ux = $$n1;
export const dN = $$a2;