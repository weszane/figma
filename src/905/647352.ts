import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../905/521428";
import o from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { formatList } from "../figma_app/930338";
import { NG } from "../figma_app/709893";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { processLocalComponents } from "../figma_app/80990";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { selectStyledLibraryItemsWithStatus, selectComponentLibraryItemsWithStatus, selectStateGroupLibraryItemsWithStatus } from "../figma_app/803787";
import { KindEnum } from "../905/129884";
import { ND } from "../figma_app/76115";
import { Label } from "../905/270045";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { useSingleEffect } from "../905/791079";
import { handlePublishWorkflow } from "../figma_app/519839";
import { JT } from "../figma_app/173838";
import { selectCurrentFile } from "../figma_app/516028";
import { LibrarySourceEnum } from "../figma_app/633080";
import { registerModal } from "../905/102752";
import { libraryPublishingModeAtom } from "../figma_app/825489";
import { U as _$$U } from "../905/29665";
import { T as _$$T } from "../905/485734";
import { libraryAssetsAtom } from "../905/340158";
import { ConfirmationModal2 } from "../figma_app/918700";
import { OpenFileButton } from "../905/209285";
import { I as _$$I } from "../905/266213";
import { isLibraryModalContextAvailable, useLibraryModalContextOptional } from "../905/753512";
import { LibraryModalSections, useKeyboardNavigationForClickable } from "../905/66449";
import { PublishingUIContext } from "../905/514666";
var l = o;
function O() {
  return jsx(_$$T, {
    noMargin: !0,
    text: renderI18nText("design_systems.internal_community_unpublish_warning")
  });
}
let F = "confirm_unpublish_modal--modalContent--gX17Y modal--modalContent--P643j";
let M = registerModal(function ({
  libraryModalSessionId: e
}) {
  let t = useDispatch<AppDispatch>();
  let i = selectCurrentFile();
  let r = useAtomWithSubscription(libraryPublishingModeAtom);
  let s = useAtomWithSubscription(libraryAssetsAtom);
  let o = JT();
  useSingleEffect(() => {
    analyticsEventManager.trackDefinedEvent("design_systems_modals.unpublish_modal_opened", {
      libraryModalSessionId: e,
      orgId: i?.parentOrgId ?? void 0,
      fileKey: i?.key,
      teamId: i?.teamId ?? void 0,
      workspaceId: i?.team?.workspaceId ?? void 0
    });
  });
  let l = "loading" === s.status;
  return jsx(ConfirmationModal2, {
    disableConfirm: l,
    onConfirm: () => t(handlePublishWorkflow({
      localAssetsWithDenormalizedPublishInfo: s.data ?? {},
      hubFileId: getFeatureFlags().cmty_lib_admin_publish && r === LibrarySourceEnum.HUBFILE && o ? o.id : void 0
    })),
    confirmText: getI18nString("design_systems.libraries_modal.remove_library"),
    confirmationTitle: getI18nString("design_systems.libraries_modal.remove_library_modal_title"),
    children: getFeatureFlags().cmty_lib_admin_publish && o ? jsxs("div", {
      className: F,
      children: [jsx("div", {
        className: cssBuilderInstance.mb8.$,
        children: renderI18nText("design_systems.libraries_modal.this_action_will_remove_all_of_the_components_in_this_file_from_the_library")
      }), jsx(_$$U, {
        label: jsx(Label, {
          children: renderI18nText("design_systems.internal_community_library_unpublish")
        })
      }), r === LibrarySourceEnum.HUBFILE && jsx(O, {})]
    }) : jsx("div", {
      className: F,
      children: renderI18nText("design_systems.libraries_modal.this_action_will_remove_all_of_the_components_in_this_file_from_the_library")
    })
  });
}, "ConfirmUnpublishModal");
let z = "subscription_file_view_footer--fileViewFooterButtons--qrfWL";
let H = "subscription_file_view_footer--fileViewFooterButton--I2olA";
export function $$W0(e) {
  let t = isLibraryModalContextAvailable();
  let {
    sessionId
  } = useLibraryModalContextOptional() ?? {};
  let {
    teams,
    localStyles,
    localComponents,
    localStateGroups
  } = selectWithShallowEqual(e => ({
    teams: e.teams,
    localStyles: selectStyledLibraryItemsWithStatus(e),
    localComponents: selectComponentLibraryItemsWithStatus(e),
    localStateGroups: selectStateGroupLibraryItemsWithStatus(e)
  }));
  let E = useSelector(e => e.mirror.appModel.isReadOnly);
  let x = !!e.editingFile && e.editingFile.library_key === e.libraryKey;
  let S = useMemo(() => ND(localStyles), [localStyles]);
  let w = useMemo(() => ND(processLocalComponents(localComponents)), [localComponents]);
  let C = useMemo(() => ND(localStateGroups), [localStateGroups]);
  let T = useDispatch<AppDispatch>();
  let k = useCallback(() => {
    T(showModalHandler({
      type: M,
      data: {
        libraryModalSessionId: sessionId
      }
    }));
  }, [T, sessionId]);
  let R = function (e, t) {
    let i;
    let n = getI18nString("design_systems.libraries_modal.plural.num_component", {
      numComponents: e
    });
    let r = getI18nString("design_systems.libraries_modal.plural.num_style", {
      numStyles: t
    });
    if (e > 0 && t > 0) i = formatList([n, r], "unit");else if (e > 0) i = n;else {
      if (!(t > 0)) return "";
      i = r;
    }
    let a = getI18nString("design_systems.libraries_modal.used_in_this_file");
    return getI18nString("design_systems.libraries_modal.num_assets_used_in_this_file", {
      assetsCountString: i,
      usedInThisFileString: a
    });
  }(e.numUsedComponents, e.numUsedStyles);
  let N = useRef(null);
  let P = NG({
    text: R,
    textRef: N
  });
  let O = l()("subscription_file_view_footer--fileViewFooter--eE0gh file_view_styles--fileViewFooter--y5O8t", {
    "subscription_file_view_footer--footerRedesign--QtVTm": t
  });
  if (!x) return jsxs("div", {
    className: O,
    children: [jsx("div", {
      className: "subscription_file_view_footer--footerTextWithEllipsis--ocx7T ellipsis--ellipsis--Tjyfa",
      ref: N,
      "data-tooltip-type": P && KindEnum.TEXT,
      "data-tooltip": R,
      "data-tooltip-max-width": 340,
      "data-tooltip-show-immediately": !0,
      children: R
    }), jsxs("div", {
      className: z,
      children: [jsx(OpenFileButton, {
        libraryKey: e.libraryKey
      }), t ? jsx(K, {
        onClick: e.onRemapLibraryClick,
        variant: "secondary",
        kbPath: [LibraryModalSections.TabBodySection.Footer],
        kbColumn: 2,
        children: renderI18nText("design_systems.libraries_modal.swap_library")
      }) : jsx("div", {
        className: H,
        children: jsx(Button, {
          variant: "secondary",
          recordingKey: "subscriptionFileView.swapLibrary",
          onClick: e.onRemapLibraryClick,
          children: renderI18nText("design_systems.libraries_modal.swap_library")
        })
      })]
    })]
  });
  {
    var D;
    let r = S.numUpdates;
    let a = e.editingFile.team_id && teams[e.editingFile.team_id] || null;
    hasTeamPaidAccess(a) && (r += w.numUpdates + C.numUpdates);
    let l = (D = r) > 0 ? renderI18nText("design_systems.libraries_modal.current_file_has_x_changes", {
      numChangesText: jsx("div", {
        className: cssBuilderInstance.fontSemiBold.$,
        children: renderI18nText("design_systems.libraries_modal.x_changes", {
          numChanges: D
        })
      })
    }) : getI18nString("design_systems.libraries_modal.current_file_is_published");
    return jsxs("div", {
      className: O,
      children: [jsx("div", {
        className: "subscription_file_view_footer--fileViewFooterText--Qn9-M",
        children: l
      }), jsxs("div", {
        className: z,
        children: [t ? jsx(K, {
          disabled: E,
          onClick: k,
          variant: "secondary",
          kbPath: [LibraryModalSections.TabBodySection.Footer],
          kbColumn: 1,
          children: renderI18nText("design_systems.libraries_modal.unpublish")
        }) : jsx("div", {
          className: H,
          children: jsx(Button, {
            variant: "secondary",
            disabled: E,
            onClick: k,
            children: renderI18nText("design_systems.libraries_modal.unpublish")
          })
        }), jsx("div", {
          className: H,
          children: jsx(_$$I, {
            entryPoint: PublishingUIContext.LIBRARY_MODAL_FILE_VIEW,
            publishedState: jsx(Button, {
              variant: "primary",
              disabled: !0,
              children: renderI18nText("design_systems.libraries_modal.publish_changes")
            }),
            emptyState: jsx(Button, {
              variant: "primary",
              disabled: !0,
              children: renderI18nText("design_systems.libraries_modal.publish_changes")
            }),
            libraryModalSessionId: sessionId
          })
        })]
      })]
    });
  }
}
function K({
  disabled: e,
  onClick: t,
  variant: i,
  kbPath: r,
  kbColumn: a,
  children: o
}) {
  let {
    setKeyboardNavigationElement
  } = useKeyboardNavigationForClickable({
    path: r,
    column: a
  });
  return jsx("div", {
    className: cssBuilderInstance.ml6.$,
    children: jsx(Button, {
      variant: i,
      disabled: e,
      onClick: t,
      ref: setKeyboardNavigationElement,
      children: o
    })
  });
}
export const G = $$W0;
