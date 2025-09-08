import { n as _$$n } from "../905/121869";
import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { connect } from "../vendor/514228";
import { logError } from "../905/714362";
import { tH, H4 } from "../905/751457";
import { popModalStack } from "../905/156213";
import { l$ } from "../905/766303";
import { dN } from "../figma_app/345997";
import { H4 as _$$H, Ud } from "../figma_app/679183";
import { getModal } from "../905/102752";
import { Lu } from "../figma_app/453508";
let h = "app_modal--appModalCachedSubtree--FDJSe";
let g = _$$n;
class f extends Component {
  constructor() {
    super(...arguments);
    this.modalStack = [];
    this.logtimeout = null;
    this.onClose = () => {
      this.props.dispatch(popModalStack());
    };
  }
  componentDidUpdate() {
    this.logtimeout && clearTimeout(this.logtimeout);
    this.logtimeout = setTimeout(() => {
      (function (e) {
        if (e.every(e => A.has(e.modal.type))) return;
        let t = document.querySelectorAll(`.${h}`);
        if (t.length === e.length) for (let i = 0; i < t.length; ++i) {
          let n = t[i].children[0];
          if (!(n instanceof HTMLElement)) continue;
          let r = e[i].modal;
          let a = n.role;
          let o = n.getAttribute("aria-modal");
          if ("dialog" !== a || "true" !== o) {
            if (A.has(r.type)) continue;
            A.add(r.type);
            logError("app_modal", "AppModal rendered a non-modal element", {
              type: r.type,
              showModalsBeneath: !!r.showModalsBeneath,
              optOutOfPrevModal: !!r.optOutOfPrevModal,
              isSubModal: !!r.prevModal
            }, {
              reportAsSentryError: !0
            });
          }
        }
      })(this.modalStack);
    }, 1e3);
  }
  renderModal(e, t, i) {
    if (!e || !t) return null;
    if (!t.isLegacy) return t.render({
      open: i,
      onClose: this.onClose,
      ...e.data
    });
    {
      let e = t.render;
      return jsx(e, {
        open: i,
        ...this.props
      });
    }
  }
  render() {
    if (this.props.currentUserOrgId && dN(this.props.currentUserOrgId, this.props)) return jsx(g, {
      currentOrgId: this.props.currentUserOrgId
    });
    let e = this.props.modalShown;
    if (!e) {
      this.modalStack = [];
      return null;
    }
    if (e.type === Lu) {
      let t = getModal(e.type);
      let i = {
        modal: e,
        cachedSubtree: new _$$H(this.renderModal.bind(this, e, t)),
        registeredModal: t
      };
      this.modalStack = [i];
      return i.cachedSubtree.render({
        isVisible: !0,
        valueArgs: [!0],
        displayAs: "block"
      });
    }
    for (; this.modalStack.length;) {
      let t = this.modalStack[this.modalStack.length - 1].modal;
      if (e === t || e.prevModal === t) break;
      this.modalStack.pop();
    }
    if (e !== this.modalStack[this.modalStack.length - 1]?.modal) {
      let t = getModal(e.type);
      t || logError("app_modal", `No modal registered for type ${e.type}`, {}, {
        reportAsSentryError: !0
      });
      this.modalStack.push({
        modal: e,
        cachedSubtree: new _$$H(this.renderModal.bind(this, e, t)),
        registeredModal: t
      });
    }
    let t = new Set();
    let i = this.modalStack.length - 1;
    for (; i >= 0;) {
      let e = this.modalStack[i];
      if (i === this.modalStack.length - 1) t.add(i);else if (e.registeredModal?.supportsBackgroundVisible) t.add(i);else break;
      if (!e.modal.showModalsBeneath) break;
      i--;
    }
    return this.modalStack.map((e, i) => {
      let r = t.has(i);
      let a = !0 === r || Ud;
      return jsx(tH, {
        boundaryKey: `AppModal${e.modal.type}`,
        fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
        children: e.cachedSubtree.render({
          isVisible: a,
          displayAs: "block",
          valueArgs: [r],
          className: h
        })
      }, e.modal.type);
    });
  }
}
f.displayName = "AppModal";
let $$_0 = connect(l$)(f);
let A = new Set();
export const V = $$_0;