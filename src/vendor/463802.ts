import { createContext, useContext } from "react";
var s = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let r = new URLSearchParams();
  r.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) r.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${r} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
export let LexicalComposerContext = createContext(null);
export function createLexicalComposerContext(e, r) {
  let n = null;
  null != e && (n = e[1]);
  return {
    getTheme: function () {
      return null != r ? r : null != n ? n.getTheme() : null;
    }
  };
}
export function useLexicalComposerContext() {
  let e = useContext(LexicalComposerContext);
  null == e && s(8);
  return e;
}
export const DF = useLexicalComposerContext;
export const Gu = LexicalComposerContext;
export const Mx = createLexicalComposerContext;
