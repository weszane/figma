import { getI18nString } from "../905/303541";
import { F6 } from "../figma_app/308685";
import { q } from "../figma_app/403368";
export let $$s0 = [{
  type: "REACTION",
  name: "r-fire",
  image: "d1e0d7ed5e1aa13e8854dbd88b9fd650377a02f2",
  position: 2,
  i18nName: () => getI18nString("fullscreen.reaction_wheel.fire")
}, {
  type: "REACTION",
  name: "r-surprised",
  image: "1429964104bceac90c5c8e731ce4cc50b27e2797",
  position: 1,
  i18nName: () => getI18nString("fullscreen.reaction_wheel.surprised")
}, {
  type: "REACTION",
  name: "r-eyes",
  image: "ffd0635e8f9322352eff0c15411ac0b536b98d87",
  position: 8,
  i18nName: () => getI18nString("fullscreen.reaction_wheel.eyes")
}, {
  type: "REACTION",
  name: "r-wave",
  image: "0606e9d967b5abb6d9a2853c2fff589f2ec2fc05",
  position: 7,
  i18nName: () => getI18nString("fullscreen.reaction_wheel.wave")
}, {
  type: "ACTION",
  name: "r-chat",
  image: "d1de3f6fe1f8ffa74d3db5203b2df761d0fed1cc",
  position: 6,
  action: (e, t) => {
    q().then(i => {
      i || t(F6({
        position: e,
        source: "emoji_wheel_reactions"
      }));
    });
  },
  i18nName: () => getI18nString("fullscreen.reaction_wheel.chat")
}, {
  type: "REACTION",
  name: "r-sad",
  image: "78f60a21d2616c2a24c7645d8636dec855e48ffb",
  position: 5,
  i18nName: () => getI18nString("fullscreen.reaction_wheel.sad")
}, {
  type: "REACTION",
  name: "r-laugh",
  image: "a83de90bf34495081ce2e8bcaf28d1d2c16e5186",
  position: 4,
  i18nName: () => getI18nString("fullscreen.reaction_wheel.laugh")
}, {
  type: "REACTION",
  name: "r-love",
  image: "ff5be810b821d264cc2c95f665d24a867c34e587",
  position: 3,
  i18nName: () => getI18nString("fullscreen.reaction_wheel.love")
}];
export const n = $$s0;