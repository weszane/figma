import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { tx } from "../905/303541";
import { s as _$$s } from "../905/328136";
import { A as _$$A } from "../905/351112";
import { gI } from "../figma_app/399472";
import { to } from "../905/156213";
import { EL } from "../figma_app/740025";
import { uF } from "../figma_app/300692";
import { XU } from "../figma_app/756995";
import { aA, Ke } from "../905/636775";
import { H } from "../figma_app/441663";
import { j_, Di, ii } from "../905/217142";
import { S as _$$S } from "../figma_app/783597";
import { p as _$$p } from "../figma_app/93911";
export function $$y1() {
  let e = useDispatch();
  let t = useSelector(e => EL(e));
  let r = useSelector(e => e.publishedWidgets);
  useEffect(() => {
    e(gI());
  }, [e]);
  let o = _$$S(r, t?.id);
  return t && 0 !== o.length ? jsx($$b0, {
    widgets: o
  }) : jsx("div", {
    className: _$$p,
    children: tx("org_view.private_widgets_will_appear_here")
  });
}
export function $$b0({
  widgets: e
}) {
  let t = useDispatch();
  let r = j_();
  useEffect(() => {
    t(gI());
  }, [t]);
  let s = _$$s();
  let {
    showing,
    show,
    data
  } = Di();
  let E = useMemo(() => e.map(e => ({
    widget: e,
    version: uF(e)
  })), [e]);
  let y = useCallback(({
    version: e
  }) => e.name ?? "", []);
  let b = useCallback(({
    widget: e
  }, t) => s(e, t), [s]);
  let v = useCallback(e => {
    if (1 !== e.length) return;
    let r = e[0].widget;
    t(to({
      type: H,
      data: {
        plugin: r
      },
      showModalsBeneath: !0
    }));
  }, [t]);
  let A = useCallback((e, t, r) => {
    1 === e.length && show({
      data: {
        publishedResource: e[0].widget,
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        },
        index: r
      }
    });
  }, [show]);
  return jsxs(Fragment, {
    children: [jsx(_$$A, {
      items: E,
      getAriaLabel: y,
      viewType: XU.GRID,
      handleOpenItem: b,
      handleContextMenu: A,
      handleDeleteKey: r.unwrapOr(!1) ? v : void 0,
      multiselectDisabled: !0,
      isDraggable: !1,
      gridViewProps: {
        containerStyle: S.grid,
        renderTile: I,
        renderTileFooter: T
      }
    }), showing && data && jsx(ii, {
      dropdownData: data
    })]
  });
}
function T({
  widget: e,
  version: t
}) {
  return jsx("div", {
    className: "x78zum5 x1q0g3np xsdox4t x87ps6o",
    children: jsx(aA, {
      widget: e,
      version: t,
      viewContext: "OrgWidgetsView"
    })
  });
}
function I({
  widget: e,
  version: t
}) {
  return jsx(Ke, {
    widget: e,
    version: t,
    isInItemsView: !0
  });
}
let S = {
  grid: {
    padding: "x15fnm84",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  }
};
export const N = $$b0;
export const x = $$y1;