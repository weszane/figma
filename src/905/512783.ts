import { V } from '../905/84612';
import { getI18nString } from '../905/303541';
import { m as _$$m } from '../905/380385';
import { x as _$$x } from '../905/437800';
import { $N, S as _$$S, b9, C_, CA, Fm, Gb, gy, i1, ij, KV, kW, Nz, pd, rC, rX, se, sz, T7, tu, Ud, v3, V_, VH, wH, zn, Zr, ZR } from '../905/540111';
import { globalPerfTimer } from '../905/542194';
import { getFeatureFlags } from '../905/601108';
import { Point } from '../905/736624';
import { G } from '../905/799129';
import { JD } from '../905/986103';
import { LX } from '../figma_app/70421';
import { isNullish } from '../figma_app/95419';
import { buildStaticUrl } from '../figma_app/169182';
import { U6 } from '../figma_app/591738';
import { cZ } from '../figma_app/806412';
import { sP } from '../figma_app/819288';
import { deregisterRecording, registerRecording } from '../figma_app/878298';
import d from '../vendor/128080';
import o from '../vendor/197638';
let E = e => e.ctrlKey || e.altKey || e.shiftKey || e.metaKey;
let x = class e {
  constructor(e, t) {
    this._element = null;
    this._dragState = null;
    this.listener = null;
    this.handlers = void 0;
    this.element = e;
    this.renderer = t || null;
  }
  set element(e) {
    this.cancel();
    let t = this._element;
    t && (t.onpointerdown = null, t.onpointerenter = null, t.onpointerleave = null, t.onpointerup = null, t.onpointercancel = null, t.onpointerover = null);
    this._element = e;
    this._element && (this._element.onpointerdown = e => {
      this.onPointerDown(e);
    });
  }
  cancel() {
    this._dragState = null;
    this.emitDragState(null);
  }
  emitDragState(e) {
    this.listener && this.listener(e);
  }
  subscribe(e) {
    this.listener && (this.unsubscribe(this.listener), console.error('Subscribing new listener without unsubscribing one'));
    this.listener = e;
    return e;
  }
  unsubscribe(e) {
    this.listener = null;
  }
  onPointerDown(e) {
    if (e.button !== 0 || E(e)) return;
    let t = this.handlers?.canDrag;
    if (!this._element || t && !t()) return;
    e.stopPropagation();
    this._element.onpointermove = e => {
      this.onPointerMove(e);
    };
    this._element.onpointerup = e => {
      this.onPointerUp(e);
    };
    this._element.setPointerCapture(e.pointerId);
    let i = this._element?.getBoundingClientRect() || {
      x: 0,
      y: 0
    };
    let n = {
      x: e.clientX,
      y: e.clientY
    };
    let r = Point.subtract(i, n);
    this._dragState = {
      start: {
        x: e.clientX,
        y: e.clientY
      },
      hasStarted: !1,
      mouseOffset: r
    };
  }
  onPointerUp(e) {
    if (this._element?.releasePointerCapture(e.pointerId), !this._element) return;
    if (this._element.onpointerup = null, this._element.onpointermove = null, !this._dragState || !this._dragState.hasStarted) {
      this.handlers?.onClick && this.handlers.onClick(e);
      return;
    }
    let t = this.computeOffset(this._dragState, e);
    let i = {
      id: this._element.id,
      offset: t
    };
    this.handlers?.onDragEnd && this.handlers?.onDragEnd(i);
    this._dragState = null;
    this.emitDragState(null);
    return !0;
  }
  computeOffset(e, t) {
    let i;
    let n = {
      x: t.clientX,
      y: t.clientY
    };
    if (this.renderer?.bounds) {
      let t = Point.subtract(this.renderer.bounds.min, e.mouseOffset);
      let n = Point.subtract(this.renderer.bounds.max, e.mouseOffset);
      i = {
        max: {
          x: n.x - 20,
          y: n.y
        },
        min: {
          x: t.x,
          y: t.y + 20
        }
      };
    }
    let r = Point.bound(n, i);
    return Point.subtract(e.start, r);
  }
  onPointerMove(t) {
    if (!this._dragState || !this._element) return;
    let i = this.computeOffset(this._dragState, t);
    if (Math.max(Math.abs(i.x), Math.abs(i.y)) > e.MIN_DRAG && !this._dragState.hasStarted) {
      let e = {
        id: this._element.id,
        offset: {
          x: 0,
          y: 0
        }
      };
      this.emitDragState(e);
      this.handlers?.onDragStart && this.handlers?.onDragStart(e);
      this._dragState.hasStarted = !0;
    }
    let n = {
      id: this._element.id,
      offset: i
    };
    this.handlers?.onDragUpdate && this.handlers.onDragUpdate(n);
    this.emitDragState(n);
  }
};
x.MIN_DRAG = 5;
function w(e) {
  let t = document.createElement('template');
  t.innerHTML = e;
  return t;
}
let C = class e extends HTMLElement {
  constructor() {
    super(...arguments);
    this._bounds = null;
    this._lastBounds = null;
    this._borderOutside = !1;
  }
  static updateSelectionBoxById(t, i, n, r = !1) {
    let a = t.getElementsByClassName(n)[0];
    return i || a ? (a || ((a = document.createElement(e.desiredElementName)).classList.add(n), t.prepend(a)), a.bounds = i, a.borderOutside = r, i ? a.classList.remove(KV) : a.classList.add(KV), a.render(), a) : null;
  }
  static get observedAttributes() {
    return ['x', 'y', 'height', 'width'];
  }
  get bounds() {
    return this._bounds;
  }
  set bounds(e) {
    if (!e) {
      this._bounds = e;
      return;
    }
    this._bounds = e;
  }
  get borderOutside() {
    return this._borderOutside;
  }
  set borderOutside(e) {
    this._borderOutside = e;
  }
  connectedCallback() {
    this.classList.contains(Gb) || this.classList.add(Gb);
  }
  render() {
    this.isConnected && this._lastBounds !== this.bounds && (this.bounds ? (this.style.width = `${this.bounds.width + (this._borderOutside ? 2 * e.BORDER_WIDTH_PX : 0)}px`, this.style.height = `${this.bounds.height + (this._borderOutside ? 2 * e.BORDER_WIDTH_PX : 0)}px`, this.style.left = `${this.bounds.x - (this._borderOutside ? e.BORDER_WIDTH_PX : 0)}px`, this.style.top = `${this.bounds.y - (this._borderOutside ? e.BORDER_WIDTH_PX : 0)}px`, this.style.display = 'flex') : this.style.display = 'none', this._lastBounds = this.bounds);
  }
};
C.desiredElementName = 'figma-comment-selection-box';
C.BORDER_WIDTH_PX = 2;
let T = class e extends HTMLElement {
  constructor() {
    super();
    this._lastPosition = null;
    this._position = {
      x: 0,
      y: 0
    };
    this._lastData = null;
    this._data = null;
    this._dragManager = null;
    this._lastDragOffset = null;
    this._dragOffset = null;
    this._lastSelectionBoxAnchor = null;
    this._selectionBoxAnchor = null;
    this._lastOtherBoundingBoxes = {};
    this._otherBoundingBoxes = {};
    this._lastRenderPosition = null;
    this._lastRenderedMessageMeta = null;
    this._lastZoomScale = null;
    this._zoomScale = 1;
    this.timestampUpdateInterval = null;
    this._loadingSpinner = null;
    this.canDrag = null;
    this.onStartDrag = null;
    this.onUpdateDrag = null;
    this.onEndDrag = null;
    this.onPinClick = null;
    this.onPinContextClick = null;
    this.template = w(`
    <div class="${kW}">
      <figma-avatars clamp=${e.MAX_PIN_AVATARS - 1}></figma-avatars>
      <div class="${$N}">
        <div class="${Ud}">
          <div class="${T7}" dir="auto"></div>
          <div class="${Zr}"><span></span></div>
        </div>
        <div class="${se}" dir="auto"></div>
        <span class="${V_}"></span>
      </div>
    </div>
    `);
    this.onClick = cZ(this, 'click', e => {
      this.onPinClick && (globalPerfTimer.start('view_comment_thread'), this.onPinClick(this.id, e));
    });
    this.pendingTimeout = null;
    registerRecording(this);
  }
  recordingKey() {
    return `commentPin.${this._data?.id}`;
  }
  cancelDrag() {
    this._dragManager?.cancel();
  }
  onContextClick(e) {
    this.onPinContextClick && this.onPinContextClick(this.id, e);
  }
  onDragEnd(e) {
    this.onEndDrag && this.onEndDrag(e, this);
    this.dragLocation = null;
  }
  onDragUpdate(e) {
    this.dragLocation = e.offset;
    this.render();
    this.onUpdateDrag && this.onUpdateDrag(e, this);
  }
  onDragStart(e) {
    this.onStartDrag && this.onStartDrag(e, this);
  }
  onMouseEnter() {
    this.preview = !0;
  }
  onMouseLeave() {
    this.preview = !1;
  }
  onRemove() {
    deregisterRecording(this);
  }
  bindContextClick() {
    this.oncontextmenu = this.onContextClick.bind(this);
  }
  set isDraggable(e) {
    e && !this._dragManager ? (this._dragManager = new x(this, this.renderer), this._dragManager.handlers = {
      onClick: this.onClick.bind(this),
      onDragStart: this.onDragStart.bind(this),
      onDragEnd: this.onDragEnd.bind(this),
      onDragUpdate: this.onDragUpdate.bind(this)
    }) : e || (this._dragManager && (this._dragManager.element = null), this.onclick = this.onClick.bind(this));
  }
  get x() {
    return this._position.x;
  }
  get y() {
    return this._position.y;
  }
  get position() {
    return this._position;
  }
  set position(e) {
    this._position = {
      ...e
    };
  }
  set zoomScale(e) {
    this._zoomScale = e;
  }
  set selectionBoxAnchor(e) {
    this._selectionBoxAnchor = e ? {
      ...e
    } : null;
  }
  set otherBoundingBoxes(e) {
    e && Object.keys(e).length > 0 ? this._otherBoundingBoxes = e : this._otherBoundingBoxes = {};
  }
  static getPosition(e, t) {
    let i = (t - 1) * e.x;
    let n = (t - 1) * e.y;
    return {
      x: e.x + i,
      y: e.y + n
    };
  }
  getSelectionBoxPosition(e, t, i) {
    let n = this.constructor.getPosition(i, t);
    let r = Math.min(e.x, n.x);
    let a = Math.min(e.y, n.y);
    return {
      width: Math.max(e.x - r, n.x - r),
      height: Math.max(e.y - a, n.y - a),
      x: r - e.x,
      y: a - e.y
    };
  }
  getSelectionBoxPositionFromRect(e, t, i) {
    return {
      width: e.width * t,
      height: e.height * t,
      x: e.x * t - i.x,
      y: e.y * t - i.y
    };
  }
  get data() {
    return this._data;
  }
  set data(e) {
    this._data = e ? {
      ...e
    } : null;
    registerRecording(this);
  }
  set dragLocation(e) {
    this._dragOffset = e ? {
      ...e
    } : null;
  }
  get pinContainer() {
    return this.getElementsByClassName(kW)[0];
  }
  get pinPreview() {
    return this.pinContainer.getElementsByClassName($N)[0];
  }
  get previewText() {
    return this.pinContainer.getElementsByClassName(se)[0];
  }
  get previewHeader() {
    return this.pinContainer.getElementsByClassName(Ud)[0];
  }
  get previewAuthor() {
    return this.pinContainer.getElementsByClassName(T7)[0];
  }
  get previewTimestamp() {
    return this.pinContainer.getElementsByClassName(Zr)[0];
  }
  get avatarElements() {
    return this.pinContainer.getElementsByTagName(V.desiredElementName)[0];
  }
  get replySummary() {
    return this.pinContainer.getElementsByClassName(V_)[0];
  }
  set selected(e) {
    e ? (this.setAttribute('hover-disabled', 'true'), this.setAttribute('selected', 'true')) : (this.removeAttribute('hover-disabled'), this.removeAttribute('selected'));
  }
  set dimmed(e) {
    e ? this.setAttribute('dimmed', 'true') : this.removeAttribute('dimmed');
  }
  set emphasized(e) {
    e ? this.setAttribute('emphasized', 'true') : this.removeAttribute('emphasized');
  }
  set preview(e) {
    e ? this.setAttribute('preview', 'true') : this.removeAttribute('preview');
  }
  set minimized(e) {
    e ? this.setAttribute('minimized', 'true') : this.removeAttribute('minimized');
  }
  set selectionBox(e) {
    C.updateSelectionBoxById(this, e, `${this.id}_box_main`);
  }
  pendingDelayRemaining(t) {
    return t.createdAt.getTime() + e.PENDING_DELAY_MS - new Date().getTime();
  }
  connectedCallback() {
    this.classList.contains(ij) || this.classList.add(ij);
    this.classList.contains(C_) || this.classList.add(C_);
    let t = this.template.content.cloneNode(!0);
    if (this.append(t), e.observedAttributes.forEach(e => {
      this.attributeChangedCallback(e, '', this.getAttribute(e) || '');
    }), this.data?.pending && this.pendingDelayRemaining(this.data) > 0) {
      let e = setTimeout(() => {
        clearInterval(e);
        this.render();
      }, this.pendingDelayRemaining(this.data));
      this.pendingTimeout = e;
    }
    this.render();
    this.bindContextClick();
    this.addEventListener('mouseenter', this.onMouseEnter);
    this.addEventListener('mouseleave', this.onMouseLeave);
  }
  disconnectedCallback() {
    this.pendingTimeout && clearInterval(this.pendingTimeout);
    this.timestampUpdateInterval && clearInterval(this.timestampUpdateInterval);
    this.removeEventListener('mouseenter', this.onMouseEnter);
    this.removeEventListener('mouseleave', this.onMouseLeave);
  }
  animateDirectionally(e, t) {
    if (!e || !_$$x()) return Promise.resolve();
    let i = `translate3d(${e.x}px, ${e.y}px, 0px) scale(.2)`;
    return new Promise((e, n) => {
      let r = this.animate([{
        offset: t,
        transform: i
      }], {
        duration: 200
      });
      r.onfinish = () => {
        e();
      };
      r.oncancel = () => {
        n();
      };
    });
  }
  async animateAggregationChange(e) {
    if (e.type === 'join') {
      this.setAttribute('hover-disabled', 'true');
      await this.animateDirectionally(e.position, 1);
      return;
    }
    await this.animateDirectionally(e.position, 0);
  }
  async animateDatasetChange(t) {
    let i = this.renderer?._lastDatasetChangeAnimatedAt;
    if (t.type === 'create' && !t.isMutatedByCurrentUser && i && this.data && i < this.data.createdAt.getTime()) {
      this.preview = !0;
      requestAnimationFrame(() => {
        this.style.setProperty('--expandAnimationTime', `${e.ANIMATE_NEW_DURATION / 1e3}s`);
        this.classList.add(sz);
      });
      await G(this.pinContainer, [{
        offset: 0,
        transform: 'scale(0.2)'
      }, {
        offset: 1,
        transform: 'scale(1)'
      }], {
        duration: e.ANIMATE_NEW_DURATION,
        endDelay: e.ANIMATE_NEW_DELAY
      });
      this.classList.remove(sz);
      this.style.removeProperty('--expandAnimationTime');
      this.preview = !1;
    }
  }
  static get observedAttributes() {
    return ['hover-disabled', 'selected', 'dimmed', 'emphasized', 'preview', 'minimized'];
  }
  getReplyPreviewString(e) {
    let t = e.replies || 0;
    let i = e.numAttachments;
    let n = !!e.numUnreadReplies && e.numUnreadReplies !== t;
    let r = t ? getI18nString('comments.preview_reply_count', {
      replyCount: n ? e.numUnreadReplies : t,
      new: n ? 'true' : 'false'
    }) : '';
    let a = i ? getI18nString('comments.attachment_count', {
      attachmentCount: i
    }) : '';
    let s = '';
    r !== '' ? s = a !== '' ? `${r} \xB7 ${a}` : r : a !== '' && (s = a);
    return s;
  }
  render() {
    if (this._lastData?.id !== this._data?.id && (this.id = this._data?.id || ''), !this.isConnected || !this._position || !this.data) return;
    let e = this.data.pending || this.getAttribute('hover-disabled');
    if (this.syncStyle(e, Fm), this.data.pending && this.pendingDelayRemaining(this.data) <= 0 ? this.addLoadingSpinner() : this.removeLoadingSpinnerIfPresent(), this._lastPosition?.x !== this._position?.x || this._lastPosition?.y !== this._position?.y || this._lastDragOffset !== this._dragOffset || this._lastDragOffset?.x !== this._dragOffset?.x || this._lastDragOffset?.y !== this._dragOffset?.y || this._lastZoomScale !== this._zoomScale || this._lastSelectionBoxAnchor !== this._selectionBoxAnchor || !d()(this._lastOtherBoundingBoxes, this._otherBoundingBoxes)) {
      let e = this._dragOffset?.x || 0;
      let t = this._dragOffset?.y || 0;
      let i = this.constructor.getPosition(this._position, this._zoomScale);
      let n = Point.subtract(i, {
        x: e,
        y: t
      });
      (this._lastRenderPosition?.x !== n.x || this._lastRenderPosition?.y !== n.y) && (this.style.setProperty('transform', `translate3d(${n.x}px, ${n.y}px, 0px) scale(var(--scale, 1))`), this._lastRenderPosition = n);
      let a = this._selectionBoxAnchor ? this.getSelectionBoxPosition(n, this._zoomScale, this._selectionBoxAnchor) : null;
      if (C.updateSelectionBoxById(this, a, `${this.id}_box_main`, !!this._data && !_$$m(this._data.type)), getFeatureFlags().xr_debounce_threshold) {
        for (let e of new Set(Object.keys(this._otherBoundingBoxes).concat(Object.keys(this._lastOtherBoundingBoxes)))) {
          let t = this._otherBoundingBoxes[e];
          C.updateSelectionBoxById(this, t ? this.getSelectionBoxPositionFromRect(t, this._zoomScale, n) : null, `${this.id}_box_${e}`, !!this._data && !_$$m(this._data.type));
        }
      }
      this._lastPosition = this._position;
      this._lastDragOffset = this._dragOffset;
      this._lastZoomScale = this._zoomScale;
      this._lastSelectionBoxAnchor = this._selectionBoxAnchor;
      this._lastOtherBoundingBoxes = this._otherBoundingBoxes;
    }
    if (this._lastData?.avatars !== this._data?.avatars) {
      let e = this._data?.avatars || [];
      this.avatarElements.avatars = e;
      e.length > 1 ? (this.pinContainer.classList.add(tu), this.pinPreview.classList.add(tu)) : (this.pinContainer.classList.remove(tu), this.pinPreview.classList.remove(tu));
    }
    let t = this._data?.preview;
    if (this._lastData?.preview !== t && (this.previewAuthor.innerText = t.author, t.unread ? (this.classList.add(gy), this.classList.add(gy)) : (this.classList.remove(gy), this.classList.remove(gy)), this.replySummary.innerText = this.getReplyPreviewString(t)), this.getAttribute('preview')) {
      if (this._lastRenderedMessageMeta !== t.messageMeta) {
        let e = sP(t.messageMeta);
        this.previewText.innerHTML = o().sanitize(e, {
          ALLOWED_TAGS: ['img', 'span'],
          ALLOWED_ATTR: ['src', 'class'],
          ALLOWED_URI_REGEXP: new RegExp(buildStaticUrl('emoji/*'))
        });
        this._lastRenderedMessageMeta = t.messageMeta;
      }
      this.previewTimestamp.innerText = JD(this._data?.createdAt, 'short');
    }
    this.renderOtherChanges(this._lastData, this._data);
    this._lastData = this._data;
  }
  setClassOn(e, t, i, n) {
    t === e && (i ? this.classList.add(n) : this.classList.remove(n));
  }
  syncStyle(e, t, i = this) {
    let n = !!e;
    n && !i.classList.contains(t) ? i.classList.add(t) : !n && i.classList.contains(t) && i.classList.remove(t);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && this.isConnected && (this.setClassOn('selected', e, i, wH), this.setClassOn('dimmed', e, i, rX), this.setClassOn('preview', e, i, VH), U6() && this.setClassOn('minimized', e, i, pd), e === 'emphasized' && i ? this.style.setProperty('--scale', '1.1') : this.style.removeProperty('--scale'), this.render());
  }
  addEmphasisStyle() {
    this.emphasized = !0;
  }
  updatePinSelectedState(e) {
    this.selected = e === LX.ACTIVE;
    this.dimmed = e === LX.DIMMED;
  }
  removeEmphasisStyle() {
    this.emphasized = !1;
  }
  updateDragLocation(e) {
    this.dragLocation = e;
    this.render();
  }
  addLoadingSpinner() {
    this._loadingSpinner || (this._loadingSpinner = e.spinner.content.cloneNode(!0), this.pinContainer.prepend(this._loadingSpinner));
    this.avatarElements.style.setProperty('opacity', '0');
    this.avatarElements.style.setProperty('visibility', 'hidden');
    this.avatarElements.style.setProperty('position', 'absolute');
  }
  removeLoadingSpinnerIfPresent() {
    this._loadingSpinner && this.removeChild(this._loadingSpinner);
    this.avatarElements.style.removeProperty('position');
    this.avatarElements.style.removeProperty('opacity');
    this.avatarElements.style.removeProperty('visibility');
  }
  renderOtherChanges(e, t) {}
  get unhoveredSize() {
    return e.getPinSize(this._data?.avatars.length || 1);
  }
  static getPinSize(e) {
    return {
      width: 23 * Math.min(e - 1, 2) + 32,
      height: 32
    };
  }
};
T.PENDING_DELAY_MS = 500;
T.MAX_PIN_AVATARS = 3;
T.ANIMATE_NEW_DURATION = 400;
T.ANIMATE_NEW_DELAY = 3500;
T.desiredElementName = 'figma-comment-pin';
T.styles = [Nz, V.style];
T.spinner = w(`<div id="spinner" class="${_$$S}" />`);
let $$k0 = T;
let $$R1 = 'pinnable-comment-pin';
let N = class e extends $$k0 {
  constructor() {
    super();
    this._pinnedToFileIcon = null;
    this.template = w(`
    <div class="${kW}" tabIndex="0" data-testid="${$$R1}">
      <div class="${v3}"></div>
      <figma-avatars clamp=${$$k0.MAX_PIN_AVATARS - 1}></figma-avatars>
      <div class="${$N}">
        <div class="${Ud}">
          <div class="${T7}" dir="auto"></div>
          <div class="${Zr}"><span></span></div>
        </div>
        <div class="${se}" dir="auto"></div>
        <span class="${V_}"></span>
      </div>
    </div>
    `);
    registerRecording(this);
  }
  get pinnedThreadToFileIndicator() {
    return this.pinContainer.getElementsByClassName(v3)[0];
  }
  addIconWhenPinnedToFileIfAbsent() {
    this._pinnedToFileIcon || (this._pinnedToFileIcon = e.pinnedToFileIcon.content.cloneNode(!0), this.pinnedThreadToFileIndicator.prepend(this._pinnedToFileIcon));
  }
  renderOtherChanges(e, t) {
    let i = t?.preview;
    let r = e?.preview;
    i && U6() && (i.isPinnedToFile ? (this.addIconWhenPinnedToFileIfAbsent(), this.pinnedThreadToFileIndicator.classList.add(ZR)) : this.pinnedThreadToFileIndicator.classList.remove(ZR), isNullish(r?.isPinnedToFile) && this.pinnedThreadToFileIndicator.classList.add(rC));
  }
};
N.desiredElementName = 'figma-pinnable-comment-pin';
N.pinnedToFileIcon = w(`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="8" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8282 8.00021L13.4799 6.40922L14.3638 5.87889L13.6349 5.15002L10.85 2.36511L10.1211 1.63623L9.59082 2.52012L7.9999 5.17169L4.81792 6.23235L3.75726 6.5859L4.54783 7.37647L6.23213 9.06078L3.14622 12.1467L2.79266 12.5002L3.49977 13.2074L3.85332 12.8538L6.93924 9.76788L8.62354 11.4522L9.41411 12.2428L9.76765 11.1821L10.8282 8.00021ZM8.97708 10.3915L9.87954 7.684L9.99652 7.33305L9.99646 7.33309L9.87948 7.68404L8.97704 10.3915L8.97708 10.3915ZM12.751 5.68039L12.751 5.68035L10.3197 3.24899L10.3196 3.24906L12.751 5.68039ZM8.31613 6.12037L8.66702 6.00341L8.66701 6.00343L8.31606 6.12041L5.6085 7.02293L5.60849 7.02292L8.31613 6.12037Z" fill="#007BE5"/>
    </svg>
    `);
