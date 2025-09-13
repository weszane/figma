import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { ButtonPrimitive } from "../905/632989";
import { c as _$$c } from "../905/640510";
import { _ } from "../905/465535";
import { Tj } from "../figma_app/342207";
import { _ as _$$_ } from "../905/613863";
import { Y } from "../905/347011";
import { KindEnum } from "../905/129884";
import { t as _$$t } from "../905/433510";
export function $$p0({
  favoriteType: e,
  orgId: t,
  resourceId: i,
  setFavorite: p,
  teamId: m,
  dataTestId: h = "favorite-star-button"
}) {
  let g = Y(i, e, t, m);
  let f = _$$_({
    subscription: g,
    orgId: t,
    resourceId: i,
    setFavorite: p
  });
  return "loaded" !== g.status ? (h = "favorite-star-placeholder", jsx(ButtonPrimitive, {
    disabled: !0,
    "aria-label": f.tooltip,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": f.tooltip,
      "data-tooltip-timeout-delay": 50,
      "data-testid": h
    },
    className: "x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x19y5rnk x16v0e3u x1pt8ico x5hs570 x16evbv0 x1g40iwv",
    children: jsx("span", {
      "aria-hidden": !0,
      children: jsx(_$$c, {
        "data-testid": `${h}-unfavorited-icon`
      })
    })
  })) : jsxs(Fragment, {
    children: [jsx(ButtonPrimitive, {
      ref: f.buttonRef,
      onClick: e => {
        f.toggle();
        e.stopPropagation();
      },
      "aria-label": f.tooltip,
      "aria-pressed": !!g.favorite,
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": f.tooltip,
        "data-tooltip-timeout-delay": 50,
        "data-testid": h
      },
      className: "x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x19y5rnk x16v0e3u x1pt8ico x5hs570 x16evbv0 x1g40iwv",
      children: jsx("span", {
        "aria-hidden": !0,
        children: g.favorite ? jsx(_, {
          style: {
            "--color-icon": Tj.iconfavorite
          },
          "data-testid": `${h}-favorited-icon`
        }) : jsx(_$$c, {
          style: {
            "--color-icon": Tj.iconSecondary
          },
          "data-testid": `${h}-unfavorited-icon`
        })
      })
    }), !!t && f.isDropdownShown && jsx(_$$t, {
      currentSectionId: g.favorite?.resource.sidebarSectionId ?? void 0,
      customSectionOrdering: g.orderedSidebarSections ?? [],
      "data-testid": "organize-favorite-menu",
      favoriteId: g.favorite?.id,
      orgId: t,
      resourceId: i,
      resourceType: e,
      sections: g.userSidebarSections ?? [],
      setFavorite: p,
      userHasMaxFavorites: g.hasMaxFavorites
    })]
  });
}
export const H = $$p0;