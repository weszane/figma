import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useId, useMemo, memo, useState } from "react";
import { wA } from "../vendor/514228";
import { YJ, bL, UC } from "../figma_app/57171";
import { Y9, JU } from "../figma_app/322555";
import { E as _$$E } from "../905/632989";
import { K as _$$K } from "../905/443068";
import c, { F as _$$F } from "../905/172964";
import { EYD, Ez5, glU, btW, X3B, V$M } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import h from "classnames";
import { Pt, o6 } from "../figma_app/806412";
import { xi } from "../905/714362";
import { E as _$$E2 } from "../905/277716";
import { k as _$$k2 } from "../905/582200";
import { ph } from "../figma_app/709893";
import { B as _$$B } from "../905/714743";
import { t as _$$t, tx } from "../905/303541";
import { sx } from "../figma_app/91703";
import { sE, EZ, fS } from "../figma_app/681244";
import { Y5 } from "../figma_app/455680";
import { UK } from "../figma_app/740163";
import { hS, oV } from "../905/216495";
import { ut } from "../figma_app/84367";
import { Ib } from "../905/129884";
import { Q as _$$Q } from "../905/346809";
import { v as _$$v } from "../905/694527";
import { fI, zi, Zk } from "../figma_app/626177";
import { c$, l6, sK } from "../905/794875";
import { Ad } from "../figma_app/811257";
import { W as _$$W } from "../5132/887999";
import { $ as _$$$ } from "../figma_app/61705";
import { y as _$$y } from "../905/461685";
import { FFileType } from "../figma_app/191312";
import { sq } from "../figma_app/53721";
import { f6 } from "../figma_app/915202";
import { cV } from "../figma_app/59509";
import { Q as _$$Q2 } from "../905/363675";
import { $n } from "../905/521428";
import { uc } from "../figma_app/930338";
import { b as _$$b } from "../905/985254";
import { fu } from "../figma_app/831799";
import { Cu } from "../figma_app/314264";
import { Em } from "../figma_app/976749";
import { Kf } from "../figma_app/516028";
import { f as _$$f } from "../905/940356";
import { J as _$$J } from "../5132/948584";
import { l as _$$l } from "../905/241412";
import { ed as _$$ed, nK, UY, th, BA, EG, iw, OW, UU, eF, so, aD, jL, Zd, Dc, fI as _$$fI, p1, bI, cl, dj, VW } from "../figma_app/391215";
import { A as _$$A } from "../6828/523860";
import { A as _$$A2 } from "../6828/85206";
var m = h;
function $(e) {
  let {
    icon,
    title,
    description,
    ctaLabel,
    onClick,
    onDismiss,
    userFlag,
    trackingContext
  } = e;
  let {
    productName,
    presetType
  } = c;
  let _ = wA();
  return jsx(fu, {
    name: `${productName} ${presetType} presets entrypoint`,
    children: jsx("div", {
      className: "frame_presets_entrypoint--bannerContainer--HnBeT",
      children: jsx(cV, {
        variant: "default",
        icon,
        onDismiss: () => {
          Cu({
            trackingContext: `${productName} conversion ${presetType} presets entrypoint`,
            name: `${uc(productName)}_conversion_${uc(presetType)}_presets_entrypoint_dismissed`
          });
          _(_$$b({
            [userFlag]: !0
          }));
          onDismiss && onDismiss();
        },
        children: jsxs("div", {
          className: "frame_presets_entrypoint--bannerContent--Ob5tN",
          children: [jsx(_$$Q2, {
            title,
            children: description
          }), jsx("div", {
            className: "frame_presets_entrypoint--bannerCta--Xi6xA",
            children: jsx($n, {
              variant: "link",
              onClick: e => {
                Cu({
                  trackingContext: `${productName} conversion ${presetType} presets entrypoint`,
                  name: `${uc(productName)}_conversion_${uc(presetType)}_presets_entrypoint`
                });
                onClick && onClick(e);
              },
              children: ctaLabel
            })
          })]
        })
      })
    })
  });
}
let Z = "slides_presentation_presets_entrypoint_dismissed_user_flag";
let Q = "sites_desktop_presets_entrypoint_dismissed_user_flag";
let ee = "buzz_social_media_presets_entrypoint_dismissed_user_flag";
var et = (e => (e.SLIDES = "SLIDES", e.SITES = "SITES", e.BUZZ = "BUZZ", e))(et || {});
function er(e) {
  switch (e) {
    case "SLIDES":
      return Z;
    case "SITES":
      return Q;
    case "BUZZ":
      return ee;
  }
}
function en() {
  let e = Em();
  let t = Kf();
  let r = _$$f(Z);
  let n = _$$f(Q);
  let i = _$$f(ee);
  return !!e && !!t && !r && !n && !i;
}
function ei() {
  let e = en();
  let t = _$$y().transform(e => e?.canCreateCooperFileWithReasons.result).unwrapOr(!1);
  let r = er(et.BUZZ);
  let i = _$$$({
    isDraftsFolder: !0,
    editorType: FFileType.COOPER,
    newFileFrom: f6.DESIGN_TO_BUZZ_ENTRYPOINT,
    contextClicked: `frame_presets_banner_${sq}_created`,
    forceOpenNewTab: !0
  });
  return e && t ? jsx($, {
    icon: jsx(_$$W, {}),
    title: _$$t("frame_presets_entrypoints.buzz.title"),
    description: _$$t("frame_presets_entrypoints.buzz.description"),
    ctaLabel: _$$t("frame_presets_entrypoints.buzz.cta"),
    onClick: i,
    userFlag: r,
    trackingContext: {
      productName: "Buzz",
      presetType: "social media"
    }
  }) : null;
}
function es() {
  let e = en();
  let t = er(et.SITES);
  let r = _$$y().transform(e => e?.canCreateSitesFileWithReasons.result).unwrapOr(!1);
  let i = _$$$({
    isDraftsFolder: !0,
    editorType: FFileType.SITES,
    newFileFrom: f6.DESIGN_TO_SITES_ENTRYPOINT,
    contextClicked: "frame_presets_banner_sites_created",
    forceOpenNewTab: !0
  });
  return e && r ? jsx($, {
    icon: jsx(_$$J, {}),
    title: _$$t("frame_presets_entrypoints.sites.title"),
    description: _$$t("frame_presets_entrypoints.sites.description"),
    ctaLabel: _$$t("frame_presets_entrypoints.sites.cta"),
    onClick: i,
    userFlag: t,
    trackingContext: {
      productName: "Sites",
      presetType: "desktop"
    }
  }) : null;
}
function el() {
  let e = en();
  let t = er(et.SLIDES);
  let r = _$$y().transform(e => e?.canCreateSlidesFileWithReasons.result).unwrapOr(!1);
  let i = _$$$({
    isDraftsFolder: !0,
    editorType: FFileType.SLIDES,
    newFileFrom: f6.DESIGN_TO_SLIDES_ENTRYPOINT,
    contextClicked: "frame_presets_banner_slides_created",
    forceOpenNewTab: !0
  });
  return e && r ? jsx($, {
    icon: jsx(_$$l, {}),
    title: _$$t("frame_presets_entrypoints.slides.title"),
    description: _$$t("frame_presets_entrypoints.slides.description"),
    ctaLabel: _$$t("frame_presets_entrypoints.slides.cta"),
    onClick: i,
    userFlag: t,
    trackingContext: {
      productName: "Slides",
      presetType: "presentation"
    }
  }) : null;
}
let ep = () => [{
  name: _$$t("proto.frame_preset_panel.phone"),
  type: EYD.PHONE,
  headerRecordingKey: "phoneToggle",
  listRecordingKey: "phoneRows",
  presetList: sE.phonePresets
}, {
  name: _$$t("proto.frame_preset_panel.tablet"),
  type: EYD.TABLET,
  headerRecordingKey: "tabletToggle",
  listRecordingKey: "tabletRows",
  presetList: sE.tabletPresets
}, {
  name: _$$t("proto.frame_preset_panel.desktop"),
  type: EYD.DESKTOP,
  headerRecordingKey: "desktopToggle",
  listRecordingKey: "desktopRows",
  presetList: sE.desktopPresets,
  children: jsx(es, {})
}, {
  name: _$$t("proto.frame_preset_panel.presentation"),
  type: EYD.PRESENTATION,
  headerRecordingKey: "presentationToggle",
  listRecordingKey: "presentationRows",
  presetList: sE.presentationPresets,
  children: jsx(el, {})
}, {
  name: _$$t("proto.frame_preset_panel.watch"),
  type: EYD.WATCH,
  headerRecordingKey: "watchToggle",
  listRecordingKey: "watchRows",
  presetList: sE.watchPresets
}, {
  name: _$$t("proto.frame_preset_panel.paper"),
  type: EYD.PAPER,
  headerRecordingKey: "paperToggle",
  listRecordingKey: "paperRows",
  presetList: sE.paperPresets
}, {
  name: _$$t("proto.frame_preset_panel.social_media"),
  type: EYD.SOCIALMEDIA,
  headerRecordingKey: "socialMediaToggle",
  listRecordingKey: "socialMediaRows",
  presetList: sE.socialMediaPresets,
  children: jsx(ei, {})
}, {
  name: _$$t("proto.frame_preset_panel.figma_community"),
  type: EYD.FIGMA,
  headerRecordingKey: "figmaToggle",
  listRecordingKey: "figmaRows",
  presetList: sE.figmaPresets
}, {
  name: _$$t("proto.frame_preset_panel.archive"),
  type: EYD.ARCHIVE,
  headerRecordingKey: "archiveToggle",
  listRecordingKey: "archiveRows",
  presetList: sE.archivedPresets
}];
export function $$e_2({
  recordingKey: e
}) {
  let t = wA();
  let r = ut(UK().expandedFramePresetType, EYD.NONE);
  let l = useCallback(e => {
    r === e && (e = EYD.NONE);
    Ez5 ? Ez5.editorPreferences().expandedFramePresetType.set(e) : xi("properties_panel", "failed to update user preference for frame presets types, AppStateTsApi is not available");
  }, [r]);
  let d = useCallback(e => {
    l7.user("select-frame-preset", () => {
      let r = `${e.name} -`;
      glU && glU.createFrame(r, e.width, e.height, btW.RIGHT, !0);
      t(sx({
        name: "Frame Size Preset Chosen",
        params: {
          method: "Frame Tool Preset List",
          deviceName: e.name
        }
      }));
      X3B && X3B.updateCurrentPagePrototypeDeviceIfNecessary();
    });
  }, [t]);
  let c = useId();
  return useMemo(() => getFeatureFlags().eu_fpl_collapse ? jsxs(_$$k2, {
    name: "frame_presets",
    children: [jsx(fI, {
      className: _$$ed,
      children: jsx(_$$Q, {
        children: tx("proto.frame_preset_panel.frame")
      })
    }), jsx(YJ, {
      "aria-labelledby": c,
      children: ep().map(t => jsxs(bL, {
        isOpen: r === t.type,
        toggle: () => l(t.type),
        children: [jsx(Y9, {
          children: jsx(JU, {
            recordingKey: Pt(e, t.headerRecordingKey),
            className: nK,
            children: jsx(eh, {
              name: t.name,
              expanded: r === t.type
            })
          })
        }), jsx(UC, {
          children: jsx(ef, {
            framePresets: t.presetList,
            onSelectPreset: d,
            recordingKey: Pt(e, t.listRecordingKey),
            children: t.children
          })
        })]
      }, t.name))
    })]
  }) : jsx(em, {
    recordingKey: e,
    toggleSection: l,
    onSelectPreset: d,
    expandedFramePresetType: r
  }), [r, c, e, l, d]);
}
function eh({
  name: e,
  expanded: t
}) {
  return jsx(_$$k2, {
    name: "frame_preset_header_panel",
    children: jsx(Ad, {
      appendedClassName: (m()(t ? UY : th, "presetHeader"), BA),
      input: jsxs("div", {
        className: EG,
        children: [jsx(_$$B, {
          className: t ? iw : OW,
          svg: t ? _$$A : _$$A2
        }), jsx("div", {
          className: UU,
          children: e
        })]
      }),
      label: null
    })
  });
}
let em = memo(function ({
  recordingKey: e,
  toggleSection: t,
  onSelectPreset: r,
  expandedFramePresetType: i
}) {
  return jsx(_$$k2, {
    name: "frame_presets",
    children: jsxs("div", {
      children: [jsx(fI, {
        className: _$$ed,
        children: jsx(_$$Q, {
          children: tx("proto.frame_preset_panel.frame")
        })
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.phone"),
        expanded: i === EYD.PHONE,
        onMouseDown: () => t(EYD.PHONE),
        recordingKey: Pt(e, "phoneToggle")
      }), i === EYD.PHONE && jsx(ef, {
        framePresets: sE.phonePresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "phoneRows")
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.tablet"),
        expanded: i === EYD.TABLET,
        onMouseDown: () => t(EYD.TABLET),
        recordingKey: Pt(e, "framePresetPanel", "tabletToggle")
      }), i === EYD.TABLET && jsx(ef, {
        framePresets: sE.tabletPresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "tabletRows")
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.desktop"),
        expanded: i === EYD.DESKTOP,
        onMouseDown: () => t(EYD.DESKTOP),
        recordingKey: Pt(e, "desktopToggle")
      }), i === EYD.DESKTOP && jsx(ef, {
        framePresets: sE.desktopPresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "desktopRows"),
        children: jsx(es, {})
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.presentation"),
        expanded: i === EYD.PRESENTATION,
        onMouseDown: () => t(EYD.PRESENTATION),
        recordingKey: Pt(e, "presentationToggle")
      }), i === EYD.PRESENTATION && jsx(ef, {
        framePresets: sE.presentationPresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "presentationRows"),
        children: jsx(el, {})
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.watch"),
        expanded: i === EYD.WATCH,
        onMouseDown: () => t(EYD.WATCH),
        recordingKey: Pt(e, "watchToggle")
      }), i === EYD.WATCH && jsx(ef, {
        framePresets: sE.watchPresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "watchRows")
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.paper"),
        expanded: i === EYD.PAPER,
        onMouseDown: () => t(EYD.PAPER),
        recordingKey: Pt(e, "paperToggle")
      }), i === EYD.PAPER && jsx(ef, {
        framePresets: sE.paperPresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "paperRows")
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.social_media"),
        expanded: i === EYD.SOCIALMEDIA,
        onMouseDown: () => t(EYD.SOCIALMEDIA),
        recordingKey: Pt(e, "socialMediaToggle")
      }), i === EYD.SOCIALMEDIA && jsx(ef, {
        framePresets: sE.socialMediaPresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "socialMediaRows"),
        children: jsx(ei, {})
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.figma_community"),
        expanded: i === EYD.FIGMA,
        onMouseDown: () => t(EYD.FIGMA),
        recordingKey: Pt(e, "figmaToggle")
      }), i === EYD.FIGMA && jsx(ef, {
        framePresets: sE.figmaPresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "figmaRows")
      }), jsx(eg, {
        name: _$$t("proto.frame_preset_panel.archive"),
        expanded: i === EYD.ARCHIVE,
        onMouseDown: () => t(EYD.ARCHIVE),
        recordingKey: Pt(e, "archiveToggle")
      }), i === EYD.ARCHIVE && jsx(ef, {
        framePresets: sE.archivedPresets,
        onSelectPreset: r,
        recordingKey: Pt(e, "archiveRows")
      })]
    })
  });
});
class eg extends o6 {
  render() {
    return jsx(_$$k2, {
      name: "frame_preset_header_panel",
      children: jsx(zi, {
        onMouseDown: this.props.onMouseDown,
        recordingKey: this.props.recordingKey,
        className: this.props.expanded ? UY : th,
        children: jsx(fI, {
          className: th,
          children: jsxs("div", {
            className: EG,
            children: [jsx(_$$B, {
              className: this.props.expanded ? iw : OW,
              svg: this.props.expanded ? _$$A : _$$A2
            }), jsx("div", {
              className: UU,
              children: this.props.name
            })]
          })
        })
      })
    });
  }
}
eg.displayName = "FramePresetHeaderButton";
let ef = memo(function ({
  framePresets: e,
  onSelectPreset: t,
  children: r,
  recordingKey: i
}) {
  return getFeatureFlags().eu_fpl_collapse ? jsx(_$$k2, {
    name: "frame_presets_list_panel",
    children: jsxs("ol", {
      ..._$$v({
        className: m()(eF, "propertiesPanel")
      }, "Panel"),
      "data-non-interactive": !0,
      children: [e.map(e => jsx("li", {
        children: jsx(Ad, {
          appendedClassName: so,
          input: jsxs(_$$E, {
            className: aD,
            onClick: () => t(e),
            actionOnPointerDown: !0,
            recordingKey: Pt(i, e.name),
            htmlAttributes: {
              tabIndex: 0
            },
            children: [jsx("div", {
              className: jL,
              children: e.i18nName()
            }), jsxs("div", {
              className: Zd,
              children: [e.width, "\u200A\xd7\u200A", e.height, " "]
            })]
          }),
          label: null
        })
      }, e.name)), r]
    })
  }) : jsx(_$$k2, {
    name: "frame_presets_list_panel",
    children: jsxs(Zk, {
      className: eF,
      children: [e.map(e => jsxs(fI, {
        className: Dc,
        onMouseDown: () => t(e),
        recordingKey: Pt(i, e.name),
        children: [jsx("div", {
          className: jL,
          children: e.i18nName()
        }), jsxs("div", {
          className: Zd,
          children: [e.width, "\u200A\xd7\u200A", e.height, " "]
        })]
      }, e.name)), r]
    })
  });
});
export class $$eE1 extends o6 {
  constructor() {
    super(...arguments);
    this.state = {
      focusedPreset: void 0
    };
    this.formatter = {
      format: e => e === V$M.FRAME ? _$$t("viewer.options_menu.frame") : e === V$M.GROUP ? _$$t("viewer.options_menu.group") : e === V$M.SECTION ? _$$t("viewer.options_menu.section") : e,
      isEqual: (e, t) => e === t
    };
    this.onChange = e => {
      if ("number" == typeof e) {
        e === V$M.SECTION && this.changeSelectionToSection();
        e === V$M.FRAME && this.getFrameOrGroupOrSectionOrMixed() === V$M.SECTION && this.changeSelectionSectionToFrame();
        this.changeSelectionToFrameOrGroup(e);
      } else {
        let t = EZ[e];
        this.setPreset(t);
      }
    };
    this.changeSelectionToSection = () => {
      Y5.triggerActionInUserEditScope("replace-selected-frame-with-section");
    };
    this.changeSelectionSectionToFrame = () => {
      Y5.triggerActionInUserEditScope("replace-selected-section-with-frame");
    };
    this.changeSelectionToFrameOrGroup = e => {
      l7.user("change-selection-to-frame-or-group", () => {
        glU && glU.changeSelectionToFrameOrGroup(e);
        X3B && X3B.updateCurrentPagePrototypeDeviceIfNecessary();
      });
    };
    this.setPreset = e => {
      this.props.dispatch(sx({
        name: "Frame Size Preset Chosen",
        params: {
          method: "Transform Panel",
          deviceName: e.name
        }
      }));
      l7.user("set-frame-preset", () => {
        glU && glU.makeSelectedFramesManuallySized();
        Y5.updateSelectionProperties({
          width: e.width,
          height: e.height
        });
        X3B && X3B.updateCurrentPagePrototypeDeviceIfNecessary();
      });
    };
    this.getFrameOrGroupOrSectionOrMixed = () => hS(this.props.resizeToFit) ? this.props.resizeToFit ? V$M.GROUP : this.props.isSection ? V$M.SECTION : V$M.FRAME : oV;
    this.onFocus = e => {
      this.setState({
        focusedPreset: e
      });
    };
    this.renderPresetOption = (e, t) => jsx(c$, {
      value: e.name,
      recordingKey: Pt(this.props, e.name),
      focused: !(this.state.focusedPreset?.name !== e.name),
      children: jsx(eb, {
        framePreset: e,
        focused: !(this.state.focusedPreset?.name !== e.name)
      })
    }, t);
  }
  render() {
    let e = [];
    let t = this.getFrameOrGroupOrSectionOrMixed();
    let r = hS(this.props.width) && hS(this.props.height) ? fS({
      width: this.props.width,
      height: this.props.height
    }) : null;
    hS(t) && e.push(t);
    r && e.push(r.name);
    0 === e.length && e.push(oV);
    let i = e[0];
    let a = this.props.isWidget;
    let s = !!this.props.showPresetOptions && !this.props.isSection;
    let o = !this.props.isOrInInstance;
    return jsx(_$$E2, {
      name: "frame_preset_select",
      children: jsxs(l6, {
        ariaLabel: _$$t("proto.frame_preset_panel.frame"),
        chevronClassName: _$$fI,
        className: this.props.selectClassName,
        disabled: a,
        dispatch: this.props.dispatch,
        dropdownClassName: p1,
        dropdownOverride: this.props.dropdownOverride,
        dropdownShown: this.props.dropdownShown,
        formatter: this.formatter,
        icon: this.props.leftIcon,
        id: this.props.id,
        inputClassName: this.props.inputClassName,
        multipleSelections: e,
        onChange: this.onChange,
        onOptionFocus: this.onFocus,
        property: i,
        recordingKey: Pt(this.props, "select"),
        children: [!!this.props.showSectionOption && jsx(c$, {
          value: V$M.SECTION,
          recordingKey: Pt(this.props, "SECTION"),
          disabled: !this.props.canBecomeSection
        }), jsx(c$, {
          value: V$M.FRAME,
          recordingKey: Pt(this.props, "FRAME"),
          disabled: !o || !this.props.canBecomeFrame
        }), jsx(c$, {
          value: V$M.GROUP,
          recordingKey: Pt(this.props, "GROUP"),
          disabled: !this.props.canBecomeGroup
        }), s && jsx(sK, {}), s && sE.phonePresets.map(this.renderPresetOption), s && jsx(sK, {}), s && sE.tabletPresets.map(this.renderPresetOption), s && jsx(sK, {}), s && sE.desktopPresets.map(this.renderPresetOption), s && jsx(sK, {}), s && sE.presentationPresets.map(this.renderPresetOption), s && jsx(sK, {}), s && sE.watchPresets.map(this.renderPresetOption), s && jsx(sK, {}), s && sE.paperPresets.map(this.renderPresetOption), s && jsx(sK, {}), s && sE.socialMediaPresets.map(this.renderPresetOption), s && jsx(sK, {}), s && sE.figmaPresets.map(this.renderPresetOption), s && jsx(sK, {}), s && sE.archivedPresets.map(this.renderPresetOption)]
      })
    });
  }
}
export function $$ey0(e) {
  return jsx("span", {
    className: e.className,
    children: jsx(_$$K, {
      onClick: () => {
        Y5.triggerActionInUserEditScope("resize-to-fit");
      },
      recordingKey: e.recordingKey,
      "aria-label": _$$t("fullscreen_actions.resize-to-fit"),
      htmlAttributes: {
        "data-testid": "resize-to-fit-button",
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("fullscreen_actions.resize-to-fit"),
        "data-tooltip-shortcut-key": "resize-to-fit"
      },
      children: jsx(_$$F, {})
    })
  });
}
function eb({
  focused: e,
  framePreset: t
}) {
  let [r, a] = useState(!1);
  let s = r ? bI : "";
  return jsxs("div", {
    className: e ? cl : dj,
    children: [jsx(ph, {
      text: t.i18nName(),
      className: VW,
      onTruncationChange: e => {
        r !== e && a(e);
      }
    }), jsxs("span", {
      className: s,
      children: [t.width, "\u200A\xd7\u200A", t.height]
    })]
  });
}
$$eE1.displayName = "FramePresetDropdown";
export const hw = $$ey0;
export const Ij = $$eE1;
export const nl = $$e_2;