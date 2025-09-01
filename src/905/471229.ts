import { getInitialOptions } from '../figma_app/169182';
let r = '';
let a = 0;
let $$s1 = new Date().toISOString();
export function $$o2() {
  r === '' && (r = getInitialOptions().tracking_session_id || Math.random().toString(36).substring(2));
  return r;
}
export function $$l0() {
  return ++a;
}
export const EG = $$l0;
export const aK = $$s1;
export const fF = $$o2;