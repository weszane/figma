import { useDispatch } from "react-redux";
import { nt } from "../figma_app/687776";
import { h } from "../figma_app/334471";
import { p as _$$p, u as _$$u } from "../1250/964548";
import { E } from "../figma_app/61705";
export function $$l0({
  newFileFrom: e,
  folderId: t,
  contextClicked: n,
  forceOpenNewTab: l
}) {
  let d = useDispatch();
  let {
    data,
    status
  } = nt(t);
  let u = h(data);
  let m = E({
    isDraftsFolder: !0,
    newFileFrom: e,
    forceOpenNewTab: l
  });
  let p = "loading" === status;
  return {
    newFiles: u.map(({
      editorType: e,
      canCreate: t
    }) => _$$p({
      editorType: e,
      isDisabled: !t,
      isLoading: p,
      onClick: m({
        editorType: e,
        triggerElement: "omnicreate",
        contextClicked: n
      })
    })),
    import: _$$u({
      isLoading: p,
      dispatch: d,
      targetFolderId: t
    })
  };
}
export const Q = $$l0;
