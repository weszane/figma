import { A as _$$A } from "../905/801769";
import { then } from "../181e8476/626372";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import i, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lQ } from "../905/934246";
import { ServiceCategories as _$$e } from "../905/165054";
import { Link } from "../905/438674";
import { usePopoverPrimitive, PopoverPrimitiveContainer, PopoverPrimitiveArrow } from "../905/691059";
import { E as _$$E } from "../905/53857";
import { ButtonPrimitive } from "../905/632989";
import { ButtonWide, Button, ButtonLarge } from "../905/521428";
import { BannerInline } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { BannerButton } from "../905/692618";
import { r } from "../905/784543";
import { g as _$$g } from "../figma_app/479056";
import { setupThemeContext } from "../905/614223";
import { HandoffBindingsCpp, Fullscreen } from "../figma_app/763686";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { useLocalStorageSync } from "../905/657224";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { A as _$$A2 } from "../905/920142";
import { isDevEnvironment } from "../figma_app/169182";
import { reportError } from "../905/11";
import { Badge, BadgeColor } from "../figma_app/919079";
import { z as _$$z } from "../905/284530";
import { f as _$$f, v as _$$v } from "../figma_app/258006";
import { getI18nString, renderI18nText } from "../905/303541";
import { Spacer } from "../905/470281";
import { A as _$$A3 } from "../905/963262";
import { Ur } from "../figma_app/451396";
import { rZ, yT, zM } from "../figma_app/332598";
import { v4 } from "../figma_app/655139";
import { uQ } from "../figma_app/311375";
import { h as _$$h } from "../905/207101";
import { useLatestRef } from "../figma_app/922077";
import { X as _$$X } from "../905/853613";
import { findComponentGuidOrPublishId } from "../figma_app/854115";
import { showModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { TrackingProvider } from "../figma_app/831799";
import { replaceSelection } from "../figma_app/741237";
import { isVsCodeEnvironment } from "../905/858738";
import { Um } from "../905/848862";
import { useSceneGraphSelector, usePlaygroundSceneGraph } from "../figma_app/722362";
import { selectCurrentFile, useCurrentFileKey, openFileLibraryKeyAtom } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { selectUserFlag } from "../905/940356";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { bj } from "../905/420347";
import { liveStoreInstance } from "../905/713695";
import { isPublishedLibraryWithAssets, isCommunityLibrary } from "../figma_app/633080";
import { KindEnum } from "../905/129884";
import { Vr } from "../figma_app/151869";
import { VZ } from "../figma_app/727192";
import { l6, c$ } from "../905/794875";
import { uI } from "../figma_app/598952";
import { NONE_SYMBOL } from "../905/992467";
import { HX, _3, zi } from "../figma_app/97042";
import { QU, bf } from "../figma_app/856806";
import { useModalManager } from "../905/437088";
import { H as _$$H } from "../905/56919";
import { ModalRootComponent } from "../905/38914";
import { DialogCustomContents } from "../figma_app/272243";
import { TabsPrimitiveTabStrip } from "../905/840133";
import { r as _$$r2 } from "../905/216849";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { lW } from "../figma_app/11182";
import { setupHyperlinkHandler } from "../figma_app/815170";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { Gg, MC, gY, YN, v_, M7, uw, G5, jt, cL, fq, as, kL, pz, tb, J$, gy, xR, s6, Sd, X4, jH, Iw, F9, Qs } from "../905/610227";
import { mapPlatformToFramework as _$$yT } from "../905/359509";
import { Au } from "../figma_app/204145";
import { A as _$$A4 } from "../5724/663128";
let el = _$$A.createLazyComponent(() => then(e => e.CodeConnectSection), {
  loading: () => null,
  error: NONE_SYMBOL.NONE,
  componentName: "CodeConnectSection"
});
var eI = (e => (e.REACT = "React", e.SWIFTUI = "SwiftUI", e.COMPOSE = "Compose", e.HTML = "HTML", e))(eI || {});
function eS({
  language: e
}) {
  switch (e) {
    case "React":
      return jsx(ev, {});
    case "SwiftUI":
      return jsx(eA, {});
    case "Compose":
      return jsx(ex, {});
    case "HTML":
      return jsx(eN, {});
    default:
      return null;
  }
}
function ev() {
  let e = useDispatch();
  return jsxs("ol", {
    role: "list",
    className: Gg,
    children: [jsx("h2", {
      className: MC,
      children: getI18nString("dev_handoff.code.lang_react")
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "1"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_install_package")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: "npm install @figma/code-connect"
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_install_command"),
                onClick: () => e(lW({
                  stringToCopy: "npm install @figma/code-connect"
                })),
                source: "code connect",
                title: "react-step1"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "2"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_run_command")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: "npx figma connect"
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_connect_command"),
                onClick: () => e(lW({
                  stringToCopy: "npx figma connect"
                })),
                source: "code connect",
                title: "react-step2"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "3"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_publish")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: "npx figma connect publish "
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_publish_command"),
                onClick: () => e(lW({
                  stringToCopy: "npx figma connect publish"
                })),
                source: "code connect",
                title: "react-step3"
              })
            })]
          })]
        })]
      })
    })]
  });
}
function eA() {
  let e = useDispatch();
  return jsxs("ol", {
    role: "list",
    className: Gg,
    children: [jsx("h2", {
      className: MC,
      children: getI18nString("dev_handoff.code.lang_swiftui")
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [" ", jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "1"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_install")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: "npm install -g @figma/code-connect"
            }), jsx("div", {
              className: fq,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_global_install_command"),
                onClick: () => e(lW({
                  stringToCopy: "npm install -g @figma/code-connect"
                })),
                source: "code connect",
                title: "swift-step1"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [" ", jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "2"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.swift.add_snippet")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: as,
              children: 'dependencies: [\n\u2003\u2003...,\n\u2003\u2003.package(url: "https://github.com/figma/code-connect", from: "1.0.0"),\n]'
            }), jsx("div", {
              className: fq,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_swift_package_snippet"),
                onClick: () => e(lW({
                  stringToCopy: `dependencies: [
		...,
		.package(url:"https://github.com/figma/code-connect", from: "1.0.0"),
]`,
                  ignoreLineBreaks: !1
                })),
                source: "code connect",
                title: "swift-step2"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [" ", jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "3"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_run_command")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: 'figma connect create "<url_to_node>"'
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_swift_connect_command"),
                onClick: () => e(lW({
                  stringToCopy: "figma connect create"
                })),
                source: "code connect",
                title: "swift-step3"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [" ", jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "4"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_publish")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              children: "figma connect publish "
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_swift_publish_command"),
                onClick: () => e(lW({
                  stringToCopy: "figma connect publish"
                })),
                source: "code connect",
                title: "swift-step4"
              })
            })]
          })]
        })]
      })
    })]
  });
}
function ex() {
  let e = useDispatch();
  return jsxs("ol", {
    role: "list",
    className: Gg,
    children: [jsx("h2", {
      className: MC,
      children: getI18nString("dev_handoff.code.lang_compose")
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "1"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_install")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: "npm install -g @figma/code-connect"
            }), jsx("div", {
              className: fq,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_global_install_command"),
                onClick: () => e(lW({
                  stringToCopy: "npm install -g @figma/code-connect"
                })),
                source: "code connect",
                title: "compose-step1"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "2"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.compose.add_plugin_snippet")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: as,
              children: 'plugins { \n\u2003\u2003...\n\u2003\u2003id("com.figma.code.connect") version "1.+"\n} \n\ndependencies { \n\u2003\u2003...\n\u2003\u2003implementation("com.figma.code.connect:plugin:1.+")\n}'
            }), jsx("div", {
              className: fq,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_compose_plugin_snippet"),
                onClick: () => e(lW({
                  stringToCopy: `plugins {
		...
		id("com.figma.code.connect") version "1.+"
}

dependencies {
		...
		implementation("com.figma.code.connect:plugin:1.+")
}`,
                  ignoreLineBreaks: !1
                })),
                source: "code connect",
                title: "compose-step2"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "3"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_run_command")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: 'figma connect create "<url_to_node>"'
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_compose_connect_command"),
                onClick: () => e(lW({
                  stringToCopy: "figma connect create"
                })),
                source: "code connect",
                title: "compose-step3"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "4"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_publish")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              children: "figma connect publish "
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_compose_publish_command"),
                onClick: () => e(lW({
                  stringToCopy: "figma connect publish"
                })),
                source: "code connect",
                title: "compose-step4"
              })
            })]
          })]
        })]
      })
    })]
  });
}
function eN() {
  let e = useDispatch();
  return jsxs("ol", {
    role: "list",
    className: Gg,
    children: [jsx("h2", {
      className: MC,
      children: getI18nString("dev_handoff.code.lang_html")
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "1"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_install_package")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: "npm install @figma/code-connect"
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_html_install_command"),
                onClick: () => e(lW({
                  stringToCopy: "npm install @figma/code-connect"
                })),
                source: "code connect",
                title: "html-step1"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "2"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_run_command")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: "npx figma connect"
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_html_connect_command"),
                onClick: () => e(lW({
                  stringToCopy: "npx figma connect"
                })),
                source: "code connect",
                title: "html-step2"
              })
            })]
          })]
        })]
      })
    }), jsx("li", {
      className: gY,
      children: jsxs("article", {
        children: [jsx("div", {
          className: YN,
          "aria-hidden": "true",
          children: jsx("div", {
            className: v_,
            children: "3"
          })
        }), jsxs("div", {
          className: M7,
          children: [jsx("div", {
            className: uw,
            children: renderI18nText("dev_handoff.code_connect.modal_publish")
          }), jsxs("div", {
            className: G5,
            children: [jsx("div", {
              className: jt,
              children: "npx figma connect publish "
            }), jsx("div", {
              className: cL,
              children: jsx(rZ, {
                "aria-label": getI18nString("dev_handoff.code_connect.modal_copy_html_publish_command"),
                onClick: () => e(lW({
                  stringToCopy: "npx figma connect publish"
                })),
                source: "code connect",
                title: "html-step3"
              })
            })]
          })]
        })]
      })
    })]
  });
}
let eC = registerModal(function (e) {
  let [t, r] = useState("React");
  let s = trackDefinedFileEventWithStore();
  let o = useDispatch();
  let l = useCallback(e => {
    "HTML" !== e && s("code_connect.connect_to_codebase.language_selected", {
      language: e.toLowerCase()
    });
    r(e);
  }, [s]);
  let d = useModalManager({
    ...e,
    onClose: () => {
      s("code_connect.connect_to_codebase.popup_closed");
      e.onClose();
    }
  });
  let [c, u, _] = _$$H({
    React: !0,
    SwiftUI: !0,
    Compose: !0,
    HTML: !0
  }, t, l);
  return jsx(ModalRootComponent, {
    htmlAttributes: {
      "data-testid": "upgrade_choose_plan_modal"
    },
    manager: d,
    width: 800,
    children: jsx(DialogCustomContents, {
      children: jsxs("div", {
        className: kL,
        children: [jsxs("div", {
          className: pz,
          children: [jsx("h1", {
            className: tb,
            children: renderI18nText("dev_handoff.code_connect.title")
          }), jsx("h2", {
            className: J$,
            children: renderI18nText("dev_handoff.code_connect.modal_text")
          }), jsxs(TabsPrimitiveTabStrip, {
            manager: _,
            className: gy,
            children: [jsx(_$$r2, {
              className: "React" === t ? xR : s6,
              ...c.React,
              children: getI18nString("dev_handoff.code.lang_react")
            }), jsx(_$$r2, {
              className: "SwiftUI" === t ? xR : s6,
              ...c.SwiftUI,
              children: getI18nString("dev_handoff.code.lang_swiftui")
            }), jsx(_$$r2, {
              className: "Compose" === t ? xR : s6,
              ...c.Compose,
              children: getI18nString("dev_handoff.code.lang_compose")
            }), getFeatureFlags().dt_code_connect_modal_updates && jsx(_$$r2, {
              className: "HTML" === t ? xR : s6,
              ...c.HTML,
              children: jsxs("div", {
                className: Sd,
                children: [getI18nString("dev_handoff.code.lang_html"), jsx("span", {
                  className: X4,
                  children: getI18nString("dev_handoff.code.lang_html_examples")
                })]
              })
            })]
          }), jsx("div", {
            className: jH
          }), jsx("span", {
            className: Iw,
            children: jsx(ButtonWide, {
              variant: "primary",
              onClick: () => {
                s("code_connect.connect_to_codebase.view_docs_github_clicked");
                o(setupHyperlinkHandler({
                  rawInput: "https://github.com/figma/code-connect"
                }));
              },
              iconPrefix: jsx("div", {
                className: F9,
                children: jsx(_$$f, {})
              }),
              children: renderI18nText("dev_handoff.code_connect.modal_github_button")
            })
          })]
        }), jsx("div", {
          className: Qs,
          children: jsx(eS, {
            language: t
          })
        })]
      })
    })
  });
}, "CodeConnectModal", ModalSupportsBackground.YES);
function eR({
  doc: e
}) {
  let t = Au();
  return jsxs("div", {
    className: "component_browser_mapping_panel--container--qcOm5",
    children: [jsxs("div", {
      children: [jsx("div", {
        className: "component_browser_mapping_panel--componentName--m-fCG",
        children: e.component
      }), jsxs("div", {
        className: "component_browser_mapping_panel--source--O7O4N",
        children: [getI18nString("dev_handoff.component_browser_mapping_panel.sourceLink"), jsx(Link, {
          newTab: !0,
          href: e.source,
          children: e.source
        })]
      })]
    }), jsx(Button, {
      variant: "secondary",
      onClick: t ? () => t() : void 0,
      children: getI18nString("dev_handoff.component_browser_mapping_panel.editButton")
    })]
  });
}
let eL = "figmadocs--labelSelect--C-SIX";
export function $$eD1({
  height: e
}) {
  return jsx("div", {
    style: {
      height: e
    }
  });
}
function ek({
  notConnected: e
}) {
  let t = jsx(Link, {
    href: "https://www.figma.com/code-connect-docs/",
    "aria-label": getI18nString("dev_handoff.figmadocs.learn_more"),
    trusted: !0,
    newTab: !0,
    children: renderI18nText("dev_handoff.figmadocs.learn_more")
  });
  return jsx(setupThemeContext, {
    brand: "dev-handoff",
    mode: "dark",
    children: jsx("div", {
      className: "figmadocs--ccBadgeTooltip--XMB48",
      children: e ? renderI18nText("dev_handoff.figmadocs.not_connected_tooltip", {
        learnMore: t
      }) : renderI18nText("dev_handoff.figmadocs.connected_tooltip", {
        learnMore: t
      })
    })
  });
}
let eM = {
  boxShadow: "var(--elevation-500)",
  borderRadius: "var(--radius-medium)",
  backgroundColor: "var(--color-bg-tooltip)",
  "--color-bg": "var(--color-bg-tooltip)"
};
let eF = {
  type: "dialog",
  openOnHover: !0,
  placement: "bottom-end",
  softDismiss: !0
};
function ej({
  hideTooltip: e
}) {
  let [t, r] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps,
    getArrowProps
  } = usePopoverPrimitive({
    isOpen: t,
    onOpenChange: r,
    ...eF
  });
  return e ? jsx(_$$E, {
    variant: "componentOutline",
    children: renderI18nText("dev_handoff.figmadocs.connected")
  }) : jsxs(Fragment, {
    children: [jsx(ButtonPrimitive, {
      "aria-label": getI18nString("dev_handoff.figmadocs.connected"),
      ...getTriggerProps(),
      children: jsx(_$$E, {
        variant: "componentOutline",
        children: renderI18nText("dev_handoff.figmadocs.connected")
      })
    }), jsxs(PopoverPrimitiveContainer, {
      ...getContainerProps({
        style: eM
      }),
      children: [jsx(PopoverPrimitiveArrow, {
        ...getArrowProps()
      }), jsx(ek, {})]
    })]
  });
}
function eU() {
  let [e, t] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps,
    getArrowProps
  } = usePopoverPrimitive({
    isOpen: e,
    onOpenChange: t,
    ...eF
  });
  return jsxs(Fragment, {
    children: [jsx(ButtonPrimitive, {
      "aria-label": getI18nString("dev_handoff.figmadocs.not_connected"),
      ...getTriggerProps(),
      children: jsx(_$$E, {
        variant: "inactiveOutline",
        children: renderI18nText("dev_handoff.figmadocs.not_connected")
      })
    }), jsxs(PopoverPrimitiveContainer, {
      ...getContainerProps({
        style: eM
      }),
      children: [jsx(PopoverPrimitiveArrow, {
        ...getArrowProps()
      }), jsx(ek, {
        notConnected: !0
      })]
    })]
  });
}
function eB({
  updatedAt: e
}) {
  let t = ez(e);
  return t ? jsx(Badge, {
    color: BadgeColor.DISABLED,
    text: t,
    className: "figmadocs--editedText--Tz4Au ellipsis--ellipsis--Tjyfa"
  }) : null;
}
function eG({
  linkText: e
}) {
  return jsx("span", {
    className: "figmadocs--linkFilePath--DBTZW",
    children: e
  });
}
function eV() {
  let e = useDispatch();
  return jsxs("div", {
    className: "figmadocs--emptyCodeConnectCard--UrWur",
    children: [jsx("div", {
      className: "figmadocs--emptyCodeConnectCardHeader--S8h2p",
      children: getI18nString("dev_handoff.code_connect.title")
    }), jsx(Button, {
      variant: "link",
      onClick: () => {
        e(showModalHandler({
          type: eC
        }));
      },
      children: getI18nString("dev_handoff.code_connect.entrypoint_text")
    })]
  });
}
function eH(e) {
  let t = bj([e])?.data?.[0];
  return !!t && isPublishedLibraryWithAssets(t) && isCommunityLibrary(t);
}
let ez = (e, t) => {
  let r = useMemo(() => e ? _$$A2(e).fromNow() : void 0, [e]);
  return r ? t ? getI18nString("dev_handoff.figmadocs.connected_last_published_at_to_target", {
    lastPublishedAt: r,
    target: t
  }) : getI18nString("dev_handoff.figmadocs.connected_last_published_at", {
    lastPublishedAt: r
  }) : void 0;
};
function eW({
  source: e,
  updatedAt: t,
  hideFavIcon: r = !1
}) {
  let {
    linkText,
    readableName
  } = useMemo(() => function (e) {
    try {
      let t = new URL(e);
      let r = t.pathname;
      let n = r.split("/");
      let i = "";
      let a = "";
      let s = -1;
      if (e.includes("github") || e.includes("gitlab")) {
        let t = n.indexOf("blob");
        -1 === t && (t = n.indexOf("tree"));
        let r = n.slice(t + 2).join("/");
        i = r.length > 0 ? r : n[n.length - 1];
        a = e.includes("github") ? "Github" : "Gitlab";
      } else if (e.includes("bitbucket")) {
        s = n.indexOf("src");
        let e = n.slice(s + 2).join("/");
        i = e.length > 0 ? e : n[n.length - 1];
        a = "Bitbucket";
      } else e.includes("dev.azure") ? ((i = t.searchParams.get("path") ?? r).startsWith("/") && (i = i.slice(1)), a = "Azure") : (a = t.host, i = e);
      return {
        linkText: i,
        readableName: a
      };
    } catch (e) {
      return {};
    }
  }(e), [e]);
  let o = ez(t, readableName);
  return jsx("div", {
    className: "figmadocs--fileLinkWrapper--UCOD2",
    "data-tooltip": o,
    "data-tooltip-type": KindEnum.TEXT,
    children: jsx(Link, {
      href: e,
      newTab: !0,
      children: jsxs("div", {
        className: "figmadocs--fileLink--gVeAA",
        children: [!r && jsx(_$$v, {
          url: e
        }), linkText && jsx(eG, {
          linkText
        })]
      })
    })
  });
}
function eK({
  doc: e,
  updatedAt: t,
  additionalHeaderActions: r,
  instanceFigmadocs: a,
  isPlayground: s,
  onInstancePillClick: l,
  copyButtonContainer: d
}) {
  let c = selectCurrentUser();
  let u = selectCurrentFile();
  let p = uQ();
  let _ = useSceneGraphSelector();
  let {
    backingNodeId,
    backingComponentKey,
    backingStateGroupKey,
    backingLibraryKey
  } = HX(p ?? "", _, null);
  let E = usePlaygroundSceneGraph();
  s && (_ = E);
  let I = Ur(e.template, a, s);
  let S = _$$l(backingLibraryKey ?? "");
  let A = function (e) {
    let t = bj([e]).data[0];
    let r = null;
    t && (isPublishedLibraryWithAssets(t) && isCommunityLibrary(t) ? r = t.hub_file_id : "library_file_key" in t && (r = t.library_file_key));
    return r;
  }(S);
  let C = eH(S);
  !function ({
    backingLibraryKey: e,
    result: t,
    backingComponentKey: r,
    backingStateGroupKey: n
  }) {
    let a = _$$X(e ? _$$l(e) : null);
    _$$h(() => {
      analyticsEventManager.trackDefinedEvent("code_connect.code_connect_rendered", {
        partnerType: a,
        componentKey: r,
        stateGroupKey: n
      });
    });
    let s = t?.result === "ERROR" && t?.data?.error ? t.data.error.type : null;
    let o = useLatestRef(s);
    useEffect(() => {
      s !== o && s && analyticsEventManager.trackDefinedEvent("code_connect.code_connect_error", {
        partnerType: a,
        errorType: s,
        componentKey: r,
        stateGroupKey: n
      });
    }, [s, o, a, r, n]);
  }({
    backingLibraryKey,
    result: I,
    backingComponentKey,
    backingStateGroupKey
  });
  let O = useCallback(e => {
    l ? l(e) : HandoffBindingsCpp.selectAndPanToNode(e);
  }, [l]);
  let L = useCallback(() => {
    trackEventAnalytics("code_connect_clicked", {
      user_id: c?.id,
      is_playground: s,
      node_id: backingNodeId,
      file_key: A,
      ...(u?.key === A ? {
        file_team_id: u?.teamId,
        file_org_id: u?.parentOrgId
      } : {}),
      label: e.label,
      component_key: backingComponentKey,
      state_group_key: backingStateGroupKey,
      library_key: backingLibraryKey
    });
  }, [c?.id, s, backingNodeId, u?.key, u?.teamId, u?.parentOrgId, e.label, backingComponentKey, backingStateGroupKey, backingLibraryKey, A]);
  if (!I) return null;
  if (I?.result === "SUCCESS") {
    let {
      code,
      language,
      pills
    } = _$$A3({
      output: I,
      sceneGraph: _
    });
    let c = e.source;
    "custom" === language && (o = e.language);
    let u = new Set([...(e.templateData?.imports ?? []), ...Object.entries(a).map(([e, t]) => t.map(e => RegExp(`\\b${e.component}\\b`).test(code) ? e?.templateData?.imports ?? [] : []).flat()).flat()]);
    let p = i;
    if (u.size > 0) {
      if ("html" === language) {
        let e = [];
        let t = [];
        u.forEach(r => {
          r.startsWith("<script") ? e.push(r) : t.push(r);
        });
        e.length > 0 && (p = e.join("\n") + "\n\n" + p);
        t.length > 0 && (p = `<script>${t.join("\n")}</script>

` + p);
      } else p = Array.from(u).join("\n") + "\n\n" + code;
    }
    return jsx(el, {
      code: p,
      language,
      pills,
      fallback: null,
      errorFallback: null,
      reformatOnInstanceChange: s,
      noFadeAnimation: !s,
      onboardingKey: uI,
      children: e => e && jsx(VZ, {
        hideHeader: !0,
        noBorder: !0,
        recordingKey: "figmadoc",
        noPadding: !0,
        onClick: L,
        children: jsxs("div", {
          className: "figmadocs--figmadocWrapper--4SMJB",
          children: [jsx(yT, {
            additionalHeaderActions: r,
            code: [e],
            collapseLongSections: !1,
            copyAllActionEnabled: !1,
            copyButtonContainer: d,
            hideHeader: !0,
            onInstancePillClick: O,
            section: e,
            type: "connected"
          }, e.name), jsxs("div", {
            className: "figmadocs--figmadocOutsideFooter--v1qY-",
            children: [jsx(ej, {
              hideTooltip: C
            }), c ? jsx(eW, {
              source: c,
              updatedAt: t,
              hideFavIcon: !0
            }) : jsx(eB, {
              updatedAt: t
            })]
          })]
        })
      })
    });
  }
  {
    isDevEnvironment() && console.error("Error evaluating Code Connect template", I);
    let e = I?.data.error;
    let t = getI18nString("dev_handoff.figmadocs.error_unknown");
    e?.type === "PROPERTY_NOT_FOUND" ? t = getI18nString("dev_handoff.figmadocs.error_property_not_found", {
      propertyName: e.propertyName
    }) : e?.type === "PROPERTY_TYPE_MISMATCH" ? t = getI18nString("dev_handoff.figmadocs.error_property_type_mismatch", {
      propertyName: e.propertyName,
      propertyType: e.expectedType ?? "unknown"
    }) : e?.type === "CHILD_LAYER_NOT_FOUND" ? t = getI18nString("dev_handoff.figmadocs.error_child_layer_not_found", {
      layerName: e.layerName
    }) : getFeatureFlags().dt_code_connect_id_error && e?.type === "CHILD_LAYER_ID_NOT_FOUND" ? t = getI18nString("dev_handoff.figmadocs.error_child_layer_id_not_found", {
      codeConnectId: e.codeConnectId
    }) : e?.type === "MISSING_CODE_CONNECT_ID" ? t = I?.data.message : reportError(_$$e.DEVELOPER_TOOLS, Error("Error evaluating Code Connect template"), {
      extra: {
        error: I?.data.error
      }
    });
    return jsx("div", {
      className: "figmadocs--errorBannerWrapper--eemEO",
      children: jsx(_$$z, {
        variant: "danger",
        title: getI18nString("dev_handoff.figmadocs.error_title"),
        orientation: "vertical",
        iconSrc: _$$A4,
        children: t
      })
    });
  }
}
function eY({
  parent: e
}) {
  return jsx("div", {
    className: "figmadocs--goToParentButtonWrapper--ZAPci",
    children: jsx(ButtonLarge, {
      variant: "secondary",
      onClick: () => replaceSelection([e.guid ?? ""]),
      iconPrefix: jsx(r, {}),
      children: renderI18nText("dev_handoff.code_connect.go_to_parent_button", {
        name: e.name || ""
      })
    })
  });
}
let $$e$2 = atom(!1);
let eX = setupRemovableAtomFamily(() => atom(!1));
let eq = "dev_mode_has_dismissed_code_connect_instance_entrypoint";
function eJ({
  contentType: e
}) {
  let t = !!getFeatureFlags().dt_ccv2;
  let r = function () {
    let e = useDispatch();
    return useCallback(() => {
      e(showModalHandler({
        type: eC
      }));
    }, [e]);
  }();
  let s = useDispatch();
  let o = selectUserFlag(eq);
  let l = useCallback(() => {
    s(postUserFlag({
      [eq]: !0
    }));
  }, [s]);
  let d = "library-file-hint" === e ? {
    hintText: getI18nString("dev_handoff.code_connect.entrypoint_body_text_library"),
    title: getI18nString("dev_handoff.code_connect.entrypoint_title_library"),
    hintLinkText: getI18nString("dev_handoff.code_connect.entrypoint_text_library")
  } : {
    hintText: getI18nString("dev_handoff.code_connect.entrypoint_body_text"),
    title: getI18nString("dev_handoff.code_connect.entrypoint_title"),
    hintLinkText: getI18nString("dev_handoff.code_connect.entrypoint_text")
  };
  return t || o ? null : jsx(TrackingProvider, {
    name: "code_connect_get_started",
    children: jsx("div", {
      className: "figmadocs--hintContainer--NQVSC",
      children: jsxs(BannerInline, {
        variant: "default",
        icon: jsx(_$$g, {}),
        onDismiss: l,
        children: [jsx(BannerMessage, {
          title: d.title,
          children: d.hintText
        }), jsx(BannerButton, {
          onClick: r,
          children: d.hintLinkText
        }), jsx("div", {
          className: "figmadocs--hintContainerBottomSpacer--CzyNl"
        })]
      })
    })
  });
}
let eZ = {
  format: e => e
};
export function $$eQ0({
  isPlayground: e,
  onInstancePillClick: t
}) {
  let r = getFeatureFlags().dt_component_browser_in_context ? getI18nString("dev_handoff.component_browser.in_context_section_title") : getI18nString("dev_handoff.figmadocs.section_title");
  let o = useSceneGraphSelector();
  let l = usePlaygroundSceneGraph();
  let d = Fullscreen.getPlaygroundNodeData();
  let c = uQ();
  let {
    selectedLabel,
    setSelectedLabel
  } = function (e) {
    let t = _$$yT(e.id);
    let [r, n] = useLocalStorageSync("code-connect-selected-language-storage-key", t);
    return {
      selectedLabel: r,
      setSelectedLabel: n
    };
  }(v4());
  e && (c = findComponentGuidOrPublishId(d.playgroundGUID, l, o) ?? c);
  let _ = l.get(d.playgroundGUID);
  let {
    updatedAt,
    doc,
    instanceFigmadocs,
    availableLabels,
    loaded,
    willHaveCodeConnect,
    isComponentBrowserMapping
  } = _3(c, o, selectedLabel, e ? _ : void 0);
  let x = useDispatch();
  let N = Um();
  let C = useAtomWithSubscription($$e$2);
  useEffect(() => {
    C && console.log("Code Connect Debug: Document", {
      doc
    });
  }, [C, doc]);
  let w = "figmadoc-label-select";
  e && (w += "-playground");
  let [O, P] = useAtomValueAndSetter(eX);
  let D = function ({
    isPlayground: e,
    doc: t,
    willHaveCodeConnect: r,
    loaded: n,
    node: i,
    hasRenderedCodeConnectOnce: s,
    isComponentBrowserMapping: o
  }) {
    let l = useCurrentFileKey();
    let d = liveStoreInstance.File.useValue(l).data;
    let c = useSelector(e => e.userFlags.dev_mode_has_dismissed_code_connect_instance_entrypoint);
    let u = {
      view: "none"
    };
    let p = function (e = !0) {
      let t = useAtomWithSubscription(openFileLibraryKeyAtom);
      let r = useSceneGraphSelector();
      let n = Vr();
      let i = [];
      let a = n;
      for (; a;) {
        (a?.type === "INSTANCE" || a?.type === "SYMBOL") && i.push(a);
        a = a.parentNode;
      }
      let s = i.map(e => {
        let {
          backingNodeId,
          backingLibraryKey
        } = HX(e.guid, r, t);
        return {
          backingNodeId,
          nodeGuid: e.guid,
          nodeName: e.isState ? e.parentNode?.name : e.name,
          backingLibraryKey
        };
      });
      let {
        status,
        nodesWithCodeConnect
      } = QU(s.map(e => zi(e.backingLibraryKey, e.backingNodeId)), e);
      let d = "loaded" === status ? nodesWithCodeConnect : bf() ?? new Set();
      let {
        backingNodeId,
        backingLibraryKey
      } = HX(n?.guid ?? "", r, t);
      if (d.has(zi(backingLibraryKey, backingNodeId))) return null;
      for (let {
        nodeName,
        nodeGuid,
        backingNodeId,
        backingLibraryKey
      } of s) if (d.has(zi(backingLibraryKey, backingNodeId))) return {
        name: nodeName,
        guid: nodeGuid
      };
      return null;
    }("none" === (u = function ({
      isPlayground: e,
      doc: t,
      willHaveCodeConnect: r,
      loaded: n,
      node: i,
      hasRenderedCodeConnectOnce: a,
      fileType: s,
      hasDismissedInstanceEntrypoint: o
    }) {
      let l = !t || t && "type" in t && "snippet" === t.type;
      if (e) {
        if (l) return {
          view: "none"
        };
      } else if (l) {
        if (isVsCodeEnvironment()) return {
          view: "none"
        };
        if (r || !n && a) return {
          view: "inspect-loading"
        };
        if (i?.type === "INSTANCE" || i?.type === "SYMBOL") {
          if (a) return {
            view: "inspect-not-setup"
          };
          if ("LIBRARY" === s && !o) return {
            view: "inspect-library-upsell"
          };
        }
        return {
          view: "none",
          checkParent: !0,
          allowCodebaseSuggestions: !0
        };
      }
      return {
        view: "inspect-panel",
        doc: t
      };
    }({
      isPlayground: !!e,
      doc: t,
      willHaveCodeConnect: !!r,
      loaded: n,
      node: i,
      hasRenderedCodeConnectOnce: s,
      fileType: d?.last_published_at ? "LIBRARY" : "HANDOFF",
      hasDismissedInstanceEntrypoint: !!c
    })).view && !!u.checkParent);
    return p ? {
      view: "inspect-parent",
      parent: p
    } : o && getFeatureFlags().dt_component_browser ? {
      view: "inspect-component-browser-mapping"
    } : u;
  }({
    isPlayground: e,
    loaded,
    doc,
    willHaveCodeConnect,
    node: e ? _ : o.get(c),
    hasRenderedCodeConnectOnce: O,
    isComponentBrowserMapping
  });
  useEffect(() => {
    "inspect-panel" !== D.view || O || P(!0);
  }, [D.view, O, P]);
  let j = useRef(null);
  let U = useSceneGraphSelector();
  let B = uQ();
  let {
    backingLibraryKey
  } = HX(B ?? "", U, null);
  let H = eH(_$$l(backingLibraryKey ?? ""));
  let z = "inspect-panel" !== D.view && "inspect-parent" !== D.view && "inspect-library-upsell" !== D.view && "inspect-component-browser-mapping" !== D.view;
  switch (D.view) {
    case "inspect-panel":
    case "inspect-not-setup":
    case "inspect-loading":
    case "inspect-parent":
    case "inspect-library-upsell":
    case "inspect-component-browser-mapping":
      return jsxs(VZ, {
        recordingKey: "code_connect",
        headerOnboardingKey: uI,
        title: r,
        collapsiblePanelKey: e ? void 0 : "code_connect",
        bodyIsEmpty: z,
        additionalHeaders: "inspect-panel" === D.view ? jsxs("div", {
          className: "figmadocs--additionalHeadersContainer--Cl5k9",
          children: [jsx(l6, {
            ariaLabel: getI18nString("dev_handoff.code.language"),
            className: eL,
            dispatch: x,
            dropdownAlignment: "right",
            dropdownShown: N,
            dropdownWidth: "140px",
            formatter: eZ,
            id: w,
            onChange: e => setSelectedLabel(e),
            onDropdownHidden: lQ,
            property: D.doc.label,
            children: availableLabels.map(e => jsx(c$, {
              value: e
            }, e))
          }), jsx("div", {
            ref: j,
            className: "figmadocs--copyButtonContainer--UsqKq",
            children: !j.current && jsx(zM, {})
          })]
        }) : void 0,
        collapsedHeaders: "inspect-not-setup" === D.view || "inspect-library-upsell" === D.view ? jsx(eU, {}) : "inspect-parent" === D.view || "inspect-panel" === D.view ? jsx(ej, {
          hideTooltip: H
        }) : void 0,
        children: ["inspect-panel" === D.view && jsx(eK, {
          doc: D.doc,
          updatedAt,
          instanceFigmadocs,
          onInstancePillClick: t,
          isPlayground: e,
          copyButtonContainer: j
        }), "inspect-parent" === D.view && jsx(eY, {
          parent: D.parent
        }), "inspect-library-upsell" === D.view && jsx(eJ, {
          contentType: "library-file-hint"
        }), "inspect-component-browser-mapping" === D.view && jsx(eR, {
          doc
        })]
      });
    case "panel":
      return jsxs(Fragment, {
        children: [jsx(eK, {
          doc: D.doc,
          updatedAt,
          instanceFigmadocs,
          onInstancePillClick: t,
          additionalHeaderActions: jsxs(Fragment, {
            children: [jsx(Spacer, {}), jsx(l6, {
              ariaLabel: getI18nString("dev_handoff.code.language"),
              className: eL,
              dispatch: x,
              dropdownAlignment: "right",
              dropdownShown: N,
              dropdownWidth: "140px",
              formatter: eZ,
              id: w,
              onChange: e => setSelectedLabel(e),
              onDropdownHidden: lQ,
              property: doc.label,
              children: availableLabels.map(e => jsx(c$, {
                value: e
              }, e))
            })]
          }),
          isPlayground: e
        }), jsx($$eD1, {
          height: 16
        })]
      });
    case "library-file-hint":
    case "handoff-file-hint":
      return jsxs(Fragment, {
        children: [jsx(eJ, {
          contentType: D.view
        }), jsx($$eD1, {
          height: 16
        })]
      });
    case "empty":
      return jsxs(Fragment, {
        children: [jsx(eV, {}), jsx($$eD1, {
          height: 16
        })]
      });
    case "none":
      return null;
  }
}
export const Qd = $$eQ0;
export const hK = $$eD1;
export const MW = $$e$2;