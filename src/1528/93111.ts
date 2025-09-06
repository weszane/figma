import { Ez5, m1T, TsU, KgA, Egt, Z_n, rXF, rcl } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { selectWithShallowEqual } from "../905/103090";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { isNullish } from "../figma_app/95419";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { gL } from "../figma_app/618433";
import { _j } from "../figma_app/843119";
import { Mw, f4 } from "../figma_app/722362";
import { J2, ut } from "../figma_app/84367";
import { If, Jo } from "../figma_app/565242";
import { OU, oj, HA } from "../figma_app/986594";
import { Y5 } from "../figma_app/455680";
var x = (e => (e.IDLE = "IDLE", e.SELECT_NODE_FOR_COLLECTION_BINDING = "SELECT_NODE_FOR_COLLECTION_BINDING", e.HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING = "HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING", e.HOVERED_FRAME_FOR_COLLECTION_BINDING = "HOVERED_FRAME_FOR_COLLECTION_BINDING", e.COLLECTION_BINDING_SUCCESS_RESPONSIVE_SET = "COLLECTION_BINDING_SUCCESS_RESPONSIVE_SET", e.COLLECTION_BINDING_SUCCESS_FRAME = "COLLECTION_BINDING_SUCCESS_FRAME", e.SELECT_NODE_FOR_FIELD_BINDING = "SELECT_NODE_FOR_FIELD_BINDING", e.HOVERED_NODE_FOR_FIELD_BINDING = "HOVERED_NODE_FOR_FIELD_BINDING", e.HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING = "HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING", e.FIELD_BINDING_SUCCESS = "FIELD_BINDING_SUCCESS", e))(x || {});
let g = "cms-binding-visual-bell";
function f() {
  let [e, t] = useState(() => Ez5.cmsState().bindingModeState());
  let n = J2(Ez5.cmsState().bindingCollectionId);
  let {
    type,
    id
  } = J2(Ez5.cmsState().bindingFieldSchema) ?? {};
  useEffect(() => {
    t(Ez5.cmsState().bindingModeState());
  }, [n, type, id]);
  return e;
}
export function $$y1() {
  return selectWithShallowEqual(e => e.mirror.appModel.activeCanvasEditModeType === m1T.CMS_BINDING_CONSTRAINED);
}
export function $$b0() {
  let e = Ez5?.cmsState();
  let t = ut(e?.bindingCollectionId, "");
  let n = ut(e?.bindingFieldSchema, {
    type: "",
    id: ""
  });
  let i = $$y1();
  let x = f();
  let {
    data
  } = gL(t || "");
  let C = data?.fieldSchemas ?? [];
  let S = OU(TsU.CMS_CONNECT_MODE);
  !function () {
    let e = getSingletonSceneGraph();
    let t = useDispatch();
    let n = Ez5.cmsState();
    let l = f();
    let i = J2(n.bindingCollectionId);
    let x = J2(n.bindingFieldSchema);
    let v = useSelector(e => e.mirror.appModel.hoveredNode);
    let I = v ? e.get(v) : null;
    let N = Mw();
    let {
      data
    } = gL(i);
    let {
      name
    } = data ?? {};
    let C = x?.id;
    let {
      name: _name,
      fieldType
    } = data?.fieldSchemas.find(e => e.stableId === C) ?? {};
    let L = !!I?.isInstanceSublayer && I?.type === "TEXT" && fieldType === _j.RICH_TEXT;
    useEffect(() => () => {
      t(F.clearAll());
    }, [t]);
    let {
      checkTransitions
    } = function (e) {
      let [t, n] = useState(e.initialState);
      let a = useRef(e.transitions);
      let l = useRef(e.states);
      let r = useRef();
      let i = useRef({});
      useEffect(() => {
        let e = l.current?.[t];
        e?.onEnter && (r.current = e.onEnter({
          currentState: t,
          setCurrentState: n,
          dependencies: i.current
        }) || void 0);
        let a = r.current;
        return () => {
          e?.onExit?.({
            currentState: t,
            setCurrentState: n,
            dependencies: i.current
          });
          a?.();
          r.current = void 0;
        };
      }, [t]);
      let {
        onTransition
      } = e;
      let d = useCallback((e, t) => (n(e.to), onTransition?.(t, e.to), !0), [onTransition]);
      return {
        currentState: t,
        setCurrentState: n,
        isState: e => t === e,
        checkTransitions: useCallback(e => {
          i.current = e;
          let n = a.current.filter(e => Array.isArray(e.from) ? e.from.includes(t) : e.from === t).find(t => t.when(e));
          n && d(n, t);
        }, [t, d])
      };
    }(useMemo(() => ({
      initialState: "IDLE",
      transitions: [{
        from: ["IDLE", "SELECT_NODE_FOR_FIELD_BINDING", "HOVERED_NODE_FOR_FIELD_BINDING", "FIELD_BINDING_SUCCESS", "COLLECTION_BINDING_SUCCESS_RESPONSIVE_SET", "COLLECTION_BINDING_SUCCESS_FRAME", "HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING"],
        to: "SELECT_NODE_FOR_COLLECTION_BINDING",
        when: ({
          cmsBindingState: e,
          collectionName: t,
          selectedNode: n
        }) => !!t && e === KgA.COLLECTION_SELECTED && !n
      }, {
        from: ["SELECT_NODE_FOR_COLLECTION_BINDING", "HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING"],
        to: "HOVERED_FRAME_FOR_COLLECTION_BINDING",
        when: ({
          hoveredNode: e,
          selectedNode: t,
          collectionName: n,
          cmsBindingState: l
        }) => l === KgA.COLLECTION_SELECTED && !!n && !isNullish(e) && "FRAME" === e.type && isNullish(t)
      }, {
        from: ["SELECT_NODE_FOR_COLLECTION_BINDING", "HOVERED_FRAME_FOR_COLLECTION_BINDING"],
        to: "HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING",
        when: ({
          hoveredNode: e,
          selectedNode: t,
          collectionName: n,
          cmsBindingState: l
        }) => l === KgA.COLLECTION_SELECTED && !!n && !isNullish(e) && "FRAME" !== e.type && isNullish(t)
      }, {
        from: ["HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING", "HOVERED_FRAME_FOR_COLLECTION_BINDING"],
        to: "SELECT_NODE_FOR_COLLECTION_BINDING",
        when: ({
          hoveredNode: e,
          selectedNode: t,
          collectionName: n,
          cmsBindingState: l
        }) => l === KgA.COLLECTION_SELECTED && !!n && isNullish(e) && !t
      }, {
        from: ["HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING", "SELECT_NODE_FOR_COLLECTION_BINDING", "HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING"],
        to: "IDLE",
        when: ({
          cmsBindingState: e
        }) => e === KgA.IDLE
      }, {
        from: ["HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING", "SELECT_NODE_FOR_COLLECTION_BINDING"],
        to: "COLLECTION_BINDING_SUCCESS_RESPONSIVE_SET",
        when: ({
          cmsBindingState: e,
          selectedNode: t,
          collectionName: n
        }) => !!n && e === KgA.COLLECTION_SELECTED && !!t && "FRAME" !== t.type
      }, {
        from: ["HOVERED_FRAME_FOR_COLLECTION_BINDING", "SELECT_NODE_FOR_COLLECTION_BINDING"],
        to: "COLLECTION_BINDING_SUCCESS_FRAME",
        when: ({
          cmsBindingState: e,
          selectedNode: t,
          collectionName: n
        }) => !!n && e === KgA.COLLECTION_SELECTED && !!t && "FRAME" === t.type
      }, {
        from: ["IDLE", "SELECT_NODE_FOR_COLLECTION_BINDING", "HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING", "HOVERED_FRAME_FOR_COLLECTION_BINDING", "FIELD_BINDING_SUCCESS", "COLLECTION_BINDING_SUCCESS_RESPONSIVE_SET", "COLLECTION_BINDING_SUCCESS_FRAME"],
        to: "SELECT_NODE_FOR_FIELD_BINDING",
        when: ({
          cmsBindingState: e,
          fieldSchemaName: t,
          selectedNode: n
        }) => !!t && e === KgA.FIELD_SELECTED && !n
      }, {
        from: "SELECT_NODE_FOR_FIELD_BINDING",
        to: "HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING",
        when: ({
          hoveredNode: e,
          selectedNode: t,
          fieldSchemaName: n,
          cmsBindingState: l,
          isHoveredNodeTextInInstanceForRichTextField: r
        }) => !!n && l === KgA.FIELD_SELECTED && !isNullish(e) && !t && r
      }, {
        from: ["SELECT_NODE_FOR_FIELD_BINDING", "HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING"],
        to: "HOVERED_NODE_FOR_FIELD_BINDING",
        when: ({
          hoveredNode: e,
          selectedNode: t,
          fieldSchemaName: n,
          cmsBindingState: l,
          isHoveredNodeTextInInstanceForRichTextField: r
        }) => !!n && l === KgA.FIELD_SELECTED && !isNullish(e) && !t && !r
      }, {
        from: "HOVERED_NODE_FOR_FIELD_BINDING",
        to: "HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING",
        when: ({
          hoveredNode: e,
          selectedNode: t,
          fieldSchemaName: n,
          cmsBindingState: l,
          isHoveredNodeTextInInstanceForRichTextField: r
        }) => !!n && l === KgA.FIELD_SELECTED && !isNullish(e) && !t && r
      }, {
        from: ["HOVERED_NODE_FOR_FIELD_BINDING", "HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING"],
        to: "SELECT_NODE_FOR_FIELD_BINDING",
        when: ({
          hoveredNode: e,
          selectedNode: t,
          fieldSchemaName: n,
          cmsBindingState: l
        }) => !!n && l === KgA.FIELD_SELECTED && isNullish(e) && !t
      }, {
        from: "HOVERED_NODE_FOR_FIELD_BINDING",
        to: "FIELD_BINDING_SUCCESS",
        when: ({
          cmsBindingState: e,
          selectedNode: t,
          fieldSchemaName: n
        }) => !!n && e === KgA.FIELD_SELECTED && !!t
      }],
      states: {
        IDLE: {
          onEnter: () => {
            t(F.clearAll());
          }
        },
        SELECT_NODE_FOR_COLLECTION_BINDING: {
          onEnter: ({
            dependencies: e
          }) => {
            let {
              collectionName
            } = e;
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.pick_a_webpage_to_connect", {
                collection_name: collectionName ?? ""
              }),
              timeoutOverride: 1 / 0,
              icon: zX.PICK
            }));
          }
        },
        HOVERED_RESPONSIVE_SET_FOR_COLLECTION_BINDING: {
          onEnter: ({
            dependencies: e
          }) => {
            let {
              collectionName
            } = e;
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.click_to_connect_this_page", {
                collection_name: collectionName ?? ""
              }),
              timeoutOverride: 1 / 0,
              icon: zX.PICK
            }));
          }
        },
        HOVERED_FRAME_FOR_COLLECTION_BINDING: {
          onEnter: ({
            dependencies: e
          }) => {
            let {
              collectionName
            } = e;
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.click_to_connect_this_frame", {
                collection_name: collectionName ?? ""
              }),
              timeoutOverride: 1 / 0,
              icon: zX.PICK
            }));
          }
        },
        COLLECTION_BINDING_SUCCESS_RESPONSIVE_SET: {
          onEnter: ({
            setCurrentState: e
          }) => {
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.connected_new_cms_page_created"),
              icon: zX.GREEN_CHECK
            }));
            let n = setTimeout(() => {
              e("IDLE");
            }, 3e3);
            return () => clearTimeout(n);
          }
        },
        COLLECTION_BINDING_SUCCESS_FRAME: {
          onEnter: ({
            setCurrentState: e
          }) => {
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.connected_new_cms_list_created"),
              icon: zX.GREEN_CHECK
            }));
            let n = setTimeout(() => {
              e("IDLE");
            }, 3e3);
            return () => clearTimeout(n);
          }
        },
        SELECT_NODE_FOR_FIELD_BINDING: {
          onEnter: ({
            dependencies: e
          }) => {
            let {
              fieldSchemaName
            } = e;
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.pick_a_layer_to_connect", {
                field_name: fieldSchemaName ?? ""
              }),
              timeoutOverride: 1 / 0,
              icon: zX.PICK
            }));
          }
        },
        HOVERED_NODE_FOR_FIELD_BINDING: {
          onEnter: ({
            dependencies: e
          }) => {
            let {
              fieldSchemaName
            } = e;
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.click_to_connect_this_layer", {
                field_name: fieldSchemaName ?? ""
              }),
              timeoutOverride: 1 / 0,
              icon: zX.PICK
            }));
          }
        },
        HOVERED_TEXT_IN_INSTANCE_FOR_RICH_TEXT_FIELD_BINDING: {
          onEnter: () => {
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.rich_text_in_instances_not_supported"),
              timeoutOverride: 1 / 0,
              icon: zX.PICK
            }));
          }
        },
        FIELD_BINDING_SUCCESS: {
          onEnter: ({
            setCurrentState: e
          }) => {
            t(F.enqueue({
              type: g,
              message: getI18nString("cms_specs.connected"),
              icon: zX.GREEN_CHECK
            }));
            let n = setTimeout(() => {
              e("IDLE");
            }, 3e3);
            return () => clearTimeout(n);
          }
        }
      }
    }), [t]));
    useEffect(() => {
      checkTransitions({
        cmsBindingState: l,
        bindingCollectionId: i,
        bindingFieldSchemaId: x?.id,
        hoveredNode: I,
        selectedNode: N,
        collectionName: name,
        fieldSchemaName: _name,
        fieldSchemaType: fieldType,
        isHoveredNodeTextInInstanceForRichTextField: L
      });
    }, [checkTransitions, i, x?.id, I, N, l, name, _name, fieldType, L]);
  }();
  f4(() => {
    if (!Egt || !t || !i) return;
    let e = getSingletonSceneGraph();
    let s = oj(e.getDirectlySelectedNodes());
    if (0 !== s.length) switch (x) {
      case KgA.COLLECTION_SELECTED:
        let o = !1;
        for (let e of s) if ("RESPONSIVE_SET" === e.type && "/" !== e.name) l7.user("dakota-set-collection-binding", () => {
          e.setDakotaSelectorCollection(t, TsU.CMS_CONNECT_MODE);
          o = !0;
        });else {
          S(t);
          o = !0;
          break;
        }
        o && Ez5?.cmsState().reset();
        break;
      case KgA.FIELD_SELECTED:
        let d = C.find(e => e.id === n.id);
        if (!d) return;
        switch (d.fieldType) {
          case _j.IMAGE:
            If(t, d.id);
            Ez5?.cmsState().reset();
            break;
          case _j.RICH_TEXT:
            if (HA(s, ["CMS_RICH_TEXT"])) {
              let e = {
                type: Z_n.CMS_ALIAS,
                resolvedType: rXF.JS_RUNTIME_ALIAS,
                value: {
                  collectionId: t,
                  fieldSchemaId: d.id
                }
              };
              l7.user("dakota-set-rich-text-binding", () => {
                s?.forEach(n => n.getNodesForCmsBinding(t).forEach(t => {
                  t.updateVariableConsumption("CMS_SERIALIZED_RICH_TEXT_DATA", e);
                }));
              });
              Ez5?.cmsState().reset();
            } else HA(s, ["TEXT"]) && (Y5.triggerActionEnumInUserEditScope(rcl.CREATE_CMS_RICH_TEXT, {
              args: {
                collectionId: t,
                fieldId: d.id
              }
            }), Ez5?.cmsState().reset());
            break;
          case _j.PLAIN_TEXT:
            if (!HA(s, ["TEXT"])) break;
            let c = {
              type: Z_n.CMS_ALIAS,
              resolvedType: rXF.STRING,
              value: {
                collectionId: t,
                fieldSchemaId: d.id,
                itemId: ""
              }
            };
            l7.user("dakota-set-text-binding", () => {
              for (let e of s) e.getNodesForCmsBinding(t).forEach(e => {
                e.updateVariableConsumption("TEXT_DATA", c);
              });
            });
            Ez5?.cmsState().reset();
            break;
          case _j.DATE:
            Jo(t, d.id);
            Ez5?.cmsState().reset();
            break;
          case _j.LINK:
            let u = {
              type: Z_n.CMS_ALIAS,
              resolvedType: rXF.LINK,
              value: {
                collectionId: t,
                fieldSchemaId: d.id,
                itemId: ""
              }
            };
            l7.user("dakota-set-link-binding", () => {
              for (let e of s) for (let n of e.getNodesForCmsBinding(t)) "TEXT" === n.type ? n.updateVariableConsumption("HYPERLINK", u) : n.setDakotaLinkFieldBindingOnPrototypeAction(u);
            });
            Ez5?.cmsState().reset();
        }
    }
  });
}
export const N = $$b0;
export const e = $$y1;