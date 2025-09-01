import { G6 } from "../vendor/348210";
export let $$s0 = function () {
  let e = [];
  let r = 0;
  let n = e => {
    e();
  };
  let s = e => {
    e();
  };
  let o = s => {
    r ? e.push(s) : G6(() => {
      n(s);
    });
  };
  let a = () => {
    let r = e;
    e = [];
    r.length && G6(() => {
      s(() => {
        r.forEach(e => {
          n(e);
        });
      });
    });
  };
  return {
    batch: e => {
      let n;
      r++;
      try {
        n = e();
      } finally {
        --r || a();
      }
      return n;
    },
    batchCalls: e => (...r) => {
      o(() => {
        e(...r);
      });
    },
    schedule: o,
    setNotifyFunction: e => {
      n = e;
    },
    setBatchNotifyFunction: e => {
      s = e;
    }
  };
}();
export const j = $$s0;