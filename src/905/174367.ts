import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { BannerFullWidth } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { L } from "../905/857916";
import { Y } from "../905/506207";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { c as _$$c } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { TrackingProvider } from "../figma_app/831799";
import { B2, al, b6 } from "../figma_app/681697";
import { u as _$$u } from "../905/997541";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { ProjectByIdForConnectedProjectStatus } from "../figma_app/43951";
function E({
  open: e,
  onClose: t,
  importLocalFile: i,
  isDraggingFileOverModal: a,
  projectId: p
}) {
  let _ = useModalManager({
    open: e,
    onClose: t
  });
  let A = function (e) {
    let t = useSubscription(ProjectByIdForConnectedProjectStatus, {
      projectId: e
    }, {
      enabled: "" !== e
    });
    return useMemo(() => "loaded" !== t.status ? null : getResourceDataOrFallback(t.data?.project?.activeProjectResourceConnections)?.[0], [t]);
  }(p);
  return jsx(ModalRootComponent, {
    manager: _,
    width: 560,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("file_browser.file_import_view.import")
        })
      }), jsx(DialogBody, {
        children: jsxs("div", {
          className: cssBuilderInstance.flex.flexColumn.p16.gap8.$,
          children: [A && jsx("div", {
            className: "file_import_options--inlineBannerContainer--WepYV",
            children: jsx(BannerFullWidth, {
              variant: "default",
              icon: jsx(L, {}),
              children: jsx(BannerMessage, {
                children: getI18nString("resource_connection.when_you_import_files_anyone_in_the_connected_project_can_access_them")
              })
            })
          }), jsxs("div", {
            className: cssBuilderInstance.flex.flex1.flexColumn.justifyCenter.gap24.borderBox.b1.colorBorder.bRadius4.$$if(a, cssBuilderInstance.b2.colorBgSelected.colorBorderSelectedStrong).$,
            style: styleBuilderInstance.add({
              minHeight: "316px",
              borderStyle: "dashed"
            }).$$if(a, {
              borderStyle: "solid"
            }).$,
            children: [jsxs("div", {
              className: cssBuilderInstance.flex.flexColumn.itemsCenter.alignCenter.gap4.lh24.$,
              children: [jsx("span", {
                className: cssBuilderInstance.textBodyLargeStrong.$,
                children: renderI18nText("file_browser.file_import_view.import_header_with_pptx")
              }), jsx("span", {
                className: cssBuilderInstance.textBodyLarge.colorTextSecondary.$,
                style: styleBuilderInstance.add({
                  width: "calc(100% * 2/3)"
                }).$,
                children: renderI18nText("file_browser.file_import_view.import_description_with_pptx")
              })]
            }), jsx("div", {
              className: cssBuilderInstance.flex.flexRow.justifyCenter.gap8.$,
              children: jsx(_$$c, {
                variant: "primary",
                onClick: i,
                children: renderI18nText("file_browser.file_import_view.import_from_computer")
              })
            })]
          })]
        })
      })]
    })
  });
}
export let $$x0 = registerModal(function ({
  open: e,
  onClose: t,
  projectId: i
}) {
  let s = useDispatch();
  let [o, l] = useState(!1);
  let d = B2().unwrapOr(!1);
  let c = useCallback(() => l(!0), []);
  let u = useCallback(() => l(!1), []);
  let m = useCallback(() => {
    t();
    s(_$$u({
      multiple: !0
    }));
  }, [t, s]);
  return jsx(TrackingProvider, {
    name: "import_source_selection_modal",
    children: jsx(Y, {
      isDragTarget: al,
      onTargetDragEnter: c,
      onTargetDragLeave: u,
      onTargetDrop: e => {
        d && s(b6(e));
      },
      children: jsx(E, {
        open: e,
        onClose: t,
        importLocalFile: m,
        isDraggingFileOverModal: o,
        projectId: i
      })
    })
  });
}, "FileImportOptionsModal");
export const O = $$x0;