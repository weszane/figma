import { jsx, jsxs } from "react/jsx-runtime";
import { e as _$$e } from "../905/579755";
import { getUserDisplayName } from "../figma_app/86921";
import { registerTooltip } from "../905/524523";
import { Hl, Jn } from "../905/497688";
export let $$l0 = registerTooltip("facepile_overflow", function (e) {
  return jsx("div", {
    children: e.overflowUsers.map(t => jsxs("div", {
      className: Hl,
      children: [jsx("div", {
        style: {
          flexShrink: 0
        },
        children: jsx(_$$e, {
          entity: t,
          size: 24
        })
      }), jsx("div", {
        className: Jn,
        children: getUserDisplayName(t, e.currentUser)
      })]
    }, t.id))
  });
}, e => {
  let t = (e, t) => e ? JSON.parse(e) : t;
  return {
    overflowUsers: t(e.getAttribute("data-tooltip-overflow-user-data"), []),
    currentUser: t(e.getAttribute("data-tooltip-current-user-data"), null)
  };
});
export const c = $$l0;