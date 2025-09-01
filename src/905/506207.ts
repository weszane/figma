import { jsx } from "react/jsx-runtime";
import { forwardRef, createRef } from "react";
import { debounce } from "../905/915765";
import { lQ } from "../905/934246";
import { o6, aQ } from "../figma_app/806412";
let l = () => !0;
let d = {
  left: !1,
  upper: !1,
  upperQuarter: !1,
  lowerQuarter: !1,
  middleVerticalHalf: !1
};
let $$c0 = forwardRef(function (e, t) {
  return jsx($$u1, {
    ...e,
    forwardedRef: t,
    isDragTarget: l,
    onTargetDragEnter: lQ,
    onTargetDragLeave: lQ,
    onTargetDrop: lQ
  });
});
export class $$u1 extends o6 {
  constructor(e) {
    super(e);
    this.firstDragEnter = !1;
    this.secondDragEnter = !1;
    this.dragQuadrant = {
      ...d
    };
    this.targetContainerBounds = null;
    this.invalidateTargetContainerBounds = () => {
      this.targetContainerBounds = null;
    };
    this.scrollListener = debounce(this.invalidateTargetContainerBounds);
    this.onDragEndOrDrop = () => {
      this.firstDragEnter = !1;
      this.secondDragEnter = !1;
      this.dragQuadrant = {
        ...d
      };
      this.targetContainerBounds = null;
    };
    this.getDragQuadrant = (e) => {
      let t = this.targetContainerBounds;
      if (!this.targetContainerBounds && this.targetContainer.current && (t = this.targetContainerBounds = this.targetContainer.current.getBoundingClientRect()), !t) return null;
      let i = e.clientX < t.left + t.width / 2;
      let n = e.clientY < t.top + t.height / 2;
      let r = e.clientY < t.top + t.height / 4;
      let a = e.clientY > t.top + .75 * t.height;
      return {
        left: i,
        upper: n,
        upperQuarter: r,
        lowerQuarter: a,
        middleVerticalHalf: !r && !a
      };
    };
    this.updateDragQuadrant = (e) => {
      if (!this.props.onTargetDragQuadrantUpdate) return;
      let t = this.getDragQuadrant(e);
      t && (!this.dragQuadrant || t.left !== this.dragQuadrant.left || t.upper !== this.dragQuadrant.upper || t.upperQuarter !== this.dragQuadrant.upperQuarter || t.lowerQuarter !== this.dragQuadrant.lowerQuarter || t.middleVerticalHalf !== this.dragQuadrant.middleVerticalHalf) && (this.props.onTargetDragQuadrantUpdate(t), this.dragQuadrant = t);
    };
    this.acceptDrag = (e) => (this.updateDragQuadrant(e), !!(e.dataTransfer && this.props.isDragTarget(e.dataTransfer, this.dragQuadrant)) && (e.preventDefault(), e.stopPropagation(), !0));
    this.onDragEnter = (e) => {
      this.firstDragEnter ? this.secondDragEnter = !0 : (this.firstDragEnter = !0, this.acceptDrag(e) && this.props.onTargetDragEnter?.(e.dataTransfer, this.dragQuadrant));
    };
    this.onDragLeave = (e) => {
      this.secondDragEnter ? this.secondDragEnter = !1 : this.firstDragEnter && (this.firstDragEnter = !1);
      !this.firstDragEnter && !this.secondDragEnter && this.acceptDrag(e) && this.props.onTargetDragLeave?.(e.dataTransfer);
    };
    this.onDrop = aQ(this, "drop", (e) => {
      this.acceptDrag(e) && (this.props.onTargetDrop?.(e.dataTransfer, this.dragQuadrant), this.onDragEndOrDrop());
    });
    this.targetContainer = this.props.forwardedRef ?? createRef();
  }
  componentDidMount() {
    super.componentDidMount();
    document.addEventListener("dragend", this.onDragEndOrDrop);
    document.addEventListener("drop", this.onDragEndOrDrop);
    window.addEventListener("scroll", this.scrollListener, !0);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    document.removeEventListener("dragend", this.onDragEndOrDrop);
    document.removeEventListener("drop", this.onDragEndOrDrop);
    window.removeEventListener("scroll", this.scrollListener, !0);
  }
  render() {
    let e = {
      ...this.props
    };
    delete e.recordingKey;
    delete e.forwardedRef;
    delete e.isDragTarget;
    delete e.onTargetDragEnter;
    delete e.onTargetDragQuadrantUpdate;
    delete e.onTargetDragLeave;
    delete e.onTargetDrop;
    delete e.onDragEnter;
    delete e.onDragOver;
    delete e.onDragLeave;
    delete e.onDrop;
    return jsx("div", {
      ref: this.targetContainer,
      onDragEnter: this.onDragEnter,
      onDragOver: this.acceptDrag,
      onDragLeave: this.onDragLeave,
      onDrop: this.onDrop,
      ...e,
      children: this.props.children
    });
  }
}
$$u1.displayName = "DragTarget";
export const V = $$c0;
export const Y = $$u1;