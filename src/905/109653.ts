import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useState, useEffect } from "react";
import { LinkPrimitive } from "../figma_app/496441";
import { Link } from "../905/438674";
import { getFeatureFlags } from "../905/601108";
import l from "classnames";
import { P as _$$P } from "../vendor/348225";
import { N as _$$N } from "../vendor/930821";
import { H } from "../905/620380";
import { getI18nString } from "../905/303541";
import { getFieldValueOrDefault } from "../905/497882";
import { isResourcePendingPublishing, isResourcePendingPublicOrCompliance } from "../figma_app/777551";
import { uX, Rk, Un, MY, I_ } from "../905/759470";
import { useCurrentUserOrg } from "../905/845253";
import { FTemplateCategoryType, FPublicationStatusType } from "../figma_app/191312";
import { getCurrentPluginVersion } from "../figma_app/300692";
import { getCurrentTeam } from "../figma_app/598018";
import { isWidgetOrPlugin } from "../figma_app/45218";
import { ContainerTypeMap } from "../905/186961";
import { T as _$$T } from "../905/943304";
import { x as _$$x } from "../905/956141";
import { jT } from "../905/870778";
var d = l;
let $$S = memo(function ({ }) {
  return jsxs("svg", {
    width: "578",
    height: "272",
    viewBox: "0 0 578 272",
    fill: "none",
    children: [jsx("path", {
      d: "M537.806 22.1687L537.926 20.4724C537.974 19.7924 538.9 19.6295 539.177 20.2522L539.869 21.8055L541.566 21.9258C542.246 21.974 542.409 22.8997 541.786 23.1772L540.233 23.8693L540.112 25.5657C540.064 26.2457 539.139 26.4086 538.861 25.7859L538.169 24.2325L536.473 24.1123C535.792 24.0641 535.63 23.1384 536.252 22.8609L537.806 22.1687Z",
      fill: "var(--color-icon-brand)",
      children: jsx("animate", {
        attributeName: "opacity",
        values: "1;0.5;1",
        dur: "4s",
        repeatCount: "indefinite"
      })
    }), jsx("path", {
      d: "M565.745 39.0449L565.643 32.9893C565.624 31.8714 567.113 31.4725 567.655 32.45L570.595 37.7452L576.651 37.6434C577.768 37.6246 578.167 39.1135 577.19 39.6561L571.895 42.5957L571.997 48.6513C572.015 49.7691 570.526 50.1681 569.984 49.1906L567.044 43.8953L560.989 43.9972C559.871 44.016 559.472 42.5271 560.449 41.9845L565.745 39.0449Z",
      fill: "var(--color-icon-brand-secondary)",
      children: jsx("animate", {
        attributeName: "opacity",
        values: "1;0.3;1",
        dur: "6s",
        repeatCount: "indefinite"
      })
    }), jsx("path", {
      opacity: "0.3",
      d: "M27.0042 241.965L29.8741 236.795C30.2912 236.044 31.4358 236.35 31.4213 237.21L31.3218 243.122L36.4917 245.992C37.2431 246.409 36.9364 247.553 36.0771 247.539L30.1649 247.439L27.2949 252.609C26.8778 253.361 25.7333 253.054 25.7478 252.195L25.8472 246.283L20.6774 243.413C19.926 242.995 20.2327 241.851 21.0919 241.865L27.0042 241.965Z",
      fill: "var(--color-icon-brand-pressed)",
      children: jsx("animate", {
        attributeName: "opacity",
        values: "0.3;0.1;0.3",
        dur: "3s",
        repeatCount: "indefinite"
      })
    }), jsx("path", {
      d: "M552.094 69.2661L550.908 66.7417C550.433 65.7298 551.628 64.7556 552.523 65.4248L554.757 67.0942L557.282 65.9085C558.294 65.4332 559.268 66.6277 558.599 67.5233L556.929 69.7575L558.115 72.2819C558.59 73.2938 557.396 74.2679 556.5 73.5987L554.266 71.9294L551.742 73.1151C550.73 73.5904 549.756 72.3958 550.425 71.5002L552.094 69.2661Z",
      fill: "black",
      fillOpacity: "0.3",
      children: jsx("animate", {
        attributeName: "opacity",
        values: "0.3;0.7;0.3",
        dur: "5s",
        repeatCount: "indefinite"
      })
    }), jsx("path", {
      opacity: "0.9",
      d: "M2.75195 266.752L3.2275 264.85C3.41813 264.087 4.50179 264.087 4.69242 264.85L5.16797 266.752L7.07015 267.227C7.83267 267.418 7.83267 268.502 7.07015 268.692L5.16797 269.168L4.69242 271.07C4.50179 271.833 3.41813 271.833 3.2275 271.07L2.75195 269.168L0.849771 268.692C0.0872517 268.502 0.0872519 267.418 0.849771 267.227L2.75195 266.752Z",
      fill: "#A5ACB1",
      children: jsx("animate", {
        attributeName: "opacity",
        values: "0.9;0.5;0.9",
        dur: "4.4s",
        repeatCount: "indefinite"
      })
    })]
  });
});
let C = {
  enter: {
    y: 20,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -20,
    opacity: 0
  }
};
function T(e, t) {
  return e % (t.length + 1);
}
function k(e, t) {
  return T(e, t) === t.length;
}
export var $$R1 = (e => (e[e.STOPPED = 0] = "STOPPED", e[e.PLAYING = 1] = "PLAYING", e))($$R1 || {});
export function $$N0({
  publishedResourceContent: e,
  draftSubmissionStatus: t,
  iconField: i,
  carouselMediaField: s,
  nameField: o,
  authorField: l,
  publishScopeField: u,
  publishRoleField: m,
  onAnimationStateChange: g,
  showThumbnailWithLetterbox: _,
  viewerModeField: y,
  hideLikeAndUsage: b
}) {
  let v = !!u;
  let I = e ? jT(e) : "";
  let C = H(e);
  let R = y && getFieldValueOrDefault(y, null) === FTemplateCategoryType.FIGMAKE_TEMPLATE;
  let N = v ? uX : R ? Rk : Un;
  let [O, D] = useState(0);
  let F = k(O, N);
  let [M, j] = useState(F ? 0 : 1);
  useEffect(() => {
    g?.(M);
  }, [M, g]);
  useEffect(() => {
    let e = setInterval(() => {
      D(i => {
        if (T(i, N) === N.length - 1) {
          if (!C.current && "failure" !== t) return i + 2;
          j(0);
          clearInterval(e);
        }
        return i + 1;
      });
    }, 1200);
    return () => {
      clearInterval(e);
    };
  }, [t, C, N]);
  useEffect(() => () => {
    g?.(0);
  }, [g]);
  return jsxs("div", {
    className: d()("success_screen--container--balKp", {
      "success_screen--success--Ay-M4": F && "success" === t,
      "success_screen--error--9mlC4": F && "failure" === t
    }),
    "data-testid": "resource-publishing-success-screen",
    children: [jsx("div", {
      className: "success_screen--animatedHeader--NIekS",
      children: jsx(P, {
        animationFrameIndex: O,
        interstitialHeaders: N,
        publishedResourceContent: e,
        publishScopeField: u,
        publishRoleField: m
      })
    }), jsx(LinkPrimitive, {
      href: I,
      newTab: !0,
      trusted: !0,
      children: jsx(_$$P.div, {
        className: "success_screen--previewTileContainer--o1Je3",
        initial: {
          scale: 1
        },
        animate: {
          scale: F ? 1.08 : void 0
        },
        transition: F ? {
          type: "spring",
          stiffness: 562,
          damping: 30,
          mass: 1,
          duration: .4
        } : void 0,
        whileHover: {
          scale: F ? 1.12 : void 0
        },
        children: m ? jsx(_$$T, {
          size: "large",
          hideLikeAndUsage: v,
          publishedResourceContent: F ? e : void 0,
          iconField: i,
          nameField: F ? o : void 0,
          authorField: F ? l : void 0,
          thumbnailStyle: F ? "failure" === t ? L.previewTileImageContainerError : void 0 : L.previewTileImageContainerInterstitial
        }) : jsx(_$$x, {
          size: "large",
          hideLikeAndUsage: b ?? v,
          publishedResourceContent: F ? e : void 0,
          carouselMediaField: s,
          nameField: o,
          authorField: l,
          showThumbnailWithLetterbox: _,
          thumbnailStyle: F ? "failure" === t ? L.previewTileImageContainerError : void 0 : L.previewTileImageContainerInterstitial
        })
      })
    }), F && "success" === t && jsx("div", {
      className: "success_screen--previewTileEmbellishmentOverlay--NTAAk",
      "aria-hidden": !0,
      children: jsx($$S, {})
    })]
  });
}
function P({
  animationFrameIndex: e,
  interstitialHeaders: t,
  publishedResourceContent: i,
  publishScopeField: r,
  publishRoleField: a
}) {
  let s;
  let l = useCurrentUserOrg();
  let d = getCurrentTeam();
  let p = k(e, t);
  i && (s = "publishing_status" in i ? i.publishing_status : FPublicationStatusType.ORG_PRIVATE);
  return jsx(_$$N, {
    children: jsx(_$$P.div, {
      variants: C,
      style: {
        position: "absolute"
      },
      initial: "enter",
      animate: "center",
      exit: p ? void 0 : "exit",
      transition: p ? {
        y: {
          type: "spring",
          stiffness: 562,
          damping: 30,
          mass: 1,
          duration: .4
        }
      } : {
        y: {
          type: "spring",
          stiffness: 300,
          damping: 200,
          duration: .6
        }
      },
      children: jsx(O, {
        header: (() => {
          let i = T(e, t);
          return t[i] ? t[i]() : s === FPublicationStatusType.APPROVED_PUBLIC ? MY.$$public() : s === FPublicationStatusType.ORG_PRIVATE ? MY.$$() : s && isResourcePendingPublishing({
            publishing_status: s
          }) ? MY.inReview() : MY.error();
        })(),
        subheader: (() => {
          if (p) {
            if (s === FPublicationStatusType.APPROVED_PUBLIC) return I_.$$public();
            if (s === FPublicationStatusType.ORG_PRIVATE && r) {
              let e = getFieldValueOrDefault(r, void 0) === ContainerTypeMap.ORG ? l : d;
              return I_.$$(e?.name);
            }
            if (s === FPublicationStatusType.ORG_PRIVATE && a) {
              let e = l?.name || "";
              let t = "";
              i && isWidgetOrPlugin(i) && (t = getCurrentPluginVersion(i)?.name || "");
              return I_.privateExtension({
                resourceName: t,
                orgName: e
              });
            }
            if (s && isResourcePendingPublishing({
              publishing_status: s
            })) {
              let e = getFeatureFlags().cmty_m10n_poll_hub_file_statuses_on_publish && isResourcePendingPublicOrCompliance({
                publishing_status: s
              });
              return jsxs(Fragment, {
                children: [I_.inReview(), e && jsxs(Fragment, {
                  children: [" ", jsx(D, {})]
                })]
              });
            }
            return I_.error();
          }
        })()
      })
    }, e)
  });
}
function O({
  header: e,
  subheader: t
}) {
  return jsxs("div", {
    className: "success_screen--headerSection--56M-i",
    children: [jsx("span", {
      className: "success_screen--header--hsc81",
      children: e
    }), !!t && jsx("span", {
      className: "success_screen--subheader--tWlU9",
      children: t
    })]
  });
}
function D() {
  return jsx(Link, {
    href: "https://help.figma.com/hc/articles/360040035974-Publish-files-to-the-Community#01H8CZTYDFMDWEK19N8TSNXVVC",
    newTab: !0,
    trusted: !0,
    children: getI18nString("community.publishing.learn_more_about_our_guidelines")
  });
}
let L = {
  previewTileImageContainerInterstitial: {
    opacity: "xbyyjgo",
    $$css: !0
  },
  previewTileImageContainerError: {
    filter: "xy712c7",
    $$css: !0
  }
};
export const S = $$N0;
export const X = $$R1;
