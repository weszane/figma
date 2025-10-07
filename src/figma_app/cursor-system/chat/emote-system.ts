/**
 * Emote system for chat reactions and background effects
 */

import { buildStaticUrl, buildUploadUrl } from '../../169182'
import { multiplayerSessionManager } from '../../../905/977824'
import { BackgroundEffectType } from '../constants'

export interface EmoteKeywordMatch {
  key: string
  background: BackgroundEffectType
}

export interface EmoteReaction {
  url: string
  keywords: string[]
}

/**
 * Manages emote reactions and background effects triggered by chat keywords
 */
export class EmoteSystem {
   readonly backgroundEffectKeywords = new Map<string, BackgroundEffectType>([
    ['happy birthday', BackgroundEffectType.PINK_GRADIENT],
    ['bday', BackgroundEffectType.PINK_GRADIENT],
    ['hbd', BackgroundEffectType.PINK_GRADIENT],
    ['fire', BackgroundEffectType.ORANGE_GRADIENT],
    ['fiire', BackgroundEffectType.ORANGE_GRADIENT],
    ['fiiire', BackgroundEffectType.ORANGE_GRADIENT],
    ['fiiiire', BackgroundEffectType.ORANGE_GRADIENT],
    ['lit', BackgroundEffectType.ORANGE_GRADIENT],
    ['heat', BackgroundEffectType.ORANGE_GRADIENT],
    ['hot', BackgroundEffectType.ORANGE_GRADIENT],
    ['spicy', BackgroundEffectType.ORANGE_GRADIENT],
    ['lowkey', BackgroundEffectType.GRAY_BACKGROUND],
    ['slick', BackgroundEffectType.GLARE_ANIMATION],
    ['this is clean', BackgroundEffectType.GLARE_ANIMATION],
    ['this clean', BackgroundEffectType.GLARE_ANIMATION],
    ['cleann', BackgroundEffectType.GLARE_ANIMATION],
    ['sharp', BackgroundEffectType.GLARE_ANIMATION],
    ['immaculate', BackgroundEffectType.GLARE_ANIMATION],
    ['pristine', BackgroundEffectType.GLARE_ANIMATION],
    ['polished', BackgroundEffectType.GLARE_ANIMATION],
    ['spotless', BackgroundEffectType.GLARE_ANIMATION],
    ['shiny', BackgroundEffectType.GLARE_ANIMATION],
  ])

   readonly emoteReactions: EmoteReaction[] = [
    {
      url: buildUploadUrl('a83de90bf34495081ce2e8bcaf28d1d2c16e5186'),
      keywords: [
        'lol',
        'lmao',
        'rofl',
        'lmfao',
        'hehe',
        'haha',
        'sksk',
        'cryingg',
        'dyingg',
        'so funny',
        'rotfl',
      ],
    },
    {
      url: buildUploadUrl('d1e0d7ed5e1aa13e8854dbd88b9fd650377a02f2'),
      keywords: [
        'fire',
        'fiire',
        'fiiire',
        'fiiiire',
        'spicy',
        'oh snap',
        'dope',
        'hot',
        'heat',
        'so good',
        'siick',
        'siiick',
        'siiiick',
        'on point',
        'rad',
        'sweeet',
        'sweeeet',
        'wagmi',
        'wgmi',
        'gmi',
      ],
    },
    {
      url: buildUploadUrl('0606e9d967b5abb6d9a2853c2fff589f2ec2fc05'),
      keywords: [
        'hey',
        'hiya',
        'heyo',
        'hello',
        'howdy',
        'whats up',
        "what's up",
        'good morning',
        'gm',
        'greetings',
        'bye',
        'later',
        'ciao',
        'see ya',
        'cya',
        'wave',
      ],
    },
    {
      url: buildUploadUrl('ffd0635e8f9322352eff0c15411ac0b536b98d87'),
      keywords: [
        'taking a look',
        'sus',
        'let me look',
        'let me see',
        'lemme see',
        'i see what you did there',
      ],
    },
    {
      url: buildUploadUrl('ff5be810b821d264cc2c95f665d24a867c34e587'),
      keywords: [
        'gorgeous',
        'stunning',
        'love',
        'loove',
        'looove',
        'loooove',
        'looooove',
        'luv',
        'woww',
        'awww',
        '<3',
        'yass',
        'cute',
        'amazingg',
        'heart eyes',
        'beautiful',
        "my eyeballs are literally two giant hearts right now and i couldn't be happier",
        'adorable',
      ],
    },
    {
      url: buildUploadUrl('78f60a21d2616c2a24c7645d8636dec855e48ffb'),
      keywords: [
        'ngmi',
        'bummer',
        'sad face',
        'uh oh',
        ':(',
        'noo',
        'oh no',
        'sorry to hear that',
        'rip',
        'rats',
        'big sad',
        'tragic',
        'fail',
        'womp',
        'that sucks',
      ],
    },
    {
      url: buildUploadUrl('1429964104bceac90c5c8e731ce4cc50b27e2797'),
      keywords: [
        'wtf',
        'whoa',
        'no way',
        ':O',
        'woah',
        'whaat',
        'whaaat',
        'shook',
        'shooketh',
        'omg',
        'omfg',
        'speechless',
        'oh snap',
        'surprised',
      ],
    },
    {
      url: buildUploadUrl('e15fa4fbba4b88b4f1f04ba64bb12abf12bcbc6c'),
      keywords: ['gift', 'hbd', 'bday', 'birthday'],
    },
    {
      url: buildUploadUrl('778eea842ed4020f6209e97c77abcd84984e5c94'),
      keywords: ['cool', 'coool', 'swag', 'chill'],
    },
    {
      url: buildStaticUrl('emoji/5/noto/medium/1f410.png'),
      keywords: ['goat'],
    },
  ]

