export let $$n2 = !!navigator.locks;
export function $$r1(e) {
  return navigator.locks ? new Promise((t, i) => {
    let n = navigator.locks.request(e, {
      ifAvailable: !0
    }, async i => {
      if (!i) {
        t(null);
        return;
      }
      await new Promise((i, r) => {
        t({
          name: e,
          release: async () => {
            i();
            await n;
          }
        });
      });
    }).catch(e => {
      setTimeout(() => {
        throw e;
      });
    });
  }) : Promise.resolve({
    name: e,
    release: async () => { }
  });
}
export async function $$a0(e) {
  return navigator.locks ? await navigator.locks.request(e, {
    ifAvailable: !0
  }, e => !!e) : Promise.resolve(!0);
}
export const Ph = $$a0;
export const ly = $$r1;
export const yp = $$n2; 
