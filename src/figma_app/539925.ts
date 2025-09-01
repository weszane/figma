import { e as _$$e } from "../905/198283";
import { isNotNullish } from "../figma_app/95419";
import { aH } from "../figma_app/273493";
import { Z6A, OQN, r6o } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { f as _$$f } from "../905/24905";
import { Yx } from "../figma_app/930338";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { XE } from "../figma_app/976749";
import { nT } from "../figma_app/53721";
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
      }) => t ? _$$t("fullscreen.accessibility.stamp_attached_announcement", {
        hostType: this.getNodeTypeName(e)
      }) : _$$t("fullscreen.accessibility.node_created_announcement", {
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
      }) => _$$t("fullscreen.accessibility.node_deleted_announcement", {
        node_type: this.getNodeTypeName(e)
      })
    });
  }
  announceMultipleNodesDeleted() {
    this.announce({
      changeType: "node_deleted_single",
      value: {},
      coalesce: b,
      buildString: ({}) => _$$t("fullscreen.accessibility.multiple_node_deleted_announcement")
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
      }) => _$$t("fullscreen.accessibility.next_text_node_announcement", {
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
        let t = XE(this.store.getState().selectedView);
        if (e !== Z6A.STAMP) {
          if (e === Z6A.NONE) return _$$t("fullscreen.accessibility.tool_unselected");
          {
            let r = this.getNodeTypeName(e);
            return !function (e, t) {
              switch (e) {
                case Z6A.LINE:
                case Z6A.VECTOR:
                case Z6A.CONNECTOR:
                case Z6A.TABLE:
                case Z6A.TABLE_CELL:
                case Z6A.MEDIA:
                  return !1;
              }
              switch (t) {
                case nT.Whiteboard:
                  return getFeatureFlags().fpl_figjam_keyboard_controls;
                case nT.Design:
                  return getFeatureFlags().fpl_canvas_keyboard_controls;
                case nT.DevHandoff:
                  return getFeatureFlags().fpl_devmode_keyboard_controls;
                case nT.Slides:
                  return getFeatureFlags().fpl_slides_keyboard_controls;
                case nT.Sites:
                  return getFeatureFlags().fpl_sites_keyboard_controls;
                case nT.Illustration:
                  return getFeatureFlags().fpl_buzz_keyboard_controls;
              }
              return !1;
            }(e, t) ? _$$t("fullscreen.accessibility.tool_selected", {
              nodeType: r
            }) : _$$t("fullscreen.accessibility.tool_selected_keyboard_accessible", {
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
      }) => _$$t("fullscreen.accessibility.selection_box_changed", {
        selectionString: _$$t("fullscreen.accessibility.num_items_selected", {
          num_selected: e
        }),
        adjustmentString: IA(t, _$$t("fullscreen.accessibility_dom.pseudonode_name_selection-box")) || ""
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
      }) => _$$t("fullscreen.accessibility.selection_box_changed", {
        selectionString: _$$t("fullscreen.accessibility.num_items_selected", {
          num_selected: e
        }),
        adjustmentString: vS(t, _$$t("fullscreen.accessibility_dom.pseudonode_name_selection-box")) || ""
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
        let i = [nC(x, () => _$$t("fullscreen.accessibility.viewport_pan.distance_right", {
          distance: Math.abs(x)
        }), () => _$$t("fullscreen.accessibility.viewport_pan.distance_left", {
          distance: Math.abs(x)
        })), nC(y, () => _$$t("fullscreen.accessibility.viewport_pan.distance_down", {
          distance: Math.abs(y)
        }), () => _$$t("fullscreen.accessibility.viewport_pan.distance_up", {
          distance: Math.abs(y)
        }))].filter(isNotNullish);
        if (0 === i.length) return;
        let s = Yx(i, "unit");
        return t ? t.containerNodeName ? _$$t("fullscreen.accessibility.panned_insert_in_container", {
          containerName: t.containerNodeName,
          amount: s
        }) : _$$t("fullscreen.accessibility.panned_insert_at_crosshair", {
          amount: s
        }) : _$$t("fullscreen.accessibility.viewport_pan.action", {
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
      }) => _$$t("fullscreen.accessibility.next_table_cell_announcement", {
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
      }) => nC(Math.log(t / e), () => _$$t("fullscreen.accessibility.zoom_in", {
        zoomLevel: Math.round(100 * t)
      }), () => _$$t("fullscreen.accessibility.zoom_out", {
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
          case OQN.UNION:
            return _$$t("fullscreen.accessibility_dom.boolean_operation.union", {
              numNodes: t
            });
          case OQN.INTERSECT:
            return _$$t("fullscreen.accessibility_dom.boolean_operation.intersect", {
              numNodes: t
            });
          case OQN.SUBTRACT:
            return _$$t("fullscreen.accessibility_dom.boolean_operation.subtract", {
              numNodes: t
            });
          case OQN.XOR:
            return _$$t("fullscreen.accessibility_dom.boolean_operation.xor", {
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
    return _$$f(aH(e), aH(t));
  }
  getNodeTypeName(e) {
    let t = XE(this.store.getState().selectedView);
    let r = Z6A[e];
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
    t && this.store.dispatch(F.enqueue({
      message: t,
      role: "status",
      timeoutOverride: 500
    }));
  }
  showKeyboardSelectionModeChangedToast(e) {
    let t = e === r6o.BOX ? _$$t("fullscreen.accessibility.keyboard_box_selection_activated") : _$$t("fullscreen.accessibility.keyboard_pick_selection_activated");
    let r = e === r6o.BOX ? _$$t("fullscreen.accessibility.keyboard_box_selection.context") : _$$t("fullscreen.accessibility.keyboard_pick_selection.context");
    this.store.dispatch(F.enqueue({
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