import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { l as _$$l } from "../905/296640";
import { debugState } from "../905/407919";
import { KeyCodes } from "../905/63728";
import { ModalCloseButton } from "../905/17223";
import { ButtonBasePrimary, BigTextInputForwardRef, ButtonSecondary, SecureLink } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { QF } from "../figma_app/696043";
import { Qi } from "../figma_app/559491";
import { s as _$$s } from "../905/58247";
import { hideModal } from "../905/156213";
import { getSelectedEditorType } from "../figma_app/976749";
import { M as _$$M } from "../figma_app/170366";
import { pS } from "../905/588985";
import { getFullscreenViewEditorType, generatePluginId } from "../figma_app/300692";
import { Bs, d_, cj } from "../905/197730";
import { HubTypeEnum } from "../figma_app/45218";
import { FEditorType } from "../figma_app/53721";
import { ManifestEditorType } from "../figma_app/155287";
import { KindEnum } from "../905/129884";
import { registerModal } from "../905/102752";
import { isFullscreenDevHandoffView } from "../905/782918";
import { TabCategory } from "../905/42189";
import { SimpleComponentType } from "../figma_app/504088";
import { ModalContainer } from "../figma_app/918700";
import { $v } from "../figma_app/613182";
import { A as _$$A } from "../905/438475";
import { n0, we, pv, YJ, Ow, lg, lJ, Lk, x6, aP, $O, Qp, IO, re, gn, Bb, fY, GT, pn, Fn, Tp, WG, GK, Cb, dH, hG, x9 } from "../905/424197";
import { A as _$$A2 } from "../6828/645333";
import { A as _$$A3 } from "../6828/696513";
let j = _$$M();
var U = (e => (e.CHOOSE_EDITOR_TYPE = "choose_editor_type_step", e.CHOOSE_TEMPLATE = "choose_template_step", e.SUCCESS_SCREEN = "success_screen_step", e.HIDDEN = "hidden", e))(U || {});
function B({
  children: e,
  onClick: t
}) {
  return jsx("div", {
    role: "button",
    onClick: t,
    tabIndex: 0,
    children: e
  });
}
function G({
  resourceType: e,
  showFigmaDesignOption: t,
  showFigJamOption: r,
  showSlidesOption: i,
  selectedEditorTypes: a,
  setSelectedEditorTypes: s
}) {
  return jsxs(Fragment, {
    children: [e === HubTypeEnum.PLUGIN ? jsx(z, {
      isSelected: a.includes(ManifestEditorType.FIGMA) && a.includes(ManifestEditorType.FIGJAM) && a.includes(ManifestEditorType.SLIDES),
      image: jsx(_$$A.editorTypes.multiProduct, {}),
      titleText: getI18nString("community.plugin_development.plugin_creation_editor_option_multi_product"),
      descriptionText: getI18nString("community.plugin_development.plugin_creation_editor_option_multi_product_description"),
      onSelect: () => s([ManifestEditorType.FIGMA, ManifestEditorType.FIGJAM, ManifestEditorType.SLIDES])
    }) : jsx(z, {
      isSelected: a.includes(ManifestEditorType.FIGMA) && a.includes(ManifestEditorType.FIGJAM),
      image: jsx(_$$A.editorTypes.multiProduct, {}),
      titleText: getI18nString(e === HubTypeEnum.WIDGET ? "community.plugin_development.widget_creation_editor_option_figma_design_and_figjam" : "community.plugin_development.plugin_creation_editor_option_figma_design_and_figjam"),
      descriptionText: getI18nString(e === HubTypeEnum.WIDGET ? "community.plugin_development.widget_creation_editor_option_figma_design_and_figjam_description" : "community.plugin_development.plugin_creation_editor_option_figma_design_and_figjam_description"),
      onSelect: () => s([ManifestEditorType.FIGMA, ManifestEditorType.FIGJAM])
    }), t && jsx(z, {
      isSelected: a.includes(ManifestEditorType.FIGMA) && 1 === a.length,
      image: jsx(_$$A.editorTypes.figmaDesign, {}),
      titleText: getI18nString(e === HubTypeEnum.WIDGET ? "community.plugin_development.widget_creation_editor_option_figma_design" : "community.plugin_development.plugin_creation_editor_option_figma_design"),
      descriptionText: getI18nString(e === HubTypeEnum.WIDGET ? "community.plugin_development.widget_creation_editor_option_figma_design_description" : "community.plugin_development.plugin_creation_editor_option_figma_design_description"),
      onSelect: () => s([ManifestEditorType.FIGMA])
    }), r && jsx(z, {
      isSelected: a.includes(ManifestEditorType.FIGJAM) && 1 === a.length,
      image: jsx(_$$A.editorTypes.figJam, {}),
      titleText: getI18nString(e === HubTypeEnum.WIDGET ? "community.plugin_development.widget_creation_editor_option_figjam" : "community.plugin_development.plugin_creation_editor_option_figjam"),
      descriptionText: getI18nString(e === HubTypeEnum.WIDGET ? "community.plugin_development.widget_creation_editor_option_figjam_description" : "community.plugin_development.plugin_creation_editor_option_figjam_description"),
      onSelect: () => s([ManifestEditorType.FIGJAM])
    }), i && jsx(z, {
      isSelected: a.includes(ManifestEditorType.SLIDES) && 1 === a.length,
      image: jsx(_$$A.editorTypes.slides, {}),
      titleText: getI18nString("community.plugin_development.plugin_creation_editor_option_slides"),
      descriptionText: getI18nString("community.plugin_development.plugin_creation_editor_option_slides_description"),
      onSelect: () => s([ManifestEditorType.SLIDES])
    })]
  });
}
function V({
  selectedTemplate: e,
  setSelectedTemplate: t
}) {
  let r = useSelector(e => isFullscreenDevHandoffView(e.selectedView));
  return jsx(Fragment, {
    children: r ? jsxs(Fragment, {
      children: [jsx(z, {
        isSelected: "tab" === e,
        onSelect: () => t("tab"),
        image: jsx(_$$A.templates.tab, {}),
        titleText: getI18nString("community.plugin_development.plugin_creation_template_option_tab"),
        descriptionText: getI18nString("community.plugin_development.plugin_creation_template_option_tab_description")
      }), jsx(z, {
        isSelected: "codegen" === e,
        onSelect: () => t("codegen"),
        image: jsx(_$$A.templates.codegen, {}),
        titleText: getI18nString("community.plugin_development.plugin_creation_template_option_codegen"),
        descriptionText: getI18nString("community.plugin_development.plugin_creation_template_option_codegen_description")
      })]
    }) : jsxs(Fragment, {
      children: [jsx(z, {
        isSelected: "empty" === e,
        onSelect: () => t("empty"),
        image: jsx(_$$A.templates.empty, {}),
        titleText: getI18nString("community.plugin_development.plugin_creation_template_option_default"),
        descriptionText: getI18nString("community.plugin_development.plugin_creation_template_option_default_description")
      }), jsx(z, {
        isSelected: "runOnce" === e,
        onSelect: () => t("runOnce"),
        image: jsx(_$$A.templates.runOnce, {}),
        titleText: getI18nString("community.plugin_development.plugin_creation_template_option_run_once"),
        descriptionText: getI18nString("community.plugin_development.plugin_creation_template_option_run_once_description")
      }), jsx(z, {
        isSelected: "withUI" === e,
        onSelect: () => t("withUI"),
        image: jsx(_$$A.templates.withUI, {}),
        titleText: getI18nString("community.plugin_development.plugin_creation_template_option_with_ui"),
        descriptionText: getI18nString("community.plugin_development.plugin_creation_template_option_with_ui_description")
      })]
    })
  });
}
function H({
  widgetCreationType: e,
  setWidgetCreationType: t
}) {
  return jsxs(Fragment, {
    children: [jsx(z, {
      isSelected: "empty" === e,
      image: jsx(_$$A.widgetOptions.empty, {}),
      titleText: getI18nString("community.plugin_development.widget_creation_option_default"),
      descriptionText: getI18nString("community.plugin_development.widget_creation_option_default_description"),
      onSelect: () => t("empty")
    }), jsx(z, {
      isSelected: "simple" === e,
      image: jsx(_$$A.widgetOptions.simple, {}),
      titleText: getI18nString("community.plugin_development.widget_creation_option_simple"),
      descriptionText: getI18nString("community.plugin_development.widget_creation_option_simple_description"),
      onSelect: () => t("simple")
    }), jsx(z, {
      isSelected: "with_iframe" === e,
      image: jsx(_$$A.widgetOptions.withIframe, {}),
      titleText: jsx("span", {
        style: {
          letterSpacing: "-0.5px"
        },
        children: getI18nString("community.plugin_development.widget_creation_option_with_iframe")
      }),
      descriptionText: getI18nString("community.plugin_development.widget_creation_option_with_iframe_description"),
      onSelect: () => t("with_iframe")
    })]
  });
}
function z({
  isSelected: e,
  onSelect: t,
  image: r,
  titleText: i,
  descriptionText: a
}) {
  return jsx("div", {
    className: e ? n0 : we,
    onClick: t,
    children: jsxs("div", {
      className: e ? pv : YJ,
      children: [jsx("div", {
        className: Ow,
        children: e ? jsx(SvgComponent, {
          svg: _$$A3
        }) : jsx("div", {
          className: lg
        })
      }), r, jsxs("div", {
        className: lJ,
        children: [jsx("div", {
          className: Lk,
          children: i
        }), jsx("div", {
          children: a
        })]
      })]
    })
  });
}
export let $$W0 = registerModal(function ({
  resourceType: e
}) {
  let t = useDispatch();
  let r = useSelector(e => isFullscreenDevHandoffView(e.selectedView));
  let [b, C] = useState("");
  let [F, U] = useState(-1);
  let [z, W] = _$$l(r ? "choose_template_step" : "choose_editor_type_step", `${e}_create_flow_change_step`, {
    productType: getFullscreenViewEditorType() === ManifestEditorType.FIGMA ? "design" : "whiteboard"
  });
  let [K, Y] = useState(r ? "tab" : "runOnce");
  let [$, X] = useState(r ? [ManifestEditorType.DEV] : [ManifestEditorType.FIGMA, ManifestEditorType.FIGJAM]);
  let [q, J] = useState("simple");
  let [Z, Q] = useState(!1);
  let ee = () => b.replace(/[^0-9a-zA-Z\.\-\+!%&_ =]/g, "_").trim();
  let et = async ({
    resourceId: r,
    template: n
  }) => {
    if ("" === ee()) {
      t(VisualBellActions.enqueue({
        message: getI18nString("community.plugin_development.please_add_some_alphanumeric_text_to_your_resource_name"),
        error: !0
      }));
      return null;
    }
    n.name = ee();
    try {
      let i = await (Bs() ? j.writeNewExtensionDirectoryToDisk(n) : j.writeNewExtensionToDisk(ee(), n.files));
      if (i) {
        trackEventAnalytics(`Added New ${e}`, {
          how: "created",
          [e + "Id"]: r,
          version: pS,
          isWidget: e === HubTypeEnum.WIDGET,
          productType: getFullscreenViewEditorType() === ManifestEditorType.FIGMA ? "design" : "whiteboard"
        });
        t(QF({
          localFileId: i,
          resourceType: e
        }));
        return i;
      }
    } catch (e) {
      console.error(e);
    }
    t(VisualBellActions.enqueue({
      message: getI18nString("community.plugin_development.unable_to_write_resource_to_disk"),
      error: !0
    }));
    return null;
  };
  let er = async () => {
    if (!b) {
      Q(!0);
      return;
    }
    let r = "";
    try {
      let n = await generatePluginId(e);
      t(Qi({
        publishedPlugins: [n],
        src: "onGenerateNewClick"
      }));
      W("hidden");
      r = n.id;
    } catch (e) {
      t(VisualBellActions.enqueue({
        message: getI18nString("community.plugin_development.unable_to_generate_resource_id"),
        error: !0
      }));
      return;
    }
    let n = e === HubTypeEnum.PLUGIN ? d_[K] : cj[q];
    let i = await et({
      resourceId: r,
      template: n(b, r, $)
    });
    null != i ? (W("success_screen_step"), U(i)) : t(hideModal());
  };
  let en = () => {
    t(hideModal());
    _$$s({
      initialX: 0,
      initialY: 0,
      initialTab: el ? "widget" === e ? TabCategory.WIDGETS : TabCategory.PLUGINS : void 0,
      initialFdResourceTab: eo ? "widget" === e ? SimpleComponentType.WIDGET : SimpleComponentType.PLUGIN : void 0,
      initialFdView: eo ? "development" : void 0,
      scrollDevelopmentSectionIntoView: el,
      source: "extension-new-develompent-modal"
    });
  };
  let ei = () => {
    j.openExtensionDirectory(F);
  };
  let ea = useSelector(e => "fullscreen" === e.selectedView.view);
  let es = getSelectedEditorType();
  let eo = es === FEditorType.Design || es === FEditorType.DevHandoff;
  let el = es === FEditorType.Whiteboard;
  let ed = es === FEditorType.Slides;
  let ec = !ea || eo;
  let eu = !ea || el;
  let ep = !ea || ed;
  let e_ = e => {
    "Enter" === e.key || e.keyCode === KeyCodes.ENTER ? "choose_editor_type_step" === z ? W("choose_template_step") : "choose_template_step" === z ? er() : "success_screen_step" === z && en() : ("Escape" === e.key || e.keyCode === KeyCodes.ESCAPE) && en();
  };
  let eh = jsx(Fragment, {
    children: jsx(ButtonBasePrimary, {
      className: x6,
      onClick: er,
      disabled: "" === b,
      children: jsx("span", {
        "data-tooltip": e === HubTypeEnum.PLUGIN ? getI18nString("community.plugin_development.you_must_provide_a_name_for_your_plugin") : getI18nString("community.plugin_development.you_must_provide_a_name_for_your_widget"),
        "data-tooltip-type": "" === b ? KindEnum.TEXT : null,
        children: renderI18nText("community.plugin_development.save_as")
      })
    })
  });
  let em = jsxs("div", {
    children: [jsx("div", {
      className: aP,
      children: renderI18nText("community.general.name")
    }), jsx(BigTextInputForwardRef, {
      autoFocus: !0,
      className: $O,
      "data-tooltip": e === HubTypeEnum.PLUGIN ? getI18nString("community.plugin_development.you_must_provide_a_name_for_your_plugin") : getI18nString("community.plugin_development.you_must_provide_a_name_for_your_widget"),
      "data-tooltip-ignore-mouse": !0,
      "data-tooltip-key": "plugin-new-development-modal",
      "data-tooltip-show-immediately": !0,
      "data-tooltip-type": KindEnum.TEXT,
      onChange: e => {
        e.currentTarget.value && Z && Q(!1);
        C(e.currentTarget.value);
      },
      placeholder: e === HubTypeEnum.PLUGIN ? getI18nString("community.plugin_development.plugin_name") : getI18nString("community.plugin_development.widget_name"),
      value: b
    }), jsx($v, {
      visible: Z,
      tooltipKey: "plugin-new-development-modal"
    })]
  });
  return "choose_editor_type_step" === z ? (() => {
    let r = ea ? Qp : IO;
    return jsx(B, {
      onClick: () => Q(!1),
      children: jsxs(ModalContainer, {
        className: re,
        onKeyDown: e_,
        disableClickOutsideToHide: !0,
        onModalClick: e => e.stopPropagation(),
        children: [jsx(ModalCloseButton, {
          dispatch: t
        }), jsx("div", {
          className: gn,
          children: jsx("div", {
            children: e === HubTypeEnum.PLUGIN ? getI18nString("community.plugin_development.create_plugin") : getI18nString("community.plugin_development.create_widget")
          })
        }), jsxs("div", {
          className: Bb,
          children: [em, jsx("div", {
            className: r,
            children: jsx(G, {
              resourceType: e,
              showFigmaDesignOption: ec,
              showFigJamOption: eu,
              showSlidesOption: ep,
              selectedEditorTypes: $,
              setSelectedEditorTypes: X
            })
          })]
        }), jsx("div", {
          className: fY,
          children: jsx("div", {
            className: GT,
            children: jsx(ButtonBasePrimary, {
              className: x6,
              onClick: () => W("choose_template_step"),
              children: renderI18nText("general.next")
            })
          })
        })]
      })
    });
  })() : "choose_template_step" === z ? (() => {
    let i = r ? Qp : IO;
    return jsx(B, {
      onClick: () => Q(!1),
      children: jsxs(ModalContainer, {
        className: re,
        onKeyDown: e_,
        disableClickOutsideToHide: !0,
        children: [jsx(ModalCloseButton, {
          dispatch: t
        }), jsx("div", {
          className: gn,
          children: jsx("div", {
            children: e === HubTypeEnum.PLUGIN ? renderI18nText("community.plugin_development.create_plugin") : renderI18nText("community.plugin_development.create_widget")
          })
        }), jsxs("div", {
          className: Bb,
          children: [em, jsx("div", {
            className: i,
            children: e === HubTypeEnum.PLUGIN ? jsx(V, {
              selectedTemplate: K,
              setSelectedTemplate: Y
            }) : jsx(H, {
              widgetCreationType: q,
              setWidgetCreationType: J
            })
          })]
        }), jsx("div", {
          className: fY,
          children: jsxs("div", {
            className: pn,
            children: [!isFullscreenDevHandoffView(debugState.getState().selectedView) && jsxs(ButtonSecondary, {
              className: x6,
              onClick: () => W("choose_editor_type_step"),
              children: [jsx(SvgComponent, {
                svg: _$$A2,
                className: Fn
              }), renderI18nText("general.back")]
            }), eh]
          })
        })]
      })
    });
  })() : "success_screen_step" === z ? (() => {
    let r = jsx(SecureLink, {
      href: `https://www.figma.com/${e}-docs/`,
      trusted: !0,
      children: renderI18nText("community.plugin_development.setup_guide")
    });
    let i = jsx(SecureLink, {
      href: "https://discord.gg/xzQhe2Vcvx",
      trusted: !0,
      children: renderI18nText("community.plugin_development.join_our_discord")
    });
    return jsxs(ModalContainer, {
      className: Tp,
      onKeyDown: e_,
      disableClickOutsideToHide: !0,
      children: [jsx(ModalCloseButton, {
        dispatch: t
      }), jsxs("div", {
        className: WG,
        children: [jsx("div", {
          className: GK,
          children: e === HubTypeEnum.PLUGIN ? getI18nString("community.plugin_development.new_plugin_created") : getI18nString("community.plugin_development.new_widget_created")
        }), jsxs("div", {
          className: Bb,
          children: [jsx("span", {
            className: Cb,
            children: e === HubTypeEnum.PLUGIN ? renderI18nText("community.plugin_development.follow_our_setup_guide_plugin", {
              setupGuideLink: r
            }) : renderI18nText("community.plugin_development.follow_our_setup_guide_widget", {
              setupGuideLink: r
            })
          }), jsx("div", {
            className: dH,
            children: e === HubTypeEnum.PLUGIN ? renderI18nText("community.plugin_development.connect_with_other_plugin_developers", {
              joinOurDiscordLink: i
            }) : renderI18nText("community.plugin_development.connect_with_other_widget_developers", {
              joinOurDiscordLink: i
            })
          })]
        }), jsx("div", {
          className: fY,
          children: jsxs("div", {
            className: hG,
            children: [jsx(ButtonSecondary, {
              onClick: ei,
              children: renderI18nText("community.plugin_development.open_folder")
            }), jsx(ButtonBasePrimary, {
              className: x6,
              onClick: en,
              children: renderI18nText("general.done")
            })]
          })
        })]
      }), jsx("div", {
        className: x9,
        children: e === HubTypeEnum.WIDGET ? jsx(_$$A.widgetSuccess, {}) : jsx(_$$A.pluginSuccess, {})
      })]
    });
  })() : jsx(Fragment, {});
}, "PluginNewDevelopmentModal");
export const h = $$W0;