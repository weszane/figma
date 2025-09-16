import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { customHistory } from "../905/612521";
import { ButtonSecondary } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
export function $$c0() {
  let e = useModalManager({
    open: !0,
    onClose: () => {
      customHistory.reload("BranchMemoryWarning");
    }
  });
  return jsx(ModalRootComponent, {
    manager: e,
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("collaboration.branching.file_out_of_memory")
        })
      }), jsxs(DialogBody, {
        children: [jsx("div", {
          children: renderI18nText("collaboration.branching.closing_other_tabs_and_reloading_figma_may_reduce_browser_memory_and_allow_you_to_continue_reviewing_and_merging_this_branch")
        }), jsx("div", {
          className: "memory_warning--body---WIWC",
          children: renderI18nText("collaboration.branching.for_more_help_visit_our_help_center", {
            helpCenterLink: jsx("a", {
              href: "https://help.figma.com/hc/articles/360040528173",
              target: "_blank",
              className: "memory_warning--blueLink--JAkM3 blue_link--blueLink--9rlnd",
              children: renderI18nText("collaboration.branching.help_center")
            })
          })
        })]
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(ButtonSecondary, {
            className: "memory_warning--reloadButton---KrxB",
            onClick: () => customHistory.reload("BranchMemoryWarning"),
            children: renderI18nText("collaboration.branching.reload_page")
          })
        })
      })]
    })
  });
}
export const E = $$c0;