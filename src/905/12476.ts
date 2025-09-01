import { vq } from '../905/8732'
import { w } from '../905/295712'
import { B } from '../905/330741'
import { nF } from '../905/350402'
import { Uv, XE } from '../figma_app/91703'
import { sw } from '../figma_app/914957'

export let $$d0 = nF((e) => {
  let t = e.getState()
  t.pickerShown && e.dispatch(XE())
  t.instanceSwapPickerShown && e.dispatch(vq())
  t.stylePickerShown && e.dispatch(Uv())
  t.stylePreviewShown && e.dispatch(sw())
  t.variablePickerShown?.isShown && e.dispatch(B())
  t.pickerInStyleCreationShown && e.dispatch(w())
})
export const r = $$d0
