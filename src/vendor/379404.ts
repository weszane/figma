function r() {
  this.compressedSize = 0;
  this.uncompressedSize = 0;
  this.crc32 = 0;
  this.compressionMethod = null;
  this.compressedContent = null;
}
r.prototype = {
  getContent: function () {
    return null;
  },
  getCompressedContent: function () {
    return null;
  }
};
module.exports = r;