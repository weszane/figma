var i;
var n;
var r;
(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  FullscreenMenu: function () {
    return i;
  },
  PluginMenu: function () {
    return r;
  },
  PluginMenuV19: function () {
    return n;
  }
});
(function (e) {
  e.NON_ACTION_ITEMS_SYNC_ALLOWLIST = ["cut", "copy", "paste", "interface-scale-menu", "toggle-full-screen", "always-show-tabs-when-presenting", "troubleshooting-menu", "sign-out"];
  e.isNonActionItemKey = function (t) {
    return e.NON_ACTION_ITEMS_SYNC_ALLOWLIST.includes(t);
  };
})(i || (i = {}));
(function (e) {
  function t(e) {
    throw Error("unreachable");
  }
  function i(e) {
    switch (e.type) {
      case "string-key":
        return e.string;
      case "plugin-name":
        return e.plugin;
      default:
        return t(e);
    }
  }
  function n(e) {
    var t;
    var i;
    return "run-installed-plugin" === e.type && "string" == typeof e.pluginId && (void 0 === e.command || "string" == typeof e.command) || "run-local-plugin" === e.type && "number" == typeof e.localFileId && (void 0 === e.command || "string" == typeof e.command) || "insert-local-widget" === e.type && "string" == typeof e.localFileId && (void 0 === e.command || "string" == typeof e.command) || "insert-installed-widget" === e.type && "string" == typeof e.pluginId && (void 0 === e.command || "string" == typeof e.command) || "insert-local-widget" === e.type && "number" == typeof e.localFileId && (void 0 === e.command || "string" == typeof e.command) || "publish-widget" === e.type && "number" == typeof e.localFileId || "run-last" === (t = e).type || "manage-widgets" === t.type || "browse" === (i = t).type || "browse-plugins" === i.type || "browse-widgets" === t.type || "select-all-widgets" === t.type || "view-api-docs" === t.type || "create-new-plugin" === t.type || "create-new-widget" === t.type || ("open-console" === t.type || "toggle-console" === t.type) && (void 0 === t.showError || "string" == typeof t.showError) || "open-dir" === t.type && "number" == typeof t.localFileId;
  }
  e.stringOfActionMenuItemName = i;
  e.nameOfMenuItem = function (e) {
    switch (e.type) {
      case "run-menu-action":
        return i(e.name);
      case "separator":
        return "";
      case "submenu":
      case "header":
        return e.name;
      default:
        return t(e);
    }
  };
  e.isMenuAction = n;
  e.isMenuItem = function e(t) {
    var i;
    var r;
    return "run-menu-action" === t.type && ("string-key" === (r = i = t.name).type && "string" == typeof r.key && "string" == typeof r.string || "plugin-name" === i.type && "string" == typeof i.plugin) && (void 0 === t.menuAction || n(t.menuAction)) && (void 0 === t.disabled || "boolean" == typeof t.disabled) || "separator" === t.type || "submenu" === t.type && "string" == typeof t.name && Array.isArray(t.submenu) && t.submenu.every(e) || "header" === t.type;
  };
})(n || (n = {}));
(function (e) {
  function t(e) {
    throw Error("unreachable");
  }
  function i(e) {
    switch (e.type) {
      case "string-key":
      case "plugin-name-string":
        return e.string;
      case "plugin-name":
        return e.plugin;
      default:
        return t(e);
    }
  }
  function n(e) {
    return "run-local-plugin" === e.type && "number" == typeof e.localFileId && (void 0 === e.command || "string" == typeof e.command) || "run-installed-plugin" === e.type && "string" == typeof e.pluginId && (void 0 === e.command || "string" == typeof e.command) || "string" == typeof e.type && (void 0 === e.showError || "string" == typeof e.showError) && (void 0 === e.localFileId || "number" == typeof e.localFileId);
  }
  e.stringOfActionMenuItemName = i;
  e.nameOfMenuItem = function (e) {
    switch (e.type) {
      case "run-menu-action":
        return i(e.name);
      case "separator":
        return "";
      case "submenu":
      case "header":
        return e.name;
      default:
        return t(e);
    }
  };
  e.isMenuAction = n;
  e.isMenuItem = function e(t) {
    var i;
    return "run-menu-action" === t.type && ("string-key" === (i = t.name).type && "string" == typeof i.string || "plugin-name" === i.type && "string" == typeof i.plugin) && (void 0 === t.menuAction || n(t.menuAction)) && (void 0 === t.disabled || "boolean" == typeof t.disabled) || "separator" === t.type || "submenu" === t.type && "string" == typeof t.name && Array.isArray(t.submenu) && t.submenu.every(e);
  };
})(r || (r = {}));