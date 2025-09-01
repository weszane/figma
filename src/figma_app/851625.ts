import { r } from "../905/520829";
let i = {
  status: r.INIT
};
let a = {
  status: r.LOADING
};
export function $$s3() {
  return i;
}
export function $$o6() {
  return a;
}
export function $$l2(e) {
  return {
    status: r.SUCCESS,
    value: e
  };
}
export function $$d5(e) {
  return {
    status: r.FAILURE,
    error: e
  };
}
export function $$c8(e) {
  return e.status === r.INIT;
}
export function $$u1(e) {
  return e.status === r.LOADING;
}
export function $$p7(e) {
  return e.status === r.SUCCESS;
}
export function $$_4(e) {
  return e.status === r.FAILURE;
}
export function $$h0(e) {
  return $$p7(e) ? e.value : void 0;
}
export const Cz = $$h0;
export const Mx = $$u1;
export const NY = $$l2;
export const Ok = $$s3;
export const ok = $$_4;
export const uW = $$d5;
export const ux = $$o6;
export const xj = $$p7;
export const yx = $$c8;