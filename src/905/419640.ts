import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as _$$a } from "../905/964520";
import s from "classnames";
import { sx } from "../905/449184";
import { tx } from "../905/303541";
import { A as _$$A } from "../905/857789";
var o = s;
let u = "publish_modal_accordion--ui3--xXeCO";
export function $$p0({
  name: e,
  title: t,
  titleContent: i,
  children: a,
  defaultActive: s = !1,
  disabled: d = !1,
  disabledMessage: p,
  numErrors: h = 0
}) {
  let [g, f] = useState(s);
  useEffect(() => {
    f(s);
  }, [s]);
  return jsxs("section", {
    className: "publish_modal_accordion--accordion--3C9Ju",
    children: [jsxs("div", {
      className: o()("publish_modal_accordion--accordionHeader--BFskT", u),
      onClick: () => {
        sx("publish_modal_accordion_click", {
          active: g,
          defaultActive: s,
          name: e,
          disabled: d
        });
        d || f(e => !e);
      },
      role: "button",
      tabIndex: 0,
      "aria-expanded": g,
      children: [jsx("div", {
        className: "publish_modal_accordion--accordionHeaderContent--yxx9E",
        children: jsx(m, {
          active: g,
          numErrors: h,
          title: t,
          titleContent: i
        })
      }), jsx("div", {
        className: "publish_modal_accordion--accordionHelperText--JETjb",
        children: jsx(_$$A, {
          children: p
        })
      })]
    }), jsx("div", {
      className: o()("publish_modal_accordion--contentContainer--e-8bh", {
        "publish_modal_accordion--activeUI3--OVAl2": g
      }),
      children: jsx("div", {
        className: "publish_modal_accordion--contentUI3--9oSSM",
        children: a
      })
    })]
  });
}
function m({
  active: e,
  numErrors: t,
  title: i,
  titleContent: r
}) {
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: o()("publish_modal_accordion--leftColumn--fk8Y-", u),
      children: [jsx(_$$a, {
        className: o()("publish_modal_accordion--chevronUI3--p-r-K", {
          "publish_modal_accordion--activeChevronUI3--8jWlp": e
        })
      }), jsx("div", {
        className: "publish_modal_accordion--titleUI3--IGCc8",
        children: i
      })]
    }), jsx("div", {
      className: "publish_modal_accordion--rightColumnUI3--2NYyG",
      children: jsxs("div", {
        className: "publish_modal_accordion--rightColumnContent--ICw2p",
        children: [jsx("div", {
          className: "publish_modal_accordion--titleContent--jYdEU",
          children: r
        }), !e && !!t && jsx("div", {
          className: o()("publish_modal_accordion--errorBadge--3-Qi2", {
            "publish_modal_accordion--errorBadgeMargin--7FKlH": !!r
          }),
          children: tx("community.publish.modal_error_badge", {
            numErrors: t
          })
        })]
      })
    })]
  });
}
export const A = $$p0;