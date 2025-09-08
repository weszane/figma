import { GeometricValues } from "../figma_app/763686";
export class $$i0 {
  constructor(e) {
    this._controls = 0 | e;
  }
  get framePresetsItem() {
    return this.getValue(GeometricValues.FRAME_PRESETS_ITEM);
  }
  get cornerRadius() {
    return this.getValue(GeometricValues.CORNER_RADIUS);
  }
  get frameOptions() {
    return this.getValue(GeometricValues.FRAME_OPTIONS);
  }
  get count() {
    return this.getValue(GeometricValues.COUNT);
  }
  get starInnerScale() {
    return this.getValue(GeometricValues.STAR_INNER_SCALE);
  }
  get rectangleCornerRadii() {
    return this.getValue(GeometricValues.RECTANGLE_CORNER_RADII);
  }
  get fixedFrameOptions() {
    return this.getValue(GeometricValues.FIXED_FRAME_OPTIONS);
  }
  get arcData() {
    return this.getValue(GeometricValues.ARC_DATA);
  }
  get transform() {
    return this.getValue(GeometricValues.TRANSFORM);
  }
  get size() {
    return this.getValue(GeometricValues.SIZE);
  }
  get angle() {
    return this.getValue(GeometricValues.ANGLE);
  }
  get sectionItem() {
    return this.getValue(GeometricValues.SECTION_ITEM);
  }
  getValue(e) {
    return !!(this._controls & 1 << e);
  }
}
export const Z = $$i0;