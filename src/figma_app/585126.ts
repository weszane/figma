import { xb } from "../figma_app/465776";
import { A } from "../905/920142";
import { parseQuery } from "../905/634134";
import { CC } from "../figma_app/609194";
import { s as _$$s } from "../905/82276";
import { U9, rk, Oo, GX, J0, cC, e5 } from "../figma_app/967319";
let d = (e, t, r) => {
  switch (e) {
    case "seatType":
    case "seatChanges":
      return t;
    case "accountType":
      return U9[t];
    case "lastEdit":
      return rk[t];
    case "billingGroup":
      let n = decodeURIComponent(t);
      let i = Object.keys(r).find(e => r[e]?.name === n);
      if ("unassigned" === t || "Unassigned" === t) return _$$s;
      if (i) return i;
      return null;
    case "newEditor":
      return "true" === t;
    default:
      return null;
  }
};
let c = (e, t, r) => {
  switch (e) {
    case "permissionFilter":
    case "lastEditFilter":
    case "newEditorFilter":
    case "workspaceFilter":
    case "idpGroupFilter":
    case "seatTypeFilter":
    case "seatChangesFilter":
      return t;
    case "licenseGroupFilter":
      return encodeURIComponent(CC(t, r));
    default:
      return null;
  }
};
export function $$u2(e, t) {
  if (!e) return null;
  let r = parseQuery(e);
  return Object.keys(r).reduce((e, n) => {
    if (!(n in Oo)) return e;
    {
      let i = GX[n];
      let a = r[n];
      let s = d(n, a, t);
      return {
        ...e,
        ...(s && {
          [i]: s
        })
      };
    }
  }, J0);
}
export function $$p0(e, t) {
  return Object.keys(e).reduce((r, n) => {
    let i = cC[n];
    let a = e[n];
    return {
      ...r,
      ...(a && {
        [i]: c(n, a, t)
      })
    };
  }, {});
}
export function $$_1(e) {
  let t = {
    filters: {}
  };
  e[e5.newEditorFilter] && (t.filters.new_editor = !0);
  Object.entries(e).forEach(([e, r]) => {
    if (null !== r && e !== e5.newEditorFilter) switch (e) {
      case e5.licenseGroupFilter:
        t.filters.license_group = r;
        break;
      case e5.workspaceFilter:
        t.filters.workspace = r;
        break;
      case e5.idpGroupFilter:
        t.filters.idp_group = r;
        break;
      case e5.permissionFilter:
        t.filters.permission = r;
        break;
      case e5.seatTypeFilter:
        t.filters.seat_type = r;
        break;
      case e5.seatChangesFilter:
        t.filters.upgrade_reason = r;
        break;
      case e5.lastEditFilter:
        t.filters.last_edit = function (e) {
          switch (e) {
            case rk["3mo"]:
              return A().subtract(3, "month");
            case rk["6mo"]:
              return A().subtract(6, "month");
            case rk["1yr"]:
              return A().subtract(1, "year");
            default:
              xb(e);
          }
        }(r).utc().format();
    }
  });
  return {
    filters: JSON.stringify(t.filters)
  };
}
export const OA = $$p0;
export const nG = $$_1;
export const rT = $$u2;