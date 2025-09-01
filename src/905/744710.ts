import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, createContext, useState, useRef, useCallback, useContext, useMemo, Suspense, useEffect, Fragment as _$$Fragment, forwardRef, PureComponent, createElement } from "react";
import { hS } from "../905/437088";
import { t as _$$t } from "../905/150656";
import l, { Y9, hE, nB as _$$nB, wi, jk, vo, r1 } from "../figma_app/272243";
import { K as _$$K } from "../905/443068";
import { bL, Rq } from "../905/38914";
import p, { getFeatureFlags } from "../905/601108";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t2, tx as _$$tx } from "../905/303541";
import { iZ as _$$iZ, pS, TA } from "../905/372672";
import { po } from "../figma_app/45218";
import { Ju, ZU, qK } from "../905/102752";
import { wA, d4 } from "../vendor/514228";
import { $n } from "../905/521428";
import I from "classnames";
import { h as _$$h } from "../905/207101";
import { getInitialOptions } from "../figma_app/169182";
import { Cg } from "../figma_app/471982";
import { oB, j7, sf } from "../905/929976";
import { Lo, to as _$$to, Ce } from "../905/156213";
import { sD } from "../figma_app/740025";
import { EB } from "../figma_app/831101";
import { C as _$$C } from "../905/180";
import { S as _$$S } from "../figma_app/179602";
import { S3 } from "../905/708054";
import { M as _$$M } from "../905/130634";
import { FDomainVerificationStatusType, FOrganizationLevelType, FMemberRoleType, FPlanNameType } from "../figma_app/191312";
import { C as _$$C2 } from "../905/283236";
import { x as _$$x } from "../905/233240";
import { x1 } from "../905/714362";
import { F as _$$F } from "../905/302958";
import { yX, d_ } from "../figma_app/918700";
import { X as _$$X } from "../905/33014";
import { A as _$$A } from "../905/289352";
import { ck } from "../905/952832";
import { Ro } from "../figma_app/805373";
import { Id } from "../figma_app/102449";
import { O as _$$O } from "../905/487602";
import { ms, MM, c$, wv } from "../figma_app/236327";
import { B as _$$B } from "../905/714743";
import { Gu, G0 } from "../905/926523";
import { Um } from "../905/848862";
import { Ib } from "../905/129884";
import { g as _$$g } from "../905/241406";
import { A as _$$A2 } from "../6828/523860";
import { A as _$$A3 } from "../6041/209192";
import { k as _$$k2 } from "../905/443820";
import { N as _$$N } from "../905/438674";
import { bV, UO } from "../figma_app/808294";
import { G3 } from "../905/272080";
import { fN } from "../905/54385";
import { p as _$$p } from "../905/428660";
import { A as _$$A4 } from "../5724/663128";
import { sx, az } from "../905/449184";
import { s as _$$s2, Q as _$$Q } from "../905/573154";
import { tx as _$$tx2 } from "../figma_app/395505";
import { v as _$$v } from "../905/581647";
import { Cu } from "../figma_app/314264";
import { bX } from "../figma_app/792917";
import { Cf } from "../905/504727";
import { A as _$$A5 } from "../5724/501642";
import { kt } from "../figma_app/858013";
import { P as _$$P } from "../905/347284";
import { a as _$$a } from "../905/329735";
import { S as _$$S2 } from "../905/274480";
import { J as _$$J, h as _$$h2 } from "../905/270045";
import { J as _$$J2 } from "../905/341359";
import { Ay as _$$Ay } from "@stylexjs/stylex";
import { eD as _$$eD } from "../figma_app/876459";
import { mI, gY } from "../figma_app/566371";
import { Ph } from "../905/160095";
import { b as _$$b } from "../905/985254";
import { fu } from "../figma_app/831799";
import { w as _$$w } from "../figma_app/705249";
import { q5 } from "../figma_app/516028";
import { dq } from "../905/845253";
import { f as _$$f } from "../905/940356";
import { Au } from "../figma_app/518077";
import { M4, IT, gY as _$$gY } from "../905/713695";
import { e0 as _$$e } from "../905/696396";
import { d as _$$d } from "../905/811033";
import { iX as _$$iX, Ke } from "../905/415545";
import { ServiceCategories as _$$e2 } from "../905/165054";
import { tH as _$$tH, H4 } from "../905/751457";
import { vh } from "../figma_app/181241";
import { b as _$$b2, c as _$$c } from "../905/308099";
import { BQ } from "../905/865071";
import { z as _$$z } from "../905/502533";
import { E as _$$E } from "../905/632989";
import { D as _$$D } from "../905/443020";
import { X as _$$X2 } from "../905/857208";
import { V as _$$V } from "../905/849455";
import { oA } from "../905/663269";
import { zN } from "../figma_app/416935";
import { R as _$$R } from "../905/103090";
import { Rs, p as _$$p2 } from "../figma_app/288654";
import { h1 } from "../905/986103";
import { G as _$$G } from "../905/750789";
import { sx as _$$sx } from "../905/941192";
import { Yh6, YN5, sMZ, P4, kQI } from "../figma_app/43951";
import { kA, yK } from "../figma_app/336853";
import { H as _$$H } from "../905/202181";
import { X as _$$X3 } from "../905/128376";
import { ec as _$$ec, BD, eu as _$$eu, Ci, qC } from "../905/264101";
import { _Z, pL, yl, Vq, v0, jE } from "../figma_app/639088";
import { zd, Bb, B7 } from "../905/651696";
import { R as _$$R2 } from "../905/441305";
import { Z as _$$Z } from "../905/854480";
import { _ as _$$_ } from "../905/799322";
import { J as _$$J3 } from "../905/71895";
import { t as _$$t3 } from "../905/751495";
import { J as _$$J4 } from "../905/211135";
import { m as _$$m } from "../905/636019";
import { L as _$$L } from "../905/704296";
import { md } from "../figma_app/27355";
import { A as _$$A6 } from "../905/920142";
import { XHRError, XHR } from "../905/910117";
import { Y as _$$Y } from "../905/830372";
import { E as _$$E2 } from "../905/984674";
import { lW } from "../figma_app/11182";
import { $D } from "../905/11";
import { k as _$$k3 } from "../905/93362";
import { nF as _$$nF } from "../905/350402";
import { yJ } from "../figma_app/24841";
import { Z as _$$Z2 } from "../905/296690";
import { bL as _$$bL, l9, mc, c$ as _$$c$ } from "../905/493196";
import { ks, $$, nR as _$$nR, qZ } from "../figma_app/637027";
import { b8 } from "../figma_app/926061";
import { qq, E0, IJ, eK as _$$eK, Wc, sy, av } from "../905/37362";
import { d as _$$d2 } from "../905/49800";
import { z as _$$z2 } from "../905/825185";
import { G as _$$G2 } from "../905/289770";
import { f as _$$f2, h as _$$h3 } from "../905/693155";
import { lb } from "../3973/538504";
import { oA as _$$oA } from "../905/723791";
import { $z } from "../figma_app/617427";
import { V as _$$V2 } from "../905/223767";
import { Qh, fK } from "../905/469533";
import { c as _$$c2 } from "../905/370443";
import { am } from "../905/640017";
import { T5 } from "../figma_app/465071";
import { $I } from "../figma_app/865646";
import { b as _$$b3 } from "../905/165519";
import { C_ } from "../905/345933";
import { r6 } from "../905/542608";
import { T as _$$T } from "../figma_app/472024";
import { rP as _$$rP, kA as _$$kA, IO } from "../905/962318";
import { PG } from "../905/997533";
import { lW as _$$lW } from "../905/31837";
import { u as _$$u } from "../905/834238";
import { Jt, hZ, Op, as, mN, Gb } from "../vendor/739257";
import { A as _$$A7 } from "../vendor/723372";
import { VM, iM as _$$iM, C4 } from "../905/472756";
import { Qv } from "../905/959312";
import { l as _$$l } from "../905/479687";
import { a as _$$a2 } from "../905/462280";
import { R as _$$R3 } from "../905/256203";
import { Lh } from "../figma_app/415899";
import { iv as _$$iv, Uj, mc as _$$mc, UC } from "../905/872285";
import { E as _$$E3 } from "../905/172252";
import { Ay as _$$Ay3, z as _$$z3 } from "../vendor/835909";
import { a$H, qgA, EJS } from "../vendor/285761";
import { S as _$$S3 } from "../905/823680";
import { p as _$$p3 } from "../905/185998";
import { z as _$$z4 } from "../905/239603";
import { s_ } from "../905/17223";
import { L as _$$L2 } from "../905/408237";
import { P5 } from "../figma_app/175992";
import { Hl, hM } from "../905/840929";
import { q as _$$q } from "../905/932270";
import { _ as _$$_2, S as _$$S4 } from "../figma_app/490799";
import { xQ } from "../905/535224";
import { Ay as _$$Ay4 } from "../figma_app/778880";
import { Ef, Fs } from "../figma_app/976345";
import { Ex, zE } from "../figma_app/919079";
import { W as _$$W } from "../905/236903";
import { AM } from "../figma_app/637336";
import { WO, HJ, nN as _$$nN, Mw } from "../figma_app/122682";
import { L as _$$L3 } from "../905/671373";
import { A as _$$A8 } from "../905/215698";
import { B as _$$B2 } from "../905/950875";
import { n as _$$n } from "../figma_app/3731";
import { tc as _$$tc } from "../905/15667";
import { a_, ud, TI } from "../905/513035";
import { N_ } from "../905/332483";
import { Zx } from "../figma_app/217457";
import { j as _$$j } from "../figma_app/496854";
import { wH } from "../figma_app/680166";
import { i as _$$i } from "../905/46262";
import { AW } from "../figma_app/990058";
var n = {};
require.d(n, {
  asterisk: () => nV,
  error: () => nM,
  helper: () => nL,
  helperSuccess: () => nU,
  helperWarning: () => nB,
  label: () => nD,
  labelRow: () => nj,
  lg: () => nO,
  maxLength: () => nF,
  md: () => nP,
  row: () => nN
});
let u = memo(function(e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M12.5 7.5a.5.5 0 0 1-.5.5H5.207l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L5.207 7H12a.5.5 0 0 1 .5.5",
      clipRule: "evenodd"
    })
  });
});
var A = (e => (e.PURCHASES = "PURCHASES", e))(A || {});
let y = createContext({
  accountModalSubViewData: {
    activeSubView: null,
    properties: {}
  },
  setAccountModalSubViewData: () => { }
});
var E = I;
let z = Ju(function(e) {
  let t = wA();
  let [i, n] = useState(e.vatGstId);
  let [s, o] = useState(e.shippingAddress);
  let [l, d] = useState(!1);
  let c = s.country;
  return jsx(yX, {
    size: "fitContent",
    title: _$$t2("community.community_account_settings.change_address"),
    onConfirm: () => {
      let n = {
        shipping_address: s,
        vat_gst_id: i,
        user_id: e.userId
      };
      d(!0);
      t(_$$F.clearAll());
      _$$C.updateBillingDetails(n).then(({
        data: i
      }) => {
        let n = i.meta.vat_gst_id;
        d(!1);
        t(_$$F.enqueue({
          message: _$$t2("community.community_account_settings.address_details_success"),
          error: !1
        }));
        e.setVatGstId(n);
        e.setShippingAddress(s);
        t(Lo());
      }).catch(e => {
        d(!1);
        x1("Error updating user billing details", e, n, {
          reportAsSentryError: !0
        });
        t(_$$F.enqueue({
          type: "update-billing-details-error",
          message: e.message || _$$t2("community.community_account_settings.address_details_error"),
          error: !0
        }));
      });
    },
    confirmText: _$$t2("general.save"),
    hideOnConfirm: !1,
    isLoading: l,
    hideConfirmationTitle: !0,
    hideCancel: !0,
    popStack: !0,
    children: jsxs("div", {
      className: "change_address_modal--addressForm--e9CeF stripe--stripeCardAndAddress--b42eG",
      children: [jsx(_$$X, {
        address: s,
        updateAddress: o
      }), jsx(_$$A, {
        onChange: n,
        country: c,
        vatId: i,
        hasTaxIdVerificationError: e.hasTaxIdVerificationError,
        isCommunityCheckout: !0
      })]
    })
  });
}, "ChangeAddressModal");
function H(e) {
  let t = wA();
  let [i, n] = useState(e.vatGstId);
  let [s, o] = useState(e.shippingAddress);
  let l = e.taxIdVerificationStatus === FDomainVerificationStatusType.UNVERIFIED;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "community_user_address--billingDetailsTitle--ubsVO text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: jsx(_$$x, {
        hasTaxIdVerificationError: l
      })
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.gap8.$,
      children: [jsx(_$$C2, {
        shippingAddress: s,
        vatGstId: i
      }), jsx("div", {
        children: jsx("button", {
          tabIndex: 0,
          className: "community_user_address--blueLink--1xHm5 blue_link--blueLink--9rlnd",
          onClick: () => {
            t(_$$to({
              type: z,
              data: {
                vatGstId: i,
                shippingAddress: s,
                setVatGstId: n,
                setShippingAddress: o,
                hasTaxIdVerificationError: l,
                userId: e.userId
              }
            }));
          },
          children: _$$tx("community.community_account_settings.change_address")
        })
      })]
    })]
  });
}
function W() {
  return jsxs("svg", {
    width: "100",
    height: "100",
    viewBox: "0 0 100 100",
    fill: "none",
    children: [jsx("path", {
      d: "M98 50C98 23.4903 76.5097 2 50 2C23.4903 2 2 23.4903 2 50C2 76.5097 23.4903 98 50 98C76.5097 98 98 76.5097 98 50Z",
      fill: "var(--color-bg, white)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M99.5 50C99.5 22.6619 77.3381 0.5 50 0.5C22.6619 0.5 0.499998 22.6619 0.499998 50C0.499998 77.3381 22.6619 99.5 50 99.5C77.3381 99.5 99.5 77.3381 99.5 50ZM50 3.5C75.6812 3.5 96.5 24.3188 96.5 50C96.5 75.6812 75.6812 96.5 50 96.5C24.3188 96.5 3.5 75.6812 3.5 50C3.5 24.3188 24.3188 3.5 50 3.5Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("circle", {
      cx: "33",
      cy: "37",
      r: "5",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("circle", {
      cx: "67",
      cy: "37",
      r: "5",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.5 48.5V50C19.5 66.8447 33.1553 80.5 50 80.5C66.8447 80.5 80.5 66.8447 80.5 50V48.5H83.5V50C83.5 68.5015 68.5015 83.5 50 83.5C31.4985 83.5 16.5 68.5015 16.5 50V48.5H19.5Z",
      fill: "var(--color-bg-disabled-secondary, #BBBBBB)"
    })]
  });
}
let $ = "account_settings_modal--sideBar--0l4vG";
let Z = "account_settings_modal--sectionHeader--xwPwz text--fontPos14--OL9Hp text--_fontBase--QdLsd";
let X = "account_settings_modal--row--immHG";
let Q = "account_settings_modal--rowWithDivider--364-Z account_settings_modal--row--immHG";
let J = "account_settings_modal--settingsLine--GCtsx";
let ee = "account_settings_modal--textLine--Dkw1T";
let et = "account_settings_modal--spaceRight--IejW6";
let ei = "account_settings_modal--scrollContainer--Yf5uK";
function en(e) {
  var t;
  let i = _$$iZ();
  let n = d4(e => e.avatarEditorState);
  let a = wA();
  switch (e.avatarType) {
    case 0:
      if (!i) return null;
      t = i.profile.images && i.profile.images["500_500"] ? i.profile.images["500_500"] : i.img_url;
      return jsx("div", {
        className: $,
        children: jsx(Id, {
          avatarEditorState: n,
          entity: {
            img_url: t
          },
          entityType: ck.CURRENT_USER,
          dispatch: a
        })
      });
    case 1:
      if (!e.communityProfile) return null;
      t = e.communityProfile.img_urls["500_500"] || e.communityProfile.img_url;
      return jsx("div", {
        className: $,
        children: jsx(Ro, {
          entity: {
            img_url: t
          },
          size: 120
        })
      });
  }
}
function er(e) {
  return jsx("div", {
    className: "account_settings_modal--onePanelSettingsModal--FGwjj account_settings_modal--flexContainer--yMDEx",
    style: e.style,
    children: e.children
  });
}
function ea(e) {
  return jsxs("div", {
    className: "account_settings_modal--flexContainer--yMDEx",
    children: [e.left, jsx("div", {
      className: "account_settings_modal--settings---Qq93",
      children: e.right
    })]
  });
}
var es = (e => (e[e.ACCOUNT = 0] = "ACCOUNT", e[e.COMMUNITY = 1] = "COMMUNITY", e))(es || {});
function eo(e) {
  return jsx(ea, {
    left: jsx(en, {
      avatarType: e.avatarType,
      communityProfile: e.communityProfile
    }),
    right: e.children
  });
}
function e_(e) {
  return jsxs("div", {
    className: "profile_connections--rowContainer--0xJpR",
    children: [jsx("div", {
      className: "profile_connections--rowIcon---a6Ar",
      children: jsx(_$$B, {
        svg: _$$A3,
        className: "profile_connections--emailSvg--dO9Le"
      })
    }), jsx("div", {
      className: "profile_connections--email--UbNlG",
      children: e.email
    }), !e.isPrimary && !e.can_sell_on_community && jsx(_$$K, {
      "aria-label": _$$t2("general.remove"),
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t2("general.remove")
      },
      onClick: () => {
        e.onRemoveUser(e.email, e.userId);
      },
      children: jsx(_$$O, {
        color: "black"
      })
    })]
  });
}
function eA(e) {
  let t = "primary-email-dropdown";
  let i = wA();
  let n = e.profile.associated_users || [];
  let a = Um();
  let s = (t, n) => {
    i(Gu({
      email: t,
      profileId: e.user.community_profile_id,
      userId: n
    }));
    i(oB());
  };
  let o = jsx(ms, {
    children: n.map(function(t) {
      return jsx(MM, {
        onClick: () => t.email && s(t.email, t.user_id),
        checked: t.email === e.primaryUserEmail,
        children: t.email
      }, t.email);
    })
  });
  return e.hasPrimaryUserOnboardedStripe ? jsx("div", {
    children: e.primaryUserEmail
  }) : jsxs(Fragment, {
    children: [jsxs("div", {
      onClick: e => {
        e.stopPropagation();
        a && a.type === t ? i(oB()) : i(j7({
          type: t
        }));
      },
      className: "profile_connections--primaryEmailSelect--qTf-7",
      children: [jsx("div", {
        className: "profile_connections--select--QhWNC profile_connections--selectOnly--kPSmT",
        children: e.primaryUserEmail
      }), jsx(_$$B, {
        svg: _$$A2,
        className: "profile_connections--selectCaretSvg--wp1Yj",
        width: "9px",
        height: "6px"
      })]
    }), a && a.type === t && o]
  });
}
function ey(e) {
  let t = e.profile?.associated_users || [];
  let i = wA();
  let n = (t, n) => {
    e.user.community_profile_id && i(G0({
      email: t,
      profileId: e.user.community_profile_id,
      userId: n
    }));
  };
  t && t.sort((e, t) => e.is_primary_user < t.is_primary_user ? 1 : e.is_primary_user > t.is_primary_user ? -1 : 0);
  let a = t && t[0] && t[0].email ? t[0].email : e.user.email;
  let s = !1;
  for (let e of t) e.is_primary_user && e.email && (a = e.email, s = !!e.can_sell_on_community);
  let o = s ? _$$tx("community.profile_connections.primary_email_info__disable_switching_for_primary_monetized_creator") : _$$tx("community.profile_connections.primary_email_info");
  return jsxs("div", {
    children: [jsx("h3", {
      className: Z,
      children: _$$tx("community.profile_connections.profile_connections_title")
    }), jsx("div", {
      className: ee,
      children: _$$tx("community.profile_connections.info")
    }), jsx("div", {
      className: "profile_connections--table--szyWE",
      children: t.map(e => jsx(e_, {
        email: e.email || "",
        onRemoveUser: n,
        isPrimary: e.is_primary_user,
        userId: e.user_id,
        can_sell_on_community: e?.can_sell_on_community
      }, e.user_id))
    }), jsx("div", {
      className: J,
      children: jsx($n, {
        variant: "link",
        onClick: () => {
          i(_$$to({
            type: _$$g
          }));
        },
        children: _$$tx("community.profile_connections.add_profile_connection_cta")
      })
    }), t.length > 1 && jsxs(Fragment, {
      children: [jsx("h3", {
        className: Z,
        children: _$$tx("community.profile_connections.primary_email")
      }), jsx("div", {
        className: ee,
        children: o
      }), jsx(eA, {
        user: e.user,
        profile: e.profile,
        primaryUserEmail: a,
        hasPrimaryUserOnboardedStripe: s
      })]
    })]
  });
}
e_.displayName = "ProfileUserEmailRow";
let eC = function(e) {
  let {
    resourceId,
    title,
    resourceType,
    description,
    thumbnailUrl,
    isBlocked,
    isError = !1,
    children
  } = e;
  let c = wA();
  let u = E()("community_resource_row--resourceRow--Lw3vr text--fontPos11--2LvXf text--_fontBase--QdLsd", {
    "community_resource_row--interactiveRow--rqlr-": !isBlocked
  });
  return jsxs("div", {
    className: u,
    onClick: e => {
      if (isBlocked) {
        e.preventDefault();
        return;
      }
      let i = _$$p(resourceType, resourceId);
      c(sf(i));
      c(Ce());
    },
    children: [jsxs("div", {
      className: "community_resource_row--content--Lr2qU",
      children: [jsx("img", {
        className: "community_resource_row--thumbnail--KPnHc",
        src: thumbnailUrl,
        alt: title
      }), jsxs("div", {
        className: "community_resource_row--context--abjfc",
        children: [jsx("div", {
          className: "community_resource_row--title--5BKoh",
          children: title
        }), jsxs("div", {
          className: E()("community_resource_row--description--WWifD", {
            "community_resource_row--error--Ccs09": isError
          }),
          children: [isError && jsx(_$$B, {
            className: "community_resource_row--errorIcon--6XRxO",
            svg: _$$A4,
            autosize: !0
          }), jsx("span", {
            children: description
          })]
        })]
      })]
    }), children]
  });
};
let eT = e => e.toLocaleDateString(void 0, {
  year: "numeric",
  month: "long",
  day: "numeric"
});
let ek = e => {
  let {
    annual_price,
    price,
    purchase_date,
    last_modified_date,
    subscription_data,
    monetized_resource_id
  } = e;
  let o = function(e, t) {
    let i;
    if (e?.subscription_expires_at && e?.trial_length_in_days) {
      let n = new Date(e.subscription_expires_at);
      let r = eT(n);
      let a = new Date(e.subscription_expires_at);
      a.setDate(n.getDate() + 1);
      let s = a <= new Date();
      let o = new Date(t);
      o.setDate(o.getDate() + e.trial_length_in_days);
      let l = o <= new Date();
      let d = e.subscription_canceled_at ? eT(new Date(e.subscription_canceled_at)) : null;
      let c = e?.subscription_interval === fN.ANNUALLY;
      i = {
        subscription_expires_at: r,
        subscription_canceled_at: d,
        trial_expires_at: eT(o),
        has_trial_expired: l,
        has_subscription_ended: s,
        is_annual_subscription: c
      };
    } else i = {
      subscription_expires_at: null,
      subscription_canceled_at: null,
      trial_expires_at: null,
      is_annual_subscription: !1
    };
    return i;
  }(subscription_data, purchase_date);
  return {
    ...e,
    price: bV({
      id: monetized_resource_id,
      price,
      annual_price,
      is_subscription: !!subscription_data
    }, o.is_annual_subscription),
    purchase_date: eT(new Date(purchase_date)),
    last_modified_date: eT(new Date(last_modified_date)),
    subscription_data: o
  };
};
let eR = (e, t, i, n) => {
  switch (t.subscription_canceled_at ? G3.CANCELED : e) {
    case G3.SUCCEEDED:
      return t.subscription_expires_at ? _$$t2("community.purchase_home.renews", {
        date: t.subscription_expires_at
      }) : _$$t2("community.purchase_home.purchased", {
        date: i
      });
    case G3.CANCELED:
      if (t.subscription_canceled_at) return t.has_subscription_ended ? _$$t2("community.purchase_home.cancelled_and_inactive", {
        date: t.subscription_canceled_at
      }) : _$$t2("community.purchase_home.cancelled_but_active", {
        date: t.subscription_canceled_at
      });
      if (t.subscription_expires_at) return t.has_subscription_ended ? _$$t2("community.purchase_home.cancelled_and_inactive", {
        date: t.subscription_expires_at
      }) : _$$t2("community.purchase_home.cancelled_but_active", {
        date: t.subscription_expires_at
      });
      return "";
    case G3.REFUNDED:
    case G3.DISPUTED:
      return _$$t2("community.purchase_home.refunded", {
        date: n
      });
    case G3.TRIALING:
      if (t.trial_expires_at) return t.has_trial_expired ? _$$t2("community.purchase_home.free_trial_ended", {
        date: t.trial_expires_at
      }) : _$$t2("community.purchase_home.free_trial_ends", {
        date: t.trial_expires_at
      });
      return "";
    case G3.SUBSCRIPTION_PAYMENT_FAILED:
    case G3.INVOICE_FINALIZATION_FAILED:
      return _$$t2("community.purchase_home.update_payment_details");
    default:
      return "";
  }
};
let eN = function(e) {
  let {
    purchase
  } = e;
  let {
    resource_publisher,
    resource_name,
    thumbnail_url,
    status,
    purchase_date,
    last_modified_date,
    price,
    subscription_data,
    is_blocked
  } = ek(purchase);
  return jsx(eC, {
    resourceId: purchase.resource_id,
    title: function(e, t) {
      let i = _$$t2("community.purchase_home.resource_title", {
        resource_name: e,
        resource_publisher: t
      });
      let n = i.length - 40;
      if (n <= 0) return i;
      let r = e.length - t.length;
      if (r > 0) {
        let i = Math.min(n, r) + 3;
        if (e = e.slice(0, e.length - i), n <= r) return _$$t2("community.purchase_home.resource_title", {
          resource_name: `${e}\u2026`,
          resource_publisher: t
        });
        n -= i;
      } else if (r < 0) {
        let i = -1 * r;
        let a = Math.min(n, i) + 3;
        if (t = t.slice(0, t.length - a), n <= i) return _$$t2("community.purchase_home.resource_title", {
          resource_name: e,
          resource_publisher: `${t}\u2026`
        });
        n -= i;
      }
      let a = Math.ceil(n / 2) + 3;
      t = t.slice(0, t.length - a);
      e = e.slice(0, e.length - a);
      return _$$t2("community.purchase_home.resource_title", {
        resource_name: `${e}\u2026`,
        resource_publisher: `${t}\u2026`
      });
    }(resource_name, resource_publisher),
    resourceType: purchase.community_resource_type,
    description: eR(status, subscription_data, purchase_date, last_modified_date),
    thumbnailUrl: thumbnail_url,
    isError: UO({
      status
    }),
    isBlocked: is_blocked,
    children: jsxs("span", {
      className: "community_purchase_row--purchaseData--eoH24",
      children: [jsx("span", {
        className: "community_purchase_row--price--ZsUct text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: price
      }), e.optionsMenu]
    })
  });
};
var eB = (e => (e.OTP_REFUNDABLE = "otp_refundable", e.SUBSCRIPTION = "subscription", e))(eB || {});
function eV(e) {
  let t = _$$iZ();
  return t ? jsx(eG, {
    ...e,
    user: t
  }) : null;
}
function eG(e) {
  let {
    purchase
  } = e;
  let {
    support_contact
  } = t;
  let n = wA();
  let [s, o] = useState(!1);
  let l = useRef(null);
  let d = l.current?.getBoundingClientRect();
  let c = function(e, t) {
    if (t) return "subscription";
    let i = new Date(e);
    let n = new Date();
    if (n.setDate(i.getDate() + 1), n > new Date()) return "otp_refundable";
  }(purchase.purchase_date, purchase.subscription_data?.subscription_expires_at);
  let u = useCallback(() => {
    o(!1);
  }, []);
  let p = useCallback(i => (sx("consumer_get_support", {
    user_id: e.user.id,
    resource_id: purchase.resource_id,
    resource_type: purchase.community_resource_type
  }), _$$tx2(e.user)), [e.user, purchase.resource_id, purchase.community_resource_type]);
  let m = useCallback(i => {
    Cu({
      user_id: e.user.id,
      resource_id: purchase.resource_id,
      resource_type: purchase.community_resource_type,
      name: "Customer Requests Refund"
    }, "cta_clicked");
    o(!1);
    n(_$$to({
      type: bX,
      data: {
        user: e.user,
        name: purchase.resource_name,
        monetizedResource: {
          id: purchase.monetized_resource_id,
          price: purchase.price,
          is_subscription: !!purchase.subscription_data
        }
      },
      showModalsBeneath: !0
    }));
  }, [n, e.user, purchase.monetized_resource_id, purchase.price, purchase.resource_name, purchase.subscription_data, purchase.community_resource_type, purchase.resource_id]);
  let g = i => {
    Cu({
      user_id: e.user.id,
      resource_id: purchase.resource_id,
      resource_type: purchase.community_resource_type,
      name: i
    }, "cta_clicked");
    o(!1);
    n(_$$s2.flash(_$$t2("community.buyer.redirecting_to_stripe")));
    n(_$$v({}));
  };
  let f = "subscription" === c;
  let _ = f ? "Stripe Subscription Management" : "Stripe Invoice";
  return jsxs(Fragment, {
    children: [jsx("button", {
      className: E()("community_purchase_row--ellipses--4TRxP", {
        "community_purchase_row--ellipsesActive--Mcn4X": s
      }),
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        o(!s);
      },
      ref: l,
      children: jsx(_$$B, {
        svg: _$$A5
      })
    }), s && d && jsx(Fragment, {
      children: jsx("div", {
        onClick: e => e.stopPropagation(),
        children: jsxs(Cf, {
          targetRect: d,
          lean: "left",
          closeDropdown: u,
          children: [!!purchase.is_blocked && jsxs(Fragment, {
            children: [jsx(c$, {
              disabled: !0,
              children: _$$tx("community.purchase_home.this_resource_is_no_longer_available")
            }), jsx(wv, {})]
          }), jsx(c$, {
            onClick: e => {
              g(_);
            },
            children: f ? _$$tx("community.purchase_home.manage_subscription") : _$$tx("community.purchase_home.see_order_details")
          }), !!(support_contact && !purchase.is_blocked) && jsx(c$, {
            onClick: i => {
              sx("consumer_contact_creator", {
                user_id: e.user.id,
                resource_id: purchase.resource_id,
                resource_type: purchase.community_resource_type
              });
            },
            href: `mailto:${support_contact}`,
            target: "_blank",
            children: _$$tx("community.purchase_home.contact_creator")
          }), "otp_refundable" === c && purchase.status === G3.SUCCEEDED ? jsx(c$, {
            onClick: m,
            children: _$$tx("community.purchase_home.request_refund")
          }) : jsx(c$, {
            onClick: p,
            children: _$$tx("community.purchase_home.get_support")
          })]
        })
      })
    })]
  });
}
let ez = "purchase_home_and_history--termsLink--gpp0s blue_link--blueLink--9rlnd";
function eH(e) {
  return jsx("div", {
    className: "purchase_home_and_history--purchaseRowContainer--bjPqI",
    children: e.purchases.map(e => jsx(eN, {
      purchase: e,
      optionsMenu: jsx(eV, {
        purchase: e
      })
    }, e.resource_id))
  });
}
function eW(e) {
  let {
    activePurchases,
    inactivePurchases,
    isPurchasesRequestError,
    shouldSeeMoreActivePurchases,
    shouldSeeMoreInactivePurchases
  } = e;
  return jsx(Fragment, {
    children: isPurchasesRequestError ? jsx("div", {
      className: "purchase_home_and_history--loadingSpinner--s8P5A",
      children: jsx(_$$k2, {})
    }) : (!!activePurchases.length || !!inactivePurchases.length) && jsx(y.Consumer, {
      children: ({
        setAccountModalSubViewData: e
      }) => jsxs(Fragment, {
        children: [jsx("div", {
          className: "purchase_home_and_history--purchaseHomeTitle--dPr0M text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: _$$tx("community.purchase_home.community_purchases")
        }), !!activePurchases.length && jsxs("div", {
          className: "purchase_home_and_history--activePurchasesContainer--iaWWg",
          children: [jsx(eH, {
            purchases: activePurchases
          }), shouldSeeMoreActivePurchases && jsx("button", {
            className: ez,
            onClick: () => e({
              activeSubView: A.PURCHASES,
              properties: {
                purchasePageType: po.ACTIVE
              }
            }),
            children: _$$tx("community.purchase_home.show_more")
          })]
        }), !!inactivePurchases.length && jsxs(Fragment, {
          children: [jsx("div", {
            className: "purchase_home_and_history--purchaseHomeInactiveTitle--vE7CE text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: _$$tx("community.purchase_home.inactive")
          }), jsx(eH, {
            purchases: inactivePurchases
          }), shouldSeeMoreInactivePurchases && jsx("button", {
            className: ez,
            onClick: () => e({
              activeSubView: A.PURCHASES,
              properties: {
                purchasePageType: po.INACTIVE
              }
            }),
            children: _$$tx("community.purchase_home.show_more")
          })]
        }), jsx("div", {
          className: "purchase_home_and_history--termsContainer--UGXj-",
          children: _$$tx("community.purchase_home.by_purchasing_resources_you_agree", {
            paidResourceLicense: jsx(_$$N, {
              href: "https://figma.com/community-paid-resource-license",
              children: _$$tx("community.detail_view.paid_resource_license")
            }),
            termsOfService: jsx(_$$N, {
              href: "https://www.figma.com/tos/",
              children: _$$tx("community.purchase_home.community_terms_of_service")
            })
          })
        })]
      })
    })
  });
}
let e$ = "purchase_page--morePurchasesStatusContent--kSbaH";
function eZ(e) {
  let [t, i] = useState(!1);
  let [n, s] = useState(!1);
  _$$h(() => {
    let e = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = e;
    };
  });
  let {
    fetchNextPage
  } = e;
  let l = useCallback(() => {
    fetchNextPage && !t && (i(!0), s(!1), fetchNextPage().catch(() => {
      s(!0);
    }).$$finally(() => {
      i(!1);
    }));
  }, [fetchNextPage, t]);
  return jsx("div", {
    className: "purchase_page--purchasePageContents--DdU5u",
    children: jsxs("div", {
      className: "purchase_page--purchasePageScrollContainer--VSL-0",
      children: [jsx(_$$P, {
        hideScrollbar: !0,
        className: "purchase_page--scrollContainer--MAVUI",
        children: jsx(eH, {
          purchases: e.purchases
        })
      }), jsx(_$$a, {
        callback: e => {
          e[0].isIntersecting && l();
        }
      }), t && jsx("span", {
        className: e$,
        children: jsx(kt, {})
      }), n && fetchNextPage && jsx("span", {
        className: e$,
        children: _$$tx("community.purchase_home.server_could_not_load_resources", {
          reload: jsx("button", {
            onClick: l,
            className: "purchase_page--reloadButton--4-rsP blue_link--blueLink--9rlnd",
            children: _$$tx("community.purchase_home.reload")
          })
        })
      })]
    })
  });
}
let eX = (e, t) => {
  e(_$$to({
    type: S3,
    data: {
      userId: t.id,
      profileId: t.community_profile_id,
      profileHandle: t.community_profile_handle
    }
  }));
};
function eQ(e) {
  let t = wA();
  let i = e.activePurchases.length || e.inactivePurchases.length;
  let n = e0(e.activePurchases, e.inactivePurchases);
  let a = e1(e.vatGstId, e.shippingAddress);
  return jsxs("div", {
    className: "community_view--noProfileContainer--b3EOz",
    children: [jsxs("div", {
      className: E()("community_view--center--llfem", {
        [Q]: i,
        "community_view--centerWithPurchases--VLch1": i
      }),
      children: [jsx("div", {
        className: i ? "community_view--smileContainerWithPurchases--HSsQZ" : "community_view--smileContainer--8uY36",
        children: jsx(W, {})
      }), jsx("h3", {
        className: Z,
        children: _$$tx("community.community_account_settings.create_your_public_profile_title")
      }), jsx("div", {
        className: "community_view--joinText--az3QB",
        children: _$$tx("community.community_account_settings.join_text")
      }), jsx($n, {
        onClick: () => eX(t, e.user),
        children: _$$tx("community.community_account_settings.claim_your_handle")
      })]
    }), n && jsx("div", {
      className: Q,
      children: jsx(eW, {
        activePurchases: e.activePurchases,
        inactivePurchases: e.inactivePurchases,
        shouldSeeMoreActivePurchases: e.shouldSeeMoreActivePurchases,
        shouldSeeMoreInactivePurchases: e.shouldSeeMoreInactivePurchases,
        isPurchasesRequestError: e.isPurchasesRequestError
      })
    }), a && jsx("div", {
      className: Q,
      children: jsx(H, {
        vatGstId: e.vatGstId,
        shippingAddress: e.shippingAddress,
        taxIdVerificationStatus: e.taxIdVerificationStatus,
        userId: e.user.id
      })
    })]
  });
}
function eJ(e) {
  let [t, i] = useState([]);
  let [n, s] = useState([]);
  let [o, l] = useState();
  let [d, c] = useState();
  let [u, p] = useState(!1);
  let [m, g] = useState("");
  let [_, A] = useState(EB());
  let [I, E] = useState("");
  let w = useCallback(() => _$$C.getBuyerPurchases({
    purchaseType: "active",
    pageSize: "15",
    cursor: o || void 0
  }).then(({
    data: e
  }) => {
    i(t => [...t, ...e.meta]);
    l(e.pagination?.next_page || "");
  }).catch(() => {
    p(!0);
  }), [o]);
  let k = useCallback(() => _$$C.getBuyerPurchases({
    purchaseType: "inactive",
    pageSize: "15",
    cursor: d || void 0
  }).then(({
    data: e
  }) => {
    s(t => [...t, ...e.meta]);
    c(e.pagination?.next_page || "");
  }).catch(() => {
    p(!0);
  }), [d]);
  _$$h(() => {
    w();
    k();
    _$$C.getCommunityUserTaxInfo({
      userId: e.user.id
    }).then(({
      data: e
    }) => {
      e.meta.vat_gst_id && g(e.meta.vat_gst_id);
      e.meta.shipping_address && A(e.meta.shipping_address);
      e.meta.tax_id_verification_status && E(e.meta.tax_id_verification_status);
    }).catch(() => {}) ;
  });
  let O = wA();
  let L = e.profile?.public_at ? e.profile?.profile_handle : null;
  let {
    purchasePageType
  } = useContext(y)?.accountModalSubViewData.properties;
  if (purchasePageType) {
    let e = purchasePageType === po.ACTIVE ? w : k;
    let i = purchasePageType === po.ACTIVE ? o : d;
    return jsx(eZ, {
      purchases: purchasePageType === po.ACTIVE ? t : n,
      fetchNextPage: i ? e : void 0
    });
  }
  if (!e.profile) return jsx(er, {
    children: jsx(eQ, {
      user: e.user,
      activePurchases: t.slice(0, 5),
      inactivePurchases: n.slice(0, 1),
      shouldSeeMoreActivePurchases: !!o || t.length > 5,
      shouldSeeMoreInactivePurchases: !!d || n.length > 1,
      isPurchasesRequestError: u,
      vatGstId: m,
      shippingAddress: _,
      taxIdVerificationStatus: I
    })
  });
  if (!L) return jsx(eo, {
    avatarType: es.COMMUNITY,
    communityProfile: e.profile,
    children: jsx(eQ, {
      user: e.user,
      activePurchases: t.slice(0, 5),
      inactivePurchases: n.slice(0, 1),
      shouldSeeMoreActivePurchases: !!o || t.length > 5,
      shouldSeeMoreInactivePurchases: !!d || n.length > 1,
      isPurchasesRequestError: u,
      vatGstId: m,
      shippingAddress: _,
      taxIdVerificationStatus: I
    })
  });
  let M = `${getInitialOptions().figma_url}/@${L}`;
  let j = e0(t, n);
  let U = e1(m, _);
  return jsx(eo, {
    avatarType: es.COMMUNITY,
    communityProfile: e.profile,
    children: jsxs("div", {
      children: [jsxs("div", {
        className: Q,
        children: [jsx("h3", {
          className: Z,
          children: _$$tx("community.community_account_settings.display_name")
        }), jsx("div", {
          className: ee,
          children: e.profile?.name
        }), jsx("h3", {
          className: Z,
          children: _$$tx("community.community_account_settings.unique_handle")
        }), jsx("div", {
          className: ee,
          children: "@" + L
        }), jsx("div", {
          children: jsx($n, {
            variant: "link",
            onClick: () => eX(O, e.user),
            children: _$$tx("community.community_account_settings.change_handle")
          })
        }), jsx("div", {
          className: J,
          children: jsxs("div", {
            className: "community_view--lightText--g-hBB",
            children: [_$$tx("community.community_account_settings.public_profile"), " ", jsx($n.Link, {
              onClick: () => {
                O(sf({
                  view: "communityHub",
                  subView: "handle",
                  handle: e.profile.profile_handle
                }));
                O(Ce());
              },
              children: M
            })]
          })
        })]
      }), e.profile?.public_at && jsx("div", {
        className: Q,
        children: jsx(ey, {
          user: e.user,
          profile: e.profile
        })
      }), j && jsx("div", {
        className: Q,
        children: jsx(eW, {
          activePurchases: t.slice(0, 5),
          inactivePurchases: n.slice(0, 1),
          shouldSeeMoreActivePurchases: !!o || t.length > 5,
          shouldSeeMoreInactivePurchases: !!d || n.length > 1,
          isPurchasesRequestError: u
        })
      }), U && jsx("div", {
        className: Q,
        children: jsx(H, {
          vatGstId: m,
          shippingAddress: _,
          taxIdVerificationStatus: I,
          userId: e.user.id
        })
      }), e.profile?.public_at && jsx(_$$S, {
        profileId: e.profile.id,
        wrapperClassName: Q
      }), e.user.community_profile_id && jsxs("div", {
        className: X,
        children: [jsx("h3", {
          className: Z,
          children: _$$tx("community.community_account_settings.profile")
        }), jsx($n, {
          variant: "destructiveLink",
          onClick: () => {
            e.profile && O(_$$to({
              type: _$$M,
              data: {
                dispatch: O,
                profileId: e.profile.id,
                handle: e.profile.profile_handle,
                stripe_account_status: e.user.stripe_account_status
              }
            }));
          },
          children: _$$tx("community.community_account_settings.delete_public_profile")
        })]
      })]
    })
  });
}
function e0(e, t) {
  return e.length > 0 || t.length > 0;
}
function e1(e, t) {
  return !!e || !Cg(t);
}
let tm = new class {
  constructor() {
    this.FeedIndicatorPreferenceSchemaValidator = vh();
    this.FeedIndicatorPreferenceSchemaValidatorOnUpdate = vh();
  }
  getFeedIndicatorPreference(e) {
    return this.FeedIndicatorPreferenceSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/feed_indicator_preference/${e.orgId}`));
  }
  updateFeedIndicatorPreference(e) {
    return this.FeedIndicatorPreferenceSchemaValidatorOnUpdate.validate(async ({
      xr: t
    }) => await t.post(`/api/feed_indicator_preference/${e.orgId}`, {
      value: e.value
    }));
  }
}();
let th = "notifications_settings_modal--sectionHeader--is4j1 text--fontPos14--OL9Hp text--_fontBase--QdLsd";
let tg = "notifications_settings_modal--legend--na-Xo text--fontPos13--xW8hS text--_fontBase--QdLsd";
let tf = M4.Query({
  fetch: async (e, {
    reduxStore: t
  }) => {
    try {
      return {
        enabled: !!(await tm.getFeedIndicatorPreference(e)).data.meta
      };
    } catch (e) {
      t.dispatch(_$$s2.error(_$$t2("notification_settings_modal.error_loading_settings")));
      return e;
    }
  }
});
let t_ = M4.Mutation(({
  orgId: e,
  value: t
}, {
  query: i,
  reduxStore: n
}) => {
  i.mutate(tf({
    orgId: e
  }), e => {
    e.enabled = t;
  });
  let r = tm.updateFeedIndicatorPreference({
    orgId: e,
    value: t
  });
  r.catch(() => {
    n.dispatch(_$$s2.error(_$$t2("notification_settings_modal.error_changing_setting")));
  });
  return r;
});
function tA() {
  let e = d4(e => e.currentUserOrgId);
  if (!e) throw Error("FeedSettings rendered with null currentUserOrgId");
  let [t] = IT(tf({
    orgId: e
  }));
  let [i] = mI(t);
  let n = gY(t_);
  let s = useCallback(t => {
    n({
      orgId: e,
      value: t
    });
  }, [n, e]);
  return "loaded" !== i.status ? null : jsxs("div", {
    children: [jsx("h3", {
      className: th,
      children: _$$tx("fig_feed.feed")
    }), jsx(_$$S2, {
      checked: i.data.enabled,
      onChange: s,
      label: jsx(_$$J, {
        children: _$$t2("fig_feed.indicator_for_new_feed_posts")
      })
    }, "sendMeNotifications_indicatorForNewFeedPosts")]
  });
}
function ty() {
  return jsx(_$$tH, {
    boundaryKey: "FeedSettings",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: _$$e2.WAYFINDING
    },
    children: jsx(tA, {})
  });
}
function tE(e) {
  return jsx(_$$b2, {
    readonly: e.disabled,
    onChange: t => {
      e.toggle(e.radioGroupSettings.policyType, t);
    },
    value: e.disabled ? void 0 : e.radioGroupSettings.stateValue,
    legend: jsx(BQ, {
      className: tg,
      children: e.radioGroupSettings.titleText
    }),
    children: Object.entries(e.radioGroupSettings.options).map(([e, t]) => jsx(_$$c, {
      value: e,
      label: jsx(_$$J, {
        children: t
      })
    }, e))
  });
}
function tx(e) {
  return jsx(_$$S2, {
    checked: !e.disabled && e.checkboxSettings.stateValue,
    onChange: t => {
      e.toggle(e.checkboxSettings.policyType, t);
    },
    disabled: e.disabled,
    label: jsx(_$$J, {
      children: e.checkboxSettings.labelText
    })
  }, e.checkboxSettings.policyType);
}
let tS = M4.Query({
  fetch: async (e, {
    reduxStore: t
  }) => {
    try {
      let t = (await _$$z.getUserCommunicationPreference(e)).data.meta;
      let i = {};
      let n = {};
      let r = {};
      Object.entries(t.multiOptionPolicies).map(([e, t]) => {
        let i = {};
        for (let e of t.allValuesToTextArrDict) i[e.id] = e.display_text;
        r[e] = {
          allValuesToText: i,
          value: t.value,
          titleText: t.titleText
        };
      });
      let a = {
        channel: t.channel,
        channelOn: t.channelOn,
        singleOptionPolicies: t.singleOptionPolicies,
        multiOptionPolicies: r
      };
      let s = a.channelOn;
      Object.entries(a.singleOptionPolicies).map(([e, t]) => {
        i[e] = t.value;
      });
      Object.entries(a.multiOptionPolicies).map(([e, t]) => {
        n[e] = t.value;
      });
      return {
        allCheckboxValues: i,
        allRadioGroupValues: n,
        communicationPreferences: a,
        sendMeNotifications: s
      };
    } catch (e) {
      t.dispatch(_$$s2.error(_$$t2("notification_settings_modal.error_loading_settings")));
      return e;
    }
  }
});
let tw = M4.Mutation(({
  channelType: e,
  policyTypesCsv: t,
  policyType: i,
  radioOptionValue: n
}, {
  query: r,
  reduxStore: a
}) => {
  r.mutate(tS({
    channelType: e,
    policyTypesCsv: t
  }), e => {
    e.allRadioGroupValues[i] = n;
  });
  let s = _$$z.updateUserCommunicationPreference({
    channelType: e,
    policyType: i,
    policySetting: n
  });
  s.catch(() => {
    a.dispatch(_$$s2.error(_$$t2("notification_settings_modal.error_changing_setting")));
  });
  return s;
});
let tC = M4.Mutation(({
  channelType: e,
  policyTypesCsv: t,
  policyType: i,
  checkboxValue: n
}, {
  query: r,
  reduxStore: a
}) => {
  r.mutate(tS({
    channelType: e,
    policyTypesCsv: t
  }), e => {
    e.allCheckboxValues[i] = n;
  });
  let s = _$$z.updateUserCommunicationPreference({
    channelType: e,
    policyType: i,
    policySetting: n ? "all" : "none"
  });
  s.catch(() => {
    a.dispatch(_$$s2.error(_$$t2("notification_settings_modal.error_changing_setting")));
  });
  return s;
});
let tT = M4.Mutation(({
  channelType: e,
  policyTypesCsv: t,
  channelSetting: i
}, {
  query: n,
  reduxStore: r
}) => {
  n.mutate(tS({
    channelType: e,
    policyTypesCsv: t
  }), e => {
    e.sendMeNotifications = i;
  });
  let a = _$$z.updateUserCommunicationChannelSetting({
    channelType: e,
    channelSetting: i
  });
  a.catch(() => {
    r.dispatch(_$$s2.error(_$$t2("notification_settings_modal.error_changing_setting")));
  });
  return a;
});
function tk(e) {
  let [t] = IT(tS({
    channelType: e.channelType,
    policyTypesCsv: e.policyTypesCsv
  }));
  let [i] = mI(t);
  let n = _$$gY(tw);
  let s = _$$gY(tC);
  let o = _$$gY(tT);
  let l = useMemo(() => {
    let e = {};
    null === i.data || Object.entries(i.data.communicationPreferences.singleOptionPolicies).map(([t, n]) => {
      let r = {
        titleText: n.titleText,
        stateValue: i.data.allCheckboxValues[t],
        labelText: n.optionText,
        policyType: t
      };
      n.titleText in e ? e[n.titleText].push(r) : e[n.titleText] = [r];
    });
    return e;
  }, [i.data]);
  let d = useMemo(() => {
    let e = {};
    null === i.data || Object.entries(i.data.communicationPreferences.multiOptionPolicies).map(([t, n]) => {
      let r = {
        titleText: n.titleText,
        stateValue: i.data.allRadioGroupValues[t],
        options: n.allValuesToText,
        policyType: t
      };
      e[t] = r;
    });
    return e;
  }, [i.data]);
  let c = useCallback((t, r) => {
    i.data && i.data.allRadioGroupValues[t] !== r && n({
      channelType: e.channelType,
      policyTypesCsv: e.policyTypesCsv,
      policyType: t,
      radioOptionValue: r
    });
  }, [i.data, n, e.channelType, e.policyTypesCsv]);
  let u = useCallback((t, i) => {
    s({
      channelType: e.channelType,
      policyTypesCsv: e.policyTypesCsv,
      policyType: t,
      checkboxValue: i
    });
  }, [s, e.channelType, e.policyTypesCsv]);
  let p = useCallback(t => {
    o({
      channelType: e.channelType,
      policyTypesCsv: e.policyTypesCsv,
      channelSetting: t
    });
  }, [o, e.channelType, e.policyTypesCsv]);
  return "loaded" !== i.status ? null : jsxs("div", {
    children: [jsx("h3", {
      className: th,
      children: e.headerText
    }), jsxs("div", {
      ..._$$Ay.props(tR.optionsContainer, e.infoText ? tR.optionsContainerWithInfoText : null),
      children: [jsx(_$$S2, {
        checked: i.data.sendMeNotifications,
        onChange: p,
        label: jsx(_$$J, {
          children: e.sendMeNotificationsText
        }),
        children: e.infoText
      }), jsxs("div", {
        className: "x78zum5 xdt5ytf x1v2ro7d x19lfox8 x8e5d8q",
        children: [Object.values(d).map(e => jsx(tE, {
          radioGroupSettings: e,
          toggle: c,
          disabled: !i.data.sendMeNotifications
        }, e.policyType)), Object.entries(l).map(([e, t]) => jsxs("fieldset", {
          children: [jsx(BQ, {
            className: tg,
            children: e
          }), t.map(e => jsx(tx, {
            checkboxSettings: e,
            toggle: u,
            disabled: !i.data.sendMeNotifications
          }, e.policyType))]
        }, e))]
      })]
    })]
  });
}
let tR = {
  optionsContainer: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    gap: "x167g77z",
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  optionsContainerWithInfoText: {
    gap: "x1v2ro7d",
    rowGap: null,
    columnGap: null,
    $$css: !0
  }
};
function tN() {
  let e = wA();
  let t = !!_$$f("opted_in_email");
  let i = useCallback(t => {
    e(_$$b({
      opted_in_email: t
    }));
  }, [e]);
  return jsxs("div", {
    children: [jsx("h3", {
      className: th,
      children: _$$tx("notification_settings_modal.product_tips_and_news")
    }), jsx(_$$S2, {
      checked: t,
      label: jsx(_$$J, {
        children: _$$tx("notification_settings_modal.send_me_occasional_emails_with_updates_and_promotions")
      }),
      onChange: i
    })]
  });
}
let tP = M4.Query({
  fetch: async () => ({
    permissionStatus: await navigator.permissions.query({
      name: "notifications"
    }),
    isPushNotificationsSupported: _$$d.isBrowserNotificationSupported()
  })
});
function tO() {
  let [e, t] = useState(!1);
  let [i] = IT(tP({}));
  let [n] = mI(i);
  if ("loaded" !== n.status) return null;
  let s = n.data;
  return !e && s.isPushNotificationsSupported && "prompt" === s.permissionStatus.state ? jsxs("div", {
    children: [jsx("h3", {
      className: "xif65rj",
      children: _$$t2("notification_settings_modal.browser_notifications")
    }), jsx("div", {
      className: "x1y1aw1k",
      children: jsx(_$$J2, {
        children: jsx($n, {
          variant: "link",
          onClick: async () => {
            t((await _$$d.requestPushNotifications(_$$iX.SETTINGS)) === Ke);
          },
          children: _$$t2("notification_settings_modal.browser_notifications.enable")
        })
      })
    })]
  }) : jsx(tk, {
    channelType: "browser_push",
    policyTypesCsv: "FileCommentMentionsAndReplies,InvitesAndRequestsActions",
    headerText: _$$t2("notification_settings_modal.browser_notifications"),
    infoText: void 0,
    sendMeNotificationsText: _$$t2("notification_settings_modal.send_me_browser_push_notifications")
  });
}
function tD() {
  let e = _$$iZ();
  let t = q5();
  let i = _$$w();
  let n = dq();
  let s = null != Au(n);
  let o = !!_$$eD;
  let l = useMemo(() => {
    let e = ["FileComments", "InvitesAndRequests", "CommunityComments", "CommunityWeeklySummary"];
    i && e.push("TeamFeed");
    getFeatureFlags().xr_debounce_threshold && e.push("FeedWeeklyDigest");
    s && e.push("WorkspaceActivity");
    return e.join(",");
  }, [i, s]);
  return jsx(fu, {
    name: _$$e.NOTIFICATION_SETTINGS_MODAL,
    properties: {
      user_id: e?.id,
      fileKey: t?.key
    },
    children: jsx(er, {
      children: jsx("div", {
        className: "x78zum5 xdt5ytf x1665zp3 xh8yej3",
        children: jsxs(Suspense, {
          fallback: jsx("div", {
            className: "x78zum5 xl56j7k",
            children: jsx(_$$k2, {})
          }),
          children: [_$$d.isBrowserNotificationSupported() && jsx(tO, {}), o && jsx(tk, {
            channelType: "desktop_push",
            policyTypesCsv: "FileComments",
            headerText: _$$t2("notification_settings_modal.desktop_notifications"),
            infoText: void 0,
            sendMeNotificationsText: _$$t2("notification_settings_modal.send_me_desktop_push_notifications")
          }), jsx(tk, {
            channelType: "email",
            policyTypesCsv: l,
            headerText: _$$t2("notification_settings_modal.email_notifications"),
            infoText: _$$t2("notification_settings_modal.you_ll_still_get_emails_from_Figma_about_your_account"),
            sendMeNotificationsText: _$$t2("notification_settings_modal.send_me_notifications_by_email")
          }), i && jsx(ty, {}), jsx(tN, {}), jsx("div", {
            className: "notifications_settings_modal--emailDisclaimer--EJ14Q",
            children: _$$tx("notification_settings_modal.unsubscribe_from_figma_emails_disclaimer", {
              privacy_policy: jsx(Ph, {
                href: "https://figma.com/privacy",
                newTab: !0,
                trusted: !0,
                children: _$$tx("notification_settings_modal.privacy_policy")
              })
            })
          })]
        })
      })
    })
  });
}
var tq = (e => (e[e.Unknown = 0] = "Unknown", e[e.Mobile = 1] = "Mobile", e[e.Desktop = 2] = "Desktop", e))(tq || {});
let tJ = Ju(function(e) {
  let t = wA();
  let i = hS(e);
  let n = _$$X3();
  return jsx(bL, {
    manager: i,
    width: "md",
    children: jsxs(Rq, {
      onSubmit: e => {
        e.preventDefault();
        let i = e.target.elements;
        t(_$$ec({
          passwordOld: i.passwordOld.value,
          passwordNew: i.passwordNew.value,
          passwordRetype: i.passwordRetype.value
        }));
      },
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$tx("settings.account_setting.change_password_modal_header")
        })
      }), jsxs(_$$nB, {
        children: [jsx("input", {
          name: "passwordOld",
          type: "password",
          autoComplete: "current-password",
          className: _Z,
          ref: n,
          placeholder: _$$t2("settings.account_setting.change_password_current_password_placeholder")
        }), jsx("input", {
          name: "passwordNew",
          type: "password",
          autoComplete: "new-password",
          className: _Z,
          placeholder: _$$t2("settings.account_setting.change_password_new_password_placeholder")
        }), jsx("input", {
          name: "passwordRetype",
          type: "password",
          className: _Z,
          placeholder: _$$t2("settings.account_setting.change_password_confirm_password_placeholder")
        })]
      }), jsxs(wi, {
        children: [jsx($n, {
          onClick: () => {
            t(BD());
          },
          variant: "link",
          children: _$$tx("settings.account_setting.forgot_password")
        }), jsx(jk, {
          children: jsx($n, {
            type: "submit",
            children: _$$tx("settings.account_setting.submit_button")
          })
        })]
      })]
    })
  });
}, "CHANGE_PASSWORD_MODAL", ZU.YES);
let t4 = Ju(function(e) {
  let t = _$$iZ();
  let i = _$$Z();
  let n = wA();
  let a = hS(e);
  return t ? pS(t) ? jsx(_$$R2, {
    title: jsx(zd, {}),
    onConfirm: () => {
      pS(t) && n(_$$eu({
        token: t.password_token
      }));
    },
    confirmText: jsx(Bb, {}),
    onClose: e.onClose,
    open: e.open,
    width: "lg",
    height: "fixed",
    children: t.phone_number ? _$$tx("auth.two-factor-setup.remove-app-with-sms-two-factor-on") : jsx(B7, {})
  }) : jsx(bL, {
    manager: a,
    width: "lg",
    height: "fixed",
    children: jsx(_$$_, {
      fplModal: !0,
      twoFactorAuth: i,
      title: _$$tx("auth.two-factor-setup.disable_two_factor_auth")
    })
  }) : null;
}, "DisableTwoFactorModal");
let iu = _$$nF((e, {
  id: t
}) => {
  if (!e.getState().user) return;
  let i = e.getState().user;
  let n = i.dev_tokens || [];
  e.dispatch(yJ({
    user: {
      id: i.id,
      dev_tokens: n.map(e => e.id === t ? {
        ...e,
        token: void 0
      } : e)
    },
    userInitiated: !1
  }));
});
let ip = _$$nF(async (e, t) => {
  if (!e.getState().user) return;
  let i = e.getState().user;
  try {
    let n = (await _$$k3.createDevToken(t)).data.meta;
    let r = i.dev_tokens || [];
    e.dispatch(yJ({
      user: {
        id: i.id,
        dev_tokens: [n, ...r]
      },
      userInitiated: !1
    }));
  } catch (i) {
    let t = "Could not add personal access token";
    i instanceof XHRError && i.status >= 400 && i.status < 500 ? $D(_$$e2.EXTENSIBILITY, i) : t = `Could not add personal access token: ${i.message}`;
    e.dispatch(_$$F.enqueue({
      message: t,
      error: !0
    }));
  }
});
let iy = [1, 7, 30, 90];
function ib({
  scope: e,
  accessLevel: t,
  onAccessLevelChange: i
}) {
  let n = qq(e);
  return jsxs(_$$Y, {
    direction: "horizontal",
    horizontalAlignItems: "space-between",
    verticalAlignItems: "start",
    children: [jsxs(_$$Y, {
      direction: "vertical",
      spacing: 4,
      children: [jsx(_$$E2, {
        children: n.name
      }), jsx(_$$E2, {
        color: "secondary",
        children: n.description
      })]
    }), jsx(_$$Y, {
      width: 128,
      horizontalAlignItems: "end",
      children: jsx(b8, {
        value: t,
        options: n.levels,
        onChange: t => {
          i(e, t);
        },
        getPermissionName: e => E0(e),
        label: _$$t2("tokens.settings.dev_token_modal.permission_selector_label", {
          resource: n.name
        })
      })
    })]
  });
}
let iv = Ju(function(e) {
  let [t, i] = useState("");
  let [n, o] = useState(30);
  let [d, u] = useState({
    [IJ.CODE_CONNECT]: _$$eK.NO_ACCESS,
    [IJ.COMMENTS]: _$$eK.NO_ACCESS,
    [IJ.CURRENT_USER]: _$$eK.NO_ACCESS,
    [IJ.DEV_RESOURCES]: _$$eK.NO_ACCESS,
    [IJ.FILE_CONTENT]: _$$eK.NO_ACCESS,
    [IJ.FILE_METADATA]: _$$eK.NO_ACCESS,
    [IJ.FILE_VERSIONS]: _$$eK.NO_ACCESS,
    [IJ.LIBRARY_ANALYTICS]: _$$eK.NO_ACCESS,
    [IJ.LIBRARY_ASSETS]: _$$eK.NO_ACCESS,
    [IJ.LIBRARY_CONTENT]: _$$eK.NO_ACCESS,
    [IJ.PROJECTS]: _$$eK.NO_ACCESS,
    [IJ.TEAM_LIBRARY_CONTENT]: _$$eK.NO_ACCESS,
    [IJ.VARIABLES]: _$$eK.NO_ACCESS,
    [IJ.WEBHOOKS]: _$$eK.NO_ACCESS
  });
  let g = hS(e);
  let {
    org
  } = e;
  let _ = wA();
  let A = e => _$$t2("tokens.settings.dev_token_modal.expiration_option", {
    numDays: e
  });
  let y = useMemo(() => n > 0 ? _$$tx("tokens.settings.dev_token_modal.expiration_description", {
    expiry: _$$A6().add(n, "day").toDate()
  }) : _$$tx("tokens.settings.dev_token_modal.expiration_description_never"), [n]);
  let I = (e, t) => {
    u({
      ...d,
      [e]: t
    });
  };
  return jsx(bL, {
    manager: g,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t2("tokens.settings.generate_new_token")
        })
      }), jsx(_$$nB, {
        children: jsxs(_$$Y, {
          direction: "vertical",
          spacing: 16,
          padding: 16,
          children: [jsx(_$$E2, {
            children: _$$tx("tokens.settings.dev_token_modal.description")
          }), jsx(ks, {
            className: _$$s.wFull.$,
            placeholder: _$$t2("tokens.settings.dev_token_modal.name_placeholder"),
            value: t,
            onChange: e => {
              i(e.target.value);
            },
            autoFocus: !0,
            autoComplete: "off"
          }), jsxs(_$$Y, {
            direction: "vertical",
            spacing: 8,
            children: [jsx(_$$E2, {
              fontSize: 13,
              children: _$$tx("tokens.settings.dev_token_modal.expiration_header")
            }), jsxs(_$$bL, {
              value: String(n),
              onChange: e => {
                e && o(Number(e));
              },
              children: [jsx(l9, {
                label: jsx(_$$h2, {
                  children: _$$tx("tokens.settings.dev_token_modal.expiration_header")
                }),
                description: y
              }), jsxs(mc, {
                children: [iy.map(e => jsx(_$$c$, {
                  value: String(e),
                  children: A(e)
                }, e)), !getFeatureFlags().rest_api_require_expiration_on_pat_creation && jsx(_$$c$, {
                  value: "0",
                  children: _$$tx("tokens.settings.dev_token_modal.no_expiration_option")
                }, "0")]
              })]
            })]
          }), jsxs(_$$Y, {
            direction: "vertical",
            children: [jsx(_$$E2, {
              fontSize: 13,
              children: _$$tx("tokens.settings.dev_token_modal.scopes_header")
            }), jsxs(_$$Y, {
              direction: "vertical",
              spacing: 16,
              children: [getFeatureFlags().dt_figmadoc && org && jsx(ib, {
                scope: IJ.CODE_CONNECT,
                accessLevel: d[IJ.CODE_CONNECT],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.COMMENTS,
                accessLevel: d[IJ.COMMENTS],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.CURRENT_USER,
                accessLevel: d[IJ.CURRENT_USER],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.DEV_RESOURCES,
                accessLevel: d[IJ.DEV_RESOURCES],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.FILE_CONTENT,
                accessLevel: d[IJ.FILE_CONTENT],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.FILE_METADATA,
                accessLevel: d[IJ.FILE_METADATA],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.FILE_VERSIONS,
                accessLevel: d[IJ.FILE_VERSIONS],
                onAccessLevelChange: I
              }), org && kA(org) && jsx(ib, {
                scope: IJ.LIBRARY_ANALYTICS,
                accessLevel: d[IJ.LIBRARY_ANALYTICS],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.LIBRARY_ASSETS,
                accessLevel: d[IJ.LIBRARY_ASSETS],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.LIBRARY_CONTENT,
                accessLevel: d[IJ.LIBRARY_CONTENT],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.PROJECTS,
                accessLevel: d[IJ.PROJECTS],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.TEAM_LIBRARY_CONTENT,
                accessLevel: d[IJ.TEAM_LIBRARY_CONTENT],
                onAccessLevelChange: I
              }), (getFeatureFlags().ds_variables_pp_force_enterprise || org && kA(org)) && jsx(ib, {
                scope: IJ.VARIABLES,
                accessLevel: d[IJ.VARIABLES],
                onAccessLevelChange: I
              }), jsx(ib, {
                scope: IJ.WEBHOOKS,
                accessLevel: d[IJ.WEBHOOKS],
                onAccessLevelChange: I
              })]
            })]
          })]
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: () => _(Lo()),
            variant: "secondary",
            children: _$$tx("tokens.settings.dev_token_modal.cancel")
          }), jsx($n, {
            type: "submit",
            disabled: !(t && Object.values(d).some(e => e !== _$$eK.NO_ACCESS)),
            variant: "primary",
            onClick: () => {
              _(ip({
                desc: t,
                scopes: Wc(d),
                expiration: 0 === n ? void 0 : _$$A6.duration({
                  days: n
                }).asSeconds()
              }));
              _(Lo());
            },
            children: _$$tx("tokens.settings.dev_token_modal.cta")
          })]
        })
      })]
    })
  });
}, "DevTokenModal");
let iI = "tokens--devTokenInfo--hNK--";
let iE = "tokens--textTertiary--ydWjy";
let ix = new Date("2025-12-01T09:00-08:00");
let iS = "https://help.figma.com/hc/articles/12345678901234";
function iw(e) {
  let {
    token,
    user,
    nonExpPatRevocationStage
  } = e;
  let s = wA();
  let [o, l] = useState(null);
  let d = useCallback(() => (l(token.id), XHR.del(`/api/user/dev_tokens/${token.id}`).then(e => {
    l(null);
    s(yJ({
      user: {
        id: user.id,
        dev_tokens: e.data.meta.tokens
      },
      userInitiated: !1
    }));
  }).catch(() => {
    l(null);
    s(_$$s2.error("Could not revoke token, please try again"));
  }), () => { }), [s, token, user.id]);
  let c = token.scopes ?? [sy.FILES_READ_DEPRECATING, sy.FILE_COMMENTS_WRITE, sy.FILE_DEV_RESOURCES_WRITE, sy.WEBHOOKS_WRITE];
  let u = Object.entries(av(c)).filter(([, e]) => e !== _$$eK.NO_ACCESS).map(([e, t]) => {
    let i = qq(e).name;
    let n = E0(t);
    return `${i}: ${n}`;
  }).join("\n");
  if (token.expires_at && _$$A6.utc(token.expires_at).isBefore(_$$A6.utc())) return null;
  let p = token.expires_at ? _$$tx("tokens.settings.expires", {
    relativeTimeString: jsx(h1, {
      date: token.expires_at
    })
  }) : "revoked" === nonExpPatRevocationStage ? jsxs(Fragment, {
    children: [_$$tx("tokens.settings.token_was_revoked", {
      revocationDate: ix
    }), " ", jsx(_$$N, {
      newTab: !0,
      href: iS,
      children: _$$tx("tokens.settings.learn_more")
    })]
  }) : "grace_period" === nonExpPatRevocationStage ? jsxs(Fragment, {
    children: [_$$tx("tokens.settings.token_will_be_revoked", {
      revocationDate: ix
    }), " ", jsx(_$$N, {
      newTab: !0,
      href: iS,
      children: _$$tx("tokens.settings.learn_more")
    })]
  }) : _$$tx("tokens.settings.never_expires");
  let g = token.expires_at || "revoked" !== nonExpPatRevocationStage ? _$$tx("tokens.settings.revoke_access") : _$$tx("tokens.settings.remove_revoked");
  return jsxs(_$$Y, {
    horizontalAlignItems: "space-between",
    padding: {
      vertical: 8
    },
    children: [jsxs(_$$Y, {
      verticalAlignItems: "start",
      children: [jsx("div", {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": u,
        "data-tooltip-text-left": !0,
        className: _$$s.colorIcon.$,
        children: jsx(_$$m, {})
      }), jsxs(_$$Y, {
        direction: "vertical",
        spacing: 4,
        children: [jsx("div", {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": u,
          "data-tooltip-text-left": !0,
          children: token.description
        }), jsx("div", {
          className: _$$s.colorTextSecondary.$,
          children: p
        })]
      })]
    }), jsxs(_$$Y, {
      direction: "vertical",
      spacing: 4,
      horizontalAlignItems: "end",
      children: [jsx("div", {
        children: token.last_used ? _$$tx("tokens.settings.last_used", {
          relativeTimeString: _$$A6(token.last_used).from(Date.now())
        }) : _$$tx("tokens.settings.never_used")
      }), jsx("button", {
        onClick: d,
        style: _$$sx.$$if(null !== o, _$$sx.colorTextDisabled, _$$sx.colorTextDanger).cursorPointer.mr0.p0.add({
          backgroundColor: "transparent",
          border: "none"
        }).$,
        children: g
      })]
    })]
  }, token.id);
}
function iC(e) {
  let t = e.token;
  let i = wA();
  return jsxs(_$$Y, {
    padding: 12,
    backgroundColor: "warning-tertiary",
    cornerRadius: 4,
    verticalAlignItems: "start",
    children: [jsx(_$$m, {}), jsxs(_$$Y, {
      direction: "vertical",
      spacing: 8,
      children: [jsx(_$$E2, {
        fontWeight: "semi-bold",
        children: t.description
      }), jsx(_$$Y, {
        padding: 8,
        strokeColor: "default",
        strokeWidth: 1,
        cornerRadius: 4,
        backgroundColor: "secondary",
        children: jsx(_$$E2, {
          fontFamily: "monospace",
          children: t.token
        })
      }), jsxs("div", {
        children: [jsx("button", {
          className: _$$s.colorTextWarning.bgTransparent.cursorPointer.$,
          onClick: () => {
            i(lW({
              stringToCopy: t.token || ""
            }));
          },
          children: _$$tx("tokens.settings.copy_token")
        }), " ", _$$tx("tokens.settings.new_token_reminder")]
      })]
    }), jsx("button", {
      className: _$$s.h16.px2.bgTransparent.cursorPointer.$,
      "aria-label": _$$t2("general.close"),
      onClick: () => {
        e.onClose(t.id);
      },
      children: jsx(_$$L, {})
    })]
  });
}
function iT(e) {
  let t = e.user.dev_tokens || [];
  t && t.sort((e, t) => Number(t.id) - Number(e.id));
  let i = md(_$$Z2);
  let n = wA();
  let a = e => {
    n(iu({
      id: e
    }));
  };
  _$$h(() => {
    t?.[0]?.token && a(t[0].id);
  });
  return jsxs("div", {
    className: Q,
    children: [jsx("div", {
      className: Z,
      children: _$$tx("tokens.settings.developer_tokens_title")
    }), jsx("div", {
      className: iI,
      children: _$$tx("tokens.settings.developer_tokens_description")
    }), jsx($n, {
      variant: "link",
      onClick: () => {
        n(_$$to({
          type: iv,
          data: {
            org: i
          }
        }));
      },
      children: _$$tx("tokens.settings.generate_new_token")
    }), t.map((t, i) => 0 === i && t.token ? jsx(iC, {
      token: t,
      onClose: a
    }, t.id) : jsx(iw, {
      user: e.user,
      token: t,
      nonExpPatRevocationStage: function() {
        let e = getFeatureFlags();
        return e.non_exp_pat_enable_revocation ? "revoked" : e.non_exp_pat_enable_revocation_advance_notice ? "grace_period" : "none";
      }()
    }, t.id))]
  });
}
function ik(e) {
  let t = e.user.oauth_tokens;
  return jsxs("div", {
    className: e.last ? X : Q,
    children: [jsx("div", {
      className: Z,
      children: _$$tx("tokens.settings.connected_apps_title")
    }), jsx("div", {
      className: iI,
      children: _$$tx("tokens.settings.connected_apps_description")
    }), 0 === t.length && jsx("div", {
      className: iE,
      children: _$$tx("tokens.settings.no_connected_apps")
    }), t.map(t => jsx(iR, {
      userId: e.user.id,
      token: t
    }, t.client_id))]
  });
}
function iR({
  userId: e,
  token: t
}) {
  let [i, n] = useState(!1);
  let s = wA();
  let o = useCallback(t => {
    n(!0);
    XHR.del(`/api/oauth/token/${t.client_id}`).then(t => {
      s(yJ({
        user: {
          id: e,
          oauth_tokens: t.data.meta.tokens
        },
        userInitiated: !1
      }));
    }).catch(() => {
      s(_$$s2.error("Could not revoke token, please try again"));
    }).$$finally(() => {
      n(!1);
    });
  }, [s, e]);
  return jsxs("div", {
    className: "tokens--devToken--NXMxx",
    children: [jsxs("div", {
      className: "tokens--devTokenDesc--yh3N6",
      children: [jsx("div", {
        className: "tokens--oauthLogo--wG5bu",
        children: jsx("img", {
          src: t.logo,
          alt: ""
        })
      }), jsxs("div", {
        className: "tokens--tokenNameBox--HQr4d",
        children: [t.name, " \xa0\xa0", " ", jsx("span", {
          className: iE,
          children: t.website
        })]
      })]
    }), jsxs("div", {
      className: "tokens--devTokenMeta--k7uCC",
      children: [jsx("div", {
        className: "tokens--devTokenLastUsed--hKrY3",
        children: _$$tx("tokens.settings.connected_time_ago", {
          timeAgo: jsx(h1, {
            date: t.granted_at
          })
        })
      }), jsx($n, {
        variant: i ? "destructiveLink" : "link",
        onClick: () => o(t),
        children: _$$tx("tokens.settings.revoke_access")
      })]
    })]
  });
}
let iN = "security_view--sessionColumn---TpUP";
let iP = "security_view--secondary--gCsH-";
let iO = "security_view--separator--lMLrr";
let iD = "security_view--loadingOrError--pB2EB";
let iL = e => {
  switch (e) {
    case tq.Mobile:
      return jsx(_$$D, {});
    case tq.Desktop:
      return jsx(_$$X2, {});
    default:
      return jsx(_$$V, {});
  }
};
function iF({
  session: e,
  onSessionRevoked: t
}) {
  let [i, n] = useState(!1);
  let s = wA();
  let o = useCallback(e => {
    s(_$$F.clearAll());
    n(!0);
    _$$H.deleteSession(e).then(() => {
      s(_$$F.enqueue({
        message: _$$t2("sessions.bell.success"),
        timeoutOverride: 5e3
      }));
      t(e);
    }).catch(() => {
      n(!1);
      s(_$$F.enqueue({
        message: _$$t2("sessions.bell.fail"),
        timeoutOverride: 5e3,
        error: !0
      }));
    });
  }, [s, t]);
  let l = (() => {
    let t = e.last_city && "" !== e.last_city.trim();
    let i = e.last_country && "" !== e.last_country.trim();
    return t && i ? `${e.last_city}, ${e.last_country}` : i ? e.last_country : t ? e.last_city : null;
  })();
  return jsxs("div", {
    className: "security_view--row--5jcGd text--fontPos12--YsUAh text--_fontBase--QdLsd",
    children: [jsx("div", {
      className: iN,
      children: jsxs("div", {
        className: "security_view--iconContainer--Rhatz",
        children: [jsx("div", {
          children: iL(e.icon)
        }), jsxs("div", {
          className: "security_view--textContainer--YQfIZ",
          children: [l ? jsx("div", {
            className: "security_view--truncateContainer--i-kTa",
            children: jsx(_$$G, {
              text: l
            })
          }) : _$$tx("sessions.null.location"), jsxs("span", {
            className: iP,
            children: [e.type, " \xb7 ", e.last_ip ?? _$$tx("sessions.null.ip")]
          })]
        })]
      })
    }), jsx("div", {
      className: iN,
      children: "" === (e.os ?? "").trim() && "" === (e.browser ?? "").trim() ? jsx("div", {
        className: "security_view--font13--OKF-H text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: "-"
      }) : jsxs("div", {
        children: [e.os ?? "-", jsx("br", {}), jsx("div", {
          className: iP,
          children: e.browser ?? "-"
        })]
      })
    }), jsxs("div", {
      className: iN,
      children: [e.last_accessed ? jsx(h1, {
        date: e.last_accessed,
        capitalize: !0
      }) : "-", jsx("br", {}), jsxs("div", {
        className: iP,
        children: [_$$tx("sessions.row.created"), " ", jsx(h1, {
          date: e.created_at
        })]
      })]
    }), jsx("div", {
      className: iN,
      children: e.is_current ? jsx("div", {
        className: "security_view--disabled--9KmOm",
        children: _$$tx("sessions.session.current_session")
      }) : jsx(_$$E, {
        className: "security_view--sessionRevokeEnabled--Tm88T",
        style: _$$sx.$$if(i, _$$sx.colorTextDisabled, _$$sx.colorTextDanger).$,
        onClick: () => o(e.id),
        children: _$$tx("sessions.session.revoke_session")
      })
    })]
  });
}
function iM({
  user: e
}) {
  let t = wA();
  let i = Rs(Yh6({}));
  let n = oA(i.data?.currentUser?.isMfaRequiredByMembershipOrg);
  let a = e.two_factor_app_enabled;
  let s = e.phone_number;
  let o = a || s;
  let l = e.google_sso_only || e.saml_sso_only;
  let d = n && !s;
  let c = () => t(_$$to({
    type: _$$J3,
    showModalsBeneath: !0
  }));
  let u = () => t(_$$to({
    type: _$$t3,
    showModalsBeneath: !0
  }));
  return jsxs("div", {
    children: [!l && jsxs(Fragment, {
      children: [jsx("div", {
        className: Z,
        children: _$$tx("settings.account_settings.password_section_header")
      }), jsx($n, {
        variant: "link",
        onClick: () => t(_$$to({
          type: tJ,
          showModalsBeneath: !0
        })),
        children: _$$tx("settings.account_settings.change_password_link")
      })]
    }), !o && jsx("div", {
      className: J,
      children: jsx($n, {
        variant: "link",
        onClick: () => {
          sx("Two-factor setup started");
          u();
        },
        children: _$$tx("auth.two-factor-setup.enable_two_factor_authentication")
      })
    }), o && jsxs(Fragment, {
      children: [jsx("div", {
        className: Z,
        children: _$$tx("auth.two-factor-setup.two_factor_authentication_is_enabled")
      }), a && jsxs("div", {
        className: J,
        children: [jsx("span", {
          className: et,
          children: _$$tx("auth.two-factor-setup.authenticator_apps_are_enabled")
        }), jsx($n, {
          variant: "link",
          onClick: () => t(_$$to({
            type: t4,
            showModalsBeneath: !0
          })),
          disabled: d,
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": d ? _$$t2("auth.two-factor-setup.disable-two-factor-blocked") : "",
          children: _$$tx("auth.two-factor-setup.disable-authenticator-app")
        })]
      }), s && jsxs("div", {
        className: J,
        children: [jsx("span", {
          className: et,
          children: _$$tx("auth.two-factor-setup.connected_cell_phone_number_tfa_phone_number", {
            phoneNumber: s
          })
        }), jsx($n, {
          variant: "link",
          onClick: c,
          children: _$$tx("auth.two-factor-setup.configure-sms")
        })]
      }), !a && jsx("div", {
        className: J,
        children: jsx($n, {
          variant: "link",
          onClick: u,
          children: _$$tx("auth.two-factor-setup.connect_authenticator_app")
        })
      }), !s && jsx("div", {
        className: J,
        children: jsx($n, {
          variant: "link",
          onClick: c,
          children: _$$tx("auth.two-factor-setup.connect_cell_phone_number")
        })
      }), jsx("div", {
        className: J,
        children: jsx($n, {
          variant: "link",
          onClick: () => t(_$$to({
            type: _$$J4,
            showModalsBeneath: !0
          })),
          children: _$$tx("auth.two-factor-setup.show_recovery_codes")
        })
      })]
    })]
  });
}
function ij({
  user: e
}) {
  let [t, i] = useState([]);
  let [n, s] = useState(!0);
  let [o, l] = useState(!1);
  useEffect(() => {
    null != e && _$$H.getSessions().then(e => {
      i(e.data.meta.sessions.sort((e, t) => Number(t.is_current) - Number(e.is_current)));
      s(!1);
    }).catch(() => {
      l(!0);
      s(!1);
    });
  }, [e]);
  let d = e => {
    i(t => t.filter(t => t.id !== e));
  };
  return null == e ? jsx("div", {
    className: iD,
    children: _$$tx("sessions.error.logged_out")
  }) : n ? jsx("div", {
    className: iD,
    children: jsx(kt, {})
  }) : o ? jsx("div", {
    className: iD,
    children: _$$tx("sessions.error.no_sessions")
  }) : jsxs("div", {
    children: [jsx("div", {
      className: Z,
      children: _$$tx("sessions.header.title")
    }), jsx("div", {
      className: "security_view--description--U-GX5 text--fontPos12--YsUAh text--_fontBase--QdLsd",
      children: _$$tx("sessions.header.description")
    }), jsxs("div", {
      className: "security_view--headers--4Ucwg text--fontPos12--YsUAh text--_fontBase--QdLsd",
      children: [jsx("div", {
        className: iN,
        children: _$$tx("sessions.column.location_ip")
      }), jsx("div", {
        className: iN,
        children: _$$tx("sessions.column.os_browser")
      }), jsx("div", {
        className: iN,
        children: _$$tx("sessions.column.accessed_created")
      }), jsx("div", {
        className: iN,
        children: _$$tx("sessions.column.manage")
      })]
    }), jsxs("div", {
      className: "security_view--sessionsList--vBsBG",
      children: [jsx("hr", {
        className: iO
      }), t.map((e, i) => jsxs(_$$Fragment, {
        children: [jsx(iF, {
          session: e,
          onSessionRevoked: d
        }), i < t.length - 1 && jsx("hr", {
          className: iO
        })]
      }, e.id))]
    })]
  });
}
let iU = "sessions_view--sessionColumn--jZGU3";
let iB = "sessions_view--secondary--UkcV7";
let iV = "sessions_view--separator--tUb6b";
let iG = "sessions_view--loadingOrError--FreWS";
let iz = e => {
  switch (e) {
    case tq.Mobile:
      return jsx(_$$D, {});
    case tq.Desktop:
      return jsx(_$$X2, {});
    default:
      return jsx(_$$V, {});
  }
};
function iH({
  session: e,
  onSessionRevoked: t
}) {
  let [i, n] = useState(!1);
  let s = wA();
  let o = useCallback(e => {
    s(_$$F.clearAll());
    n(!0);
    _$$H.deleteSession(e).then(() => {
      s(_$$F.enqueue({
        message: _$$t2("sessions.bell.success"),
        timeoutOverride: 5e3
      }));
      t(e);
    }).catch(() => {
      n(!1);
      s(_$$F.enqueue({
        message: _$$t2("sessions.bell.fail"),
        timeoutOverride: 5e3,
        error: !0
      }));
    });
  }, [s, t]);
  let l = (() => {
    let t = e.last_city && "" !== e.last_city.trim();
    let i = e.last_country && "" !== e.last_country.trim();
    return t && i ? `${e.last_city}, ${e.last_country}` : i ? e.last_country : t ? e.last_city : null;
  })();
  return jsxs("div", {
    className: "sessions_view--row--VzGE- text--fontPos12--YsUAh text--_fontBase--QdLsd",
    children: [jsx("div", {
      className: iU,
      children: jsxs("div", {
        className: "sessions_view--iconContainer--d3pAo",
        children: [jsx("div", {
          children: iz(e.icon)
        }), jsxs("div", {
          className: "sessions_view--textContainer--Xloq9",
          children: [l ? jsx("div", {
            className: "sessions_view--truncateContainer--G6HTB",
            children: jsx(_$$G, {
              text: l
            })
          }) : _$$tx("sessions.null.location"), jsxs("span", {
            className: iB,
            children: [e.type, " \xb7 ", e.last_ip ?? _$$tx("sessions.null.ip")]
          })]
        })]
      })
    }), jsx("div", {
      className: iU,
      children: "" === (e.os ?? "").trim() && "" === (e.browser ?? "").trim() ? jsx("div", {
        className: "sessions_view--font13--qgcmc text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: "-"
      }) : jsxs("div", {
        children: [e.os ?? "-", jsx("br", {}), jsx("div", {
          className: iB,
          children: e.browser ?? "-"
        })]
      })
    }), jsxs("div", {
      className: iU,
      children: [e.last_accessed ? jsx(h1, {
        date: e.last_accessed,
        capitalize: !0
      }) : "-", jsx("br", {}), jsxs("div", {
        className: iB,
        children: [_$$tx("sessions.row.created"), " ", jsx(h1, {
          date: e.created_at
        })]
      })]
    }), jsx("div", {
      className: iU,
      children: e.is_current ? jsx("div", {
        className: "sessions_view--disabled--Zo0XR",
        children: _$$tx("sessions.session.current_session")
      }) : jsx(_$$E, {
        className: "sessions_view--sessionRevokeEnabled--d-6RK",
        style: _$$sx.$$if(i, _$$sx.colorTextDisabled, _$$sx.colorTextDanger).$,
        onClick: () => o(e.id),
        children: _$$tx("sessions.session.revoke_session")
      })
    })]
  });
}
let nt = _$$nF((e, t) => {
  let i = PG(t);
  if (i.message) return e.dispatch(_$$s2.error(i.message));
  let n = XHR.put("/api/user", t);
  n.then(() => {
    let i = e.getState();
    i.modalShown && i.modalShown.type === ni.type && e.dispatch(Lo());
    e.dispatch(_$$s2.flash(_$$t2("api_user.verify-email-message", {
      email: t.email
    })));
  }).catch(e => {
    console.error("Couldn't change email", e);
  });
  e.dispatch(_$$Q({
    promise: n,
    fallbackError: _$$t2("api_user.error.an_error_occurred_while_updating_your_information")
  }));
  return n;
});
let ni = Ju(function(e) {
  let t = wA();
  return jsx(nr, {
    ...e,
    onSubmitChangeEmail: e => {
      t(nt(e));
    },
    onClickForgotPassword: () => {
      t(BD());
    }
  });
}, "ChangeEmailModal");
function nn({
  userEmailFeatures: e
}) {
  let t = _$$lW();
  let i = T5("EmailChangeWarning").unwrapOr(null);
  let n = i?.name;
  return t && n ? jsx("div", {
    className: _$$s.flex.mt16.bRadius8.p16.colorBgDangerTertiary.flexColumn.$,
    children: jsxs("div", {
      className: _$$s.flex.flexColumn.$,
      children: [jsx(_$$B, {
        svg: _$$A4,
        className: _$$s.mb4.$
      }), jsx("div", {
        className: _$$s.flex.itemsCenter.fontMedium.$,
        children: _$$tx("settings.account_setting.change_email_mfa_required_warning.title", {
          orgName: n
        })
      }), jsx("div", {
        className: _$$s.colorTextSecondary.mt4.$,
        children: _$$tx("settings.account_setting.change_email_mfa_required_warning.description", {
          orgName: n
        })
      })]
    })
  }) : e?.org_domain ? jsx("p", {
    className: "change_email--emailDomainChangeWarning--m8yvo",
    children: _$$tx("settings.account_setting.change_email_context_org_warning", {
      orgDomain: e.org_domain.domain
    })
  }) : null;
}
function nr({
  open: e,
  onClose: t,
  onSubmitChangeEmail: i,
  onClickForgotPassword: n
}) {
  let [s, o] = useState("");
  let [l, d] = useState("");
  let [c, u] = useState(null);
  useEffect(() => {
    (async () => {
      u((await _$$k3.getEmailFeatures()).data.meta);
    })();
  }, []);
  let p = _$$X3();
  return jsxs(_$$R2, {
    open: e,
    onClose: t,
    title: _$$t2("settings.account_settings.change_email_modal_title"),
    confirmText: _$$t2("settings.account_setting.submit_button"),
    onConfirm: e => {
      e.preventDefault();
      i({
        email: s,
        password: l
      });
    },
    footerText: jsx($n, {
      variant: "link",
      onClick: n,
      children: _$$tx("settings.account_setting.forgot_password")
    }),
    width: "lg",
    children: [jsx("p", {
      children: _$$tx("settings.account_setting.change_email_context")
    }), jsx(nn, {
      userEmailFeatures: c
    }), jsx(ks, {
      name: "email",
      type: "text",
      className: _Z,
      ref: p,
      placeholder: _$$t2("settings.account_setting.change_email_input_placeholder"),
      value: s,
      onChange: e => o(e.target.value)
    }), jsx(ks, {
      name: "password",
      type: "password",
      className: _Z,
      placeholder: _$$t2("settings.account_setting.change_email_confirm_password_placeholder"),
      value: l,
      onChange: e => d(e.target.value)
    })]
  });
}
let n_ = createContext({
  schema: _$$Ay3.object({}),
  size: "md"
});
let nA = createContext({
  name: ""
});
function ny(e) {
  let {
    name
  } = useContext(nA);
  let {
    schema
  } = useContext(n_);
  let n = e ?? name;
  return useMemo(() => schema?.shape?.[n] ? schema.shape[n] : null, [n, schema]);
}
function nb() {
  let e = ny();
  return useMemo(() => !!e && !e.isOptional(), [e]);
}
let nI = e => Array.isArray(e?.issues);
let nE = e => "_def" in e && "object" == typeof e._def && "typeName" in e._def;
let nx = e => e instanceof a$H;
let nS = e => "_zod" in e && "object" == typeof e._zod;
function nw(e, t) {
  t.shouldUseNativeValidation && nR(e, t);
  let i = {};
  for (let n in e) {
    let r = Jt(t.fields, n);
    let a = Object.assign(e[n] || {}, {
      ref: r && r.ref
    });
    if (nC(t.names || Object.keys(e), n)) {
      let e = {
        ...Jt(i, n)
      };
      hZ(e, "root", a);
      hZ(i, n, e);
    } else hZ(i, n, a);
  }
  return i;
}
let nC = (e, t) => {
  let i = nT(t);
  return e.some(e => nT(e).match(`^${i}\\.\\d+`));
};
function nT(e) {
  return e.replace(/\]|\[/g, "");
}
let nk = (e, t, i) => {
  if (e && "reportValidity" in e) {
    let n = Jt(i, t);
    e.setCustomValidity(n && n.message || "");
    e.reportValidity();
  }
};
function nR(e, t) {
  for (let i in t.fields) {
    let n = t.fields[i];
    n && n.ref && "reportValidity" in n.ref ? nk(n.ref, i, e) : n && n.refs && n.refs.forEach(t => nk(t, i, e));
  }
}
var nN = "form__row__EJ6Lu";
var nP = "form__md__Yv6-d";
var nO = "form__lg__R2MmR";
var nD = "form__label__uv5Rj";
var nL = "form__helper__U6b3z";
var nF = "form__maxLength__UHqLw";
var nM = "form__error__-0r7V";
var nj = "form__labelRow__saVtn";
var nU = "form__helperSuccess__NzlT1";
var nB = "form__helperWarning__gu1SH";
var nV = "form__asterisk__HUduA";
function nG({
  children: e,
  manager: {
    methods: t,
    schema: i,
    size: n,
    recordingKey: s
  },
  onSubmit: o
}, l) {
  let d = useMemo(() => ({
    schema: i,
    size: n
  }), [i, n]);
  let {
    onSubmit
  } = function({
    onSubmit: e,
    recordingKey: t,
    ...i
  }) {
    let n = Qv(e, {
      eventName: "submit",
      recordingKey: t
    }, [e]);
    return {
      ...i,
      onSubmit: n
    };
  }({
    onSubmit: o,
    recordingKey: s
  });
  return jsx(n_.Provider, {
    value: d,
    children: jsx(Op, {
      ...t,
      children: jsx("form", {
        noValidate: !0,
        ref: l,
        onSubmit: e => {
          t.handleSubmit(onSubmit)(e);
        },
        children: e
      })
    })
  });
}
nG.displayName = "Form";
let nz = forwardRef(nG);
function nH({
  children: e
}) {
  let {
    id
  } = VM("description");
  let i = Lh("error");
  return jsxs("p", {
    className: nM,
    id,
    children: [jsx(_$$z2, {
      "aria-hidden": !0
    }), jsxs(_$$E3, {
      as: "span",
      children: [i, "\xa0"]
    }), e]
  });
}
nH.displayName = "Form.ErrorMessage";
let nW = forwardRef(({
  children: e,
  variant: t = "help"
}, i) => {
  let {
    name
  } = useContext(nA);
  let {
    fieldState
  } = as({
    name
  });
  let o = Lh("success");
  let l = Lh("warning");
  let d = !fieldState.error?.message;
  let {
    id
  } = VM("description", {
    enabled: d
  });
  let u = {
    help: null,
    warning: jsxs(Fragment, {
      children: [jsxs(_$$E3, {
        as: "span",
        children: [l, "\xa0"]
      }), jsx(_$$R3, {
        "aria-hidden": !0
      })]
    }),
    success: jsxs(Fragment, {
      children: [jsxs(_$$E3, {
        as: "span",
        children: [o, "\xa0"]
      }), jsx(_$$l, {
        "aria-hidden": !0
      })]
    })
  };
  return d ? jsxs("p", {
    id,
    ref: i,
    className: _$$A7(nL, {
      [nB]: "warning" === t,
      [nU]: "success" === t
    }),
    children: [u[t], e]
  }) : null;
});
function nK({
  value: e,
  maxLength: t
}) {
  let i = Lh("remainingCharacters");
  let n = useMemo(() => {
    if ("string" == typeof e && e) {
      if (e.length > t) return "invalid";
      if (e.length / t >= .7) return "warning";
    }
  }, [e, t]);
  let s = "string" != typeof e ? 0 : e.length;
  return jsxs("div", {
    className: nF,
    "aria-live": "polite",
    role: "status",
    "data-fpl-valid": n,
    children: [jsx(_$$E3, {
      children: i
    }), jsxs("span", {
      children: [s, " / ", t]
    })]
  });
}
nW.displayName = "Form.Helper";
nK.displayName = "Form.CharacterCounter";
let nY = forwardRef(({
  children: e,
  tooltip: t
}, i) => {
  let n = _$$iM(["htmlFor"]);
  let a = Lh("help");
  let s = nb();
  let o = _$$iv({
    placement: "top"
  });
  return jsxs("label", {
    className: nD,
    ref: i,
    ...n,
    children: [e, s && jsx("span", {
      className: nV,
      children: "\xa0*"
    }), t && jsxs(Fragment, {
      children: [jsx(Uj, {
        "aria-label": a,
        ...o.getTriggerProps(),
        children: jsx(_$$a2, {})
      }), jsx(_$$mc, {
        manager: o,
        children: jsx(UC, {
          children: t
        })
      })]
    })]
  });
});
nY.displayName = "Form.Label";
let nq = forwardRef(({
  label: e,
  name: t,
  children: i
}, s) => {
  let o = useMemo(() => ({
    name: t
  }), [t]);
  let {
    fieldState,
    field
  } = as({
    name: t
  });
  let {
    size
  } = useContext(n_);
  let {
    error
  } = l;
  let p = function(e) {
    let t = ny(e);
    return useMemo(() => t ? function e(t) {
      if (!t) return;
      let i = _$$Ay3.object({
        maxLength: _$$Ay3.number()
      }).safeParse(t);
      return i.success ? i.data.maxLength : "unwrap" in t && "function" == typeof t.unwrap ? e(t.unwrap()) : void 0;
    }(t) ?? null : null, [t]);
  }(t);
  return jsx(C4, {
    children: jsx(nA.Provider, {
      value: o,
      children: jsxs("div", {
        ref: s,
        className: _$$A7(nN, n[size]),
        children: [jsxs("div", {
          className: nj,
          children: [e, p ? jsx(nK, {
            value: field.value,
            maxLength: p
          }) : null]
        }), i, error?.message && jsx(nH, {
          children: error.message
        })]
      })
    })
  });
});
nq.displayName = "Form.Row";
let n$ = Object.assign(nz, {
  Helper: nW,
  Row: nq,
  Label: nY,
  useForm: function({
    schema: e,
    size: t = "md",
    recordingKey: i,
    defaultValues: n
  }) {
    let r = useMemo(() => ({
      ...function e(t, i = {}) {
        let n = "defaultArrayEmpty" in i && i.defaultArrayEmpty;
        let r = "defaultDateEmpty" in i && i.defaultDateEmpty;
        let a = "defaultDateUndefined" in i && i.defaultDateUndefined;
        let s = "defaultDateNull" in i && i.defaultDateNull;
        return t instanceof _$$z3.ZodEffects ? t.innerType() instanceof _$$z3.ZodEffects ? e(t.innerType(), i) : e(_$$z3.ZodObject.create(t.innerType().shape), i) : t instanceof _$$z3.ZodType ? Object.fromEntries(Object.entries(t.shape).map(([t, o]) => [t, o instanceof _$$z3.ZodEffects ? e(o, i) : function t(o) {
          if (o instanceof _$$z3.ZodDefault) {
            if (!("_def" in o) || !("defaultValue" in o._def)) return;
            return o._def.defaultValue();
          }
          if (o instanceof _$$z3.ZodArray) {
            if (!("_def" in o) || !("type" in o._def)) return;
            return n ? [] : [t(o._def.type)];
          }
          if (o instanceof _$$z3.ZodString) return "";
          if (o instanceof _$$z3.ZodNumber || o instanceof _$$z3.ZodBigInt) return o.minValue ?? 0;
          if (o instanceof _$$z3.ZodDate) return r ? "" : s ? null : a ? void 0 : o.minDate;
          if (o instanceof _$$z3.ZodSymbol) return "";
          if (o instanceof _$$z3.ZodBoolean) return !1;
          if (o instanceof _$$z3.ZodNull) return null;
          if (o instanceof _$$z3.ZodPipeline) {
            if (!("out" in o._def)) return;
            return t(o._def.out);
          }
          return o instanceof _$$z3.ZodObject ? e(o, i) : !(o instanceof _$$z3.ZodAny) || "innerType" in o._def ? t(o._def.innerType) : void 0;
        }(o)])) : null;
      }(e),
      ...n
    }), [n, e]);
    let s = mN({
      defaultValues: r,
      mode: "onSubmit",
      reValidateMode: "onSubmit",
      resolver: function(e, t, i = {}) {
        if (nE(e)) return async (t, n, r) => {
          try {
            let n = await e["sync" === i.mode ? "parse" : "parseAsync"](t, void 0);
            r.shouldUseNativeValidation && nR({}, r);
            return {
              errors: {},
              values: i.raw ? {
                ...t
              } : n
            };
          } catch (e) {
            if (nI(e)) return {
              values: {},
              errors: nw(function(e, t) {
                let i = {};
                for (; e.length;) {
                  let n = e[0];
                  let {
                    code,
                    message,
                    path
                  } = n;
                  let o = path.join(".");
                  if (!i[o]) {
                    if ("unionErrors" in n) {
                      let e = n.unionErrors[0].errors[0];
                      i[o] = {
                        message: e.message,
                        type: e.code
                      };
                    } else i[o] = {
                      message,
                      type: code
                    };
                  }
                  if ("unionErrors" in n && n.unionErrors.forEach(t => t.errors.forEach(t => e.push(t))), t) {
                    let e = i[o].types;
                    let a = e && e[n.code];
                    i[o] = Gb(o, t, i, code, a ? [].concat(a, n.message) : n.message);
                  }
                  e.shift();
                }
                return i;
              }(e.errors, !r.shouldUseNativeValidation && "all" === r.criteriaMode), r)
            };
            throw e;
          }
        };
        if (nS(e)) return async (t, n, r) => {
          try {
            let n = "sync" === i.mode ? qgA : EJS;
            let a = await n(e, t, void 0);
            r.shouldUseNativeValidation && nR({}, r);
            return {
              errors: {},
              values: i.raw ? {
                ...t
              } : a
            };
          } catch (e) {
            if (nx(e)) return {
              values: {},
              errors: nw(function(e, t) {
                let i = {};
                for (; e.length;) {
                  let n = e[0];
                  let {
                    code,
                    message,
                    path
                  } = n;
                  let o = path.join(".");
                  if (!i[o]) {
                    if ("invalid_union" === n.code) {
                      let e = n.errors[0][0];
                      i[o] = {
                        message: e.message,
                        type: e.code
                      };
                    } else i[o] = {
                      message,
                      type: code
                    };
                  }
                  if ("invalid_union" === n.code && n.errors.forEach(t => t.forEach(t => e.push(t))), t) {
                    let e = i[o].types;
                    let a = e && e[n.code];
                    i[o] = Gb(o, t, i, code, a ? [].concat(a, n.message) : n.message);
                  }
                  e.shift();
                }
                return i;
              }(e.issues, !r.shouldUseNativeValidation && "all" === r.criteriaMode), r)
            };
            throw e;
          }
        };
        throw Error("Invalid input: not a Zod schema");
      }(e),
      resetOptions: {
        keepDirtyValues: !0,
        keepErrors: !0
      }
    });
    return useMemo(() => ({
      manager: {
        methods: s,
        watch: s.watch,
        setError: (e, t) => s.setError(e, {
          message: t
        }, {
          shouldFocus: !0
        }),
        size: t,
        recordingKey: i,
        schema: e
      }
    }), [s, t, e, i]);
  }
});
let nQ = forwardRef(({
  id: e,
  type: t = "text",
  htmlAttributes: i,
  ...n
}, s) => {
  let {
    name
  } = useContext(nA);
  let {
    size
  } = useContext(n_);
  let {
    id
  } = VM("htmlFor", {
    providedId: e
  });
  let c = _$$iM(["description", "label"]);
  let u = nb();
  let {
    field,
    fieldState
  } = as({
    name
  });
  let {
    ref,
    ...g
  } = p;
  let f = _$$S3(s, ref);
  return jsx(_$$p3, {
    ...n,
    htmlAttributes: i,
    id,
    ref: f,
    type: t,
    size,
    required: u,
    "aria-invalid": fieldState.invalid,
    ...c,
    ...g
  });
});
nQ.displayName = "Input";
let nJ = Object.assign(nQ, {
  Root: _$$p3.Root
});
let n1 = Ju(function(e) {
  let t = hS(e);
  let i = wA();
  let n = getFeatureFlags().fpl_username_form_migration;
  let o = d4(e => e.user);
  let [d, u] = useState(o.name);
  let [m, g] = useState(!1);
  let f = _$$X3();
  let _ = _$$z4.object({
    name: _$$z4.string({
      required_error: _$$t2("settings.account_settings.change_name_required")
    }).nonempty(_$$t2("settings.account_settings.change_name_required"))
  });
  let {
    manager
  } = n$.useForm({
    schema: _,
    defaultValues: {
      name: o.name
    }
  });
  return n ? jsx(bL, {
    manager: t,
    width: "md",
    children: jsx(n$, {
      manager,
      onSubmit: ({
        name: e
      }) => {
        i(yJ({
          user: {
            name: e,
            id: o.id
          },
          userInitiated: !0
        }));
        i(Lo());
      },
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: _$$tx("settings.account_settings.change_name_modal_title")
          })
        }), jsx(_$$nB, {
          children: jsx(n$.Row, {
            name: "name",
            label: jsx(n$.Label, {
              children: _$$tx("settings.account_settings.change_name_modal_input_placeholder")
            }),
            children: jsx(nJ, {
              ref: f,
              name: "name",
              autoComplete: "name",
              htmlAttributes: {
                "data-testId": "change-name-input"
              }
            })
          })
        }), jsx(wi, {
          children: jsx(jk, {
            children: jsx($n, {
              type: "submit",
              htmlAttributes: {
                "data-testId": "change-name-save"
              },
              children: _$$tx("general.save")
            })
          })
        })]
      })
    })
  }) : jsx(bL, {
    manager: t,
    width: "md",
    children: jsxs(Rq, {
      onSubmit: e => {
        e.preventDefault();
        i(yJ({
          user: {
            name: d,
            id: o.id
          },
          userInitiated: !0
        }));
        i(Lo());
      },
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$tx("settings.account_settings.change_name_modal_title")
        })
      }), jsx(_$$nB, {
        children: jsx(ks, {
          ref: f,
          name: "name",
          type: "text",
          className: _Z,
          placeholder: _$$t2("settings.account_settings.change_name_modal_input_placeholder"),
          value: d,
          onChange: e => {
            let t = e.currentTarget.value;
            let i = "" === t.trim();
            u(t);
            g(i);
          },
          dataTestId: "change-name-input"
        })
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($$, {
            type: "submit",
            className: pL,
            disabled: m,
            dataTestId: "change-name-save",
            children: _$$tx("general.save")
          })
        })
      })]
    })
  });
}, "CHANGE_NAME_MODAL", ZU.YES);
let n6 = () => _$$t2("settings.delete_user_account.delete_my_account");
let n7 = "DELETE_USER_ACCOUNT_MODAL";
qK(n7, e => jsx(n8, {
  ...e
}));
class n8 extends PureComponent {
  constructor(e) {
    super(e);
    this.deleteAccount = e => {
      e.preventDefault();
      n6() === this.state.confirmUserDeleteInput && this.props.user && this.props.dispatch(Ci({
        token: this.props.user.password_token
      }));
    };
    this.resendVerification = () => {
      this.props.dispatch(qC());
    };
    this.onChangeInput = e => {
      this.setState({
        confirmUserDeleteInput: e.currentTarget.value
      });
    };
    this.cancel = e => {
      e.preventDefault();
      this.props.dispatch(Lo());
    };
    this.state = {
      confirmUserDeleteInput: ""
    };
  }
  render() {
    return this.props.user ? this.props.user.google_sso_only || !this.props.user.email || this.props.user.email_validated_at ? this.props.user.delete_user_loading ? jsx(d_, {
      size: "small",
      title: _$$t2("settings.delete_user_account.delete_account"),
      className: yl,
      disableClickOutsideToHide: !0,
      ...this.props,
      children: jsx("p", {
        children: _$$tx("settings.delete_user_account.account_deletion_is_in_progress")
      })
    }) : jsxs(d_, {
      size: "small",
      title: _$$t2("settings.delete_user_account.delete_account"),
      className: yl,
      popStack: !0,
      ...this.props,
      children: [jsx(s_, {
        ...this.props
      }), this.props.user.google_sso_only || this.props.user.saml_sso_only || this.props.user.password_token ? jsxs("div", {
        children: [jsxs("p", {
          children: [jsx("span", {
            className: Vq,
            children: _$$tx("settings.delete_user_account.are_you_sure_you_want_to_delete_your_figma_account")
          }), " ", _$$tx("settings.delete_user_account.deleting_your_this_props_user_email_account_will_delete_all_your_associated_data", {
            email: this.props.user.email
          }), jsx("br", {})]
        }), jsx("br", {}), this.props.user.stripe_account_status && this.props.user.stripe_account_status !== P5.NONE && jsxs(Fragment, {
          children: [jsx("p", {
            children: _$$tx("settings.any_resources_you_have_marked_for_sale", {
              creatorAgreement: Hl
            })
          }), jsx("br", {})]
        }), jsx("p", {
          children: _$$tx("settings.delete_user_account.for_more_information_about_how_we_treat_your_data", {
            privacyPolicyLink: hM
          })
        }), jsx("br", {}), jsx("p", {
          children: _$$tx("settings.delete_user_account.to_confirm_please_type_strong_delete_my_account_strong_below", {
            confirmationText: jsx("strong", {
              children: n6()
            })
          })
        }), jsxs("form", {
          onSubmit: this.deleteAccount,
          children: [jsx("div", {
            children: jsx(_$$L2, {
              className: _Z,
              type: "text",
              value: this.state.confirmUserDeleteInput,
              onChange: this.onChangeInput,
              autoComplete: "off",
              autoCorrect: "off",
              autoCapitalize: "off",
              spellCheck: !1
            })
          }), jsxs("div", {
            className: v0,
            children: [jsx(_$$nR, {
              className: pL,
              onClick: this.cancel,
              children: _$$tx("modal.cancel")
            }), jsx(qZ, {
              type: "submit",
              className: pL,
              disabled: n6() !== this.state.confirmUserDeleteInput,
              children: _$$tx("settings.delete_user_account.delete_account")
            })]
          })]
        })]
      }) : jsx(_$$_, {
        ...this.props
      })]
    }) : jsx(yX, {
      confirmationTitle: _$$t2("settings.delete_user_account.a_verified_email_is_required"),
      content: _$$t2("settings.delete_user_account.you_must_verify_your_email_address_before_you_can_attempt_this_operation"),
      onConfirm: this.resendVerification,
      confirmText: _$$t2("settings.delete_user_account.resend_verification_email"),
      tintedModalBackground: !0,
      popStack: !0,
      ...this.props
    }) : null;
  }
}
n8.displayName = "DeleteUserAccountModal";
let rt = Ju(function(e) {
  let t = hS(e);
  let i = TA();
  let [n, o] = useState(e.fileViewHistoryDisabled.toString());
  let d = useMemo(() => n !== e.fileViewHistoryDisabled.toString(), [n, e.fileViewHistoryDisabled]);
  return jsx(fu, {
    name: "File View History Preference Modal",
    children: jsx(bL, {
      manager: t,
      width: "lg",
      children: jsxs(Rq, {
        onSubmit: t => {
          if (t.preventDefault(), !d) {
            e.onClose();
            return;
          }
          if (!i) return;
          let r = "true" === n;
          az.trackDefinedEvent("user.file_view_history_preference_changed", {
            disableFileViewHistory: r
          });
          _$$k3.setFileViewHistoryPreference({
            id: i,
            disable_file_view_history: r
          });
          e.onClose();
        },
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: _$$tx("settings.account_settings.file_view_history_modal.title")
          })
        }), jsxs(_$$nB, {
          children: [jsxs(_$$b2, {
            autofocus: !0,
            legend: jsx(_$$q, {
              children: _$$tx("settings.account_settings.file_view_history_modal.title")
            }),
            value: n,
            onChange: e => {
              o(e);
            },
            children: [jsx(_$$c, {
              label: jsx(_$$J, {
                children: _$$tx("settings.account_settings.file_view_history_modal.enabled_label")
              }),
              value: (!1).toString(),
              children: _$$tx("settings.account_settings.file_view_history_modal.turn_on_description")
            }, (!1).toString()), jsx(_$$c, {
              label: jsx(_$$J, {
                children: _$$tx("settings.account_settings.file_view_history_modal.disabled_label")
              }),
              value: (!0).toString(),
              children: _$$tx("settings.account_settings.file_view_history_modal.turn_off_description")
            }, (!0).toString())]
          }), jsx("div", {
            className: _$$s.mt8.$,
            children: d && jsx(_$$_2, {
              color: "true" === n ? _$$S4.ERROR : _$$S4.INFORMATION,
              text: "true" === n ? _$$tx("settings.account_settings.file_view_history_modal.turn_off.change_only_applies_moving_forward") : _$$tx("settings.account_settings.file_view_history_modal.turn_on.change_only_applies_moving_forward")
            })
          })]
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: e.onClose,
              children: _$$tx("settings.account_settings.file_view_history_modal.cancel")
            }), jsx($n, {
              type: "submit",
              children: _$$tx("settings.account_settings.file_view_history_modal.save")
            })]
          })
        })]
      })
    })
  });
}, "FileViewHistoryPreferenceModal");
let ra = Ju(rs, "FONT_MODAL");
function rs({
  open: e,
  onClose: t
}) {
  let i = hS({
    open: e,
    onClose: t
  });
  return jsx(bL, {
    manager: i,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$tx("fullscreen.font_settings.what_s_going_on")
        })
      }), jsxs(_$$nB, {
        children: [jsx("div", {
          className: jE,
          children: _$$tx("fullscreen.font_settings.local_font_explainer")
        }), jsx("div", {
          className: jE,
          children: _$$tx("fullscreen.font_settings.local_font_process_explainer")
        }), jsx("div", {
          className: jE,
          children: _$$tx("fullscreen.font_settings.local_font_process_explainer_part_2")
        }), jsx("div", {
          className: jE,
          children: _$$tx("fullscreen.font_settings.if_you_ever_change_your_mind_you_can_easily_uninstall_the_process")
        })]
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
            variant: "primary",
            onClick: t,
            children: _$$tx("fullscreen.font_settings.got_it")
          })
        })
      })]
    })
  });
}
function ro() {
  let e = wA();
  let [t, i] = useState("init");
  if (useEffect(() => {
    let e = !1;
    let t = async () => {
      try {
        let {
          data
        } = await xQ();
        let n = 0;
        for (let e in data.fontFiles) n += data.fontFiles[e].length;
        e || i(n);
      } catch {
        e || i("error");
      } finally {
        e || setTimeout(t, 2e3);
      }
    };
    t();
    return () => {
      e = !0;
    };
  }, []), _$$eD) return null;
  let n = () => {
    e(_$$to({
      type: ra,
      showModalsBeneath: !0
    }));
  };
  let s = () => e(Ef({
    isMac: _$$Ay4.mac
  }));
  let o = () => e(Fs());
  return jsxs("div", {
    className: Q,
    children: [jsx("h3", {
      className: Z,
      children: _$$tx("settings.account_settings.fonts")
    }), (() => {
      if ("init" === t) return jsx(Fragment, {});
      if ("error" !== t) return jsxs("div", {
        children: [jsx("div", {
          style: _$$sx.my12.$,
          children: _$$tx("settings.account_settings.local_fonts_are_enabled_you_have_local_font_count_fonts_available_in_figma", {
            localFontCount: t
          })
        }), jsx("div", {
          children: _$$tx("settings.account_settings.to_disable_local_fonts_follow_the_uninstall_steps_in_the", {
            helpCenterLink: jsx(_$$N, {
              href: "https://help.figma.com/hc/articles/360039956894-Access-local-fonts-on-your-computer#Uninstall_the_font_service",
              onClick: o,
              newTab: !0,
              children: _$$tx("settings.account_settings.help_article")
            })
          })
        })]
      });
      if (!_$$Ay4.mac && !_$$Ay4.windows || _$$Ay4.mobile) return jsx("div", {
        children: jsx("div", {
          style: _$$sx.my24.$,
          children: _$$tx("settings.account_settings.local_fonts_are_currently_not_supported_for_this_operating_system")
        })
      });
      {
        let e = _$$Ay4.mac ? "https://desktop.figma.com/agent/mac/InstallFigmaAgent.dmg" : "https://desktop.figma.com/agent/win/InstallFigmaAgent.exe";
        return jsxs("div", {
          children: [jsx("div", {
            style: _$$sx.my12.$,
            children: _$$tx("settings.account_settings.install_font_service_for_local", {
              learnMoreLink: jsx($n.Link, {
                onClick: n,
                children: _$$tx("general.learn_more")
              })
            })
          }), jsx(_$$N.Button, {
            href: e,
            onClick: s,
            newTab: !0,
            children: _$$tx("settings.account_settings.download_installer")
          })]
        });
      }
    })()]
  });
}
rs.displayName = "FontModal";
function rm() {
  _$$W();
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: "account_settings_modal--sectionSubheader--L0LKE text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: [_$$tx("settings.account_settings.closed_captions"), jsx(Ex, {
        text: _$$t2("general.beta"),
        className: "account_settings_modal--betaTag--rm8Tl",
        color: zE.DESIGN
      })]
    }), jsx(rh, {})]
  });
}
function rh() {
  return jsxs(Fragment, {
    children: [WO() && jsx(rg, {}), WO() && jsx(rf, {}), !WO() && jsx(r_, {})]
  });
}
function rg() {
  let e = wA();
  let t = d4(e => e.voice.showCaptions);
  return jsx("div", {
    className: "account_settings_modal--newFeaturesRow--buhmC",
    children: jsx(_$$d2, {
      checked: t,
      onChange: t => {
        HJ(e, t);
        sx("voice_captions_toggle", {
          value: t,
          source: "user_settings"
        });
      },
      label: jsx(_$$J, {
        children: _$$tx("settings.account_settings.enable_closed_captioning_when_using_audio")
      })
    })
  });
}
function rf() {
  let e = d4(e => e.voice.showCaptions);
  let t = d4(e => e.voice.captionsInstallProgress);
  let i = wA();
  return (useEffect(() => {
    e && _$$nN(t) && (HJ(i, !1), sx("voice_caption_download_error", {
      error_code: t,
      source: "user_settings"
    }), i(_$$to({
      type: _$$L3,
      data: {
        dispatch: i,
        installProgress: t
      }
    })));
  }, [t, e, i]), e && Mw(t)) ? jsxs("div", {
    className: X,
    children: [jsx(kt, {
      className: "account_settings_modal--captionsLoadingSpinner--2cUFM"
    }), _$$tx("settings.account_settings.downloading_speech_files_progress", {
      installProgress: t
    })]
  }) : null;
}
function r_() {
  return _$$eD ? null : jsx("div", {
    className: "account_settings_modal--newFeaturesBlockRow--ZVrSJ account_settings_modal--newFeaturesRow--buhmC",
    children: _$$tx("settings.account_settings.learn_more_about_captioning", {
      learnMoreLink: jsx(Ph, {
        trusted: !0,
        newTab: !0,
        href: AM.ACCESSIBILITY,
        trackingEventName: "Learn more about captioning",
        children: _$$tx("settings.account_settings.here")
      })
    })
  });
}
function rA() {
  return jsxs("div", {
    className: Q,
    children: [jsx("h3", {
      className: Z,
      children: _$$tx("settings.account_settings.new_features")
    }), jsx(rm, {})]
  });
}
let rR = "leave_org_confirm--important--F-mUY modal--important--qfd6R";
let rN = "LEAVE_ORG_CONFIRMATION_MODAL";
function rP(e) {
  let t = wA();
  return jsx(yX, {
    confirmationTitle: _$$t2("org_settings.leave_org.confirm_modal_title", {
      orgName: e.orgName
    }),
    confirmText: _$$t2("org_settings.leave_org.confirm_modal_button", {
      orgName: e.orgName
    }),
    onConfirm: () => {
      t(AW({
        orgId: e.orgId,
        orgName: e.orgName
      }));
    },
    destructive: !0,
    tintedModalBackground: !0,
    popStack: !0,
    children: jsx("div", {
      className: "leave_org_confirm--modalText--h1iGD",
      children: _$$tx("org_settings.leave_org.confirm_modal_message", {
        guest: jsx("span", {
          className: rR,
          children: _$$tx("org_settings.leave_org.guest")
        }),
        orgName: jsx("span", {
          className: rR,
          children: e.orgName
        })
      })
    })
  });
}
function rO(e) {
  let t = _$$j();
  let {
    user
  } = e;
  let n = t.map(e => ({
    planParentId: e.plan_id,
    planType: "org" === e.plan_type ? FOrganizationLevelType.ORG : FOrganizationLevelType.TEAM
  }));
  let s = _$$p2(YN5, n);
  let [o, l] = useState(s.length <= 3);
  return jsxs(_$$Y, {
    direction: "vertical",
    spacing: 24,
    children: [jsx("h3", {
      children: jsx(_$$E2, {
        fontSize: 14,
        children: _$$t2("user_settings.plan_sections.your_spaces")
      })
    }), s.slice(0, o ? s.length : 3).map(e => {
      let {
        planParentId
      } = e.args;
      if ("loaded" !== e.result.status) return jsx(_$$k2, {}, planParentId);
      let {
        planPermissions,
        planUser
      } = e.result.data;
      if (!planPermissions || !planUser) return null;
      let s = null;
      planUser.billableProductKeys && (s = planUser.billableProductKeys.find(e => a_(e)));
      let o = planUser.pendingAccountTypeRequest?.billableProductKey ? Zx(planUser.pendingAccountTypeRequest?.billableProductKey) : null;
      let l = planUser.latestProvisionalAccess?.billableProductKey ?? null;
      let d = null !== o && null !== l && o === Zx(l);
      let c = {
        permission: planUser.permission,
        currentSeat: s ? Zx(s) : null,
        pendingAccountTypeRequest: o,
        hasProvisionalAccess: d
      };
      return jsxs(Fragment, {
        children: [jsx(rD, {
          plan: planPermissions,
          planUser: c,
          user
        }, planParentId), " "]
      });
    }), o ? jsx(_$$Y, {
      direction: "horizontal",
      children: jsx(_$$E2, {
        fontWeight: "medium",
        fontSize: 11,
        children: _$$tx("user_settings.plan_sections.what_products_are_used", {
          learn: jsx(_$$N, {
            newTab: !0,
            trusted: !0,
            href: "https://www.figma.com/pricing/",
            children: _$$t2("user_settings.plan_sections.learn")
          })
        })
      })
    }) : jsx($n, {
      variant: "ghost",
      onClick: () => {
        l(!0);
      },
      children: jsxs("div", {
        className: "x78zum5 x6s0dn4 x1jnr06f",
        children: [jsx(_$$A8, {
          "aria-hidden": !0
        }), _$$t2("user_settings.plan_sections.see_all")]
      })
    })]
  });
}
function rD(e) {
  let t = wA();
  let {
    plan,
    planUser,
    user
  } = e;
  let {
    pendingAccountTypeRequest,
    hasProvisionalAccess
  } = n;
  let l = N_.toArray().filter(e => function(e, t) {
    switch (e) {
      case ud.COLLABORATOR:
        return t.canUpgradeCollaborator;
      case ud.DEVELOPER:
        return t.canUpgradeDeveloper;
      case ud.EXPERT:
        return t.canUpgradeExpert;
      default:
        return !1;
    }
  }(e, plan));
  let {
    type,
    parentId
  } = plan.key;
  let {
    handleUpgrade
  } = wH({
    entryPoint: _$$tc.USER_SETTINGS,
    plan: parentId ? {
      id: parentId,
      type
    } : void 0
  });
  let p = (e, i) => {
    t(_$$to({
      type: rN,
      data: {
        orgId: e,
        orgName: i
      }
    }));
  };
  let m = planUser.permission === FMemberRoleType.GUEST && parentId && type === FOrganizationLevelType.ORG;
  return jsxs(_$$Y, {
    direction: "horizontal",
    spacing: 16,
    verticalAlignItems: "start",
    children: [jsx(_$$n, {
      size: 32,
      userId: user.id,
      orgId: type === FOrganizationLevelType.ORG ? parentId : null,
      teamId: type === FOrganizationLevelType.TEAM ? parentId : null
    }), jsxs(_$$Y, {
      direction: "vertical",
      spacing: 4,
      verticalAlignItems: "start",
      children: [jsxs(_$$Y, {
        direction: "vertical",
        spacing: 0,
        children: [jsx(_$$E2, {
          fontSize: 11,
          truncate: !0,
          children: plan.name
        }), jsxs(_$$Y, {
          direction: "horizontal",
          spacing: 4,
          children: [jsx(_$$E2, {
            fontWeight: "regular",
            fontSize: 11,
            color: "secondary",
            truncate: !0,
            children: function(e) {
              switch (e) {
                case FMemberRoleType.GUEST:
                  return _$$t2("general.guest");
                case FMemberRoleType.MEMBER:
                  return _$$t2("general.member");
                case FMemberRoleType.ADMIN:
                  return _$$t2("general.admin");
              }
            }(planUser.permission)
          }), m ? jsxs(Fragment, {
            children: [" ", jsx("div", {
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": _$$t2("settings.account_settings.use_a_verified_work_email_address_to_become_a_full_member"),
              "data-tooltip-timeout-delay": 50,
              children: jsx(_$$B2, {
                className: "xmauxvm x1ypdohk"
              })
            }), jsx($n.Link, {
              onClick: () => {
                p(parentId, plan.name);
              },
              children: _$$t2("settings.account_settings.leave")
            })]
          }) : null]
        })]
      }), jsxs(_$$Y, {
        direction: "vertical",
        spacing: 0,
        children: [jsxs(_$$Y, {
          direction: "horizontal",
          spacing: "2px",
          children: [jsx(_$$E2, {
            fontWeight: "regular",
            fontSize: 11,
            children: rL(planUser.currentSeat).currentSeatCopy
          }), pendingAccountTypeRequest ? jsxs(Fragment, {
            children: [jsxs(_$$E2, {
              fontWeight: "regular",
              fontSize: 11,
              color: "secondary",
              truncate: !0,
              children: ["\xb7", " "]
            }), jsxs(_$$Y, {
              direction: "horizontal",
              spacing: 4,
              width: "auto",
              children: [jsx(_$$E2, {
                fontWeight: "regular",
                color: "secondary",
                fontSize: 11,
                truncate: !0,
                children: rL(pendingAccountTypeRequest).pendingAccountTypeRequestCopy
              }), jsx("div", {
                "data-tooltip-type": Ib.TEXT,
                "data-tooltip": hasProvisionalAccess ? rL(pendingAccountTypeRequest).provisionalAccessCopy : _$$t2("user_settings.plan_sections.request_sent_info"),
                "data-tooltip-timeout-delay": 50,
                children: jsx(_$$B2, {
                  className: "xmauxvm x1ypdohk"
                })
              })]
            })]
          }) : null]
        }), l.length > 0 ? jsxs(_$$Y, {
          direction: "horizontal",
          height: 16,
          spacing: 4,
          children: [jsx(_$$E2, {
            fontWeight: "regular",
            color: "secondary",
            fontSize: 11,
            truncate: !0,
            children: _$$t2("user_settings.plan_sections.upgrade_to")
          }), l.map((e, i) => jsxs(Fragment, {
            children: [jsx($n.Link, {
              onClick: () => {
                handleUpgrade({
                  licenseType: TI[e],
                  upgradeReason: _$$i.USER_SETTINGS,
                  entryPoint: _$$tc.USER_SETTINGS,
                  afterUpgradeCallback: () => {
                    t(_$$F.enqueue({
                      message: _$$t2("user_settings.plan_sections.auto_pathway_success_toast")
                    }));
                  }
                })({});
              },
              children: rL(e).seatUpgradeOptionCopy
            }), i < l.length - 1 ? jsxs(_$$E2, {
              fontWeight: "regular",
              fontSize: 11,
              color: "secondary",
              truncate: !0,
              children: ["\xb7", " "]
            }) : null]
          }))]
        }) : null]
      })]
    })]
  });
}
function rL(e) {
  switch (e) {
    case ud.EXPERT:
      return {
        currentSeatCopy: _$$t2("user_settings.plan_sections.full_seat"),
        seatUpgradeOptionCopy: _$$t2("general.bundle.expert"),
        pendingAccountTypeRequestCopy: _$$t2("user_settings.plan_sections.pending_account_type_request_for_full_seat"),
        provisionalAccessCopy: _$$t2("user_settings.plan_sections.provisional_access_text_for_full_seat")
      };
    case ud.DEVELOPER:
      return {
        currentSeatCopy: _$$t2("user_settings.plan_sections.dev_seat"),
        seatUpgradeOptionCopy: _$$t2("general.bundle.developer"),
        pendingAccountTypeRequestCopy: _$$t2("user_settings.plan_sections.pending_account_type_request_for_dev_seat"),
        provisionalAccessCopy: _$$t2("user_settings.plan_sections.provisional_access_text_for_dev_seat")
      };
    case ud.COLLABORATOR:
      return {
        currentSeatCopy: _$$t2("user_settings.plan_sections.collaborator_seat"),
        seatUpgradeOptionCopy: _$$t2("general.bundle.collaborator"),
        pendingAccountTypeRequestCopy: _$$t2("user_settings.plan_sections.pending_account_type_request_for_collab_seat"),
        provisionalAccessCopy: _$$t2("user_settings.plan_sections.provisional_access_text_for_collab_seat")
      };
    default:
      return {
        currentSeatCopy: _$$t2("user_settings.plan_sections.view_seat"),
        seatUpgradeOptionCopy: null,
        pendingAccountTypeRequestCopy: null
      };
  }
}
function rF({
  user: e
}) {
  let t = wA();
  let i = am();
  let {
    enhancedContrast
  } = _$$G2();
  let a = _$$R(e => ({
    orgById: e.orgById,
    teams: e.teams,
    orgDomains: e.orgDomains,
    currentOrgDisabledPresetsAndTemplates: yK(e)
  }));
  let s = Rs(sMZ({
    name: "disable_file_view_history"
  }));
  let o = !!s?.data?.currentUser?.userFlagByName;
  let l = Rs(P4({}));
  let d = T5("SettingsViewInner").unwrapOr(null);
  let c = d && d.key.type === FOrganizationLevelType.TEAM ? d.key.parentId : null;
  let u = _$$oA(l.data?.currentUser?.inStudentPlusPlan);
  let g = c && d && d.tier === FPlanNameType.STARTER;
  let f = Rs(kQI({
    id: c || ""
  }), {
    enabled: !!c
  });
  let _ = () => {
    let t = Object.values(a.orgById).filter(e => e.domain_capture).map(e => e.id);
    return 0 === a.orgDomains.domains.filter(e => t.includes(e.org_id)).filter(t => zN(e.email) === t.domain).length;
  };
  let A = () => t(_$$to({
    type: _$$u,
    showModalsBeneath: !0
  }));
  let y = () => t(_$$to({
    type: _$$J3,
    showModalsBeneath: !0
  }));
  let I = () => t(_$$to({
    type: _$$t3,
    showModalsBeneath: !0
  }));
  let E = e.two_factor_app_enabled;
  let x = e.phone_number;
  let S = E || x;
  let w = e.google_sso_only || e.saml_sso_only;
  let C = getFeatureFlags().user_settings_tab;
  let k = e.google_sso_only ? jsx("div", {
    children: _$$tx("settings.account_settings.managed_by_google")
  }) : e.saml_sso_only ? jsx("div", {
    children: _$$tx("settings.account_settings.managed_by_your_organization_email")
  }) : null;
  return jsxs("div", {
    children: [jsx("div", {
      className: Q,
      children: jsxs("div", {
        children: [jsx("h3", {
          className: Z,
          children: _$$tx("settings.account_settings.name_section_header")
        }), jsx("div", {
          className: ee,
          "data-testid": "settings-user-name",
          children: e.name
        }), jsx("div", {
          children: jsx($n, {
            variant: "link",
            onClick: () => t(_$$to({
              type: n1,
              showModalsBeneath: !0
            })),
            htmlAttributes: {
              "data-testid": "settings-change-name-link"
            },
            children: _$$tx("settings.account_settings.change_name_link")
          })
        }), jsx("h3", {
          className: Z,
          children: _$$tx("settings.account_settings.email_section_header")
        }), jsx("div", {
          className: ee,
          children: e.email
        }), !w && jsx("div", {
          children: jsx($n, {
            variant: "link",
            onClick: () => t(_$$to({
              type: ni,
              showModalsBeneath: !0
            })),
            children: _$$tx("settings.account_settings.change_email_link")
          })
        }), k, jsx("h3", {
          className: Z,
          children: _$$tx("settings.account_settings.job_title_section_header")
        }), e?.profile?.job_title ? jsxs(Fragment, {
          children: [jsx("div", {
            className: ee,
            children: lb(e?.profile?.job_title)
          }), jsx("div", {
            children: jsx($n, {
              variant: "link",
              onClick: A,
              children: _$$tx("settings.account_settings.change_job_title_link")
            })
          })]
        }) : jsxs(Fragment, {
          children: [jsxs("div", {
            className: "x78zum5 x1q0g3np x1jnr06f x6s0dn4 xod5an3",
            children: [jsx(_$$z2, {}), _$$tx("settings.account_settings.job_title_missing")]
          }), jsx($n, {
            variant: "link",
            onClick: A,
            htmlAttributes: {
              "data-testid": "settings-add-job-title-link"
            },
            children: _$$tx("settings.account_settings.add_job_title")
          })]
        }), !C && jsxs(Fragment, {
          children: [!w && jsxs(Fragment, {
            children: [jsx("h3", {
              className: Z,
              children: _$$tx("settings.account_settings.password_section_header")
            }), jsx($n, {
              variant: "link",
              onClick: () => t(_$$to({
                type: tJ,
                showModalsBeneath: !0
              })),
              children: _$$tx("settings.account_settings.change_password_link")
            })]
          }), !S && jsx("div", {
            className: J,
            children: jsx($n, {
              variant: "link",
              onClick: () => {
                sx("Two-factor setup started");
                "gov" === window.INITIAL_OPTIONS.cluster_name ? I() : y();
              },
              children: _$$tx("auth.two-factor-setup.enable_two_factor_authentication")
            })
          }), S && jsxs(Fragment, {
            children: [jsx("h3", {
              className: Z,
              children: _$$tx("auth.two-factor-setup.two_factor_authentication_is_enabled")
            }), E && jsxs("div", {
              className: J,
              children: [jsx("span", {
                className: et,
                children: _$$tx("auth.two-factor-setup.authenticator_apps_are_enabled")
              }), jsx($n, {
                variant: "link",
                onClick: () => t(_$$to({
                  type: t4,
                  showModalsBeneath: !0
                })),
                children: _$$tx("auth.two-factor-setup.disable-authenticator-app")
              })]
            }), x && jsxs("div", {
              className: J,
              children: [jsx("span", {
                className: et,
                children: _$$tx("auth.two-factor-setup.connected_cell_phone_number_tfa_phone_number", {
                  phoneNumber: x
                })
              }), jsx($n, {
                variant: "link",
                onClick: y,
                children: _$$tx("auth.two-factor-setup.configure-sms")
              })]
            }), !E && jsx("div", {
              className: J,
              children: jsx($n, {
                variant: "link",
                onClick: I,
                children: _$$tx("auth.two-factor-setup.connect_authenticator_app")
              })
            }), !x && jsx("div", {
              className: J,
              children: jsx($n, {
                variant: "link",
                onClick: y,
                children: _$$tx("auth.two-factor-setup.connect_cell_phone_number")
              })
            }), jsx("div", {
              className: J,
              children: jsx($n, {
                variant: "link",
                onClick: () => t(_$$to({
                  type: _$$J4,
                  showModalsBeneath: !0
                })),
                children: _$$tx("auth.two-factor-setup.show_recovery_codes")
              })
            })]
          })]
        }), !w && (e => {
          if (!e) return null;
          let i = 0 === Object.keys(a.orgById).length;
          let n = !Object.keys(a.teams).some(e => null !== a.teams[e].subscription);
          return i && n && g && f.data?.team?.hasPermission && jsxs(fu, {
            name: "Upgrade Section",
            properties: {
              buttonColor: "blue"
            },
            children: [jsx("p", {
              className: "account_settings_modal--universalUpgradeSectionHeader--OI2aL text--fontPos14--OL9Hp text--_fontBase--QdLsd",
              children: _$$tx("settings.account_settings.upgrade_figma_plan_header")
            }), jsx("p", {
              className: ee,
              children: _$$tx("settings.account_settings.upgrade_figma_plan_reason")
            }), jsx("div", {
              className: _$$s.mt16.$,
              children: jsx($z, {
                onClick: () => {
                  t(_$$to({
                    type: _$$V2,
                    data: {
                      upsellSource: _$$b3.SETTINGS_VIEW
                    }
                  }));
                },
                trackingProperties: {
                  trackingDescriptor: _$$c2.UPGRADE
                },
                children: _$$tx("settings.account_settings.view_plans")
              })
            })]
          });
        })(e)]
      })
    }), jsx("div", {
      className: Q,
      children: jsx(rO, {
        user: e
      })
    }), jsxs("div", {
      className: Q,
      children: [jsx("h3", {
        className: Z,
        children: _$$tx("settings.account_settings.language")
      }), jsx("div", {
        className: ee,
        children: jsx(_$$rP, {})
      }), jsx("div", {
        children: jsx($n, {
          variant: "link",
          onClick: () => {
            Cu({
              trackingContext: _$$e.USER_SETTINGS,
              text: "Change Languages"
            });
            t(_$$to({
              type: _$$kA,
              showModalsBeneath: !0,
              data: {
                source: IO.USER_SETTINGS
              }
            }));
          },
          htmlAttributes: {
            "data-testid": "settings-change-languages-link"
          },
          children: _$$tx("settings.account_settings.change_languages")
        })
      })]
    }), jsxs("div", {
      className: Q,
      children: [jsx("h3", {
        className: Z,
        children: _$$tx("settings.account_settings.theme_section_header")
      }), jsx("div", {
        "data-fpl-ui3-override": !0,
        className: "account_settings_modal--dropdownContainer--z3cU9",
        children: jsxs(_$$bL, {
          value: i,
          onChange: e => t(Qh({
            theme: e,
            userInitiated: !0
          })),
          children: [jsx(l9, {
            width: "fill",
            label: jsx(_$$h2, {
              children: $I(i)
            })
          }), jsx(mc, {
            children: C_.map(e => jsx(_$$c$, {
              value: e,
              children: $I(e)
            }, e))
          })]
        })
      }), getFeatureFlags().fpl_enhanced_contrast_toggle && jsx("div", {
        "data-fpl-ui3-override": !0,
        className: "account_settings_modal--toggleContainer--fstwW",
        children: jsx(_$$d2, {
          label: jsx(_$$J, {
            children: _$$t2("settings.account_settings.enhanced_contrast.label")
          }),
          checked: enhancedContrast,
          onChange: (e, {
            source: i
          }) => {
            _$$f2(e ? _$$h3.TOGGLE_ENHANCED_CONTRAST_ON : _$$h3.TOGGLE_ENHANCED_CONTRAST_OFF, {
              isMouseEvent: "mouse" === i
            });
            t(fK({
              enhancedContrast: e,
              userInitiated: !0
            }));
          },
          children: _$$t2("settings.account_settings.enhanced_contrast.description")
        })
      })]
    }), jsx(rA, {}), jsx(ro, {}), jsxs("div", {
      className: Q,
      children: [jsx("h3", {
        className: Z,
        children: _$$tx("settings.account_settings.library_section_header")
      }), jsx("div", {
        children: _$$tx("settings.account_settings.enable_libraries_for_drafts", {
          enableLibrariesLink: jsx($n.Link, {
            onClick: () => {
              t(_$$to({
                type: _$$T,
                data: {
                  entrypoint: r6.ACCOUNT_SETTINGS_ENABLE_LIBRARIES_LINK
                }
              }));
            },
            children: _$$tx("settings.account_settings.enable_libraries_for_drafts_clickable")
          })
        })
      })]
    }), u && jsxs("div", {
      className: Q,
      children: [jsx("h3", {
        className: Z,
        children: _$$tx("settings.account_settings.file_view_history")
      }), jsx("div", {
        className: _$$s.mb12.$,
        children: o ? _$$tx("settings.account_settings.file_view_history_disabled_description", {
          off: jsx("span", {
            className: _$$s.fontSemiBold.$,
            children: _$$tx("settings.account_settings.file_view_history.off")
          }),
          learnMore: jsx(_$$N, {
            href: "https://help.figma.com/hc/articles/29638316371479",
            children: _$$tx("general.learn_more")
          })
        }) : _$$tx("settings.account_settings.file_view_history_enabled_description", {
          learnMore: jsx(_$$N, {
            href: "https://help.figma.com/hc/articles/29638316371479",
            children: _$$tx("general.learn_more")
          })
        })
      }), jsx("div", {
        children: jsx($n, {
          variant: "link",
          onClick: () => {
            Cu({
              trackingContext: _$$e.USER_SETTINGS,
              text: "Change File View History Preference"
            });
            t(_$$to({
              type: rt,
              data: {
                fileViewHistoryDisabled: o
              }
            }));
          },
          children: _$$tx("settings.account_settings.file_view_history.change_preference")
        })
      })]
    }), !C && jsx(iT, {
      user: e
    }), !C && jsx(ik, {
      user: e,
      last: !_()
    }), _() && jsxs("div", {
      className: X,
      children: [jsx("h3", {
        className: Z,
        children: _$$tx("settings.account_settings.account_section_header")
      }), jsx("div", {
        children: jsx($n, {
          variant: "destructiveLink",
          onClick: () => t(_$$to({
            type: n7,
            showModalsBeneath: !0
          })),
          children: _$$tx("settings.account_settings.delete_account")
        })
      })]
    })]
  });
}
qK(rN, e => jsx(rP, {
  ...e.modalShown.data
}));
export var $$rM1 = (e => (e.ACCOUNT = "ACCOUNT", e.COMMUNITY = "COMMUNITY", e.NOTIFICATIONS = "NOTIFICATIONS", e.SESSIONS = "SESSIONS", e.SECURITY = "SECURITY", e))($$rM1 || {});
let rj = {
  ACCOUNT: function() {
    let e = _$$iZ();
    return jsx(eo, {
      avatarType: es.ACCOUNT,
      children: e ? jsx(rF, {
        user: e
      }) : null
    });
  },
  COMMUNITY: function() {
    let e = _$$iZ();
    let t = d4(e => e.user && sD(e.user, e.authedProfilesById));
    return e ? jsx(eJ, {
      user: e,
      profile: t
    }) : null;
  },
  NOTIFICATIONS: function() {
    return _$$iZ() ? jsx(tD, {}) : null;
  },
  SESSIONS: function() {
    let e = _$$iZ();
    let [t, i] = useState([]);
    let [n, s] = useState(!0);
    let [o, l] = useState(!1);
    useEffect(() => {
      null != e && _$$H.getSessions().then(e => {
        i(e.data.meta.sessions.sort((e, t) => Number(t.is_current) - Number(e.is_current)));
        s(!1);
      }).catch(() => {
        l(!0);
        s(!1);
      });
    }, [e]);
    let d = e => {
      i(t => t.filter(t => t.id !== e));
    };
    return null == e ? jsx("div", {
      className: iG,
      children: _$$tx("sessions.error.logged_out")
    }) : n ? jsx("div", {
      className: iG,
      children: jsx(kt, {})
    }) : o ? jsx("div", {
      className: iG,
      children: _$$tx("sessions.error.no_sessions")
    }) : jsx(_$$P, {
      className: ei,
      children: jsxs("div", {
        className: "sessions_view--view--NV3rp",
        children: [jsxs("div", {
          children: [jsx("div", {
            className: "sessions_view--title--M6tTN text--fontPos15--IR8IB text--_fontBase--QdLsd",
            children: _$$tx("sessions.header.title")
          }), jsx("div", {
            className: "sessions_view--description--APmXn text--fontPos12--YsUAh text--_fontBase--QdLsd",
            children: _$$tx("sessions.header.description")
          })]
        }), jsxs("div", {
          className: "sessions_view--headers--e1FCJ text--fontPos12--YsUAh text--_fontBase--QdLsd",
          children: [jsx("div", {
            className: iU,
            children: _$$tx("sessions.column.location_ip")
          }), jsx("div", {
            className: iU,
            children: _$$tx("sessions.column.os_browser")
          }), jsx("div", {
            className: iU,
            children: _$$tx("sessions.column.accessed_created")
          }), jsx("div", {
            className: iU,
            children: _$$tx("sessions.column.manage")
          })]
        }), jsxs("div", {
          className: "sessions_view--sessionsList--b9-uU",
          children: [jsx("hr", {
            className: iV
          }), t.map((e, i) => jsxs(_$$Fragment, {
            children: [jsx(iH, {
              session: e,
              onSessionRevoked: d
            }), i < t.length - 1 && jsx("hr", {
              className: iV
            })]
          }, e.id))]
        })]
      })
    });
  },
  SECURITY: function() {
    let e = _$$iZ();
    let t = _$$R(e => ({
      orgById: e.orgById,
      teams: e.teams,
      orgDomains: e.orgDomains,
      currentOrgDisabledPresetsAndTemplates: yK(e)
    }));
    return e ? jsx(_$$P, {
      className: ei,
      children: jsx(er, {
        children: jsxs("div", {
          children: [jsx("div", {
            className: Q,
            children: jsx("div", {
              children: jsx(iM, {
                user: e
              })
            })
          }), jsx("div", {
            className: Q,
            children: jsx(ij, {
              user: e
            })
          }), jsxs("div", {
            className: Q,
            children: [jsx(iT, {
              user: e
            }), jsx(ik, {
              user: e,
              last: !(() => {
                let i = Object.values(t.orgById).filter(e => e.domain_capture).map(e => e.id);
                return 0 === t.orgDomains.domains.filter(e => i.includes(e.org_id)).filter(t => zN(e.email) === t.domain).length;
              })()
            })]
          })]
        })
      })
    }) : jsx(Fragment, {});
  }
};
let rU = {
  ACCOUNT: () => _$$t2("settings.account_setting.account"),
  COMMUNITY: () => _$$t2("settings.account_setting.community"),
  NOTIFICATIONS: () => _$$t2("settings.account_setting.notifications"),
  SESSIONS: () => _$$t2("settings.account_setting.sessions"),
  SECURITY: () => _$$t2("settings.account_setting.security")
};
let $$rB0 = Ju(function(e) {
  let t = hS(e);
  let i = getFeatureFlags().user_settings_tab;
  let {
    tab
  } = e;
  let [g, _] = useState({
    activeSubView: null,
    properties: {}
  });
  let b = useMemo(() => ({
    accountModalSubViewData: g,
    setAccountModalSubViewData: _
  }), [g, _]);
  let v = () => {
    _({
      activeSubView: null,
      properties: {}
    });
  };
  let [I, E, x] = _$$t.useTabs({
    ACCOUNT: !0,
    COMMUNITY: !0,
    NOTIFICATIONS: !0,
    SESSIONS: !i,
    SECURITY: !!i
  }, {
    defaultActive: tab
  });
  let S = useMemo(() => g.activeSubView ? jsx(Y9, {
    children: jsx(hE, {
      children: jsxs("div", {
        className: "account_settings_modal--backButton--miMJn text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: [jsx("span", {
          className: _$$s.mr2.$,
          children: jsx(_$$K, {
            "aria-label": _$$t2("general.back"),
            onClick: v,
            children: jsx(u, {})
          })
        }), function(e) {
          if (e.activeSubView === A.PURCHASES) return e.properties.purchasePageType === po.ACTIVE ? _$$t2("settings.account_setting.purchases") : _$$t2("settings.account_setting.inactive");
        }(g)]
      })
    })
  }) : jsxs(Y9, {
    children: [jsx(r1, {
      children: _$$t2("general.settings")
    }), jsx(_$$t.TabStrip, {
      manager: x,
      children: Object.values($$rM1).map(e => createElement(_$$t.Tab, {
        ...I[e],
        key: e
      }, rU[e]()))
    })]
  }), [g, x, I]);
  return jsx(y.Provider, {
    value: b,
    children: jsx(bL, {
      manager: t,
      width: 650,
      height: "full",
      children: jsxs(vo, {
        children: [S, jsx(_$$nB, {
          children: Object.values($$rM1).map(e => createElement(_$$t.TabPanel, {
            ...E[e],
            key: e
          }, rj[e]()))
        })]
      })
    })
  });
}, "ACCOUNT_SETTINGS_MODAL", ZU.YES);
export const s = $$rB0;
export const c = $$rM1; 
