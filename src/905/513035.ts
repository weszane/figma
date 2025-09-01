import { z } from "../905/239603";
import r from "../vendor/239910";
import { FProductAccessType } from "../figma_app/191312";
import { DK } from "../figma_app/765689";
var a = r;
var $$l12 = (e => (e.DESIGN = "design", e.FIGJAM = "figjam", e.DEV_MODE = "dev_mode", e.SLIDES = "slides", e.COLLABORATOR = "collaborator", e.DEVELOPER = "developer", e.EXPERT = "expert", e.CONTENT = "content", e.AI_CREDITS = "ai_credits", e))($$l12 || {});
export let $$d9 = z.nativeEnum($$l12);
var c = (e => (e.AI_CREDITS_1K = "ai_credits_1k", e.AI_CREDITS_10K = "ai_credits_10k", e))(c || {});
let $$u3 = z.nativeEnum(c);
let $$p4 = {
  collaborator: FProductAccessType.WHITEBOARD,
  developer: FProductAccessType.DEV_MODE,
  expert: FProductAccessType.DESIGN,
  content: FProductAccessType.COOPER
};
export var $$m2 = (e => (e.VIEW = "view", e))($$m2 || {});
let $$h1 = ["collaborator", "developer", "expert", "content"];
let $$g6 = z.nativeEnum(a()($$h1));
let f = [...$$h1, "view"];
export function $$_8(e) {
  return f.includes(e);
}
export function $$A5(e) {
  return $$h1.includes(e);
}
let $$y11 = ["design", "figjam", "dev_mode"];
let $$b7 = z.object({
  key: $$g6,
  license_types: DK.array()
});
export function $$v10(e) {
  return z.object({
    design: e.optional(),
    figjam: e.optional(),
    dev_mode: e.optional(),
    collaborator: e.optional(),
    developer: e.optional(),
    expert: e.optional(),
    content: e.optional()
  });
}
let I = {
  collaborator: ["content", "developer", "expert"],
  content: ["developer", "expert"],
  developer: ["expert"],
  expert: []
};
export function $$E0(e, t) {
  return (I[t] ?? []).includes(e);
}
export const B6 = $$E0;
export const DM = $$h1;
export const Gu = $$m2;
export const OQ = $$u3;
export const TI = $$p4;
export const a_ = $$A5;
export const bO = $$g6;
export const cD = $$b7;
export const dA = $$_8;
export const dw = $$d9;
export const g7 = $$v10;
export const qD = $$y11;
export const ud = $$l12;