import { jsxs, jsx } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { On } from "../9420/975542";
import { getI18nString } from "../905/303541";
export function $$i0({
  index: e
}) {
  let r = useSelector(e => !!e.payment.promo);
  return jsxs("div", {
    className: "team_creation_breadcrumbs--stepBreadcrumbs--tP08U step_breadcrumb--stepBreadcrumbs--E4Woe",
    children: [jsx(On, {
      selected: 1 === e,
      number: 1,
      text: getI18nString("team_creation.name_your_team")
    }), jsx(On, {
      selected: 2 === e,
      number: 2,
      text: getI18nString("team_creation.add_team_members")
    }), !r && jsx(On, {
      selected: 3 === e,
      number: 3,
      text: getI18nString("team_creation.finish_setup")
    })]
  });
}
export const J = $$i0;