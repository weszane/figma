import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { IconButton } from "../905/443068";
import { c as _$$c } from "../905/640510";
import { _ as _$$_ } from "../905/465535";
import { Tj } from "../figma_app/342207";
import { stylex } from "@stylexjs/stylex";
import { _ as _$$_2 } from "../905/613863";
import { useFavoriteResource } from "../905/347011";
import { FavoriteResourceDropdown } from "../905/433510";
import { KindEnum } from "../905/129884";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$_0({
  favoriteType: e,
  orgId: t,
  resourceId: r,
  setFavorite: _,
  monochrome: f,
  teamId: g,
  size: h = "md",
  dataTestId: x = "favorite-star-button"
}) {
  let b = useFavoriteResource(r, e, t, g);
  let v = _$$_2({
    subscription: b,
    orgId: t,
    resourceId: r,
    setFavorite: _
  });
  return "loaded" !== b.status ? jsx("div", {
    ...stylex.props(f && p.monochromePlaceholder),
    children: jsx(IconButton, {
      variant: "secondary",
      disabled: !0,
      size: h,
      "aria-label": v.tooltip,
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": v.tooltip,
        "data-tooltip-timeout-delay": 50,
        "data-testid": "favorite-star-placeholder"
      },
      children: jsx(_$$c, {
        "data-testid": "favorite-star-placeholder-unfavorited-icon"
      })
    })
  }) : jsxs(Fragment, {
    children: [jsx(IconButton, {
      ref: v.buttonRef,
      "aria-label": v.tooltip,
      "aria-pressed": !!b.favorite,
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": v.tooltip,
        "data-tooltip-timeout-delay": 50,
        "data-testid": x
      },
      onClick: v.toggle,
      variant: "secondary",
      size: h,
      children: b.favorite ? jsx(_$$_, {
        style: f ? void 0 : {
          "--color-icon": Tj.iconfavorite
        },
        "data-testid": `${x}-favorited-icon`
      }) : jsx(_$$c, {
        "data-testid": `${x}-unfavorited-icon`
      })
    }), !!t && v.isDropdownShown && jsx(FavoriteResourceDropdown, {
      currentSectionId: b.favorite?.resource.sidebarSectionId ?? void 0,
      customSectionOrdering: b.orderedSidebarSections ?? [],
      "data-testid": "organize-favorite-menu",
      favoriteId: b.favorite?.id,
      orgId: t,
      resourceId: r,
      resourceType: e,
      sections: b.userSidebarSections ?? [],
      setFavorite: _,
      userHasMaxFavorites: b.hasMaxFavorites
    })]
  });
}
let p = {
  monochromePlaceholder: {
    display: "xjp7ctv",
    "--color-border-disabled": "x1qgxxjq",
    $$css: !0
  }
};
export const i = $$_0;
