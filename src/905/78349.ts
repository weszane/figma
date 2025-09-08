import { QR } from "../figma_app/273493";
import { AutoLayoutAlignment, YesNo, AbsolutePositionType, ConnectorType, AxisType, UnselectedNodesMode, InteractionCpp, StrokeAlignment, SnapshotLevel } from "../figma_app/763686";
import { permissionScopeHandler, scopeAwareFunction } from "../905/189185";
import { M } from "../905/512402";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { H } from "../figma_app/147959";
import { logError } from "../905/714362";
import { fullscreenValue } from "../figma_app/455680";
import { j } from "../905/881708";
import { H0 } from "../figma_app/682945";
import { isConnector } from "../905/739338";
import { s as _$$s } from "../905/583953";
class f {
  static getHoveredEndpoint(e, t, i, n, r, a, s, o) {
    let l = new Set();
    let d = this.getHoveredEndpointRecursive(e, t, i, n, r, a, s, l, o);
    return {
      endpoint: this.ensureSlidesInvariant(d.endpoint, e, t),
      hoverzone: d.hoverzone
    };
  }
  static getHoveredEndpointRecursive(e, t, i, n, a, s, o, d, c) {
    s.clearSnappingVisualizations();
    let u = c.getHoveredNodeForConnector(e, Array.from(d));
    let p = u.hoveredNodeID;
    let m = p ? getSingletonSceneGraph().get(p) : null;
    let h = t?.parentNode;
    let g = h && m && h.guid === m.guid;
    let f = h?.isGroup;
    let _ = h?.isSection;
    if (g || !m && f) return this.handleHoveringConnectorParent({
      event: e,
      connector: t,
      parent: h,
      otherEndpointPosition: a,
      snapper: s,
      hoveredNodeInfo: u,
      connectorInSection: _,
      interactionCpp: c
    });
    if (m) return this.handleHoveringNode({
      event: e,
      connector: t,
      hover: m,
      otherEndpointPosition: a,
      snapper: s,
      hoveredNodeInfo: u,
      shouldIgnoreMagnets: o,
      previousHover: i,
      previousHoverzone: n,
      ignoredNodes: d,
      interactionCpp: c
    });
    {
      let i = this.getSnappedMousePositionForEndpoint(e, t, a, s, c);
      return {
        endpoint: {
          endpointNodeID: e.canvasGUID(),
          position: i,
          magnet: AutoLayoutAlignment.NONE
        },
        hoverzone: u.hoverzone
      };
    }
  }
  static handleHoveringConnectorParent({
    event: e,
    connector: t,
    parent: i,
    otherEndpointPosition: n,
    snapper: a,
    hoveredNodeInfo: o,
    connectorInSection: l,
    interactionCpp: d
  }) {
    let u;
    u = l ? this.getSnappedMousePositionForEndpoint(e, t, n, a, d) : M.fromVectorD(d.getConnectorMousePosition(e, YesNo.NO));
    let p = _$$s.fromFigMatrix(i.absoluteTransform).inverseTransformPoint(M.fromFigVector(u));
    return p.isInvalid() ? (logError("ConnectorToolBehavior", "could not inverse transform mouse position in ConnectorToolBehavior", {
      position: u
    }), {
      endpoint: {
        endpointNodeID: e.canvasGUID(),
        position: u,
        magnet: AutoLayoutAlignment.NONE
      },
      hoverzone: o.hoverzone
    }) : {
      endpoint: {
        endpointNodeID: i.guid,
        position: p,
        magnet: AutoLayoutAlignment.NONE
      },
      hoverzone: o.hoverzone
    };
  }
  static handleHoveringNode({
    event: e,
    connector: t,
    hover: i,
    otherEndpointPosition: n,
    snapper: a,
    hoveredNodeInfo: o,
    shouldIgnoreMagnets: l,
    previousHover: d,
    previousHoverzone: u,
    ignoredNodes: p,
    interactionCpp: m
  }) {
    let h = m.getDefaultStickySize();
    let f = this.getIsHoveringLargeNode(i, h);
    let _ = M.fromVectorD(m.getConnectorMousePosition(e, YesNo.NO));
    let A = this.getIsHoveringNearMagnet({
      isHoveringLargeNode: f,
      mouse: _,
      hover: i,
      connector: t,
      interactionCpp: m
    });
    let y = this.getHasPreviouslyIgnoredMagnets({
      previousHover: d,
      hover: i,
      previousHoverzone: u
    });
    if (this.shouldPinConnectorToFixedPositionOnNode({
      shouldIgnoreMagnets: l,
      event: e,
      hasPreviouslyIgnoredMagnets: y,
      isHoveringLargeNode: f,
      hover: i,
      isHoveringNearMagnet: A,
      hoveredNodeInfo: o
    })) {
      if (_ = M.fromVectorD(m.getConnectorMousePositionWithOtherEndpoint(e, YesNo.NO, n)), this.snapEndpointToEdgeOfHoveredNode({
        snapper: a,
        previousHover: d,
        hover: i,
        event: e,
        hasPreviouslyIgnoredMagnets: y,
        mouse: _,
        interactionCpp: m
      }), f && !A && "SHAPE_WITH_TEXT" === i.type) {
        let r = i.immutableFrameShape;
        if (r && !r.hasPaintedFill) {
          p.add(i.guid);
          return this.getHoveredEndpointRecursive(e, t, d, u, n, a, l, p, m);
        }
      }
      let h = _$$s.fromFigMatrix(i.absoluteTransform).inverseTransformPoint(M.fromVectorD(_));
      if (h !== M.invalid()) {
        let t = this.getIsAbsoluteNotPinned({
          hoveredNodeInfo: o,
          shouldIgnoreMagnets: l,
          event: e,
          isHoveringLargeNode: f,
          hover: i
        });
        return {
          endpoint: {
            endpointNodeID: i.guid,
            position: h,
            magnet: t ? AutoLayoutAlignment.ABSOLUTE : AutoLayoutAlignment.NONE
          },
          hoverzone: o.hoverzone
        };
      }
      logError("ConnectorToolBehavior", "could not inverse transform mouse position", {
        position: _
      });
    }
    let b = t ? t.connectorLineStyle : m.getToolLineStyle();
    let v = o.hoverzone === AbsolutePositionType.CENTER && b === ConnectorType.ELBOWED;
    if (o.hoverzone !== AbsolutePositionType.NONE && !v) return {
      endpoint: {
        endpointNodeID: i.guid,
        position: o.hoverzonePosition,
        magnet: this.hoverzoneToMagnet(o.hoverzone)
      },
      hoverzone: o.hoverzone
    };
    let I = m.closestMagnetToPoint(_, t ? t.connectorLineStyle : m.getToolLineStyle(), i.guid);
    return {
      endpoint: {
        endpointNodeID: i.guid,
        position: new M(),
        magnet: I
      },
      hoverzone: o.hoverzone
    };
  }
  static snapEndpointToEdgeOfHoveredNode({
    snapper: e,
    previousHover: t,
    hover: i,
    event: n,
    hasPreviouslyIgnoredMagnets: a,
    mouse: l,
    interactionCpp: d
  }) {
    if (e) {
      if (t) {
        let s = i ? t.endpointNodeID !== i.guid : t.endpointNodeID !== n.canvasGUID();
        (!a || s || t.endpointNodeID === defaultSessionLocalIDString) && d.cacheSnapTargetsForNode(e, i.guid || defaultSessionLocalIDString, AxisType.AXIS);
      }
      let c = n.canvasSpaceSnappingThreshold();
      let u = n.viewport().canvasSpaceViewportRect();
      l.incrementBy(M.fromVectorD(d.snapToPointDeltaPoint(e, l, c, u)));
      e.clearSnappingVisualizations();
    }
  }
  static getIsAbsoluteNotPinned({
    hoveredNodeInfo: e,
    shouldIgnoreMagnets: t,
    event: i,
    isHoveringLargeNode: n,
    hover: a
  }) {
    return e.hoverzone === AbsolutePositionType.ABSOLUTE && !(t || i.isStandardShortcutKeyPressed() || n || a.hasPaintedFill && a.fills.filter(e => "IMAGE" === e.type).length > 0);
  }
  static shouldPinConnectorToFixedPositionOnNode({
    shouldIgnoreMagnets: e,
    event: t,
    hasPreviouslyIgnoredMagnets: i,
    isHoveringLargeNode: n,
    hover: a,
    isHoveringNearMagnet: s,
    hoveredNodeInfo: o
  }) {
    return e || t.isStandardShortcutKeyPressed() || i || n && "SECTION" === a.type && !s || o.hoverzone === AbsolutePositionType.ABSOLUTE;
  }
  static getIsHoveringNearMagnet({
    isHoveringLargeNode: e,
    mouse: t,
    hover: i,
    connector: n,
    interactionCpp: a
  }) {
    return e && a.closestMagnetToPointWithThreshold(t, i.guid || defaultSessionLocalIDString, n ? n.connectorLineStyle : a.getToolLineStyle(), 100) !== AutoLayoutAlignment.NONE;
  }
  static getIsHoveringLargeNode(e, t) {
    return e.size.x > 2 * t.x || e.size.y > 2 * t.y;
  }
  static getHasPreviouslyIgnoredMagnets({
    previousHover: e,
    hover: t,
    previousHoverzone: i
  }) {
    return null !== e && t.guid === e.endpointNodeID && e.magnet === AutoLayoutAlignment.NONE && i === AbsolutePositionType.NONE;
  }
  static hoverzoneToMagnet(e) {
    switch (e) {
      case AbsolutePositionType.EDGE:
        return AutoLayoutAlignment.EDGE;
      case AbsolutePositionType.ABSOLUTE:
        return AutoLayoutAlignment.ABSOLUTE;
      case AbsolutePositionType.CENTER:
        return AutoLayoutAlignment.CENTER;
      case AbsolutePositionType.TOP:
        return AutoLayoutAlignment.TOP;
      case AbsolutePositionType.RIGHT:
        return AutoLayoutAlignment.RIGHT;
      case AbsolutePositionType.LEFT:
        return AutoLayoutAlignment.LEFT;
      case AbsolutePositionType.BOTTOM:
        return AutoLayoutAlignment.BOTTOM;
      default:
        return AutoLayoutAlignment.NONE;
    }
  }
  static getSnappedMousePositionForEndpoint(e, t, i, n, a) {
    if (!t || !t.isConnectorUnattached()) return M.fromVectorD(a.getConnectorMousePositionWithOtherEndpoint(e, YesNo.YES, i));
    let o = M.fromVectorD(a.getConnectorMousePositionWithOtherEndpoint(e, YesNo.YES, i));
    a.cacheSnapTargetsForSelection(n, [t.guid], AxisType.AXIS, UnselectedNodesMode.UNSELECTED_NODES);
    let l = e.canvasSpaceSnappingThreshold();
    let d = e.viewport().canvasSpaceViewportRect();
    o.incrementBy(M.fromVectorD(a.snapToPointDeltaPoint(n, o, l, d)));
    return o;
  }
  static connectorEndpointsAreEqual(e, t) {
    return e.endpointNodeID === t.endpointNodeID && e.magnet === t.magnet && e.position.x === t.position.x && e.position.y === t.position.y;
  }
  static isEdgeOrCardinalHoverzone(e) {
    return e === AbsolutePositionType.EDGE || e === AbsolutePositionType.TOP || e === AbsolutePositionType.BOTTOM || e === AbsolutePositionType.LEFT || e === AbsolutePositionType.RIGHT;
  }
  static ensureSlidesInvariant(e, t, i) {
    if (i && isConnector(i) && i.connectorStart) {
      let n = getSingletonSceneGraph().get(i.connectorStart.endpointNodeID);
      let a = n?.containingSlideId;
      if (n && a !== defaultSessionLocalIDString) {
        let i = getSingletonSceneGraph().get(e.endpointNodeID);
        let n = i?.containingSlideId;
        if (n !== defaultSessionLocalIDString && a !== n) return {
          endpointNodeID: t.canvasGUID(),
          position: M.fromVectorD(t.canvasSpaceMouse()),
          magnet: AutoLayoutAlignment.NONE
        };
      }
    }
    return e;
  }
}
export class $$_0 extends j {
  constructor(e) {
    super(e);
    this._toolLineStyle = void 0;
    this._endpointHoverzone = AbsolutePositionType.NONE;
    this._createdFromCenter = !1;
    this._snapper = void 0;
    this._ignoreMagnetsTimer = 0;
    this._shouldIgnoreMagnets = !1;
    this._insertionPoint = M.invalid();
    this._didDragPastThreshold = !1;
    this._didSetConnectorStartWithClick = !1;
    this._keyboardShortcutTracked = !1;
    this.IGNORE_CONNECTOR_MAGNETS_MS = 1e3;
    this._connectorGUID = defaultSessionLocalIDString;
    this._hoveredEndpoint = null;
    this._startEndpointWithAuto = {
      endpointNodeID: defaultSessionLocalIDString,
      position: M.invalid(),
      magnet: AutoLayoutAlignment.NONE
    };
    this._endpointHoverzone = AbsolutePositionType.NONE;
    this._hoveredEndpointIgnoringMagnets = {
      endpointNodeID: defaultSessionLocalIDString,
      position: M.invalid(),
      magnet: AutoLayoutAlignment.NONE
    };
  }
  _getToolLineStyle({
    interactionCpp: e
  }) {
    this._toolLineStyle || (this._toolLineStyle = e.getToolLineStyle());
    return this._toolLineStyle;
  }
  _getSnapper({
    interactionCpp: e
  }) {
    this._snapper || (this._snapper = e.getConnectorSnapper());
    return this._snapper;
  }
  handleMouseLeave(e) {}
  handleMouseDown(e) {
    this.handleMouseMove(e);
    this._connectorGUID === defaultSessionLocalIDString ? this.createConnector(e) ? (e.accept(this), e.invalidateViewport()) : logError("connector tool", "unable to create new connector", {}, {
      reportAsSentryError: !0
    }) : (e.accept(this), this.updateConnector(e));
    InteractionCpp?.setEventCursor(e, "crosshairCursor");
  }
  handleMouseDrag(e) {
    clearTimeout(this._ignoreMagnetsTimer);
    this.updateHoverState(e);
    this.updateConnector(e);
    InteractionCpp?.setEventCursor(e, "crosshairCursor");
    !this._didDragPastThreshold && M.fromVectorD(e.canvasSpaceMouse()).distanceTo(this._insertionPoint) > e.canvasSpaceMouseThreshold() && (this._didDragPastThreshold = !0);
  }
  handleMouseMove(e) {
    this.updateHoverState(e);
    InteractionCpp?.setEventCursor(e, "crosshairCursor");
    let t = this._connectorGUID !== defaultSessionLocalIDString;
    t && (clearTimeout(this._ignoreMagnetsTimer), permissionScopeHandler.user("connector-tool-mouse-move", () => this.updateConnector(e)));
    t && e.invalidateViewport();
  }
  handleMouseUp(e) {
    if (e.wasCanceled()) {
      this.resetState();
      return;
    }
    let t = this._connectorGUID !== defaultSessionLocalIDString ? getSingletonSceneGraph().get(this._connectorGUID) : null;
    t && (this.handleMouseDrag(e), this._didDragPastThreshold || this._didSetConnectorStartWithClick ? (this.possiblyDeleteConnectorIfNotVisible(t), getSingletonSceneGraph().get(this._connectorGUID) ? InteractionCpp?.logConnectorInsertion(this._connectorGUID) : InteractionCpp?.trySwitchToSelectToolCpp(e), this.resetState()) : (this._didSetConnectorStartWithClick = !0, this._didDragPastThreshold = !1), e.invalidateViewport());
  }
  handleContextMenuOpen() {}
  handleBeforeFrame() {}
  render(e, t) {
    if (!e.isMouseOverCanvas() || !InteractionCpp || .35 > e.canvasScale()) return;
    InteractionCpp.renderStraightConnectorGuidelines(this._connectorGUID, e, t);
    let i = getSingletonSceneGraph().get(this._hoveredEndpoint?.endpointNodeID || "");
    let n = this._connectorGUID !== defaultSessionLocalIDString ? getSingletonSceneGraph().get(this._connectorGUID) : null;
    i && "CANVAS" !== i.type && InteractionCpp.renderEndpointNodeHoverIndicators(i.guid, this._hoveredEndpoint, this._endpointHoverzone, n ? n.connectorLineStyle : InteractionCpp.getToolLineStyle(), e, t);
    InteractionCpp.renderSnappingVisualizations(this._getSnapper({
      interactionCpp: InteractionCpp
    }), t, e);
  }
  renderUnderEditModeUI(e, t) {}
  renderMagnet(e, t, i) {
    if (!InteractionCpp) return;
    let a = QR(1, 1, 1);
    let s = InteractionCpp.getNodeImmutableFrameSelected();
    i.fillAndStrokeCircle(e, 6, t ? s : a, t ? a : s, 2, StrokeAlignment.OUTSIDE);
  }
  possiblyDeleteConnectorIfNotVisible(e) {
    f.connectorEndpointsAreEqual(e.connectorStart, e.connectorEnd) && e.removeSelfAndChildren();
  }
  updateHoverState(e) {
    if (!InteractionCpp) return;
    let t = getSingletonSceneGraph().get(this._connectorGUID);
    let i = this._hoveredEndpoint;
    let n = this._endpointHoverzone;
    let a = t ? M.fromVectorD(t.connectorStartCanvasPosition) : M.invalid();
    let o = f.getHoveredEndpoint(e, t, i, n, a, this._getSnapper({
      interactionCpp: InteractionCpp
    }), this._shouldIgnoreMagnets, InteractionCpp);
    if (this._hoveredEndpoint = o.endpoint, this._endpointHoverzone = o.hoverzone, this._shouldIgnoreMagnets && f.isEdgeOrCardinalHoverzone(this._endpointHoverzone) && (this._shouldIgnoreMagnets = !1), i && i.endpointNodeID !== this._hoveredEndpoint.endpointNodeID) {
      this._shouldIgnoreMagnets = !1;
      let e = i.magnet === AutoLayoutAlignment.NONE && this._hoveredEndpoint.magnet !== AutoLayoutAlignment.NONE;
      let t = i.magnet !== AutoLayoutAlignment.NONE && this._hoveredEndpoint.magnet === AutoLayoutAlignment.NONE;
      let a = n === AbsolutePositionType.NONE && this._endpointHoverzone !== AbsolutePositionType.NONE;
      let s = n !== AbsolutePositionType.NONE && this._endpointHoverzone === AbsolutePositionType.NONE;
      (e || t || a || s) && H.trigger(SnapshotLevel.SNAP);
    }
    let c = f.getHoveredEndpoint(e, t, i, this._endpointHoverzone, this._insertionPoint, this._getSnapper({
      interactionCpp: InteractionCpp
    }), !0, InteractionCpp);
    this._hoveredEndpointIgnoringMagnets = this._shouldIgnoreMagnets || this._hoveredEndpoint?.magnet === AutoLayoutAlignment.NONE ? this._hoveredEndpoint : c.endpoint;
    (i?.endpointNodeID !== this._hoveredEndpoint.endpointNodeID || i.magnet !== this._hoveredEndpoint.magnet || n !== this._endpointHoverzone || this._endpointHoverzone !== AbsolutePositionType.NONE) && e.invalidateViewport();
  }
  createConnector(e) {
    if (!InteractionCpp) return !1;
    this._connectorGUID = InteractionCpp.createNewConnector(e);
    let t = this._connectorGUID !== defaultSessionLocalIDString ? getSingletonSceneGraph().get(this._connectorGUID) : null;
    if (t) {
      t.connectorStart = t.connectorEnd = this._hoveredEndpoint;
      let i = t.connectorStart.endpointNodeID ? getSingletonSceneGraph().get(t.connectorStart.endpointNodeID) : null;
      let n = i?.type === "SHAPE_WITH_TEXT" || i?.type === "INSTANCE";
      this._createdFromCenter = this._endpointHoverzone === AbsolutePositionType.CENTER;
      let o = this._getToolLineStyle({
        interactionCpp: InteractionCpp
      });
      this._createdFromCenter && (o === ConnectorType.ELBOWED || o === ConnectorType.CURVED) && n && (this._hoveredEndpoint.magnet = AutoLayoutAlignment.AUTO, this._startEndpointWithAuto = this._hoveredEndpoint);
      this._insertionPoint = M.fromVectorD(InteractionCpp.getConnectorMousePosition(e, YesNo.YES));
      let d = t.guid;
      InteractionCpp.insertNodeAtPoint(e.canvasGUID(), d, this._insertionPoint, new M(0, 0));
      let c = e.canvasScene().immutableFrameObserverReference();
      c.invalidateConnectorForReparenting(d);
      c.updateImmutableFrameInternal();
      let u = scopeAwareFunction.user("connector-tool-hover-ignore-magnets-timer", () => {
        !f.isEdgeOrCardinalHoverzone(this._endpointHoverzone) && (this._shouldIgnoreMagnets = !0, t && (this._hoveredEndpoint = this._hoveredEndpointIgnoringMagnets, t.connectorStart = t.connectorEnd = this._hoveredEndpoint));
      });
      this._ignoreMagnetsTimer = setTimeout(u, this.IGNORE_CONNECTOR_MAGNETS_MS);
      return !0;
    }
    return !1;
  }
  updateConnector(e) {
    if (!InteractionCpp) return;
    let t = this._connectorGUID !== defaultSessionLocalIDString ? getSingletonSceneGraph().get(this._connectorGUID) : null;
    if (t) {
      let i = t.connectorLineStyle = e.isShiftPressed() ? ConnectorType.STRAIGHT : this._getToolLineStyle({
        interactionCpp: InteractionCpp
      });
      t.connectorLineStyle = i;
      t.immutableFrameShape && (t.immutableFrameShape.cornerRadius = InteractionCpp.getDefaultCornerRadius(i));
      e.isShiftPressed() && !this._keyboardShortcutTracked && (this._keyboardShortcutTracked = !0, fullscreenValue.usedKeyboardShortcut("straight-connector"));
      this._createdFromCenter && this._startEndpointWithAuto.endpointNodeID !== defaultSessionLocalIDString && (t.connectorStart = this._startEndpointWithAuto);
      let n = t.connectorEnd.endpointNodeID ? getSingletonSceneGraph().get(t.connectorEnd.endpointNodeID) : null;
      let s = n?.type === "SHAPE_WITH_TEXT" || n?.type === "INSTANCE";
      if ((this._toolLineStyle === ConnectorType.ELBOWED || this._toolLineStyle === ConnectorType.CURVED) && s && this._endpointHoverzone === AbsolutePositionType.CENTER && (this._hoveredEndpoint.magnet = AutoLayoutAlignment.AUTO), t.connectorEnd = this._hoveredEndpoint, t.connectorStart?.endpointNodeID && t.connectorEnd?.endpointNodeID) {
        let e = getSingletonSceneGraph().get(t.connectorStart.endpointNodeID);
        let i = getSingletonSceneGraph().get(t.connectorEnd.endpointNodeID);
        e?.type === "SHAPE_WITH_TEXT" && i?.type === "SHAPE_WITH_TEXT" && H0();
      }
      if (!this._shouldIgnoreMagnets) {
        let e = scopeAwareFunction.user("connector-tool-hover-ignore-magnets-timer", () => {
          if (!f.isEdgeOrCardinalHoverzone(this._endpointHoverzone)) {
            this._shouldIgnoreMagnets = !0;
            let e = getSingletonSceneGraph().get(this._connectorGUID);
            e && (this._hoveredEndpoint = this._hoveredEndpointIgnoringMagnets, e.connectorEnd = this._hoveredEndpoint);
          }
        });
        this._ignoreMagnetsTimer = setTimeout(e, this.IGNORE_CONNECTOR_MAGNETS_MS);
      }
      e.invalidateViewport();
    }
  }
  resetState() {
    let e = this._connectorGUID !== defaultSessionLocalIDString ? getSingletonSceneGraph().get(this._connectorGUID) : null;
    e && permissionScopeHandler.system("connector-tool-reset-state", () => {
      this.possiblyDeleteConnectorIfNotVisible(e);
    });
    this._connectorGUID = defaultSessionLocalIDString;
    this._insertionPoint = M.invalid();
    clearTimeout(this._ignoreMagnetsTimer);
    this._shouldIgnoreMagnets = !1;
    this._createdFromCenter = !1;
    this._startEndpointWithAuto = {
      endpointNodeID: defaultSessionLocalIDString,
      position: M.invalid(),
      magnet: AutoLayoutAlignment.NONE
    };
    this._snapper?.clearCache();
    this._didDragPastThreshold = !1;
    this._didSetConnectorStartWithClick = !1;
  }
  reset() {
    this.resetState();
  }
}
export const a = $$_0;