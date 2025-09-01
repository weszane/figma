var r = {
  utf8: {
    stringToBytes: function (e) {
      return r.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    bytesToString: function (e) {
      return decodeURIComponent(escape(r.bin.bytesToString(e)));
    }
  },
  bin: {
    stringToBytes: function (e) {
      for (r = [], n = 0, void 0; n < e.length; n++) {
        var r;
        var n;
        r.push(255 & e.charCodeAt(n));
      }
      return r;
    },
    bytesToString: function (e) {
      for (r = [], n = 0, void 0; n < e.length; n++) {
        var r;
        var n;
        r.push(String.fromCharCode(e[n]));
      }
      return r.join("");
    }
  }
};
module.exports = r;