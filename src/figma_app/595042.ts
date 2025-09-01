import { decodeBinarySchema, createKiwiCodec } from "../figma_app/870879";
import { Q_, cq, Eo, SR, ut } from "../905/35608";
import { z1, BX } from "../figma_app/153199";
let s = [Q_, cq, Eo, SR, ut];
export function $$o1(e) {
  let t = String.fromCharCode(...e.subarray(0, 8));
  if (!s.includes(t)) throw Error("Unsupported file type");
  return t;
}
async function l(e, t, r) {
  if (0 === e.length) throw Error("Empty file");
  let s = new DataView(e.buffer);
  let o = Q_.length;
  if (o + 4 > e.length) throw Error("Missing version");
  let l = s.getUint32(o, !0);
  o += 4;
  let d = s.getUint32(o, !0);
  if ((o += 4) + d > e.length) throw Error("Invalid schema length " + d);
  let c = e.subarray(o, o + d);
  o += d;
  let u = s.getUint32(o, !0);
  if ((o += 4) + u > e.length) throw Error("Invalid message length " + u);
  let p = e.subarray(o, o + u);
  let _ = await z1(c);
  let h = decodeBinarySchema(_);
  let m = createKiwiCodec(t, h, void 0, r);
  return {
    migrationVersion: l,
    schema: h,
    compiledSchema: m,
    compressedSchema: c,
    encodedMessage: await z1(p)
  };
}
export async function $$d3(e, t) {
  e = await BX(e);
  let {
    migrationVersion,
    schema,
    compiledSchema,
    compressedSchema,
    encodedMessage
  } = await l(e, t);
  let d = compiledSchema.decodeMessage(encodedMessage);
  let {
    nodeChanges,
    blobs = []
  } = d;
  if (!nodeChanges) throw Error("File did not have node changes");
  return {
    nodeChanges,
    schema,
    blobs,
    message: d,
    compiledSchema,
    compressedSchema,
    migrationVersion
  };
}
export async function $$c2(e, t, r) {
  e = await BX(e);
  let {
    migrationVersion,
    schema,
    compiledSchema,
    compressedSchema,
    encodedMessage
  } = await l(e, t, r);
  let c = compiledSchema.decodeDiffPayload(encodedMessage);
  if (!c.nodeChanges) throw Error(".figd file buffer did not have node changes");
  if (!c.diffBasis) throw Error(".fig file buffer did not have diff basis");
  if (!c.diffChunks) throw Error(".fig file buffer did not have diff chunks");
  return {
    compiledSchema,
    schema,
    diffPayload: c,
    compressedSchema,
    migrationVersion,
    encodedDiffPayload: encodedMessage
  };
}
export async function $$u0(e, t, r, i) {
  let a;
  let s = {
    nodeChanges: [],
    blobs: []
  };
  0 !== e.length && (s = (a = createKiwiCodec(t, r, void 0, i)).decodeMessage(e));
  return {
    encodedMessage: e,
    message: s,
    schema: r,
    compiledSchema: a
  };
}
export const Dp = $$u0;
export const l0 = $$o1;
export const wF = $$c2;
export const wV = $$d3;