import { getFeatureFlags } from '../905/601108';
import { zl } from '../figma_app/27355';
import { getInitialOptions } from '../figma_app/169182';
import { h } from '../figma_app/276445';
let n;
class $$s {
  useSentryErrors;
  slogToConsole;
  haveDSN;
  enabled;
  shouldIgnoreErrors;
  constructor(e) {
    this.useSentryErrors = e.useSentryErrors;
    this.slogToConsole = e.slogToConsole;
    this.haveDSN = e.haveDSN;
    this.enabled = e.useSentryErrors;
    this.shouldIgnoreErrors = e.shouldIgnoreErrors;
  }
  get ignoreErrors() {
    return this.shouldIgnoreErrors();
  }
}
class d {
  constructor(e) {
    this.config = e;
  }
}
export function $$c0() {
  return n ? n.config : (n || (n = new d(new $$s({
    slogToConsole: getFeatureFlags().slog_to_console || !1,
    haveDSN: !!getInitialOptions().frontend_sentry_dsn,
    useSentryErrors: !!getInitialOptions().frontend_sentry_dsn && !getInitialOptions().local_dev_on_cluster,
    shouldIgnoreErrors: () => zl.get(h) !== 'ok'
  })))).config;
}
export const s = $$c0;