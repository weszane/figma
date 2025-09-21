import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import a from "classnames";
import { a as _$$a } from "../905/925868";
import { renderI18nText } from "../905/303541";
import { e as _$$e } from "../905/579755";
import { QP, op } from "../figma_app/487970";
import { X as _$$X } from "../figma_app/514836";
import { W as _$$W } from "../905/841666";
import { getCommunityResourcePayment } from "../figma_app/4253";
import { getSearchSessionIdFromSelector, getCurrentQueryId } from "../figma_app/387599";
import { buildCommunityPath, buildCarouselMedia, getCurrentVersion, buildCommunityPathById, TransparentGifDataUri, buildProfileRouteState } from "../figma_app/471982";
import { isResourceHubProfilesEnabled } from "../figma_app/275462";
import { isSubscriptionActive } from "../figma_app/808294";
import { getResourceTaglineOrDescription, getResourceUserCount, trackResourceClickEvent } from "../figma_app/777551";
import { isOrgPrivatePluginOrWidget } from "../figma_app/427318";
import { Ay } from "../905/506641";
import { useResourceRouteParams, useResourceFuid } from "../figma_app/979714";
import { TrackedLink } from "../figma_app/831799";
import { ShelfViewType, hasMonetizedResourceMetadata, hasFreemiumCode, ResourceTypeNoComment } from "../figma_app/45218";
import { V as _$$V } from "../905/480825";
import { FM } from "../5430/773914";
import { AG } from "../figma_app/999312";
import { Z as _$$Z } from "../figma_app/947784";
import { So } from "../figma_app/209680";
import { A6 } from "../905/350234";
import { ResourceType } from "../figma_app/354658";
import { EditorType } from "../figma_app/155287";
import { gz, kJ, GJ } from "../5430/455879";
import { cz, i8 } from "../905/14017";
import { trackEventAnalytics } from "../905/449184";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { P as _$$P, Mf } from "../5430/367577";
import { A as _$$A } from "../figma_app/882803";
import { d as _$$d } from "../5430/772148";
import { I as _$$I2 } from "../5430/292815";
import { dxy, ikM } from "../figma_app/27776";
var l = a;
function M({
  resource: e,
  context: t
}) {
  let r;
  r = t === ShelfViewType.REDESIGNED_PLUGIN_ROW ? gz : e.editor_type === EditorType.FIGJAM || e.editor_type === EditorType.UNIVERSAL ? kJ : GJ;
  return jsx(A6, {
    to: buildCommunityPath({
      path: ResourceType.PLUGIN,
      id: e.id
    }),
    className: r,
    children: renderI18nText("community.view")
  });
}
let V = "plugin_dropdown_preview--pluginMediaContainer--QVFs6";
let W = "plugin_dropdown_preview--pluginImage--UjTg4";
function G({
  carouselImages: e,
  version: t,
  aspectRatio: r
}) {
  let [n, o] = useState(0);
  useEffect(() => {
    var t = setInterval(() => {
      o((n + 1) % e.length);
    }, 1500);
    return () => {
      clearInterval(t);
    };
  });
  let a = useMemo(() => e.map(e => _$$P(e)[0]), [e]);
  return jsx("div", {
    className: V,
    style: styleBuilderInstance.add({
      aspectRatio: r
    }).$,
    children: a.map((e, r) => jsx("img", {
      alt: t.name + " preview",
      className: r === n ? l()(W, "plugin_dropdown_preview--activeImage--efzMn") : l()(W, "plugin_dropdown_preview--inactiveImage--NdowZ"),
      src: e
    }, r))
  });
}
function $({
  plugin: e,
  pluginVideo: t,
  aspectRatio: r
}) {
  let i = getSearchSessionIdFromSelector();
  return jsx("div", {
    className: "plugin_dropdown_preview--pluginVideo--IlluJ",
    style: styleBuilderInstance.add({
      aspectRatio: r
    }).$,
    children: jsx(_$$A, {
      src: Mf(t, e),
      fallbackSrc: t.url,
      useHLS: !0,
      autoPlay: !0,
      muted: !0,
      onEnded: () => {
        trackEventAnalytics("rdp_video_ended", {
          community_resource_id: e.id,
          resouce_type: "plugin",
          searchSessionId: i
        });
      }
    })
  });
}
function z({
  imageUrl: e,
  version: t,
  aspectRatio: r
}) {
  return jsx("div", {
    className: V,
    style: styleBuilderInstance.add({
      aspectRatio: r
    }).$,
    children: jsx("img", {
      className: W,
      src: e,
      alt: t.name + " preview"
    })
  });
}
function Q({
  plugin: e,
  version: t,
  aspectRatio: r,
  video: i
}) {
  if (i) return jsx($, {
    plugin: e,
    pluginVideo: i,
    aspectRatio: r
  });
  let n = buildCarouselMedia(e);
  return n.length > 0 ? jsx(G, {
    carouselImages: n,
    version: t,
    aspectRatio: r
  }) : jsx(z, {
    imageUrl: e.thumbnail_url || "",
    version: t,
    aspectRatio: r
  });
}
function Z({
  plugin: e,
  aspectRatio: t,
  video: r
}) {
  let i = getCurrentVersion(e);
  let n = getResourceTaglineOrDescription(i, void 0, !0);
  let o = e.tags?.slice(0, 3) ?? [];
  return jsxs("div", {
    className: "plugin_dropdown_preview--hoverCard--zzMPg",
    "data-testid": "plugin-dropdown",
    children: [jsx(Q, {
      plugin: e,
      version: i,
      aspectRatio: t,
      video: r
    }), jsxs("div", {
      className: "plugin_dropdown_preview--pluginMeta--uuieP",
      children: [jsx("div", {
        className: "plugin_dropdown_preview--pluginName--qx9M6 text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: jsx("span", {
          className: cssBuilderInstance.ellipsis.noWrap.overflowHidden.$,
          children: i.name
        })
      }), n && jsx("div", {
        className: "plugin_dropdown_preview--pluginTagline--Rs0sq text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: jsx("span", {
          children: n
        })
      })]
    }), o.length > 0 && jsx("div", {
      className: "plugin_dropdown_preview--tagsContainer--QpeL2",
      children: o.map(e => jsx("div", {
        className: "plugin_dropdown_preview--tags--IlWLE text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: e
      }, e))
    })]
  });
}
let J = "plugin_row--pluginRow--lySkC";
let K = "plugin_row--pluginRowV2--hm1ZR";
let ee = "plugin_row--pluginRowBorderOff--11MX3";
let et = "plugin_row--pluginRowWithHover--KJ-CP";
let er = "plugin_row--animatedDropdown--bkyGN dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd";
let es = "plugin_row--animatedDropdownContent--p9W2i";
function ei(e, t, r, s, i) {
  if (e(), !isOrgPrivatePluginOrWidget(r)) {
    let e = !!i && (s.ctrlKey || s.metaKey);
    FM(t, r, e ? {
      openInNewTab: !0,
      sharedRouteParams: i
    } : {
      openInNewTab: !1,
      shouldUpdateUrl: !0
    });
  }
}
function en({
  resource: e,
  trackTileClick: t,
  version: r
}) {
  let i = AG();
  let o = useDispatch();
  let a = useResourceRouteParams();
  let l = buildCommunityPathById({
    resource: e
  });
  return jsx("div", {
    "data-testid": "plugin-icon",
    children: jsx(A6, {
      to: l,
      onClick: t,
      className: "plugin_row--pluginRowImageContainer--mYY6b",
      onClickOverride: i ? r => ei(t, o, e, r, a) : void 0,
      children: jsx(_$$V, {
        className: "plugin_row--pluginRowIcon--cDHTC",
        alt: `Figma plugin "${r.name}"`,
        plugin: {
          ...r,
          redirect_icon_url: r.redirect_icon_url || TransparentGifDataUri
        },
        onLoad: e => e.target.style.opacity = "1",
        onError: e => e.target.src = TransparentGifDataUri,
        loading: "lazy"
      })
    })
  });
}
function eo({
  isPluginRowV2: e,
  isPrivatePlugin: t,
  badge: r,
  currentUserLiked: i,
  resource: n,
  ctaButton: o,
  firstAcceptedProfile: a
}) {
  return jsxs("div", {
    className: l()(e ? "plugin_row--pluginRowMeta--6WiUO" : "plugin_row--pluginRowMetaAndCTA--A-TFN", {
      "plugin_row--pluginRowMetaAndCTAMinWidthConstraint--gqKyH": !e && !t
    }),
    children: [!t && !!r && jsx("div", {
      className: e ? "plugin_row--pluginRowBadgeV2--mvfUF text--fontPos9--naThA text--_fontBase--QdLsd" : "plugin_row--pluginRowBadge--uJ62l text--fontPos9--naThA text--_fontBase--QdLsd",
      children: r
    }), !t && jsxs("div", {
      className: e ? "plugin_row--pluginRowMetricsV2--XYuc4 text--fontPos13--xW8hS text--_fontBase--QdLsd" : "plugin_row--pluginRowMetrics--TZFF7 text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: [jsx(cz, {
        currentUserLiked: i,
        likeCount: n.like_count,
        inPluginRow: !0
      }), jsx(So, {
        disableRepositioning: !0,
        className: l()("plugin_row--toolTip--Uxz1M dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd", "plugin_row--toolTipPositioning--OgVuh"),
        preview: renderI18nText("community.try.used_by_n_people", {
          num: n.unique_run_count
        }),
        children: jsx(i8, {
          usageCount: getResourceUserCount(n),
          inPluginRow: !0
        })
      })]
    }), !e && jsx("div", {
      className: "plugin_row--pluginRowCTA--E5olm",
      children: jsx(Ay, {
        mediaQuery: `(min-width: ${dxy})`,
        children: o
      })
    }), e && t && jsx("div", {
      className: "plugin_row--creatorRowText--wDppz text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: renderI18nText("community.by_publisher", {
        publisher: a?.name
      })
    })]
  });
}
export function $$ea0({
  resource: e,
  onIntersectionChange: t,
  isOrgTeamBrowsing: r,
  index: a,
  layout: T = "oneColumn"
}) {
  let I;
  let k = !!getFeatureFlags().cmty_release_plugin_row_v2;
  let A = !k && "twoColumn" === T;
  let P = AG();
  let O = isResourceHubProfilesEnabled();
  let B = useDispatch();
  let D = getSearchSessionIdFromSelector();
  let F = useResourceRouteParams();
  let U = useResourceFuid() ?? void 0;
  let V = getCurrentQueryId();
  let W = getCurrentVersion(e);
  let G = hasMonetizedResourceMetadata(e);
  let $ = hasFreemiumCode(e);
  let z = getCommunityResourcePayment(e);
  let Q = isSubscriptionActive(z);
  let ea = isOrgPrivatePluginOrWidget(e);
  let el = useRef(null);
  let ec = useMemo(() => r ? jsx("div", {
    ref: el,
    children: jsx(M, {
      resource: e,
      context: ShelfViewType.REDESIGNED_PLUGIN_ROW
    })
  }) : !G || Q || $ ? jsx("div", {
    ref: el,
    children: jsx(_$$d, {
      resource: e,
      context: ShelfViewType.REDESIGNED_PLUGIN_ROW
    })
  }) : jsx("div", {
    ref: el,
    children: jsx(_$$I2, {
      resource: e,
      context: ShelfViewType.REDESIGNED_PLUGIN_ROW
    })
  }), [r, e, G, Q, $]);
  let ed = QP({
    resource: {
      ...e,
      community_resource_payment: z
    },
    validBadges: [op.FREEMIUM, op.OFF_PLATFORM, op.PURCHASED, op.PRICE, ...(k ? [] : [op.FREE])]
  });
  let eu = buildCommunityPathById({
    resource: e
  });
  let em = () => trackResourceClickEvent("plugin", e.id, a, D, V);
  let e_ = (e.community_publishers.accepted ?? [])[0];
  let ep = buildProfileRouteState(e_?.profile_handle ?? "", P, F ?? void 0, U);
  let eh = !!_$$W(e.id, ResourceTypeNoComment.PLUGIN).data?.[0];
  if (e_) {
    let e = jsx(_$$e, {
      adtlClassName: "plugin_row--avatarBoxShadowOverride--MBDpQ",
      entity: e_,
      size: 24
    }, e_.id);
    A || (I = ea ? jsxs("div", {
      className: "plugin_row--privatePluginRowAvatar---pARv",
      children: [e, jsx("div", {
        className: "plugin_row--privatePluginRowAvatarName--3yafW text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: e_.name
      })]
    }) : jsx(So, {
      preview: jsx(_$$Z, {
        author: e_,
        isHoverStateRedesignEnabled: !0
      }),
      className: l()("plugin_row--pluginRowAvatar--S3Edj dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd", er),
      borderRadius: 13,
      allowHoverOnDropdownContents: !1,
      verticalPosition: "above",
      dropdownClassName: es,
      children: jsx(TrackedLink, {
        to: ep.to,
        trackingEventName: "community_hub_profile_preview__profile_visit",
        trackingProperties: {
          profileId: e_.id
        },
        className: "plugin_row--pluginRowAvatarLink--EdvUq",
        target: P && !O ? "_blank" : "_self",
        children: e
      })
    }));
  }
  let ex = function (e) {
    let t = {};
    if (e.carousel_videos && 0 !== Object.keys(e.carousel_videos ?? {}).length) {
      Object.entries(e.carousel_videos).forEach(([e, r]) => {
        t[e] = r;
      });
      return Object.entries(t).sort(([e], [t]) => parseInt(e) - parseInt(t))[0][1];
    }
  }(e);
  let ef = "";
  if (ex) ef = ex.thumbnail_url;else {
    let t = buildCarouselMedia(e);
    ef = t?.length > 0 ? _$$P(t[0])[0] : e.thumbnail_url || "";
  }
  let ey = _$$X(ef) ? "16/9" : "2/1";
  let eg = jsx(So, {
    preview: jsx(Z, {
      plugin: e,
      aspectRatio: ey,
      video: ex
    }),
    borderRadius: 13,
    dropdownClassName: es,
    verticalPosition: "above",
    allowHoverOnDropdownContents: !1,
    className: er,
    children: jsx(en, {
      resource: e,
      trackTileClick: em,
      version: W
    })
  });
  let ev = jsxs("div", {
    className: "plugin_row--pluginRowMetaInfo--mqV-l",
    children: [jsxs(A6, {
      to: eu,
      className: "plugin_row--pluginRowTitleAndDescription--5V-o7",
      onClick: em,
      onClickOverride: P ? t => ei(em, B, e, t, F) : void 0,
      children: [jsx("div", {
        className: "plugin_row--pluginRowTitle--GOOmC text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: W.name
      }), jsx("div", {
        className: "plugin_row--pluginRowDescription--7cthx text--fontPos11--2LvXf text--_fontBase--QdLsd",
        style: ed ? {
          WebkitLineClamp: 1
        } : {},
        children: A ? renderI18nText("community.by_publisher", {
          publisher: e_?.name
        }) : getResourceTaglineOrDescription(W, void 0, !0)
      })]
    }), e_ && jsx(Ay, {
      mediaQuery: `(min-width: ${ikM})`,
      children: I
    }), jsx(eo, {
      isPluginRowV2: k,
      isPrivatePlugin: ea,
      badge: ed,
      currentUserLiked: eh,
      resource: e,
      ctaButton: ec,
      firstAcceptedProfile: e_
    })]
  });
  let eb = jsxs("div", {
    className: "plugin_row--pluginRowMetaAndButtonContainer--YeHE5",
    children: [jsxs("div", {
      className: "plugin_row--pluginRowMetaContainer--So6YH",
      children: [jsxs(A6, {
        to: eu,
        className: "plugin_row--pluginRowTitleAndMeta--gP1vg",
        onClick: em,
        onClickOverride: P ? t => ei(em, B, e, t, F) : void 0,
        children: [jsx("div", {
          className: "plugin_row--pluginRowTitleV2--PGzax text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: W.name
        }), jsx(eo, {
          isPluginRowV2: k,
          isPrivatePlugin: ea,
          badge: ed,
          currentUserLiked: eh,
          resource: e,
          ctaButton: ec,
          firstAcceptedProfile: e_
        })]
      }), jsx("div", {
        className: "plugin_row--pluginRowDescriptionV2--Yk5bM text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: getResourceTaglineOrDescription(W, void 0, !0)
      })]
    }), jsx("div", {
      className: "plugin_row--pluginRowCTAV2--A4oMF",
      children: jsx(Ay, {
        mediaQuery: `(min-width: ${dxy})`,
        children: ec
      })
    })]
  });
  let ej = k ? eb : ev;
  return jsxs("div", {
    "data-testid": "plugin-row",
    children: [jsx(_$$a, {
      onIntersectionChange: e => t?.(e)
    }), P && ea ? jsxs("button", {
      className: l()(k ? K : J, k && "plugin_row--pluginRowAsButton--l32Qa", et, "oneColumn" === T && ee),
      onClick: () => function (e) {
        if (e) {
          let t = e.querySelector("button");
          t && t.click();
        }
      }(el.current),
      children: [eg, ej]
    }) : jsxs("div", {
      className: l()(k ? K : J, P && et, "oneColumn" === T && ee),
      children: [eg, ej]
    })]
  });
}
export const m = $$ea0;