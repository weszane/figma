import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { bL } from "../905/911410";
import { vo, Y9, hE, jk, nB } from "../figma_app/272243";
import { K } from "../905/443068";
import { i as _$$i } from "../905/22844";
import { n3, VariableStyleId } from "../905/859698";
import { Fullscreen } from "../figma_app/763686";
import { scopeAwareFunction } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey } from "../figma_app/878298";
import { k as _$$k } from "../905/582200";
import { Point } from "../905/736624";
import { renderI18nText, getI18nString } from "../905/303541";
import { sw } from "../figma_app/914957";
import { p8 } from "../figma_app/722362";
import { useCurrentFileKey } from "../figma_app/516028";
import { IW } from "../figma_app/646357";
import { Fk } from "../figma_app/167249";
import { Ib } from "../905/129884";
import { Nr } from "../figma_app/463500";
import { zK, zM } from "../905/182453";
import { Gf, Zv, _f } from "../figma_app/293304";
let N = Gf;
let $$C0 = "slides-edit-text-style-modal";
export function $$w1() {
  let e = useDispatch();
  let t = p8("isReadOnly");
  let r = useCurrentFileKey();
  let w = "slidesEditStyleModal";
  let {
    inheritTextStyleKey,
    styleIdForText,
    stylePreviewShown,
    selectedStyleProperties
  } = selectWithShallowEqual(e => ({
    inheritTextStyleKey: e.mirror.selectionProperties.inheritTextStyleKey,
    styleIdForText: e.mirror.selectionProperties.styleIdForText,
    stylePreviewShown: e.stylePreviewShown,
    selectedStyleProperties: e.mirror.selectedStyleProperties
  }));
  let D = sessionLocalIDToString(selectedStyleProperties.guid);
  let k = Fk((e, t) => {
    let r = e.get(t);
    return r?.name || "";
  }, D);
  if (!stylePreviewShown.isShown || stylePreviewShown.isCreating || !selectedStyleProperties && !inheritTextStyleKey && !styleIdForText && !D) return null;
  let M = () => {
    Fullscreen?.selectStyle(n3.INVALID, VariableStyleId.INVALID);
    e(sw());
  };
  let F = Zv(IW(stylePreviewShown), selectedStyleProperties, k);
  let j = scopeAwareFunction.user("slides-delete-style", () => {
    stylePreviewShown.style.isLocal && Nr(stylePreviewShown.style, r);
    M();
  });
  return jsx(zK.Provider, {
    value: zM.EDIT_STYLE,
    children: jsx(_$$k, {
      name: "slides_edit_text_style",
      children: jsx(bL, {
        width: N,
        defaultPosition: new Point(stylePreviewShown.rowLeft - N, stylePreviewShown.rowTop),
        onClose: M,
        draggable: "header",
        children: jsxs(vo, {
          children: [jsxs(Y9, {
            children: [jsx(hE, {
              children: renderI18nText("slides.properties_panel.text_style.edit_text_style")
            }), jsx(jk, {
              children: jsx(K, {
                htmlAttributes: {
                  "data-tooltip-type": Ib.TEXT,
                  "data-tooltip": getI18nString("slides.properties_panel.text_style.delete_style")
                },
                "aria-label": getI18nString("slides.properties_panel.text_style.delete_style"),
                onClick: j,
                recordingKey: generateRecordingKey(w, "deleteStyle"),
                children: jsx(_$$i, {})
              })
            })]
          }), jsx(nB, {
            padding: 0,
            children: jsx(_f, {
              type: selectedStyleProperties.styleType,
              onEnterPressed: () => e(sw()),
              viewOnly: t,
              selectedStyleProperties,
              isInspectPanel: !1,
              styleName: F,
              recordingKey: generateRecordingKey(w, "editTextStyle")
            }, "style-preview-panel")
          })]
        })
      }, $$C0)
    })
  });
}
export const W = $$C0;
export const h = $$w1;