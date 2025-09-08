import _require from "../5973/625973";
import { COMPONENT_PREFIX } from "../figma_app/664063";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { analyticsEventManager } from "../905/449184";
import { Ay } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
var n;
async function o(e, t = 1) {
  let n = getSingletonSceneGraph();
  let r = e.findContainingTopLevelNodeWithWidthConstraint(2e3);
  r === defaultSessionLocalIDString && (r = e.findContainingTopLevelFrameOrSelf());
  let c = e && n.get(r);
  if (!c) return;
  let u = 0;
  let p = null;
  try {
    p = (await Promise.all([]).then(_require)).serializeJSX(c, {
      includeIDs: !0,
      excludeImageData: !0,
      excludeVectorData: !0,
      includeNames: !0,
      ignoreFetchingComponentData: !0,
      filterFunction: e => (u++, e.visible),
      ignoreComponentProps: !0,
      focusNodeId: e.guid,
      excludeEmptyContainers: !0,
      maxSerializeNodes: 100,
      maxSerializeTimeMs: 100,
      includeNodeTypes: ["TEXT", "FRAME", "GROUP", "INSTANCE", "SYMBOL"],
      fieldGroups: ["layout", "text"],
      fieldGroupFilters: {
        layout: ["x", "y", "width", "height", "flex"],
        text: ["fontSize", "textDecoration"]
      },
      maxNodeswithFields: 30,
      strict: !1,
      includeInstanceSublayers: !0,
      ignoreDeveloperFriendlyIds: !0,
      forceAbsolutePosition: !0,
      flattenTextContent: !0,
      truncateFlattenedTextContent: 1e3,
      useDivTagsForFrames: !0
    }).jsxStr;
  } catch (e) {
    console.error("Failed to serialize JSX:", e);
  }
  let m = p ? d(p, e.guid, t) : void 0;
  return {
    jsx: m ? l(m) : void 0,
    expData: {
      numSerializedNodes: u,
      maxSerializeNodes: 100,
      maxNodesWithFields: 30
    }
  };
}
!function (e) {
  e[e.STARTER = 1] = "STARTER";
  e[e.STARTING_CHAR = 2] = "STARTING_CHAR";
}(n || (n = {}));
let l = e => e.replace(/\n\s*/g, " ").trim();
let d = (e, t, i) => {
  let n;
  switch (i) {
    case 1:
    case 2:
      if (n = e?.replace(RegExp('\\sid="([^"]+)"', "g"), (e, i) => i === t ? e : "")?.replace(RegExp(`<Text([^>]*)id="${t}"([^>]*?)(?:/>|>([\\s\\S]*?)</Text>)`, "g"), (e, i, n) => {
        let r = n.replace(/\sname="\{?[^"}]*\}?"/, "");
        return `<Text${i}id="${t}"${r.trimEnd()} />`;
      })?.replace(RegExp(`(<\\/?)${COMPONENT_PREFIX}(\\w+)`, "g"), (e, t, i) => `${t}${i}`), !n?.includes(`id="${t}"`)) {
        console.error("Failed to find target node in JSX");
        return;
      }
  }
  return n;
};
let m = ["## CONTEXT", "## TASK", "## OUTPUT", "## GUIDELINES", "{CURSOR}"];
let h = ["seasoned UX writer", "assisting a UX designer", "JSX representation", "suggest copy", "single suggestion", "multiple suggestions", "target node", "contextual clues", "final design iteration", "generate text", "visual hierarchy", "textual consistency", "completing their unfinished designs"];
export async function $$g0(e, t, i, r) {
  var a;
  let l = getSingletonSceneGraph().get(e);
  if (!l) return;
  let d = Date.now();
  let u = await o(l, i);
  let p = Date.now();
  if (!u || !u.jsx) return;
  let g = r || "";
  let _ = i === n.STARTING_CHAR ? l.characters : "";
  let A = await f(u.jsx, t, e, i, g, _);
  let y = Date.now();
  (a = A.suggestions).forEach(t => {
    let i = function (e, t) {
      let i = [];
      let n = [];
      for (let i of (t && e.includes(t) && n.push("nodeId"), m)) e.includes(i) && n.push(i);
      for (let t of h) e.includes(t) && i.push(t);
      let r = !n.length;
      let a = i.length < 2;
      return {
        pass: r && a,
        hardStrikes: n,
        softStrikes: i
      };
    }(t, e);
    if (!i.pass) {
      analyticsEventManager.trackDefinedEvent("autosuggest_text.warning", {
        description: "Basic leak check failed",
        num_existing_chars: g.length,
        num_existing_words: g.split(" ").length,
        num_suggested_chars: t.length,
        num_suggested_words: t.split(" ").length,
        hard_strikes: i.hardStrikes.join(", "),
        soft_strikes: i.softStrikes.join(", ")
      });
      return [];
    }
  });
  let b = a.map(e => {
    var t;
    let i = function (e) {
      let t = "(Frame|Text|Span|Group)";
      let i = RegExp(`<\\b${t}\\b(\\s+[^>]*)?>`, "g");
      let n = RegExp(`</\\b${t}\\b>`, "g");
      let r = RegExp(`<\\b${t}\\b(\\s+[^>]*)*/?>`, "g");
      return e.replace(/\{CURSOR\}/g, "").replace(/\{BREAK\}/g, "").replace(i, "").replace(n, "").replace(r, "").replace(/{\s*`([^`]*)`\s*}/g, "$1").replace(/\s+/g, " ").replace(/^`|`$/g, "").replace(/'/g, "\u2019").trim();
    }(e);
    return (i === g && analyticsEventManager.trackDefinedEvent("autosuggest_text.suggestion_same_as_existing", {
      suggestion_length: e.length
    }), _ && (i = (t = i) && _ && t.toLowerCase().startsWith(_.toLowerCase()) ? _ + t.substring(_.length) : t), i === g) ? "" : i;
  }).filter(e => "" !== e);
  analyticsEventManager.trackDefinedMetric("autosuggest_text.serialization_latency", {
    serialization_latency_ms: p - d
  });
  analyticsEventManager.trackDefinedMetric("autosuggest_text.token_reduction_exp_info", {
    numSerializedNodes: u.expData.numSerializedNodes,
    maxSerializeNodes: u.expData.maxSerializeNodes,
    maxNodesWithFields: u.expData.maxNodesWithFields
  });
  return {
    rawText: A.suggestions,
    text: b,
    inputTokens: A.usage.promptTokens,
    serializationLatencyMs: p - d,
    requestLatencyMs: y - p
  };
}
async function f(e, t, i, n, r, a) {
  let {
    suggestions,
    usage
  } = await Ay.shared.autosuggestText({
    jsx: e,
    nodeId: i,
    suggestionType: n,
    existingText: r,
    startingChar: a
  }, {
    ..._$$Ay(),
    clientLifecycleId: t
  });
  return {
    suggestions,
    usage
  };
}
export const O = $$g0;