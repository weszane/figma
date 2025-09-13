import { jsx } from "react/jsx-runtime";
import { useSubscription } from "../figma_app/288654";
import { XHR } from "../905/910117";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { X } from "../905/859195";
import { yJ } from "../figma_app/78808";
import { showModalHandler, hideModal } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrgId } from "../905/845253";
import { FFileType } from "../figma_app/191312";
import { FileTemplateView } from "../figma_app/43951";
import { cD } from "../figma_app/598018";
import { registerModal } from "../905/102752";
import { yX } from "../figma_app/918700";
import { r as _$$r } from "../905/149895";
export function $$I1(e, t) {
  return () => {
    e(showModalHandler({
      type: x,
      data: {
        dispatch: e,
        fileKey: t
      }
    }));
  };
}
function E({
  title: e,
  content: t,
  confirmText: i,
  trackedConfirmationProperties: r,
  destructive: a,
  onConfirm: l
}) {
  return jsx(yX, {
    size: 360,
    confirmationTitle: jsx("p", {
      className: _$$s.fontSemiBold.font11.$,
      children: e
    }),
    confirmText: i,
    cancelText: getI18nString("general.cancel"),
    destructive: a,
    onConfirm: l,
    trackedConfirmationProperties: r,
    children: jsx("p", {
      className: _$$s.colorText.pr8.$,
      style: {
        marginBottom: "-8px"
      },
      children: t
    })
  });
}
let x = registerModal(function ({
  dispatch: e,
  fileKey: t
}) {
  let i = selectCurrentFile();
  let s = useCurrentUserOrgId();
  let y = cD();
  let b = useSubscription(FileTemplateView, {
    fileKey: t
  }, {
    enabled: !i
  });
  let {
    unpublishTemplate
  } = _$$r();
  let {
    unpublishTemplate: _unpublishTemplate
  } = X();
  let S = i?.editorType === FFileType.SLIDES;
  let w = i?.editorType === FFileType.COOPER;
  let C = i?.template || b.data?.file?.template;
  if (!C) return null;
  let T = async () => {
    try {
      await XHR.del(`/api/templates/file/${C.fileKey}`);
    } catch (t) {
      e(VisualBellActions.enqueue({
        message: getI18nString("templates.unpublishing.bell.failure"),
        type: "template-unpublish-error",
        error: !0
      }));
      return;
    }
    e(hideModal());
    e(VisualBellActions.enqueue({
      message: getI18nString("templates.unpublishing.bell.success"),
      type: "template-unpublish-success"
    }));
    e(yJ({
      file: {
        key: C.fileKey,
        is_team_template: !1
      }
    }));
  };
  return jsx(fu, {
    name: "Team Template Unpublish Confirmation Modal",
    properties: {
      orgId: s,
      teamId: y
    },
    children: jsx(E, {
      title: renderI18nText("templates.confirmation.unpublish.title"),
      content: renderI18nText("templates.confirmation.unpublish.description_v2", {
        templateName: C.name
      }),
      confirmText: renderI18nText("templates.detail.unpublish_button"),
      destructive: !0,
      onConfirm: S && unpublishTemplate ? () => unpublishTemplate(t) : w && _unpublishTemplate ? () => _unpublishTemplate(t) : T,
      trackedConfirmationProperties: {
        trackingDescriptor: _$$c.UNPUBLISH,
        fileKey: C.fileKey,
        productType: i?.editorType
      }
    })
  });
}, "UnpublishConfirmationModal");
let $$S0 = registerModal(E, "TemplateConfirmationModal");
export const X0 = $$S0;
export const yz = $$I1;