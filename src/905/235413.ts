import n from "../vendor/60324";
var r = n;
export function $$a0(e, t = 3) {
  if (void 0 !== e) return r()(e, t);
}
export class $$s4 {
  constructor(e) {
    this._value = e;
  }
  get value() {
    return "number" == typeof this._value ? `${$$a0(this._value)}${0 !== $$a0(this._value) ? "px" : ""}` : this._value;
  }
  equals(e) {
    return this.value === e.value;
  }
}
export class $$o2 {
  constructor(e) {
    this._value = e;
  }
  get value() {
    return `${$$a0(this._value)}%`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
export class $$l5 {
  constructor(e) {
    this._value = e;
  }
  get value() {
    return `${this._value}`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
export class $$d1 {
  constructor(e) {
    this._value = e;
  }
  get value() {
    return this._value;
  }
  equals(e) {
    return this.value === e.value;
  }
}
export class $$c3 {
  get value() {
    return "normal";
  }
  equals(e) {
    return this.value === e.value;
  }
}
export const LI = $$a0;
export const O$ = $$d1;
export const QE = $$o2;
export const Qf = $$c3;
export const RU = $$s4;
export const lS = $$l5;