import { getFeatureFlags } from "../905/601108";
let $$i0 = () => getFeatureFlags().figmascope_server_side_redaction;
let $$a1 = () => getFeatureFlags().figmascope_server_side_journal_redaction;
let $$s3 = new Set(["name", "characters", "symbolDescription", "description", "url", "canvasName", "textContent", "sourceCode", "summary"]);
let o = RegExp(`^(background|circle|column|component|dialog|document|ellipse|frame|group|icon|image|internal only canvas|line|padding|page|path|polygon|rectangle|row|star|text|union|vector)\\s*[\\d\\.]*$|^\\w\u2022+\\w( \\(\\d+ characters\\))?$`);
export function $$l2(e, t) {
  if ("" === e) return "";
  if ("show" === t) return e;
  let r = '"' === e[0] && '"' === e[e.length - 1];
  let n = r ? e.substring(1, e.length - 1) : e;
  if (o.test(n.toLowerCase())) return e;
  let i = r ? '"' : "";
  return i + n[0] + n.substring(1, n.length - 1).replace(/\S/g, "\u2022") + n[n.length - 1] + i;
}
export const M0 = $$i0;
export const VG = $$a1;
export const bU = $$l2;
export const wh = $$s3;