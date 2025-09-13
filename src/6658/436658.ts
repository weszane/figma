import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { vF } from "../vendor/150583";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { getAtomMutate, setupResourceAtomHandler } from "../figma_app/566371";
import { useSprigWithSampling } from "../905/99656";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { a as _$$a } from "../6658/303587";
import { P as _$$P } from "../6658/832968";
import { RL, S6, K5, LO, _E, bV, t2 } from "../1250/51387";
import { I as _$$I } from "../6658/358099";
import { I as _$$I2 } from "../6658/286262";
import { A as _$$A2 } from "../6658/341273";
import { sf } from "../905/929976";
import { _6 } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { mO } from "../figma_app/410317";
import { d as _$$d } from "../6658/928537";
import { v as _$$v } from "../1250/232926";
import { OG } from "../1250/340571";
import { useOpenFileLibraryKey } from "../figma_app/516028";
export function $$E2({
  displayedComponent: e,
  filteredComponents: n,
  componentBrowserListRowData: o,
  setComponentBrowserListRowData: a,
  suggestions: _,
  entrypoint: g
}) {
  let b = selectCurrentUser();
  let {
    Sprig
  } = useSprigWithSampling();
  let [S, K] = useState(-1);
  let x = useRef([]);
  let [q, M] = useState(null);
  let V = useCallback(e => {
    M(e);
  }, []);
  useEffect(() => {
    x.current = x.current.slice(0, o.length);
  }, [o.length]);
  let N = _6();
  let A = useDispatch();
  let O = getAtomMutate(RL);
  let B = getAtomMutate(S6);
  let D = getAtomMutate(K5);
  let R = getAtomMutate(LO);
  let T = getAtomMutate(_E);
  let H = function () {
    let e = useOpenFileLibraryKey();
    let n = OG(e);
    let o = n?.selectedRepositories?.[0];
    let {
      directories
    } = _$$v({
      libraryKey: e,
      repositoryId: o?.id || ""
    });
    let r = trackDefinedFileEventWithStore();
    return useCallback(({
      suggestions: n,
      path: o,
      componentName: t,
      trackingProps: a,
      libraryKey: s
    }) => {
      let i = !!n && n.length > 0;
      let d = n ? n.findIndex(e => e.src_path === o && e.name === t) : -1;
      let l = !!n && -1 === d && n.some(e => e.src_path === o);
      let p = s === e && directories && !directories.some(e => o.startsWith(e));
      r("component_browser.code_connect_component_connected", {
        componentName: t,
        sourcePath: o,
        location: a.location,
        source: a.source,
        componentHasSuggestions: i,
        pickedSuggestionIndex: d,
        pickedSuggestionPathButWrongComponent: l,
        componentNotInSpecifiedDirectories: p,
        sessionId: a.sessionId
      });
    }, [directories, e, r]);
  }();
  let W = Xr(mO);
  let Y = trackDefinedFileEventWithStore();
  let j = useCallback(e => {
    if (void 0 !== e) for (let o = e + 1; o < x.current.length; o++) {
      let e = n[o];
      let t = e?.component.code_connect_info.v1.state === "ignored";
      if (e && !t && (!e.selectedFile || !e.selectedComponent)) {
        let e = x.current[o];
        if (e) {
          e.focus();
          break;
        }
      }
    }
  }, [x, n]);
  let G = useCallback(e => {
    let {
      codeConnectId,
      row
    } = e;
    let t = row?.sourceIndex;
    if (row && void 0 !== t) {
      let c = {
        ...row,
        component: {
          ...row.component,
          code_connect_info: {
            ...row.component.code_connect_info,
            v1: {
              ...row.component.code_connect_info.v1,
              state: "not_connected",
              id: void 0
            }
          }
        }
      };
      codeConnectId ? (a(e => {
        let n = [...e];
        n[t] = {
          ...c,
          isLoading: !0
        };
        return n;
      }), B({
        codeConnectId
      }).then(() => {
        let n = "connected" !== row.component.code_connect_info.v1.state;
        let r = n ? getI18nString("dev_handoff.component_browser.removed_ignore_message", {
          componentName: row.component.name
        }) : getI18nString("dev_handoff.component_browser.disconnected_message", {
          componentName: row.component.name
        });
        let s = _$$I(row.component);
        s && W(e => {
          if (!e) return {
            status: {},
            loadingStatus: "loaded"
          };
          let {
            [s]: s,
            ...o
          } = e.status;
          return {
            ...e,
            status: o
          };
        });
        Y(n ? "component_browser.code_connect_component_ignore_removed" : "component_browser.code_connect_component_disconnected", {
          nodeId: row.component.node_id,
          location: e.trackingProps.location
        });
        a(e => {
          let n = [...e];
          n[t] = {
            ...c,
            isLoading: !1
          };
          return n;
        });
        A(VisualBellActions.enqueue({
          message: r,
          type: "Disconnect component"
        }));
        e.callback?.();
      }).catch(n => {
        vF.error("Error deleting code connect map", n);
        a(e => {
          let n = [...e];
          n[t] = {
            ...row,
            isLoading: !1
          };
          return n;
        });
        A(VisualBellActions.enqueue({
          message: n.message,
          type: "Disconnect component error",
          error: !0
        }));
        e.callback?.(n);
      })) : a(e => {
        let n = [...e];
        n[t] = {
          ...c,
          isLoading: !1
        };
        return n;
      });
    }
  }, [B, A, a, Y, W]);
  let J = useCallback(e => {
    let {
      row,
      sourceIndex,
      trackingProps
    } = e;
    let c = row.selectedFile;
    let s = row.selectedComponent;
    let i = c?.metadata?.path ?? "";
    let d = row.component.node_id;
    let l = c?.metadata;
    let u = _$$I(row.component);
    if (u && W(e => e ? {
      ...e,
      status: {
        ...e.status,
        [u]: "connected"
      }
    } : {
      status: {
        [u]: "connected"
      },
      loadingStatus: "loaded"
    }), !c || !i) return;
    let g = {
      ...row,
      component: {
        ...row.component,
        code_connect_info: {
          ...row.component.code_connect_info,
          v1: {
            ...row.component.code_connect_info.v1,
            author_name: b?.name,
            author_id: b?.id,
            state: "connected",
            type: "component_browser",
            figmadoc: JSON.stringify([{
              repository: l?.repository,
              name: s?.title
            }])
          }
        }
      },
      inputValue: ""
    };
    a(e => {
      let n = [...e];
      n[sourceIndex] = {
        ...g,
        isLoading: !0
      };
      return n;
    });
    O({
      library_key: row.component.library_key,
      node_id: d,
      template: "",
      component_name: s?.title,
      source_path: i,
      status: "connected",
      repository: l?.repository,
      origin: trackingProps.location,
      entrypoint: trackingProps.entrypoint
    }).then(e => {
      let c = e.data.meta.code_connect_id;
      a(e => {
        let n = [...e];
        n[sourceIndex] = {
          ...g,
          isLoading: !1,
          component: {
            ...g.component,
            code_connect_info: {
              ...g.component.code_connect_info,
              v1: {
                ...g.component.code_connect_info.v1,
                id: c,
                type: "component_browser",
                figmadoc: JSON.stringify([{
                  repository: l?.repository,
                  name: s?.title
                }])
              }
            }
          }
        };
        return n;
      });
      A(VisualBellActions.enqueue({
        message: getI18nString("dev_handoff.component_browser.connected_message", {
          componentName: row.component.name
        }),
        type: "Connected component"
      }));
      H({
        suggestions: _[row.assetKey],
        path: i,
        componentName: s?.title ?? "",
        trackingProps,
        libraryKey: row.component.library_key
      });
      Sprig("track", _$$I2);
    }).catch(e => {
      vF.error("Error creating code connect map", e);
      a(e => {
        let t = [...e];
        t[sourceIndex] = {
          ...row,
          isLoading: !1
        };
        return t;
      });
      A(VisualBellActions.enqueue({
        message: e.message,
        type: "Connect component error",
        error: !0
      }));
    });
  }, [Sprig, O, A, a, b, W, _, H]);
  let X = useCallback(e => {
    let {
      sourceIndex,
      value
    } = e;
    let c = o[sourceIndex];
    c && a(e => {
      let o = [...e];
      o[sourceIndex] = {
        ...c,
        inputValue: value
      };
      return o;
    });
  }, [o, a]);
  let z = useCallback(e => {
    let {
      row,
      sourceIndex,
      trackingProps,
      save = !0
    } = e;
    let s = row.selectedFile;
    let i = row.selectedComponent;
    let d = s?.metadata?.path ?? "";
    let l = row.component.node_id;
    let u = row.component.code_connect_info.v1.id;
    if (!s || !d || (a(e => {
      let t = [...e];
      t[sourceIndex] = {
        ...row,
        inputValue: ""
      };
      return t;
    }), !save || !u)) return;
    let _ = {
      ...row,
      component: {
        ...row.component,
        code_connect_info: {
          ...row.component.code_connect_info,
          v1: {
            ...row.component.code_connect_info.v1,
            author_name: b?.name,
            author_id: b?.id,
            state: "connected",
            type: "component_browser"
          }
        }
      },
      isLoading: !0,
      inputValue: ""
    };
    a(e => {
      let n = [...e];
      n[sourceIndex] = {
        ..._
      };
      return n;
    });
    D({
      code_connect_id: u,
      library_key: row.component.library_key,
      node_id: l,
      template: "",
      component_name: i?.title,
      source_path: d,
      status: "connected"
    }).then(() => {
      a(e => {
        let n = [...e];
        n[sourceIndex] = {
          ..._,
          isLoading: !1,
          component: {
            ..._.component,
            code_connect_info: {
              ..._.component.code_connect_info,
              v1: {
                ..._.component.code_connect_info.v1,
                id: u,
                type: "component_browser"
              }
            }
          }
        };
        return n;
      });
      A(VisualBellActions.enqueue({
        message: getI18nString("dev_handoff.component_browser.updated_message", {
          componentName: row.component.name
        })
      }));
      Y("component_browser.code_connect_component_updated", {
        componentName: i?.title ?? "",
        sourcePath: d,
        location: trackingProps.location,
        source: trackingProps.source,
        entrypoint: trackingProps.entrypoint
      });
    }).catch(e => {
      vF.error("Error updating code connect map", e);
      a(e => {
        let t = [...e];
        t[sourceIndex] = {
          ...row,
          isLoading: !1
        };
        return t;
      });
      A(VisualBellActions.enqueue({
        message: e.message,
        error: !0
      }));
    });
  }, [D, A, a, Y, b]);
  let U = useCallback(e => {
    let {
      currentRowIndex,
      sourceIndex,
      selectedComponent,
      action,
      save = !0
    } = e;
    let i = o[sourceIndex];
    if (i) {
      if ("create" === action) {
        let o = {
          ...i,
          selectedComponent,
          inputValue: ""
        };
        Y("component_browser.code_component_connection_data_entered", {
          nodeId: i?.component.node_id,
          field: "code_component",
          location: e.trackingProps.location,
          source: e.trackingProps.source,
          entrypoint: e.trackingProps.entrypoint,
          value: e.selectedComponent?.title,
          sessionId: e.trackingProps.sessionId
        });
        a(e => {
          let n = [...e];
          n[sourceIndex] = o;
          return n;
        });
        i.selectedFile && save && (i.component.code_connect_info.v1.id ? z({
          row: {
            ...i,
            selectedComponent
          },
          sourceIndex,
          trackingProps: e.trackingProps
        }) : J({
          row: {
            ...i,
            selectedComponent
          },
          sourceIndex,
          trackingProps: e.trackingProps
        }), void 0 !== currentRowIndex && j(currentRowIndex));
      } else "delete" === action && i && z({
        save,
        sourceIndex,
        row: {
          ...i,
          selectedComponent: null,
          inputValue: ""
        },
        trackingProps: e.trackingProps
      });
    }
  }, [o, J, z, a, Y, j]);
  let Z = useCallback(e => {
    let {
      sourceIndex,
      selectedFile,
      currentRowIndex,
      save = !0
    } = e;
    let s = o[sourceIndex];
    if (Y("component_browser.code_component_connection_data_entered", {
      nodeId: s?.component.node_id,
      field: "code_file",
      location: e.trackingProps.location,
      source: e.trackingProps.source,
      entrypoint: e.trackingProps.entrypoint,
      value: e.selectedFile?.title,
      sessionId: e.trackingProps.sessionId
    }), s) {
      if (selectedFile) {
        if (a(e => {
          let o = [...e];
          o[sourceIndex] = {
            ...s,
            inputValue: "",
            selectedFile,
            isLoading: !1
          };
          return o;
        }), !save) return;
        J({
          row: {
            ...s,
            selectedFile
          },
          sourceIndex,
          trackingProps: e.trackingProps
        });
      } else G({
        currentRowIndex,
        codeConnectId: s.component.code_connect_info.v1.id,
        row: {
          ...s,
          inputValue: "",
          selectedFile: null,
          selectedComponent: null
        },
        trackingProps: e.trackingProps
      });
    }
  }, [o, J, G, Y, a]);
  let Q = useCallback(e => {
    let {
      row,
      sourceIndex,
      trackingProps,
      currentRowIndex
    } = e;
    row.selectedFile || row.selectedComponent ? row.selectedFile && !row.selectedComponent ? U({
      sourceIndex,
      selectedComponent: row.inputValue ? {
        title: row.inputValue ?? ""
      } : null,
      action: "create",
      trackingProps
    }) : J({
      row,
      sourceIndex,
      trackingProps
    }) : (Z({
      sourceIndex,
      selectedFile: {
        title: row.inputValue ?? "",
        metadata: {
          path: row.inputValue ?? "",
          isCustomLink: !1,
          repository: {
            id: "",
            name: ""
          }
        }
      },
      trackingProps
    }), j(currentRowIndex));
    j(currentRowIndex);
  }, [J, U, Z, j]);
  let $ = useCallback(e => {
    let {
      selectedComponents,
      bulkSuggestions,
      trackingProps,
      ignore
    } = e;
    let s = [];
    selectedComponents.forEach(e => {
      let n = e.component.code_connect_info?.v1?.state;
      if ("connected" === n || "ignored" === n) return;
      let t = (bulkSuggestions[e.assetKey] || [])[0];
      t && s.push({
        component: e,
        asset: {
          library_key: e.component.library_key,
          node_id: e.component.node_id,
          component_name: t.name || "",
          source_path: t.src_path || "",
          status: ignore ? "ignored" : "connected"
        },
        bestSuggestion: t
      });
    });
    let i = [];
    a(e => {
      let n = [...e];
      i = s.map(({
        component: e
      }) => n[e.sourceIndex] ?? e);
      s.forEach(({
        component: e,
        bestSuggestion: o
      }) => {
        let t = e.sourceIndex;
        void 0 !== t && n[t] && (n[t] = {
          ...n[t],
          isLoading: !0,
          selectedFile: o ? {
            title: o.src_path,
            metadata: {
              path: o.src_path,
              isCustomLink: !1,
              repository: {
                id: "",
                name: ""
              }
            }
          } : null,
          selectedComponent: o && o.name ? {
            title: o.name
          } : null,
          inputValue: "",
          component: {
            ...n[t].component,
            code_connect_info: {
              ...n[t].component.code_connect_info,
              v1: {
                ...n[t].component.code_connect_info.v1,
                state: ignore ? "ignored" : "connected",
                author_name: b?.name,
                author_id: b?.id
              }
            }
          }
        });
      });
      return n;
    });
    let d = {
      current: i
    };
    R({
      assets_to_map: s.map(e => e.asset)
    }).then(e => {
      let {
        success_count,
        successful_asset_mappings
      } = e.data.meta;
      a(n => {
        let o = [...n];
        e.data.meta.successful_asset_mappings.forEach(e => {
          let n = o.findIndex(n => n.assetKey === e.asset_key);
          -1 !== n && o[n] && (o[n] = {
            ...o[n],
            isLoading: !1,
            component: {
              ...o[n].component,
              code_connect_info: {
                ...o[n].component.code_connect_info,
                v1: {
                  ...o[n].component.code_connect_info.v1,
                  id: e.code_connect_id
                }
              }
            }
          });
        });
        return o;
      });
      let i = async () => {
        a(e => {
          let n = [...e];
          d.current.forEach(e => {
            let o = n.findIndex(n => n.assetKey === e.assetKey);
            -1 !== o && (n[o] = e);
          });
          return n;
        });
        let e = [];
        for (let n of successful_asset_mappings) try {
          let o = d.current.find(e => e.assetKey === n.asset_key);
          o && ("not_connected" === o.component.code_connect_info.v1.state || !o.component.code_connect_info.v1.state) && e.push(n.code_connect_id);
        } catch (e) {
          vF.error("Error preparing for bulk undo", e);
        }
        if (e.length > 0) try {
          await T({
            code_connect_ids: e
          });
        } catch (e) {
          A(VisualBellActions.enqueue({
            message: ignore ? getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.error_undo_ignored") : getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.error_undo_connected"),
            error: !0
          }));
        }
      };
      A(VisualBellActions.enqueue({
        message: ignore ? getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.confirmation_ignored", {
          count: success_count
        }) : getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.confirmation_connected", {
          count: success_count
        }),
        icon: VisualBellIcon.CHECK_WITH_CIRCLE,
        button: {
          text: getI18nString("general.undo"),
          action: () => {
            i();
          }
        }
      }));
      Y(ignore ? "component_browser.code_connect_components_bulk_ignored" : "component_browser.code_connect_components_bulk_connected", {
        componentCount: s.length,
        location: trackingProps.location,
        source: trackingProps.source
      });
    }).catch(e => {
      vF.error("Error connecting/ignoring components", e);
      a(e => {
        let n = [...e];
        s.forEach(({
          component: e
        }, o) => {
          let t = e.sourceIndex;
          void 0 !== t && n[t] && i[o] && (n[t] = i[o]);
        });
        return n;
      });
      A(VisualBellActions.enqueue({
        message: ignore ? getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.error_ignored") : getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.error_connected"),
        error: !0
      }));
    });
  }, [R, a, A, b, Y, T]);
  let ee = e => {
    let {
      row
    } = e;
    let o = row.sourceIndex;
    let t = row.component.node_id;
    let c = {
      ...row,
      component: {
        ...row.component,
        code_connect_info: {
          ...row.component.code_connect_info,
          v1: {
            ...row.component.code_connect_info.v1,
            state: "ignored"
          }
        }
      },
      selectedComponent: null,
      selectedFile: null,
      inputValue: ""
    };
    a(e => {
      let n = [...e];
      n[o] = c;
      return n;
    });
    O({
      library_key: row.component.library_key,
      node_id: t,
      status: "ignored",
      origin: e.trackingProps.location,
      entrypoint: e.trackingProps.entrypoint
    }).then(t => {
      let r = t.data.meta.code_connect_id;
      let s = _$$I(row.component);
      s && W(e => e ? {
        ...e,
        status: {
          ...e.status,
          [s]: "ignored"
        }
      } : {
        status: {
          [s]: "ignored"
        },
        loadingStatus: "loaded"
      });
      a(e => {
        let n = [...e];
        n[o] = {
          ...c,
          component: {
            ...c.component,
            code_connect_info: {
              ...c.component.code_connect_info,
              v1: {
                ...c.component.code_connect_info.v1,
                id: r,
                author_name: b?.name,
                author_id: b?.id
              }
            }
          }
        };
        return n;
      });
      Y("component_browser.code_connect_component_ignored", {
        nodeId: row.component.node_id,
        location: e.trackingProps.location,
        entrypoint: e.trackingProps.entrypoint
      });
      A(VisualBellActions.enqueue({
        message: getI18nString("dev_handoff.component_browser.ignored_message", {
          componentName: row.component.name
        }),
        type: "Ignored component"
      }));
      e.callback?.();
    }).catch(t => {
      vF.error("Error ignoring code connect map", t);
      a(e => {
        let t = [...e];
        t[o] = row;
        return t;
      });
      A(VisualBellActions.enqueue({
        message: t.message,
        type: "Ignore component error",
        error: !0
      }));
      e.callback?.(t);
    });
  };
  let en = useCallback(n => {
    let o = n?.component;
    if (e?.assetKey === n?.assetKey) {
      let e = {
        ...N,
        componentKey: void 0
      };
      A(sf(e));
      return;
    }
    if (K(-1), "componentBrowserLibrary" === N.view) {
      let e = {
        ...N,
        componentKey: o && _$$I(o) || void 0
      };
      A(sf(e));
    } else if ("fullscreen" === N.view) {
      let e = {
        ...N,
        showDevModeComponentBrowser: !0,
        devModeComponentBrowserBackButtonTargetNodeId: o?.node_id,
        componentKey: o && _$$I(o) || void 0
      };
      A(sf(e));
    }
  }, [N, A, e?.assetKey]);
  let eo = useCallback(() => {
    if (!e) {
      n[0] && en(n[0]);
      return;
    }
    let o = n.findIndex(n => _$$I(n.component) === _$$I(e.component));
    if (-1 === o) {
      -1 !== S && n[S] ? en(n[S]) : n[0] && en(n[0]);
      return;
    }
    let t = n[o + 1];
    t && en(t);
  }, [e, n, en, S]);
  let et = useCallback(() => {
    if (!e) {
      let e = n[n.length - 1];
      e && en(e);
      return;
    }
    let o = n.findIndex(n => _$$I(n.component) === _$$I(e.component));
    if (-1 === o) {
      let e = n[S - 1];
      -1 !== S && e ? en(e) : n[0] && en(n[0]);
      return;
    }
    let t = n[o - 1];
    t && en(t);
  }, [e, n, en, S]);
  let ec = useCallback(({
    filepath: e,
    componentName: n,
    item: o,
    currentRowIndex: t,
    sourceIndex: c
  }) => {
    Q({
      row: {
        ...o,
        selectedFile: {
          title: e,
          metadata: {
            path: e,
            isCustomLink: !1,
            repository: {
              id: "",
              name: ""
            }
          }
        },
        selectedComponent: n ? {
          title: n
        } : null
      },
      currentRowIndex: t,
      sourceIndex: c,
      trackingProps: {
        location: "list_view",
        source: "ai_codebase_suggestion",
        entrypoint: g,
        sessionId: "todo"
      }
    });
  }, [Q, g]);
  return {
    onDeleteMapping: G,
    onMoreActionsMenuItemClick: e => {
      let {
        event,
        currentRowIndex,
        row
      } = e;
      switch (event) {
        case _$$d.OpenInSidebar:
          en(row);
          break;
        case _$$d.HasCodeEquivalent:
        case _$$d.Disconnect:
          G({
            currentRowIndex,
            codeConnectId: row.component.code_connect_info.v1.id,
            row: {
              ...row,
              selectedFile: null,
              selectedComponent: null
            },
            trackingProps: {
              location: "list_view",
              entrypoint: g
            }
          });
          break;
        case _$$d.Ignore:
          ee({
            currentRowIndex,
            row,
            trackingProps: {
              location: "list_view",
              entrypoint: g
            }
          });
      }
    },
    onFileChanged: Z,
    onComponentChanged: U,
    onConnectMapping: e => {
      let {
        currentRowIndex,
        row
      } = e;
      let t = row.sourceIndex;
      let c = row.component;
      let s = row.selectedFile;
      let i = s?.metadata?.path ?? "";
      let d = row.selectedComponent;
      let l = row.component.node_id;
      let u = s?.metadata?.repository;
      if (s && i) {
        let _ = {
          ...row,
          component: {
            ...c,
            code_connect_info: {
              ...c.code_connect_info,
              v1: {
                ...c.code_connect_info.v1,
                state: "connected",
                author_name: b?.name,
                author_id: b?.id
              }
            }
          },
          selectedFile: s,
          selectedComponent: d,
          inputValue: ""
        };
        a(e => {
          let n = [...e];
          n[t] = {
            ..._,
            isLoading: !0
          };
          return n;
        });
        O({
          library_key: row.component.library_key,
          node_id: l,
          template: "",
          component_name: d?.title,
          source_path: i,
          status: "connected",
          origin: e.trackingProps.location,
          entrypoint: e.trackingProps.entrypoint,
          repository: u
        }).then(c => {
          let r = c.data.meta.code_connect_id;
          a(e => {
            let n = [...e];
            n[t] = {
              ..._,
              isLoading: !1,
              component: {
                ..._.component,
                code_connect_info: {
                  ..._.component.code_connect_info,
                  v1: {
                    ..._.component.code_connect_info.v1,
                    id: r,
                    figmadoc: JSON.stringify([{
                      repository: u,
                      name: d?.title
                    }])
                  }
                }
              }
            };
            return n;
          });
          A(VisualBellActions.enqueue({
            message: getI18nString("dev_handoff.component_browser.connected_message", {
              componentName: row.component.name
            }),
            type: "Connected component"
          }));
          Y("component_browser.code_connect_component_connected", {
            componentName: d?.title ?? "",
            sourcePath: i,
            location: e.trackingProps.location,
            source: e.trackingProps.source,
            entrypoint: e.trackingProps.entrypoint,
            sessionId: e.trackingProps.searchSessionId
          });
          j(currentRowIndex);
          e.callback?.();
        }).catch(n => {
          vF.error("Error creating code connect map", n);
          a(e => {
            let n = [...e];
            n[t] = {
              ...row,
              isLoading: !1
            };
            return n;
          });
          A(VisualBellActions.enqueue({
            message: n.message,
            type: "Connect component error",
            error: !0
          }));
          e.callback?.(n);
        });
      }
    },
    onIgnoreMapping: ee,
    onBulkConfirmSuggestions: $,
    onDisplayedComponentChanged: en,
    onDisplayNextComponent: eo,
    onDisplayPreviousComponent: et,
    updateConnection: z,
    onConfirmConnection: Q,
    onConfirmSuggestion: ec,
    onValueChange: X,
    inputRefs: x,
    onActiveRowChange: V,
    activeRowKey: q
  };
}
export function $$S3({
  componentKey: e,
  componentsAndStateGroups: n,
  defaultFilter: o,
  filterIcons: c = !0
}) {
  let [i, d] = useState([]);
  let [l, p] = useState("");
  let [m, u] = useState(o);
  let [y, k] = useState("insertions");
  let v = useMemo(() => i.findIndex(n => _$$I(n.component) === e), [i, e]);
  let C = useMemo(() => i[v] ?? null, [i, v]);
  let w = bV();
  let I = useAtomWithSubscription(_$$a);
  let {
    suggestions,
    searchSessionId,
    isLoadingSuggestions
  } = _$$P(i);
  let [E, S, K, x] = useMemo(() => {
    let e = [];
    let n = [];
    let o = [];
    let t = [];
    i.forEach(r => {
      getFeatureFlags().dt_component_browser_icons_flow && c && ("icons" === I && !r.component.isIcon || "icons" !== I && r.component.isIcon) || (e.push(r), "connected" === r.component.code_connect_info.v1.state && n.push(r), "not_connected" === r.component.code_connect_info.v1.state && o.push(r), "ignored" === r.component.code_connect_info.v1.state && t.push(r));
    });
    return [e, n, o, t];
  }, [i, I, c]);
  let q = useMemo(() => K.filter(e => e.assetKey in suggestions), [suggestions, K]);
  let V = useMemo(() => ({
    all: E.length,
    connected: S.length,
    notConnected: K.length,
    ignored: x.length,
    suggestionsAvailable: q.length
  }), [E.length, S.length, K.length, x.length, q.length]);
  let N = useMemo(() => {
    let e = [];
    "all" === m ? e = E : "connected" === m ? e = S : "notConnected" === m ? e = K : "ignored" === m ? e = x : "suggestionsAvailable" === m && (e = q);
    l && (e = e.filter(e => e.component.name.toLocaleLowerCase().includes(l.toLocaleLowerCase())));
    return [...e].sort((e, n) => {
      if ("alphabetically" === y) {
        if (e.component.name < n.component.name) return -1;
        if (e.component.name > n.component.name) return 1;
      } else if ("insertions" === y) {
        let o = e.component.insertions || 0;
        let t = n.component.insertions || 0;
        if (o > t) return -1;
        if (o < t) return 1;
        if (e.component.name < n.component.name) return -1;
        if (e.component.name > n.component.name) return 1;
      }
      return 0;
    }).map((e, n) => ({
      ...e,
      currentRowIndex: n
    }));
  }, [m, l, y, E, S, K, x, q]);
  useEffect(() => {
    if (!n) return;
    let {
      components
    } = n;
    d(function (e) {
      let n = [];
      e.forEach((e, o) => {
        let t = e.code_connect_info.v1.figmadoc;
        if (!t) {
          n.push(M(e, o));
          return;
        }
        try {
          let c = JSON.parse(t)[0];
          n.push({
            component: e,
            assetKey: _$$A2(e),
            sourceIndex: o,
            isLoading: !1,
            selectedFile: c?.source ? {
              title: c.source,
              metadata: {
                path: c.source,
                isCustomLink: !1,
                repository: {
                  id: "",
                  name: ""
                }
              }
            } : null,
            selectedComponent: c?.component ? {
              title: c.component
            } : null,
            inputValue: ""
          });
        } catch (t) {
          vF.error("Error parsing figmadoc", t);
          n.push(M(e, o));
        }
      });
      return n;
    }(components.map(e => ({
      ...e,
      isIcon: w.has(e.node_id)
    }))));
  }, [n, w, d]);
  let A = useCallback(e => i.findIndex(n => _$$I(n.component) === _$$I(e)), [i]);
  return {
    paginationInfo: {
      notConnectedComponents: K.length,
      connectedComponents: S.length,
      ignoredComponents: x.length,
      suggestionsAvailableComponents: q.length
    },
    connectedComponents: S,
    notConnectedComponents: K,
    ignoredComponents: x,
    suggestionsAvailableComponents: q,
    searchQuery: l,
    setSearchQuery: p,
    dropdownFilter: m,
    setDropdownFilter: u,
    sortBy: y,
    setSortBy: k,
    displayedComponent: C,
    displayedComponentIndex: v,
    filteredComponents: N,
    componentBrowserListRowData: i ?? [],
    setComponentBrowserListRowData: d,
    getIndexOfComponent: A,
    suggestions,
    searchSessionId,
    isLoadingSuggestions,
    componentCounts: V
  };
}
export function $$K4({
  libraryKey: e,
  componentKey: n,
  defaultFilter: o,
  entrypoint: c
}) {
  let r = function ({
    libraryKey: e,
    componentKey: n,
    defaultFilter: o
  }) {
    let [c, r] = setupResourceAtomHandler(t2(e), {
      enabled: !0
    });
    return {
      ...$$S3({
        componentKey: n,
        componentsAndStateGroups: useMemo(() => {
          var e;
          return c.data ? $$x0((e = c.data).components || [], e.state_groups || []) : null;
        }, [c.data]),
        defaultFilter: o
      }),
      status: c.status,
      refetch: r.refetch
    };
  }({
    libraryKey: e,
    componentKey: n,
    defaultFilter: o
  });
  return {
    ...$$E2({
      displayedComponent: r.displayedComponent,
      filteredComponents: r.filteredComponents,
      componentBrowserListRowData: r.componentBrowserListRowData,
      setComponentBrowserListRowData: r.setComponentBrowserListRowData,
      suggestions: r.suggestions,
      entrypoint: c
    }),
    ...r
  };
}
export function $$x0(e, n) {
  let o = [];
  let t = {};
  let c = {};
  n.forEach(e => {
    c[e.node_id] = {
      ...e,
      updated_at: e.updated_at || "",
      variants: []
    };
    t[e.key] = {
      ...e,
      updated_at: e.updated_at || "",
      variants: []
    };
  });
  e.forEach(e => {
    let n = e.containing_frame?.containingStateGroup?.nodeId;
    let r = n && c[n]?.key;
    r && t[r] ? t[r].variants.push(e) : o.push(e);
  });
  Object.values(t).forEach(e => {
    o.push(e);
  });
  return {
    components: o
  };
}
export function $$q1(e, n) {
  if (1 === e.length) return e[0] ?? "";
  let o = e.pop();
  if (o) {
    if (o.length >= 20) return o;
    let e = 20 - (o?.length ?? 0);
    return n.slice(0, e) + ".../" + o;
  }
  return "";
}
function M(e, n) {
  return {
    component: e,
    assetKey: _$$A2(e),
    sourceIndex: n,
    isLoading: !1,
    selectedFile: null,
    selectedComponent: null,
    inputValue: ""
  };
}
export const rI = $$x0;
export const Wq = $$q1;
export const IN = $$E2;
export const Hf = $$S3;
export const dx = $$K4;