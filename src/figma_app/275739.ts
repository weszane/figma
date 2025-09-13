import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { buildUploadUrl, getInitialOptions } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { We } from "../figma_app/165623";
import { reportError } from "../905/11";
import { trackFileEvent } from "../figma_app/314264";
import { R9 } from "../905/977824";
import { b as _$$b } from "../905/154029";
import { T as _$$T } from "../905/312425";
import { _ as _$$_ } from "../905/199441";
import { WO } from "../figma_app/122682";
import { $E } from "../figma_app/120529";
let E = e => e > .1;
let $$y1 = .05;
let b = `Something there is that doesn't love a wall,
That sends the frozen-ground-swell under it,
And spills the upper boulders in the sun;
And makes gaps even two can pass abreast.
The work of hunters is another thing:
I have come after them and made repair
Where they have left not one stone on a stone,
But they would have the rabbit out of hiding,
To please the yelping dogs. The gaps I mean,
No one has seen them made or heard them made,
But at spring mending-time we find them there.
I let my neighbor know beyond the hill;
And on a day we meet to walk the line
And set the wall between us once again.
We keep the wall between us as we go.
To each the boulders that have fallen to each.
And some are loaves and some so nearly balls
We have to use a spell to make them balance:
\u2018Stay where you are until our backs are turned!\u2019
We wear our fingers rough with handling them.
Oh, just another kind of out-door game,
One on a side. It comes to little more:
There where it is we do not need the wall:
He is all pine and I am apple orchard.
My apple trees will never get across
And eat the cones under his pines, I tell him.
He only says, \u2018Good fences make good neighbors.\u2019
Spring is the mischief in me, and I wonder
If I could put a notion in his head:
\u2018Why do they make good neighbors? Isn't it
Where there are cows? But here there are no cows.
Before I built a wall I'd ask to know
What I was walling in or walling out,
And to whom I was like to give offense.
Something there is that doesn't love a wall,
That wants it down.\u2019 I could say \u2018Elves\u2019 to him,
But it's not elves exactly, and I'd rather
He said it for himself. I see him there
Bringing a stone grasped firmly by the top
In each hand, like an old-stone savage armed.
He moves in darkness as it seems to me,
Not of woods only and the shade of trees.
He will not go behind his father's saying,
And he likes having thought of it so well
He says again, \u2018Good fences make good neighbors.\u2019`.split(/\n/g).map(e => e.trim());
let T = 0;
let I = class e {
  constructor(e) {
    this.isMuted = !1;
    this.handlingTokenExpiration = !1;
    this.decryptedUserMap = {};
    this.averageRecentVoiceLevel = {};
    this.volumeDataInterval = null;
    this.micStateInterval = null;
    this.streamingAudioForCaptions = !1;
    this._microphonePermissionDenied = !0;
    this.captionsToggleEnabled = !1;
    this.volumeLevelsStore = _$$_({});
    this.activeSpeakerIdStore = _$$_(null);
    this.recentlySpokeIdStore = _$$_(null);
    this.setMicrophone = async e => {
      try {
        this.unpublishedLocalAudioTrack?.setDevice(e.deviceId);
        await this.localAudioTrack?.setDevice(e.deviceId);
        this.microphone = e;
      } catch (e) {
        throw e;
      }
    };
    this.setPlaybackDevice = async e => {
      try {
        this.client?.remoteUsers.forEach(t => t.audioTrack?.setPlaybackDevice(e.deviceId));
        this.playbackDevice = e;
      } catch (e) {
        throw e;
      }
    };
    this.getMicrophones = e => this.AgoraRTC.getMicrophones(e);
    this.getPlaybackDevices = e => this.AgoraRTC?.getPlaybackDevices(e);
    this.currentMicrophone = async () => this.microphone || (await this.getMicrophones())?.[0];
    this.currentPlaybackDevice = async () => this.playbackDevice || (await this.getPlaybackDevices())?.[0];
    this.getParticipantIds = async () => {
      if (!this.client || !this.userId) throw Error("Client not yet instantiated");
      let e = [];
      for (let t of this.client.remoteUsers) {
        let r = await this.getDecryptedUserId(t.uid);
        r && e.push(r);
      }
      e.push(this.userId);
      return e;
    };
    this.startPollingMicState = () => {
      desktopAPIInstance && (this.microphonePermissionDenied && desktopAPIInstance.setUsingMicrophone(!1), this.micStateInterval = setInterval(() => {
        this.client && (desktopAPIInstance?.setIsInVoiceCall("DISCONNECTED" !== this.client.connectionState), desktopAPIInstance?.setUsingMicrophone(!!this.isPublishingLocalTrack()));
      }, 5e3));
    };
    this.stopPollingMicState = () => {
      this.micStateInterval && (clearInterval(this.micStateInterval), this.micStateInterval = null);
    };
    this.isPublishingLocalTrack = () => this.client?.localTracks.some(e => e.getTrackId() === this.localAudioTrack?.getTrackId());
    this.startPollingVolumeData = () => {
      this.volumeDataInterval || (this.volumeDataInterval = setInterval(async () => {
        if (!this.client || !this.userId) return;
        let e = {};
        for (let e in this.averageRecentVoiceLevel) this.averageRecentVoiceLevel[e] *= .8;
        for (let t of this.client.remoteUsers) {
          let r = await this.getDecryptedUserId(t.uid);
          if (!r) continue;
          let n = t.audioTrack?.getVolumeLevel() || 0;
          let i = this.averageRecentVoiceLevel[r];
          this.averageRecentVoiceLevel[r] = (i || 0) + n;
          e[r] = {
            isMuted: !t.audioTrack,
            volumeLevel: n
          };
        }
        let t = this.localAudioTrack?.getVolumeLevel() || 0;
        this.averageRecentVoiceLevel[this.userId] = this.isMuted ? 0 : (this.averageRecentVoiceLevel[this.userId] || 0) + t;
        e[this.userId] = {
          isMuted: this.isMuted,
          volumeLevel: t
        };
        this.checkLocalVolumeLevels();
        this.volumeLevelsStore.set(e);
        this.updateActiveSpeakers();
        this.updateRecentlySpoke();
      }, 200));
    };
    this.stopPollingVolumeData = () => {
      this.volumeDataInterval && (clearInterval(this.volumeDataInterval), this.volumeDataInterval = null);
    };
    this.checkLocalVolumeLevels = () => {
      this.isMuted && this.unpublishedLocalAudioTrack && this.unpublishedLocalAudioTrack.getVolumeLevel() > .6 && this.callEventCallback?.($E.WARNING_MICROPHONE_LEVELS_HIGH_AND_MUTED);
    };
    this.updateActiveSpeakers = () => {
      let e = Object.entries(this.averageRecentVoiceLevel).filter(e => e[1] > $$y1).sort((e, t) => e[1] > t[1] ? -1 : 1).map(e => e[0]);
      this.activeSpeakerIdStore.set(e);
    };
    this.updateRecentlySpoke = () => {
      let e = Object.entries(this.averageRecentVoiceLevel).sort((e, t) => e[1] > t[1] ? -1 : 1).map(e => e[0]);
      this.recentlySpokeIdStore.set(e);
    };
    this.onCallDisconnect = () => {
      R9.sendVoiceMetadata("");
      this.stopPollingVolumeData();
      desktopAPIInstance?.setIsInVoiceCall(!1);
      desktopAPIInstance?.setUsingMicrophone(!1);
      this.localAudioTrack?.setEnabled(!1);
      this.unpublishedLocalAudioTrack?.setEnabled(!1);
    };
    this.attachDeviceListeners = e => {
      e.onMicrophoneChanged = e => {
        this.microphone?.deviceId === e.device.deviceId && "INACTIVE" === e.state && this.getMicrophones().then(e => {
          this.microphone = e.length > 0 ? e[0] : null;
        });
      };
      e.onPlaybackDeviceChanged = e => {
        this.playbackDevice?.deviceId === e.device.deviceId && "INACTIVE" === e.state && BrowserInfo.chrome && this.getPlaybackDevices().then(e => {
          this.playbackDevice = e.length > 0 ? e[0] : null;
        });
      };
    };
    this.audioCaptionQueues = new _$$b();
    this.audioCaptionStream = new _$$T();
    this.AgoraRTC = e;
    this.AgoraRTC.setLogLevel(getFeatureFlags().voice_agora_debug_level_logs ? 0 : 3);
    this.AgoraRTC.setArea(["OVERSEA"]);
    this.localAudioTrack = null;
    this.unpublishedLocalAudioTrack = null;
    this.microphone = null;
    this.playbackDevice = null;
    this.attachDeviceListeners(e);
    getFeatureFlags().voice_debug_captions_enabled && setTimeout(() => {
      setInterval(() => {
        this.audioCaptionStream.addNewCaption(this.userId ? this.userId : "dummyUserId", Date.now(), b[T++ % b.length]);
      }, 1501);
    }, 1500);
  }
  static createInstance() {
    return this.instance ? Promise.resolve() : new Promise((t, r) => {
      let n = document.createElement("script");
      n.src = buildUploadUrl("0706b46bdc09a419282285b791ea1dd3c019ecd6");
      n.setAttribute("nonce", getInitialOptions().csp_nonce);
      n.onload = () => {
        let r = window.AgoraRTC;
        this.instance = new e(r);
        t();
      };
      n.onerror = () => {
        r(Error("Provider audio script load error"));
      };
      document.body.appendChild(n);
    });
  }
  static getInstance() {
    return this.instance;
  }
  static leave() {
    this.instance?.leave();
  }
  async join({
    appId: t,
    callId: r,
    token: n,
    callUserId: i,
    userId: o,
    encryptionKey: d,
    userEncryptionKey: c,
    setParticipantIdsCallback: p,
    callEventCallback: _,
    store: h,
    fileKey: m
  }) {
    if (await this.setMicrophonePermissions(), !this.getSystemCompatibility()) throw Error("System incompatible");
    this.setParticipantIdsCallback = p;
    this.userId = o;
    this.userEncryptionKey = c;
    this.callEventCallback = _;
    try {
      let e = "vp8";
      BrowserInfo.safari && +BrowserInfo.version >= 13 && (e = "h264");
      await this.client?.leave();
      this.client = this.AgoraRTC.createClient({
        mode: "live",
        codec: e
      });
      this.AgoraRTC.setParameter("AUDIO_SOURCE_VOLUME_UPDATE_INTERVAL", 200);
      this.userId = o;
      this.handlingTokenExpiration = !1;
      this.client.setEncryptionConfig("aes-256-xts", d);
      this.attachClientListeners(r, n, o, d, _);
      await this.client.join(t, r, n, i);
      desktopAPIInstance?.setIsInVoiceCall(!0);
      await this.client.setClientRole("host");
      this.microphonePermissionDenied || (this.localAudioTrack = await this.AgoraRTC.createMicrophoneAudioTrack({
        AEC: !0,
        AGC: !0,
        ANS: !0,
        microphoneId: this.microphone?.deviceId
      }), this.unpublishedLocalAudioTrack = await this.AgoraRTC.createMicrophoneAudioTrack({
        AEC: !0,
        AGC: !0,
        ANS: !0,
        microphoneId: this.microphone?.deviceId
      }));
      this.localAudioTrack && (await this.client.publish(this.localAudioTrack));
      await this.unmute();
    } catch (i) {
      trackEventAnalytics("Voice Call - Error", {
        callId: r,
        token: n,
        userId: o,
        encryptionKey: d,
        message: `${i.message}`,
        agora_exception: !1,
        agora_recovery: !1,
        join: !0
      }, {
        forwardToDatadog: !0
      });
      let t = Error(`Error joining call: ${i.message}`);
      await e.leave();
      return t;
    } finally {
      trackFileEvent("voice_user_joined", m, h.getState(), {
        callId: r,
        userId: o,
        encryptionKey: d,
        captions_enabled: this.captionsToggleEnabled
      });
      (this.client?.connectionState !== "DISCONNECTED" || this.isPublishingLocalTrack()) && this.startPollingMicState();
    }
  }
  get uid() {
    return this.client?.uid;
  }
  async renewToken(e) {
    await this.client?.renewToken(e);
    this.handlingTokenExpiration = !1;
    trackEventAnalytics("Voice Call - Token Renewed", {
      token: e,
      userId: this.client?.uid && this.decryptedUserMap[this.client?.uid]
    });
  }
  async leave() {
    await this.client?.leave();
    this.stopPollingMicState();
    this.audioCaptionQueues.clear();
    this.audioCaptionStream.clear();
  }
  async mute() {
    await this.localAudioTrack?.setEnabled(!1);
    this.audioCaptionQueues.removeTrack(this.userId, this.localAudioTrack?.getMediaStreamTrack());
    desktopAPIInstance?.setUsingMicrophone(!1);
    this.isMuted = !0;
  }
  async unmute() {
    await this.localAudioTrack?.setEnabled(!0);
    WO() && this.streamingAudioForCaptions && this.audioCaptionQueues.addTrack(this.userId, this.localAudioTrack?.getMediaStreamTrack());
    desktopAPIInstance?.setUsingMicrophone(!0);
    this.isMuted = !1;
  }
  streamAudioForCaptions(e) {
    WO() && this.streamingAudioForCaptions !== e && (this.streamingAudioForCaptions = e, this.audioCaptionQueues.clear(), this.streamingAudioForCaptions && (this.client?.remoteUsers.forEach(async e => {
      let t = await this.getDecryptedUserId(e.uid);
      this.audioCaptionQueues.addTrack(t, e.audioTrack?.getMediaStreamTrack());
    }), this.localAudioTrack && !this.isMuted && this.audioCaptionQueues.addTrack(this.userId, this.localAudioTrack.getMediaStreamTrack())));
  }
  getSystemCompatibility() {
    return this.AgoraRTC.checkSystemRequirements();
  }
  isLocalUserSpeaking() {
    return !!this.userId && E(this.averageRecentVoiceLevel[this.userId]);
  }
  attachClientListeners(e, t, r, n, i) {
    this.client?.removeAllListeners();
    this.client?.on("user-published", async (e, t) => {
      if (await this.client?.subscribe(e, t), "audio" === t) {
        let t = e.audioTrack || null;
        if (t?.play(), this.playbackDevice && t?.setPlaybackDevice(this.playbackDevice.deviceId), WO() && t && this.streamingAudioForCaptions) {
          let r = await this.getDecryptedUserId(e.uid);
          this.audioCaptionQueues.addTrack(r, t.getMediaStreamTrack());
        }
      }
    });
    this.client?.on("user-unpublished", async (e, t) => {
      if (!desktopAPIInstance || "audio" !== t) return;
      let r = await this.getDecryptedUserId(e.uid);
      if (!r) return;
      let n = new Set();
      for (let t of this.client?.remoteUsers || []) {
        let i = await this.getDecryptedUserId(t.uid);
        let a = e.audioTrack?.getMediaStreamTrack().id;
        i === r && a && n.add(a);
      }
      this.audioCaptionQueues.removeUnpublishedTrack(r, n);
    });
    let o = !0;
    this.client?.on("network-quality", function (i) {
      o && (i.downlinkNetworkQuality >= 4 || i.uplinkNetworkQuality >= 4) ? (trackEventAnalytics("Voice Call - Bad Call Quality", {
        callId: e,
        token: t,
        userId: r,
        encryptionKey: n,
        message: `Bad call quality detected. downlink = ${i.downlinkNetworkQuality}, uplink = ${i.uplinkNetworkQuality}`,
        agora_exception: !1,
        agora_recovery: !1,
        join: !1
      }, {
        forwardToDatadog: !0
      }), o = !1) : o = !0;
    });
    this.client?.on("user-joined", async e => {
      this.setParticipantIdsCallback?.(await this.getParticipantIds());
      let t = await this.getDecryptedUserId(e.uid);
      t !== this.userId && i($E.USER_JOINED, t);
    });
    this.client?.on("user-left", async e => {
      this.setParticipantIdsCallback?.(await this.getParticipantIds());
      let t = await this.getDecryptedUserId(e.uid);
      t !== this.userId && i($E.USER_LEFT, t);
    });
    this.client?.on("connection-state-change", async t => {
      let r;
      switch (t) {
        case "CONNECTED":
          if (R9.sendVoiceMetadata(e), this.setParticipantIdsCallback?.(await this.getParticipantIds()), this.startPollingVolumeData(), this._microphonePermissionDenied) {
            r = $E.CONNECTED_WITH_MIC_DISABLED;
            break;
          }
          r = $E.CONNECTED;
          break;
        case "DISCONNECTED":
          this.onCallDisconnect();
          r = $E.DISCONNECTED;
          break;
        case "CONNECTING":
          r = $E.CONNECTING;
          break;
        case "DISCONNECTING":
          r = $E.DISCONNECTING;
          break;
        case "RECONNECTING":
          r = $E.RECONNECTING;
      }
      void 0 !== r && i(r);
    });
    this.client?.on("exception", s => {
      let o;
      switch (s.code) {
        case 2001:
          if (this.microphonePermissionDenied) break;
          o = $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW;
          break;
        case 2002:
          o = $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW;
          break;
        case 2003:
          if (this.microphonePermissionDenied) break;
          o = $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW;
          break;
        case 2005:
          o = $E.WARNING_RECV_AUDIO_DECODE_FAILED;
          break;
        case 4001:
          if (this.microphonePermissionDenied) break;
          o = $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER;
          break;
        case 4002:
          o = $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER;
          break;
        case 4003:
          if (this.microphonePermissionDenied) break;
          o = $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW_RECOVER;
          break;
        case 4005:
          o = $E.WARNING_RECV_AUDIO_DECODE_FAILED_RECOVER;
      }
      o && i(o);
      s.code >= 3e3 ? (console.error(s), trackEventAnalytics("Voice Call - Error", {
        callId: e,
        token: t,
        userId: r,
        encryptionKey: n,
        message: s.msg,
        code: s.code,
        agora_exception: !1,
        agora_recovery: !0,
        join: !1
      }, {
        forwardToDatadog: !0
      })) : trackEventAnalytics("Voice Call - Error", {
        callId: e,
        token: t,
        userId: r,
        encryptionKey: n,
        message: s.msg,
        code: s.code,
        agora_exception: !0,
        agora_recovery: !1,
        join: !1
      }, {
        forwardToDatadog: !0
      });
    });
    this.client?.on("token-privilege-will-expire", () => {
      if (!this.handlingTokenExpiration) {
        if (this.handlingTokenExpiration = !0, !this.client?.remoteUsers.length) {
          i($E.CALL_INACTIVE);
          trackEventAnalytics("Voice Call - Token Will Expire", {
            callId: e,
            token: t,
            userId: r,
            encryptionKey: n,
            callInactive: !0
          });
          return;
        }
        i($E.TOKEN_WILL_EXPIRE_DETECT_MIC_INPUT);
        trackEventAnalytics("Voice Call - Token Will Expire", {
          callId: e,
          token: t,
          userId: r,
          encryptionKey: n
        });
      }
    });
    this.client?.on("token-privilege-did-expire", () => {
      i($E.TOKEN_EXPIRED);
      trackEventAnalytics("Voice Call - Token Did Expire", {
        callId: e,
        token: t,
        userId: r,
        encryptionKey: n
      });
    });
  }
  async getDecryptedUserId(e) {
    try {
      this.decryptedUserMap[e] || (this.decryptedUserMap[e] = await We(this.userEncryptionKey, e.toString()));
      return this.decryptedUserMap[e];
    } catch {
      reportError(_$$e.UNOWNED, Error(`Failed to decrypt encrypted user: ${e}`));
      this.callEventCallback?.($E.ERROR);
    }
  }
  async setMicrophonePermissions() {
    if (desktopAPIInstance) {
      this._microphonePermissionDenied = !(await desktopAPIInstance.requestMicrophonePermission());
      return;
    }
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: !0,
        video: !1
      });
      this._microphonePermissionDenied = !1;
    } catch (e) {
      this._microphonePermissionDenied = !0;
    }
  }
  get microphonePermissionDenied() {
    return this._microphonePermissionDenied;
  }
};
I.instance = null;
export let $$S0 = I;
export const h = $$S0;
export const q = $$y1;