import { Point } from "../905/736624";
import { U6 } from "../figma_app/591738";
import { centeredValue } from "../figma_app/62612";
import { Sw } from "../figma_app/805373";
import { G } from "../905/799129";
import { M } from "../905/84612";
import { XC } from "../905/512783";
import { c4 } from "../figma_app/70421";
import { u_, v2, my, Nz, v3, A3, IS, gy, rX, hO, pd, ZR, Di } from "../905/428481";
export let $$p1 = 64;
function m(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  return t;
}
class h extends HTMLElement {
  constructor() {
    super(...arguments);
    this._lastAvatars = [];
    this._avatars = [];
  }
  connectedCallback() {
    this.classList.add(u_);
    requestAnimationFrame(() => this.render());
  }
  set avatars(e) {
    this._avatars = e.slice(0, 5);
  }
  get avatarElementsById() {
    return Array.from(this.getElementsByTagName("figma-avatar")).map(e => e).reduce((e, t) => (e[t.id] = t, e), {});
  }
  get ghostAvatar() {
    return this.getElementsByClassName(v2)[0];
  }
  render() {
    if (this._lastAvatars !== this._avatars) {
      let e = this.avatarElementsById;
      let t = this._avatars.map(t => {
        let i = M.createAvatarElement(t, e[t.user_id], {
          isInCluster: !0
        });
        i.classList.add(my);
        return i;
      });
      let i = new Set(this._avatars.map(e => e.user_id));
      let n = this.children;
      if (Array.from(n).forEach(e => {
        i.has(e.id) || this.removeChild(e);
      }), t.forEach((e, t) => {
        let i = n[t];
        i?.id !== e.id && (i ? this.insertBefore(e, i) : this.appendChild(e));
      }), t.length > 0 ? this.style.display = "flex" : this.style.display = "none", 1 === t.length) {
        let [e] = t;
        let i = e.cloneNode(!0);
        i.classList.add(v2);
        this.prepend(i);
      } else {
        let e = this.ghostAvatar;
        e && this.removeChild(e);
      }
      this._lastAvatars = this._avatars;
    }
  }
}
h.desiredElementName = "figma-cluster-avatars";
h.styles = [M.styles, Nz];
"customElements" in window && !customElements.get(h.desiredElementName) && customElements.define(h.desiredElementName, h);
let g = class e extends HTMLElement {
  constructor() {
    super(...arguments);
    this._avatars = [];
    this._creationChangeType = null;
    this._pinnedToFileIcon = null;
  }
  get pinnedThreadToFileIndicator() {
    return this.getElementsByClassName(v3)[0];
  }
  get avatarsContainer() {
    return this.getElementsByTagName(h.desiredElementName)[0];
  }
  set avatars(e) {
    this._avatars = e;
  }
  set creationChangeType(e) {
    this._creationChangeType = e;
  }
  onRemove() {}
  static getSortedAvatars(e) {
    return [...e.values()].sort((e, t) => e.num_unread_comments > 0 && t.num_unread_comments > 0 ? e.num_comments > t.num_comments ? -1 : 1 : e.num_unread_comments > 0 ? -1 : t.num_unread_comments > 0 ? 1 : e.num_comments > t.num_comments ? -1 : 1).map(e => ({
      user_id: e.avatar_user_id,
      initial: e.avatar_user_handle[0],
      url: Sw(e.avatar_url)
    }));
  }
  set avatarsMap(t) {
    this.avatars = t ? e.getSortedAvatars(t) : [];
  }
  set minimized(e) {
    e ? this.setAttribute("minimized", "true") : this.removeAttribute("minimized");
  }
  set pinnedToFile(e) {
    e ? this.setAttribute("pinned-to-file", "true") : this.removeAttribute("pinned-to-file");
  }
  set unread(e) {
    e ? this.setAttribute("unread", "true") : this.removeAttribute("unread");
  }
  set dimmed(e) {
    e ? this.setAttribute("dimmed", "true") : this.removeAttribute("dimmed");
  }
  set emphasized(e) {
    e ? this.setAttribute("emphasized", "true") : this.removeAttribute("emphasized");
  }
  get clusterCountElement() {
    return this.getElementsByClassName(A3)[0];
  }
  get avatarCluster() {
    return this.getElementsByClassName(IS)[0];
  }
  set threadCount(e) {
    this.setAttribute("thread-count", `${e}`);
  }
  static get observedAttributes() {
    return ["unread", "dimmed", "emphasized", "thread-count", "pinned-to-file", "minimized"];
  }
  setClassOn(e, t, i, n, r) {
    i === t && (n ? e.classList.add(r) : e.classList.remove(r));
  }
  attributeChangedCallback(e, t, i) {
    if (this.isConnected && (this.setClassOn(this, "unread", e, i, gy), this.setClassOn(this, "dimmed", e, i, rX), this.setClassOn(this, "emphasized", e, i, hO), U6() && (this.setClassOn(this, "minimized", e, i, pd), this.setClassOn(this.pinnedThreadToFileIndicator, "pinned-to-file", e, i, ZR)), "thread-count" === e)) {
      let e = this.clusterCountElement;
      let t = this.avatarCluster;
      if (!e || !t) return;
      let n = e.hasAttribute("display-thread-count");
      e.setAttribute("display-thread-count", i || "0");
      (n || "viewport_visible" !== this._creationChangeType) && this.animateClusterThreadCount();
    }
  }
  connectedCallback() {
    this.classList.add(Di);
    let t = e.template.content.cloneNode(!0);
    this.append(t);
    e.observedAttributes.forEach(e => {
      this.attributeChangedCallback(e, null, this.getAttribute(e) || null);
    });
    requestAnimationFrame(() => this.render());
  }
  animateDirectionally(e, t, i) {
    if (!e) return Promise.resolve();
    let r = {
      x: this.clientWidth / 2,
      y: this.clientHeight / 2
    };
    let a = Point.subtract(e, r);
    let s = `translate3d(${a.x}px, ${a.y}px, 0px) scale(0.2)`;
    return G(this, [{
      offset: t,
      transform: s
    }], {
      duration: 200
    }).then(() => {
      i && i();
    });
  }
  animateAggregationChange(e) {
    let {
      position
    } = e;
    return "join" === e.type ? (this.animateDirectionally(position, 1), Promise.resolve()) : (this.animateDirectionally(position, 0), this.animateClusterThreadCount());
  }
  animateClusterThreadCount() {
    let e = this.clusterCountElement;
    return e ? (e.style.transition = "none", e.style.opacity = "1", G(e, [], {
      duration: 1e3
    }).then(() => {
      e.style.removeProperty("opacity");
      e.style.removeProperty("transition");
    })) : Promise.resolve();
  }
  render() {
    this.isConnected && (this.avatarsContainer.avatars = this._avatars.slice(0, 5), this.avatarsContainer.render(), U6() && this.addIconWhenPinnedToFileIfAbsent());
  }
  positionClusterElement(e, t) {
    let i = t.zoomScale;
    let n = (i - 1) * e.x - $$p1 / 2;
    let r = (i - 1) * e.y - $$p1 / 2;
    this.style.setProperty("transform", `translate3d(${e.x + n}px, ${e.y + r}px, 0px) scale(var(--scale))`);
  }
  static getClusterViewportRect(e, t) {
    if (1 === e.threads.length) {
      let i = e.threads[0];
      let n = centeredValue(i.canvasPosition.x, 0, t.zoomScale, 1) - t.offsetX * t.zoomScale + t.width / 2;
      let r = centeredValue(i.canvasPosition.y, 0, t.zoomScale, 1) - t.offsetY * t.zoomScale + t.height / 2;
      let s = c4(i.comments);
      let o = XC.getPinSize(s.length);
      return {
        x: n,
        y: r - o.height,
        ...o
      };
    }
    return {
      x: centeredValue(e.x, 0, t.zoomScale, 1) - t.offsetX * t.zoomScale + t.width / 2 - $$p1 / 2,
      y: centeredValue(e.y, 0, t.zoomScale, 1) - t.offsetY * t.zoomScale + t.height / 2 - $$p1 / 2,
      height: $$p1,
      width: $$p1
    };
  }
  addIconWhenPinnedToFileIfAbsent() {
    this._pinnedToFileIcon || (this._pinnedToFileIcon = e.pinnedToFileIcon.content.cloneNode(!0), this.pinnedThreadToFileIndicator.prepend(this._pinnedToFileIcon));
  }
};
g.desiredElementName = "figma-comment-cluster";
g.pinnedToFileIcon = m(`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="8" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8282 8.00021L13.4799 6.40922L14.3638 5.87889L13.6349 5.15002L10.85 2.36511L10.1211 1.63623L9.59082 2.52012L7.9999 5.17169L4.81792 6.23235L3.75726 6.5859L4.54783 7.37647L6.23213 9.06078L3.14622 12.1467L2.79266 12.5002L3.49977 13.2074L3.85332 12.8538L6.93924 9.76788L8.62354 11.4522L9.41411 12.2428L9.76765 11.1821L10.8282 8.00021ZM8.97708 10.3915L9.87954 7.684L9.99652 7.33305L9.99646 7.33309L9.87948 7.68404L8.97704 10.3915L8.97708 10.3915ZM12.751 5.68039L12.751 5.68035L10.3197 3.24899L10.3196 3.24906L12.751 5.68039ZM8.31613 6.12037L8.66702 6.00341L8.66701 6.00343L8.31606 6.12041L5.6085 7.02293L5.60849 7.02292L8.31613 6.12037Z" fill="#007BE5"/>
    </svg>
    `);
g.template = m(`
    <div class="${IS}" data-testid="avatar-cluster" tabindex="0">
        <div class="${v3}" data-testid="cluster-pinned-to-file-indicator"></div>
        <figma-cluster-avatars></figma-cluster-avatars>
        <div class="${A3}" data-threadCount="0" />
    </div>
    `);
g.styles = [...h.styles];
export let $$f0 = g;
"customElements" in window && !customElements.get($$f0.desiredElementName) && customElements.define($$f0.desiredElementName, $$f0);
export const ip = $$f0;
export const u5 = $$p1;