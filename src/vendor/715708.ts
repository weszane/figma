var i = "copy";
var s = "convert";
function o(e, r) {
  return {
    required: !0,
    schema: e,
    derive: r
  };
}
function a(e) {
  return {
    required: !0,
    schema: e
  };
}
function h(e) {
  return {
    required: !1,
    schema: e
  };
}
var d = {
  type: a(i),
  id: a(s),
  transports: h(i)
};
var p = {
  appid: h(i),
  appidExclude: h(i),
  credProps: h(i)
};
var g = {
  appid: h(i),
  appidExclude: h(i),
  credProps: h(i)
};
export function $$m0() {
  return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential);
}
a({
  rp: a(i),
  user: a({
    id: a(s),
    name: a(i),
    displayName: a(i)
  }),
  challenge: a(s),
  pubKeyCredParams: a(i),
  timeout: h(i),
  excludeCredentials: h([d]),
  authenticatorSelection: h(i),
  attestation: h(i),
  extensions: h(p)
});
h(i);
a(i);
a(i);
a(s);
h(i);
a({
  clientDataJSON: a(s),
  attestationObject: a(s),
  transports: o(i, e => {
    var r;
    return (null == (r = e.getTransports) ? void 0 : r.call(e)) || [];
  })
});
o(g, e => e.getClientExtensionResults());
h(i);
a({
  challenge: a(s),
  timeout: h(i),
  rpId: h(i),
  allowCredentials: h([d]),
  userVerification: h(i),
  extensions: h(p)
});
h(i);
a(i);
a(i);
a(s);
h(i);
a({
  clientDataJSON: a(s),
  authenticatorData: a(s),
  signature: a(s),
  userHandle: a(s)
});
o(g, e => e.getClientExtensionResults());
export const $j = $$m0;