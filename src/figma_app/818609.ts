import { ds } from "../figma_app/314264";
let i = {
  opens_music_dropdown: "opens_music_dropdown",
  toggles_mute: "toggles_mute",
  changes_song: "changes_song",
  changes_volume: "changes_volume",
  removes_song: "removes_song",
  plays_song: "plays_song",
  stops_song: "stops_song"
};
let a = (e, t, r, i) => {
  ds(e, t.openFile?.key, t, {
    ...r,
    multiplayer_count: t.multiplayer.allUsers.length
  }, i);
};
let $$s1 = e => a(i.opens_music_dropdown, e);
let $$o4 = (e, t, r) => a(i.changes_song, e, {
  song_id: t,
  isPlaying: r
});
let $$l0 = (e, t) => a(i.removes_song, e, {
  song_id: t
});
let $$d6 = (e, t) => a(i.toggles_mute, e, {
  isMuted: t
});
let $$c3 = (e, t) => a(i.changes_volume, e, {
  volume: t
});
let $$u5 = (e, t) => a(i.plays_song, e, {
  song_id: t
}, {
  forwardToDatadog: !0
});
let $$p2 = (e, t) => a(i.stops_song, e, {
  song_id: t
});
export const $B = $$l0;
export const eT = $$s1;
export const fx = $$p2;
export const qV = $$c3;
export const tU = $$o4;
export const xf = $$u5;
export const ym = $$d6;