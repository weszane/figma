import { TextBlot } from "../vendor/73046";
export class $$n0 extends TextBlot {}
export function $$s1(t) {
  return t.replace(/[&<>"']/g, t => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
export const A = $$n0;
export const X = $$s1;