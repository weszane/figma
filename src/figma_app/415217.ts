import { n as _$$n } from "../905/347702";
import { logError } from "../905/714362";
import { generateUUIDv4 } from "../905/871474";
var n;
var $$i10;
function o(e) {
  window.parent.postMessage(e, "*");
}
export function $$l22() {
  o({
    type: "FIGMA_READY"
  });
}
export function $$d3(e) {
  o({
    type: "CSS_PROPERTIES",
    data: {
      cssProperties: e
    }
  });
}
export function $$c11(e) {
  o({
    type: "HTML_SKELETON",
    data: {
      htmlSkeleton: e
    }
  });
}
export function $$u17(e) {
  o({
    type: "TEXT",
    data: {
      text: e
    }
  });
}
export function $$p2(e, t) {
  o({
    type: "LAYERS",
    data: {
      rootNodeId: e,
      layers: t
    }
  });
}
export function $$_18(e) {
  o({
    type: "ASSET",
    data: {
      asset: e
    }
  });
}
export function $$h9(e) {
  o({
    type: "RELATED_LINK_CREATED",
    data: {
      link: e
    }
  });
}
export function $$m1(e) {
  o({
    type: "RELATED_LINK_REMOVED",
    data: {
      link: e
    }
  });
}
export function $$g15(e) {
  o({
    type: "SELECTED_LAYER_GUID",
    data: {
      guid: e
    }
  });
}
export function $$f21(e) {
  o({
    type: "SELECTED_PAGE_GUID",
    data: {
      guid: e
    }
  });
}
export function $$E12(e) {
  o({
    type: "CONFIGURE_AUTOCOMPLETE",
    data: {
      providers: e
    }
  });
}
export function $$y13(e) {
  o({
    type: "GENERATED_CODE",
    data: {
      sections: e
    }
  });
}
export function $$b16(e) {
  o({
    type: "OPEN_RELATED_LINK",
    data: {
      href: e
    }
  });
}
export function $$T19() {
  o({
    type: "CREATE_FILE_LINK"
  });
}
export let $$I8 = _$$n(e => {
  o({
    type: "OPEN_IN_BROWSER",
    data: {
      href: e
    }
  });
});
export function $$S4(e) {
  o({
    type: "FILE_NAME",
    data: {
      name: e
    }
  });
}
export function $$v5() {
  o({
    type: "OPEN_AUTOCOMPLETE_LINE_SETTINGS"
  });
}
export function $$A14() {
  o({
    type: "OPEN_AUTOCOMPLETE_BLOCK_SETTINGS"
  });
}
export function $$x6(e, t, r) {
  o({
    type: "THUMBNAIL",
    data: {
      nodeId: e,
      thumbnailDataUri: t,
      thumbnailSize: r
    }
  });
}
export function $$N20() {
  o({
    type: "PAGE_LOADED"
  });
}
export function $$C0() {
  o({
    type: "IDLE_LOGOUT"
  });
}
export function $$w7(e) {
  o({
    type: "MAPPING_SUGGESTION",
    data: {
      requestId: e.requestId,
      mappings: e.mappings || null,
      error: e.error || null
    }
  });
}
(n || (n = {})).sendGenerateFigmadocMessage = function (e) {
  return $$O23.sendMessage({
    type: "GENERATE_FIGMADOC",
    request: {
      userCode: e
    }
  });
};
(e => {
  e.sendGetLocalFileExtensionManifest = function (e) {
    return $$O23.sendMessage({
      type: "GET_LOCAL_FILE_EXTENSION_MANIFEST",
      request: {
        id: e
      }
    });
  };
  e.sendCreateMultipleNewLocalFileExtensions = function (e, t) {
    return $$O23.sendMessage({
      type: "CREATE_MULTIPLE_NEW_LOCAL_FILE_EXTENSIONS",
      request: {
        options: e,
        depth: t
      }
    });
  };
  e.sendGetLocalFileExtensionSourceMessage = function (e) {
    return $$O23.sendMessage({
      type: "GET_LOCAL_FILE_EXTENSION_SOURCE",
      request: {
        id: e
      }
    });
  };
  e.sendUpdateCachedContainsWidget = function (e) {
    return $$O23.sendMessage({
      type: "UPDATE_CACHED_CONTAINS_WIDGET",
      request: e
    });
  };
  e.sendGetLocalManifestFileExtensionIdsToCachedMetadataMap = function () {
    return $$O23.sendMessage({
      type: "GET_LOCAL_MANIFEST_FILE_EXTENSION_IDS_TO_CACHED_METADATA_MAP",
      request: void 0
    });
  };
  e.sendRegisterManifestChangeObserverMessage = function (e) {
    return $$R24.registerCallback({
      type: "REGISTER_MANIFEST_CHANGE_OBSERVER"
    }, e);
  };
  e.sendRegisterCodeChangeObserverMessage = function (e) {
    return $$R24.registerCallback({
      type: "REGISTER_CODE_CHANGE_OBSERVER"
    }, e);
  };
  e.sendRegisterUIChangeObserverMessage = function (e) {
    return $$R24.registerCallback({
      type: "REGISTER_UI_CHANGE_OBSERVER"
    }, e);
  };
  e.sendOpenExtensionDirectoryMessage = function (e) {
    return o({
      type: "OPEN_EXTENSION_DIRECTORY",
      data: {
        id: e
      }
    });
  };
  e.sendOpenExtensionManifestMessage = function (e) {
    return o({
      type: "OPEN_EXTENSION_MANIFEST",
      data: {
        id: e
      }
    });
  };
  e.sendRemoveFileExtensionMessage = function (e) {
    return $$O23.sendMessage({
      type: "REMOVE_LOCAL_FILE_EXTENSION",
      request: {
        id: e
      }
    });
  };
  e.sendGetLocalManifestFileExtensionIdsToCachedContainsWidgetMapMessage = function () {
    return $$O23.sendMessage({
      type: "GET_LOCAL_MANIFEST_FILE_EXTENSION_IDS_TO_CACHED_CONTAINS_WIDGET_MAP",
      request: void 0
    });
  };
  e.sendToggleDevToolsMessage = function () {
    return o({
      type: "TOGGLE_DEV_TOOLS"
    });
  };
  e.sendGetAllLocalFileExtensionIdsMessage = function () {
    return $$O23.sendMessage({
      type: "GET_ALL_LOCAL_FILE_EXTENSION_IDS",
      request: void 0
    });
  };
  e.sendWriteNewExtensionDirectoryToDiskMessage = function (e) {
    return $$O23.sendMessage({
      type: "WRITE_NEW_EXTENSION_DIRECTORY_TO_DISK",
      request: e
    });
  };
})($$i10 || ($$i10 = {}));
let $$O23 = new class {
  constructor() {
    this.pendingMessagesById = {};
  }
  sendMessage(e) {
    let t = generateUUIDv4();
    let r = {
      ...e,
      requestId: t
    };
    return new Promise((e, n) => {
      this.pendingMessagesById[t] = {
        ...r,
        resolve: e,
        reject: n
      };
      o(r);
    });
  }
  resolveMessage(e) {
    let t = this.pendingMessagesById[e.requestId];
    if (!t) {
      logError("MessageWithResponseManager.resolveMessage", "No pending message found", {
        response: e,
        pendingMessagesById: this.pendingMessagesById
      }, {
        reportAsSentryError: !0
      });
      return;
    }
    e.response && (t.resolve(e.response), delete this.pendingMessagesById[e.requestId]);
  }
}();
let $$R24 = new class {
  constructor() {
    this.callbacksById = {};
  }
  registerCallback(e, t) {
    let r = generateUUIDv4();
    this.callbacksById[r] = t;
    o({
      ...e,
      callbackId: r
    });
    return () => this.cancelCallback(r);
  }
  resolveMessage(e) {
    let t = this.callbacksById[e.callbackId];
    if (!t) {
      logError("MessageWithCallbackManager.resolveMessage", "No callback found", {
        response: e,
        callbacksById: this.callbacksById
      }, {
        reportAsSentryError: !0
      });
      return;
    }
    t(e.callbackData);
  }
  async cancelCallback(e) {
    await $$O23.sendMessage({
      type: "CANCEL_CALLBACK",
      request: {
        callbackId: e
      }
    });
    delete this.callbacksById[e];
  }
}();
export const $g = $$C0;
export const Au = $$m1;
export const BG = $$p2;
export const Bt = $$d3;
export const GD = $$S4;
export const KQ = $$v5;
export const LF = $$x6;
export const N$ = $$w7;
export const Qn = $$I8;
export const _L = $$h9;
export const bf = $$i10;
export const fL = $$c11;
export const hQ = $$E12;
export const le = $$y13;
export const lk = $$A14;
export const mX = $$g15;
export const mz = $$b16;
export const oF = $$u17;
export const pY = $$_18;
export const qE = $$T19;
export const rx = $$N20;
export const sZ = $$f21;
export const u_ = $$l22;
export const wS = $$O23;
export const w_ = $$R24;
