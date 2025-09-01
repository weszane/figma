export class $$i0 {
  constructor() {
    this.hex = "#000000";
    this.rgb_r = 0;
    this.rgb_g = 0;
    this.rgb_b = 0;
    this.xyz_x = 0;
    this.xyz_y = 0;
    this.xyz_z = 0;
    this.luv_l = 0;
    this.luv_u = 0;
    this.luv_v = 0;
    this.lch_l = 0;
    this.lch_c = 0;
    this.lch_h = 0;
    this.hsluv_h = 0;
    this.hsluv_s = 0;
    this.hsluv_l = 0;
    this.hpluv_h = 0;
    this.hpluv_p = 0;
    this.hpluv_l = 0;
    this.r0s = 0;
    this.r0i = 0;
    this.r1s = 0;
    this.r1i = 0;
    this.g0s = 0;
    this.g0i = 0;
    this.g1s = 0;
    this.g1i = 0;
    this.b0s = 0;
    this.b0i = 0;
    this.b1s = 0;
    this.b1i = 0;
  }
  static fromLinear(e) {
    return e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055;
  }
  static toLinear(e) {
    return e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92;
  }
  static yToL(e) {
    return e <= $$i0.epsilon ? e / $$i0.refY * $$i0.kappa : 116 * Math.pow(e / $$i0.refY, 1 / 3) - 16;
  }
  static lToY(e) {
    return e <= 8 ? $$i0.refY * e / $$i0.kappa : $$i0.refY * Math.pow((e + 16) / 116, 3);
  }
  static rgbChannelToHex(e) {
    let r = Math.round(255 * e);
    let n = r % 16;
    let s = (r - n) / 16 | 0;
    return $$i0.hexChars.charAt(s) + $$i0.hexChars.charAt(n);
  }
  static hexToRgbChannel(e, r) {
    return (16 * $$i0.hexChars.indexOf(e.charAt(r)) + $$i0.hexChars.indexOf(e.charAt(r + 1))) / 255;
  }
  static distanceFromOriginAngle(e, r, n) {
    let i = r / (Math.sin(n) - e * Math.cos(n));
    return i < 0 ? 1 / 0 : i;
  }
  static distanceFromOrigin(e, r) {
    return Math.abs(r) / Math.sqrt(Math.pow(e, 2) + 1);
  }
  static min6(e, r, n, i, s, o) {
    return Math.min(e, Math.min(r, Math.min(n, Math.min(i, Math.min(s, o)))));
  }
  rgbToHex() {
    this.hex = "#";
    this.hex += $$i0.rgbChannelToHex(this.rgb_r);
    this.hex += $$i0.rgbChannelToHex(this.rgb_g);
    this.hex += $$i0.rgbChannelToHex(this.rgb_b);
  }
  hexToRgb() {
    this.hex = this.hex.toLowerCase();
    this.rgb_r = $$i0.hexToRgbChannel(this.hex, 1);
    this.rgb_g = $$i0.hexToRgbChannel(this.hex, 3);
    this.rgb_b = $$i0.hexToRgbChannel(this.hex, 5);
  }
  xyzToRgb() {
    this.rgb_r = $$i0.fromLinear($$i0.m_r0 * this.xyz_x + $$i0.m_r1 * this.xyz_y + $$i0.m_r2 * this.xyz_z);
    this.rgb_g = $$i0.fromLinear($$i0.m_g0 * this.xyz_x + $$i0.m_g1 * this.xyz_y + $$i0.m_g2 * this.xyz_z);
    this.rgb_b = $$i0.fromLinear($$i0.m_b0 * this.xyz_x + $$i0.m_b1 * this.xyz_y + $$i0.m_b2 * this.xyz_z);
  }
  rgbToXyz() {
    let e = $$i0.toLinear(this.rgb_r);
    let r = $$i0.toLinear(this.rgb_g);
    let n = $$i0.toLinear(this.rgb_b);
    this.xyz_x = .41239079926595 * e + .35758433938387 * r + .18048078840183 * n;
    this.xyz_y = .21263900587151 * e + .71516867876775 * r + .072192315360733 * n;
    this.xyz_z = .019330818715591 * e + .11919477979462 * r + .95053215224966 * n;
  }
  xyzToLuv() {
    let e = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z;
    let r = 4 * this.xyz_x;
    let n = 9 * this.xyz_y;
    0 !== e ? (r /= e, n /= e) : (r = NaN, n = NaN);
    this.luv_l = $$i0.yToL(this.xyz_y);
    0 === this.luv_l ? (this.luv_u = 0, this.luv_v = 0) : (this.luv_u = 13 * this.luv_l * (r - $$i0.refU), this.luv_v = 13 * this.luv_l * (n - $$i0.refV));
  }
  luvToXyz() {
    if (0 === this.luv_l) {
      this.xyz_x = 0;
      this.xyz_y = 0;
      this.xyz_z = 0;
      return;
    }
    let e = this.luv_u / (13 * this.luv_l) + $$i0.refU;
    let r = this.luv_v / (13 * this.luv_l) + $$i0.refV;
    this.xyz_y = $$i0.lToY(this.luv_l);
    this.xyz_x = 0 - 9 * this.xyz_y * e / ((e - 4) * r - e * r);
    this.xyz_z = (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) / (3 * r);
  }
  luvToLch() {
    if (this.lch_l = this.luv_l, this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v), this.lch_c < 1e-8) this.lch_h = 0;else {
      let e = Math.atan2(this.luv_v, this.luv_u);
      this.lch_h = 180 * e / Math.PI;
      this.lch_h < 0 && (this.lch_h = 360 + this.lch_h);
    }
  }
  lchToLuv() {
    let e = this.lch_h / 180 * Math.PI;
    this.luv_l = this.lch_l;
    this.luv_u = Math.cos(e) * this.lch_c;
    this.luv_v = Math.sin(e) * this.lch_c;
  }
  calculateBoundingLines(e) {
    let r = Math.pow(e + 16, 3) / 1560896;
    let n = r > $$i0.epsilon ? r : e / $$i0.kappa;
    let s = n * (284517 * $$i0.m_r0 - 94839 * $$i0.m_r2);
    let o = n * (838422 * $$i0.m_r2 + 769860 * $$i0.m_r1 + 731718 * $$i0.m_r0);
    let a = n * (632260 * $$i0.m_r2 - 126452 * $$i0.m_r1);
    let h = n * (284517 * $$i0.m_g0 - 94839 * $$i0.m_g2);
    let d = n * (838422 * $$i0.m_g2 + 769860 * $$i0.m_g1 + 731718 * $$i0.m_g0);
    let p = n * (632260 * $$i0.m_g2 - 126452 * $$i0.m_g1);
    let g = n * (284517 * $$i0.m_b0 - 94839 * $$i0.m_b2);
    let m = n * (838422 * $$i0.m_b2 + 769860 * $$i0.m_b1 + 731718 * $$i0.m_b0);
    let v = n * (632260 * $$i0.m_b2 - 126452 * $$i0.m_b1);
    this.r0s = s / a;
    this.r0i = o * e / a;
    this.r1s = s / (a + 126452);
    this.r1i = (o - 769860) * e / (a + 126452);
    this.g0s = h / p;
    this.g0i = d * e / p;
    this.g1s = h / (p + 126452);
    this.g1i = (d - 769860) * e / (p + 126452);
    this.b0s = g / v;
    this.b0i = m * e / v;
    this.b1s = g / (v + 126452);
    this.b1i = (m - 769860) * e / (v + 126452);
  }
  calcMaxChromaHpluv() {
    let e = $$i0.distanceFromOrigin(this.r0s, this.r0i);
    let r = $$i0.distanceFromOrigin(this.r1s, this.r1i);
    let n = $$i0.distanceFromOrigin(this.g0s, this.g0i);
    let s = $$i0.distanceFromOrigin(this.g1s, this.g1i);
    let o = $$i0.distanceFromOrigin(this.b0s, this.b0i);
    let a = $$i0.distanceFromOrigin(this.b1s, this.b1i);
    return $$i0.min6(e, r, n, s, o, a);
  }
  calcMaxChromaHsluv(e) {
    let r = e / 360 * Math.PI * 2;
    let n = $$i0.distanceFromOriginAngle(this.r0s, this.r0i, r);
    let s = $$i0.distanceFromOriginAngle(this.r1s, this.r1i, r);
    let o = $$i0.distanceFromOriginAngle(this.g0s, this.g0i, r);
    let a = $$i0.distanceFromOriginAngle(this.g1s, this.g1i, r);
    let h = $$i0.distanceFromOriginAngle(this.b0s, this.b0i, r);
    let d = $$i0.distanceFromOriginAngle(this.b1s, this.b1i, r);
    return $$i0.min6(n, s, o, a, h, d);
  }
  hsluvToLch() {
    if (this.hsluv_l > 99.9999999) {
      this.lch_l = 100;
      this.lch_c = 0;
    } else if (this.hsluv_l < 1e-8) {
      this.lch_l = 0;
      this.lch_c = 0;
    } else {
      this.lch_l = this.hsluv_l;
      this.calculateBoundingLines(this.hsluv_l);
      let e = this.calcMaxChromaHsluv(this.hsluv_h);
      this.lch_c = e / 100 * this.hsluv_s;
    }
    this.lch_h = this.hsluv_h;
  }
  lchToHsluv() {
    if (this.lch_l > 99.9999999) {
      this.hsluv_s = 0;
      this.hsluv_l = 100;
    } else if (this.lch_l < 1e-8) {
      this.hsluv_s = 0;
      this.hsluv_l = 0;
    } else {
      this.calculateBoundingLines(this.lch_l);
      let e = this.calcMaxChromaHsluv(this.lch_h);
      this.hsluv_s = this.lch_c / e * 100;
      this.hsluv_l = this.lch_l;
    }
    this.hsluv_h = this.lch_h;
  }
  hpluvToLch() {
    if (this.hpluv_l > 99.9999999) {
      this.lch_l = 100;
      this.lch_c = 0;
    } else if (this.hpluv_l < 1e-8) {
      this.lch_l = 0;
      this.lch_c = 0;
    } else {
      this.lch_l = this.hpluv_l;
      this.calculateBoundingLines(this.hpluv_l);
      let e = this.calcMaxChromaHpluv();
      this.lch_c = e / 100 * this.hpluv_p;
    }
    this.lch_h = this.hpluv_h;
  }
  lchToHpluv() {
    if (this.lch_l > 99.9999999) {
      this.hpluv_p = 0;
      this.hpluv_l = 100;
    } else if (this.lch_l < 1e-8) {
      this.hpluv_p = 0;
      this.hpluv_l = 0;
    } else {
      this.calculateBoundingLines(this.lch_l);
      let e = this.calcMaxChromaHpluv();
      this.hpluv_p = this.lch_c / e * 100;
      this.hpluv_l = this.lch_l;
    }
    this.hpluv_h = this.lch_h;
  }
  hsluvToRgb() {
    this.hsluvToLch();
    this.lchToLuv();
    this.luvToXyz();
    this.xyzToRgb();
  }
  hpluvToRgb() {
    this.hpluvToLch();
    this.lchToLuv();
    this.luvToXyz();
    this.xyzToRgb();
  }
  hsluvToHex() {
    this.hsluvToRgb();
    this.rgbToHex();
  }
  hpluvToHex() {
    this.hpluvToRgb();
    this.rgbToHex();
  }
  rgbToHsluv() {
    this.rgbToXyz();
    this.xyzToLuv();
    this.luvToLch();
    this.lchToHpluv();
    this.lchToHsluv();
  }
  rgbToHpluv() {
    this.rgbToXyz();
    this.xyzToLuv();
    this.luvToLch();
    this.lchToHpluv();
    this.lchToHpluv();
  }
  hexToHsluv() {
    this.hexToRgb();
    this.rgbToHsluv();
  }
  hexToHpluv() {
    this.hexToRgb();
    this.rgbToHpluv();
  }
}
$$i0.hexChars = "0123456789abcdef";
$$i0.refY = 1;
$$i0.refU = .19783000664283;
$$i0.refV = .46831999493879;
$$i0.kappa = 903.2962962;
$$i0.epsilon = .0088564516;
$$i0.m_r0 = 3.240969941904521;
$$i0.m_r1 = -1.537383177570093;
$$i0.m_r2 = -.498610760293;
$$i0.m_g0 = -.96924363628087;
$$i0.m_g1 = 1.87596750150772;
$$i0.m_g2 = .041555057407175;
$$i0.m_b0 = .055630079696993;
$$i0.m_b1 = -.20397695888897;
$$i0.m_b2 = 1.056971514242878;
export const h = $$i0;