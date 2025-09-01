import i from "../vendor/543492";
import s from "../vendor/632647";
import o from "../vendor/409308";
import a from "../vendor/856214";
import { pretty, transformTo, MAX_VALUE_16BITS, MAX_VALUE_32BITS, getTypeOf, checkSupport } from "../vendor/185149";
import { LOCAL_FILE_HEADER, CENTRAL_FILE_HEADER, CENTRAL_DIRECTORY_END, ZIP64_CENTRAL_DIRECTORY_LOCATOR, ZIP64_CENTRAL_DIRECTORY_END } from "../vendor/127762";
import p from "../vendor/852347";
import { uint8array, array } from "../vendor/82955";
function m(e, r) {
  this.files = [];
  this.loadOptions = r;
  e && this.load(e);
}
m.prototype = {
  checkSignature: function (e) {
    var r = this.reader.readString(4);
    if (r !== e) throw Error("Corrupted zip or bug : unexpected signature (" + pretty(r) + ", expected " + pretty(e) + ")");
  },
  isSignature: function (e, r) {
    var n = this.reader.index;
    this.reader.setIndex(e);
    var i = this.reader.readString(4) === r;
    this.reader.setIndex(n);
    return i;
  },
  readBlockEndOfCentral: function () {
    this.diskNumber = this.reader.readInt(2);
    this.diskWithCentralDirStart = this.reader.readInt(2);
    this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
    this.centralDirRecords = this.reader.readInt(2);
    this.centralDirSize = this.reader.readInt(4);
    this.centralDirOffset = this.reader.readInt(4);
    this.zipCommentLength = this.reader.readInt(2);
    var e = this.reader.readData(this.zipCommentLength);
    var r = uint8array ? "uint8array" : "array";
    var n = transformTo(r, e);
    this.zipComment = this.loadOptions.decodeFileName(n);
  },
  readBlockZip64EndOfCentral: function () {
    this.zip64EndOfCentralSize = this.reader.readInt(8);
    this.versionMadeBy = this.reader.readString(2);
    this.versionNeeded = this.reader.readInt(2);
    this.diskNumber = this.reader.readInt(4);
    this.diskWithCentralDirStart = this.reader.readInt(4);
    this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
    this.centralDirRecords = this.reader.readInt(8);
    this.centralDirSize = this.reader.readInt(8);
    this.centralDirOffset = this.reader.readInt(8);
    this.zip64ExtensibleData = {};
    for (i = this.zip64EndOfCentralSize - 44, s = 0, void 0; s < i;) {
      var e;
      var r;
      var n;
      var i;
      var s;
      e = this.reader.readInt(2);
      r = this.reader.readInt(4);
      n = this.reader.readString(r);
      this.zip64ExtensibleData[e] = {
        id: e,
        length: r,
        value: n
      };
    }
  },
  readBlockZip64EndOfCentralLocator: function () {
    if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw Error("Multi-volumes zip are not supported");
  },
  readLocalFiles: function () {
    var e;
    var r;
    for (e = 0; e < this.files.length; e++) {
      r = this.files[e];
      this.reader.setIndex(r.localHeaderOffset);
      this.checkSignature(LOCAL_FILE_HEADER);
      r.readLocalPart(this.reader);
      r.handleUTF8();
      r.processAttributes();
    }
  },
  readCentralDir: function () {
    var e;
    for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === CENTRAL_FILE_HEADER;) {
      (e = new p({
        zip64: this.zip64
      }, this.loadOptions)).readCentralPart(this.reader);
      this.files.push(e);
    }
    if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
  },
  readEndOfCentral: function () {
    var e = this.reader.lastIndexOfSignature(CENTRAL_DIRECTORY_END);
    if (e < 0) {
      if (!this.isSignature(0, LOCAL_FILE_HEADER)) throw Error("Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html");
      throw Error("Corrupted zip : can't find end of central directory");
    }
    this.reader.setIndex(e);
    var r = e;
    if (this.checkSignature(CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === MAX_VALUE_16BITS || this.diskWithCentralDirStart === MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === MAX_VALUE_16BITS || this.centralDirRecords === MAX_VALUE_16BITS || this.centralDirSize === MAX_VALUE_32BITS || this.centralDirOffset === MAX_VALUE_32BITS) {
      if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
      if (this.reader.setIndex(e), this.checkSignature(ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw Error("Corrupted zip : can't find the ZIP64 end of central directory");
      this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
      this.checkSignature(ZIP64_CENTRAL_DIRECTORY_END);
      this.readBlockZip64EndOfCentral();
    }
    var n = this.centralDirOffset + this.centralDirSize;
    this.zip64 && (n += 20, n += 12 + this.zip64EndOfCentralSize);
    var i = r - n;
    if (i > 0) this.isSignature(r, CENTRAL_FILE_HEADER) || (this.reader.zero = i);else if (i < 0) throw Error("Corrupted zip: missing " + Math.abs(i) + " bytes.");
  },
  prepareReader: function (e) {
    var r = getTypeOf(e);
    if (checkSupport(r), "string" !== r || uint8array) {
      if ("nodebuffer" === r) this.reader = new s(e);else if (uint8array) this.reader = new o(transformTo("uint8array", e));else if (array) this.reader = new a(transformTo("array", e));else throw Error("Unexpected error: unsupported type '" + r + "'");
    } else this.reader = new i(e, this.loadOptions.optimizedBinaryString);
  },
  load: function (e) {
    this.prepareReader(e);
    this.readEndOfCentral();
    this.readCentralDir();
    this.readLocalFiles();
  }
};
module.exports = m;