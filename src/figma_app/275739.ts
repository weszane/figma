/* eslint-disable no-useless-catch */
import type { ReactiveValue } from "../905/199441"
import { reportError } from "../905/11"
import { b as _$$b, b as CaptionQueue } from "../905/154029"
import { ServiceCategories } from "../905/165054"
import { createReactiveValue } from "../905/199441"
import { T as _$$T, T as CaptionStream } from "../905/312425"
import { trackEventAnalytics } from "../905/449184"
import { getFeatureFlags } from "../905/601108"
import { multiplayerSessionManager } from "../905/977824"
import { $E } from "../figma_app/120529"
import { WO } from "../figma_app/122682"
import { We } from "../figma_app/165623"
import { buildUploadUrl, getInitialOptions } from "../figma_app/169182"
import { trackFileEvent } from "../figma_app/314264"
import { BrowserInfo } from "../figma_app/778880"
import { desktopAPIInstance } from "../figma_app/876459"

// Define types for better type safety
interface Device {
  deviceId: string
  label?: string
}
interface VolumeData {
  isMuted: boolean
  volumeLevel: number
}
interface JoinOptions {
  appId: string
  callId: string
  token: string
  callUserId: number
  userId: string
  encryptionKey: string
  userEncryptionKey: string
  setParticipantIdsCallback?: (ids: string[]) => void
  callEventCallback?: (event: string, data?: any) => void
  store: any // Assuming Redux store type
  fileKey: string
}
interface AgoraRTCInstance {
  createClient: (config: any) => any
  createMicrophoneAudioTrack: (config: any) => Promise<any>
  getMicrophones: (filter?: any) => Promise<Device[]>
  getPlaybackDevices: (filter?: any) => Promise<Device[]>
  setLogLevel: (level: number) => void
  setArea: (areas: string[]) => void
  setParameter: (key: string, value: any) => void
  checkSystemRequirements: () => boolean
  onMicrophoneChanged?: (event: any) => void
  onPlaybackDeviceChanged?: (event: any) => void
}
const isSpeakingThreshold = (level: number) => level > 0.1
export const volumeThreshold = 0.05
const poemLines = `Something there is that doesn't love a wall,
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
‘Stay where you are until our backs are turned!’
We wear our fingers rough with handling them.
Oh, just another kind of out-door game,
One on a side. It comes to little more:
There where it is we do not need the wall:
He is all pine and I am apple orchard.
My apple trees will never get across
And eat the cones under his pines, I tell him.
He only says, ‘Good fences make good neighbors.’
Spring is the mischief in me, and I wonder
If I could put a notion in his head:
‘Why do they make good neighbors? Isn't it
Where there are cows? But here there are no cows.
Before I built a wall I'd ask to know
What I was walling in or walling out,
And to whom I was like to give offense.
Something there is that doesn't love a wall,
That wants it down.’ I could say ‘Elves’ to him,
But it's not elves exactly, and I'd rather
He said it for himself. I see him there
Bringing a stone grasped firmly by the top
In each hand, like an old-stone savage armed.
He moves in darkness as it seems to me,
Not of woods only and the shade of trees.
He will not go behind his father's saying,
And he likes having thought of it so well
He says again, ‘Good fences make good neighbors.’`.split(/\n/).map(line => line.trim())
let poemIndex = 0
export class VoiceCallManager {
  isMuted: boolean = false
  handlingTokenExpiration: boolean = false
  decryptedUserMap: Record<number, string> = {}
  averageRecentVoiceLevel: Record<string, number> = {}
  volumeDataInterval: any | null = null
  micStateInterval: any | null = null
  streamingAudioForCaptions: boolean = false
  //  microphonePermissionDenied: boolean = true
  captionsToggleEnabled: boolean = false
  volumeLevelsStore: ReactiveValue<Record<string, VolumeData>>
  activeSpeakerIdStore: ReactiveValue<string[]>
  recentlySpokeIdStore: ReactiveValue<string[]>
  setParticipantIdsCallback?: (ids: string[]) => void
  userId?: string
  userEncryptionKey?: string
  callEventCallback?: (event: string, data?: any) => void
  audioCaptionQueues = new CaptionQueue()
  audioCaptionStream = new CaptionStream()
  AgoraRTC: AgoraRTCInstance
  client: any // Agora client instance
  localAudioTrack: any // ILocalAudioTrack
  unpublishedLocalAudioTrack: any // ILocalAudioTrack
  microphone: Device | null = null
  playbackDevice: Device | null = null
  constructor(agoraRTC: AgoraRTCInstance) {
    this.volumeLevelsStore = createReactiveValue({})
    this.activeSpeakerIdStore = createReactiveValue(null)
    this.recentlySpokeIdStore = createReactiveValue(null)

    this.AgoraRTC = agoraRTC
    this.AgoraRTC.setLogLevel(getFeatureFlags().voice_agora_debug_level_logs ? 0 : 3)
    this.AgoraRTC.setArea(["OVERSEA"])
    this.attachDeviceListeners(agoraRTC)

    // Debug captions: cycle through poem lines if enabled
    if (getFeatureFlags().voice_debug_captions_enabled) {
      setTimeout(() => {
        setInterval(() => {
          this.audioCaptionStream.addNewCaption(this.userId || "dummyUserId", Date.now(), poemLines[poemIndex++ % poemLines.length])
        }, 1501)
      }, 1500)
    }
  }

