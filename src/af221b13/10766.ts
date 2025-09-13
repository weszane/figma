import { jsx, jsxs } from "react/jsx-runtime";
import { lQ } from "../905/934246";
import { c as _$$c } from "../905/320067";
import { renderI18nText } from "../905/303541";
import { Xy } from "../figma_app/578832";
import { cz, i8 } from "../905/14017";
import { L, I } from "../1577/16430";
import { _ as _$$_ } from "../5430/533104";
import { qD, _t } from "../figma_app/471982";
import { y } from "../905/978641";
import { mk } from "../figma_app/777551";
import { Vm } from "../figma_app/427318";
import { TrackedLink } from "../figma_app/831799";
import { ResourceTypeNoComment } from "../figma_app/45218";
import { Ui, Nr, Sl, t3, pq, DD, h_, qr, ME, vR, uK } from "../af221b13/148820";
export function $$y0({
  resource: e,
  title: t,
  description: i
}) {
  switch (Vm(e)) {
    case ResourceTypeNoComment.HUB_FILE:
      return jsx(f, {
        hubFile: e,
        title: t,
        description: i
      }, e.id);
    case ResourceTypeNoComment.WIDGET:
      return jsx(b, {
        widget: e,
        title: t,
        description: i
      }, e.id);
    case ResourceTypeNoComment.PLUGIN:
      return jsx(v, {
        plugin: e,
        title: t,
        description: i
      }, e.id);
    default:
      return null;
  }
}
function f({
  hubFile: e,
  title: t,
  description: i
}) {
  let s = qD(e);
  let r = _t({
    resource: e
  });
  return jsxs("div", {
    className: Ui,
    "data-testid": "collection-resource-card",
    children: [jsxs(TrackedLink, {
      className: Nr,
      to: r,
      trackingEventName: "community_collections",
      trackingProperties: {
        name: "hub_file_card_clicked",
        href: r
      },
      target: "_blank",
      children: [jsx($$j1, {
        title: t ?? s.name,
        description: i ?? s.description
      }), jsx(Xy, {
        className: Sl,
        image: e.thumbnail_url,
        hubFileId: e.id,
        onLoad: lQ,
        alt: s.name,
        resizedThumbnailUrls: e.resized_thumbnail_urls
      })]
    }), jsx(w, {
      resource: e
    })]
  });
}
function b({
  widget: e,
  title: t,
  description: i
}) {
  let a = qD(e);
  let r = _t({
    resource: e
  });
  return jsxs("div", {
    className: Ui,
    "data-testid": "collection-resource-card",
    children: [jsxs(TrackedLink, {
      className: Nr,
      to: r,
      trackingEventName: "community_collections",
      trackingProperties: {
        name: "widget_card_clicked",
        href: r
      },
      target: "_blank",
      children: [jsx($$j1, {
        title: t ?? a.name,
        description: i ?? a.description
      }), jsx(_$$c, {
        srcSet: "",
        src: a.redirect_snapshot_url || a.redirect_icon_url,
        image_type: y.COMMUNITY_HUB_FILE_THUMBNAIL,
        alt: a.name,
        className: Sl,
        imageProps: {
          onLoad: e => e.target.style.opacity = "1"
        }
      })]
    }), jsx(w, {
      resource: e
    })]
  });
}
function v({
  plugin: e,
  title: t,
  description: i
}) {
  let a = qD(e);
  let r = _t({
    resource: e
  });
  return jsxs("div", {
    className: Ui,
    "data-testid": "collection-resource-card",
    children: [jsxs(TrackedLink, {
      className: Nr,
      to: r,
      trackingEventName: "community_collections",
      trackingProperties: {
        name: "plugin_card_clicked",
        href: r
      },
      target: "_blank",
      children: [jsx(_$$c, {
        srcSet: "",
        src: a.redirect_icon_url,
        image_type: y.COMMUNITY_HUB_FILE_THUMBNAIL,
        alt: a.name,
        className: t3,
        imageProps: {
          onLoad: e => e.target.style.opacity = "1"
        }
      }), jsx($$j1, {
        title: t ?? a.name,
        description: i ?? a.description
      })]
    }), jsx(w, {
      resource: e
    })]
  });
}
export function $$j1({
  title: e,
  description: t
}) {
  return jsxs("div", {
    className: pq,
    children: [jsx("div", {
      className: DD,
      children: e
    }), jsx("div", {
      className: h_,
      children: jsx(_$$_, {
        description: t
      })
    })]
  });
}
function w({
  resource: e
}) {
  return jsxs("div", {
    className: qr,
    children: [jsxs("div", {
      className: ME,
      children: [jsx(L, {
        publishers: e.community_publishers?.accepted || []
      }), jsxs("div", {
        className: vR,
        children: [renderI18nText("community.cards.by"), jsx(I, {
          publishers: e.community_publishers?.accepted || [],
          removeByLabel: !0,
          openInNewTab: !0
        })]
      })]
    }), jsxs("div", {
      className: uK,
      children: [jsx(cz, {
        likeCount: e.like_count,
        currentUserLiked: !1
      }), jsx(i8, {
        usageCount: mk(e)
      })]
    })]
  });
}
export const rS = $$y0;
export const tL = $$j1;