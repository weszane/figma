import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { getRequest } from "../905/910117";
import { z } from "../905/751771";
export let $$o0 = new class {
  constructor() {
    this.forceRefresh = (e, t, i) => {
      if (!t.redirect_code_url) return Promise.reject(Error("Invalid code download url"));
      let o = "";
      let l = debugState.getState();
      let d = {
        version_id: t.id,
        file_key: l.openFile?.key || ""
      };
      if (i && (d.org_id = i), getFeatureFlags().plugins_remove_syntax_checking) {
        let i = getRequest(t.redirect_code_url, d, {
          raw: !0
        }).then(({
          data: t
        }) => (delete this.requestsInFlight[e], this.cache[e] = t, t)).catch(t => {
          delete this.requestsInFlight[e];
          return t;
        });
        this.requestsInFlight[e] = i;
        return i;
      }
      let c = getRequest(t.redirect_code_url, d, {
        raw: !0
      }).then(({
        data: e
      }) => (o = e, z(o))).then(t => {
        if (!t.success) throw Error("code is not valid javascript");
        delete this.requestsInFlight[e];
        this.cache[e] = o;
        return o;
      }).catch(t => {
        delete this.requestsInFlight[e];
        return t;
      });
      this.requestsInFlight[e] = c;
      return c;
    };
    this.getAndCache = (e, t) => {
      let i = this.getPluginVersionOrEmptyVersionHash(e);
      return i ? i in this.cache ? Promise.resolve(this.cache[i]) : i in this.requestsInFlight ? this.requestsInFlight[i] : this.forceRefresh(i, e, t) : Promise.resolve(null);
    };
    this.clearCache = () => {
      this.cache = Object.create(null);
      this.requestsInFlight = Object.create(null);
    };
    this.clearCache();
  }
  getPluginVersionOrEmptyVersionHash(e) {
    return e && e.id && e.plugin_id ? `${e.plugin_id}:${e.id}` : null;
  }
}();
export const F = $$o0; 
