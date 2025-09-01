import { K } from "../905/621139";
import { O4, By } from "../905/777187";
import { t } from "../905/303541";
import { LS } from "../figma_app/975811";
import { gl, _W } from "../905/216495";
import { zk } from "../figma_app/198712";
export class $$d0 extends K {
  constructor(e = {}) {
    super(e);
    this.opts = e;
    this.allowedUnits = "";
  }
  format(e) {
    return gl(e) ? t("fullscreen.mixed") : this.formatUnmixed(e);
  }
  parse(e, t) {
    e = this.normalize(e);
    this.allowedUnits && (e = e.replace(RegExp(this.allowedUnits, "g"), ""));
    let i = O4(e, _W(t, void 0));
    if (i.error) throw new LS("Could not parse input", i.error.type);
    return i.value;
  }
  onParseThrow(e, {
    error: t,
    value: i,
    source: n,
    event: a
  }) {
    if (t instanceof LS) {
      if (t.errorType === By.EVAL_NO_CURRENT_VALUE && gl(i)) {
        let {
          mixedMathHandler
        } = this.opts;
        if (mixedMathHandler) {
          let e = mixedMathHandler.getValue();
          "nudge" === n && a?.type === "keydown" && this.opts.onMixedMathNudge?.(a);
          return (i, {
            commit: n
          }) => {
            mixedMathHandler.onChange(e, i, n ? zk.YES : zk.NO);
          };
        }
        this.opts.mixedMathCallback && this.opts.mixedMathCallback(e);
      } else if (this.opts.onEvaluateExpressionError) return this.opts.onEvaluateExpressionError(t.errorType, e);
    }
  }
  formatUnmixed(e) {
    return super.format(e);
  }
}
export const R = $$d0;