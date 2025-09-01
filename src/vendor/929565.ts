import { Et, LI } from "../vendor/300749";
let i;
let $$o6 = 1e3;
let $$a11 = 6e4;
let $$h5 = 36e5;
let $$d0 = 31536e6;
export function $$p2(e) {
  return {
    relative: e,
    timeStamp: m(e)
  };
}
export function $$g12(e) {
  return {
    relative: $$E10(e),
    timeStamp: e
  };
}
function m(e) {
  let r = $$b16() - performance.now();
  return r > T() ? Math.round($$S3(r, e)) : A(e);
}
export function $$v8() {
  return Math.round($$b16() - $$S3(T(), performance.now()));
}
export function $$y9(e) {
  return Et(e) ? LI(1e6 * e, 0) : e;
}
export function $$b16() {
  return new Date().getTime();
}
export function $$O13() {
  return $$b16();
}
export function $$x1() {
  return performance.now();
}
export function $$w4() {
  return {
    relative: $$x1(),
    timeStamp: $$O13()
  };
}
export function $$k7() {
  return {
    relative: 0,
    timeStamp: T()
  };
}
export function $$_15(e, r) {
  return r - e;
}
export function $$S3(e, r) {
  return e + r;
}
export function $$E10(e) {
  return e - T();
}
function A(e) {
  return Math.round($$S3(T(), e));
}
export function $$C14(e) {
  return e < $$d0;
}
function T() {
  void 0 === i && (i = performance.timing.navigationStart);
  return i;
}
export const $H = $$d0;
export const $S = $$x1;
export const FR = $$p2;
export const Gw = $$S3;
export const M8 = $$w4;
export const MA = $$h5;
export const OY = $$o6;
export const Oc = $$k7;
export const TP = $$v8;
export const Zj = $$y9;
export const gs = $$E10;
export const iW = $$a11;
export const jR = $$g12;
export const nx = $$O13;
export const pu = $$C14;
export const vk = $$_15;
export const x3 = $$b16;