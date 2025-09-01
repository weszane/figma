export let $$i0 = new class {
  parse(e, t) {
    let n = [];
    if (e.split(/[ ,]+/g).forEach(e => {
      if (!e.length) return;
      let t = parseFloat(e);
      if (!isFinite(t)) throw Error("Could not parse easing function input");
      n.push(t);
    }), 4 !== n.length) throw Error("Could not parse easing function input");
    n.forEach((e, t) => {
      t % 2 == 0 && (n[t] = Math.min(Math.max(e, 0), 1));
    });
    return n;
  }
  format(e) {
    return e?.map(e => parseFloat(e.toFixed(2))).join(", ");
  }
}();
export const n = $$i0;