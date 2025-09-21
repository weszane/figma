import classNames from 'classnames';
import { createElement, forwardRef } from 'react';
import { createPortal, findDOMNode } from 'react-dom';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { k as _$$k } from '../905/44647';
import { y as _$$y } from '../905/52479';
import { KeyCodes } from '../905/63728';
import { J as _$$J2 } from '../905/125993';
import { KindEnum } from '../905/129884';
import { Pg } from '../905/149328';
import { e as _$$e } from '../905/149844';
import { W as _$$W } from '../905/187396';
import { Q7 } from '../905/203369';
import { getI18nString } from '../905/303541';
import { UI3ConditionalWrapper } from '../905/341359';
import { s as _$$s } from '../905/403855';
import { l as _$$l } from '../905/479687';
import { Cf, g1, it, UV } from '../905/504727';
import { RecordableDiv } from '../905/511649';
import { hX, km } from '../905/701417';
import { Point } from '../905/736624';
import { KeyboardReceiver } from '../905/826900';
import { hideDropdownAction } from '../905/929976';
import { lQ } from '../905/934246';
import { b as _$$b } from '../905/946806';
import { h as _$$h } from '../905/994594';
import { ms, wv } from '../figma_app/236327';
import { S as _$$S } from '../figma_app/420927';
import { parsePxInt } from '../figma_app/783094';
import { memoizeByArgs } from '../figma_app/815945';
import { LoadingSpinner } from '../figma_app/858013';
import { handleGenericEvent, handleKeyboardEvent, handleMouseEvent, RecordingPureComponent } from '../figma_app/878298';
import { isInteractionOrEvalMode } from '../figma_app/897289';
import { KD } from '../figma_app/975811';
let d = classNames;
let F = 'multilevel_dropdown--name--G0H87 ellipsis--ellipsis--Tjyfa';
let M = 'multilevel_dropdown--rightColumn--NfYz8';
let $$j = 'multilevel_dropdown--rightColumnAfterFixedSideText--jTp46 multilevel_dropdown--rightColumn--NfYz8';
let U = 'multilevel_dropdown--iconContainer--ApRpE';
let B = 'multilevel_dropdown--icon--MPy7s';
let V = 'multilevel_dropdown--displayContents--MF4yS';
let G = new KD();
class z extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.justClickedToOpen = !1;
    this.delayedMount = new _$$W();
    this.onKeyDown = handleKeyboardEvent(this, 'keydown', e => {
      (e.key === 'Enter' || e.key === ' ') && (e.stopPropagation(), e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), this.props.onSelect(e, !0));
    });
    this.onFocus = handleGenericEvent(this, 'focus', e => {
      !this.props.item.showDotDotDotButton && this.props.setActiveOption && this.props.setActiveOption(!1);
    });
    this.onPointerDown = handleMouseEvent(this, 'mousedown', e => {
      this.justClickedToOpen = !1;
    });
    this.onPointerUp = handleMouseEvent(this, 'mouseup', e => {
      if (this.justClickedToOpen) {
        this.justClickedToOpen = !1;
        return;
      }
      this.props.item.showDotDotDotButton && !this.props.isActive && this.props.setActiveOption && this.props.setActiveOption(!0);
      this.props.onSelect(e);
    });
    this.mouseEnterPos = new Point();
    this.onPointerEnter = handleMouseEvent(this, 'mouseenter', e => {
      this.justClickedToOpen && (this.mouseEnterPos = new Point(e.clientX, e.clientY));
      this.props.onMouseEnter && this.props.onMouseEnter(e);
    }, {
      recordMetadata: e => ({
        clientX: e.clientX,
        clientY: e.clientY
      }),
      playbackMetadata: e => e
    });
    this.onPointerLeave = handleMouseEvent(this, 'mouseleave', e => {
      this.props.onMouseLeave && this.props.onMouseLeave(e);
    });
    this.onPointerMove = handleMouseEvent(this, 'mousemove', e => {
      this.justClickedToOpen && this.mouseEnterPos && new Point(e.clientX, e.clientY).distanceTo(this.mouseEnterPos) > 5 && (this.justClickedToOpen = !1);
      this.props.onMouseMove && this.props.onMouseMove(e);
    }, {
      recordMetadata: e => ({
        clientX: e.clientX,
        clientY: e.clientY
      }),
      playbackMetadata: e => e
    });
    this.stopPropagation = e => e.stopPropagation();
    this.preventDefault = e => e.preventDefault();
  }
  componentDidMount() {
    super.componentDidMount();
    this.justClickedToOpen = !0;
    this.delayedMount.scheduleOnce(() => {
      this.justClickedToOpen = !1;
    }, 1e3);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.delayedMount.reset();
  }
}
class H extends z {
  constructor() {
    super(...arguments);
    this.optionRef = null;
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    !e.isActive && this.props.isActive ? this.optionRef?.focus() : e.isActive && !this.props.isActive && this.optionRef?.blur();
  }
  render() {
    let e;
    let t = this.props.item;
    let {
      header
    } = t;
    let r = t.className;
    let a = !!t.children && t.showDotDotDotButton;
    let s = 'multilevel_dropdown--option--RRwcd multilevel_dropdown--optionBase--hPebA dropdown--_optionBase--z-REc text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L';
    t.disabled || header ? s = 'multilevel_dropdown--optionDisabled--yUluY multilevel_dropdown--optionBase--hPebA dropdown--_optionBase--z-REc text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L' : t.visuallyDisabledWithSelection ? s = 'multilevel_dropdown--optionVisuallyDisabledWithSelection--8ty9b multilevel_dropdown--optionDisabled--yUluY multilevel_dropdown--optionBase--hPebA dropdown--_optionBase--z-REc text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L' : this.props.isActive && !a ? (s = t.unsetStrokeOnActiveOption ? 'multilevel_dropdown--optionActiveWithoutStroke---1q1z multilevel_dropdown--optionActive--PfdBl multilevel_dropdown--optionBase--hPebA dropdown--_optionBase--z-REc text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L' : 'multilevel_dropdown--optionActive--PfdBl multilevel_dropdown--optionBase--hPebA dropdown--_optionBase--z-REc text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L', t.activeClassName && ('render' in t ? r && (r += ` ${t.activeClassName}`) : s += ` ${t.activeClassName}`)) : a && (s += ' multilevel_dropdown--dotDotDotRowContainer--BmmzC');
    !this.props.leftIconOffset || this.props.showCheckmarkOnRight || header || !1 === t.alwaysShowCheckMarkOffset || (s += ' multilevel_dropdown--noLeftPadding--KRDRo');
    let o = t.isLocked && !t.isChecked;
    let l = t.isChildChecked || !1 !== t.alwaysShowCheckMarkOffset;
    o || !this.props.leftIconOffset || header || (t.iconType === 'search' ? e = jsx('div', {
      className: U,
      children: jsx(_$$h, {
        className: B
      })
    }) : t.iconType === 'plus' ? e = jsx('div', {
      className: U,
      children: jsx(_$$e, {
        className: B
      })
    }) : t.iconType === 'info' ? e = jsx('div', {
      className: 'multilevel_dropdown--infoIcon--qV2KE multilevel_dropdown--iconContainer--ApRpE',
      children: jsx(_$$b, {
        className: B
      })
    }) : !this.props.showCheckmarkOnRight && l && (e = jsxs('div', {
      className: U,
      children: [t.isChecked && jsx(_$$l, {
        className: B
      }), t.isChildChecked && jsx('div', {
        className: 'multilevel_dropdown--childCheckedIndicator--Ij9Jl'
      })]
    })));
    let c = 'sideText' in t && t.sideText && t.rightJustifySideText;
    let u = t.disableMouseEnter || a;
    let p = header || a && !this.props.isActive;
    return jsxs('div', {
      'ref': e => this.optionRef = e,
      'aria-checked': !!t.isChecked,
      'aria-disabled': !!t.disabled || !!t.header,
      'aria-expanded': t.children ? this.props.isSubmenuOpen ? 'true' : 'false' : void 0,
      'aria-haspopup': t.children ? 'true' : 'false',
      'className': d()(r || '', {
        [s]: !('render' in t),
        'multilevel_dropdown--backgroundSelectColor--VmNPi': this.props.isActive && 'render' in t && t.highlightWhenActive
      }),
      'data-onboarding-key': t['data-onboarding-key'],
      'data-testid': `dropdown-option-${t.displayText}`,
      'dir': 'auto',
      'id': this.props.id,
      'onClick': this.stopPropagation,
      'onFocus': t.allowClickThrough ? void 0 : this.onFocus,
      'onKeyDown': this.onKeyDown,
      'onPointerDown': p ? lQ : this.onPointerDown,
      'onPointerEnter': header || u ? lQ : this.onPointerEnter,
      'onPointerLeave': header ? lQ : this.onPointerLeave,
      'onPointerMove': header ? lQ : this.onPointerMove,
      'onPointerUp': p ? lQ : this.onPointerUp,
      'onTouchEnd': this.preventDefault,
      'role': 'menuitemcheckbox',
      'tabIndex': this.props.isActive && !t.allowClickThrough ? 0 : -1,
      'children': ['render' in t ? t.render() : jsxs(Fragment, {
        children: [e, o && jsx('div', {
          className: U,
          children: jsx(_$$s, {
            className: B
          })
        }), t.icon, t.subText ? jsxs('div', {
          className: d()({
            'multilevel_dropdown--subTextContainer--Yx6bF': !0,
            [t.subTextContainerStyleOverride]: !!t.subTextContainerStyleOverride
          }),
          children: [jsx('div', {
            className: `${F} ${t.displayTextClassName}`,
            children: t.displayText
          }), t.displayTextBadge, jsx('div', {
            className: `multilevel_dropdown--subText--Czx4F multilevel_dropdown--name--G0H87 ellipsis--ellipsis--Tjyfa text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L ${t.subTextClassname || ''}`,
            children: t.subText
          })]
        }) : jsxs(Fragment, {
          children: [t.displayTextIcon, jsx('div', {
            className: c ? '' : `${F} ${t.displayTextClassName}`,
            children: t.displayText
          }), t.displayTextBadge]
        }), t.sideText && jsx('div', {
          className: d()(c ? 'multilevel_dropdown--sideTextFixedRight--pXQKr multilevel_dropdown--sideText--AxsT3 multilevel_dropdown--name--G0H87 ellipsis--ellipsis--Tjyfa text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L' : 'multilevel_dropdown--sideText--AxsT3 multilevel_dropdown--name--G0H87 ellipsis--ellipsis--Tjyfa text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L', t.sideTextClassname),
          children: t.sideText
        }), t.itemBadge, !o && !t.isChecked && !!t.itemBadgeV2 && jsx('div', {
          className: 'multilevel_dropdown--rightColumnBadge--IdQu7 multilevel_dropdown--rightColumn--NfYz8',
          children: t.itemBadgeV2
        }), !o && this.props.showCheckmarkOnRight && t.isChecked && jsx('div', {
          className: c ? $$j : 'multilevel_dropdown--rightColumnCheckmark--fNU4f multilevel_dropdown--rightColumn--NfYz8',
          children: jsx(_$$l, {
            className: B
          })
        }), !o && !t.children && this.props.showCheckmarkOnRight && !t.isChecked && !t.shortcut && t.alternativeRightIconIfNotChecked && jsx('div', {
          className: c ? $$j : M,
          children: t.alternativeRightIconIfNotChecked
        }), !o && !t.children && !this.props.showCheckmarkOnRight && !t.shortcut && t.rightIcon && jsx('div', {
          className: c ? $$j : M,
          children: t.rightIcon
        })]
      }), !!t.children && !('render' in t) && (a ? jsx(RecordableDiv, {
        'className': d()('multilevel_dropdown--hasDotDotDotButton--ifOsI', {
          'multilevel_dropdown--hasDotDotDotButtonActive--XRU9C': this.props.isActive
        }),
        'onPointerDown': this.props.isActive ? void 0 : this.onPointerDown,
        'onPointerUp': this.props.isActive ? void 0 : this.onPointerUp,
        'data-tooltip-type': KindEnum.TEXT,
        'data-dropdown-tooltip': getI18nString('fullscreen.properties_panel.tooltip_moreActions'),
        'data-tooltip-show-below': !0,
        'children': jsx(_$$J2, {
          className: B
        })
      }) : jsx('div', {
        className: d()(c ? $$j : M, 'multilevel_dropdown--hasSubmenuIcon--PWJDs'),
        children: jsx(_$$k, {
          className: B
        })
      })), t.shortcut && jsx(_$$S, {
        shortcut: t.shortcut,
        className: 'multilevel_dropdown--rightColumnShortcut---2GmL multilevel_dropdown--rightColumn--NfYz8 text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L'
      }), t.rightText && jsx('div', {
        className: M,
        children: t.rightText
      }), t.input && jsx('div', {
        className: 'multilevel_dropdown--inputContainer--50x82',
        onPointerEnter: e => {
          e.stopPropagation();
        },
        onPointerUp: e => {
          e.stopPropagation();
        },
        children: jsx(Q7, {
          property: t.input.value,
          style: {
            width: t.input.width ?? 50
          },
          className: 'multilevel_dropdown--input--ZHn1-',
          onChange: t.input.onChange,
          onKeyDown: e => {
            e.key === 'Enter' && e.stopPropagation();
          },
          formatter: G
        })
      })]
    });
  }
}
H.displayName = 'MultilevelDropdownOption';
let Y = ms;
let q = wv;
let $ = parsePxInt(km);
let Z = parsePxInt(hX);
var X = (e => (e[e.RIGHT = 0] = 'RIGHT', e[e.LEFT = 1] = 'LEFT', e[e.OVERLAP = 2] = 'OVERLAP', e))(X || {});
let Q = !1;
let J = [];
let ee = e => {
  J.push(e);
  J.length > 3 && J.shift();
};
let et = !0;
function ei(e) {
  return e.optionHeight ?? (e.separator ? Z : $);
}
function en(e) {
  return e.map(ei).reduce((e, t) => e + t, 0);
}
let er = class e extends RecordingPureComponent {
  constructor(t) {
    super(t);
    this.rootMenuTop = 0;
    this.options = Object.create(null);
    this.dropdownScrollContainerRef = e => {
      this.dropdownScrollContainer = e;
    };
    this.updateWindowHeight = () => {
      this.setState({
        windowHeight: window.innerHeight
      });
    };
    this.getActiveItemAtDepth = e => {
      if (e === 0) {
        let e = this.currentVisibleItems();
        return this.state.activeItem == null ? null : e[this.state.activeItem.index];
      }
      return this.state.activeItem != null && this.state.activeItemSubmenuShown && this.childMenu ? this.childMenu.getActiveItemAtDepth(e - 1) : null;
    };
    this.pathToActivate = null;
    this.setActiveItemPath = e => {
      let t = e[this.props.depth];
      let i = this.findVisibleItemIndexByName(t);
      if (i !== -1) {
        let t = this.currentVisibleItems()[i];
        this.props.depth < e.length - 1 && t.children && (this.pathToActivate = e);
        this.setActiveOption(t, i, !0);
      }
    };
    this.findVisibleItemIndexByName = e => {
      let t = this.currentVisibleItems();
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        if (n && n.displayText === e) return i;
      }
      return -1;
    };
    this.selectNextActiveItem = (e, t, i) => {
      let n = void 0 === t ? 0 : t + 1;
      for (let t = n; t < e.length; t++) {
        let n = e[t];
        if (this.isItemSelectable(n)) {
          this.setActiveOption(n, t, !1, i);
          return;
        }
      }
      i && this.dropdownScrollContainer && this.dropdownScrollContainer.scrollToBottom();
    };
    this.selectPreviousActiveItem = (e, t, i) => {
      for (let n = t - 1; n > -1; n--) {
        let t = e[n];
        if (this.isItemSelectable(t)) {
          this.setActiveOption(t, n, !1, i);
          return;
        }
      }
    };
    this.showSubmenu = (e = !1) => {
      let t = this.currentVisibleItems();
      let i = this.state.activeItem !== null && t[this.state.activeItem.index];
      i && i.children && i.children.length && this.setState({
        activeItemSubmenuShown: !0,
        activeItemSubmenuShouldAutofocus: e
      });
    };
    this.dismissMenu = () => {
      if (this.state.activeItem) {
        let e = this.state.activeItem.index;
        let t = this.currentVisibleItems()[e];
        let i = t ? this.getItemID(t, e) : null;
        t.onDismissSubMenu?.();
        i && document.getElementById(i)?.focus();
      }
      this.setState({
        activeItemSubmenuShown: !1,
        activeItemSubmenuShouldAutofocus: !1
      });
    };
    this.userInput = '';
    this.lastInputAt = 0;
    this.addInputChar = e => {
      let t = String.fromCharCode(e).toLowerCase();
      let i = Date.now();
      this.userInput = i - this.lastInputAt < 1500 ? this.userInput + t : t;
      this.lastInputAt = i;
      let n = null;
      let r = this.currentVisibleItems();
      r.forEach(e => {
        e != null && n === null && e.displayText && e.displayText.toLowerCase().startsWith(this.userInput) && (n = e);
      });
      n !== null && this.setActiveOption(n, r.indexOf(n), !1, !0);
    };
    this.onKeyDownFromFullscreen = e => {
      e.accept();
      this.onKeyDown(e.event);
    };
    this.onKeyDownFromDropdown = e => {
      e.stopPropagation();
      this.onKeyDown(e);
    };
    this.onKeyDown = handleKeyboardEvent(this, 'keydown', e => {
      if (!this.state.activeItemSubmenuShown) {
        this.props.onKeyDown && this.props.onKeyDown(e);
        let t = this.currentVisibleItems();
        let i = this.props.depth > 0;
        let n = null;
        switch (e.keyCode) {
          case KeyCodes.ENTER:
          case KeyCodes.SPACE:
            e.preventDefault();
            (n = this.state.activeItem != null ? t[this.state.activeItem.index] : null) && (n.children ? this.setState({
              activeItemSubmenuShown: !0,
              activeItemSubmenuShouldAutofocus: !0
            }) : (this.props.dispatch(hideDropdownAction()), this.props.onSelectItem(n, e)));
            break;
          case KeyCodes.TAB:
          case KeyCodes.ESCAPE:
            e.preventDefault();
            this.props.onDismissMenu && this.props.onDismissMenu();
            i || this.props.dispatch(hideDropdownAction());
            break;
          case KeyCodes.LEFT_ARROW:
            this.state.submenuPosition === 1 ? this.showSubmenu(!0) : i && this.props.onDismissMenu && this.props.onDismissMenu();
            break;
          case KeyCodes.RIGHT_ARROW:
            this.state.submenuPosition === 1 ? i && this.props.onDismissMenu && this.props.onDismissMenu() : this.showSubmenu(!0);
            break;
          case KeyCodes.DOWN_ARROW:
            if (e.preventDefault(), this.state.activeItem === null) {
              let e = t[0];
              this.isItemSelectable(e) ? this.setActiveOption(e, 0) : this.selectNextActiveItem(t, 0, !0);
            } else {
              this.state.activeItem.index < t.length - 1 && this.selectNextActiveItem(t, this.state.activeItem.index, !0);
            }
            break;
          case KeyCodes.UP_ARROW:
            if (e.preventDefault(), this.state.activeItem === null) {
              let e = t.length - 1;
              let i = t[e];
              this.isItemSelectable(i) ? this.setActiveOption(i, e) : this.selectPreviousActiveItem(t, e, !0);
              return;
            }
            this.state.activeItem.index > 0 && this.selectPreviousActiveItem(t, this.state.activeItem.index, !0);
            this.dropdownScrollContainer && this.dropdownScrollContainer.scrollToTop();
            break;
          default:
            (!document.activeElement || document.activeElement.tagName != 'INPUT' || document.activeElement.classList.contains('focus-target')) && this.addInputChar(e.keyCode);
        }
      }
    });
    this.setActiveOption = (e, t, i, n) => {
      let r = this.options[t];
      let s = findDOMNode(r);
      if (s) {
        if (n && this.dropdownScrollContainer) {
          let e = s.offsetTop;
          let t = s.offsetHeight;
          let i = this.dropdownScrollContainer.getScrollTop();
          let n = this.dropdownScrollContainer.getScrollBottom();
          e + t > n ? this.dropdownScrollContainer.scrollBy(e + t + 8 - n) : e < i && this.dropdownScrollContainer.scrollBy(e - i - 8);
          et = !1;
        }
        this.setState({
          activeItem: {
            index: t,
            clientRect: s.getBoundingClientRect()
          },
          activeItemSubmenuShown: !!(e.children && i),
          activeItemSubmenuShouldAutofocus: !1
        });
      }
    };
    this.onMouseEnterItem = (e, t) => i => {
      if (e.preventSelectOnMouseEnter) {
        e.onMouseEnter?.();
        return;
      }
      if (!et) {
        et = !0;
        return;
      }
      !isInteractionOrEvalMode() && Q ? setTimeout(() => {
        let i = this.options[t];
        let n = findDOMNode(i);
        if (n && J.length > 0) {
          let i = n.getBoundingClientRect();
          let r = J.slice(-1)[0];
          r.x >= i.left && r.x <= i.right && r.y >= i.top && r.y <= i.bottom && this.setActiveOption(e, t, !0);
        }
      }, 200) : this.setActiveOption(e, t, !0);
      e.onMouseEnter && e.onMouseEnter();
    };
    this.onMouseMoveItem = e => {
      ee(new Point(e.clientX, e.clientY));
    };
    this.onMouseLeaveMenu = e => {
      this.state.activeItemSubmenuShown || this.setState({
        activeItem: null
      });
      this.props.onMouseLeaveMenu?.(e);
    };
    this.onMouseEnterMenu = e => {
      this.props.onMouseEnterMenu?.(e);
    };
    this.onMouseLeaveItem = e => t => {
      if (this.state.activeItemSubmenuShown) {
        let e = this.childMenu?.getSubmenuDropdownEl();
        if (e) {
          let i = e.getBoundingClientRect();
          if (i && J.length > 0) {
            let e = this.state.submenuPosition === 1 ? i.right : i.left;
            let n = new Point(e, i.top);
            let r = new Point(e, i.bottom);
            let a = J[0];
            let s = new Point(t.clientX, t.clientY);
            if (!isInteractionOrEvalMode() && _$$y(s, [a, n, r])) {
              Q = !0;
              return;
            }
          }
        }
      }
      Q = !1;
      e.onMouseExit && e.onMouseExit();
    };
    this.onSelectItem = (e, t) => (i, n) => {
      i.stopPropagation();
      e.disabled || e.children && !e.callbackOnClickWithChildren || e.visuallyDisabledWithSelection ? !e.disabled && !e.visuallyDisabledWithSelection && e.children?.length != null && e.children?.length > 0 && (e.showDotDotDotButton && this.isActiveItem(e, t) && this.state.activeItemSubmenuShown ? this.setState({
        activeItem: null,
        activeItemSubmenuShown: !1
      }) : this.setState({
        activeItemSubmenuShown: !0,
        activeItemSubmenuShouldAutofocus: !!n
      })) : (e.preventDismissOnSelected ? e.allowClickThrough && this.state.activeItemSubmenuShown && this.setState({
        activeItem: null,
        activeItemSubmenuShown: !1
      }) : this.props.dispatch(hideDropdownAction()), this.props.onSelectItem(e, i), !e.preventDismissOnSelected && this.props.onDropdownHidden && this.props.onDropdownHidden());
      e.disabled || e.visuallyDisabledWithSelection?.();
    };
    this.onClickMenu = e => {
      e.stopPropagation();
    };
    this.onMouseOverMenu = e => {
      this.setState({
        activeItem: null,
        activeItemSubmenuShown: !1,
        activeItemSubmenuShouldAutofocus: !1
      });
    };
    this.isItemSelectable = e => e && !e.disabled && !e.separator;
    this.optionRef = (e, t) => {
      this.options[e] = t;
    };
    this.childMenuRef = e => {
      this.childMenu = e;
      this.pathToActivate = null;
    };
    this.submenuDropdownEl = null;
    this.submenuDropdownRef = e => {
      e ? (this.submenuDropdownEl = findDOMNode(e), this.updateSubmenuPosition()) : this.submenuDropdownEl = null;
    };
    this.getSubmenuDropdownEl = () => this.submenuDropdownEl;
    this.isActiveItem = (e, t) => !!(this.state.activeItem && t === this.state.activeItem.index) || !!e.isActive;
    this.getItemID = (e, t) => `${this.props.recordingKey}-${e.recordingKey}-${t}`;
    this.renderItem = (e, t, i) => {
      if (!e) return;
      if (e.separator) return jsx(q, {}, t);
      let r = this.props.parentKey ? `${this.props.parentKey}.` : '';
      let a = `${this.props.recordingKey}.${r}${e.recordingKey}`;
      return jsx(H, {
        ref: e => this.optionRef(t, e),
        id: this.getItemID(e, t),
        isActive: this.isActiveItem(e, t),
        isSubmenuOpen: this.state.activeItemSubmenuShown && this.isActiveItem(e, t),
        item: e,
        leftIconOffset: i,
        onMouseEnter: this.onMouseEnterItem(e, t),
        onMouseLeave: this.onMouseLeaveItem(e),
        onMouseMove: this.onMouseMoveItem,
        onSelect: this.onSelectItem(e, t),
        recordingKey: a,
        setActiveOption: i => this.setActiveOption(e, t, i),
        showCheckmarkOnRight: this.props.showCheckmarkOnRight
      }, t);
    };
    this.filterHiddenItems = e => {
      let t = [...e];
      for (let e = 0; e < t.length;) t[e] == null || t[e].hidden || t[e].children && !this.filterHiddenItems(t[e].children).length ? t.splice(e, 1) : ++e;
      for (let e = 1; e < t.length;) t[e].separator && t[e - 1].separator ? t.splice(e, 1) : ++e;
      t.length > 0 && t[0].separator && (t = t.slice(1));
      t.length > 0 && t.slice(-1)[0].separator && (t = t.slice(0, -1));
      return t;
    };
    this.getDropdownMaxHeight = e => e - (this.props.depth === 0 && this.props.children != null ? this.rootMenuChildContentBottom : 64) - this.props.toolbarHeightAndMargin - 8;
    this.renderOptions = e => {
      let t = e.some(e => e && (e.isChecked || e.isChildChecked || e.alwaysShowCheckMarkOffset || this.props.alwaysShowCheckMarkOffset));
      return e.map((e, i) => this.renderItem(e, i, t));
    };
    this.visibleItemsForMaxHeight = memoizeByArgs(e => this.filterHiddenItems(e));
    this.currentVisibleItems = () => this.visibleItemsForMaxHeight(this.props.items);
    this.updateSubmenuPosition = () => {
      let e;
      let t = this.props.parentRect;
      let i = this.props.rootAndSubmenuMinWidth ?? 200;
      let n = this.submenuDropdownEl?.clientWidth || i;
      let r = t && t.right + n + 8 > window.innerWidth;
      let a = t && t.left - n - 8 < 0;
      e = !a && (this.props.openSubmenuToTheLeft || r) ? 1 : r && a ? 2 : 0;
      this.setState({
        submenuPosition: e
      });
    };
    this.renderAsSubmenu = () => {
      let e = {};
      this.state.submenuPosition === 1 ? e.right = document.body.clientWidth - this.props.parentRect.left : this.state.submenuPosition === 0 ? e.left = this.props.parentRect.right : e.right = 8;
      let t = this.state.submenuPosition === 1;
      let i = this.currentVisibleItems();
      let r = this.submenuDropdownEl?.clientHeight ?? en(i) + 16;
      let a = this.props.toolbarHeightAndMargin;
      let s = this.props.parentRect.top - 8;
      switch (s + r < window.innerHeight - a ? e.top = s : e.top = Math.max(56, this.props.parentRect.bottom - r + 8), this.props.rootAndSubmenuMaxWidth && (e.maxWidth = this.props.rootAndSubmenuMaxWidth), e.minWidth = this.props.rootAndSubmenuMinWidth ?? 200, this.props.type) {
        case it.LIGHT:
          e.backgroundColor = 'white';
          break;
        case it.MATCH_BACKGROUND:
          e.backgroundColor = 'var(--color-bg, white)';
      }
      let o = jsx(g1, {
        maxDropdownHeight: this.getDropdownMaxHeight,
        dropdownChildrenHeight: en(i),
        autoHeight: this.props.autoHeight,
        ref: this.dropdownScrollContainerRef,
        children: this.renderOptions(i)
      });
      return jsxs('div', {
        className: V,
        onMouseLeave: this.onMouseLeaveMenu,
        onMouseEnter: this.onMouseEnterMenu,
        children: [jsx(Y, {
          'ref': this.submenuDropdownRef,
          'aria-labelledby': this.props['aria-labelledby'],
          'className': d()('multilevel_dropdown--submenu---sSa9', this.props.subMenuClassName),
          'data-testid': this.props.dataTestId,
          'onClick': this.onClickMenu,
          'onFocus': this.props.onFocus,
          'onKeyDown': this.onKeyDownFromDropdown,
          'preventEventCapture': this.props.preventEventCapture,
          'style': e,
          'children': o
        }, `submenu-${this.props.depth}-${i[0]?.displayText}`), this.renderChildMenu(i, t)]
      });
    };
    this.contentEl = null;
    this.contentRef = e => {
      this.contentEl = e;
    };
    this.onFocus = e => {
      e.stopPropagation();
      this.props.onFocus && this.props.onFocus(e);
    };
    this.renderAsRootMenu = () => {
      let e = this.state.submenuPosition === 1;
      let t = this.currentVisibleItems();
      return jsxs(Fragment, {
        children: [jsxs(Cf, {
          'aria-labelledby': this.props['aria-labelledby'],
          'autoHeight': this.props.autoHeight,
          'autofocusPrevOnDismount': this.props.autofocusPrevOnDismount,
          'className': this.props.className || 'multilevel_dropdown--pointingDropdown--0mYYM',
          'contentRef': this.contentRef,
          'dataTestId': this.props.dataTestId,
          'disableDropdownScrollContainer': this.props.disableDropdownScrollContainer,
          'displayAboveTarget': this.props.displayAboveTarget,
          'displayOverTarget': !!this.props.displayOverTarget,
          'hidePointWhenContentOffScreen': this.props.hidePointWhenContentOffScreen,
          'id': this.props.id,
          'lean': this.props.lean,
          'leanPadding': this.props.leanPadding,
          'maxHeight': this.getDropdownMaxHeight(this.state.windowHeight),
          'maxWidth': this.props.rootAndSubmenuMaxWidth,
          'minBottomMargin': this.props.minBottomMargin ?? this.props.toolbarHeightAndMargin,
          'minLeftMargin': this.props.minLeftMargin,
          'minWidth': this.props.minWidth,
          'onFocus': this.onFocus,
          'onKeyDown': this.onKeyDownFromDropdown,
          'onboardingKey': this.props.onboardingKey,
          'preventEventCapture': this.props.preventEventCapture,
          'preventZoom': this.props.preventZoom,
          'propagateCloseClick': this.props.propagateCloseClick,
          'scrollContainerRef': this.dropdownScrollContainerRef,
          'showPoint': this.props.showPoint,
          'targetRect': this.props.parentRect,
          ...UV(this.props),
          'children': [this.props.children != null && jsx('div', {
            onClick: this.onClickMenu,
            onMouseOver: this.onMouseOverMenu,
            ref: this.rootMenuChildContainerRef,
            children: this.props.children
          }, 'child-container'), jsx('div', {
            onMouseLeave: this.onMouseLeaveMenu,
            onMouseEnter: this.onMouseEnterMenu,
            children: this.renderOptions(t)
          })]
        }, 'pointing'), this.renderChildMenu(t, e)]
      });
    };
    this.rootMenuChildContentBottom = 0;
    this.rootMenuChildContainerRef = e => {
      e && requestAnimationFrame(() => {
        this.rootMenuChildContentBottom = e.getBoundingClientRect().bottom;
        this.forceUpdate();
      });
    };
    this.renderChildMenu = (t, i) => {
      if (this.state.activeItemSubmenuShown && this.state.activeItem && t[this.state.activeItem.index]) {
        let n = t[this.state.activeItem.index];
        let a = n.recordingKey;
        let s = n.children || [];
        return createElement(e, {
          ...this.props,
          'key': `${this.props.depth}-${this.state.activeItem.index}`,
          'ref': this.childMenuRef,
          'activatePathOnMount': this.props.activatePathOnMount || this.pathToActivate || void 0,
          'aria-labelledby': this.getItemID(n, this.state.activeItem.index),
          'depth': this.props.depth + 1,
          'items': s,
          'onDismissMenu': this.dismissMenu,
          'onMouseLeaveMenu': n.onMouseLeaveSubMenu,
          'openSubmenuToTheLeft': i,
          'parentKey': a,
          'parentRect': this.state.activeItem.clientRect,
          'rootMenuTop': this.rootMenuTop,
          'shouldAutofocusSubmenu': this.state.activeItemSubmenuShouldAutofocus
        });
      }
    };
    this.state = {
      activeItem: null,
      activeItemSubmenuShown: !1,
      submenuPosition: t.openSubmenuToTheLeft ? 1 : 0,
      activeItemSubmenuShouldAutofocus: !1,
      windowHeight: window.innerHeight
    };
    this.props.depth === 0 ? this.rootMenuTop = this.props.parentRect ? this.props.parentRect.top + this.props.parentRect.height : 0 : this.props.rootMenuTop != null && (this.rootMenuTop = this.props.rootMenuTop);
  }
  componentDidMount() {
    super.componentDidMount();
    document.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('resize', this.updateWindowHeight);
    let e = this.currentVisibleItems();
    if (this.props.onMount && this.props.onMount(), this.props.focusOnMount && this.contentEl?.focus(), this.props.activatePathOnMount) {
      let t = this.props.activatePathOnMount[this.props.depth];
      let i = this.findVisibleItemIndexByName(t);
      i !== -1 && this.setActiveOption(e[i], i, !0);
    } else {
      this.props.depth > 0 && this.props.shouldAutofocusSubmenu ? this.submenuDropdownEl && this.submenuDropdownEl.focus() : this.props.depth === 0 && this.contentEl?.focus();
    }
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.props.items && e.items && this.props.items.length === e.items.length || this.setState({
      activeItemSubmenuShown: !1,
      activeItemSubmenuShouldAutofocus: !1
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    document.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('resize', this.updateWindowHeight);
    this.props.depth === 0 && (J.length = 0, Q = !1);
  }
  render() {
    let e = null;
    if (this.props.showLoadingSpinner) {
      e = jsx(Cf, {
        targetRect: this.props.parentRect,
        showPoint: this.props.showPoint,
        onFocus: this.props.onFocus,
        textAlign: 'center',
        propagateCloseClick: !0,
        children: jsx(LoadingSpinner, {})
      });
    } else if (this.props.items && this.props.items.length !== 0) {
      let t = this.props.depth > 0;
      e = jsx(KeyboardReceiver, {
        name: this.props.recordingKey || '',
        handleKeyDown: this.onKeyDownFromFullscreen,
        focusOnMount: !0,
        className: V,
        children: t ? this.renderAsSubmenu() : this.renderAsRootMenu()
      });
    } else {
      console.warn('MultilevelDropdownInner rendered directly with no items, autofocus will not work');
    }
    return this.props.shouldUsePortal ? (e = jsx(UI3ConditionalWrapper, {
      children: e
    }), createPortal(e, document.body)) : e;
  }
};
er.displayName = 'MultilevelDropdown';
export let $$ea0 = forwardRef((e, t) => {
  let i = Pg();
  return e.items.length === 0 || e.items.every(e => e.separator) ? null : jsx(er, {
    ...e,
    toolbarHeightAndMargin: i,
    depth: e.depth ?? 0,
    ref: t
  });
});
export const j = $$ea0;