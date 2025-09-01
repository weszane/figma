export async function $$n0() {
  return {
    videoJs: (await require.t.bind(require, 697442, 23)).$$default
  };
}
export class $$r1 extends Error {}
export function $$a2(e, t, i) {
  return new Promise((n, a) => e ? i ? (i.one("loadedmetadata", n), i.one("error", () => {
    let e = i.error();
    a(new $$r1(e ? `(${e.code}) ${e.message}` : void 0));
  }), void i.src({
    type: t ? "application/x-mpegURL" : "video/mp4",
    src: e
  })) : a(new $$r1("Invalid video player")) : a(new $$r1("Missing video src")));
}
export const Fe = $$n0;
export const aB = $$r1;
export const uz = $$a2;