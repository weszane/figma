import { useSelector } from "../vendor/514228";
import { ColorSpaceEnum, ColorProfileEnum } from "../figma_app/763686";
import { FEditorType } from "../figma_app/53721";
import { tK, Av } from "../figma_app/622881";
import { jK } from "../figma_app/829197";
import { M } from "../905/366117";
let d = ({
  displayP3SupportReport: e,
  userColorProfile: t,
  editorType: i
}) => {
  if (i === FEditorType.Whiteboard) ;else if (t === M.DISPLAY_P3 && tK(e)) return ColorSpaceEnum.DISPLAY_P3;
  return ColorSpaceEnum.SRGB;
};
export function $$c0(e) {
  let t = Av();
  let i = jK();
  let l = useSelector(e => e.selectedView?.editorType);
  switch (e) {
    case ColorProfileEnum.LEGACY:
      return d({
        displayP3SupportReport: t,
        userColorProfile: i.colorProfilePreference,
        editorType: l
      });
    case ColorProfileEnum.SRGB:
    case ColorProfileEnum.DISPLAY_P3:
      return function ({
        displayP3SupportReport: e,
        documentColorProfile: t,
        editorType: i
      }) {
        if (i === FEditorType.Whiteboard) return ColorSpaceEnum.SRGB;
        switch (t) {
          case ColorProfileEnum.SRGB:
            break;
          case ColorProfileEnum.DISPLAY_P3:
            return "ClientNotSupported" === e.status || "MonitorNotSupported" === e.status ? ColorSpaceEnum.SRGB : ColorSpaceEnum.DISPLAY_P3;
        }
        return ColorSpaceEnum.SRGB;
      }({
        displayP3SupportReport: t,
        documentColorProfile: e,
        editorType: l
      });
  }
}
export const H = $$c0;