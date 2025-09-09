import { useSelector } from "react-redux";
import { q } from "../figma_app/590592";
export function $$$$a0() {
  let e = useSelector(e => e.mirror?.appModel.showUi);
  let t = q();
  return e && t;
}
export const a = $$$$a0;
