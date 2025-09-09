import { yu } from "../905/96041";
import { z6, fV, $$if } from "../figma_app/745826";
import { sendMetric } from "../905/485103";
var n;
function s(e, t, r) {
  t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r;
  return e;
}
!function (e) {
  e[e.STARTING = 0] = "STARTING";
  e[e.FRONTMATTER = 1] = "FRONTMATTER";
  e[e.BODY = 2] = "BODY";
  e[e.FOOTER = 3] = "FOOTER";
}(n || (n = {}));
let o = class {
  parseLine(e) {
    if (e.startsWith("# ")) {
      let t = e.slice(2);
      return {
        type: "h1",
        content: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
      };
    }
    return e.startsWith("## ") ? {
      type: "h2",
      content: e.slice(3)
    } : e.startsWith("### ") ? {
      type: "h2",
      content: e.slice(4)
    } : e.startsWith("- ") ? {
      type: "li",
      content: e.slice(2)
    } : {
      type: "p",
      content: e
    };
  }
  feed(e) {
    this.buffer += e;
    let t = e => {
      this.buffer = this.buffer.slice(e);
      this.cursor += e;
    };
    for (; this.buffer.length > 0;) {
      let e = this.buffer.indexOf("\n");
      if (0 === this.state) {
        if (-1 === e) return;
        this.buffer.slice(0, e) === z6 && (this.state = 1);
        t(e + 1);
      } else if (1 === this.state) {
        if (-1 === e) return;
        this.buffer.slice(0, e).startsWith(fV) && (this.state = 2);
        t(e + 1);
      } else if (2 === this.state) {
        if (this.buffer.startsWith($$if)) {
          this.state = 3;
          return;
        }
        if (-1 === e) {
          if (this.buffer.length >= 4) {
            let e = this.parseLine(this.buffer);
            this.onParse(e, this.cursor);
          }
          return;
        }
        {
          let r = this.buffer.slice(0, e);
          r.length > 0 && this.onParse(this.parseLine(r), this.cursor);
          t(e + 1);
        }
      } else if (3 === this.state) return;
    }
  }
  constructor(e) {
    s(this, "onParse", void 0);
    s(this, "state", void 0);
    s(this, "buffer", void 0);
    s(this, "cursor", void 0);
    this.onParse = e;
    this.state = 0;
    this.buffer = "";
    this.cursor = 0;
  }
};
export function $$l3() {
  let e;
  let t;
  let r = [];
  return new TransformStream({
    start(n) {
      e = new o((e, i) => {
        t?.start === i ? r[r.length - 1] = e : (r.push(e), t = {
          start: i,
          primitive: e
        });
        n.enqueue([...r]);
      });
    },
    transform(t, r) {
      e.feed(t.delta);
    }
  });
}
export let $$c2 = yu({
  onError: e => {
    sendMetric("web.cortex.error", {
      route: e
    });
  }
});
export class $$u0 {
  constructor(e) {
    this.stream = e;
  }
  async *[Symbol.asyncIterator]() {
    let e = this.stream.getReader();
    try {
      for (;;) {
        let t = e.read();
        let {
          done,
          value
        } = await t;
        if (done) break;
        yield value;
      }
    } finally {
      e.releaseLock();
    }
  }
}
export class $$p1 {
  constructor(e, t) {
    this.stream = e;
    this.timeoutMs = t;
  }
  async *[Symbol.asyncIterator]() {
    let e = this.stream.getReader();
    try {
      for (;;) {
        let t = e.read();
        try {
          let e = new Promise((e, t) => {
            setTimeout(() => {
              t(Error("Timeout"));
            }, this.timeoutMs);
          });
          let {
            done,
            value
          } = await Promise.race([t, e]);
          if (done) break;
          yield value;
        } catch (e) {
          if (e instanceof Error && "Timeout" === e.message) break;
          throw e;
        }
      }
    } finally {
      e.releaseLock();
    }
  }
}
export const c6 = $$u0;
export const hI = $$p1;
export const Ay = $$c2;
export const nU = $$l3;