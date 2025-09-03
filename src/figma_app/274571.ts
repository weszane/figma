import { getSingletonSceneGraph } from "../905/700578";
import { t as _$$t } from "../905/303541";
import { x } from "../905/239551";
let $$s9 = [];
let $$o1 = 8;
let $$l21 = 436;
let $$d13 = 36;
let $$c17 = 524;
let $$u23 = 4;
let $$p7 = 24;
let $$_4 = 24;
let $$h12 = 6;
let $$m22 = 18;
let $$g24 = 12;
let $$f5 = "#C4C4C4";
let $$E18 = 4;
let $$y19 = [{
  type: "drop-shadow",
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: .1
  },
  offset: {
    x: 0,
    y: 1
  },
  blur: 3
}, {
  type: "drop-shadow",
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: .1
  },
  offset: {
    x: 0,
    y: 3
  },
  blur: 8
}, {
  type: "drop-shadow",
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: .18
  },
  offset: {
    x: 0,
    y: 0
  },
  blur: .5
}];
let $$b3 = {
  fontFamily: "Inter",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 24,
  letterSpacing: -.084,
  width: 436
};
let $$T20 = 8 * $$b3.fontSize / 14;
let $$I11 = {
  fontFamily: "Roboto Mono",
  fontSize: 11,
  fontWeight: 400,
  lineHeight: 24,
  width: $$l21
};
export function $$S14(e, t, r = !0) {
  e.isAlive && (e.setWidgetSyncedState("syncedState:ai-summary-items", JSON.stringify(t)), r && x.renderFirstPartyWidget(e.widgetId, e.guid));
}
export function $$v6(e, t, r = !0) {
  e.isAlive && (e.setWidgetSyncedState("syncedState:summarized-at", `${t.getTime()}`), r && x.renderFirstPartyWidget(e.widgetId, e.guid));
}
export class $$A10 {
  static copySummaryDataToClipboard(e, t) {
    let r = $$x0(e, t);
    navigator.clipboard.writeText(r);
  }
}
export function $$x0(e, t) {
  let r = "";
  r += `${$$C8(t)}

`;
  e.forEach(e => {
    switch ("h2" === e.type && (r += "\n"), e.type) {
      case "p":
      case "h1":
      case "h2":
      default:
        r += e.content + "\n";
        break;
      case "li":
        r += `\u2022 ${e.content}
`;
    }
  });
  return r += `
${_$$t("whiteboard.ai.summary.summary_footer_disclaimer")}`;
}
export function $$N15(e) {
  return e.endsWith("...") ? $$w16() : e + ".";
}
export function $$C8(e) {
  let t = new Date();
  let r = parseInt(e, 10);
  return r ? (t.setTime(r), _$$t("whiteboard.ai.summary.summary_header_disclaimer", {
    summaryGenerationDate: t
  })) : _$$t("whiteboard.ai.summary.summary_header_disclaimer_no_date");
}
export function $$w16() {
  return _$$t("whiteboard.ai_summary.loading_text");
}
export function $$O2(e, t, r) {
  let i = t.length > 0;
  let a = r && r.length > 0;
  if (!i || a) return !1;
  let s = getSingletonSceneGraph().get(e);
  return !!s && ($$S14(s, function (e) {
    let t = JSON.parse(e);
    let r = [{
      type: "p",
      context: "tldr",
      content: t.summary
    }];
    t.supporting_points.forEach(({
      header: e,
      two_to_five_supporting_points: t
    }) => {
      r.push({
        type: "h2",
        content: e,
        context: "main_theme"
      });
      t.forEach(e => {
        r.push({
          type: "li",
          content: e,
          context: "supporting_point"
        });
      });
    });
    return r;
  }(t)), !0);
}
export const Aq = $$x0;
export const Ax = $$o1;
export const Ay = $$O2;
export const Bb = $$b3;
export const E_ = $$_4;
export const Fx = $$f5;
export const Gw = $$v6;
export const H0 = $$p7;
export const IM = $$C8;
export const JT = $$s9;
export const NY = $$A10;
export const QU = $$I11;
export const Re = $$h12;
export const Ub = $$d13;
export const WN = $$S14;
export const Yc = $$N15;
export const ZG = $$w16;
export const _t = $$c17;
export const bH = $$E18;
export const co = $$y19;
export const iL = $$T20;
export const ju = $$l21;
export const kO = $$m22;
export const pA = $$u23;
export const xe = $$g24;