import { jsx, jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useCallback } from "react";
import { useStore, useDispatch } from "../vendor/514228";
import { glU } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { F } from "../905/680873";
import { d as _$$d } from "../905/86829";
import { t as _$$t } from "../905/303541";
import { _I } from "../figma_app/473493";
import { ds } from "../figma_app/314264";
import { dh } from "../figma_app/186343";
import { T as _$$T } from "../905/858738";
import { tS } from "../figma_app/516028";
import { QU } from "../1250/559338";
import { n0, _4 } from "../figma_app/32128";
import { uF } from "../9410/398228";
import { A } from "../9410/103334";
import { m as _$$m } from "../9410/298357";
import { R } from "../9410/515820";
import { K as _$$K } from "../9410/153133";
import { d as _$$d2 } from "../9410/162990";
import { _$ } from "../figma_app/379850";
import { l7 } from "../figma_app/88239";
import { $ } from "../9410/841699";
export function $$j0() {
  let e = l7();
  let t = F(e);
  let i = n0();
  let j = _$$K();
  let I = tS();
  let {
    height,
    setHeight,
    isOpen,
    setIsOpen,
    devHandoffShowAllPages,
    setDevHandoffShowAllPages
  } = _$$d2({
    defaultIsOpen: i.length > 1
  });
  let D = F(isOpen);
  useLayoutEffect(() => {
    e && setIsOpen(!0);
  }, [e, setIsOpen]);
  let M = useStore();
  let P = useCallback(() => {
    if (t.current) return;
    let e = !D.current;
    ds("pages_panel_open_toggle", I, M.getState(), {
      isPagesOpen: e
    }, {
      forwardToDatadog: !0
    });
    setIsOpen(e);
  }, [I, D, setIsOpen, t, M]);
  let {
    pagesToDisplay,
    showAllButton
  } = function ({
    pagesList: e,
    showAll: t,
    setShowAll: i
  }) {
    let n = _I();
    let a = dh();
    if (!n) return {
      pagesToDisplay: e
    };
    let o = !1;
    let l = e.filter(e => {
      let t = glU.nodeStatusesOnPage(e.nodeId).length > 0;
      t && (o = !0);
      return t || e.nodeId === a;
    });
    return o && l.length !== e.length ? t ? {
      pagesToDisplay: e,
      showAllButton: jsx(_$$d, {
        label: _$$t("dev_handoff.pages.hide_other"),
        onClick: () => i(!1)
      })
    } : {
      pagesToDisplay: l,
      showAllButton: jsx(_$$d, {
        label: _$$t("dev_handoff.pages.show_all"),
        onClick: () => i(!0)
      })
    } : {
      pagesToDisplay: e
    };
  }({
    pagesList: i,
    showAll: devHandoffShowAllPages,
    setShowAll: setDevHandoffShowAllPages
  });
  let U = !_$$T();
  let G = uF + 72 + 32;
  let K = _4();
  let H = useDispatch();
  let z = useCallback(() => {
    _$(H, debugState.getState().selectedView, "overview_search_clicked");
    K();
  }, [H, K]);
  return jsxs(A, {
    isFullHeight: !1,
    children: [jsx($, {
      devFocusedOnboarding: !0
    }), I && jsx(QU, {
      fileKey: I
    }), jsx(R, {
      extraControls: jsx("div", {
        className: "dev_handoff_page_selector--showMoreContainer--d2XTe",
        children: showAllButton
      }),
      filterState: devHandoffShowAllPages ? _$$m.ALL : _$$m.FILTERED,
      height,
      isOpen,
      isReadOnly: !0,
      onCanvasSearch: z,
      onHeightChange: setHeight,
      onPageContextMenu: j,
      onToggle: P,
      pages: pagesToDisplay,
      panelHeadersHeight: G,
      shouldHighlightActivePage: !e,
      showHeader: U
    })]
  });
}
export const o = $$j0;