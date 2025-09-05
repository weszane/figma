import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useContext } from "react";
import { useDispatch } from "../vendor/514228";
import { E as _$$E } from "../905/632989";
import o from "classnames";
import { b as _$$b } from "../figma_app/556971";
import { tx } from "../905/303541";
import { oz, o5 } from "../905/292918";
import { oj, Ns, Kz } from "../905/760074";
import { Um } from "../905/848862";
import { q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { e0 } from "../905/696396";
import { x as _$$x } from "../905/106997";
import { X } from "../9410/208213";
import { s as _$$s } from "../9410/760762";
import { eg, ur } from "../figma_app/452252";
import { m as _$$m } from "../9410/532216";
import { n as _$$n } from "../9410/783801";
var l = o;
function C(e) {
  return jsx("div", {
    className: "static_repo_name--container--6SAYd",
    children: jsx(_$$E, {
      className: "static_repo_name--button--4ZBh2 ellipsis--ellipsis--Tjyfa",
      onClick: () => e.dispatch(oz({
        trackingContextName: e.trackingContextName
      })),
      children: oj(e.repo)
    })
  });
}
C.displayName = "StaticRepoName";
let T = "left_panel_header_components--row--5uMsb";
let w = "left_panel_header_components--withBottomMargin--qvGQT";
let $$S2 = "leftPanelHeader";
export function $$j3({
  shouldUseBottomBorder: e,
  children: t,
  withSmallPaddingRight: i
}) {
  return jsx("div", {
    className: l()("left_panel_header_components--container--i23pm", {
      "left_panel_header_components--withBottomBorder--OQzj-": e,
      "left_panel_header_components--withSmallPaddingRight--BOLxn": i
    }),
    children: t
  });
}
export function $$I0({
  shouldShowFileMenu: e = !0,
  recordingKey: t
}) {
  let [i, a] = useState(!1);
  let s = Um()?.type === eg;
  let [o, l] = useState(s);
  useEffect(() => {
    if (s) l(!0);else {
      let e = requestAnimationFrame(() => {
        l(!1);
      });
      return () => cancelAnimationFrame(e);
    }
  }, [s]);
  let c = _$$b();
  let u = jsxs("div", {
    className: T,
    "data-file-header-hover": i,
    style: c ? {
      overflow: "hidden"
    } : void 0,
    children: [jsx(_$$n, {
      setFileNameIsHovered: a,
      isDropdownVisibleWithDelay: o,
      recordingKey: t,
      shouldShowFileMenu: e
    }), e && jsx(_$$m, {
      setFileMenuIsHovered: a,
      isDropdownVisibleWithDelay: o,
      recordingKey: t
    })]
  });
  return jsx(_$$x, {
    children: u
  });
}
export function $$k4() {
  let e = q5();
  let t = e?.repo;
  let i = !!(t && Ns(e, t));
  let n = !!(e && Kz(e));
  let s = useDispatch();
  return n && t ? jsx("div", {
    className: l()(T, w),
    children: jsx(C, {
      repo: t,
      dispatch: s,
      trackingContextName: e0.EDITOR_TOOLBAR_ACTION
    })
  }) : i && e.fileRepoId ? jsx("div", {
    className: l()(T, w),
    children: jsx(A, {})
  }) : null;
}
export function $$N1({
  openFile: e
}) {
  let t = iZ();
  return jsxs("div", {
    className: T,
    children: [jsx(ur, {
      openFile: e,
      user: t
    }), jsx(_$$s, {
      openFile: e
    })]
  });
}
function A() {
  let e = useDispatch();
  let t = useContext(X);
  return null === t || t < 1 ? null : jsx(_$$E, {
    className: "left_panel_header_components--button--zghbk",
    onClick: () => e(o5({
      trackingContextName: e0.EDITOR_TOOLBAR_ACTION
    })),
    children: tx("fullscreen.filename_view.branch-count", {
      BRANCHES: t
    })
  });
}
export const x$ = $$I0;
export const t7 = $$N1;
export const Fp = $$S2;
export const SZ = $$j3;
export const l9 = $$k4;