// Original file: /Users/allen/sigma-main/src/905/712081.ts
// Refactored to improve readability, maintainability, and type safety.
// Renamed class from $$a0 to ByteBuffer for clarity.
// Added TypeScript types, JSDoc comments, and grouped methods logically.
// Split complex methods into smaller helpers.
// Simplified nested conditionals with early returns.
// Ensured same functionality as original.

export class ByteBuffer {
  _data: Uint8Array
  _start: number
  _index: number
  public length: number

  // Static helpers for float conversion (originally global n and r)
  static readonly int32View = new Int32Array(1)
  static readonly float32View = new Float32Array(ByteBuffer.int32View.buffer)

  /**
   * Constructor for ByteBuffer.
   * @param data - Optional Uint8Array to initialize the buffer.
   */
  constructor(data?: Uint8Array) {
    if (data && !(data instanceof Uint8Array)) {
      throw new Error('Must initialize a ByteBuffer with a Uint8Array')
    }
    this._data = data || new Uint8Array(256)
    this._index = 0
    this._start = 0
    this.length = data ? data.length : 0
  }

  // Window management methods
  /**
   * Extends the window to the specified ByteBuffer's index.
   * @param other - The other ByteBuffer to extend to.
   */
  extendWindowTo(other: ByteBuffer): void {
    this._index = other._index
  }

  /**
   * Creates a new window from the right of the current index.
   * @returns A new ByteBuffer instance.
   */
  getNewWindowFromRight(): ByteBuffer {
    const newBuffer = new ByteBuffer(this._data)
    newBuffer._index = this._index
    newBuffer._start = this._index
    return newBuffer
  }

  /**
   * Converts the current window to a Uint8Array.
   * @returns The Uint8Array of the window.
   */
  windowToUint8Array(): Uint8Array {
    return this._data.subarray(this._start, this._index)
  }

  /**
   * Converts the entire buffer to a Uint8Array.
   * @returns The full Uint8Array.
   */
  toUint8Array(): Uint8Array {
    return this._data.subarray(0, this.length)
  }

  // Reading methods
  /**
   * Reads a single byte.
   * @returns The byte value.
   */
  readByte(): number {
    if (this._index + 1 > this._data.length) {
      throw new Error('Index out of bounds')
    }
    return this._data[this._index++]
  }

  /**
   * Reads a byte array.
   * @returns The Uint8Array.
   */
  readByteArray(): Uint8Array {
    const length = this.readVarUint()
    const start = this._index
    const end = start + length
    if (end > this._data.length) {
      throw new Error('Read array out of bounds')
    }
    this._index = end
    const array = new Uint8Array(length)
    array.set(this._data.subarray(start, end))
    return array
  }

  /**
   * Reads a variable-length float.
   * @returns The float value.
   */
  readVarFloat(): number {
    const index = this._index
    const data = this._data
    const length = data.length
    if (index + 1 > length) {
      throw new Error('Index out of bounds')
    }
    const firstByte = data[index]
    if (firstByte === 0) {
      this._index = index + 1
      return 0
    }
    if (index + 4 > length) {
      throw new Error('Index out of bounds')
    }
    const intValue = firstByte | (data[index + 1] << 8) | (data[index + 2] << 16) | (data[index + 3] << 24)
    this._index = index + 4
    const shifted = (intValue << 23) | (intValue >>> 9)
    ByteBuffer.int32View[0] = shifted
    return ByteBuffer.float32View[0]
  }

  /**
   * Reads a variable-length unsigned integer.
   * @returns The unsigned integer.
   */
  readVarUint(): number {
    let value = 0
    let shift = 0
    let byte: number
    do {
      byte = this.readByte()
      value |= (byte & 127) << shift
      shift += 7
    } while ((byte & 128) && shift < 35)
    return value >>> 0
  }

  /**
   * Reads a variable-length signed integer.
   * @returns The signed integer.
   */
  readVarInt(): number {
    const value = this.readVarUint()
    return (value & 1) ? ~(value >>> 1) : (value >>> 1)
  }

