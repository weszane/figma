import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { xk } from "@stylexjs/stylex";
import { buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { C as _$$C } from "../905/237873";
import { isResourceHubProfilesEnabled } from "../figma_app/275462";
import { ResourceTypes } from "../905/178090";
import { Z } from "../5430/338876";
import { A } from "../6828/505145";
import { A as _$$A } from "../6828/44395";
import { A as _$$A2 } from "../6828/625002";
import { $$default } from "../svg/56418";
import { A as _$$A3 } from "../6828/727585";
let g = {
  files: _$$A,
  plugins: _$$A2,
  widgets: _$$A3,
  profiles: A,
  mixed: $$default
};
let v = {
  files: "8b7a937ff662171bfc1bb88ac6c2803aa6434608",
  plugins: "12829be2715dea57373afcfa789444268c27f26b",
  widgets: "506bfaad3d143b8b47c84d2ed5fd73b0310ae77a",
  profiles: "5e9eba8476e4c301b30d7c7039526178e8569fc9",
  mixed: "8b7a937ff662171bfc1bb88ac6c2803aa6434608"
};
function b(e) {
  if (e.isError) return null;
  let t = jsx("span", {
    className: "empty_search_state--bold--s4eFD",
    children: e.query
  });
  switch (e.resourceType) {
    case ResourceTypes.SearchResourceTypes.FILES:
      if (e.view.price === _$$C.FREE) return renderI18nText("community.search.empty_state_hub_files_free", {
        query: t
      });
      if (e.view.price === _$$C.PAID) return renderI18nText("community.search.empty_state_hub_files_paid", {
        query: t
      });
      return renderI18nText("community.search.empty_state_hub_files", {
        query: t
      });
    case ResourceTypes.SearchResourceTypes.PLUGINS:
      if (e.view.price === _$$C.FREE) return renderI18nText("community.search.empty_state_public_plugins_free", {
        query: t
      });
      if (e.view.price === _$$C.PAID) return renderI18nText("community.search.empty_state_public_plugins_paid", {
        query: t
      });
      return renderI18nText("community.search.empty_state_public_plugins", {
        query: t
      });
    case ResourceTypes.SearchResourceTypes.WIDGETS:
      if (e.view.price === _$$C.FREE) return renderI18nText("community.search.empty_state_public_widgets_free", {
        query: t
      });
      if (e.view.price === _$$C.PAID) return renderI18nText("community.search.empty_state_public_widgets_paid", {
        query: t
      });
      return renderI18nText("community.search.empty_state_public_widgets", {
        query: t
      });
    case ResourceTypes.SearchResourceTypes.PROFILES:
      return renderI18nText("community.search.empty_state_creators", {
        query: t
      });
    case ResourceTypes.SearchResourceTypes.MIXED:
    default:
      if (e.view.price === _$$C.FREE) return renderI18nText("community.search.no_resources_matching_free", {
        query: t
      });
      if (e.view.price === _$$C.PAID) return renderI18nText("community.search.no_resources_matching_paid", {
        query: t
      });
      return renderI18nText("community.search.no_resources_matching", {
        query: t
      });
  }
}
export function $$j0(e) {
  return isResourceHubProfilesEnabled() ? jsx(C, {
    ...e
  }) : jsx(w, {
    ...e
  });
}
function w(e) {
  return jsxs("div", {
    className: "empty_search_state--emptyState--2TAUS search_results_view--emptyState--HtHm1 tiles_view--emptyState--jfzsE text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [jsx(SvgComponent, {
      className: "empty_search_state--emptyStateIllustrations--BnydB search_results_view--emptyStateIllustrations--CN9Y8",
      svg: g[e.resourceType],
      useOriginalSrcFills_DEPRECATED: !0
    }), jsx("div", {
      className: "empty_search_state--emptyStateTextWrapper--n2j3d search_results_view--emptyStateTextWrapper--zg-Cu",
      children: jsx("div", {
        className: "empty_search_state--emptyStateText--Bv9hN search_results_view--emptyStateText---YT8b ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: jsx(b, {
          ...e
        })
      })
    })]
  });
}
function C(e) {
  let [t, r] = useState(!1);
  let l = useCallback(() => {
    r(!0);
  }, []);
  return jsxs("div", {
    ...xk(Z.container),
    children: [jsx("div", {
      ...xk(Z.assetContainer),
      children: jsx(oW, {
        ...xk(Z.asset),
        src: buildUploadUrl(v[e.resourceType]),
        loading: "lazy",
        onLoad: l
      })
    }), t && jsxs(Fragment, {
      children: [jsx("div", {
        ...xk(Z.description),
        children: jsx(b, {
          ...e
        })
      }), e.emptyStateActions && jsx("div", {
        children: e.emptyStateActions
      })]
    })]
  });
}
export const fk = $$j0;