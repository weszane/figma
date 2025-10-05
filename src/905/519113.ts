import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useId, useMemo, forwardRef, useCallback, useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNotNullish } from "../figma_app/95419";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter } from "../figma_app/272243";
// import { LoadingSpinner } from "../905/443820";
import { Checkbox } from "../905/274480";
import { Label, HiddenLabel } from "../905/270045";
import { Button } from "../905/521428";
import { Link } from "../905/438674";
import { e as _$$e } from "../905/693478";
import { VariablesBindings, Fullscreen, StateGroupErrorType, VariableSetErrorType, VariableErrorType } from "../figma_app/763686";
import { stylex } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { useLatestRef } from "../figma_app/922077";
import { buildUploadUrl } from "../figma_app/169182";
import { KeyCodes } from "../905/63728";
import { useSubscription } from "../figma_app/288654";
import { APILoadingStatus } from "../905/520829";
import { BrowserInfo } from "../figma_app/778880";
import { logError } from "../905/714362";
import { WAFImage } from "../905/675859";
import { O as _$$O } from "../905/257139";
import { oz, zq } from "../figma_app/782261";
import { IW } from "../figma_app/563413";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { TS, ZS, iA } from "../figma_app/519839";
import { hideModal, showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { JT } from "../figma_app/173838";
import { getSelectedFile } from "../905/766303";
import { processLocalComponents } from "../figma_app/80990";
import { i6, v2, x$ } from "../905/188715";
import { C as _$$C, O as _$$O2 } from "../905/696698";
import { B as _$$B } from "../905/521763";
import { Ml, bj } from "../905/971098";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { d$ } from "../figma_app/664693";
import { MIXED_MARKER } from "../905/216495";
import { nN, SR } from "../figma_app/852050";
import { useOpenFileLibraryKey, selectCurrentFile, useOpenFileObjectWithSinatraType } from "../figma_app/516028";
import { isOrgOrWorkspaceContainer, hasAssetError, getAllAssets, isNewOrChangedOrDeleted, hasVariableSetError, isStagedStatus, isActiveStagingStatus, hasContainingStateGroup, remapNodeIdsForMove, isTemplateAsset } from "../figma_app/646357";
import { FFileType, FContainerType, FAccessLevelType } from "../figma_app/191312";
import { PublishingModalView } from "../figma_app/43951";
import { useCurrentPublicPlan, getParentOrgIdIfOrgLevel } from "../figma_app/465071";
import { Wz, MW, ju, cM, MH, dM, fA, y6, x$ as _$$x$, oB as _$$oB, JI, Dc, Iy, Mh, Pd } from "../figma_app/803787";
import { O as _$$O3 } from "../905/566074";
import { LibraryPublishStatusEnum, LibrarySourceEnum, PrimaryWorkflowEnum, StagingStatusEnum } from "../figma_app/633080";
import { KindEnum } from "../905/129884";
import { Y as _$$Y } from "../905/465068";
import { registerModal } from "../905/102752";
import { v as _$$v } from "../905/318279";
import { libraryPublishingModeAtom } from "../figma_app/825489";
import { Iq } from "../905/723429";
import { i as _$$i } from "../905/797975";
import { U as _$$U } from "../905/275247";
import { r as _$$r2 } from "../905/571838";
import { $ as _$$$ } from "../figma_app/61705";
import { FileBrowserLocation } from "../figma_app/915202";
import { JT as _$$JT } from "../figma_app/632248";
import { RL, qy, B3, Ag } from "../figma_app/862289";
import { cq } from "../905/794154";
import { FlexBox } from "../905/222272";
import { Panel } from "../905/236825";
import { z as _$$z } from "../905/491916";
import { cw, BT } from "../905/514666";
import { ExtensionFeatureKey } from "../905/946805";
import { $I } from "../figma_app/322845";
import { z as _$$z2 } from "../905/550439";
import { l as _$$l } from "../905/29665";
import { fo, og, UJ, Xm } from "../905/935570";
import { R as _$$R } from "../905/256203";
import { k as _$$k3 } from "../905/700890";
import { WithTrackedButton } from "../figma_app/617427";
import { AutoLayout, Spacer } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { isBranch } from "../905/760074";
import { liveStoreInstance } from "../905/713695";
import { bL as _$$bL, mc, c$ } from "../905/493196";
import { useSelectPrimitiveState, SelectPrimitiveTrigger } from "../905/408073";
import { r as _$$r3 } from "../905/571562";
import { textDisplayConfig } from "../905/687265";
import { selectWithShallowEqual } from "../905/103090";
import { ms, MM, c$ as _$$c$ } from "../figma_app/236327";
import { LoadingSpinner } from "../figma_app/858013";
import { G as _$$G } from "../905/750789";
import { p as _$$p } from "../905/927118";
import { useMemoStable } from "../905/19536";
import { useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { isExamplePreset } from "../figma_app/915774";
import { LinkPrimitive } from "../figma_app/496441";
import { SvgComponent } from "../905/714743";
import { $8, Ni, md as _$$md, i4, $j, nw, Np } from "../905/737988";
import { A as _$$A } from "../1617/316388";
import { T as _$$T } from "../905/485734";
import { throwTypeError } from "../figma_app/465776";
import { IconButton } from "../905/443068";
import { A as _$$A2 } from "../905/24328";
import { Z as _$$Z } from "../905/279476";
import { e as _$$e2 } from "../905/916195";
import { ResponsiveSetIdHandler } from "../figma_app/243058";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { generateRecordingKey } from "../figma_app/878298";
import td from "classnames";
import { parsePxInt } from "../figma_app/783094";
import { filesByLibraryKeyAtom } from "../905/977779";
import { setNodeSymbolPublishable, setNodePublishable, clearSelection, addToSelection } from "../figma_app/741237";
import { useDropdownState } from "../905/848862";
import { M as _$$M2 } from "../905/771870";
import { L as _$$L } from "../905/332753";
import { getAndResetThumbnailAtom, toPngDataUrl } from "../905/405710";
import { J as _$$J2 } from "../905/273120";
import { zi } from "../905/824449";
import { registerTooltip } from "../905/524523";
import { Gu0 } from "../figma_app/27776";
import { A as _$$A3 } from "../5724/388041";
import { A as _$$A4 } from "../svg/660901";
import { t as _$$t2 } from "../905/340158";
import { O as _$$O4 } from "../905/969533";
import { k as _$$k4 } from "../905/44647";
import { compareNumbers } from "../figma_app/766708";
import { C as _$$C2 } from "../905/520159";
import { F as _$$F } from "../905/604606";
function K(e) {
  let {
    localKits
  } = Ml();
  let {
    validationResults
  } = e;
  let r = localKits[0];
  return 1 === localKits.length && getFeatureFlags().first_draft_publish_ux && validationResults ? jsxs("div", {
    className: cssBuilderInstance.pt10.$,
    children: [jsx(d$, {
      validationFailures: validationResults,
      selectedKit: r,
      category: i6.STRUCTURE,
      supportedKitType: v2.FIRST_PARTY
    }), jsx(d$, {
      validationFailures: validationResults,
      selectedKit: r,
      category: i6.EXAMPLES,
      supportedKitType: v2.FIRST_PARTY
    }), jsx(d$, {
      validationFailures: validationResults,
      selectedKit: r,
      category: i6.THEME,
      supportedKitType: v2.FIRST_PARTY
    })]
  }) : null;
}
function ey() {
  let e;
  let t = RL(_$$JT.PUBLISH_LIBRARY_FOR_AI, Iq);
  let i = useOpenFileLibraryKey();
  let {
    state,
    start
  } = t;
  let {
    close
  } = cq();
  let o = _$$$({
    isDraftsFolder: !0,
    editorType: FFileType.FIGMAKE,
    newFileFrom: FileBrowserLocation.LIBRARY_EXTRACT_TOAST,
    contextClicked: "library_extract_toast",
    forceOpenNewTab: !0
  });
  state === qy.RUNNING ? e = jsxs(FlexBox, {
    fullWidth: !0,
    children: [jsx(LoadingSpinner, {}), jsx("span", {
      className: "xiqqdae xkezfkh",
      children: getI18nString("figmake.ds_imports.extract_library_header")
    }), jsx("span", {
      className: "xet2fuk x1n0bwc9 x17akokd",
      children: getI18nString("figmake.ds_imports.extract_library_subheader")
    })]
  }) : state === qy.DONE ? e = jsxs(FlexBox, {
    justify: "space-between",
    fullWidth: !0,
    children: [jsxs(FlexBox, {
      children: [jsx(_$$U, {
        className: "xj1m54o"
      }), jsx("span", {
        className: "xiqqdae xkezfkh",
        children: getI18nString("figmake.ds_imports.extract_library_header_done")
      }), jsx("span", {
        className: "xet2fuk x1n0bwc9 x17akokd",
        children: getI18nString("figmake.ds_imports.extract_library_subheader_done")
      })]
    }), jsx(Button, {
      onClick: e => {
        e.preventDefault();
        i && analyticsEventManager.trackDefinedEvent("ds_import.publish_toast_go_to_figmake_clicked", {
          library_key: i
        });
        close();
        o();
      },
      children: getI18nString("figmake.ds_imports.extract_library_go_to_figma_make")
    })]
  }) : state === qy.ERROR && (e = jsxs(FlexBox, {
    justify: "space-between",
    fullWidth: !0,
    children: [jsxs(FlexBox, {
      children: [jsx(_$$r2, {
        className: "x1taaqhk"
      }), jsx("span", {
        className: "xiqqdae xkezfkh",
        children: getI18nString("figmake.ds_imports.extract_library_error")
      })]
    }), jsx(Button, {
      onClick: () => {
        i && analyticsEventManager.trackDefinedEvent("ds_import.publish_toast_retry_clicked", {
          library_key: i
        });
        start();
      },
      children: getI18nString("figmake.ds_imports.extract_library_error_button")
    })]
  }));
  return jsx(Panel, {
    onDismiss: () => {
      i && analyticsEventManager.trackDefinedEvent("ds_import.publish_toast_closed", {
        library_key: i
      });
      close();
    },
    children: jsx(FlexBox, {
      children: e
    })
  });
}
let ez = "PUBLISH_SCOPE_DROPDOWN";
let eH = {
  trigger: {
    ...textDisplayConfig.textBodyMedium,
    display: "x78zum5",
    alignItems: "x6s0dn4",
    padding: "x1ptoiqv",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    boxSizing: "x9f619",
    color: "x1akne3o",
    backgroundColor: "x1yjdb4r",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    userSelect: "x87ps6o",
    width: "xh8yej3",
    textAlign: "xdpxx8g",
    ":focus-visible_outline": "x5hs570",
    ":focus-visible_outlineColor": null,
    ":focus-visible_outlineStyle": null,
    ":focus-visible_outlineWidth": null,
    ":focus-visible_outlineOffset": "xy9f4xx",
    ":disabled_color": "xu42cvc",
    $$css: !0
  },
  triggerContainer: {
    display: "xrvj5dj",
    gridTemplateColumns: "xsdrwxk",
    alignItems: "x6s0dn4",
    width: "xh8yej3",
    marginTop: "x1y332i5",
    $$css: !0
  },
  triggerContainerDisabled: {
    gridTemplateColumns: "x1y6fwsi",
    $$css: !0
  }
};
function eW(e) {
  let {
    isLoading,
    fileKey,
    publishScope,
    onPublishScopeChange,
    hasWorkspace,
    workspaceName
  } = e;
  let c = useDispatch();
  let {
    teams,
    currentOrgId,
    orgById,
    dropdownShown
  } = selectWithShallowEqual(e => ({
    teams: e.teams,
    currentOrgId: e.currentUserOrgId,
    orgById: e.orgById,
    dropdownShown: e.dropdownShown
  }));
  let f = useRef(null);
  let _ = useId();
  let y = liveStoreInstance.File.useValue(fileKey).data;
  let b = useMemo(() => {
    if (!y) return;
    let e = y.team_id;
    if (e) return teams[e];
  }, [y, teams]);
  let v = useMemo(() => {
    if (currentOrgId) return orgById[currentOrgId]?.name;
  }, [currentOrgId, orgById]);
  let I = e => {
    switch (e) {
      case FContainerType.ORG:
        if (v) return getI18nString("design_systems.publishing_modal.everyone_at_org", {
          orgName: v
        });
        return;
      case FContainerType.WORKSPACE:
        if (hasWorkspace && workspaceName) return getI18nString("design_systems.publishing_modal.everyone_at_workspace", {
          workspaceName
        });
        return getI18nString("design_systems.publishing_modal.everyone_at_this_file_s_workspace");
      case FContainerType.TEAM:
        let t = b?.name;
        if (t) return getI18nString("design_systems.publishing_modal.everyone_at_team", {
          teamName: t
        });
        return getI18nString("design_systems.publishing_modal.org_access_false_without_team_access");
    }
  };
  let E = [FContainerType.ORG, ...(hasWorkspace ? [FContainerType.WORKSPACE] : []), FContainerType.TEAM];
  let x = I(publishScope);
  let S = isLoading ? jsx(AutoLayout, {
    padding: {
      vertical: 0,
      horizontal: 8
    },
    children: jsx(LoadingSpinner, {
      testId: "publish-scope-loading-spinner"
    })
  }) : jsxs("div", {
    onClick: () => {
      dropdownShown && dropdownShown.type === ez ? c(hideDropdownAction()) : c(showDropdownThunk({
        type: ez
      }));
    },
    className: "publish_scope_dropdown--dropdownTrigger--N-J9x",
    ref: f,
    children: [x && jsx(_$$G, {
      text: x
    }), jsx(_$$p, {
      svgContainerClassName: "publish_scope_dropdown--chevron--yZ9Gt",
      showingDropdown: !!dropdownShown && dropdownShown.type === ez
    }), (() => {
      if (!dropdownShown || dropdownShown.type !== ez || !currentOrgId || !y || !f.current) return null;
      let t = f.current.getBoundingClientRect();
      return jsx(ms, {
        className: "publish_scope_dropdown--dropdown--0w1ox",
        positionFixed: !0,
        style: {
          left: t.left,
          top: t.top
        },
        children: E.map(t => jsx(MM, {
          onClick: () => {
            onPublishScopeChange(t);
          },
          checked: e.publishScope === t,
          children: I(t)
        }, t))
      });
    })()]
  });
  return jsx("div", {
    className: "publish_scope_dropdown--root--6MzUS",
    children: getFeatureFlags().dse_fpl_wave_2 ? jsxs(AutoLayout, {
      children: [jsx(Label, {
        htmlFor: _,
        children: renderI18nText("design_systems.publishing_modal.publish_to_label")
      }), jsxs(_$$bL, {
        value: e.publishScope,
        onChange: onPublishScopeChange,
        children: [jsx(eK, {
          id: _
        }), jsx(mc, {
          children: E.map(e => jsx(c$, {
            value: e,
            children: I(e)
          }, e))
        })]
      })]
    }) : renderI18nText("design_systems.publishing_modal.publish_to", {
      audienceDropdown: S
    })
  });
}
let eK = forwardRef(({
  placeholder: e,
  children: t,
  iconLead: i,
  ...r
}, a) => {
  let {
    selectedItem
  } = useSelectPrimitiveState();
  let o = selectedItem ? selectedItem.label : e ?? "";
  return jsxs(SelectPrimitiveTrigger, {
    ...stylex.props(eH.trigger),
    ...r,
    ref: a,
    children: [i, jsxs("div", {
      ...stylex.props(eH.triggerContainer, r.disabled && eH.triggerContainerDisabled),
      children: [jsx("span", {
        className: "xdpxx8g xebhuq6 xlyipyv xb3r6kr",
        children: t ?? o
      }), !r.disabled && jsx(_$$r3, {})]
    })]
  });
});
function eY({
  state: e,
  progress: t
}) {
  return e === LibraryPublishStatusEnum.NONE ? null : jsxs("div", {
    className: "publishing_modal_footer--assemblingProgress--igcgn",
    children: [jsx(_$$k3, {
      fraction: t,
      pathFill: "#4B4B4B"
    }), jsx("span", {
      className: cssBuilderInstance.truncate.$,
      children: renderI18nText("design_systems.publishing_modal.assembling_components_styles_and_variables")
    })]
  });
}
function eq({
  org: e,
  editingFile: t,
  publishScope: i
}) {
  let r = liveStoreInstance.File.useValue(t.key).data?.team_id;
  let s = useSelector(e => {
    if (r) return e.teams[r];
  });
  let o = isOrgOrWorkspaceContainer(i);
  let l = o && !_$$Y(t);
  let d = o && s?.org_access === FAccessLevelType.SECRET;
  if (!l && !d) return null;
  let c = jsx(TextWithTruncation, {
    fontWeight: "semi-bold",
    children: renderI18nText("design_systems.publishing_modal.warning_banner.anyone_in_org", {
      orgName: e.name
    })
  });
  let u = null;
  l && d ? u = renderI18nText("design_systems.publishing_modal.warning_banner.file_setting_change.with_hidden_team_name", {
    shareAudience: c
  }) : l ? u = renderI18nText("design_systems.publishing_modal.warning_banner.file_setting_change", {
    shareAudience: c
  }) : d && (u = renderI18nText("design_systems.publishing_modal.warning_banner.hidden_team_name", {
    shareAudience: c
  }));
  return jsx("div", {
    className: "publishing_modal_footer--warningBannerForFPL--UaaMA",
    children: jsxs(AutoLayout, {
      backgroundColor: "warning-tertiary",
      padding: 8,
      spacing: 8,
      cornerRadius: 5,
      verticalAlignItems: "start",
      children: [jsx(_$$R, {
        className: cssBuilderInstance.flexShrink0.$
      }), jsx("div", {
        children: u
      })]
    })
  });
}
function e$({
  canPublishComponentsAndStateGroups: e,
  closeModal: t,
  editingFile: i,
  hasItemsToPublish: r,
  hasNewLibraryItems: a,
  numModifiedAssets: s,
  firstDraftValidationStatus: o,
  org: l,
  publish: d,
  publishedHubFile: c,
  publishProgress: u,
  isLoadingPublishScope: p,
  publishScope: h,
  setPublishScope: g,
  disablePublishButton: f,
  hasWorkspace: _,
  workspaceName: b,
  updateFirstDraftMetadata: v
}) {
  let I = useAtomWithSubscription(libraryPublishingModeAtom);
  let E = !a && 0 === s;
  let x = u.state === LibraryPublishStatusEnum.ASSEMBLING_COMPONENTS;
  let S = getFeatureFlags().first_draft_api_publish && (E || !r);
  let w = E || u.state !== LibraryPublishStatusEnum.NONE || !r || isBranch(i) || f;
  let C = S ? "Update First Draft kit data" : "success" === o ? "Publish as First Draft kit" : "error" === o ? "Fix kit errors before publishing" : e ? renderI18nText("design_systems.publishing_modal.publish_button_text") : renderI18nText("design_systems.publishing_modal.publish_styles");
  return jsxs("div", {
    className: "publishing_modal_footer--publishFooter--3e6Ln",
    children: [l && jsx(eq, {
      org: l,
      editingFile: i,
      publishScope: h
    }), jsxs(AutoLayout, {
      padding: {
        vertical: 12,
        horizontal: 0
      },
      children: [l && !x && jsx(eW, {
        isLoading: p,
        publishScope: h,
        onPublishScopeChange: g,
        fileKey: i.key,
        hasWorkspace: _,
        workspaceName: b
      }), x && jsx(eY, {
        state: u.state,
        progress: u.progress
      }), jsx(Spacer, {}), jsxs(Fragment, {
        children: [jsx(Button, {
          onClick: t,
          variant: "secondary",
          children: renderI18nText("design_systems.publishing_modal.cancel")
        }), I === LibrarySourceEnum.LIBRARY && jsx(WithTrackedButton, {
          variant: "primary",
          disabled: w && !S,
          onClick: () => S ? v?.() : d(),
          recordingKey: "publishingModalPublishButton",
          children: C
        }), I === LibrarySourceEnum.HUBFILE && getFeatureFlags().cmty_lib_admin_publish && jsx(Button, {
          variant: "signup",
          disabled: !c || w,
          onClick: () => d(c?.id),
          children: renderI18nText("design_systems.publishing_modal.publish_to_community")
        })]
      })]
    })]
  });
}
function eJ(e, t) {
  return e.filter(e => {
    let i = e.node_id in t ? t[e.node_id] : void 0;
    if (i) {
      let t = isExamplePreset(i, {
        isPreset: !0
      });
      let n = isExamplePreset(e, {
        isPreset: !0
      });
      return !t && n;
    }
  }).map(e => e.node_id);
}
function e4() {
  return jsx(LinkPrimitive, {
    newTab: !0,
    className: $8,
    href: "https://help.figma.com/hc/articles/4404848314647",
    trusted: !0,
    children: renderI18nText("design_systems.publishing_modal.read_the_help_article")
  });
}
function e3() {
  return jsxs("div", {
    className: Ni,
    children: [jsx(SvgComponent, {
      className: _$$md,
      svg: _$$A
    }), jsx("div", {
      children: jsx("span", {
        className: i4,
        children: renderI18nText("design_systems.publishing_modal.move_components_warning", {
          helpArticle: jsx(e4, {})
        })
      })
    })]
  });
}
function e7() {
  return jsx(_$$T, {
    text: renderI18nText("publishing_modal.banner.asset_cant_be_published_because_it_contains_code")
  });
}
function e8() {
  return jsx(_$$T, {
    text: renderI18nText("design_systems.publishing_modal.example_conversion_warning")
  });
}
function e9() {
  return jsxs("div", {
    className: $j,
    children: [jsx(SvgComponent, {
      className: nw,
      svg: _$$A
    }), jsx("div", {
      className: Np,
      children: jsx("span", {
        className: i4,
        children: renderI18nText("design_systems.publishing_modal.publishing_took_too_long")
      })
    })]
  });
}
var tc = td;
function ty({
  asset: e,
  className: t
}) {
  let i = getAndResetThumbnailAtom(e);
  let r = i ? toPngDataUrl(i.data) : void 0;
  return jsx(_$$J2, {
    className: t,
    src: r,
    loading: "lazy",
    draggable: !1
  });
}
let tI = registerTooltip("publish_as_move_info", function (e) {
  let {
    fileNameForMove,
    moveAssetType
  } = e;
  let r = jsx("span", {
    className: cssBuilderInstance.fontBold.$,
    children: fileNameForMove
  });
  return jsx("div", {
    children: moveAssetType === PrimaryWorkflowEnum.STYLE ? renderI18nText("design_systems.publishing_modal.publish_as_move_info_style", {
      fileName: r
    }) : renderI18nText("design_systems.publishing_modal.publish_as_move_info_component", {
      fileName: r
    })
  });
}, e => ({
  fileNameForMove: e.getAttribute("data-tooltip-file-name-for-move"),
  moveAssetType: e.getAttribute("data-tooltip-move-asset-type")
}));
let tE = registerTooltip("publish_destination_as_copy_info", function () {
  return jsx("div", {
    children: renderI18nText("design_systems.publishing_modal.publish_destination_as_copy_info")
  });
}, () => ({
  unconstrainWidth: !0
}));
function tx(e) {
  let {
    fileNameForMove,
    isComponent
  } = e;
  let r = fileNameForMove ? jsx("span", {
    className: cssBuilderInstance.fontBold.$,
    children: fileNameForMove
  }) : getI18nString("design_systems.publishing_modal.filename_fallback");
  return jsx("div", {
    children: isComponent ? renderI18nText("design_systems.publishing_modal.publish_source_component_as_copy_info", {
      fileName: r
    }) : renderI18nText("design_systems.publishing_modal.publish_source_style_as_copy_info", {
      fileName: r
    })
  });
}
let tS = registerTooltip("publish_source_component_as_copy_info", tx, e => ({
  isComponent: !0,
  fileNameForMove: e.getAttribute("data-tooltip-file-name-for-move")
}));
let tw = registerTooltip("publish_source_style_as_copy_info", tx, e => ({
  isComponent: !1,
  fileNameForMove: e.getAttribute("data-tooltip-file-name-for-move")
}));
let tT = "library_item_row--imageThumbWrapper--t-7P5 library_item_row--itemThumbWrapper--GSlEq";
let tk = "library_item_row--itemThumb--jJ-jS";
let tR = "library_item_row--helpIcon--jshFi";
let tO = ms;
let tD = _$$c$;
var tL = (e => (e[e.CHECKBOX = 0] = "CHECKBOX", e[e.TARGET = 1] = "TARGET", e))(tL || {});
function tF({
  libraryItem: e,
  includeLeftAccessory: t,
  isChecked: i,
  onCheckBoxToggle: s,
  onChangeMoveOptionForItem: o,
  moveInfo: l,
  isUnmovableStateGroupWithMovableState: d,
  showVariableCollectionOverview: c,
  isVariableSetWithPrivateVariables: m,
  hasChangedVariables: h,
  invalidReason: g
}) {
  let _;
  let A = useDropdownState();
  let b = useSelector(e => e.library);
  let v = useSelector(e => e.fileByKey);
  let I = useAtomWithSubscription(filesByLibraryKeyAtom);
  let E = useSelector(Wz);
  let x = useDispatch();
  let S = useMemo(MW, []);
  let w = useSelector(t => S(t, e.node_id));
  let C = useMemo(ju, []);
  let T = useSelector(t => C(t, e.node_id));
  let k = e.type === PrimaryWorkflowEnum.VARIABLE_SET && w.length > 0;
  let R = useCallback(() => {
    i || s(e.node_id);
  }, [i, e.node_id, s]);
  let N = `move_options_dropdown_${e.node_id}`;
  let D = useCallback(() => {
    A && A.type === N ? x(hideDropdownAction()) : x(showDropdownThunk({
      type: N
    }));
  }, [x, A, N]);
  let F = () => {
    if (!A || A.type !== N || l?.publishType === "FORCED_COPY") return null;
    let t = !!l;
    let i = l?.publishType === "MOVE" ? -4 - parsePxInt(Gu0) : -4;
    return jsxs(ms, {
      style: {
        position: "absolute",
        bottom: i,
        right: 4
      },
      children: [jsx(MM, {
        onClick: () => {
          l && (R(), o(e.node_id, "MOVE"));
        },
        checked: l?.publishType === "MOVE",
        disabled: !t,
        children: renderI18nText("design_systems.publishing_modal.move_to_this_file")
      }), jsx(MM, {
        onClick: () => {
          l && (R(), o(e.node_id, "USER_SELECTED_COPY"));
        },
        checked: !l || "USER_SELECTED_COPY" === l.publishType,
        children: renderI18nText("design_systems.publishing_modal.publish_as_copy")
      })]
    });
  };
  let M = useMemo(() => {
    if ((e.type === PrimaryWorkflowEnum.COMPONENT || e.type === PrimaryWorkflowEnum.STATE_GROUP) && (l && "FORCED_COPY" !== l.publishType || d)) return !0;
    if (m) return !1;
    if (k) return !0;
    switch (e.status) {
      case StagingStatusEnum.CHANGED:
      case StagingStatusEnum.NEW:
      case StagingStatusEnum.DELETED:
        return !0;
      case StagingStatusEnum.CURRENT:
      case StagingStatusEnum.NOT_STAGED:
        return !1;
    }
  }, [d, k, m, e.status, e.type, l]);
  let j = useCallback(t => {
    permissionScopeHandler.user("set-is-publishable", () => {
      let t = !e.isPublishable;
      e.type === PrimaryWorkflowEnum.COMPONENT ? setNodeSymbolPublishable(e.node_id, t) : e.type === PrimaryWorkflowEnum.VARIABLE_SET ? VariablesBindings.setVariableSetIsPublishable(e.node_id, t) : setNodePublishable(e.node_id, t);
    });
    R();
  }, [R, e.isPublishable, e.node_id, e.type]);
  let U = `library-item-row-${e.node_id}`;
  let B = A?.type === U;
  let V = useCallback(e => {
    if (e.preventDefault(), e.stopPropagation(), m) {
      x(hideDropdownAction());
      return;
    }
    x(showDropdownThunk({
      type: U,
      data: {
        position: {
          top: e.clientY,
          left: e.clientX
        }
      }
    }));
  }, [U, x, m]);
  let G = useCallback(async () => {
    clearSelection();
    await getSingletonSceneGraph().setCurrentPageFromNodeAsync(e.node_id);
    addToSelection([e.node_id]);
    Fullscreen.triggerActionInUserEditScope("zoom-to-selection", void 0);
    x(hideModal());
  }, [x, e.node_id]);
  switch (e.type) {
    case PrimaryWorkflowEnum.STYLE:
      _ = jsx("div", {
        className: tT,
        children: jsx(zi, {
          dsStyle: e
        })
      });
      break;
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.MANAGED_STRING:
      _ = jsx("div", {
        className: tT,
        children: jsx(SvgComponent, {
          svg: _$$A4,
          className: "library_item_row--variableSetIcon--DEFrO"
        })
      });
      break;
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.MODULE:
    case PrimaryWorkflowEnum.CODE_COMPONENT:
      _ = jsx("div", {
        className: tT,
        children: jsx(_$$M2, {
          className: tk,
          item: e,
          shouldGenerateLocalThumbnail: !0,
          draggable: !1
        })
      });
      break;
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      let z = ResponsiveSetIdHandler.fromLocalNodeIdStr(e.node_id);
      if (z) {
        let e = {
          assetId: z,
          type: PrimaryWorkflowEnum.RESPONSIVE_SET,
          subscriptionStatus: "LOCAL"
        };
        _ = jsx("div", {
          className: tT,
          children: jsx(ty, {
            className: tk,
            asset: e
          })
        });
      } else _ = jsx("div", {});
      break;
    case "THUMBNAIL":
      _ = jsx("div", {
        className: tT,
        children: jsx(_$$L, {
          className: tk,
          pageId: e.page_id,
          fallback: jsx("div", {
            children: e.page_id
          })
        })
      });
      break;
    default:
      throwTypeError(e);
  }
  let W = (e.type === PrimaryWorkflowEnum.STATE_GROUP || e.type === PrimaryWorkflowEnum.COMPONENT) && hasAssetError(e);
  let K = useMemo(() => M && e.isPublishable ? "library_item_row--libraryItemRow--epEU4 library_item_row--libraryItemRowBase--2ciyc" : "library_item_row--libraryItemRowDisabled--1ZYNB library_item_row--libraryItemRow--epEU4 library_item_row--libraryItemRowBase--2ciyc", [e, M]);
  let Y = {
    hasBeenMoved: !1
  };
  if (e.type === PrimaryWorkflowEnum.STYLE) {
    let t = b.used__LIVEGRAPH.localNodeIdToDestinationKey;
    let i = b.used__LIVEGRAPH.localNodeIdToDestinationFileName;
    Y = {
      hasBeenMoved: !!t[e.node_id],
      fileName: i[e.node_id]
    };
  } else {
    let t = null;
    let i = b.movedLibraryItems.local[e.node_id];
    i && (e.type === PrimaryWorkflowEnum.COMPONENT ? t = getAllAssets(b.publishedByLibraryKey.components).find(e => e.component_key === i)?.library_key || null : e.type === PrimaryWorkflowEnum.STATE_GROUP && (t = getAllAssets(b.publishedByLibraryKey.stateGroups).find(e => e.key === i)?.library_key || null));
    Y = {
      hasBeenMoved: !!i,
      fileName: t && I[t]?.name
    };
  }
  let q = null;
  l?.publishType === "MOVE" ? q = jsx(SvgComponent, {
    className: tR,
    svg: _$$A3,
    "data-tooltip-type": KindEnum.SPECIAL,
    "data-tooltip-file-name-for-move": v[l.fileKey]?.name || getI18nString("design_systems.publishing_modal.filename_fallback"),
    "data-tooltip-move-asset-type": e.type,
    "data-tooltip": tI,
    "data-tooltip-max-width": 240,
    "data-tooltip-tip-align-right": !0
  }) : l?.publishType === "USER_SELECTED_COPY" ? q = jsx(SvgComponent, {
    className: tR,
    svg: _$$A3,
    "data-tooltip-type": KindEnum.SPECIAL,
    "data-tooltip": tE,
    "data-tooltip-max-width": 240,
    "data-tooltip-tip-align-right": !0
  }) : l?.publishType === "FORCED_COPY" && isNewOrChangedOrDeleted(e.status) ? q = jsx(SvgComponent, {
    className: tR,
    svg: _$$A3,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": e.type === PrimaryWorkflowEnum.STYLE ? getI18nString("design_systems.publishing_modal.multiple_paste_style") : getI18nString("design_systems.publishing_modal.multiple_paste"),
    "data-tooltip-max-width": 240,
    "data-tooltip-tip-align-right": !0,
    "data-tooltip-text-left": !0
  }) : d ? q = jsx(SvgComponent, {
    className: tR,
    svg: _$$A3,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("design_systems.publishing_modal.unmovable_state_group_with_movable_state"),
    "data-tooltip-tip-align-right": !0,
    "data-tooltip-text-left": !0
  }) : Y.hasBeenMoved && (q = jsx(SvgComponent, {
    className: tR,
    svg: _$$A3,
    "data-tooltip-type": KindEnum.SPECIAL,
    "data-tooltip-file-name-for-move": Y.fileName,
    "data-tooltip": e.type === PrimaryWorkflowEnum.STYLE ? tw : tS,
    "data-tooltip-max-width": 230,
    "data-tooltip-tip-align-right": !0
  }));
  let $ = k || m;
  return jsxs("label", {
    className: tc()(K, {
      "library_item_row--drilldownRow--sho-p": $
    }),
    onContextMenu: V,
    children: [jsxs("div", {
      className: "library_item_row--nameAndIconCol--dlGqD",
      children: [jsx("div", {
        className: "library_item_row--iconContainer--XLMG7 publishing_modal--iconContainer--WQfaN",
        children: 0 === t && M ? jsx(Fragment, {
          children: jsx(Checkbox, {
            checked: i,
            onChange: () => s(e.node_id),
            label: jsx(HiddenLabel, {
              children: getI18nString("design_systems.publishing_modal.include_in_publish", {
                assetName: e.name
              })
            }),
            htmlAttributes: {
              "data-testid": "publish-library-item-checkbox"
            }
          })
        }) : 1 === t ? jsx(Fragment, {
          children: jsx("div", {
            className: "library_item_row--libraryRowTargetWrapper--0IQr7",
            children: jsx(IconButton, {
              "aria-label": getI18nString("design_systems.publishing_modal.select_component"),
              onClick: G,
              htmlAttributes: {
                "data-tooltip": getI18nString("design_systems.publishing_modal.select_component"),
                "data-tooltip-type": KindEnum.TEXT
              },
              children: jsx(_$$A2, {})
            })
          })
        }) : null
      }), jsxs("div", {
        className: "library_item_row--nameCol--yZrot",
        children: [_, jsxs("div", {
          className: "library_item_row--nameAndCount--BEgVg",
          children: [jsx("span", {
            dir: "auto",
            className: "library_item_row--name--LVmJd ellipsis--ellipsis--Tjyfa",
            title: e.name,
            children: e.name
          }), m && jsx("span", {
            className: cssBuilderInstance.colorTextSecondary.textBodyMedium.noWrap.$,
            children: renderI18nText("design_systems.publishing_modal.hidden_variable_count_within_collection", {
              count: T.length
            })
          }), k && !m && jsx("span", {
            className: cssBuilderInstance.colorTextSecondary.textBodyMedium.noWrap.$,
            children: renderI18nText("design_systems.publishing_modal.list_item_changed_variable_count", {
              count: w.length
            })
          })]
        })]
      })]
    }), M && jsxs("div", {
      className: tc()(h ? "library_item_row--statusTag--4-ty-" : "library_item_row--rightAlignedStatusTag--73lAY library_item_row--statusTag--4-ty-", {
        "library_item_row--ellidableStatusTag--CG3kp ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k": A?.type !== N
      }),
      children: [g && jsx("div", {
        className: "library_item_row--invalidIconWrapper--nknld",
        "data-tooltip": (() => {
          switch (g) {
            case "INVALID_EXAMPLE":
              return getI18nString("design_systems.publishing_modal.asset_cannot_be_published");
            case "DESCENDANT_CODE_INSTANCE_OR_CODE_LAYER":
              return getI18nString("publishing_modal.tooltip.asset_cant_be_published_because_it_contains_code");
          }
        })(),
        "data-tooltip-type": "text",
        children: jsx(_$$Z, {})
      }), (() => {
        if (e.type === PrimaryWorkflowEnum.STATE_GROUP && hasAssetError(e)) switch (e.stateGroupError) {
          case StateGroupErrorType.MISSING_PROPERTIES_ERROR:
            return renderI18nText("design_systems.publishing_modal.missing_properties");
          case StateGroupErrorType.DUPLICATE_STATE_ERROR:
            return renderI18nText("design_systems.publishing_modal.conflicting_property_values");
          case StateGroupErrorType.PARSE_ERROR:
            return renderI18nText("design_systems.publishing_modal.corrupt_layer_names");
        }
        if ((e.type === PrimaryWorkflowEnum.STATE_GROUP || e.type === PrimaryWorkflowEnum.COMPONENT) && hasAssetError(e)) switch (e.componentPropDefError) {
          case VariableSetErrorType.CONFLICTING_NAMES_WITH_VARIANT_ERROR:
          case VariableSetErrorType.CONFLICTING_NAMES_ERROR:
            return renderI18nText("design_systems.publishing_modal.conflicting_property_names");
          case VariableSetErrorType.UNUSED_DEF_ERROR:
            return renderI18nText("design_systems.publishing_modal.unused_def_error");
        }
        if (e.type === PrimaryWorkflowEnum.VARIABLE_SET && hasVariableSetError(e)) switch (e.variableSetError) {
          case VariableErrorType.TOO_MANY_VARIABLES_ERROR:
            return renderI18nText("design_systems.publishing_modal.too_many_variables_error");
          case VariableErrorType.TOO_MANY_MODES_ERROR:
            return renderI18nText("design_systems.publishing_modal.too_many_modes_error");
        }
        return "THUMBNAIL" !== e.type && e.old_key && l?.publishType !== "FORCED_COPY" ? e.type === PrimaryWorkflowEnum.STYLE ? renderI18nText("design_systems.publishing_modal.moved_to_this_file") : jsxs("div", {
          onClick: e => {
            e.preventDefault();
            e.stopPropagation();
            D();
          },
          className: "library_item_row--moveOptions--Ftdr0",
          children: [l?.publishType === "MOVE" ? renderI18nText("design_systems.publishing_modal.move_to_this_file") : renderI18nText("design_systems.publishing_modal.publish_as_copy"), jsx(_$$p, {
            showingDropdown: !!A && A.type === N,
            svgContainerClassName: "library_item_row--chevron--fbLtW"
          }), F()]
        }) : d ? e.status === StagingStatusEnum.NEW ? renderI18nText("design_systems.publishing_modal.added") : renderI18nText("design_systems.publishing_modal.modified") : e.type === PrimaryWorkflowEnum.STATE_GROUP && e.status !== StagingStatusEnum.DELETED && (E[e.node_id] ?? []).every(e => isStagedStatus(e.status)) ? renderI18nText("design_systems.publishing_modal.modified") : e.type === PrimaryWorkflowEnum.STYLE && e.hasOnlyBeenReordered ? renderI18nText("design_systems.publishing_modal.reordered") : cw(e.status);
      })(), !W && q]
    }), B && "THUMBNAIL" !== e.type && !e.deletedFromSceneGraph && jsx(tO, {
      className: "library_item_row--contextMenu--cO1wt",
      style: A.data.position,
      children: jsx(tD, {
        onClick: j,
        children: e.isPublishable ? renderI18nText("design_systems.publishing_modal.hide_when_publishing") : renderI18nText("design_systems.publishing_modal.show_when_publishing")
      })
    }), e.type === PrimaryWorkflowEnum.VARIABLE_SET && $ && jsx("div", {
      className: "library_item_row--caretWrapper--O4uP5",
      children: jsx(IconButton, {
        "aria-label": getI18nString("design_systems.publishing_modal.see_variables"),
        recordingKey: generateRecordingKey("libraryItemRow", "variableSetDrilldownButton", e.node_id),
        onClick: t => {
          t.preventDefault();
          c({
            variableCollection: e,
            view: m ? "hidden" : "pending"
          });
        },
        htmlAttributes: {
          "data-tooltip": getI18nString("design_systems.publishing_modal.see_variables"),
          "data-tooltip-type": KindEnum.TEXT
        },
        children: jsx(_$$e2, {})
      })
    })]
  });
}
let tB = "publishing_modal--sectionHeaderWrapper--RVrnT";
let tV = "publishing_modal--assetTypeHeader--P0fA0";
let tG = "publishing_modal--slidingPane--oeTIJ sliding_pane--slidingPane--6OmDU";
function tz({
  header: e,
  onClick: t,
  checkboxValue: i
}) {
  return jsx("div", {
    className: tB,
    children: jsx("button", {
      className: "publishing_modal--checkboxHeader--O3mui publishing_modal--sectionHeaderWithHover--OJM1Q publishing_modal--sectionHeader--OIVX8",
      onClick: t,
      tabIndex: -1,
      children: jsx(Checkbox, {
        label: jsx(Label, {
          className: "publishing_modal--checkboxHeaderLabel--k4vJy",
          children: e
        }),
        checked: !0 === i,
        mixed: i === MIXED_MARKER
      })
    })
  });
}
function tH({
  header: e,
  onClick: t,
  caretToggle: i
}) {
  return jsx("div", {
    className: tB,
    children: jsxs("button", {
      className: "publishing_modal--caretToggleHeader--KH5OK publishing_modal--sectionHeaderWithHover--OJM1Q publishing_modal--sectionHeader--OIVX8",
      onClick: t,
      children: [jsx("span", {
        className: "publishing_modal--caretToggleHeaderIcon--79KKC",
        children: i.isExpanded ? jsx(_$$O4, {}) : jsx(_$$k4, {})
      }), jsx("div", {
        className: "publishing_modal--caretToggleHeaderLabel--iBKkd",
        children: e
      })]
    })
  });
}
function tW({
  count: e,
  total: t
}) {
  return jsx("span", {
    className: cssBuilderInstance.colorTextSecondary.fontNormal.$,
    children: t ? renderI18nText("design_systems.publishing_modal.count_with_total", {
      count: e,
      total: t
    }) : renderI18nText("design_systems.publishing_modal.count", {
      count: e
    })
  });
}
function tq({
  variableCollection: e,
  view: t,
  drillUp: i,
  itemCount: r
}) {
  return jsxs("div", {
    className: "variable_collection_header--variableCollectionHeader--lJGjZ",
    children: [jsxs("div", {
      className: "variable_collection_header--variableCollectionHeaderLeft--c6MTv",
      children: [jsx(IconButton, {
        "aria-label": getI18nString("design_systems.publishing_modal.back"),
        onClick: i,
        recordingKey: "variableCollectionHeader.backButton",
        htmlAttributes: {
          "data-tooltip": getI18nString("design_systems.publishing_modal.back"),
          "data-tooltip-type": KindEnum.TEXT
        },
        children: jsx(_$$C2, {})
      }), jsx("div", {
        className: "variable_collection_header--variableCollectionName--7FH2M ellipsis--ellipsis--Tjyfa",
        children: e.name
      }), "\xa0"]
    }), jsx("div", {
      className: "variable_collection_header--variableCollectionHeaderRight--g0he-",
      children: jsx("div", {
        className: cssBuilderInstance.colorTextSecondary.textBodyMedium.noWrap.$,
        children: "hidden" === t ? renderI18nText("design_systems.publishing_modal.hidden_variable_count_no_parentheses", {
          count: r
        }) : renderI18nText("design_systems.publishing_modal.header_changed_variable_count_no_parentheses", {
          count: r
        })
      })
    })]
  });
}
function tZ({
  variable: e,
  displayStatusText: t
}) {
  let {
    IconUI3
  } = _$$F(e.resolvedType);
  let s = useDropdownState();
  let o = `variable-library-item-row-${e.node_id}`;
  let l = useCallback(() => {
    permissionScopeHandler.user("set-is-publishable", () => {
      VariablesBindings.setVariableIsPublishable(e.node_id, !e.isPublishable);
    });
  }, [e.node_id, e.isPublishable]);
  let d = useDispatch();
  let c = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    d(showDropdownThunk({
      type: o,
      data: {
        position: {
          top: e.clientY,
          left: e.clientX
        }
      }
    }));
  }, [o, d]);
  return jsxs("li", {
    className: t ? "variable_library_item_row--rowWithStatus--GfNqU variable_library_item_row--row--l3rQ8" : "variable_library_item_row--row--l3rQ8",
    onContextMenu: c,
    children: [jsx(IconUI3, {}), jsx("span", {
      className: "variable_library_item_row--name--TX0U9 ellipsis--ellipsis--Tjyfa",
      children: e.name
    }), t && jsx("span", {
      className: "variable_library_item_row--statusText--Khb5a",
      children: e.hasOnlyBeenReordered ? renderI18nText("design_systems.publishing_modal.reordered") : cw(e.status)
    }), s?.type === o && !e.deletedFromSceneGraph && jsx(ms, {
      className: "variable_library_item_row--contextMenu--djku4",
      style: s.data.position,
      children: jsx(_$$c$, {
        onClick: l,
        children: e.isPublishable ? renderI18nText("design_systems.publishing_modal.hide_when_publishing") : renderI18nText("design_systems.publishing_modal.show_when_publishing")
      })
    })]
  });
}
function tX({
  view: e,
  variableCollection: t,
  drillUp: i
}) {
  let [s, o] = useState(!1);
  let l = useMemo(MW, []);
  let d = useMemo(ju, []);
  let c = useSelector(e => l(e, t.node_id));
  let u = useSelector(e => d(e, t.node_id));
  function p(e) {
    return [...e].sort((e, t) => "sortPosition" in e && null !== e.sortPosition ? "sortPosition" in t && null !== t.sortPosition ? -compareNumbers(e.sortPosition, t.sortPosition) : -1 : 1);
  }
  let [m, h] = "hidden" === e ? [u, c] : [c, u];
  let [g, f] = useMemo(() => [p(m), p(h)], [m, h]);
  let _ = g.length > 0 ? "variable_collection_drilldown--unenumeratedSectionHeaderWithBorder--q2iKg variable_collection_drilldown--unenumeratedSectionHeader--DHxHt" : "variable_collection_drilldown--unenumeratedSectionHeader--DHxHt";
  return jsxs("div", {
    children: [jsx(tq, {
      variableCollection: t,
      drillUp: i,
      view: e,
      itemCount: g.length
    }), jsxs("div", {
      className: "variable_collection_drilldown--variablesListScrollContainer--IV9Ju",
      children: [g.length > 0 && jsx("ul", {
        children: g.map(t => jsx(tZ, {
          displayStatusText: "pending" === e,
          variable: t
        }, t.node_id))
      }), f.length > 0 && jsxs(Fragment, {
        children: [jsx("div", {
          className: _,
          children: jsx(tH, {
            header: "hidden" === e ? renderI18nText("design_systems.publishing_modal.marked_for_publish_header_with_count", {
              countString: jsx(tW, {
                count: f.length
              })
            }) : renderI18nText("design_systems.publishing_modal.hidden_header_with_count", {
              countString: jsx(tW, {
                count: f.length
              })
            }),
            caretToggle: {
              isExpanded: s
            },
            onClick: () => o(e => !e)
          })
        }), s && jsxs(Fragment, {
          children: ["pending" === e && jsx("span", {
            className: "variable_collection_drilldown--unenumeratedSectionSubHeader---YFCz",
            children: renderI18nText("design_systems.publishing_modal.these_wont_be_published")
          }), jsx("ul", {
            children: f.map(t => jsx(tZ, {
              displayStatusText: "hidden" === e,
              variable: t
            }, t.node_id))
          })]
        })]
      })]
    })]
  });
}
export let $$tQ0 = registerModal(function (e) {
  return jsx(TrackingProvider, {
    name: "Publishing Modal",
    properties: {
      entryPoint: e.entrypoint,
      libraryModalSessionId: e.libraryModalSessionId
    },
    children: jsx(fo, {
      children: jsx(tJ, {
        ...e
      })
    })
  });
}, "PublishingModal");
function tJ(e) {
  let {
    timedOut,
    initiallyCheckedItemIDs,
    libraryModalSessionId
  } = e;
  let h = useDispatch();
  let g = useModalManager(e);
  let _ = useRef(null);
  let [b, I] = useAtomValueAndSetter(libraryPublishingModeAtom);
  let [T, k] = useState("");
  let [R, F] = useState(void 0);
  let H = useCallback(e => {
    k(t => (!t && e ? F(_.current?.scrollHeight) : t && !e && F(void 0), e));
  }, []);
  let W = useCallback(() => {
    F(void 0);
  }, []);
  let Y = useSelector(e => e.savedPublishDescription);
  let [en, ea] = useState(Y || "");
  let [el, ed] = useState(!1);
  let [ec, eu] = useState(null);
  let ep = selectCurrentFile();
  let em = useSelector(getSelectedFile);
  let eh = useSelector(e => e.library);
  let eg = useOpenFileObjectWithSinatraType({
    useSinatraType: !0
  });
  let ef = em?.key;
  let e_ = useSelector(cM);
  let eA = useSelector(MH);
  let ey = useSelector(dM);
  let ev = useAtomWithSubscription(_$$t2);
  let eI = nN();
  let eE = useMemo(() => processLocalComponents(eA), [eA]);
  let {
    modeLimit,
    canShowCTA,
    showCTA
  } = _$$z2("publishing");
  let eR = useSelector(fA);
  let eN = useCurrentPublicPlan("PublishingModalInner").unwrapOr(null);
  let eP = getParentOrgIdIfOrgLevel(eN);
  let eO = useSelector(e => e.orgById);
  let eD = _$$Y(eg || null);
  let eL = !!em?.starter_library_src_file_key;
  let eF = useMemo(() => {
    let e = 0;
    Object.values(eE).forEach(t => {
      eL ? isNewOrChangedOrDeleted(t.status) && e++ : isActiveStagingStatus(t.status) && e++;
    });
    Object.values(ey).forEach(t => {
      eL ? isNewOrChangedOrDeleted(t.status) && e++ : isActiveStagingStatus(t.status) && e++;
    });
    return e;
  }, [eL, ey, eE]);
  let eM = useMemo(() => {
    let e = e => Object.values(e).some(e => e.status === StagingStatusEnum.NEW);
    return !!(eR && e(eE) || eR && e(ey) || e(e_));
  }, [eR, ey, e_, eE]);
  let [ej, eU] = useState(!1);
  let eB = eD ? FContainerType.ORG : FContainerType.TEAM;
  let [eV, eG] = useState(eB);
  let ez = useCallback(e => {
    eG(e);
    h(hideDropdownAction());
  }, [h]);
  let eH = useSubscription(PublishingModalView({
    fileKey: ef
  }), {
    enabled: !!ef
  });
  useEffect(() => {
    if ("loaded" === eH.status) {
      if (!eH.data.file?.lastPublishedAt) {
        eU(!0);
        return;
      }
      let e = eH.data.file?.libraryKeyToFile?.libraryPublishScope?.publishScopeType ?? FContainerType.TEAM;
      eG(e);
      eU(!0);
      e !== eB && logError("designSystems publishing", "Potential library publish scope mismatch (monitored by #feat-workspace-library-publishing)", {
        livegraphPublishScope: e,
        fileShareSettingPublishScope: eB
      });
    }
  }, [eB, eH]);
  let [eW, eK] = useState(null);
  let eY = useContext(og);
  let eq = UJ();
  let eQ = Xm();
  SR();
  let e0 = useAtomWithSubscription(y6(eQ));
  let e1 = useAtomWithSubscription(_$$x$(eQ));
  let e2 = useLatestRef(eY);
  useEffect(() => {
    e2?.status === APILoadingStatus.LOADING && eY.status === APILoadingStatus.SUCCESS && (initiallyCheckedItemIDs || tt(new Set(e1)));
  }, [e1, eY, initiallyCheckedItemIDs, e2?.status]);
  let e5 = useSelector(e => _$$oB(e, eQ));
  let e4 = useSelector(e => JI(e, eQ));
  let e6 = useSelector(e => Dc(e, eQ));
  let [te, tt] = useState(() => new Set(initiallyCheckedItemIDs && initiallyCheckedItemIDs.size > 0 ? e1.filter(e => initiallyCheckedItemIDs?.has(e)) : e1));
  useEffect(() => {
    let e = e => {
      "Shift" === e.key && ed(!0);
    };
    let t = e => {
      "Shift" === e.key && ed(!1);
    };
    document.addEventListener("keydown", e);
    document.addEventListener("keyup", t);
    return () => {
      document.removeEventListener("keydown", e);
      document.removeEventListener("keyup", t);
    };
  }, []);
  let ti = useCallback(() => {
    eh.publishProgress.state === LibraryPublishStatusEnum.ASSEMBLING_COMPONENTS && h(TS());
  }, [h, eh.publishProgress.state]);
  let tn = useCallback(() => {
    ti();
    I(LibrarySourceEnum.LIBRARY);
    h(hideModal());
  }, [h, I, ti]);
  useEffect(() => {
    eh.publishProgress.state === LibraryPublishStatusEnum.UPLOADING && tn();
  }, [tn, eh.publishProgress.state]);
  let tr = useLatestRef(eh);
  let ta = useLatestRef(e1);
  useEffect(() => {
    if (tr && ta && tr !== eh) {
      if (eu(null), ta.every(e => te.has(e))) {
        tt(new Set(e1));
        return;
      }
      tt(new Set(e1.filter(e => te.has(e))));
    }
  }, [e1, te, eh, eE, eq, ep, ta, tr]);
  let ts = useCallback(e => {
    let t = [...e0.libraryAssets[PrimaryWorkflowEnum.RESPONSIVE_SET].modified.wellFormed, ...e0.libraryAssets[PrimaryWorkflowEnum.CODE_COMPONENT].modified.wellFormed, ...e0.variableSets.modified.wellFormed, ...e0.styles.modified.wellFormed, ...e0.productComponents.modified.wellFormed, ...e0.pageThumbnails.modified].map(e => e.node_id);
    let i = t.indexOf(e);
    if (null === i) return;
    let n = new Set(te);
    let r = !n.has(e);
    if (el && null !== ec) {
      let e = Math.min(i, ec);
      let a = Math.max(i, ec);
      for (let i = e; i <= a; i++) r ? n.add(t[i]) : n.$$delete(t[i]);
    } else r ? n.add(e) : n.$$delete(e);
    tt(n);
    eu(i);
  }, [te, ec, e0, el]);
  let to = useCallback(() => {
    e1.length === te.size ? tt(new Set()) : tt(new Set(e1));
  }, [e1, te.size]);
  let tl = useCallback((e, t) => {
    eY.status === APILoadingStatus.SUCCESS && eY.nodeIdToValidatedMoveInfo[e] && (eY.nodeIdToValidatedMoveInfo[e].publishType = t);
  }, [eY]);
  let td = useCallback(e => {
    ea(e.target.value);
  }, []);
  let tc = useCallback(() => {
    let e = eh.used__LIVEGRAPH.localNodeIdToDestinationKey;
    if (!Object.keys(eh.movedLibraryItems.local).length && !Object.keys(e).length) return;
    let t = e4.filter(e => !!eh.movedLibraryItems.local[e.node_id] && e.status !== StagingStatusEnum.DELETED && te.has(e.node_id)).map(e => e.node_id);
    let i = new Set(t);
    for (let n of [...t, ...e5.filter(e => {
      let t = e.containing_frame?.containingStateGroup?.nodeId;
      let n = t && ey[t] || null;
      return !(!eh.movedLibraryItems.local[e.node_id] || e.status === StagingStatusEnum.DELETED || n && (hasAssetError(n) || i.has(n.node_id))) && te.has(t || e.node_id);
    }).map(e => e.node_id), ...e6.filter(t => !!e[t.node_id] && t.status !== StagingStatusEnum.DELETED && te.has(t.node_id)).map(e => e.node_id)]) {
      let e = Fullscreen.generatePublishableCopy(n);
      e && te.has(n) && (te.$$delete(n), te.add(e));
    }
  }, [te, ey, eh.used__LIVEGRAPH.localNodeIdToDestinationKey, eh.movedLibraryItems.local, e5, e4, e6]);
  let tu = _$$B();
  let tp = useAtomWithSubscription(Iy(eQ));
  let {
    currentFileIsFirstDraftKit,
    currentFileIsDirectGenKit
  } = bj();
  let [tg, tf] = useState(currentFileIsFirstDraftKit);
  let [t_, tA] = useState(!currentFileIsFirstDraftKit || !getFeatureFlags().first_draft_legacy_publish_ux || currentFileIsDirectGenKit);
  useEffect(() => {
    getFeatureFlags().first_draft_publish_ux ? currentFileIsFirstDraftKit && (tf(!0), currentFileIsDirectGenKit && tA(!0)) : (tf(!1), tA(!1));
  }, [currentFileIsFirstDraftKit, currentFileIsDirectGenKit]);
  let {
    localKits
  } = Ml();
  let {
    result
  } = _$$C(localKits[0]?.dsKitKey || null, [x$.WARNING]);
  let tv = useCallback(e => {
    let t;
    if (em && tp) {
      for (let e of te) {
        let t = eI[e];
        if (isNotNullish(t) && t.modes.length > modeLimit) {
          canShowCTA(t.modes.length) ? showCTA() : logError("designSystems publishing", "Blocking publishing of variable collection with too many modes, but upsell is not available", {
            collectionId: e
          });
          return;
        }
      }
      if (eY.status === APILoadingStatus.SUCCESS) {
        let e = Object.keys(eY.nodeIdToValidatedMoveInfo).filter(e => te.has(e) && "MOVE" === eY.nodeIdToValidatedMoveInfo[e].publishType);
        let i = [...Object.values(eA), ...Object.values(ey), ...Object.values(e_)].reduce((e, t) => (eY.nodeIdToValidatedMoveInfo[t.node_id] && t.old_key && (e[t.node_id] = t.old_key), e), Object.create(null));
        let n = e5.filter(hasContainingStateGroup);
        t = remapNodeIdsForMove(e, i, n);
      }
      tc();
      h(ZS({
        savepointDescription: en,
        itemsToPublish: te,
        libraryModalSessionId,
        moveInformation: t,
        hubFileId: e || void 0,
        firstDraftVariablesForTheme: tu,
        publishScope: eV,
        localAssetsWithDenormalizedPublishInfo: ev.data ?? {},
        publishAsFirstDraftKit: tg,
        isDirectGenCompatible: t_
      }));
    }
  }, [em, tp, eY, tc, h, en, te, eV, eI, ev.data, modeLimit, canShowCTA, showCTA, eA, ey, e_, e5, tu, libraryModalSessionId, tg, t_]);
  let tI = useCallback(() => {
    tg && h(iA({
      publishAsFirstDraftKit: tg,
      isDirectGenCompatible: t_,
      firstDraftVariablesForTheme: tu
    }));
  }, [h, tu, t_, tg]);
  let tE = JT();
  let tx = useSelector(Mh);
  let tS = useSelector(Pd);
  let {
    getAssetInvalidReason,
    itemsToPublishInvalidReason
  } = function ({
    modifiedComponents: e,
    modifiedStateGroups: t,
    publishedHubFileComponents: i,
    publishedHubFileStateGroups: n,
    itemsToPublish: a,
    publishingMode: s
  }) {
    var o;
    let l = function ({
      modifiedComponents: e,
      modifiedStateGroups: t,
      publishedHubFileComponents: i,
      publishedHubFileStateGroups: n,
      publishingMode: a
    }) {
      let s = a === LibrarySourceEnum.HUBFILE;
      return useMemo(() => s ? new Set([...eJ(e, i), ...eJ(t, n)]) : new Set(), [e, t, s, i, n]);
    }({
      modifiedComponents: e,
      modifiedStateGroups: t,
      publishedHubFileComponents: i,
      publishedHubFileStateGroups: n,
      publishingMode: s
    });
    o = useMemoStable(() => [...e.map(e => e.node_id), ...t.map(e => e.node_id)], [e, t]);
    let d = useStrictDeepEqualSceneValue(e => new Set(o.filter(t => {
      let i = e.get(t);
      return i?.hasCodeInstanceDescendant;
    })), o);
    let c = useCallback(e => l.has(e) ? "INVALID_EXAMPLE" : d.has(e) ? "DESCENDANT_CODE_INSTANCE_OR_CODE_LAYER" : null, [l, d]);
    let u = useMemo(() => {
      for (let e of a) {
        let t = c(e);
        if (null != t) return t;
      }
      return null;
    }, [c, a]);
    return useMemo(() => ({
      getAssetInvalidReason: c,
      itemsToPublishInvalidReason: u
    }), [c, u]);
  }({
    modifiedComponents: e0.productComponents.modified.wellFormed,
    modifiedStateGroups: e0.stateGroups.modified.wellFormed,
    publishedHubFileComponents: tx,
    publishedHubFileStateGroups: tS,
    itemsToPublish: te,
    publishingMode: b
  });
  let tT = useMemo(() => "loaded" !== ev.status || null != itemsToPublishInvalidReason, [itemsToPublishInvalidReason, ev.status]);
  let tk = useCallback(e => {
    if (!em) return;
    let t = BrowserInfo.mac ? e.metaKey : e.ctrlKey;
    e.keyCode === KeyCodes.ENTER && t && !tT && (tv(), e.preventDefault(), e.stopPropagation());
  }, [em, tv, tT]);
  let tR = _$$z();
  if (!em) return null;
  let tN = b === LibrarySourceEnum.HUBFILE ? renderI18nText("design_systems.publishing_modal.modal_header_community_library") : renderI18nText("design_systems.publishing_modal.modal_header");
  if (eY.status === APILoadingStatus.LOADING) return jsx(Fragment, {
    children: jsx(ModalRootComponent, {
      manager: g,
      width: "lg",
      height: "fixed",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: tN
          })
        }), jsx(DialogBody, {
          children: jsx(LoadingSpinner, {})
        })]
      })
    })
  });
  let tP = ep?.team;
  let tO = eQ && Object.keys(eQ).some(e => !!te.has(e) && !e_[e] && eQ[e] && "MOVE" === eQ[e].publishType);
  let tD = e0.productComponents.modified.wellFormed.length;
  let tL = e0.styles.modified.wellFormed.length;
  let tF = e0.variableSets.modified.wellFormed.length;
  let tj = _$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) ? e0.libraryAssets[PrimaryWorkflowEnum.RESPONSIVE_SET].modified.wellFormed.length : 0;
  let tU = _$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) ? e0.libraryAssets[PrimaryWorkflowEnum.CODE_COMPONENT].modified.wellFormed.length : 0;
  let tB = e0.pageThumbnails.modified.length;
  let tV = jsx(e$, {
    canPublishComponentsAndStateGroups: eR,
    closeModal: tn,
    disablePublishButton: tT,
    editingFile: em,
    firstDraftValidationStatus: tg ? _$$O2(result) : "not_applicable",
    hasItemsToPublish: 0 !== te.size,
    hasNewLibraryItems: eM,
    hasWorkspace: eH.data?.file?.workspaceId !== null,
    isLoadingPublishScope: !ej,
    numModifiedAssets: tF + tL + tD + tj + tU + tB,
    org: eP && eO[eP] ? eO[eP] : null,
    publish: tv,
    publishProgress: eh.publishProgress,
    publishScope: eV,
    publishedHubFile: tE,
    setPublishScope: ez,
    updateFirstDraftMetadata: getFeatureFlags().first_draft_api_publish ? tI : void 0,
    workspaceName: eH.data?.file?.computedWorkspace?.workspace?.name
  });
  let tz = jsx(Fragment, {
    children: jsxs("div", {
      className: "publishing_modal--slidingPaneContainer--j4Yz6 sliding_pane--slidingPaneContainer--RQkXf",
      ref: _,
      style: {
        height: R
      },
      children: [jsxs("div", {
        className: eW ? "publishing_modal--slidingPaneLeft--5EBEq sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU" : tG,
        style: {
          display: eW ? "none" : void 0
        },
        children: [jsxs("div", {
          className: "publishing_modal--publishHeaderInputs--URHJF",
          children: [jsx(_$$l, {}), jsx("div", {
            className: "publishing_modal--searchBarContainer--T9lw4",
            children: jsx(IW, {
              focusOnMount: !1,
              query: T,
              clearSearch: () => H(""),
              onChange: H,
              recordingKey: "publishingModalSearchBar",
              withUI3Icon: !0,
              smallFont: !0,
              hasTransparentBackground: !0
            })
          }), !T && jsx("div", {
            className: "publishing_modal--descriptionContainer--EOWF-",
            children: jsx(_$$v, {
              className: "publishing_modal--descriptionInput--jTrPR",
              placeholder: getI18nString("design_systems.publishing_modal.description_placeholder"),
              value: en,
              onChange: td,
              dir: "auto"
            })
          })]
        }), jsx(t1, {
          itemsToPublish: te,
          onLibraryItemRowCheckboxToggle: ts,
          onTogglePublishAll: to,
          setItemsToPublish: tt,
          onChangeMoveOptionForItem: tl,
          assetQuery: T,
          showVariableCollectionOverview: eK,
          getAssetInvalidReason,
          onToggleExpanded: W
        }), !eP && !eR && eF > 0 && jsx(t5, {
          numComponentsToUpsell: eF,
          isStarterLibrary: eL,
          team: tP
        }), tO && jsx(e3, {}), timedOut && jsx(e9, {}), "INVALID_EXAMPLE" === itemsToPublishInvalidReason && jsx(e8, {}), "DESCENDANT_CODE_INSTANCE_OR_CODE_LAYER" === itemsToPublishInvalidReason && jsx(e7, {}), getFeatureFlags().first_draft_publish_ux && jsxs("div", {
          className: "publishing_modal--publishTypeContainer--PeOOJ",
          children: [jsx(Checkbox, {
            label: jsx(Label, {
              children: "Publish as First Draft kit"
            }),
            checked: tg,
            onChange: e => {
              tf(e);
            }
          }), getFeatureFlags().first_draft_legacy_publish_ux && tg && jsx(Checkbox, {
            label: jsx(Label, {
              children: "Publish as a legacy kit (no direct generation)"
            }),
            checked: !t_,
            onChange: e => {
              tA(!e);
            }
          }), jsx(K, {
            validationResults: result
          })]
        })]
      }), eW && jsx("div", {
        className: tG,
        children: jsx(tX, {
          variableCollection: eW.variableCollection,
          view: eW.view,
          drillUp: () => eK(null)
        })
      })]
    })
  });
  return jsx(Fragment, {
    children: jsxs(ModalRootComponent, {
      manager: g,
      width: "lg",
      htmlAttributes: {
        "data-testid": "publishing-modal",
        onKeyDown: tk
      },
      children: [jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: tN
          })
        }), jsx(DialogBody, {
          scrolling: "none",
          padding: 0,
          children: tz
        }), !eW && jsx(DialogFooter, {
          children: tV
        })]
      }), tR && jsx("div", {
        className: "x1xmf6yo",
        children: jsx(t0, {
          closeModal: tn,
          isCurrentFilePublished: "loaded" !== eH.status ? null : !!eH.data.file?.lastPublishedAt
        })
      })]
    })
  });
}
function t0({
  closeModal: e,
  isCurrentFilePublished: t
}) {
  let i = useOpenFileLibraryKey();
  let r = useDispatch();
  let s = Object.values(useSelector(MH));
  let o = Object.values(useSelector(dM));
  let l = !s.length && !o.length;
  let c = !1 === t ? {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("figmake.ds_imports.disabled_publish_button_tooltip"),
    "data-tooltip-show-above": !0,
    "data-tooltip-max-width": 162
  } : l ? {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("figmake.ds_imports.disabled_publish_button_tooltip_no_components"),
    "data-tooltip-show-above": !0,
    "data-tooltip-max-width": 205
  } : {};
  return jsx(DialogContents, {
    children: jsx(DialogBody, {
      children: jsxs("div", {
        className: "x19y5rnk x78zum5 x1cy8zhl xkh2ocl x1v2ro7d x1tamke2",
        children: [jsxs("div", {
          className: "x78zum5 xdt5ytf x1cy8zhl x1jnr06f x1cqoux5",
          children: [jsx(_$$e, {}), jsx("div", {
            className: "xiqqdae xkezfkh",
            children: getI18nString("figmake.ds_imports.publish_header")
          }), jsx("p", {
            children: getI18nString("figmake.ds_imports.publish_body")
          }), jsx("div", {
            className: "x1xmf6yo",
            children: jsx(Button, {
              onClick: () => {
                if (i) {
                  if (analyticsEventManager.trackDefinedEvent("ds_import.publish_button_clicked", {
                    library_key: i
                  }), getFeatureFlags().bake_ds_import_library_guidelines) {
                    r(showModalHandler({
                      type: _$$i
                    }));
                    return;
                  }
                  $I({
                    moduleToOpen: {
                      type: "custom",
                      module: jsx(ey, {}),
                      beforeModuleOpen: () => {
                        B3(_$$JT.PUBLISH_LIBRARY_FOR_AI);
                        Ag(_$$JT.PUBLISH_LIBRARY_FOR_AI, Iq, null);
                      },
                      name: ExtensionFeatureKey.LIBRARY_CSS_EXTRACTION
                    },
                    trackingData: {
                      source: "publishing_modal"
                    }
                  });
                  e();
                }
              },
              disabled: !t || l,
              ...c,
              children: getI18nString("figmake.ds_imports.publish_button")
            })
          })]
        }), jsx("div", {
          className: "x19y5rnk xb3r6kr x78zum5 x6s0dn4 xl56j7k",
          children: jsx(WAFImage, {
            src: buildUploadUrl("6da5a2fd80fe0ad897cd34ad32a53d4e6d22e289"),
            width: 135
          })
        })]
      })
    })
  });
}
function t1(e) {
  let [t, i] = useState(!1);
  let s = () => {
    i(!t);
    e.onToggleExpanded();
  };
  let [o, l] = useState(!1);
  let d = () => {
    l(!o);
    e.onToggleExpanded();
  };
  let [c, u] = useState(!1);
  let p = () => {
    u(!c);
    e.onToggleExpanded();
  };
  let m = Xm();
  let h = UJ();
  let g = useAtomWithSubscription(y6(m));
  let [f, _, b, v, I, E, x, S, w, C, T, N, O, D, L, F, M, j, U, B, V, G] = useMemo(() => [g.libraryAssets[PrimaryWorkflowEnum.RESPONSIVE_SET].modified.wellFormed, g.libraryAssets[PrimaryWorkflowEnum.RESPONSIVE_SET].modified.erroneous, g.libraryAssets[PrimaryWorkflowEnum.RESPONSIVE_SET].unmodified.published, g.libraryAssets[PrimaryWorkflowEnum.RESPONSIVE_SET].unmodified.unpublished, g.libraryAssets[PrimaryWorkflowEnum.CODE_COMPONENT].modified.wellFormed, g.libraryAssets[PrimaryWorkflowEnum.CODE_COMPONENT].modified.erroneous, g.libraryAssets[PrimaryWorkflowEnum.CODE_COMPONENT].unmodified.published, g.libraryAssets[PrimaryWorkflowEnum.CODE_COMPONENT].unmodified.unpublished, g.variableSets.modified.wellFormed, g.variableSets.modified.erroneous, g.variableSets.unmodified.published, g.variableSets.unmodified.unpublished, g.variableSetsWithHiddenVariables.modified.wellFormed, g.styles.modified.wellFormed, g.styles.unmodified.published, g.styles.unmodified.unpublished, g.productComponents.modified.wellFormed, g.productComponents.modified.erroneous, g.productComponents.unmodified.published, g.productComponents.unmodified.unpublished, g.pageThumbnails.modified, g.pageThumbnails.unmodified].map(t => e.assetQuery ? t.filter(t => t.name.toLocaleLowerCase().trim().includes(e.assetQuery.toLocaleLowerCase())) : t), [g.libraryAssets, g.variableSets.modified.wellFormed, g.variableSets.modified.erroneous, g.variableSets.unmodified.published, g.variableSets.unmodified.unpublished, g.variableSetsWithHiddenVariables.modified.wellFormed, g.styles.modified.wellFormed, g.styles.unmodified.published, g.styles.unmodified.unpublished, g.productComponents.modified.wellFormed, g.productComponents.modified.erroneous, g.productComponents.unmodified.published, g.productComponents.unmodified.unpublished, g.pageThumbnails.modified, g.pageThumbnails.unmodified, e.assetQuery]);
  let z = useMemo(() => new Set(D.concat(w).concat(M).concat(_$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) ? f : []).concat(_$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) ? I : []).map(e => e.node_id).concat(V.map(e => e.node_id))), [D, w, M, f, I, V]);
  let H = w.length > 0 || N.length > 0 || O.length > 0;
  let W = useSelector(Wz);
  let K = (t, i, r, a) => {
    for (let s of t = BT(t)) {
      let t = m?.[s.node_id];
      let o = !1;
      if (s.type === PrimaryWorkflowEnum.STATE_GROUP) {
        let e = !t || "FORCED_COPY" === t.publishType;
        let i = (W[s.node_id] ?? []).some(e => h.has(e.node_id));
        o = e && i;
      }
      let l = jsx(tF, {
        hasChangedVariables: H,
        includeLeftAccessory: r,
        invalidReason: e.getAssetInvalidReason(s.node_id),
        isChecked: e.itemsToPublish.has(s.node_id),
        isUnmovableStateGroupWithMovableState: o,
        isVariableSetWithPrivateVariables: a,
        libraryItem: s,
        moveInfo: isActiveStagingStatus(s.status) && t || null,
        onChangeMoveOptionForItem: e.onChangeMoveOptionForItem,
        onCheckBoxToggle: e.onLibraryItemRowCheckboxToggle,
        showVariableCollectionOverview: e.showVariableCollectionOverview
      }, s.node_id);
      let d = a ? "-hiddenVariables" : "";
      $(l, `library-item-row-${s.node_id}${d}`, 46, i);
    }
  };
  let q = (t, i, r) => {
    for (let a of t) {
      let t = {
        node_id: a.node_id,
        isPublishable: !0,
        status: a.status,
        type: "THUMBNAIL",
        name: a.name,
        page_id: a.pageID
      };
      $(jsx(tF, {
        includeLeftAccessory: r,
        invalidReason: e.getAssetInvalidReason(a.node_id),
        isChecked: e.itemsToPublish.has(a.node_id),
        isUnmovableStateGroupWithMovableState: !1,
        libraryItem: t,
        moveInfo: null,
        onChangeMoveOptionForItem: e.onChangeMoveOptionForItem,
        onCheckBoxToggle: e.onLibraryItemRowCheckboxToggle,
        showVariableCollectionOverview: e.showVariableCollectionOverview
      }, a.node_id), `library-item-row-${a.node_id}`, 46, i);
    }
  };
  let $ = (e, t, i, n) => {
    let r = oz.getNextRenderedElementTop(n);
    n.push({
      parent: null,
      type: zq.ROW,
      top: r,
      element: e,
      key: t,
      height: i,
      sectionNameForTracking: void 0
    });
  };
  let X = (() => {
    let i = [];
    let r = w.length + D.length + M.length + (_$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) ? f.length : 0) + (_$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) ? I.length : 0) + V?.length;
    let a = T.length + L.length + U.length + (_$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) ? b.length : 0) + (_$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) ? x.length : 0) + G?.length;
    let l = N.length + B.length + F.length + O.length + (_$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) ? v.length : 0) + (_$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) ? S.length : 0);
    let u = j.length + C.length + (_$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) ? _.length : 0) + (_$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) ? E.length : 0);
    u && ($(jsx(tH, {
      header: renderI18nText("design_systems.publishing_modal.invalid_components_with_count", {
        countString: jsx(tW, {
          count: u
        })
      }),
      caretToggle: {
        isExpanded: c
      },
      onClick: p
    }), "erroneous", 32, i), c && (K(j, i, tL.TARGET), K(C, i)));
    let m = e.assetQuery ? [...e.itemsToPublish].filter(e => z.has(e)) : [...e.itemsToPublish];
    let h = e.assetQuery ? [...e.itemsToPublish].filter(e => !z.has(e)) : [];
    let y = m.length;
    if (r) {
      let t;
      if (t = y === r || y > 0 && y < r && MIXED_MARKER, $(jsx(tz, {
        header: renderI18nText("design_systems.publishing_modal.changes_header_with_count", {
          countString: jsx(tW, {
            count: y,
            total: r
          })
        }),
        checkboxValue: t,
        onClick: () => {
          e.assetQuery ? r === y ? e.setItemsToPublish(new Set(h)) : e.setItemsToPublish(new Set([...e.itemsToPublish, ...z])) : e.onTogglePublishAll();
        }
      }), "changed:header", 32, i), w.length > 0 && $(jsx("div", {
        className: tV,
        children: renderI18nText("design_systems.publishing_modal.variable_collections")
      }), "variableSet:header", 32, i), K(w, i, tL.CHECKBOX), _$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) && (f.length > 0 && $(jsx("div", {
        className: tV,
        children: "Site blocks"
      }), "responsiveSet:header", 32, i), K(f, i, tL.CHECKBOX)), _$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) && (I.length > 0 && $(jsx("div", {
        className: tV,
        children: "Code components"
      }), "codeComponent:header", 32, i), K(I, i, tL.CHECKBOX)), getFeatureFlags().dse_templates_proto) {
        let e = M.filter(isTemplateAsset);
        e.length > 0 && ($(jsx("div", {
          className: tV,
          children: renderI18nText("design_systems.publishing_modal.templates")
        }), "templates:header", 32, i), K(e, i, tL.CHECKBOX));
      }
      D.length > 0 && $(jsx("div", {
        className: tV,
        children: renderI18nText("design_systems.publishing_modal.styles")
      }), "styles:header", 32, i);
      K(D, i, tL.CHECKBOX);
      M.length > 0 && $(jsx("div", {
        className: tV,
        children: renderI18nText("design_systems.publishing_modal.components")
      }), "components:header", 32, i);
      getFeatureFlags().dse_templates_proto ? K(M.filter(e => !isTemplateAsset(e)), i, tL.CHECKBOX) : K(M, i, tL.CHECKBOX);
      getFeatureFlags().dse_library_pg_thumbnails && V.length > 0 && ($(jsx("div", {
        className: tV,
        children: renderI18nText("design_systems.publishing_modal.page_thumbnails")
      }), "pageThumbnails:header", 32, i), q(g.pageThumbnails.modified, i, tL.CHECKBOX));
    }
    a && ($(jsx(tH, {
      header: renderI18nText("design_systems.publishing_modal.unchanged_header_with_count", {
        countString: jsx(tW, {
          count: a
        })
      }),
      caretToggle: {
        isExpanded: t
      },
      onClick: s
    }), "unchanged:header", 32, i), t && (K(T, i), K(L, i), K(U, i), _$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) && K(b, i), _$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) && K(x, i), getFeatureFlags().dse_library_pg_thumbnails && q(G, i)));
    l && ($(jsx(tH, {
      header: renderI18nText("design_systems.publishing_modal.hidden_header_with_count", {
        countString: jsx(tW, {
          count: l
        })
      }),
      caretToggle: {
        isExpanded: o
      },
      onClick: d
    }), "private:header", 32, i), o && ($(jsx("div", {
      className: "publishing_modal--subheader--g6LTL",
      children: renderI18nText("design_systems.publishing_modal.these_wont_be_published")
    }), "private:subheader", 22, i), K(N, i), K(O, i, void 0, !0), K(F, i), K(B, i), _$$O3(PrimaryWorkflowEnum.RESPONSIVE_SET) && K(v, i), _$$O3(PrimaryWorkflowEnum.CODE_COMPONENT) && K(S, i)));
    return i;
  })();
  return jsx(_$$O, {
    scrollContent: X,
    isList: !0,
    recordingKey: "publishingModalLibraryList",
    getViewportHeight: e => e - 200,
    className: "publishing_modal--scrollContainer--o-jyZ",
    renderEmptyState: !X.length && e.assetQuery ? () => jsx(t2, {
      assetQuery: e.assetQuery
    }) : void 0
  });
}
function t2({
  assetQuery: e
}) {
  return jsx("div", {
    className: "publishing_modal--emptySearchResult--eVsIY",
    children: renderI18nText("design_systems.publishing_modal.empty_search_result", {
      assetQuery: e
    })
  });
}
function t5({
  numComponentsToUpsell: e,
  isStarterLibrary: t,
  team: i
}) {
  let r = i ? jsx(Link, {
    newTab: !0,
    trusted: !0,
    href: `/files/upgrade-team/${i.id}`,
    children: renderI18nText("design_systems.publishing_modal.upgrade_team")
  }) : jsx(Link, {
    newTab: !0,
    trusted: !0,
    href: "/files/create-team",
    children: renderI18nText("design_systems.publishing_modal.create_a_professional_team")
  });
  let a = t ? renderI18nText("design_systems.publishing_modal.starter_library_upsell", {
    numComponents: e
  }) : renderI18nText("design_systems.publishing_modal.standard_upsell", {
    numComponents: e,
    teamUpsellLink: r
  });
  return jsx("div", {
    className: "publishing_modal--upsell--TGLg4",
    "data-testid": "libraryPublishModalUpsell",
    children: a
  });
}
export const dD = $$tQ0;