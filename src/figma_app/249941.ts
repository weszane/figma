import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { d as _$$d } from "../905/75621";
import { B as _$$B } from "../905/853081";
import { E as _$$E } from "../905/407172";
import { J as _$$J } from "../905/968825";
import { P as _$$P } from "../905/268909";
import { n as _$$n } from "../905/862127";
import { D as _$$D } from "../905/738743";
import { h as _$$h } from "../905/511587";
import { A as _$$A } from "../905/793046";
import { q as _$$q } from "../905/820062";
import { C as _$$C } from "../905/248525";
import { q as _$$q2 } from "../905/733863";
import { j as _$$j } from "../905/724700";
import { p as _$$p } from "../905/484532";
import { g as _$$g } from "../905/994040";
import { j as _$$j2 } from "../905/697892";
import { z as _$$z } from "../905/81461";
import { H as _$$H } from "../905/171665";
import { M as _$$M } from "../905/844686";
import { X as _$$X } from "../905/678737";
import { I as _$$I } from "../905/783004";
import { z as _$$z2 } from "../905/685437";
import { $ as _$$$ } from "../905/860066";
import { k as _$$k } from "../905/792988";
import { R as _$$R } from "../905/82603";
import { y as _$$y } from "../905/528247";
import { g as _$$g2 } from "../905/10904";
import { l as _$$l } from "../905/983358";
import { A as _$$A2 } from "../905/408320";
import { t as _$$t } from "../905/185052";
import { u as _$$u } from "../905/336827";
import { G as _$$G } from "../905/594445";
import { R as _$$R2 } from "../905/603196";
import { $ as _$$$2 } from "../905/218704";
import { O as _$$O } from "../905/501876";
import { n as _$$n2 } from "../905/759874";
import { y as _$$y2 } from "../905/229546";
import { m as _$$m } from "../905/367152";
import { a as _$$a } from "../905/165160";
import { T as _$$T } from "../905/339716";
import { y as _$$y3 } from "../905/757816";
import { w as _$$w } from "../905/60604";
import { e as _$$e } from "../905/74460";
import { G as _$$G2 } from "../905/972486";
import { N as _$$N } from "../905/670143";
import { V as _$$V } from "../905/405601";
import { h as _$$h2 } from "../905/827867";
import { r as _$$r } from "../905/957643";
import { s as _$$s } from "../905/733494";
import { Q as _$$Q } from "../905/149004";
import { d as _$$d2 } from "../905/317631";
import { _ as _$$_ } from "../905/563242";
import { _ as _$$_2 } from "../905/144222";
import { o as _$$o } from "../905/949628";
import { s as _$$s2 } from "../905/172385";
import { I as _$$I2 } from "../905/706464";
import { Fullscreen, LayoutTabType } from "../figma_app/763686";
import { SceneNode } from "../905/499575";
import { isStamp, isShapeType } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { LRUCache } from "../905/196201";
import { memoizeByArgs } from "../figma_app/815945";
import ef from "classnames";
import { SvgComponent, V as _$$V2 } from "../905/714743";
import { MediaQuerySvgComponent } from "../905/331623";
import { getI18nString } from "../905/303541";
import { U as _$$U } from "../905/492359";
import { s$ } from "../905/432493";
import { NO } from "../905/619652";
import { KindEnum } from "../905/129884";
import { g$ } from "../figma_app/116234";
import { i as _$$i } from "../905/415810";
import { n as _$$n3 } from "../figma_app/859750";
import { isSitesFeatureEnabled } from "../905/561485";
import { Rt, po } from "../figma_app/945858";
import { V3, W5, aN, TK, E7, P0, EA, EU } from "../figma_app/622978";
import { A as _$$A3 } from "../6828/587919";
import { A as _$$A4 } from "../6828/215707";
import { A as _$$A5 } from "../6828/686891";
import { A as _$$A6 } from "../6828/415893";
import { A as _$$A7 } from "../6041/159584";
import { A as _$$A8 } from "../3850/397501";
import { A as _$$A9 } from "../3850/575425";
import { A as _$$A0 } from "../3850/9818";
import { A as _$$A1 } from "../3850/91747";
import { A as _$$A10 } from "../3850/559481";
import { A as _$$A11 } from "../3850/942826";
import { A as _$$A12 } from "../3850/108557";
import { A as _$$A13 } from "../3850/6756";
import { A as _$$A14 } from "../3850/868552";
import { A as _$$A15 } from "../3850/253654";
import { A as _$$A16 } from "../3850/839808";
import { A as _$$A17 } from "../3850/338929";
import { A as _$$A18 } from "../3850/564837";
import { A as _$$A19 } from "../3850/41859";
import { A as _$$A20 } from "../3850/678540";
import { A as _$$A21 } from "../3850/653624";
import { A as _$$A22 } from "../3850/495576";
import { A as _$$A23 } from "../3850/973603";
import { A as _$$A24 } from "../3850/204081";
import { A as _$$A25 } from "../3850/60943";
import { A as _$$A26 } from "../3850/509426";
import { A as _$$A27 } from "../3850/914019";
import { A as _$$A28 } from "../3850/248016";
import { A as _$$A29 } from "../1762/785289";
import { A as _$$A30 } from "../1762/711700";
import { A as _$$A31 } from "../2854/23832";
import { A as _$$A32 } from "../2854/98246";
import { A as _$$A33 } from "../2854/492610";
import { A as _$$A34 } from "../2854/594352";
import { A as _$$A35 } from "../2854/592428";
import { A as _$$A36 } from "../2854/274771";
import { A as _$$A37 } from "../2854/287502";
import { A as _$$A38 } from "../2854/127122";
import { A as _$$A39 } from "../2854/448969";
import { A as _$$A40 } from "../2854/734454";
import { A as _$$A41 } from "../2854/559949";
import { A as _$$A42 } from "../2854/270844";
import { A as _$$A43 } from "../2854/51159";
import { A as _$$A44 } from "../2854/372209";
import { A as _$$A45 } from "../2854/253373";
import { A as _$$A46 } from "../2854/704796";
import { A as _$$A47 } from "../2854/857247";
import { A as _$$A48 } from "../2854/160761";
import { A as _$$A49 } from "../2854/636462";
import { A as _$$A50 } from "../2854/939968";
import { A as _$$A51 } from "../2854/586337";
import { A as _$$A52 } from "../svg/660901";
var n;
var eE = ef;
let tb = new LRUCache(750);
export function $$tT1(e, t) {
  let r = tb.get(e);
  r && r.thumbnailId === t || (r = {
    thumbnailId: t,
    svg: NO(e)
  }, tb.set(e, r));
  return r.svg;
}
export function $$tI2(e) {
  switch (e.stackMode) {
    case "HORIZONTAL":
      if ("WRAP" === e.stackWrap) switch (e.stackPrimaryAlignItems) {
        case "MIN":
        case "SPACE_EVENLY":
        case "SPACE_BETWEEN":
        case void 0:
          return _$$A38;
        case "CENTER":
          return _$$A37;
        case "MAX":
          return _$$A39;
        default:
          throwTypeError(e.stackPrimaryAlignItems);
      } else switch (e.stackCounterAlignItems) {
        case "BASELINE":
        case "MIN":
        case void 0:
          return _$$A33;
        case "CENTER":
          return _$$A32;
        case "MAX":
          return _$$A31;
        default:
          throwTypeError(e.stackCounterAlignItems);
      }
    case "VERTICAL":
      switch (e.stackCounterAlignItems) {
        case "BASELINE":
        case "MIN":
        case void 0:
          return _$$A35;
        case "CENTER":
          return _$$A34;
        case "MAX":
          return _$$A36;
        default:
          throwTypeError(e.stackCounterAlignItems);
      }
  }
  return _$$A14;
}
(e => {
  function t(e) {
    return void 0 !== e.objectsPanelThumbnailId;
  }
  function r(e, r, n, a) {
    let s = {
      src: _$$A25,
      tooltip: ""
    };
    if (!e) return s;
    let en = e.type;
    switch (isStamp(e) && (en = "STAMP"), en) {
      case "BOOLEAN_OPERATION":
        switch (e.booleanOperation) {
          case "UNION":
            return {
              src: n ? jsx(_$$C, {}) : _$$A1,
              tooltip: getI18nString("layer_icon.tooltip.union")
            };
          case "INTERSECT":
            return {
              src: n ? jsx(_$$q2, {}) : _$$A9,
              tooltip: getI18nString("layer_icon.tooltip.intersect")
            };
          case "SUBTRACT":
            return {
              src: n ? jsx(_$$j, {}) : _$$A0,
              tooltip: getI18nString("layer_icon.tooltip.subtract")
            };
          case "XOR":
            return {
              src: n ? jsx(_$$p, {}) : _$$A10,
              tooltip: getI18nString("layer_icon.tooltip.exclude")
            };
          default:
            return s;
        }
      case "VECTOR":
        return {
          src: n ? jsx(_$$g, {}) : _$$A50,
          tooltip: getI18nString("layer_icon.tooltip.vector")
        };
      case "STAR":
        return {
          src: n ? jsx(_$$j2, {}) : _$$A41,
          tooltip: getI18nString("layer_icon.tooltip.star")
        };
      case "LINE":
        return {
          src: n ? jsx(_$$z, {}) : _$$A19,
          tooltip: getI18nString("layer_icon.tooltip.line")
        };
      case "ELLIPSE":
        return {
          src: n ? jsx(_$$H, {}) : _$$A12,
          tooltip: getI18nString("layer_icon.tooltip.ellipse")
        };
      case "RECTANGLE":
      case "ROUNDED_RECTANGLE":
        return {
          src: n ? jsx(_$$M, {}) : _$$A25,
          tooltip: getI18nString("layer_icon.tooltip.rectangle")
        };
      case "REGULAR_POLYGON":
        return {
          src: n ? jsx(_$$X, {}) : _$$A24,
          tooltip: getI18nString("layer_icon.tooltip.polygon")
        };
      case "TEXT":
        return {
          src: n ? jsx(_$$I, {}) : _$$A48,
          tooltip: getI18nString("layer_icon.tooltip.text")
        };
      case "SLICE":
        return {
          src: n ? jsx(_$$z2, {}) : _$$A29,
          tooltip: getI18nString("layer_icon.tooltip.slice")
        };
      case "TRANSFORM":
        return {
          src: n ? jsx(_$$$, {}) : _$$A15,
          tooltip: getI18nString("layer_icon.tooltip.transform")
        };
      case "GROUP":
      case "FRAME":
        if (isSitesFeatureEnabled() && t(e) && e.parentNode?.isResponsiveSetOrWebpage) return {
          src: _$$n3(e.size.x),
          tooltip: getI18nString("layer_icon.tooltip.layout")
        };
        if (e.isStateGroup) return {
          src: n ? jsx(_$$k, {}) : _$$A44,
          tooltip: getI18nString("layer_icon.tooltip.component")
        };
        if (t(e) && getFeatureFlags().dse_slots && e.isSlotReactive) return {
          src: jsx(_$$R, {}),
          tooltip: getI18nString("layer_icon.tooltip.slot")
        };
        if (Rt(e)) return {
          src: n ? function (e) {
            switch (e.stackMode) {
              case "HORIZONTAL":
                if ("WRAP" === e.stackWrap) switch (e.stackPrimaryAlignItems) {
                  case "MIN":
                  case "SPACE_EVENLY":
                  case "SPACE_BETWEEN":
                  case void 0:
                    return jsx(_$$d, {});
                  case "CENTER":
                    return jsx(_$$B, {});
                  case "MAX":
                    return jsx(_$$E, {});
                  default:
                    throwTypeError(e.stackPrimaryAlignItems);
                } else switch (e.stackCounterAlignItems) {
                  case "BASELINE":
                  case "MIN":
                  case void 0:
                    return jsx(_$$J, {});
                  case "CENTER":
                    return jsx(_$$P, {});
                  case "MAX":
                    return jsx(_$$n, {});
                  default:
                    throwTypeError(e.stackCounterAlignItems);
                }
              case "VERTICAL":
                switch (e.stackCounterAlignItems) {
                  case "BASELINE":
                  case "MIN":
                  case void 0:
                    return jsx(_$$D, {});
                  case "CENTER":
                    return jsx(_$$h, {});
                  case "MAX":
                    return jsx(_$$A, {});
                  default:
                    throwTypeError(e.stackCounterAlignItems);
                }
            }
            return jsx(_$$q, {});
          }(e) : $$tI2(e),
          tooltip: getI18nString("layer_icon.tooltip.auto_layout")
        };else if (po(e)) return {
          src: jsx(_$$y, {}),
          tooltip: getI18nString("layer_icon.tooltip.auto_layout")
        };else if (e.resizeToFit) return {
          src: n ? jsx(_$$g2, {}) : _$$A15,
          tooltip: getI18nString("layer_icon.tooltip.group")
        };else return {
          src: n ? jsx(_$$q, {}) : _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.frame")
        };
      case "WEBPAGE":
      case "RESPONSIVE_NODE_SET":
      case "RESPONSIVE_SET":
        if (e.isMakeResponsiveSet) return {
          src: jsx(_$$l, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_layer")
        };
        if (isSitesFeatureEnabled()) return {
          src: a === g$.Webpage ? jsx(_$$A2, {}) : jsx(_$$t, {}),
          tooltip: getI18nString("layer_icon.tooltip.webpage")
        };
        return {
          src: n ? jsx(_$$q, {}) : _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.frame")
        };
      case "REPEATER":
        if (isSitesFeatureEnabled() && _$$U()) return {
          src: jsx(_$$u, {}),
          tooltip: getI18nString("layer_icon.tooltip.repeater")
        };
        return {
          src: _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.frame")
        };
      case "CMS_RICH_TEXT":
        if (isSitesFeatureEnabled() && _$$U()) return {
          src: jsx(_$$G, {}),
          tooltip: getI18nString("layer_icon.tooltip.cms_rich_text")
        };
        return {
          src: _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.frame")
        };
      case "CODE_COMPONENT":
        if (isSitesFeatureEnabled()) return {
          src: jsx(_$$R2, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_component")
        };
        return {
          src: _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.component")
        };
      case "CODE_INSTANCE":
        if (!isSitesFeatureEnabled()) return {
          src: _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.component")
        };
        if (e instanceof SceneNode) {
          if (e.isMainComponentLikeCodeNode) return {
            src: jsx(_$$R2, {}),
            tooltip: getI18nString("layer_icon.tooltip.code_component")
          };
          if (e.isLayerLikeCodeNode) return {
            src: jsx(_$$l, {}),
            tooltip: getI18nString("layer_icon.tooltip.code_layer")
          };
          return {
            src: jsx(_$$$2, {}),
            tooltip: getI18nString("layer_icon.tooltip.code_instance")
          };
        }
        if (e.isMainCodeComponent) return {
          src: jsx(_$$R2, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_component")
        };
        if (e.autoForkCode) return {
          src: jsx(_$$l, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_layer")
        };
        return {
          src: jsx(_$$$2, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_instance")
        };
      case "REACT_FIBER":
        return {
          src: jsx(_$$O, {}),
          tooltip: getI18nString("layer_icon.tooltip.react_fiber")
        };
      case "CODE_LAYER":
        if (isSitesFeatureEnabled()) return {
          src: jsx(_$$l, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_layer")
        };
        return {
          src: _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.component")
        };
      case "CODE_LIBRARY":
        if (isSitesFeatureEnabled()) return {
          src: jsx(_$$O, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_library")
        };
        return {
          src: _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.component")
        };
      case "CODE_FILE":
        if (!isSitesFeatureEnabled()) return {
          src: _$$A14,
          tooltip: getI18nString("layer_icon.tooltip.component")
        };
        if (!(e instanceof SceneNode)) return {
          src: jsx(_$$R2, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_component")
        };
        if (e.isLayerLikeCodeNode) return {
          src: jsx(_$$l, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_layer")
        };
        return {
          src: jsx(_$$R2, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_component")
        };
      case "MODULE":
        return {
          src: _$$A46,
          tooltip: getI18nString("layer_icon.tooltip.module")
        };
      case "CODE_BLOCK":
        return {
          src: jsx(_$$n2, {}),
          tooltip: getI18nString("layer_icon.tooltip.code_block")
        };
      case "SYMBOL":
        if (getFeatureFlags().dse_templates_proto && t(e) && e.isTemplate) return {
          src: _$$A46,
          tooltip: getI18nString("layer_icon.tooltip.template")
        };
        if (t(e) && e.isState || r?.isStateGroup) return {
          src: n ? jsx(_$$y2, {}) : _$$A45,
          tooltip: getI18nString("layer_icon.tooltip.variant")
        };
        return {
          src: n ? jsx(_$$k, {}) : _$$A44,
          tooltip: getI18nString("layer_icon.tooltip.component")
        };
      case "INSTANCE":
        return {
          src: n ? jsx(_$$m, {}) : _$$A16,
          tooltip: getI18nString("layer_icon.tooltip.instance")
        };
      case "STICKY":
        return {
          src: n ? jsx(_$$a, {}) : _$$A42,
          tooltip: getI18nString("layer_icon.tooltip.sticky")
        };
      case "SHAPE_WITH_TEXT":
        return {
          src: n ? jsx(_$$T, {}) : _$$A27,
          tooltip: getI18nString("layer_icon.tooltip.shape_with_text")
        };
      case "CONNECTOR":
        return {
          src: n ? jsx(_$$y3, {}) : _$$A11,
          tooltip: getI18nString("layer_icon.tooltip.connector")
        };
      case "STAMP":
        return {
          src: n ? jsx(_$$w, {}) : _$$A40,
          tooltip: getI18nString("layer_icon.tooltip.stamp")
        };
      case "SECTION":
        return {
          src: n ? jsx(_$$e, {}) : _$$A26,
          tooltip: getI18nString("layer_icon.tooltip.section")
        };
      case "WIDGET":
        {
          let t = e.guid ? getSingletonSceneGraph().get(e.guid.toString()) : null;
          if (t && "EMBED_WIDGET" === t.widgetId) return {
            src: n ? jsx(_$$G2, {}) : _$$A13,
            tooltip: getI18nString("layer_icon.tooltip.embed")
          };
          if (t && "LINK_PREVIEW_WIDGET" === t.widgetId) return {
            src: n ? jsx(_$$N, {}) : _$$A20,
            tooltip: getI18nString("layer_icon.tooltip.link_preview")
          };
          if (t && "HTML_WIDGET" === t.widgetId) return {
            src: jsx(_$$V, {}),
            tooltip: getI18nString("layer_icon.tooltip.embed")
          };
          return {
            src: n ? jsx(_$$h2, {}) : _$$A51,
            tooltip: getI18nString("layer_icon.tooltip.widget")
          };
        }
      case "CANVAS":
        return {
          src: _$$A22,
          tooltip: getI18nString("layer_icon.tooltip.canvas")
        };
      case "TABLE":
        return {
          src: n ? jsx(_$$r, {}) : _$$A47,
          tooltip: getI18nString("layer_icon.tooltip.table")
        };
      case "SLIDE":
        return {
          src: n ? jsx(_$$s, {}) : _$$A30,
          tooltip: getI18nString("layer_icon.tooltip.slide")
        };
    }
    return s;
  }
  function n(e) {
    let t = memoizeByArgs((e, t) => $$tT1(e, t));
    let {
      guid,
      node,
      isMenuIcon,
      isMenuIconPurple,
      className,
      editModeType,
      detachedInfo,
      disabled,
      locked,
      hovered,
      outOfView,
      scrollLeft,
      useUI3Icon,
      panelType,
      isCodeConnected,
      isPatternSourceIcon
    } = e;
    let y = node ? t(guid, node.objectsPanelThumbnailId) : "";
    let b = node?.hasEnabledAnimatedPaint;
    let T = node?.hasEnabledVideoPaint;
    return jsx(ev, {
      animated: b || T,
      className,
      detachedInfo,
      disabled,
      editModeType,
      hovered,
      isCodeConnected,
      isDefaultResponsiveSet: e.isDefaultResponsiveSet,
      isMenuIcon,
      isMenuIconPurple,
      isPatternSourceIcon,
      locked,
      node,
      onDoubleClick: () => {
        e.node && (e.navigateAndPanTo ? e.navigateAndPanTo(e.node.guid) : Fullscreen.panToNode(e.node.guid, !1));
      },
      outOfView,
      panelType,
      scrollLeft,
      staticImage: node?.hasEnabledStaticImagePaint,
      thumbnailSrc: y,
      useUI3Icon
    });
  }
  e.LayerIcon = n;
  n.displayName = "LayerIcon";
  let em = e => e.mirror.sceneGraph;
  e.ConnectedLayerIcon = function (e) {
    let t = useSelector(em);
    return jsx(n, {
      ...e,
      node: t.get(e.guid) || null
    });
  };
  class ef extends PureComponent {
    getAllPaints(e) {
      return [...(e.fillPaints || []), ...(e.strokePaints || []), ...(e.backgroundPaints || [])];
    }
    renderBaseIcon() {
      let {
        node,
        parentNode,
        isMenuIcon,
        isMenuIconPurple,
        className,
        disabled,
        locked,
        hovered,
        outOfView,
        scrollLeft,
        useUI3Icon,
        isPatternSourceIcon
      } = this.props;
      return jsx(ev, {
        animated: this.hasEnabledAnimatedPaintNodeChange(node),
        className,
        disabled,
        hovered,
        isMenuIcon,
        isMenuIconPurple,
        isPatternSourceIcon,
        locked,
        node,
        outOfView,
        parentNode,
        scrollLeft,
        staticImage: this.hasEnabledStaticPaintNodeChange(node),
        useUI3Icon
      });
    }
    renderVariableIcon() {
      let {
        variableResolvedType
      } = this.props.node;
      return null == variableResolvedType ? this.renderBaseIcon() : jsx(_$$i, {
        type: variableResolvedType
      });
    }
    renderVariableCollectionIcon() {
      return jsx(SvgComponent, {
        svg: _$$A52,
        className: this.props.className,
        autosize: !0
      });
    }
    renderStyleIcon() {
      let {
        node,
        className
      } = this.props;
      switch (node.styleType) {
        case "GRID":
          let r = s$(node);
          return jsx(SvgComponent, {
            svg: r,
            className,
            autosize: !0,
            width: "10px"
          });
        case "FILL":
          return jsx(SvgComponent, {
            svg: _$$A5,
            className
          });
        case "EFFECT":
          return jsx(SvgComponent, {
            svg: _$$A4,
            className
          });
        case "TEXT":
          return jsx(SvgComponent, {
            svg: _$$A6,
            className
          });
        default:
          return this.renderBaseIcon();
      }
    }
    hasEnabledAnimatedPaintNodeChange(e) {
      for (let t of this.getAllPaints(e)) if (t.animatedImage) return !0;
      return !1;
    }
    hasEnabledStaticPaintNodeChange(e) {
      for (let t of this.getAllPaints(e)) if (t.image) return !0;
      return !1;
    }
    render() {
      let {
        node,
        className
      } = this.props;
      return node.styleType ? this.renderStyleIcon() : "VARIABLE" === node.type ? this.renderVariableIcon() : "VARIABLE_SET" === node.type ? this.renderVariableCollectionIcon() : "CANVAS" === node.type ? jsx(SvgComponent, {
        svg: _$$A7,
        className
      }) : this.renderBaseIcon();
    }
  }
  e.NodeChangeIcon = ef;
  class ev extends PureComponent {
    render() {
      let e;
      let t;
      let {
        node,
        parentNode,
        animated,
        staticImage,
        thumbnailSrc,
        isMenuIcon,
        isMenuIconPurple,
        onDoubleClick,
        editModeType,
        detachedInfo,
        outOfView,
        panelType,
        isPatternSourceIcon
      } = this.props;
      if (!node) return null;
      let f = V3;
      thumbnailSrc && (f = W5);
      isMenuIcon && (f = isMenuIconPurple ? aN : TK);
      let E = !1;
      let y = "";
      this.props.isDefaultResponsiveSet ? (e = panelType === g$.Webpage ? jsx(_$$Q, {}) : jsx(_$$t, {}), y = getI18nString("layer_icon.tooltip.home")) : node.mask ? (e = this.props.useUI3Icon ? jsx(_$$d2, {}) : _$$A21, y = getI18nString("layer_icon.tooltip.mask")) : (animated || staticImage) && isShapeType(node.type) && !isStamp(node) ? animated ? (e = this.props.useUI3Icon ? jsx(_$$_, {}) : _$$A17, y = getI18nString("layer_icon.tooltip.video")) : (e = this.props.useUI3Icon ? jsx(_$$_2, {}) : _$$A18, y = getI18nString("layer_icon.tooltip.image")) : thumbnailSrc ? (e = _$$V2(thumbnailSrc), y = r(node, parentNode).tooltip) : editModeType === LayoutTabType.DEV_HANDOFF && detachedInfo?.status === "loaded" && "SYMBOL" !== node.type && "INSTANCE" !== node.type ? (e = this.props.useUI3Icon ? jsx(_$$o, {}) : _$$A3, E = !0) : this.props.isCodeConnected ? (e = jsx(_$$s2, {}), y = getI18nString("layer_icon.tooltip.code_connect")) : ({
        src: e,
        tooltip: y
      } = r(node, parentNode, this.props.useUI3Icon, panelType), t = function (e) {
        if (e) switch (e.type) {
          case "TEXT":
            return _$$A49;
          case "STICKY":
            return _$$A43;
          case "SHAPE_WITH_TEXT":
            return _$$A28;
          case "FRAME":
            if (Rt(e)) return $$tI2(e);
            break;
          case "CANVAS":
            return _$$A23;
        }
      }(node));
      let b = !E && "ABSOLUTE" === node.stackPositioning && (this.props.useUI3Icon ? jsx(_$$I2, {
        className: E7
      }) : jsx(SvgComponent, {
        className: E7,
        svg: _$$A8
      }));
      return jsxs("span", {
        className: eE()(this.props.className || f, P0, EA, {
          [EU]: outOfView
        }),
        onDoubleClick: isPatternSourceIcon ? void 0 : onDoubleClick,
        "data-tooltip": isPatternSourceIcon ? null : y || null,
        "data-tooltip-show-above": !0,
        "data-tooltip-type": KindEnum.TEXT,
        "aria-label": y,
        role: "img",
        children: ["string" == typeof e ? jsx(MediaQuerySvgComponent, {
          svg: e,
          fallbackSvg: t
        }) : jsx("span", {
          style: {
            stroke: "none",
            fill: "none"
          },
          children: e
        }), b]
      });
    }
  }
})(n || (n = {}));
let $$tS0 = n.ConnectedLayerIcon;
let $$tv4 = n.LayerIcon;
let $$tA3 = n.NodeChangeIcon;
export const Bf = $$tS0;
export const D = $$tT1;
export const GN = $$tI2;
export const UB = $$tA3;
export const xH = $$tv4;