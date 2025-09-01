import { ny } from "../figma_app/819458";
let i = "8065774696727";
export function $$a0(e, t) {
  ny({
    name: e.name,
    email: e.email
  }, {
    ticketForms: ["community"],
    fields: t,
    suppressAnswerBot: !0
  });
}
export function $$s3(e) {
  return $$a0(e, [{
    id: i,
    value: "community_product_question"
  }]);
}
export function $$o2(e) {
  return $$a0(e, [{
    id: i,
    value: "community_refund"
  }]);
}
export function $$l1(e) {
  return $$a0(e, [{
    id: i,
    value: "community_report"
  }]);
}
export const c9 = $$a0;
export const jt = $$l1;
export const oW = $$o2;
export const tx = $$s3;