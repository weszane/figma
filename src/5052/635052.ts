import { sj, uf } from "../figma_app/728005";
import { l7 } from "../905/189185";
import { hV } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { getInitialOptions } from "../figma_app/169182";
import { F } from "../905/302958";
import { UK } from "../figma_app/740163";
import { tB } from "../figma_app/516028";
import { O } from "../905/207358";
import { iy } from "../figma_app/342355";
import { r as _$$r } from "../905/501976";
let p = "[TEST] ";
let h = "[Codegen] ";
function g(e, t) {
  e.dispatch(F.enqueue({
    message: t,
    error: !0
  }));
}
async function b(e, t) {
  let n = 0;
  let o = [];
  for (let s of t) {
    let c = getSingletonSceneGraph().get(s.data.nodeId);
    if (!c) {
      g(e, `Node ${s.data.nodeId} not found.`);
      return null;
    }
    let i = c.name;
    let u = i.replace(h, "").trim();
    0 === u.length && (u = "Component", console.warn(`[CODEGEN] Frame in section "${s.name}" has no name.`));
    l7.system("bulk-record-mcp-tool-output", () => {
      c.name = u;
    });
    let f = performance.now();
    let p = await _$$r(sj, {
      nodeId: s.data.nodeId
    }, e);
    let b = performance.now() - f;
    let N = await _$$r(uf, {
      nodeId: s.data.nodeId
    }, e);
    c.name !== i && l7.system("bulk-record-mcp-tool-output", () => {
      c.name = i;
    });
    o.push({
      ...s,
      data: {
        ...s.data,
        getCodeToolOutput: p,
        getImageToolOutput: N,
        getCodeDuration: b
      }
    });
    n++;
    e.dispatch(F.enqueue({
      message: `Exported ${n}/${t.length} test cases`,
      error: !1
    }));
  }
  return o;
}
async function N(e, t) {
  let n = await O(e);
  let a = URL.createObjectURL(n);
  let r = document.createElement("a");
  r.href = a;
  r.download = t;
  document.body.appendChild(r);
  r.click();
  document.body.removeChild(r);
  URL.revokeObjectURL(a);
}
export async function $$y0(e) {
  if (!UK().enableCodegenMcpServer.getCopy()) {
    g(e, "Dev Mode MCP server is not enabled.");
    return null;
  }
  let t = {
    userEmail: getInitialOptions().email,
    timestamp: new Date().toISOString(),
    frontendGitCommit: getInitialOptions().release_manifest_git_commit,
    backendGitCommit: getInitialOptions().release_server_git_commit,
    backendEnv: getInitialOptions().cluster_name
  };
  let n = iy();
  let a = getSingletonSceneGraph().getCurrentPage().childrenNodes.filter(e => "SECTION" === e.type);
  let r = function (e, t) {
    let n = t.find(e => "Codebases" === e.name);
    if (!n) {
      g(e, "No codebases section found or no codebases in section.");
      return null;
    }
    let a = new Map();
    let r = n.childrenNodes.filter(e => "SECTION" === e.type);
    if (0 === r.length) {
      e.dispatch(F.enqueue({
        message: "No codebases defined in section.",
        error: !0
      }));
      return null;
    }
    let o = 0;
    for (let t of r) {
      let n = null;
      let r = null;
      let l = null;
      if (t.childrenNodes.forEach(e => {
        switch (e.name) {
          case "name":
            n = e.characters;
            break;
          case "port env var name":
            r = e.characters;
            break;
          case "path to change":
            l = e.characters;
        }
      }), !n) {
        g(e, `No name field found for codebase ${o + 1}.`);
        return null;
      }
      if (!r) {
        g(e, `No port env var name field found for codebase ${n}.`);
        return null;
      }
      if (!l) {
        g(e, `No path to change field found for codebase ${n}.`);
        return null;
      }
      a.set(n, {
        name: n,
        portEnvVarName: r,
        pathToChange: l
      });
      o++;
    }
    return a;
  }(e, a);
  if (!r) return null;
  let u = function (e, t, n) {
    let a = e.getState();
    let r = tB(a);
    let l = t.filter(e => e.name.startsWith(p));
    if (0 === l.length) {
      g(e, "No test cases found.");
      return null;
    }
    let s = [];
    for (let t of l) {
      let a;
      let l;
      let d;
      let c;
      let i;
      let u;
      let f = t.name.replace(p, "");
      if (!f) {
        g(e, "No test case name found for test case 1.");
        return null;
      }
      if (t.childrenNodes.forEach(e => {
        switch (e.name) {
          case "prompt":
            a = e.childrenNodes.find(e => "TEXT" === e.type)?.characters;
            break;
          case "codebase":
            l = e.childrenNodes.find(e => "TEXT" === e.type)?.characters;
            break;
          case "design":
            d = e.childrenNodes[0];
            break;
          case "pre eval patch":
            c = e.childrenNodes.find(e => "TEXT" === e.type)?.characters;
            break;
          case "expected css variables":
            i = e.childrenNodes.find(e => "TEXT" === e.type)?.characters;
        }
      }), void 0 === a || 0 === a.length) {
        g(e, `No prompt found for test case ${f}.`);
        return null;
      }
      if (void 0 === l || 0 === l.length) {
        g(e, `No codebase name found for test case ${f}.`);
        return null;
      }
      let m = n.get(l);
      if (void 0 === m) {
        g(e, `Codebase ${l} not found.`);
        return null;
      }
      if (!d) {
        g(e, `No design node found for test case ${f}.`);
        return null;
      }
      if (hV(d, e => {
        if (e.name.startsWith(h)) {
          u = e;
          return "stop";
        }
      }), !u) {
        g(e, `No codegen node found for test case ${f}.`);
        return null;
      }
      a = a.replace("{nodeId}", u.guid);
      s.push({
        name: f,
        data: {
          task: a,
          fileKey: r?.key ?? "",
          nodeId: u.guid,
          codebase: {
            name: m.name,
            devServerPortEnvVarName: m.portEnvVarName,
            preEvalPatch: c ?? null
          },
          pathToChange: m.pathToChange,
          expectedCssVariables: i?.split("\n").map(e => e.trim())
        }
      });
    }
    return s;
  }(e, a, r);
  if (!u) return null;
  let m = await b(e, u);
  if (!m) return null;
  let y = function (e, t) {
    let n = [];
    for (let a of e) {
      let e = function (e, t, n) {
        if (!Array.isArray(t.content) || 0 === t.content.length) {
          g(n, "No image output found.");
          return null;
        }
        let a = t.content[0];
        let r = atob(a.data.replace(/^data:image\/[a-z]+;base64,/, ""));
        let o = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
        let l = new Blob([o], {
          type: a.mimeType
        });
        let s = a.mimeType.split("/")[1];
        return {
          name: `${e.name}.${s}`,
          contents: l
        };
      }(a, a.data.getImageToolOutput, t);
      e && n.push(e);
    }
    return n;
  }(m, e);
  N([{
    name: `test-cases-${t.timestamp}.json`,
    contents: JSON.stringify({
      compilationInfo: t,
      mcpServerConfig: n,
      testCases: m
    }, null, 2)
  }, ...y], `mcp-test-cases-${t.timestamp}.zip`);
}
export const getTestCasesSnapshot = $$y0;