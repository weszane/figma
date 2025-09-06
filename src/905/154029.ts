import { desktopAPIInstance } from "../figma_app/876459";
import { WO } from "../figma_app/122682";
export class $$a0 {
  constructor() {
    this.audioQueues = {};
  }
  addTrack(e, t) {
    if (!WO() || !e || !t) return;
    let i = [e, t.id].join("_");
    i in this.audioQueues || (this.audioQueues[i] = new s(e, t));
  }
  removeTrack(e, t) {
    if (!e || !t) return;
    let i = [e, t.id].join("_");
    this.audioQueues[i]?.close();
    delete this.audioQueues[i];
  }
  removeUnpublishedTrack(e, t) {
    Object.entries(this.audioQueues).forEach(([i, n]) => {
      let [r, a] = i.split("_");
      r === e && (a in t || n.close());
    });
  }
  clear() {
    Object.values(this.audioQueues).forEach(e => e.close());
    this.audioQueues = {};
  }
}
class s {
  constructor(e, t) {
    this.streamID = [e, t.id].join("_");
    this.context = new AudioContext({
      sampleRate: 16e3
    });
    this.mediaStream = new MediaStream([t]);
    this.inputNode = this.context.createMediaStreamSource(this.mediaStream);
    this.scriptNode = this.context.createScriptProcessor(4096, 1, 1);
    this.scriptNode.onaudioprocess = e => {
      let t = e.inputBuffer.getChannelData(0);
      desktopAPIInstance?.audioStreamSink(this.streamID, t);
    };
    this.inputNode.connect(this.scriptNode);
    this.scriptNode.connect(this.context.destination);
    desktopAPIInstance?.audioStreamOpen(this.streamID);
  }
  close() {
    this.inputNode.disconnect();
    this.scriptNode.disconnect();
    desktopAPIInstance?.audioStreamClose(this.streamID);
  }
}
export const b = $$a0;