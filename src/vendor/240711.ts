import { isImage } from "../vendor/661029";
import i from "../vendor/380284";
import { thatReturnsArgument } from "../vendor/994863";
var a = RegExp("\r\n", "g");
var s = {
  "text/rtf": 1,
  "text/html": 1
};
function u(t) {
  if ("file" == t.kind) return t.getAsFile();
}
var c = function () {
  function t(t) {
    this.data = t;
    this.types = t.types ? i(t.types) : [];
  }
  var e = t.prototype;
  e.isRichText = function () {
    return !!(this.getHTML() && this.getText()) || !this.isImage() && this.types.some(function (t) {
      return s[t];
    });
  };
  e.getText = function () {
    var t;
    this.data.getData && (this.types.length ? -1 != this.types.indexOf("text/plain") && (t = this.data.getData("text/plain")) : t = this.data.getData("Text"));
    return t ? t.replace(a, "\n") : null;
  };
  e.getHTML = function () {
    if (this.data.getData) {
      if (!this.types.length) return this.data.getData("Text");
      if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html");
    }
  };
  e.isLink = function () {
    return this.types.some(function (t) {
      return -1 != t.indexOf("Url") || -1 != t.indexOf("text/uri-list") || t.indexOf("text/x-moz-url");
    });
  };
  e.getLink = function () {
    return this.data.getData ? -1 != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : -1 != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url") : null;
  };
  e.isImage = function () {
    if (this.types.some(function (t) {
      return -1 != t.indexOf("application/x-moz-file");
    })) return !0;
    for (t = this.getFiles(), e = 0, void 0; e < t.length; e++) {
      var t;
      var e;
      var r = t[e].type;
      if (!isImage(r)) return !1;
    }
    return !0;
  };
  e.getCount = function () {
    return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null;
  };
  e.getFiles = function () {
    return this.data.items ? Array.prototype.slice.call(this.data.items).map(u).filter(thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : [];
  };
  e.hasFiles = function () {
    return this.getFiles().length > 0;
  };
  return t;
}();
module.exports = c;