import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { R } from '../905/994802'

export enum BlockReasonType {
  ExistingExperience = 'ExistingExperience',
  HigherPriExperience = 'HigherPriExperience',
  ExperimentCheckFail = 'ExperimentCheckFail',
  RuleFail = 'RuleFail',
  LifecycleCheckFail = 'LifecycleCheckFail',
}

export enum ChannelID {
  Overlay = 'Overlay',
}

export class Rule {
  constructor(public name: string, public description: string, private ruleFn: (context: any, experience: any) => boolean) {}

  execute(context: any, experience: any): boolean {
    return this.ruleFn(context, experience)
  }
}

function batchExecution(fn: (...args: any[]) => void) {
  let batch: any[][] = []
  return (...args: any[]) => {
    if (batch.length === 0) {
      setTimeout(() => {
        const currentBatch = batch
        batch = []
        currentBatch.forEach((batchArgs) => {
          fn(...batchArgs)
        })
      }, 0)
    }
    batch.push(args)
  }
}

export class ExperienceManager {
  private channels: any
  private batchNumber = 0
  private experienceMap = new Map<string, any>()

  public runExperiencesForChannel: (channelId: string) => void

  constructor(channels: any) {
    this.channels = channels
    this.runExperiencesForChannel = batchExecution((channelId) => {
      R({
        type: 'internal',
        name: 'run_experiences_for_channel',
        properties: { channelId },
      }, 'trace')

      const channel = this.channels[channelId]
      this.batchNumber += 1
      if (channel?.currentExperience == null) {
        const experience = this.getExperienceForChannel(channelId)
        if (experience != null && channel != null) {
          channel.currentExperience = experience
          experience.onShow(this.batchNumber)
          this.removeBlockedExperiencesForChannel(channel, BlockReasonType.HigherPriExperience)
        }
      }
      else {
        this.removeBlockedExperiencesForChannel(channel, BlockReasonType.ExistingExperience)
      }
    })
  }

  queueExperience(experience: any) {
    const { channelID } = experience
    const channel = this.channels[channelID]
    const isAlreadyQueued = !!channel?.queuedExperiences.some(exp => exp.id === experience.id) || channel?.currentExperience?.id === experience.id

    R({
      type: 'internal',
      name: 'queue_experience',
      properties: {
        experienceId: experience.id,
        isAlreadyQueued,
      },
    }, 'trace')

    if (!isAlreadyQueued) {
      this.experienceMap.set(experience.id, experience)
      channel?.queuedExperiences.push(experience)
      this.runExperiencesForChannel(channelID)
    }
  }

  completeExperience(experienceId: string) {
    const experience = this.experienceMap.get(experienceId)
    if (experience == null)
      return

    R({
      type: 'internal',
      name: 'complete_experience',
      properties: { experienceId },
    }, 'trace')

    const channel = this.channels[experience.channelID]
    if (channel?.currentExperience?.id === experienceId) {
      channel.currentExperience = undefined
      this.experienceMap.delete(experienceId)
      this.runExperiencesForChannel(channel.id)
    }
    else {
      reportError(ServiceCategories.GROWTH_PLATFORM, new Error(`completeExperience called when experience is not current: ${experienceId}`))
    }
  }

  dequeueExperience(experienceId: string) {
    const experience = this.experienceMap.get(experienceId)
    if (experience == null)
      return

    R({
      type: 'internal',
      name: 'dequeue_experience',
      properties: { experienceId },
    }, 'trace')

    const channel = this.channels[experience.channelID]
    if (channel) {
      if (channel.queuedExperiences.some(exp => exp.id === experienceId)) {
        this.experienceMap.delete(experienceId)
      }
      channel.queuedExperiences = channel.queuedExperiences.filter(exp => exp.id !== experienceId)
    }
  }

  getExperienceForChannel(channelId: string): any | undefined {
    R({
      type: 'internal',
      name: 'get_experience_for_channel',
      properties: { channelId },
    }, 'trace')

    const channel = this.channels[channelId]
    if (channel != null) {
      channel.queuedExperiences.sort((a: any, b: any) => b.priority - a.priority)

      let experience = channel.queuedExperiences.shift()
      while (experience != null) {
        const validateRules = (rules: Rule[]) => (context: any, exp: any) => {
          for (const rule of rules) {
            if (!rule.execute(context, exp)) {
              return { pass: false, rule }
            }
          }
          return { pass: true, rule: undefined }
        }

        const ruleResult = validateRules(channel.getRules())(channel.getContext(), experience)

        if (!ruleResult.pass) {
          experience.onBlocked({
            reasonType: BlockReasonType.RuleFail,
            rule: ruleResult.rule,
          })
          experience = channel.queuedExperiences.shift()
          continue
        }

        let postCheckResult = null
        for (const check of experience.postChecks) {
          postCheckResult = check()
          if (postCheckResult)
            break
        }

        if (postCheckResult == null) {
          break // found a valid experience
        }

        experience.onBlocked(postCheckResult)
        experience = channel.queuedExperiences.shift()
      }
      return experience
    }
    return undefined
  }

