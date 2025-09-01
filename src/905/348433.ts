import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { createContext, useState, useRef, useLayoutEffect, useContext } from "react";
import { lQ } from "../905/934246";
import { assertNotNullish } from "../figma_app/95419";
import { r as _$$r } from "../figma_app/67145";
import { u as _$$u } from "../905/39877";
let d = createContext(null);
export function $$c0({
  children: e
}) {
  let [t, i] = useState(void 0);
  return jsxs(Fragment, {
    children: [jsx(d.Provider, {
      value: {
        listItemButtonWidth: t ? Math.ceil(t) + 8 : 78
      },
      children: e
    }), jsx(_$$r, {
      setMaxWidth: i,
      render: ({
        reportWidthOfValue: e
      }) => jsxs("div", {
        className: "library_modal_measurement_context--offscreenMeasurementContainer--XU8QO",
        "aria-hidden": !0,
        children: [jsx(u, {
          reportWidth: e,
          value: "addToFile",
          children: jsx(_$$u, {
            subscribeCallback: lQ,
            unsubscribeCallback: lQ,
            libraryName: ""
          })
        }), jsx(u, {
          reportWidth: e,
          value: "removeFromFile",
          children: jsx(_$$u, {
            isSubscribedTo: !0,
            subscribeCallback: lQ,
            unsubscribeCallback: lQ,
            libraryName: ""
          })
        })]
      })
    })]
  });
}
function u({
  reportWidth: e,
  value: t,
  children: i
}) {
  let a = useRef(null);
  useLayoutEffect(() => {
    let i = a.current;
    i && e(t, i.getBoundingClientRect().width);
    return () => e(t, void 0);
  }, [a, t, e]);
  return jsx("div", {
    ref: a,
    children: i
  });
}
export function $$p1() {
  let e = useContext(d);
  return assertNotNullish(e);
}
export const S = $$c0;
export const H = $$p1;