import { atom } from 'jotai'
import { Qhc, YI7 } from '../figma_app/27776'
import { parsePxNumber } from '../figma_app/783094'

let s = parsePxNumber(YI7)
let o = parsePxNumber(Qhc)
let $$l0 = atom(s + o)
export const g = $$l0
