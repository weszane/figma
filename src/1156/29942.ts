import _require2 from "../7099/87099";
import _require from "../6256/886256";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useState, useCallback, lazy, forwardRef, useMemo, useRef, useEffect, Suspense, createElement } from "react";
import { useDispatch } from "react-redux";
import { lV, U1, MK } from "../figma_app/617606";
import l, { Hg, W as _$$W } from "../figma_app/304955";
import { ServiceCategories as _$$e } from "../905/165054";
import { K as _$$K } from "../905/443068";
import { H as _$$H } from "../905/999677";
import { T as _$$T } from "../905/2124";
import { D as _$$D } from "../1156/759811";
import { T as _$$T2 } from "../905/256551";
import { permissionScopeHandler } from "../905/189185";
import { Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomWithSubscription, useAtomValueAndSetter, atomStoreManager } from "../figma_app/27355";
import { N as _$$N } from "../vendor/930821";
import { P as _$$P } from "../vendor/348225";
import { analyticsEventManager } from "../905/449184";
import { F as _$$F } from "../905/680873";
import { reportError } from "../905/11";
import { useSprigWithSampling } from "../905/99656";
import { truncate, isWhitespace, isValidUrl } from "../figma_app/930338";
import { Y as _$$Y } from "../905/506207";
import { getI18nString, renderI18nText } from "../905/303541";
import { O1, Zl, uQ, Tv } from "../figma_app/311375";
import { showModalHandler } from "../905/156213";
import { eY as _$$eY } from "../figma_app/722362";
import { KP } from "../figma_app/440875";
import { xp } from "../905/966582";
import { f3, YD, Vo } from "../figma_app/690664";
import { mC, A5, YZ, Z3, s0, $W, lA } from "../figma_app/325537";
import { _H, Tk, ee as _$$ee, ry as _$$ry } from "../figma_app/408883";
import { Zr, Wn } from "../figma_app/114522";
import { fl } from "../1156/993639";
import { F as _$$F2 } from "../1156/649032";
import { Uy } from "../1156/578260";
import { HB, oD, t$ as _$$t$, wj, kx } from "../1156/721826";
import { l as _$$l } from "../1156/926585";
import { FX, St } from "../figma_app/558805";
import { oA } from "../figma_app/812915";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { H as _$$H2 } from "../1156/461363";
import { throwTypeError } from "../figma_app/465776";
import { N as _$$N2 } from "../905/438674";
import { $ as _$$$ } from "../905/692618";
import { Yy } from "../figma_app/59509";
import { Q as _$$Q } from "../905/363675";
import { Button, ButtonLarge } from "../905/521428";
import { ButtonPrimitive } from "../905/632989";
import { f as _$$f } from "../905/949464";
import { t as _$$t2 } from "../5132/435788";
import { Z as _$$Z } from "../905/279476";
import { W as _$$W2 } from "../9410/92046";
import { d as _$$d } from "../1006/820986";
import { Tj } from "../figma_app/342207";
import { g as _$$g } from "../905/687265";
import { SceneGraphHelpers, InsertErrorType, ChatMessageType } from "../figma_app/763686";
import { A as _$$A2 } from "../vendor/454088";
import { A as _$$A3 } from "../905/920142";
import { useLatestRef } from "../figma_app/922077";
import { isDevEnvironment } from "../figma_app/169182";
import { $z } from "../figma_app/617427";
import { Ph } from "../905/160095";
import { tc as _$$tc } from "../905/15667";
import { TrackingProvider, withTrackedClick } from "../figma_app/831799";
import { yy } from "../figma_app/543529";
import { y as _$$y } from "../1250/295724";
import { k as _$$k2 } from "../figma_app/564183";
import { B as _$$B } from "../905/969273";
import { A0, sZ, Ay as _$$Ay } from "../figma_app/948389";
import { selectCurrentFile, openFileTeamAtom, useCurrentFileKey } from "../figma_app/516028";
import { getCommunityFileUrl } from "../905/612685";
import { FPlanNameType, FProductAccessType, FFileType } from "../figma_app/191312";
import { useTeamPlanPublicInfo, useCurrentPublicPlan, useIsStarterPlan } from "../figma_app/465071";
import { wH, mT } from "../figma_app/680166";
import { UpsellModalType } from "../905/165519";
import { Ig, co, xD } from "../figma_app/350332";
import { _t, JT } from "../figma_app/632248";
import { RJ } from "../figma_app/869006";
import { $Y } from "../905/918620";
import { jT } from "../figma_app/302802";
import { Xu, gJ, d4 } from "../figma_app/588582";
import { usePopoverPrimitive, PopoverPrimitiveContainer, PopoverPrimitiveArrow } from "../905/691059";
import { e as _$$e2 } from "../905/483726";
import { h as _$$h } from "../905/207101";
import { Pf, H8 } from "../905/590952";
import { Xl, GV, rK as _$$rK, hR, s8 } from "../figma_app/72338";
import { L as _$$L } from "../905/704296";
import { ls, cG, jc, lV as _$$lV } from "../1156/395731";
import { RK, zA, GC, Iz, wT, mS } from "../figma_app/791586";
import { A as _$$A4 } from "../1156/829829";
import { PM } from "../1156/108847";
import { P as _$$P2 } from "../905/932818";
import { i as _$$i } from "../905/46262";
import { o0 } from "../figma_app/202307";
import { f as _$$f2 } from "../905/54715";
import { e as _$$e3 } from "../905/678389";
import { r as _$$r } from "../905/857502";
import { s as _$$s } from "../905/551945";
import { Z as _$$Z2 } from "../905/498136";
import { p as _$$p } from "../905/682418";
import { c as _$$c } from "../905/90943";
import { q as _$$q } from "../905/838985";
import { M as _$$M } from "../905/69907";
import { y as _$$y2 } from "../905/225297";
import { y as _$$y3 } from "../905/582657";
import { h as _$$h2 } from "../905/104000";
import { B as _$$B2 } from "../905/559262";
import { o as _$$o } from "../figma_app/628776";
import { e as _$$e4 } from "../figma_app/952436";
import { u1 } from "../figma_app/337924";
import { _9, hH, yM, qQ, NC } from "../figma_app/119420";
import { T_, tk as _$$tk } from "../figma_app/883638";
import { Tf } from "../figma_app/396432";
import { postUserFlag } from "../905/985254";
import { f as _$$f3 } from "../905/940356";
import { Pe } from "../1156/713925";
import { Ng, YT, vG } from "../figma_app/176302";
import { S as _$$S } from "../1156/521776";
import { ty as _$$ty, Rm, Y2, DT } from "../figma_app/320164";
import { customHistory } from "../905/612521";
import { AUTH_COMPLETE } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { trackAuthEvent } from "../905/248178";
import { UK } from "../figma_app/638601";
import { M as _$$M2 } from "../figma_app/423008";
import { Y9 } from "../figma_app/42724";
import { P as _$$P3 } from "../figma_app/650304";
import { V as _$$V, s as _$$s2 } from "../1156/291626";
import { W as _$$W3 } from "../1156/852405";
import { isFigmaDomain } from "../905/691205";
import { Wv } from "../figma_app/711157";
import { y as _$$y4 } from "../figma_app/13082";
import { z as _$$z } from "../vendor/999105";
import { W as _$$W4 } from "../905/592530";
import { useDebouncedCallback } from "use-debounce";
import { P as _$$P4 } from "../905/347284";
import { selectCurrentUser } from "../905/372672";
import { L as _$$L2 } from "../1156/365427";
import { N as _$$N3 } from "../1156/229926";
import { N as _$$N4 } from "../1156/461005";
import { z as _$$z2 } from "../905/788559";
import { H as _$$H3 } from "../figma_app/414056";
import { F as _$$F3 } from "../1156/295005";
import { S as _$$S2 } from "../1156/720801";
import { SvgComponent } from "../905/714743";
import { kS, C4 } from "../figma_app/325912";
import { oU, oR, XJ, IB, qE } from "../1156/418246";
import { Kj } from "../1156/201513";
import { k as _$$k3 } from "../905/443820";
import { r as _$$r2 } from "../905/11924";
import { w as _$$w } from "../905/433065";
import { Z as _$$Z3 } from "../1156/98576";
import { AP } from "../1156/717481";
import { A as _$$A6 } from "../b2835def/114344";
import { p as _$$p2 } from "../905/185998";
import { m as _$$m } from "../905/636019";
import { G as _$$G } from "../905/750789";
import { R as _$$R } from "../905/943003";
import { fQ } from "../1156/250784";
import { Q as _$$Q2 } from "../1156/755570";
import { HEADING, QUOTE, UNORDERED_LIST, ORDERED_LIST, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, ITALIC_STAR, ITALIC_UNDERSCORE, STRIKETHROUGH, LINK, $convertFromMarkdownString } from "../vendor/693164";
import { n } from "../vendor/110313";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { a as _$$a } from "../vendor/683966";
import { R as _$$R2 } from "../vendor/211731";
import { $ as _$$$2 } from "../vendor/909072";
import { CodeNode } from "@lexical/code";
import { LinkNode, AutoLinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { q as _$$q2 } from "../1156/234923";
import { OL } from "../1156/31019";
import { a as _$$a2 } from "../905/964520";
import { lQ } from "../905/934246";
import { V as _$$V2, ct, Re, pr, M_, a_ } from "../1156/90859";
import { D as _$$D2 } from "../1156/189378";
import { getSingletonSceneGraph } from "../905/700578";
import { ci, zM } from "../figma_app/259678";
import { S1, pF } from "../1156/867089";
import { p as _$$p3 } from "../1156/298326";
import { Ay as _$$Ay3 } from "../figma_app/432652";
import { Vc } from "../figma_app/211694";
import { Z as _$$Z4 } from "../1156/154963";
import { b as _$$b3, bL, mc as _$$mc, q7, Q$, ME } from "../figma_app/860955";
import { d as _$$d2 } from "../905/976845";
import { g as _$$g3 } from "../905/496772";
import { G as _$$G2 } from "../905/865520";
import { A as _$$A7 } from "../905/126947";
import { r as _$$r3 } from "../905/571562";
import { l as _$$l2 } from "../905/509505";
import { Fullscreen } from "../figma_app/13528";
import { Point } from "../905/736624";
import { e as _$$e5 } from "../905/621515";
import { F as _$$F4 } from "../905/224";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { Bi } from "../905/652992";
import { N as _$$N5 } from "../figma_app/268271";
import { DV } from "../905/739964";
import { q6k } from "../figma_app/6204";
import { nM as _$$nM, nc as _$$nc, NJ } from "../figma_app/570630";
import { jx, Ic } from "../figma_app/198516";
import { u as _$$u } from "../1156/83782";
import { c as _$$c2 } from "../905/370443";
import { rq as _$$rq } from "../905/425180";
import { F_ } from "../905/858282";
import { kC, dY, x1 } from "../1156/116225";
import { z as _$$z3 } from "../905/634240";
import { Go } from "../figma_app/97696";
import { u as _$$u2 } from "../1156/115781";
let et = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "m16.7 5.699.315-1.26c.126-.505.844-.505.97 0L18.3 5.7l1.26.315c.505.126.505.844 0 .97L18.3 7.3l-.315 1.26c-.126.505-.844.505-.97 0L16.7 7.3l-1.26-.315c-.505-.126-.505-.844 0-.97zM13 6a.5.5 0 0 1 0 1H7.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V11a.5.5 0 0 1 1 0v5.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6zm-2.146 4.146a.5.5 0 0 1 0 .708L9.707 12l1.147 1.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0m2.292.708a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708L14.293 12z",
      clipRule: "evenodd"
    })
  });
});
let eD = {
  chatBoxMessageRow: {
    alignItems: "x6s0dn4",
    borderRadius: "x9h44rk",
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    justifyContent: "x1qughib",
    marginBottom: "x38tqe7",
    paddingTop: "x1y1aw1k",
    paddingInline: "xdqyycr",
    paddingBottom: "x1s51fez",
    position: "x1n2onr6",
    zIndex: "x8knxv4",
    $$css: !0
  },
  chatBoxMessageRowPrimary: {
    backgroundColor: "xu5wzci",
    color: "x1tk3asg",
    fontWeight: "x1s688f",
    $$css: !0
  },
  chatBoxMessageRowError: {
    backgroundColor: "x3yuajn",
    color: "x172n1ly",
    $$css: !0
  },
  chatBoxMessageRowWarning: {
    backgroundColor: "x1mt81i5",
    color: "x12fzf0q",
    $$css: !0
  },
  chatBoxMessageRowCommunity: {
    backgroundColor: "x1v8gsql",
    color: "x1akne3o",
    $$css: !0
  },
  chatBoxMessageRowInfo: {
    backgroundColor: "x1yjdb4r",
    border: "x1bamp8i",
    color: "x1akne3o",
    $$css: !0
  },
  chatBoxMessageRowWithClose: {
    paddingRight: "x1m2p0i2",
    $$css: !0
  }
};
function eB({
  children: e,
  variant: t,
  onClose: n
}) {
  return jsxs("div", {
    ...Ay.props(eD.chatBoxMessageRow, "primary" === t && eD.chatBoxMessageRowPrimary, "error" === t && eD.chatBoxMessageRowError, "warning" === t && eD.chatBoxMessageRowWarning, "community" === t && eD.chatBoxMessageRowCommunity, "info" === t && eD.chatBoxMessageRowInfo, n && eD.chatBoxMessageRowWithClose),
    children: [e, n && jsx("div", {
      className: "x10l6tqk xclnmbr",
      children: jsx(_$$K, {
        onClick: n,
        "aria-label": getI18nString("living_designs.chat.errors.close"),
        children: jsx(_$$L, {})
      })
    })]
  });
}
function eU() {
  let e = RK();
  let t = e?.name ?? "";
  let {
    isConnectedNonOwner
  } = zA();
  let [s, a] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps,
    getArrowProps
  } = usePopoverPrimitive({
    isOpen: s,
    onOpenChange: a,
    type: "dialog",
    openOnHover: !0,
    placement: "top"
  });
  let d = Xr(Xl);
  let u = useAtomWithSubscription(Xl);
  let x = useAtomWithSubscription(GV);
  let m = _$$A4();
  return (_$$h(() => {
    x && m({
      showVisualBells: !1
    });
  }), x || !u) ? null : jsx(eB, {
    variant: "warning",
    onClose: () => d(!1),
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib x6s0dn4 xh8yej3",
      "data-testid": "supabase-deploy-nudge",
      children: [jsxs("div", {
        className: "x78zum5 x1q0g3np x167g77z xkh2ocl x6s0dn4",
        children: [jsx("div", {
          className: "x1gxdvn5",
          children: jsx(_$$e2, {})
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf",
          children: [jsx("p", {
            ...Ay.props(eG.textBodyMediumStrong),
            children: getI18nString("figmake.deploy_nudge.init.title")
          }), jsx("p", {
            ...Ay.props(eG.textBodyMedium),
            children: getI18nString("figmake.deploy_nudge.init.subtitle")
          })]
        })]
      }), jsxs(PopoverPrimitiveContainer, {
        ...getContainerProps({
          style: {
            boxShadow: "var(--elevation-500-modal-window)",
            borderRadius: "var(--radius-large, 0.8125rem)",
            padding: "4px",
            background: "var(--color-bg)",
            width: "240px"
          }
        }),
        children: [jsx(PopoverPrimitiveArrow, {
          ...getArrowProps()
        }), jsx("div", {
          className: "x78zum5 xkh2ocl xz9dl7a xsag5q8 xnm25rq",
          children: jsx("p", {
            ...Ay.props(eG.textBodyMediumStrong),
            children: getI18nString("figmake.deploy_nudge.popover.title")
          })
        }), jsx("div", {
          className: "xv42yna xh8yej3"
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf xkh2ocl x1bptt5e x1v2ro7d x1cy8zhl",
          children: [jsx("p", {
            ...Ay.props(eG.textBodyMedium),
            children: getI18nString("figmake.deploy_nudge.popover.subtitle")
          }), jsxs("div", {
            className: "x78zum5 x1q0g3np x167g77z",
            children: [jsx(ls, {
              size: Pf.LARGE
            }), jsxs("div", {
              className: "x78zum5 xdt5ytf xkvmg5q",
              children: [jsx("p", {
                ...Ay.props(eG.textBodyMediumStrong),
                children: t
              }), jsx("p", {
                ...Ay.props(eG.textBodyMediumSecondary),
                children: getI18nString("figmake.deploy_nudge.popover.user_avatar.subtitle")
              })]
            }), jsx("div", {})]
          })]
        })]
      }), jsx(Button, {
        variant: "secondary",
        disabled: isConnectedNonOwner,
        onClick: () => m({
          showVisualBells: !0
        }),
        ...(isConnectedNonOwner ? getTriggerProps({
          onClick: () => m({
            showVisualBells: !0
          })
        }) : {}),
        children: getI18nString("figmake.settings.connected_project.deploy_button")
      })]
    })
  });
}
let eG = {
  textBodyMedium: {
    ..._$$g.textBodyMedium,
    $$css: !0
  },
  textBodyMediumStrong: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  textBodyMediumSecondary: {
    ..._$$g.textBodyMedium,
    color: "x1n0bwc9",
    $$css: !0
  }
};
let e6 = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M12 5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 12 5m5.5 0a1.5 1.5 0 0 1 .5 2.912v8.175A1.5 1.5 0 1 1 16.087 18H14a.5.5 0 0 1 0-1h2.087c.15-.426.488-.762.913-.913V7.912A1.5 1.5 0 0 1 16.087 7H14a.5.5 0 0 1 0-1h2.087A1.5 1.5 0 0 1 17.5 5M10 6a.5.5 0 0 1 0 1H7.5a.5.5 0 0 0-.5.5v5.793l1.147-1.146.078-.065a.5.5 0 0 1 .629.064l1.5 1.5.064.079a.5.5 0 0 1-.693.693l-.078-.064L8.5 13.207l-1.5 1.5V16.5a.5.5 0 0 0 .5.5H10a.5.5 0 0 1 0 1H7.5A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6zm7.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M14 8a2 2 0 0 1 0 4 .5.5 0 0 1 0-1 1 1 0 0 0 0-2 .5.5 0 0 1 0-1m3.5-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
    })
  });
});
let tt = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M5 5h9v4h-4a1 1 0 0 0-1 1v4H5zm4 10H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zm6-5h4v9h-9v-4h4a1 1 0 0 0 1-1zm-1 0v4h-4v-4z",
      clipRule: "evenodd"
    })
  });
});
let tn = {
  elementAttachment: {
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    justifyContent: "x1qughib",
    alignItems: "x6s0dn4",
    marginLeft: "xq1n1xh",
    marginTop: "x14vqqas",
    gap: "x1jnr06f",
    borderRadius: "x12oqio5",
    width: "xeq5yr9",
    maxWidth: "x16q51m2",
    $$css: !0
  },
  elementPrompt: {
    backgroundColor: "x1v8gsql",
    border: "x1bamp8i",
    color: "x1akne3o",
    $$css: !0
  },
  elementPromptIcon: {
    "--color-icon": "xmauxvm",
    $$css: !0
  },
  elementChat: {
    margin: "x1ghz6dp",
    marginLeft: null,
    marginTop: null,
    paddingRight: "xy13l1i",
    backgroundColor: "xcr9a89",
    color: "x1quhyk7",
    $$css: !0
  },
  elementChatIcon: {
    "--color-icon": "x1aue78i",
    $$css: !0
  }
};
function tr({
  icon: e,
  label: t,
  variant: n = "prompt",
  onRemove: i
}) {
  return jsxs("div", {
    ...Ay.props(tn.elementAttachment, "prompt" === n ? tn.elementPrompt : tn.elementChat),
    children: [jsx("div", {
      children: e
    }), jsx("div", {
      className: "xb3r6kr xlyipyv xuxw1ft xazcve0",
      children: t
    }), "prompt" === n && i ? jsx(_$$K, {
      "aria-label": getI18nString("figmake.chat.click_to_inspect.remove"),
      onClick: i,
      children: jsx(_$$f2, {
        className: "xmauxvm"
      })
    }) : null]
  });
}
function ti({
  tagName: e,
  variant: t = "prompt"
}) {
  let n = useAtomWithSubscription(f3);
  let s = useCallback(() => {
    n?.setDirectManipulationEnabled({
      enabled: !1
    });
  }, [n]);
  return jsx(tr, {
    icon: ts(e, t),
    label: e,
    variant: t,
    onRemove: "prompt" === t ? s : void 0
  });
}
let ts = (e, t) => {
  let n = Ay.props("prompt" === t ? tn.elementPromptIcon : tn.elementChatIcon);
  switch (e.toLocaleLowerCase()) {
    case "p":
    case "span":
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "label":
    case "strong":
    case "em":
    case "b":
    case "i":
      return jsx(_$$e3, {
        ...n
      });
    case "a":
      return jsx(_$$r, {
        ...n
      });
    case "img":
    case "video":
      return jsx(_$$s, {
        ...n
      });
    case "li":
    case "ul":
      return jsx(_$$Z2, {
        ...n
      });
    case "ol":
      return jsx(_$$p, {
        ...n
      });
    default:
      return jsx(_$$c, {
        ...n
      });
  }
};
function ta({
  nodes: e,
  variant: t = "prompt"
}) {
  if (0 === e.length || !e[0]) return null;
  let n = e[0];
  let i = tl(n.type, t);
  let s = e.length > 1 ? `${e.length} elements` : n.name;
  return jsx(tr, {
    icon: i,
    label: s,
    variant: t,
    onRemove: "prompt" === t ? () => SceneGraphHelpers?.clearSelection() : void 0
  });
}
let tl = (e, t) => {
  let n = Ay.props("prompt" === t ? tn.elementPromptIcon : tn.elementChatIcon);
  switch (e) {
    case "FRAME":
    default:
      return jsx(_$$q, {
        ...n
      });
    case "GROUP":
      return jsx(_$$M, {
        ...n
      });
    case "RECTANGLE":
    case "ROUNDED_RECTANGLE":
      return jsx(_$$y2, {
        ...n
      });
    case "TEXT":
      return jsx(_$$e3, {
        ...n
      });
    case "SYMBOL":
    case "INSTANCE":
      return jsx(_$$y3, {
        ...n
      });
    case "VECTOR":
      return jsx(e6, {
        ...n
      });
    case "LINE":
      return jsx(_$$h2, {
        ...n
      });
    case "ELLIPSE":
      return jsx(_$$B2, {
        ...n
      });
    case "REGULAR_POLYGON":
      return jsx(_$$o, {
        ...n
      });
    case "STAR":
      return jsx(_$$e4, {
        ...n
      });
    case "BOOLEAN_OPERATION":
      return jsx(tt, {
        ...n
      });
    case "SECTION":
      return jsx(_$$c, {
        ...n
      });
  }
};
let th = "dismissed_chat_soft_limit_banner";
function tN() {
  let e = Y9(getI18nString("auth.welcome-to-figma"));
  let t = useDispatch();
  return jsx(TrackingProvider, {
    name: "Logged Out File Chatbox Banner",
    children: jsxs("div", {
      className: "x9f619 x78zum5 x1ov5egs x9a3u73 x1cy8zhl x1mxnbhz x131gfan x1mgsydn x167g77z",
      children: [jsx("div", {
        className: "x1tk3asg x1g2dr8m xiqqdae x1j61x8r xkezfkh x14kxzw3 xqp8s7e x78zum5 x6s0dn4 xxk0z11 x1iyjqo2 xeuugli",
        children: jsx("span", {
          className: "xb3r6kr xuxw1ft xlyipyv",
          children: getI18nString("auth.sign_up_to_use_figma_rev")
        })
      }), jsxs("div", {
        className: "xeq5yr9 x78zum5 x13a6bvl x167g77z x3psx0u",
        children: [jsx(ButtonPrimitive, {
          onClick: () => {
            UK("SIGN_UP_BUTTON_BANNER");
            e({
              origin: _$$ty.FIGMA_REV_LOGGED_OUT_FOOTER,
              formState: AuthFlowStep.SIGN_UP
            });
          },
          className: "xxk0z11 x16v0e3u xf67zum x19y5rnk x1akne3o x2b8uid xeq5yr9 xclx6tv xiqqdae x1j61x8r xkezfkh x14kxzw3 xqp8s7e x2lah0s",
          children: getI18nString("auth.sign_up")
        }), jsx(_$$M2, {
          onClick: () => {
            UK("GOOGLE_SSO_BUTTON");
            Rm({
              dispatch: t,
              origin: _$$ty.FIGMA_REV_LOGGED_OUT_FOOTER_WITH_GOOGLE,
              redirectUrl: customHistory.location.pathname
            }).then(e => {
              "login" === e.type && t(AUTH_COMPLETE({
                userId: e.user.id
              }));
            }, e => {
              trackAuthEvent("google_signup_error", _$$ty.FIGMA_REV_LOGGED_OUT_FOOTER_WITH_GOOGLE, {
                error: e.message
              });
              getFeatureFlags().ff_show_auth_modal_on_google_sso_error && Y2({
                dispatch: t,
                origin: _$$ty.FIGMA_REV_LOGGED_OUT_FOOTER_WITH_GOOGLE,
                message: e.message,
                redirectUrl: customHistory.location.pathname
              });
            });
          }
        })]
      }), jsx(_$$P3, {
        origin: DT.LOGGED_OUT_FILE,
        overrideUseFedCMPrompt: !1
      })]
    })
  });
}
let tI = lazy(() => _require2);
let tL = "https://help.figma.com/hc/articles/31722591905559-Figma-Make-FAQs";
let tz = {
  chatbox: {
    position: "x1n2onr6",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    flexShrink: "x2lah0s",
    paddingTop: "x1iorvi4",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    borderStyle: "x1y0btm7",
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderWidth: "xmkeg23",
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderColor: "x14i3s5s",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "x9h44rk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    bottom: "x1ey2m1c",
    transition: "x1753ylo",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    ":focus-within_borderColor": "x116ztm0",
    ":focus-within_borderInlineColor": null,
    ":focus-within_borderInlineStartColor": null,
    ":focus-within_borderLeftColor": null,
    ":focus-within_borderInlineEndColor": null,
    ":focus-within_borderRightColor": null,
    ":focus-within_borderBlockColor": null,
    ":focus-within_borderTopColor": null,
    ":focus-within_borderBottomColor": null,
    ":focus-within_boxShadow": "xhfuivf",
    paddingBottom: "xsag5q8",
    gap: "x1v2ro7d",
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  chatboxNoShadow: {
    ":focus-within_boxShadow": "x15ysqaf",
    $$css: !0
  },
  chatboxDraggingAttachment: {
    border: "x11z6oqc",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  chatboxTextarea: {
    display: "x78zum5",
    flexGrow: "x1iyjqo2",
    resize: "xtt52l0",
    minHeight: "x8nclml",
    paddingLeft: "xnm25rq",
    paddingRight: "xyfqnmn",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    paddingTop: "xz9dl7a",
    paddingBottom: "xsag5q8",
    cursor: "x1ed109x",
    $$css: !0
  },
  chatboxFigmakeTextarea: {
    fontSize: "x4z9k3i",
    $$css: !0
  },
  sendButton: {
    borderRadius: "x1xwekrv",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    height: "xlrawln",
    padding: "x10db7i2",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    justifyContent: "xlqzeqv",
    alignItems: "x6s0dn4",
    display: "x78zum5",
    flexShrink: "x2lah0s",
    $$css: !0
  },
  sendButtonEnabled: {
    backgroundColor: "xu5wzci",
    $$css: !0
  },
  sendButtonDisabled: {
    backgroundColor: "xgbcquw",
    $$css: !0
  },
  stopButton: {
    display: "x78zum5",
    height: "xlrawln",
    padding: "x11w2ro1",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    alignItems: "x6s0dn4",
    background: "xsqpjig",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "x1xwekrv",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    gap: "x195vfkc",
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  stopButtonText: {
    ..._$$g.textBodyMedium,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    whiteSpace: "xuxw1ft",
    color: "x1tk3asg",
    fontStyle: "x1j61x8r",
    $$css: !0
  },
  codeDrawerButton: {
    backgroundColor: "xjbqb8w",
    cursor: "x1ypdohk",
    $$css: !0
  },
  colorTextDanger: {
    color: "x172n1ly",
    $$css: !0
  },
  colorText: {
    color: "x1akne3o",
    $$css: !0
  }
};
function tM({
  children: e
}) {
  return jsx("div", {
    className: "x78zum5 xdt5ytf x2lah0s xwalrwr x7wzq59 x1ey2m1c",
    "data-onboarding-key": HB,
    children: e
  });
}
function tR() {
  return jsx(_$$N2, {
    href: "https://creativecommons.org/licenses/by/4.0/",
    newTab: !0,
    children: renderI18nText("design_systems.preset_libraries.tooltip.figma_license_link")
  });
}
function tF({
  communityAttributions: e,
  onClose: t
}) {
  if (e.length <= 0 || e.length > 3) return null;
  let n = e.map(e => jsx(Ph, {
    newTab: !0,
    href: getCommunityFileUrl(e.hubFileId),
    trusted: !0,
    children: truncate(e.hubFileName, 30)
  }, e.hubFileId));
  return jsx(eB, {
    variant: "community",
    onClose: t,
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x17d4w8g",
      children: [jsx("div", {
        className: "x2lah0s",
        children: jsx(_$$f, {})
      }), jsx("div", {
        children: 1 === e.length ? renderI18nText("figmake.chat.community_attribution.attributions_one", {
          hubFileLink: n[0],
          creatorName: e[0].creatorName,
          licenseLink: jsx(tR, {})
        }) : 2 === e.length ? renderI18nText("figmake.chat.community_attribution.attributions_two", {
          hubFileLink1: n[0],
          hubFileLink2: n[1],
          licenseLink: jsx(tR, {})
        }) : renderI18nText("figmake.chat.community_attribution.attributions_three", {
          hubFileLink1: n[0],
          hubFileLink2: n[1],
          hubFileLink3: n[2],
          licenseLink: jsx(tR, {})
        })
      })]
    })
  });
}
let tO = withTrackedClick(_$$$);
function tD({
  licenseType: e,
  onClose: t
}) {
  let n = useTeamPlanPublicInfo();
  let i = n.unwrapOr(null)?.tier;
  let {
    getProvisionalAccessBanner,
    getPendingRequest
  } = wH();
  let {
    text,
    shouldShowCurf
  } = getProvisionalAccessBanner(e);
  let {
    curfCtaHandler,
    curfCtaLabel
  } = mT(e);
  let u = l;
  shouldShowCurf || getPendingRequest(e)?.entryPoint !== _$$tc.CODE_CHAT_LIMIT || (u = getI18nString("fullscreen.toolbar_banner.provisional_access.code_chat"));
  return jsx(TrackingProvider, {
    name: "ChatBoxProvisionalAccessBanner",
    properties: {
      tier: i
    },
    children: jsx("div", {
      className: "xyorhqc",
      "data-testid": "provisional-access-banner",
      children: jsxs(Yy, {
        variant: "brand",
        icon: null,
        onDismiss: t,
        children: [jsx(_$$Q, {
          children: u
        }), shouldShowCurf && jsx(tO, {
          onClick: curfCtaHandler,
          children: curfCtaLabel
        })]
      })
    })
  });
}
function tB({
  onClose: e
}) {
  let t = useTeamPlanPublicInfo();
  let n = t.unwrapOr(null)?.tier;
  let i = getI18nString("figmake.meter_limit.enjoy_more_ai_credits");
  let s = renderI18nText("figmake.meter_limit.used_all_your_credits", {
    learnMoreLink: jsx(Ph, {
      newTab: !0,
      trusted: !0,
      href: _t,
      children: renderI18nText("general.learn_more")
    })
  });
  return jsx(TrackingProvider, {
    name: "ChatBoxSoftLimitBanner",
    properties: {
      tier: n
    },
    children: jsx("div", {
      className: "xyorhqc",
      "data-testid": "chat-soft-limit-banner",
      children: jsx(Yy, {
        variant: "brand",
        icon: null,
        onDismiss: e,
        children: jsx(_$$Q, {
          title: i,
          children: s
        })
      })
    })
  });
}
function tq() {
  let e = useTeamPlanPublicInfo();
  let t = e.unwrapOr(null)?.tier || null;
  let n = selectCurrentFile();
  let i = useIsSelectedFigmakeFullscreen();
  let s = n?.teamId ?? "";
  let a = $Y(s);
  let l = i ? UpsellModalType.FIGMAKE_METER_LIMIT_TOAST : UpsellModalType.LIVING_DESIGNS_METER_LIMIT_TOAST;
  let o = _$$y(s, l);
  return t === FPlanNameType.STARTER && getFeatureFlags().bake_starter_limit && a ? jsx($z, {
    variant: "primary",
    onClick: o,
    children: renderI18nText("figmake.meter_limit.view_plans")
  }) : null;
}
function t$() {
  let {
    handleUpgrade,
    getIsUpgradeHandlerLoading
  } = wH({
    entryPoint: _$$tc.CODE_CHAT_LIMIT,
    folderId: null
  });
  let n = useIsSelectedFigmakeFullscreen() ? FProductAccessType.FIGMAKE : FProductAccessType.SITES;
  return getIsUpgradeHandlerLoading() ? jsx($z, {
    variant: "primary",
    disabled: !0,
    children: renderI18nText("figmake.meter_limit.request_full_seat")
  }) : jsx($z, {
    variant: "primary",
    onClick: handleUpgrade({
      licenseType: n,
      upgradeReason: _$$i.CODE_CHAT_LIMIT,
      entryPoint: _$$tc.CODE_CHAT_LIMIT
    }),
    children: renderI18nText("figmake.meter_limit.request_full_seat")
  });
}
function tP() {
  let e = useIsSelectedFigmakeFullscreen() ? JT.FIGMAKE : JT.LIVING_DESIGNS;
  let {
    meterResetDate,
    meteringWindow
  } = Ig(e);
  if (!meterResetDate) return {
    resetDate: null,
    meteringWindow: null
  };
  let r = A0(meterResetDate);
  return r ? {
    resetDate: _$$A3(r).format("LL"),
    meteringWindow
  } : {
    resetDate: null,
    meteringWindow: null
  };
}
function tU() {
  let {
    resetDate,
    meteringWindow
  } = tP();
  return resetDate ? meteringWindow === co.DAILY ? renderI18nText("figmake.meter_limit.plans_ai_credit_limit_reached_reset_imminent") : renderI18nText("figmake.meter_limit.plans_ai_credit_limit_reached", {
    resetDate
  }) : null;
}
function tG() {
  let {
    resetDate
  } = tP();
  return resetDate ? renderI18nText("figmake.meter_limit.reached_your_current_credits_limit", {
    resetDate
  }) : renderI18nText("figmake.meter_limit.primary");
}
function tH() {
  let {
    resetDate,
    meteringWindow
  } = tP();
  return resetDate ? meteringWindow === co.DAILY ? renderI18nText("figmake.meter_limit.seat_credit_limit_reached_daily") : meteringWindow === co.MONTHLY ? renderI18nText("figmake.meter_limit.seat_credit_limit_reached_monthly", {
    resetDate
  }) : renderI18nText("figmake.meter_limit.seat_credit_limit_reached", {
    resetDate
  }) : null;
}
function tW() {
  let e = _H();
  let t = useTeamPlanPublicInfo();
  let n = t.unwrapOr(null)?.tier || null;
  let i = Tk();
  let s = yy();
  let a = useAtomWithSubscription(openFileTeamAtom);
  if (!i || i === _$$ee.DISABLE_WITHOUT_TOAST) return null;
  let l = function (e, t) {
    switch (e) {
      case _$$ee.UNAVAILABLE_ON_EDU_PLANS:
        return {
          title: renderI18nText("figmake.view_only.unavailable_on_edu")
        };
      case _$$ee.MAKE_UNAVAILABLE_ON_PLAN:
        return {
          title: renderI18nText("figmake.view_only.unavailable_on_plan", {
            learnMoreLink: jsx(Ph, {
              newTab: !0,
              trusted: !0,
              href: tL,
              children: renderI18nText("general.learn_more")
            })
          }),
          icon: jsx(_$$t2, {})
        };
      case _$$ee.MAKE_UNAVAILABLE_ON_SEAT:
        return {
          title: renderI18nText("figmake.view_only.unavailable_on_seat", {
            learnMoreLink: jsx(Ph, {
              newTab: !0,
              trusted: !0,
              href: tL,
              children: renderI18nText("general.learn_more")
            })
          }),
          icon: jsx(_$$t2, {})
        };
      case _$$ee.INTERIM_VIEW_ONLY_COMING_SOON:
        return {
          title: renderI18nText("figmake.view_only.coming_soon_title"),
          content: () => renderI18nText("figmake.view_only.check_back_in_coming_weeks_learn_more", {
            learnMoreLink: jsx(Ph, {
              newTab: !0,
              trusted: !0,
              href: tL,
              children: renderI18nText("general.learn_more")
            })
          }),
          icon: jsx(_$$t2, {})
        };
      case _$$ee.VIEW_ONLY_ASK_TO_EDIT:
        return {
          title: void 0,
          content: () => renderI18nText("figmake.view_only.banner_message"),
          button: jsx(RJ, {
            viewOnly: !0,
            variant: "primary"
          }),
          icon: null
        };
      case _$$ee.METER_LIMIT:
        return {
          title: void 0,
          content: () => jsx(tG, {})
        };
      case _$$ee.METER_LIMIT_UPGRADE_PLAN:
        return {
          content: () => jsx(tU, {}),
          button: jsx(tq, {}),
          icon: null
        };
      case _$$ee.METER_LIMIT_UPGRADE_SEAT:
        return {
          title: void 0,
          content: () => jsx(tH, {}),
          button: jsx(t$, {}),
          icon: null
        };
      case _$$ee.PLAN_AI_DISABLED:
        return {
          title: renderI18nText("living_designs.chat.disabled_reason.title.not_available"),
          content: () => renderI18nText("living_designs.chat.disabled_reason.subtitle.ai_disabled", {
            planName: t
          })
        };
      case _$$ee.DISABLE_CATCH_ALL:
        return {
          title: renderI18nText("living_designs.chat.disabled_reason.title.not_available")
        };
      case _$$ee.DISABLE_WITHOUT_TOAST:
        return {
          title: null
        };
      default:
        throwTypeError(e);
    }
  }(i, s?.name || a?.name || "");
  return jsx(TrackingProvider, {
    name: "ChatBoxToast",
    properties: {
      codeChatRestriction: i,
      isViewOnly: e,
      tier: n
    },
    children: jsx("div", {
      className: "xyorhqc",
      "data-testid": "chat-box-toast",
      children: jsx(Yy, {
        variant: "brand",
        icon: l.icon,
        children: jsxs("div", {
          className: "x78zum5 x1q0g3np x1qughib xou54vl x6s0dn4 xh8yej3",
          children: [jsx("div", {
            className: "x78zum5 x1q0g3np xkh2ocl x6s0dn4",
            children: jsx(_$$Q, {
              title: l.title,
              children: l.content?.()
            })
          }), l.button]
        })
      })
    })
  });
}
function tV({
  attachments: e,
  clearAttachment: t
}) {
  return e && e.filter(e => "error" !== e.status).length > 0 ? jsx("div", {
    className: "x78zum5 x1q0g3np x167g77z x1xps8ly",
    children: e.map(e => "error" === e.status ? null : jsx(_$$V, {
      attachment: e,
      clearAttachment: t
    }, e.uniqueId))
  }) : null;
}
function tK() {
  let e = _$$P2();
  let t = Xr(_$$rK);
  return jsx(eB, {
    variant: "error",
    onClose: () => t(!1),
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib x6s0dn4 xh8yej3",
      "data-testid": "supabase-error-banner",
      children: [jsxs("div", {
        className: "x78zum5 x1q0g3np x167g77z xkh2ocl x6s0dn4",
        children: [jsx(_$$Z, {
          "aria-hidden": !0,
          style: {
            "--color-icon": "currentColor"
          }
        }), getI18nString("figmake.supabase_error.title")]
      }), jsx(Button, {
        variant: "secondary",
        onClick: e,
        children: getI18nString("figmake.supabase_error.button")
      })]
    })
  });
}
function tX({
  chatError: e,
  onClose: t,
  onRetry: n
}) {
  let {
    error,
    cortexClientGeneratedRequestUuid
  } = e;
  let {
    node,
    dismissable
  } = u1({
    error
  });
  let o = isDevEnvironment() ? cortexClientGeneratedRequestUuid : void 0;
  let c = !1;
  let d = !1;
  if (error.message === T_.ATTACHMENTS_TOO_LARGE || error.message === T_.MAX_CONTENT_LENGTH_EXCEEDED || error.message === T_.MAX_CONTEXT_LENGTH_EXCEEDED_IMAGE_FALLBACK) d = !0;else if (error.message === T_.PROMPT_ENHANCEMENT_FAILED) d = !0;else if (error.message === T_.PROMPT_ENHANCEMENT_FAILED) d = !0;else {
    let e = sZ(error);
    c = [_$$B.GENERIC, _$$B.OFFLINE, _$$B.NETWORK_ERROR, _$$B.RATE_LIMIT_EXCEEDED].includes(e);
    d = [_$$B.CONTENT_LENGTH_LIMIT, _$$B.UNSAFE_OR_HARMFUL_CONTENT].includes(e);
  }
  return jsx(eB, {
    variant: d ? "warning" : "error",
    onClose: dismissable ? t : void 0,
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x6s0dn4 x1nfngrj",
      children: [jsx("span", {
        className: "xvy4d1p",
        children: jsx(_$$Z, {
          "aria-hidden": !0,
          style: {
            "--color-icon": "currentColor"
          }
        })
      }), jsxs("div", {
        role: "alert",
        className: "x1iyjqo2",
        children: [node, o && jsx("p", {
          children: `Request UUID: ${o}`
        })]
      }), c && n && jsx("div", {
        className: "x1yjdb4r x78zum5 x1q0g3np x6s0dn4 x167g77z x19y5rnk",
        children: jsx(Button, {
          variant: "secondary",
          onClick: n,
          children: getI18nString("ai.try_again")
        })
      })]
    })
  });
}
function tY({
  onClose: e,
  requestFixErrors: t,
  errorFixingDisabled: n,
  isLastUserMessageAutoErrorFix: i,
  errorCount: s,
  variant: a
}) {
  let l = Xr(YD);
  let o = Xr(Vo);
  let c = getI18nString("living_designs.chat.errors.error_count", {
    count: s
  });
  c = "error" === a ? i ? s > 10 ? getI18nString("figmake.errors.autofix_failed_max_errors", {
    maxCount: 10
  }) : getI18nString("figmake.errors.autofix_failed", {
    count: s
  }) : s > 10 ? getI18nString("figmake.errors.max_errors", {
    maxCount: 10
  }) : getI18nString("living_designs.chat.errors.error_count", {
    count: s
  }) : s > 10 ? getI18nString("figmake.chat.warning_message_max_errors", {
    maxCount: 10
  }) : getI18nString("figmake.chat.warning_message", {
    count: s
  });
  return jsxs(eB, {
    variant: a,
    onClose: e,
    children: [jsx(ButtonPrimitive, {
      onClick: () => {
        l(!0);
        o("console");
      },
      ...Ay.props(tz.codeDrawerButton, "error" === a && tz.colorTextDanger, "info" === a && tz.colorText),
      children: jsxs("div", {
        className: "x78zum5 x1q0g3np x6s0dn4 x1jnr06f",
        children: [jsx(_$$Z, {
          "aria-hidden": !0,
          style: {
            "--color-icon": "currentColor"
          }
        }), jsx("div", {
          style: {
            color: "currentColor"
          },
          children: c
        })]
      })
    }), jsx("div", {
      className: "x78zum5 x1q0g3np x6s0dn4 x167g77z x19y5rnk x1yjdb4r",
      children: jsx(Button, {
        variant: "secondary",
        onClick: t,
        disabled: n,
        children: getI18nString("living_designs.chat.errors.ask_figma_fix")
      })
    })]
  });
}
function tJ({
  onClose: e
}) {
  return jsx(eB, {
    variant: "info",
    onClose: e,
    children: jsxs("span", {
      className: "x78zum5 x1q0g3np x6s0dn4 x1jnr06f",
      children: [jsx(et, {}), getI18nString("figmake.chat.autofix_message")]
    })
  });
}
function tZ({
  state: e
}) {
  return "chatDisabled" === e.type ? jsxs(Fragment, {
    children: [jsx(tW, {}), e.showLoggedOutBanner && jsx(tN, {})]
  }) : "supabaseNudge" === e.type ? jsx(eU, {}) : "supabaseError" === e.type ? jsx(tK, {}) : "chatError" === e.type ? jsx(tX, {
    chatError: e.chatError,
    onClose: e.onClose,
    onRetry: e.onRetry
  }) : "consoleErrors" === e.type ? jsx(tY, {
    onClose: e.onClose,
    requestFixErrors: e.requestFixErrors,
    errorFixingDisabled: e.errorFixingDisabled,
    isLastUserMessageAutoErrorFix: e.isLastUserMessageAutoErrorFix,
    errorCount: e.errorCount,
    variant: e.variant
  }) : "selfHealing" === e.type ? jsx(tJ, {
    onClose: e.onClose
  }) : "communityAttribution" === e.type ? jsx(tF, {
    communityAttributions: e.communityAttributions,
    onClose: e.onClose
  }) : "chatSoftLimit" === e.type ? jsx(tB, {
    onClose: e.onClose
  }) : "provisionalAccess" === e.type ? jsx(tD, {
    licenseType: e.licenseType,
    onClose: e.onClose
  }) : null;
}
let tQ = forwardRef((e, t) => {
  let {
    placeholderText,
    canSend,
    sendMessage,
    chatBoxExtraContent,
    inspectedElement,
    errorFixingDisabled,
    showPasteDesignsCallout,
    generationInProgress,
    chatMessagesNodeGuid,
    canCancelGeneration,
    chatContainerRef,
    isDraggingAttachment,
    chatMessageCount,
    isLastUserMessageAutoErrorFix,
    featureType,
    onFocus
  } = e;
  let [k, E] = useAtomValueAndSetter(mC(chatMessagesNodeGuid));
  let {
    chatError,
    clearChatError
  } = _$$tk(chatMessagesNodeGuid);
  let [A, T] = jT();
  let [I] = PM();
  let L = A.filter(e => "error" === e.type || "warn" === e.type);
  let R = useLatestRef(L);
  let F = useMemo(() => L.every(e => "warn" === e.type) && 0 === I.length, [L, I]);
  let O = useLatestRef(chatMessageCount);
  let [D, B] = useState(!1);
  let q = canSend && !isWhitespace(k);
  let $ = function (e) {
    let [t, n] = useState(!1);
    let r = useRef(null);
    useEffect(() => (r.current && clearTimeout(r.current), n(e.length > 0), r.current = setTimeout(() => {
      n(!1);
    }, 1e4), () => {
      r.current && clearTimeout(r.current);
    }), [e]);
    return t;
  }(k);
  useEffect(() => {
    let e = A5(chatMessagesNodeGuid);
    e ? e.isTyping !== $ && YZ({
      ...e,
      isTyping: $
    }) : chatMessagesNodeGuid && YZ({
      node: chatMessagesNodeGuid,
      isTyping: $,
      messages: [],
      fileUpdates: []
    });
  }, [$, chatMessagesNodeGuid]);
  useEffect(() => {
    (R?.length !== L.length || O !== chatMessageCount) && B(!1);
  }, [R, L, O, chatMessageCount]);
  let [P, G] = useAtomValueAndSetter(o0(chatMessagesNodeGuid));
  let [H, W] = useState(300);
  let [V, K] = useState(0);
  let {
    communityAttributionDisplay,
    clearCommunityAttributionDisplay
  } = Pe();
  useEffect(() => {
    if (!chatContainerRef?.current) return;
    let e = () => {
      W(Math.max(64, .4 * (chatContainerRef.current?.clientHeight || 300)));
    };
    let t = () => {
      K(chatContainerRef.current?.clientWidth ?? 0);
    };
    let n = () => {
      e();
      t();
    };
    n();
    new ResizeObserver(n).observe(chatContainerRef.current);
  }, [chatContainerRef]);
  let J = _$$S({
    textareaRef: t,
    maxHeight: H
  });
  useEffect(() => {
    J();
  }, [H, k, J, V]);
  let Z = _$$ry();
  let Q = useAtomWithSubscription(Ng);
  let ee = _$$k2();
  let et = useIsSelectedFigmakeFullscreen();
  let en = et ? FProductAccessType.FIGMAKE : FProductAccessType.SITES;
  let er = Xu();
  let ei = useAtomWithSubscription(Xl);
  let {
    connectedProject,
    isConnectedNonOwner
  } = GC();
  let el = Iz();
  let {
    showProvisionalAccessBanner,
    onCloseProvisionalAccessBanner
  } = function (e) {
    let {
      getProvisionalAccessBanner
    } = wH();
    let n = getProvisionalAccessBanner(e);
    let [r, s] = useState(!0);
    return {
      showProvisionalAccessBanner: n?.showBanner && r,
      onCloseProvisionalAccessBanner: () => {
        s(!1);
      }
    };
  }(en);
  let {
    showChatSoftLimitBanner,
    onCloseChatSoftLimitBanner
  } = function (e) {
    let t = useDispatch();
    let n = _$$f3(th);
    let r = useTeamPlanPublicInfo();
    let i = r.unwrapOr(null)?.tier;
    let {
      meterUsed
    } = xD(e);
    let l = Tf();
    if (n && function (e) {
      let t = _$$A3(new Date()).tz("America/Los_Angeles");
      return _$$A3(e).tz("America/Los_Angeles").isBefore(t, "month");
    }(n.updatedAt)) t(postUserFlag({
      [th]: !1
    }));else if (n) return {
      showChatSoftLimitBanner: !1
    };
    return i && i !== FPlanNameType.STARTER && i !== FPlanNameType.STUDENT ? {
      showChatSoftLimitBanner: meterUsed > l[i],
      onCloseChatSoftLimitBanner: () => {
        t(postUserFlag({
          [th]: !0
        }));
      }
    } : {
      showChatSoftLimitBanner: !1
    };
  }(et ? JT.FIGMAKE : JT.LIVING_DESIGNS);
  let eh = {
    type: "normal"
  };
  Z || Q ? eh = {
    type: "chatDisabled",
    showLoggedOutBanner: et && ee
  } : er && ei && (connectedProject || isConnectedNonOwner) ? eh = {
    type: "supabaseNudge"
  } : er && el ? eh = {
    type: "supabaseError"
  } : chatError ? eh = {
    type: "chatError",
    chatError,
    onClose: clearChatError,
    onRetry: () => sendMessage({})
  } : (L.length > 0 || er && I.length > 0) && !D ? P ? eh = {
    type: "selfHealing",
    onClose: () => B(!0)
  } : generationInProgress || (eh = {
    type: "consoleErrors",
    onClose: () => B(!0),
    requestFixErrors: function () {
      G(!0);
      let e = Array.from(new Set([...(L.map(e => e.message) ?? []), ...I.map(e => e.event_message)]));
      sendMessage({
        message: F ? getI18nString("figmake.chat.warning_fix_message") : getI18nString("living_designs.chat.errors.fix_these_errors"),
        errors: e
      });
      T([]);
    },
    errorFixingDisabled,
    isLastUserMessageAutoErrorFix: !!isLastUserMessageAutoErrorFix,
    errorCount: L.length + I.length,
    variant: F ? "info" : "error"
  }) : communityAttributionDisplay && communityAttributionDisplay.length > 0 ? eh = {
    type: "communityAttribution",
    communityAttributions: communityAttributionDisplay,
    onClose: clearCommunityAttributionDisplay
  } : getFeatureFlags().ai_ga && !getFeatureFlags().disable_code_chat_soft_limit_banner && getFeatureFlags().enable_code_chat_soft_limit_banner_for_plan && showChatSoftLimitBanner ? eh = {
    type: "chatSoftLimit",
    onClose: onCloseChatSoftLimitBanner
  } : getFeatureFlags().bake_monetization_plan && et && showProvisionalAccessBanner && (eh = {
    type: "provisionalAccess",
    licenseType: en,
    onClose: onCloseProvisionalAccessBanner
  });
  return jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      q && sendMessage({});
    },
    children: jsxs(tM, {
      children: [jsx(tZ, {
        state: eh
      }), jsx(t0, {
        canCancelGeneration,
        canSend: q,
        chatBoxExtraContent,
        chatMessagesNodeGuid,
        featureType,
        generationInProgress,
        input: k,
        inspectedElement,
        isDraggingAttachment,
        onFocus,
        placeholderText,
        sendMessage,
        setInput: E,
        showPasteDesignsCallout,
        textareaRef: t,
        updateTextareaHeight: J
      })]
    })
  });
});
function t0({
  chatMessagesNodeGuid: e,
  generationInProgress: t,
  canSend: n,
  canCancelGeneration: s,
  sendMessage: l,
  input: o,
  setInput: c,
  updateTextareaHeight: d,
  inspectedElement: u,
  isDraggingAttachment: x,
  showPasteDesignsCallout: m,
  textareaRef: h,
  placeholderText: b,
  chatBoxExtraContent: j,
  onFocus: v,
  featureType: k
}) {
  let E = useIsSelectedFigmakeFullscreen();
  let w = O1();
  let A = k === lV.AI_ASSISTANT && w && !u;
  let T = useAtomWithSubscription(f3);
  let I = useCallback(e => {
    let t = e.target;
    d();
    c(t.value);
  }, [c, d]);
  let R = atomStoreManager.get(Z3(e));
  let F = _$$ry();
  let {
    attachments,
    clearAttachment
  } = _9(e);
  let B = E ? _$$W3() : null;
  let q = F ? "var(--color-bg-secondary)" : "var(--color-bg)";
  return jsxs("div", {
    ...Ay.props(tz.chatbox, x && tz.chatboxDraggingAttachment, k === lV.CODE_IN_SITES && tz.chatboxNoShadow),
    style: {
      backgroundColor: q
    },
    children: [jsxs("div", {
      className: "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1r8uery",
      style: {
        backgroundColor: q
      },
      children: [m && jsx(t1, {}), jsx(tV, {
        attachments,
        clearAttachment
      }), u ? jsx(ti, {
        tagName: u.tagName,
        variant: "prompt"
      }) : null, A ? jsx(ta, {
        nodes: w,
        variant: "prompt"
      }) : null, jsx("textarea", {
        ref: h,
        ...Ay.props(tz.chatboxTextarea, E && tz.chatboxFigmakeTextarea),
        "data-testid": "code-chat-chat-box",
        disabled: F,
        maxLength: 5e5,
        onChange: I,
        onFocus: e => {
          let t = e.target.value.length;
          e.target.setSelectionRange(t, t);
          v?.(e);
        },
        onKeyDown: e => {
          e.stopPropagation();
          "Enter" === e.key && !e.shiftKey && !e.nativeEvent.isComposing && (e.preventDefault(), n && (l({}), (u || T?.directManipulationEditor.directManipulationEnabled()) && T?.setDirectManipulationEnabled({
            enabled: !1
          })));
        },
        onPaste: function (e) {
          if (E) try {
            let t = (e.clipboardData || window.clipboardData).getData("Text");
            (function (e) {
              let t = e.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g);
              return !!(t && [...t].findIndex(e => function (e) {
                if (isValidUrl(e)) {
                  let t = new URL(e);
                  if (isFigmaDomain(t.hostname)) return !0;
                }
                return !1;
              }(e)) > -1);
            })(t) && hH(InsertErrorType.USER_PASTED_FIGMA_LINK_IN_CHAT);
          } catch {}
        },
        placeholder: b,
        style: {
          backgroundColor: q,
          height: "auto",
          overflowY: "hidden"
        },
        value: o
      })]
    }), jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib x6s0dn4 x84vhe8",
      children: [j, jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          minWidth: 0
        },
        children: [getFeatureFlags().bake_declaude ? null : jsx("div", {
          className: "x78zum5 xb3r6kr xlyipyv xuxw1ft xeuugli xs83m0k x1n0bwc9 x1d4th4m",
          children: B
        }), getFeatureFlags().make_edits_debug ? jsx("div", {
          style: {
            flexShrink: 0
          },
          children: jsx(Suspense, {
            fallback: null,
            children: jsx(tI, {})
          })
        }) : null, jsx("div", {
          style: {
            flexShrink: 0
          },
          children: (() => {
            let e = _$$A2(.19, 1, .22, 1);
            return jsx("div", {
              className: "x78zum5 x6s0dn4 xl56j7k x11umrmk",
              children: jsxs(_$$P.button, {
                onClick: () => {
                  t ? R && R.abort() : (l({}), (u || T?.directManipulationEditor.directManipulationEnabled()) && T?.setDirectManipulationEnabled({
                    enabled: !1
                  }));
                },
                disabled: t ? !s : !n,
                ...Ay.props(t ? tz.stopButton : tz.sendButton, !t && n && tz.sendButtonEnabled, !t && !n && tz.sendButtonDisabled),
                variants: {
                  play: {
                    width: "25px",
                    transition: {
                      duration: .3,
                      ease: e
                    }
                  },
                  stop: {
                    width: "63px",
                    transition: {
                      duration: .3,
                      ease: e
                    }
                  }
                },
                initial: "play",
                animate: t ? "stop" : "play",
                "aria-label": t ? getI18nString("living_designs.chat.stop_button.alt_text") : getI18nString("living_designs.chat.send_button.alt_text"),
                "data-testid": t ? "code-chat-stop-button" : "code-chat-send-button",
                children: [jsx(_$$P.div, {
                  className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11",
                  variants: {
                    play: {
                      x: 0,
                      transition: {
                        duration: .3,
                        ease: e
                      }
                    },
                    stop: {
                      x: 0,
                      transition: {
                        duration: .3,
                        ease: e
                      }
                    }
                  },
                  animate: t ? "stop" : "play",
                  children: jsx(_$$N, {
                    mode: "wait",
                    children: t ? jsx(_$$P.div, {
                      className: "absolute",
                      animate: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                      },
                      exit: {
                        opacity: 0,
                        scale: 0,
                        rotate: -45
                      },
                      initial: {
                        opacity: 0,
                        scale: 0,
                        rotate: 100
                      },
                      transition: {
                        duration: .3,
                        ease: e
                      },
                      children: jsx(_$$d, {
                        className: "xwa2v1s xvy4d1p xxk0z11 x2lah0s"
                      })
                    }, "square") : jsx(_$$P.div, {
                      className: "absolute",
                      animate: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                      },
                      exit: {
                        opacity: 0,
                        scale: 0,
                        rotate: 45
                      },
                      initial: {
                        opacity: 0,
                        scale: 0,
                        rotate: -45
                      },
                      transition: {
                        duration: .25,
                        ease: e
                      },
                      children: jsx(_$$W2, {
                        className: "xwa2v1s xvy4d1p xxk0z11 x2lah0s"
                      })
                    }, "arrow")
                  })
                }), jsx(_$$N, {
                  children: t && jsx(_$$P.span, {
                    ...Ay.props(tz.stopButtonText),
                    initial: {
                      opacity: 0,
                      width: 0
                    },
                    animate: {
                      opacity: 1,
                      width: "auto"
                    },
                    exit: {
                      opacity: 0,
                      width: 0
                    },
                    transition: {
                      opacity: {
                        duration: .25,
                        ease: e
                      },
                      width: {
                        duration: .25,
                        ease: e
                      }
                    },
                    children: getI18nString("living_designs.chat.stop_button")
                  })
                })]
              })
            });
          })()
        })]
      })]
    })]
  });
}
function t1() {
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x1nejdyq x1ruevkc x1opjl2c xxs4gfe x1sxf85j",
    children: [jsx(t5, {}), jsx("div", {
      className: "x1nmd3yn xm735u9 xkbmbem xqp8s7e xv1l7n4 xvwc6ox x1j61x8r",
      children: getI18nString("figmake.chat.paste_existing_design_callout")
    })]
  });
}
function t5() {
  return jsxs("svg", {
    width: "22",
    height: "27",
    viewBox: "0 0 22 27",
    children: [jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.3438 5.59766H18.8389V20.5352H16.2041V22.7998H5.85938V20.3682H3.1377V5.79492H5.7168V3.06641H16.3438V5.59766ZM7.83398 9.25586C7.691 9.24173 7.55088 9.29393 7.44922 9.39551L7.39355 9.45117C7.29203 9.55285 7.23973 9.69297 7.25391 9.83594C7.34716 10.7618 7.7613 14.2858 8.74023 15.2656C9.40363 15.9289 10.4407 16.2157 11.4219 16.1045L12.167 16.8545C12.5491 17.2397 13.171 17.241 13.5547 16.8574L14.834 15.5781C15.2154 15.1967 15.2167 14.5783 14.8369 14.1953L14.0986 13.4512C14.2185 12.4619 13.9322 11.4128 13.2627 10.7432C12.283 9.76425 8.76013 9.34913 7.83398 9.25586Z",
      fill: Tj.bgSelected
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.2261 0.0282208C5.71996 0.0785065 6.10527 0.495932 6.10527 1.00306V2.22185H15.9015V1.00306C15.9015 0.495932 16.2868 0.0785065 16.7807 0.0282208L16.8811 0.0234375H20.7996L20.9001 0.0282208C21.3939 0.0785065 21.7792 0.495932 21.7792 1.00306V4.92155L21.7745 5.022C21.7275 5.48284 21.3609 5.84947 20.9001 5.89639L20.7996 5.90117H19.8238V20.1057H20.7996L20.9001 20.1105C21.3939 20.1608 21.7792 20.5782 21.7792 21.0853V25.0038L21.7745 25.1043C21.7275 25.5651 21.3609 25.9317 20.9001 25.9787L20.7996 25.9834H16.8811L16.7807 25.9787C16.3198 25.9317 15.9532 25.5651 15.9063 25.1043L15.9015 25.0038V23.7869H6.10527V25.0038L6.10049 25.1043C6.05357 25.5651 5.68694 25.9317 5.2261 25.9787L5.12565 25.9834H1.20716L1.10671 25.9787C0.645871 25.9317 0.279246 25.5651 0.232322 25.1043L0.227539 25.0038V21.0853C0.227539 20.5782 0.612855 20.1608 1.10671 20.1105L1.20716 20.1057H2.19444V5.90117H1.20716L1.10671 5.89639C0.645871 5.84947 0.279246 5.48284 0.232322 5.022L0.227539 4.92155V1.00306C0.227539 0.495932 0.612855 0.0785065 1.10671 0.0282208L1.20716 0.0234375H5.12565L5.2261 0.0282208ZM1.20716 25.0038H5.12565V21.0853H1.20716V25.0038ZM16.8811 25.0038H20.7996V21.0853H16.8811V25.0038ZM6.10527 3.20147V4.92155L6.10049 5.022C6.05357 5.48284 5.68694 5.84947 5.2261 5.89639L5.12565 5.90117H3.17406V20.1057H5.12565L5.2261 20.1105C5.71996 20.1608 6.10527 20.5782 6.10527 21.0853V22.8073H15.9015V21.0853C15.9015 20.5782 16.2868 20.1608 16.7807 20.1105L16.8811 20.1057H18.8442V5.90117H16.8811L16.7807 5.89639C16.3198 5.84947 15.9532 5.48284 15.9063 5.022L15.9015 4.92155V3.20147H6.10527ZM1.20716 4.92155H5.12565V1.00306H1.20716V4.92155ZM16.8811 4.92155H20.7996V1.00306H16.8811V4.92155Z",
      fill: Tj.iconBrand
    }), jsx("path", {
      d: "M7.39116 8.45953C7.62267 8.28138 7.92476 8.21392 8.21343 8.28179L12.0259 9.17828V9.17926L12.2076 9.22613C13.9005 9.71089 15.0432 11.2703 15.0259 13.0045L15.4644 13.4429C15.8466 13.8255 15.8467 14.4452 15.4644 14.8277L12.8267 17.4654C12.4442 17.8478 11.8245 17.8476 11.4419 17.4654L11.0035 17.0269C9.26918 17.0443 7.70984 15.9015 7.22514 14.2086L7.17827 14.0269H7.17729L6.28081 10.2144C6.20316 9.88421 6.30267 9.53728 6.54253 9.29742L7.29643 8.54351L7.39116 8.45953ZM7.95952 9.26519L10.1744 11.481C10.4208 11.3465 10.703 11.2691 11.0035 11.2691L11.1802 11.2779C12.0543 11.3666 12.7369 12.105 12.7369 13.0025C12.7367 13.9595 11.9605 14.7357 11.0035 14.7359C10.106 14.7358 9.36756 14.0533 9.27885 13.1793L9.27007 13.0025L9.27885 12.8248C9.30267 12.5907 9.37346 12.3705 9.481 12.1734L7.26616 9.95855L7.23491 9.9898L8.13139 13.8023C8.4771 15.2707 9.88699 16.2325 11.3804 16.0191L12.1343 16.773L14.772 14.1353L14.0181 13.3814C14.2314 11.888 13.2696 10.4781 11.8013 10.1324L7.98882 9.2359L7.95952 9.26519ZM11.0035 12.2486C10.5873 12.2487 10.2496 12.5863 10.2496 13.0025C10.2497 13.3926 10.5464 13.7139 10.9263 13.7525L11.0035 13.7564C11.3934 13.7562 11.7147 13.4594 11.7535 13.0796L11.7574 13.0025C11.7574 12.5863 11.4196 12.2488 11.0035 12.2486Z",
      fill: Tj.iconBrand
    })]
  });
}
function t8({
  showAiBetaBadge: e
}) {
  return jsx("div", {
    className: "xh8yej3 x78zum5 x87ps6o",
    children: jsx(Wv, {
      titleTx: renderI18nText("living_designs.chat.default_title"),
      children: e ? jsx(_$$y4, {
        helpUrlVariant: JT.CODE_CHAT
      }) : null
    })
  });
}
let nr = {
  messageContent: {
    display: "x78zum5",
    borderRadius: "xgqmno8",
    padding: "x1r1m0to",
    backgroundColor: "x1v8gsql",
    userSelect: "x1hx0egp",
    whiteSpace: "x126k92a",
    wordBreak: "x13faqbe",
    cursor: "x1ed109x",
    $$css: !0
  }
};
function ni({
  user: e,
  featureType: t,
  plainText: n,
  imports: s = [],
  inspectedElement: l,
  selectedNodeIds: o
}) {
  let {
    userMessageTypographyStyle
  } = _$$L2();
  let d = n.trim();
  let u = t === lV.AI_ASSISTANT && o && o.length > 0 && !l;
  let x = _$$eY();
  let m = useMemo(() => o && Array.isArray(o) ? o.map(e => Zl(x, e)).filter(e => null !== e) : [], [o, x]);
  let h = _$$N3();
  let p = e => {
    h(e);
  };
  return jsx("div", {
    role: "region",
    "aria-label": getI18nString("figmake.chat.artifact.a11y_prompt_section_title", {
      user: e.name ?? e.handle
    }),
    className: "x1eaahee",
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x167g77z x13a6bvl",
      children: [jsxs("div", {
        className: "x78zum5 xdt5ytf x167g77z xuk3077",
        children: [l && l.tagName ? jsx(ti, {
          variant: "chat",
          tagName: l.tagName
        }) : null, u ? jsx(ta, {
          nodes: m,
          variant: "chat"
        }) : null, s.length > 0 ? jsx("div", {
          className: "x78zum5 x1q0g3np x167g77z x1a02dak x13a6bvl",
          children: s.map(e => jsx(_$$s2, {
            pastedDesignNodeId: e.guid,
            onClick: () => p(e.guid),
            attachmentType: yM(e)
          }, e.guid))
        }) : null, jsx("div", {
          ...Ay.props(nr.messageContent, userMessageTypographyStyle),
          children: d
        })]
      }), jsx("div", {
        className: "xpvyfi4 x1ty9z65",
        children: jsx(H8, {
          "aria-label": e.name ?? e.handle,
          user: e
        })
      })]
    })
  });
}
var nc = (e => (e.PENDING = "pending", e.SUCCESS = "success", e.FAILURE = "failure", e))(nc || {});
var nd = (e => (e.TOOL_CALL_SUCCESS = "tool_call_success", e.TOOL_CALL_CANCELLED = "tool_call_cancelled", e.TOOL_CALL_DISABLED = "tool_call_disabled", e))(nd || {});
function nm({
  header: e,
  body: t
}) {
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xkh2ocl",
    children: [jsx("div", {
      className: "x78zum5 xkh2ocl x14pk0dq",
      children: e
    }), t && jsxs(Fragment, {
      children: [jsx(cG, {}), jsx("div", {
        className: "x78zum5 xkh2ocl x14pk0dq",
        children: t
      })]
    })]
  });
}
function nb({
  text: e
}) {
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x167g77z xkh2ocl",
    children: [jsx("div", {
      className: "xvvfnsg",
      children: jsx(_$$r2, {})
    }), jsx("div", {
      ...Ay.props(nE.textBodyLargeStrong),
      children: e
    })]
  });
}
function nj({
  title: e,
  subtitle: t,
  interaction: n
}) {
  return jsx(nC, {
    icon: jsx(_$$k3, {
      size: "md"
    }),
    title: e,
    subtitle: t,
    interaction: n
  });
}
function nv({
  title: e,
  subtitle: t,
  interaction: n
}) {
  return jsx(nC, {
    icon: jsx(_$$w, {}),
    title: e,
    subtitle: t,
    interaction: n
  });
}
function nk({
  title: e,
  subtitle: t,
  interaction: n
}) {
  return jsx(nC, {
    icon: jsx("div", {
      className: "x15edyk6",
      children: jsx(_$$Z, {})
    }),
    title: e,
    subtitle: t,
    interaction: n
  });
}
function nC({
  icon: e,
  title: t,
  subtitle: n,
  interaction: i
}) {
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x167g77z xwib8y2 xkh2ocl",
    children: [jsx("div", {
      className: "x78zum5 x1cy8zhl xkh2ocl",
      children: e
    }), jsxs("div", {
      className: "x78zum5 xdt5ytf x1cy8zhl x167g77z xkh2ocl",
      children: [jsxs("div", {
        className: "x78zum5 xdt5ytf x1cy8zhl xdpxx8g",
        children: [jsx("div", {
          ...Ay.props(nE.textBodyLargeStrong),
          children: t
        }), jsx("div", {
          ...Ay.props(nE.textBodyLargeSecondary),
          children: n
        })]
      }), i]
    })]
  });
}
let nE = {
  textBodyLargeStrong: {
    ..._$$g.textBodyLargeStrong,
    $$css: !0
  },
  textBodyLargeSecondary: {
    ..._$$g.textBodyLarge,
    color: "x1n0bwc9",
    $$css: !0
  }
};
function nS({
  dismissSupabase: e,
  trackingContext: t
}) {
  let n = wT();
  let s = useCurrentFileKey() || "";
  let a = useCallback(() => {
    oU({
      persistentEntityId: t.persistentEntityId,
      clientLifecycleId: t.clientLifecycleId
    }, "toolCta", s);
    n();
  }, [n, t.persistentEntityId, t.clientLifecycleId, s]);
  return jsx(nv, {
    title: getI18nString("figmake.supabase.cta.list.account_connected"),
    subtitle: getI18nString("figmake.supabase.cta.auth.body_text"),
    interaction: jsxs("div", {
      className: "x78zum5 x167g77z",
      children: [jsx(ButtonLarge, {
        variant: "primary",
        onClick: a,
        children: getI18nString("figmake.supabase.connect")
      }), jsx(ButtonLarge, {
        variant: "secondary",
        onClick: () => e(),
        children: getI18nString("figmake.supabase.cancel")
      })]
    })
  });
}
function nw({
  toolCallId: e,
  toolName: t,
  dismissSupabase: n,
  trackingContext: i
}) {
  let {
    organization
  } = mS();
  let l = useDispatch();
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x167g77z xkh2ocl",
    children: [jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.account_connected")
    }), jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.org_connected", {
        org: organization?.name ?? ""
      })
    }), jsx(nv, {
      title: getI18nString("figmake.supabase.cta.connect_to_existing_projects.title"),
      subtitle: getI18nString("figmake.supabase.cta.connect_to_existing_projects.subtitle"),
      interaction: jsxs("div", {
        className: "x78zum5 x167g77z",
        children: [jsx(ButtonLarge, {
          variant: "primary",
          onClick: () => {
            l(showModalHandler({
              type: _$$Z3,
              data: {
                toolCallId: e,
                toolName: t,
                trackingContext: i,
                source: "toolCta"
              },
              showModalsBeneath: !0
            }));
          },
          children: getI18nString("figmake.supabase.cta.connect_to_existing_projects.button")
        }), jsx(ButtonLarge, {
          variant: "secondary",
          onClick: () => n(),
          children: getI18nString("figmake.supabase.cancel")
        })]
      })
    })]
  });
}
function nA() {
  let {
    organization
  } = mS();
  let {
    connectedProject
  } = GC();
  let n = connectedProject?.name ?? "";
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x167g77z xkh2ocl",
    children: [jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.account_connected")
    }), jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.org_connected", {
        org: organization?.name ?? ""
      })
    }), jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.project_connected", {
        project: n
      })
    })]
  });
}
function nT() {
  let {
    organization
  } = mS();
  let t = useAtomWithSubscription(Kj);
  if (!t || "connecting" !== t.state) return null;
  let n = t.project.name ?? "";
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x167g77z xkh2ocl",
    children: [jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.account_connected")
    }), jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.org_connected", {
        org: organization?.name ?? ""
      })
    }), jsx(nj, {
      title: getI18nString("figmake.supabase.cta.list.project_connecting", {
        project: n
      }),
      subtitle: getI18nString("figmake.supabase.cta.list.project_connecting.subtitle")
    })]
  });
}
function nL({
  toolCallId: e,
  toolName: t,
  dismissSupabase: n,
  trackingContext: i
}) {
  let {
    organization
  } = mS();
  let l = useDispatch();
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x167g77z xkh2ocl",
    children: [jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.account_connected")
    }), jsx(nb, {
      text: getI18nString("figmake.supabase.cta.list.org_connected", {
        org: organization?.name ?? ""
      })
    }), jsx(nv, {
      title: getI18nString("figmake.supabase.cta.create_project.title"),
      subtitle: getI18nString("figmake.supabase.cta.create_project.subtitle"),
      interaction: jsxs("div", {
        className: "x78zum5 x167g77z",
        children: [jsx(ButtonLarge, {
          variant: "primary",
          onClick: () => {
            l(showModalHandler({
              type: AP,
              data: {
                toolCallId: e,
                toolName: t,
                trackingContext: i,
                source: "toolCta"
              },
              showModalsBeneath: !0
            }));
          },
          children: getI18nString("figmake.supabase.cta.create_project.button")
        }), jsx(ButtonLarge, {
          variant: "secondary",
          onClick: () => n(),
          children: getI18nString("figmake.supabase.cancel")
        })]
      })
    })]
  });
}
function nz() {
  return jsx("div", {
    className: "x78zum5 xdt5ytf x167g77z xkh2ocl xl56j7k x6s0dn4 x1tamke2 xh8yej3",
    children: jsx(_$$k3, {})
  });
}
function nM({
  toolCallId: e,
  toolName: t,
  dismissSupabase: n,
  trackingContext: s
}) {
  let {
    authenticated,
    connectedProject,
    existingProjects,
    isLoading
  } = zA();
  let d = Xr(hR);
  let u = useAtomWithSubscription(Kj);
  useEffect(() => {
    if (isLoading) {
      d(s8.LOADING);
      return;
    }
    if (u && "connecting" === u.state) {
      d(s8.CONNECTING_TO_PROJECT);
      return;
    }
    connectedProject ? d(s8.CONNECTED_PROJECT) : authenticated && existingProjects.length ? d(s8.CONNECT_TO_EXISTING_PROJECTS) : authenticated ? d(s8.CREATE_PROJECT) : d(s8.AUTH);
  }, [isLoading, connectedProject, existingProjects, authenticated, d, u]);
  return jsx(nR, {
    toolCallId: e,
    toolName: t,
    dismissSupabase: n,
    trackingContext: s
  });
}
function nR({
  toolCallId: e,
  toolName: t,
  dismissSupabase: n,
  trackingContext: s
}) {
  let a = useAtomWithSubscription(hR);
  let l = useCurrentFileKey() || "";
  let o = useRef(!1);
  switch (useEffect(() => {
    if (o.current) return;
    let e = oR({
      persistentEntityId: s.persistentEntityId,
      clientLifecycleId: s.clientLifecycleId
    }, "toolCta", a, l);
    o.current = e;
  }, [a, s.persistentEntityId, s.clientLifecycleId, l]), a) {
    case s8.AUTH:
      return jsx(nS, {
        dismissSupabase: n,
        trackingContext: s
      });
    case s8.CONNECTING_TO_PROJECT:
      return jsx(nT, {});
    case s8.CONNECT_TO_EXISTING_PROJECTS:
      return jsx(nw, {
        toolCallId: e,
        toolName: t,
        dismissSupabase: n,
        trackingContext: s
      });
    case s8.CREATE_PROJECT:
      return jsx(nL, {
        toolCallId: e,
        toolName: t,
        dismissSupabase: n,
        trackingContext: s
      });
    case s8.CONNECTED_PROJECT:
      return jsx(nA, {});
    case s8.LOADING:
      return jsx(nz, {});
  }
}
function nO({
  toolCallId: e,
  toolName: t,
  disabledStatus: n,
  dismissSupabase: i,
  trackingContext: s
}) {
  return n ? jsx(nm, {
    header: jsx(nD, {
      disabledStatus: n
    })
  }) : jsx(nm, {
    header: jsx(nB, {}),
    body: jsx(nM, {
      toolCallId: e,
      toolName: t,
      dismissSupabase: i,
      trackingContext: s
    })
  });
}
function nD({
  disabledStatus: e
}) {
  let t = useMemo(() => {
    switch (e) {
      case nd.TOOL_CALL_SUCCESS:
        return getI18nString("figmake.supabase.cta.collapsed.success");
      case nd.TOOL_CALL_DISABLED:
        return getI18nString("figmake.supabase.cta.collapsed.disabled");
      case nd.TOOL_CALL_CANCELLED:
      default:
        return getI18nString("figmake.supabase.cta.collapsed.failure");
    }
  }, [e]);
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
    children: [jsx("div", {
      className: "xvy4d1p xxk0z11 x78zum5 xl56j7k x6s0dn4",
      children: jsx(SvgComponent, {
        svg: _$$A6,
        useOriginalSrcFills_DEPRECATED: !0,
        svgWidth: "14px",
        svgHeight: "14px"
      })
    }), jsx("p", {
      ...Ay.props(nq.textBodyLargeStrong),
      children: t
    })]
  });
}
function nB() {
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3 xou54vl",
    children: [jsxs("div", {
      className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
      children: [jsx("div", {
        className: "xvy4d1p xxk0z11 x78zum5 xl56j7k x6s0dn4",
        children: jsx(SvgComponent, {
          svg: _$$A6,
          useOriginalSrcFills_DEPRECATED: !0,
          svgWidth: "14px",
          svgHeight: "14px"
        })
      }), jsx("p", {
        ...Ay.props(nq.textBodyLargeStrong),
        children: getI18nString("figmake.supabase.cta.title")
      })]
    }), jsx(jc, {
      url: kS,
      linkText: getI18nString("figmake.supabase.cta.link")
    })]
  });
}
let nq = {
  textBodyLargeStrong: {
    ..._$$g.textBodyLargeStrong,
    $$css: !0
  }
};
function nW({
  toolCallId: e,
  toolName: t,
  disabledStatus: n,
  initialSecretName: i,
  dismissSupabase: s,
  trackingContext: a
}) {
  return n ? jsx(nm, {
    header: jsx(nV, {
      disabledStatus: n,
      initialSecretName: i
    })
  }) : jsx(nm, {
    header: jsx(nK, {}),
    body: jsx(nX, {
      toolCallId: e,
      toolName: t,
      initialSecretName: i,
      dismissSupabase: s,
      trackingContext: a
    })
  });
}
function nV({
  initialSecretName: e,
  disabledStatus: t
}) {
  let n = useMemo(() => {
    switch (t) {
      case nd.TOOL_CALL_SUCCESS:
        return getI18nString("figmake.supabase.create_secret_cta.collapsed.success", {
          secretName: e
        });
      case nd.TOOL_CALL_DISABLED:
        return getI18nString("figmake.supabase.create_secret_cta.collapsed.disabled");
      case nd.TOOL_CALL_CANCELLED:
      default:
        return getI18nString("figmake.supabase.create_secret_cta.collapsed.failure");
    }
  }, [t, e]);
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
    children: [jsx(_$$m, {}), jsx("p", {
      ...Ay.props(nZ.textBodyLargeStrong),
      children: n
    })]
  });
}
function nK() {
  let {
    connectedProject
  } = GC();
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3 xou54vl",
    children: [jsxs("div", {
      className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
      children: [jsx(_$$m, {}), jsx("p", {
        ...Ay.props(nZ.textBodyLargeStrong),
        children: getI18nString("figmake.supabase.create_secret_cta.header")
      })]
    }), jsx(jc, {
      url: C4(connectedProject?.id),
      linkText: getI18nString("figmake.supabase.create_secret_cta.link")
    })]
  });
}
function nX({
  toolCallId: e,
  toolName: t,
  initialSecretName: n,
  dismissSupabase: s,
  trackingContext: a
}) {
  let [l, o] = useState("init");
  let c = jsx(_$$G, {
    text: n,
    className: "x1i89z7r x1ey7xld x256u9z"
  });
  switch (l) {
    case "init":
      return jsx(nv, {
        title: renderI18nText("figmake.supabase.create_secret_cta.body.title_secret_name", {
          secretName: c
        }),
        subtitle: getI18nString("figmake.supabase.create_secret_cta.body.subtitle"),
        interaction: jsx(nJ, {
          interactionState: l,
          setInterationState: o,
          toolCallId: e,
          toolName: t,
          initialSecretName: n,
          dismissSupabase: s,
          trackingContext: a
        })
      });
    case "loading":
      return jsx(nj, {
        title: getI18nString("figmake.supabase.create_secret_cta.body.loading.title"),
        subtitle: getI18nString("figmake.supabase.create_secret_cta.body.loading.subtitle")
      });
    case "success":
      return jsx(nb, {
        text: getI18nString("figmake.supabase.create_secret_cta.body.title")
      });
    case "failed":
      return jsx(nk, {
        title: renderI18nText("figmake.supabase.create_secret_cta.body.error.title_secret_name", {
          secretName: c
        }),
        subtitle: getI18nString("figmake.supabase.create_secret_cta.body.error.subtitle"),
        interaction: jsx(nJ, {
          interactionState: l,
          setInterationState: o,
          toolCallId: e,
          toolName: t,
          initialSecretName: n,
          dismissSupabase: s,
          trackingContext: a
        })
      });
  }
}
var nY = (e => (e.INIT = "init", e.LOADING = "loading", e.SUCCESS = "success", e.FAILED = "failed", e))(nY || {});
function nJ({
  interactionState: e,
  setInterationState: t,
  toolCallId: n,
  toolName: s,
  initialSecretName: a,
  dismissSupabase: l,
  trackingContext: o
}) {
  let [c, d] = useState("");
  let u = useCurrentFileKey();
  let x = "loading" === e;
  let m = _$$S2();
  let h = async () => {
    if (!u) {
      console.error("No open file key found");
      return;
    }
    t("loading");
    try {
      await _$$R.createSecret({
        fileKey: u,
        secretName: a,
        secretValue: c
      });
      XJ(o, u);
    } catch (e) {
      t("failed");
      fQ(e);
      return;
    }
    t("success");
    m({
      toolCallId: n,
      toolName: s,
      toolResult: {
        success: !0,
        message: `Successfully created secret ${a}.`
      }
    });
  };
  return jsxs("form", {
    className: "x78zum5 xdt5ytf x1cy8zhl xl56j7k x167g77z xkh2ocl xy13l1i",
    children: [jsx(_$$p2, {
      type: "password",
      id: "password",
      value: c,
      onChange: d,
      placeholder: getI18nString("figmake.supabase.create_secret_cta.body.secret_value"),
      size: "lg",
      disabled: x
    }), x ? jsx(_$$lV, {
      variant: "primary",
      children: getI18nString("figmake.supabase.create_secret_cta.body.button")
    }) : jsxs("div", {
      className: "x78zum5 x167g77z",
      children: [jsx(ButtonLarge, {
        type: "submit",
        variant: "primary",
        onClick: h,
        children: getI18nString("figmake.supabase.create_secret_cta.body.button")
      }), jsx(ButtonLarge, {
        variant: "secondary",
        onClick: () => l(),
        children: getI18nString("figmake.supabase.cancel")
      })]
    })]
  });
}
let nZ = {
  textBodyLargeStrong: {
    ..._$$g.textBodyLargeStrong,
    $$css: !0
  }
};
function nQ({
  toolCall: e,
  toolResult: t,
  isMostRecentMessage: n,
  trackingContext: i
}) {
  let s = t && t.result ? t.result.success ? nc.SUCCESS : nc.FAILURE : nc.PENDING;
  return jsx("div", {
    className: "x78zum5 xdt5ytf x1cy8zhl x1jnr06f x9h44rk x1bamp8i",
    children: jsx(n0, {
      toolName: e.toolName,
      toolCallId: e.toolCallId,
      partialArgs: e.partialArgs,
      isMostRecentMessage: n,
      status: s,
      trackingContext: i
    })
  });
}
function n0({
  toolName: e,
  toolCallId: t,
  partialArgs: n,
  isMostRecentMessage: s,
  status: a,
  trackingContext: l
}) {
  let o = gJ();
  let [c, d] = useState(!1);
  let u = _$$ry();
  let x = useMemo(() => s ? u || o && d4(e) ? nd.TOOL_CALL_DISABLED : c ? nd.TOOL_CALL_CANCELLED : void 0 : a === nc.SUCCESS ? nd.TOOL_CALL_SUCCESS : nd.TOOL_CALL_CANCELLED, [s, a, o, c, u, e]);
  let m = _$$S2();
  let h = useCurrentFileKey() || "";
  let g = useCallback(n => {
    IB({
      persistentEntityId: l.persistentEntityId,
      clientLifecycleId: l.clientLifecycleId
    }, e, h);
    d(!0);
    m({
      toolCallId: t,
      toolName: e,
      toolResult: n
    });
  }, [t, e, m, h, l.persistentEntityId, l.clientLifecycleId]);
  switch (e) {
    case "supabase_connect":
      {
        let n = {
          success: !1,
          message: "User dismissed Supabase connect tool call"
        };
        return jsx(nO, {
          toolCallId: t,
          toolName: e,
          disabledStatus: x,
          dismissSupabase: () => g(n),
          trackingContext: l
        });
      }
    case "create_supabase_secret":
      {
        let i = {
          success: !1,
          message: "User dismissed secret creation tool call"
        };
        return jsx(nW, {
          toolCallId: t,
          toolName: e,
          disabledStatus: x,
          initialSecretName: n.secretName ?? "",
          dismissSupabase: () => g(i),
          trackingContext: l
        });
      }
    default:
      return null;
  }
}
let rn = [CodeNode, LinkNode, ListNode, ListItemNode, HeadingNode, QuoteNode, AutoLinkNode, LinkNode];
let rr = "editor_theme--heading--vjD0c";
let ri = "editor_theme--revTextCode--mNWW0";
let rs = "editor_theme--revHeading--ImFNg";
let ra = {
  code: "editor_theme--code--FBk-C",
  heading: {
    h1: rr,
    h2: rr,
    h3: rr,
    h4: rr,
    h5: rr,
    h6: rr
  },
  link: "editor_theme--link--g9j-A",
  list: {
    listitem: "editor_theme--listItem--HtIgs",
    nested: {
      listitem: "editor_theme--nestedListItem--rxhSm"
    },
    ol: "editor_theme--listOl--bcK9i",
    ul: "editor_theme--listUl--9En-S"
  },
  ltr: "editor_theme--ltr--z-aAi",
  rtl: "editor_theme--rtl--2jeQD",
  paragraph: "editor_theme--paragraph--5klW3",
  placeholder: "editor_theme--placeholder--1ATfY",
  quote: "editor_theme--quote--x7A5C",
  text: {
    bold: "editor_theme--textBold--eUufn",
    code: "editor_theme--textCode--dShpu",
    italic: "editor_theme--textItalic--6aIoY",
    strikethrough: "editor_theme--textStrikethrough--Nx-DH",
    underline: "editor_theme--textUnderline--sWctL",
    underlineStrikethrough: "editor_theme--textUnderlineStrikethrough--BF3Oy"
  }
};
let rl = {
  code: ri,
  heading: {
    h1: rs,
    h2: rs,
    h3: rs,
    h4: rs,
    h5: rs,
    h6: rs
  },
  link: "editor_theme--revLink--cC1OE",
  list: {
    listitem: "editor_theme--revListItem--t-JSJ",
    nested: {
      listitem: "editor_theme--revNestedListItem--xI4pL"
    },
    ol: "editor_theme--revListOl--VIR3k",
    ul: "editor_theme--revListUl--l1Hwr"
  },
  ltr: "editor_theme--revLtr--P2rY9",
  rtl: "editor_theme--revRtl--p2uEF",
  paragraph: "editor_theme--revParagraph--nf-XL",
  placeholder: "editor_theme--revPlaceholder--MjHDL",
  quote: "editor_theme--revQuote--vLFjg",
  text: {
    bold: "editor_theme--revTextBold--B6at8",
    code: ri,
    italic: "editor_theme--revTextItalic--Bc6Q3",
    strikethrough: "editor_theme--revTextStrikethrough--OgIi0",
    underline: "editor_theme--revTextUnderline--Vbg5K",
    underlineStrikethrough: "editor_theme--revTextUnderlineStrikethrough--H-f-D"
  }
};
let ro = [HEADING, QUOTE, UNORDERED_LIST, ORDERED_LIST, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, ITALIC_STAR, ITALIC_UNDERSCORE, STRIKETHROUGH, LINK];
function rc(e) {
  let [t] = useLexicalComposerContext();
  useEffect(() => {
    try {
      t.update(() => {
        $convertFromMarkdownString(e.textContent, ro, void 0, !0);
      }, {
        discrete: !0
      });
    } catch (n) {
      console.error("Error parsing editor state. Default to empty lexical state", n);
      let e = t.parseEditorState('{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textStyle":""}],"direction":null,"format":"","indent":0,"type":"root","version":1}}');
      t.setEditorState(e);
    }
  }, [e.textContent, t]);
  return jsx("div", {
    children: jsx(_$$$2, {
      contentEditable: jsx(_$$a, {
        className: "x1iyjqo2",
        spellCheck: !1,
        "data-testid": "code-chat-content-editable",
        contentEditable: !1
      }),
      placeholder: null,
      ErrorBoundary: _$$R2
    })
  });
}
function rd({
  textContent: e,
  editorTheme: t
}) {
  return jsx(n, {
    initialConfig: {
      namespace: "code-chat-rich-text-editor",
      onError(e) {
        throw e;
      },
      theme: t ?? ra,
      nodes: rn,
      editable: !1
    },
    children: jsx(rc, {
      textContent: e
    })
  });
}
function ru() {
  let e = useIsSelectedFigmakeFullscreen() ? rl : ra;
  return function (t) {
    return jsx(rd, {
      textContent: t,
      editorTheme: e
    });
  };
}
let rg = {
  reasoningTitle: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    userSelect: "x87ps6o",
    cursor: "x1ypdohk",
    background: "x11g6tue",
    border: "x1gs6z28",
    padding: "x1717udv",
    width: "xh8yej3",
    textAlign: "xdpxx8g",
    color: "xv1l7n4",
    transition: "x1op4zxa",
    $$css: !0
  },
  reasoningTitleExpanded: {
    color: "xiuzu7u",
    $$css: !0
  },
  chevronIcon: {
    "--color-icon": "x1ha9dcd",
    transition: "x1bmturs",
    $$css: !0
  },
  chevronIconExpanded: {
    "--color-icon": "xhxt56g",
    transform: "x1iffjtl",
    $$css: !0
  }
};
function rp({
  reasoning: e,
  isReasoningComplete: t
}) {
  let n = ru();
  let s = useRef(null);
  let [a, l] = useState(!1);
  let [o, c] = useState(!1);
  useEffect(() => {
    s.current && l((s.current?.scrollHeight || 0) > 184);
  }, [e]);
  let d = n(e ?? "");
  useEffect(() => {
    if (s.current && !t) {
      let e = s.current;
      requestAnimationFrame(() => {
        e.scrollTop = e.scrollHeight;
      });
    }
  }, [e, t]);
  let u = o || !t;
  return jsxs("div", {
    className: "x78zum5 xdt5ytf",
    children: [t ? jsxs(ButtonPrimitive, {
      ...Ay.props(rg.reasoningTitle, o && rg.reasoningTitleExpanded),
      onClick: () => c(!o),
      "aria-expanded": o,
      "aria-label": o ? getI18nString("figmake.chat.hide_reasoning") : getI18nString("figmake.chat.show_reasoning"),
      children: [getI18nString("figmake.chat.reasoning"), jsx(_$$a2, {
        ...Ay.props(rg.chevronIcon, o && rg.chevronIconExpanded)
      })]
    }) : jsx(_$$N4, {
      children: getI18nString("figmake.chat.reasoning")
    }), jsx("div", {
      className: "xb3r6kr",
      children: jsxs(_$$N, {
        mode: "wait",
        children: [!t && jsxs(_$$P.div, {
          initial: {
            height: 0,
            opacity: 0
          },
          animate: {
            height: "auto",
            opacity: 1
          },
          exit: {
            height: 0,
            opacity: 0
          },
          transition: {
            duration: .3,
            ease: "easeInOut"
          },
          style: {
            position: "relative"
          },
          children: [a && jsx("div", {
            className: "x10l6tqk xu96u03 x3m8u43 xxk0z11 x47corl x13vifvy xu4a7ya"
          }), jsx("div", {
            ref: s,
            className: "xv1l7n4 xhpif6o xf18ygs xnuq7ks x1anpbxc x1iog12x x1hx0egp xkcv6ua x1ed109x x1i69ec5 xb3r6kr x78zum5 xdt5ytf xmidabu",
            children: d
          }), a && jsx("div", {
            className: "x10l6tqk xu96u03 x3m8u43 xxk0z11 x47corl x1ey2m1c xf5q8oo"
          })]
        }, "in-progress"), t && u && jsx(_$$P.div, {
          initial: {
            height: 0,
            opacity: 0
          },
          animate: {
            height: "auto",
            opacity: 1
          },
          exit: {
            height: 0,
            opacity: 0
          },
          transition: {
            duration: .3,
            ease: "easeInOut"
          },
          children: jsx("div", {
            className: "xv1l7n4 xhpif6o xf18ygs xnuq7ks x1anpbxc x1iog12x x1hx0egp x1odjw0f xkcv6ua x1ed109x",
            children: d
          })
        }, "completed")]
      })
    })]
  });
}
let rf = {
  container: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    gap: "xou54vl",
    $$css: !0
  }
};
function ry({
  messages: e,
  isMostRecent: t,
  isInProgress: n,
  showCodeStreaming: s,
  scrollToBottom: a,
  trackingContext: l,
  chatMessagesNodeGuid: o,
  versionNumber: c,
  isAutoErrorFix: d,
  title: u,
  layerDisplayName: x
}) {
  let {
    defaultTypographyStyle
  } = _$$L2();
  let h = !!getFeatureFlags().bake_chat_message_revamp;
  let f = e[e.length - 1];
  let y = f?.type === "summary" ? f.codeSnapshot : void 0;
  let _ = (() => {
    switch (f?.type) {
      case "message":
        return f.message;
      case "plan":
        return f.plan;
      case "summary":
        return f.summary;
      case "work":
        return f.work;
      default:
        return;
    }
  })();
  let b = f?.type === "reasoning" ? f.reasoning : void 0;
  let j = y?.codeSnapshotKey;
  let v = _$$Q2();
  let {
    restoreVersion
  } = OL({
    codeSnapshotKey: j,
    chatMessagesNodeGuid: o,
    featureType: v,
    restoreToVersionTitle: u,
    ...l
  });
  let C = useRef((_ || b) ?? "");
  let E = useRef(f?.id);
  useEffect(() => {
    if (!n) return;
    let e = (_ || b) ?? "";
    (f?.id !== E.current || e.length > C.current.length) && a();
    C.current = e;
    E.current = f?.id;
  }, [_, b, a, n, f?.id]);
  let N = useLatestRef(n);
  useEffect(() => {
    !n && N && t && a();
  }, [n, t, a, N]);
  let w = useMemo(() => t && n ? jsx(_$$F3, {
    type: "progress",
    showCodeStreaming: s,
    chatMessagesNodeGuid: o,
    layerDisplayName: x,
    scrollToBottom: a
  }) : null, [t, n, o, a, x, s]);
  let A = useMemo(() => {
    if (0 === e.length) return [d ? jsx(rj, {}, "fixing") : jsx(r_, {}, "thinking")];
    let i = !1;
    return e.flatMap((s, a) => {
      let d = a === e.length - 1;
      switch (s.type) {
        case "reasoning":
          let m = a < e.length - 1;
          return [jsx(rp, {
            reasoning: s.reasoning,
            isReasoningComplete: m
          }, `reasoning-${a}`)];
        case "plan":
          i = !0;
          return [jsx(rk, {
            plan: s.plan
          }, `plan-${a}}`)];
        case "summary":
          return [h ? null : jsx(_$$F3, {
            type: "version",
            isCurrentVersion: t,
            versionNumber: c,
            restoreVersion,
            chatMessagesNodeGuid: o,
            layerDisplayName: x,
            versionTitle: u
          }, `summary-artifact-${a}`), jsx(rC, {
            summary: s.summary
          }, `summary-${a}`)];
        case "clientSideToolCall":
          return [jsx(nQ, {
            toolCall: s.toolCall,
            toolResult: s.toolResult,
            isMostRecentMessage: t && d,
            trackingContext: l
          }, `clientSideToolCall-${a}`), ...(d && n ? [jsx(rb, {}, "working")] : [])];
        default:
          if (d && w) {
            let t = e.findIndex(e => "summary" === e.type);
            return i && (-1 === t || t < a) ? [w] : [jsx(rb, {}, "working")];
          }
          return [];
      }
    });
  }, [e, d, c, t, restoreVersion, w, n, h, o, u, l, x]);
  let T = jsx(rE, {
    trackingContext: l,
    isInProgress: n,
    lastMessage: f,
    chatMessagesNodeGuid: o
  });
  let I = h && !n ? jsx(_$$F3, {
    type: "version",
    isCurrentVersion: t,
    versionNumber: c,
    restoreVersion,
    chatMessagesNodeGuid: o,
    layerDisplayName: x,
    versionTitle: u
  }, `version-${c}`) : null;
  return jsx("div", {
    role: "region",
    "aria-label": getI18nString("figmake.chat.artifact.a11y_reasoning_section_title", {
      version: c,
      title: u || ""
    }),
    children: jsxs("div", {
      ...Ay.props(rf.container, defaultTypographyStyle),
      "data-testid": "assistant-chat-messages-v2",
      children: [A, I, T]
    })
  });
}
function r_() {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x167g77z",
    children: [jsx(_$$H3, {}), jsx(_$$N4, {
      children: getI18nString("figmake.chat.thinking")
    })]
  });
}
function rb() {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x167g77z",
    children: [jsx(_$$H3, {}), jsx(_$$N4, {
      children: getI18nString("figmake.chat.working")
    })]
  });
}
function rj() {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x167g77z",
    children: [jsx(_$$H3, {}), jsx(_$$N4, {
      children: getI18nString("figmake.chat.fixing")
    })]
  });
}
function rv({
  text: e
}) {
  let t = ru();
  return jsxs("div", {
    className: "x1ed109x",
    children: [" ", t(e.trim())]
  });
}
function rk({
  plan: e
}) {
  return jsx(rv, {
    text: e
  });
}
function rC({
  summary: e
}) {
  return jsx(rv, {
    text: e
  });
}
function rE({
  trackingContext: e,
  isInProgress: t,
  lastMessage: n,
  chatMessagesNodeGuid: s
}) {
  let l = selectCurrentFile();
  let o = l?.key || null;
  let c = e.clientLifecycleId && !t && l?.canEdit;
  let d = _$$Q2();
  let {
    feedbackState,
    setFeedbackState,
    sentimentFeedbackCallback,
    additionalFeedbackCallback,
    productType
  } = _$$q2(e, o, d, n?.id || "", s);
  let f = d === lV.AI_ASSISTANT ? JT.ASSISTANT_CHAT : JT.CODE_CHAT;
  let y = uQ();
  let _ = {
    action: f,
    source: d,
    clientLifecycleId: e.clientLifecycleId,
    quick_actions_session_id: null,
    file_key: o,
    product_type: productType
  };
  return c ? jsxs("div", {
    className: "x11yfylt x78zum5 xg2d0mh",
    children: [jsx(_$$z2, {
      aiTrackingContext: _,
      sentimentFeedbackCallback,
      additionalFeedbackCallback,
      hideInitialText: !0,
      externalFeedbackState: feedbackState,
      setExternalFeedbackState: setFeedbackState,
      thumbsUpLabel: getI18nString("figmake.chat.thumbs_up"),
      thumbsDownLabel: getI18nString("figmake.chat.thumbs_down")
    }), getFeatureFlags().make_edits_debug && d === lV.AI_ASSISTANT && jsx(Suspense, {
      fallback: null,
      children: jsx(rS, {
        nodeId: y,
        aiTrackingContext: _
      })
    })]
  }) : null;
}
let rS = lazy(() => _require);
let rw = 3 * window.innerHeight;
function rA({
  scrollContainerRef: e,
  scrollEndRef: t,
  nearBottomThreshold: n = .3,
  scrollToBottomOnMount: r = !1,
  numScrollToBottomRetries: s = 5
}) {
  let [a, l] = useState(!1);
  let [o, c] = useState(!1);
  let [d, u] = useState(!1);
  let [x, m] = useState(!1);
  let [h, g] = useState(!1);
  let p = useRef(0);
  let f = useRef(0);
  let y = useRef(null);
  useEffect(() => () => {
    y.current && clearTimeout(y.current);
    f.current && (clearTimeout(f.current), f.current = null);
  }, []);
  let _ = useCallback(t => {
    if (!e.current) return !1;
    let {
      scrollTop,
      scrollHeight,
      clientHeight
    } = e.current;
    let a = void 0 !== t ? t : clientHeight * n;
    return scrollHeight - scrollTop - clientHeight < a;
  }, [n, e]);
  let b = useCallback((n = "smooth", r = lQ) => {
    if (!e.current || f.current) return;
    if (e.current && _(5)) {
      r();
      return;
    }
    let i = () => {
      f.current && (clearTimeout(f.current), f.current = null);
      u(!1);
      requestAnimationFrame(() => r());
    };
    let a = 0;
    let l = () => {
      a++;
      let r = e.current;
      if (!r) {
        i();
        return;
      }
      if (a > 2 && "smooth" === n) {
        let {
          scrollTop,
          scrollHeight,
          clientHeight
        } = r;
        scrollHeight - scrollTop - clientHeight > rw && (r.scrollTop = scrollHeight - rw);
      }
      if (requestAnimationFrame(() => t.current?.scrollIntoView({
        behavior: n
      })), a >= s) {
        i();
        return;
      }
      f.current = setTimeout(() => {
        requestAnimationFrame(() => {
          if (!r) {
            i();
            return;
          }
          _(5) ? i() : l();
        });
      }, "smooth" === n ? 300 : 50);
    };
    l();
  }, [t, e, _, s]);
  let j = useCallback(() => {
    o || a ? (u(!0), _() || m(!0)) : (b(), m(!1));
  }, [_, o, b, a]);
  useEffect(() => {
    r && !h ? b("instant", () => g(!0)) : r || g(!0);
  }, [r, h, b]);
  return {
    showScrollToBottomButton: x,
    handleScroll: useCallback(e => {
      y.current && clearTimeout(y.current);
      let t = e - p.current;
      let n = f.current;
      let r = e => {
        n || l(e);
      };
      e !== p.current && (t < 0 ? (c(!0), _() || (r(!0), m(d))) : (c(!1), t >= 0 && _() && (r(!1), m(!1), d && b())), _() && m(!1));
      p.current = e;
      n || (y.current = window.setTimeout(() => {
        c(!1);
        y.current = null;
      }, 200));
    }, [_, d, b]),
    handleScrollToBottomClick: useCallback(() => {
      l(!1);
      m(!1);
      b();
    }, [b]),
    requestScrollToBottom: j,
    onScrollToBottom: b,
    isFirstMountScrollComplete: h,
    userHasControl: a,
    isScrollingUp: o,
    pendingScrollToBottom: d,
    isNearBottom: _
  };
}
function rT(e) {
  let {
    messagesForRendering,
    currentUserId,
    onScrollToBottom,
    requestScrollToBottom,
    scrollContainerRef
  } = e;
  let l = useRef(messagesForRendering.length);
  useEffect(() => {
    if (messagesForRendering.length > l.current) {
      let e = messagesForRendering.slice(l.current);
      let i = e.filter(e => "user" === e.type && e.user?.id === currentUserId);
      let o = e.filter(e => "system" === e.type);
      let c = scrollContainerRef.current;
      if (c) {
        let {
          scrollTop,
          scrollHeight,
          clientHeight
        } = c;
        scrollHeight - scrollTop - clientHeight < 100 ? onScrollToBottom() : i.length > 0 || o.length > 0 ? onScrollToBottom() : requestScrollToBottom();
      } else i.length > 0 || o.length > 0 ? onScrollToBottom() : requestScrollToBottom();
      l.current = messagesForRendering.length;
    } else messagesForRendering.length < l.current && (l.current = messagesForRendering.length);
  }, [messagesForRendering, currentUserId, onScrollToBottom, requestScrollToBottom, scrollContainerRef]);
}
function rL({
  chatMessagesNodeGuid: e,
  messagesForRendering: t,
  exchangeMessageIds: n,
  emptyState: s,
  dragOverlay: l,
  featureType: o,
  layerDisplayName: c,
  isResizingPanel: d,
  clientLifecycleIdMap: u,
  showCodeStreaming: x,
  codeFileChanges: m
}) {
  let h = useRef(null);
  let g = useRef(null);
  let p = useRef(null);
  let f = useRef(null);
  let y = useRef(new Map());
  let _ = useRef(new Map());
  let b = useRef(void 0);
  let {
    handleScroll,
    showScrollToBottomButton,
    handleScrollToBottomClick,
    requestScrollToBottom,
    onScrollToBottom,
    isFirstMountScrollComplete
  } = rA({
    scrollContainerRef: h,
    scrollEndRef: p,
    scrollToBottomOnMount: t.length > 0
  });
  let N = selectCurrentUser();
  rT({
    messagesForRendering: t,
    currentUserId: N?.id,
    onScrollToBottom,
    requestScrollToBottom,
    scrollContainerRef: h
  });
  let w = useMemo(() => showScrollToBottomButton ? jsx(ButtonPrimitive, {
    className: "x78zum5 x6s0dn4 xl56j7k x10l6tqk x1td3qas x10w6t97 x1c7jfne x1nrll8i xuuh30 x1yjdb4r x16rqkct x16a2w50 x1ypdohk x1epfdc x1vjfegm xk82a7y",
    onClick: handleScrollToBottomClick,
    children: jsx(_$$W4, {})
  }) : null, [showScrollToBottomButton, handleScrollToBottomClick]);
  let A = useCallback(e => 0 === t.length ? 0 : y.current.get(e) || 600, [t.length, 600]);
  let T = _$$z({
    size: t.length - 1,
    parentRef: h,
    estimateSize: A,
    overscan: 10
  });
  g.current = T;
  let I = useDebouncedCallback(() => {
    g.current && !b.current && g.current.measure();
  }, 16);
  let L = useCallback((e, t) => {
    _.current.set(e, t);
    y.current.get(e) !== t.height && (y.current.set(e, t.height), I());
  }, [I]);
  useEffect(() => {
    let e = b.current;
    if (!e && d && (_.current.clear(), T.virtualItems.forEach(e => {
      let t = h.current?.querySelector(`[data-virtual-index="${e.index}"]`);
      if (t) {
        let n = rO(t);
        _.current.set(e.index, n);
      }
    }), f.current)) {
      let e = rO(f.current);
      _.current.set(t.length - 1, e);
    }
    e && !d && (_.current.clear(), g.current && g.current.measure());
    b.current = d;
  }, [d, T.virtualItems, t.length]);
  let z = useMemo(() => {
    let e = 0;
    return t.map(t => {
      if ("system" === t.type) {
        let n = t.message;
        let r = U1(n.textContent || "");
        if (r?.type === "restore" || r?.type === "manual_edit") return e++;
      } else if ("assistant" === t.type) return 1 + (t.messages.some(e => "summary" === e.type) ? e++ : e);
      return 0;
    });
  }, [t]);
  let M = 0 === t.length ? jsx("div", {
    className: "x78zum5 xdt5ytf x98rzlu x1iyjqo2 xs83m0k x1r8uery xysyzu8 xl56j7k",
    children: s
  }) : jsxs(_$$P4, {
    className: "x78zum5 xdt5ytf x98rzlu x1iyjqo2 xs83m0k x1r8uery xb3r6kr xjkvuk6",
    scrollContainerRef: h,
    onScroll: handleScroll,
    innerClassName: "x1g8o3q3",
    children: [jsx("div", {
      style: {
        height: `${T.totalSize}px`,
        width: "100%",
        position: "relative"
      },
      className: "x78zum5 xdt5ytf",
      children: T.virtualItems.map(i => {
        let s = t[i.index];
        if (!s) return null;
        let a = _.current.get(i.index);
        return jsx(rR, {
          isLast: !1,
          setSize: L,
          isResizingPanel: d,
          frozenDimensions: a,
          index: i.index,
          setMeasureRef: i.measureRef,
          start: i.start,
          isFirstMountScrollComplete,
          children: jsx(rF, {
            chatMessagesNodeGuid: e,
            clientLifecycleIdMap: u,
            codeFileChanges: m,
            exchangeMessageIds: n,
            featureType: o,
            index: i.index,
            isLast: !1,
            layerDisplayName: c,
            message: s,
            requestScrollToBottom,
            showCodeStreaming: x,
            versionNumber: z[i.index] ?? 0
          })
        }, `${s.type}-message-${i.index}`);
      })
    }), t.length > 0 && jsx(rR, {
      isLast: !0,
      setSize: L,
      isResizingPanel: d,
      frozenDimensions: _.current.get(t.length - 1),
      index: t.length - 1,
      setMeasureRef: e => {
        f.current = e;
      },
      isFirstMountScrollComplete,
      children: jsx(rF, {
        chatMessagesNodeGuid: e,
        clientLifecycleIdMap: u,
        codeFileChanges: m,
        exchangeMessageIds: n,
        featureType: o,
        index: t.length - 1,
        isLast: !0,
        layerDisplayName: c,
        message: t[t.length - 1],
        requestScrollToBottom,
        showCodeStreaming: x,
        versionNumber: z[t.length - 1] ?? 0
      })
    }, "last-message"), o === lV.AI_ASSISTANT && t.length > 0 && t[t.length - 1]?.type === "user" && jsx("div", {
      className: "x1iwkndl x78zum5 xdt5ytf",
      children: jsx(r_, {})
    }, "post-user-thinking"), jsx("div", {
      ref: p
    }, "messages-end")]
  });
  return jsxs("div", {
    className: "x1n2onr6 x78zum5 xdt5ytf x5yr21d xh8yej3",
    "data-testid": "code-chat-messages",
    style: {
      visibility: isFirstMountScrollComplete ? "visible" : "hidden"
    },
    children: [M, w, l && jsx("div", {
      className: "x10l6tqk x13vifvy xu96u03 x3m8u43 x1ey2m1c xhtitgo",
      children: l
    })]
  });
}
let rz = null;
let rM = new WeakMap();
let rR = memo(function (e) {
  let {
    setSize,
    isResizingPanel,
    frozenDimensions,
    index,
    setMeasureRef,
    start,
    isLast,
    isFirstMountScrollComplete
  } = e;
  let u = useRef(index);
  let [x, m] = useState(!1);
  let h = useRef(0);
  let g = isFirstMountScrollComplete && (isResizingPanel ? frozenDimensions : x);
  useEffect(() => {
    u.current = index;
  }, [index, u]);
  let p = useRef(!1);
  let f = useRef(null);
  useEffect(() => {
    let e = f.current;
    if (!e || isResizingPanel) return;
    rz || (rz = new ResizeObserver(e => {
      requestAnimationFrame(() => {
        for (let t of e) {
          let e = rM.get(t.target);
          e && e(t);
        }
      });
    }));
    let r = rz;
    rM.set(e, e => {
      let n = e.contentRect.height;
      n > 0 && Math.abs(n - h.current) > .5 && (h.current = n, setSize(u.current, {
        width: e.contentRect.width,
        height: n
      }), m(!0));
    });
    r.observe(e);
    return () => {
      r.unobserve(e);
      rM.$$delete(e);
    };
  }, [setSize, isResizingPanel]);
  useEffect(() => {
    if ((isLast || !p.current) && f.current && !isResizingPanel) {
      p.current = !0;
      let e = rO(f.current);
      e.height && (setSize(u.current, e), m(!0));
      setMeasureRef && setMeasureRef(f.current);
    }
  }, [isLast, setSize, setMeasureRef, isResizingPanel]);
  let y = isResizingPanel && frozenDimensions ? {
    width: `${frozenDimensions.width}px`,
    height: `${frozenDimensions.height}px`
  } : {};
  return jsx("div", {
    ref: f,
    "data-virtual-index": index,
    style: {
      ...(start ? {
        position: "absolute",
        top: start,
        left: 0,
        width: "100%"
      } : {}),
      ...y,
      visibility: g ? "visible" : "hidden"
    },
    children: jsx("div", {
      className: "x1iwkndl x78zum5 xdt5ytf",
      children: e.children
    })
  });
});
function rF({
  index: e,
  message: t,
  featureType: n,
  versionNumber: s,
  isLast: l,
  chatMessagesNodeGuid: o,
  clientLifecycleIdMap: c,
  codeFileChanges: d,
  layerDisplayName: u,
  exchangeMessageIds: x,
  requestScrollToBottom: m,
  showCodeStreaming: h
}) {
  let g = selectCurrentFile();
  let f = g?.key || null;
  let y = useMemo(() => qE(f, o), [f, o]);
  let _ = g?.name;
  switch (t.type) {
    case "user":
      return jsx(ni, {
        user: t.user,
        featureType: n,
        plainText: t.plainText,
        imports: t.imports,
        inspectedElement: t.inspectedElement,
        selectedNodeIds: t.selectedNodeIds
      }, `${t.type}-message-${e}`);
    case "system":
      let b = t.message;
      let j = U1(b.textContent || "");
      if (j?.type === "restore") return jsx(_$$V2, {
        message: b,
        chatMessagesNodeGuid: o,
        systemMessageIndex: s,
        featureType: n,
        isMostRecent: l,
        trackingContext: {
          persistentEntityId: y,
          clientLifecycleId: c.get(b.id) || ""
        },
        title: t.title || _
      }, `${t.type}-message-${e}`);
      if (j?.type === "manual_edit") {
        if (!getFeatureFlags().bake_manual_edits) return null;
        if (b.id === ct && d) return jsx(Re, {
          chatMessagesNodeGuid: o,
          featureType: n,
          codeFileChanges: d,
          layerDisplayName: u,
          versionNumber: s
        }, `${t.type}-message-${e}`);
        return jsx(pr, {
          message: b,
          chatMessagesNodeGuid: o,
          systemMessageIndex: s,
          featureType: n,
          isMostRecent: l,
          trackingContext: {
            persistentEntityId: y,
            clientLifecycleId: c.get(b.id) || ""
          },
          title: t.title || _
        }, `${t.type}-message-${e}`);
      }
      if (j?.type === "duplicated_file") return jsx(M_, {}, `${t.type}-message-${e}`);
      if (j?.type === "deleted_chat_history") return jsx(a_, {
        systemMessageContent: j
      }, `${t.type}-message-${e}`);
      return null;
    case "assistant":
      let v = t.messages[t.messages.length - 1];
      let k = c.get(v?.id || "") || "";
      let C = x.has(v?.id || "");
      return jsx(ry, {
        chatMessagesNodeGuid: o,
        isAutoErrorFix: t.isAutoErrorFix ?? !1,
        isInProgress: C,
        isMostRecent: l,
        layerDisplayName: u ?? void 0,
        messages: t.messages,
        scrollToBottom: m,
        showCodeStreaming: h,
        title: t.title || _,
        trackingContext: {
          persistentEntityId: y,
          clientLifecycleId: k
        },
        versionNumber: s
      });
  }
}
function rO(e) {
  if (!e) return {
    width: 0,
    height: 0
  };
  let t = e.getBoundingClientRect();
  return {
    width: t.width,
    height: t.height
  };
}
function rD({
  chatMessagesNodeGuid: e,
  messagesForRendering: t,
  exchangeMessageIds: n,
  emptyState: s,
  dragOverlay: l,
  featureType: o,
  layerDisplayName: c,
  clientLifecycleIdMap: d,
  showCodeStreaming: u,
  codeFileChanges: x
}) {
  let m = useRef(null);
  let h = useRef(null);
  let {
    handleScroll,
    showScrollToBottomButton,
    handleScrollToBottomClick,
    requestScrollToBottom,
    onScrollToBottom
  } = rA({
    scrollContainerRef: h,
    scrollEndRef: m,
    scrollToBottomOnMount: !0,
    numScrollToBottomRetries: 0
  });
  let j = selectCurrentUser();
  rT({
    messagesForRendering: t,
    currentUserId: j?.id,
    onScrollToBottom,
    requestScrollToBottom,
    scrollContainerRef: h
  });
  let v = useMemo(() => showScrollToBottomButton ? jsx(ButtonPrimitive, {
    className: "x78zum5 x6s0dn4 xl56j7k x10l6tqk x1td3qas x10w6t97 x1c7jfne x1nrll8i xuuh30 x1yjdb4r x16rqkct x16a2w50 x1ypdohk x1epfdc x1vjfegm xk82a7y",
    onClick: handleScrollToBottomClick,
    children: jsx(_$$W4, {})
  }) : null, [showScrollToBottomButton, handleScrollToBottomClick]);
  let k = selectCurrentFile();
  let C = k?.key || null;
  let E = useMemo(() => qE(C, e), [C, e]);
  let S = k?.name;
  let N = 0;
  let w = t.length;
  let A = t.map((t, i) => {
    switch (t.type) {
      case "user":
        return jsx(ni, {
          user: t.user,
          featureType: o,
          plainText: t.plainText,
          imports: t.imports,
          inspectedElement: t.inspectedElement,
          selectedNodeIds: t.selectedNodeIds
        }, `${t.type}-message-${i}`);
      case "system":
        let s = t.message;
        let l = U1(s.textContent || "");
        if (l?.type === "restore") return jsx(_$$V2, {
          message: s,
          chatMessagesNodeGuid: e,
          systemMessageIndex: N++,
          featureType: o,
          isMostRecent: i === w - 1,
          trackingContext: {
            persistentEntityId: E,
            clientLifecycleId: d.get(s.id) || ""
          },
          title: t.title || S
        }, `${t.type}-message-${i}`);
        if (l?.type === "manual_edit") {
          if (!getFeatureFlags().bake_manual_edits) return null;
          if (s.id === ct && x) return jsx(Re, {
            chatMessagesNodeGuid: e,
            featureType: o,
            codeFileChanges: x,
            layerDisplayName: c,
            versionNumber: N++
          }, `${t.type}-message-${i}`);
          return jsx(pr, {
            message: s,
            chatMessagesNodeGuid: e,
            systemMessageIndex: N++,
            featureType: o,
            isMostRecent: i === w - 1,
            trackingContext: {
              persistentEntityId: E,
              clientLifecycleId: d.get(s.id) || ""
            },
            title: t.title || S
          }, `${t.type}-message-${i}`);
        }
        if (l?.type === "duplicated_file") return jsx(M_, {}, `${t.type}-message-${i}`);
        if (l?.type === "deleted_chat_history") return jsx(a_, {
          systemMessageContent: l
        }, `${t.type}-message-${i}`);
        return null;
      case "assistant":
        let m = t.messages[t.messages.length - 1];
        let h = d.get(m?.id || "") || "";
        let g = n.has(m?.id || "");
        return jsx(ry, {
          chatMessagesNodeGuid: e,
          isAutoErrorFix: t.isAutoErrorFix ?? !1,
          isInProgress: g,
          isMostRecent: i === w - 1,
          layerDisplayName: c ?? void 0,
          messages: t.messages,
          scrollToBottom: requestScrollToBottom,
          showCodeStreaming: u,
          title: t.title || S,
          trackingContext: {
            persistentEntityId: E,
            clientLifecycleId: h
          },
          versionNumber: 1 + N++
        });
    }
  });
  let T = 0 === t.length ? jsx("div", {
    className: "x78zum5 xdt5ytf x98rzlu x1iyjqo2 xs83m0k x1r8uery xysyzu8 xl56j7k",
    children: s
  }) : jsxs(_$$P4, {
    className: "x78zum5 xdt5ytf x98rzlu x1iyjqo2 xs83m0k x1r8uery xb3r6kr",
    scrollContainerRef: h,
    onScroll: handleScroll,
    children: [jsx("div", {
      className: "xzw2spd x78zum5 xdt5ytf x1665zp3",
      tabIndex: -1,
      children: A
    }), o === lV.AI_ASSISTANT && t.length > 0 && t[t.length - 1]?.type === "user" && jsx("div", {
      className: "xzw2spd x78zum5 xdt5ytf x1665zp3",
      children: jsx(r_, {})
    }, "post-user-thinking"), jsx("div", {
      ref: m
    })]
  });
  return jsxs("div", {
    className: "x1n2onr6 x78zum5 xdt5ytf x5yr21d xh8yej3",
    "data-testid": "code-chat-messages-v2",
    children: [T, v, l && jsx("div", {
      className: "x10l6tqk x13vifvy xu96u03 x3m8u43 x1ey2m1c xhtitgo",
      children: l
    })]
  });
}
let rP = {
  hidden: {
    opacity: 0,
    scale: .8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .3
    }
  },
  exit: {
    opacity: 0,
    scale: .8,
    transition: {
      duration: .2
    }
  }
};
let rU = {
  animate: e => ({
    opacity: [.5, 1, .5],
    y: [0, -2, 0],
    transition: {
      duration: 1,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeOut",
      times: [0, .5, 1],
      delay: e
    }
  })
};
function rG({
  visible: e
}) {
  return jsx(_$$N, {
    mode: "wait",
    children: e && jsx(_$$P.div, {
      className: "x78zum5 x6s0dn4 x1v8gsql xmapbj6 x1i2kgm6 x1db2dqx",
      animate: "visible",
      exit: "exit",
      initial: "hidden",
      variants: rP,
      children: jsxs("div", {
        className: "x78zum5 x195vfkc xpqajaz",
        children: [jsx(_$$P.span, {
          className: "x1g8rjiy xuoj239 x1vc12gn xorixrz",
          custom: 0,
          animate: "animate",
          variants: rU
        }), jsx(_$$P.span, {
          className: "x1g8rjiy xuoj239 x1vc12gn xorixrz",
          custom: .25,
          animate: "animate",
          variants: rU
        }), jsx(_$$P.span, {
          className: "x1g8rjiy xuoj239 x1vc12gn xorixrz",
          custom: .5,
          animate: "animate",
          variants: rU
        })]
      })
    })
  });
}
function rH({
  typingUsers: e
}) {
  return jsx("div", {
    className: "xqtp20y x1vjfegm x1n2onr6",
    children: jsxs("div", {
      className: "x10l6tqk x2rgi x131sewu x78zum5 xh8yej3 x13a6bvl",
      children: [jsx(rG, {
        visible: e.length > 0
      }), jsx(_$$N, {
        mode: "wait",
        children: e.map((e, t) => jsx(_$$K, {
          "aria-label": e.name,
          "data-tooltip-show-above": !0,
          children: jsx(_$$P.div, {
            className: "x1ncqthk x16rqkct",
            style: {
              marginLeft: t > 0 ? "-6px" : "0"
            },
            animate: "visible",
            exit: "exit",
            initial: "hidden",
            variants: rP,
            children: jsx(H8, {
              user: e
            })
          })
        }, e.sessionID))
      })]
    })
  });
}
function rW() {
  return jsxs("svg", {
    width: "41",
    height: "41",
    viewBox: "0 0 41 41",
    fill: "none",
    children: [jsx("rect", {
      x: "0.776855",
      y: "0.777344",
      width: "40",
      height: "40",
      rx: "5",
      fill: "white"
    }), jsx("rect", {
      x: "2.77686",
      y: "2.77734",
      width: "36",
      height: "36",
      rx: "4",
      fill: "url(#paint0_linear_9279_71495)"
    }), jsx("circle", {
      cx: "28.2769",
      cy: "13.2773",
      r: "5.5",
      fill: "#FFD966"
    }), jsx("path", {
      d: "M10.7964 19.4661L2.77686 28.4176V35.7773C2.77686 37.4342 4.12 38.7773 5.77686 38.7773H34.7769L17.4119 19.4604C15.6442 17.4939 12.5608 17.4966 10.7964 19.4661Z",
      fill: "#009951"
    }), jsx("defs", {
      children: jsxs("linearGradient", {
        id: "paint0_linear_9279_71495",
        x1: "20.7769",
        y1: "2.77734",
        x2: "20.7769",
        y2: "38.7773",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopColor: "#6EC2FF"
        }), jsx("stop", {
          offset: "0.117896",
          stopColor: "#6FC2FF"
        }), jsx("stop", {
          offset: "0.213837",
          stopColor: "#72C4FF"
        }), jsx("stop", {
          offset: "0.2912",
          stopColor: "#76C6FF"
        }), jsx("stop", {
          offset: "0.353363",
          stopColor: "#7CC8FF"
        }), jsx("stop", {
          offset: "0.403704",
          stopColor: "#84CBFF"
        }), jsx("stop", {
          offset: "0.4456",
          stopColor: "#8CCFFF"
        }), jsx("stop", {
          offset: "0.48243",
          stopColor: "#95D2FF"
        }), jsx("stop", {
          offset: "0.51757",
          stopColor: "#9FD7FF"
        }), jsx("stop", {
          offset: "0.5544",
          stopColor: "#A9DBFF"
        }), jsx("stop", {
          offset: "0.596296",
          stopColor: "#B4DFFF"
        }), jsx("stop", {
          offset: "0.646637",
          stopColor: "#BEE4FF"
        }), jsx("stop", {
          offset: "0.7088",
          stopColor: "#C9E8FF"
        }), jsx("stop", {
          offset: "0.786163",
          stopColor: "#D3ECFF"
        }), jsx("stop", {
          offset: "0.882104",
          stopColor: "#DCF0FF"
        }), jsx("stop", {
          offset: "1",
          stopColor: "#E5F4FF"
        })]
      })
    })]
  });
}
function rV() {
  return jsx(_$$N, {
    children: jsxs(_$$P.div, {
      className: "x1n2onr6 xh8yej3 x5yr21d x1yjdb4r x78zum5 xdt5ytf x6s0dn4 xl56j7k",
      initial: {
        opacity: 0
      },
      animate: {
        opacity: .95
      },
      exit: {
        opacity: 0,
        transition: {
          delay: .1
        }
      },
      transition: {
        duration: .2
      },
      children: [jsxs("div", {
        className: "x1n2onr6 xrostsh xng8ra x78zum5 x6s0dn4 xl56j7k",
        children: [jsx(_$$P.div, {
          className: "x10l6tqk xu96u03",
          style: {
            originX: .5,
            originY: .5
          },
          initial: {
            rotate: 0,
            x: 34,
            y: 2,
            scale: .8,
            opacity: 0
          },
          animate: {
            rotate: -20,
            x: 20,
            y: 4,
            scale: 1,
            opacity: .95
          },
          exit: {
            rotate: -23,
            x: 20,
            y: 4,
            scale: .8,
            opacity: 0,
            transition: {
              delay: .1
            }
          },
          transition: {
            duration: .3,
            type: "spring",
            delay: .1
          },
          children: jsx(rW, {})
        }), jsx(_$$P.div, {
          className: "x1vjfegm",
          style: {
            originX: .5,
            originY: .5
          },
          initial: {
            scale: .8,
            y: 0,
            opacity: 0
          },
          animate: {
            scale: 1,
            y: 0,
            opacity: .95
          },
          exit: {
            scale: .8,
            y: 0,
            opacity: 0,
            transition: {
              delay: .1
            }
          },
          transition: {
            duration: .4,
            type: "spring"
          },
          children: jsx(rW, {})
        }), jsx(_$$P.div, {
          className: "x10l6tqk x3m8u43",
          style: {
            originX: .5,
            originY: .5
          },
          initial: {
            rotate: 0,
            x: -34,
            y: 4,
            scale: .8,
            opacity: 0
          },
          animate: {
            rotate: 23,
            x: -22,
            y: 4,
            scale: 1,
            opacity: .95
          },
          exit: {
            rotate: 23,
            x: -22,
            y: 2,
            scale: .8,
            opacity: 0,
            transition: {
              delay: .1
            }
          },
          transition: {
            duration: .4,
            type: "spring",
            delay: .1
          },
          children: jsx(rW, {})
        })]
      }), jsxs(_$$P.div, {
        className: "xw7yly9 x78zum5 xdt5ytf x6s0dn4",
        children: [jsx(_$$P.p, {
          className: "x1wtuluy x1vzchgk x123g5w4 x1akne3o x1ghz6dp",
          initial: {
            opacity: 0,
            y: 8
          },
          animate: {
            opacity: .95,
            y: 0
          },
          exit: {
            opacity: 0,
            y: 0,
            transition: {
              delay: 0
            }
          },
          transition: {
            duration: .2,
            ease: "easeOut"
          },
          children: getI18nString("figmake.code_chat.drag_upload_overlay.title")
        }), jsx(_$$P.p, {
          className: "x17hqfcz xemv814 x1ma9mv9 x1n0bwc9 x1xmf6yo x2b8uid x1jkqq1h",
          initial: {
            opacity: 0,
            y: 8
          },
          animate: {
            opacity: .95,
            y: 0
          },
          exit: {
            opacity: 0,
            y: 0,
            transition: {
              delay: 0
            }
          },
          transition: {
            duration: .2,
            delay: .1,
            ease: "easeOut"
          },
          children: getI18nString("figmake.code_chat.drag_upload_overlay.description")
        })]
      })]
    })
  });
}
function im({
  targetKey: e,
  isShowing: t,
  onComplete: n
}) {
  return jsx(_$$rq, {
    arrowPosition: F_.BOTTOM,
    description: renderI18nText("figmake.design_system_imports.selected_design_system_overlay.description"),
    emphasized: !0,
    isShowing: t,
    onClose: n,
    onTargetLost: n,
    primaryCta: {
      label: renderI18nText("figmake.design_system_imports.learn_more"),
      href: kC,
      type: "link",
      variantOverride: "white",
      ctaTrackingDescriptor: _$$c2.DS_IMPORT_LEARN_MORE
    },
    targetKey: e,
    title: renderI18nText("figmake.design_system_imports.selected_design_system_overlay.title"),
    trackingContextName: "Make Design System Imports > Selected Design System Overlay"
  });
}
let ih = {
  editButton: {
    borderRadius: "xdryqjb",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    borderLeft: "xof1wgs",
    borderLeftWidth: null,
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderLeftStyle: null,
    borderInlineStartStyle: null,
    borderInlineEndStyle: null,
    borderLeftColor: null,
    borderInlineStartColor: null,
    borderInlineEndColor: null,
    transition: "xuk1p4z",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    ":hover_backgroundColor": "xv2f06h",
    width: "xvy4d1p",
    height: "xxk0z11",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    justifyContent: "xl56j7k",
    gap: "xxhr3t",
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  editButtonFrozen: {
    backgroundColor: "x1yjdb4r",
    $$css: !0
  },
  libraryImportButtonText: {
    borderRadius: "xmdyj57",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    paddingLeft: "x1lqa7cf",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    transition: "xuk1p4z",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    ":hover_backgroundColor": "xv2f06h",
    gap: "xxhr3t",
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  libraryImportButtonTextDisabled: {
    borderRadius: "xmdyj57",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    paddingLeft: "x1lqa7cf",
    paddingRight: "x1ug7bdz",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    gap: "xxhr3t",
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  libraryImportButtonTextDisabledContainer: {
    backgroundColor: "x1v8gsql",
    height: "xxk0z11",
    display: "x3nfvp2",
    flexDirection: "x1q0g3np",
    alignItems: "x6s0dn4",
    gap: "xxhr3t",
    rowGap: null,
    columnGap: null,
    flexShrink: "x2lah0s",
    $$css: !0
  },
  libraryImportContainer: {
    display: "x3nfvp2",
    flexDirection: "x1q0g3np",
    height: "xxk0z11",
    alignItems: "x6s0dn4",
    gap: "xxhr3t",
    rowGap: null,
    columnGap: null,
    flexShrink: "x2lah0s",
    ..._$$g.textBodyMedium,
    border: "x1bamp8i",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "xpzoddv",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  }
};
let ig = userFlagExistsAtomFamily("seen_figmake_selected_design_system_onboarding");
let ip = atomStoreManager.get(_$$nM);
function iy({
  isViewOnly: e,
  hasMessages: t,
  libraryImports: n,
  disabled: a
}) {
  let o = useAtomWithSubscription(ig);
  let {
    show,
    isShowing,
    complete
  } = _$$e5({
    overlay: q6k,
    priority: _$$N5.DEFAULT_MODAL
  }, [o]);
  let x = useCurrentFileKey();
  useEffect(() => {
    if (e) return;
    let t = Hg(_$$nc);
    t[dY] || t[x1] || permissionScopeHandler.ai("code-chat", () => {
      Fullscreen?.createNewCodeFile(dY, "", null, !1);
    });
  }, [e]);
  let m = selectCurrentFile();
  let y = useCurrentPublicPlan("LibraryImportButton");
  let _ = useIsStarterPlan(y).unwrapOr(!1);
  let [j, v] = useState(!1);
  let k = useRef(null);
  let {
    libraryImport
  } = S1();
  let E = Xr(jx);
  let N = useDispatch();
  useEffect(() => {
    libraryImport && !atomStoreManager.get(FX) && show({
      canShow: e => !e
    });
  }, [libraryImport, show]);
  let A = n || (libraryImport?.frozen ? libraryImport : null);
  let {
    getTriggerProps,
    manager
  } = _$$b3();
  let L = e => {
    let t = Hg(_$$nc)[e] || null;
    t && (Zr(t), E(Ic.CODE), t.codeFilePath && ci(t.codeFilePath));
  };
  let z = _ && getFeatureFlags().bake_starter_limit;
  let M = () => {
    if (z) {
      N(showModalHandler({
        type: DV,
        data: {
          team: m?.team ?? null,
          resource: Bi.CODE_CHAT_LIBRARY_IMPORT,
          currentPlan: _$$F4.Plan.STARTER,
          upsellPlan: _$$F4.Plan.PRO,
          editorType: FFileType.FIGMAKE,
          upsellSource: UpsellModalType.CODE_CHAT_LIBRARY_IMPORT
        }
      }));
      return;
    }
    let e = k.current;
    if (!e || j) return;
    analyticsEventManager.trackDefinedEvent("ds_import.library_import_button_clicked", {
      selected_library_key: libraryImport?.library.library_key,
      file_key: x || ""
    });
    let n = e.getBoundingClientRect();
    let r = new Point(n.left, n.top);
    v(!0);
    N(showModalHandler({
      type: _$$u,
      data: {
        defaultPosition: {
          left: r.x,
          bottom: window.innerHeight - r.y + 10
        },
        onCloseCallback: () => {
          v(!1);
        },
        hasExistingChatMessages: t
      }
    }));
  };
  let F = getTriggerProps();
  let O = F.onMouseDown;
  F.onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
    analyticsEventManager.trackDefinedEvent("ds_import.settings_button_clicked", {
      library_key: libraryImport?.library.library_key,
      file_key: x || ""
    });
    complete();
    O(e);
  };
  let D = jsxs(bL, {
    manager,
    children: [createElement(ButtonPrimitive, {
      ...Ay.props(ih.editButton, !a && A && ih.editButtonFrozen),
      disabled: a,
      key: "editButton",
      ...F,
      "data-onboarding-key": oD
    }, jsx(_$$g3, {})), jsxs(_$$mc, {
      children: [jsxs(q7, {
        onClick: () => {
          analyticsEventManager.trackDefinedEvent("ds_import.edit_styles_menu_item_clicked", {
            library_key: libraryImport?.library.library_key,
            file_key: x || ""
          });
          L("/styles/globals.css");
        },
        children: [jsx(Q$, {
          children: jsx(_$$G2, {})
        }), jsxs("div", {
          children: [getI18nString("sites.modal.edit_styles_menu_title"), jsx(ME, {
            children: getI18nString("sites.modal.edit_styles_menu_subtitle")
          })]
        })]
      }), jsxs(q7, {
        onClick: () => {
          analyticsEventManager.trackDefinedEvent("ds_import.edit_guidelines_menu_item_clicked", {
            library_key: libraryImport?.library.library_key,
            file_key: x || ""
          });
          let e = _$$W(ip, NJ, dY) || _$$W(ip, NJ, x1);
          e && L(e.codeFileFullPathWithoutScheme);
        },
        children: [jsx(Q$, {
          children: jsx(_$$A7, {})
        }), jsxs("div", {
          children: [getI18nString("sites.modal.edit_guidelines_menu_title"), jsx(ME, {
            children: getI18nString("sites.modal.edit_guidelines_menu_subtitle")
          })]
        })]
      })]
    })]
  });
  return A ? jsxs("div", {
    ref: k,
    ...Ay.props(ih.libraryImportContainer, ih.libraryImportButtonTextDisabledContainer),
    children: [createElement(ButtonPrimitive, {
      className: "xuk1p4z xv2f06h xmdyj57 x1lqa7cf x1ug7bdz xxhr3t",
      disabled: !0,
      key: "libraryImportButton",
      onClick: lQ
    }, jsx("div", {
      className: "x10739mo xlup9mm xb3r6kr xlyipyv xuxw1ft",
      children: A.library.library_name
    })), D]
  }) : libraryImport ? jsxs("div", {
    ref: k,
    ...Ay.props(ih.libraryImportContainer, a && ih.libraryImportButtonTextDisabledContainer),
    children: [jsx(im, {
      targetKey: oD,
      isShowing,
      onComplete: complete
    }), createElement(ButtonPrimitive, {
      ...Ay.props(ih.libraryImportButtonText, a && ih.libraryImportButtonTextDisabled),
      disabled: a,
      key: "libraryImportButton",
      onClick: M
    }, jsx("div", {
      className: "x10739mo xlup9mm xb3r6kr xlyipyv xuxw1ft",
      children: libraryImport.library.library_name
    }), jsx("div", {
      className: "x1kky2od x78zum5 xl56j7k xb3r6kr",
      children: jsx(_$$r3, {})
    })), D]
  }) : jsx("div", {
    ref: k,
    children: jsx(_$$d2, {
      "aria-label": getI18nString("sites.modal.select_library"),
      "aria-expanded": j,
      "data-tooltip-show-above": !0,
      disabled: a,
      htmlAttributes: {
        "data-onboarding-key": _$$t$
      },
      onClick: M,
      children: jsx(_$$l2, {})
    })
  });
}
function iv({
  disabled: e,
  onClick: t,
  onUndo: n,
  isEnhanced: i
}) {
  return getFeatureFlags().bake_enhance_prompt ? jsx(_$$N, {
    mode: "wait",
    children: i ? jsx(_$$P.div, {
      initial: {
        opacity: 0,
        scale: .8
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      exit: {
        opacity: 0,
        scale: .8
      },
      transition: {
        duration: .2,
        ease: "easeInOut"
      },
      children: jsx(_$$K, {
        "aria-label": getI18nString("figmake.chat_box.undo_enhance_prompt"),
        "data-tooltip-show-above": !0,
        disabled: e,
        onClick: n,
        children: jsx(_$$H, {})
      })
    }, "undo") : jsx(_$$P.div, {
      initial: {
        opacity: 0,
        scale: .8
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      exit: {
        opacity: 0,
        scale: .8
      },
      transition: {
        duration: .2,
        ease: "easeInOut"
      },
      children: jsx(_$$K, {
        "aria-label": getI18nString("figmake.chat_box.enhance_prompt"),
        "data-tooltip-show-above": !0,
        disabled: e,
        onClick: t,
        children: jsx(_$$T, {})
      })
    }, "enhance")
  }) : jsx(Fragment, {});
}
function ik({
  enableAssetImport: e,
  enableImageAttachment: t,
  enableDsImport: n,
  createLoadedAttachment: a,
  attachments: l,
  isViewOnly: d,
  chatMessagesNodeGuid: u,
  codeInstanceGuid: h,
  enhancePrompt: g,
  isEnhancing: y,
  generationInProgress: _,
  hasMessages: b,
  libraryImports: j
}) {
  let k = useDispatch();
  let E = useAtomWithSubscription(f3);
  let N = useRef(null);
  let [A, T] = useAtomValueAndSetter(mC(u));
  let [M, R] = useState("");
  let [F, O] = useState(!1);
  let D = useCallback(async e => {
    let t = e.target.files?.[0];
    t && (await _$$z3(t, a), N.current && (N.current.value = ""));
  }, [a]);
  let $ = useCallback(async () => {
    try {
      for await (let e of (R(A), g(A))) T(e);
      O(!0);
    } catch (e) {
      R("");
      O(!1);
      reportError(_$$e.MAKE, e instanceof Error ? e : Error(String(e)));
    }
  }, [g, A, T]);
  let P = useCallback(() => {
    T(M);
    O(!1);
    R("");
  }, [M, T]);
  useEffect(() => {
    F && "" === A && (O(!1), R(""));
  }, [A, F]);
  let U = e ? jsx(_$$K, {
    onClick: () => {
      k(showModalHandler({
        type: _$$H2,
        data: {
          chatMessagesNodeGuid: u
        }
      }));
    },
    "aria-label": l.length >= qQ ? getI18nString("sites.panel.make.attach_limit_reached", {
      limit: qQ
    }) : getI18nString("sites.panel.make.attach_design"),
    "data-tooltip-show-above": !0,
    disabled: d || l.length >= qQ,
    htmlAttributes: {
      "data-onboarding-key": wj
    },
    children: jsx(_$$D, {})
  }) : null;
  let H = t ? jsxs(Fragment, {
    children: [jsx("input", {
      type: "file",
      className: "x1s85apg",
      ref: N,
      accept: xp.join(","),
      onChange: D
    }), jsx(_$$K, {
      "aria-label": l.length >= qQ ? getI18nString("sites.panel.make.attach_limit_reached", {
        limit: qQ
      }) : getI18nString("sites.panel.make.attach_image"),
      "data-tooltip-show-above": !0,
      disabled: d || l.length >= qQ,
      onClick: () => {
        N.current?.click();
      },
      children: jsx(_$$T2, {})
    })]
  }) : null;
  return t || e ? jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
    children: [getFeatureFlags().bake_chat_attach_menu ? jsx(_$$D2, {
      enableAssetImport: e,
      enableImageAttachment: t,
      attachments: l,
      isViewOnly: d,
      chatMessagesNodeGuid: u,
      createLoadedAttachment: a
    }) : jsxs(Fragment, {
      children: [U, H]
    }), jsx(iv, {
      disabled: d || isWhitespace(A) || y,
      onClick: $,
      onUndo: P,
      isEnhanced: F
    }), n && jsx(iy, {
      isViewOnly: d,
      hasMessages: b,
      libraryImports: j,
      disabled: _ || d
    }), getFeatureFlags().bake_click_to_inspect && E && h && jsx(_$$l, {
      disabled: d,
      componentPreview: E,
      onboardingKey: kx,
      showTooltipAbove: !0,
      codeInstanceGuid: h
    })]
  }) : jsx("div", {});
}
export function $$iC0({
  setInput: e,
  chatMessagesNodeGuid: t,
  codeInstanceGuid: n,
  exchangeMessageIds: s,
  layerDisplayName: o,
  codeFileChanges: c,
  sendMessage: d,
  emptyState: u,
  sendDisabled: x,
  enableAssetImport: m = !1,
  enableImageAttachment: g = !1,
  showChatHeader: y = !1,
  featureType: _,
  enableDragUpload: v = !1,
  enableDsImport: C = !1,
  isResizingPanel: w,
  isLastUserMessageAutoErrorFix: L,
  messagesForRendering: B,
  clientLifecycleIdMap: q,
  showCodeStreaming: G,
  rootPath: H,
  onChatInputFocus: W
}) {
  let V = _$$ry();
  let K = s0(t);
  let X = getFeatureFlags().bake_client_side_context_limit || !1;
  let {
    codeLibraryInstance
  } = oA();
  let J = Xr(St);
  let Z = _$$eY();
  let {
    Sprig
  } = useSprigWithSampling();
  let ee = B.filter(e => "user" === e.type && !s.has(e.id));
  let et = Go(ee);
  let en = pF(ee);
  let {
    exchange,
    user
  } = $W(t);
  let es = useRef(null);
  let el = useRef(null);
  let eo = YT();
  useEffect(() => {
    es.current && es.current.focus();
  }, []);
  vG();
  _$$p3(t, n => {
    if (!es.current) return;
    let r = es.current.selectionStart;
    let i = es.current.selectionEnd;
    let s = atomStoreManager.get(mC(t));
    e(s.substring(0, r) + n + s.substring(i));
  });
  let {
    attachments,
    setAttachments,
    stashAllAttachments,
    createLoadedAttachment,
    attachmentsReady
  } = _9(t);
  let eh = useMemo(() => attachments.some(e => "success" === e.status && "FIGMA_NODE" === e.type && e.image), [attachments]);
  let eg = useCallback(() => {
    setAttachments(e => e.map(e => "success" === e.status && "FIGMA_NODE" === e.type ? function (e, t) {
      let {
        nodeGuid,
        uniqueId
      } = t;
      let i = e.get(nodeGuid);
      if (!i) return t;
      let s = NC(i);
      return s ? {
        status: "success",
        nodeGuid: i.guid,
        image: s,
        imageHash: null,
        type: "IMAGE",
        uniqueId
      } : t;
    }(Z, e) : e));
  }, [setAttachments, Z]);
  let {
    selectedElement,
    selectedElementCodeSnippet
  } = fl();
  let {
    setChatError,
    chatError,
    clearChatError
  } = _$$tk(t);
  let [ek, eC] = useState(!0);
  let eE = useAtomWithSubscription(Ng);
  let eS = useRef(!1);
  useMemo(() => {
    (() => {
      let e = atomStoreManager.get(mC(t)).length;
      let {
        figmaNodeLength,
        imageTokens,
        figmaNodeCount,
        imageCount
      } = attachments.reduce((e, t) => {
        if ("success" !== t.status) return e;
        if ("FIGMA_NODE" === t.type) {
          let n = t.codeFiles.reduce((e, t) => e + t.code.length, 0);
          return {
            figmaNodeLength: e.figmaNodeLength + n,
            imageTokens: e.imageTokens,
            figmaNodeCount: e.figmaNodeCount + 1,
            imageCount: e.imageCount
          };
        }
        if ("IMAGE" === t.type) {
          let n = t.image?.length / 750 || 0;
          return {
            figmaNodeLength: e.figmaNodeLength,
            imageTokens: e.imageTokens + n,
            figmaNodeCount: e.figmaNodeCount,
            imageCount: e.imageCount + 1
          };
        }
        return e;
      }, {
        figmaNodeLength: 0,
        imageTokens: 0,
        figmaNodeCount: 0,
        imageCount: 0
      });
      let a = selectedElement && selectedElementCodeSnippet ? _$$F2(selectedElement, selectedElementCodeSnippet) : void 0;
      let l = e / 3;
      let o = figmaNodeLength / 3;
      let c = (a ? JSON.stringify(a).length : 0) / 3;
      let d = l + o + c + imageTokens;
      let u = d <= 15e4;
      u !== eS.current && (u || analyticsEventManager.trackDefinedEvent("ai_for_production.code_chat_client_side_context_limit_exceeded", {
        total_number_of_tokens_estimate: d,
        image_tokens_estimate: imageTokens,
        figma_node_tokens_estimate: o,
        text_tokens_estimate: l,
        point_and_prompt_tokens_estimate: c,
        text_character_count: e,
        image_attachment_count: imageCount,
        figma_node_attachment_count: figmaNodeCount,
        direct_selection_count: selectedElement ? 1 : 0
      }), eS.current = u, eC(u));
    })();
  }, [t, attachments, selectedElement, selectedElementCodeSnippet]);
  useEffect(() => {
    ek || chatError?.error.message === T_.MAX_CONTENT_LENGTH_EXCEEDED ? ek && chatError?.error.message === T_.MAX_CONTENT_LENGTH_EXCEEDED && clearChatError() : getFeatureFlags().bake_downgrade_figma_nodes_to_images && eh ? (setChatError({
      error: Error(T_.MAX_CONTEXT_LENGTH_EXCEEDED_IMAGE_FALLBACK)
    }), eg()) : setChatError({
      error: Error(T_.MAX_CONTENT_LENGTH_EXCEEDED)
    });
  }, [ek, chatError, setChatError, clearChatError, eh, eg]);
  let {
    communityAttribution
  } = Pe();
  let ew = useIsSelectedFigmakeFullscreen();
  let {
    libraryImport,
    stashLibraryImport,
    setFrozenOnLibaryImport
  } = S1();
  let eL = Tv();
  let ez = async ({
    message: e,
    errors: t,
    hidden: n,
    isUserInput: r = !1
  }) => {
    if (!V && !eE && (e || n)) try {
      clearChatError();
      let i = function (e, t, n) {
        let r = getSingletonSceneGraph();
        let i = [];
        let s = e.filter(e => "success" === e.status && "FIGMA_NODE" === e.type).map(e => {
          let i = e.codeFiles.map(e => {
            let t = r.get(e.codeFileGuid);
            return t ? (permissionScopeHandler.ai("set-code-file-path", () => {
              let e = getFeatureFlags().multi_file_code_layers || getFeatureFlags().bake_canvas;
              t.codeFilePath = e && n ? `${n}/${zM}` : zM;
              t.isEntrypointCodeFile = !1;
            }), {
              fullFilePath: t.codeFileFullPathWithoutScheme,
              code: t.sourceCode,
              codeFileGuid: t.guid
            }) : (console.error("codeFileNode not found", {
              codeFileAttachment: e
            }), null);
          }).filter(e => !!e);
          return {
            type: "node",
            guid: e.nodeGuid,
            codeFiles: i,
            communityAttribution: t.get(e.nodeGuid),
            image: getFeatureFlags().bake_d2r_image ? e.image ?? void 0 : void 0
          };
        });
        let a = e.filter(e => "success" === e.status && "IMAGE" === e.type).map(e => ({
          type: "image",
          guid: e.nodeGuid,
          image: e.image,
          imageHash: getFeatureFlags().bake_image_include_hash ? e.imageHash ?? void 0 : void 0
        }));
        i.push(...s);
        i.push(...a);
        return i;
      }(attachments, communityAttribution, H);
      getFeatureFlags().make_import_improvements_experimental && function (e) {
        let t;
        e.forEach(e => {
          "node" === e.type && e.codeFiles && e.codeFiles.forEach(e => {
            let n = e.code;
            let r = !1;
            if (n = n.replace(/^(?!export\s)(async\s+)?function\s+(\w+)/gm, e => (r = !0, `export ${e}`)), r && e.fullFilePath) {
              let t = atomStoreManager.get(_$$nM);
              let r = _$$W(t, NJ, e.fullFilePath);
              r && r.sourceCode !== n && permissionScopeHandler.ai("export-functions", () => {
                r.sourceCode = n;
              });
            }
            let i = e.code.match(/export\s+default\s+function\s+(\w+)/);
            i && i[1] && !t && (t = {
              functionName: i[1],
              filePath: e.fullFilePath
            });
          });
        });
        let n = B && B.length > 0;
        if (t && codeLibraryInstance && !n) {
          let e = t.filePath.replace(/^\//, "").replace(/\.tsx?$/, "");
          let n = `import ${t.functionName} from "./${e}";

export default function App() {
  return <${t.functionName} />;
}`;
          let r = atomStoreManager.get(_$$nM);
          let i = _$$W(r, NJ, "/App.tsx");
          i && permissionScopeHandler.ai("update-app-tsx", () => {
            i.sourceCode = n;
          });
          J(!0);
        }
      }(i);
      stashAllAttachments();
      setFrozenOnLibaryImport(!0);
      let s = selectedElement && selectedElementCodeSnippet ? _$$F2(selectedElement, selectedElementCodeSnippet) : void 0;
      let o = {
        plainText: e,
        libraryKey: libraryImport?.library.library_key,
        imports: i,
        inspectedElement: s,
        errors: t,
        hidden: n,
        selectedNodeIds: eL
      };
      let c = _$$u2(e || "", i, selectedElement?.elementAndParentSources);
      await d(o, c);
      stashLibraryImport();
      eo("success");
      getFeatureFlags().bake_sprig && _ === lV.FIGMAKE && r && et >= 2 && Sprig("track", "bake_survey_1_3_chats_sent");
    } catch (e) {
      setFrozenOnLibaryImport(!1);
      eo("error", e instanceof Error ? e.message : "Unknown error");
      setChatError(e instanceof Error ? {
        error: e
      } : {
        error: Error("Unknown error")
      });
    }
  };
  let eM = _$$F(ez);
  useEffect(() => {
    let e = () => {
      eM.current({
        message: atomStoreManager.get(mC(t)),
        isUserInput: !0
      });
    };
    Uy.on("submit", e);
    return () => {
      Uy.removeListener("submit", e);
    };
  }, [eM, t]);
  (function ({
    enabled: e,
    chatMessagesNodeGuid: t,
    setInput: n,
    sendMessage: r
  }) {
    let s;
    let a = getFeatureFlags().killswitch_make_initial_message;
    let [l, o] = useState(!1);
    let [c, d, u] = Vc("figmake-initial-message", "", {});
    let [x, m] = useAtomValueAndSetter(lA);
    if (x) {
      let e = _$$Z4().find(e => e.key === x.toLowerCase());
      e && (s = e.prompt);
    } else c && '""' !== c && (s = c);
    useEffect(() => {
      e && !a && t && s && !l && (n(s), r({
        message: s
      }), o(!0), u(), m(null));
    }, [t, s, l, e, a, u, m]);
  })({
    enabled: _ === lV.FIGMAKE,
    chatMessagesNodeGuid: t,
    setInput: e,
    sendMessage: ez
  });
  let eR = KP();
  let eF = void 0 !== exchange && exchange.messages.length > 0;
  let eO = Wn(t);
  !function ({
    chatMessagesNodeGuid: e,
    featureType: t
  }) {
    let {
      exchange,
      user
    } = $W(e);
    let s = void 0 !== exchange && exchange.messages.length > 0;
    let l = useCurrentFileKey();
    let o = selectCurrentUser();
    useEffect(() => {
      if (!s || !l || user?.userID !== o?.id) return;
      let e = e => {
        let r;
        e.preventDefault();
        e.returnValue = !0;
        let i = exchange.messages[0];
        i && i.type === ChatMessageType.USER_MESSAGE && (r = MK(i.textContent).requestUuid);
        analyticsEventManager.trackDefinedEvent("ai_for_production.unsaved_changes_warning_shown", {
          fileKey: l,
          featureType: t,
          requestUuid: r,
          userMessageId: i?.id
        });
      };
      window.addEventListener("beforeunload", e);
      return () => window.removeEventListener("beforeunload", e);
    }, [s, l, t, exchange?.messages, user?.userID, o?.id]);
  }({
    chatMessagesNodeGuid: t,
    featureType: _
  });
  let {
    enhancePrompt,
    isEnhancing
  } = function (e) {
    let [t, n] = useState(!1);
    let {
      setChatError: _setChatError,
      clearChatError: _clearChatError
    } = _$$tk(e);
    return {
      enhancePrompt: useCallback(async function* (e) {
        let t;
        if (!e.trim()) return e;
        n(!0);
        _clearChatError();
        try {
          t = (await _$$Ay3.shared.figmakeEnhancePrompt({
            prompt: e
          }, {
            ..._$$Ay()
          })).getReader();
          let n = "";
          for (;;) {
            let {
              done,
              value
            } = await t.read();
            if (done) break;
            n += value.delta;
            yield n;
          }
          return n;
        } catch (t) {
          let e = t instanceof Error ? t : Error("Failed to enhance prompt");
          _setChatError({
            error: Error(T_.PROMPT_ENHANCEMENT_FAILED)
          });
          return e;
        } finally {
          t?.releaseLock();
          n(!1);
        }
      }, [_setChatError, _clearChatError]),
      isEnhancing: t
    };
  }(t);
  let eq = !eF && attachmentsReady && !eO && (ek || !X) && !isEnhancing && !eE;
  let e$ = B?.length ? getI18nString("living_designs.chat.placeholder.iterate") : getI18nString("living_designs.chat.placeholder.blank_slate");
  let [eP, eU] = useState(!1);
  let eG = async e => {
    if (V || eE || !g || !v || 0 === e.files.length || e.files.length > qQ) return;
    let t = Array.from(e.files).map(async e => {
      e && xp.some(t => e.type.startsWith(t.replace("*", ""))) && (await _$$z3(e, createLoadedAttachment));
    });
    await Promise.all(t);
    eU(!1);
  };
  let eH = getFeatureFlags().bake_chat_virtualization ? jsx(rL, {
    chatMessagesNodeGuid: t,
    clientLifecycleIdMap: q,
    codeFileChanges: c,
    dragOverlay: eP ? jsx(rV, {}) : void 0,
    emptyState: u,
    exchangeMessageIds: s,
    featureType: _,
    isResizingPanel: w,
    layerDisplayName: o,
    messagesForRendering: B,
    showCodeStreaming: G
  }) : jsx(rD, {
    chatMessagesNodeGuid: t,
    clientLifecycleIdMap: q,
    codeFileChanges: c,
    dragOverlay: eP ? jsx(rV, {}) : void 0,
    emptyState: u,
    exchangeMessageIds: s,
    featureType: _,
    layerDisplayName: o,
    messagesForRendering: B,
    showCodeStreaming: G
  });
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xh8yej3 x5yr21d",
    ref: el,
    children: [jsxs("div", {
      className: "x1n2onr6 xh8yej3 x5yr21d x78zum5 xdt5ytf",
      children: [y && jsx(t8, {
        showAiBetaBadge: _ !== lV.FIGMAKE
      }), eH, jsx(rH, {
        typingUsers: K
      }), jsx("div", {
        className: "x10l6tqk xu96u03 x3m8u43 x1vqgdyp x47corl x1ey2m1c xf5q8oo"
      })]
    }), jsx(_$$Y, {
      isDragTarget: () => v,
      onTargetDragEnter: () => eU(!0),
      onTargetDragLeave: () => eU(!1),
      onTargetDrop: eG,
      children: jsx(tQ, {
        ref: es,
        canCancelGeneration: user?.sessionID === eR,
        canSend: eq && !x,
        chatBoxExtraContent: jsx(ik, {
          attachments,
          chatMessagesNodeGuid: t,
          codeInstanceGuid: n,
          createLoadedAttachment,
          enableAssetImport: m,
          enableDsImport: C,
          enableImageAttachment: g,
          enhancePrompt,
          generationInProgress: eF,
          hasMessages: B.length > 0,
          isEnhancing,
          isViewOnly: V,
          libraryImports: en
        }),
        chatContainerRef: el,
        chatMessageCount: B.length,
        chatMessagesNodeGuid: t,
        errorFixingDisabled: eF,
        featureType: _,
        generationInProgress: eF,
        inspectedElement: selectedElement,
        isDraggingAttachment: eP,
        isLastUserMessageAutoErrorFix: L,
        onFocus: W,
        placeholderText: e$,
        sendMessage: ({
          message: e,
          errors: n
        }) => ez({
          message: e ?? atomStoreManager.get(mC(t)),
          errors: n,
          isUserInput: !0
        }),
        showPasteDesignsCallout: ew && m && !V && !eE && 0 === B.length && 0 === attachments.length
      })
    })]
  });
}
export const r = $$iC0;