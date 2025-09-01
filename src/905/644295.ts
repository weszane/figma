import { Yc } from "../vendor/85340";
import { Lz, w4, qf } from "../vendor/37366";
import { bM } from "../vendor/655490";
import { $t } from "../vendor/59696";
import { o as _$$o } from "../905/947384";
let l = Lz.theme({
  "&": {
    backgroundColor: "#fff"
  }
}, {
  dark: !1
});
let $$d0 = (e = {}) => {
  let {
    indentWithTab = !0,
    editable = !0,
    readOnly = !1,
    theme = "light",
    placeholder = "",
    basicSetup = !0
  } = e;
  let m = [];
  switch (indentWithTab && m.unshift(w4.of([Yc])), basicSetup && ("boolean" == typeof basicSetup ? m.unshift(_$$o()) : m.unshift(_$$o(basicSetup))), placeholder && m.unshift(qf(placeholder)), theme) {
    case "light":
      m.push(l);
      break;
    case "dark":
      m.push(bM);
      break;
    case "none":
      break;
    default:
      m.push(theme);
  }
  !1 === editable && m.push(Lz.editable.of(!1));
  readOnly && m.push($t.readOnly.of(!0));
  return [...m];
};
export const IA = $$d0;