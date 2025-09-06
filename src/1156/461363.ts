import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { Hq } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getI18nString } from "../905/303541";
import { Ju, ZU } from "../905/102752";
import { s3 } from "../figma_app/171177";
import { z6 } from "../figma_app/846841";
import { _9 } from "../figma_app/119420";
import { Pe } from "../1156/713925";
import { E } from "../1156/298326";
export let $$f0 = Ju(function (e) {
  let t = hS(e);
  let {
    claimAPendingAttachmentOrMakeOne,
    setAttachments
  } = _9(e.chatMessagesNodeGuid || "");
  let {
    addCommunityAttribution
  } = Pe();
  let y = useCallback((e, t, r) => {
    let i = getSingletonSceneGraph();
    let s = e[0];
    if (!s) return;
    let a = i.get(s);
    if (!a) return;
    let l = i.getInternalCanvas();
    l && (Hq.system("figmake-inserted-component", () => {
      l.appendChild(a);
    }), E(s, i, setAttachments, () => {}, claimAPendingAttachmentOrMakeOne));
  }, [setAttachments, claimAPendingAttachmentOrMakeOne]);
  let _ = useCallback((e, t) => {
    addCommunityAttribution(t, {
      hubFileId: e.hub_file_id.toString(),
      creatorName: e.editor_name,
      hubFileName: e.file_name
    });
  }, [addCommunityAttribution]);
  return jsx(bL, {
    manager: t,
    width: "fit-content",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("sites.panel.make.attach_design")
        })
      }), jsx(nB, {
        padding: 0,
        children: jsx(s3, {
          name: "chatAssetSearch",
          recordingKey: "chatAssetSearch",
          children: jsx(z6, {
            isFigmake: !0,
            isVisualSearch: !1,
            closeOnEscape: !0,
            assetInsertionCallback: y,
            hubFileFragmentInsertionCallback: _
          })
        })
      })]
    })
  });
}, "ChatAssetSearchModal", ZU.YES);
export const H = $$f0;