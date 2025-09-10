import { z } from "../905/239603";
var $$s4 = (e => (e[e.START = 0] = "START", e[e.TIMEOUT = 1] = "TIMEOUT", e[e.COMPLETE = 2] = "COMPLETE", e[e.RESET = 3] = "RESET", e[e.ERROR = 4] = "ERROR", e))($$s4 || {});
var $$i0 = (e => (e[e.PROVIDER = 0] = "PROVIDER", e[e.SINGLETON = 1] = "SINGLETON", e))($$i0 || {});
var $$n8 = (e => (e[e.BOOTSTRAP = 0] = "BOOTSTRAP", e[e.NETWORK = 1] = "NETWORK", e))($$n8 || {});
var $$o3 = (e => (e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.TIMED_OUT = 2] = "TIMED_OUT", e[e.COMPLETED = 3] = "COMPLETED", e[e.ERRORED = 4] = "ERRORED", e))($$o3 || {});
var $$_6 = (e => (e[e.TIMEOUT = 0] = "TIMEOUT", e[e.REQUEST_FAILED = 1] = "REQUEST_FAILED", e[e.SDK_METHOD_FAILED = 2] = "SDK_METHOD_FAILED", e[e.UNKNOWN = 3] = "UNKNOWN", e))($$_6 || {});
var $$l2 = (e => (e[e.INITIALIZE = 0] = "INITIALIZE", e[e.PREFETCH = 1] = "PREFETCH", e[e.CONTEXT_SWITCH = 2] = "CONTEXT_SWITCH", e))($$l2 || {});
let u = z.record(z.string(), z.unknown());
let c = z.object({
  stableID: z.string().optional(),
  userID: z.string().optional(),
  customIDs: z.record(z.string(), z.string()).optional()
}).passthrough();
let $$d5 = z.optional(z.object({
  dynamic_configs: z.record(z.string(), u).optional(),
  evaluated_keys: c.optional(),
  feature_gates: z.record(z.string(), u).optional(),
  layer_configs: z.record(z.string(), u).optional(),
  hash_used: z.string().optional()
}).passthrough());
let $$g7 = z.array(z.object({
  team_id: z.string().nullable(),
  bootstrap_values: $$d5.nullable()
}));
export class $$p1 extends Error {
  constructor(e) {
    super(e || "timeout");
  }
}
export const DK = $$i0;
export const MU = $$p1;
export const PG = $$l2;
export const Uv = $$o3;
export const Uw = $$s4;
export const aH = $$d5;
export const bT = $$_6;
export const sq = $$g7;
export const ss = $$n8;
