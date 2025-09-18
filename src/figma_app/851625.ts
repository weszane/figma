import { APILoadingStatus } from "../905/520829";
let i = {
  status: APILoadingStatus.INIT
};
let a = {
  status: APILoadingStatus.LOADING
};
export function $$s3() {
  return i;
}
export function $$o6() {
  return a;
}
export function $$l2(e) {
  return {
    status: APILoadingStatus.SUCCESS,
    value: e
  };
}
export function $$d5(e) {
  return {
    status: APILoadingStatus.FAILURE,
    error: e
  };
}
export function $$c8(e) {
  return e.status === APILoadingStatus.INIT;
}
export function $$u1(e) {
  return e.status === APILoadingStatus.LOADING;
}
export function $$p7(e) {
  return e.status === APILoadingStatus.SUCCESS;
}
export function $$_4(e) {
  return e.status === APILoadingStatus.FAILURE;
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