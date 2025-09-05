import { jsx, Fragment } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { md } from "../figma_app/27355";
import { cQ } from "../905/18800";
export function $$o0({
  children: e
}) {
  let t = useSelector(e => !!e.user?.id);
  let i = md(cQ);
  return t || !i ? null : jsx(Fragment, {
    children: e
  });
}
export const d = $$o0;