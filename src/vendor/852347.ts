import i from "../vendor/543492";
import { transformTo, findCompression, pretty, MAX_VALUE_32BITS } from "../vendor/185149";
import o from "../vendor/379404";
import { crc32, utf8decode } from "../vendor/532369";
import { uint8array } from "../vendor/82955";
var d = 0;
var p = 3;
function g(e, r) {
  this.options = e;
  this.loadOptions = r;
}
g.prototype = {
  isEncrypted: function () {
    return (1 & this.bitFlag) == 1;
  },
  useUTF8: function () {
    return (2048 & this.bitFlag) == 2048;
  },
  prepareCompressedContent: function (e, r, n) {
    return function () {
      var i = e.index;
      e.setIndex(r);
      var s = e.readData(n);
      e.setIndex(i);
      return s;
    };
  },
  prepareContent: function (e, r, n, i, o) {
    return function () {
      var e = transformTo(i.uncompressInputType, this.getCompressedContent());
      var r = i.uncompress(e);
      if (r.length !== o) throw Error("Bug : uncompressed data size mismatch");
      return r;
    };
  },
  readLocalPart: function (e) {
    var r;
    var n;
    if (e.skip(22), this.fileNameLength = e.readInt(2), n = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(n), -1 == this.compressedSize || -1 == this.uncompressedSize) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
    if (null === (r = findCompression(this.compressionMethod))) throw Error("Corrupted zip : compression " + pretty(this.compressionMethod) + " unknown (inner file : " + transformTo("string", this.fileName) + ")");
    if (this.decompressed = new o(), this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(e, e.index, this.compressedSize, r), this.decompressed.getContent = this.prepareContent(e, e.index, this.compressedSize, r, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = transformTo("string", this.decompressed.getContent()), crc32(this.decompressed) !== this.crc32)) throw Error("Corrupted zip : CRC32 mismatch");
  },
  readCentralPart: function (e) {
    if (this.versionMadeBy = e.readInt(2), this.versionNeeded = e.readInt(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4), this.fileNameLength = e.readInt(2), this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw Error("Encrypted zip are not supported");
    this.fileName = e.readData(this.fileNameLength);
    this.readExtraFields(e);
    this.parseZIP64ExtraField(e);
    this.fileComment = e.readData(this.fileCommentLength);
  },
  processAttributes: function () {
    this.unixPermissions = null;
    this.dosPermissions = null;
    var e = this.versionMadeBy >> 8;
    this.dir = !!(16 & this.externalFileAttributes);
    e === d && (this.dosPermissions = 63 & this.externalFileAttributes);
    e === p && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535);
    this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
  },
  parseZIP64ExtraField: function (e) {
    if (this.extraFields[1]) {
      var r = new i(this.extraFields[1].value);
      this.uncompressedSize === MAX_VALUE_32BITS && (this.uncompressedSize = r.readInt(8));
      this.compressedSize === MAX_VALUE_32BITS && (this.compressedSize = r.readInt(8));
      this.localHeaderOffset === MAX_VALUE_32BITS && (this.localHeaderOffset = r.readInt(8));
      this.diskNumberStart === MAX_VALUE_32BITS && (this.diskNumberStart = r.readInt(4));
    }
  },
  readExtraFields: function (e) {
    var r;
    var n;
    var i;
    var s = e.index;
    for (this.extraFields = this.extraFields || {}; e.index < s + this.extraFieldsLength;) {
      r = e.readInt(2);
      n = e.readInt(2);
      i = e.readString(n);
      this.extraFields[r] = {
        id: r,
        length: n,
        value: i
      };
    }
  },
  handleUTF8: function () {
    var e = uint8array ? "uint8array" : "array";
    if (this.useUTF8()) {
      this.fileNameStr = utf8decode(this.fileName);
      this.fileCommentStr = utf8decode(this.fileComment);
    } else {
      var r = this.findExtraFieldUnicodePath();
      if (null !== r) this.fileNameStr = r;else {
        var n = transformTo(e, this.fileName);
        this.fileNameStr = this.loadOptions.decodeFileName(n);
      }
      var i = this.findExtraFieldUnicodeComment();
      if (null !== i) this.fileCommentStr = i;else {
        var o = transformTo(e, this.fileComment);
        this.fileCommentStr = this.loadOptions.decodeFileName(o);
      }
    }
  },
  findExtraFieldUnicodePath: function () {
    var e = this.extraFields[28789];
    if (e) {
      var r = new i(e.value);
      return 1 !== r.readInt(1) || crc32(this.fileName) !== r.readInt(4) ? null : utf8decode(r.readString(e.length - 5));
    }
    return null;
  },
  findExtraFieldUnicodeComment: function () {
    var e = this.extraFields[25461];
    if (e) {
      var r = new i(e.value);
      return 1 !== r.readInt(1) || crc32(this.fileComment) !== r.readInt(4) ? null : utf8decode(r.readString(e.length - 5));
    }
    return null;
  }
};
module.exports = g;