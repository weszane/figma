import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState, forwardRef, useRef, createRef } from "react";
import { useDispatch, useSelector, useStore } from "../vendor/514228";
import { Xr, useAtomValueAndSetter, useAtomWithSubscription, atom } from "../figma_app/27355";
import a from "classnames";
import { Rs } from "../figma_app/288654";
import { getIsAndroidOrIphoneNotFigmaMobile } from "../figma_app/778880";
import { cn } from "../figma_app/141320";
import { MS } from "../figma_app/797994";
import { _X, Pw } from "../figma_app/121751";
import { FFileType, FResourceCategoryType, FProductAccessType } from "../figma_app/191312";
import { Aqu, toW, yQw } from "../figma_app/43951";
import { aW, sK, cD, FQ } from "../figma_app/598018";
import { i as _$$i } from "../905/718764";
import { ZC } from "../figma_app/39751";
import { b as _$$b } from "../905/985254";
import { fu } from "../figma_app/831799";
import { M as _$$M } from "../905/152487";
import { h as _$$h } from "../905/207101";
import { YX, S0, bk, PG, ZE, xO, VQ, qV, r3 as _$$r, X9, bT, Nz, nt, $l, aV, uN, Q7, BG, eL as _$$eL, kd, SL, ni, fj, VN, _D, pr, JA, Xw, xo, JC } from "../905/98947";
import { pu, XL, ug, Pp, Ig, zH, td as _$$td, nH } from "../7037/430062";
import { Oc } from "../figma_app/552876";
import { ServiceCategories as _$$e } from "../905/165054";
import R from "../vendor/128080";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { R as _$$R } from "../905/165069";
import { reportError } from "../905/11";
import { fr } from "../figma_app/297957";
import { eS as _$$eS } from "../figma_app/33126";
import { $B } from "../figma_app/545877";
import { _6 } from "../figma_app/386952";
import { Aj } from "../figma_app/336853";
import { U2 } from "../figma_app/193867";
import { h as _$$h2 } from "../905/772711";
import { TA, iZ } from "../905/372672";
import { k as _$$k } from "../905/93362";
import { shuffle } from "../figma_app/656233";
import { getI18nString, renderI18nText, getLocalizedPath, loadI18nLocale } from "../905/303541";
import { CR } from "../7021/854265";
import { g as _$$g } from "../7037/183814";
import { oC, F$, OO, zy, Io, u_ } from "../7021/95197";
import { R6, pV } from "../7021/970540";
import { Kz, ks } from "../figma_app/637027";
import { VD } from "../905/550523";
import { languageCodes, defaultLanguage } from "../905/816253";
import { getFeatureFlags } from "../905/601108";
import { desktopAPIInstance, hasDesktopAPI } from "../figma_app/876459";
import { xf } from "../figma_app/416935";
import { Ay } from "../905/612521";
import { isGovCluster, buildUploadUrl, getInitialOptions } from "../figma_app/169182";
import { oJ } from "../905/63728";
import { Wz } from "../figma_app/211694";
import { e6 as _$$e2, c as _$$c } from "../figma_app/617427";
import { getI18nState } from "../figma_app/363242";
import { F as _$$F } from "../905/302958";
import { u as _$$u } from "../905/16237";
import { tc as _$$tc } from "../905/15667";
import { yJ } from "../figma_app/24841";
import { c as _$$c2 } from "../905/370443";
import { sf } from "../905/929976";
import { WX, Bq, Vm } from "../figma_app/482142";
import { UpsellModalType } from "../905/165519";
import { UpgradeSteps, UpsellSourceType } from "../figma_app/831101";
import { SC, Sc } from "../figma_app/707808";
import { ud, Gu, TI } from "../905/513035";
import { q5 } from "../figma_app/516028";
import { f as _$$f } from "../905/940356";
import { rq as _$$rq } from "../905/351260";
import { wH } from "../figma_app/680166";
import { e6 as _$$e3 } from "../905/557142";
import { subscribeAndAwaitData } from "../905/553831";
import { d6 } from "../figma_app/687776";
import { V3 } from "../figma_app/976345";
import { zE, uM } from "../905/738636";
import { XZ } from "../figma_app/176973";
import { Cu } from "../figma_app/314264";
import { xA } from "../905/766303";
import { dq } from "../905/845253";
import { FC } from "../figma_app/212807";
import { M4 } from "../905/713695";
import { FEditorType } from "../figma_app/53721";
import { ai, f6 } from "../figma_app/915202";
import { B as _$$B } from "../905/524020";
import { i as _$$i2 } from "../905/46262";
import { k as _$$k3 } from "../905/443820";
import { J as _$$J } from "../905/614223";
import { xk, Ay as _$$Ay2 } from "@stylexjs/stylex";
import { B as _$$B2 } from "../905/714743";
import { A as _$$A } from "../svg/546647";
import { A as _$$A2 } from "../svg/831814";
import { throwTypeError } from "../figma_app/465776";
import { g as _$$g2 } from "../905/687265";
import { Ph, o as _$$o } from "../905/160095";
import { sx as _$$sx } from "../figma_app/307841";
import { pA, eI as _$$eI, QP } from "../7021/724859";
import { l as _$$l } from "../905/479687";
import { resourceUtils } from "../905/989992";
import { Wi, Qp, JR } from "../figma_app/162641";
import { s as _$$s } from "../cssbuilder/589278";
import { s as _$$s2 } from "../905/573154";
import { sx as _$$sx2 } from "../905/941192";
import { B as _$$B3 } from "../905/261906";
import { jv } from "../905/84777";
import { Oq, N_ } from "../905/332483";
import { AG } from "../figma_app/217457";
import { LN, vr } from "../figma_app/514043";
import { Ju, IX } from "../905/712921";
import { rI as _$$rI, Jg, OA, QM, Gz, wd, sV, Sd, On, ik, qD, Mg, B_, MY as _$$MY, dv, yG, Oj, PB, O0, X3, TB, m$, Vz, yo, f6 as _$$f2, kr, _7, w9, XI, Q2, PG as _$$PG, PJ, xx, y8, ih as _$$ih, rv as _$$rv, dD, XK, HN, $r, HS, h0, DM, jG, Bi, nc, ZA, Bu, Pm, _t, pR, Gr, mx } from "../7021/762792";
import { N as _$$N } from "../905/438674";
import { A as _$$A3 } from "../svg/831652";
import { d as _$$d } from "../9864/653721";
import { e as _$$e4 } from "../905/240303";
import { M as _$$M2 } from "../905/413543";
import { u as _$$u2 } from "../905/158787";
import { K as _$$K } from "../905/276259";
import { J as _$$J2, q as _$$q } from "../905/202542";
import { E as _$$E } from "../905/53857";
import { f as _$$f3 } from "../905/54715";
import { G as _$$G } from "../905/289770";
import { F_ } from "../905/748636";
import { NJ } from "../figma_app/419216";
import { L as _$$L } from "../9864/861465";
import { f as _$$f4 } from "../905/931050";
import { F0 } from "../905/178707";
import { w5 } from "../figma_app/345997";
import { jx, wZ } from "../figma_app/869776";
import { r as _$$r2 } from "../905/520829";
import { LN as _$$LN, Kq } from "../905/941249";
import { A as _$$A4 } from "../quill_composer/816110";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { _ as _$$_ } from "../figma_app/496441";
import { CheckboxPrimitive } from "../905/549791";
import { g as _$$g3 } from "../905/125190";
import { C as _$$C } from "../905/520159";
import { E as _$$E2 } from "../905/172252";
import { hS, bL } from "../905/437088";
import { bL as _$$bL } from "../905/38914";
import { Wk } from "../figma_app/272243";
import { wY } from "../figma_app/708845";
import { getI18nResourceKey } from "../905/528121";
import { b as _$$b3, bL as _$$bL2, mc, q7 } from "../figma_app/860955";
import { r as _$$r3 } from "../905/571562";
import { J as _$$J4 } from "../905/341359";
import { Tq, B1, Vb, Q5, sJ, QS, vz, rX as _$$rX, EK, Kz as _$$Kz } from "../9864/183809";
import { W as _$$W } from "../905/522628";
import { $ as _$$$ } from "../905/834575";
import { T5 } from "../figma_app/465071";
import { m as _$$m } from "../9864/958952";
import { A as _$$A5 } from "../6828/250823";
let i;
var d = a;
function L(e) {
  let r = useDispatch();
  return useCallback(() => {
    e && e();
    r(_$$b({
      welcome_onboarded: !0
    }));
  }, [e, r]);
}
function v({
  onClose: e,
  isShowing: r,
  trackingContextName: t,
  testId: i,
  className: n,
  children: a
}) {
  let d = L(e);
  let c = useDispatch();
  let u = ZC(r);
  useEffect(() => {
    u && !r && d();
  }, [u, r, d]);
  useEffect(() => {
    let e = () => {
      c(_$$b({
        welcome_onboarded: !0
      }));
    };
    window.addEventListener("beforeunload", e);
    return () => window.removeEventListener("beforeunload", e);
  }, [c]);
  return jsx(_$$M, {
    isShowing: r,
    testId: i,
    children: jsx(_$$i, {
      children: jsx(fu, {
        name: t,
        children: jsx("div", {
          className: n,
          "data-testid": "modal-background",
          children: a
        })
      })
    })
  });
}
function S({
  isShowing: e,
  trackingContextName: r,
  testId: t,
  children: i,
  className: o
}) {
  let l = Xr(YX);
  _$$h(() => {
    l(!0);
  });
  return jsx(_$$M, {
    isShowing: e,
    testId: t,
    children: jsx(_$$i, {
      children: jsx(fu, {
        name: r,
        children: jsx("div", {
          className: o,
          children: i
        })
      })
    })
  });
}
function N() {
  let [e, r] = useAtomValueAndSetter(S0);
  let t = useAtomWithSubscription(bk);
  let [i] = useAtomWithSubscription(PG);
  let [s] = useAtomWithSubscription(ZE);
  let o = Oc();
  let l = Xr(xO);
  let a = Xr(VQ);
  let d = Xr(qV);
  return ({
    jobTitle: n
  } = {}) => {
    if (0 === e.length || !t) return e;
    let c = n || s;
    let u = e.indexOf(t);
    let x = [...e];
    let h = "student" === c || "educator" === c;
    if (o && "school" === i) {
      x.push(pu.WHAT_TYPE_OR_LEVEL_OF_SCHOOL);
      r(x);
      return x;
    }
    let _ = e.indexOf(pu.WHERE_OR_HOW_DO_YOU_WORK);
    let p = -1 !== _;
    let f = e.indexOf(pu.WHAT_TYPE_OR_LEVEL_OF_SCHOOL);
    let g = -1 !== f;
    p && ("work" !== i || h) ? (x.splice(_, 2), l(new Set()), a(new Set())) : g && !h && ("work" === i || "school" !== i) && (x.splice(f, 1), d(new Set()));
    o || "work" !== i || h || p ? ("school" === i || h) && !g && x.splice(u + 1, 0, pu.WHAT_TYPE_OR_LEVEL_OF_SCHOOL) : x.splice(u + 1, 0, pu.WHERE_OR_HOW_DO_YOU_WORK, pu.HOW_MANY_PEOPLE_WORK_IN_ORGANIZATION);
    r(x);
    return x;
  };
}
var I = R;
function z(e) {
  switch (e) {
    case "k12":
      return getI18nString("user_onboarding_signals.v1.answer.k12");
    case "bootcamp_or_online_course":
      return getI18nString("user_onboarding_signals.v2.answer.online_course_bootcamp");
    case "higher_education":
      return getI18nString("user_onboarding_signals.v2.answer.college_university");
    case "other":
      return getI18nString("user_onboarding_signals.v2.answer.something_else");
  }
}
let Y = atom(() => {
  let e = shuffle(["higher_education", "bootcamp_or_online_course"]);
  e.push("other");
  return {
    questionKey: "edu_institution_type_students_v2",
    options: new Set(e),
    getOptionDisplay: z
  };
});
let K = atom(() => {
  let e = shuffle(["k12", "higher_education", "bootcamp_or_online_course"]);
  e.push("other");
  return {
    questionKey: "edu_institution_type_educators_v2",
    options: new Set(e),
    getOptionDisplay: z
  };
});
function Q({
  isStudent: e
}) {
  let r = function () {
    let {
      questionKey,
      options,
      getOptionDisplay
    } = useAtomWithSubscription(Y);
    return {
      questionKey,
      options,
      questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.what_type_or_level_of_school"),
      questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.pick_the_one_that_feels_closest_to_your_situation"),
      getOptionDisplay
    };
  }();
  let t = function () {
    let {
      questionKey,
      options,
      getOptionDisplay
    } = useAtomWithSubscription(K);
    return {
      questionKey,
      options,
      questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.what_type_or_level_of_school"),
      questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.pick_the_one_that_feels_closest_to_your_situation"),
      getOptionDisplay
    };
  }();
  return e ? r : t;
}
function J() {
  let e = TA();
  let r = useAtomWithSubscription(_$$r);
  let t = useAtomWithSubscription(ZE);
  let i = useAtomWithSubscription(qV);
  let s = useAtomWithSubscription(X9);
  let l = useAtomWithSubscription(bT);
  let a = useAtomWithSubscription(Nz);
  let d = useAtomWithSubscription(PG);
  let c = useAtomWithSubscription(xO);
  let u = useAtomWithSubscription(VQ);
  let [x] = d;
  let {
    questionKey
  } = CR(x);
  let {
    questionKey: _questionKey
  } = function ({
    isStudent: e
  }) {
    return Q({
      isStudent: e
    });
  }({
    isStudent: r
  });
  let p = useCallback(async r => {
    Object.keys(r).length && e && (await _$$k.setOnboardingSignal({
      id: e,
      onboarding_signals: r
    }));
  }, [e]);
  let f = (e, r) => {
    let t = Array.from(r);
    return t.length < 1 ? {} : {
      [e]: {
        value: t
      }
    };
  };
  let g = useCallback(async () => {
    let e = {
      ...f(questionKey, t),
      ...f(_questionKey, i),
      ...f("have_used_figma_products_before_v1", s),
      ...f("have_you_used_digital_whiteboards_before_v1", l),
      ...f("what_will_you_use_figjam_for_v1", a),
      ...f("how_do_you_plan_to_use_figma_v1", d),
      ...f("where_or_how_do_you_work_v1", c),
      ...f("how_many_people_work_at_organization_v1", u)
    };
    await p(e);
  }, [questionKey, t, _questionKey, i, s, l, a, d, c, u, p]);
  useEffect(() => (window.addEventListener("beforeunload", g), () => window.removeEventListener("beforeunload", g)), [g]);
  return g;
}
function es() {
  let [e, r] = useAtomValueAndSetter(qV);
  let t = useAtomWithSubscription(ZE);
  let i = useAtomWithSubscription(nt);
  useEffect(() => {
    e.size > 0 && (!i || e.has("k12") && t.has("student")) && r(new Set());
  }, [e, i, r, t]);
}
function ey() {
  let e = useDispatch();
  let r = useSelector(e => e.selectedView);
  let t = useSelector(e => null !== e.user && cn(e.user));
  let i = t => {
    desktopAPIInstance ? e(sf({
      view: "teamUpgrade",
      teamFlowType: SC.UPGRADE_EXISTING_TEAM,
      teamId: t.id,
      paymentStep: UpgradeSteps.CHOOSE_PLAN,
      previousView: r,
      planType: Sc.TEAM,
      entryPoint: UpsellSourceType.NUX
    })) : e(WX({
      teamId: t.id,
      openInNewTab: !0,
      entryPoint: UpsellSourceType.NUX
    }));
  };
  let s = () => {
    desktopAPIInstance ? e(sf({
      view: "orgSelfServe",
      upsellSource: UpsellModalType.TEAM_WELCOME,
      entryPoint: UpsellSourceType.NUX
    })) : e(Bq({
      openInNewTab: !0,
      upsellSource: UpsellModalType.TEAM_WELCOME,
      entryPoint: UpsellSourceType.NUX
    }));
  };
  let o = r => {
    if (desktopAPIInstance) e(Vm({
      teamId: r.id
    }));else {
      let e = `/files/team/${r.id}/edu-review/${r.id}`;
      Ay.redirect(e, "_blank");
    }
  };
  return ({
    isOrgUpgrade: e,
    team: r
  }) => {
    r && (t ? o(r) : e ? s() : i(r));
  };
}
async function eq(e, r) {
  let t = e ? await subscribeAndAwaitData(Aqu, {
    teamId: e
  }) : null;
  let i = t?.team ?? null;
  if (!i) return null;
  let {
    projects
  } = i;
  if (!projects || 1 !== projects.length) return null;
  let o = projects[0];
  return o && d6(o, r) && aW(i, {
    type: sK.ADD_FILE,
    editorType: r
  }) ? o : null;
}
let eQ = {
  button: {
    flex: "x1b0bnr5",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    overflow: "x1rea2x4",
    overflowX: null,
    overflowY: null,
    whiteSpace: "xuxw1ft",
    fontSize: "x1vzchgk",
    display: "x78zum5",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    height: "xsdox4t",
    padding: "x1bg5miv",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    gap: "x17d4w8g",
    rowGap: null,
    columnGap: null,
    fontWeight: "x123g5w4",
    lineHeight: "xt5tia6",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    borderColor: "xaqgqki",
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
  primary: {
    background: "x131gfan",
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
    color: "x1tk3asg",
    $$css: !0
  },
  ghost: {
    background: "x16v0e3u",
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
    color: "x1n0bwc9",
    padding: "x1xq1gxn",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    margin: "x1p4momh",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: !0
  },
  ghostMobile: {
    background: "x16v0e3u",
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
    color: "x1n0bwc9",
    fontWeight: "x1ma9mv9",
    justifyContent: "x13a6bvl",
    $$css: !0
  },
  mobile: {
    width: "xh8yej3",
    $$css: !0
  },
  disabled: {
    background: "xum3tiy",
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
    $$css: !0
  },
  loadingSpinner: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    justifyContent: "xl56j7k",
    $$css: !0
  }
};
function eX({
  variant: e,
  disabled: r,
  loading: t,
  brand: i,
  children: l,
  mobile: n,
  ...a
}) {
  let d = useMemo(() => "primary" === e ? "primary" : n ? "ghostMobile" : "ghost", [e, n]);
  return jsx(_$$J, {
    brand: i,
    children: jsx(_$$e2, {
      ...a,
      ...xk(eQ.button, eQ[d], n && eQ.mobile, "primary" === e && (r || t) && eQ.disabled),
      disabled: r || t,
      RUMEnabled: !0,
      children: t ? jsx("div", {
        className: "x78zum5 x6s0dn4 xl56j7k",
        children: jsx(_$$k3, {})
      }) : l
    })
  });
}
function eJ(e) {
  let r = useDispatch();
  let t = TA();
  let i = !!_$$f("not_gen_0");
  let a = useAtomWithSubscription(S0);
  let d = useAtomWithSubscription($l);
  let u = useAtomWithSubscription(aV);
  let x = useAtomWithSubscription(uN);
  let h = useAtomWithSubscription(ZE);
  let _ = useAtomWithSubscription(qV);
  let m = useAtomWithSubscription(Nz);
  let E = useAtomWithSubscription(X9);
  let j = useAtomWithSubscription(bT);
  let C = useAtomWithSubscription(PG);
  let L = useAtomWithSubscription(xO);
  let v = useAtomWithSubscription(VQ);
  let w = useAtomWithSubscription(Q7);
  let S = useAtomWithSubscription(BG);
  let O = useAtomWithSubscription(_$$eL);
  let N = useAtomWithSubscription(kd);
  let T = useAtomWithSubscription(SL);
  let R = "default" !== useAtomWithSubscription(ni);
  let I = useAtomWithSubscription(YX);
  let P = _$$u();
  let A = function (e) {
    let {
      team
    } = e;
    let t = useDispatch();
    let i = _$$B();
    let s = useCallback(async e => (await eq(team?.id, e))?.id, [team]);
    return async (e, o) => {
      let {
        eventName,
        fileName,
        folderId
      } = await (async () => {
        switch (e) {
          case FFileType.DESIGN:
          case FFileType.SITES:
          case FFileType.FIGMAKE:
          case FFileType.SLIDES:
          case FFileType.COOPER:
            return {
              folderId: await s(e),
              eventName: "send_to_editor_figfile_created",
              fileName: void 0
            };
          case FFileType.WHITEBOARD:
            return {
              folderId: await s(FFileType.WHITEBOARD),
              eventName: "team_onboarding_figjam_created",
              fileName: getI18nString("rcs.product_and_template_picker.new_user_whiteboard_filename")
            };
        }
      })();
      let d = o ? ai.NEW_TAB : ai.SAME_TAB;
      t(zE({
        state: i,
        editorType: e,
        team,
        folderId: folderId ?? void 0,
        from: f6.FILE_BROWSER_SIDEBAR_RECENTS,
        openNewFileIn: d,
        fileName,
        callback: e => {
          Cu({
            userId: i.user?.id,
            fileKey: e
          }, eventName);
        }
      }));
    };
  }({
    team: e.team
  });
  let F = useMemo(() => {
    if ("whiteboard" === e.signupSource) return "whiteboard";
    switch (x) {
      case FFileType.WHITEBOARD:
        return "whiteboard";
      case FFileType.SLIDES:
        return "piper";
      case FFileType.COOPER:
        return "cooper";
      case FFileType.SITES:
        return "seascape";
      case FFileType.FIGMAKE:
        return "bake-filebrowser";
      default:
        return null;
    }
  }, [x, e.signupSource]);
  let B = ey();
  let [D, V] = useState(!1);
  let Z = function () {
    var e;
    let r = useAtomWithSubscription(fj);
    let t = q5();
    let {
      handleUpgrade
    } = wH({
      folderId: t?.folderId || null,
      entryPoint: _$$tc.NUX
    });
    let s = Rs(toW({
      key: t?.key ?? ""
    }), {
      enabled: !!t?.key
    });
    let o = s?.data?.file?.hasPermission || !1;
    let [, l] = Wz("nux_seat_selection_show_confirmation", null);
    let a = o && !!r && (e = t?.editorType ?? FFileType.DESIGN, r === ud.EXPERT || [FFileType.WHITEBOARD, FFileType.SLIDES, FFileType.COOPER].includes(e));
    return () => {
      let e = !1;
      r && r !== Gu.VIEW && (e = a, handleUpgrade({
        afterUpgradeCallback: (t, i) => {
          if (!i) throw Error("Metadata is required");
          if (e) {
            l({
              autoApproved: i.autoApproved,
              requestId: i.requestId,
              seatType: r
            });
            let e = new URLSearchParams(Ay.location.search);
            e.set("perms-refresh", "1");
            Ay.replace(`${Ay.location.pathname}?${e.toString()}`, Ay.location.state);
            Ay.reload("NUX seat choice refresh");
          }
        },
        licenseType: TI[r],
        upgradeReason: _$$i2.NUX_SEAT_CHOICE,
        entryPoint: _$$tc.NUX
      })(null));
      return e;
    };
  }();
  let G = e.currentQuestion === pu.WHAT_DO_YOU_DO || e.currentQuestion === pu.WHAT_DO_YOU_DO_V2;
  let q = () => {
    let e = u === VN.STARTER;
    return getFeatureFlags().starting_points_modal && !i && e;
  };
  let U = () => {
    let e = getI18nState()?.getPrimaryLocale(!1);
    return !!e && (e === languageCodes.EN || e === languageCodes.JA);
  };
  let z = function ({
    source: e
  }) {
    let r = useStore();
    let t = dq() ?? void 0;
    let i = cD();
    let s = FC();
    let n = _6();
    return useCallback(async o => {
      let l;
      let a = async () => {
        let e = (await eq(i, FFileType.DESIGN))?.id ?? null;
        let t = xA({
          state: {
            ...s,
            selectedView: n
          },
          openNewFileIn: oJ(o) ? ai.NEW_TAB : ai.SAME_TAB,
          folderOverride: e ? {
            folderId: e
          } : null,
          trackingInfo: {
            from: f6.FILE_BROWSER_NUX,
            selectedView: n
          }
        });
        t.editorType = FFileType.DESIGN;
        t.callback = e => {
          Cu({
            fileKey: e,
            experiment: "exp_tooltips_plus_onboarding"
          }, "Failed to open captive file");
        };
        r.dispatch(uM(t));
      };
      try {
        let e = await M4.fetch(XZ({
          currentOrgId: t,
          currentTeamId: i,
          fileTags: ["figma_basics"],
          shouldRecreate: !0
        }));
        l = e?.[0];
      } catch (r) {
        trackEventAnalytics("Figma Basics not loaded via LiveStore", {
          error: r.message,
          source: e
        });
      }
      l ? oJ(o) ? r.dispatch(V3({
        url: l.url
      })) : r.dispatch(sf({
        view: "fullscreen",
        fileKey: l.key,
        editorType: FEditorType.Design
      })) : a();
    }, [e, r, s, n, t, i]);
  }({
    source: "nux-dynamic-preview"
  });
  let Y = () => a[a.length - 1] === e.currentQuestion;
  let K = () => {
    if (e.currentQuestion === pu.INVITE_COLLABORATORS && d?.length) {
      let e = d.filter(e => e.trim().length > 0);
      if (e.length && !e.some(e => !xf(e))) return getI18nString("rcs.team_welcome.send_invites");
    } else if (Y()) return getI18nString("new_user_experience.finish");
    return getI18nString("new_user_experience.button.continue");
  };
  let Q = i => {
    try {
      t && i && (trackEventAnalytics("NUX Dynamic Preview", {
        eventSubtype: "set_user_name_success",
        signupSource: e.signupSource
      }), r(yJ({
        user: {
          id: t,
          name: i
        },
        userInitiated: !0
      })));
    } catch (r) {
      trackEventAnalytics("NUX Dynamic Preview", {
        eventSubtype: "set_user_name_error",
        error: r.toString(),
        signupSource: e.signupSource
      });
      return r;
    }
  };
  let X = () => {
    isGovCluster() || r(_$$b({
      opted_in_email: S
    }));
  };
  let J = () => {
    N && r(_$$b({
      tos_accepted: N
    }));
  };
  let ee = i => {
    let s = i;
    let o = "nux_selection";
    "something_else" === i && O && (s = O, o = "nux_custom");
    try {
      t && s && (trackEventAnalytics("NUX Dynamic Preview", {
        eventSubtype: "set_job_title_success",
        signupSource: e.signupSource,
        jobTitle: s
      }, {
        forwardToDatadog: !0,
        ...P
      }), analyticsEventManager.trackDefinedEvent("activation.job_title_changed", {
        newJobTitle: s,
        source: o,
        jobTitleSeenList: T?.toString()
      }), r(yJ({
        user: {
          id: t,
          job_title: s,
          job_title_source: o
        },
        userInitiated: !0
      })));
    } catch (r) {
      trackEventAnalytics("NUX Dynamic Preview", {
        eventSubtype: "set_job_title_error",
        error: r.toString(),
        signupSource: e.signupSource,
        jobTitle: s
      }, {
        forwardToDatadog: !0,
        ...P
      });
      return r;
    }
  };
  let et = () => {
    if (!t || !e.team?.id) return;
    let i = d.filter(e => e.trim().length > 0);
    if (!(i.length < 1)) {
      if (i.some(e => !xf(e))) {
        trackEventAnalytics("NUX Dynamic Preview", {
          eventSubtype: "malformed_invite_input",
          malformedInput: d.toString(),
          signupSource: e.signupSource
        });
        return;
      }
      r(_$$rq({
        emails: i,
        resourceType: FResourceCategoryType.TEAM,
        resourceIdOrKey: e.team.id,
        level: _$$e3.EDITOR,
        teamId: e.team.id,
        onSuccess: () => {
          r(_$$F.enqueue({
            message: getI18nString("rcs.team_welcome.invite_sent", {
              numInvites: i.length
            })
          }));
        }
      }));
      trackEventAnalytics("NUX Dynamic Preview", {
        eventSubtype: "invite_sent",
        numInvites: i.length,
        signupSource: e.signupSource
      });
    }
  };
  let ei = e => {
    switch (e) {
      case pu.HOW_DO_YOU_PLAN_TO_USE_FIGMA:
        return C;
      case pu.WHAT_TYPE_OR_LEVEL_OF_SCHOOL:
        return _;
      case pu.WHERE_OR_HOW_DO_YOU_WORK:
        return L;
      case pu.HOW_MANY_PEOPLE_WORK_IN_ORGANIZATION:
        return v;
      case pu.WHAT_WILL_YOU_USE_FIGJAM_FOR:
        return m;
      case pu.HAVE_USED_FIGMA_PRODUCTS_BEFORE:
        return E;
      case pu.HAVE_USED_WHITEBOARDS_BEFORE:
        return j;
    }
  };
  let es = () => {
    if (G) {
      let [e] = h;
      return !e;
    }
    return oC.includes(e.currentQuestion) ? ei(e.currentQuestion)?.size === 0 : e.currentQuestion === pu.INVITE_COLLABORATORS ? !!d && !!d.length && d.filter(e => e.trim().length > 0).some(e => !xf(e)) : e.currentQuestion === pu.CHOOSE_PLAN ? !u : e.currentQuestion === pu.CHOOSE_PRODUCT && !x;
  };
  let eo = () => {
    let r = {
      signupSource: e.signupSource,
      trackingDescriptor: _$$c2.CONTINUE
    };
    G && T && (r.jobTitleList = T.toString());
    e.currentQuestion === pu.CHOOSE_PLAN && (r.plan = u);
    e.currentQuestion === pu.CHOOSE_PRODUCT && (r.productType = x);
    Y() && (r.trackingDescriptor = _$$c2.FINISH);
    return r;
  };
  let eC = e.currentQuestion === pu.HAVE_USED_FIGMA_PRODUCTS_BEFORE;
  let eL = e.currentQuestion === pu.HAVE_USED_WHITEBOARDS_BEFORE;
  let ev = () => eC || eL;
  let ew = async r => {
    let t = !1;
    if (Y() && trackEventAnalytics("NUX Last Step", {
      isGen1: i,
      nuxType: "nux_dynamic_preview"
    }), e.currentQuestion === pu.NAME_SELF) {
      w && Q(w);
      X();
      J();
    } else if (G) {
      let [e] = h;
      ee(e);
    } else if (e.currentQuestion === pu.INVITE_COLLABORATORS) et();else if (ev()) e.formatAndSubmitSignalCollectionResponses();else if (e.currentQuestion === pu.CHOOSE_PLAN && (u === VN.PROFESSIONAL || u === VN.ORG)) {
      let r = u === VN.ORG;
      trackEventAnalytics("NUX Last Step", {
        departedNuxFlow: !0,
        departedForOrgUpgrade: r,
        departedForTeamUpgrade: !r,
        nuxType: "nux_dynamic_preview",
        isGen1: i
      });
      B({
        isOrgUpgrade: r,
        team: e.team
      });
    } else e.currentQuestion === pu.CHOOSE_PRODUCT ? x === FFileType.DESIGN ? q() || !U() ? await A(x, oJ(r)) : await z(r) : x && (await A(x, oJ(r))) : e.currentQuestion === pu.WHICH_SEAT_WOULD_YOU_LIKE && V(t = Z());
    if (Y()) {
      t || e.dismissModal();
      let i = oJ(r);
      R && (hasDesktopAPI() || i || e.currentQuestion !== pu.CHOOSE_PRODUCT) && Ay.reload("NUX completion refresh");
    } else e.onNextQuestion();
  };
  return I ? jsx(_$$c, {
    disabled: es(),
    onClick: ew,
    trackingProperties: eo(),
    RUMEnabled: !0,
    "data-testid": F$.continueBtn,
    children: K()
  }) : jsx(eX, {
    variant: "primary",
    mobile: e.mobile,
    brand: F ?? void 0,
    disabled: es(),
    loading: D,
    onClick: ew,
    trackingProperties: eo(),
    "data-testid": F$.continueBtn,
    children: K()
  });
}
let e3 = forwardRef(function (e, r) {
  return jsx("div", {
    className: "nux_dynamic_preview_icon--iconContainer--MjZgL",
    ref: r,
    children: e.hasFigJamIntent ? jsx(_$$B2, {
      svg: _$$A,
      useOriginalSrcFills_DEPRECATED: !0,
      autosize: !0,
      width: "32px"
    }) : jsx(_$$B2, {
      svg: _$$A2,
      useOriginalSrcFills_DEPRECATED: !0,
      autosize: !0,
      width: "32px"
    })
  });
});
function e9() {
  let [e, r] = useAtomValueAndSetter(_D);
  e || r(!0);
  useEffect(() => () => r(!1), [r]);
}
let rh = {
  STARTER_OPTION: "nux-dynamic-preview-starter-option",
  PRO_OPTION: "nux-dynamic-preview-pro-option",
  ORG_OPTION: "nux-dynamic-preview-org-option"
};
function r_() {
  let e = useDispatch();
  let r = LN();
  let t = Oq.exclude([ud.DEV_MODE]);
  let i = {
    currency: r,
    tier: Ju.PRO,
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  };
  let s = {
    currency: r,
    tier: Ju.ORG,
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  };
  let n = t.dict(() => null);
  let a = jv({
    billableProductKeys: t,
    baseQuery: i
  });
  let d = jv({
    billableProductKeys: t,
    baseQuery: s
  });
  let c = resourceUtils.all([a, d]);
  let {
    status
  } = c;
  let x = "loading" === status || "errors" === status;
  let [h, _] = c.data || [n, n];
  useEffect(() => {
    "errors" === status && e(_$$s2.error("An error occurred", 5e3));
  }, [e, status]);
  return {
    proPrices: h,
    orgPrices: _,
    showLoading: x
  };
}
function rp() {
  let e = useDispatch();
  let r = LN();
  let t = {
    currency: r,
    tier: Ju.PRO,
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  };
  let i = {
    currency: r,
    tier: Ju.ORG,
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  };
  let s = jv({
    billableProductKeys: N_,
    baseQuery: t
  });
  let n = jv({
    billableProductKeys: N_,
    baseQuery: i
  });
  let a = N_.dict(() => null);
  let d = resourceUtils.all([s, n]);
  let {
    status
  } = d;
  let u = "loading" === status || "errors" === status;
  let [x, h] = d.data || [a, a];
  useEffect(() => {
    "errors" === status && e(_$$s2.error("An error occurred", 5e3));
  }, [e, status]);
  return {
    proPrices: x,
    orgPrices: h,
    showLoading: u
  };
}
function rf() {
  return {
    starter: [renderI18nText("nux.starter.feature.three_files"), renderI18nText("nux.starter.feature.basic")],
    pro: [renderI18nText("nux.pro.feature.unlimited_files"), renderI18nText("nux.pro.feature.prototyping"), renderI18nText("nux.pro.feature.design_library"), renderI18nText("nux.pro.feature.handoff")],
    org: [renderI18nText("nux.org.feature.unlimited_teams"), renderI18nText("nux.org.feature.branching"), renderI18nText("nux.org.feature.security"), renderI18nText("nux.org.feature.scim"), renderI18nText("nux.org.feature.customizations")]
  };
}
function rg({
  isFree: e = !1,
  isMobileViewport: r,
  price: t,
  title: i
}) {
  let o = LN();
  let l = new vr(o);
  let n = {
    choosePlanCardPricing: r ? _$$rI : Jg,
    choosePlanCardProductTitle: r ? OA : QM,
    choosePlanCardCost: r ? Gz : wd
  };
  return jsxs("div", {
    className: n.choosePlanCardPricing,
    children: [jsx("div", {
      className: n.choosePlanCardProductTitle,
      children: i
    }), (() => {
      if (null === t) return jsx(Wi, {
        className: sV
      });
      let r = e ? t.amount : void 0;
      let i = e ? 0 : t.amount;
      return jsxs("div", {
        children: [r && jsxs(Fragment, {
          children: [jsx("span", {
            className: Sd,
            children: l.formatMoney(r, {
              showCents: !1
            })
          }), "\xa0"]
        }), jsx("div", {
          className: n.choosePlanCardCost,
          children: l.formatMoney(i, {
            showCents: !1
          })
        }), "\xa0", jsx("div", {
          className: On,
          children: renderI18nText("new_user_experience.choose_plan_card.professional.title.description.seat_rename")
        })]
      });
    })()]
  });
}
function rm({
  price: e,
  isUserEduVerified: r
}) {
  let t = LN();
  let i = new vr(t);
  return jsx("div", {
    children: N_.sort(AG).map(t => {
      let o = e[t];
      if (!o) return jsx(Wi, {
        className: sV
      }, t);
      let l = jsxs("div", {
        className: _$$s.flex.itemsCenter.gap4.$,
        children: [jsx("p", {
          className: _$$s.textBodyMedium.colorTextSecondary.$,
          style: _$$sx2.add({
            textDecoration: "line-through"
          }).$,
          children: i.formatMoney(o.amount)
        }), jsx(rE, {
          price: 0,
          localizeCurrency: i
        })]
      });
      return jsxs("div", {
        className: _$$s.flex.justifyBetween.$,
        children: [jsxs("div", {
          className: _$$s.flex.gap4.itemsCenter.$,
          "data-testid": "choose-plan-seat-name",
          children: [_$$B3({
            type: t,
            size: "16",
            removeBackgroundColor: !0
          }), jsx("p", {
            className: _$$s.textBodyMedium.$,
            children: function (e) {
              switch (e) {
                case ud.EXPERT:
                  return getI18nString("nux.campfire.full_seat");
                case ud.DEVELOPER:
                  return getI18nString("nux.campfire.dev_seat");
                case ud.COLLABORATOR:
                  return getI18nString("nux.campfire.collab_seat");
                case ud.CONTENT:
                  return getI18nString("nux.campfire.content_seat");
                default:
                  throwTypeError(e);
              }
            }(t)
          })]
        }), r ? l : jsx(rE, {
          price: o.amount,
          localizeCurrency: i
        })]
      }, t);
    })
  });
}
function rE({
  price: e,
  localizeCurrency: r
}) {
  return jsx("p", {
    className: _$$s.textBodySmall.$,
    "data-testid": "choose-plan-seat-price",
    children: renderI18nText("nux.price_per_month", {
      price: jsx("span", {
        className: _$$s.textBodyMediumStrong.$,
        children: r.formatMoney(e)
      })
    })
  });
}
function rb({
  features: e,
  isOrg: r
}) {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap4.$,
    children: [r && jsx("p", {
      className: _$$s.textBodyMediumStrong.$,
      children: renderI18nText("nux.org.feature.everything_on_pro")
    }), e.map((e, r) => jsxs("div", {
      className: _$$s.flex.$,
      children: [jsx(_$$l, {
        className: _$$s.minW16.$,
        style: _$$sx2.add({
          "--color-icon": "var(--color-icon-secondary)"
        }).$
      }), jsx("p", {
        className: _$$s.textBodyMedium.$,
        children: e
      })]
    }, r))]
  });
}
function rj({
  type: e
}) {
  let r = {
    choosePlanCardFeatures: "mobile" === e ? ik : qD
  };
  return jsxs("div", {
    className: r.choosePlanCardFeatures,
    children: [jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.free.project")]
    }), jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.free.pages")]
    }), jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.free.version_history")]
    })]
  });
}
function rC({
  type: e
}) {
  let r = {
    choosePlanCardFeatures: "mobile" === e ? ik : qD
  };
  return jsxs("div", {
    className: r.choosePlanCardFeatures,
    children: [jsxs("div", {
      children: [" ", getI18nString("new_user_experience.choose_plan_card.professional.projects"), " "]
    }), jsxs("div", {
      children: [" ", getI18nString("new_user_experience.choose_plan_card.professional.files"), " "]
    }), jsxs("div", {
      children: [" ", getI18nString("new_user_experience.choose_plan_card.professional.pages"), " "]
    }), jsxs("div", {
      children: [" ", getI18nString("new_user_experience.choose_plan_card.professional.version_history"), " "]
    }), jsxs("div", {
      children: [" ", getI18nString("new_user_experience.choose_plan_card.professional.permissions"), " "]
    }), jsxs("div", {
      children: [" ", getI18nString("new_user_experience.choose_plan_card.professional.libraries"), " "]
    })]
  });
}
function rL({
  type: e
}) {
  let r = {
    choosePlanCardFeatures: "mobile" === e ? ik : qD,
    everythingInTeamsPlus: "mobile" === e ? Mg : QM
  };
  return jsxs("div", {
    className: r.choosePlanCardFeatures,
    children: [jsx("div", {
      className: r.everythingInTeamsPlus,
      children: renderI18nText("new_user_experience.choose_plan_card.org.everything_in_teams_plus")
    }), jsx(Kz, {
      multiple: 2
    }), jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.org.unlimited_teams"), " "]
    }), jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.org.single_sign_on"), " "]
    }), jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.org.libraries"), " "]
    }), jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.org.design_system_analytics"), " "]
    }), jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.org.branching_and_merging"), " "]
    }), jsxs("div", {
      children: [" ", renderI18nText("new_user_experience.choose_plan_card.org.admin_and_billing"), " "]
    })]
  });
}
function rv({
  plan: e,
  type: r
}) {
  switch (e) {
    case "starter":
      return jsx(rj, {
        type: r
      });
    case "pro":
      return jsx(rC, {
        type: r
      });
    case "org":
      return jsx(rL, {
        type: r
      });
  }
}
function rw(e) {
  switch (e) {
    case "starter":
      return {
        dataTestId: "starter-plan-button",
        copy: getI18nString("plan_details.start_for_free")
      };
    case "pro":
      return {
        dataTestId: "professional-plan-button",
        copy: getI18nString("plan_details.choose_professional")
      };
    case "org":
      return {
        dataTestId: "organization-plan-button",
        copy: getI18nString("plan_details.choose_organization")
      };
  }
}
function ry({
  title: e,
  plan: r,
  planTestId: t,
  onPlanSelect: i,
  PlanCardPrices: o,
  EduVerificationBadge: l
}) {
  let {
    dataTestId,
    copy
  } = rw(r);
  return jsxs("div", {
    className: B_,
    "data-testid": t,
    children: [jsx("div", {
      className: _$$MY,
      children: jsx("h2", {
        className: dv,
        children: e
      })
    }), jsx(Kz, {
      multiple: 1
    }), jsx(o, {}), jsx(Kz, {
      multiple: 2
    }), jsx(rv, {
      plan: r,
      type: "mobile"
    }), jsx(Kz, {
      multiple: 3
    }), jsx(eX, {
      variant: "primary",
      onClick: i,
      "data-testid": dataTestId,
      mobile: !0,
      children: copy
    }), l && jsx(l, {})]
  });
}
function rS({
  title: e,
  plan: r,
  planTestId: t,
  isSelected: i,
  onPlanSelect: o,
  PlanCardSubHeader: l,
  PlanCardPrices: n,
  EduVerificationBadge: a
}) {
  return jsxs("button", {
    className: d()({
      [yG]: !0,
      [Oj]: i
    }),
    onClick: o,
    tabIndex: 0,
    "data-testid": t,
    children: [jsxs("div", {
      className: _$$MY,
      children: [jsx("h2", {
        className: PB,
        children: e
      }), jsx("div", {
        className: d()({
          [O0]: !0,
          [X3]: i
        })
      })]
    }), l && jsx(l, {}), jsx(Kz, {
      multiple: 3
    }), jsx(n, {}), jsx("hr", {
      className: TB
    }), jsx(rv, {
      plan: r,
      type: "fullscreen"
    }), a && jsx(a, {})]
  });
}
function rk({
  title: e,
  description: r,
  cardPlacement: t,
  isSelected: i,
  onPlanSelect: o,
  PlanCardPrices: l,
  PlanFeatures: n,
  EduVerificationBadge: a,
  planTestId: c
}) {
  return jsxs("button", {
    className: _$$s.flex1.p16.alignLeft.cursorPointer.flex.bt1.bb1.flexColumn.$$if(i, _$$s.colorBgSelected).$,
    style: _$$sx2.$$if("left" === t, _$$sx2.add({
      borderTopLeftRadius: "13px",
      borderBottomLeftRadius: "13px",
      borderLeft: "1px"
    })).$$if("right" === t, _$$sx2.add({
      borderTopRightRadius: "13px",
      borderBottomRightRadius: "13px",
      borderRight: "1px"
    })).bSolid.$$if(i, _$$sx2.colorBorderSelected, _$$sx2.colorBorder).$,
    onClick: o,
    "data-testid": c,
    children: [jsxs("div", {
      className: _$$s.flex.flexColumn.justifyBetween.$,
      style: _$$sx2.add({
        height: "136px"
      }).$,
      children: [jsxs("div", {
        className: _$$s.flex.justifyBetween.$,
        children: [jsxs("div", {
          children: [jsx("h2", {
            className: _$$s.textHeadingMedium.$,
            children: e
          }), jsx("p", {
            className: _$$s.textBodyMedium.colorTextSecondary.$,
            children: r
          })]
        }), jsx("div", {
          className: d()({
            [O0]: !0,
            [X3]: i
          })
        })]
      }), jsx(l, {})]
    }), jsx("div", {
      className: _$$s.wFull.my16.bSolid.bt1.$$if(i, _$$s.colorBorderSelected, _$$s.colorBorder).$
    }), jsx(n, {}), a && jsx(a, {})]
  });
}
function rO({
  title: e,
  description: r,
  plan: t,
  planTestId: i,
  onPlanSelect: o,
  PlanCardPrices: l,
  PlanFeatures: n,
  EduVerificationBadge: a
}) {
  let {
    dataTestId,
    copy
  } = rw(t);
  return jsxs("div", {
    className: "x5mp9sv x1a3z175 x1bamp8i x76ihet x112ta8 xr444nq xp66gb9 x169e4by x15uf7rf x19gtj6o x1nhpmpl x16v0e3u xx8hktz x1ypdohk x78zum5 xdt5ytf xdpxx8g",
    "data-testid": i,
    children: [jsxs("div", {
      className: "x78zum5 xdt5ytf",
      children: [jsx("h2", {
        className: "x1pvqxga x6xwguf xcgk4ki",
        children: e
      }), jsx(Kz, {
        value: 4
      }), jsx("p", {
        className: "x4z9k3i x19v9tvf x1n0bwc9",
        children: r
      })]
    }), jsx(Kz, {
      multiple: 2
    }), jsx(l, {}), jsx(Kz, {
      multiple: 2
    }), jsx(n, {}), jsx(Kz, {
      multiple: 3
    }), jsx(eX, {
      variant: "primary",
      onClick: o,
      "data-testid": dataTestId,
      mobile: !0,
      children: copy
    }), a && jsx(a, {})]
  });
}
function rN(e) {
  return "mobile" === e.type ? jsx(ry, {
    title: e.title,
    plan: e.plan,
    planTestId: e.planTestId,
    onPlanSelect: e.onPlanSelect,
    PlanCardPrices: e.PlanCardPrices,
    EduVerificationBadge: e.EduVerificationBadge
  }) : jsx(rS, {
    title: e.title,
    plan: e.plan,
    planTestId: e.planTestId,
    isSelected: e.isSelected,
    onPlanSelect: e.onPlanSelect,
    PlanCardSubHeader: e.PlanCardSubHeader,
    PlanCardPrices: e.PlanCardPrices,
    EduVerificationBadge: e.EduVerificationBadge
  });
}
function rT(e) {
  return "mobile" === e.type ? jsx(rO, {
    ...e
  }) : jsx(rk, {
    ...e
  });
}
let rR = {
  textBodyMedium: {
    ..._$$g2.textBodyMedium,
    $$css: !0
  },
  textBodySmall: {
    ..._$$g2.textBodySmall,
    $$css: !0
  },
  verticalDivider: {
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
    $$css: !0
  },
  verticalDividerSelected: {
    borderLeft: "x1iztfp0",
    borderLeftWidth: null,
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderLeftStyle: null,
    borderInlineStartStyle: null,
    borderInlineEndStyle: null,
    borderLeftColor: null,
    borderInlineStartColor: null,
    borderInlineEndColor: null,
    $$css: !0
  }
};
function rI({
  hasFigJamIntent: e
}) {
  let r = _$$sx();
  let t = _$$u();
  let [i, o] = useAtomValueAndSetter(aV);
  let l = i === VN.STARTER;
  let a = i === VN.PROFESSIONAL;
  let c = i === VN.ORG;
  let u = useAtomWithSubscription(pr);
  let x = useAtomWithSubscription(nt);
  let {
    proPrices,
    orgPrices,
    showLoading
  } = r_();
  e9();
  let f = jsx(rg, {
    isFree: u,
    price: proPrices[ud.DESIGN],
    title: getI18nString("new_user_experience.choose_plan_card.professional.title.Figma")
  });
  let g = jsx(rg, {
    isFree: u,
    price: proPrices[ud.FIGJAM],
    title: getI18nString("new_user_experience.choose_plan_card.professional.title.Figjam")
  });
  let m = jsx(rg, {
    price: orgPrices[ud.DESIGN],
    title: getI18nString("new_user_experience.choose_plan_card.org.title.Figma")
  });
  let E = jsx(rg, {
    price: orgPrices[ud.FIGJAM],
    title: getI18nString("new_user_experience.choose_plan_card.professional.title.Figjam")
  });
  function b() {
    return jsx(Fragment, {
      children: !u && x && jsxs(Fragment, {
        children: [jsx(Kz, {
          multiple: 5
        }), jsx("div", {
          className: m$,
          children: renderI18nText("new_user_experience.choose_plan_card.org.education_cta_with_verified_link", {
            verifiedLink: jsx(Ph, {
              href: "/education/apply",
              trusted: !0,
              newTab: !0,
              children: renderI18nText("new_user_experience.choose_plan_card.org.education_cta_verified")
            })
          })
        })]
      })
    });
  }
  function j(e) {
    showLoading && e !== VN.STARTER || (trackEventAnalytics("NUX Dynamic Preview", {
      eventSubtype: `selected_plan_${e}`
    }, t), o(e));
  }
  return r ? jsx(rP, {
    isStarterSelected: l,
    isProSelected: a,
    isOrgSelected: c,
    isUserEduVerified: u,
    isStudentOrEducator: x,
    setSelectedPlan: o
  }) : jsxs(pA, {
    className: Vz,
    children: [jsx("h1", {
      className: yo,
      children: renderI18nText("new_user_experience.choose_plan.title")
    }), jsx(Kz, {
      multiple: 4
    }), jsxs("div", {
      className: _$$f2,
      children: [jsx(rN, {
        type: "fullscreen",
        plan: "starter",
        title: getI18nString("new_user_experience.choose_plan_card.starter"),
        planTestId: rh.STARTER_OPTION,
        isSelected: l,
        onPlanSelect: () => j(VN.STARTER),
        PlanCardSubHeader: () => jsx("div", {
          className: kr,
          children: e ? renderI18nText("plan_details.for_teams_trying_figjam") : renderI18nText("new_user_experience.choose_plan_card.starter.description")
        }),
        PlanCardPrices: () => jsxs(Fragment, {
          children: [jsxs("div", {
            className: Jg,
            children: [jsx("div", {
              className: d()(QM, _7),
              children: renderI18nText("new_user_experience.choose_plan_card.starter.title")
            }), jsx("div", {
              className: w9,
              children: renderI18nText("new_user_experience.choose_plan_card.starter.title.completion")
            })]
          }), jsx(Kz, {
            multiple: 3
          })]
        })
      }), jsx(rN, {
        type: "fullscreen",
        plan: "pro",
        isSelected: a,
        onPlanSelect: () => j(VN.PROFESSIONAL),
        planTestId: rh.PRO_OPTION,
        title: getI18nString("new_user_experience.choose_plan_card.professional"),
        PlanCardSubHeader: () => jsx("div", {
          className: kr,
          children: u ? renderI18nText("edu.free_to_use_in_classrooms") : renderI18nText("new_user_experience.choose_plan_card.professional.description")
        }),
        PlanCardPrices: () => jsxs(Fragment, {
          children: [e ? g : f, e ? f : g]
        }),
        EduVerificationBadge: () => jsx(b, {})
      }), jsx(rN, {
        type: "fullscreen",
        plan: "org",
        isSelected: c,
        onPlanSelect: () => j(VN.ORG),
        planTestId: rh.ORG_OPTION,
        title: getI18nString("new_user_experience.choose_plan_card.org"),
        PlanCardSubHeader: () => jsx("div", {
          className: kr,
          children: renderI18nText("new_user_experience.choose_plan_card.org.description")
        }),
        PlanCardPrices: () => jsxs(Fragment, {
          children: [e ? E : m, e ? m : E]
        })
      })]
    })]
  });
}
function rM({
  highlighted: e
}) {
  return jsx("div", {
    ...xk(e ? rR.verticalDividerSelected : rR.verticalDivider)
  });
}
function rP({
  isStarterSelected: e,
  isProSelected: r,
  isOrgSelected: t,
  isUserEduVerified: i,
  isStudentOrEducator: o,
  setSelectedPlan: l
}) {
  let {
    proPrices,
    orgPrices,
    showLoading
  } = rp();
  let c = rf();
  let u = _$$u();
  function x(e) {
    showLoading && e !== VN.STARTER || (trackEventAnalytics("NUX Dynamic Preview", {
      eventSubtype: `selected_plan_${e}`
    }, u), l(e));
  }
  return jsxs(pA, {
    className: "x78zum5 xdt5ytf x13w0ytc x19bbpc0",
    children: [jsx("h1", {
      className: yo,
      children: renderI18nText("new_user_experience.choose_plan.title")
    }), jsx(Kz, {
      multiple: 5
    }), jsxs("div", {
      className: "x78zum5",
      children: [jsx(rT, {
        PlanCardPrices: () => jsx("p", {
          ...xk(rR.textBodyMedium),
          children: renderI18nText("nux.campfire.starter.free_price")
        }),
        PlanFeatures: () => jsx(rb, {
          features: c.starter
        }),
        cardPlacement: "left",
        description: getI18nString("nux.campfire.starter.description"),
        isSelected: e,
        onPlanSelect: () => x(VN.STARTER),
        plan: "starter",
        planTestId: rh.STARTER_OPTION,
        title: getI18nString("new_user_experience.choose_plan_card.starter"),
        type: "fullscreen"
      }), jsx(rM, {
        highlighted: e || r
      }), jsx(rT, {
        EduVerificationBadge: () => jsx(Fragment, {
          children: !i && o && jsx(rA, {})
        }),
        PlanCardPrices: () => jsx(rm, {
          price: proPrices,
          isUserEduVerified: i
        }),
        PlanFeatures: () => jsx(rb, {
          features: c.pro
        }),
        description: getI18nString("nux.campfire.pro.description"),
        isSelected: r,
        onPlanSelect: () => x(VN.PROFESSIONAL),
        plan: "pro",
        planTestId: rh.PRO_OPTION,
        title: getI18nString("new_user_experience.choose_plan_card.professional"),
        type: "fullscreen"
      }), jsx(rM, {
        highlighted: r || t
      }), jsx(rT, {
        PlanCardPrices: () => jsx(rm, {
          price: orgPrices
        }),
        PlanFeatures: () => jsx(rb, {
          features: c.org,
          isOrg: !0
        }),
        cardPlacement: "right",
        description: getI18nString("nux.campfire.org.description"),
        isSelected: t,
        onPlanSelect: () => x(VN.ORG),
        plan: "org",
        planTestId: rh.ORG_OPTION,
        title: getI18nString("new_user_experience.choose_plan_card.org"),
        type: "fullscreen"
      })]
    })]
  });
}
function rA() {
  return jsxs(Fragment, {
    children: [jsx(Kz, {
      multiple: 2
    }), jsx("p", {
      ...xk(rR.textBodySmall),
      children: renderI18nText("nux.edu.free_for_verified", {
        verifiedLink: jsx(Ph, {
          href: "/education/apply",
          trusted: !0,
          newTab: !0,
          children: renderI18nText("new_user_experience.choose_plan_card.org.education_cta_verified")
        })
      })
    })]
  });
}
function rB({
  dismissModal: e,
  team: r
}) {
  let t = ey();
  let i = ({
    trackingProperties: r,
    shouldClickPrimaryCta: t
  }) => {
    trackEventAnalytics("NUX Last Step", r);
    t && e();
  };
  let s = ({
    isPro: e,
    isOrg: s
  } = {}) => {
    trackEventAnalytics("NUX Dynamic Preview", {
      eventSubtype: `selected_plan_${function ({
        isPro: e,
        isOrg: r
      }) {
        return r ? "org" : e ? "professional" : "starter";
      }({
        isPro: e,
        isOrg: s
      })}`
    });
    i({
      trackingProperties: {
        nuxType: "nux_dynamic_preview",
        departedNuxFlow: !!(e || s),
        departedForOrgUpgrade: s,
        departedForTeamUpgrade: e,
        isGen1: !1
      },
      shouldClickPrimaryCta: !0
    });
    (e || s) && t({
      isOrgUpgrade: !!s,
      team: r
    });
  };
  return {
    onStarterClick: () => s(),
    onProClick: () => s({
      isPro: !0
    }),
    onOrgClick: () => s({
      isOrg: !0
    })
  };
}
function rH() {
  return useAtomWithSubscription(nt) ? jsxs(Fragment, {
    children: [jsx(Kz, {
      multiple: 2
    }), jsxs("div", {
      className: XI,
      children: [jsx(_$$B2, {
        svg: _$$A3,
        className: Q2,
        autosize: !0,
        width: "22px",
        height: "22px",
        style: {
          minWidth: "22px",
          height: "22px"
        }
      }), jsx("div", {
        className: _$$PG,
        children: renderI18nText("edu.free_for_verified_students_and_educators_verify_status", {
          verify_status: jsx(_$$N, {
            newTab: !0,
            href: "/education/apply",
            children: getI18nString("edu.verify_your_status")
          })
        })
      })]
    })]
  }) : null;
}
function rV(e) {
  let r = _$$sx();
  let {
    onStarterClick,
    onProClick,
    onOrgClick
  } = rB({
    team: e.team,
    dismissModal: e.dismissModal
  });
  let {
    proPrices,
    orgPrices
  } = r_();
  return r ? jsx(rG, {
    ...e
  }) : jsxs("div", {
    className: PJ,
    children: [jsx("h1", {
      className: xx,
      children: getI18nString("new_user_experience.choose_plan.title")
    }), jsx(Kz, {
      multiple: 4
    }), jsxs("div", {
      className: y8,
      children: [jsx(rN, {
        type: "mobile",
        plan: "starter",
        title: getI18nString("new_user_experience.choose_plan_card.starter"),
        planTestId: rh.STARTER_OPTION,
        onPlanSelect: onStarterClick,
        PlanCardPrices: () => jsxs("div", {
          className: Jg,
          children: [jsx("div", {
            className: d()(OA, _7),
            children: getI18nString("new_user_experience.choose_plan_card.starter.title")
          }), jsx("div", {
            className: _$$ih,
            children: getI18nString("new_user_experience.choose_plan_card.starter.title.completion")
          })]
        })
      }), jsx(rN, {
        type: "mobile",
        plan: "pro",
        title: getI18nString("new_user_experience.choose_plan_card.professional"),
        planTestId: rh.PRO_OPTION,
        onPlanSelect: onProClick,
        PlanCardPrices: () => jsxs(Fragment, {
          children: [jsx(rg, {
            isMobileViewport: !0,
            price: proPrices[ud.DESIGN],
            title: getI18nString("new_user_experience.choose_plan_card.org.title.Figma")
          }), jsx(rg, {
            isMobileViewport: !0,
            price: proPrices[ud.FIGJAM],
            title: getI18nString("new_user_experience.choose_plan_card.professional.title.Figjam")
          })]
        }),
        EduVerificationBadge: () => jsx(rH, {})
      }), jsx(rN, {
        type: "mobile",
        plan: "org",
        title: getI18nString("new_user_experience.choose_plan_card.org"),
        planTestId: rh.ORG_OPTION,
        onPlanSelect: onOrgClick,
        PlanCardPrices: () => jsxs(Fragment, {
          children: [jsx(rg, {
            isMobileViewport: !0,
            price: orgPrices[ud.DESIGN],
            title: getI18nString("new_user_experience.choose_plan_card.org.title.Figma")
          }), jsx(rg, {
            isMobileViewport: !0,
            price: orgPrices[ud.FIGJAM],
            title: getI18nString("new_user_experience.choose_plan_card.professional.title.Figjam")
          })]
        })
      })]
    })]
  });
}
function rZ() {
  return jsx("div", {
    className: "x1n5zjp5"
  });
}
function rG(e) {
  let {
    onStarterClick,
    onProClick,
    onOrgClick
  } = rB({
    team: e.team,
    dismissModal: e.dismissModal
  });
  let o = rf();
  let {
    proPrices,
    orgPrices
  } = rp();
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xl56j7k x6s0dn4 xh8yej3",
    children: [jsx("h1", {
      className: "x1akne3o xkh2ocl x1pvqxga x6xwguf x1cpheol x14fbwjk x1w2vvpw x2b8uid",
      children: getI18nString("new_user_experience.choose_plan.title")
    }), jsx(Kz, {
      multiple: 4
    }), jsxs("div", {
      className: "x78zum5 xdt5ytf xkfg2k x1qjc9v5 x8gbvx8 x1a02dak",
      children: [jsx(rT, {
        type: "mobile",
        plan: "starter",
        title: getI18nString("new_user_experience.choose_plan_card.starter"),
        description: getI18nString("nux.campfire.starter.description"),
        planTestId: rh.STARTER_OPTION,
        onPlanSelect: onStarterClick,
        PlanCardPrices: () => renderI18nText("nux.campfire.starter.free_price"),
        PlanFeatures: () => jsx(rb, {
          features: o.starter
        })
      }), jsx(rZ, {}), jsx(rT, {
        type: "mobile",
        plan: "pro",
        title: getI18nString("new_user_experience.choose_plan_card.professional"),
        description: getI18nString("nux.campfire.pro.description"),
        planTestId: rh.PRO_OPTION,
        onPlanSelect: onProClick,
        PlanCardPrices: () => jsx(rm, {
          price: proPrices
        }),
        PlanFeatures: () => jsx(rb, {
          features: o.pro
        }),
        EduVerificationBadge: () => jsx(rH, {})
      }), jsx(rZ, {}), jsx(rT, {
        type: "mobile",
        plan: "org",
        title: getI18nString("new_user_experience.choose_plan_card.org"),
        description: getI18nString("nux.campfire.org.description"),
        planTestId: rh.ORG_OPTION,
        onPlanSelect: onOrgClick,
        PlanCardPrices: () => jsx(rm, {
          price: orgPrices
        }),
        PlanFeatures: () => jsx(rb, {
          features: o.org,
          isOrg: !0
        })
      })]
    })]
  });
}
let r2 = "choose_seat_card--productCalloutImg--GPGn2";
let r0 = "choose_seat_card--productCalloutText--qjJIo";
let r3 = {
  [FProductAccessType.DESIGN]: "979afd680d3e946f5289cd62730e34a2c79395d1",
  [FProductAccessType.DEV_MODE]: "a1b95afba49cd472bf27210386d17155f0f2eaad",
  [FProductAccessType.WHITEBOARD]: "cc13ff1933ec703124574d3a3e142c9677a767fe",
  [FProductAccessType.SLIDES]: "9ff4dd1f4887b20f2b1e2ca7eaed695b4b5cfffc",
  [FProductAccessType.FIGMAKE]: "6749d9f2d6caaf97e09513a8c6bc7318733c8f4c",
  [FProductAccessType.SITES]: "c8e45f18b9e8928df38b296e685b1483f0173830"
};
let r6 = {
  [FProductAccessType.DESIGN]: "ea9a83c92d6f9b117b8af57f278eeed1fd01d455",
  [FProductAccessType.DEV_MODE]: "c0f1d01ab3ac6230e325a13a56ee9db2f46d1be4",
  [FProductAccessType.WHITEBOARD]: "60e8e2d1e8b8934e11b59c21f4619b0e6eefd6de",
  [FProductAccessType.SLIDES]: "ae681cce119c1bc0f3793ef3a9deb462eeb21d22",
  [FProductAccessType.FIGMAKE]: "f110df48bf7deae60662a03cd25d7e8e12f8eeea",
  [FProductAccessType.SITES]: "23449ef93c721e19fd7547110c30f8f533463c00"
};
function r5({
  isVisible: e,
  targetKey: r,
  productKey: t
}) {
  let [i, l] = useState(F_.RIGHT_BODY);
  let {
    color
  } = _$$G();
  let a = "dark" === color;
  if (!e) return null;
  let d = a ? r6[t] : r3[t];
  let c = buildUploadUrl(d);
  let u = {
    [FProductAccessType.DESIGN]: getI18nString("seat_selection_in_nux.design_prototype_and_build_your"),
    [FProductAccessType.DEV_MODE]: getI18nString("seat_selection_in_nux.copy_code_track_changes_and"),
    [FProductAccessType.WHITEBOARD]: getI18nString("seat_selection_in_nux.whiteboard_brainstorm_and_diagram_with"),
    [FProductAccessType.SLIDES]: getI18nString("seat_selection_in_nux.create_beautiful_effective_presentations"),
    [FProductAccessType.FIGMAKE]: getI18nString("seat_selection_in_nux.prompt_your_way_to_a"),
    [FProductAccessType.SITES]: getI18nString("seat_selection_in_nux.design_and_publish_responsive_websites")
  };
  return jsx(NJ, {
    arrowPosition: F_.RIGHT_BODY,
    backgroundColor: "var(--color-bg)",
    className: "choose_seat_card--productCalloutParent--6MMbm",
    colorMode: color,
    hideCloseButton: !0,
    leftOffset: -8,
    noAnimation: !0,
    noPadding: !0,
    setArrowPosition: l,
    shouldHideArrow: !1,
    shouldNotWrapInParagraphTag: !0,
    shouldScrollTargetIntoView: !1,
    targetKey: r,
    width: 300,
    children: jsxs("div", {
      className: "choose_seat_card--productCallout--DlABb",
      children: [i !== F_.RIGHT_BODY && jsxs(Fragment, {
        children: [jsx("div", {
          className: r0,
          children: u[t]
        }), jsx("span", {
          className: r2,
          children: jsx("img", {
            src: c,
            alt: getI18nString("seat_selection_in_nux.tooltip_image_alt_text", {
              productKey: t
            })
          })
        })]
      }), i === F_.RIGHT_BODY && jsxs(Fragment, {
        children: [jsx("span", {
          className: r2,
          children: jsx("img", {
            src: c,
            alt: getI18nString("seat_selection_in_nux.tooltip_image_alt_text", {
              productKey: t
            })
          })
        }), jsx("div", {
          className: r0,
          children: u[t]
        })]
      })]
    })
  });
}
function r4({
  title: e,
  subtitle: r,
  Icon: t,
  seatTestId: i,
  isSelected: l,
  onSeatSelect: n,
  mode: a,
  features: c,
  isRecommended: u
}) {
  let {
    color
  } = _$$G();
  let h = l ? function (e, r) {
    switch (e) {
      case "design":
        return r ? "#2F3239" : "#F8FCFF";
      case "dev-handoff":
        return r ? "#313734" : "#F5FFF6";
      case "whiteboard":
        return r ? "#332F37" : "#FAF7FF";
      default:
        return "var(--color-bg)";
    }
  }(a, "dark" === color) : "var(--color-bg)";
  let [_, p] = useState(null);
  let f = useRef({});
  c.forEach((e, r) => {
    f.current[r] || (f.current[r] = createRef());
  });
  return jsx(_$$J, {
    brand: a || "design",
    children: jsxs("span", {
      className: "choose_seat_card--chooseSeatCardWrapper--rLQHw",
      children: [!!u && jsx("div", {
        className: "choose_seat_card--selectedCardChooseRecommended--hUTNk",
        children: renderI18nText("seat_selection_in_nux.recommended")
      }), jsxs("button", {
        className: d()({
          "choose_seat_card--chooseSeatCardFullscreen--sLJcz": !0,
          "choose_seat_card--selectedCardChooseSeat---vPwy": l,
          "choose_seat_card--selectedCardChooseSeatViewOnly--0hgY2": l && !a
        }),
        style: {
          backgroundColor: h
        },
        onClick: n,
        tabIndex: 0,
        "data-testid": i,
        "data-backgroundid": h,
        children: [jsxs("div", {
          className: "choose_seat_card--chooseSeatCardHeader--EhYkj",
          children: [jsxs("div", {
            className: "choose_seat_card--chooseSeatCardTopRow--HFVFj",
            children: [jsx("div", {
              className: d()({
                "choose_seat_card--chooseSeatCardIcon--LCu9I": !0,
                "choose_seat_card--chooseSeatCardIconView--3eR0Q": !a
              }),
              children: jsx(t, {
                className: "choose_seat_card--icon--IPSr2"
              })
            }), jsx("div", {
              className: d()({
                [O0]: !0,
                "choose_seat_card--radioButtonSelectedChooseSeat---2ZCl": l
              })
            })]
          }), jsx("div", {
            className: "choose_seat_card--chooseSeatCardTitle--hZKff",
            children: e
          }), jsx("div", {
            className: "choose_seat_card--chooseSeatCardSubHeader--TblgI",
            children: r
          })]
        }), jsxs("div", {
          children: [jsx("hr", {
            className: "choose_seat_card--stroke--gjgds"
          }), jsx("div", {
            className: "choose_seat_card--chooseSeatCardFeatures--vQ1rD",
            children: c.map((e, r) => jsxs("div", {
              id: `feature-${a}-${i}-${r}`,
              "data-onboarding-key": `feature-${a}-${i}-${r}`,
              ref: f.current[r],
              className: d()({
                "choose_seat_card--chooseSeatCardFeature--2Ca39": !0,
                "choose_seat_card--chooseSeatCardFeatureDisabled--BKhCz": !e.enabled,
                "choose_seat_card--chooseSeatCardFeatureHovered--gMO9O": e.enabled && _ === r
              }),
              onMouseEnter: () => p(r),
              onMouseLeave: () => p(null),
              children: [e.enabled ? jsx(_$$l, {
                style: {
                  "--color-icon": "var(--color-icon-secondary)"
                }
              }) : jsx(_$$f3, {
                style: {
                  "--color-icon": "var(--color-text-tertiary)"
                }
              }), jsx("div", {
                children: e.name
              }), e.beta && jsx(_$$E, {
                variant: "defaultOutline",
                children: getI18nString("general.beta")
              }), jsx(r5, {
                isVisible: e.enabled && _ === r,
                targetKey: `feature-${a}-${i}-${r}`,
                productKey: e.productKey
              })]
            }, r))
          })]
        })]
      })]
    })
  });
}
let r8 = {
  VIEW_OPTION: "nux-dynamic-preview-view-option",
  COLLABORATOR_OPTION: "nux-dynamic-preview-collaborator-option",
  DEVELOPER_OPTION: "nux-dynamic-preview-developer-option",
  EXPERT_OPTION: "nux-dynamic-preview-expert-option"
};
let r9 = !1;
function r7({
  figjamEnabled: e,
  slidesEnabled: r,
  devModeEnabled: t,
  sitesEnabled: i,
  makeEnabled: s,
  designEnabled: o
}) {
  return [{
    enabled: !!e,
    name: getI18nString("general.figjam"),
    productKey: FProductAccessType.WHITEBOARD
  }, {
    enabled: !!r,
    name: getI18nString("general.figma_slides"),
    productKey: FProductAccessType.SLIDES
  }, {
    enabled: !!t,
    name: getI18nString("general.dev_mode"),
    productKey: FProductAccessType.DEV_MODE
  }, ...(getFeatureFlags().nux_seat_choice_additional_products ? [{
    enabled: !!i,
    name: getI18nString("general.figma_sites"),
    productKey: FProductAccessType.SITES,
    beta: i
  }, {
    enabled: !!s,
    name: getI18nString("general.figma_rev"),
    productKey: FProductAccessType.FIGMAKE
  }] : []), {
    enabled: !!o,
    name: getI18nString("general.figma_design"),
    productKey: FProductAccessType.DESIGN
  }];
}
function te() {
  let [e, r] = useAtomValueAndSetter(fj);
  let t = Xr(JA);
  let i = e === Gu.VIEW;
  let l = e === ud.COLLABORATOR;
  let a = e === ud.DEVELOPER;
  let d = e === ud.EXPERT;
  let [c] = useAtomWithSubscription(ZE);
  let [u, x] = useState({});
  let h = q5();
  let {
    getUpgradePathway,
    getUpgradeEligibility,
    getIsUpgradeHandlerLoading
  } = wH({
    folderId: h?.folderId || null,
    entryPoint: _$$tc.NUX
  });
  e9();
  _$$R(() => {
    x(N_.reduce((e, r) => {
      let t = getUpgradeEligibility(TI[r]);
      e[r] = t;
      return e;
    }, {}));
  }, [getIsUpgradeHandlerLoading, getUpgradeEligibility], () => !getIsUpgradeHandlerLoading());
  useEffect(() => {
    N_.forEach(e => {
      let r = getUpgradePathway(TI[e]) === _$$J2.AUTO_PATHWAY;
      t(t => ({
        ...t,
        [e]: r
      }));
    });
  }, [getUpgradePathway, t]);
  let g = _$$u();
  function m(e) {
    trackEventAnalytics("NUX Dynamic Preview", {
      eventSubtype: `selected_seat_${e}`
    }, g);
    r(e);
  }
  let E = u[ud.COLLABORATOR] === _$$q.CAN_UPGRADE;
  let b = u[ud.DEVELOPER] === _$$q.CAN_UPGRADE;
  let j = u[ud.EXPERT] === _$$q.CAN_UPGRADE;
  let C = 1;
  E && C++;
  b && C++;
  j && C++;
  getIsUpgradeHandlerLoading() || !(C < 3) || r9 || (r9 = !0, reportError(_$$e.ACTIVATION, Error("Unexpectedly low number of seat options: " + C), {
    extra: {
      canUpgradeCollaborator: E,
      canUpgradeDeveloper: b,
      canUpgradeExpert: j
    }
  }));
  let L = "developer" === c || "designer" === c;
  return jsxs(pA, {
    className: Vz,
    children: [jsx("h1", {
      className: yo,
      children: renderI18nText("seat_selection_in_nux.which_seat_would_you_like")
    }), jsx(Kz, {
      multiple: L ? 6 : 3
    }), jsx("div", {
      className: "x78zum5 xl56j7k",
      children: jsxs("div", {
        ..._$$Ay2.props(tr.cardGrid, L && tr.cardGridRecommended),
        children: [jsx(r4, {
          title: getI18nString("seat_selection_in_nux.view"),
          seatTestId: r8.VIEW_OPTION,
          isSelected: i,
          onSeatSelect: () => m(Gu.VIEW),
          subtitle: getI18nString("seat_selection_in_nux.view_and_comment_access_only"),
          Icon: _$$e4,
          features: r7({})
        }), E && jsx(r4, {
          title: getI18nString("seat_selection_in_nux.collab"),
          seatTestId: r8.COLLABORATOR_OPTION,
          isSelected: l,
          onSeatSelect: () => m(ud.COLLABORATOR),
          subtitle: getI18nString("seat_selection_in_nux.for_brainstorming_diagramming_and_presenting"),
          Icon: _$$M2,
          mode: "whiteboard",
          features: r7({
            figjamEnabled: !0
          })
        }), b && jsx(r4, {
          title: getI18nString("seat_selection_in_nux.dev"),
          seatTestId: r8.DEVELOPER_OPTION,
          isSelected: a,
          onSeatSelect: () => m(ud.DEVELOPER),
          subtitle: getI18nString("seat_selection_in_nux.everything_on_collab_plus_products"),
          Icon: _$$u2,
          isRecommended: "developer" === c,
          mode: "dev-handoff",
          features: r7({
            figjamEnabled: !0,
            slidesEnabled: !0,
            devModeEnabled: !0
          })
        }), j && jsx(r4, {
          title: getI18nString("seat_selection_in_nux.full"),
          seatTestId: r8.EXPERT_OPTION,
          isSelected: d,
          onSeatSelect: () => m(ud.EXPERT),
          subtitle: getI18nString("seat_selection_in_nux.full_access_to_all_figma"),
          Icon: _$$K,
          mode: "design",
          isRecommended: "designer" === c,
          features: r7({
            figjamEnabled: !0,
            slidesEnabled: !0,
            devModeEnabled: !0,
            sitesEnabled: !0,
            makeEnabled: !0,
            designEnabled: !0
          })
        })]
      })
    })]
  });
}
let tr = {
  cardGrid: {
    display: "xrvj5dj",
    gap: "xou54vl",
    rowGap: null,
    columnGap: null,
    justifyContent: "xl56j7k",
    alignItems: "x1qjc9v5",
    gridTemplateColumns: "xl501l6 xqn06x2",
    $$css: !0
  },
  cardGridRecommended: {
    gap: "xq7mh0u",
    rowGap: null,
    columnGap: null,
    $$css: !0
  }
};
let tt = e => {
  switch (e) {
    case "developer":
      return getI18nString("new_user_experience.prev_question_text.quick_question.quick_question_before_you_start_building");
    case "designer":
      return getI18nString("new_user_experience.prev_question_text.quick_question.quick_question_before_you_start_riffing");
    case "product_manager":
      return getI18nString("new_user_experience.prev_question_text.quick_question.quick_question_before_you_start_collaborating");
    case "research":
      return getI18nString("new_user_experience.prev_question_text.quick_question.quick_question_before_you_start_analyzing");
    case "marketer":
      return getI18nString("new_user_experience.prev_question_text.quick_question.quick_question_before_you_start_pitching");
    default:
      return getI18nString("new_user_experience.prev_question_text.quick_question.quick_question_before_you_jump_in");
  }
};
function ti() {
  let e = useAtomWithSubscription(Q7);
  let [r] = useAtomWithSubscription(ZE);
  let t = useAtomWithSubscription(Xw);
  let i = R6();
  switch (t) {
    case void 0:
      if (i?.name) return getI18nString("new_user_experience.prev_question_text.before_you_join", {
        resourceName: i.name
      });
      return "";
    case pu.NAME_SELF:
      if (!e) return "";
      return getI18nString("new_user_experience.prev_question_text.hello_name", {
        userName: e
      });
    case pu.WHAT_DO_YOU_DO:
    case pu.WHAT_DO_YOU_DO_V2:
      return tt(r);
    default:
      return "";
  }
}
function ts({
  questionKey: e,
  questionTitle: r,
  questionSubtitle: t,
  ...i
}) {
  let o = ti();
  let l = useAtomWithSubscription($B);
  let a = getIsAndroidOrIphoneNotFigmaMobile();
  if (useAtomWithSubscription(YX)) return jsxs("div", {
    className: "x78zum5 xdt5ytf",
    children: [jsx("div", {
      className: "x1akne3o xkh2ocl xclx6tv x1vzchgk x1j61x8r x123g5w4 xt5tia6 x19pvhnb",
      children: r
    }), t && jsx("div", {
      className: "x1n0bwc9 xclx6tv x17akokd x1j61x8r x1qxcl5b xno9bf3 xyh1zc2",
      children: t
    }), jsx(Kz, {
      multiple: 3
    }), jsx("form", {
      children: i.children
    }), jsx(Kz, {
      multiple: 3
    })]
  });
  let c = a ? {
    questionForm: PJ,
    previousQuestionText: _$$rv,
    questionTitle: xx,
    questionSubtitle: dD
  } : {
    questionForm: Vz,
    previousQuestionText: XK,
    questionTitle: HN,
    questionSubtitle: $r
  };
  return jsxs(pA, {
    className: Vz,
    children: [l.data && o && jsx("p", {
      className: c.previousQuestionText,
      children: o
    }), jsx("h1", {
      tabIndex: -1,
      className: c.questionTitle,
      children: r
    }), t && jsx("div", {
      className: c.questionSubtitle,
      children: t
    }), jsx(Kz, {
      multiple: a ? 4 : 6
    }), jsx("form", {
      className: d()({
        [HS]: a
      }),
      children: i.children
    }), jsx(Kz, {
      multiple: a ? 4 : 6
    })]
  });
}
function tl() {
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = {
    questionKey: "have_used_figma_products_before_v1",
    options: new Set(["yes_many_times", "yes_a_few_times", "no_first_time"]),
    questionTitle: getI18nString("user_onboarding_signals.v2.question.have_you_used_figma_products_before"),
    questionSubtitle: getI18nString("user_onboarding_signals.v2.description.select_just_one"),
    getOptionDisplay: e => {
      switch (e) {
        case "yes_many_times":
          return getI18nString("user_onboarding_signals.v2.answer.yes_many_times");
        case "yes_a_few_times":
          return getI18nString("user_onboarding_signals.v2.answer.yes_a_few_times");
        case "no_first_time":
          return getI18nString("user_onboarding_signals.v2.answer.no_its_my_first_time");
      }
    }
  };
  let [l, a] = useAtomValueAndSetter(X9);
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsx(_$$L, {
      isSingleSelect: !0,
      questionKey,
      options,
      selectedOptions: l,
      onItemsChange: a,
      getOptionDisplay
    })
  });
}
function tn() {
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = {
    questionKey: "have_you_used_digital_whiteboards_before_v1",
    options: new Set(["no_first_time", "yes_a_few_times", "yes_many_times"]),
    questionTitle: getI18nString("user_onboarding_signals_figjam.v2.question.have_you_used_digital_whiteboards_before"),
    questionSubtitle: getI18nString("user_onboarding_signals.v2.description.select_just_one"),
    getOptionDisplay: e => {
      switch (e) {
        case "no_first_time":
          return getI18nString("user_onboarding_signals.v2.answer.no_its_my_first_time");
        case "yes_a_few_times":
          return getI18nString("user_onboarding_signals.v2.answer.yes_a_few_times");
        case "yes_many_times":
          return getI18nString("user_onboarding_signals.v2.answer.yes_many_times");
      }
    }
  };
  let [l, a] = useAtomValueAndSetter(bT);
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsx(_$$L, {
      isSingleSelect: !0,
      questionKey,
      options,
      selectedOptions: l,
      onItemsChange: a,
      getOptionDisplay
    })
  });
}
let ta = atom(() => {
  let e = shuffle(["work", "school", "personal_project", "learning_design"]);
  e.push("something_else");
  return {
    questionKey: "how_do_you_plan_to_use_figma_v1",
    options: new Set(e),
    getOptionDisplay: e => {
      switch (e) {
        case "work":
          return getI18nString("user_onboarding_signals.v2.answer.work");
        case "school":
          return getI18nString("user_onboarding_signals.v2.answer.school");
        case "personal_project":
          return getI18nString("user_onboarding_signals.v2.answer.personal_project");
        case "learning_design":
          return getI18nString("user_onboarding_signals.v2.answer.learning_design");
        case "something_else":
          return getI18nString("user_onboarding_signals.v2.answer.something_else");
      }
    }
  };
});
function td() {
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = function () {
    let {
      questionKey: _questionKey2,
      options: _options,
      getOptionDisplay: _getOptionDisplay
    } = useAtomWithSubscription(ta);
    return {
      questionKey: _questionKey2,
      options: _options,
      questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.how_do_you_plan_to_use_figma"),
      questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.question.how_do_you_plan_to_use_figma.description"),
      getOptionDisplay: _getOptionDisplay
    };
  }();
  let [l, a] = useAtomValueAndSetter(PG);
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsx(_$$L, {
      isSingleSelect: !0,
      questionKey,
      options,
      selectedOptions: l,
      onItemsChange: a,
      getOptionDisplay
    })
  });
}
function tc() {
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = {
    questionKey: "how_many_people_work_at_organization_v1",
    options: new Set(["just_me", "2-100", "101-500", "501-5000", "over_5000"]),
    questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.how_many_people_work_at_your_organization"),
    questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.give_use_your_best_guesstimate"),
    getOptionDisplay: e => {
      switch (e) {
        case "just_me":
          return getI18nString("user_onboarding_signals.v2.answer.just_me");
        case "2-100":
          return getI18nString("user_onboarding_signals.v2.answer.2_100");
        case "101-500":
          return getI18nString("user_onboarding_signals.v2.answer.101_500");
        case "501-5000":
          return getI18nString("user_onboarding_signals.v2.answer.501_5000");
        case "over_5000":
          return getI18nString("user_onboarding_signals.v2.answer.over_5000");
      }
    }
  };
  let [l, a] = useAtomValueAndSetter(VQ);
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsx(_$$L, {
      isSingleSelect: !0,
      questionKey,
      options,
      selectedOptions: l,
      onItemsChange: a,
      getOptionDisplay
    })
  });
}
function tm(e) {
  let r = useDispatch();
  let {
    joinLink
  } = e;
  if (joinLink.status !== _$$r2.SUCCESS || joinLink.status === _$$r2.SUCCESS && (joinLink.value.disabled || !joinLink.value.link)) return null;
  let i = null;
  joinLink.status === _$$r2.SUCCESS && joinLink.value.link && (i = jx(joinLink.value.link));
  return jsxs(_$$o, {
    href: "#",
    onClick: () => {
      i && r(_$$LN({
        teamId: e.team.id,
        url: i,
        source: Kq.NUX_INVITE_COLLABORATOR
      }));
    },
    trackingProperties: {
      trackingDescriptor: _$$c2.COPY_LINK_TO_INVITE
    },
    trusted: !0,
    className: `team_welcome--copyLinkText--NZlNM ${e.adtlClassName}`,
    children: [jsx(_$$B2, {
      svg: _$$A4
    }), renderI18nText("rcs.team_welcome.copy_to_invite")]
  });
}
function tE(e) {
  let [r, t] = useState([""]);
  let [i, l] = useAtomValueAndSetter($l);
  let a = getIsAndroidOrIphoneNotFigmaMobile();
  let c = w5(e.team) ? _$$e3.VIEWER : _$$e3.EDITOR;
  let x = _$$f4(() => e.team ? wZ(e.team.id, c) : Promise.resolve(null), [e.team, c]);
  let h = (e, t) => {
    let s = [...i];
    let o = [...i];
    o.splice(t, 1);
    o.every(e => xf(e.trim())) && (s.push(""), r.push(""));
    s[t] = e.target.value;
    ("" === s[t] || xf(s[t].trim())) && (r[t] = "");
    l(s);
  };
  let _ = e => {
    let s = [...r];
    s[e] = i[e] && !xf(i[e].trim()) ? getI18nString("rcs.team_welcome.not_a_valid_address") : "";
    t(s);
  };
  let p = a ? {
    questionForm: PJ,
    previousQuestionText: _$$rv,
    questionTitle: xx,
    questionSubtitle: dD,
    scrollContainer: h0,
    teamInviteLink: DM
  } : {
    questionForm: Vz,
    previousQuestionText: XK,
    questionTitle: HN,
    questionSubtitle: $r,
    scrollContainer: jG,
    teamInviteLink: Bi
  };
  return e.team ? jsxs("div", {
    className: p.questionForm,
    children: [jsx("h1", {
      className: p.questionTitle,
      children: getI18nString("new_user_experience.invite_your_collaborators.v2.title")
    }), jsx("div", {
      className: p.questionSubtitle,
      children: getI18nString("new_user_experience.invite_your_collaborators.v2.description")
    }), jsx(Kz, {
      multiple: a ? 4 : 6
    }), jsxs("div", {
      className: p.scrollContainer,
      children: [jsx("div", {
        className: nc,
        children: i.map((e, t) => jsx(F0, {
          "aria-describedby": r[t] ? `email-error-${t}` : void 0,
          "aria-invalid": !!r[t],
          "aria-label": getI18nString("rcs.team_welcome.collaborator_email_input_label", {
            index: t + 1
          }),
          autoFocus: !a && 0 === t,
          className: d()({
            [ZA]: !0,
            [Bu]: !!r[t]
          }),
          "data-testid": `nux-invite-input-${t}`,
          name: "emailField-" + t,
          onBlur: () => _(t),
          onChange: e => h(e, t),
          placeholder: xo[t],
          value: e
        }, t))
      }), jsx(tm, {
        team: e.team,
        joinLink: x,
        adtlClassName: p.teamInviteLink
      }), jsx(Kz, {
        multiple: a ? 4 : 6
      })]
    })]
  }) : null;
}
let tb = "what_do_you_do--otherInput--pU5SN";
let tj = "what_do_you_do--otherInputMobile--oSleE";
function tC() {
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = CR();
  let [a, c] = useAtomValueAndSetter(ZE);
  let [x, h] = useAtomValueAndSetter(_$$eL);
  let _ = Xr(SL);
  let p = Array.from(options);
  useEffect(() => {
    _(p);
  }, [_, p]);
  let f = getIsAndroidOrIphoneNotFigmaMobile();
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsx(fu, {
      name: "Job Title Options",
      properties: {
        jobTitleList: p.toString()
      },
      children: jsx(_$$L, {
        isSingleSelect: !0,
        questionKey,
        options,
        selectedOptions: a,
        onItemsChange: e => {
          c(e);
          h("");
        },
        getOptionDisplay,
        endingOption: a.has("something_else") ? jsx(ks, {
          autoFocus: !0,
          className: d()(tb, {
            [tj]: f
          }),
          dataTestId: "custom_job_title_input",
          placeholder: getI18nString("user_onboarding_signals.v1.answer.other.placeholder"),
          value: x,
          onChange: e => h(e.currentTarget.value)
        }) : void 0
      })
    })
  });
}
function tL() {
  let [e] = useAtomWithSubscription(PG);
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = CR(e);
  let c = Oc();
  let x = N();
  let [h, _] = useAtomValueAndSetter(ZE);
  let [p, f] = useAtomValueAndSetter(_$$eL);
  let g = useAtomWithSubscription(YX);
  let m = Xr(SL);
  let E = Array.from(options);
  useEffect(() => {
    m(E);
  }, [m, E]);
  let b = getIsAndroidOrIphoneNotFigmaMobile();
  let C = "school" !== e && h.has("something_else");
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsx(fu, {
      name: "Job Title Options",
      properties: {
        jobTitleList: E.toString()
      },
      children: jsx(_$$L, {
        isSingleSelect: !0,
        questionKey,
        options,
        selectedOptions: h,
        onItemsChange: r => {
          if (_(r), f(""), c && "school" !== e) {
            let [e] = r;
            x({
              jobTitle: e
            });
          }
        },
        endingOption: C ? jsx(ks, {
          autoFocus: !0,
          className: g ? "what_do_you_do--modalOtherInput--OWc3s" : d()(tb, {
            [tj]: b
          }),
          dataTestId: "custom_job_title_input",
          placeholder: getI18nString("user_onboarding_signals.v1.answer.other.placeholder"),
          value: p,
          onChange: e => f(e.currentTarget.value)
        }) : void 0,
        getOptionDisplay
      })
    })
  });
}
let tS = new Set(["US", "BR", "MX", "NG", "SG", "JP", "MY", "PH"]);
let tN = forwardRef(function (e, r) {
  return jsxs("div", {
    className: "branded_checkbox--container--QANSx",
    children: [jsxs("span", {
      className: "branded_checkbox--root--Vbbqu",
      "data-disabled": !!e.disabled || void 0,
      children: [jsx(CheckboxPrimitive, {
        ref: r,
        ...e,
        className: "branded_checkbox--checkbox--xEyjK"
      }), jsx("span", {
        className: "branded_checkbox--visuals---Ms-i",
        children: jsx(_$$g3, {
          className: "branded_checkbox--iconCheck--ht1DA"
        })
      })]
    }), jsx("label", {
      htmlFor: e.id,
      children: e.label
    })]
  });
});
let tT = {
  modalCheckboxText: {
    ..._$$g2.textBodyMediumStrong,
    userSelect: "x87ps6o",
    $$css: !0
  },
  modalOptInDesccription: {
    ..._$$g2.textBodySmall,
    color: "x1akne3o",
    $$css: !0
  },
  checkboxText: {
    ..._$$g2.textBodyLarge,
    userSelect: "x87ps6o",
    $$css: !0
  },
  standardDisclaimer: {
    ..._$$g2.textBodyMedium,
    color: "x1akne3o",
    $$css: !0
  },
  maxWidth400: {
    maxWidth: "x1j9u4d2",
    $$css: !0
  },
  textCenter: {
    textAlign: "x2b8uid",
    $$css: !0
  }
};
function tR(e) {
  var r;
  r = getInitialOptions().iso_code ?? "";
  let t = tS.has(r);
  let [i, l] = useAtomValueAndSetter(BG);
  let a = Xr(kd);
  let [d] = useState(!!_$$f("tos_accepted"));
  let c = !!getInitialOptions().tos_agreement_required && !d;
  useEffect(() => {
    c && a(!0);
  }, [c, a]);
  useEffect(() => {
    t && l(!0);
  }, [t, l]);
  let u = getI18nString("auth.sign-up.auto-marketing-email-opt-in-additional-terms");
  let x = getI18nString("auth.marketing.subscribe-to-figma-tips-and-updates-with-indicator", {
    indicator: ""
  });
  let h = getI18nString("auth.marketing.subscribe-to-figma-tips-and-updates-terms-with-indicator", {
    indicator: ""
  });
  if (e.isModalNux) return jsxs(Fragment, {
    children: [jsx(Kz, {
      multiple: 3
    }), jsx("div", {
      children: t ? jsx("div", {
        ..._$$Ay2.props(tT.modalOptInDesccription),
        children: u
      }) : jsxs(Fragment, {
        children: [jsx(Checkbox, {
          checked: i,
          onChange: e => l(e),
          label: jsx(Label, {
            ..._$$Ay2.props(tT.modalCheckboxText),
            children: x
          })
        }), jsx("div", {
          ..._$$Ay2.props(tT.modalOptInDesccription),
          children: h
        })]
      })
    })]
  });
  let _ = jsx("span", {
    ..._$$Ay2.props(tT.standardDisclaimer),
    children: renderI18nText("new_user_experience.what_is_your_name.tos_agreement", {
      tos_link: jsx(_$$_, {
        href: "/legal/tos",
        newTab: !0,
        className: "x1quhyk7 x1bvjpef",
        children: getI18nString("new_user_experience.what_is_your_name.tos_link")
      })
    })
  });
  return jsxs(Fragment, {
    children: [jsx(Kz, {
      multiple: e.isModalNux ? 3 : e.isMobileViewport ? t ? 2 : 3 : 6
    }), jsx("div", {
      children: t ? jsxs("div", {
        ..._$$Ay2.props(tT.standardDisclaimer, e.isMobileViewport && tT.textCenter),
        children: [c && _, jsx(Kz, {
          multiple: 1
        }), u]
      }) : jsxs(Fragment, {
        children: [jsx(tN, {
          id: "opt_in_email",
          defaultChecked: i,
          onChange: e => l(e),
          label: jsx("span", {
            ..._$$Ay2.props(tT.checkboxText),
            children: x
          })
        }), jsx(Kz, {
          multiple: 1
        }), jsx("div", {
          ..._$$Ay2.props(tT.standardDisclaimer, tT.maxWidth400),
          children: h
        }), c && jsxs(Fragment, {
          children: [jsx("hr", {
            className: "xhv1u6h x7z60cl x1bl8fvc x1y0btm7"
          }), _]
        })]
      })
    })]
  });
}
function tI() {
  let e = useRef(null);
  let [r, t] = useAtomValueAndSetter(Q7);
  let i = iZ();
  let l = i ? i.email.split("@")[0] : "";
  let a = ti();
  let d = useAtomWithSubscription($B);
  let c = useAtomWithSubscription(YX);
  let x = getIsAndroidOrIphoneNotFigmaMobile();
  let h = x ? {
    questionForm: PJ,
    previousQuestionText: _$$rv,
    questionTitle: xx,
    questionSubtitle: dD
  } : {
    questionForm: Vz,
    previousQuestionText: XK,
    questionTitle: HN,
    questionSubtitle: $r
  };
  let _ = getI18nString("new_user_experience.what_is_your_name.v2.title");
  let p = getI18nString("new_user_experience.what_is_your_name.v2.description");
  return c ? jsx(tM, {
    questionTitle: _,
    questionSubtitle: p
  }) : jsxs("div", {
    className: h.questionForm,
    children: [d.data && a && jsx("p", {
      className: h.previousQuestionText,
      children: a
    }), jsx("h1", {
      className: h.questionTitle,
      children: _
    }), jsx("div", {
      className: h.questionSubtitle,
      children: p
    }), jsx(Kz, {
      multiple: x ? 4 : 6
    }), jsx(F0, {
      ref: e,
      "aria-label": getI18nString("new_user_experience.what_is_your_name.v2.title.label"),
      autoCorrect: "off",
      autoFocus: !0,
      className: Pm,
      "data-testid": F$.nameInput,
      maxLength: 70,
      name: "name",
      onChange: e => t(e.currentTarget.value),
      placeholder: l,
      value: r
    }), !isGovCluster() && jsx(tR, {
      isMobileViewport: x
    }), jsx(Kz, {
      multiple: x ? 4 : 6
    })]
  });
}
function tM({
  questionTitle: e,
  questionSubtitle: r
}) {
  let t = useRef(null);
  let [i, l] = useAtomValueAndSetter(Q7);
  let a = iZ();
  let d = a ? a.email.split("@")[0] : "";
  return jsxs("div", {
    className: "x78zum5 xdt5ytf",
    children: [jsx("h1", {
      className: "x1akne3o xkh2ocl xclx6tv x1vzchgk x1j61x8r x123g5w4 xt5tia6 x19pvhnb",
      children: e
    }), jsx(Kz, {}), jsx("div", {
      className: "x1n0bwc9 xclx6tv x17akokd x1j61x8r x1qxcl5b xno9bf3 xyh1zc2",
      children: r
    }), jsx(Kz, {
      multiple: 3
    }), jsx(F0, {
      ref: t,
      "aria-label": getI18nString("new_user_experience.what_is_your_name.v2.title.label"),
      autoCorrect: "off",
      autoFocus: !0,
      className: _t,
      "data-testid": F$.nameInput,
      maxLength: 70,
      name: "name",
      onChange: e => l(e.currentTarget.value),
      placeholder: d,
      value: i
    }), !isGovCluster() && jsx(tR, {
      isModalNux: !0,
      isMobileViewport: !1
    }), jsx(Kz, {
      multiple: 3
    })]
  });
}
let tP = {
  disclaimerContainer: {
    padding: "x1ff1495",
    marginTop: "xqui205",
    borderRadius: "x1sxf85j",
    background: "x1sjmt1f",
    color: "x1akne3o",
    fontFamily: "xclx6tv",
    fontSize: "x17akokd",
    fontStyle: "x1j61x8r",
    fontWeight: "x1qxcl5b",
    lineHeight: "xno9bf3",
    letterSpacing: "xqp8s7e",
    $$css: !0
  }
};
function tA() {
  let e = useAtomWithSubscription(_$$r);
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = Q({
    isStudent: e
  });
  let a = useAtomWithSubscription(YX);
  let [d, c] = useAtomValueAndSetter(qV);
  let x = getIsAndroidOrIphoneNotFigmaMobile();
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsxs(Fragment, {
      children: [jsx(_$$L, {
        isSingleSelect: !0,
        questionKey,
        options,
        selectedOptions: d,
        onItemsChange: c,
        getOptionDisplay
      }), e ? jsx("div", {
        className: a ? void 0 : _$$s.font12.bRadius5.colorBgSecondary.p12.mt20.$$if(x, _$$s.alignCenter).$,
        ..._$$Ay2.props(a && tP.disclaimerContainer),
        children: renderI18nText("new_user_experience.user_onboarding_signals.disclaimer.old_enough_to_consent.v2", {
          tos: jsx(_$$N, {
            href: getLocalizedPath("/legal/tos/"),
            newTab: !0,
            children: renderI18nText("new_user_experience.user_onboarding_signals.disclaimer.old_enough_to_consent.v2.tos")
          })
        })
      }) : null]
    })
  });
}
function tF() {
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = {
    questionKey: "what_will_you_use_figjam_for_v1",
    options: new Set(["brainstorms", "meetings", "diagramming", "projects", "learning"]),
    questionTitle: getI18nString("user_onboarding_signals_figjam.v2.question.what_will_you_use_figjam_for"),
    questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.select_everything_that_applies"),
    getOptionDisplay: e => {
      switch (e) {
        case "brainstorms":
          return getI18nString("user_onboarding_signals_figjam.v2.answer.brainstorms");
        case "meetings":
          return getI18nString("user_onboarding_signals_figjam.v2.answer.meetings");
        case "diagramming":
          return getI18nString("user_onboarding_signals_figjam.v2.answer.diagramming");
        case "projects":
          return getI18nString("user_onboarding_signals_figjam.v2.answer.projects");
        case "learning":
          return getI18nString("user_onboarding_signals_figjam.v2.answer.learning");
      }
    }
  };
  let [l, a] = useAtomValueAndSetter(Nz);
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsx(_$$L, {
      isSingleSelect: !1,
      questionKey,
      options,
      selectedOptions: l,
      onItemsChange: a,
      getOptionDisplay
    })
  });
}
let tB = atom(() => {
  let e = shuffle(["company", "agency", "freelance"]);
  e.push("something_else");
  return {
    questionKey: "where_or_how_do_you_work_v1",
    options: new Set(e),
    getOptionDisplay: e => {
      switch (e) {
        case "company":
          return getI18nString("user_onboarding_signals.v2.answer.company");
        case "freelance":
          return getI18nString("user_onboarding_signals.v2.answer.freelance");
        case "agency":
          return getI18nString("user_onboarding_signals.v2.answer.agency");
        case "something_else":
          return getI18nString("user_onboarding_signals.v2.answer.something_else");
      }
    }
  };
});
function tD() {
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = function () {
    let {
      questionKey: _questionKey3,
      options: _options2,
      getOptionDisplay: _getOptionDisplay2
    } = useAtomWithSubscription(tB);
    return {
      questionKey: _questionKey3,
      options: _options2,
      questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.where_or_how_do_you_work"),
      questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.pick_the_one_that_feels_closest_to_your_situation"),
      getOptionDisplay: _getOptionDisplay2
    };
  }();
  let [l, a] = useAtomValueAndSetter(xO);
  return jsx(ts, {
    questionKey,
    questionTitle,
    questionSubtitle,
    children: jsx(_$$L, {
      isSingleSelect: !0,
      questionKey,
      options,
      selectedOptions: l,
      onItemsChange: a,
      getOptionDisplay
    })
  });
}
function tH(e) {
  switch (e.currentQuestion) {
    case pu.NAME_SELF:
      return jsx(tI, {});
    case pu.HOW_DO_YOU_PLAN_TO_USE_FIGMA:
      return jsx(td, {});
    case pu.WHAT_DO_YOU_DO:
      return jsx(tC, {});
    case pu.WHAT_DO_YOU_DO_V2:
      return jsx(tL, {});
    case pu.WHERE_OR_HOW_DO_YOU_WORK:
      return jsx(tD, {});
    case pu.WHAT_TYPE_OR_LEVEL_OF_SCHOOL:
      return jsx(tA, {});
    case pu.HOW_MANY_PEOPLE_WORK_IN_ORGANIZATION:
      return jsx(tc, {});
    case pu.INVITE_COLLABORATORS:
      return jsx(tE, {
        team: e.team
      });
    case pu.WHAT_WILL_YOU_USE_FIGJAM_FOR:
      return jsx(tF, {});
    case pu.HAVE_USED_FIGMA_PRODUCTS_BEFORE:
      return jsx(tl, {});
    case pu.HAVE_USED_WHITEBOARDS_BEFORE:
      return jsx(tn, {});
    case pu.CHOOSE_PLAN:
      if (e.isMobileViewport) return jsx(rV, {
        dismissModal: e.dismissModal,
        team: e.team
      });
      return jsx(rI, {
        hasFigJamIntent: e.hasFigJamIntent
      });
    case pu.CHOOSE_PRODUCT:
      return jsx(_$$d, {});
    case pu.WHICH_SEAT_WOULD_YOU_LIKE:
      return jsx(te, {});
    default:
      return throwTypeError(e.currentQuestion);
  }
}
let tV = forwardRef(function (e, r) {
  es();
  return jsx(fu, {
    name: e.currentQuestion,
    properties: {
      ...VD(),
      signupSource: e.signupSource
    },
    children: jsxs("div", {
      className: "nux_dynamic_preview_mobile_signal_collection_step--signalCollectionStepContainer--OOE-Q",
      "data-testid": F$.question,
      children: [jsx(e3, {
        hasFigJamIntent: e.hasFigJamIntent,
        ref: r
      }), jsx(Kz, {
        multiple: 3
      }), jsx(tH, {
        currentQuestion: e.currentQuestion,
        team: e.team,
        dismissModal: e.dismissModal,
        hasFigJamIntent: "whiteboard" === e.signupSource,
        isMobileViewport: !0
      }), e.currentQuestion !== pu.CHOOSE_PLAN && jsx(eJ, {
        mobile: !0,
        dismissModal: e.dismissModal,
        signupSource: e.signupSource,
        onNextQuestion: e.onNextQuestion,
        currentQuestion: e.currentQuestion,
        team: e.team,
        formatAndSubmitSignalCollectionResponses: e.formatAndSubmitSignalCollectionResponses
      }), jsx(Kz, {
        multiple: 2
      })]
    })
  });
});
function tG(e) {
  return jsxs(_$$e2, {
    "data-testid": OO,
    onClick: e.onBackButtonClick,
    className: "nux_dynamic_preview_mobile_top_bar_back_button--backButton--cwWpz",
    "aria-label": getI18nString("new_user_experience.button.back"),
    RUMEnabled: !0,
    children: [jsx(_$$C, {
      className: "nux_dynamic_preview_mobile_top_bar_back_button--backButtonIcon--VNHHs"
    }), jsx("span", {
      className: "nux_dynamic_preview_mobile_top_bar_back_button--backButtonText--4C44V",
      children: renderI18nText("new_user_experience.button.back")
    })]
  });
}
function tW(e) {
  let r = Xr(ZE);
  let t = Xr(X9);
  let i = Xr(Q7);
  let o = useAtomWithSubscription(ni);
  let l = () => e.currentQuestion === pu.HAVE_USED_FIGMA_PRODUCTS_BEFORE;
  let a = () => {
    switch (e.currentQuestion) {
      case pu.WHAT_DO_YOU_DO:
      case pu.WHAT_DO_YOU_DO_V2:
        r(new Set());
        break;
      case pu.HAVE_USED_FIGMA_PRODUCTS_BEFORE:
        t(new Set());
        break;
      default:
        return;
    }
  };
  return (0, zy).concat(oC).includes(e.currentQuestion) ? null : jsx(eX, {
    variant: "ghost",
    mobile: e.isMobileViewport,
    onClick: () => {
      a();
      e.currentQuestion === pu.NAME_SELF && i("");
      l() && e.formatAndSubmitSignalCollectionResponses();
      e.currentQuestion === pu.CHOOSE_PRODUCT && (e.dismissModal(), "default" !== o && Ay.reload("NUX completion refresh"));
      e.onNextQuestion();
    },
    trackingProperties: {
      signupSource: e.signupSource,
      trackingDescriptor: _$$c2.SKIP
    },
    "data-testid": F$.skipBtn,
    children: getI18nString("new_user_experience.button.skip")
  });
}
function tU(e) {
  let r = useAtomWithSubscription(S0);
  let t = useAtomWithSubscription(bk);
  let i = useAtomWithSubscription(uN);
  let o = t ? r.indexOf(t) + 1 : 0;
  let l = r.length;
  let a = e.isMobileViewport ? 120 : 128;
  let c = Math.min(o / l * a, a);
  let u = pV(i, e.hasFigJamIntent);
  return jsxs("div", {
    className: d()({
      "progress_indicator--progressIndicator--8Ck-S": !e.isMobileViewport,
      "progress_indicator--progressIndicatorMobile--o1cid": e.isMobileViewport
    }),
    ...u,
    children: [jsx("div", {
      className: d()({
        "progress_indicator--filledSection--qxON7": !0,
        "progress_indicator--borderRightRadius--FU-Am": c >= a
      }),
      style: {
        width: `${c}px`
      }
    }), jsx(_$$E2, {
      children: renderI18nText("nux.progress_indicator.steps", {
        currentStep: o + 1,
        totalSteps: l
      })
    })]
  });
}
let t$ = "nux_dynamic_preview_mobile_top_bar--mobileTopBarCta---OEEu";
function tz(e) {
  return jsxs("div", {
    className: d()("nux_dynamic_preview_mobile_top_bar--mobileTopBar--WO5v9", {
      "nux_dynamic_preview_mobile_top_bar--mobileTopBarIsScrolling--ksKBg": e.showStickyHeaderBottomBorder
    }),
    children: [jsx("div", {
      className: d()(t$, "nux_dynamic_preview_mobile_top_bar--backButton--yrDXJ"),
      children: e.showBackButton && jsx(tG, {
        onBackButtonClick: e.onBackButtonClick
      })
    }), jsx("div", {
      className: "nux_dynamic_preview_mobile_top_bar--progressIndicator--0qWeQ",
      children: jsx(tU, {
        hasFigJamIntent: "whiteboard" === e.signupSource,
        isMobileViewport: !0
      })
    }), jsx("div", {
      className: t$,
      children: jsx(tW, {
        currentQuestion: e.currentQuestion,
        dismissModal: e.dismissModal,
        signupSource: e.signupSource,
        onNextQuestion: e.onNextQuestion,
        formatAndSubmitSignalCollectionResponses: e.formatAndSubmitSignalCollectionResponses,
        isMobileViewport: !0
      })
    })]
  });
}
function tY(e) {
  let r = J();
  let [t, i] = useState(!1);
  let l = useRef(null);
  let n = useCallback(e => {
    i(!e.isIntersecting);
  }, [i]);
  _$$g(l, n, {
    root: null,
    rootMargin: "-112px 0px 0px 0px",
    threshold: 0
  });
  useEffect(() => {
    l.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [e.question.index]);
  _$$h2();
  let a = pV("", e.hasFigJamIntent);
  return e.question.value ? jsx("div", {
    className: "nux_dynamic_preview_view--parentContainerMobile--7S1gd",
    ...a,
    "data-testid": Io,
    "data-question-id": e.question.index,
    children: jsx("div", {
      className: "nux_dynamic_preview_view--leftScrollContainer--TPJ7t",
      children: jsxs("div", {
        className: "nux_dynamic_preview_view--leftContainerMobile--LQg9f",
        children: [jsx(tz, {
          currentQuestion: e.question.value,
          dismissModal: e.dismissModal,
          formatAndSubmitSignalCollectionResponses: r,
          onBackButtonClick: e.moveToPreviousQuestion,
          onNextQuestion: e.moveToNextQuestion,
          showBackButton: e.showBackButton,
          showStickyHeaderBottomBorder: t,
          signupSource: e.signupSource
        }), jsx(tV, {
          currentQuestion: e.question.value,
          dismissModal: e.dismissModal,
          formatAndSubmitSignalCollectionResponses: r,
          hasFigJamIntent: e.hasFigJamIntent,
          onNextQuestion: e.moveToNextQuestion,
          signupSource: e.signupSource,
          team: e.team,
          ref: l
        })]
      })
    })
  }) : null;
}
let t8 = {
  languagePicker: {
    width: "x14atkfc",
    minWidth: "x1lycxc0",
    height: "xqvfhly",
    alignItems: "x6s0dn4",
    display: "x3nfvp2",
    position: "x1n2onr6",
    marginLeft: "x8x9d4c",
    marginRight: "xl6c0mu",
    marginInlineStart: null,
    marginInlineEnd: null,
    marginTop: "x8rgt9n",
    $$css: !0
  },
  languageButton: {
    border: "x1gs6z28",
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
    padding: "x1717udv",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    cursor: "x1ypdohk",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    color: "x1quhyk7",
    position: "x1n2onr6",
    width: "xh8yej3",
    $$css: !0
  },
  languageIcon: {
    "--color-icon": "x1kuamz9",
    position: "x1n2onr6",
    marginRight: "xl010v5",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  },
  languageTextContainer: {
    justifyContent: "x1nhvcw1",
    alignItems: "x6s0dn4",
    gap: "x1jnr06f",
    rowGap: null,
    columnGap: null,
    display: "x78zum5",
    whiteSpace: "xuxw1ft",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "xlyipyv",
    flex: "xc8qplx",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    minWidth: "xeuugli",
    $$css: !0
  },
  languageText: {
    textAlign: "x1hr2gdg",
    color: "x1quhyk7",
    fontSize: "x1j61zf2",
    fontWeight: "x10p5zqr",
    fontFamily: "x1a3z175",
    whiteSpace: "xuxw1ft",
    direction: "xzyj77d",
    textOverflow: "xlyipyv",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    flex: "x12lumcd",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    minWidth: "xeuugli",
    height: "x5yr21d",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    paddingTop: "x1iorvi4",
    paddingBottom: "xjkvuk6",
    $$css: !0
  },
  icon24ChevronDown: {
    "--color-icon": "x1kuamz9",
    flexShrink: "x2lah0s",
    marginLeft: "x1iog12x",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  },
  menuItem: {
    display: "x78zum5",
    width: "x1oysuqx",
    $$css: !0
  },
  menuItemCheckIcon: {
    width: "x10lmdbm",
    display: "x78zum5",
    $$css: !0
  }
};
function t9() {
  return jsx("svg", {
    width: "32",
    height: "33",
    viewBox: "0 0 32 33",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.9998 7.83341C11.9998 7.46522 12.2983 7.16675 12.6665 7.16675C13.0347 7.16675 13.3332 7.46522 13.3332 7.83341V9.83342L17.9998 9.83341C18.368 9.83341 18.6665 10.1319 18.6665 10.5001C18.6665 10.8683 18.368 11.1667 17.9998 11.1667H16.2911L16.2188 11.3805C15.5474 13.3639 14.7712 14.7661 13.5125 16.3236L15.5476 18.8674C15.6962 19.0532 15.7346 19.3041 15.6482 19.5259C15.4618 20.0043 14.8272 20.1013 14.5064 19.7003L12.6309 17.356C11.7126 18.3826 10.5782 19.5294 9.1382 20.9712C8.87801 21.2317 8.4559 21.232 8.19539 20.9718C7.93488 20.7116 7.93462 20.2895 8.19481 20.029C9.72299 18.4989 10.8793 17.3259 11.7855 16.2992L9.61267 13.5832C9.26346 13.1467 9.57424 12.5001 10.1333 12.5001C10.3358 12.5001 10.5273 12.5921 10.6538 12.7503L12.6582 15.2558C13.6888 13.9413 14.3226 12.7646 14.8823 11.1667H7.33317C6.96498 11.1667 6.6665 10.8683 6.6665 10.5001C6.6665 10.1319 6.96498 9.83341 7.33317 9.83341L11.9998 9.83342V7.83341ZM18.7178 15.577C18.8213 15.3286 19.064 15.1667 19.3332 15.1667H19.9998C20.269 15.1667 20.5117 15.3286 20.6152 15.577L22.8374 20.9103L23.9486 23.577C24.0902 23.9169 23.9294 24.3072 23.5896 24.4488C23.2497 24.5904 22.8594 24.4297 22.7178 24.0898L21.7776 21.8334H17.5554L16.6152 24.0898C16.4736 24.4297 16.0833 24.5904 15.7434 24.4488C15.4036 24.3072 15.2428 23.9169 15.3845 23.577L16.4956 20.9103L18.7178 15.577ZM18.1109 20.5001H21.2221L19.6665 16.7667L18.1109 20.5001Z",
      fill: "currentColor"
    })
  });
}
function t7({
  setIsLoading: e,
  team: r
}) {
  let [t, i] = useState(() => {
    let e = getI18nState();
    return e?.getPrimaryLocale(!1) || defaultLanguage;
  });
  let {
    getTriggerProps,
    manager
  } = _$$b3({
    initialPosition: "right-end"
  });
  let d = Xr(ni);
  let c = TA();
  let u = iZ();
  let x = !_$$f("not_gen_0");
  let h = getInitialOptions().dictionary_url_by_locale || {};
  let _ = [languageCodes.EN, ...Object.keys(h)];
  let p = useRef(manager.isOpen);
  useEffect(() => {
    !p.current && manager.isOpen && analyticsEventManager.trackDefinedEvent("i18n.nux_language_dropdown_opened", {
      current_locale: t
    });
    p.current = manager.isOpen;
  }, [manager.isOpen, t]);
  let f = getTriggerProps();
  if (!_.includes(t) || !getFeatureFlags().i18n_nux_locale_toggle_holdout || !function () {
    let e = getInitialOptions()?.iso_code;
    let r = getInitialOptions()?.user_data?.signup_locale;
    let t = ["ja", "ja-JP", ...Tq, ...B1, ...Vb, ...Q5, ...sJ];
    let i = ["JP", ...QS, ...vz, ..._$$rX, ...EK, ..._$$Kz];
    return "en" !== r || e && i.includes(e) || navigator.languages.some(e => t.includes(e));
  }()) return null;
  let g = async s => {
    e(!0);
    try {
      if (s === t) return;
      await loadI18nLocale(s);
      c && (await _$$k.putUser({
        user: {
          id: c,
          locale: s
        }
      }));
      try {
        if (u && r && x) {
          await _$$$.updateDisplayName({
            teamId: r.id,
            updatedDisplayName: getI18nString("default_team.web.team_name", {
              userHandle: u.handle
            })
          });
          let e = (await _$$$.getFolders({
            teamId: r.id
          })).data.meta.folder_rows.map(e => e.id);
          if (e.length > 1) throw Error("Locale NUX: Multiple folders found for team");
          if (0 === e.length) throw Error("Locale NUX: No folders found for team");
          let t = e[0];
          await _$$W.updateFolderName({
            folderId: t,
            name: getI18nString("default_team_folder.web.folder_name")
          });
        }
      } catch (e) {
        reportError(_$$e.GROWTH_PLATFORM, e);
      }
      analyticsEventManager.trackDefinedEvent("i18n.nux_language_changed", {
        from_locale: t,
        to_locale: s
      });
      i(s);
      d(s);
    } catch (e) {
      reportError(_$$e.GROWTH_PLATFORM, e);
    } finally {
      e(!1);
    }
  };
  return jsx(_$$J4, {
    children: jsx(_$$bL2, {
      manager,
      children: jsxs("div", {
        className: "LanguagePickerNew",
        "data-testid": "language-picker",
        ...xk(t8.languagePicker),
        children: [jsxs("button", {
          ...xk(t8.languageButton),
          ...f,
          children: [jsx("div", {
            "data-layer": "Language Icon",
            className: "LanguageIcon",
            ...xk(t8.languageIcon),
            children: jsx(t9, {})
          }), jsxs("div", {
            "data-layer": "Language Text Container",
            className: "LanguageTextContainer",
            ...xk(t8.languageTextContainer),
            children: [jsx("div", {
              "data-layer": "Language Text",
              className: "LanguageText",
              ...xk(t8.languageText),
              children: getI18nResourceKey(t)
            }), jsx("div", {
              "data-layer": "icon.24.chevron.down",
              className: "Icon24ChevronDown",
              ...xk(t8.icon24ChevronDown),
              children: jsx(_$$r3, {})
            })]
          })]
        }), jsx(mc, {
          children: _.map(e => jsx(q7, {
            onClick: () => g(e),
            children: jsxs("div", {
              ...xk(t8.menuItem),
              children: [jsx("div", {
                ...xk(t8.menuItemCheckIcon),
                children: e === t && jsx(_$$l, {})
              }), getI18nResourceKey(e)]
            })
          }, e))
        })]
      })
    })
  });
}
let ie = {
  skeletonLogo: {
    width: "xh8yej3",
    height: "x5yr21d",
    borderRadius: "x4pvk5x",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  skeletonLanguagePickerWrapper: {
    paddingTop: "x1uysmmv",
    marginLeft: "x8x9d4c",
    marginInlineStart: null,
    marginInlineEnd: null,
    paddingRight: "x15xlstr",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    boxSizing: "x9f619",
    $$css: !0
  },
  skeletonLanguagePicker: {
    width: "xygnafs",
    height: "x10w6t97",
    borderRadius: "x4pvk5x",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  skeletonButton: {
    width: "x1exxlbk",
    height: "xc9qbxq",
    borderRadius: "x4pvk5x",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  skeletonRightPanel: {
    width: "xh8yej3",
    height: "x5yr21d",
    borderRadius: "x137qmg1",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  skeletonQuestionArea: {
    width: "xh8yej3",
    height: "x1m3v4wt",
    borderRadius: "x4pvk5x",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  skeletonLeftLayout: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    alignItems: "x6s0dn4",
    height: "x1dr59a3",
    $$css: !0
  },
  skeletonStepContainer: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    justifyContent: "x1qughib",
    flexGrow: "x1iyjqo2",
    width: "xh8yej3",
    maxWidth: "x113bnj6",
    margin: "x19bbpc0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginBottom: null,
    padding: "xd4vndw",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    boxSizing: "x9f619",
    marginTop: "xgd4t3h",
    $$css: !0
  },
  skeletonBottomBar: {
    display: "x78zum5",
    width: "xh8yej3",
    flexDirection: "x1q0g3np",
    alignItems: "x6s0dn4",
    justifyContent: "x1qughib",
    padding: "x1sfqgxf",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  skeletonProgressIndicator: {
    width: "x1exxlbk",
    height: "xqu0tyb",
    borderRadius: "xjspbzw",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  skeletonButtonContainer: {
    display: "x78zum5",
    justifyContent: "x13a6bvl",
    $$css: !0
  },
  parentContainer: {
    display: "x78zum5",
    background: "x1qfvsp",
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
    height: "x1dr59a3",
    width: "xh8yej3",
    $$css: !0
  },
  logoContainer: {
    height: "x144a4f2",
    width: "xh8yej3",
    display: "x78zum5",
    alignItems: "x1cy8zhl",
    flexDirection: "x1q0g3np",
    flexShrink: "x2lah0s",
    $$css: !0
  },
  iconFigmaLogo: {
    paddingTop: "x1uysmmv",
    paddingLeft: "xnr0r3r",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    width: "x1849jeq",
    height: "xqvfhly",
    $$css: !0
  },
  leftScrollContainer: {
    width: "x13o9m3z x17qb88i x1wrum8q",
    overflowY: "x1odjw0f",
    overflowX: "x6ikm8r",
    flexGrow: "x1c4vz4f xxs1oiz",
    minWidth: "x15x72sd x2gdorm",
    $$css: !0
  },
  rightContainer: {
    width: "x18s4x3i x1qs7vn0",
    display: "x78zum5 x4d49lr",
    flex: "x3psx0u x7b8mf",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    background: "xkawg4k",
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
    height: "x5yr21d",
    $$css: !0
  }
};
function ir({
  style: e
}) {
  return jsx(Qp, {
    ...xk(e),
    animationType: JR.LIGHT_SHIMMER,
    opacity: 50
  });
}
function it({
  style: e
}) {
  return jsx(Wi, {
    ...xk(e),
    animationType: JR.LIGHT_SHIMMER,
    opacity: 50
  });
}
function ii() {
  return jsx(_$$J4, {
    children: jsxs("div", {
      ...xk(ie.parentContainer),
      children: [jsx("div", {
        ...xk(ie.leftScrollContainer),
        children: jsxs("div", {
          ...xk(ie.skeletonLeftLayout),
          children: [jsxs("div", {
            ...xk(ie.logoContainer),
            children: [jsx("div", {
              ...xk(ie.iconFigmaLogo),
              children: jsx(ir, {
                style: ie.skeletonLogo
              })
            }), jsx("div", {
              ...xk(ie.skeletonLanguagePickerWrapper),
              children: jsx(it, {
                style: ie.skeletonLanguagePicker
              })
            })]
          }), jsxs("div", {
            ...xk(ie.skeletonStepContainer),
            children: [jsx(ir, {
              style: ie.skeletonQuestionArea
            }), jsxs("div", {
              ...xk(ie.skeletonBottomBar),
              children: [jsx(it, {
                style: ie.skeletonProgressIndicator
              }), jsx("div", {
                ...xk(ie.skeletonButtonContainer),
                children: jsx(it, {
                  style: ie.skeletonButton
                })
              })]
            })]
          })]
        })
      }), jsx("div", {
        ...xk(ie.rightContainer),
        children: jsx(ir, {
          style: ie.skeletonRightPanel
        })
      })]
    })
  });
}
let io = {
  bottomBar: {
    display: "x78zum5",
    width: "xh8yej3",
    flexDirection: "x1q0g3np",
    alignItems: "x6s0dn4",
    justifyContent: "x1qughib",
    $$css: !0
  }
};
function il(e) {
  let r = J();
  let t = useAtomWithSubscription(fj);
  let i = useAtomWithSubscription(JC);
  let o = T5("NuxDynamicPreviewBottomBar").unwrapOr(null);
  let l = o?.name;
  let a = useAtomWithSubscription(YX);
  let d = useAtomWithSubscription(bk) === pu.WHICH_SEAT_WOULD_YOU_LIKE;
  return jsxs("div", {
    className: a ? void 0 : pR,
    ..._$$Ay2.props(a && io.bottomBar),
    children: [jsx(tU, {
      hasFigJamIntent: "whiteboard" === e.signupSource
    }), jsxs("div", {
      className: Gr,
      children: [jsx(tW, {
        dismissModal: e.dismissModal,
        signupSource: e.signupSource,
        onNextQuestion: e.onNextQuestion,
        currentQuestion: e.currentQuestion,
        formatAndSubmitSignalCollectionResponses: r
      }), d && !!t && t !== Gu.VIEW && jsx("div", {
        className: mx,
        children: i ? getI18nString("seat_selection_in_nux.well_update_your_set", {
          orgOrTeamName: l || ""
        }) : getI18nString("seat_selection_in_nux.well_send_your_request_to", {
          orgOrTeamName: l || ""
        })
      }), jsx(eJ, {
        dismissModal: e.dismissModal,
        signupSource: e.signupSource,
        onNextQuestion: e.onNextQuestion,
        currentQuestion: e.currentQuestion,
        team: e.team,
        formatAndSubmitSignalCollectionResponses: r
      })]
    })]
  });
}
let ia = {
  questionContainer: {
    width: "xh8yej3",
    fontFamily: "x1wtuluy",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    justifyContent: "x1qughib",
    flexGrow: "x1iyjqo2",
    $$css: !0
  }
};
let id = {
  questionContainer: {
    maxWidth: "xkfg2k",
    width: "xhku13b x10scnhh",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    justifyContent: "x1qughib",
    fontFamily: "x1c5rpxs",
    flexGrow: "x1iyjqo2",
    padding: "x1ljzllo",
    $$css: !0
  }
};
function ic(e) {
  let {
    currentQuestion,
    team
  } = e;
  let i = useAtomWithSubscription(_D);
  let o = useAtomWithSubscription(YX);
  let l = _$$u();
  es();
  return jsx(fu, {
    name: currentQuestion,
    properties: {
      ...VD(),
      signupSource: e.signupSource
    },
    trackingOptions: l,
    children: jsxs("div", {
      ..._$$Ay2.props(o ? ia.questionContainer : id.questionContainer),
      style: o ? void 0 : {
        "--width": i ? "912px" : "512px"
      },
      "data-testid": F$.question,
      children: [jsx(tH, {
        currentQuestion,
        team,
        dismissModal: e.dismissModal,
        hasFigJamIntent: "whiteboard" === e.signupSource
      }), jsx(il, {
        currentQuestion,
        signupSource: e.signupSource,
        team,
        dismissModal: e.dismissModal,
        onNextQuestion: e.onNextQuestion
      })]
    })
  });
}
let ih = {
  leftScrollContainer: {
    width: "x13o9m3z x17qb88i x1wrum8q",
    margin: "x19bbpc0",
    overflowY: "x1odjw0f",
    overflowX: "x6ikm8r",
    $$css: !0
  },
  leftScrollContainerFullscreen: {
    width: "xh8yej3",
    overflowY: "x1odjw0f",
    overflowX: "x6ikm8r",
    $$css: !0
  }
};
function i_({
  onClick: e
}) {
  return jsx(_$$e2, {
    className: "x10l6tqk x1ypdohk x1peatla x1fu8urw x1xmnb5e x2b8uid x1lliihq xdvhukp x1axw3p3",
    onClick: e,
    "data-testid": OO,
    "aria-label": getI18nString("new_user_experience.button.back"),
    RUMEnabled: !0,
    children: jsx(_$$B2, {
      svg: _$$A5,
      className: "x1ypdohk xw4jnvo x1rg5ohu x1qo6gao",
      autosize: !0
    })
  });
}
function ip(e) {
  let [r, t] = useState(!1);
  let i = e.question.value;
  let l = useAtomWithSubscription(_D);
  let a = useRef(null);
  let c = useRef(null);
  let {
    LogoWrapper
  } = ig({
    leftPanelRef: a,
    logoRef: c
  });
  let x = pV("", e.hasFigJamIntent);
  let h = hS({
    open: !0,
    onClose: () => {
      e.dismissModal();
    },
    preventUserClose: !0
  });
  return (useEffect(() => {
    if (i) {
      let e = a.current?.querySelector("h1");
      e ? e.focus() : a.current?.querySelector(`[data-testid="${F$.question}"]`)?.focus();
    }
  }, [i]), e.question.value) ? r ? jsx(ii, {}) : jsx(bL, {
    manager: h,
    theme: {
      root: "xh8yej3"
    },
    children: jsxs("div", {
      className: d()("nux_dynamic_preview_view--buttonFocusMixin--mfhcQ", "x78zum5 x1qfvsp x1dr59a3 xh8yej3"),
      ...x,
      "data-testid": Io,
      "data-question-id": e.question.index,
      children: [jsx("div", {
        ..._$$Ay2.props(l ? ih.leftScrollContainerFullscreen : ih.leftScrollContainer),
        tabIndex: -1,
        ref: a,
        children: jsxs(_$$eI, {
          className: "x78zum5 xdt5ytf x6s0dn4 x1dr59a3",
          children: [jsxs(LogoWrapper, {
            className: "x144a4f2 xh8yej3 x78zum5 x1cy8zhl x1q0g3np x2lah0s",
            children: [e.showBackButton && jsx(i_, {
              onClick: e.moveToPreviousQuestion
            }), jsx("div", {
              className: "x1uysmmv xnr0r3r x1849jeq xqvfhly",
              ref: c,
              children: e.hasFigJamIntent ? jsx(_$$B2, {
                svg: _$$A,
                useOriginalSrcFills_DEPRECATED: !0,
                autosize: !0,
                width: "32px"
              }) : jsx(_$$B2, {
                svg: _$$A2,
                useOriginalSrcFills_DEPRECATED: !0,
                autosize: !0,
                width: "32px"
              })
            }), !getFeatureFlags().nux_locale_toggle_killswitch && jsx(t7, {
              setIsLoading: t,
              team: e.team
            })]
          }), jsx(ic, {
            currentQuestion: e.question.value,
            onNextQuestion: e.moveToNextQuestion,
            team: e.team,
            dismissModal: e.dismissModal,
            signupSource: e.signupSource
          })]
        })
      }), !l && jsx(_$$eI, {
        className: "x18s4x3i x1qs7vn0 x98rzlu xkawg4k x5yr21d x78zum5 x4d49lr",
        children: jsx(_$$m, {
          hasFigJamIntent: e.hasFigJamIntent
        })
      })]
    })
  }) : null;
}
function ig({
  leftPanelRef: e,
  logoRef: r
}) {
  let [t, i] = useState(!1);
  let [s, l] = useState(!0);
  let n = useCallback(e => {
    e.isIntersecting ? l(!0) : l(!1);
  }, [l]);
  let a = wY(e);
  useEffect(() => {
    a && e.current && i(e.current.scrollHeight > e.current.clientHeight);
  }, [a, a?.width, a?.height, e]);
  _$$g(r, n, {
    root: null,
    rootMargin: "0px",
    threshold: .75
  });
  return {
    LogoWrapper: t && !s ? "div" : QP
  };
}
function im(e) {
  let r = useRef(null);
  let t = useRef(null);
  let {
    LogoWrapper
  } = ig({
    leftPanelRef: r,
    logoRef: t
  });
  let l = hS({
    open: !0,
    onClose: () => {
      e.dismissModal();
    },
    preventUserClose: !0
  });
  return e.question.value ? jsx(fu, {
    name: e.trackingContextName,
    properties: {
      entryPoint: e.entryPoint
    },
    children: jsx("div", {
      children: jsx(_$$bL, {
        manager: l,
        width: "fit-content",
        height: "fixed",
        children: jsx(Wk, {
          children: jsxs("div", {
            className: "x78zum5 x1q0g3np x9h44rk xdpfuu1 x1egiwwb",
            "data-testid": u_,
            children: [jsx("div", {
              className: "xinu3np",
              ref: r,
              children: jsxs(_$$eI, {
                className: "x5yr21d x9f619 x1gkjlqi x78zum5 xdt5ytf x1odjw0f",
                children: [jsx(LogoWrapper, {
                  className: "x1hq5gj4",
                  children: jsx("div", {
                    className: "xw4jnvo x1gnnpzl",
                    ref: t,
                    children: jsx(_$$B2, {
                      svg: _$$A2,
                      useOriginalSrcFills_DEPRECATED: !0,
                      autosize: !0,
                      width: "20px"
                    })
                  })
                }), jsx(ic, {
                  currentQuestion: e.question.value,
                  onNextQuestion: e.moveToNextQuestion,
                  team: e.team,
                  dismissModal: e.dismissModal,
                  signupSource: e.signupSource
                })]
              })
            }), jsx("div", {
              className: "x78zum5 x1kmanbg x5yr21d x1sjmt1f",
              children: jsx(_$$eI, {
                children: jsx(_$$m, {
                  hasFigJamIntent: e.hasFigJamIntent,
                  isInModal: !0
                })
              })
            })]
          })
        })
      })
    })
  }) : null;
}
function iE({
  isMobileViewport: e,
  signupSource: r,
  team: t,
  hasFigJamIntent: l,
  dismissModal: a,
  entryPoint: d
}) {
  let c = useAtomWithSubscription(pr);
  let [u, x] = useAtomValueAndSetter(bk);
  let [h, _] = useAtomValueAndSetter(Xw);
  let p = useAtomWithSubscription(ni);
  let f = Oc();
  let g = N();
  let m = useAtomWithSubscription(S0);
  let E = function ({
    hasFigJamIntent: e,
    team: r,
    signupSource: t,
    isMobileViewport: s
  }) {
    let l = useAtomWithSubscription(_$$eS);
    let a = useAtomWithSubscription($B);
    let d = _6();
    let c = null !== U2(d);
    let [u, x] = useAtomValueAndSetter(S0);
    let [h, _] = useAtomValueAndSetter(bk);
    let p = fr();
    let f = Oc();
    let g = useMemo(() => {
      let i = [];
      "loading" === l.status || "loading" === a.status || (l.data ? i = XL : f ? i = ug : a.data ? (i = Pp, p() && (i = [...i, pu.WHICH_SEAT_WOULD_YOU_LIKE])) : i = e ? Ig : Aj() ? zH : "community" === t || c ? _$$td : nH, r || (i = i.filter(e => e !== pu.INVITE_COLLABORATORS)), s && (i = i.filter(e => e !== pu.CHOOSE_PRODUCT)));
      return i;
    }, [l.status, l.data, a.status, a.data, f, e, t, c, r, s, p]);
    useEffect(() => {
      h ? h === g[0] ? (x(g), i = [...g]) : I()(g, i) || reportError(_$$e.ACTIVATION, Error("NUX steps have unexpectedly changed in the middle of NUX"), {
        extra: {
          currentQuestion: h,
          currentSteps: u,
          steps: g,
          initializedSteps: i,
          team: r,
          isMobileViewport: s
        }
      }) : _(g[0]);
    }, [h, u, _, x, g]);
    _$$R(() => {
      trackEventAnalytics("NUX First Step", {
        nuxType: "nux_dynamic_preview",
        isGen1: !!a.data,
        question: h
      });
    }, !!g?.[0] && !!h && h === g[0], e => e);
    return () => g;
  }({
    hasFigJamIntent: l,
    team: t,
    signupSource: r,
    isMobileViewport: e
  });
  let b = "NUX Dynamic Preview";
  e && (b = "NUX Dynamic Preview > Mobile");
  c ? b += " > EDU NUX" : l && (b += " > FigJam NUX");
  f && (b += " > FigMake NUX");
  E();
  let C = u ? m.indexOf(u) : 0;
  let L = C >= 1;
  let v = e => {
    if (e && !(e < 1)) return m[e - 1];
  };
  let w = () => {
    let e = h && m.indexOf(h);
    h && x(h);
    _(v(e));
  };
  let S = () => {
    let e = m;
    if (C === e.length - 1) return;
    (!f && u === pu.WHAT_DO_YOU_DO_V2 || f && u === pu.HOW_DO_YOU_PLAN_TO_USE_FIGMA) && (e = g());
    let r = e[C + 1];
    _(e[C]);
    x(r);
  };
  return e ? jsx(fu, {
    name: b,
    properties: {
      entryPoint: d,
      signupSource: r,
      fileTeamId: t?.id
    },
    children: jsx(tY, {
      team: t,
      dismissModal: a,
      signupSource: r,
      hasFigJamIntent: l,
      question: {
        value: u,
        index: C
      },
      moveToNextQuestion: S,
      moveToPreviousQuestion: w,
      showBackButton: L
    })
  }) : f ? jsx(im, {
    entryPoint: d,
    trackingContextName: b,
    team: t,
    dismissModal: a,
    signupSource: r,
    hasFigJamIntent: l,
    question: {
      value: u,
      index: C
    },
    moveToNextQuestion: S,
    moveToPreviousQuestion: w
  }) : jsx(fu, {
    name: b,
    properties: {
      entryPoint: d,
      signupSource: r,
      fileTeamId: t?.id
    },
    children: jsx(ip, {
      team: t,
      dismissModal: a,
      signupSource: r,
      hasFigJamIntent: l,
      question: {
        value: u,
        index: C
      },
      moveToNextQuestion: S,
      moveToPreviousQuestion: w,
      showBackButton: L
    })
  }, p);
}
let ib = "nux_dynamic_preview_overlay--mobile--beL6j";
export function $$ij0(e) {
  let r = Xr(pr);
  let t = L(e.onOverlayClose);
  let i = getIsAndroidOrIphoneNotFigmaMobile();
  let a = useSelector(e => MS(e.userFlags));
  let m = useSelector(e => e.currentTeamId);
  let E = Rs(yQw(_X(Pw.GROUP_7) && m ? {
    teamId: m
  } : null));
  let b = useMemo(() => E.transform(({
    team: e
  }) => e), [E]);
  let j = useSelector(r => e.isGen1 || _X(Pw.GROUP_7) && "loaded" !== b.status ? null : FQ(r, b.data));
  let C = useSelector(e => null !== e.user && cn(e.user));
  let w = useRef();
  let k = Oc();
  j && !w.current && (w.current = j);
  useEffect(() => {
    r(C);
  }, [C, r]);
  let N = {
    isMobileViewport: i,
    hasFigJamIntent: a === FFileType.WHITEBOARD,
    dismissModal: t,
    entryPoint: e.entryPoint
  };
  return (e.isGen1 || (N.team = w.current, N.signupSource = a), k) ? jsx(S, {
    trackingContextName: e.trackingContextName,
    isShowing: e.isShowing,
    testId: e.dataTestId,
    className: i ? ib : void 0,
    children: jsx(iE, {
      ...N
    })
  }) : jsx(v, {
    className: d()({
      "nux_dynamic_preview_overlay--desktop--DQQCO": !i,
      [ib]: i
    }),
    trackingContextName: e.trackingContextName,
    isShowing: e.isShowing,
    testId: e.dataTestId,
    onClose: e.onOverlayClose,
    children: jsx(iE, {
      ...N
    })
  });
}
export const b = $$ij0;