import { ServiceCategories } from "../905/165054";
import { reportError } from "../905/11";
import { r as _$$r } from "../1156/791040";
import { ym, ZK, u, it, jx, n9, m8 } from "../1156/929233";
export function $$l7(e) {
  _$$r();
  reportError(ServiceCategories.AI_FOR_PRODUCTION, e);
}
export function $$o2(e) {
  if (e.message.match(/^(.*?)Project with name (.+?) already exists in your organization\.$/)) {
    ym();
    return;
  }
  if (e.message.match(/^(.*)maximum limits for the number of active free projects(.*)$/)) {
    ZK();
    return;
  }
  u();
  $$l7(e);
}
export function $$c3(e) {
  it();
  $$l7(e);
}
export function $$d4(e) {
  $$l7(e);
}
export function $$u0(e) {
  jx();
  $$l7(e);
}
export function $$x6(e) {
  n9();
  $$l7(e);
}
export function $$m5(e) {
  m8();
  $$l7(e);
}
export class $$h1 extends Error {
  constructor() {
    super("No index.tsx file found in the code files");
    this.name = "NoIndexFileError";
  }
}
export const AW = $$u0;
export const EQ = $$h1;
export const YH = $$o2;
export const ZH = $$c3;
export const fQ = $$d4;
export const lN = $$m5;
export const oT = $$x6;
export const wH = $$l7;