  // Device management
  async setMicrophone(device: Device) {
    try {
      this.unpublishedLocalAudioTrack?.setDevice(device.deviceId)
      await this.localAudioTrack?.setDevice(device.deviceId)
      this.microphone = device
    }
    catch (error) {
      throw error
    }
  }

  async setPlaybackDevice(device: Device): Promise<void> {
    try {
      this.client?.remoteUsers.forEach(user => user.audioTrack?.setPlaybackDevice(device.deviceId))
      this.playbackDevice = device
    }
    catch (error) {
      throw error
    }
  }

  getMicrophones(filter?: any): Promise<Device[]> {
    return this.AgoraRTC.getMicrophones(filter)
  }

  getPlaybackDevices(filter?: any): Promise<Device[]> {
    return this.AgoraRTC?.getPlaybackDevices(filter)
  }

  async currentMicrophone(): Promise<Device | undefined> {
    return this.microphone || (await this.getMicrophones())?.[0]
  }

  async currentPlaybackDevice(): Promise<Device | undefined> {
    return this.playbackDevice || (await this.getPlaybackDevices())?.[0]
  }

  // Participant management
  async getParticipantIds(): Promise<string[]> {
    if (!this.client || !this.userId) {
      throw new Error("Client not yet instantiated")
    }
    const ids: string[] = []
    for (const user of this.client.remoteUsers) {
      const decryptedId = await this.getDecryptedUserId(user.uid)
      if (decryptedId) {
        ids.push(decryptedId)
      }
    }
    ids.push(this.userId)
    return ids
  }

  // Polling for mic state
  startPollingMicState(): void {
    if (desktopAPIInstance) {
      if (this.microphonePermissionDenied) {
        desktopAPIInstance.setUsingMicrophone(false)
      }
      this.micStateInterval = setInterval(() => {
        if (this.client) {
          desktopAPIInstance?.setIsInVoiceCall(this.client.connectionState !== "DISCONNECTED")
          desktopAPIInstance?.setUsingMicrophone(!!this.isPublishingLocalTrack())
        }
      }, 5000)
    }
  }

  stopPollingMicState(): void {
    if (this.micStateInterval) {
      clearInterval(this.micStateInterval)
      this.micStateInterval = null
    }
  }

  isPublishingLocalTrack(): boolean {
    return this.client?.localTracks.some(track => track.getTrackId() === this.localAudioTrack?.getTrackId())
  }

