import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useSelector, useDispatch } from "../vendor/514228";
import { tM } from "../figma_app/637027";
import { Q9 } from "../905/773401";
import { tx } from "../905/303541";
import { h1 } from "../figma_app/530167";
import { Ce } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { s0, ZO } from "../figma_app/350203";
import { fu } from "../figma_app/831799";
import { e0 } from "../905/696396";
import { Ju } from "../905/102752";
import { Ro } from "../figma_app/805373";
import { Pn } from "../figma_app/692865";
import { d_ } from "../figma_app/918700";
import { eR, iF, B1, $E } from "../905/586932";
import { S0, xl, qE, Ts, fr } from "../905/52565";
import { my, wx, m_, N4, Il, Qk, aq, Qc, FT, C5, IK } from "../905/884682";
let T = {
  INDIGO: S0,
  VIOLET: xl,
  RED: qE,
  GREEN: Ts,
  GOLD: fr
};
export var $$I0 = (e => (e[e.COMMENTS = 0] = "COMMENTS", e[e.OPT_IN = 1] = "OPT_IN", e))($$I0 || {});
let S = (e, t) => e.indexOf(t) > -1;
function v({
  user: e,
  variations: t
}) {
  return jsxs(Fragment, {
    children: [jsx(Ro, {
      className: my,
      entity: e,
      size: 100
    }), S(t, 0) && jsxs("div", {
      children: [jsx(eR, {
        backgroundColor: T.RED,
        position: {
          top: "12px",
          left: "12%",
          transform: "rotate(-12deg)"
        }
      }), jsx(eR, {
        backgroundColor: T.INDIGO,
        position: {
          top: "-40px",
          left: "9%",
          transform: "rotate(60deg)"
        }
      }), jsx(eR, {
        backgroundColor: T.VIOLET,
        position: {
          top: "-10px",
          left: "27%",
          transform: "rotate(20deg)"
        }
      }), jsx(eR, {
        backgroundColor: T.GREEN,
        position: {
          top: "-30px",
          left: "70%",
          transform: "rotate(30deg)"
        }
      }), jsx(eR, {
        backgroundColor: T.GOLD,
        position: {
          top: "8px",
          left: "88%",
          transform: "rotate(-20deg)"
        }
      })]
    }), jsx("h1", {
      className: wx,
      children: e?.handle
    }), jsx("h2", {
      className: m_,
      children: tx("community.onboarding.here_s_how_you_ll_look_when_using_the_figma_community")
    }), jsxs("h3", {
      className: N4,
      children: [tx("community.onboarding.change_your_photo_or_name_in_your_settings"), S(t, 0) && jsxs(Fragment, {
        children: [jsx("br", {}), tx("community.onboarding.when_leaving_comments_we_ask_that_you")]
      })]
    })]
  });
}
function A() {
  return jsxs(Fragment, {
    children: [jsx("h1", {
      className: wx,
      children: tx("community.onboarding.follow_our_guidelines")
    }), jsx("h2", {
      className: m_,
      children: tx("community.onboarding.when_leaving_comments_we_ask_that_you")
    })]
  });
}
function x() {
  return jsxs("div", {
    className: Il,
    children: [jsxs("li", {
      children: [jsx("div", {
        className: Qk,
        children: tx("community.onboarding.stay_on_topic")
      }), jsx(iF, {})]
    }), jsxs("li", {
      children: [jsx("div", {
        className: Qk,
        children: tx("community.onboarding.be_respectful")
      }), jsx(B1, {})]
    }), jsxs("li", {
      children: [jsx("div", {
        className: Qk,
        children: tx("community.onboarding.read_our_guidelines", {
          guidelinesLink: jsx("a", {
            href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
            target: "_blank",
            children: tx("community.onboarding.guidelines")
          })
        })
      }), jsx($E, {})]
    })]
  });
}
export let $$N1 = "COMMUNITY_OPT_IN";
Ju(function ({
  userId: e,
  onFinish: t,
  variations: r
}) {
  let h = useSelector(e => e.user);
  e = e || h?.id;
  let m = useDispatch();
  let E = () => {
    m(Ce());
  };
  let y = () => {
    m(_$$b({
      [Pn]: !0
    }));
  };
  let T = S(r, 0) && 1 === r.length;
  let I = S(r, 0) ? 1 === r.length ? aq : Qc : FT;
  return jsx(d_, {
    className: I,
    children: jsxs(fu, {
      name: e0.PROFILE_CREATE_MODAL,
      properties: {
        action: s0.COMMUNITY_OPT_IN,
        communityHubEntity: ZO.USERS,
        communityHubEntityId: e
      },
      children: [S(r, 1) && h ? jsx(v, {
        user: h,
        variations: r
      }) : jsx(A, {}), S(r, 0) && jsx(x, {}), jsx(Q9, {
        type: "submit",
        className: C5,
        onClick: () => {
          E();
          let n = S(r, 1);
          n && (m(h1({
            onSuccess: t
          })), y());
          S(r, 0) && e && (y(), n || t?.());
        },
        children: S(r, 0) ? tx("community.onboarding.got_it") : tx("community.onboarding.looks_good")
      }), !T && jsx(tM, {
        className: IK,
        onClick: E,
        children: tx("general.cancel")
      })]
    })
  });
}, $$N1);
export const FF = $$I0;
export const G$ = $$N1;