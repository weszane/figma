import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { forwardRef, useContext, Fragment as _$$Fragment } from "react";
import { bL } from "../905/246123";
import { hh } from "../905/720338";
import o from "classnames";
import { C } from "../figma_app/974443";
import { RecordingComponent, SKIP_RECORDING, handleMouseEvent, setupPlayback } from "../figma_app/878298";
import { Point } from "../905/736624";
import { B } from "../905/714743";
import { S } from "../figma_app/552746";
import { H4 } from "../figma_app/679183";
import { dD, xp } from "../figma_app/941824";
import { kR, CZ, LE, l$, Aw, gB, tp, kI, wD, KT, VY } from "../figma_app/459377";
import { A } from "../5724/713301";
var l = o;
export let $$E0 = forwardRef(function ({
  heightMultiplier: e,
  selected: t,
  selectedSecondary: r,
  grabberClassName: i,
  hideGrabber: a,
  singletonRow: s,
  dragging: o,
  shiftGrabberOnInputFocus: d,
  ...c
}, u) {
  let h = r ? kR : t ? CZ : null;
  let m = 1.5 === e ? LE : l$;
  h && (m += " " + h);
  let E = {
    ...c,
    className: `${m} ${c.className || ""}`
  };
  let {
    recordingKey,
    ...b
  } = E;
  let T = t && o ? Aw : gB;
  let I = jsxs(Fragment, {
    children: [!a && (!s || o) && jsx("div", {
      className: l()(i, {
        [tp]: o,
        [kI]: !o,
        [wD]: 1.5 === e,
        [KT]: d
      }),
      children: (!o || t) && jsx(B, {
        className: T,
        svg: A
      })
    }), E.children]
  });
  return jsx(S.recordableDiv, {
    recordingKey,
    ...b,
    forwardedRef: u,
    children: I
  });
});
export function $$y1(e) {
  let {
    useGrid
  } = useContext(dD);
  return jsx(b, {
    ...e,
    useGrid
  });
}
class b extends RecordingComponent {
  constructor(e) {
    super(e);
    this.draggedIndex = null;
    this.canDragLastItemToEnd = this.props.canDragLastItemToEnd ?? !0;
    this.listItemKeys = [];
    this.isIndexSelected = e => !!this.props.updateSelection && -1 !== this.props.selectedIndices.indexOf(e);
    this.indicesBeforeShift = null;
    this.lastIndexSelected = null;
    this.mouseDownPosition = null;
    this.hasCrossedDragThreshold = !1;
    this.selectItem = (e, t) => {
      if (!this.props.updateSelection) return;
      let r = this.selectedIndicesAsSet();
      if (0 === this.props.selectedIndices.length && (this.indicesBeforeShift = null, this.lastIndexSelected = null), t.shiftKey && null != this.lastIndexSelected) {
        r = new Set(this.indicesBeforeShift) ?? new Set();
        let t = Math.min(e, this.lastIndexSelected);
        let n = Math.max(e, this.lastIndexSelected);
        for (let e = t; e <= n; e++) r.add(e);
      } else {
        t.metaKey ? e in (r = new Set(r)) ? (r.$$delete(e), this.lastIndexSelected = null, this.indicesBeforeShift = null) : r.add(e) : r.has(e) || (r = new Set([e]));
        this.lastIndexSelected = e;
        this.indicesBeforeShift = r;
      }
      this.props.updateSelection([...r].sort());
    };
    this.onListItemMouseDown = (e, t) => {
      t.stopPropagation();
      !this.props.isDragDisabled && this.props.updateSelection && (this.draggedIndex = e, this.selectItem(e, t), this.props.listItems.length > 1 && (this.setState({
        isDraggingSelection: !0
      }), this.props.onDragStart && this.props.onDragStart(), this.mouseDownPosition = new Point(t.clientX, t.clientY)));
    };
    this.withinInsertIntoDragTarget = (e, t, r) => {
      let n = this.props.listItems[t];
      if (this.props.canInsertItemsIn && void 0 !== n && this.props.canInsertItemsIn(n)) return this.props.prioritizeInsertionIn ? r.pageY > e.top && r.pageY < e.top + e.height : r.pageY > e.top + e.height / 3 && r.pageY < e.top + 2 * e.height / 3;
    };
    this.onListItemMouseMove = (e, t) => {
      if (!this.props.isDragDisabled) {
        if (!this.state.isDraggingSelection || !this.mouseDownPosition) return SKIP_RECORDING;
        {
          this.mouseDownPosition.distanceTo({
            x: t.clientX,
            y: t.clientY
          }) > 3 && (this.hasCrossedDragThreshold = !0, this.props.onCrossedDragThreshold?.());
          let r = t.currentTarget.getBoundingClientRect();
          let n = r.top + r.height / 2;
          let i = null;
          let a = !1;
          if (this.withinInsertIntoDragTarget(r, e, t)) {
            i = e;
            a = !0;
            this.setState({
              indexToInsertSelectionIn: i,
              indexToInsertSelectionBefore: null
            });
          } else {
            if (i = this.props.reversed ? t.pageY > n ? e : e + 1 : t.pageY < n ? e : e + 1, !this.canDragLastItemToEnd && null !== this.draggedIndex && this.draggedIndex === this.props.listItems.length - 1 && i > this.draggedIndex && (i = this.draggedIndex), this.props.canInsertSelectionBeforeIndex && !this.props.canInsertSelectionBeforeIndex(i)) return SKIP_RECORDING;
            this.setState({
              indexToInsertSelectionIn: null,
              indexToInsertSelectionBefore: i
            });
          }
          if (this.props.onDrag) {
            let e = (t.pageX - r.left) / r.width;
            this.props.onDrag(i, e, a);
          }
          this.props.scrollContainer && (t.pageY - this.props.scrollContainer.getScrollContainerTop() < 40 ? this.props.scrollContainer.scrollTo(this.props.scrollContainer.getScrollTop() - 10) : this.props.scrollContainer.getScrollContainerBottom() - t.pageY < 40 && this.props.scrollContainer.scrollTo(this.props.scrollContainer.getScrollTop() + 10));
          t.preventDefault();
          t.stopPropagation();
        }
      }
    };
    this.onListItemMouseUp = (e, t) => {
      this.props.isDragDisabled || (null == this.state.indexToInsertSelectionBefore && null == this.state.indexToInsertSelectionIn && !t.shiftKey && !t.metaKey && this.isIndexSelected(e) && (this.props.updateSelection([e]), this.indicesBeforeShift = new Set([e])), this.mouseDownPosition = null, this.hasCrossedDragThreshold = !1);
    };
    this.onListItemContextMenu = (e, t) => {
      this.selectItem(e, t);
    };
    this.updateSelectionPropertiesAfterInsertion = e => {
      if (this.indicesBeforeShift) {
        let t = new Set();
        for (let r of this.indicesBeforeShift) {
          let n = e.get(r);
          t.add(n ?? r);
        }
        this.indicesBeforeShift = t;
      }
      if (this.lastIndexSelected) {
        let t = e.get(this.lastIndexSelected);
        void 0 !== t && (this.lastIndexSelected = t);
      }
    };
    this.onDocumentMouseUp = handleMouseEvent(this, "mouseup", () => {
      if (!this.props.updateSelection) return SKIP_RECORDING;
      let e = !1;
      if (null != this.state.indexToInsertSelectionBefore) {
        if (e = !0, this.props.onInsertItemsBetweenValues) {
          let e = [];
          for (let t of this.props.selectedIndices) this.props.listItems[t] && e.push(this.props.listItems[t]);
          let t = this.props.listItems[this.state.indexToInsertSelectionBefore - 1];
          let r = this.props.listItems[this.state.indexToInsertSelectionBefore];
          let n = this.props.onInsertItemsBetweenValues(e, t, r);
          n && this.updateSelectionPropertiesAfterInsertion(n);
        } else if (this.props.onChange) {
          let e = this.props.listItems;
          let t = this.selectedIndicesAsSet();
          let r = [];
          let n = [];
          for (let n = 0; n < this.state.indexToInsertSelectionBefore; n++) !t.has(n) && n < e.length && r.push(e[n]);
          for (let t of this.props.selectedIndices) {
            n.push(r.length);
            void 0 !== e[t] && r.push(e[t]);
          }
          for (let n = this.state.indexToInsertSelectionBefore; n < e.length; n++) t.has(n) || void 0 === e[n] || r.push(e[n]);
          this.props.onChange(r, void 0, this.props.listItems[this.draggedIndex ?? 0]);
          this.props.updateSelection(n);
        }
        this.props.onReorder && this.props.onReorder();
      }
      if (null != this.state.indexToInsertSelectionIn && this.props.onInsertItemsIn) {
        e = !0;
        let t = [];
        for (let e of this.props.selectedIndices) this.props.listItems[e] && t.push(this.props.listItems[e]);
        let r = this.props.listItems[this.state.indexToInsertSelectionIn];
        let n = this.props.onInsertItemsIn(t, r);
        n && this.updateSelectionPropertiesAfterInsertion(n);
      }
      if (this.props.onDragEnd?.(), this.state.isDraggingSelection && (this.setState({
        isDraggingSelection: !1
      }), e = !0), (null !== this.state.indexToInsertSelectionIn || null !== this.state.indexToInsertSelectionBefore) && (this.setState({
        indexToInsertSelectionIn: null,
        indexToInsertSelectionBefore: null
      }), e = !0), !e) return SKIP_RECORDING;
    });
    this._cachedListItems = [];
    this.onReorderRow = setupPlayback(this, "reorderRows", e => {
      let t = this.props.listItems.length;
      let r = this.props.reversed ? e.map(e => this.props.listItems[t - e - 1]).reverse() : e.map(e => this.props.listItems[e]);
      this.listItemKeys = e.map(e => this.listItemKeys[e]);
      let n = null !== this.draggedIndex ? this.props.listItems[this.draggedIndex] : void 0;
      if (this.props.onChange && this.props.onChange(r, void 0, n), !0 !== this.props.isDragDisabled && this.props.onInsertItemsBetweenValues && null !== this.state.indexToInsertSelectionBefore) {
        let e = this.props.selectedIndices.reduce((e, t) => {
          let r = this.props.listItems[t];
          r && e.push(r);
          return e;
        }, []);
        let t = this.props.listItems[this.state.indexToInsertSelectionBefore - 1];
        let r = this.props.listItems[this.state.indexToInsertSelectionBefore];
        if (e.length > 0) {
          let n = this.props.onInsertItemsBetweenValues(e, t, r);
          n && this.updateSelectionPropertiesAfterInsertion(n);
        }
      }
      this.setState({
        indexToInsertSelectionIn: null,
        indexToInsertSelectionBefore: null
      });
    });
    this.onDragOver = setupPlayback(this, "dragOver", ({
      draggingOverRowIndex: e,
      position: t
    }) => {
      this.setState({
        indexToInsertSelectionIn: "above" === t ? e - 1 : e,
        indexToInsertSelectionBefore: "above" === t ? e : e + 1
      });
    });
    this.state = {
      isDraggingSelection: !1,
      indexToInsertSelectionIn: null,
      indexToInsertSelectionBefore: null
    };
    this.listItemKeys = this.numbersUpToN(this.props.listItems.length);
  }
  componentWillUpdate() {
    this.props.listItems.length !== this.listItemKeys.length && (this.listItemKeys = this.numbersUpToN(this.props.listItems.length));
  }
  numbersUpToN(e) {
    return Array.from({
      length: e
    }, (e, t) => t);
  }
  componentDidMount() {
    super.componentDidMount();
    this.props.isDragDisabled || document.addEventListener("mouseup", this.onDocumentMouseUp);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.props.isDragDisabled || document.removeEventListener("mouseup", this.onDocumentMouseUp);
  }
  selectedIndicesAsSet() {
    return this.props.updateSelection ? new Set(this.props.selectedIndices) : new Set();
  }
  cachedItemCallback(e) {
    return new H4(() => this.props.renderListItem(this.props.listItems[e], e, !!this.props.updateSelection && this.props.selectedIndices.indexOf(e) >= 0, this.state.isDraggingSelection, this.onListItemMouseDown.bind(this, e), this.onListItemMouseMove.bind(this, e), this.onListItemMouseUp.bind(this, e), this.onListItemContextMenu.bind(this, e)));
  }
  render() {
    let e = this._cachedListItems;
    let t = this.props.listItems.length;
    let r = e.length;
    let o = [];
    if (t !== r) {
      for (let n = r; n < t; n++) e.push(this.cachedItemCallback(n));
      r = t;
    }
    let l = jsx("div", {
      className: VY,
      style: this.props.insertDividerStyle
    }, `separator-${this.state.indexToInsertSelectionBefore}`);
    for (let n = 0; n < r; n++) {
      let r = [e[n].render({
        isVisible: n < t,
        displayAs: "block"
      })];
      n === this.state.indexToInsertSelectionBefore && this.hasCrossedDragThreshold && (this.props.reversed ? r.push(l) : r.unshift(l));
      n === t - 1 && this.state.indexToInsertSelectionBefore === t && this.hasCrossedDragThreshold && (this.props.reversed ? r.unshift(l) : r.push(l));
      o.push(r);
    }
    if (this.props.reversed && o.reverse(), !this.props.useGrid) return jsx("div", {
      children: o
    });
    if (this.props.isDragDisabled) return jsx(xp.Provider, {
      value: {
        isDragging: !1
      },
      children: jsx(bL, {
        children: o.map((e, t) => jsx(_$$Fragment, {
          children: e
        }, this.listItemKeys[t]))
      })
    });
    let d = null !== this.state.indexToInsertSelectionIn;
    return jsx(hh, {
      children: jsxs(xp.Provider, {
        value: {
          isDragging: d
        },
        children: [jsx(T, {
          scrollContainer: this.props.scrollContainer?.getScrollContainer(),
          isDragging: d
        }), jsxs(bL, {
          onReorderRows: this.onReorderRow,
          setSelectedRows: e => {
            let t = this.props.listItems.length - 1;
            let r = [...e].map(e => this.props.reversed ? t - e : e);
            this.props.updateSelection && this.props.updateSelection(r.sort());
          },
          onDragOver: o.length > 1 ? this.onDragOver : void 0,
          onCancelDrag: () => {
            this.setState({
              indexToInsertSelectionIn: null,
              indexToInsertSelectionBefore: null
            });
          },
          children: [-1 === this.state.indexToInsertSelectionIn ? l : null, o.map((e, t) => jsxs(_$$Fragment, {
            children: [e, t === this.state.indexToInsertSelectionIn && l]
          }, this.listItemKeys[t]))]
        })]
      })
    });
  }
}
function T({
  scrollContainer: e,
  isDragging: t
}) {
  C(e, t);
  return null;
}
b.displayName = "DraggableList";
b.propTypes = {
  onChange: (e, t, r) => {
    if (!e.onChange && !e.onInsertItemsBetweenValues && !e.onInsertItemsIn && e.updateSelection) return Error("DraggableList: onChange, onInsertItemsBetweenValues, or onInsertItemsIn must be provided when selection is allowed");
  },
  onInsertItemsBetweenValues: (e, t, r) => {
    if (!e.onChange && !e.onInsertItemsBetweenValues && !e.onInsertItemsIn && e.updateSelection) return Error("DraggableList: onChange, onInsertItemsBetweenValues, or onInsertItemsIn must be provided when selection is allowed");
  },
  onInsertItemsIn: (e, t, r) => {
    if (!e.onChange && !e.onInsertItemsBetweenValues && !e.onInsertItemsIn && e.updateSelection) return Error("DraggableList: onChange, onInsertItemsBetweenValues, or onInsertItemsIn must be provided when selection is allowed");
  }
};
export const e = $$E0;
export const q = $$y1;