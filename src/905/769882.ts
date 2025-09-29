import { useSelector } from 'react-redux'
import { M } from '../905/366117'
import { FEditorType } from '../figma_app/53721'
import { getColorSpaceSupportStatus, isColorSpaceStatusSupported } from '../figma_app/622881'
import { ColorProfileEnum, ColorSpaceEnum } from '../figma_app/763686'
import { jK } from '../figma_app/829197'

let d = ({
  displayP3SupportReport: e,
  userColorProfile: t,
  editorType: i,
}) => {
  if (i === FEditorType.Whiteboard)
  ;else if (t === M.DISPLAY_P3 && isColorSpaceStatusSupported(e))
    return ColorSpaceEnum.DISPLAY_P3
  return ColorSpaceEnum.SRGB
}
export function $$c0(e) {
  let t = getColorSpaceSupportStatus()
  let i = jK()
  let l = useSelector(e => e.selectedView?.editorType)
  switch (e) {
    case ColorProfileEnum.LEGACY:
      return d({
        displayP3SupportReport: t,
        userColorProfile: i.colorProfilePreference,
        editorType: l,
      })
    case ColorProfileEnum.SRGB:
    case ColorProfileEnum.DISPLAY_P3:
      return (function ({
        displayP3SupportReport: e,
        documentColorProfile: t,
        editorType: i,
      }) {
        if (i === FEditorType.Whiteboard)
          return ColorSpaceEnum.SRGB
        switch (t) {
          case ColorProfileEnum.SRGB:
            break
          case ColorProfileEnum.DISPLAY_P3:
            return e.status === 'ClientNotSupported' || e.status === 'MonitorNotSupported' ? ColorSpaceEnum.SRGB : ColorSpaceEnum.DISPLAY_P3
        }
        return ColorSpaceEnum.SRGB
      }({
        displayP3SupportReport: t,
        documentColorProfile: e,
        editorType: l,
      }))
  }
}
export const H = $$c0
