import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { P } from "../3276/355202";
import { D } from "../905/537702";
import { getI18nString } from "../905/303541";
import { volumeThreshold } from "../figma_app/275739";
let i = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M13 7v1.879l1-1V7a2 2 0 1 0-4 0v4.879l1-1V7a1 1 0 1 1 2 0m.996 5.125-1.87 1.871a2 2 0 0 0 1.87-1.87M8.5 12c0 .413.071.809.203 1.176l-.764.764A4.5 4.5 0 0 1 7.5 12v-.5a.5.5 0 0 1 1 0zm2.324 3.297-.764.764c.444.213.93.355 1.44.412V18h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-1.527a4.5 4.5 0 0 0 4-4.473v-.5a.5.5 0 0 0-1 0v.5a3.5 3.5 0 0 1-4.676 3.297m7.03-8.443a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708z",
      clipRule: "evenodd"
    })
  });
});
let d = "voice_svg--voiceAudioBar--bWITN";
let c = "voice_svg--voiceAudioBarStroke--MEsT8 voice_users--voiceAudioBarStroke--MKNsx";
let m = "voice_svg--mutedLine--A9TnC";
let $$u0 = {
  Unmuted: () => jsx(P, {}),
  Muted: () => jsx(i, {}),
  UnmutedBars: ({
    volume: e,
    className: t,
    alwaysShowVoiceBars: n,
    userName: a
  }) => {
    if ((e || 0) < volumeThreshold) {
      if (!0 !== n) return null;
      e = 0;
    }
    let i = [7 * (e = Math.pow(e || 0, .5)) * .4, 7 * e, 7 * e * .4].map(e => .8 * e + e * (.4 * Math.random() - .2));
    return jsxs("svg", {
      width: "24",
      viewBox: "-5 -8 18 16",
      fill: "none",
      className: t,
      "aria-label": getI18nString("collaboration.voice.unmuted_user", {
        user_name: a
      }),
      children: [jsx("line", {
        className: c,
        x1: "1",
        y1: 0,
        x2: "7",
        y2: 0,
        strokeWidth: "5",
        color: "red",
        strokeLinecap: "round"
      }), jsx("line", {
        className: c,
        x1: "1",
        y1: -i[0],
        x2: "1",
        y2: i[0],
        strokeWidth: "4",
        strokeLinecap: "round"
      }), jsx("line", {
        className: d,
        x1: "1",
        y1: -i[0],
        x2: "1",
        y2: i[0],
        stroke: "#1BC47D",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), jsx("line", {
        className: c,
        x1: "4",
        y1: -i[1],
        x2: "4",
        y2: i[1],
        strokeWidth: "4",
        strokeLinecap: "round"
      }), jsx("line", {
        className: d,
        x1: "4",
        y1: -i[1],
        x2: "4",
        y2: i[1],
        stroke: "#1BC47D",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), jsx("line", {
        className: c,
        x1: "7",
        y1: -i[2],
        x2: "7",
        y2: i[2],
        strokeWidth: "4",
        strokeLinecap: "round"
      }), jsx("line", {
        className: d,
        x1: "7",
        y1: -i[2],
        x2: "7",
        y2: i[2],
        stroke: "#1BC47D",
        strokeWidth: "2",
        strokeLinecap: "round"
      })]
    });
  },
  HeadphonesIcon: ({
    className: e
  }) => jsx(D, {
    className: e
  }),
  MutedMini: ({
    userName: e
  }) => jsxs("svg", {
    width: "13",
    height: "16",
    viewBox: "0 0 13 16",
    fill: "none",
    "aria-label": getI18nString("collaboration.voice.muted_user", {
      user_name: e
    }),
    children: [jsx("path", {
      className: "voice_svg--iconBorder--tkPMY",
      d: "M4 6V4.5C4 2.567 5.567 1 7.5 1H10C11.1046 1 12 1.89543 12 3V5C12.5523 5 13 5.44772 13 6V8.75736C13 9.55301 12.6839 10.3161 12.1213 10.8787L11 12V14C11 14.5523 10.5523 15 10 15H5C4.44772 15 4 14.5523 4 14V13L1.20711 10.2071C0.816583 9.81658 0.816582 9.18342 1.20711 8.79289L4 6Z"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.33306 3.25234C8.09478 3.09295 7.8083 3 7.5001 3C6.67168 3 6.0001 3.67157 6.0001 4.5V5.58529L6.40341 5.18198L8.33306 3.25234ZM5.47386 10.3542L6.1952 9.63284C6.57505 9.86573 7.0219 10 7.50011 10C8.88081 10 10.0001 8.88074 10.0001 7.50003V7H11.0001V7.50003C11.0001 9.26326 9.69624 10.722 8.0001 10.9646V12H9.0001V13H7.5001H6.0001V12H7.0001V10.9646C6.437 10.884 5.91714 10.6694 5.47386 10.3542ZM6.93722 8.89081L9.0001 6.82793V7.5C9.0001 8.32843 8.32853 9 7.5001 9C7.30104 9 7.11103 8.96122 6.93722 8.89081Z",
      fill: "#F24822",
      className: m
    }), jsx("path", {
      d: "M10.5009 2.49847L11.2081 3.20558L3.92834 10.4853L3.22123 9.77819L10.5009 2.49847Z",
      fill: "#F24822",
      className: m
    })]
  })
};
export const A = $$u0;