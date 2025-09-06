import { buildUploadUrl, getInitialOptions, isLocalCluster } from "../figma_app/169182";
import { isInteractionPathCheck, Lg } from "../figma_app/897289";
import { Kd, UX } from "../figma_app/155287";
let s = "1039957324840667051";
let o = "1042072203439057981";
let l = "1017757619521383731";
let d = "1037692671113105119";
let c = "1030479012894344777";
let u = "1100947233945489758";
let $$p2 = "1274481464484630971";
let _ = "1220512233196109878";
let h = "1220802563996996107";
let m = "1221187540287746170";
let g = "1029476790898052743";
let f = "1270487405418367065";
let E = "1028089855820989707";
let y = "1100944790471783866";
let $$b3 = "1268676638869538880";
let T = "1217135789855512677";
let I = "1217657098906612843";
let S = {
  [s]: Kd,
  [o]: Kd,
  [l]: Kd,
  [d]: Kd,
  "1096460041736534298": ["analytics"],
  [_]: ["analytics", "openexternal"],
  [h]: ["analytics", "filekey", "openexternal"],
  "1098405969270214551": ["analytics", "filekey", "openexternal"],
  "1151936790942917527": ["analytics", "openexternal"],
  "1101944648482192724": ["analytics", "openexternal"],
  "1094001923188252679": ["analytics", "filekey", "openexternal"],
  [c]: Kd,
  [u]: Kd,
  "1030848035996871692": ["hidecursors"],
  "1030845409121640454": ["hidecursors"],
  [$$p2]: ["cortex", "analytics"],
  [m]: ["filekey"],
  "857346721138427857": ["filekey"],
  "745330164019088593": ["filekey"],
  "1377781599688680355": ["cortex", "analytics", "filekey", "firstdraft"],
  "1340067847030742527": ["cortex", "analytics", "filekey", "firstdraft"]
};
let v = {
  [s]: "https://recordwidget.vimeocdn.com",
  [o]: "https://recordwidget.vimeocdn.com",
  [l]: "https://recordwidget.vimeocdn.com",
  [d]: "https://recordwidget.vimeocdn.com",
  [c]: "https://www.figma.com",
  [u]: "https://www.figma.com"
};
let A = {
  "1034777534804649640": ["analytics"],
  "1301665612022689456": ["analytics", "cortex"],
  [T]: ["analytics", "openexternal"],
  [I]: ["analytics", "filekey", "openexternal"],
  "1271502283792345209": ["cortex"],
  "1326353654536428586": ["cortex"],
  "1441501928920333946": ["cortex"],
  "1094384373580076374": ["analytics", "filekey", "openexternal"],
  "1149460326641202255": ["analytics", "openexternal"],
  "1101526018404272582": ["analytics", "openexternal"],
  "1131307276886895456": ["analytics", "filekey", "openexternal"],
  [g]: Kd,
  [f]: Kd,
  [E]: Kd,
  [y]: Kd,
  "1256428543638612749": ["cortex"],
  [$$b3]: ["cortex", "analytics"],
  "1277056884710848803": ["cortex", "analytics"],
  "1265815812125155376": ["hidecursors"],
  "1029480467793180296": ["hidecursors"],
  "1276624117086983457": ["cortex"],
  "1313947182028153675": ["cortex", "analytics", "filekey", "firstdraft"],
  "1308848962842011451": ["cortex", "analytics", "filekey", "firstdraft"],
  "1338915561589337295": ["cortex", "analytics", "filekey", "firstdraft"],
  "1342184095219254574": ["cortex", "analytics", "filekey", "firstdraft"],
  "1248327534194310871": ["openexternal"],
  "1247608093818933926": ["openexternal"],
  "1098668453462136230": ["analytics"],
  "1098643145465550199": ["analytics", "filekey", "openexternal"],
  "1159008294965494982": ["analytics", "openexternal"],
  "1105998388939381214": ["analytics", "openexternal"],
  "1098069144593389942": ["analytics", "filekey", "openexternal"],
  "1065825789137646656": Kd,
  "1105998344712102365": Kd,
  "1065825795062708289": ["hidecursors"],
  "1065825813933952067": ["hidecursors"]
};
let x = {
  [T]: buildUploadUrl("83e16c32f7fbe88022ff9fcff130cdd6c6423861")
};
let N = {
  [_]: buildUploadUrl("83e16c32f7fbe88022ff9fcff130cdd6c6423861")
};
let C = {
  [g]: "https://staging.figma.com",
  [f]: "https://staging.figma.com",
  [E]: "https://staging.figma.com",
  [y]: "https://staging.figma.com"
};
let w = new Set([T, I]);
let O = new Set([_, h, m, "1220851659530313303"]);
let R = {
  "1311749001261674187": "1311747530036311881"
};
let L = {
  "1312547578554957136": "1311777988952403297"
};
let P = ["1286790870036328880"];
let D = ["1286792998372727741", "1471237098317254321", "1499098169301830432", "1497629632442770130"];
export function $$k1(e) {
  return "prod" === getInitialOptions().cluster_name ? e === h : "staging" === getInitialOptions().cluster_name && e === I;
}
let M = {};
let F = {};
export function $$j7(e) {
  return "prod" === getInitialOptions().cluster_name ? e in v || e in S : "staging" === getInitialOptions().cluster_name ? e in C || e in A : isInteractionPathCheck() || Lg() ? e in M : !!isLocalCluster();
}
export function $$U0(e) {
  return "prod" === getInitialOptions().cluster_name ? e in v ? v[e] : void 0 : "staging" === getInitialOptions().cluster_name ? e in C ? C[e] : void 0 : isInteractionPathCheck() || Lg() ? e in M ? M[e] : void 0 : isLocalCluster() ? "*" : void 0;
}
export function $$B9(e) {
  if (!$$j7(e)) throw Error("Untrusted pluginID");
  return "prod" === getInitialOptions().cluster_name ? new Set(S[e] ?? []) : "staging" === getInitialOptions().cluster_name ? new Set(A[e] ?? []) : isInteractionPathCheck() || Lg() ? new Set(F[e] ?? []) : isLocalCluster() ? new Set(UX) : new Set();
}
export function $$G4() {
  return "prod" === getInitialOptions().cluster_name ? O : "staging" === getInitialOptions().cluster_name ? w : (isInteractionPathCheck() || Lg() || isLocalCluster(), new Set());
}
export function $$V6(e, t) {
  let r = e === ("staging" === getInitialOptions().cluster_name ? T : _);
  return !(t && r);
}
export function $$H8(e) {
  return "prod" === getInitialOptions().cluster_name ? N[e] : "staging" === getInitialOptions().cluster_name ? x[e] : void 0;
}
export function $$z10(e) {
  return "prod" === getInitialOptions().cluster_name ? D.includes(e) : "staging" === getInitialOptions().cluster_name ? P.includes(e) : !!(isInteractionPathCheck() || Lg()) || !!isLocalCluster();
}
export function $$W5(e) {
  return "prod" === getInitialOptions().cluster_name ? L[e] : "staging" === getInitialOptions().cluster_name ? R[e] : void 0;
}
export const HB = $$U0;
export const P8 = $$k1;
export const Ph = $$p2;
export const T0 = $$b3;
export const Up = $$G4;
export const Y3 = $$W5;
export const Zl = $$V6;
export const eZ = $$j7;
export const sA = $$H8;
export const xp = $$B9;
export const yb = $$z10;