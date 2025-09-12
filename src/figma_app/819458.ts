import { trackEventAnalytics } from "../905/449184";
import { loadScript } from "../figma_app/623293";
import { getInitialOptions, getSupportEmail } from "../figma_app/169182";
let s = getInitialOptions().zendesk_web_key_public;
let $$o0 = {
  FREE: ["account", "billing", "bugReport", "dataPrivacy", "community", "events", "reportAbuse"],
  PAID: ["account", "billing", "bugReport", "dataPrivacy", "community", "events", "productQuestion", "reportAbuse"]
};
let l = {
  productQuestion: {
    id: 0x53d1c67aa1
  },
  bugReport: {
    id: 0x53d1c6adf6
  },
  featureRequest: {
    id: 0x53d1c6b4c1
  },
  account: {
    id: 0x53d206c58a
  },
  dataPrivacy: {
    id: 0x1623bff94217
  },
  community: {
    id: 0x71090d38797
  },
  billing: {
    id: 0x8d41e49e517
  },
  events: {
    id: 0x11e3970aad17
  },
  reportAbuse: {
    id: 0x1a704d1f0d97
  },
  other: {
    id: 0x53d1c6e546
  }
};
let d = function () {
  return {
    webWidget: {
      position: {
        horizontal: "right",
        vertical: "bottom"
      },
      offset: {
        horizontal: "0px",
        vertical: "40px"
      },
      contactForm: {
        selectTicketForm: {
          "*": "Please choose:"
        },
        ticketForms: Object.keys(l).map(e => l[e])
      },
      helpCenter: {
        searchPlaceholder: {
          "*": "How can we help?"
        },
        messageButton: {
          "*": "Contact us"
        }
      }
    }
  };
};
let c = null;
export function $$u1() {
  return c || (c = (async () => {
    if (window.figmaPerfTesting) throw Error("testing");
    if (window.zE) return window.zE;
    if (!s) throw Error("No zendesk_web_key_public api key");
    window.zESettings = d();
    try {
      await loadScript("https://static.zdassets.com/ekr/snippet.js?key=" + s, {
        id: "ze-snippet",
        cors: !1
      });
      return window.zE;
    } catch (e) {
      c = null;
      return e;
    }
  })());
}
export function $$p4(e, t) {
  c && window.zE && (window.zESettings = d(), t?.ticketForms && (window.zESettings.webWidget.contactForm = {
    ticketForms: t.ticketForms.map(e => l[e]),
    fields: (t.fields || []).map(e => ({
      id: e.id,
      prefill: {
        "*": e.value
      }
    }))
  }), t?.suppressAnswerBot && (window.zESettings.webWidget.helpCenter = {
    suppress: !0
  }, window.zESettings.webWidget.answerBot = {
    suppress: !0
  }), t?.locale && window.zE("webWidget", "setLocale", t.locale), window.zE("webWidget", "updateSettings", window.zESettings), window.zE("webWidget", "prefill", {
    name: {
      value: e.name,
      readOnly: !0
    },
    email: {
      value: e.email,
      readOnly: !0
    }
  }));
}
export function $$_2() {
  window.zE && (window.zE("webWidget", "show"), window.zE("webWidget", "open"), window.zE("webWidget:on", "close", () => {
    window.zE("webWidget", "hide");
  }), window.zE("webWidget:on", "userEvent", e => {
    let t = {
      action: e.action,
      relatedZendeskId: e.properties?.id,
      relatedZendeskName: e.properties?.name,
      searchTerm: e.properties?.term
    };
    trackEventAnalytics("zendesk_help_widget", t);
  }));
}
export function $$h3(e, t) {
  $$u1().then(() => $$p4(e, t)).then($$_2).catch(() => console.error(`Our support center is not currently available. You can email us at ${getSupportEmail()}.`));
}
export const Fb = $$o0;
export const L3 = $$u1;
export const b_ = $$_2;
export const ny = $$h3;
export const wB = $$p4;