  /**
   * Reads a variable-length uint64 as binary string.
   * @returns The binary string.
   */
  readVarUint64Bin(): string {
    let count = 0
    let binary = ''
    let byte: number
    do {
      byte = this.readByte()
      if (count < 8) {
        const bits = ((byte & 127) >>> 0).toString(2)
        binary = ((byte & 128) ? bits.padStart(7, '0') : bits) + binary
      }
      else {
        binary = byte.toString(2) + binary
        break
      }
      count++
    } while (byte & 128)
    return binary
  }

  /**
   * Reads a variable-length uint64.
   * @returns The string representation.
   */
  readVarUint64(): string {
    return this.convertBase(this.readVarUint64Bin(), 2, 10)
  }

  /**
   * Reads a variable-length int64.
   * @returns The string representation.
   */
  readVarInt64(): string {
    const binary = this.readVarUint64Bin()
    if (binary.slice(-1) !== '1') {
      return this.convertBase(binary.slice(0, -1), 2, 10)
    }
    const digits = this.parseToDigitsArray(binary.slice(0, -1), 2)
    const added = this.add(digits, [1], 2)
    return `-${this.convertBase(this.parseFromDigitsArray(added, 2), 2, 10)}`
  }

  /**
   * Reads a string.
   * @returns The decoded string.
   */
  readString(): string {
    let result = ''
    while (true) {
      const codePoint = this.readCodePoint()
      if (codePoint === 0)
        break
      if (codePoint < 65536) {
        result += String.fromCharCode(codePoint)
      }
      else {
        const adjusted = codePoint - 65536
        result += String.fromCharCode((adjusted >> 10) + 55296, (adjusted & 1023) + 56320)
      }
    }
    return result
  }

  // Helper for readString
  readCodePoint(): number {
    const firstByte = this.readByte()
    if (firstByte < 192)
      return firstByte
    const secondByte = this.readByte()
    if (firstByte < 224)
      return ((firstByte & 31) << 6) | (secondByte & 63)
    const thirdByte = this.readByte()
    if (firstByte < 240)
      return ((firstByte & 15) << 12) | ((secondByte & 63) << 6) | (thirdByte & 63)
    const fourthByte = this.readByte()
    return ((firstByte & 7) << 18) | ((secondByte & 63) << 12) | ((thirdByte & 63) << 6) | (fourthByte & 63)
  }

  // Writing methods
  /**
   * Grows the buffer by the specified amount.
   * @param amount - The amount to grow.
   */
  _growBy(amount: number): void {
    if (this.length + amount > this._data.length) {
      const newData = new Uint8Array((this.length + amount) << 1)
      newData.set(this._data)
      this._data = newData
    }
    this.length += amount
  }

  /**
   * Writes a single byte.
   * @param value - The byte value.
   */
  writeByte(value: number): void {
    const index = this.length
    this._growBy(1)
    this._data[index] = value
  }

  /**
   * Overwrites a byte at the current index.
   * @param value - The byte value.
   */
  overwriteByte(value: number): void {
    this._data[this._index] = value
    this._index++
  }

  /**
   * Writes a byte array.
   * @param array - The Uint8Array to write.
   */
  writeByteArray(array: Uint8Array): void {
    this.writeVarUint(array.length)
    const index = this.length
    this._growBy(array.length)
    this._data.set(array, index)
  }

  /**
   * Writes a variable-length float.
   * @param value - The float value.
   */
  writeVarFloat(value: number): void {
    const index = this.length
    ByteBuffer.float32View[0] = value
    const intValue = ByteBuffer.int32View[0]
    const shifted = (intValue >>> 23) | (intValue << 9)
    if ((shifted & 255) === 0) {
      this.writeByte(0)
      return
    }
    this._growBy(4)
    const data = this._data
    data[index] = shifted & 255
    data[index + 1] = (shifted >> 8) & 255
    data[index + 2] = (shifted >> 16) & 255
    data[index + 3] = (shifted >> 24) & 255
  }

  /**
   * Writes a variable-length unsigned integer.
   * @param value - The unsigned integer.
   */
  writeVarUint(value: number): void {
    do {
      const byte = value & 127
      value >>>= 7
      this.writeByte(value ? (128 | byte) : byte)
    } while (value)
  }

  /**
   * Writes a variable-length signed integer.
   * @param value - The signed integer.
   */
  writeVarInt(value: number): void {
    this.writeVarUint((value << 1) ^ (value >> 31))
  }

