import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { PureComponent, createRef, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { d as _$$d } from "../905/976845";
import { J as _$$J } from "../905/125993";
import u from "classnames";
import { BrowserInfo, isMobileUA } from "../figma_app/778880";
import { stripHtmlTags } from "../905/491152";
import { ModalCloseButton } from "../905/17223";
import { c$, wv, ms } from "../figma_app/236327";
import { ButtonBasePrimary } from "../figma_app/637027";
import { R as _$$R } from "../3591/975641";
import { SvgComponent } from "../905/714743";
import { MediaQuerySvgComponent } from "../905/331623";
import { o as _$$o } from "../905/96108";
import { getI18nString, renderI18nText } from "../905/303541";
import { L as _$$L } from "../3591/956338";
import { isResourcePendingPublishing, getResourceTaglineOrDescription } from "../figma_app/777551";
import { JZ, qR } from "../figma_app/696043";
import { showDropdownThunk, hideDropdownAction, selectViewAction } from "../905/929976";
import { showModalHandler, hideModal } from "../905/156213";
import { PluginAction } from "../905/15667";
import { KE } from "../905/116101";
import { withTrackedClick } from "../figma_app/831799";
import { useCanRunExtensions, findLocalPluginById } from "../figma_app/844435";
import { useDropdownState } from "../905/848862";
import { M as _$$M } from "../figma_app/170366";
import { getPluginsMenuOpenDirectory, hasOrgRole, getPluginVersion } from "../figma_app/300692";
import { PluginManager } from "../figma_app/612938";
import { HubTypeEnum } from "../figma_app/45218";
import { KindEnum } from "../905/129884";
import { PluginImage } from "../905/480825";
import { Cf } from "../905/504727";
import { YW } from "../figma_app/626177";
import { A as _$$A } from "../3591/199070";
import { PE } from "../3591/130069";
import { lD, T9 } from "../figma_app/38430";
import { ModalContainer } from "../figma_app/918700";
import { h as _$$h } from "../figma_app/752483";
import { ho } from "../figma_app/870683";
import { li, dn } from "../figma_app/994403";
import { bp, rS, el as _$$el, yd, im, K0, In, iH, YG, cV, rs, q6, Yh, Gm, hM, H1, x$, yq, zr, Kz, P8, iZ, uN, UB, Hq, TM, QW, ft, kQ, Ac, m6, yk, A9, XV, vc, ar } from "../3591/656444";
import { A as _$$A2 } from "../svg/905874";
import { A as _$$A3 } from "../2854/580012";
import { A as _$$A4 } from "../2854/415431";
import { A as _$$A5 } from "../svg/465311";
import { A as _$$A6 } from "../1617/568132";
import { A as _$$A7 } from "../svg/295891";
import { A as _$$A8 } from "../svg/5312";
import { A as _$$A9 } from "../1617/579393";
import { A as _$$A0 } from "../svg/26950";
import { A as _$$A1 } from "../svg/691417";
import { A as _$$A10 } from "../1617/582870";
import { A as _$$A11 } from "../svg/619883";
import { A as _$$A12 } from "../svg/737297";
var $$n2;
var $$s5;
var $$l4;
var c = u;
function ea(e) {
  switch (e) {
    case "plugins-menu-dev-create-new":
      return getI18nString("fullscreen.plugins_menu.new_plugin");
    case "widgets-menu-dev-create-new":
      return getI18nString("fullscreen.plugins_menu.new_widget");
    case "widgets-menu-dev-import-from-manifest":
      return getI18nString("fullscreen.plugins_menu.import_widget_from_manifest");
    case "plugins-menu-dev-import-from-manifest":
      return getI18nString("fullscreen.plugins_menu.import_plugin_from_manifest");
    case "plugins-menu-open-directory-mac":
      return getI18nString("fullscreen.plugins_menu.open_directory_mac");
    case "plugins-menu-open-directory-win":
      return getI18nString("fullscreen.plugins_menu.open_directory_win");
    case "plugins-menu-open-directory-vscode":
      return getI18nString("fullscreen.plugins_menu.open_directory_vscode");
    default:
      return "";
  }
}
export let $$ep3 = "CREATE_PLUGIN_DROPDOWN";
export function $$ed0(e) {
  let i = useDispatch();
  let t = useSelector(e => e.dropdownShown);
  let n = useCanRunExtensions();
  let s = e.resourceType === HubTypeEnum.WIDGET;
  return t?.data?.targetRect ? jsxs(Cf, {
    minWidth: 163,
    targetRect: t?.data.targetRect,
    lean: e.lean,
    propagateCloseClick: !0,
    children: [jsx(c$, {
      onClick: t => {
        if (t.stopPropagation(), i(KE()), !n) return PluginManager.instance.handleUpgrade(PluginAction.MANAGE_EXTENSIONS);
        i(showModalHandler({
          type: _$$h,
          data: {
            resourceType: e.resourceType || HubTypeEnum.PLUGIN
          }
        }));
      },
      children: ea(s ? "widgets-menu-dev-create-new" : "plugins-menu-dev-create-new")
    }), jsx(c$, {
      onClick: e => {
        if (e.stopPropagation(), !n) {
          i(KE());
          return PluginManager.instance.handleUpgrade(PluginAction.MANAGE_EXTENSIONS);
        }
        i(JZ({
          resourceType: s ? "widget" : "plugin"
        }));
      },
      children: ea(s ? "widgets-menu-dev-import-from-manifest" : "plugins-menu-dev-import-from-manifest")
    })]
  }) : null;
}
let eu = class e extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isMouseOver: !1,
      shouldShowErrorModal: !1
    };
    this.isWidget = !!this.props.plugin.manifest?.containsWidget;
    this.onPublish = () => {
      this.props.onPublishClick && this.props.onPublishClick(this.props.plugin.localFileId);
    };
    this.onDelete = () => {
      this.props.dispatch(qR(this.props.plugin.localFileId));
    };
    this.onClick = () => {
      this.props.onTileClick ? this.props.onTileClick() : this.onRevealLocally();
    };
    this.onRevealLocally = () => {
      _$$M().openExtensionDirectory(this.props.plugin.localFileId);
    };
    this.showError = () => {
      this.setState({
        shouldShowErrorModal: !0
      });
    };
    this.hideError = () => {
      this.setState({
        shouldShowErrorModal: !1
      });
    };
    this.tileDropdownType = this.isWidget ? e.DEVELOPMENT_PLUGIN_DROPDOWN : e.DEVELOPMENT_WIDGET_DROPDOWN;
    this.onContextMenu = e => {
      this.props.dispatch(showDropdownThunk({
        type: this.tileDropdownType,
        data: {
          type: "context",
          localFileId: this.props.plugin.localFileId,
          clientX: e.clientX,
          clientY: e.clientY
        }
      }));
    };
    this.shouldShowContextMenu = () => this.props.dropdownShown && this.props.dropdownShown.type === this.tileDropdownType && this.props.dropdownShown.data.localFileId === this.props.plugin.localFileId && "context" === this.props.dropdownShown.data.type;
    this.shouldShowPointingDropdown = () => null != this.props.dropdownShown && this.props.dropdownShown.type === this.tileDropdownType && this.props.dropdownShown.data.localFileId === this.props.plugin.localFileId && "pointing" === this.props.dropdownShown.data.type;
    this.onDotsClick = () => {
      this.props.dispatch(showDropdownThunk({
        type: this.tileDropdownType,
        data: {
          type: "pointing",
          localFileId: this.props.plugin.localFileId
        }
      }));
    };
    this.dotsIconRef = createRef();
    this.onMouseEnter = () => {
      this.setState({
        isMouseOver: !0
      });
    };
    this.onMouseLeave = () => {
      this.setState({
        isMouseOver: !1
      });
    };
  }
  render() {
    let e = jsxs(Fragment, {
      children: [jsx(c$, {
        onClick: this.onPublish,
        children: renderI18nText("community.plugins.publish_new_version")
      }), jsx(c$, {
        onClick: this.onRevealLocally,
        children: ea(getPluginsMenuOpenDirectory())
      }), jsx(wv, {}), jsx(c$, {
        onClick: this.onDelete,
        children: renderI18nText("community.permissions_modal_publish_tab.footer.remove")
      })]
    });
    let {
      name,
      error
    } = this.props.plugin;
    let n = this.isWidget ? getI18nString("community.plugins.widget") : getI18nString("community.plugins.plugin");
    return jsxs("div", {
      className: bp,
      children: [jsxs("div", {
        className: error ? rS : _$$el,
        onClick: error ? this.showError : this.onClick,
        onContextMenu: this.onContextMenu,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        children: [error ? jsx("div", {
          className: yd,
          children: jsx(MediaQuerySvgComponent, {
            svg: _$$A11
          })
        }) : this.isWidget ? jsx("div", {
          className: im,
          children: this.props.isPublished ? jsx("img", {
            className: K0,
            src: `/community/icon?resource_type=widget&resource_id=${this.props.plugin.plugin_id}`,
            alt: ""
          }) : jsx(MediaQuerySvgComponent, {
            svg: _$$A6
          })
        }) : jsx("div", {
          className: im,
          children: jsx(MediaQuerySvgComponent, {
            svg: _$$A0,
            fallbackSvg: _$$A1
          })
        }), jsxs("div", {
          className: In,
          children: [jsxs("div", {
            className: error ? iH : YG,
            children: [name, this.props.isPublished ? jsx(MediaQuerySvgComponent, {
              svg: _$$A5
            }) : null]
          }), error && this.state.isMouseOver ? jsx(_$$o, {
            className: cV,
            text: "Error: " + error.text
          }) : jsx(_$$R, {
            className: cV,
            text: this.props.plugin.localFilePath.replace("/manifest.json", "")
          })]
        }), error && jsx(SvgComponent, {
          className: rs,
          svg: BrowserInfo.mac ? _$$A7 : _$$A8
        })]
      }), jsx(YW, {
        svg: _$$A3,
        fallbackSvg: _$$A4,
        className: c()(q6, this.shouldShowPointingDropdown() ? Yh : ""),
        onClick: this.onDotsClick,
        ref: this.dotsIconRef,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.plugins.options"),
        selected: this.shouldShowPointingDropdown()
      }), this.shouldShowContextMenu() && jsx(ms, {
        className: Gm,
        style: {
          left: this.props.dropdownShown.data.clientX,
          top: this.props.dropdownShown.data.clientY
        },
        children: e
      }), this.shouldShowPointingDropdown() && jsx(Cf, {
        className: Gm,
        minWidth: 122,
        targetRect: this.dotsIconRef.current.getBoundingClientRect(),
        propagateCloseClick: !0,
        children: e
      }), this.state.shouldShowErrorModal && jsxs(ModalContainer, {
        size: "small",
        title: getI18nString("community.plugins.plugin_or_widget_issue", {
          resourceType: n
        }),
        children: [jsx(ModalCloseButton, {
          ...this.props
        }), jsx("div", {
          className: hM,
          children: this.props.plugin.error ? this.props.plugin.error.text : error?.text
        }), jsx("div", {
          className: H1,
          children: jsx(ButtonBasePrimary, {
            onClick: this.hideError,
            children: renderI18nText("general.done")
          })
        })]
      })]
    });
  }
};
eu.DEVELOPMENT_PLUGIN_DROPDOWN = "DEVELOPMENT_PLUGIN_DROPDOWN";
eu.DEVELOPMENT_WIDGET_DROPDOWN = "DEVELOPMENT_WIDGET_DROPDOWN";
export let $$ec1 = 443 == require.j ? eu : null;
function eg(e) {
  return jsxs("div", {
    className: e.containerClassName || x$,
    onContextMenu: e.onOptionsClick,
    onClick: e.onClick || (e => e.preventDefault()),
    children: [jsxs(li.IconAndBadgeContainer, {
      className: yq,
      children: [jsx("div", {
        className: zr,
        children: e.pluginIcon
      }), e.showEditorTypeIcon && jsx(li.BadgeContainer, {
        children: jsx(dn, {
          editorType: e.editorType,
          is16x16: !0
        })
      })]
    }), jsxs("div", {
      className: Kz,
      children: [jsxs("div", {
        className: P8,
        children: [jsx("div", {
          className: iZ,
          children: e.title
        }), e.titleSuffix]
      }), jsx("div", {
        className: isMobileUA ? uN : UB,
        children: "string" == typeof e.subTitle ? stripHtmlTags(e.subTitle) : e.subTitle
      })]
    }), jsx("div", {
      className: Hq,
      children: jsx(_$$d, {
        ref: e.optionsIconRef,
        onClick: e.onOptionsClick,
        "aria-expanded": e.isSelected,
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("community.plugins.options")
        },
        "aria-label": getI18nString("community.plugins.options"),
        disabled: e.disabled,
        children: jsx(_$$J, {})
      })
    })]
  });
}
($$n2 || ($$n2 = {})).Tile = function (e) {
  let i = useDropdownState();
  let t = i?.type === lD && i.data.localFileId === e.plugin.localFileId;
  let n = useDispatch();
  let s = useRef(null);
  return jsxs(Fragment, {
    children: [jsx(eg, {
      containerClassName: e.containerClassName,
      disabled: !1,
      editorType: e.plugin.manifest.editorType || [],
      isSelected: t,
      onClick: e.onClick,
      onOptionsClick: i => {
        if (i.stopPropagation(), t) {
          n(hideDropdownAction());
          return;
        }
        let l = s.current;
        n(showDropdownThunk({
          type: lD,
          data: {
            localFileId: e.plugin.localFileId,
            targetRect: l.getBoundingClientRect()
          }
        }));
      },
      optionsIconRef: s,
      pluginIcon: jsx("div", {
        className: TM,
        children: e.plugin.error ? jsx(SvgComponent, {
          className: QW,
          svg: _$$A12
        }) : jsx(MediaQuerySvgComponent, {
          className: ft,
          svg: _$$A2
        })
      }),
      showEditorTypeIcon: e.showEditorTypeIcon,
      subTitle: jsx(_$$A, {
        localResource: e.plugin,
        publishedResource: void 0
      }),
      title: e.plugin.name
    }), t && jsx(T9, {
      localResource: e.plugin
    })]
  });
};
(e => {
  function i(e) {
    if (isResourcePendingPublishing(e)) return jsx(_$$L, {
      height: "16"
    });
    if (hasOrgRole(e)) {
      let i = e.roles.org?.name;
      return jsx(SvgComponent, {
        svg: _$$A9,
        className: kQ,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": i ? getI18nString("community.plugins.private_for_plugin_org_name", {
          orgName: i
        }) : getI18nString("community.plugins.private_for_plugin_org")
      });
    }
    if (e.roles.is_public) return jsx(SvgComponent, {
      className: Ac,
      svg: _$$A10,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("community.plugins.published_to_community")
    });
  }
  e.Tile = function (e) {
    let t = useDropdownState();
    let n = t?.type === lD && t.data.pluginId === e.plugin.id && t.data.targetRect;
    let s = useDispatch();
    let l = useRef(null);
    let p = getPluginVersion(e.plugin);
    let d = findLocalPluginById(e.plugin.id);
    let u = useCallback(() => i(e.plugin), [e.plugin])();
    return jsxs(Fragment, {
      children: [jsx(eg, {
        containerClassName: e.containerClassName,
        disabled: !!e.plugin.unpublished_at,
        editorType: p.manifest.editorType || [],
        isSelected: n,
        onClick: e.onClick,
        onOptionsClick: () => {
          if (n) {
            s(hideDropdownAction());
            return;
          }
          let i = l.current;
          s(showDropdownThunk({
            type: lD,
            data: {
              pluginId: e.plugin.id,
              targetRect: i.getBoundingClientRect()
            }
          }));
        },
        optionsIconRef: l,
        pluginIcon: jsx(PluginImage, {
          plugin: p
        }),
        showEditorTypeIcon: !0,
        subTitle: jsx(_$$A, {
          localResource: d,
          publishedResource: e.plugin
        }),
        title: p.name,
        titleSuffix: u
      }), n && jsx(T9, {
        publishedResource: e.plugin,
        viewResource: () => {
          s(selectViewAction({
            view: "communityHub",
            subView: "plugin",
            publishedPluginId: e.plugin.id
          }));
          s(hideModal());
        }
      })]
    });
  };
  e.PluginManagementTitleBadge = i;
})($$s5 || ($$s5 = {}));
($$l4 || ($$l4 = {})).Tile = function (e) {
  let i = getPluginVersion(e.plugin);
  return jsxs("div", {
    className: e.containerClassName ?? x$,
    children: [jsxs(li.IconAndBadgeContainer, {
      className: yq,
      children: [jsx("div", {
        className: zr,
        children: jsx(PluginImage, {
          plugin: i
        })
      }), jsx(li.BadgeContainer, {
        children: jsx(dn, {
          editorType: i.manifest.editorType,
          is16x16: !0
        })
      })]
    }), jsx("div", {
      className: Kz,
      children: jsx(PE, {
        resource: e.plugin
      })
    })]
  });
};
withTrackedClick(function ({
  plugin: e,
  className: i,
  onClick: t
}) {
  let n = getPluginVersion(e);
  let s = useDispatch();
  return jsxs("a", {
    className: i || m6,
    "data-plugin-id": e.id,
    onClick: i => {
      i.metaKey || (i.preventDefault(), t?.(), s(selectViewAction({
        view: "communityHub",
        subView: "plugin",
        publishedPluginId: e.id
      })));
    },
    href: ho(e.id),
    children: [jsxs(li.IconAndBadgeContainer, {
      className: yk,
      children: [jsx("div", {
        className: A9,
        children: jsx(PluginImage, {
          plugin: n
        })
      }), jsx(li.BadgeContainer, {
        children: jsx(dn, {
          editorType: n.manifest.editorType,
          is16x16: !0
        })
      })]
    }), jsxs("div", {
      className: XV,
      children: [jsx("div", {
        className: vc,
        children: n.name
      }), jsx("div", {
        className: ar,
        children: getResourceTaglineOrDescription(n, stripHtmlTags)
      })]
    })]
  }, e.id);
});
export const Pq = $$ed0;
export const jZ = $$ec1;
export const ke = $$n2;
export const kt = $$ep3;
export const sp = $$l4;
export const tY = $$s5;