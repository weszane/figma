import c from 'classnames';
import { useSelector } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { oo, ul } from '../905/114390';
import { HV } from '../905/125333';
import { Alignment, ElementTypeEnum, KindEnum, StatusEnum, PositionEnum } from '../905/129884';
import { z } from '../905/147443';
import { getThemePx } from '../905/149328';
import { F as _$$F } from '../905/162860';
import { x as _$$x } from '../905/439735';
import { trackEventAnalytics } from '../905/449184';
import { isSpecialRoutePath } from '../905/470286';
import { formatI18nMessage } from '../905/482208';
import { createRect, compareRects } from '../905/508367';
import { isTooltipRegistered, getTooltipEntry } from '../905/524523';
import { getFeatureFlags } from '../905/601108';
import { isFigmaDomain } from '../905/691205';
import { Point } from '../905/736624';
import { EE, EF, GQ, Hv, IA, IC, kb, LE, mG, Ox, pG, Qq, Qs, v5, W$, xU } from '../905/736956';
import { setTimeoutID, showTooltip, hideTooltip, clearTimeoutID, showTooltipWithDelay } from '../905/765855';
import { debounce } from '../905/915765';
import { styleBuilderInstance } from '../905/941192';
import { atomStoreManager } from '../figma_app/27355';
import { CE4, LdP, Yoj, Yub } from '../figma_app/27776';
import { FEditorType } from '../figma_app/53721';
import { scaleRect } from '../figma_app/62612';
import { Ec } from '../figma_app/319732';
import { c1 } from '../figma_app/357047';
import { S as _$$S } from '../figma_app/420927';
import { fullscreenValue } from '../figma_app/455680';
import { debug } from '../figma_app/465776';
import { Fullscreen, Position } from '../figma_app/763686';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { camelToKebab } from '../figma_app/930338';
let u = c;
let j = parsePxInt(Yub);
let U = parsePxInt(CE4);
let B = parsePxInt(Yoj);
let G = {
  [KindEnum.LOOKUP]: 100,
  [KindEnum.TEXT]: 0,
  [KindEnum.SPECIAL]: 100
};
let V = parsePxNumber(LdP) + 5;
export function $$H1(e) {
  let t = e['data-tooltip-type'];
  let r = e['data-tooltip'];
  switch (t) {
    case KindEnum.TEXT:
      return r;
    case KindEnum.LOOKUP:
      return formatI18nMessage(r);
  }
  return '';
}
export function $$z0(e) {
  let t;
  if (!e.visible) return null;
  try {
    if (!(t = document.querySelectorAll(`[data-tooltip-key=${e.tooltipKey}]`)[0])) return null;
  } catch (e) {
    return null;
  }
  let r = $$Y4(t);
  return r ? jsx(W, {
    tooltip: {
      ...r,
      state: StatusEnum.SHOWING
    },
    keyboardShortcuts: {}
  }) : null;
}
function W(e) {
  let t;
  let r = z();
  let i = () => {
    let t = e.tooltip.targetRect;
    if (!t) return new Point(0, 0);
    switch (e.tooltip.position) {
      case PositionEnum.ABOVE:
        return new Point(t.left + t.width / 2, t.top);
      case PositionEnum.BELOW:
        return new Point(t.left + t.width / 2, t.bottom);
      case PositionEnum.RIGHT:
        return new Point(t.right, t.top + t.height / 2);
      case PositionEnum.LEFT:
        return new Point(t.left, t.top + t.height / 2);
    }
  };
  let a = t => {
    if (t.key === Position.HYPERLINK_POPUP) {
      let r;
      let {
        editorType,
        urlString,
        entityKey,
        targetRefKey
      } = t.data;
      let l = t.data.canEdit;
      l && e.tooltip.targetRefMap && (l &&= e.tooltip.targetRefMap[targetRefKey]?.current);
      try {
        let e = new URL(urlString);
        r = {
          type: e.protocol === 'mailto:' ? _$$F.MAILTO : e.protocol === 'tel:' ? _$$F.TEL : isFigmaDomain(e.hostname) || isFigmaDomain(e.host) ? isSpecialRoutePath(e.pathname) ? _$$F.FIGMA_PROTOTYPE : e.searchParams.has('version-id') ? _$$F.FIGMA_VERSION : _$$F.FIGMA_FILE : _$$F.GENERIC,
          url: e
        };
      } catch (e) {
        r = {
          type: _$$F.INVALID,
          urlString
        };
      }
      return jsx('div', {
        className: Hv,
        children: jsx(Ec, {
          data: r,
          editorType,
          urlString,
          canEdit: l,
          showHyperlinkEditor: () => {
            if (e.tooltip.targetRefMap) {
              let t = e.tooltip.targetRefMap[targetRefKey];
              t.current?.editHyperlinkFromTooltip(entityKey, e.tooltip.targetRect);
            }
          }
        })
      });
    }
    {
      let e = getTooltipEntry(t.key);
      if (e) {
        let r = e.component;
        return t.data ? jsx(r, {
          ...t.data
        }) : jsx(r, {});
      }
      return jsx('div', {});
    }
  };
  let s = t => t.shortcut ? t.shortcut : t.shortcutKey ? c1(e.keyboardShortcuts, camelToKebab(t.shortcutKey)) : null;
  let o = e.tooltip.target;
  let d = ul(o) && e.tooltip.position === PositionEnum.RIGHT;
  if (e.tooltip.state !== StatusEnum.SHOWING) return null;
  let c = r();
  if (d && !c) return null;
  let _ = Math.random();
  let h = null;
  let g = i();
  switch (e.tooltip.position) {
    case PositionEnum.ABOVE:
      h = {
        left: g.x - j,
        top: Math.floor(g.y - j)
      };
      t = EE;
      break;
    case PositionEnum.BELOW:
      h = {
        left: g.x - j,
        top: g.y
      };
      t = xU;
      break;
    case PositionEnum.RIGHT:
      h = {
        left: g.x,
        top: g.y - j
      };
      t = v5;
      break;
    case PositionEnum.LEFT:
      h = {
        left: g.x - j - 1,
        top: g.y - j
      };
      t = Ox;
  }
  if (c) {
    let t = oo[o.key].assetBgColor;
    switch (e.tooltip.position) {
      case PositionEnum.BELOW:
        h.borderBottomColor = t;
        break;
      case PositionEnum.RIGHT:
        h.borderRightColor = t;
    }
  }
  if (e.enableTracking && e.tooltip.timeoutID == null) {
    let t;
    let r;
    switch (e.tooltip.target?.kind) {
      case ElementTypeEnum.TEXT:
        t = e.tooltip.target.text;
        break;
      case ElementTypeEnum.KEY:
        t = formatI18nMessage(camelToKebab(e.tooltip.target.key));
        r = e.tooltip.target.key;
        break;
      case ElementTypeEnum.ELEMENT:
        r = e.tooltip.target.key;
    }
    let n = {};
    getFeatureFlags().exp_help_on_hover_ff && ul(o) && (n.isHelpOnHoverTooltip = c, c && (n.isHelpOnHoverDropdownTooltip = d));
    trackEventAnalytics('Tooltip Shown', {
      text: t,
      key: r,
      ...n
    }, {
      forwardToDatadog: !1
    });
  }
  let E = ul(o) && e.tooltip.position === PositionEnum.RIGHT;
  return jsxs('div', {
    className: u()({
      [IA]: !e.tooltip.interactive,
      [EF]: e.tooltip.lightMode
    }),
    children: [!E && jsx('div', {
      'className': t,
      'style': h,
      'data-is-the-tooltip': !0
    }), jsx('div', {
      'className': Qs,
      'ref': t => {
        if (t) {
          let n;
          let a = t.cloneNode(!0);
          a.style.cssText = styleBuilderInstance.block.invisible.fixed.str();
          t.parentElement.appendChild(a);
          let s = e.tooltip.maxWidth ? e.tooltip.maxWidth : 180;
          let o = a.offsetHeight + 1;
          let l = e.tooltip.target;
          let d = l && l.kind === ElementTypeEnum.ELEMENT && l.data && l.data.unconstrainWidth || r();
          n = d ? a.offsetWidth + 1 : a.offsetWidth + 1 < s ? a.offsetWidth + 1 : s;
          d || (a.style.width = `${n - 2 * B}px`, o = a.offsetHeight + 1);
          let c = i();
          switch (e.tooltip.position) {
            case PositionEnum.ABOVE:
            case PositionEnum.BELOW:
              {
                e.tooltip.position === PositionEnum.ABOVE ? c.y -= a.offsetHeight + j : c.y += j;
                c.x -= a.offsetWidth / 2;
                let t = n / 2 - 2 * B;
                e.tooltip.tipAlign === Alignment.RIGHT ? c.x -= t : e.tooltip.tipAlign === Alignment.LEFT && (c.x += t);
                c.x = Math.max(c.x, U);
                c.y = Math.max(c.y, U);
                let r = c.x + n;
                let i = window.innerWidth - U;
                r > i && (c.x = i - n);
                break;
              }
            case PositionEnum.RIGHT:
              c.x += j;
              c.y -= o / 2;
              c.x = Math.max(c.x, U);
              c.y = Math.max(c.y, U);
              break;
            case PositionEnum.LEFT:
              c.x -= j + n;
              c.y -= o / 2;
              c.x = Math.max(c.x, U);
              c.y = Math.max(c.y, U);
          }
          r() && e.tooltip.position === PositionEnum.RIGHT && (c.y = V);
          t.style.cssText = `left: ${0 | c.x}px; top: ${0 | c.y}px; max-width: ${d ? n : s}px`;
          t.style.width = a.style.width;
          a.remove();
        }
      },
      'data-is-the-tooltip': !0,
      'dir': 'auto',
      'children': (() => {
        let t = e.tooltip;
        if (!t.target) return jsx('div', {});
        let i = t.maxLines !== -1;
        let o = u()(Qq, {
          [kb]: t.textAlign === 'left',
          [pG]: t.textAlign === 'right',
          [mG]: t.textAlign === 'inline',
          [IC]: i
        });
        let l = u()({
          [IC]: i
        });
        let d = {
          WebkitLineClamp: i ? t.maxLines : void 0
        };
        switch (t.target.kind) {
          case ElementTypeEnum.TEXT:
            {
              let e = s(t.target);
              if (e) {
                return jsxs('span', {
                  className: GQ,
                  children: [jsx('span', {
                    className: l,
                    style: d,
                    children: t.target.text
                  }), jsx(_$$S, {
                    shortcut: e,
                    className: LE
                  })]
                });
              }
              return jsxs('span', {
                className: o,
                style: d,
                children: [jsx('p', {
                  children: t.target.text
                }), t.target.subtext && jsx('p', {
                  className: W$,
                  children: t.target.subtext
                })]
              });
            }
          case ElementTypeEnum.KEY:
            {
              let {
                target
              } = t;
              if (r()) {
                return jsx(_$$x, {
                  tooltipKey: target.key
                });
              }
              let a = formatI18nMessage(camelToKebab(t.target.key));
              let s = c1(e.keyboardShortcuts, camelToKebab(t.target.key));
              if (s) {
                return jsxs('span', {
                  className: GQ,
                  children: [jsx('span', {
                    className: l,
                    style: d,
                    children: a
                  }), jsx(_$$S, {
                    shortcut: s,
                    className: LE
                  })]
                });
              }
              return jsx('span', {
                className: o,
                style: d,
                children: a
              });
            }
          case ElementTypeEnum.ELEMENT:
            return a(t.target);
        }
      })()
    }, _)]
  });
}
export function $$K5(e) {
  let t = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  let r = useSelector(e => e.tooltip);
  return jsx(W, {
    keyboardShortcuts: t,
    tooltip: r,
    enableTracking: e.enableTracking
  });
}
export function $$Y4(e, t, r, n) {
  let i;
  let s = getFeatureFlags().fpl_hide_tooltip_aria_expanded;
  t?.selectedView && t.selectedView.view === 'fullscreen' && (i = t.selectedView.editorType);
  let o = i === FEditorType.Whiteboard || i === FEditorType.Cooper ? 500 : 1e3;
  if (e.hasAttribute('data-tooltip-show-on-target-only') && n != null && n !== e) return null;
  let d = e.getAttribute('data-tooltip-proxy-element-id');
  if (d) {
    let t = document.getElementById(d);
    t && (e = t);
  }
  if (e.getAttribute('data-is-the-tooltip')) {
    return t?.tooltip ? {
      target: t.tooltip.target,
      position: t.tooltip.position,
      tipAlign: t.tooltip.tipAlign,
      targetRect: t.tooltip.targetRect,
      interactive: t.tooltip.interactive
    } : null;
  }
  let c = (e, t) => e ? ~~e : t;
  let u = !!e.getAttribute('data-tooltip-show-immediately');
  let p = !!e.getAttribute('data-tooltip-hide-immediately');
  let h = !!e.getAttribute('data-tooltip-show-above');
  let m = !!e.getAttribute('data-tooltip-show-below');
  let g = c(e.getAttribute('data-tooltip-timeout-delay'), o);
  let f = !!e.getAttribute('data-tooltip-interactive');
  let E = !!e.getAttribute('data-tooltip-light-mode');
  let y = !!e.getAttribute('data-tooltip-show-left');
  let b = !!e.getAttribute('data-tooltip-show-right');
  let T = !!e.getAttribute('data-tooltip-ignore-mouse');
  let I = c(e.getAttribute('data-tooltip-max-width'), 180);
  let S = c(e.getAttribute('data-tooltip-max-lines'), -1);
  let v = c(e.getAttribute('data-tooltip-offset-x'), 0);
  let A = c(e.getAttribute('data-tooltip-offset-y'), 0);
  let x = !!e.getAttribute('data-tooltip-text-left');
  let C = !!e.getAttribute('data-tooltip-text-right');
  let O = !!e.getAttribute('data-tooltip-text-inline');
  let R = C ? 'right' : x ? 'left' : O ? 'inline' : 'center';
  let L = !!e.getAttribute('data-tooltip-tip-align-right');
  let P = !!e.getAttribute('data-tooltip-tip-align-left');
  let D = !!e.getAttribute('data-tooltip-precise');
  let M = e.hasAttribute('data-tooltip-submenu-open') && e.getAttribute('data-tooltip-submenu-open') !== 'false' || e.hasAttribute('aria-expanded') && e.getAttribute('aria-expanded') !== 'false' && s;
  let F = Alignment.CENTER;
  L ? F = Alignment.RIGHT : P && (F = Alignment.LEFT);
  let j = null;
  function U() {
    j === null && (j = D && r ? function (e, t) {
      let r = e.getClientRects();
      let {
        x,
        y
      } = t;
      let a = null;
      let s = null;
      let o = 1 / 0;
      for (let e = 0; e < r.length; e++) {
        let t = r[e];
        if (a === null) {
          a = createRect(t);
        } else if (t.top === a.top && t.bottom === a.bottom) {
          a.left = Math.min(t.left, a.left);
          a.right = Math.max(t.right, a.right);
          a.width += t.width;
        } else {
          if (x >= a.left && x <= a.right && y >= a.top && y <= a.bottom) return a;
          a = createRect(t);
        }
        let l = Math.max(a.left, Math.min(x, a.right));
        let d = Math.max(a.top, Math.min(y, a.bottom));
        let c = Math.sqrt((x - l) ** 2 + (y - d) ** 2);
        c < o && (o = c, s = a);
      }
      return a !== null && x >= a.left && x <= a.right && y >= a.top && y <= a.bottom ? createRect(a) : createRect(s);
    }(e, r) : createRect(e.getBoundingClientRect()), j.left += v, j.right += v, j.bottom += A, j.top += A);
    return j;
  }
  if (t?.dropdownShown || M) {
    let t = e.getAttribute('data-dropdown-tooltip');
    if (t) {
      let r = U();
      let n = PositionEnum.RIGHT;
      m ? n = PositionEnum.BELOW : (y || r.left + r.width > window.innerWidth - 200) && (n = PositionEnum.LEFT);
      return {
        target: (e.getAttribute('data-tooltip-type') ?? KindEnum.LOOKUP) === KindEnum.LOOKUP ? {
          kind: ElementTypeEnum.KEY,
          key: t
        } : {
          kind: ElementTypeEnum.TEXT,
          text: t
        },
        position: n,
        tipAlign: F,
        targetRect: r,
        timeoutDelay: g,
        showImmediately: u,
        hideImmediately: p,
        interactive: f,
        lightMode: E,
        textAlign: R,
        maxWidth: I,
        maxLines: S,
        ignoreMouse: T
      };
    }
  } else {
    let t = e.getAttribute('data-tooltip-type');
    let r = e.getAttribute('data-tooltip');
    let n = e.getAttribute('data-tooltip-subtext');
    let i = c(e.getAttribute('data-tooltip-bottom-flip-margin'), G[t]);
    if (!r) return null;
    let s = U();
    switch (t) {
      case KindEnum.LOOKUP:
        {
          let e = PositionEnum.BELOW;
          y ? e = PositionEnum.LEFT : h || window.innerHeight - s.bottom < i ? e = PositionEnum.ABOVE : b && (e = PositionEnum.RIGHT);
          return {
            target: {
              kind: ElementTypeEnum.KEY,
              key: r
            },
            position: e,
            tipAlign: F,
            targetRect: s,
            timeoutDelay: g,
            showImmediately: u,
            hideImmediately: p,
            interactive: f,
            lightMode: E,
            textAlign: R,
            maxWidth: I,
            maxLines: S,
            ignoreMouse: T
          };
        }
      case KindEnum.TEXT:
        {
          let t = PositionEnum.BELOW;
          y ? t = PositionEnum.LEFT : b ? t = PositionEnum.RIGHT : (h || window.innerHeight - s.bottom < i) && (t = PositionEnum.ABOVE);
          let a = e.getAttribute('data-tooltip-shortcut-key');
          let o = e.getAttribute('data-tooltip-shortcut');
          return {
            target: {
              kind: ElementTypeEnum.TEXT,
              text: r,
              subtext: n || '',
              shortcutKey: a,
              shortcut: o
            },
            position: t,
            tipAlign: F,
            targetRect: s,
            timeoutDelay: g,
            showImmediately: u,
            hideImmediately: p,
            lightMode: E,
            textAlign: R,
            interactive: f,
            maxWidth: I,
            maxLines: S,
            ignoreMouse: T
          };
        }
      case KindEnum.SPECIAL:
        {
          let t = e.getAttribute('data-tooltip');
          debug(Object.values(Position).includes(t) || isTooltipRegistered(t), 'missing/invalid tooltip key');
          let r = {
            kind: ElementTypeEnum.ELEMENT,
            key: t
          };
          if (t === Position.HYPERLINK_POPUP) {
            let n = e.getAttribute('data-tooltip-editor-type');
            let i = e.getAttribute('data-tooltip-url-string');
            let a = e.getAttribute('data-tooltip-can-edit') === 'true';
            let s = e.getAttribute('data-tooltip-entity-key');
            let o = e.getAttribute('data-tooltip-target-ref-key');
            let l = e.getAttribute('data-tooltip-unconstrain-width') === 'true';
            r = {
              kind: ElementTypeEnum.ELEMENT,
              key: t,
              data: {
                editorType: n,
                urlString: i,
                unconstrainWidth: l,
                canEdit: a,
                entityKey: s,
                targetRefKey: o,
                interactive: !0
              }
            };
          } else {
            let n = getTooltipEntry(t);
            n && n.getProps && (r = {
              ...r,
              data: n.getProps(e)
            });
          }
          let n = PositionEnum.BELOW;
          y ? n = PositionEnum.LEFT : b ? n = PositionEnum.RIGHT : (h || window.innerHeight - s.bottom < i) && (n = PositionEnum.ABOVE);
          return {
            target: r,
            position: n,
            tipAlign: F,
            targetRect: s,
            timeoutDelay: g,
            showImmediately: u,
            hideImmediately: p,
            lightMode: E,
            textAlign: R,
            interactive: f,
            maxWidth: I,
            maxLines: S,
            ignoreMouse: T
          };
        }
    }
  }
  return null;
}
function $(e, t) {
  let r = e.target;
  let n = e.target;
  if (!r || r.nodeType !== 1 || document.pointerLockElement) return 'return';
  let i = null;
  let a = e.clientX && e.clientY ? {
    x: e.clientX,
    y: e.clientY
  } : void 0;
  for (; r;) {
    if (i = $$Y4(r, t, a, n)) {
      if (i.ignoreMouse) return 'return';
      break;
    }
    r = r.parentElement;
  }
  return i;
}
export function $$X2(e, t) {
  let r = $(e, t);
  return !!r && r !== 'return' && r.position === t.tooltip.position && !!r.targetRect && compareRects(r.targetRect, t.tooltip.targetRect) && !!r.interactive;
}
function q(e, t) {
  let r;
  let n;
  let i = t.getState();
  let a = i?.selectedView && i.selectedView.view === 'fullscreen';
  let s = $(e, i);
  if (s !== 'return' && (s || (s = function () {
    let e = atomStoreManager.get(HV);
    if (!e) return null;
    let t = fullscreenValue.getViewportInfo();
    let r = scaleRect(t, e.bounds);
    r.y += getThemePx();
    r.x += t.x;
    return {
      target: {
        kind: ElementTypeEnum.TEXT,
        text: e.text
      },
      position: PositionEnum.ABOVE,
      targetRect: {
        top: r.y,
        left: r.x,
        width: r.width,
        height: r.height,
        right: r.x + r.width,
        bottom: r.y + r.height
      }
    };
  }()), !s && a && (s = function () {
    if (!fullscreenValue.isReady()) return null;
    let e = Fullscreen?.getCanvasTooltip();
    if (!e) return null;
    let t = Fullscreen?.getCanvasTooltipMaxWidth();
    let r = Fullscreen?.getCanvasTooltipPosition();
    let n = Fullscreen?.getCanvasTooltipDelay();
    let i = e.bounds;
    return {
      target: {
        kind: ElementTypeEnum.TEXT,
        text: e.text
      },
      position: r ? function (e) {
        switch (e) {
          case Position.BELOW:
            return PositionEnum.BELOW;
          case Position.ABOVE:
            return PositionEnum.ABOVE;
          case Position.LEFT:
            return PositionEnum.LEFT;
          case Position.RIGHT:
            return PositionEnum.RIGHT;
        }
      }(r) : PositionEnum.BELOW,
      targetRect: {
        top: i.y,
        left: i.x,
        width: i.width,
        height: i.height,
        right: i.x + i.width,
        bottom: i.y + i.height
      },
      timeoutDelay: n ?? 1e3,
      maxWidth: t === 0 ? void 0 : t
    };
  }()), i.tooltip)) {
    if (!s) {
      if (i.tooltip.state === StatusEnum.PENDING || i.tooltip.hideImmediately) {
        t.dispatch(hideTooltip());
      } else if (i.tooltip.state === StatusEnum.SHOWING) {
        let e = i.tooltip.hideAfterDelay ?? 300;
        t.dispatch(setTimeoutID({
          timeoutDelay: e
        }));
      }
      return;
    }
    (getFeatureFlags().fpl_tooltip ? (r = s, n = i.tooltip, r.position === n.position && compareRects(r.targetRect, n.targetRect) && function (e, t) {
      if (e === t) return !0;
      if (!e || !t || e.kind !== t.kind) return !1;
      switch (e.kind) {
        case ElementTypeEnum.TEXT:
          return e.text === t.text;
        case ElementTypeEnum.KEY:
        case ElementTypeEnum.ELEMENT:
          return e.key === t.key;
      }
    }(r.target, n.target)) : s.position === i.tooltip.position && compareRects(s.targetRect, i.tooltip.targetRect)) ? i.tooltip.state === StatusEnum.SHOWING && i.tooltip.timeoutID !== null && t.dispatch(clearTimeoutID()) : i.tooltip.state === StatusEnum.SHOWING || s.showImmediately ? t.dispatch(showTooltip({
      target: s.target,
      targetRect: s.targetRect,
      position: s.position,
      tipAlign: s.tipAlign,
      interactive: s.interactive,
      lightMode: s.lightMode,
      textAlign: s.textAlign,
      maxWidth: s.maxWidth,
      maxLines: s.maxLines,
      hideImmediately: s.hideImmediately
    })) : t.dispatch(showTooltipWithDelay({
      target: s.target,
      targetRect: s.targetRect,
      position: s.position,
      tipAlign: s.tipAlign,
      timeoutDelay: s.timeoutDelay || 1e3,
      interactive: s.interactive,
      lightMode: s.lightMode,
      textAlign: s.textAlign,
      maxWidth: s.maxWidth,
      maxLines: s.maxLines,
      hideImmediately: s.hideImmediately
    }));
  }
}
export function $$J3(e) {
  let t = () => {
    let t = e.getState().tooltip;
    return t.state === StatusEnum.SHOWING || t.state === StatusEnum.PENDING;
  };
  document.addEventListener('mousedown', r => {
    t() && !$$X2(r, e.getState()) && e.dispatch(hideTooltip());
  }, !!getFeatureFlags().fpl_tooltip);
  document.addEventListener('mouseleave', () => {
    t() && e.dispatch(hideTooltip());
  });
  document.addEventListener('keydown', r => {
    if (t()) {
      if (getFeatureFlags().fpl_tooltip) {
        let n;
        (n = r.key) === 'Control' || n === 'Shift' || n === 'Alt' || n === 'Meta' || e.dispatch(hideTooltip());
      } else {
        e.dispatch(hideTooltip());
      }
    }
  }, !0);
  getFeatureFlags().fpl_tooltip || document.addEventListener('keyup', () => {
    t() && e.dispatch(hideTooltip());
  }, !0);
  document.addEventListener('wheel', () => {
    t() && e.dispatch(hideTooltip());
  });
  document.addEventListener('pointerlockchange', () => {
    t() && e.dispatch(hideTooltip());
  });
  let r = debounce(t => {
    q(t, e);
  }, 16);
  document.addEventListener('mousemove', e => {
    r(e);
  }, !0);
  getFeatureFlags().fpl_tooltip && document.addEventListener('mouseover', e => {
    r(e);
  }, !0);
  document.addEventListener('focusin', t => {
    q(t, e);
  }, !0);
}
$$z0.displayName = 'TooltipView';
export const $v = $$z0;
export const En = $$H1;
export const aT = $$X2;
export const aZ = $$J3;
export const eP = $$Y4;
export const hG = $$K5;