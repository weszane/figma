import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { wA } from "../vendor/514228";
import { S as _$$S } from "../905/274480";
import { J as _$$J } from "../905/270045";
import { $n } from "../905/521428";
import { Egt, biQ, XJn, mKm, oVz } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { x1, xi } from "../905/714362";
import { g as _$$g } from "../905/880308";
import { s as _$$s } from "../cssbuilder/589278";
import { t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { Y as _$$Y } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { qV, nY, oT, xF } from "../figma_app/566517";
import { tV, au } from "../figma_app/445976";
import { TM, WX } from "../9410/423538";
import { I9 } from "../figma_app/151869";
import { B as _$$B } from "../905/222272";
import { Y4 } from "../9410/40486";
import { eb, Kf, BW, JF } from "../figma_app/257655";
import { Z as _$$Z } from "../905/279476";
import { e as _$$e } from "../905/149844";
import { getSingletonSceneGraph } from "../905/700578";
import { zl, md } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { n as _$$n } from "../draftjs_composer/589474";
import { GH } from "../905/234821";
import { f as _$$f } from "../9410/885134";
import { pK } from "../9410/215872";
import { C2 } from "../9410/671180";
import { Ol } from "../figma_app/193952";
import { IT, M4 } from "../905/713695";
import { Xh } from "../figma_app/803787";
import { Ib } from "../905/129884";
import { Gh, Xs } from "../figma_app/707567";
import { m as _$$m } from "../figma_app/175364";
import { l7 } from "../905/189185";
import B from "../vendor/267721";
import { sx } from "../905/449184";
import { H9 } from "../figma_app/930338";
import { Ay } from "../figma_app/432652";
import { J as _$$J2 } from "../905/915227";
import { kS } from "../figma_app/864723";
import { ze, tS } from "../figma_app/516028";
import { p4 } from "../figma_app/412398";
import { B as _$$B2 } from "../905/521763";
import { sI, YG } from "../9410/797086";
var G = B;
function W(e) {
  return "SYMBOL" === e.type ? {
    symbolId: Egt.getAssetKeyForPublish(e.guid),
    version: e.sharedSymbolVersion
  } : "INSTANCE" === e.type && e.symbolId ? W(getSingletonSceneGraph().get(e.symbolId)) : {
    symbolId: "",
    version: null
  };
}
function H(e, t, a) {
  t && e.forEach(e => {
    if (e.result.conflictScore >= .5) {
      let {
        symbolId,
        version
      } = W(e.node);
      !function (e, t, a) {
        if (!e) return;
        let l = zl.get(ze);
        if (!l) return;
        let i = e.data?.file?.comments.find(e => e.clientMeta?.nodeId === t.guid && e.clientMeta?.nodeOffset?.x === 0 && e.clientMeta?.nodeOffset?.y === 0);
        let n = getSingletonSceneGraph().getCurrentPage().guid;
        let s = _$$g();
        i ? e.api.writeAPI?.reply({
          messageMeta: [{
            t: a
          }],
          attachments: [],
          threadId: i.id,
          threadUuid: i.uuid || void 0,
          uuid: s
        }, {}) : e.api.writeAPI?.create({
          fileKey: l,
          messageMeta: [{
            t: a
          }],
          attachments: [],
          pageId: n,
          uuid: s,
          clientMeta: {
            x: t.x,
            y: t.y,
            node_offset: {
              x: 0,
              y: 0
            },
            node_id: t.guid
          }
        }, {
          onValidationError: null
        });
      }(t, e.node, (a ? ` Run ID: ${a}
` : "") + ("SYMBOL" === e.node.type || "INSTANCE" === e.node.type ? `Symbol ID: ${symbolId} 
Symbol Version: ${version}
` : "") + `Conflict Score: ${e.result.conflictScore} 
 ${e.result.reasoning}`);
    }
  });
}
async function Q(e, t, a) {
  "FRAME" === e.type && "HORIZONTAL" === e.stackMode && e.childCount && "FRAME" === e.childrenNodes[0].type && "VERTICAL" === e.childrenNodes[0].stackMode || t(_$$F.enqueue({
    message: "Please select eval output/eval output not in the correct format",
    error: !0
  }));
  let l = e.childrenNodes.map(e => e.childrenNodes[1]);
  let i = await el(l, t);
  H(i, a);
  Z("IP Conflict eval results", `You have ${i.reduce((e, t) => e + Math.round(t.result.conflictScore), 0)} conflicts: 
 ${JSON.stringify(i)}`, e);
}
function Z(e, t, a) {
  l7.user("Create sticky note with IP Conflict eval results", () => {
    let l = getSingletonSceneGraph().createNode("FRAME");
    let i = getSingletonSceneGraph().createNode("TEXT");
    l.appendChild(i);
    i.name = e;
    l.x = a.x + a.size.x + 10;
    l.y = a.y;
    l.size = {
      x: 200,
      y: 200
    };
    i.size = {
      x: l.size.x,
      y: l.size.y
    };
    biQ.setTextContentOnTextNode(i.guid, t);
    getSingletonSceneGraph().getCurrentPage().appendChild(l);
  });
}
let ee = ["Mobile App Kit", "Website Kit"];
function et(e, t, a) {
  return async () => {
    let l = getSingletonSceneGraph().getCurrentPage();
    if (!ee.includes(l.name)) {
      t(_$$F.enqueue({
        message: "Can only run this action on a kit page",
        error: !0
      }));
      return;
    }
    let i = l.childrenNodes.find(t => t.name === e);
    if (!i) {
      t(_$$F.enqueue({
        message: 'No "Building Blocks" section found',
        error: !0
      }));
      return;
    }
    let n = [];
    let s = [i];
    for (; s.length > 0;) {
      let e = s.pop();
      "SECTION" === e.type ? s.push(...e.childrenNodes) : e.isStateGroup ? s.push(...e.childrenNodes) : n.push(e);
    }
    let r = await el(n, t);
    let o = Math.random().toString(36).substring(7);
    if (H(r, a, o), Z("IP Conflict eval results", `Run Guid: ${o} 
 You have ${r.reduce((e, t) => e + Math.round(t.result.conflictScore), 0)} conflicts 
 ${JSON.stringify(r)}`, i), "Building Blocks" === e) {
      let {
        symbolId,
        version
      } = W(i);
      let l = r.map(e => ({
        score: e.result.conflictScore,
        symbolKey: symbolId,
        symbolVersion: version
      }));
      sx("FirstDraftIpConflictBuildingBlockEval", {
        runGuid: o,
        section: e,
        fileKey: zl.get(ze) || "",
        buildingBlockScores: l.map(e => JSON.stringify(e))
      });
    } else if ("Examples" === e) {
      let t = r.map(e => ({
        score: e.result.conflictScore,
        exampleName: e.node.name
      }));
      sx("FirstDraftIpConflictExamplesEval", {
        runGuid: o,
        section: e,
        fileKey: zl.get(ze) || "",
        exampleScores: t.map(e => JSON.stringify(e))
      });
    }
  };
}
let ea = "FIRST_DRAFT_IP_CONFLICT";
async function el(e, t) {
  t(_$$F.enqueue({
    message: `Running IP Conflict eval on ${e.length} nodes`,
    type: ea,
    error: !1
  }));
  let a = [];
  try {
    let l = G()(e, 30);
    let i = 0;
    for (let n of l) {
      t(_$$F.enqueue({
        message: `Running IP conflict eval on ${e.length} nodes: batch ${i + 1}/${l.length}`,
        type: ea,
        error: !1
      }));
      i += 1;
      let s = n.map(async e => ({
        b64: "data:image/jpeg;base64," + H9(await e.loadImagesAndExport([{
          imageType: "JPEG"
        }])),
        node: e
      })).map(async e => {
        let t = async () => Ay.design.firstDraftIpConflict({
          imageB64: (await e).b64
        }, {
          orgId: null,
          teamId: null,
          fileKey: zl.get(ze) || null,
          userId: zl.get(kS) || null,
          fileSeq: zl.get(_$$J2)?.toString() || null,
          trackingSessionId: null,
          clientLifecycleId: ""
        });
        return {
          result: await t().catch(e => t()),
          node: (await e).node
        };
      });
      let r = await Promise.all(s);
      a = a.concat(r);
    }
  } catch (e) {
    t(_$$F.enqueue({
      message: `IP Conflict eval failed: ${e.message}`,
      type: ea,
      error: !0
    }));
    return e;
  }
  t(_$$F.enqueue({
    message: "IP Conflict eval completed",
    type: ea,
    error: !1
  }));
  return a;
}
function ei() {
  let e = wA();
  let t = GH();
  let a = [{
    label: "Eval kit Examples",
    function: et("Examples", e, t)
  }, {
    label: "Eval kit Building blocks",
    function: et("Building Blocks", e, t)
  }, {
    label: "Eval selected nodes",
    function: async () => {
      let a = getSingletonSceneGraph().getCurrentPage().directlySelectedNodes;
      if (!a.length) {
        e(_$$F.enqueue({
          message: "Please select some nodes",
          error: !0
        }));
        return;
      }
      let l = await el(a, e);
      H(l, t);
      Z("IP Conflict eval results", `You have ${l.reduce((e, t) => e + Math.round(t.result.conflictScore), 0)} conflicts: 
 ${JSON.stringify(l)}`, a[a.length - 1]);
    }
  }, {
    label: "Eval selected generations",
    function: async () => {
      let a = getSingletonSceneGraph().getCurrentPage().directlySelectedNodes;
      if (!a.length || "FRAME" !== a[0].type) {
        e(_$$F.enqueue({
          message: "Please select a single parent node of all the generation outputs",
          error: !0
        }));
        return;
      }
      let l = a[0];
      await Q(l, e, t);
    }
  }];
  let [s, r] = useState(a[0]);
  return jsxs(_$$Y, {
    direction: "horizontal",
    children: [jsx("div", {
      className: _$$s.cursorPointer.flex.itemsCenter.wFull.$,
      children: jsx(_$$E, {
        fontSize: 11,
        fontWeight: "medium",
        children: "IP Conflict"
      })
    }), jsx(_$$m, {
      selected: s,
      onSelectedChange: e => r(e),
      placeholder: "Select eval set",
      labelForSelectedItem: e => e.label,
      displayAboveTarget: !0,
      lean: "right",
      items: a.map(e => ({
        type: "option",
        text: e.label,
        value: e
      }))
    }), jsx($n, {
      variant: "secondary",
      onClick: () => {
        s.$$function();
      },
      children: "Run"
    })]
  });
}
let en = {
  "gpt-4o-2024-05-13": {
    name: "GPT-4o",
    model: "gpt-4o-2024-05-13"
  },
  "models/gemini-2.0-flash-001": {
    name: "Gemini 2.0 Flash",
    model: "models/gemini-2.0-flash-001"
  },
  "us.meta.llama3-2-90b-instruct-v1:0": {
    name: "Llama 3.2 90b",
    model: "us.meta.llama3-2-90b-instruct-v1:0"
  }
};
let es = "Custom prompts";
let er = {
  type: "checkableOption",
  value: es,
  text: es
};
async function eo({
  model: e,
  selectedEval: t,
  kit: a,
  customEvalPrompts: l
}) {
  let i = "LOCAL" === a.dsKitKey.type ? XJn.getKitKey(a.dsKitKey.pageId) ?? "" : a.dsKitKey.key;
  let n = "LOCAL" === a.dsKitKey.type;
  let {
    data: {
      meta: {
        s3_key
      }
    }
  } = await Gh.postFirstDraftRunEvals({
    model: e,
    kitKey: i,
    selectedEval: t,
    isLocal: n,
    evalPrompts: l
  });
  return new Promise(e => {
    let t = 0;
    let a = setInterval(async () => {
      t += 1;
      try {
        let l = await Gh.getFirstDraftsEvalStatus({
          s3Key: s3_key
        });
        let i = l.data.meta.status;
        "success" === i ? (clearInterval(a), e(l.data.meta)) : ("failed" === i || t >= 9) && (clearInterval(a), e(null));
      } catch {}
    }, 2e4);
  });
}
function ec({
  selectedKitOption: e,
  clientLifecycleId: t
}) {
  let a = wA();
  let {
    evalSetsQueryStatus,
    evalSets
  } = function () {
    let [e] = IT(ed(null));
    return {
      evalSetsQueryStatus: e.status,
      evalSets: e.data ?? []
    };
  }();
  let [p, m] = useState(!1);
  let [x, S] = useState("");
  let [v, b] = useState(!1);
  let [I, w] = useState(!1);
  let [K, k] = useState(!1);
  let [E, N] = useState(null);
  let [A, R] = useState(null);
  let _ = md(Xh(void 0));
  let [J, $] = useState(!1);
  let B = GH();
  useEffect(() => {
    evalSets.length && null == E && N(evalSets[0]);
  }, [evalSets, E]);
  let G = useMemo(() => e?.type === "KIT" && "LOCAL" === e.kit.dsKitKey.type, [e]);
  let Y = useCallback(() => {
    try {
      let e = JSON.parse(x);
      if (!Array.isArray(e)) return;
      return e.map(e => e.trim()).filter(e => e.length > 0) ?? void 0;
    } catch (e) {
      return;
    }
  }, [x]);
  let M = useCallback(() => e ? G && K ? Ol(e.kit) ?? e.kit : e.kit : null, [e, G, K]);
  let U = useCallback(e => {
    a(_$$F.enqueue({
      type: "FIRST_DRAFT_EVAL",
      message: e,
      error: !0
    }));
  }, [a]);
  let q = useCallback(async () => {
    if (J || !E) return;
    let e = M();
    if (!e) return;
    if (!A) {
      U("Select a model");
      return;
    }
    let l = Y();
    if (E === es && !l) {
      U("Failed to parse custom prompt array");
      return;
    }
    try {
      $(!0);
      let i = l ? `Running evals with ${l.length} custom prompts...` : `Running evals for ${E}...`;
      a(_$$F.enqueue({
        type: "FIRST_DRAFT_EVAL",
        timeoutOverride: 1 / 0,
        message: i
      }));
      let n = await eo({
        kit: e,
        model: A.model,
        selectedEval: E,
        customEvalPrompts: l
      });
      if (!n) {
        U("Evals failed. Please try again.");
        return;
      }
      let s = await ep({
        kit: e,
        batch: n,
        shouldGenerateImages: p,
        shouldDetachComponentsSelected: v,
        clientLifecycleId: t
      });
      if (s && I) {
        let e = getSingletonSceneGraph().get(s);
        e && (await Q(e, a, B));
      }
    } catch (e) {
      x1("first-draft", "Error running evals", {
        error: e
      });
      a(_$$F.enqueue({
        type: "FIRST_DRAFT_EVAL",
        message: "Eval failed. Please check the console for more information.",
        error: !0
      }));
    } finally {
      $(!1);
    }
  }, [J, E, M, A, Y, a, p, t, I, v, U, B]);
  let X = evalSets.map(e => ({
    type: "checkableOption",
    value: e,
    text: e
  })).concat(er);
  return jsxs(_$$Y, {
    padding: {
      vertical: 12
    },
    direction: "vertical",
    children: [jsx(_$$E, {
      fontSize: 11,
      fontWeight: "medium",
      children: "Evals"
    }), jsx(_$$m, {
      selected: E,
      onSelectedChange: e => N(e),
      placeholder: "Select eval set",
      labelForSelectedItem: e => e,
      displayAboveTarget: !0,
      lean: "right",
      items: X,
      disabled: "loaded" !== evalSetsQueryStatus
    }), E === es && jsx("textarea", {
      className: _$$s.resizeNone.wFull.colorBgSecondary.px12.py8.bRadius5.$,
      rows: 3,
      value: x,
      placeholder: 'Enter custom eval prompts as JSON array. E.g. ["prompt1", "prompt2"]',
      onChange: e => S(e.target.value)
    }), jsxs(_$$Y, {
      children: [jsx(_$$m, {
        selected: A,
        onSelectedChange: e => R(e),
        placeholder: "Model",
        labelForSelectedItem: e => e.name,
        displayAboveTarget: !0,
        lean: "right",
        items: Object.values(en).map(e => ({
          type: "option",
          value: e,
          text: e.name
        }))
      }), jsx($n, {
        variant: "secondary",
        onClick: q,
        children: "Run evals"
      }), jsx(eu, {
        disabled: J,
        onUpload: e => {
          let a = M();
          a && ep({
            kit: a,
            batch: e,
            shouldGenerateImages: p,
            shouldDetachComponentsSelected: v,
            clientLifecycleId: t
          });
        }
      })]
    }), jsxs(_$$Y, {
      children: [jsx(_$$S, {
        checked: p,
        disabled: J,
        onChange: () => m(e => !e),
        label: jsx(_$$J, {
          children: "Gen images"
        })
      }), jsx(_$$S, {
        checked: v,
        disabled: J,
        onChange: () => b(e => !e),
        label: jsx(_$$J, {
          children: "Detach"
        })
      }), jsx(_$$S, {
        checked: I,
        disabled: J,
        onChange: () => w(e => !e),
        label: jsx(_$$J, {
          children: "Ip conflict"
        })
      }), G && jsx(_$$S, {
        checked: K,
        disabled: J,
        onChange: () => k(e => !e),
        label: jsx(_$$J, {
          children: "Use published kit version"
        })
      }), G && _ && jsx(_$$Z, {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": "You currently have unpublished changes to your library kit.\nPublish library updates before running evals to ensure the current kit version is used."
      })]
    })]
  });
}
let ed = M4.Query({
  fetch: async () => (await Gh.getFirstDraftAllEvalSets()).data.meta.eval_sets
});
function eu({
  disabled: e,
  onUpload: t
}) {
  let a = useRef(null);
  return jsx(_$$n, {
    acceptedFileTypes: "json",
    singleFile: !0,
    isDisabled: e,
    svgAltText: "Upload eval",
    inputId: "first-draft-eval-upload",
    inputRef: a,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": "Upload eval",
    onFileInputChange: e => () => {
      let a = e.current?.files?.[0];
      if (a) {
        let l = new FileReader();
        l.onload = a => {
          let l = a.target?.result;
          if (l) try {
            let e = JSON.parse(l);
            let a = Xs.parse(e);
            t(a);
          } catch (e) {
            console.error("Error uploading eval", e);
          } finally {
            e.current && (e.current.value = "");
          }
        };
        l.readAsText(a);
      }
    },
    children: jsx(_$$e, {})
  });
}
async function ep({
  batch: e,
  kit: t,
  shouldGenerateImages: a,
  shouldDetachComponentsSelected: l,
  clientLifecycleId: i
}) {
  try {
    debugState.dispatch(_$$F.enqueue({
      type: "FIRST_DRAFT_EVAL",
      timeoutOverride: 1 / 0,
      message: "Inserting evals..."
    }));
    let n = [];
    let s = [];
    for (let t of e.eval_results) {
      let a = t.userPromptRaw ?? "";
      let l = [em({
        title: "User Prompt",
        metadata: a
      })];
      if ("v3" === e.prompt_version) {
        let e = null;
        let i = "";
        try {
          i = eb(t.layoutJsx ?? "");
          e = await Kf(i);
        } catch (t) {
          e = [ef(String(t))];
        }
        s.push({
          userPrompt: a,
          jsxJSON: e || []
        });
        let n = [];
        if (!t.v3Components) continue;
        for (let [a, l] of Object.entries(t.v3Components)) {
          let t = eb(l);
          n.push(em({
            title: a,
            metadata: t
          }));
          let i = null;
          try {
            i = await Kf(t);
          } catch (e) {
            i = [ef(String(e))];
          }
          if (e && i) {
            let t = i[0];
            t && (e = function (e, t, a) {
              let l = e => {
                if (e) return "Placeholder" === e.type && e.props.name === t ? a : {
                  ...e,
                  children: e.children?.map(l).filter(Boolean)
                };
              };
              return e.map(l).filter(Boolean);
            }(e, a, t));
          }
        }
        l.push({
          type: "AutoLayout",
          props: {
            className: "w-fit bg-white",
            sharedPluginData: {
              isDone: "true",
              theme: JSON.stringify(t.theme ?? {})
            }
          },
          children: e ?? []
        }, em({
          title: "Extracted Layout JSX",
          metadata: i
        }), ...n);
      } else {
        let e = "";
        let i = null;
        try {
          e = eb(t.jsx ?? "");
          i = await Kf(e);
        } catch (e) {
          i = [ef(String(e))];
        }
        s.push({
          userPrompt: a,
          jsxJSON: i || []
        });
        l.push({
          type: "AutoLayout",
          props: {
            name: "Result",
            className: "w-fit  bg-white",
            sharedPluginData: {
              isDone: "true",
              theme: JSON.stringify(t.theme ?? {})
            }
          },
          children: i ?? []
        }, em({
          title: "Extracted JSX",
          metadata: e
        }));
      }
      if (t.theme && l.push(em({
        title: "Theme",
        metadata: JSON.stringify(t.theme, null, 2)
      })), t.trace) {
        let e = eh(t.trace);
        e && l.push(em({
          title: "Examples in prompt",
          metadata: e
        }));
        l.push(em({
          title: "Trace",
          metadata: JSON.stringify(t.trace),
          storeInPluginData: !0
        }));
      }
      n.push({
        type: "VStack",
        props: {
          className: "flex flex-col w-fit items-center gap-[48px] p-4",
          name: "Eval Result"
        },
        children: l
      });
    }
    let r = [{
      type: "HStack",
      props: {
        name: "Eval Run Set",
        className: "flex flex-row w-fit h-fit p-4 gap-4 bg-slate-50"
      },
      children: n
    }];
    let o = {};
    ("1P_LIBRARY" === t.dsKitKey.type || "USER_LIBRARY" === t.dsKitKey.type) && (await pK({
      jsxJSON: r,
      dsKitKey: t.dsKitKey,
      componentNameToInsertResult: o
    }));
    let d = C2({
      dsKitKey: t.dsKitKey,
      componentNameToInsertResult: o
    });
    let u = await BW(r, d, null, {
      directGen: !1,
      showUnhandled: !0,
      useShareJSX: !1
    });
    let p = JF(u);
    let {
      insertNodeIds
    } = await _$$f({
      jsxStr: "",
      jsxElement: p,
      prevExpandedJsx: [],
      customJsxElementRegistry: d,
      options: {
        isEval: !0,
        dsKitKey: t.dsKitKey,
        autoFillParent: !0,
        componentNameToInsertResult: o,
        shouldAnimateLoading: !1,
        clientLifecycleId: i
      }
    }, null);
    if (!insertNodeIds.length) return;
    let m = insertNodeIds[0];
    debugState.dispatch(_$$F.enqueue({
      type: "FIRST_DRAFT_EVAL",
      timeoutOverride: 1 / 0,
      message: "Populating icons & images..."
    }));
    let y = getSingletonSceneGraph().get(m);
    let g = (y?.childrenGuids || []).map((e, t) => ({
      id: e,
      ...s[t]
    }));
    for (let e of y.childrenNodes) e.stackHorizontalLayoutSize = mKm.HUG_CONTENT;
    let S = [];
    S.push(qV({
      containingNodeId: m,
      options: {
        dsKitKey: t.dsKitKey
      },
      batchSize: 15
    }));
    a && S.push((async () => {
      let e = {};
      await nY({
        containingNodeArgs: g,
        batchSize: 20,
        imagesTrace: e,
        clientLifecycleId: i
      });
      await Promise.all(g.map(async ({
        id: a
      }) => {
        if (!e[a]) return;
        let l = [em({
          title: "Images Trace",
          metadata: JSON.stringify(e[a]),
          storeInPluginData: !0
        })];
        let n = await BW(l, d, null, {
          directGen: !1,
          showUnhandled: !0,
          useShareJSX: !1
        });
        let s = JF(n);
        await _$$f({
          jsxStr: "",
          jsxElement: s,
          prevExpandedJsx: [],
          customJsxElementRegistry: d,
          options: {
            isEval: !0,
            dsKitKey: t.dsKitKey,
            autoFillParent: !0,
            componentNameToInsertResult: o,
            parentNodeId: a,
            insertBehavior: "inline",
            clientLifecycleId: i
          }
        }, null);
      }));
    })());
    await Promise.all(S);
    l && (await oT(t.dsKitKey, m, oVz.CURRENT, {
      detachVariables: !0
    }));
    debugState.dispatch(_$$F.enqueue({
      type: "FIRST_DRAFT_EVAL",
      message: "Eval Completed"
    }));
    return m;
  } catch (e) {
    x1("first-draft", "Error running evals", {
      error: e
    });
    debugState.dispatch(_$$F.enqueue({
      type: "FIRST_DRAFT_EVAL",
      message: "Eval failed. Please check the console for more information.",
      error: !0
    }));
  }
}
let eh = e => {
  let t = e.jsx_messages;
  if (!t) return null;
  let a = null;
  for (let e of t) {
    let t = "system" === e.role;
    if (e.content) {
      let l = e.content.indexOf("examples of good outputs");
      if (-1 !== l) {
        let i = e.content.substring(l);
        if (!t) return i;
        a = i;
      }
    }
  }
  return a ?? null;
};
let em = ({
  metadata: e,
  title: t,
  storeInPluginData: a
}) => {
  let l = [{
    type: "Text",
    props: {
      className: "w-full text-xs text-slate-500 text-left",
      sharedPluginData: {
        value: a ? e : ""
      }
    },
    children: [a ? `${t.toUpperCase()} (Stored in pluginData)` : t.toUpperCase()]
  }];
  a || l.push({
    type: "Text",
    props: {
      className: "w-full text-xs text-left"
    },
    children: [e]
  });
  return {
    type: "AutoLayout",
    props: {
      name: t,
      className: "p-4 gap-2 bg-white w-[300px] flex-col"
    },
    children: l
  };
};
let ef = e => ({
  type: "Text",
  props: {
    className: "text-red-500 w-[300px]"
  },
  children: [e]
});
async function ex({
  kit: e,
  inputPrompt: t,
  openFileKey: a,
  customizableVariables: l
}) {
  let i = "LOCAL" === e.dsKitKey.type ? XJn.getKitKey(e.dsKitKey.pageId) ?? "" : e.dsKitKey.key;
  let n = "LOCAL" === e.dsKitKey.type;
  n && a && (await p4(a, e, l));
  let {
    data: {
      meta: {
        examples
      }
    }
  } = await Gh.getFirstDraftRetrievedExamples({
    kitKey: i,
    isLocal: n,
    prompt: t
  });
  return examples;
}
function eS({
  selectedKit: e
}) {
  let t = wA();
  let a = tS();
  let [s, r] = useState("");
  let [c, d] = useState([]);
  let u = _$$B2();
  let p = c.length > 0;
  return jsxs(_$$Y, {
    padding: {
      vertical: 12
    },
    direction: "vertical",
    children: [jsx("button", {
      className: _$$s.cursorPointer.flex.itemsCenter.wFull.$,
      children: jsx(_$$E, {
        fontSize: 11,
        fontWeight: "medium",
        children: "Examples Debug"
      })
    }), jsx("textarea", {
      className: _$$s.resizeNone.wFull.colorBgSecondary.px12.py8.bRadius5.$,
      rows: 1,
      value: s,
      placeholder: "Enter a prompt to retrieve examples",
      onChange: e => r(e.target.value)
    }), jsx($n, {
      variant: "secondary",
      onClick: async () => {
        try {
          let t = await ex({
            kit: e,
            inputPrompt: s,
            openFileKey: a,
            customizableVariables: u
          });
          d(t);
        } catch (e) {
          t(_$$F.enqueue({
            type: "FIRST_DRAFT_EXAMPLES_DEBUG",
            message: "Fetching examples failed. Please make sure you're using a published kit with examples.",
            error: !0
          }));
        }
      },
      children: "Get examples"
    }), p && jsx("div", {
      style: {
        height: "300px",
        overflowY: "scroll"
      },
      children: c.map((e, t) => jsxs(_$$Y, {
        direction: "horizontal",
        width: "fill-parent",
        children: [jsx("img", {
          src: e.thumbnail_url ?? void 0,
          alt: "No thumbnail",
          style: {
            height: "auto",
            width: "auto",
            maxHeight: "300px",
            maxWidth: "250px"
          }
        }), jsxs("div", {
          style: {
            width: "200px",
            wordWrap: "break-word"
          },
          children: [" ", e.name]
        })]
      }, t))
    })]
  });
}
export function $$eb0() {
  let {
    kitsAreLoaded,
    allUsableKitEntries,
    selectedKitOption,
    setSelectedKitOption
  } = sI(!0);
  let s = useRef(_$$g()).current;
  let r = selectedKitOption?.type === "KIT";
  let o = useMemo(() => {
    let e = allUsableKitEntries.filter(e => "1P_LIBRARY" === e.dsKitKey.type);
    let a = allUsableKitEntries.filter(e => "USER_LIBRARY" === e.dsKitKey.type);
    let l = allUsableKitEntries.filter(e => "LOCAL" === e.dsKitKey.type);
    return (e.length > 0 ? [{
      type: "header",
      text: t("first_draft.made_by_figma")
    }].concat(e.map(e => ({
      type: "checkableOption",
      value: {
        type: "KIT",
        kit: e
      },
      text: e.name
    }))) : []).concat(a.length > 0 ? [{
      type: "header",
      text: "Library Kits"
    }].concat(a.map(e => ({
      type: "checkableOption",
      value: {
        type: "KIT",
        kit: e
      },
      text: e.name
    }))) : []).concat(l.length > 0 ? [{
      type: "header",
      text: t("first_draft.current_file")
    }].concat(l.map(e => ({
      type: "checkableOption",
      value: {
        type: "KIT",
        kit: e
      },
      text: e.name
    }))) : []);
  }, [allUsableKitEntries]);
  return jsxs("div", {
    className: _$$s.p8.borderBox.$,
    children: [jsx(eI, {
      selectedKitOption,
      clientLifecycleId: s
    }), jsx(ec, {
      selectedKitOption,
      clientLifecycleId: s
    }), jsx(ei, {}), r && jsx(eS, {
      selectedKit: selectedKitOption.kit
    }), jsx(_$$B, {
      fullWidth: !0,
      justify: "space-between",
      children: jsx(YG, {
        items: o,
        kitsAreLoaded,
        selectedKitOption,
        setSelectedKitOption
      })
    }), getFeatureFlags().make_edits && Y4 && jsx(Y4, {})]
  });
}
function eI({
  selectedKitOption: e,
  clientLifecycleId: t
}) {
  let a = wA();
  let c = I9();
  let [d, p] = useState(!1);
  let [m, I] = useState("");
  let [w, K] = useState(!1);
  let [j, k] = useState(!1);
  useEffect(() => {
    async function e(e) {
      let t = w ? await tV(e) : await au("mobile", e);
      w || !j ? I(t?.jsx || "") : I(t?.jsxWithProps || "");
    }
    if (c) {
      let t = c[0];
      t && 1 === c.length && e(t.guid);
    } else I("");
  }, [c, w, j]);
  let C = useCallback(async e => {
    e && (xF(e), await Promise.resolve());
  }, []);
  let {
    submitPromptMocked
  } = TM({
    onInsertJSXDone: C,
    mockStreamOptions: {
      sleepTime: 100,
      chunksPerYield: 1e6,
      useWords: !1
    },
    clientLifecycleId: t,
    shouldContinueStream: () => !0
  });
  let {
    submitPromptMocked: _submitPromptMocked
  } = TM({
    onInsertJSXDone: C,
    mockStreamOptions: {
      sleepTime: 100,
      chunksPerYield: 10,
      useWords: !1
    },
    clientLifecycleId: t,
    shouldContinueStream: () => !0
  });
  let N = useCallback(async () => {
    if (!e) {
      xi("first-draft", "insert called without a selected kit");
      return;
    }
    let t = ew(e);
    if (!t) {
      xi("first-draft", "insert called without a valid dsKit");
      return;
    }
    await _submitPromptMocked({
      dsKit: t,
      theme: {},
      jsx: "```jsx\n" + m
    }, {
      dsKitKey: e.kit.dsKitKey,
      shouldGenerateImages: d,
      directGeneration: WX(e.kit)
    });
  }, [m, _submitPromptMocked, e, d]);
  let T = useCallback(async t => {
    if (!e) {
      xi("first-draft", "insert called without a selected kit");
      return;
    }
    let a = ew(e);
    if (!a) {
      xi("first-draft", "insert called without a valid dsKit");
      return;
    }
    await submitPromptMocked({
      dsKit: a,
      theme: {},
      jsx: "```jsx\n" + t
    }, {
      dsKitKey: e.kit.dsKitKey,
      shouldGenerateImages: d,
      directGeneration: WX(e.kit)
    });
  }, [submitPromptMocked, e, d]);
  return jsxs(_$$Y, {
    padding: {
      vertical: 12
    },
    direction: "vertical",
    children: [jsx(_$$E, {
      fontSize: 11,
      fontWeight: "medium",
      children: "Serialize & Insert"
    }), jsxs(_$$Y, {
      children: [jsx(_$$S, {
        checked: w,
        onChange: () => K(e => !e),
        label: jsx(_$$J, {
          children: "Serialize with Direct Gen JSX"
        })
      }), jsx(_$$S, {
        checked: j || w,
        disabled: w,
        onChange: () => k(e => !e),
        label: jsx(_$$J, {
          children: "Include props in JSX (for Llama)"
        })
      })]
    }), jsx("textarea", {
      className: _$$s.resizeNone.wFull.colorBgSecondary.px12.py8.bRadius5.$,
      rows: 3,
      value: m,
      placeholder: "Select an example to serialize it or enter JSX to insert directly",
      onChange: e => I(e.target.value)
    }), jsx(_$$Y, {
      children: jsx(_$$S, {
        checked: d,
        onChange: () => p(e => !e),
        label: jsx(_$$J, {
          children: "Gen images"
        })
      })
    }), jsxs(_$$Y, {
      children: [jsx($n, {
        variant: "secondary",
        onClick: async () => {
          await N();
          a(_$$F.enqueue({
            message: "Finished insert"
          }));
        },
        children: "Insert streaming"
      }), jsx($n, {
        variant: "secondary",
        onClick: async () => {
          await T(m);
          a(_$$F.enqueue({
            message: "Finished insert"
          }));
        },
        children: "Insert all"
      }), c && c.length > 1 && jsx($n, {
        variant: "secondary",
        onClick: async () => {
          for (let e of c) {
            let t = await au("mobile", e.guid);
            t?.jsxWithProps ? await T(t.jsxWithProps) : a(_$$F.enqueue({
              error: !0,
              message: `Failed to serialize ${e.guid}`
            }));
          }
          a(_$$F.enqueue({
            message: `Inserted ${c.length} nodes`
          }));
        },
        children: "Roundtrip all selected nodes"
      })]
    })]
  });
}
function ew(e) {
  let t = e.kit.dsKitKey;
  let a = "LOCAL" === t.type ? XJn.getKitKey(t.pageId) : t.key;
  return a ? {
    kitKey: a,
    isLocal: "LOCAL" === t.type,
    isDirectGenLibrary: "USER_LIBRARY" === t.type
  } : null;
}
export let $$eK1 = $$eb0;
export const FirstDraftDebugViewInner = $$eb0;
export const _$$default = $$eK1;