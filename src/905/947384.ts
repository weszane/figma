import { $K, Wu, N$, VH, A, D4, HJ, dz, w4 } from "../vendor/37366";
import { $t } from "../vendor/59696";
import { pw, cL, b6 } from "../vendor/85340";
import { Eo, gN } from "../vendor/616405";
import { Bc, OO, wm, yU } from "../vendor/576710";
import { f7, Lv, WD, y9, Zt, SG, Xt } from "../vendor/401644";
import { $w } from "../vendor/548481";
export let $$c0 = (e = {}) => {
  let {
    crosshairCursor = !1
  } = e;
  let i = [];
  !1 !== e.closeBracketsKeymap && (i = i.concat(Bc));
  !1 !== e.defaultKeymap && (i = i.concat(pw));
  !1 !== e.searchKeymap && (i = i.concat(Eo));
  !1 !== e.historyKeymap && (i = i.concat(cL));
  !1 !== e.foldKeymap && (i = i.concat(f7));
  !1 !== e.completionKeymap && (i = i.concat(OO));
  !1 !== e.lintKeymap && (i = i.concat($w));
  let c = [];
  !1 !== e.lineNumbers && c.push($K());
  !1 !== e.highlightActiveLineGutter && c.push(Wu());
  !1 !== e.highlightSpecialChars && c.push(N$());
  !1 !== e.history && c.push(b6());
  !1 !== e.foldGutter && c.push(Lv());
  !1 !== e.drawSelection && c.push(VH());
  !1 !== e.dropCursor && c.push(A());
  !1 !== e.allowMultipleSelections && c.push($t.allowMultipleSelections.of(!0));
  !1 !== e.indentOnInput && c.push(WD());
  !1 !== e.syntaxHighlighting && c.push(y9(Zt, {
    fallback: !0
  }));
  !1 !== e.bracketMatching && c.push(SG());
  !1 !== e.closeBrackets && c.push(wm());
  !1 !== e.autocompletion && c.push(yU());
  !1 !== e.rectangularSelection && c.push(D4());
  !1 !== crosshairCursor && c.push(HJ());
  !1 !== e.highlightActiveLine && c.push(dz());
  !1 !== e.highlightSelectionMatches && c.push(gN());
  e.tabSize && "number" == typeof e.tabSize && c.push(Xt.of(" ".repeat(e.tabSize)));
  return c.concat([w4.of(i.flat())]).filter(Boolean);
};
export const o = $$c0;