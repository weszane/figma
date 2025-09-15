import { jsx, jsxs } from "react/jsx-runtime";
import { getFeatureFlags } from "../905/601108";
import n from "classnames";
import a from "lodash-es/mapValues";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { getI18nString } from "../905/303541";
import { Jm } from "../figma_app/387599";
import { a4 } from "../figma_app/321395";
import { ResourceTypes } from "../905/178090";
import { n6 } from "../figma_app/600006";
import { OU } from "../figma_app/773663";
var o = n;
var l = a;
let m = {
  All: ({
    active: e
  }) => jsx("svg", {
    width: "19",
    height: "19",
    viewBox: "-1 -1 21 21",
    fill: "none",
    children: e ? jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 6V2H6V6H2ZM0 1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V7C8 7.55228 7.55228 8 7 8H1C0.447715 8 0 7.55228 0 7V1ZM2 17V13H6V17H2ZM0 12C0 11.4477 0.447715 11 1 11H7C7.55228 11 8 11.4477 8 12V18C8 18.5523 7.55228 19 7 19H1C0.447715 19 0 18.5523 0 18V12ZM13 13V17H17V13H13ZM12 11C11.4477 11 11 11.4477 11 12V18C11 18.5523 11.4477 19 12 19H18C18.5523 19 19 18.5523 19 18V12C19 11.4477 18.5523 11 18 11H12ZM12 0C11.4477 0 11 0.447715 11 1V7C11 7.55228 11.4477 8 12 8H18C18.5523 8 19 7.55228 19 7V1C19 0.447715 18.5523 0 18 0H12Z",
      fill: "var(--color-icon-selected, #0D99FF)"
    }) : jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 6V2H6V6H2ZM0 1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V7C8 7.55228 7.55228 8 7 8H1C0.447715 8 0 7.55228 0 7V1ZM2 17V13H6V17H2ZM0 12C0 11.4477 0.447715 11 1 11H7C7.55228 11 8 11.4477 8 12V18C8 18.5523 7.55228 19 7 19H1C0.447715 19 0 18.5523 0 18V12ZM13 13V17H17V13H13ZM12 11C11.4477 11 11 11.4477 11 12V18C11 18.5523 11.4477 19 12 19H18C18.5523 19 19 18.5523 19 18V12C19 11.4477 18.5523 11 18 11H12ZM13 6V2H17V6H13ZM11 1C11 0.447715 11.4477 0 12 0H18C18.5523 0 19 0.447715 19 1V7C19 7.55228 18.5523 8 18 8H12C11.4477 8 11 7.55228 11 7V1Z",
      fill: "var(--color-icon, rgba(0, 0, 0, 0.8))"
    })
  }),
  Files: e => jsx("svg", {
    width: "18",
    height: "23",
    viewBox: "0 0 18 23",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M-0.000976562 0.00390625H11.4132L17.999 6.58969V22.0039H-0.000976562V0.00390625ZM1.99902 2.00391V20.0039H15.999V8.00391H9.99902V2.00391H1.99902ZM11.999 3.41812L14.5848 6.00391H11.999V3.41812Z",
      fill: "var(--color-icon, rgba(0, 0, 0, 0.8))"
    })
  }),
  Plugins: e => jsx("svg", {
    width: "18",
    height: "24",
    viewBox: "0 0 18 24",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 2C7.12831 2 6 3.10615 6 4.29412C6 4.80364 6.18423 5.32346 6.52975 5.77907C6.86869 6.22599 6.8635 6.76903 6.69667 7.1662C6.52648 7.57138 6.10414 8 5.46502 8H1.99902V21.9961H16V19.6417C15.4694 19.8705 14.8924 20 14.2942 20C11.6161 20 10 17.5466 10 15C10 12.4534 11.6161 10 14.2942 10C14.8924 10 15.4694 10.1295 16 10.3583V8H12.535C11.8959 8 11.4735 7.57138 11.3033 7.1662C11.1365 6.76903 11.1313 6.22599 11.4703 5.77907C11.8158 5.32346 12 4.80364 12 4.29412C12 3.10615 10.8717 2 9 2ZM4 4.29412C4 1.61609 6.45341 0 9 0C11.5466 0 14 1.61609 14 4.29412C14 4.89237 13.8705 5.46938 13.6417 6H16.125C17.1605 6 18 6.83947 18 7.875V11.465C18 12.1041 17.5714 12.5264 17.1662 12.6966C16.769 12.8635 16.226 12.8687 15.7791 12.5297C15.3235 12.1842 14.8037 12 14.2942 12C13.1062 12 12 13.1283 12 15C12 16.8717 13.1062 18 14.2942 18C14.8037 18 15.3235 17.8158 15.7791 17.4703C16.226 17.1313 16.769 17.1365 17.1662 17.3034C17.5714 17.4736 18 17.8959 18 18.535V22.1211C18 23.1566 17.1605 23.9961 16.125 23.9961H1.87402C0.838488 23.9961 -0.000976562 23.1566 -0.000976562 22.1211V7.875C-0.000976562 6.83947 0.838488 6 1.87402 6H4.35834C4.12951 5.46938 4 4.89237 4 4.29412Z",
      fill: "var(--color-icon, rgba(0, 0, 0, 0.8))"
    })
  }),
  Widgets: e => jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.41421 10.5854L3.5146 8.485V5.51451V3.51451H5.5146H8.48509L10.5854 1.41421L11.9996 0L13.4138 1.41421L15.5141 3.51451H18.4846H20.4846V5.51451V8.485L22.585 10.5854L23.9992 11.9996L22.585 13.4138L20.4846 15.5142V18.4845V20.4845H18.4846H15.5143L13.4138 22.585L11.9996 23.9992L10.5854 22.585L8.48491 20.4845H5.5146H3.5146V18.4845V15.5142L1.41421 13.4138L0 11.9996L1.41421 10.5854ZM5.5146 8.485V5.51451H8.48509H9.31352L9.8993 4.92872L11.9996 2.82843L14.0999 4.92872L14.6857 5.51451H15.5141H18.4846V8.485V9.31343L19.0704 9.89921L21.1708 11.9996L19.0704 14.1L18.4846 14.6858V15.5142V18.4845H15.5143H14.6859L14.1001 19.0703L11.9996 21.1708L9.89912 19.0703L9.31334 18.4845H8.48491H5.5146V15.5142V14.6858L4.92882 14.1L2.82843 11.9996L4.92882 9.89921L5.5146 9.31343V8.485ZM13.2526 8.65802L13.9111 7.90544L12.4059 6.58843L11.7474 7.34101L8.24742 11.341L6.79623 12.9995H9H12.7962L10.7474 15.341L10.0889 16.0936L11.5941 17.4106L12.2526 16.658L15.7526 12.658L17.2038 10.9995H15H11.2038L13.2526 8.65802Z",
      fill: "var(--color-icon, rgba(0, 0, 0, 0.8))"
    })
  }),
  Union: e => jsx("svg", {
    width: "20",
    height: "24",
    viewBox: "0 0 20 24",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6ZM16 6C16 9.31371 13.3137 12 10 12C6.68629 12 4 9.31371 4 6C4 2.68629 6.68629 0 10 0C13.3137 0 16 2.68629 16 6ZM2.25203 22C3.14012 18.5495 6.27232 16 10 16C13.7277 16 16.8599 18.5495 17.748 22H2.25203ZM10 14C14.8379 14 18.8734 17.4355 19.8 22C19.9311 22.6462 20 23.3151 20 24H18H2H0C0 23.3151 0.0688605 22.6462 0.200036 22C1.12658 17.4355 5.16208 14 10 14Z",
      fill: "var(--color-icon, rgba(0, 0, 0, 0.8))"
    })
  })
};
export function $$y1(e) {
  return l()(e, e => "resources" in e ? {
    count: e.resources.length,
    hasMore: e.totalHits > e.resources.length
  } : {
    count: e.length,
    hasMore: !1
  });
}
export function $$g0({
  selectedResourceType: e,
  resultsByType: t
}) {
  getFeatureFlags().statsig_aa_flag_web_cmtysidebar;
  let r = a4(n6);
  let n = $$y1(t);
  let a = Jm();
  let l = [[ResourceTypes.SearchResourceTypes.MIXED, getI18nString("community.view_bar.all"), m.All], [ResourceTypes.SearchResourceTypes.FILES, getI18nString("community.view_bar.files_and_templates"), m.Files], [ResourceTypes.SearchResourceTypes.PLUGINS, getI18nString("community.view_bar.plugins"), m.Plugins], [ResourceTypes.SearchResourceTypes.WIDGETS, getI18nString("community.view_bar.widgets"), m.Widgets], [ResourceTypes.SearchResourceTypes.PROFILES, getI18nString("community.view_bar.creators"), m.Union]];
  return jsx("div", {
    className: "search_sidebar--sidebar--PZz8B",
    children: jsx("ul", {
      className: "search_sidebar--sidebarList--abBb8",
      children: l.map(([t, i, l]) => {
        let u = e === t;
        let m = r.search?.editor_type ? OU(r.search.editor_type, t, {
          anchorOn: "resourceType"
        }).editorType : void 0;
        let _ = r.copyWith({}, {
          resource_type: t,
          editor_type: m
        });
        let {
          count,
          hasMore
        } = n[t];
        return jsx("a", {
          className: "search_sidebar--sidebarListLink--Nx39c",
          href: _.href,
          onClick: r => {
            r.preventDefault();
            customHistory.push(_.href);
            trackEventAnalytics("resource_type_filter_changed", {
              resource_type: t,
              from: e,
              search_session_id: a
            });
          },
          children: jsxs("li", {
            className: o()({
              "search_sidebar--sidebarListItemActive--fmMkX": u
            }, "search_sidebar--sidebarListItem--eursr text--fontPos14--OL9Hp text--_fontBase--QdLsd"),
            children: [jsx(l, {
              active: u
            }), jsx("span", {
              className: "search_sidebar--resourceName--NpWFB",
              children: i
            }), jsx("span", {
              className: "search_sidebar--numSearchResults--ficC3",
              children: `${count ?? 0}${hasMore ? "+" : ""}`
            })]
          })
        }, t);
      })
    })
  });
}
export const z = $$g0;
export const v = $$y1;