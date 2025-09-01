function n(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export class $$r0 {
  moveTo(e) {
    this.commands.push("M", e.x, e.y);
    this.lastPosition = e;
  }
  lineTo(e) {
    this.commands.push("L", e.x, e.y);
    this.lastPosition = e;
  }
  curveTo(e, t, i) {
    this.commands.push("C", e.x, e.y, t.x, t.y, i.x, i.y);
    this.lastPosition = i;
  }
  closePath() {
    this.commands.push("Z");
    this.lastPosition = null;
  }
  toVectorPath() {
    return {
      windingRule: this.windingRule,
      data: this.commands.join(" ")
    };
  }
  constructor(e) {
    n(this, "commands", void 0);
    n(this, "windingRule", void 0);
    n(this, "lastPosition", void 0);
    this.windingRule = e;
    this.commands = [];
    this.lastPosition = null;
  }
}
let a = {
  Z: 0,
  M: 2,
  L: 2,
  Q: 4,
  C: 6
};
export function $$s1(e) {
  return a[e];
}
export function $$o2(e) {
  if (!e.data || !e.data.length) return [];
  let t = e.data.split(" ");
  let i = [];
  for (let e of t) {
    if ("Z" === e || "M" === e || "L" === e || "Q" === e || "C" === e) {
      i.push(e);
      continue;
    }
    let t = Number(e);
    if (!isNaN(t)) {
      i.push(t);
      continue;
    }
    throw Error(`Failed to convert path. Invalid command at ${e}`);
  }
  if (i.length > 0 && "M" !== i[0]) throw Error(`Failed to convert path. ${i[0]} is not a valid first command`);
  return i;
}
export const TF = $$r0;
export const kz = $$s1;
export const vf = $$o2;