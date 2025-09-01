if (exports.base64 = !0, exports.array = !0, exports.string = !0, exports.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, exports.nodebuffer = "undefined" != typeof Buffer, exports.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) exports.blob = !1;else {
  var n = new ArrayBuffer(0);
  try {
    exports.blob = 0 === new Blob([n], {
      type: "application/zip"
    }).size;
  } catch (e) {
    try {
      var i = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
      i.append(n);
      exports.blob = 0 === i.getBlob("application/zip").size;
    } catch (e) {
      exports.blob = !1;
    }
  }
}