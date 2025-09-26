import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { customHistory } from "../905/612521";
import { KeyCodes, ModifierKeyCodes } from "../905/63728";
import { getI18nString } from "../905/303541";
import { hideModalHandler } from "../905/156213";
import { useLibraryFileLink } from "../905/217163";
import { areAllSelectedInstances } from "../905/456912";
import { selectCurrentFile } from "../figma_app/516028";
import { K } from "../905/770444";
import { cq } from "../905/794154";
import { M$ } from "../figma_app/297822";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
export function $$f0({
  asset: e,
  afterSuccessfulInsert: t,
  componentInsertSwapCallback: i,
  source: f,
  disableActionShortcuts: _
}) {
  let A = K(!0);
  let {
    close
  } = cq();
  let b = selectCurrentFile();
  let v = areAllSelectedInstances();
  let I = useIsSelectedFigmakeFullscreen();
  let E = useDispatch();
  let x = useMemo(() => {
    let n = {
      text: getI18nString("design_systems.assets_panel.insert"),
      shortcuts: _ ? [] : [{
        key: KeyCodes.ENTER
      }],
      onAction: () => {
        i({
          altKey: !1
        }, e);
        t();
        I && E(hideModalHandler());
        close();
      }
    };
    return M$(n, f);
  }, [_, f, i, e, t, I, close, E]);
  let S = useMemo(() => {
    let n = v ? {
      text: getI18nString("design_systems.instance_panel.swap_instance"),
      shortcuts: _ ? [] : [{
        key: KeyCodes.ENTER,
        modifier: [ModifierKeyCodes.ALT]
      }],
      onAction: () => {
        i({
          altKey: !0
        }, e);
        t();
        close();
      }
    } : void 0;
    return n ? M$(n, f) : void 0;
  }, [e, t, i, close, _, v, f]);
  let w = useLibraryFileLink({
    libraryKey: e.library_key,
    nodeId: e.node_id,
    mainComponent: !0
  });
  return {
    primaryAction: x,
    secondaryAction: useMemo(() => {
      let t = e.library_key === b?.libraryKey;
      let i = w.data;
      return t ? M$({
        text: getI18nString("design_systems.assets_panel.go_to_main"),
        shortcuts: _ ? [] : [{
          key: KeyCodes.ENTER,
          modifier: [ModifierKeyCodes.META]
        }],
        onAction: () => A(e.node_id)
      }, f) : i?.link ? M$({
        text: "community" === i.type ? getI18nString("design_systems.instance_panel.view_library_in_community") : getI18nString("design_systems.assets_panel.go_to_main"),
        shortcuts: _ ? [] : [{
          key: KeyCodes.ENTER,
          modifier: [ModifierKeyCodes.META]
        }],
        onAction: () => customHistory.redirect(i.link, "_blank")
      }, f) : void 0;
    }, [e, _, A, w, b?.libraryKey, f]),
    tertiaryAction: S
  };
}
export const b = $$f0;