  /**
   * Helper for writing uint64.
   * @param binary - The binary string.
   */
  writeVarUint64Helper(binary: string): void {
    if (!binary)
      return
    let count = 0
    while (binary) {
      let byte: number
      if (count < 8) {
        byte = parseInt(binary.slice(-7), 2)
        binary = binary.slice(0, -7)
      }
      else {
        byte = parseInt(binary.slice(-8), 2)
        binary = binary.slice(0, -8)
        this.writeByte(byte)
        break
      }
      this.writeByte(binary ? (128 | byte) : byte)
      count++
    }
  }

  /**
   * Writes a variable-length uint64.
   * @param value - The string value.
   */
  writeVarUint64(value: string): void {
    value = this.cleanNumericString(value)
    const binary = this.convertBase(value, 10, 2)
    this.writeVarUint64Helper(binary)
  }

  /**
   * Subtracts one from a binary string.
   * @param binary - The binary string.
   * @returns The result.
   */
  subtractOne(binary: string): string {
    const digits = binary.split('').map(Number)
    let borrow = 1
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] >= borrow) {
        digits[i] -= borrow
        borrow = 0
        break
      }
      else {
        digits[i] = 1
      }
    }
    return digits.join('').replace(/^0+/, '') || '0'
  }

  /**
   * Cleans a numeric string.
   * @param str - The input string.
   * @returns The cleaned string.
   */
  cleanNumericString(str: string): string {
    let result = ''
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i)
      if ((char >= '0' && char <= '9') || (i === 0 && char === '-')) {
        result += char
      }
    }
    return result
  }

  /**
   * Writes a variable-length int64.
   * @param value - The string value.
   */
  writeVarInt64(value: string): void {
    value = this.cleanNumericString(value)
    if (!value)
      return
    let binary: string
    if (value[0] !== '-') {
      binary = `${this.convertBase(value, 10, 2)}0`
    }
    else {
      binary = this.convertBase(value.slice(1), 10, 2)
      if (binary === '0' || !binary) {
        this.writeVarUint64('0')
        return
      }
      binary = `${this.subtractOne(binary)}1`
    }
    this.writeVarUint64Helper(binary)
  }

  /**
   * Writes a string.
   * @param str - The string to write.
   */
  writeString(str: string): void {
    for (let i = 0; i < str.length; i++) {
      const codePoint = this.getCodePoint(str, i)
      if (codePoint === 0) {
        throw new Error('Cannot encode a string containing the null character')
      }
      this.writeCodePoint(codePoint)
      if (codePoint > 65535)
        i++ // Skip surrogate
    }
    this.writeByte(0)
  }

  // Helpers for writeString
  getCodePoint(str: string, index: number): number {
    const code = str.charCodeAt(index)
    if (index + 1 === str.length || code < 55296 || code >= 56320) {
      return code
    }
    return (code << 10) + str.charCodeAt(++index) - 0x35FDC00
  }

  writeCodePoint(codePoint: number): void {
    if (codePoint < 128) {
      this.writeByte(codePoint)
    }
    else if (codePoint < 2048) {
      this.writeByte((codePoint >> 6) | 192)
      this.writeByte((codePoint & 63) | 128)
    }
    else if (codePoint < 65536) {
      this.writeByte((codePoint >> 12) | 224)
      this.writeByte(((codePoint >> 6) & 63) | 128)
      this.writeByte((codePoint & 63) | 128)
    }
    else {
      this.writeByte((codePoint >> 18) | 240)
      this.writeByte(((codePoint >> 12) & 63) | 128)
      this.writeByte(((codePoint >> 6) & 63) | 128)
      this.writeByte((codePoint & 63) | 128)
    }
  }

  /**
   * Redacts a string if it matches the regex.
   * @param regex - The regex to test.
   */
  redactString(regex: RegExp): void {
    const startIndex = this._index
    const original = this.readString()
    const endIndex = this._index
    const isQuoted = original.length >= 2 && original[0] === '"' && original[original.length - 1] === '"'
    const content = isQuoted ? original.substring(1, original.length - 1) : original
    if (!regex.test(content.toLowerCase()))
      return
    let redacted = '*'.repeat(endIndex - startIndex - 1)
    if (isQuoted) {
      redacted = `"${redacted.substring(1, redacted.length - 1)}"`
    }
    else if (redacted.length >= 2) {
      const first = original.charAt(0)
      const last = original.charAt(original.length - 1)
      if (first.charCodeAt(0) <= 127 && last.charCodeAt(0) <= 127) {
        redacted = `${first}${redacted.substring(1, redacted.length - 1)}${last}`
      }
    }
    this._index = startIndex
    for (let i = 0; i < redacted.length; i++) {
      const codePoint = this.getCodePoint(redacted, i)
      if (codePoint === 0) {
        throw new Error('Cannot encode a string containing the null character')
      }
      this.writeCodePointForOverwrite(codePoint)
      if (codePoint > 65535)
        i++
    }
    this.overwriteByte(0)
    this._index = endIndex
  }

  // Helper for redactString
  writeCodePointForOverwrite(codePoint: number): void {
    if (codePoint < 128) {
      this.overwriteByte(codePoint)
    }
    else if (codePoint < 2048) {
      this.overwriteByte((codePoint >> 6) | 192)
      this.overwriteByte((codePoint & 63) | 128)
    }
    else if (codePoint < 65536) {
      this.overwriteByte((codePoint >> 12) | 224)
      this.overwriteByte(((codePoint >> 6) & 63) | 128)
      this.overwriteByte((codePoint & 63) | 128)
    }
    else {
      this.overwriteByte((codePoint >> 18) | 240)
      this.overwriteByte(((codePoint >> 12) & 63) | 128)
      this.overwriteByte(((codePoint >> 6) & 63) | 128)
      this.overwriteByte((codePoint & 63) | 128)
    }
  }

  // Utility methods
  /**
   * Adds two digit arrays in a given base.
   * @param a - First array.
   * @param b - Second array.
   * @param base - The base.
   * @returns The result array.
   */
  add(a: number[], b: number[], base: number): number[] {
    const result: number[] = []
    let carry = 0
    let i = 0
    while (i < a.length || i < b.length || carry) {
      const sum = carry + (i < a.length ? a[i] : 0) + (i < b.length ? b[i] : 0)
      result.push(sum % base)
      carry = Math.floor(sum / base)
      i++
    }
    return result
  }

  /**
   * Multiplies a digit array by a number in a given base.
   * @param num - The number.
   * @param digits - The digit array.
   * @param base - The base.
   * @returns The result array.
   */
  multiplyByNumber(num: number, digits: number[], base: number): number[] {
    if (num <= 0)
      return []
    let result: number[] = []
    let multiplier = digits.slice()
    while (num > 0) {
      if (num & 1) {
        result = this.add(result, multiplier, base)
      }
      multiplier = this.add(multiplier, multiplier, base)
      num >>= 1
    }
    return result
  }

  /**
   * Parses a string to a digit array in a given base.
   * @param str - The string.
   * @param base - The base.
   * @returns The digit array.
   */
  parseToDigitsArray(str: string, base: number): number[] {
    const chars = str.split('')
    const digits: number[] = []
    for (let i = chars.length - 1; i >= 0; i--) {
      const digit = parseInt(chars[i], base)
      if (isNaN(digit))
        return []
      digits.push(digit)
    }
    return digits
  }

  /**
   * Parses a digit array to a string in a given base.
   * @param digits - The digit array.
   * @param base - The base.
   * @returns The string.
   */
  parseFromDigitsArray(digits: number[], base: number): string {
    let result = ''
    for (let i = digits.length - 1; i >= 0; i--) {
      result += digits[i].toString(base)
    }
    return result
  }

  /**
   * Converts a number from one base to another.
   * @param value - The value string.
   * @param fromBase - The source base.
   * @param toBase - The target base.
   * @returns The converted string.
   */
  convertBase(value: string, fromBase: number, toBase: number): string {
    const digits = this.parseToDigitsArray(value, fromBase)
    if (!digits.length)
      return ''
    let result = [0]
    let power = [1]
    for (const digit of digits) {
      if (digit) {
        result = this.add(result, this.multiplyByNumber(digit, power, toBase), toBase)
      }
      power = this.multiplyByNumber(fromBase, power, toBase)
    }
    return this.parseFromDigitsArray(result, toBase)
  }
}

export const ByteBufferAlias = ByteBuffer // For compatibility, if needed
