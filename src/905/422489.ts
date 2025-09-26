import { filterNumberValues } from "../905/807535";
import { HideMode, InteractionCpp, LayoutDirection, UserActionState } from "../figma_app/763686";
import { Rectangle } from "../905/249071";
import { Vector2D } from "../905/512402";
import { getSingletonSceneGraph } from "../905/700578";
import { BrowserInfo } from "../figma_app/778880";
import { NameClass } from "../905/881708";
import { recordReorderTableSpanActive } from "../figma_app/682945";
import { Ro, xT, Dv } from "../905/962457";
var p = (e => (e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT", e[e.UP = 2] = "UP", e[e.DOWN = 3] = "DOWN", e))(p || {});
let m = class e extends NameClass {
  constructor(e) {
    super(e);
    this._snapper = null;
    this.ui = new Ro(Rectangle.invalidRect(), [], [], 1, HideMode.HIDE);
    this.state = {
      element: xT.NONE,
      mouse: Dv.INACTIVE
    };
    this.hoveredSpans = new Vector2D(-1, -1);
    this.didDrag = !1;
    this.shouldRenderTableUi = HideMode.HIDE;
    this.previousMouseDragPos = Vector2D.invalid();
  }
  _getSnapper({
    interactionCpp: e
  }) {
    this._snapper || (this._snapper = e.getTableSpanSnapper());
    return this._snapper;
  }
  _getOrUpdateTableUI(e) {
    let t = e.canvasScale();
    let {
      bounds,
      widths,
      heights
    } = InteractionCpp ? {
      bounds: Rectangle.fromRectD(InteractionCpp.viewportSpaceTableBounds()),
      widths: InteractionCpp.getTableSpanLengths(LayoutDirection.COLUMN).map(e => e * t),
      heights: InteractionCpp.getTableSpanLengths(LayoutDirection.ROW).map(e => e * t)
    } : {
      bounds: Rectangle.invalidRect(),
      widths: [],
      heights: []
    };
    this.ui.isDirty(bounds, widths, heights, t, this.shouldRenderTableUi) && (this.ui = new Ro(bounds, widths, heights, t, this.shouldRenderTableUi));
    return this.ui;
  }
  _getRegion(e, t) {
    return e.getHoveredRegion(Vector2D.fromVectorD(t.viewportSpaceMouse()));
  }
  _selectSpan({
    axis: e,
    spanIndex: t,
    addToExistingSelection: i,
    interactionCpp: n
  }) {
    let r = n.getTableSpanIdAtIndex(e, t);
    i && n.isEntireSpanSelected(e, r) ? (n.deselectSpan(e, r), n.maybeUpdatePivot()) : n.selectTableSpans(e, [r], r, i);
  }
  _updateCursor({
    event: e,
    element: t,
    axis: i,
    interactionCpp: n
  }) {
    let a = i === LayoutDirection.COLUMN ? "horizontal" : "vertical";
    switch (t) {
      case xT.RESIZE:
        n.setEventCursor(e, `${a}ResizeCursor`);
        break;
      case xT.REORDER:
        n.setEventCursor(e, `${a}BlackMoveCursor`);
    }
  }
  _mouseComponent(e, t) {
    return t === LayoutDirection.COLUMN ? e.x : e.y;
  }
  _isSelectingOrDraggingReorderHandle() {
    return this.state.element === xT.REORDER && (this.state.mouse === Dv.SELECTED || this.state.mouse === Dv.DRAGGED);
  }
  _isResizingSpan() {
    return this.state.element === xT.RESIZE && (this.state.mouse === Dv.SELECTED || this.state.mouse === Dv.DRAGGED);
  }
  _springDistanceFunction(t, i) {
    let n = 1 / e.springStiffnessPower;
    let r = Math.pow(1 / n, 1 / (n - 1));
    let a = r / i;
    let s = Math.abs(t) * a;
    let o = Math.pow(r, n) - r;
    return (s < r ? s : Math.pow(s, n) - o) / a * Math.sign(t);
  }
  _extendedSpringDistanceFunction(e, t, i, n) {
    let r = 0;
    if (e > i) r = -i;else {
      if (!(e < t)) return e;
      r = t;
    }
    return this._springDistanceFunction(e + r, n) - r;
  }
  _displacementSpringEffect(t, i, n) {
    let a;
    let o;
    let l;
    let d = this.ui.bounds();
    let c = 1;
    t === LayoutDirection.ROW ? (a = i.x, o = n.y, l = d.height(), c = .5) : (a = i.y, o = n.x, l = d.width());
    let u = t === LayoutDirection.ROW ? this.ui.numRows : this.ui.numColumns;
    var p = this._extendedSpringDistanceFunction(o, 0, l - this.ui.getSpanThickness(u - 1, t), e.boundarySpringStiffnessDistance * c) - o;
    return (a = this._springDistanceFunction(a, e.springStiffnessDistance), t === LayoutDirection.ROW) ? new Vector2D(a, i.y + p) : new Vector2D(i.x + p, a);
  }
  _updateSnapTargets({
    event: e,
    axis: t,
    spanFencepostIndex: i,
    interactionCpp: n
  }) {
    let r = this._getSnapper({
      interactionCpp: n
    });
    n.cacheSnapTargetsForTableSpan(r, t, i);
    r.cacheTemporarySnapTargetsForLayoutGrids(e.canvasScene().handle, e.selectionNodeGUIDs(), e.canvasSpaceSnappingThreshold());
  }
  _getSnapOffset({
    event: e,
    mouse: t,
    interactionCpp: i
  }) {
    if (this.state.element !== xT.RESIZE) return 0;
    let n = this.state.tableAxis === LayoutDirection.COLUMN ? new Vector2D(1, 0) : new Vector2D(0, 1);
    let a = e.canvasSpaceSnappingThreshold();
    let o = e.viewport().canvasSpaceViewportRect();
    return i.snapPointAlongAxis(this._getSnapper({
      interactionCpp: i
    }), t, n, a, o);
  }
  handleMouseLeave(e) {}
  _hideTableUiForOtherInteraction({
    interactionCpp: e
  }) {
    let t = e.getActiveUserAction();
    return t !== UserActionState.DEFAULT && t !== UserActionState.SELECTING_TEXT && !(this._isSelectingOrDraggingReorderHandle() || this._isResizingSpan());
  }
  _canProcessTableEvents({
    interactionCpp: e
  }) {
    return this.shouldRenderTableUi !== HideMode.HIDE && !this._hideTableUiForOtherInteraction({
      interactionCpp: e
    });
  }
  handleMouseMove(e) {
    if (!InteractionCpp || !this._canProcessTableEvents({
      interactionCpp: InteractionCpp
    })) return;
    let t = this._getOrUpdateTableUI(e.viewport());
    this.hoveredSpans = t.getHoveredSpan(Vector2D.fromVectorD(e.viewportSpaceMouse()));
    let i = this._getRegion(t, e);
    i.element === xT.RESIZE && this._updateCursor({
      event: e,
      element: i.element,
      axis: i.tableAxis,
      interactionCpp: InteractionCpp
    });
    this.state = {
      ...i,
      mouse: Dv.HOVERED
    };
  }
  handleMouseDown(e) {
    if (!InteractionCpp || !this._canProcessTableEvents({
      interactionCpp: InteractionCpp
    })) return;
    let t = this._getOrUpdateTableUI(e.viewport());
    let i = this._getRegion(t, e);
    switch (i.element) {
      case xT.NONE:
        return;
      case xT.REORDER:
        {
          let t = InteractionCpp.getTableSpanIdAtIndex(i.tableAxis, i.elementIndex);
          let n = InteractionCpp.viewportSpaceToTableSpanRelativePosition(t, e.viewportSpaceMouse());
          this.state = {
            element: i.element,
            elementIndex: i.elementIndex,
            dividerHoverIndex: i.elementIndex,
            tableAxis: i.tableAxis,
            mouse: Dv.SELECTED,
            elementId: t,
            spanMouseDown: Vector2D.fromFigVector(n),
            numReorderingSpans: null
          };
          this._updateCursor({
            event: e,
            element: i.element,
            axis: i.tableAxis,
            interactionCpp: InteractionCpp
          });
          InteractionCpp.setActiveUserAction(UserActionState.DRAGGING);
          recordReorderTableSpanActive();
          break;
        }
      case xT.ADD:
        this.state = {
          element: i.element,
          elementIndex: i.elementIndex,
          tableAxis: i.tableAxis,
          mouse: Dv.SELECTED
        };
        break;
      case xT.RESIZE:
        if (this._updateCursor({
          event: e,
          element: i.element,
          axis: i.tableAxis,
          interactionCpp: InteractionCpp
        }), 2 === e.clickCount()) {
          let e = InteractionCpp.getTableSpanIdAtIndex(i.tableAxis, Math.max(0, i.elementIndex - 1));
          InteractionCpp.resizeTableSpanToFitContents(i.tableAxis, e);
        } else {
          let e = InteractionCpp.getTableSpanOppositePosition(i.tableAxis, i.elementIndex);
          this.state = {
            element: i.element,
            opposite: e,
            elementIndex: i.elementIndex,
            tableAxis: i.tableAxis,
            mouse: Dv.SELECTED
          };
          InteractionCpp.setActiveUserAction(UserActionState.RESIZING);
        }
        break;
      case xT.APPEND:
        this.state = {
          element: i.element,
          tableAxis: i.tableAxis,
          mouse: Dv.SELECTED
        };
    }
    e.accept(this);
  }
  _calculateDirectionOfMouseDrag(e, t) {
    let i = t.minus(this.previousMouseDragPos);
    let n = e === LayoutDirection.ROW ? i.y : i.x;
    return n < 0 ? e === LayoutDirection.ROW ? 2 : 0 : n > 0 ? e === LayoutDirection.ROW ? 3 : 1 : void 0;
  }
  _calculateRepresentativeSpanIndex({
    tableAxis: e,
    directionOfMouseDrag: t,
    currentElementIndex: i,
    numSelectedSpans: n,
    interactionCpp: r
  }) {
    if (n <= 1 || void 0 === t) return i;
    switch (t) {
      case 2:
      case 0:
        return r.findSmallestIndexOfSelectedSpans(e);
      case 3:
      case 1:
        return r.findLargestIndexOfSelectedSpans(e);
    }
  }
  _shouldReorderSpans(e, t, i, n) {
    return (2 === n || 0 === n) && i > e || (3 === n || 1 === n) && i < e;
  }
  _getSortedSelectedSpanIds({
    tableAxis: e,
    directionOfMouseDrag: t,
    interactionCpp: i
  }) {
    let n;
    if (void 0 === t) return [];
    let r = i.tableCellSelectionSelectedSpanIndexes(e);
    switch (t) {
      case 2:
      case 0:
        n = r.sort((e, t) => e - t);
        break;
      case 3:
      case 1:
        n = r.sort((e, t) => t - e);
    }
    let a = [];
    for (let t of n) a.push([i.getTableSpanIdAtIndex(e, t), t]);
    return a;
  }
  handleMouseDrag(e) {
    if (InteractionCpp && this._canProcessTableEvents({
      interactionCpp: InteractionCpp
    }) && (this._getSnapper({
      interactionCpp: InteractionCpp
    }).clearSnappingVisualizations(), this.state.mouse === Dv.SELECTED || this.state.mouse === Dv.DRAGGED)) {
      switch (this.state.element) {
        case xT.REORDER:
          {
            let {
              element,
              tableAxis,
              elementId,
              elementIndex
            } = this.state;
            if (this._updateCursor({
              event: e,
              element,
              axis: tableAxis,
              interactionCpp: InteractionCpp
            }), recordReorderTableSpanActive(), !this.didDrag) {
              for (let e of (InteractionCpp.tableCellSelectionSelectedSpanIndexes(tableAxis).includes(elementIndex) || this._selectSpan({
                axis: tableAxis,
                spanIndex: elementIndex,
                addToExistingSelection: !1,
                interactionCpp: InteractionCpp
              }), InteractionCpp.tableCellSelectionSelectedSpanIndexes(tableAxis))) {
                let t = InteractionCpp.getTableSpanIdAtIndex(tableAxis, e);
                InteractionCpp.setTableSpanFloating(t, !0);
              }
              InteractionCpp.tableCellSelectionSelectedSpanIndexes(tableAxis).length > 1 && InteractionCpp.clumpTogetherSelectedSpansAround(tableAxis, elementId);
            }
            let o = InteractionCpp.tableCellSelectionSelectedSpanIndexes(tableAxis);
            if (null === this.state.numReorderingSpans) this.state.numReorderingSpans = o.length;else if (this.state.numReorderingSpans !== o.length) {
              this.handleMouseUp(e);
              InteractionCpp.ensureNoTableSpansAreFloating();
              return;
            }
            let l = e.viewportSpaceMouse();
            let d = Vector2D.fromVectorD(l);
            let p = this._calculateDirectionOfMouseDrag(tableAxis, d);
            let m = this._calculateRepresentativeSpanIndex({
              tableAxis,
              directionOfMouseDrag: p,
              currentElementIndex: elementIndex,
              numSelectedSpans: o.length,
              interactionCpp: InteractionCpp
            });
            let h = InteractionCpp.getTableSpanIdAtIndex(tableAxis, m);
            let g = tableAxis === LayoutDirection.ROW ? this.ui._getRowPositions() : this.ui._getColumnPositions();
            let f = g[elementIndex] - g[m];
            let _ = tableAxis === LayoutDirection.ROW ? new Vector2D(0, f) : new Vector2D(f, 0);
            let A = d.minus(_);
            let y = this.ui.getNearestSpan(tableAxis, tableAxis === LayoutDirection.ROW ? A.y : A.x);
            let b = y > m ? y - 1 : y;
            if (this._shouldReorderSpans(y, b, m, p)) {
              let e = InteractionCpp.tableCellSelectionSelectedSpanIndexes(tableAxis).length;
              if (1 === e) {
                InteractionCpp.reorderTableSpan(tableAxis, h, y);
                this.state.elementIndex = b;
              } else if (e > 1) {
                let e = this._getSortedSelectedSpanIds({
                  tableAxis,
                  directionOfMouseDrag: p,
                  interactionCpp: InteractionCpp
                });
                let t = y - m;
                for (let [n, a] of e) InteractionCpp.reorderTableSpan(tableAxis, n, a + t);
                this.state.elementIndex = this.state.elementIndex + (b - m);
              }
            }
            this.state.dividerHoverIndex = y;
            this.state.mouse = Dv.DRAGGED;
            let v = Vector2D.fromFigVector(InteractionCpp.viewportSpaceToTableSpanRelativePosition(this.state.elementId, l));
            let I = InteractionCpp.getTableSpanIdAtIndex(this.state.tableAxis, 0);
            let E = Vector2D.fromFigVector(InteractionCpp.viewportSpaceToTableSpanRelativePosition(I, l));
            let x = this._displacementSpringEffect(tableAxis, v.minus(this.state.spanMouseDown), E.minus(this.state.spanMouseDown));
            for (let e of InteractionCpp.tableCellSelectionSelectedSpanIndexes(tableAxis)) {
              let t = InteractionCpp.getTableSpanIdAtIndex(tableAxis, e);
              InteractionCpp.setTableSpanDisplacement(t, x);
            }
            this.previousMouseDragPos = Vector2D.fromVectorD(l);
            e.accept(this);
            break;
          }
        case xT.RESIZE:
          {
            let {
              tableAxis,
              elementIndex,
              opposite
            } = this.state;
            this._updateSnapTargets({
              event: e,
              axis: tableAxis,
              spanFencepostIndex: elementIndex,
              interactionCpp: InteractionCpp
            });
            this._updateCursor({
              event: e,
              element: this.state.element,
              axis: tableAxis,
              interactionCpp: InteractionCpp
            });
            let a = e.viewport().viewportSpaceToCanvasSpace(e.viewportSpaceMouse());
            let o = InteractionCpp.gridSnapBehavior();
            let l = Vector2D.fromVectorD(a).divideBy(o).rounded().multiplyBy(o);
            let d = (0 === elementIndex ? -1 : 1) * (this._mouseComponent(l, tableAxis) - opposite);
            let c = (0 === elementIndex ? -1 : 1) * this._getSnapOffset({
              event: e,
              mouse: l,
              interactionCpp: InteractionCpp
            });
            let p = Math.max(0, elementIndex - 1);
            InteractionCpp.resizeTableSpan(tableAxis, p, d + c, 0 === elementIndex);
            this._getSnapper({
              interactionCpp: InteractionCpp
            }).addPostSnappingVisualizations();
            this.state.mouse = Dv.DRAGGED;
            e.accept(this);
          }
      }
      this.didDrag = !0;
    }
  }
  handleMouseUp(e) {
    if (!InteractionCpp || !this._canProcessTableEvents({
      interactionCpp: InteractionCpp
    })) {
      this.didDrag = !1;
      return;
    }
    let t = this._getOrUpdateTableUI(e.viewport()).getHoveredRegion(Vector2D.fromVectorD(e.viewportSpaceMouse()));
    if (this.state.mouse === Dv.SELECTED || this.state.mouse === Dv.DRAGGED) {
      switch (this.state.element) {
        case xT.ADD:
          let {
            element,
            elementIndex,
            tableAxis
          } = this.state;
          t.element === element && t.elementIndex === elementIndex && InteractionCpp.insertTableSpan(tableAxis, elementIndex);
          break;
        case xT.REORDER:
          {
            let {
              elementId,
              elementIndex: _elementIndex,
              tableAxis: _tableAxis
            } = this.state;
            if (this.didDrag && InteractionCpp.tableCellSelectionSelectedSpanIndexes(_tableAxis).length > 0) {
              for (let e of (InteractionCpp.logTableSpanReordered(_tableAxis, elementId, _elementIndex), recordReorderTableSpanActive(), InteractionCpp.tableCellSelectionSelectedSpanIndexes(_tableAxis))) {
                let t = InteractionCpp.getTableSpanIdAtIndex(_tableAxis, e);
                InteractionCpp.setTableSpanFloating(t, !1);
              }
              InteractionCpp.setActiveUserAction(UserActionState.DEFAULT);
              break;
            }
            if (t.element === this.state.element && t.elementIndex === this.state.elementIndex) {
              if (e.isShiftPressed()) {
                let e = InteractionCpp.getTableSpanIdAtIndex(_tableAxis, _elementIndex);
                InteractionCpp.selectTableSpanRange(_tableAxis, e, !1);
              } else {
                this._selectSpan({
                  axis: _tableAxis,
                  spanIndex: _elementIndex,
                  addToExistingSelection: e.isMetaPressed(),
                  interactionCpp: InteractionCpp
                });
                let t = getSingletonSceneGraph().get(e.canvasGUID());
                0 === (t?.directlySelectedNodes.length ?? 0) && (this.state = {
                  element: xT.NONE,
                  mouse: Dv.INACTIVE
                });
              }
            }
            for (let e of InteractionCpp.tableCellSelectionSelectedSpanIndexes(_tableAxis)) {
              let t = InteractionCpp.getTableSpanIdAtIndex(_tableAxis, e);
              InteractionCpp.setTableSpanFloating(t, !1);
            }
            InteractionCpp.setActiveUserAction(UserActionState.DEFAULT);
            break;
          }
        case xT.APPEND:
          {
            let e = this.state.tableAxis === LayoutDirection.COLUMN ? this.ui.numColumns : this.ui.numRows;
            InteractionCpp.insertTableSpan(this.state.tableAxis, e);
            break;
          }
        case xT.RESIZE:
          InteractionCpp.setActiveUserAction(UserActionState.DEFAULT);
          this._getSnapper({
            interactionCpp: InteractionCpp
          }).clearCache();
      }
      this.didDrag = !1;
      this.state.mouse = Dv.HOVERED;
      e.accept(this);
    }
  }
  handleBeforeFrame() {
    if (!InteractionCpp) return;
    let e = this.shouldRenderTableUi;
    this.shouldRenderTableUi = InteractionCpp.shouldRenderTableUiForSelection();
    e && !this.shouldRenderTableUi && InteractionCpp.ensureNoTableSpansAreFloating();
  }
  handleContextMenuOpen(e) {
    if (!InteractionCpp || !this._canProcessTableEvents({
      interactionCpp: InteractionCpp
    })) return;
    let t = this._getOrUpdateTableUI(e.viewport());
    let i = this._getRegion(t, e);
    if (i.element === xT.REORDER) {
      let t = i.tableAxis;
      let n = i.elementIndex;
      if (e.isShiftPressed()) {
        let e = InteractionCpp.getTableSpanIdAtIndex(t, n);
        InteractionCpp.selectTableSpanRange(t, e, !1);
      } else this._selectSpan({
        axis: t,
        spanIndex: n,
        addToExistingSelection: e.isMetaPressed(),
        interactionCpp: InteractionCpp
      });
      e.setOwnedBySelection(!0);
      e.accept(this);
    }
  }
  renderSelection(e) {
    if (InteractionCpp) for (let t of filterNumberValues(LayoutDirection)) for (let i of InteractionCpp.tableCellSelectionSelectedSpanIndexes(t)) this.ui.renderExpandedReorderHandle(e, t, i, Dv.SELECTED);
  }
  renderHoveredElements(e, t) {
    let i = this._getOrUpdateTableUI(e);
    switch (this.state.element) {
      case xT.NONE:
        break;
      case xT.ADD:
        {
          let {
            tableAxis,
            elementIndex,
            mouse
          } = this.state;
          i.renderAddButton(t, tableAxis, elementIndex, mouse);
          i.renderDivider(t, tableAxis, elementIndex, mouse);
          break;
        }
      case xT.REORDER:
        {
          let {
            tableAxis,
            elementIndex,
            mouse
          } = this.state;
          i.renderExpandedReorderHandle(t, tableAxis, elementIndex, mouse);
        }
    }
  }
  renderHoveredElementsUnderEditModeUI(e, t) {
    let i = this._getOrUpdateTableUI(e);
    this.state.element === xT.APPEND && i.renderAppendButton(t, this.state.tableAxis, this.state.mouse);
  }
  shouldRenderAllInactiveElements() {
    return BrowserInfo.isIpad;
  }
  render(e, t) {
    let i = this._getOrUpdateTableUI(e);
    InteractionCpp && i.shouldRender() && this._canProcessTableEvents({
      interactionCpp: InteractionCpp
    }) && (this.shouldRenderAllInactiveElements() ? i.renderAllInactiveElements(t) : this._isSelectingOrDraggingReorderHandle() || this._isResizingSpan() || i.renderHoveredInactiveElements(t, this.hoveredSpans), this.renderHoveredElements(e, t), this.renderSelection(t), InteractionCpp.renderSnappingVisualizations(this._getSnapper({
      interactionCpp: InteractionCpp
    }), t, e));
  }
  renderUnderEditModeUI(e, t) {
    let i = this._getOrUpdateTableUI(e);
    InteractionCpp && i.shouldRender() && this._canProcessTableEvents({
      interactionCpp: InteractionCpp
    }) && (this.shouldRenderAllInactiveElements() ? i.renderAllInactiveElementsUnderEditModeUI(t) : this._isSelectingOrDraggingReorderHandle() || this._isResizingSpan() || i.renderHoveredInactiveElementsUnderEditModeUI(t, this.hoveredSpans), this.renderHoveredElementsUnderEditModeUI(e, t));
  }
  reset() {}
};
m.springStiffnessDistance = 25;
m.boundarySpringStiffnessDistance = 64;
m.springStiffnessPower = 3;
export let $$h0 = m;
export const H = $$h0;