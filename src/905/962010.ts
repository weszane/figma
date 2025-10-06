/**
 * Helper class for hashing various data types.
 * (Original class: n)
 */
class HashHelper {
  _float: Float32Array
  _int: Int32Array
  _value: number

  constructor() {
    this._float = new Float32Array(1)
    this._int = new Int32Array(this._float.buffer)
    this._value = 0
  }

  /**
   * Resets the hash value to zero.
   * (Original method: reset)
   */
  reset(): void {
    this._value = 0
  }

  /**
   * Returns the current hash value.
   * (Original method: value)
   */
  value(): number {
    return this._value
  }

  /**
   * Hashes a string by its code points.
   * (Original method: hashStr)
   */
  hashString(str: string): void {
    for (let i = 0; i < str.length; ++i) {
      this.hashInt(str.codePointAt(i) || 0)
    }
  }

  /**
   * Hashes a boolean value.
   * (Original method: hashBool)
   */
  hashBoolean(val: boolean): void {
    this.hashInt(val ? 1 : 0)
  }

  /**
   * Hashes an array of bytes.
   * (Original method: hashBytes)
   */
  hashBytes(bytes: Uint8Array): void {
    for (let i = 0; i < bytes.length; ++i) {
      this.hashInt(bytes[i])
    }
  }

  /**
   * Hashes a float value.
   * (Original method: hashF)
   */
  hashFloat(val: number): void {
    this._float[0] = val
    this._value = this._combine(this._value, this._int[0])
  }

  /**
   * Hashes an integer value.
   * (Original method: hashI)
   */
  hashInt(val: number): void {
    this._value = this._combine(this._value, val)
  }

  /**
   * Combines two numbers into a hash value.
   * (Original method: _combine)
   */
  _combine(hash: number, value: number): number {
    return value + 0x9E3779B9 + (hash << 6) + (hash >> 2)
  }
}

/**
 * Wrapper class for reading and hashing data from a buffer.
 * (Original class: $$r0)
 */
export class BufferHashReader {
  _helper: HashHelper
  _bb: any // Replace 'any' with the actual type if available

  constructor(buffer: any) {
    this._helper = new HashHelper()
    this._bb = buffer
  }

  /**
   * Returns the underlying buffer.
   * (Original method: bb)
   */
  bb(): any {
    return this._bb
  }

  /**
   * Converts the buffer window to a Uint8Array.
   * (Original method: windowToUint8Array)
   */
  windowToUint8Array(): Uint8Array {
    return this._bb.windowToUint8Array()
  }

  /**
   * Returns the current hash value.
   * (Original method: value)
   */
  value(): number {
    return this._helper.value()
  }

  /**
   * Reads a byte and hashes it.
   * (Original method: readByte)
   */
  readByte(): number {
    const byte = this._bb.readByte()
    this._helper.hashInt(byte)
    return byte
  }

  /**
   * Reads a byte array and hashes it.
   * (Original method: readByteArray)
   */
  readByteArray(): Uint8Array {
    const arr = this._bb.readByteArray()
    this._helper.hashBytes(arr)
    return arr
  }

  /**
   * Reads a variable float and hashes it.
   * (Original method: readVarFloat)
   */
  readVarFloat(): number {
    const val = this._bb.readVarFloat()
    this._helper.hashFloat(val)
    return val
  }

  /**
   * Reads a variable unsigned integer and hashes it.
   * (Original method: readVarUint)
   */
  readVarUint(): number {
    const val = this._bb.readVarUint()
    this._helper.hashInt(val)
    return val
  }

  /**
   * Reads a variable signed integer and hashes it.
   * (Original method: readVarInt)
   */
  readVarInt(): number {
    const val = this._bb.readVarInt()
    this._helper.hashInt(val)
    return val
  }

  /**
   * Reads a variable unsigned 64-bit integer and hashes it as a string.
   * (Original method: readVarUint64)
   */
  readVarUint64(): string {
    const val = this._bb.readVarUint64()
    this._helper.hashString(val)
    return val
  }

  /**
   * Reads a variable signed 64-bit integer and hashes it as a string.
   * (Original method: readVarInt64)
   */
  readVarInt64(): string {
    const val = this._bb.readVarInt64()
    this._helper.hashString(val)
    return val
  }

  /**
   * Reads a string and hashes it.
   * (Original method: readString)
   */
  readString(): string {
    const str = this._bb.readString()
    this._helper.hashString(str)
    return str
  }
}

// Export BufferHashReader as O for compatibility with original code
export const O = BufferHashReader
