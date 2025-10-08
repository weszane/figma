import { getFeatureFlags } from "../905/601108"

let r = ["FOREGROUND_BLUR", "BACKGROUND_BLUR"]
let a = ["INNER_SHADOW", "DROP_SHADOW"]
let $$s0 = () => [...a, ...r, "NOISE", "GRAIN", ...[getFeatureFlags().mix_gl ? "GLASS" : null].filter(Boolean)]
export const Bf = $$s0
