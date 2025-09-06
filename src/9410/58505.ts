import { useRef, useState, useEffect } from "react";
import { getComponentInfoById } from "../figma_app/664063";
import { isNotNullish } from "../figma_app/95419";
import { B } from "../905/94678";
import { getFeatureFlags } from "../905/601108";
import { z } from "../905/239603";
import d from "../vendor/656470";
import { _i } from "../figma_app/476572";
import { logWarning } from "../905/714362";
import { nX } from "../figma_app/445976";
import { Fk } from "../figma_app/167249";
import { Tv } from "../figma_app/151869";
var c = d;
let g = z.object({
  description: z.string(),
  wasOutputOfPreviousGeneration: z.boolean().optional()
});
z.object({
  prompt: z.string(),
  attachmentMetadata: z.record(z.string(), g).optional()
});
let _ = `User has also attached the following frames (represented as JSX) and their corresponding images, components used here can be referenced in the output:
`;
export function $$x0(e) {
  let t = {};
  for (let i of B(e, {
    followInstances: !0
  })) {
    let e = getComponentInfoById(i.guid, {
      enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
    });
    if (!e) {
      logWarning("first-draft", "Component info not found for user-selected node", {
        componentGuid: i.guid
      }, {
        reportAsSentryError: !0
      });
      continue;
    }
    t[e.jsxName.toLowerCase()] = e;
  }
  return t;
}
export async function $$y3(e, t, i) {
  let r = (await Promise.all(e.map(async e => {
    var i;
    let r = await nX(e);
    if (!r) {
      logWarning("first-draft", "Unable to get JSX for user-selected node", {
        nodeGuid: e.guid
      });
      return null;
    }
    let n = t.get(e.guid);
    if (!n) {
      logWarning("first-draft", "No image data found for user-selected node", {
        nodeGuid: e.guid
      });
      return null;
    }
    let a = null;
    a = n.promise ? await n.promise : n.blob;
    let s = await (i = a, new Promise((e, t) => {
      let r = new FileReader();
      r.onloadend = () => {
        let i = r.result;
        "string" == typeof i ? e(i) : t(Error("Failed to convert blob to Data URL"));
      };
      r.onerror = () => {
        t(Error("Failed to read blob"));
      };
      r.readAsDataURL(i);
    }));
    return {
      guid: e.guid,
      jsxStr: r,
      imageUrl: s
    };
  }))).filter(isNotNullish);
  return [{
    role: "system",
    content: _
  }, {
    role: "user",
    content: c()(r.map(({
      guid: e,
      jsxStr: t,
      imageUrl: r
    }, n) => {
      let a = [{
        type: "text",
        text: `
ATTACHMENT #${n + 1}:
`
      }];
      i && i[e] && a.push({
        type: "text",
        text: `Description: ${[...(i[e].wasOutputOfPreviousGeneration ? ["This was the output of a previous generation"] : []), i[e].description].join(" ")}
`
      });
      t && a.push({
        type: "text",
        text: `\`\`\`jsx
${t}
\`\`\`
`
      });
      a.push({
        type: "image",
        image: r
      });
      return a;
    }))
  }];
}
export let $$b4 = URL.createObjectURL(new Blob(["data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="], {
  type: "image/gif"
}));
function C(e) {
  return e.visible;
}
export function $$v1() {
  let e = useRef(new Map());
  let t = Tv();
  Fk((t, i) => {
    if (!i) {
      e.current = new Map();
      return null;
    }
    let r = i.map(e => t.get(e)).filter(isNotNullish).filter(C);
    e.current = new Map(r.map(e => [e.guid, e]));
    return r.map(e => e?.guid);
  }, t);
  return e.current;
}
export function $$E2({
  enabled: e
}) {
  let [t, i] = useState(new Map());
  let n = useRef(t);
  n.current = t;
  let a = useRef(!1);
  let s = $$v1();
  useEffect(() => {
    if (!e) return;
    let r = new Set(s.keys());
    let n = new Set(t.keys());
    let o = _i(n, r);
    _i(r, n).forEach(async e => {
      let t = s.get(e);
      if (!t) return;
      let r = t.loadImagesAndExport([{
        imageType: "PNG"
      }]);
      let n = (async () => new Blob([await r], {
        type: "image/png"
      }))();
      i(t => {
        let i = new Map(t);
        i.set(e, {
          imageURL: null,
          blob: null,
          promise: n
        });
        return i;
      });
      let o = await n;
      if (a.current) return;
      let l = URL.createObjectURL(o);
      i(t => {
        let i = new Map(t);
        i.set(e, {
          imageURL: l,
          blob: o,
          promise: null
        });
        return i;
      });
    });
    o.size > 0 && i(e => {
      let t = new Map(e);
      o.forEach(e => {
        if (!t.has(e)) return;
        let i = t.get(e);
        i?.imageURL && URL.revokeObjectURL(i.imageURL);
        t.$$delete(e);
      });
      return t;
    });
  }, [s, t, e]);
  useEffect(() => () => {
    a.current = !0;
    n.current.forEach(e => {
      e.imageURL && URL.revokeObjectURL(e.imageURL);
    });
  }, []);
  return t;
}
export const ce = $$x0;
export const eb = $$v1;
export const qi = $$E2;
export const yh = $$y3;
export const zs = $$b4;