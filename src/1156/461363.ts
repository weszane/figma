import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { AIScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getI18nString } from "../905/303541";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { s3 } from "../figma_app/171177";
import { z6 } from "../figma_app/846841";
import { useAttachments } from "../figma_app/119420";
import { Pe } from "../1156/713925";
import { E } from "../1156/298326";
export let $$f0 = registerModal(function (e) {
  let t = useModalManager(e);
  let {
    claimAPendingAttachmentOrMakeOne,
    setAttachments
  } = useAttachments(e.chatMessagesNodeGuid || "");
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
    l && (AIScopeHandler.system("figmake-inserted-component", () => {
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
  return jsx(ModalRootComponent, {
    manager: t,
    width: "fit-content",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("sites.panel.make.attach_design")
        })
      }), jsx(DialogBody, {
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
}, "ChatAssetSearchModal", ModalSupportsBackground.YES);
export const H = $$f0;