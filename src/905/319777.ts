import { Pe, sU, Lz, Z9, dT, NZ, AZ, sg, oQ, vX, w4, Mg, DH, $w, UY, bu, Ux, yU, t$, Q2, pX } from "../figma_app/770359";
import { lV } from "../figma_app/617606";
import { getInitialOptions } from "../figma_app/169182";
import { fullscreenValue } from "../figma_app/455680";
import { Ho, a5 } from "../figma_app/337924";
import { UM } from "../figma_app/114522";
import { Ac, c2, uH } from "../figma_app/346422";
import { FJ } from "../905/508367";
let u = /\b((?:https?):\/\/[^\s/$.?#].[^\s]*)\b/gi;
let p = Pe.define();
let m = sU.define({
  create: () => !1,
  update(e, t) {
    let i = e;
    t.effects.forEach(e => {
      e.is(p) && (i = e.value);
    });
    return i;
  }
});
let h = Lz.baseTheme({
  ".cm-hyper-link-underline": {
    textDecoration: "underline"
  },
  ".cm-hyper-link-underline-meta-key-down": {
    cursor: "pointer",
    backgroundColor: "var(--color-bg-secondary)"
  }
});
let g = [m, Z9.fromClass(class {
  constructor(e) {
    this.decorator = new dT({
      regexp: u,
      decorate: (e, t, i, r, a) => {
        let s = r[0];
        let o = `cm-hyper-link-underline${a.state.field(m) ? " cm-hyper-link-underline-meta-key-down" : ""}`;
        e(t, i, NZ.mark({
          class: o,
          attributes: {
            title: `Open ${s} in new tab (cmd-click)`,
            "aria-label": `Open ${s} in new tab`,
            role: "link",
            tabindex: "0",
            "data-href": s
          },
          inclusive: !0
        }));
      }
    });
    this.decorations = this.decorator.createDeco(e);
  }
  update(e) {
    (e.docChanged || e.viewportChanged) && (this.decorations = this.decorator.updateDeco(e, this.decorations));
    e.transactions.some(e => e.effects.some(e => e.is(p))) && (this.decorations = this.decorator.createDeco(e.view));
  }
}, {
  decorations: e => e.decorations,
  eventHandlers: {
    keydown: (e, t) => ("Meta" === e.key && t.dispatch({
      effects: [p.of(!0)]
    }), !1),
    keyup: (e, t) => ("Meta" === e.key && t.dispatch({
      effects: [p.of(!1)]
    }), !1),
    click(e, t) {
      let i;
      if (!e.metaKey) return !1;
      let n = t.posAtCoords(e);
      if (!n || (this.decorations.between(n, n, (e, t, n) => (i = n, !1)), !i)) return !1;
      let r = i.spec.attributes?.["data-href"];
      r && FJ(r, "_blank", "noopener");
      t.dispatch({
        selection: {
          anchor: n
        }
      });
      return !0;
    }
  }
}), h];
export function $$f2(e, t) {
  let i = [S];
  t && i.push(w);
  "dark" === e ? i.push(AZ) : i.push(sg);
  return i;
}
export function $$_0() {
  let e = oQ({
    history: !1,
    searchKeymap: !1
  });
  e.push(vX({
    position: "fixed",
    parent: document.body
  }));
  e.push(w4.of([{
    key: "Tab",
    stopPropagation: !0,
    preventDefault: !0,
    shift: Mg,
    run: e => DH(e.state) ? $w(e) : UY(e)
  }]));
  e.push(w4.of([{
    key: "Escape",
    run: e => !DH(e.state)
  }]), w4.of([{
    key: "Shift-Escape",
    run: () => (UM(), !0)
  }]));
  e.push(w4.of([{
    key: "Mod-z",
    run: () => (fullscreenValue.triggerActionInUserEditScope("undo"), !0)
  }, {
    key: "Mod-Shift-z",
    run: () => (fullscreenValue.triggerActionInUserEditScope("redo"), !0)
  }]));
  e.push(Lz.domEventHandlers({
    contextmenu: e => (e.preventDefault(), !0),
    keydown: e => (e.stopPropagation(), !1)
  }));
  e.push(Lz.cspNonce.of(getInitialOptions().csp_nonce));
  e.push(g);
  return e;
}
export function $$A1(e) {
  let t = [x];
  e && /\.(ts|tsx)$/i.test(e) && (t.push(bu(async () => {
    try {
      return await Ac(e);
    } catch (e) {
      Ho(e, lV.CODE_IN_SITES, a5.LINT);
      return [];
    }
  }, {
    needsRefresh(e) {
      let t = !!(1 === e.transactions.length && e.transactions[0]?.effects[0]?.is($$E5));
      let i = e.state.field(x)?.status;
      return t && "finished" === i;
    }
  })), t.push(Ux(async (t, i) => {
    let n = await c2(e, i);
    return n ? {
      pos: n.pos,
      end: n.end,
      create() {
        let e = document.createElement("div");
        e.className = "cm-custom-quick-info";
        n.displayParts.forEach(t => {
          let i = document.createElement("span");
          i.className = `cm-custom-quick-info-${t.kind}`;
          i.textContent = t.text;
          e.appendChild(i);
        });
        return {
          dom: e
        };
      }
    } : null;
  })), t.push(yU({
    override: [t => uH(e, t.pos, t.explicit)]
  })));
  return t;
}
export function $$y3(e) {
  let t = (e ? t$.matchFilename(v, e) : null) ?? b;
  return t.support ? t.support.extension : Z9.fromClass(class {
    constructor(e) {
      this.view = e;
      this.destroyed = !1;
      t.load().then(t => {
        setTimeout(() => {
          if (this.destroyed) return;
          let i = Pe.appendConfig.of(t.extension);
          e.dispatch({
            effects: [i]
          });
        });
      });
    }
    destroy() {
      this.destroyed = !0;
    }
  });
}
let b = t$.of({
  name: "TSX",
  extensions: ["tsx"],
  support: Q2({
    typescript: !0,
    jsx: !0
  })
});
let v = [b, t$.of({
  name: "TypeScript",
  alias: ["ts"],
  extensions: ["ts", "mts", "cts"],
  support: Q2({
    typescript: !0,
    jsx: !1
  })
}), t$.of({
  name: "JavaScript",
  alias: ["ecmascript", "js", "node"],
  extensions: ["js", "mjs", "cjs"],
  support: Q2({
    typescript: !1,
    jsx: !1
  })
}), t$.of({
  name: "JSX",
  extensions: ["jsx"],
  support: Q2({
    typescript: !1,
    jsx: !0
  })
}), t$.of({
  name: "CSS",
  extensions: ["css"],
  load: () => pX.css()
}), t$.of({
  name: "JSON",
  alias: ["json5"],
  extensions: ["json", "map"],
  load: () => pX.json()
}), t$.of({
  name: "HTML",
  alias: ["xhtml"],
  extensions: ["html", "htm", "handlebars", "hbs"],
  load: () => pX.html()
}), t$.of({
  name: "Markdown",
  extensions: ["md", "mdx"],
  load: () => pX.markdown()
})];
let $$I4 = [b, ...v].map(e => e.extensions.map(e => `.${e}`)).flat();
let $$E5 = Pe.define();
let x = sU.define({
  create: () => null,
  update(e, t) {
    let i = e;
    t.effects.forEach(e => {
      e.is($$E5) && (i = e.value);
    });
    return i;
  }
});
let S = Lz.theme({
  ".cm-scroller": {
    fontFamily: "var(--font-family-mono)",
    scrollbarColor: "var(--color-scrollbar) transparent",
    scrollbarWidth: "thin"
  },
  ".cm-content": {
    fontVariantLigatures: "none"
  },
  "&.cm-focused": {
    outline: "none !important"
  },
  '.cm-foldGutter .cm-gutterElement > span[title="Fold line"]': {
    position: "relative",
    top: "-3px"
  },
  '.cm-foldGutter .cm-gutterElement > span[title="Unfold line"]': {
    position: "relative",
    top: "-1px"
  },
  ".cm-tooltip": {
    backgroundColor: "initial !important",
    border: "none !important",
    fontFamily: "var(--text-body-medium-font-family)",
    fontSize: "var(--text-body-medium-font-size)",
    fontWeight: "var(--text-body-medium-font-weight)",
    letterSpacing: "var(--text-body-medium-letter-spacing)",
    lineHeight: "var(--text-body-medium-line-height)"
  },
  ".cm-tooltip-section": {
    maxWidth: "640px",
    borderRadius: "var(--radius-medium)",
    border: "1px solid var(--color-border)",
    boxShadow: "0 1px 3px var(--color-shadow)",
    backgroundColor: "var(--color-bg-secondary)",
    userSelect: "text"
  },
  ".cm-tooltip-section + .cm-tooltip-section": {
    marginTop: "var(--spacer-1)"
  },
  ".cm-diagnostic": {
    fontFamily: "var(--font-family-mono)",
    padding: "var(--spacer-1) var(--spacer-2)"
  },
  ".cm-diagnostic-error": {
    borderLeft: "none",
    color: "var(--color-text-danger)"
  },
  ".cm-custom-quick-info": {
    fontFamily: "var(--font-family-mono)",
    padding: "var(--spacer-1) var(--spacer-2)"
  },
  ".cm-tooltip.cm-tooltip-autocomplete > ul": {
    borderRadius: "var(--radius-medium)",
    border: "1px solid var(--color-border)",
    boxShadow: "0 1px 3px var(--color-shadow)",
    backgroundColor: "var(--color-bg-secondary)"
  },
  ".cm-tooltip.cm-tooltip-autocomplete > ul::-webkit-scrollbar": {
    display: "none"
  },
  ".cm-completionLabel": {
    fontFamily: "var(--font-family-mono)"
  },
  ".cm-placeholder": {
    color: "var(--color-text-secondary)"
  },
  ".cm-tooltip-autocomplete ul li[aria-selected]": {
    color: "var(--color-text-primary)",
    backgroundColor: "var(--color-bg-selected)"
  },
  ".cm-tooltip-section:not(:first-child)": {
    borderTop: "none"
  }
});
let w = Lz.theme({
  ".cm-scroller": {
    fontSize: "var(--text-body-large-font-size)"
  }
});
export const wr = $$_0;
export const LI = $$A1;
export const ox = $$f2;
export const _Z = $$y3;
export const x5 = $$I4;
export const Yt = $$E5;