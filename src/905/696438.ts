let n = class e {
  static getInstance(t) {
    if (!e.instance[t]) throw Error("Running plugin before iframe sandbox started loading");
    return e.instance[t];
  }
  static getInstanceLoading(t) {
    if (t in e.instanceLoading) return e.instanceLoading[t].promise;
    let i = () => {};
    let n = () => {};
    let r = new Promise((e, t) => {
      i = e;
      n = t;
    });
    e.instanceLoading[t] = {
      promise: r,
      resolve: i,
      reject: n
    };
    return r;
  }
};
n.instance = {};
n.instanceLoading = {};
export let $$r0 = n;
export const Y = $$r0;