   readonly keywordToReactionUrl = new Map<string, string>()

  constructor() {
    this.buildKeywordMap()
  }

  /**
   * Build internal keyword to reaction URL mapping
   */
   buildKeywordMap(): void {
    this.emoteReactions.forEach((reaction) => {
      reaction.keywords.forEach((keyword) => {
        this.keywordToReactionUrl.set(keyword, reaction.url)
      })
    })
  }

  /**
   * Check if text ends with keyword and is a complete word
   */
   isCompleteKeywordMatch(text: string, keyword: string): boolean {
    const normalizedText = text.toLowerCase()
    const precedingChar = normalizedText.charAt(normalizedText.length - keyword.length - 1)
    const isWordBoundary = !precedingChar.length || !/[A-Z]/i.test(precedingChar)

    return normalizedText.endsWith(keyword) && isWordBoundary
  }

  /**
   * Find background effect for given text
   */
  findBackgroundEffect(text: string): EmoteKeywordMatch | null {
    for (const [key, background] of this.backgroundEffectKeywords) {
      if (this.isCompleteKeywordMatch(text, key)) {
        return { key, background }
      }
    }
    return null
  }

  /**
   * Send reaction emotes for matching keywords
   */
  sendReactionEmotes(text: string, animationType: any, trackEvent: (event: string, data?: any) => void): void {
    for (const keyword of this.keywordToReactionUrl.keys()) {
      if (this.isCompleteKeywordMatch(text, keyword)) {
        this.sendMultipleReactions(keyword, trackEvent)
      }
    }
  }

  /**
   * Send multiple reactions for a keyword (creates burst effect)
   */
   sendMultipleReactions(keyword: string, trackEvent: (event: string, data?: any) => void): void {
    const reactionUrl = this.keywordToReactionUrl.get(keyword)
    if (!reactionUrl)
      return

    // Send multiple reactions for burst effect
    for (let i = 0; i < 6; i++) {
      multiplayerSessionManager.sendReaction(reactionUrl)
    }

    trackEvent('cursor_chat_emote_triggered', { keyword })
  }

  /**
   * Get all available background effect keywords
   */
  getBackgroundEffectKeywords(): string[] {
    return Array.from(this.backgroundEffectKeywords.keys())
  }

  /**
   * Get all available reaction keywords
   */
  getReactionKeywords(): string[] {
    return Array.from(this.keywordToReactionUrl.keys())
  }

  /**
   * Get reaction URL for keyword
   */
  getReactionUrl(keyword: string): string | null {
    return this.keywordToReactionUrl.get(keyword) || null
  }

  /**
   * Check if keyword triggers background effect
   */
  hasBackgroundEffect(keyword: string): boolean {
    return this.backgroundEffectKeywords.has(keyword)
  }

  /**
   * Check if keyword triggers reaction emote
   */
  hasReactionEmote(keyword: string): boolean {
    return this.keywordToReactionUrl.has(keyword)
  }

  /**
   * Get all emote reactions
   */
  getAllEmoteReactions(): EmoteReaction[] {
    return [...this.emoteReactions]
  }

  /**
   * Add custom emote reaction
   */
  addCustomEmoteReaction(reaction: EmoteReaction): void {
    this.emoteReactions.push(reaction)
    reaction.keywords.forEach((keyword) => {
      this.keywordToReactionUrl.set(keyword, reaction.url)
    })
  }

  /**
   * Remove emote reaction by URL
   */
  removeEmoteReaction(url: string): void {
    const index = this.emoteReactions.findIndex(reaction => reaction.url === url)
    if (index >= 0) {
      const reaction = this.emoteReactions[index]
      this.emoteReactions.splice(index, 1)

      // Remove keywords from map
      reaction.keywords.forEach((keyword) => {
        this.keywordToReactionUrl.delete(keyword)
      })
    }
  }
}
