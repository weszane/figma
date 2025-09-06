import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import a from "classnames";
import { $M } from "../figma_app/930338";
import { a as _$$a } from "../905/925868";
import { t as _$$t } from "../905/331623";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { n as _$$n, v as _$$v } from "../905/458699";
import { QP } from "../figma_app/487970";
import { l as _$$l } from "../905/152724";
import { Xy } from "../figma_app/578832";
import { A6 } from "../905/350234";
import { Jm } from "../figma_app/387599";
import { qD, _t, JJ, Dm } from "../figma_app/471982";
import { cB, G8, rZ } from "../figma_app/777551";
import { xn } from "../905/934145";
import { o3 } from "../figma_app/831799";
import { FTemplateCategoryType } from "../figma_app/191312";
import { vt, xQ, I0 } from "../figma_app/45218";
import { V } from "../905/480825";
import { dn } from "../figma_app/994403";
import { Wc } from "../figma_app/947784";
import { my } from "../905/14017";
import { BQ, zA, ZW, XO, Sl, nJ, $c, wr, JM, IQ, ZR, A$, HL, gO, zG, r6, $P, nz, Az, mU, QX, JQ, jm, vR } from "../figma_app/583284";
import { A as _$$A } from "../1617/424579";
var s = a;
export function $$O1({
  resource: e,
  showMonetizationBadge: t
}) {
  let r = QP({
    resource: e,
    size: "lg"
  });
  if (t && r) return jsx("div", {
    className: BQ,
    children: r
  });
  let i = _$$n({
    badges: e.badges
  });
  return i ? jsx("div", {
    className: BQ,
    children: jsx(_$$v, {
      children: i
    })
  }) : null;
}
export function $$R0({
  resource: e,
  isMetaHidden: t,
  onIntersectionChange: r,
  onClickOverride: i,
  index: a,
  subView: o
}) {
  let c = Jm();
  let u = qD(e);
  let p = e.client_meta && JSON.parse(e.client_meta)?.background_color;
  let _ = e.thumbnail_is_set;
  e.viewer_mode === FTemplateCategoryType.WHITEBOARD && (p = {
    r: 1,
    g: 1,
    b: 1
  });
  let h = jsx(Xy, {
    image: e.thumbnail_url,
    hubFileId: e.id,
    onLoad: e => e.target.style.opacity = "1",
    alt: u.name,
    resizedThumbnailUrls: e.resized_thumbnail_urls
  });
  let b = _ ? zA : e.viewer_mode === FTemplateCategoryType.WHITEBOARD ? ZW : XO;
  return jsxs("div", {
    className: Sl,
    "data-testid": "hub-file-tile",
    children: [jsx(_$$a, {
      onIntersectionChange: e => r?.(e)
    }), jsx(A6, {
      to: _t({
        resource: e
      }),
      onClick: t => {
        cB("hub_file", e.id, a, c, o);
      },
      onClickOverride: i,
      className: nJ,
      children: jsxs("div", {
        className: s()(b, $c),
        style: {
          backgroundColor: p && `rgb(${255 * p.r}, ${255 * p.g}, ${255 * p.b})`
        },
        children: [h, e.viewer_mode === FTemplateCategoryType.PROTOTYPE && jsx(_$$t, {
          svg: _$$A,
          className: wr,
          useOriginalSrcFills_DEPRECATED: !0,
          fallbackSvg: _$$A
        }), jsx("div", {
          className: JM,
          children: jsx(dn, {
            editorType: JJ(e.viewer_mode)
          })
        }), !t && jsx($$O1, {
          resource: e,
          showMonetizationBadge: !1
        })]
      })
    }), !t && jsx(my, {
      resource: e,
      type: vt.HUB_FILE
    })]
  });
}
export function $$L4({
  resource: e,
  isMetaHidden: t,
  onIntersectionChange: r,
  onClickOverride: i,
  index: a,
  subView: o
}) {
  let d = Jm();
  let c = qD(e);
  return jsxs("div", {
    className: IQ,
    "data-testid": "plugin-tile",
    children: [jsx(_$$a, {
      onIntersectionChange: e => r?.(e)
    }), jsx(A6, {
      to: _t({
        resource: e
      }),
      onClick: t => {
        cB("plugin", e.id, a, d, o);
      },
      onClickOverride: i,
      className: nJ,
      children: jsxs("div", {
        className: s()(XO, $c),
        children: [jsx("div", {
          className: ZR,
          children: jsx(V, {
            plugin: c,
            alt: `Figma plugin "${c.name}"`,
            onLoad: e => e.target.style.opacity = "1",
            loading: "lazy"
          })
        }), !t && jsxs(Fragment, {
          children: [jsx("div", {
            className: A$,
            children: G8(c)
          }), c.manifest?.editorType && jsx("div", {
            className: JM,
            children: jsx(dn, {
              editorType: c.manifest?.editorType
            })
          }), jsx($$O1, {
            resource: e,
            showMonetizationBadge: !1
          })]
        })]
      })
    }), !t && jsx(my, {
      resource: e,
      type: vt.PLUGIN
    })]
  });
}
export function $$P3({
  resource: e,
  isMetaHidden: t,
  onIntersectionChange: r,
  onClickOverride: i,
  index: a,
  subView: o
}) {
  let d = Jm();
  let c = qD(e);
  return jsxs("div", {
    className: HL,
    "data-testid": "widget-tile",
    children: [jsx(_$$a, {
      onIntersectionChange: e => r?.(e)
    }), jsx(A6, {
      to: _t({
        resource: e
      }),
      onClick: t => {
        cB("widget", e.id, a, d, o);
      },
      onClickOverride: i,
      className: nJ,
      children: jsxs("div", {
        className: s()(XO, $c),
        children: [jsx("img", {
          alt: c.name,
          src: c.redirect_snapshot_url ?? void 0,
          onLoad: e => e.target.style.opacity = "1",
          loading: "lazy"
        }), !t && jsxs(Fragment, {
          children: [c.manifest?.editorType && jsx("div", {
            className: JM,
            children: jsx(dn, {
              editorType: c.manifest.editorType
            })
          }), jsx($$O1, {
            resource: e,
            showMonetizationBadge: !1
          })]
        })]
      })
    }), !t && jsx(my, {
      resource: e,
      type: vt.WIDGET
    })]
  });
}
export function $$D2({
  index: e,
  resource: t,
  authedActiveCommunityProfile: r
}) {
  let {
    model,
    resources
  } = t;
  let l = Jm();
  let [d, p] = useState(model.current_user_is_following);
  let _ = d && !model.current_user_is_following ? 1 : 0;
  let m = Dm(model.id, r);
  let g = model.img_urls?.["500_500"] || model.img_urls?.["120_120"];
  return jsxs(o3, {
    to: new xn({
      profileHandle: model.profile_handle
    }).to,
    ...rZ("profile", model.id, e, l),
    className: gO,
    children: [jsx("div", {
      className: zG,
      style: {
        backgroundImage: `url(${g})`
      }
    }), jsxs("div", {
      className: r6,
      children: [jsxs("div", {
        className: $P,
        children: [jsx("span", {
          className: _$$s.ellipsis.noWrap.overflowHidden.$,
          children: model.name
        }), jsx(_$$l, {
          profile: model,
          tooltip: !0
        })]
      }), jsxs("div", {
        className: nz,
        children: ["@", model.profile_handle]
      }), jsxs("div", {
        className: Az,
        children: [!m && jsx(Wc, {
          profileId: model.id,
          onFollowChange: () => p(!d),
          following: d
        }), jsxs("div", {
          className: mU,
          children: [jsx("div", {
            className: QX,
            children: getI18nString("community.follow.followers")
          }), jsx("div", {
            className: JQ,
            children: $M(model.follower_count + _)
          })]
        })]
      })]
    }), jsx("div", {
      className: jm,
      children: resources.length > 0 ? resources.slice(0, 3).map(e => xQ(e) ? jsx("div", {
        className: vR,
        children: jsx("img", {
          alt: qD(e).name,
          src: qD(e).redirect_snapshot_url ?? void 0,
          loading: "lazy"
        })
      }, e.id) : (I0(e), jsx("div", {
        className: vR,
        children: jsx("img", {
          alt: qD(e).name,
          src: e.thumbnail_url || void 0,
          loading: "lazy"
        })
      }, e.id))) : jsx("span", {
        children: renderI18nText("community.profiles.no_resources_published_yet")
      })
    })]
  });
}
export function $$k5({
  resource: e,
  index: t,
  onIntersectionChange: r,
  subView: i
}) {
  return "is_widget" in e ? e.is_widget ? jsx($$P3, {
    index: t,
    resource: e,
    onIntersectionChange: r,
    subView: i
  }) : jsx($$L4, {
    index: t,
    resource: e,
    onIntersectionChange: r,
    subView: i
  }) : jsx($$R0, {
    resource: e,
    index: t,
    onIntersectionChange: r,
    subView: i
  });
}
export const Cv = $$R0;
export const Mr = $$O1;
export const Yw = $$D2;
export const bN = $$P3;
export const cS = $$L4;
export const fz = $$k5;