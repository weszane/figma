import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { G } from "../905/289770";
import { J } from "../905/614223";
import { g as _$$g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import { h as _$$h } from "../905/207101";
import { buildUploadUrl, isDevEnvironment } from "../figma_app/169182";
import { reportError } from "../905/11";
import { oW } from "../905/675859";
import { renderI18nText, getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { tI } from "../figma_app/599327";
import { ES } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { ud } from "../905/513035";
import { q5 } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { w as _$$w } from "../905/281010";
import { Ju } from "../905/102752";
import { xx } from "../figma_app/995208";
import { U } from "../figma_app/65327";
let k = "cb2673de5dce908e59e849955b564818efb747a6";
let R = {
  noteInput: {
    height: "x1peatla",
    padding: "xf7z5ut",
    borderRadius: "x19y5rnk",
    background: "x1sjmt1f",
    resize: "xtt52l0",
    ":placeholder_color": "x1804815",
    $$css: !0
  }
};
function N(e) {
  let {
    note,
    onChange
  } = e;
  return jsxs("div", {
    className: "x4ygwfs x78zum5 xdt5ytf x1nfngrj",
    children: [jsx("span", {
      ...xk(_$$g.textBodyMedium),
      children: renderI18nText("seat_selection_in_nux.note_prompt")
    }), jsx("textarea", {
      ...xk(R.noteInput, _$$g.textBodyMedium),
      placeholder: getI18nString("seat_selection_in_nux.note_placeholder", {
        seat_type: tI(e.seatType)
      }),
      value: note,
      onChange: e => onChange(e.target.value),
      rows: 3
    })]
  });
}
let P = {
  [ud.COLLABORATOR]: "whiteboard",
  [ud.DEVELOPER]: "dev-handoff",
  [ud.EXPERT]: "design",
  [ud.CONTENT]: "cooper"
};
let O = (e, t) => {
  if (e) switch (t) {
    case ud.COLLABORATOR:
      return renderI18nText("seat_selection_in_nux.collab_seat_auto_approved");
    case ud.DEVELOPER:
      return renderI18nText("seat_selection_in_nux.dev_seat_auto_approved");
    case ud.EXPERT:
      return renderI18nText("seat_selection_in_nux.full_seat_auto_approved");
    case ud.CONTENT:
      return renderI18nText("seat_selection_in_nux.content_seat_auto_approved");
    default:
      throwTypeError(t);
  } else switch (t) {
    case ud.COLLABORATOR:
      return renderI18nText("seat_selection_in_nux.collab_seat_manual_request");
    case ud.DEVELOPER:
      return renderI18nText("seat_selection_in_nux.dev_seat_manual_request");
    case ud.EXPERT:
      return renderI18nText("seat_selection_in_nux.full_seat_manual_request");
    case ud.CONTENT:
      return renderI18nText("seat_selection_in_nux.content_seat_manual_request");
    default:
      throwTypeError(t);
  }
};
let D = (e, t) => {
  if (e) switch (t) {
    case ud.COLLABORATOR:
      return buildUploadUrl(k);
    case ud.DEVELOPER:
      return buildUploadUrl("bb9c1da4623599a5b504821d08933e4a62f77738");
    case ud.EXPERT:
    case ud.CONTENT:
      return buildUploadUrl("e64c10dbcf541d5c046e504238332a5a4e6c3936");
    default:
      throwTypeError(t);
  } else switch (t) {
    case ud.COLLABORATOR:
      return buildUploadUrl(k);
    case ud.DEVELOPER:
      return buildUploadUrl("c01e13ea74266be4e3bd04138f24580a366f34db");
    case ud.EXPERT:
    case ud.CONTENT:
      return buildUploadUrl("8ccf73b4d60956f75e7d328f2f84303814551671");
    default:
      throwTypeError(t);
  }
};
let $$L0 = Ju(function (e) {
  let [t, i] = useState("");
  let {
    color
  } = G();
  let c = useDispatch();
  let u = U("nux_seat_request_confirmation_modal");
  let A = q5();
  _$$h(() => {
    e.autoApproved || e.requestId || function (e) {
      if (isDevEnvironment()) throw e;
      reportError(_$$e.ACTIVATION, e);
      c(ES($$L0));
      c(F.enqueue({
        message: "Something went wrong.",
        error: !0
      }));
    }(Error("No request ID for post-NUX seat request confirmation modal"));
  });
  let w = async i => {
    let n = !1;
    if (!e.autoApproved && i && t.length > 0) {
      if (e.requestId) try {
        let i = e.requestId;
        i ? await _$$w.updateRequestMessage({
          request_id: i,
          message: t
        }) : n = !0;
      } catch (e) {
        n = !0;
      } else n = !0;
    }
    c(ES($$L0));
    e.seatType === ud.DEVELOPER && A?.editorType === FFileType.DESIGN && u("handoff");
    n && c(F.enqueue({
      message: "Error updating request message.",
      error: !0
    }));
  };
  return jsx(J, {
    brand: P[e.seatType],
    children: jsx(fu, {
      name: "Post NUX Seat Request Confirmation Modal Outer",
      children: jsx(xx, {
        title: renderI18nText("seat_selection_in_nux.welcome_to_figma"),
        media: jsx("div", {
          className: "x78zum5 x2lah0s x13a6bvl x6s0dn4 x1jgvi1y xg80ozm x1bifzbx",
          children: jsx(oW, {
            alt: "",
            className: "xh8yej3 xgmxx4u x14vqqas",
            src: D("dark" === color, e.seatType)
          })
        }),
        primaryCta: {
          type: "button",
          label: renderI18nText("seat_selection_in_nux.continue"),
          onClick: w,
          ctaTrackingDescriptor: _$$c.CONTINUE
        },
        onClose: () => c(ES($$L0)),
        trackingContextName: "Post NUX Seat Request Confirmation Modal",
        description: jsxs(Fragment, {
          children: [O(e.autoApproved, e.seatType), !e.autoApproved && jsx(N, {
            note: t,
            onChange: i,
            seatType: e.seatType
          })]
        })
      })
    })
  });
}, "NuxSeatRequestConfirmationModal");
export const u = $$L0;