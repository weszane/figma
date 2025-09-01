import n from "../vendor/197638";
import { $L, us, Xx } from "../figma_app/136698";
import { Pp } from "../905/428481";
import { K_, my, H, Nz, e7, dQ, q_, Ws, OF, c_, mp, u_ } from "../905/540111";
var r = n;
function l(e) {
  let t = document.createElement("template");
  t.innerHTML = r().sanitize(e);
  return t;
}
let d = class e extends HTMLElement {
  constructor() {
    super(...arguments);
    this._lastClassName = void 0;
  }
  static createAvatarElement(e, t, i) {
    let n = t || document.createElement("figma-avatar");
    n.initial = e.initial;
    n.id = e.user_id;
    n.src = e.url || "";
    i?.isInCluster && n.classList.add(K_);
    return n;
  }
  createErrorAvatar() {
    let e = document.createElement("div");
    e.classList.add(my);
    return e;
  }
  get avatarImg() {
    return this.getElementsByTagName("img")[0];
  }
  get fallbackSpan() {
    return this.getElementsByTagName("span")[0];
  }
  set src(e) {
    e ? this.setAttribute("src", e) : this.removeAttribute("src");
  }
  set initial(e) {
    e ? this.setAttribute("initial", e) : this.removeAttribute("initial");
  }
  set className(e) {
    e ? this.setAttribute("className", e) : this.removeAttribute("className");
  }
  connectedCallback() {
    this.classList.add(H);
    let t = e.template.content.cloneNode(!0);
    this.append(t);
    e.observedAttributes.forEach(e => {
      this.attributeChangedCallback(e, "", this.getAttribute(e) || "");
    });
  }
  static get observedAttributes() {
    return ["src", "initial", "id", "className"];
  }
  attributeChangedCallback(e, t, i) {
    if (t === i || !this.isConnected) return;
    let n = {
      src: this.getAttribute("src"),
      initial: this.getAttribute("initial"),
      user_id: this.getAttribute("id") || void 0,
      className: this.getAttribute("className") || void 0,
      [e]: i
    };
    let r = this.avatarImg;
    let s = this.fallbackSpan;
    if (n.src) {
      s.style.display = "none";
      r.style.display = "flex";
      r.src = n.src;
      r.onerror = () => this.replaceChild(this.createErrorAvatar(), this.avatarImg);
    } else {
      s.innerText = n.initial || "?";
      s.style.display = "flex";
      let e = n.backgroundColor || $L(n.user_id, us);
      s.style.backgroundColor = e;
      s.style.color = Xx(e);
      r.style.display = "none";
      r.src = "";
    }
    n.className !== this._lastClassName && (this._lastClassName && (r.classList.remove(this._lastClassName), s.classList.remove(this._lastClassName)), n.className && (r.classList.add(n.className), s.classList.add(n.className)), this._lastClassName = n.className);
  }
};
d.desiredElementName = "figma-avatar";
d.styles = Nz;
d.template = l(`
    <span class="${e7} ${Pp}"></span>
    <img
      class="${my} ${Pp}"
      draggable=false
    ></img>
    `);
let $$c0 = d;
let u = class e extends HTMLElement {
  constructor() {
    super(...arguments);
    this.lastAvatars = [];
  }
  connectedCallback() {
    this.classList.add(dQ);
    let t = e.template.content.cloneNode(!0);
    this.append(t);
    this.renderAvatars(this.lastAvatars);
  }
  get avatarsPrimaryContainer() {
    return this.getElementsByClassName(q_)[0];
  }
  get avatarsSecondaryContainer() {
    return this.getElementsByClassName(Ws)[0];
  }
  get avatarsOverflowContainer() {
    return this.getElementsByClassName(OF)[0];
  }
  get overflowAvatar() {
    return this.avatarsOverflowContainer?.getElementsByTagName("figma-avatar")[0];
  }
  get overflowCount() {
    return this.avatarsOverflowContainer?.getElementsByClassName(c_)[0];
  }
  get clamp() {
    let e = this.getAttribute("clamp");
    if (e) return parseInt(e) || void 0;
  }
  set clamp(e) {
    e ? this.setAttribute("clamp", `${e}`) : this.removeAttribute("clamp");
  }
  static get observedAttributes() {
    return ["clamp"];
  }
  attributeChangedCallback(e, t, i) {
    this.isConnected && t !== i && this.renderAvatars(this.lastAvatars);
  }
  get avatarElements() {
    return Array.from(this.getElementsByTagName("figma-avatar")).map(e => e).reduce((e, t) => (e[t.id] = t, e), {});
  }
  render(e, t, i) {
    let n = t.map(e => $$c0.createAvatarElement(e, i[e.user_id]));
    let r = new Set(t.map(e => e.user_id));
    let a = e.children;
    Array.from(a).forEach(t => {
      r.has(t.id) || e.removeChild(t);
    });
    n.reverse().forEach((t, i) => {
      let n = a[i];
      n?.id !== t.id && (n ? e.insertBefore(t, n) : e.appendChild(t));
    });
    n.length > 0 ? e.style.display = "flex" : e.style.display = "none";
  }
  renderAvatars(e) {
    if (!this.isConnected || !this.avatarsPrimaryContainer || !this.avatarsSecondaryContainer || !this.avatarsOverflowContainer) return;
    let t = new Set();
    let i = e.filter(e => {
      let i = t.has(e.user_id);
      t.add(e.user_id);
      return !i;
    });
    let n = this.clamp || i.length + 1;
    let r = this.avatarElements;
    let a = i.slice(0, n);
    this.render(this.avatarsPrimaryContainer, a, r);
    let s = n ? i[n] : void 0;
    let l = this.overflowAvatar;
    if (s && !l) {
      this.avatarsOverflowContainer.style.display = "flex";
      let e = $$c0.createAvatarElement(s, r[s.user_id]);
      e.initial = s.initial;
      e.id = s.user_id;
      e.src = s.url || "";
      e.classList.add(mp);
      this.avatarsOverflowContainer.prepend(e);
    } else s && l ? (l.initial = s.initial, l.id = s.user_id, l.src = s.url || "") : (l && this.avatarsOverflowContainer.removeChild(l), this.avatarsOverflowContainer.style.display = "none");
    let d = n ? i.slice(n + 1) : [];
    this.render(this.avatarsSecondaryContainer, d.slice(0, 2), r);
    let u = this.overflowCount;
    if (d.length > 0) {
      let e = `${d.length + 1}`;
      u.style.visibility = "visible";
      this.avatarsOverflowContainer.style.setProperty("--overflowCount", `${e}`);
    } else {
      u.style.visibility = "hidden";
      this.avatarsOverflowContainer.style.removeProperty("--overflowCount");
    }
  }
  set avatars(e) {
    this.renderAvatars(e);
    this.lastAvatars = e;
  }
};
u.desiredElementName = "figma-avatars";
u.style = Nz;
u.template = l(`
    <div class="${u_}">
      <div class="${Ws}">
      </div>
      <div class="${OF}">
        <span class="${c_}"></span>
      </div>
      <div class="${q_}">
      </div>
    <div>
    `);
export let $$p1 = u;
"customElements" in window && !customElements.get($$c0.desiredElementName) && (customElements.define($$p1.desiredElementName, $$p1), customElements.define($$c0.desiredElementName, $$c0));
export const M = $$c0;
export const V = $$p1;