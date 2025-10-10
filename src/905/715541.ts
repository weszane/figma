// Renamed variables, added types, simplified control flow, improved readability
import { getDictionaryConfig, waitForCondition } from "../905/461516"
import { processTextForSpellCheck } from "../905/627729"

// Enum for module loading state
enum ModuleLoadState {
  NOT_STARTED = 0,
  LOADING = 1,
  FINISHED = 2,
}

// Type definitions
interface DictionaryConfig {
  affURL: string
  dicURL: string
}

interface SpellCheckResult {
  start: number
  end: number
}

interface ProcessedText {
  index: number
  text: string
  skipSpellCheck?: boolean
}

interface WorkerMessage {
  type: string
  messageId?: number
  results?: SpellCheckResult[]
}

interface SpellCheckerWorker extends Worker {
  onmessage: (event: MessageEvent<WorkerMessage>) => void
}

// Module loading state
let hunspellModule: any
let spellCheckWorker: SpellCheckerWorker | null = null
let moduleLoadState: ModuleLoadState = ModuleLoadState.NOT_STARTED

/**
 * Loads the hunspell module with proper state management
 */
async function loadHunspellModule(fallbackModule?: any): Promise<any> {
  // If currently loading, wait until finished
  if (moduleLoadState === ModuleLoadState.LOADING) {
    await waitForCondition(() => moduleLoadState !== ModuleLoadState.LOADING, 50)
  }
  else {
    // If not loaded yet, start loading
    if (!hunspellModule) {
      moduleLoadState = ModuleLoadState.LOADING
      hunspellModule = fallbackModule || (await import('hunspell-asm')).loadModule()
    }
    moduleLoadState = ModuleLoadState.FINISHED
  }

  return hunspellModule
}

/**
 * Mounts a buffer from a URL to the hunspell module
 */
async function mountBufferFromUrl(module: any, url: string): Promise<any> {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const uint8Array = new Uint8Array(arrayBuffer)
  const fileName = url.split("/").pop() || "dictionary"
  return module.mountBuffer(uint8Array, fileName)
}

/**
 * Creates a hunspell instance with affix and dictionary files
 */
async function createHunspellInstance(getModule: () => Promise<any>, affUrl: string, dicUrl: string): Promise<any> {
  const module = await getModule()
  const [affBuffer, dicBuffer] = await Promise.all([
    mountBufferFromUrl(module, affUrl),
    mountBufferFromUrl(module, dicUrl),
  ])
  return module.create(affBuffer, dicBuffer)
}

/**
 * Gets hunspell instance for a specific language
 */
async function getHunspellInstanceForLanguage(getModule: () => Promise<any>, language: string): Promise<any> {
  const config: DictionaryConfig = getDictionaryConfig(language)
  return await createHunspellInstance(getModule, config.affURL, config.dicURL)
}

// Dictionary instance management
let currentDictionary: any = null
let currentLanguage: string | null = null
let isInitializing: boolean = false

/**
 * Gets or creates a dictionary instance for the specified language
 */
async function getOrCreateDictionary(language: string): Promise<any> {
  // Wait if another initialization is in progress
  await waitForCondition(() =>
    (!!isInitializing && (!isInitializing || currentDictionary === null))
    || (isInitializing = true, false))

  // Reset if language changed
  if (currentLanguage !== language) {
    disposeCurrentDictionary()
  }

  // Create new dictionary if needed
  if (currentDictionary === null) {
    const module = await loadHunspellModule()
    currentDictionary = await getHunspellInstanceForLanguage(() => Promise.resolve(module), language)
    currentLanguage = language
  }

  return currentDictionary
}

/**
 * Disposes the current dictionary instance
 */
function disposeCurrentDictionary(): void {
  currentDictionary?.dispose()
  currentDictionary = null
  currentLanguage = null
  isInitializing = false
}

/**
 * Adds words to the dictionary
 */
async function addWordsToDictionary(language: string, words: string[]): Promise<void> {
  const dictionary = await getOrCreateDictionary(language)
  for (const word of words) {
    dictionary?.addWord(word)
  }
}

/**
 * Checks spelling of text and returns misspelled ranges
 */
