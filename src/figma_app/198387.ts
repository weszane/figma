import { N } from "../905/949295";
export function $$i7(e, t) {
  let r = new Date().getTime() - e;
  return t >= 2 && r >= 5e3;
}
export function $$a4(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r].song_id !== t[r].song_id) return !1;
  return !0;
}
export let $$s6 = (e, t) => !e && !t || e?.song_id === t?.song_id;
export function $$o2(e) {
  let t = [];
  e.forEach(e => {
    let r = Math.floor(Math.random() * e.cuesheet.tracks.length);
    e.start_at_ms = e.cuesheet.tracks[r].start_time;
    t.push(e);
  });
  return t;
}
export async function $$l3({
  songID: e,
  onSuccess: t,
  onNotFound: r
}) {
  try {
    await N.getActive({
      songID: e
    });
    t();
  } catch (t) {
    if (404 === t.status) {
      r();
      return;
    }
    console.warn(`Failed to fetch active song with id ${e}: ${t}`);
    r();
    return t;
  }
}
let d = ["play", "pause", "previoustrack", "nexttrack", "seekbackward", "seekforward", "seekto", "stop"];
export function $$c5() {
  return "mediaSession" in navigator && !!navigator.mediaSession.metadata;
}
export function $$u0(e, t) {
  if (!e) return;
  let {
    title,
    album_art
  } = e;
  if ("mediaSession" in navigator) {
    for (let e of (navigator.mediaSession.metadata = new window.MediaMetadata({
      title,
      artist: "FigJam Music",
      artwork: [{
        src: album_art || ""
      }]
    }), d)) try {
      navigator.mediaSession.setActionHandler(e, () => {});
    } catch (t) {
      console.warn(`Attempting to stub out all action handlers for media session, but the media session action '${e}' is not supported`);
    }
    t && navigator.mediaSession.setActionHandler("stop", () => {
      t();
    });
  }
}
export function $$p1() {
  if ("mediaSession" in navigator) {
    for (let e of (navigator.mediaSession.metadata = null, d)) try {
      navigator.mediaSession.setActionHandler(e, null);
    } catch (t) {
      console.warn(`Attempting to null all custom action handlers for media session, but the media session action '${e}' is not supported`);
    }
    navigator.mediaSession.setActionHandler("play", () => {});
  }
}
export function $$_8() {
  navigator.mediaSession.setActionHandler("play", null);
}
export const $_ = $$u0;
export const I8 = $$p1;
export const P0 = $$o2;
export const _s = $$l3;
export const b2 = $$a4;
export const c4 = $$c5;
export const eB = $$s6;
export const nz = $$i7;
export const om = $$_8;