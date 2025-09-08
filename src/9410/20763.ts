import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { $n } from "../905/521428";
import { o as _$$o } from "../905/89370";
import { CanvasSearchHelpers, FilterOption, PageViewMode } from "../figma_app/763686";
import { scopeAwareFunction } from "../905/189185";
import { useAtomWithSubscription } from "../figma_app/27355";
import u from "classnames";
import { globalPerfTimer } from "../905/542194";
import { am } from "../figma_app/901889";
import { Uz, Fo } from "../905/63728";
import { Pt } from "../figma_app/806412";
import { Fk } from "../905/125333";
import { b as _$$b } from "../figma_app/556971";
import { getI18nString, renderI18nText } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { lg } from "../figma_app/976749";
import { jr, W0 } from "../figma_app/896988";
import { Z } from "../905/104740";
import { aq } from "../figma_app/412189";
import { Ib } from "../905/129884";
import { H as _$$H } from "../9410/748457";
import { v9, ei, N6, Sq, Z9, _E } from "../9410/733790";
var p = u;
export function $$I0({
  query: e,
  value: t,
  onChange: i,
  onFocus: u,
  recordingKey: I,
  hasMultipleSelections: k
}) {
  let N = useDispatch();
  let A = aq();
  let O = Z("canvas_search_navigate");
  let L = useSelector(e => e.canvasSearch.scope);
  let {
    total
  } = useAtomWithSubscription(Fk);
  let D = "whiteboard" === lg();
  let [M, P] = useState(!1);
  let F = _$$b();
  let B = e.toLocaleLowerCase() !== t.toLocaleLowerCase();
  let U = am();
  let G = !e || !total;
  let K = scopeAwareFunction.user("canvas-search-replace", i => {
    if (k) {
      let {
        numReplaced,
        timeMs
      } = CanvasSearchHelpers.replaceInMultipleResults(t, {
        preserveCase: B
      }, FilterOption.ONLY_ACTIVE);
      U("canvas_search_multi_replace", {
        source: i,
        timeMs,
        numReplaced,
        replacementIncludesOriginal: t.toLocaleLowerCase().includes(e.toLocaleLowerCase())
      });
      P(!0);
      return;
    }
    let r = CanvasSearchHelpers.replaceInActiveResult(t, {
      preserveCase: B
    });
    P(!0);
    U("canvas_search_replace", {
      source: i,
      replacementIncludesOriginal: t.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    });
    O(r, {
      delay: 300,
      additionalTrackEventParams: {
        searchScope: PageViewMode[L]
      }
    });
  });
  let H = scopeAwareFunction.user("canvas-search-replace-all", () => {
    globalPerfTimer.start("canvas_search_replace_all");
    let {
      numReplaced,
      timeMs
    } = CanvasSearchHelpers.replaceInMultipleResults(t, {
      preserveCase: B
    }, FilterOption.ALL);
    numReplaced > 0 && (P(!0), N(_$$F.enqueue({
      type: "canvas-search-replace-all",
      message: getI18nString(D ? "canvas_search.replace_all_message_figjam" : L === PageViewMode.ACTIVE_PAGE ? "canvas_search.replace_all_message" : "canvas_search.replace_all_message_all_pages", {
        count: numReplaced
      })
    })));
    U("canvas_search_replace_all", {
      source: "button",
      timeMs,
      numReplaced,
      replacementIncludesOriginal: t.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    });
    globalPerfTimer.tryStop("canvas_search_replace_all");
  });
  let z = jsxs(Fragment, {
    children: [!D && jsx("div", {
      className: p()(v9, {
        [ei]: "" === t
      }),
      children: jsx(_$$o, {})
    }), jsx(_$$H, {
      value: t,
      placeholder: getI18nString("canvas_search.replace_placeholder"),
      recordingKey: Pt(I, "replace_input"),
      onChange: i,
      onFocus: e => {
        u?.(e, !A());
      },
      onKeyDown: e => {
        e.keyCode === Uz.ENTER ? (K("enter"), e.stopPropagation()) : M && Fo(e) && jr(e, W0.YES) && e.stopPropagation();
      },
      shiftEnterInsertsNewline: !0
    })]
  });
  return jsxs("div", {
    children: [jsx("div", {
      className: p()(N6, F && Sq),
      children: D ? z : jsx("div", {
        className: Z9,
        children: z
      })
    }), jsxs("div", {
      className: _E,
      children: [jsx($n, {
        variant: "secondary",
        disabled: G,
        htmlAttributes: {
          "data-tooltip": getI18nString("canvas_search.replace_one"),
          "data-tooltip-type": Ib.TEXT
        },
        onClick: () => K("button"),
        recordingKey: Pt(I, "replace_one"),
        children: renderI18nText("canvas_search.replace_one")
      }), jsx($n, {
        disabled: G,
        variant: "secondary",
        onClick: H,
        recordingKey: Pt(I, "replace_all"),
        children: renderI18nText("canvas_search.replace_all")
      })]
    })]
  });
}
export const a = $$I0;