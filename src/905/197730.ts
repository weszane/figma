import { getI18nString } from "../905/303541";
import { pS, hl, fN, Bt, MQ, Ah, Pg, kE, hW, rK } from "../905/588985";
import { Gs, VZ, TH, Gw, rA, Bt as _$$Bt, Ib, o1 } from "../905/481915";
import { ManifestEditorType } from "../figma_app/155287";
import { isVsCodeEnvironment } from "../905/858738";
import { M } from "../figma_app/170366";
import { wL, Pl, Z8 } from "../905/341409";
let c = `# Node
*.log
*.log.*
node_modules

out/
dist/
code.js
`;
export function $$u0() {
  let e = M();
  return !!(e && e.isCompatibleWith({
    desktopVersion: 72
  }));
}
function p() {
  let e = M();
  return e && e.isCompatibleWith({
    desktopVersion: 62
  }) ? [{
    name: ".gitignore",
    content: c
  }] : [];
}
function m({
  name: e,
  id: t,
  editorType: i,
  withUI: n = !1,
  isWidget: s = !1,
  codePath: l = "code.js",
  capabilities: d = [],
  codegenLanguages: c = [],
  enableProposedApi: u = !1
}) {
  let p = {
    name: e,
    id: t,
    api: pS,
    main: l,
    capabilities: d,
    enableProposedApi: u,
    documentAccess: "dynamic-page"
  };
  p.editorType = i;
  s && (p.containsWidget = !0, p.widgetApi = Gs);
  n && (p.ui = "ui.html");
  c.length > 0 && (p.codegenLanguages = c);
  p.networkAccess = {
    allowedDomains: ["none"]
  };
  isVsCodeEnvironment() && p.capabilities?.push("vscode");
  return JSON.stringify(p, void 0, 2);
}
let h = e => e.replace(/\s/g, "-").replace(/[^a-zA-Z0-9-_]/g, "");
function g(e) {
  let t = {
    name: h(e),
    version: "1.0.0",
    description: getI18nString("community.plugin_development.your_figma_plugin"),
    main: "code.js",
    scripts: wL({
      isWidget: !1,
      useEsbuild: !1
    }),
    author: "",
    license: "",
    devDependencies: Pl({
      isWidget: !1,
      useEsbuild: !1
    })
  };
  t.eslintConfig = Z8({
    isWidget: !1,
    useEsbuild: !1
  });
  return JSON.stringify(t, void 0, 2);
}
function f({
  name: e,
  widgetId: t,
  editorType: i,
  iframeType: n,
  codeType: r
}) {
  let s = $$u0();
  let o = p();
  let l = [{
    name: "manifest.json",
    content: m({
      name: e,
      id: t,
      withUI: !!n,
      editorType: i,
      isWidget: !0,
      codePath: s ? "dist/code.js" : "code.js"
    })
  }, {
    name: "package.json",
    content: JSON.stringify(VZ({
      name: h(e),
      useEsbuild: s
    }), null, 2)
  }, {
    name: "README.md",
    content: s ? TH : Gw
  }, ...o];
  let d = [];
  s ? d.push({
    name: "widget-src",
    dirs: [],
    files: [{
      name: "tsconfig.json",
      content: JSON.stringify(rA(s), null, 2)
    }, {
      name: "code.tsx",
      content: r
    }]
  }, {
    name: "dist",
    dirs: [],
    files: [{
      name: "code.js",
      content: _$$Bt
    }]
  }) : l.push({
    name: "code.js",
    content: _$$Bt
  }, {
    name: "tsconfig.json",
    content: JSON.stringify(rA(s), null, 2)
  }, {
    name: "code.tsx",
    content: r
  });
  n && l.push({
    name: "ui.html",
    content: n
  });
  return {
    name: "",
    dirs: d,
    files: l
  };
}
let $$_2 = {
  empty: function (e, t, i) {
    return {
      name: "",
      dirs: [],
      files: [{
        name: "manifest.json",
        content: m({
          name: e,
          id: t,
          editorType: i
        })
      }, {
        name: "code.js",
        content: hl()
      }]
    };
  },
  runOnce: function (e, t, i) {
    return {
      name: "",
      dirs: [],
      files: [...p(), {
        name: "manifest.json",
        content: m({
          name: e,
          id: t,
          editorType: i
        })
      }, {
        name: "package.json",
        content: g(e)
      }, {
        name: "README.md",
        content: fN
      }, {
        name: "code.js",
        content: Bt
      }, {
        name: "code.ts",
        content: MQ(i)
      }, {
        name: "tsconfig.json",
        content: Ah
      }]
    };
  },
  withUI: function (e, t, i) {
    return {
      name: "",
      dirs: [],
      files: [...p(), {
        name: "manifest.json",
        content: m({
          name: e,
          id: t,
          withUI: !0,
          editorType: i
        })
      }, {
        name: "package.json",
        content: g(e)
      }, {
        name: "README.md",
        content: fN
      }, {
        name: "code.js",
        content: Bt
      }, {
        name: "code.ts",
        content: Pg(i)
      }, {
        name: "ui.html",
        content: kE(i)
      }, {
        name: "tsconfig.json",
        content: Ah
      }]
    };
  },
  tab: function (e, t, i) {
    return {
      name: "",
      dirs: [],
      files: [...p(), {
        name: "manifest.json",
        content: m({
          name: e,
          id: t,
          withUI: !0,
          editorType: i,
          capabilities: ["inspect"]
        })
      }, {
        name: "package.json",
        content: g(e)
      }, {
        name: "README.md",
        content: fN
      }, {
        name: "code.js",
        content: Bt
      }, {
        name: "code.ts",
        content: Pg([ManifestEditorType.INSPECT])
      }, {
        name: "ui.html",
        content: hW("inspect")
      }, {
        name: "tsconfig.json",
        content: Ah
      }]
    };
  },
  codegen: function (e, t, i) {
    let n = p();
    let a = "codegen";
    return {
      name: "",
      dirs: [],
      files: [...n, {
        name: "manifest.json",
        content: m({
          name: e,
          id: t,
          withUI: !0,
          editorType: i,
          capabilities: [a],
          codegenLanguages: [{
            label: "Language Label",
            value: "language-value"
          }]
        })
      }, {
        name: "package.json",
        content: g(e)
      }, {
        name: "README.md",
        content: fN
      }, {
        name: "code.js",
        content: Bt
      }, {
        name: "code.ts",
        content: rK(a)
      }, {
        name: "ui.html",
        content: hW(a)
      }, {
        name: "tsconfig.json",
        content: Ah
      }]
    };
  }
};
let $$A1 = {
  empty: function (e, t, i) {
    return f({
      name: e,
      widgetId: t,
      editorType: i,
      codeType: Ib.EMPTY
    });
  },
  simple: function (e, t, i) {
    return f({
      name: e,
      widgetId: t,
      editorType: i,
      codeType: Ib.SIMPLE
    });
  },
  with_iframe: function (e, t, i) {
    return f({
      name: e,
      widgetId: t,
      editorType: i,
      codeType: Ib.IFRAME,
      iframeType: o1.IFRAME
    });
  }
};
export const Bs = $$u0;
export const cj = $$A1;
export const d_ = $$_2;