import { useReducer, useRef, useMemo, useEffect, useCallback } from "react";
import { lV } from "../figma_app/617606";
import { Hg } from "../figma_app/304955";
import { utilityNoop, returnSecond } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import s from "lodash-es/mapValues";
import { useLatestRef } from "../figma_app/922077";
import { F } from "../905/422355";
import { cortexAPI } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { useMemoizedValue } from "../figma_app/412189";
import { nc } from "../figma_app/570630";
var $$d = s;
var g = (e => (e.DISABLED = "disabled", e.CREATING = "creating", e.RECREATING = "recreating", e.READY = "ready", e.BUNDLING = "bundling", e.UNRECOVERABLE = "unrecoverable_error", e))(g || {});
var y = (e => (e.CREATE = "CREATE", e.CREATE_SUCCESS = "CREATE_SUCCESS", e.CREATE_FAILED = "CREATE_FAILED", e.BUNDLE = "BUNDLE", e.BUNDLE_SUCCESS = "BUNDLE_SUCCESS", e.BUNDLE_FAILED = "BUNDLE_FAILED", e.PING_FAILED = "PING_FAILED", e))(y || {});
function f(e, t) {
  switch (t.type) {
    case "CREATE":
      switch (e.status) {
        case "disabled":
        case "ready":
        case "bundling":
        case "creating":
        case "recreating":
          return {
            status: "creating",
            fileKeyHash: t.fileKeyHash,
            attempt: 0
          };
        case "unrecoverable_error":
          utilityNoop(`Invalid action [${t.type}] for status [${e.status}]`);
          return e;
        default:
          return returnSecond(e, e, `Invalid status: ${e.status}`);
      }
    case "CREATE_SUCCESS":
      switch (e.status) {
        case "creating":
        case "recreating":
          return {
            status: "ready",
            fileKeyHash: e.fileKeyHash,
            lastBundledFilesByPath: {},
            lastBundle: null
          };
        case "disabled":
        case "ready":
        case "bundling":
        case "unrecoverable_error":
          utilityNoop(`Invalid action [${t.type}] for status [${e.status}]`);
          return e;
        default:
          return returnSecond(e, e, `Invalid status: ${e.status}`);
      }
    case "CREATE_FAILED":
      switch (e.status) {
        case "creating":
        case "recreating":
          if (e.attempt >= 3) return {
            status: "unrecoverable_error",
            fileKeyHash: e.fileKeyHash,
            error: t.error
          };
          return {
            ...e,
            error: t.error,
            attempt: e.attempt + 1
          };
        case "disabled":
        case "ready":
        case "bundling":
        case "unrecoverable_error":
          utilityNoop(`Invalid action [${t.type}] for status [${e.status}]`);
          return e;
        default:
          return returnSecond(e, e, `Invalid status: ${e.status}`);
      }
    case "BUNDLE":
      switch (e.status) {
        case "ready":
          return {
            status: "bundling",
            fileKeyHash: e.fileKeyHash,
            lastBundledFilesByPath: e.lastBundledFilesByPath,
            lastBundle: e.lastBundle,
            newFilesByPath: t.filesByPath,
            resolver: t.resolver,
            attempt: 0
          };
        case "bundling":
        case "disabled":
        case "creating":
        case "recreating":
        case "unrecoverable_error":
          utilityNoop(`Invalid action [${t.type}] for status [${e.status}]`);
          return e;
        default:
          return returnSecond(e, e, `Invalid status: ${e.status}`);
      }
    case "BUNDLE_SUCCESS":
      switch (e.status) {
        case "bundling":
          return {
            status: "ready",
            fileKeyHash: e.fileKeyHash,
            lastBundledFilesByPath: e.newFilesByPath,
            lastBundle: t.bundle ?? e.lastBundle
          };
        case "ready":
        case "disabled":
        case "creating":
        case "recreating":
        case "unrecoverable_error":
          utilityNoop(`Invalid action [${t.type}] for status [${e.status}]`);
          return e;
        default:
          return returnSecond(e, e, `Invalid status: ${e.status}`);
      }
    case "BUNDLE_FAILED":
      switch (e.status) {
        case "bundling":
          if (e.attempt >= 30) return {
            status: "unrecoverable_error",
            fileKeyHash: e.fileKeyHash,
            error: t.error
          };
          return {
            ...e,
            error: t.error,
            attempt: e.attempt + 1
          };
        case "ready":
        case "disabled":
        case "creating":
        case "recreating":
        case "unrecoverable_error":
          utilityNoop(`Invalid action [${t.type}] for status [${e.status}]`);
          return e;
        default:
          return returnSecond(e, e, `Invalid status: ${e.status}`);
      }
    case "PING_FAILED":
      switch (e.status) {
        case "disabled":
        case "creating":
        case "recreating":
          return e;
        case "bundling":
        case "ready":
          return {
            status: "creating",
            fileKeyHash: e.fileKeyHash,
            attempt: 0
          };
        case "unrecoverable_error":
          utilityNoop(`Invalid action [${t.type}] for status [${e.status}]`);
          return e;
        default:
          return returnSecond(e, e, `Invalid status: ${e.status}`);
      }
    default:
      return returnSecond(t, e, `Invalid action: ${t.type}`);
  }
}
export var $$_0 = (e => (e.CREATING = "creating", e.READY = "ready", e.BUNDLING = "bundling", e.REPAIRING = "reparing", e.UNRECOVERABLE = "unrecoverable", e))($$_0 || {});
export function $$b1(e, t) {
  let [n, s] = useReducer(f, {
    status: "disabled"
  });
  let _ = useLatestRef(n);
  let b = useRef([]);
  let v = useRef(n);
  v.current = n;
  let I = useMemo(() => e ? F(e) : null, [e]);
  let C = t === lV.FIGMAKE && getFeatureFlags().make_foundry;
  let {
    setInterval,
    clearInterval,
    clearAllIntervals
  } = useMemo(() => {
    let e = new Set();
    return {
      setInterval: (t, n) => {
        let o = window.setInterval(t, n);
        e.add(o);
        return o;
      },
      clearInterval: t => {
        window.clearInterval(t);
        e.$$delete(t);
      },
      clearAllIntervals: () => {
        for (let t of e) {
          window.clearInterval(t);
          e.$$delete(t);
        }
      }
    };
  }, []);
  useEffect(() => {
    C && I && n.status === g.DISABLED && s({
      type: y.CREATE,
      fileKeyHash: I
    });
  }, [C, I, n.status]);
  useEffect(() => {
    let e = null;
    switch (n.status) {
      case g.DISABLED:
        break;
      case g.CREATING:
      case g.RECREATING:
        {
          if ((_?.status === g.CREATING || _?.status === g.RECREATING) && _.attempt >= n.attempt || !I) break;
          let t = async () => {
            try {
              await cortexAPI.foundry.sandbox({
                fileKeyHash: I,
                forceProvision: n.status === g.RECREATING
              }, _$$Ay());
              let e = null;
              await new Promise((t, n) => {
                let o = Date.now();
                let i = async () => {
                  if (Date.now() - o > 12e4) {
                    n(Error("Ping timed out"));
                    return;
                  }
                  try {
                    await cortexAPI.foundry.ping({
                      fileKeyHash: I
                    }, _$$Ay(), {
                      abortSignal: AbortSignal.timeout(4e3)
                    });
                    t();
                  } catch (t) {
                    null === e && (e = setInterval(i, 1e3));
                  }
                };
                i();
              }).finally(() => {
                e && clearInterval(e);
              });
              s({
                type: y.CREATE_SUCCESS
              });
            } catch (e) {
              s({
                type: y.CREATE_FAILED,
                error: Error(`Sandbox creation failure: ${e.toString()}`)
              });
              return;
            }
            let e = 0;
            let t = setInterval(async () => {
              try {
                await cortexAPI.foundry.ping({
                  fileKeyHash: I
                }, _$$Ay(), {
                  abortSignal: AbortSignal.timeout(4e3)
                });
                e = 0;
              } catch (n) {
                ++e >= 3 && (clearInterval(t), s({
                  type: y.CREATE,
                  fileKeyHash: I
                }));
              }
            }, 5e3);
          };
          0 === n.attempt ? t() : e = setTimeout(() => {
            t();
          }, 1e3);
          break;
        }
      case g.READY:
        {
          let e = b.current;
          for (let t of (b.current = [], e)) {
            clearTimeout(t.timeoutId);
            t.resolve();
          }
          break;
        }
      case g.BUNDLING:
        {
          if (_?.status === g.BUNDLING && _.attempt >= n.attempt || !I) break;
          let t = async () => {
            let e = function ({
              oldFilesByPath: e,
              newFilesByPath: t
            }) {
              let n = {};
              let o = new Set();
              for (let i of new Set([...Object.keys(e), ...Object.keys(t)])) {
                let r = e[i];
                let a = t[i];
                !a && r ? o.add(i) : a && (!r || a !== r) && (n[i] = a);
              }
              return {
                upsertedFilesByPath: n,
                deletedFilePaths: o
              };
            }({
              oldFilesByPath: n.lastBundledFilesByPath,
              newFilesByPath: n.newFilesByPath
            });
            if (0 === Object.keys(e.upsertedFilesByPath).length && 0 === e.deletedFilePaths.size) {
              s({
                type: y.BUNDLE_SUCCESS,
                bundle: null
              });
              return;
            }
            try {
              let t = await cortexAPI.foundry.bundle({
                fileKeyHash: I,
                filesToUpsert: e.upsertedFilesByPath,
                filePathsToDelete: Array.from(e.deletedFilePaths)
              }, _$$Ay(), {
                abortSignal: AbortSignal.timeout(6e4)
              });
              s({
                type: y.BUNDLE_SUCCESS,
                bundle: t
              });
              n.resolver.resolve(t);
            } catch (e) {
              s({
                type: y.BUNDLE_FAILED,
                error: e
              });
              n.attempt >= 30 && n.resolver.reject(e);
            }
          };
          0 === n.attempt ? t() : e = setTimeout(() => {
            t();
          }, 1e3);
          break;
        }
      case g.UNRECOVERABLE:
        if (_?.status === g.UNRECOVERABLE || _?.status === g.DISABLED) break;
        clearAllIntervals();
        break;
      default:
        returnSecond(n, n, `Invalid status: ${n.status}`);
    }
    return () => {
      e && clearTimeout(e);
    };
  }, [I, n, _, setInterval, clearInterval, clearAllIntervals]);
  let T = useCallback(() => new Promise((e, t) => {
    if (v.current.status !== g.READY) {
      t(Error("Sandbox is not ready for bundling"));
      return;
    }
    s({
      type: y.BUNDLE,
      filesByPath: $$d()(Hg(nc), e => e.sourceCode),
      resolver: {
        resolve: e,
        reject: t
      }
    });
  }), []);
  let S = useCallback(() => new Promise((e, t) => {
    if (v.current.status === g.READY) {
      e();
      return;
    }
    let n = setTimeout(() => {
      t(Error("Sandbox creation timed out"));
    }, 12e4);
    b.current.push({
      resolve: e,
      reject: t,
      timeoutId: n
    });
  }), []);
  useEffect(() => () => {
    for (let e of b.current) {
      e.reject(Error("Component unmounted"));
      clearTimeout(e.timeoutId);
    }
    clearAllIntervals();
  }, [clearAllIntervals]);
  let A = useMemo(() => {
    if (!C) return null;
    switch (n.status) {
      case g.DISABLED:
        return null;
      case g.CREATING:
        return {
          state: "creating",
          bundle: T,
          waitForReady: S
        };
      case g.RECREATING:
        return {
          state: "reparing",
          bundle: T,
          waitForReady: S
        };
      case g.READY:
        return {
          state: "ready",
          bundle: T,
          waitForReady: S
        };
      case g.BUNDLING:
        return {
          state: "bundling",
          bundle: T,
          waitForReady: S
        };
      case g.UNRECOVERABLE:
        return {
          state: "unrecoverable",
          error: n.error
        };
      default:
        return returnSecond(n, null, `Invalid status: ${n.status}`);
    }
  }, [C, n, T, S]);
  return useMemoizedValue(A, (e, t) => e?.state === t?.state);
}
export const T = $$_0;
export const d = $$b1;