async function checkSpelling(text: string, language: string): Promise<SpellCheckResult[]> {
  const dictionary = await getOrCreateDictionary(language)
  const processedTexts: ProcessedText[] = processTextForSpellCheck(text)
  const results: SpellCheckResult[] = []

  for (const item of processedTexts) {
    if (!dictionary || item.skipSpellCheck || dictionary.spell(item.text)) {
      continue
    }

    results.push({
      start: item.index,
      end: item.index + item.text.length,
    })
  }

  return results
}

/**
 * Gets spelling suggestions for a word
 */
async function getSuggestions(word: string, language: string): Promise<string[]> {
  const dictionary = await getOrCreateDictionary(language)
  return dictionary?.suggest(word) || []
}

/**
 * Adds multiple words to the dictionary
 */
async function addMultipleWords(words: string[], language: string): Promise<void> {
  const dictionary = await getOrCreateDictionary(language)
  for (const word of words) {
    dictionary?.addWord(word)
  }
}

/**
 * Gets or creates the spell check worker
 * Origin: $$I1
 */
export function getSpellCheckWorker(): SpellCheckerWorker | null {
  if (!spellCheckWorker) {
    spellCheckWorker = new Worker(Fig.spellCheckWorkerURL) as SpellCheckerWorker
    spellCheckWorker.onmessage = (event: MessageEvent<WorkerMessage>) => {
      if (event.data.type === "SPELL_CHECK_RESULT") {
        const messageId = event.data.messageId
        const callback = pendingMessages[messageId]
        if (callback) {
          callback(event.data.results)
          delete pendingMessages[messageId]
        }
      }
    }
  }
  return spellCheckWorker
}

// Message handling for worker communication
let nextMessageId: number = 0
const pendingMessages: Record<number, (results?: any) => void> = {}

/**
 * Sends a message to worker and waits for response
 * Origin: S
 */
function sendMessageToWorker<T>(worker: Worker, message: any): Promise<T> {
  return new Promise((resolve) => {
    const messageId = nextMessageId++
    pendingMessages[messageId] = resolve

    worker.postMessage({
      ...message,
      messageId,
    })
  })
}

/**
 * Hunspell spell checker implementation
 * Origin: $$w0
 */
export class HunspellSpellChecker {
  public name: string = "Hunspell"
  public language: string = ""

  /**
   * Initializes the spell checker with a language and ignored words
   */
  async initialize(language: string, userIgnoreWords: string[]): Promise<void> {
    this.language = language
    const worker = getSpellCheckWorker()

    if (worker) {
      await sendMessageToWorker(worker, {
        type: "INIT",
        userIgnoreWords,
        language,
      })
    }
    else {
      await addWordsToDictionary(language, userIgnoreWords)
    }
  }

  /**
   * Gets spelling suggestions for a word
   */
  async getSuggestionsForWord(word: string): Promise<string[]> {
    const worker = getSpellCheckWorker()

    if (worker) {
      return await sendMessageToWorker<string[]>(worker, {
        type: "GET_SUGGESTIONS",
        word,
        language: this.language,
      })
    }
    else {
      return await getSuggestions(word, this.language)
    }
  }

  /**
   * Checks spelling of text and returns misspelled ranges
   */
  async spellCheckText(text: string): Promise<SpellCheckResult[]> {
    const worker = getSpellCheckWorker()

    if (worker) {
      return await sendMessageToWorker<SpellCheckResult[]>(worker, {
        type: "CHECK_SPELLING",
        text,
        language: this.language,
      })
    }
    else {
      return await checkSpelling(text, this.language)
    }
  }

  /**
   * Sets the language for spell checking
   */
  async setLanguage(language: string): Promise<boolean> {
    this.language = language
    const worker = getSpellCheckWorker()

    if (worker) {
      await sendMessageToWorker(worker, {
        type: "SET_LANGUAGE",
        language,
      })
    }
    else {
      disposeCurrentDictionary()
      await getOrCreateDictionary(language)
    }

    return Promise.resolve(true)
  }

  /**
   * Adds words to the dictionary
   */
  async addWords(words: string[]): Promise<void> {
    const worker = getSpellCheckWorker()

    if (worker) {
      await sendMessageToWorker(worker, {
        type: "ADD_WORDS",
        words,
        language: this.language,
      })
    }
    else {
      await addMultipleWords(words, this.language)
    }
  }
}

export const mz = HunspellSpellChecker
export const jk = getSpellCheckWorker
