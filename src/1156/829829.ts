import { Hg } from "../figma_app/304955";
import { Xr } from "../figma_app/27355";
import { generateUUIDv4 } from "../905/871474";
import { useCurrentFileKey } from "../figma_app/516028";
import { M4 } from "../905/713695";
import { R } from "../905/943003";
import { p7, Xl, GV, Ut } from "../figma_app/72338";
import { nc } from "../figma_app/570630";
import { vD, I4 } from "../figma_app/302802";
import { oA } from "../figma_app/812915";
import { EQ, wH } from "../1156/250784";
import { gZ } from "../figma_app/952035";
import { GA, PM, ZO } from "../1156/108847";
import { A9, SR, rq } from "../1156/929233";
export function $$f0() {
  let e = Xr(p7);
  let {
    entryPointCodeInstance
  } = oA();
  let n = vD(entryPointCodeInstance?.guid ?? null);
  let f = I4(n);
  let y = useCurrentFileKey();
  let _ = Xr(Xl);
  let b = Xr(GV);
  let j = Xr(GA);
  let [, v] = PM();
  return async t => {
    let {
      showVisualBells
    } = t;
    if (!y) {
      console.error("No open file key found");
      return;
    }
    try {
      e(Ut.DEPLOYING);
      let t = Hg(nc);
      let i = {};
      for (let [e, n] of Object.entries(t)) if (e.includes("/supabase/functions/server/")) {
        let t = e.split("/").pop();
        let r = n.sourceCode;
        t && r && (i[t] = r);
      }
      if (!i["index.tsx"]) throw new EQ();
      let s = await R.deployEdgeFunction({
        fileKey: y,
        files: i
      });
      j(s.data.meta.version);
      ZO();
      setTimeout(() => {
        M4.fetch(gZ({
          fileKey: y,
          functionName: "make-server"
        }), {
          policy: "networkOnly"
        });
      }, 5e3);
      f();
      showVisualBells && A9();
    } catch (t) {
      if (t instanceof EQ) {
        showVisualBells && SR();
        return;
      }
      showVisualBells && rq();
      wH(t);
      let e = {
        id: generateUUIDv4(),
        event_message: `Error while deploying: ${t instanceof Error ? t.message : String(t)}`,
        timestamp: Date.now().toString(),
        level: "error"
      };
      v(t => [...t, e]);
    } finally {
      e(Ut.INIT);
      _(!1);
      b(!1);
    }
  };
}
export const A = $$f0;