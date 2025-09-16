import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, memo, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { ButtonLarge } from "../905/521428";
import { IconButton } from "../905/443068";
import { l as _$$l } from "../905/479687";
import c, { C as _$$C } from "../905/520159";
import { m as _$$m } from "../905/367152";
import { j as _$$j } from "../905/519202";
import { e as _$$e2 } from "../905/916195";
import { A as _$$A } from "../905/24328";
import { Multiplayer } from "../figma_app/763686";
import { xj, Mx, yx } from "../figma_app/851625";
import { h as _$$h } from "../905/207101";
import { KeyCodes } from "../905/63728";
import { reportError } from "../905/11";
import { J9 } from "../905/149328";
import { Point } from "../905/736624";
import { or, Ss, BL, xY, qW, u as _$$u } from "../905/720292";
import { ec } from "../figma_app/449837";
import { ImageBackedLoading } from "../figma_app/858013";
import { x as _$$x } from "../905/211326";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout, Spacer } from "../905/470281";
import { hideModal } from "../905/156213";
import { eS, aD } from "../figma_app/646357";
import { PrimaryWorkflowEnum, LibraryTabEnum } from "../figma_app/633080";
import { KindEnum } from "../905/129884";
import { registerModal } from "../905/102752";
import { d as _$$d } from "../figma_app/550089";
import { vL } from "../905/826900";
import { AX, UX } from "../905/542608";
import { se, TM, Mz, a7, RL } from "../figma_app/435826";
import { Ao } from "../905/748636";
import { tA, f2, xq, fe, B5, gU, q0, uj, jX } from "../905/255446";
let U = "review_updates_modal--comparableUpdate--7MC8a";
let B = "review_updates_modal--overlayImage--wx-oF";
let V = "review_updates_modal--loadingSpinnerContainer--F6KTF";
let G = "review_updates_modal--loadingSpinner--c9gun";
let z = "review_updates_modal--modalWrapper--YJ9Jc";
function H({
  backButtonRef: e,
  children: t
}) {
  let i = useDispatch();
  let s = useCallback(t => {
    t.event.keyCode === KeyCodes.TAB && null != e.current && (e.current.focus(), t.accept());
  }, [e]);
  let o = new Point((window.innerWidth - tA) / 2, J9 + 12);
  return jsx(Ao, {
    dragHeaderOnly: !0,
    onClose: () => {
      i(hideModal());
    },
    onKeyDown: s,
    title: jsx("div", {
      className: "review_updates_modal--modalTitle--GUA80",
      children: renderI18nText("design_systems.updates.review_updates")
    }),
    initialWidth: tA,
    initialPosition: o,
    recordingKey: "reviewLibraryUpdatesModal",
    dataTestId: "reviewLibraryUpdatesModal",
    headerClassName: "review_updates_modal--modalHeader--IyGWg",
    children: t
  });
}
function W(e) {
  let {
    backButtonRef,
    updatesModalScope
  } = e;
  let {
    currentInstanceInfo,
    currentAsset,
    isHiddenInstance,
    navigationProps,
    prevInstanceInfo,
    nextInstanceInfo,
    updateAssetAndInstances
  } = f2(e);
  let {
    numCurrentAssetInstances,
    nextAssetHandler
  } = c;
  let {
    beforeImage,
    afterImage,
    isUpdatedInstance,
    isUpdatedAsset
  } = xq(prevInstanceInfo, currentInstanceInfo, nextInstanceInfo, currentAsset, updateAssetAndInstances);
  let b = eS(aD.ALL);
  let {
    updateStateGroup,
    updateComponent
  } = se(b, void 0, AX.REVIEW_INSTANCE_UPDATES_MODAL_UPDATE_ALL);
  let E = useCallback(() => {
    currentAsset.type === PrimaryWorkflowEnum.STATE_GROUP ? updateStateGroup(currentAsset) : updateComponent(currentAsset);
  }, [currentAsset, updateComponent, updateStateGroup]);
  let {
    updateIndividualInstances
  } = TM(b, AX.REVIEW_INSTANCE_UPDATES_MODAL_UPDATE_INSTANCE);
  let S = useCallback(() => {
    currentInstanceInfo && (currentInstanceInfo.type === PrimaryWorkflowEnum.COMPONENT ? updateIndividualInstances({
      [currentInstanceInfo.assetKey]: {
        updateAsset: currentAsset,
        instanceIdsToUpdate: [currentInstanceInfo.instanceId]
      }
    }, {}) : updateIndividualInstances({}, {
      [currentInstanceInfo.assetKey]: {
        updateAsset: currentAsset,
        instanceIdsToUpdate: [currentInstanceInfo.instanceId]
      }
    }));
  }, [currentAsset, currentInstanceInfo, updateIndividualInstances]);
  let C = numCurrentAssetInstances > 1;
  return jsxs(Fragment, {
    children: [jsx(q, {
      assetName: currentAsset.name,
      assetType: currentAsset.type,
      backButtonRef,
      isHidden: isHiddenInstance,
      updatesModalScope
    }), jsx(Q, {
      beforeImage,
      afterImage,
      footer: jsx(Z, {
        navigationProps,
        buttons: jsxs(Fragment, {
          children: [isUpdatedInstance ? jsx(ButtonLarge, {
            variant: "secondary",
            disabled: !0,
            iconPrefix: jsx(_$$l, {}),
            children: renderI18nText("design_systems.updates.updated")
          }) : jsx(ButtonLarge, {
            variant: C ? "secondary" : "primary",
            onClick: S,
            htmlAttributes: {
              autoFocus: !0
            },
            children: renderI18nText("design_systems.updates.update_instance")
          }), !isUpdatedAsset && C && jsx(ButtonLarge, {
            variant: "primary",
            onClick: E,
            children: renderI18nText("design_systems.updates.update_all")
          }), isUpdatedAsset && nextAssetHandler && jsx(ButtonLarge, {
            variant: "primary",
            onClick: nextAssetHandler,
            children: renderI18nText("design_systems.libraries_modal.next_component")
          })]
        }),
        assetType: PrimaryWorkflowEnum.COMPONENT
      }),
      isUpdated: isUpdatedInstance,
      type: PrimaryWorkflowEnum.COMPONENT
    })]
  });
}
function K(e) {
  let {
    backButtonRef,
    updatesModalScope
  } = e;
  let r = fe(e);
  if (!r) return null;
  let {
    currentStyleGUID,
    beforeImage,
    afterImage,
    navigationProps,
    isUpdatedStyleVersion,
    isUpdatedStyle,
    styleUpdateInfo
  } = r;
  if (!currentStyleGUID) return null;
  let p = jsx($, {
    navigationProps,
    styleUpdateInfo,
    currentStyleGUID,
    isUpdatedStyleVersion,
    isUpdatedStyle
  });
  return jsxs(Fragment, {
    children: [jsx(q, {
      assetName: styleUpdateInfo.updateAsset.name,
      assetType: PrimaryWorkflowEnum.STYLE,
      backButtonRef,
      updatesModalScope
    }), jsx(Q, {
      beforeImage,
      afterImage,
      footer: p,
      isUpdated: isUpdatedStyleVersion || isUpdatedStyle,
      type: PrimaryWorkflowEnum.STYLE
    })]
  });
}
function Y({
  asyncLoadedImage: e,
  title: t,
  opacity: i,
  containerStyle: a,
  renderBackground: s
}) {
  let o;
  let l = "var(--color-bg-secondary)";
  let {
    image,
    isLoading
  } = useMemo(() => xj(e) ? {
    isLoading: !1,
    image: {
      data: e.value.image,
      width: e.value.width,
      height: e.value.height,
      scale: 2
    }
  } : Mx(e) || yx(e) ? {
    isLoading: !0,
    image: null
  } : {
    isLoading: !1,
    image: null
  }, [e]);
  o = image ? jsx(ec, {
    className: U,
    style: {
      opacity: i,
      backgroundColor: s ? l : void 0
    },
    image
  }) : isLoading ? jsx("div", {
    className: U,
    style: {
      backgroundColor: s ? l : void 0
    },
    children: jsx(_$$x, {
      isLoading: !0,
      children: () => renderI18nText("design_systems.updates.preview_unavailable")
    })
  }) : jsx("div", {
    className: U,
    style: {
      backgroundColor: l
    },
    children: renderI18nText("design_systems.updates.preview_unavailable")
  });
  return jsx(or, {
    title: xj(e) ? t : "",
    containerStyle: a,
    isDarkBackground: !1,
    children: o
  });
}
function q({
  assetName: e,
  assetType: t,
  backButtonRef: i,
  isHidden: r,
  updatesModalScope: s
}) {
  let o = useDispatch();
  let d = t === PrimaryWorkflowEnum.COMPONENT || t === PrimaryWorkflowEnum.STATE_GROUP;
  return jsxs("div", {
    className: "review_updates_modal--headerContainer--jSwdB",
    children: [jsx("div", {
      className: "review_updates_modal--left--W88Yj",
      children: jsx(IconButton, {
        "aria-label": getI18nString("design_systems.updates.back_to_all_updates"),
        onClick: () => {
          o(UX(LibraryTabEnum.UPDATES, s));
        },
        ref: i,
        children: jsx(_$$C, {})
      })
    }), e && t && jsxs(AutoLayout, {
      width: "hug-contents",
      children: [d && jsx(_$$m, {}), jsxs(AutoLayout, {
        width: "hug-contents",
        spacing: 4,
        children: [jsx("div", {
          className: "review_updates_modal--assetName--tJRHB",
          children: d ? renderI18nText("design_systems.updates.instanceName", {
            assetName: e
          }) : renderI18nText("design_systems.updates.styleName", {
            assetName: e
          })
        }), r && jsx("div", {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("design_systems.updates.this_instance_is_hidden"),
          children: jsx(_$$j, {})
        })]
      })]
    }), jsx("div", {
      className: "review_updates_modal--right--c0Doa"
    })]
  });
}
function $({
  styleUpdateInfo: e,
  currentStyleGUID: t,
  navigationProps: i,
  isUpdatedStyleVersion: r,
  isUpdatedStyle: a
}) {
  let {
    updateStyleVersionHandler,
    updateAllHandler,
    hasMultipleStyleVersions
  } = B5(e, t, AX.REVIEW_STYLE_UPDATES_MODAL_UPDATE_STYLE);
  let d = jsx(X, {
    updateStyleVersionHandler,
    updateAllHandler,
    hasMultipleStyleVersions,
    isUpdatedStyleVersion: r,
    isUpdatedAsset: a
  });
  return jsx(Z, {
    navigationProps: i,
    buttons: d,
    assetType: PrimaryWorkflowEnum.STYLE
  });
}
function Z({
  navigationProps: e,
  buttons: t,
  assetType: i
}) {
  let {
    previousHandler,
    nextHandler,
    navigateToCurrentInstance,
    currentAssetInstanceIndex,
    numCurrentAssetInstances
  } = e;
  let u = gU(previousHandler ?? void 0, nextHandler ?? void 0);
  let p = i === PrimaryWorkflowEnum.COMPONENT || i === PrimaryWorkflowEnum.STATE_GROUP;
  return jsx(vL, {
    handleKeyDown: u,
    name: "review-updates-modal",
    focusOnMount: !0,
    propagateKeyboardFocus: !0,
    children: jsx("div", {
      className: "review_updates_modal--footer--ZOqbd",
      children: jsxs(AutoLayout, {
        children: [p && jsx(AutoLayout, {
          children: numCurrentAssetInstances > 1 ? jsxs(AutoLayout, {
            horizontalAlignItems: "center",
            spacing: 4,
            width: "hug-contents",
            children: [jsx("div", {
              children: jsxs("div", {
                className: "review_updates_modal--instanceNavigationWrapper--bNZTc",
                children: [jsx(IconButton, {
                  "aria-label": getI18nString("design_systems.updates.previous_instance"),
                  disabled: !previousHandler,
                  onClick: previousHandler ?? void 0,
                  children: jsx(_$$C, {})
                }), jsx(IconButton, {
                  "aria-label": getI18nString("design_systems.updates.next_instance"),
                  disabled: !nextHandler,
                  onClick: nextHandler ?? void 0,
                  children: jsx(_$$e2, {})
                })]
              })
            }), jsx("div", {
              children: renderI18nText("design_systems.updates.instanceIndexOfTotal", {
                overallItemIndex: currentAssetInstanceIndex + 1,
                totalNumItems: numCurrentAssetInstances
              })
            }), jsx("div", {
              children: jsx(IconButton, {
                disabled: !navigateToCurrentInstance,
                "aria-label": getI18nString("design_systems.updates.go_to_current_instance"),
                onClick: navigateToCurrentInstance ?? void 0,
                children: jsx(_$$A, {})
              })
            })]
          }) : jsxs("button", {
            "aria-disabled": !navigateToCurrentInstance,
            "aria-label": getI18nString("design_systems.updates.go_to_current_instance"),
            className: "review_updates_modal--footerLink--xKGaI blue_link--blueLinkDefaultPointer--ozEG5 blue_link--blueLink--9rlnd",
            onClick: navigateToCurrentInstance ?? void 0,
            children: [jsx(_$$A, {}), renderI18nText("design_systems.updates.go_to_current_instance")]
          })
        }), jsx(Spacer, {}), jsx(AutoLayout, {
          horizontalAlignItems: "end",
          children: t
        })]
      })
    })
  });
}
function X({
  updateStyleVersionHandler: e,
  updateAllHandler: t,
  hasMultipleStyleVersions: i,
  isUpdatedStyleVersion: r,
  isUpdatedAsset: a
}) {
  return r ? jsxs(Fragment, {
    children: [jsx(ButtonLarge, {
      variant: "secondary",
      disabled: !0,
      iconPrefix: jsx(_$$l, {}),
      children: renderI18nText("design_systems.updates.updated")
    }), !a && jsx(ButtonLarge, {
      variant: "primary",
      onClick: t,
      children: renderI18nText("design_systems.updates.update_all")
    })]
  }) : jsxs(Fragment, {
    children: [jsx(ButtonLarge, {
      variant: i ? "secondary" : "primary",
      onClick: e,
      htmlAttributes: {
        autoFocus: !0
      },
      children: renderI18nText("design_systems.updates.update_style")
    }), i && jsx(ButtonLarge, {
      variant: "primary",
      onClick: t,
      children: renderI18nText("design_systems.updates.update_all")
    })]
  });
}
let Q = memo(function ({
  beforeImage: e,
  afterImage: t,
  footer: i,
  isUpdated: a,
  type: s
}) {
  let [o, l] = useState(Ss.SIDE_BY_SIDE);
  let [d, c] = useState(q0);
  let [u, p] = useState(!0);
  let m = !!e && !!t;
  let h = e => jsx(BL, {
    isPreviewAvailable: m,
    showOptions: e,
    view: o,
    onSideBySideClick: () => l(Ss.SIDE_BY_SIDE),
    onOverlayClick: () => l(Ss.OVERLAY)
  });
  return jsxs("div", {
    className: "review_updates_modal--contentContainer--5qm9t",
    children: [a ? jsxs(xY, {
      zoomPercentageOptions: uj,
      zoomOnMousePointer: !1,
      children: [jsx(Y, {
        title: getI18nString("design_systems.updates.updated"),
        containerStyle: B,
        renderBackground: !0,
        asyncLoadedImage: t
      }), h(!1)]
    }) : jsxs(Fragment, {
      children: [o === Ss.SIDE_BY_SIDE && jsxs(qW, {
        zoomPercentageOptions: uj,
        zoomOnMousePointer: !1,
        children: [jsx(Y, {
          asyncLoadedImage: e,
          containerStyle: "review_updates_modal--beforeUpdate--WnsX7 review_updates_modal--_comparable--E852T",
          renderBackground: !0,
          title: getI18nString("design_systems.updates.current")
        }), jsx(Y, {
          asyncLoadedImage: t,
          containerStyle: "review_updates_modal--afterUpdate--1P72H review_updates_modal--_comparable--E852T",
          renderBackground: !0,
          title: getI18nString("design_systems.updates.updated")
        }), h(!0)]
      }), o === Ss.OVERLAY && jsxs(xY, {
        zoomPercentageOptions: uj,
        zoomOnMousePointer: !1,
        children: [jsx(Y, {
          asyncLoadedImage: e,
          containerStyle: B,
          renderBackground: !0
        }), u && jsx(Y, {
          asyncLoadedImage: t,
          containerStyle: B,
          opacity: d
        }), jsx(_$$u, {
          opacity: d,
          isAfterImageShown: u,
          onToggleClick: () => p(!u),
          onOpacityChange: e => c(e.a)
        }), h(!0)]
      })]
    }), i]
  });
});
let J = memo(function (e) {
  let t = jX(e);
  let i = Multiplayer.isIncrementalSession();
  let [a, o] = useState(!i);
  _$$h(() => {
    if (!i || !t) {
      o(!0);
      return;
    }
    t.type === PrimaryWorkflowEnum.COMPONENT && t.component_key ? Mz([t]).then(() => o(!0)) : t.type === PrimaryWorkflowEnum.STATE_GROUP && t.key ? a7([t]).then(() => o(!0)) : (reportError(_$$e.DESIGN_SYSTEMS_EDITOR, Error("Update asset does not have a key")), o(!0));
  });
  let l = useRef(null);
  return jsx(_$$d, {
    children: jsx(H, {
      backButtonRef: l,
      children: jsx("div", {
        className: z,
        children: a ? jsx(W, {
          backButtonRef: l,
          ...e
        }) : jsx("div", {
          className: V,
          children: jsx(ImageBackedLoading, {
            size: "large",
            className: G
          })
        })
      })
    })
  });
});
let ee = memo(function ({
  updateStyle: e,
  selectedOutdatedStyleGUID: t
}) {
  let i = Multiplayer.isIncrementalSession();
  let [a, s] = useState(!i);
  _$$h(() => {
    if (!i) {
      s(!0);
      return;
    }
    RL([e]).then(() => s(!0));
  });
  let o = useRef(null);
  return jsx(_$$d, {
    children: jsx(H, {
      backButtonRef: o,
      children: jsx("div", {
        className: z,
        children: a ? jsx(K, {
          backButtonRef: o,
          updateStyle: e,
          selectedOutdatedStyleGUID: t
        }) : jsx("div", {
          className: V,
          children: jsx(ImageBackedLoading, {
            size: "large",
            className: G
          })
        })
      })
    })
  });
});
let $$et0 = registerModal(J, "ReviewInstanceUpdatesModal");
let $$ei1 = registerModal(ee, "ReviewStyleUpdatesModal");
export const F2 = $$et0;
export const oX = $$ei1;