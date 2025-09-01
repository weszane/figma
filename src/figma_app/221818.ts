import { Sqb } from "../figma_app/763686";
export class $$i0 {
  constructor(e) {
    this._controls = 0 | e;
  }
  get framePresetsItem() {
    return this.getValue(Sqb.FRAME_PRESETS_ITEM);
  }
  get cornerRadius() {
    return this.getValue(Sqb.CORNER_RADIUS);
  }
  get frameOptions() {
    return this.getValue(Sqb.FRAME_OPTIONS);
  }
  get count() {
    return this.getValue(Sqb.COUNT);
  }
  get starInnerScale() {
    return this.getValue(Sqb.STAR_INNER_SCALE);
  }
  get rectangleCornerRadii() {
    return this.getValue(Sqb.RECTANGLE_CORNER_RADII);
  }
  get fixedFrameOptions() {
    return this.getValue(Sqb.FIXED_FRAME_OPTIONS);
  }
  get arcData() {
    return this.getValue(Sqb.ARC_DATA);
  }
  get transform() {
    return this.getValue(Sqb.TRANSFORM);
  }
  get size() {
    return this.getValue(Sqb.SIZE);
  }
  get angle() {
    return this.getValue(Sqb.ANGLE);
  }
  get sectionItem() {
    return this.getValue(Sqb.SECTION_ITEM);
  }
  getValue(e) {
    return !!(this._controls & 1 << e);
  }
}
export const Z = $$i0;