import { Ay } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { n as _$$n } from "../905/347702";
import { Cj, fk, VG, XJ } from "../905/23253";
let $$o0 = ({
  params: e,
  clientLifecycleId: t
}) => l({
  params: e,
  clientLifecycleId: t
});
let l = _$$n(async ({
  params: e,
  clientLifecycleId: t
}) => await Cj({
  name: "bg_removal",
  ...e,
  suffix: "[Background removed]",
  action: async ({
    hash: e,
    nodes: i
  }) => {
    if (!i[0]) throw new fk("No nodes found", {
      reportToSentry: !0
    });
    let a = await VG(XJ({
      node: i[0],
      hash: e
    }));
    return (await Ay.design.removeBackgroundClipdrop({
      image_url: a
    }, {
      ..._$$Ay(),
      clientLifecycleId: t
    })).base64_image;
  }
}));
export const J = $$o0;