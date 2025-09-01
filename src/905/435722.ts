export let $$n0 = new class {
  constructor() {
    this.videos = {};
    this.nextVideoID = 0;
  }
  createVideo() {
    var e = this.nextVideoID++;
    var t = document.createElement("video");
    t.preload = "auto";
    this.videos[e] = t;
    return e;
  }
  deleteVideo(e) {
    var t = this.videos[e];
    t.remove();
    URL.revokeObjectURL(t.src);
    delete this.videos[e];
  }
  getWidth(e) {
    return this.videos[e] ? this.videos[e].videoWidth : 0;
  }
  getHeight(e) {
    return this.videos[e] ? this.videos[e].videoHeight : 0;
  }
  getCoverImage(e) {
    if (!this.videos[e]) return new Uint8Array();
    var t = this.videos[e];
    var i = document.createElement("canvas").getContext("2d");
    if (null == i) return new Uint8Array();
    var n = i.canvas;
    n.width = this.getWidth(e);
    n.height = this.getHeight(e);
    i.drawImage(t, 0, 0, n.width, n.height);
    return new Uint8Array(i.getImageData(0, 0, n.width, n.height).data.buffer);
  }
  loadVideo(e, t, i) {
    return new Promise((n, r) => {
      var a = this.videos[t];
      var s = i ? new Blob([e], {
        type: i
      }) : new Blob([e]);
      let o = {
        error: e => {
          r(e.message);
          l();
        },
        loadeddata: e => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              0 === a.videoWidth || 0 === a.videoHeight ? r("Video load failed during thumbnail generation: video has no dimensions") : n(a.videoHeight);
              l();
            });
          });
        }
      };
      let l = () => {
        Object.keys(o).forEach(e => {
          a.removeEventListener(e, o[e]);
        });
      };
      Object.keys(o).forEach(e => {
        a.addEventListener(e, o[e]);
      });
      a.src = URL.createObjectURL(s);
      a.currentTime = 0;
      a.load();
      setTimeout(() => {
        r("Video load timeout during thumbnail generation");
      }, 1e4);
    });
  }
}();
export const t = $$n0;