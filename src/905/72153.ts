import { useMemo } from "react";
import { Rs } from "../figma_app/288654";
import { PluginSecurityFormResponse } from "../figma_app/43951";
import { E3 } from "../905/744076";
export function $$o0(e, t) {
  let i = Rs(PluginSecurityFormResponse, {
    pluginId: e
  }, {
    enabled: t
  });
  return useMemo(() => {
    let n;
    if (!t) return {
      loaded: !0,
      data: null
    };
    if ("loading" === i.status || "disabled" === i.status) return {
      loaded: !1
    };
    if ("loaded" !== i.status) return {
      loaded: !0,
      data: null
    };
    let r = i.data.pluginSecurityFormResponse;
    if (!r) return {
      loaded: !0,
      data: null
    };
    let {
      status,
      responses,
      formVersion,
      updatedAt
    } = r;
    try {
      n = JSON.parse(responses);
    } catch (e) {
      return {
        loaded: !0,
        data: null
      };
    }
    let c = E3.safeParse(n);
    return c.success ? {
      loaded: !0,
      data: {
        updatedAt,
        formVersion,
        pluginId: e,
        responses: c.data,
        status
      }
    } : {
      loaded: !0,
      data: null
    };
  }, [i.data?.pluginSecurityFormResponse, i.status, t, e]);
}
export const A = $$o0;