let $$P2 = N;
let O = class e extends $$k0 {
  constructor() {
    super();
    registerRecording(this);
  }
  static getPosition(e, t) {
    let i = (t - 1) * e.x;
    let n = (t - 1) * e.y;
    return {
      x: e.x + i,
      y: e.y + n - 1
    };
  }
  connectedCallback() {
    this.classList.contains(ij) || this.classList.add(ij);
    this.classList.contains(b9) || this.classList.add(b9);
    this.classList.contains(C_) || this.classList.add(C_);
    let t = e.template.content.cloneNode(!0);
    this.append(t);
    e.observedAttributes.forEach(e => {
      this.attributeChangedCallback(e, '', this.getAttribute(e) || '');
    });
    this.render();
    this.bindContextClick();
    this.addEventListener('mouseenter', this.onMouseEnter);
    this.addEventListener('mouseleave', this.onMouseLeave);
  }
  get pinContainer() {
    return this.getElementsByClassName(zn)[0];
  }
  get titleText() {
    return this.pinContainer.getElementsByClassName(CA)[0];
  }
  static getPinSize(e) {
    return {
      width: 23 * Math.min(e - 1, 2) + 32 + 24,
      height: 32
    };
  }
  renderOtherChanges(t, i) {
    if (t?.preview !== i.preview && (this.titleText.innerText = i.preview.feedPostTitle ?? '', t?.preview.pinVerticalStagger !== i.preview.pinVerticalStagger)) {
      let t = (i.preview.pinVerticalStagger ?? 0) * e.getPinSize(0).height;
      this.pinContainer.style.transform = `translateY(${t}px)`;
    }
  }
};
O.desiredElementName = 'figma-post-pin';
O.feedIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6.5" y="6.5" width="4.14286" height="5.85714" rx="0.5" stroke="var(--color-icon)" stroke-opacity="0.9"/>
      <rect x="13.3574" y="11.6426" width="4.14286" height="5.85714" rx="0.5" stroke="var(--color-icon)" stroke-opacity="0.9"/>
      <rect x="13.3574" y="6.5" width="4.14286" height="2.42857" rx="0.5" stroke="var(--color-icon)" stroke-opacity="0.9"/>
      <rect x="6.5" y="15.0713" width="4.14286" height="2.42857" rx="0.5" stroke="var(--color-icon)" stroke-opacity="0.9"/>
    </svg>
    `;
O.template = w(`
    <div class="${zn}">
      <div class="${i1}">
        ${O.feedIcon}
        <figma-avatars clamp=${O.MAX_PIN_AVATARS - 1}></figma-avatars>
      </div>
      <div class="${$N}">
        <div class="${Ud}">
        <div class="${T7}" dir="auto"></div>
        <div class="${Zr}"><span></span></div>
      </div>
      <div class="${CA}" dir="auto"></div>
      <div class="${se}" dir="auto"></div>
      <span class="${V_}"></span></div>
    </div>
    `);
export let $$D3 = O;
'customElements' in window && !customElements.get($$k0.desiredElementName) && customElements.define($$k0.desiredElementName, $$k0);
'customElements' in window && !customElements.get($$P2.desiredElementName) && customElements.define($$P2.desiredElementName, $$P2);
'customElements' in window && !customElements.get($$D3.desiredElementName) && customElements.define($$D3.desiredElementName, $$D3);
'customElements' in window && !customElements.get(C.desiredElementName) && customElements.define(C.desiredElementName, C);
export const XC = $$k0;
export const tR = $$R1;
export const aT = $$P2;
export const b1 = $$D3;