  removeBlockedExperiencesForChannel(channel: any, reasonType: BlockReasonType) {
    R({
      type: 'internal',
      name: 'remove_blocked_experiences',
      properties: { channelId: channel.id },
    }, 'trace')

    const { currentExperience } = channel
    if (currentExperience) {
      const remainingQueue: any[] = []
      channel.queuedExperiences.forEach((exp: any) => {
        exp.onBlocked({
          reasonType,
          blocker: currentExperience,
        })
        if (exp.queueOnBlock) {
          remainingQueue.push(exp)
        }
        else {
          this.experienceMap.delete(exp.id)
        }
      })
      channel.queuedExperiences = remainingQueue
    }
  }

  getImmutableChannels() {
    return JSON.parse(JSON.stringify(this.channels))
  }
}

export class OverlayManager {
  private overlayMap = new Map<string, any>()
  private loadMap = new PriorityMap()
  private showQueue: any[] = []

  public showOverlay: (overlayId: string, showFn: (result: any) => void) => void

  constructor() {
    this.showOverlay = batchExecution((overlayId, showFn) => {
      const overlay = this.overlayMap.get(overlayId)
      if (overlay && overlay.queryResult.status !== 'loading') {
        const show = (showResult: any) => {
          this.debugLog('Showing overlay: ', overlayId)
          showFn(showResult)
          this.removeOverlay(overlayId, false)
        }

        const maxPriorityLoading = this.loadMap.getMax()
        if (maxPriorityLoading && overlay.priority < maxPriorityLoading.priority) {
          this.showQueue.push({
            overlay,
            show,
            startTime: performance.now(),
          })
          R({
            type: 'paused',
            name: 'higher_priority_overlay_loading',
            properties: {
              overlayId,
              higherPriorityOverlayId: maxPriorityLoading.id,
            },
          }, 'debug')
        }
        else {
          show({ didNotQueue: true })
          this.drainQueue()
        }
      }
    })
  }

  updateOverlay(overlay: any) {
    this.debugLog('Updating overlay: ', overlay.id, overlay.queryResult)
    const { id, queryResult } = overlay
    this.overlayMap.set(id, overlay)
    switch (queryResult.status) {
      case 'loading':
        this.loadMap.set(overlay.id, overlay)
        break
      case 'loaded':
        this.loadMap.delete(id)
        break
      case 'errors':
      case 'disabled':
        this.removeOverlay(id)
    }
  }

  removeOverlay(overlayId: string, drain = true) {
    this.debugLog('Removing overlay: ', overlayId)
    this.overlayMap.delete(overlayId)
    this.loadMap.delete(overlayId)
    if (drain) {
      this.drainQueue()
    }
  }

  drainQueue() {
    this.debugLog('Draining the queued show calls')
    const maxPriorityLoading = this.loadMap.getMax()
    const toShow = this.showQueue.filter(item => !maxPriorityLoading || item.overlay.priority >= maxPriorityLoading.priority)
    this.showQueue = this.showQueue.filter(item => maxPriorityLoading && item.overlay.priority < maxPriorityLoading.priority)

    toShow.forEach((item) => {
      const queueDuration = performance.now() - item.startTime
      item.show({ queueDuration })
      R({
        type: 'resumed',
        name: 'higher_priority_overlay_loaded',
        properties: {
          overlayId: item.overlay.id,
          queueDurationMs: queueDuration,
        },
      }, 'debug')
    })
  }

  debugLog(..._args: any[]) {}

  getImmutableLoadingOverlays() {
    return JSON.parse(JSON.stringify(Array.from(this.loadMap.items.values())))
  }

  getImmutableQueuedOverlays() {
    return JSON.parse(JSON.stringify(this.showQueue.map(item => item.overlay)))
  }
}

class PriorityMap {
  private maxPriItem: any = null
  public items = new Map<string, any>()

  set(key: string, item: any) {
    this.items.set(key, item)
    if (this.maxPriItem == null || item.priority > this.maxPriItem.priority) {
      this.maxPriItem = item
    }
  }

  has(key: string): boolean {
    return this.items.has(key)
  }

  delete(key: string): boolean {
    const deleted = this.items.delete(key)
    if (deleted && this.maxPriItem?.id === key) {
      this.updateMaxPriItem()
    }
    return deleted
  }

  getMax(): any {
    return this.maxPriItem
  }

  private updateMaxPriItem() {
    let maxItem: any = null
    for (const item of this.items.values()) {
      if (maxItem == null || item.priority > maxItem.priority) {
        maxItem = item
      }
    }
    this.maxPriItem = maxItem
  }
}

export const oE = BlockReasonType
export const FQ = ChannelID
export const Z3 = OverlayManager
export const Oi = ExperienceManager
export const jO = Rule
