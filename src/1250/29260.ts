import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { IconButton } from "../905/443068";
import { BannerFullWidth } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { SelectGroupLabel, SelectOption, SelectContainer, SelectOptionReset } from "../905/493196";
import { ButtonLargeWide, Button } from "../905/521428";
import { LoadingSpinner } from "../905/443820";
import { A as _$$A } from "../905/251970";
import { g as _$$g } from "../905/125190";
import { getFeatureFlags } from "../905/601108";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { buildUploadUrl } from "../figma_app/169182";
import { getAtomWithEnabledCheck } from "../figma_app/566371";
import { WAFImage } from "../905/675859";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { v as _$$v, L as _$$L } from "../1250/232926";
import { OG } from "../1250/340571";
import { XU } from "../1250/282084";
import { getVisibleTheme } from "../905/640017";
import { getLibraryName } from "../905/506188";
import { noop } from 'lodash-es';
import { L as _$$L2 } from "../1250/681431";
import { i6 } from "../1250/36596";
import { O as _$$O } from "../1250/664647";
import { F as _$$F2 } from "../1250/564115";
function O({
  libraryKey: e,
  items: t,
  setItems: n
}) {
  let [i, o] = useState(!1);
  let [s, l] = useState(0);
  let d = useRef(null);
  let c = useRef(null);
  _$$L2(d, () => {
    o(!1);
    u("");
  }, !0);
  let [_, u] = useState("");
  let {
    result,
    isLoading
  } = _$$F2({
    searchTerm: _,
    libraryKey: e
  });
  let g = useMemo(() => result.filter(e => !t.some(t => t.value === e.subtitle)).map(e => ({
    title: e.subtitle
  })), [result, t]);
  let f = (e, a) => {
    t.find(t => t.value === e.title) || (n(t => [...t, {
      value: e.title
    }]), l(a), u(""));
  };
  return jsxs("div", {
    ref: d,
    className: "github_directory_multiselect--container--JiwGo",
    children: [jsx("div", {
      className: "github_directory_multiselect--inputContainer--GhK1f",
      children: jsx(i6, {
        items: t,
        maxItems: 99,
        onAddItem: noop,
        onClearItems: () => n([]),
        onFocus: () => o(!0),
        onKeyDown: e => {
          if ("ArrowDown" === e.key) {
            if (s < g.length - 1) {
              l(s + 1);
              e.preventDefault();
              return !0;
            }
          } else if ("ArrowUp" === e.key) {
            if (s > 0) {
              l(s - 1);
              e.preventDefault();
              return !0;
            }
          } else if ("Enter" === e.key) {
            f(g[s], s);
            e.preventDefault();
            return !0;
          } else if ("Escape" === e.key) {
            o(!1);
            l(0);
            e.currentTarget.blur();
            e.preventDefault();
            e.stopPropagation();
            return !0;
          }
          return !1;
        },
        onRemoveLastItem: e => {
          n(t => t.filter((t, n) => n !== e));
        },
        onRequestPlaceholder: () => "",
        onValueChange: e => u(e),
        value: _
      })
    }), jsx(_$$O, {
      ref: c,
      shouldBeVisible: i,
      isLoading,
      items: g,
      selectedIndex: s,
      onItemSelect: f
    })]
  });
}
let R = "github_settings_modal--header--0QIr-";
let M = "github_settings_modal--headerImage--uQq0k";
let P = "github_settings_modal--pageTitle--6WvC0";
let D = "github_settings_modal--label--queB7";
let L = "github_settings_modal--checkbox--MsRIb";
let F = "github_settings_modal--checkboxContainer--XtCH-";
let B = "github_settings_modal--icon--7U-YB";
let U = "github_settings_modal--inputContainer---Jix2";
export function $$G0({
  onClose: e,
  onBack: t,
  libraryKey: n,
  isDirectorySelection: r = !1
}) {
  return createPortal(jsx("div", {
    className: "github_settings_modal--portal--gj452",
    children: jsx(W, {
      libraryKey: n,
      onClose: e,
      onBack: t,
      isDirectorySelection: r
    })
  }), document.body);
}
function W({
  onClose: e,
  onBack: t,
  libraryKey: n,
  isDirectorySelection: i = !1
}) {
  let [o, c] = useState(i);
  let _ = OG(n);
  let u = "dark" === getVisibleTheme();
  let p = getLibraryName(n).unwrapOr(null);
  let f = u ? buildUploadUrl("b43ae367a8626405bff148b565f27a2c216474d8") : buildUploadUrl("6cf2ccf30dc4e0aa87883c3f3b15eaf223418950");
  let b = _ && _.availableRepositories.length > 1;
  let x = _ && _.availableRepositories.length >= 100;
  let v = useMemo(() => o ? jsx(q, {
    onClose: () => {
      c(!1);
      e?.();
    },
    libraryKey: n
  }) : b ? jsx(z, {
    onClose: e,
    onSelected: () => {
      getFeatureFlags().dt_component_browser_inline_suggestions ? c(!0) : e?.();
    },
    libraryName: p ?? "",
    illustrationUrl: f,
    libraryKey: n,
    repositories: _
  }) : jsx($, {
    libraryName: p ?? "",
    illustrationUrl: f,
    libraryKey: n,
    repositories: _,
    onNext: () => {
      getFeatureFlags().dt_component_browser_inline_suggestions ? c(!0) : e?.();
    }
  }), [f, b, o, _, n, p, e]);
  return jsxs("div", {
    className: "github_settings_modal--background--3ihGt",
    children: [jsx("div", {
      className: "github_settings_modal--closeButton--alk3G",
      children: jsx(IconButton, {
        "aria-label": getI18nString("dev_handoff.component_browser_onboarding.close"),
        onClick: t,
        children: jsx(_$$A, {})
      })
    }), jsxs("div", {
      className: "github_settings_modal--contentContainer--AzXr6",
      children: [jsx("div", {
        className: "github_settings_modal--content--z3SfD",
        children: jsx("div", {
          className: "github_settings_modal--githubContent--hk2sc",
          children: v
        })
      }), x && jsx("div", {
        children: jsx(BannerFullWidth, {
          variant: "brand",
          children: jsx(BannerMessage, {
            title: getI18nString("dev_handoff.component_browser_onboarding.github_repo_limit_banner_title", {
              repo_max_count: 100
            }),
            children: getI18nString("dev_handoff.component_browser_onboarding.github_repo_limit_banner_body")
          })
        })
      })]
    })]
  });
}
function z({
  libraryName: e,
  illustrationUrl: t,
  libraryKey: n,
  repositories: i,
  onClose: o,
  onSelected: s
}) {
  let l = useMemo(() => i?.selectedRepositories ?? [], [i?.selectedRepositories]);
  let [d, u] = useState(l.length > 0 ? l[0]?.id : getI18nString("dev_handoff.component_browser_onboarding.github_select_repository"));
  let m = getAtomWithEnabledCheck(XU);
  let f = useMemo(() => {
    let e = i?.availableRepositories.find(e => e.id === d)?.name;
    let t = l[0]?.name;
    return e ?? t ?? getI18nString("dev_handoff.component_browser_onboarding.github_select_repository");
  }, [i?.availableRepositories, d, l]);
  let h = async () => {
    await m.mutate({
      libraryKey: n,
      repositoryIds: [d]
    });
    s?.();
  };
  return jsxs("div", {
    children: [jsxs("div", {
      className: R,
      children: [jsx(WAFImage, {
        src: t,
        alt: getI18nString("dev_handoff.component_browser_onboarding.connected_projects_icon"),
        className: M
      }), jsx("span", {
        className: P,
        children: renderI18nText("dev_handoff.component_browser_onboarding.github_repository_selection", {
          library_name: e ?? ""
        })
      })]
    }), jsxs("div", {
      className: F,
      children: [jsxs("div", {
        className: L,
        children: [jsx("div", {
          className: B,
          children: jsx(_$$g, {})
        }), jsx("span", {
          className: D,
          children: getI18nString("dev_handoff.component_browser_onboarding.github_can_revoke_access")
        })]
      }), jsxs("div", {
        className: L,
        children: [jsx("div", {
          className: B,
          children: jsx(_$$g, {})
        }), jsx("span", {
          className: D,
          children: getI18nString("dev_handoff.component_browser_onboarding.github_issues_access")
        })]
      }), jsxs("div", {
        className: L,
        children: [jsx("div", {
          className: B,
          children: jsx(_$$g, {})
        }), jsx("span", {
          className: D,
          children: getI18nString("dev_handoff.component_browser_onboarding.github_code_and_metadata_access")
        })]
      })]
    }), jsxs("div", {
      className: U,
      children: [jsxs(SelectGroupLabel, {
        onChange: u,
        value: d,
        children: [jsx(SelectOption, {
          id: "github-repo-select",
          placeholder: getI18nString("dev_handoff.component_browser_onboarding.github_select_repository"),
          width: "fill",
          size: "lg",
          children: jsx("span", {
            className: "github_settings_modal--select--JHTPI",
            children: f
          })
        }), jsx(SelectContainer, {
          children: i?.availableRepositories?.map(e => jsx(SelectOptionReset, {
            value: e.id,
            children: e.name
          }, e.id))
        })]
      }), jsx(ButtonLargeWide, {
        variant: "primary",
        disabled: !d || m.isLoading,
        onClick: h,
        children: getFeatureFlags().dt_component_browser_inline_suggestions ? getI18nString("dev_handoff.component_browser_onboarding.continue_button") : getI18nString("dev_handoff.component_browser_onboarding.github_connect_repository")
      }), jsx(Button, {
        variant: "link",
        onClick: o,
        children: getI18nString("dev_handoff.component_browser_onboarding.cancel")
      })]
    })]
  });
}
function $({
  libraryName: e,
  illustrationUrl: t,
  libraryKey: n,
  repositories: r,
  onNext: i
}) {
  let o = getAtomWithEnabledCheck(XU);
  let s = r?.availableRepositories[0];
  return jsxs("div", {
    children: [jsxs("div", {
      className: R,
      children: [jsx(WAFImage, {
        src: t,
        alt: getI18nString("dev_handoff.component_browser_onboarding.connected_projects_icon"),
        className: M
      }), jsx("span", {
        className: P,
        children: renderI18nText("dev_handoff.component_browser_onboarding.github_connection_success", {
          library_name: e,
          repository_name: s?.name ?? "GitHub"
        })
      })]
    }), jsxs("div", {
      className: F,
      children: [jsxs("div", {
        className: L,
        children: [jsx("div", {
          className: B,
          children: jsx(_$$g, {})
        }), jsx("span", {
          className: D,
          children: getI18nString("dev_handoff.component_browser_onboarding.github_can_revoke_access")
        })]
      }), jsxs("div", {
        className: L,
        children: [jsx("div", {
          className: B,
          children: jsx(_$$g, {})
        }), jsx("span", {
          className: D,
          children: getI18nString("dev_handoff.component_browser_onboarding.github_issues_access")
        })]
      }), jsxs("div", {
        className: L,
        children: [jsx("div", {
          className: B,
          children: jsx(_$$g, {})
        }), jsx("span", {
          className: D,
          children: getI18nString("dev_handoff.component_browser_onboarding.github_code_and_metadata_access")
        })]
      })]
    }), jsx("div", {
      className: U,
      children: jsx(ButtonLargeWide, {
        variant: "primary",
        onClick: () => {
          o.mutate({
            libraryKey: n,
            repositoryIds: s ? [s.id] : []
          });
          i?.();
        },
        children: getFeatureFlags().dt_component_browser_inline_suggestions ? getI18nString("dev_handoff.component_browser_onboarding.continue_button") : getI18nString("dev_handoff.component_browser_onboarding.github_start_mapping")
      })
    })]
  });
}
function q({
  onClose: e,
  libraryKey: t
}) {
  let [n, i] = useState([]);
  let [s, l] = useState(!1);
  let d = OG(t);
  let c = d?.selectedRepositories[0]?.id;
  let m = trackDefinedFileEventWithStore();
  let {
    directories,
    isLoading,
    errors
  } = _$$v({
    libraryKey: t,
    repositoryId: c || ""
  }, {
    enabled: !!c
  });
  let b = useDispatch<AppDispatch>();
  let x = useMemo(() => JSON.stringify(n) !== JSON.stringify(directories.map(e => ({
    value: e
  }))), [n, directories]);
  useEffect(() => {
    errors && errors.length > 0 && b(VisualBellActions.enqueue({
      message: getI18nString("dev_handoff.component_browser_onboarding.directory_selection_error"),
      error: !0
    }));
  }, [errors, b]);
  let j = _$$L();
  useEffect(() => {
    directories.length > 0 && i(directories.map(e => ({
      value: e
    })));
  }, [directories]);
  let k = async () => {
    if (c) try {
      let a = n.map(e => e.value);
      l(!0);
      await j({
        libraryKey: t,
        repositoryId: c,
        directories: a
      });
      e();
    } catch (e) {
      b(VisualBellActions.enqueue({
        message: e.message,
        error: !0
      }));
    } finally {
      l(!1);
    }
  };
  return jsxs("div", {
    className: "github_settings_modal--directoryContainer--wfm-O",
    children: [jsx("h2", {
      className: P,
      children: getI18nString("dev_handoff.component_browser_onboarding.directory_selection_title")
    }), jsxs("div", {
      className: "github_settings_modal--directoryContent--xSLYY",
      children: [jsx("p", {
        className: "github_settings_modal--directoryDescriptionText--KpVRN",
        children: getI18nString("dev_handoff.component_browser_onboarding.directory_selection_description")
      }), jsxs("div", {
        className: "github_settings_modal--directoryInputSection--rOgbV",
        children: [jsx("p", {
          className: "github_settings_modal--directoryInputLabel---6nZE",
          children: getI18nString("dev_handoff.component_browser_onboarding.directory_selection_input_label")
        }), isLoading ? jsx("div", {
          className: "github_settings_modal--directorySpinnerWrapper--yT0nj",
          children: jsx(LoadingSpinner, {})
        }) : jsx(O, {
          libraryKey: t,
          items: n,
          setItems: i
        })]
      }), jsxs("div", {
        className: "github_settings_modal--directoryButtonContainer--lj-1R",
        children: [jsx(ButtonLargeWide, {
          variant: "primary",
          disabled: isLoading || s || !x,
          onClick: k,
          children: directories.length > 0 ? getI18nString("dev_handoff.component_browser_onboarding.directory_selection_update") : getI18nString("dev_handoff.component_browser_onboarding.directory_selection_connect")
        }), jsx(ButtonLargeWide, {
          variant: "secondary",
          onClick: () => {
            m("component_browser.directory_picker_skipped");
            e();
          },
          disabled: s,
          children: getI18nString("dev_handoff.component_browser_onboarding.directory_selection_skip")
        })]
      })]
    })]
  });
}
export const A = $$G0;