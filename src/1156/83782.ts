import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Hg } from "../figma_app/304955";
import { range } from "../figma_app/492908";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { l as _$$l } from "../905/509505";
import { textDisplayConfig } from "../905/687265";
import { stylex } from "@stylexjs/stylex";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { useSingleEffect } from "../905/791079";
import { KeyboardNavigationProvider } from "../figma_app/119475";
import { TrackedLink } from "../905/160095";
import { getI18nString } from "../905/303541";
import { hideModalHandler, showModalHandler } from "../905/156213";
import { useCurrentFileKey } from "../figma_app/516028";
import { AssetFilterMode } from "../figma_app/646357";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { r6 } from "../905/542608";
import { LibraryModalContextProvider } from "../905/753512";
import { LibraryModalSections } from "../905/66449";
import { V } from "../905/843013";
import { Q } from "../905/572508";
import { S as _$$S } from "../905/348433";
import { $ as _$$$ } from "../905/636188";
import { ci } from "../figma_app/259678";
import { Zr } from "../figma_app/114522";
import { jx, Ic } from "../figma_app/198516";
import { FX } from "../figma_app/558805";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { D as _$$D } from "../905/169680";
import { S1, Bo } from "../1156/867089";
import { nc } from "../figma_app/570630";
import { kC, dY, x1 } from "../1156/116225";
let B = registerModal(function (e) {
  let t = useModalManager(e);
  let {
    library,
    onClose
  } = e;
  let l = useDispatch();
  let {
    createLibraryImport
  } = S1();
  let u = useCurrentFileKey();
  useSingleEffect(() => {
    analyticsEventManager.trackDefinedEvent("ds_import.library_warning_modal_shown", {
      library_key: library.library_key,
      file_key: u || ""
    });
  });
  let x = useCallback(() => {
    analyticsEventManager.trackDefinedEvent("ds_import.library_warning_modal_continue_clicked", {
      library_key: library.library_key,
      file_key: u || ""
    });
    createLibraryImport(library);
    l(hideModalHandler());
    onClose();
  }, [createLibraryImport, l, library, onClose, u]);
  return jsx(ModalRootComponent, {
    manager: t,
    width: "lg",
    height: "fixed",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("figmake.ds_imports.library_selector_warning_modal.title")
        })
      }), jsx(DialogBody, {
        children: jsxs("div", {
          className: "x78zum5 xdt5ytf xou54vl x1xmf6yo x1e56ztr",
          children: [jsxs("div", {
            className: "x78zum5 xou54vl x6s0dn4",
            children: [jsx(_$$D, {
              thumbnailUrl: library.thumbnail_url,
              coverThumbnail: !0,
              name: library.library_name
            }), jsxs("div", {
              className: "x78zum5 xdt5ytf x1jnr06f",
              children: [jsx("span", {
                className: "x17hqfcz xemv814 x1ma9mv9",
                children: library.library_name
              }), jsx("span", {
                className: "x1n0bwc9 xclx6tv x17akokd x1qxcl5b",
                children: library.team_name
              })]
            })]
          }), jsx("p", {
            children: getI18nString("figmake.ds_imports.library_selector_warning_modal.body")
          })]
        })
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(Button, {
            onClick: x,
            children: getI18nString("figmake.ds_imports.library_selector_warning_modal.continue")
          })
        })
      })]
    })
  });
}, "ChatLibrarySelectorWarningModal");
let P = {
  textSecondary: {
    color: "x1n0bwc9",
    $$css: !0
  }
};
function U({
  closeModal: e,
  hasExistingChatMessages: t
}) {
  let {
    allDsImportReadyLibraries,
    allDsImportReadyLibrariesRequestStatus
  } = Bo();
  return "loading" === allDsImportReadyLibrariesRequestStatus || allDsImportReadyLibraries?.length ? jsx(_$$$, {
    className: "x1y1aw1k xjkvuk6 xh8yej3 x78zum5 xdt5ytf x167g77z",
    children: jsx(_$$S, {
      children: jsx(G, {
        closeModal: e,
        hasExistingChatMessages: t
      })
    })
  }) : jsx(H, {});
}
function G({
  closeModal: e,
  hasExistingChatMessages: t
}) {
  let {
    allDsImportReadyLibraries,
    allDsImportReadyLibrariesRequestStatus
  } = Bo();
  let {
    createLibraryImport
  } = S1();
  let o = useDispatch();
  let c = useCurrentFileKey();
  if ("loading" === allDsImportReadyLibrariesRequestStatus) return jsx(Fragment, {
    children: range(3).map(e => jsx(Q, {}, e))
  });
  let d = allDsImportReadyLibraries || [];
  return 0 === d.length ? null : jsxs("div", {
    children: [jsx("div", {
      className: "x1qh3cfz xbnt99j",
      children: jsxs("div", {
        className: "x78zum5 xdt5ytf x1cy8zhl x1jnr06f xc7ga6q x1seouad x1qh3cfz x1b06okx xcr9a89",
        children: [jsx("div", {
          ...stylex.props(textDisplayConfig.textBodyMediumStrong),
          children: getI18nString("sites.modal.select_library_banner_title")
        }), jsxs("div", {
          ...stylex.props(textDisplayConfig.textBodyMedium, P.textSecondary),
          children: [getI18nString("sites.modal.select_library_banner_subtitle"), "\xa0", jsx(TrackedLink, {
            href: kC,
            newTab: !0,
            children: getI18nString("sites.modal.learn_more")
          })]
        })]
      })
    }), jsx(LibraryModalContextProvider, {
      entrypoint: r6.FIGMAKE,
      initialTab: void 0,
      initialUpdatesModalScope: AssetFilterMode.CURRENT,
      children: jsx(KeyboardNavigationProvider, {
        children: d.map((n, i) => jsx(V, {
          header: n.library_name,
          subheader: n.team_name,
          thumbnailUrl: n.thumbnail_url,
          coverThumbnail: !0,
          callToAction: null,
          name: n.library_name,
          onClick: () => {
            analyticsEventManager.trackDefinedEvent("ds_import.library_selector_overlay_library_selected", {
              library_key: n.library_key,
              file_key: c || ""
            });
            t ? (e(), o(showModalHandler({
              type: B,
              data: {
                library: n
              }
            }))) : (createLibraryImport(n), e());
          },
          kbPath: [LibraryModalSections.TabBodySection.Body, i]
        }, `LibraryListItem-${i}`))
      })
    })]
  });
}
function H() {
  let e = Xr(jx);
  let t = useAtomWithSubscription(FX);
  let n = useCurrentFileKey();
  useSingleEffect(() => {
    analyticsEventManager.trackDefinedEvent("ds_import.library_selector_empty_state_seen", {
      file_key: n || ""
    });
  });
  return jsx("div", {
    className: "x9f619 x167g77z xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xwib8y2",
    children: jsxs("div", {
      className: "xhwf2h4 x167g77z x78zum5 xdt5ytf x6s0dn4 xl56j7k x2b8uid",
      children: [jsx(_$$l, {}), jsx("div", {
        ...stylex.props(textDisplayConfig.textBodyMediumStrong),
        children: getI18nString("sites.modal.no_libraries_found")
      }), jsxs("div", {
        ...stylex.props(textDisplayConfig.textBodyMedium, P.textSecondary),
        children: [getI18nString("sites.modal.select_library_banner_subtitle"), "\xa0", jsx(TrackedLink, {
          href: kC,
          newTab: !0,
          children: getI18nString("sites.modal.learn_more")
        })]
      }), !t && jsxs(Fragment, {
        children: [jsxs("div", {
          className: "x78zum5 x1q0g3np xl56j7k x2b8uid x6s0dn4",
          children: [jsx("div", {
            className: "x1dmp6jm xqtp20y x1bamp8i"
          }), "\xa0", jsx("div", {
            ...stylex.props(textDisplayConfig.textBodyMedium, P.textSecondary),
            children: getI18nString("sites.modal.or")
          }), "\xa0", jsx("div", {
            className: "x1dmp6jm xqtp20y x1bamp8i"
          })]
        }), jsx("div", {
          ...stylex.props(textDisplayConfig.textBodyMedium, P.textSecondary),
          children: getI18nString("sites.modal.add_guidelines_text")
        }), jsx(Button, {
          variant: "primary",
          onClick: () => {
            analyticsEventManager.trackDefinedEvent("ds_import.library_selector_empty_state_guidelines_clicked", {
              file_key: n || ""
            });
            let t = Hg(nc);
            let r = t[dY] || t[x1] || null;
            r && (Zr(r), e(Ic.CODE), r.codeFilePath && ci(r.codeFilePath));
          },
          children: getI18nString("sites.modal.add_guidelines_button_text")
        })]
      })]
    })
  });
}
export let $$W0 = registerModal(function (e) {
  let {
    defaultPosition,
    onCloseCallback,
    hasExistingChatMessages
  } = e;
  let l = useDispatch();
  let d = useCallback(() => {
    onCloseCallback();
    l(hideModalHandler());
  }, [l, onCloseCallback]);
  return jsx(bL, {
    defaultPosition,
    width: 332,
    maxHeight: 336,
    onClose: d,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("sites.modal.select_library")
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsx("div", {
          className: "x78zum5 xdt5ytf xou54vl x2ozue6 xh8yej3 x9f619",
          children: jsx(U, {
            closeModal: d,
            hasExistingChatMessages
          })
        })
      })]
    })
  });
}, "ChatLibrarySelectorOverlay", ModalSupportsBackground.YES);
export const u = $$W0;