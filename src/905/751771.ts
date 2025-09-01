import { buildStaticUrl } from "../figma_app/169182";
import { XHR } from "../905/910117";
let n;
let r;
let o = new Map();
let l = 0;
let d = RegExp("^[#|@] sourceMappingURL=(.*)");
export async function $$c0(e) {
  let t = await (r || (r = function() {
    if (!n) {
      let e = buildStaticUrl("scripts/esprima-4.0.1.min.js");
      (n = XHR.crossOriginGetAny(e, null, {
        raw: !0
      }).then(e => e.response + "")).catch(() => n = void 0);
    }
    return n;
  }().then(e => {
    let t = `
        function getRelativeSourceMapUrlRanges(comments) {
          const ranges = [];
          for (const comment of comments) {
            if (comment.type !== 'Line') {
              continue;
            }

            const match = comment.value.match(${d});
            if (match) {
              try {
                const sourceMapUrl = new URL(match[1]);
              } catch (e) {
                // Not a valid url for source maps
                ranges.push(comment.range);
              }
            }
          }
          return ranges;
        };

        onmessage = function(e) {
          const id = e.data[0];
          try {
            const parsed = esprima.parse(e.data[1], { comment: true, range: true });
            const rangesToRemove = getRelativeSourceMapUrlRanges(parsed.comments);
            postMessage([id, { success: true, rangesToRemove }]);
          } catch (e) {
            e = {
              index: e.index,
              description: e.description,
              column: e.column, // Annoyingly, this is non-enumerable
              lineNumber: e.lineNumber
            };
            postMessage([id, { success: false, error: e }]);
          }
        };
      `;
    let i = URL.createObjectURL(new Blob([e, t]));
    let n = new Worker(i);
    n.onmessage = e => {
      let [t, n] = e.data;
      let r = o.get(t);
      void 0 !== r && (o.$$delete(t), r(n));
      URL.revokeObjectURL(i);
    };
    return n;
  })).catch(() => r = void 0), r);
  return new Promise(i => {
    let n = l++;
    o.set(n, i);
    t.postMessage([n, e]);
    return {
      success: !0
    };
  });
}
export const z = $$c0; 
