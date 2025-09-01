import { jXp } from "../figma_app/763686";
export let $$r3 = "opsz";
export function $$a1(e) {
  let t = [];
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    n.variation_instances ? t.push(...n.variation_instances.map(e => $$c2(n, e))) : t.push($$c2(n));
  }
  return t;
}
let s = e => e <= 50 ? 1 : e <= 62.5 ? 2 : e <= 75 ? 3 : e <= 87.5 ? 4 : e <= 100 ? 5 : e <= 112.5 ? 6 : e <= 125 ? 7 : e <= 150 ? 8 : 9;
let $$o6 = 5;
let l = e => void 0 !== e.postscript_name;
export function $$d0(e, t) {
  let i = e.find(e => e.tag === $$r3);
  if (i) {
    if (!t) return i.value !== i.$$default;
    for (let e of t) if (e.axes[$$r3] !== i.$$default) return !0;
  }
  return !1;
}
export function $$c2(e, t) {
  let i;
  let r = !1;
  if (l(e)) {
    let a;
    if (e.variation_axes && e.variation_instances) {
      let i = e.variation_instances.filter(e => e.name === t?.name);
      let n = i?.length ? i[0].axes : void 0;
      r = $$d0(a = n ? e.variation_axes.map(e => {
        let t = {
          ...e
        };
        void 0 !== n[e.tag] && (t.value = n[e.tag]);
        return t;
      }) : e.variation_axes, e.variation_instances);
    }
    i = {
      postscript: e.postscript_name,
      family: e.family,
      style: e.style,
      weight: e.weight,
      italic: e.italic,
      stretch: e.stretch,
      id: e.id.toString(),
      source: jXp.SHARED,
      teamId: e.team_id ? e.team_id.toString() : void 0,
      orgId: e.org_id ? e.org_id.toString() : void 0,
      version: $$u4(e.version),
      sampleUrl: e.sample_url,
      previewUrl: e.preview_url,
      updatedAt: e.updated_at,
      variationAxes: a,
      variationInstances: e.variation_instances,
      useFontOpticalSize: r
    };
  } else {
    e.variationInstances && e.variationAxes && (r = $$d0(e.variationAxes, e.variationInstances));
    i = {
      postscript: e.postscriptName,
      family: e.family,
      style: e.style,
      weight: e.weight,
      italic: e.italic,
      stretch: e.stretch,
      id: `${e.filename}_${e.version}`,
      source: jXp.GOOGLE,
      version: e.version.toString(),
      variationAxes: e.variationAxes,
      variationInstances: e.variationInstances,
      useFontOpticalSize: r
    };
  }
  t && (i = {
    ...i,
    postscript: t.postscriptName,
    style: t.name || e.style,
    weight: void 0 !== t.axes.wght ? t.axes.wght : e.weight,
    italic: void 0 !== t.axes.slnt ? 0 !== t.axes.slnt : e.italic,
    stretch: void 0 !== t.axes.wdth ? s(t.axes.wdth) : e.stretch,
    variationAxes: i.variationAxes?.map(e => ({
      ...e,
      value: t.axes[e.tag]
    }))
  });
  return i;
}
export function $$u4(e) {
  return e ? e.replace(/version/i, "").split(";")[0].trim() : void 0;
}
export function $$p7(e) {
  return e.teamId ? `team-${e.teamId}` : `org-${e.orgId}`;
}
export function $$m5(e) {
  return e.replace(/team-|org-/, "");
}
export const I5 = $$d0;
export const Mx = $$a1;
export const RG = $$c2;
export const mz = $$r3;
export const ot = $$u4;
export const p8 = $$m5;
export const qO = $$o6;
export const vq = $$p7;