import { decode } from "../vendor/181617";
import { utf8decode } from "../vendor/837721";
import { extend } from "../vendor/185149";
import a from "../vendor/856551";
module.exports = function (e, r) {
  var n;
  var h;
  var d;
  var p;
  for ((r = extend(r || {}, {
    base64: !1,
    checkCRC32: !1,
    optimizedBinaryString: !1,
    createFolders: !1,
    decodeFileName: utf8decode
  })).base64 && (e = decode(e)), n = (h = new a(e, r)).files, d = 0; d < n.length; d++) {
    p = n[d];
    this.file(p.fileNameStr, p.decompressed, {
      binary: !0,
      optimizedBinaryString: !0,
      date: p.date,
      dir: p.dir,
      comment: p.fileCommentStr.length ? p.fileCommentStr : null,
      unixPermissions: p.unixPermissions,
      dosPermissions: p.dosPermissions,
      createFolders: r.createFolders
    });
  }
  h.zipComment.length && (this.comment = h.zipComment);
  return this;
};