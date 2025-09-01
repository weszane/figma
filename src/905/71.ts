import { j } from '../figma_app/465776'
import { wh } from '../figma_app/841197'

export let $$a2 = new Set(['styleIdForFill', 'styleIdForStrokeFill', 'styleIdForText', 'styleIdForEffect', 'styleIdForGrid'])
export function $$s15(e) {
  return $$a2.has(e)
}
j($$a2)
export let $$o0 = new Set(['backgroundPaints'])
export function $$l7(e) {
  return e === 'id' || e === 'alias' || e === 'overriddenVariableId'
}
export function $$d20(e) {
  return e === 'variableSetID' || e === 'backingVariableSetId' || e === 'parentVariableSetId'
}
export function $$c22(e) {
  return e === 'exportedFromCodeFileId' || e === 'codeFileId'
}
export function $$u21(e) {
  return e === 'backingCodeComponentId'
}
export function $$p1(e) {
  return e === 'belongsToCodeLibraryId'
}
export function $$m17(e) {
  return e === 'codeFileCanvasNodeId'
}
export function $$h13(e, t) {
  return e === 'symbolID' || e === 'overriddenSymbolID' || e === 'endpointNodeID' || e === 'currentPage' || e === 'strokeBrushGuid' || e === 'sourceNodeId' || e === 'guid' && t === 'diagramParentIndex'
}
export function $$g12(e) {
  return ['r', 'g', 'b', 'a'].every(t => t in e)
}
export function $$f16(e) {
  return 'guids' in e && Array.isArray(e.guids) && e.guids.every($$_11)
}
export function $$_11(e) {
  return ['sessionID', 'localID'].every(t => t in e)
}
export function $$A6(e) {
  return ['m00', 'm01', 'm02', 'm10', 'm11', 'm12'].every(t => t in e)
}
export function $$y23(e) {
  return Array.isArray(e) && e.length === 2 && e.every(e => Array.isArray(e) && e.length === 3)
    ? {
        m00: e[0][0],
        m01: e[0][1],
        m02: e[0][2],
        m10: e[1][0],
        m11: e[1][1],
        m12: e[1][2],
      }
    : null
}
export function $$b10(e) {
  return ['x', 'y'].every(t => t in e)
}
export function $$v14(e) {
  return e instanceof Uint8Array
}
export function $$I19(e, t) {
  return e instanceof Uint8Array && t === 'hash'
}
export function $$E5(e, t) {
  return typeof e == 'number' && (t === 'commandsBlob' || t === 'dataBlob')
}
export function $$x4(e) {
  return typeof e == 'boolean'
}
export function $$S18(e) {
  return typeof e == 'number' || typeof e == 'bigint'
}
export function $$w3(e) {
  return typeof e == 'string'
}
export function $$C8(e) {
  return typeof e == 'object' && 'type' in e && 'label' in e
}
export function $$T9(e, t) {
  return typeof e == 'string' && wh.has(t)
}
j($$o0)
export const EI = $$o0
export const FE = $$p1
export const GP = $$a2
export const Kg = $$w3
export const Lm = $$x4
export const M_ = $$E5
export const OA = $$A6
export const Ox = $$l7
export const Rt = $$C8
export const SE = $$T9
export const WX = $$b10
export const W_ = $$_11
export const _o = $$g12
export const aP = $$h13
export const aY = $$v14
export const ar = $$s15
export const hV = $$f16
export const hd = $$m17
export const kf = $$S18
export const qx = $$I19
export const r4 = $$d20
export const rP = $$u21
export const wA = $$c22
export const yp = $$y23