  // Polling for volume data
  startPollingVolumeData(): void {
    if (!this.volumeDataInterval) {
      this.volumeDataInterval = setInterval(async () => {
        if (!this.client || !this.userId)
          return

        // Decay existing levels
        for (const userId in this.averageRecentVoiceLevel) {
          this.averageRecentVoiceLevel[userId] *= 0.8
        }
        const volumeData: Record<string, VolumeData> = {}
        for (const user of this.client.remoteUsers) {
          const decryptedId = await this.getDecryptedUserId(user.uid)
          if (!decryptedId)
            continue
          const volumeLevel = user.audioTrack?.getVolumeLevel() || 0
          const currentAverage = this.averageRecentVoiceLevel[decryptedId] || 0
          this.averageRecentVoiceLevel[decryptedId] = currentAverage + volumeLevel
          volumeData[decryptedId] = {
            isMuted: !user.audioTrack,
            volumeLevel,
          }
        }

        // Local user
        const localVolume = this.localAudioTrack?.getVolumeLevel() || 0
        this.averageRecentVoiceLevel[this.userId] = this.isMuted ? 0 : (this.averageRecentVoiceLevel[this.userId] || 0) + localVolume
        volumeData[this.userId] = {
          isMuted: this.isMuted,
          volumeLevel: localVolume,
        }
        this.checkLocalVolumeLevels()
        this.volumeLevelsStore.set(volumeData)
        this.updateActiveSpeakers()
        this.updateRecentlySpoke()
      }, 200)
    }
  }

  stopPollingVolumeData(): void {
    if (this.volumeDataInterval) {
      clearInterval(this.volumeDataInterval)
      this.volumeDataInterval = null
    }
  }

  checkLocalVolumeLevels(): void {
    if (this.isMuted && this.unpublishedLocalAudioTrack && this.unpublishedLocalAudioTrack.getVolumeLevel() > 0.6) {
      this.callEventCallback?.($E.WARNING_MICROPHONE_LEVELS_HIGH_AND_MUTED)
    }
  }

  updateActiveSpeakers(): void {
    const activeSpeakers = Object.entries(this.averageRecentVoiceLevel).filter(([, level]) => level > volumeThreshold).sort(([, a], [, b]) => b - a).map(([id]) => id)
    this.activeSpeakerIdStore.set(activeSpeakers)
  }

  updateRecentlySpoke(): void {
    // Potential issue: Includes all users, even silent ones; consider filtering by threshold
    const recentlySpoke = Object.entries(this.averageRecentVoiceLevel).sort(([, a], [, b]) => b - a).map(([id]) => id)
    this.recentlySpokeIdStore.set(recentlySpoke)
  }

  onCallDisconnect(): void {
    multiplayerSessionManager.sendVoiceMetadata("")
    this.stopPollingVolumeData()
    desktopAPIInstance?.setIsInVoiceCall(false)
    desktopAPIInstance?.setUsingMicrophone(false)
    this.localAudioTrack?.setEnabled(false)
    this.unpublishedLocalAudioTrack?.setEnabled(false)
  }

  attachDeviceListeners(agoraRTC: AgoraRTCInstance): void {
    agoraRTC.onMicrophoneChanged = (event) => {
      if (this.microphone?.deviceId === event.device.deviceId && event.state === "INACTIVE") {
        this.getMicrophones().then((devices) => {
          this.microphone = devices.length > 0 ? devices[0] : null
        })
      }
    }
    agoraRTC.onPlaybackDeviceChanged = (event) => {
      if (this.playbackDevice?.deviceId === event.device.deviceId && event.state === "INACTIVE" && BrowserInfo.chrome) {
        this.getPlaybackDevices().then((devices) => {
          this.playbackDevice = devices.length > 0 ? devices[0] : null
        })
      }
    }
  }

