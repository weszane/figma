export function serializeJSON(value: any) {
  const seenObjects: any[] = []

  const serialize = (obj: any): string |undefined => {
    // Handle toJSON method
    if (obj && obj.toJSON && typeof obj.toJSON === 'function') {
      obj = obj.toJSON()
    }

    // Handle Set conversion
    if (obj instanceof Set) {
      return serialize(Array.from(obj.values()))
    }

    // Handle Map conversion
    if (obj instanceof Map) {
      const converted: Record<any, any> = {}
      obj.forEach((value, key) => {
        converted[key] = value
      })
      return serialize(converted)
    }

    // Handle undefined
    if (obj === undefined) {
      return undefined
    }

    // Handle numbers
    if (typeof obj === 'number') {
      return isFinite(obj) ? String(obj) : 'null'
    }

    // Handle primitives
    if (typeof obj !== 'object') {
      return JSON.stringify(obj)
    }

    // Handle arrays
    if (Array.isArray(obj)) {
      let result = '['
      for (let i = 0; i < obj.length; i++) {
        if (i > 0) {
          result += ','
        }
        const serialized = serialize(obj[i])
        result += serialized !== undefined ? serialized : 'null'
      }
      return `${result}]`
    }

    // Handle null
    if (obj === null) {
      return 'null'
    }

    // Handle circular references
    if (seenObjects.includes(obj)) {
      throw new TypeError('Converting circular structure to JSON')
    }

    // Add to seen objects
    const objectIndex = seenObjects.push(obj) - 1

    // Handle objects
    const keys = Object.keys(obj).sort()
    let result = ''

    for (const key of keys) {
      const serializedValue = serialize(obj[key])
      if (serializedValue !== undefined) {
        if (result) {
          result += ','
        }
        result += `${JSON.stringify(key)}:${serializedValue}`
      }
    }

    // Remove from seen objects
    seenObjects.splice(objectIndex, 1)

    return `{${result}}`
  }

  return serialize(value)
}

export const J = serializeJSON
