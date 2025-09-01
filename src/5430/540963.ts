import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback, useMemo, PureComponent, createRef, Component } from "react";
import { wA, d4, Ng } from "../vendor/514228";
import a from "../vendor/241899";
import { y3 } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { x as _$$x } from "../905/211326";
import { s as _$$s } from "../905/573154";
import { t as _$$t, tx as _$$tx } from "../905/303541";
import { AG } from "../figma_app/999312";
import { A as _$$A } from "../5430/1650";
import { S as _$$S } from "../905/872825";
import { RA, ed as _$$ed } from "../figma_app/321395";
import { xn, bL, qL } from "../905/934145";
import { to as _$$to, Ce } from "../905/156213";
import { o3, fu } from "../figma_app/831799";
import { M4, IT } from "../905/713695";
import { g3 } from "../figma_app/707808";
import { e0 as _$$e } from "../905/696396";
import { s as _$$s2 } from "../905/608932";
import { w as _$$w } from "../905/230422";
import { xk } from "@stylexjs/stylex";
import { m as _$$m } from "../5430/992484";
import { IT as _$$IT } from "../figma_app/566371";
import { vb, _W, gM } from "../5430/823351";
import { k as _$$k } from "../905/22009";
import { L as _$$L } from "../905/178090";
import { a as _$$a, z as _$$z } from "../figma_app/601188";
import { N$, u8 } from "../figma_app/350203";
import { X as _$$X } from "../5430/966412";
import { Vq } from "../figma_app/342207";
import { buildUploadUrl } from "../figma_app/169182";
import { g as _$$g } from "../905/880308";
import { qc, kt } from "../figma_app/858013";
import { B as _$$B } from "../905/714743";
import { CS } from "../figma_app/275462";
import { Ai, _8, dL, aP } from "../figma_app/530167";
import { YU, M0, Zs, gZ, xj, si, E1 } from "../figma_app/740025";
import { l8, kJ, Cw } from "../figma_app/599979";
import { VP } from "../905/18797";
import { Ro } from "../figma_app/805373";
import { S0, fr } from "../905/52565";
import { A as _$$A2 } from "../svg/35845";
import { g as _$$g2 } from "../905/687265";
import { $M } from "../figma_app/930338";
import { N as _$$N } from "../905/438674";
import { J as _$$J } from "../5132/948584";
import { V as _$$V } from "../1577/311426";
import { A as _$$A3 } from "../905/776343";
import { qU, TI } from "../5430/258075";
import { HD, Co, Qo, qD, ss as _$$ss, kf, af } from "../figma_app/471982";
import { W as _$$W } from "../905/316655";
import { k as _$$k2 } from "../905/443820";
import { O as _$$O } from "../5430/638907";
import { D as _$$D } from "../5430/769256";
import { GS } from "../5430/342380";
import { m1 } from "../5430/297093";
import { oW } from "../905/675859";
import { Z as _$$Z } from "../5430/338876";
import { _ as _$$_ } from "../5430/511077";
import { Om, tv as _$$tv, au } from "../figma_app/979714";
import { W as _$$W2 } from "../5430/484293";
import { lQ } from "../905/934246";
import { getFeatureFlags } from "../905/601108";
import eO from "classnames";
import { sx } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { nR, N_, CY } from "../figma_app/637027";
import { G as _$$G } from "../905/750789";
import { YQ } from "../905/502364";
import { l as _$$l } from "../905/152724";
import { t as _$$t2 } from "../5430/535653";
import { tx as _$$tx2 } from "../figma_app/395505";
import { oB, j7, sf } from "../905/929976";
import { iZ } from "../905/372672";
import { Ib } from "../905/129884";
import { H as _$$H } from "../5430/997712";
import { a as _$$a2 } from "../905/925868";
import { p as _$$p } from "../figma_app/353099";
import { md } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { E as _$$E } from "../905/453826";
import { e as _$$e2 } from "../905/621515";
import { r1 as _$$r } from "../figma_app/545877";
import { N as _$$N2 } from "../figma_app/268271";
import { e9 as _$$e3 } from "../figma_app/692865";
import { M as _$$M } from "../905/152487";
import { EL } from "../905/748636";
import { NJ } from "../figma_app/419216";
import { O9D } from "../figma_app/6204";
import { z as _$$z2 } from "../905/353894";
import { Rs } from "../figma_app/288654";
import { F as _$$F } from "../905/302958";
import { S as _$$S2 } from "../5430/465757";
import { C as _$$C } from "../905/237873";
import { bV, up } from "../figma_app/808294";
import { Vm, yX, qY } from "../figma_app/427318";
import { e as _$$e4 } from "../figma_app/324237";
import { XHR } from "../905/910117";
import { nF } from "../905/350402";
import { RK } from "../figma_app/815170";
import { N as _$$N3 } from "../905/696711";
import { Cu } from "../figma_app/314264";
import { aom, wW7 } from "../figma_app/43951";
import { P5, D6, VU } from "../figma_app/175992";
import { s as _$$s3 } from "../5430/114211";
import { P as _$$P } from "../905/347284";
import { C as _$$C2 } from "../905/180";
import { Ju } from "../905/102752";
import { yX as _$$yX } from "../figma_app/918700";
import { A as _$$A4 } from "../svg/815368";
import { Hl } from "../905/840929";
import { dxy, ZI8, g8m, d8i, wOr } from "../figma_app/27776";
import { A as _$$A5 } from "../1617/230645";
import { Ch } from "../figma_app/45218";
import { Cv, cS, bN } from "../figma_app/795938";
import { A6 } from "../905/350234";
import { vr } from "../figma_app/514043";
import { K as _$$K } from "../905/443068";
import { J as _$$J2 } from "../905/125993";
import { N9 } from "../figma_app/188152";
import { Um } from "../905/848862";
import { lW } from "../figma_app/11182";
import { o1 } from "../figma_app/10554";
import { H as _$$H2 } from "../5430/304640";
import { j as _$$j } from "../905/834956";
import { T as _$$T } from "../5430/373013";
import { N as _$$N4 } from "../figma_app/469468";
import { f as _$$f } from "../figma_app/436731";
import { s as _$$s4 } from "../cssbuilder/589278";
import { A as _$$A6 } from "../5430/728674";
import { ServiceCategories as _$$e5 } from "../905/165054";
import { $D } from "../905/11";
import { ch, td as _$$td, Rq } from "../figma_app/181241";
import { Y9 } from "../figma_app/306946";
import { t as _$$t3 } from "../905/331623";
import { nf, cI, q3, _M } from "../5430/708619";
import { A as _$$A7 } from "../svg/16929";
import { A as _$$A8 } from "../svg/21216";
import { v_ } from "../figma_app/878651";
import { A as _$$A9 } from "../5724/191519";
var s;
var l = a;
function A({
  profile: e,
  filterState: t,
  pageSize: r
}) {
  let s = _$$IT(_$$a.ResourcesPaginatedQuery({
    ...vb({
      resourceType: t.resourceType || _$$L.BrowseResourceTypes.MIXED,
      editorType: t.editorType || _$$k.Editors.ALL,
      price: t.price,
      sortBy: t.sortBy
    }),
    caller: _$$z.PROFILE,
    profileId: e?.id || "",
    pageSize: r
  }), {
    enabled: !!e?.id
  });
  let [{
    data: i,
    status: o
  }] = s;
  let [a, l] = useState(!1);
  useEffect(() => {
    "loaded" === o && l(!0);
  }, [o]);
  return {
    queryResult: s,
    shouldShowFilterControls: _W(i, o, t, a),
    hasEverLoadedResources: a
  };
}
let q = [{
  img: buildUploadUrl("a2bb1033570b997c22c68538a886d3f34669c91f")
}, {
  img: buildUploadUrl("ac3e905b59114fa3a5c5b4312f290fa5fdd3a710")
}, {
  img: buildUploadUrl("89fba9b312a7bff4aa9a2959a3dc0f69eb823cb5")
}, {
  img: buildUploadUrl("47717aa3790e942b36ef213b0f4c5ec296f02db2")
}, {
  img: buildUploadUrl("0684d7f510ae866b6fcb66691bd454363e310d8c")
}];
let Y = [{
  img: buildUploadUrl("49e43aec887df7422ff9643d11465bcdeded548e"),
  color: S0
}, {
  img: buildUploadUrl("c00f8b3e0cd9a66eb8c4ee4e6d307fff82c9ab27"),
  color: S0
}, {
  img: buildUploadUrl("3f772c66c1cddf1d0b6c5f8f41395bcafd135566"),
  color: S0
}, {
  img: buildUploadUrl("960d3a00ab8d8c4db2f27b7814c911ae974c770b"),
  color: fr
}, {
  img: buildUploadUrl("cda2753116908ec0abf57b611934479cebbcdbeb"),
  color: fr
}, {
  img: buildUploadUrl("37f4db88a8104a239f3d761763f8d7e0826d7765"),
  color: fr
}];
let X = function({
  profile: e,
  onImageUploaded: t
}) {
  let r = useRef(null);
  let s = wA();
  let a = d4(e => e.loadingState);
  let l = Ai.loadingKeyForPayload({
    profileId: e.id
  });
  let c = VP(a, l);
  let d = useCallback(() => {
    r.current?.click();
  }, []);
  let u = useCallback(r => {
    null != r && s(Ai({
      profileId: e.id,
      file: r,
      onSuccessCallback: t
    }));
  }, [s, t, e.id]);
  let p = useCallback(async () => {
    try {
      let e = r.current?.files;
      if (!e || 0 === e.length || !e[0]) throw Error("File not found");
      let t = e[0];
      YU(t);
      let s = await l8(URL.createObjectURL(t));
      if (s.width > M0 || s.height > Zs) throw Error(_$$t("community.profiles.cover_image_must_be_less_than_dimensions", {
        PROFILE_COVER_IMAGE_MAX_WIDTH: M0,
        PROFILE_COVER_IMAGE_MAX_HEIGHT: Zs
      }));
      if (s.width < gZ || s.height < xj) throw Error(_$$t("community.profiles.cover_image_must_be_at_least_dimensions", {
        PROFILE_COVER_IMAGE_MIN_WIDTH: gZ,
        PROFILE_COVER_IMAGE_MIN_HEIGHT: xj
      }));
      u(t);
    } catch (e) {
      s(_$$s.error(e.message));
    }
    r.current && (r.current.value = "");
  }, [s, u]);
  return jsxs(Fragment, {
    children: [jsx("input", {
      type: "file",
      accept: "image/*",
      ref: r,
      onChange: p,
      style: {
        display: "none"
      }
    }), jsx(_$$B, {
      svg: _$$A2,
      className: "profile_header--uploadIcon--FFtoL",
      onClick: d
    }), c && jsx(qc, {})]
  });
};
function J({
  profile: e,
  avatarSize: t = 96
}) {
  let r = AG();
  let s = CS();
  let o = si(e) && !r;
  let [a, l] = useState(_$$g());
  let c = useCallback(() => {
    l(_$$g());
  }, []);
  let d = r ? Vq.large : void 0;
  let u = useMemo(() => e.redirect_cover_image_url ? {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    backgroundImage: `url(${e.redirect_cover_image_url}?${a})`,
    borderRadius: d
  } : {
    ...function(e, t) {
      if (null == e || !e.id) return;
      let r = e.id.length >= 4 ? e.id.slice(e.id.length - 4) : "0";
      if (t) {
        let e = q[parseInt(r) % q.length];
        if (!e) return;
        return {
          backgroundImage: `url(${e.img})`,
          backgroundColor: void 0
        };
      }
      {
        let e = Y[parseInt(r) % Y.length];
        if (!e) return;
        return {
          backgroundImage: `url(${e.img})`,
          backgroundColor: e.color
        };
      }
    }(e, s),
    borderRadius: d
  }, [e, a, d, s]);
  return jsxs("div", {
    className: r ? "profile_header--profileHeaderContainerInResourceHub--Qz9Ng profile_header--profileHeaderContainer--C-0mY" : "profile_header--profileHeaderContainer--C-0mY",
    style: u,
    children: [jsx("div", {
      className: r ? "profile_header--profileHeaderAvatarContainerInResourceHub--2PH9V profile_header--profileHeaderAvatarContainer--1REx-" : "profile_header--profileHeaderAvatarContainer--1REx-",
      children: jsx(Ro, {
        entity: {
          ...e,
          img_url: e?.img_urls["500_500"] || e?.img_url || void 0
        },
        size: t,
        className: "profile_header--avatarBackground--5XTWL"
      })
    }), o && jsx(X, {
      profile: e,
      onImageUploaded: c
    })]
  }, e?.cover_image_path);
}
function ea(e) {
  return HD.test(e) ? `https://twitter.com/${e}` : e;
}
function el(e) {
  return qU(Co.test(e) ? `https://www.instagram.com/${e}` : e);
}
function ec(e) {
  return qU(ea(e));
}
function eu({
  href: e
}) {
  return jsx(_$$N.Button, {
    "aria-label": _$$t("community.profiles.visit_website"),
    href: e,
    newTab: !0,
    variant: "secondary",
    children: jsx(_$$J, {})
  });
}
function em({
  href: e
}) {
  return jsx(_$$N.Button, {
    "aria-label": _$$t("community.profiles.visit_x_twitter_profile"),
    href: e,
    newTab: !0,
    variant: "secondary",
    children: jsx("div", {
      className: "xvy4d1p xxk0z11 x78zum5 x6s0dn4 xl56j7k",
      children: jsx(_$$A3, {
        width: 12,
        height: 12
      })
    })
  });
}
function e_({
  profile: e
}) {
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x1v2ro7d",
    children: [e.website && jsx(eu, {
      href: function(e) {
        try {
          return new URL(e).href;
        } catch (t) {
          return `https://${e}`;
        }
      }(e.website)
    }), e.twitter && jsx(em, {
      href: ea(e.twitter)
    })]
  });
}
function ep({
  profile: e
}) {
  let t = new xn({
    profileHandle: e.profile_handle
  });
  return jsx(_$$N.Button, {
    "aria-label": _$$t("community.profiles.view_complete_profile"),
    href: t.href,
    iconPrefix: jsx(_$$V, {}),
    newTab: !0,
    variant: "secondary",
    children: _$$t("community.profiles.view_complete_profile")
  });
}
function eh({
  profile: e
}) {
  let t = d4(e => e.authedActiveCommunityProfile);
  let r = t?.id === e?.id;
  let s = e.website || e.twitter;
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x1v2ro7d",
    children: [s && jsx(e_, {
      profile: e
    }), !r && jsx(_$$W, {
      profile: e
    }), r && jsx(ep, {
      profile: e
    })]
  });
}
function ex({
  profile: e
}) {
  let t = $M(e.follower_count);
  let r = $M(e.following_count);
  let s = e.description || "";
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1nfngrj",
    children: [jsx("div", {
      ...xk(ef.profileName),
      children: e.name
    }), jsx("div", {
      ...xk(ef.profileDescription),
      children: s
    }), jsxs("div", {
      className: "x78zum5 x6s0dn4 x1nfngrj",
      children: [jsx("span", {
        ...xk(ef.profileStat),
        children: _$$tx("community.profiles.follower_count", {
          followerCount: t,
          formattedFollowerCount: t
        })
      }), jsx("div", {
        className: "x1i1rx1s x170jfvy xbpqucl"
      }), jsx("span", {
        ...xk(ef.profileStat),
        children: _$$tx("community.profiles.following_count", {
          followingCount: r
        })
      })]
    }), jsx("div", {
      className: "x7hzu26",
      children: jsx(eh, {
        profile: e
      })
    })]
  });
}
let ef = {
  profileName: {
    ..._$$g2.textHeadingMedium,
    marginTop: "x1bz8wuu",
    $$css: !0
  },
  profileDescription: {
    ..._$$g2.textBodyMedium,
    color: "x1n0bwc9",
    $$css: !0
  },
  profileStat: {
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  }
};
function eI({
  isActiveProfile: e
}) {
  let t = buildUploadUrl("8b7a937ff662171bfc1bb88ac6c2803aa6434608");
  let r = function() {
    let e = AG();
    let t = Om();
    let r = _$$tv() ?? void 0;
    return e && t ? new au({
      ...t,
      tab: N$.COMMUNITY
    }, r) : new _$$_(r);
  }();
  return jsxs("div", {
    ...xk(_$$Z.container),
    children: [jsx("div", {
      ...xk(_$$Z.assetContainer),
      children: jsx(oW, {
        ...xk(_$$Z.asset),
        src: t,
        alt: _$$t("community.profiles.you_don_t_have_any_resources_yet"),
        loading: "lazy"
      })
    }), jsx("div", {
      ...xk(_$$Z.title),
      children: e ? _$$t("community.profiles.you_don_t_have_any_resources_yet") : _$$t("community.profiles.nothing_published_yet")
    }), jsx("div", {
      ...xk(_$$Z.description, e && eN.secondaryTextColor),
      children: e ? _$$tx("community.profiles.getting_started_easy", {
        learnLink: jsx(_$$N, {
          href: "https://help.figma.com/hc/articles/360040035974-Publish-files-to-the-Figma-Community",
          newTab: !0,
          children: _$$t("community.profiles.learn_how_to_publish_link")
        })
      }) : jsx(o3, {
        className: "x1ypdohk",
        to: r.to,
        children: _$$t("community.profiles.see_whats_being_created_in_figma")
      })
    })]
  });
}
let eN = {
  secondaryTextColor: {
    color: "x1n0bwc9",
    $$css: !0
  }
};
function eE({
  filterState: e,
  isActiveProfile: t,
  containerRef: r,
  queryResult: s,
  numTilesPerRow: n
}) {
  let o = AG();
  let [{
    data: a,
    status: l,
    hasNextPage: c,
    isFetchingNextPage: d
  }, {
    fetchNextPage: u
  }] = s;
  let {
    trackResourceImpression
  } = GS({
    extraProperties: {
      resourceType: e.resourceType,
      tab: "profile"
    }
  });
  let _ = "loading" === l;
  return _ || a?.length !== 0 || e.editorType !== _$$k.Editors.ALL || e.resourceType !== _$$L.BrowseResourceTypes.MIXED ? jsxs("div", {
    children: [jsx(_$$O, {
      resourcesLoading: _,
      totalResources: a || [],
      filterState: e,
      numTilesPerRow: n,
      hasNextPage: !!c,
      trackResourceImpression,
      emptyResourceStateQuery: m1(e.editorType || _$$k.Editors.ALL),
      customLoadingView: o ? jsx("div", {
        className: "x78zum5 xl56j7k x6s0dn4 x1bz8wuu",
        children: jsx(_$$k2, {})
      }) : void 0,
      skipResourceLimit: !0
    }), c && jsx(_$$D, {
      containerRef: r,
      useInfiniteScroll: o,
      fetchNextPage: u,
      isFetchingNextPage: !!d,
      hasNextPage: !!c
    })]
  }) : jsx(eI, {
    isActiveProfile: t
  });
}
function eR({
  filterState: e,
  onFilterUpdate: t,
  isActiveProfile: r,
  shouldShowFilterControls: s = !0
}) {
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x1qughib x6s0dn4",
    children: [jsx("div", {
      ...xk(ek.resourcesHeaderTitle),
      children: r ? _$$t("community.profiles.contributions") : _$$t("community.profiles.resources")
    }), s && jsx(_$$W2, {
      context: gM.PROFILE,
      filterState: e,
      onUpdate: t,
      showEditorFilter: !0,
      showResourceTypeFilter: !0,
      showPriceFilter: !1,
      allowMixedResourceType: !0
    })]
  });
}
let ek = {
  resourcesHeaderTitle: {
    ..._$$g2.textBodyLarge,
    $$css: !0
  }
};
function eA({
  profile: e
}) {
  let t = d4(e => e.authedActiveCommunityProfile);
  let r = t?.id === e?.id;
  let s = _$$X();
  let {
    filterState,
    handleFilterUpdate
  } = _$$m();
  let {
    shouldShowFilterControls,
    queryResult
  } = A({
    profile: e,
    filterState,
    pageSize: u8
  });
  return jsx("div", {
    className: "x78zum5 xdt5ytf x1fwvi78 xzc32ve xrsdzbr",
    ref: s.sizeRef,
    children: e ? jsxs(fu, {
      name: _$$e.RESOURCE_HUB_PROFILE,
      properties: {
        handle: e.profile_handle,
        profileId: e.id
      },
      children: [jsxs("div", {
        className: "x78zum5 xdt5ytf x1nfngrj",
        children: [jsx("div", {
          className: "x1rm44br xug08bp",
          children: jsx(J, {
            profile: e,
            avatarSize: 64
          })
        }), jsx(ex, {
          profile: e
        })]
      }), jsxs("div", {
        className: "x78zum5 xdt5ytf x1nfngrj",
        children: [jsx(eR, {
          filterState,
          onFilterUpdate: handleFilterUpdate,
          isActiveProfile: r,
          shouldShowFilterControls
        }), jsx(eE, {
          filterState,
          profile: e,
          numTilesPerRow: s.numberOfTiles,
          isActiveProfile: r,
          containerRef: s.sizeRef,
          queryResult
        })]
      })]
    }) : null
  });
}
var eB = eO;
function eY() {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "monetization_metrics_tab_onboarding_modal--title--IfgQI text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: _$$t("community.seller.profiles.check_out_your_stats")
    }), jsx("div", {
      className: "monetization_metrics_tab_onboarding_modal--description--2j8hj",
      children: _$$t("community.seller.profiles.added_some_metrics")
    })]
  });
}
let eX = "metrics_tab_onboarding_key";
let eK = "community_hub_view_bar--stickyHeaderIsSticky--jlnEf";
class e0 extends PureComponent {
  render() {
    return jsx("div", {
      className: `community_hub_view_bar--viewBar--T8-MS ${this.props.className || ""}`,
      children: this.props.children
    });
  }
}
let e1 = Ng(e => ({
  user: e.user || null
}))(e0);
class e4 extends PureComponent {
  constructor() {
    super(...arguments);
    this.headerContentRef = createRef();
    this.onIntersectionChange = e => {
      this.node && (e.isIntersecting ? this.node.classList.remove(eK) : e.boundingClientRect.y < window.innerHeight && this.node.classList.add(eK));
    };
  }
  render() {
    return jsxs("div", {
      className: ["community_hub_view_bar--container--PBrf3", this.props.user ? "community_hub_view_bar--viewBarSignedInSticky--swRMi" : "community_hub_view_bar--viewBarSignedOutSticky--fpGkz"].join(" "),
      ref: e => this.node = e,
      children: [jsx(_$$a2, {
        onIntersectionChange: this.onIntersectionChange,
        className: this.props.user ? "community_hub_view_bar--scrollSentinelSignedIn--u73PI" : "community_hub_view_bar--scrollSentinelSignedOut--9xL9d"
      }), jsx(e1, {
        children: jsx("div", {
          ref: this.headerContentRef,
          children: this.props.children
        })
      })]
    });
  }
}
let tn = _$$r(_$$e3);
function to({
  onboardingKey: e
}) {
  let t = md(tn);
  let r = _$$e2({
    overlay: O9D,
    priority: _$$N2.SECONDARY_MODAL
  }, [t]);
  _$$h(() => {
    r.show({
      canShow: e => !e
    });
  });
  _$$E(r.uniqueId, "profile-metrics-tab-clicked", () => {
    r.isShowing && r.complete();
  });
  return jsx(_$$M, {
    isShowing: r.isShowing,
    userFlagOnShow: _$$e3,
    children: jsx(fu, {
      name: "Community monetization creator dashboard onboarding",
      children: jsx(NJ, {
        targetKey: e,
        width: 300,
        topPadding: 16,
        shouldCenterArrow: EL.FALLBACK,
        dismissModal: r.complete,
        children: jsx(eY, {})
      })
    })
  });
}
let tg = nF(async (e, t, {
  loadingKey: r
}) => {
  try {
    let s = XHR.post("/api/community/seller/stripe_dashboard");
    _$$N3(s, e, r);
    let i = await s;
    if (!i?.data?.meta) {
      t?.callback(!1);
      return;
    }
    let n = i.data.meta;
    e.dispatch(RK({
      rawInput: n
    }));
    setTimeout(() => {
      t?.callback(!0);
    }, 1e3);
  } catch (e) {
    t?.callback(!1);
  }
});
let tE = Ju(function() {
  let e = wA();
  let t = iZ();
  let [r, s] = useState([]);
  let [a, l] = useState(!0);
  let [c, d] = useState(!0);
  let [u, m] = useState(!1);
  let [p, h] = useState(!1);
  let x = useRef(null);
  _$$h(() => {
    _$$C2.getCmtyCreatorPayoutStatements({
      userId: t?.id
    }).then(({
      data: e
    }) => {
      l(!1);
      s(e.meta);
    }).catch(() => {
      e(_$$F.enqueue({
        type: "get-payout-statements-error",
        message: _$$t("community.seller.payout_statement_error"),
        error: !0
      }));
    });
  });
  let f = e => new Date(e.year, e.month - 1).toLocaleDateString(void 0, {
    year: "numeric",
    month: "long"
  });
  let y = "creator_payout_statements_modal--scrollContainer--8j6P4";
  p && (c || (y += " creator_payout_statements_modal--topBorder--OHBCp"), u || (y += " creator_payout_statements_modal--bottomBorder--tNtIc"));
  return jsx(_$$yX, {
    title: _$$t("community.seller.community_payout_statements"),
    titleClassName: "creator_payout_statements_modal--title--t9wed",
    confirmText: _$$t(0 === r.length ? "general.got_it" : "general.done"),
    onConfirm: lQ,
    hideConfirmationTitle: !0,
    hideCancel: !0,
    children: a ? jsx("div", {
      className: "creator_payout_statements_modal--loadingSpinner--HMTTZ",
      children: jsx(kt, {})
    }) : jsxs("div", {
      children: [0 === r.length && jsx("div", {
        children: _$$tx("community.seller.no_payout_statements_yet")
      }), r.length > 0 && jsxs(Fragment, {
        children: [jsx("div", {
          children: _$$tx("community.seller.click_to_download_statements")
        }), jsx(_$$P, {
          className: y,
          ref: x,
          onCanScrollChange: e => {
            h(e);
          },
          onScroll: (e, t) => {
            d(0 === e);
            m(e + t.trackHeight >= t.scrollHeight);
          },
          children: r.map(e => jsxs("a", {
            className: "creator_payout_statements_modal--payoutStatementRow--4fDH3",
            href: e.signed_s3_url,
            download: `payout_statement_${e.year}_${e.month}.csv`,
            children: [jsx(_$$B, {
              svg: _$$A4
            }), f(e)]
          }, `payout-statement-${e.year}-${e.month}`))
        })]
      })]
    })
  });
}, "CreatorPayoutStatementsModal");
let tR = "profile_resources_grid--tabContainer--UsmoU";
let tk = "profile_resources_grid--tabLink--8x9Of text--fontPos14--OL9Hp text--_fontBase--QdLsd";
let tA = "profile_resources_grid--tabBadge--l97Nx";
let tP = "profile_resources_grid--labelBadgeContainer--gc9j0";
let tM = "profile_resources_grid--selected--6CtGL";
let tO = "profile_resources_grid--newBadge--LOtSf";
let tB = "profile_resources_grid--profileData--yzCa5 text--fontPos13--xW8hS text--_fontBase--QdLsd";
let tD = "profile_resources_grid--profileDataReadOnly--Juje2 profile_resources_grid--profileData--yzCa5 text--fontPos13--xW8hS text--_fontBase--QdLsd";
let tF = "profile_resources_grid--followsData--WkXSx";
let tH = "profile_resources_grid--followsDataClickable--PHNwr";
let tU = "profile_resources_grid--followsDataCount--MoS2I";
let tV = "profile_resources_grid--loadingContainer--hsPEQ";
let tW = "profile_resources_grid--profileResourcesGridOuterContainer--ynOxv";
let tG = "profile_resources_grid--profileMetricsStatsOuterContainer--FAXLb";
let t$ = "profile_resources_grid--profileMetricsTabLoadingButtonContent--lkd-l";
let tz = "profile_resources_grid--profileMetricsTabLoadingButton--6tsqO";
let tQ = "profile_resources_grid--profileResourcesGridAndDataContainer--2gQaO";
let tZ = "profile_resources_grid--emptyStateMetricLabel--XqzzA";
let tq = "profile_resources_grid--bannerContainer--eb6mO";
let tY = "profile_resources_grid--stripeDashboardButtonContainer--1DAQE";
let tX = "profile_resources_grid--metricContainer--SuhZ3";
let tJ = "profile_resources_grid--creatorLink--Rmyz- text--fontPos13--xW8hS text--_fontBase--QdLsd";
let tK = "profile_resources_grid--lockIcon--4VJCL";
let t1 = "profile_metrics_stats--divider--U2a8K";
let t2 = parsePxNumber(dxy);
function t3({
  tooltipText: e
}) {
  return jsx(_$$z2, {
    query: `(min-width: ${t2}px)`,
    children: jsx("span", {
      className: "profile_metrics_stats--infoTooltipContainer---MeEH",
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": e,
      "data-tooltip-max-width": "250",
      children: jsx(_$$B, {
        svg: _$$A5,
        className: "profile_metrics_stats--infoTooltip--lsZkn"
      })
    })
  });
}
function t8({
  valueClassName: e,
  value: t,
  labelClassName: r,
  label: s,
  children: n
}) {
  return jsxs("div", {
    className: tX,
    children: [jsx("div", {
      className: e,
      children: t
    }), jsxs("div", {
      className: "profile_metrics_stats--metricLabelContainer--24AJ-",
      children: [jsx("span", {
        className: r,
        children: s
      }), n]
    })]
  });
}
function t5() {
  return jsxs("div", {
    className: tX,
    children: [jsx("div", {
      className: "profile_resources_grid--emptyStateMetric--ktaw6"
    }), jsx("div", {
      className: tZ
    })]
  });
}
function t9({
  children: e
}) {
  return jsxs("div", {
    className: tG,
    children: [jsx(t5, {}), jsx("div", {
      className: t1
    }), jsx(t5, {}), jsx("div", {
      className: t1
    }), jsx(t5, {}), e]
  });
}
function t7({
  totalViewCount: e,
  metricValueStyle: t,
  metricLabelStyle: r,
  totalPurchases: s,
  totalEarned: n,
  children: o
}) {
  return jsxs("div", {
    className: tG,
    children: [jsx(t8, {
      valueClassName: t,
      value: e,
      labelClassName: r,
      label: _$$t("community.seller.total_views")
    }), jsx("div", {
      className: t1
    }), jsx(t8, {
      valueClassName: t,
      value: s,
      labelClassName: r,
      label: _$$t("community.seller.total_purchases"),
      children: jsx(t3, {
        tooltipText: _$$t("community.seller.total_purchases_includes")
      })
    }), jsx("div", {
      className: t1
    }), jsx(t8, {
      valueClassName: t,
      value: n,
      labelClassName: r,
      label: _$$t("community.seller.total_earned"),
      children: jsx(t3, {
        tooltipText: _$$t("community.seller.all_sales_before_figmas_fees")
      })
    }), o]
  });
}
let rs = "resource_stat_row--rowContainer--rapbF";
let ri = "resource_stat_row--resourceMetadataContainer--bdvI3";
let rn = "resource_stat_row--allStatContainer--vXmae";
let ro = "resource_stat_row--statContainer--gp6KZ";
let ra = "resource_stat_row--statValue--69Rff text--fontPos24--YppUD text--_fontBase--QdLsd";
let rl = "resource_stat_row--statLabel--bgvwH text--fontPos13--xW8hS text--_fontBase--QdLsd";
let rc = "resource_stat_row--verticalDivider--Whn5d";
let rd = "resource_stat_row--textMetadataContainer--oQv9J";
let ru = parsePxNumber(ZI8);
function rm({
  resource: e
}) {
  return Qo(e) ? jsx(Cv, {
    resource: e,
    isMetaHidden: !0
  }) : "plugin" === Vm(e) ? jsx(cS, {
    resource: e,
    isMetaHidden: !0
  }) : jsx(bN, {
    resource: e,
    isMetaHidden: !0
  });
}
function r_({
  resource: e
}) {
  let {
    name,
    created_at
  } = qD(e);
  let s = new Date(created_at).toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  let n = e.monetized_resource_metadata ? bV(e.monetized_resource_metadata) : "";
  let o = `/community/${_$$ss(e)}/${e.id}`;
  return jsxs("div", {
    className: ri,
    children: [jsx("div", {
      className: "resource_stat_row--thumbnailWrapper--M0vtN",
      children: jsx(rm, {
        resource: e
      })
    }), jsx(_$$z2, {
      query: `(min-width: ${ru}px)`,
      children: jsxs("div", {
        className: rd,
        children: [jsxs("div", {
          children: [jsx(A6, {
            to: o,
            className: "resource_stat_row--resourceName--LFWUk text--fontPos14--OL9Hp text--_fontBase--QdLsd",
            children: name
          }), jsx("div", {
            className: "resource_stat_row--publishDate--oDkDH text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: _$$t("community.seller.last_updated_on", {
              date: s
            })
          })]
        }), jsx("div", {
          className: "resource_stat_row--price--1YYVn text--fontPos14--OL9Hp text--_fontBase--QdLsd",
          children: n
        })]
      })
    })]
  });
}
function rp({
  value: e,
  label: t
}) {
  return jsxs("div", {
    className: ro,
    children: [jsx("span", {
      className: ra,
      children: e
    }), jsx("span", {
      className: rl,
      children: t
    })]
  });
}
function rh() {
  return jsxs("div", {
    className: ro,
    children: [jsx("span", {
      className: ra,
      children: jsx("div", {
        className: "profile_resources_grid--emptyStateStatsMetric--qs3QD"
      })
    }), jsx("span", {
      className: rl,
      children: jsx("div", {
        className: tZ
      })
    })]
  });
}
function rx() {
  return jsxs("div", {
    className: ri,
    children: [jsx("div", {
      className: "resource_stat_row--emptyThumbnailWrapper--NNO1Y resource_stat_row--thumbnailWrapper--M0vtN",
      children: jsx(kt, {})
    }), jsx(_$$z2, {
      query: `(min-width: ${ru}px)`,
      children: jsxs("div", {
        className: rd,
        children: [jsxs("div", {
          children: [jsx("div", {
            className: "resource_stat_row--emptyResourceName--gZCwX"
          }), jsx("div", {
            className: "resource_stat_row--emptyPublishDate--WVyqw"
          })]
        }), jsx("div", {
          className: "resource_stat_row--emptyPrice--HlOMG"
        })]
      })
    })]
  });
}
function rf({
  resource: e
}) {
  return jsxs("div", {
    className: rs,
    children: [jsx(rx, {}), jsxs("div", {
      className: rn,
      children: [jsx(rh, {}), jsx("div", {
        className: rc
      }), jsx(rh, {}), jsx("div", {
        className: rc
      }), jsx(rh, {}), jsx("div", {
        className: rc
      }), jsx(rh, {})]
    })]
  });
}
function ry({
  resource: e
}) {
  let t = wA();
  let {
    id,
    is_subscription
  } = e.monetized_resource_metadata;
  let n = Rs(aom, {
    monetizedResourceMetadataId: id
  });
  let a = new vr("usd");
  if ("loading" === n.status) return jsx(rf, {
    resource: e
  });
  if ("loaded" !== n.status || n.errors?.length) {
    t(_$$F.enqueue({
      message: _$$t("community.actions.unable_to_load_stats_for_a_resource"),
      error: !0
    }));
    return jsx(rf, {
      resource: e
    });
  }
  {
    let t = n.data.communityM10nResourceStat;
    let r = {
      monetized_resource_metadata_id: t?.monetizedResourceMetadataId,
      all_time_total_earned: parseInt(t?.allTimeTotalEarned || "0"),
      monthly_total_earned: parseInt(t?.monthlyTotalEarned || "0"),
      num_purchases: parseInt(t?.numPurchases || "0")
    };
    let o = e.view_count || 0;
    return jsxs("div", {
      className: rs,
      children: [jsx(r_, {
        resource: e
      }), jsxs("div", {
        className: rn,
        children: [jsx(rp, {
          label: _$$t("community.seller.views_label", {
            num: o
          }),
          value: o.toLocaleString()
        }), jsx("div", {
          className: rc
        }), is_subscription ? jsx(rp, {
          label: _$$t("community.seller.subscribers_label", {
            num: r.num_purchases
          }),
          value: r.num_purchases.toLocaleString()
        }) : jsx(rp, {
          label: _$$t("community.seller.purchases_label", {
            num: r.num_purchases
          }),
          value: r.num_purchases.toLocaleString()
        }), jsx("div", {
          className: rc
        }), jsx(rp, {
          label: _$$t("community.seller.total_earned"),
          value: a.formatMoney(r.all_time_total_earned)
        }), jsx("div", {
          className: rc
        }), jsx(rp, {
          label: _$$t("community.seller.earned_this_month"),
          value: a.formatMoney(r.monthly_total_earned)
        })]
      })]
    });
  }
}
function rg({
  paidResources: e
}) {
  return getFeatureFlags().cmty_m10n_turn_creator_dash_off ? jsx(Fragment, {}) : jsxs("div", {
    className: "resource_stats_list--resourceStatsListContainer--3Xmb3",
    children: [jsx("p", {
      className: "resource_stats_list--resourceCount--SHJGY text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: _$$tx("community.seller.resources_for_sale", {
        numResources: e.length
      })
    }), e.map((e, t, r) => jsxs("div", {
      className: "resource_stats_list--resourceStatContainer--GxfxK",
      children: [jsx(ry, {
        resource: Ch(e)
      }), t < r.length - 1 && jsx("div", {
        className: "resource_stats_list--divider--F4HpT"
      }, `${e.id}-divider`)]
    }, e.id))]
  });
}
function rv() {
  return jsxs("svg", {
    width: "274",
    height: "133",
    viewBox: "0 0 274 133",
    fill: "none",
    children: [jsx("path", {
      d: "M124.179 65.3591C125.935 65.3591 127.359 63.9355 127.359 62.1795C127.359 60.4235 125.935 59 124.179 59C122.423 59 121 60.4235 121 62.1795C121 63.9355 122.423 65.3591 124.179 65.3591Z",
      fill: "var(--color-icon-disabled, #D9D9D9)"
    }), jsx("path", {
      d: "M149.861 62.1795C149.861 63.9355 148.437 65.3591 146.681 65.3591C144.925 65.3591 143.502 63.9355 143.502 62.1795C143.502 60.4235 144.925 59 146.681 59C148.437 59 149.861 60.4235 149.861 62.1795Z",
      fill: "var(--color-icon-disabled, #D9D9D9)"
    }), jsx("path", {
      d: "M123.092 73.4119V71.9119H120.092V73.4119C120.092 81.9723 127.032 88.9119 135.592 88.9119C144.152 88.9119 151.092 81.9723 151.092 73.4119V71.9119H148.092V73.4119C148.092 80.3154 142.496 85.9119 135.592 85.9119C128.688 85.9119 123.092 80.3154 123.092 73.4119Z",
      fill: "var(--color-icon-disabled, #D9D9D9)"
    }), jsx("path", {
      d: "M232.862 51.8912L214.45 64.9049L240.999 74.0556L209.704 95.1483L208.027 92.6606L234.332 74.931L207.938 65.8337L231.13 49.4413L232.862 51.8912Z",
      fill: "var(--color-icon-disabled, #D9D9D9)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M82.2828 0H148.05L185.283 38.0308V47.1645L188.993 45.3563L196.545 23.4452L218.456 30.9974L239.307 20.8359L249.468 41.6862L271.414 49.2505L263.85 71.1971L274 92.0236L253.173 102.174L245.609 124.12L223.663 116.556L202.812 126.717L192.651 105.867L185.283 103.327V133H82.2828V109.541L31.3574 128.076C27.4651 129.493 23.1613 127.486 21.7446 123.593L16.9646 110.46C16.4165 108.954 17.1953 107.612 18.0665 106.887C18.9369 106.163 20.3041 105.686 21.6406 106.175C24.3362 107.162 27.171 107.252 29.8132 106.29C36.5897 103.824 40.064 94.9827 36.8557 86.168C33.6474 77.3533 25.303 72.8139 18.5265 75.2803C15.8843 76.242 13.7706 78.1332 12.3398 80.6217C11.6304 81.8554 10.2763 82.3687 9.14412 82.3734C8.01076 82.3782 6.55152 81.8507 6.00341 80.3447L1.22339 67.2118C-0.193304 63.3194 1.8136 59.0156 5.70593 57.5989L18.1219 53.0799C18.1237 53.0772 18.1258 53.0738 18.1282 53.0695C18.1529 53.0257 18.1896 52.9235 18.1889 52.7663C18.1882 52.6115 18.1509 52.4593 18.0918 52.3414C18.0341 52.2263 17.9741 52.1774 17.9418 52.1588C14.9078 50.4143 12.5056 47.7738 11.2767 44.3974C8.07639 35.6046 14.0889 25.815 23.9574 22.2231C33.8259 18.6313 44.7244 22.2658 47.9247 31.0587C49.1536 34.435 49.0107 38.0019 47.8079 41.2884C47.7951 41.3234 47.7805 41.3994 47.8104 41.5248C47.8409 41.653 47.9101 41.7936 48.0091 41.9127C48.1096 42.0335 48.2035 42.0882 48.2505 42.1059C48.2551 42.1076 48.2589 42.1089 48.262 42.1098L62.0875 37.0777C65.9798 35.661 70.2836 37.6679 71.7003 41.5603L82.2828 70.6354V0ZM182.283 40.1429V48.6266V56.5V76.5V98V102.293V130H85.2828V108.449V107C85.2828 107 85.2828 102.5 85.2828 98.5V78.8779V3H145.919V40.1429H182.283ZM185.283 50.5018V100.154L194.803 103.435L204.195 122.706L223.466 113.314L243.75 120.306L250.742 100.021L269.989 90.6411L260.609 71.3943L267.601 51.1092L247.316 44.1175L237.924 24.847L218.654 34.2385L198.404 27.2591L191.424 47.5087L185.283 50.5018ZM68.8813 42.5863L82.2828 79.4069V106.348L30.3314 125.257C27.996 126.107 25.4137 124.903 24.5637 122.567L19.7881 109.447C19.789 109.443 19.7903 109.44 19.792 109.435C19.8097 109.388 19.8644 109.294 19.9852 109.194C20.1043 109.095 20.2449 109.025 20.3731 108.995C20.4985 108.965 20.5745 108.98 20.6095 108.992C23.896 110.195 27.4629 110.338 30.8392 109.109C39.6321 105.909 43.2666 95.0105 39.6748 85.1419C36.0829 75.2734 26.2933 69.2609 17.5005 72.4613C14.1241 73.6901 11.4836 76.0923 9.7391 79.1263C9.72052 79.1586 9.67163 79.2186 9.55647 79.2764C9.43858 79.3354 9.28639 79.3728 9.13155 79.3734C8.97443 79.3741 8.87215 79.3374 8.82842 79.3127C8.82414 79.3103 8.82071 79.3082 8.81802 79.3064L4.04247 66.1857C3.19245 63.8503 4.39659 61.268 6.73199 60.418L19.1602 55.8945C20.6662 55.3464 21.1936 53.8871 21.1889 52.7538C21.1841 51.6216 20.6709 50.2675 19.4371 49.5581C16.9487 48.1273 15.0575 46.0135 14.0958 43.3714C11.6294 36.5949 16.1688 28.2505 24.9835 25.0422C33.7981 21.8339 42.6392 25.3082 45.1057 32.0847C46.0673 34.7269 45.9772 37.5617 44.9907 40.2573C44.5015 41.5938 44.9788 42.961 45.7029 43.8314C46.4278 44.7026 47.7698 45.4814 49.2758 44.9333L63.1136 39.8968C65.449 39.0468 68.0312 40.2509 68.8813 42.5863ZM148.919 5.17631L180.215 37.1429H148.919V5.17631Z",
      fill: "var(--color-icon-disabled, #D9D9D9)"
    })]
  });
}
let rb = e => !!e.monetized_resource_metadata;
function rj({
  primaryUserId: e,
  profileId: t
}) {
  let r = wA();
  let s = iZ();
  let [a, l] = useState(!1);
  let [{
    data: c,
    status: d,
    hasNextPage: u,
    isFetchingNextPage: p
  }, {
    fetchNextPage: h
  }] = _$$IT(_$$a.ResourcesPaginatedQuery({
    resourceType: yX(),
    sortBy: _$$e4.Browse.PUBLISHED_AT,
    caller: _$$z.PROFILE,
    profileId: t,
    price: _$$C.PAID,
    pageSize: 30,
    includeContent: !0
  }));
  useEffect(() => {
    !p && u && h();
  }, [p, u, h]);
  let [x, f] = useState(!1);
  let y = Rs(wW7, {
    userId: e
  });
  let v = () => {
    f(!0);
    r(_$$to({
      type: _$$s3,
      data: {
        setupStripeCallback: e => {
          l(!1);
          f(!1);
          e || r(_$$s.error(_$$t("community.seller.unable_to_launch_stripe_onboarding_please_check_your_details")));
        }
      }
    }));
  };
  let b = () => {
    l(!0);
    Cu({
      user_id: s.id
    }, "stripe_dasbhboard_link_clicked");
    r(tg({
      callback: e => {
        l(!1);
        e || r(_$$s.error(_$$t("community.seller.unable_to_open_stripe_dashboard")));
      }
    }));
  };
  function j() {
    return s?.stripe_account_status === P5.ENABLED || s?.stripe_account_status === P5.DISABLED ? jsxs("div", {
      className: tY,
      children: [jsx("button", {
        className: "profile_resources_grid--stripeDashboardButton--LHyS8 profile_resources_grid--stripeSetupButton--HNei8 profile_resources_grid--stripeSetupButtonDisabled--EUiQo text--fontPos13--xW8hS text--_fontBase--QdLsd",
        onClick: b,
        children: jsxs("div", {
          className: t$,
          children: [a && jsx("div", {
            className: tz,
            children: jsx(kt, {
              shouldMatchTextColor: !0
            })
          }), _$$tx("community.seller.view_stripe_dashboard")]
        })
      }), jsx("button", {
        className: "profile_resources_grid--blueLink--WjRaq blue_link--blueLink--9rlnd",
        onClick: () => {
          r(_$$to({
            type: tE,
            data: {}
          }));
        },
        children: _$$tx("community.seller.view_payout_statements")
      })]
    }) : jsxs("div", {
      className: tY,
      children: [jsx("button", {
        className: "profile_resources_grid--stripeSetupButton--HNei8 profile_resources_grid--stripeSetupButtonDisabled--EUiQo text--fontPos13--xW8hS text--_fontBase--QdLsd",
        disabled: a,
        onClick: v,
        children: jsxs("div", {
          className: t$,
          children: [a && jsx("div", {
            className: tz,
            children: jsx(kt, {
              shouldMatchTextColor: !0
            })
          }), jsx("div", {
            children: w
          })]
        })
      }), jsx("div", {
        className: "profile_resources_grid--creatorAgreement--seV1h text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: C
      })]
    });
  }
  let w = _$$tx("community.seller.set_up_stripe");
  let C = _$$tx("community.seller.agree_to_figma_terms_of_service", {
    link: Hl
  });
  a ? w = _$$tx("community.seller.stripe_loading_text") : s?.stripe_account_status === P5.STARTED_ONBOARDING && (w = _$$tx("community.seller.finish_stripe_setup_button"));
  let L = "profile_resources_grid--metricValue--w627p text--fontPos48--H177Q text--_fontBase--QdLsd";
  let T = "profile_resources_grid--metricLabel--1bOis text--fontPos13--xW8hS text--_fontBase--QdLsd";
  let I = _$$tx("community.seller.resource_metrics_coming_soon");
  let E = _$$tx("community.seller.working_on_bringing_you_more_in_depth_metrics");
  s?.stripe_account_status !== P5.ENABLED && (L = "profile_resources_grid--metricValueDisabled--mYlXF profile_resources_grid--metricValue--w627p text--fontPos48--H177Q text--_fontBase--QdLsd", T = "profile_resources_grid--metricLabelDisabled--dTvu- profile_resources_grid--metricLabel--1bOis text--fontPos13--xW8hS text--_fontBase--QdLsd");
  let S = "loaded" === d ? (c || []).map(e => qY(e)).filter(e => void 0 !== e).filter(rb) : [];
  let R = S.length > 0;
  let A = S.reduce((e, t) => e + (t.view_count || 0), 0);
  I = _$$tx("community.seller.youre_all_set_up_to_sell_on_community");
  E = s?.cmty_seller_capabilities?.includes(D6.FILE) ? _$$tx("community.seller.to_publish_your_first_resource") : _$$tx("community.seller.to_publish_your_first_extension");
  s?.stripe_account_status !== P5.ENABLED && (I = _$$tx("community.seller.resources_youre_selling_will_appear_here"), E = _$$tx("community.seller.well_show_you_stripe_metrics"));
  return jsxs("div", {
    className: "profile_resources_grid--profileMetricsTabOuterContainer--d-PPR",
    children: [jsx("div", {
      className: "profile_resources_grid--stripeBannerContainer--xRX1g",
      children: jsx(_$$S2, {
        isFirstTimeLoading: x
      })
    }), (() => {
      let e = jsx(t9, {
        children: jsx(j, {})
      });
      if (getFeatureFlags().cmty_m10n_turn_creator_dash_off || "loading" === y.status) return e;
      if ("loaded" !== y.status || y.errors?.length) {
        r(_$$F.enqueue({
          message: _$$t("community.actions.unable_to_load_creator_stats"),
          error: !0
        }));
        return e;
      }
      {
        let e = y.data.userMonetizationMetadata?.stripeCmtyCreatorStatsMeta;
        let t = {
          num_purchases: e?.numPurchases || e?.num_purchases || 0,
          all_time_total_earned: e?.allTimeTotalEarned || e?.all_time_total_earned || 0
        };
        return jsx(t7, {
          totalViewCount: A,
          metricValueStyle: L,
          metricLabelStyle: T,
          totalPurchases: t[VU.NUM_PURCHASES],
          totalEarned: up(t[VU.ALL_TIME_TOTAL_EARNED]),
          children: jsx(j, {})
        });
      }
    })(), jsx("div", {
      className: "profile_resources_grid--divider--GZynB"
    }), R ? jsx(rg, {
      paidResources: S
    }) : jsxs("div", {
      className: "profile_resources_grid--emptyStateContainer--EJug9",
      children: [jsx("div", {
        className: "profile_resources_grid--profileMetricsStatsEmptyStateIcon--DvLAr",
        children: jsx(rv, {})
      }), jsx("div", {
        className: "profile_resources_grid--emptyStateHeader--c9srx text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: I
      }), jsx("div", {
        className: "profile_resources_grid--emptyStateText--oEJHa",
        children: E
      })]
    })]
  });
}
var rR = (e => (e.COPY_LINK = "Copy profile link", e.RESTRICT_USER = "Restrict user", e.UNRESTRICT_USER = "Unrestrict user", e))(rR || {});
let rk = e => {
  switch (e) {
    case "Copy profile link":
      return _$$t("community.profiles.copy_profile_link");
    case "Restrict user":
      return _$$t("community.profiles.restrict_user");
    case "Unrestrict user":
      return _$$t("community.profiles.unrestrict_user");
    default:
      return "";
  }
};
function rA() {
  let e = wA();
  let t = iZ();
  let r = d4(e => e.dropdownShown?.data?.profile);
  let s = d4(e => e.dropdownShown?.data?.targetRect);
  if (!r) return jsx(Fragment, {});
  let n = r.is_restricted_by_current_user;
  let a = () => {
    e(lW({
      stringToCopy: `${window.location.origin}${bL(r.profile_handle)}`
    }));
  };
  let l = r => {
    e(_8({
      blockedProfileId: r,
      profileId: t?.community_profile_id || "",
      onSuccess: () => {
        e(_$$F.enqueue({
          message: "Restricted this user's comments",
          type: "profile-restricted-change",
          button: {
            text: "Undo",
            action: () => {
              u(r);
            }
          }
        }));
        sx("comment_profile_restricted", {
          restricted_by_profile_id: t?.community_profile_id,
          restricted_profile_id: r,
          entry_point: "profile_page"
        });
      }
    }));
  };
  let c = () => {
    e(_$$to({
      type: _$$H2,
      data: {
        onBlock: () => l(r.id),
        confirmationTitle: `Restrict ${r.name}?`,
        confirmButtonText: "Restrict"
      }
    }));
  };
  let d = r => {
    e(_8({
      blockedProfileId: r,
      profileId: t?.community_profile_id || "",
      onSuccess: () => {
        e(_$$F.enqueue({
          message: "Restricted this user's comments",
          type: "profile-restricted-change",
          button: {
            text: "Undo",
            action: () => {
              u(r);
            }
          }
        }));
        sx("comment_profile_restricted", {
          restricted_by_profile_id: t?.community_profile_id,
          restricted_profile_id: r,
          entry_point: "profile_page"
        });
      }
    }));
  };
  let u = r => {
    e(dL({
      blockedProfileId: r,
      profileId: t?.community_profile_id || "",
      onSuccess: () => {
        e(_$$F.enqueue({
          message: "Unrestricted this user's comments",
          type: "profile-restricted-change",
          button: {
            text: "Undo",
            action: () => {
              d(r);
            }
          }
        }));
        sx("comment_profile_unrestricted", {
          unrestricted_by_profile_id: t?.community_profile_id,
          unrestricted_profile_id: r,
          entry_point: "profile_page"
        });
      }
    }));
  };
  let m = [{
    displayText: rk("Copy profile link")
  }];
  return (t?.community_profile_id && r.entity_type === o1.USER && (n ? m.push({
    displayText: rk("Unrestrict user")
  }) : m.push({
    displayText: rk("Restrict user")
  })), s) ? jsx(_$$j, {
    dispatch: e,
    items: m,
    showPoint: !0,
    parentRect: s,
    onSelectItem: (e, t) => {
      "Copy profile link" === e.displayText ? a() : "Restrict user" === e.displayText ? c() : "Unrestrict user" === e.displayText && u(r.id);
    },
    minWidth: 96
  }) : null;
}
function rP(e) {
  let t = Um();
  let r = useRef(null);
  let s = !!(t && t.type === N9);
  let a = wA();
  let l = useCallback(() => {
    a(oB());
  }, [a]);
  useEffect(() => (window.addEventListener("scroll", l, !1), () => {
    window.removeEventListener("scroll", l, !1);
  }), [l]);
  return jsxs("div", {
    children: [jsx(_$$K, {
      ref: r,
      onClick: s => {
        s.stopPropagation();
        let i = r.current;
        t ? l() : i && a(j7({
          type: N9,
          data: {
            profile: e.profile,
            targetRect: i.getBoundingClientRect()
          }
        }));
      },
      "aria-label": _$$t("community.profiles.profile_actions"),
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("community.profiles.profile_actions")
      },
      children: jsx(_$$J2, {})
    }), s && jsx(rA, {})]
  });
}
rA.displayName = "ProfileMoreActionsDropdown";
rP.displayName = "ProfileMoreActionsButton";
function rO({
  profile: e
}) {
  let t = CS();
  let r = useRef(null);
  let {
    filterState,
    handleFilterUpdate
  } = _$$m();
  let l = d4(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile?.id ?? null : null) === e.id;
  let {
    shouldShowFilterControls,
    queryResult
  } = A({
    profile: e,
    filterState,
    pageSize: 30
  });
  return jsxs("div", {
    className: tW,
    children: [t && shouldShowFilterControls && jsx(_$$T, {
      containerRef: r,
      filterState,
      onUpdate: handleFilterUpdate,
      context: gM.PROFILE,
      size: "sm"
    }), jsx(eE, {
      profile: e,
      filterState,
      isActiveProfile: l,
      containerRef: r,
      queryResult
    })]
  });
}
let r$ = new class {
  constructor() {
    this.CommunityResourceLegacySavesSchemaValidator = ch();
    this.getCommunityLegacyResourceSaves = e => this.CommunityResourceLegacySavesSchemaValidator.validate(({
      xr: t
    }) => t.getPaginated("/api/resource_saves", _$$td.toAPIParameters(e)));
    this.CommunityResourceSavesSchemaValidator = Rq("CommunityResourceSavesSchemaValidator", Y9, null, !0);
    this.PaginatedCommunityResourceSavesQuery = M4.PaginatedQuery({
      fetch: async ({
        pageSize: e
      }, {
        pageParam: t
      }) => {
        try {
          let r = await this.CommunityResourceSavesSchemaValidator.validate(async ({
            xr: r
          }) => await r.getPaginated("/api/community_resource_saves/current_user", _$$td.toAPIParameters({
            pageSize: e,
            cursor: t
          })));
          return {
            data: r.data.meta,
            nextPage: r.data.pagination.nextPage,
            prevPage: r.data.pagination.prevPage
          };
        } catch (e) {
          $D(_$$e5.COMMUNITY, e);
          return e;
        }
      }
    });
    this.CommunityUserResourceInstallsSchemaValidator = ch();
    this.getCommunityUserResourceInstalls = e => this.CommunityUserResourceInstallsSchemaValidator.validate(({
      xr: t
    }) => t.getPaginated("/api/resources/installed/user", _$$td.toAPIParameters(e)));
    this.PaginatedPrivateExtensionInstallsQuery = M4.PaginatedQuery({
      fetch: async ({
        pageSize: e
      }, {
        pageParam: t
      }) => {
        try {
          let r = await this.CommunityUserResourceInstallsSchemaValidator.validate(async ({
            xr: r
          }) => await r.getPaginated("/api/resources/installed/user", _$$td.toAPIParameters({
            pageSize: e,
            cursor: t,
            filterOrgPrivate: !0
          })));
          return {
            data: [...r.data.meta.plugins, ...r.data.meta.widgets],
            nextPage: r.data.pagination.nextPage,
            prevPage: r.data.pagination.prevPage
          };
        } catch (e) {
          $D(_$$e5.COMMUNITY, e);
          return e;
        }
      }
    });
  }
}();
_$$f.byProperty("saved_at", _$$f.BY_DATETIME);
let rz = _$$f.byProperty("saved_at", _$$f.BY_DATETIME);
function rQ() {
  let e = _$$N4(`(max-width: ${g8m})`);
  let [t, r] = useState(!0);
  let [s, o] = useState([]);
  let [{
    data: a,
    status: l,
    hasNextPage: c
  }, {
    fetchNextPage: d
  }] = _$$IT(r$.PaginatedCommunityResourceSavesQuery({
    pageSize: 30
  }));
  let [{
    data: u,
    status: m,
    hasNextPage: _
  }, {
    fetchNextPage: p
  }] = _$$IT(r$.PaginatedPrivateExtensionInstallsQuery({
    pageSize: 30
  }));
  useEffect(() => {
    "loaded" === l && "loaded" === m && (o([...a, ...u].sort(rz)), _ && p(), c && d());
  }, [a, l, c, d, u, m, _, p]);
  useEffect(() => {
    t && "loaded" === l && "loaded" === m && r(!1);
  }, [t, l, m]);
  let {
    trackResourceImpression
  } = GS({
    extraProperties: {
      tab: "saves"
    }
  });
  return jsx("div", {
    className: tV,
    children: jsxs("div", {
      className: tW,
      children: [t || 0 !== s.length ? jsx(_$$A6, {
        resources: s ?? [],
        maxGridDim: e ? {
          cols: 2
        } : {
          cols: 3
        },
        mobileMaxGridDim: {
          cols: 1
        },
        onIntersectionChange: (e, t) => {
          t && trackResourceImpression(e);
        },
        isLoading: t,
        skipResourceLimit: !0
      }) : jsx("div", {
        className: "profile_resources_grid--emptySavesTabContainer--4oQx-",
        children: jsx(rq, {})
      }), jsx("div", {
        className: "profile_resources_grid--loadingMoreContainer--jp4W1 profile_resources_grid--loadingContainer--hsPEQ",
        children: ("loading" === l || "loading" === m) && jsx(kt, {})
      })]
    })
  });
}
function rZ() {
  return jsxs("svg", {
    width: "86",
    height: "126",
    viewBox: "0 0 86 126",
    fill: "none",
    children: [jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M46.1772 97.1417L43 94.6L39.8228 97.1417L38.5735 95.58L43 92.0388L47.4266 95.58L46.1772 97.1417ZM36.6457 99.6835L35.3963 98.1217L29.042 103.205L30.2914 104.767L36.6457 99.6835ZM27.1142 107.309L25.8648 105.747L19.5105 110.83L20.7599 112.392L27.1142 107.309ZM17.5827 114.934L16.3333 113.372L9.97901 118.456L11.2284 120.017L17.5827 114.934ZM8.05125 122.559L6.80185 120.997L3.62469 123.539C2.96993 124.063 2 123.597 2 122.758V118.933H0V122.758C0 125.274 2.90979 126.672 4.87408 125.101L8.05125 122.559ZM0 115.108H2V107.457H0V115.108ZM0 103.632H2V95.9812H0V103.632ZM0 92.156H2V84.5054H0V92.156ZM0 80.6801H2V73.0296H0V80.6801ZM0 69.2043H2V61.5538H0V69.2043ZM0 57.7285H2V50.078H0V57.7285ZM0 46.2527H2V38.6022H0V46.2527ZM0 34.7769H2V27.1263H0V34.7769ZM0 23.3011H2V15.6505H0V23.3011ZM0 11.8253H2V8C2 6.90362 2.29224 5.88157 2.80175 5.00098L1.07063 3.99936C0.389718 5.1762 0 6.54259 0 8V11.8253ZM3.99936 1.07063L5.00097 2.80175C5.88157 2.29224 6.90362 2 8 2H11.8889V0H8C6.54259 0 5.1762 0.389719 3.99936 1.07063ZM15.7778 0V2H23.5556V0H15.7778ZM27.4444 0V2H35.2222V0H27.4444ZM39.1111 0H46.8889V2H39.1111V0ZM50.7778 0V2H58.5556V0H50.7778ZM62.4444 0V2H70.2222V0H62.4444ZM74.1111 0V2H78C79.0964 2 80.1184 2.29224 80.999 2.80175L82.0006 1.07063C80.8238 0.389718 79.4574 0 78 0H74.1111ZM84.9294 3.99936L83.1983 5.00097C83.7078 5.88157 84 6.90362 84 8V11.8253H86V8C86 6.54259 85.6103 5.1762 84.9294 3.99936ZM86 15.6505H84V23.3011H86V15.6505ZM86 27.1264H84V34.7769H86V27.1264ZM86 38.6022H84V46.2527H86V38.6022ZM86 50.078H84V57.7285H86V50.078ZM86 61.5538H84V69.2043H86V61.5538ZM86 73.0296H84V80.6802H86V73.0296ZM86 84.5054H84V92.156H86V84.5054ZM86 95.9812H84V103.632H86V95.9812ZM86 107.457H84V115.108H86V107.457ZM86 118.933H84V122.758C84 123.597 83.0301 124.063 82.3753 123.539L79.1981 120.997L77.9488 122.559L81.1259 125.101C83.0902 126.672 86 125.274 86 122.758V118.933ZM74.7716 120.017L76.021 118.456L69.6667 113.372L68.4173 114.934L74.7716 120.017ZM65.2401 112.392L66.4895 110.83L60.1352 105.747L58.8858 107.309L65.2401 112.392ZM55.7086 104.767L56.958 103.205L50.6037 98.1217L49.3543 99.6835L55.7086 104.767Z",
      fill: "var(--color-icon-tertiary, $figmaFGBlack3Opaque)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M42 49V60H44V49H55V47H44V36H42V47H31V49H42Z",
      fill: "var(--color-icon-tertiary, $figmaFGBlack3Opaque)"
    })]
  });
}
function rq() {
  return jsxs("div", {
    className: _$$s4.flex.itemsCenter.flexColumn.gap16.$,
    children: [jsx(rZ, {}), jsxs("div", {
      className: _$$s4.flex.flexColumn.gap8.alignCenter.$,
      children: [jsx("h2", {
        className: _$$s4.font14.fontMedium.$,
        children: _$$tx("community.saves.no_saves_title")
      }), jsx("p", {
        className: _$$s4.font11.$,
        children: _$$tx("community.saves.no_saves_subtitle")
      })]
    }), jsx(nR, {
      target: "_blank",
      onClick: () => {
        Ay.push("/community");
      },
      children: _$$tx("community.explore_resources")
    })]
  });
}
class r0 extends Component {
  constructor() {
    super(...arguments);
    this.getProfileLink = () => {
      if (this.props.profile && this.props.profile.profile_handle) return `figma.com/@${this.props.profile.profile_handle}`;
      let e = this.props.profile.id;
      return `figma.com/profile/${e}`;
    };
    this.getProfileLinkText = () => {
      let e = this.getProfileLink();
      let t = jsx(N_, {
        href: `https://${e}`,
        className: nf,
        trusted: !0,
        children: e
      });
      return this.props.profile.primary_user_id ? _$$tx("community.profiles.your_profile_is_visible_to_the_public_at", {
        link: t
      }) : this.props.profile.entity_type === o1.TEAM ? _$$tx("community.profiles.your_teams_profile_is_visible_to_the_public_at", {
        link: t
      }) : this.props.profile.entity_type === o1.ORG ? _$$tx("community.profiles.your_organizations_profile_is_visible_to_the_public_at", {
        link: t
      }) : void 0;
    };
  }
  render() {
    return this.props.profile ? jsx("div", {
      className: this.props.className || "",
      children: jsxs("div", {
        className: cI,
        children: [jsx(_$$t3, {
          svg: _$$A7,
          fallbackSvg: _$$A8,
          useOriginalSrcFills_DEPRECATED: !0,
          className: q3
        }), jsx("span", {
          className: _M,
          children: this.getProfileLinkText()
        })]
      })
    }) : null;
  }
}
r0.displayName = "PublicProfileBanner";
let r2 = parsePxNumber(d8i);
let r3 = parsePxNumber(wOr);
function r8(e) {
  let {
    canEdit,
    canSellOnCommunity
  } = e;
  let s = iZ();
  let o = useCallback(() => {
    if (s) return _$$tx2(s);
  }, [s]);
  return s && canEdit ? jsx(Fragment, {
    children: canSellOnCommunity ? jsx("div", {
      role: "link",
      tabIndex: 0,
      onClick: o,
      className: tJ,
      children: _$$tx("community.profiles.contact_creator_support")
    }) : jsx("div", {
      className: "profile_resources_grid--sellOnCommunity--7r6cV",
      children: jsx(CY, {
        href: "https://www.figma.com/community-creators",
        className: tJ,
        target: "_blank",
        trusted: !0,
        children: _$$tx("community.profiles.interested_in_selling_your_resources")
      })
    })
  }) : jsx(Fragment, {});
}
function r5(e) {
  let {
    updateProfile,
    isViewingCurrentUserProfile,
    showFollowsModal
  } = e;
  let n = _$$t2(e.profile.id);
  return n ? jsx(r9, {
    profile: n,
    updateProfile,
    isViewingCurrentUserProfile,
    showFollowsModal
  }) : jsx(Fragment, {});
}
function r9(e) {
  let {
    profile,
    updateProfile,
    isViewingCurrentUserProfile
  } = e;
  let n = si(profile);
  let o = e.profile.name;
  let a = profile.profile_handle || null;
  let l = e => s => {
    e in profile && profile[e] !== s && updateProfile({
      [e]: s
    });
  };
  let c = (n || profile.description) && jsx(TI, {
    value: profile.description || "",
    placeholder: _$$t("community.profiles.add_a_description"),
    className: n ? tB : tD,
    submit: l("description"),
    formatter: qU,
    readOnly: !n,
    maxLength: 160
  });
  let d = (n || profile.location) && jsx(TI, {
    value: profile.location || "",
    placeholder: _$$t("community.profiles.add_a_location"),
    className: n ? tB : tD,
    submit: l("location"),
    readOnly: !n,
    maxLength: 30
  });
  let u = (n || profile.website) && jsx(TI, {
    value: profile.website || "",
    placeholder: _$$t("community.profiles.add_website_url"),
    className: n ? tB : tD,
    submit: l("website"),
    formatter: qU,
    readOnly: !n,
    maxLength: 100
  });
  let m = (n || profile.twitter) && jsx(TI, {
    value: profile.twitter || "",
    placeholder: _$$t("community.profiles.add_x_handle"),
    className: n ? tB : tD,
    submit: l("twitter"),
    formatter: ec,
    readOnly: !n,
    maxLength: 100
  });
  let p = (n || profile.instagram) && jsx(TI, {
    value: profile.instagram || "",
    placeholder: _$$t("community.profiles.add_instagram_handle"),
    className: n ? tB : tD,
    submit: l("instagram"),
    formatter: el,
    readOnly: !n,
    maxLength: 100
  });
  let h = jsx(_$$W, {
    profile,
    trackingProperties: {
      viewingProfileId: profile.id
    }
  });
  let x = $M(profile.follower_count);
  let f = $M(profile.following_count);
  let y = jsxs("div", {
    className: "profile_resources_grid--followsDataContainer--TnbJI",
    children: [jsx("div", {
      className: eB()(tF, {
        [tH]: !0
      }),
      onClick: () => e.showFollowsModal(g3.FOLLOWERS),
      children: _$$tx("community.profiles.follower_count", {
        followerCount: x,
        formattedFollowerCount: jsx("span", {
          className: tU,
          children: x
        })
      })
    }), profile.primary_user_id && jsx("div", {
      className: eB()(tF, {
        [tH]: !0
      }),
      onClick: () => e.showFollowsModal(g3.FOLLOWING),
      children: _$$tx("community.profiles.following_count", {
        followingCount: jsx("span", {
          className: tU,
          children: f
        })
      })
    })]
  });
  let g = jsxs("div", {
    className: "profile_resources_grid--profileDataHandleAndFollow--6kpYs",
    children: [jsxs("div", {
      className: "profile_resources_grid--profileDataHandle--DB20D",
      children: ["@", a]
    }), profile.current_user_is_followed && jsx(v_, {})]
  });
  let v = jsx(rP, {
    profile
  });
  let b = isViewingCurrentUserProfile ? null : jsxs("div", {
    className: "profile_resources_grid--followMoreActionsContainer--uQNdm",
    children: [h, v]
  });
  let w = jsx(r8, {
    canEdit: n,
    canSellOnCommunity: kf(profile)
  });
  return jsxs("div", {
    children: [jsxs("h1", {
      className: "profile_resources_grid--profileDataName--xw46b text--fontPos24Whyte--gYiFz text--_fontBaseWhyte--efAjI",
      children: [jsx(_$$G, {
        truncate: "end",
        text: o,
        className: "profile_resources_grid--profileNameText--WdY6t"
      }), jsx(_$$l, {
        profile,
        tooltip: !0
      })]
    }), a && g, b, c, y, d, u, m, p, w]
  });
}
function r7({
  profile: e,
  tab: t
}) {
  let r = d4(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile?.id : null);
  let s = d4(e => "selectedView" in e ? e.selectedView : null);
  let a = wA();
  let l = r === e.id;
  return (useEffect(() => {
    t !== g3.SAVES || l || Ay.push(bL(e.profile_handle, g3.RESOURCES));
  }, [t, l, s, e.profile_handle, a]), t === g3.METRICS) ? jsx("div", {
    className: tV,
    children: jsx(rj, {
      primaryUserId: e.primary_user_id,
      profileId: e.id
    })
  }) : t === g3.SAVES ? jsx(rQ, {}) : jsx(rO, {
    profile: e
  });
}
function r6({
  profile: e
}) {
  let {
    tabView
  } = RA(xn);
  let r = iZ();
  let n = wA();
  let a = d4(t => E1(e, t));
  let l = d4(t => kJ(t, e));
  let c = d4(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile?.id ?? null : null);
  let d = d4(e => "selectedView" in e ? e.selectedView : null);
  let u = tabView && a ? tabView : g3.RESOURCES;
  return jsx(s.Inner, {
    profileId: e.id,
    profile: e,
    profileTab: u,
    isWithinProfileScope: a,
    currentUser: r,
    communityStatusOnProfile: l,
    authedActiveCommunityProfileId: c,
    dispatch: n,
    currentSelectedView: d
  });
}
function se({
  currentUser: e,
  currentSelectedView: t,
  authedActiveCommunityProfileId: r,
  currentProfile: s,
  dispatch: o
}) {
  let a = _$$S(t?.profileTab, sr);
  useEffect(() => {
    if (s && a) {
      o(_$$to({
        type: _$$w,
        data: {
          currentSelectedView: t,
          profile: s,
          currentUserProfileId: e?.community_profile_id || null,
          authedActiveCommunityProfileId: r,
          dispatch: o
        }
      }));
      return () => {
        o(Ce());
      };
    }
  }, [r, a, s, t, e?.community_profile_id, o]);
  return jsx(_$$x, {
    className: "community_hub_public_profile--loadingContainer--GUi6s",
    isLoading: !s,
    children: () => jsx(fu, {
      name: _$$e.COMMUNITY_HUB_PROFILE,
      properties: {
        handle: s.profile_handle,
        profileId: s.id
      },
      children: jsxs("div", {
        className: e ? "community_hub_public_profile--signedInProfileContainer--8jWX9" : "community_hub_public_profile--signedOutProfileContainer--nIxAf",
        children: [jsxs("div", {
          children: [jsx(J, {
            profile: s
          }), jsx(r6, {
            profile: s
          })]
        }), !y3() && jsx("div", {
          className: "community_hub_public_profile--footerContainer--L38Gh",
          children: jsx(_$$A, {})
        })]
      })
    })
  });
}
(e => {
  class t extends Component {
    constructor() {
      super(...arguments);
      this.updateProfile = e => {
        this.props.dispatch(aP({
          profileId: this.props.profileId,
          ...e
        }));
      };
      this.onFilesPluginsTabClick = () => {
        sx("Profile Resources Tab Clicked", {
          tabName: "resources",
          profileId: this.props.profileId,
          viewingUserId: this.props.currentUser?.id
        });
        Ay.push(bL(this.props.profile.profile_handle, g3.RESOURCES));
      };
      this.onMetricsTabClick = () => {
        sx("Profile Resources Tab Clicked", {
          tabName: "metrics",
          profileId: this.props.profileId,
          viewingUserId: this.props.currentUser?.id
        });
        YQ({
          id: "profile-metrics-tab-clicked"
        });
        Ay.push(bL(this.props.profile.profile_handle, g3.METRICS, this.props.currentUser));
      };
      this.onSavesTabClick = () => {
        YQ({
          id: "cmty-profile-saves"
        });
        sx("Profile Resources Tab Clicked", {
          tabName: g3.SAVES,
          profileId: this.props.profileId,
          viewingUserId: this.props.currentUser?.id
        });
        Ay.push(bL(this.props.profile.profile_handle, g3.SAVES));
      };
      this.showFollowsModal = e => {
        this.props.dispatch(sf({
          ...this.props.currentSelectedView,
          profileTab: e
        }));
      };
    }
    render() {
      let e = jsx(r7, {
        tab: this.props.profileTab,
        profile: this.props.profile
      });
      let t = this.props.profile.primary_user_id && this.props.authedActiveCommunityProfileId === this.props.profile.id ? jsx(Fragment, {
        children: jsxs("button", {
          className: eB()(tk, tA, {
            [tM]: this.props.profileTab === g3.SAVES
          }),
          onClick: this.onSavesTabClick,
          tabIndex: 0,
          "data-onboarding-key": "cmty-profile-save-tab",
          children: [_$$tx("community.profiles.saved"), jsx(_$$B, {
            svg: _$$A9,
            className: tK,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": _$$t("community.only_visible_to_you")
          })]
        })
      }) : jsx(Fragment, {});
      let r = jsxs("div", {
        className: "profile_resources_grid--profileDataContainer--e4QVX text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: [jsx(r5, {
          profile: this.props.profile,
          updateProfile: this.updateProfile,
          isViewingCurrentUserProfile: this.props.authedActiveCommunityProfileId === this.props.profile.id,
          showFollowsModal: this.showFollowsModal
        }), this.props.isWithinProfileScope && this.props.communityStatusOnProfile !== Cw.ADMIN_IN_DIFFERENT_WORKSPACE && jsx(_$$z2, {
          query: `(min-width: ${r3}px)`,
          children: jsx(r0, {
            profile: this.props.profile,
            className: tq
          })
        }), !this.props.isWithinProfileScope && jsx(_$$H, {
          profile: this.props.profile,
          className: tq
        })]
      });
      let s = !!(this.props.isWithinProfileScope && af(this.props.currentUser)) || !!getFeatureFlags().cmty_expand_extension_m10n && !!this.props.profile.associated_users?.find(e => e.user_id === this.props.currentUser?.id && !0 === e.is_primary_user);
      let n = jsx(e4, {
        user: this.props.currentUser,
        children: jsxs("div", {
          className: tR,
          children: [jsx("div", {
            className: eB()(tk, tA, {
              [tM]: this.props.profileTab === g3.RESOURCES
            }),
            onClick: this.onFilesPluginsTabClick,
            role: "button",
            tabIndex: 0,
            children: _$$tx("community.profiles.resources")
          }), t, s && jsx(fu, {
            name: _$$e.COMMUNITY_PROFILE_METRICS_TAB,
            children: jsx("div", {
              className: tP,
              children: jsxs("div", {
                className: eB()(tk, tA, tO, {
                  [tM]: this.props.profileTab === g3.METRICS
                }),
                onClick: this.onMetricsTabClick,
                role: "button",
                tabIndex: 0,
                children: [_$$tx("community.seller.profiles.metrics"), jsx(_$$B, {
                  svg: _$$A9,
                  className: tK,
                  "data-tooltip-type": Ib.TEXT,
                  "data-tooltip": _$$t("community.only_visible_to_you")
                })]
              })
            })
          })]
        })
      });
      let o = jsxs("div", {
        className: tR,
        children: [jsx("div", {
          className: eB()(tk, tA, {
            [tM]: this.props.profileTab === g3.RESOURCES
          }),
          onClick: this.onFilesPluginsTabClick,
          role: "button",
          tabIndex: 0,
          children: _$$tx("community.profiles.resources")
        }), t, s && jsxs(fu, {
          name: _$$e.COMMUNITY_PROFILE_METRICS_TAB,
          children: [jsx(_$$p, {
            children: jsx(to, {
              onboardingKey: eX
            })
          }), jsx("div", {
            className: tP,
            children: jsxs("div", {
              className: eB()(tk, tA, tO, {
                [tM]: this.props.profileTab === g3.METRICS
              }),
              onClick: this.onMetricsTabClick,
              role: "button",
              tabIndex: 0,
              children: [jsx("span", {
                "data-onboarding-key": eX,
                children: _$$tx("community.seller.profiles.metrics")
              }), jsx(_$$B, {
                svg: _$$A9,
                className: tK
              })]
            })
          })]
        })]
      });
      return jsxs(Fragment, {
        children: [jsxs(_$$z2, {
          query: `(min-width: ${r2}px)`,
          children: [o, jsxs("div", {
            className: tQ,
            children: [r, e]
          })]
        }), jsx(_$$z2, {
          query: `(max-width: ${r2 - 1}px)`,
          children: jsxs("div", {
            className: tQ,
            children: [r, n, e]
          })
        })]
      });
    }
  }
  t.displayName = "PublicProfileResourcesGridAndData";
  e.Inner = t;
})(s || (s = {}));
se.displayName = "CommunityHubProfile";
let st = Ng(e => ({
  currentUser: "user" in e ? e.user : null,
  currentSelectedView: "selectedView" in e ? e.selectedView : null,
  authedActiveCommunityProfileId: "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile?.id ?? null : null
}))(se);
let sr = l()(g3, ["FOLLOWERS", "FOLLOWING"]);
let ss = M4.Query({
  fetch: async e => (await _$$s2.getHandle({
    handle: e
  })).data.meta
});
export function $$si0({
  fallbackRedirectRoute: e
}) {
  let t = _$$ed(xn);
  let r = _$$ed(qL);
  let s = AG();
  let a = wA();
  let l = t?.params.profileHandle ?? r?.params.profileHandle ?? null;
  let [c] = IT(ss(l ?? ""));
  useEffect(() => {
    "errors" === c.status && (404 !== c.errors.status || s ? s && e ? Ay.redirect(e.href) : a(_$$s.error(_$$t("community.actions.error_fetching_profile_information"))) : Ay.redirect("/404"));
  }, [a, c, s, e]);
  let u = c.data?.profile ?? null;
  return s ? jsx(eA, {
    profile: u
  }) : jsx(st, {
    currentProfile: u
  });
}
export const P = $$si0; 
