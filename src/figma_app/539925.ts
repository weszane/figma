import { e as _$$e } from "../905/198283";
import { isNotNullish } from "../figma_app/95419";
import { normalizedToRgb } from "../figma_app/273493";
import { NodeType, BooleanOperationType, SelectionMode } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { f as _$$f } from "../905/24905";
import { formatList } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { getEditorTypeFromView } from "../figma_app/976749";
import { FEditorType } from "../figma_app/53721";
import { rs } from "../figma_app/440994";
import { IA, vS, nC } from "../905/748956";
export let $$n0;
var f = (e => (e.NODE_CREATED = "node_created", e.NODE_DELETED_SINGLE = "node_deleted_single", e.NODE_DELETED_MULTIPLE = "node_deleted_multiple", e.NODE_MOVED = "node_moved", e.NODE_RESIZED = "node_resized", e.TEXT_SELECTION = "text_selection", e.TOOL = "tool_selected", e.TABLE_CELL_TEXT_SELECTION = "table_cell_text_selection", e.SELECTION_BOX_MOVED = "selection_box_moved", e.SELECTION_BOX_RESIZED = "selection_box_resized", e.VIEWPORT_PANNED = "viewport_panned", e.VIEWPORT_ZOOMED = "viewport_zoomed", e.BOOLEAN_OPERATION = "boolean_operation", e))(f || {});
let $$E3 = "accessibility-screen-reader-announcement";
let $$y2 = "selection";
let b = Symbol("announce-all");
class T {
  constructor(e) {
    this.store = e;
    this.lastUsedChangeType = void 0;
    this.coalescedDebouncedAnnounceChange = _$$e(this.announceInner.bind(this), (e, t) => {
      if (e.changeType !== t.changeType || t.coalesce === b) return t;
      let r = {
        ...t
      };
      r.value = t.coalesce(e.value, t.value);
      return r;
    }, 800);
    this.store = e;
  }
  announceNodeCreated(e, t) {
    this.announce({
      changeType: "node_created",
      value: {
        targetNodeType: e,
        isStamp: t
      },
      coalesce: b,
      buildString: ({
        targetNodeType: e,
        isStamp: t
      }) => t ? getI18nString("fullscreen.accessibility.stamp_attached_announcement", {
        hostType: this.getNodeTypeName(e)
      }) : getI18nString("fullscreen.accessibility.node_created_announcement", {
        node_type: this.getNodeTypeName(e)
      })
    });
  }
  announceSingleNodeDeleted(e) {
    this.announce({
      changeType: "node_deleted_single",
      value: {
        targetNodeType: e
      },
      coalesce: b,
      buildString: ({
        targetNodeType: e
      }) => getI18nString("fullscreen.accessibility.node_deleted_announcement", {
        node_type: this.getNodeTypeName(e)
      })
    });
  }
  announceMultipleNodesDeleted() {
    this.announce({
      changeType: "node_deleted_single",
      value: {},
      coalesce: b,
      buildString: ({}) => getI18nString("fullscreen.accessibility.multiple_node_deleted_announcement")
    });
  }
  announceTextSelection(e) {
    this.announce({
      changeType: "text_selection",
      value: {
        targetNodeType: e
      },
      coalesce: I,
      buildString: ({
        targetNodeType: e
      }) => getI18nString("fullscreen.accessibility.next_text_node_announcement", {
        nodeType: this.getNodeTypeName(e)
      })
    });
  }
  announceToolSelected(e) {
    this.announce({
      changeType: "tool_selected",
      value: {
        targetNodeType: e
      },
      coalesce: b,
      buildString: ({
        targetNodeType: e
      }) => {
        let t = getEditorTypeFromView(this.store.getState().selectedView);
        if (e !== NodeType.STAMP) {
          if (e === NodeType.NONE) return getI18nString("fullscreen.accessibility.tool_unselected");
          {
            let r = this.getNodeTypeName(e);
            return !function (e, t) {
              switch (e) {
                case NodeType.LINE:
                case NodeType.VECTOR:
                case NodeType.CONNECTOR:
                case NodeType.TABLE:
                case NodeType.TABLE_CELL:
                case NodeType.MEDIA:
                  return !1;
              }
              switch (t) {
                case FEditorType.Whiteboard:
                  return getFeatureFlags().fpl_figjam_keyboard_controls;
                case FEditorType.Design:
                  return getFeatureFlags().fpl_canvas_keyboard_controls;
                case FEditorType.DevHandoff:
                  return getFeatureFlags().fpl_devmode_keyboard_controls;
                case FEditorType.Slides:
                  return getFeatureFlags().fpl_slides_keyboard_controls;
                case FEditorType.Sites:
                  return getFeatureFlags().fpl_sites_keyboard_controls;
                case FEditorType.Illustration:
                  return getFeatureFlags().fpl_buzz_keyboard_controls;
              }
              return !1;
            }(e, t) ? getI18nString("fullscreen.accessibility.tool_selected", {
              nodeType: r
            }) : getI18nString("fullscreen.accessibility.tool_selected_keyboard_accessible", {
              nodeType: r
            });
          }
        }
      }
    });
  }
  announceNodeResized(e, t) {
    this.announce({
      changeType: "node_resized",
      value: {
        targetNodeType: e,
        delta: t
      },
      coalesce: S,
      buildString: ({
        targetNodeType: e,
        delta: t
      }) => IA(t, this.getNodeTypeName(e))
    });
  }
  announceNodeMoved(e, t) {
    this.announce({
      changeType: "node_moved",
      value: {
        targetNodeType: e,
        delta: t
      },
      coalesce: S,
      buildString: ({
        targetNodeType: e,
        delta: t
      }) => vS(t, this.getNodeTypeName(e))
    });
  }
  announceSelectionBoxResized(e, t) {
    this.announce({
      changeType: "selection_box_resized",
      value: {
        delta: e,
        numSelectedNodes: t
      },
      coalesce: S,
      buildString: ({
        numSelectedNodes: e,
        delta: t
      }) => getI18nString("fullscreen.accessibility.selection_box_changed", {
        selectionString: getI18nString("fullscreen.accessibility.num_items_selected", {
          num_selected: e
        }),
        adjustmentString: IA(t, getI18nString("fullscreen.accessibility_dom.pseudonode_name_selection-box")) || ""
      })
    });
  }
  announceSelectionBoxMoved(e, t) {
    this.announce({
      changeType: "selection_box_resized",
      value: {
        delta: e,
        numSelectedNodes: t
      },
      coalesce: S,
      buildString: ({
        numSelectedNodes: e,
        delta: t
      }) => getI18nString("fullscreen.accessibility.selection_box_changed", {
        selectionString: getI18nString("fullscreen.accessibility.num_items_selected", {
          num_selected: e
        }),
        adjustmentString: vS(t, getI18nString("fullscreen.accessibility_dom.pseudonode_name_selection-box")) || ""
      })
    });
  }
  announceViewportPanned(e, t) {
    this.announce({
      changeType: "viewport_panned",
      value: {
        delta: e,
        insertionInfo: t
      },
      coalesce: S,
      buildString: ({
        delta: e,
        insertionInfo: t
      }) => {
        let {
          x,
          y
        } = e;
        let i = [nC(x, () => getI18nString("fullscreen.accessibility.viewport_pan.distance_right", {
          distance: Math.abs(x)
        }), () => getI18nString("fullscreen.accessibility.viewport_pan.distance_left", {
          distance: Math.abs(x)
        })), nC(y, () => getI18nString("fullscreen.accessibility.viewport_pan.distance_down", {
          distance: Math.abs(y)
        }), () => getI18nString("fullscreen.accessibility.viewport_pan.distance_up", {
          distance: Math.abs(y)
        }))].filter(isNotNullish);
        if (0 === i.length) return;
        let s = formatList(i, "unit");
        return t ? t.containerNodeName ? getI18nString("fullscreen.accessibility.panned_insert_in_container", {
          containerName: t.containerNodeName,
          amount: s
        }) : getI18nString("fullscreen.accessibility.panned_insert_at_crosshair", {
          amount: s
        }) : getI18nString("fullscreen.accessibility.viewport_pan.action", {
          amount: s
        });
      }
    });
  }
  announceTableCellTextSelection(e, t) {
    this.announce({
      changeType: "table_cell_text_selection",
      value: {
        tableCellRow: e,
        tableCellCol: t
      },
      coalesce: I,
      buildString: ({
        tableCellRow: e,
        tableCellCol: t
      }) => getI18nString("fullscreen.accessibility.next_table_cell_announcement", {
        r: e,
        c: t
      })
    });
  }
  announceViewportZoomed(e, t) {
    this.announce({
      changeType: "viewport_zoomed",
      value: {
        previousZoom: e,
        currentZoom: t
      },
      coalesce: (e, t) => ({
        previousZoom: e.previousZoom,
        currentZoom: t.currentZoom
      }),
      buildString: ({
        previousZoom: e,
        currentZoom: t
      }) => nC(Math.log(t / e), () => getI18nString("fullscreen.accessibility.zoom_in", {
        zoomLevel: Math.round(100 * t)
      }), () => getI18nString("fullscreen.accessibility.zoom_out", {
        zoomLevel: Math.round(100 * t)
      })) || ""
    });
  }
  announceBooleanOperation(e, t) {
    this.announce({
      changeType: "boolean_operation",
      value: {
        operation: e,
        numNodes: t
      },
      coalesce: b,
      buildString: ({
        operation: e,
        numNodes: t
      }) => {
        switch (e) {
          case BooleanOperationType.UNION:
            return getI18nString("fullscreen.accessibility_dom.boolean_operation.union", {
              numNodes: t
            });
          case BooleanOperationType.INTERSECT:
            return getI18nString("fullscreen.accessibility_dom.boolean_operation.intersect", {
              numNodes: t
            });
          case BooleanOperationType.SUBTRACT:
            return getI18nString("fullscreen.accessibility_dom.boolean_operation.subtract", {
              numNodes: t
            });
          case BooleanOperationType.XOR:
            return getI18nString("fullscreen.accessibility_dom.boolean_operation.xor", {
              numNodes: t
            });
        }
      }
    });
  }
  prefersReducedMotion() {
    return matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  getWCAG2Contrast(e, t) {
    return _$$f(normalizedToRgb(e), normalizedToRgb(t));
  }
  getNodeTypeName(e) {
    let t = getEditorTypeFromView(this.store.getState().selectedView);
    let r = NodeType[e];
    return rs(r, t);
  }
  announce(e) {
    if (this.store.getState().screenreader.enabled) {
      if (e.coalesce === b) {
        this.coalescedDebouncedAnnounceChange.flush();
        this.lastUsedChangeType = void 0;
        this.announceInner(e);
        return;
      }
      this.lastUsedChangeType && this.lastUsedChangeType !== e.changeType && this.coalescedDebouncedAnnounceChange.flush();
      this.lastUsedChangeType = e.changeType;
      this.coalescedDebouncedAnnounceChange(e);
    }
  }
  announceInner(e) {
    let t = e.buildString(e.value);
    t && this.store.dispatch(VisualBellActions.enqueue({
      message: t,
      role: "status",
      timeoutOverride: 500
    }));
  }
  showKeyboardSelectionModeChangedToast(e) {
    let t = e === SelectionMode.BOX ? getI18nString("fullscreen.accessibility.keyboard_box_selection_activated") : getI18nString("fullscreen.accessibility.keyboard_pick_selection_activated");
    let r = e === SelectionMode.BOX ? getI18nString("fullscreen.accessibility.keyboard_box_selection.context") : getI18nString("fullscreen.accessibility.keyboard_pick_selection.context");
    this.store.dispatch(VisualBellActions.enqueue({
      type: `${$$E3}-keyboard-selection-mode-changed`,
      message: t,
      nonVisualMessage: r
    }));
  }
}
function I(e, t) {
  return t;
}
function S(e, t) {
  let r = {
    x: e.delta.x + t.delta.x,
    y: e.delta.y + t.delta.y
  };
  return {
    ...t,
    delta: r
  };
}
export function $$v1(e) {
  $$n0 = new T(e);
}
export const Lj = $$n0;
export const Zb = $$v1;
export const lU = $$y2;
export const xM = $$E3;