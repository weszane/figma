import { jsx } from "react/jsx-runtime";
import { defaultPx } from "../905/149328";
import { Point } from "../905/736624";
import { H } from "../905/216861";
import { Ao } from "../905/748636";
import { b } from "../905/522530";
export function $$d0({
  title: e,
  width: t,
  children: i,
  modalRef: d
}) {
  let c = H();
  let u = new Point((window.innerWidth - t) / 2, defaultPx + 12);
  return jsx(Ao, {
    ref: d,
    autoflowHeight: !0,
    closeButtonClassName: b,
    dataTestId: "libraryPreferencesModal",
    dragHeaderOnly: !0,
    headerSize: "large",
    initialPosition: u,
    initialWidth: t,
    onClose: c,
    overflowHidden: !0,
    recordingKey: "libraryPreferencesModal",
    title: e,
    children: i
  });
}
export const s = $$d0;