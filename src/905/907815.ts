import { useState, useCallback, cloneElement } from "react";
import r from "classnames";
var a = r;
export function $$s0({
  enabled: e = !0,
  children: t
}) {
  let {
    status,
    onLoad
  } = function (e) {
    let [{
      url: t,
      status: i
    }, r] = useState({
      url: e,
      status: "initial"
    });
    let a = useCallback(() => {
      r(({
        url: e
      }) => ({
        url: e,
        status: "success"
      }));
    }, []);
    return e !== t ? (r({
      url: e,
      status: "initial"
    }), {
      status: "initial",
      onLoad: a
    }) : {
      status: i,
      onLoad: a
    };
  }(t.props.src);
  let s = useCallback(e => {
    onLoad();
    t.props.onLoad?.(e);
  }, [onLoad, t.props]);
  return cloneElement(t, {
    onLoad: s,
    className: a()(e && "img_hidden_until_loaded--imageInitial--lFYLl", e && "success" === status && "img_hidden_until_loaded--imageLoaded--mbTxG", t.props.className)
  });
}
export const B = $$s0;