  // Static methods for singleton
  static instance: VoiceCallManager | null = null
  static async createInstance(): Promise<void> {
    if (this.instance) {
      return Promise.resolve()
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.src = buildUploadUrl("0706b46bdc09a419282285b791ea1dd3c019ecd6")
      script.setAttribute("nonce", getInitialOptions().csp_nonce)
      script.onload = () => {
        const agoraRTC = (window as any).AgoraRTC
        this.instance = new VoiceCallManager(agoraRTC)
        resolve()
      }
      script.onerror = () => {
        reject(new Error("Provider audio script load error"))
      }
      document.body.appendChild(script)
    })
  }

  static getInstance(): VoiceCallManager | null {
    return this.instance
  }

  static leave(): void {
    this.instance?.leave()
  }

  // Join call
  async join(options: JoinOptions): Promise<void | Error> {
    const {
      appId,
      callId,
      token,
      callUserId,
      userId,
      encryptionKey,
      userEncryptionKey,
      setParticipantIdsCallback,
      callEventCallback,
      store,
      fileKey,
    } = options
    await this.setMicrophonePermissions()
    if (!this.getSystemCompatibility()) {
      throw new Error("System incompatible")
    }
    this.setParticipantIdsCallback = setParticipantIdsCallback
    this.userId = userId
    this.userEncryptionKey = userEncryptionKey
    this.callEventCallback = callEventCallback
    try {
      let codec = "vp8"
      if (BrowserInfo.safari && +BrowserInfo.version >= 13) {
        codec = "h264"
      }
      await this.client?.leave()
      this.client = this.AgoraRTC.createClient({
        mode: "live",
        codec,
      })
      this.AgoraRTC.setParameter("AUDIO_SOURCE_VOLUME_UPDATE_INTERVAL", 200)
      this.handlingTokenExpiration = false
      this.client.setEncryptionConfig("aes-256-xts", encryptionKey)
      this.attachClientListeners(callId, token, userId, encryptionKey, callEventCallback)
      await this.client.join(appId, callId, token, callUserId)
      desktopAPIInstance?.setIsInVoiceCall(true)
      await this.client.setClientRole("host")
      if (!this.microphonePermissionDenied) {
        this.localAudioTrack = await this.AgoraRTC.createMicrophoneAudioTrack({
          AEC: true,
          AGC: true,
          ANS: true,
          microphoneId: this.microphone?.deviceId,
        })
        this.unpublishedLocalAudioTrack = await this.AgoraRTC.createMicrophoneAudioTrack({
          AEC: true,
          AGC: true,
          ANS: true,
          microphoneId: this.microphone?.deviceId,
        })
      }
      if (this.localAudioTrack) {
        await this.client.publish(this.localAudioTrack)
      }
      await this.unmute()
    }
    catch (error: any) {
      trackEventAnalytics("Voice Call - Error", {
        callId,
        token,
        userId,
        encryptionKey,
        message: `${error.message}`,
        agora_exception: false,
        agora_recovery: false,
        join: true,
      }, {
        forwardToDatadog: true,
      })
      const leaveError = new Error(`Error joining call: ${error.message}`)
      VoiceCallManager.leave()
      return leaveError
    }
    finally {
      trackFileEvent("voice_user_joined", fileKey, store.getState(), {
        callId,
        userId,
        encryptionKey,
        captions_enabled: this.captionsToggleEnabled,
      })
      if (this.client?.connectionState !== "DISCONNECTED" || this.isPublishingLocalTrack()) {
        this.startPollingMicState()
      }
    }
  }

  get uid(): number | undefined {
    return this.client?.uid
  }

  async renewToken(token: string): Promise<void> {
    await this.client?.renewToken(token)
    this.handlingTokenExpiration = false
    trackEventAnalytics("Voice Call - Token Renewed", {
      token,
      userId: this.client?.uid && this.decryptedUserMap[this.client?.uid],
    })
  }

  async leave(): Promise<void> {
    await this.client?.leave()
    this.stopPollingMicState()
    this.audioCaptionQueues.clear()
    this.audioCaptionStream.clear()
  }

  async mute(): Promise<void> {
    await this.localAudioTrack?.setEnabled(false)
    this.audioCaptionQueues.removeTrack(this.userId, this.localAudioTrack?.getMediaStreamTrack())
    desktopAPIInstance?.setUsingMicrophone(false)
    this.isMuted = true
  }

  async unmute(): Promise<void> {
    await this.localAudioTrack?.setEnabled(true)
    if (WO() && this.streamingAudioForCaptions) {
      this.audioCaptionQueues.addTrack(this.userId, this.localAudioTrack?.getMediaStreamTrack())
    }
    desktopAPIInstance?.setUsingMicrophone(true)
    this.isMuted = false
  }

  streamAudioForCaptions(enabled: boolean): void {
    if (WO() && this.streamingAudioForCaptions !== enabled) {
      this.streamingAudioForCaptions = enabled
      this.audioCaptionQueues.clear()
      if (this.streamingAudioForCaptions) {
        this.client?.remoteUsers.forEach(async (user) => {
          const decryptedId = await this.getDecryptedUserId(user.uid)
          this.audioCaptionQueues.addTrack(decryptedId, user.audioTrack?.getMediaStreamTrack())
        })
        if (this.localAudioTrack && !this.isMuted) {
          this.audioCaptionQueues.addTrack(this.userId, this.localAudioTrack.getMediaStreamTrack())
        }
      }
    }
  }

  getSystemCompatibility(): boolean {
    return this.AgoraRTC.checkSystemRequirements()
  }

  isLocalUserSpeaking(): boolean {
    return !!this.userId && isSpeakingThreshold(this.averageRecentVoiceLevel[this.userId])
  }

  attachClientListeners(callId: string, token: string, userId: string, encryptionKey: string, callEventCallback?: (event: string, data?: any) => void): void {
    this.client?.removeAllListeners()
    this.client?.on("user-published", async (user, mediaType) => {
      await this.client?.subscribe(user, mediaType)
      if (mediaType === "audio") {
        const audioTrack = user.audioTrack || null
        audioTrack?.play()
        if (this.playbackDevice) {
          audioTrack?.setPlaybackDevice(this.playbackDevice.deviceId)
        }
        if (WO() && audioTrack && this.streamingAudioForCaptions) {
          const decryptedId = await this.getDecryptedUserId(user.uid)
          this.audioCaptionQueues.addTrack(decryptedId, audioTrack.getMediaStreamTrack())
        }
      }
    })
    this.client?.on("user-unpublished", async (user, mediaType) => {
      if (!desktopAPIInstance || mediaType !== "audio")
        return
      const decryptedId = await this.getDecryptedUserId(user.uid)
      if (!decryptedId)
        return
      const trackIds = new Set<string>()
      for (const remoteUser of this.client?.remoteUsers || []) {
        const remoteDecryptedId = await this.getDecryptedUserId(remoteUser.uid)
        const trackId = user.audioTrack?.getMediaStreamTrack().id
        if (remoteDecryptedId === decryptedId && trackId) {
          trackIds.add(trackId)
        }
      }
      this.audioCaptionQueues.removeUnpublishedTrack(decryptedId, trackIds)
    })
    let badQualityReported = true
    this.client?.on("network-quality", (quality) => {
      if (badQualityReported && (quality.downlinkNetworkQuality >= 4 || quality.uplinkNetworkQuality >= 4)) {
        trackEventAnalytics("Voice Call - Bad Call Quality", {
          callId,
          token,
          userId,
          encryptionKey,
          message: `Bad call quality detected. downlink = ${quality.downlinkNetworkQuality}, uplink = ${quality.uplinkNetworkQuality}`,
          agora_exception: false,
          agora_recovery: false,
          join: false,
        }, {
          forwardToDatadog: true,
        })
        badQualityReported = false
      }
      else {
        badQualityReported = true
      }
    })
    this.client?.on("user-joined", async (user) => {
      this.setParticipantIdsCallback?.(await this.getParticipantIds())
      const decryptedId = await this.getDecryptedUserId(user.uid)
      if (decryptedId !== this.userId) {
        callEventCallback?.($E.USER_JOINED, decryptedId)
      }
    })
    this.client?.on("user-left", async (user) => {
      this.setParticipantIdsCallback?.(await this.getParticipantIds())
      const decryptedId = await this.getDecryptedUserId(user.uid)
      if (decryptedId !== this.userId) {
        callEventCallback?.($E.USER_LEFT, decryptedId)
      }
    })
    this.client?.on("connection-state-change", async (state) => {
      let event: string | undefined
      switch (state) {
        case "CONNECTED":
          multiplayerSessionManager.sendVoiceMetadata(callId)
          this.setParticipantIdsCallback?.(await this.getParticipantIds())
          this.startPollingVolumeData()
          event = this.microphonePermissionDenied ? $E.CONNECTED_WITH_MIC_DISABLED : $E.CONNECTED
          break
        case "DISCONNECTED":
          this.onCallDisconnect()
          event = $E.DISCONNECTED
          break
        case "CONNECTING":
          event = $E.CONNECTING
          break
        case "DISCONNECTING":
          event = $E.DISCONNECTING
          break
        case "RECONNECTING":
          event = $E.RECONNECTING
          break
      }
      if (event) {
        callEventCallback?.(event)
      }
    })
    this.client?.on("exception", (exception) => {
      let event: string | undefined
      switch (exception.code) {
        case 2001:
          if (!this.microphonePermissionDenied) {
            event = $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW
          }
          break
        case 2002:
          event = $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW
          break
        case 2003:
          if (!this.microphonePermissionDenied) {
            event = $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW
          }
          break
        case 2005:
          event = $E.WARNING_RECV_AUDIO_DECODE_FAILED
          break
        case 4001:
          if (!this.microphonePermissionDenied) {
            event = $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER
          }
          break
        case 4002:
          event = $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER
          break
        case 4003:
          if (!this.microphonePermissionDenied) {
            event = $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW_RECOVER
          }
          break
        case 4005:
          event = $E.WARNING_RECV_AUDIO_DECODE_FAILED_RECOVER
          break
      }
      if (event) {
        callEventCallback?.(event)
      }
      if (exception.code >= 3000) {
        console.error(exception)
        trackEventAnalytics("Voice Call - Error", {
          callId,
          token,
          userId,
          encryptionKey,
          message: exception.msg,
          code: exception.code,
          agora_exception: false,
          agora_recovery: true,
          join: false,
        }, {
          forwardToDatadog: true,
        })
      }
      else {
        trackEventAnalytics("Voice Call - Error", {
          callId,
          token,
          userId,
          encryptionKey,
          message: exception.msg,
          code: exception.code,
          agora_exception: true,
          agora_recovery: false,
          join: false,
        }, {
          forwardToDatadog: true,
        })
      }
    })
    this.client?.on("token-privilege-will-expire", () => {
      if (!this.handlingTokenExpiration) {
        this.handlingTokenExpiration = true
        if (!this.client?.remoteUsers.length) {
          callEventCallback?.($E.CALL_INACTIVE)
          trackEventAnalytics("Voice Call - Token Will Expire", {
            callId,
            token,
            userId,
            encryptionKey,
            callInactive: true,
          })
          return
        }
        callEventCallback?.($E.TOKEN_WILL_EXPIRE_DETECT_MIC_INPUT)
        trackEventAnalytics("Voice Call - Token Will Expire", {
          callId,
          token,
          userId,
          encryptionKey,
        })
      }
    })
    this.client?.on("token-privilege-did-expire", () => {
      callEventCallback?.($E.TOKEN_EXPIRED)
      trackEventAnalytics("Voice Call - Token Did Expire", {
        callId,
        token,
        userId,
        encryptionKey,
      })
    })
  }

  async getDecryptedUserId(uid: number): Promise<string | undefined> {
    try {
      if (!this.decryptedUserMap[uid]) {
        this.decryptedUserMap[uid] = await We(this.userEncryptionKey!, uid.toString())
      }
      return this.decryptedUserMap[uid]
    }
    catch {
      reportError(ServiceCategories.UNOWNED, new Error(`Failed to decrypt encrypted user: ${uid}`))
      this.callEventCallback?.($E.ERROR)
    }
  }

  async setMicrophonePermissions(): Promise<void> {
    if (desktopAPIInstance) {
      this.microphonePermissionDenied = !(await desktopAPIInstance.requestMicrophonePermission())
      return
    }
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      })
      this.microphonePermissionDenied = false
    }
    catch {
      this.microphonePermissionDenied = true
    }
  }

  microphonePermissionDenied = false
}
VoiceCallManager.instance = null
export let $$S0 = VoiceCallManager
export const h = VoiceCallManager
export const q = volumeThreshold
