import { getComponentInfoById, usagePropsToRawProps } from "../figma_app/664063";
import { Z } from "../905/829242";
import { z } from "../905/239603";
import { gZ } from "../figma_app/964367";
import { cortexAPI } from "../figma_app/432652";
import { fn, ag } from "../figma_app/460003";
import { B } from "../figma_app/325988";
let c = ["TEXT", "VARIANT"];
var $$u = (e => (e.GOOGLE = "google", e.OPENAI = "openai", e))($$u || {});
let p = {
  google: "models/gemini-2.0-flash-001",
  openai: "gpt-4o-mini-2024-07-18"
};
let _ = z.object({
  suggestions: z.array(z.object({
    propertyName: z.string().describe("Name of the property on the component that you are modifying"),
    propertyValue: z.string().describe("Suggested value for the property"),
    confidence: z.number().min(0).max(1).describe("Confidence score between 0 and 1")
  }))
});
export function $$h0() {
  let e = `
    * ### Context
    * You are acting as a Product Designer working with Figma. In Figma, components are UI elements that can be configured by props.
    * These props are to be changed by the designer to configure the component to fit within its surrounding design context. A component has just been inserted into a design, and its current prop values may not be appropriate for the surrounding design context.
    * Your task is to analyze the overall design, the component's possible configurations, and suggest the most appropriate props for the component that would complete the overall design.

    * ### What will be provided
    * Here is what you will be provided:
    * 1) OVERALL_JSX - JSX of the overall design, which contains the recently inserted component (whose current prop values may not be appropriate for the surrounding design context).
    * 2) TARGET_ID - ID of the recently inserted component within the OVERALL_JSX that you are modifying.
    * 3) COMPONENT_JSX - JSX of the expanded component definition of the TARGET_ID, which should be analyzed to understand how the prop values affect the component.
    * 4) REQUESTED_SUGGESTIONS - A list of the props that you must provide suggestions for. You **must** provide a suggestion for every prop listed in REQUESTED_SUGGESTIONS; do **not** provide suggestions for any other props.

    * ### Important notes
    * - For the suggestions, do not use the current prop values to determine what the new values should be. The current prop values should be disregarded and not used in any reasoning.
    * - For TEXT props, any string is allowed.
    * - For VARIANT props, you must pick a value out of the list in the prop's metadata within REQUESTED_SUGGESTIONS. If the variant names are not intuitive, you should just select the default value.

    * Your output should always be valid JSON. You must provide a suggestion for every prop in REQUESTED_SUGGESTIONS, and none others.
  `;
  let t = `* Your response must strictly follow this format:
  \`\`\`
  z.object({
    suggestions: z.array(
      z.object({
        
        propertyName: z.string().describe("Name of the property on the component that you are modifying"),
        propertyValue: z.string().describe("Suggested value for the property"),
        confidence: z.number().min(0).max(1).describe('Confidence score between 0 and 1'),
      }),
    ),
  })
  \`\`\`
`;
  return `
  ${e}
  ${t}
`;
}
let m = {
  serializeAllVariants: !1,
  maxVariantsResultSize: 15e4,
  strict: !1
};
let g = {
  excludeImageData: !0,
  excludeVectorData: !0
};
async function $$f(e, t, r, i) {
  let a = performance.now();
  let o = (await gZ(r, m, g)).jsxStr;
  let d = performance.now() - a;
  let u = await fn(t, g);
  let _ = performance.now() - a - d;
  let h = getComponentInfoById(r.guid, {
    enableTsArrays: !1
  });
  let f = ag(h, c);
  let E = [{
    role: "user",
    content: `Here is (1) OVERALL_JSX:
          \`\`\`
          ${u}
          \`\`\``
  }, {
    role: "user",
    content: `Here is (2) TARGET_ID:
          \`\`\`
          ${e}
          \`\`\``
  }, {
    role: "user",
    content: `Here is (3) COMPONENT_JSX:
          \`\`\`
          ${o}
          \`\`\``
  }, {
    role: "user",
    content: `Here is (4) REQUESTED_SUGGESTIONS:
          \`\`\`
          ${f.toString()}
          \`\`\`
          `
  }];
  "openai" === i && (E = E.map(e => ({
    role: e.role,
    content: [{
      type: "text",
      text: e.content
    }]
  })));
  return {
    messages: E,
    perfTracking: {
      componentJsxDuration: Math.round(d),
      componentJsxStrLength: o.length,
      topLevelDuration: Math.round(_),
      topLevelJsxStrLength: u?.length || 0,
      numSuggestionsRequested: f.length,
      componentKey: h?.key,
      model: p[i]
    }
  };
}
export async function $$E1(e, t, r, a, s, l) {
  let c;
  let u;
  let m;
  let g = performance.now();
  let E = l ?? "openai";
  let y = r.get(e);
  if (!y) {
    console.error("Could not find component in scene graph: ", e);
    return {};
  }
  let b = r.get(t);
  if (!b) {
    console.error("Could not find selected node in scene graph: ", t);
    return {};
  }
  let T = B(b);
  let {
    messages,
    perfTracking
  } = await $$f(t, T, y, E);
  let v = [{
    role: "system",
    content: $$h0()
  }, ...messages];
  try {
    switch (E) {
      case "openai":
        c = cortexAPI.openai.completeChat({
          model: p[E],
          max_tokens: 3e3,
          temperature: 0,
          response_format: {
            type: "json_object"
          },
          messages: v,
          use_cache: !0
        });
        break;
      case "google":
        c = cortexAPI.internal.generateObject({
          provider: "google",
          model: p[E],
          maxTokens: 3e3,
          temperature: 0,
          messages: v
        });
        break;
      default:
        console.error("Unknown provider: ", E);
    }
  } catch (e) {
    console.error("Error property suggestions", e);
  }
  if (!c) return Promise.resolve({});
  let A = performance.now();
  try {
    let e = new Promise((e, t) => {
      setTimeout(() => {
        t("GPT Response Timeout");
      }, 1e4);
    });
    u = await Promise.race([Z(c, a), e]);
  } catch (e) {
    s("autosuggest_props_timeout", {
      componentKey: perfTracking.componentKey,
      error: e.message,
      ...perfTracking
    });
    return Promise.resolve({});
  }
  let x = Math.round(performance.now() - A);
  switch (E) {
    case "openai":
      m = _.parse(JSON.parse(u?.choices[0]?.message?.content ?? "{}")).suggestions;
      break;
    case "google":
      m = u.object.suggestions ?? {};
      break;
    default:
      console.error("Unknown provider: ", E);
  }
  let N = {};
  for (let e of m) N[e.propertyName] = e.propertyValue;
  let C = usagePropsToRawProps(N, e, t => getComponentInfoById(e, {
    enableTsArrays: !1
  }));
  s("autosuggest_props_perf", {
    totalMs: Math.round(performance.now() - g),
    ...perfTracking,
    gptResponseDurationMs: x
  });
  return C;
}
export const f = $$h0;
export const u = $$E1;