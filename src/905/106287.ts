function i(e) {
  return e.message.includes("EADDRINUSE") || e.message.includes("EACCES");
}
(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  MCP_INTERNAL_GET_PROMPT: function () {
    return o;
  },
  MCP_INTERNAL_GET_PROMPTS_LIST: function () {
    return a;
  },
  MCP_INTERNAL_GET_RESOURCE: function () {
    return s;
  },
  MCP_INTERNAL_GET_RESOURCES_LIST: function () {
    return r;
  },
  MCP_INTERNAL_GET_TOOLS: function () {
    return n;
  },
  isMcpServerUserError: function () {
    return i;
  }
});
let n = "internal_get_tools";
let r = "internal_get_resources_list";
let a = "internal_get_prompts_list";
let s = "internal_get_resource";
let o = "internal_get_prompt";