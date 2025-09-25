import { alphaColorManipulator } from '../905/713722'
import { atomStoreManager } from '../figma_app/27355'
import { colorToHexString } from '../figma_app/191804'
import { Ev } from '../figma_app/216057'
import { Hr } from '../figma_app/394327'
import { xv } from '../figma_app/655139'
import { VariableDataType, VariablesBindings } from '../figma_app/763686'
import { f$ } from '../figma_app/836943'

export function $$u1(e, t, i) {
  let n = {};
  (function e(t, i, n, r) {
    if (t.visible) {
      for (let a of t.childrenNodes) e(a, i, n, r)
      if (r || $$p0(t, n).forEach((e) => {
        e && e.value !== null && (i[e.codeSyntaxName || e.name] = e.value)
      }), t.inheritedFillStyle) {
        let e = f$(t.inheritedFillStyle)
        if (e) {
          let n = t.sceneGraph.get(e)
          n && (i[n.name] = n.fills.map(e => alphaColorManipulator.format(e.color)).join(','))
        }
      }
      if (t.inheritedTextStyle) {
        let e = f$(t.inheritedTextStyle)
        if (e) {
          let n = t.sceneGraph.get(e)
          n && (i[n.name] = `Font(family: "${n.fontName.family}", style: ${n.fontName.style}, size: ${n.fontSize}, weight: ${n.fontWeightOrMixed}, lineHeight: ${n.lineHeightOrMixed === 'mixed' ? 'mixed' : n.lineHeightOrMixed.value})`)
        }
      }
    }
  })(e, n, t, i)
  return n
}
export function $$p0(e, t) {
  return Object.values(e.boundVariables).flatMap(e => e).map((e) => {
    let i = atomStoreManager.get(Ev(e.id))
    if (i) {
      let r = VariablesBindings.getVariableResolvedValue(e.id, new Map())
      let o = r?.resolvedType
      return {
        name: i.name,
        codeSyntaxName: xv(i, t),
        value: (function (e) {
          switch (e?.type) {
            case VariableDataType.STRING:
              return e.value
            case VariableDataType.BOOLEAN:
            case VariableDataType.FLOAT:
              return String(e.value)
            case VariableDataType.COLOR:
              return colorToHexString(e.value)
            default:
              return null
          }
        }(r)),
        type: Hr(o),
      }
    }
    return null
  })
}
export const a = $$p0
export const l = $$u1
