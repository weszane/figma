import { encodeBase64 } from "../905/561685";
import { Ay } from "../figma_app/432652";
import { YJ } from "../figma_app/50224";
import { sF } from "../figma_app/193952";
import { Gh } from "../figma_app/707567";
import { n as _$$n } from "../905/347702";
export let $$d2 = "plugin_playground";
export async function $$c0(e) {
  await new Promise(t => {
    setTimeout(() => {
      t();
    }, e);
  });
}
export let $$u3 = _$$n(async function (e, t, i = () => !0, r) {
  let a = (await Ay.design.firstDraftGenerateV2Stream(e, sF({
    clientLifecycleId: r
  }))).getReader();
  let o = {};
  try {
    for (;;) {
      let e = a.read();
      let {
        done,
        value
      } = await e;
      if (done || (value.theme && (o.theme = value.theme ?? {}), value.dsKit && (o.dsKit = value.dsKit), value.jsx && (o.jsx += value.jsx), value.trace && (o.trace = value.trace), value.presets && (o.presets = value.presets), !i())) break;
      t(o);
    }
  } finally {
    a.releaseLock();
  }
});
export function $$p1(e) {
  return Object.keys(e).reduce((t, i) => (t[i.toLowerCase()] = e[i], t), {});
}
export async function $$h4(e) {
  let t = await e.loadImagesAndExport([{
    imageType: "PNG",
    constraint: {
      type: "CONTENT_WIDTH",
      value: Math.min(e.size.x, function (e, t = 1024) {
        return e.size.y > e.size.x ? Math.floor(t * e.size.x / e.size.y) : t;
      }(e))
    },
    contentsOnly: !0,
    useAbsoluteBounds: !1,
    colorProfile: "DOCUMENT"
  }]);
  let i = `data:image/png;base64,${encodeBase64(t)}`;
  let n = YJ({
    nodeIds: [e.guid],
    options: {
      skipNodeIds: !1,
      includeName: !0,
      detachInstances: !0,
      componentUsageOrDefinition: "DEFINITION",
      autoLayoutTagName: "div",
      frameTagName: "div"
    }
  });
  if (!n.jsxStr) throw Error(`Could not get node JSX for node ID: ${e.guid}`);
  return {
    base64: i,
    jsx: n.jsxStr
  };
}
_$$n(async function (e) {
  return (await Gh.postFirstDraftMatchPresetModes({
    kit_key: e.kitKey,
    is_local: e.isLocal,
    user_prompt: e.userPrompt
  })).data.meta;
});
export const Mb = $$c0;
export const Q$ = $$p1;
export const SV = $$d2;
export const _J = $$u3;
export const gC = $$h4;