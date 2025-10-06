import { kiwiParserCodec } from '../905/294864'

export let JsKiwiSerializationInstance: JsKiwiSerialization | undefined

/**
 * Class responsible for decoding various types of node data received from C++.
 *
 * @class NodeDataDecoder
 */
class JsKiwiSerialization {
  /**
   * Decodes a message ensuring it contains exactly one node change.
   *
   * @param encodedMessage - The encoded message from C++
   * @returns Object containing the single node change data and any blobs
   * @throws Error if message is invalid or doesn't contain exactly one node change
   */
  _decodeMessageWithSingleNodeChange(encodedMessage: Uint8Array): {
    data: any
    blobs: Uint8Array[]
  } {
    const decodedMessage = kiwiParserCodec.decodeMessage(encodedMessage)
    if (!decodedMessage) {
      throw new Error('Invalid message from C++')
    }

    if (decodedMessage.nodeChanges?.length !== 1) {
      throw new Error('Invalid nodes changes from C++')
    }

    return {
      data: decodedMessage.nodeChanges[0],
      blobs: decodedMessage.blobs || [],
    }
  }

  /**
   * Decodes a node change message.
   *
   * @param encodedNodeChange - The encoded node change from C++
   * @returns The decoded node change object
   * @throws Error if node change is invalid
   */
  _decodeNodeChange(encodedNodeChange: Uint8Array): any {
    const decodedNodeChange = kiwiParserCodec.decodeNodeChange(encodedNodeChange)
    if (!decodedNodeChange) {
      throw new Error('Invalid node change from C++')
    }
    return decodedNodeChange
  }

  /**
   * Decodes fill paint data from a message.
   *
   * @param encodedMessage - The encoded message containing fill paint data
   * @returns The decoded fill paint data
   * @throws Error if fill paint data is missing
   */
  decodeFillPaintData(encodedMessage: Uint8Array): any {
    const { data } = this._decodeMessageWithSingleNodeChange(encodedMessage)
    const fillPaints = data.fillPaints

    if (!fillPaints) {
      throw new Error('Missing paints from C++')
    }

    return fillPaints
  }

  /**
   * Decodes effect data from a message.
   *
   * @param encodedMessage - The encoded message containing effect data
   * @returns The decoded effect data
   * @throws Error if effect data is missing
   */
  decodeEffectData(encodedMessage: Uint8Array): any {
    const { data } = this._decodeMessageWithSingleNodeChange(encodedMessage)
    const effects = data.effects

    if (!effects) {
      throw new Error('Missing effects from C++')
    }

    return effects
  }

  /**
   * Decodes vector data from a message.
   *
   * @param encodedMessage - The encoded message containing vector data
   * @returns Object containing vector data and blobs
   * @throws Error if vector data is missing
   */
  decodeVectorData(encodedMessage: Uint8Array): {
    data: any
    blobs: Uint8Array[]
  } {
    const result = this._decodeMessageWithSingleNodeChange(encodedMessage)

    if (!result) {
      throw new Error('Missing vectorData from C++')
    }

    return {
      data: result.data.vectorData,
      blobs: result.blobs,
    }
  }

  /**
   * Decodes text data from a message.
   *
   * @param encodedMessage - The encoded message containing text data
   * @returns The decoded text data
   * @throws Error if text data is missing
   */
  decodeTextData(encodedMessage: Uint8Array): any {
    const { data } = this._decodeMessageWithSingleNodeChange(encodedMessage)
    const textData = data.textData

    if (!textData) {
      throw new Error('Missing textData from C++')
    }

    return textData
  }

  /**
   * Decodes prototype interactions from a node change.
   *
   * @param encodedNodeChange - The encoded node change containing prototype interactions
   * @returns The decoded prototype interactions
   * @throws Error if prototype interactions are missing
   */
  decodePrototypeInteractions(encodedNodeChange: Uint8Array): any {
    const nodeChange = this._decodeNodeChange(encodedNodeChange)
    const prototypeInteractions = nodeChange.prototypeInteractions

    if (!prototypeInteractions) {
      throw new Error('Missing prototype interactions from C++')
    }

    return prototypeInteractions
  }
}

/**
 * Initializes the global NodeDataDecoder instance.
 *
 * @function $$s0
 */
export function initJsKiwiSerialization(): void {
  JsKiwiSerializationInstance = new JsKiwiSerialization()
}

export const G = initJsKiwiSerialization
export const K = JsKiwiSerializationInstance
