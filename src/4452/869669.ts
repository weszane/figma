import { jsx } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { renderI18nText } from "../905/303541";
import { e as _$$e } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { NotModalType } from "../905/11928";
import { F_ } from "../905/858282";
import { jkr } from "../figma_app/6204";
let $$p0 = "sc_team_creation_modal_onboarding_key";
let g = "seen_sharing_clarity_team_creation_modal_overlay";
let h = userFlagExistsAtomFamily(g);
export function $$x1() {
  let e = useAtomWithSubscription(h);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: jkr,
    priority: N.DEFAULT_MODAL
  }, [e]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: jsx("p", {
      children: renderI18nText("rcs.sharing_clarity.team_creation_modal_description")
    }),
    disableHighlight: !0,
    emphasized: !0,
    isShowing,
    onClose: complete,
    targetKey: $$p0,
    title: renderI18nText("rcs.sharing_clarity.team_creation_modal_title"),
    trackingContextName: "Sharing Clarity Team Creation Modal Onboarding",
    userFlagOnShow: g,
    zIndex: NotModalType.MODAL
  });
}
export const F = $$p0;
export const j = $$x1;