import { describe, expect, it } from 'vitest'
import { StyleBuilder } from '../cssbuilder/539057'

// StyleBuilder 测试用例

describe('styleBuilder', () => {
  it('should create a style with initial rules', () => {
    const builder = new StyleBuilder({ color: 'red', fontSize: 16 })
    expect(builder.rules).toEqual({ color: 'red', fontSize: 16 })
  })

  it('should add new rules with add()', () => {
    const builder = new StyleBuilder({ color: 'red' })
    const newBuilder = builder.add({ fontSize: 16 })
    expect(newBuilder.rules).toEqual({ color: 'red', fontSize: 16 })
  })

  it('should merge another StyleBuilder with add()', () => {
    const builder1 = new StyleBuilder({ color: 'red' })
    const builder2 = new StyleBuilder({ fontSize: 16 })
    const merged = builder1.add(builder2)
    expect(merged.rules).toEqual({ color: 'red', fontSize: 16 })
  })

  it('should handle if() correctly', () => {
    const builder = new StyleBuilder({ color: 'red' })
    const result = builder.if(true, { fontSize: 16 }, { fontWeight: 'bold' })
    expect(result.rules).toEqual({ color: 'red', fontSize: 16 })
    const result2 = builder.if(false, { fontSize: 16 }, { fontWeight: 'bold' })
    expect(result2.rules).toEqual({ color: 'red', fontWeight: 'bold' })
  })

  it('should handle case() correctly', () => {
    const builder = new StyleBuilder({ color: 'red' })
    const result = builder.case([
      [false, { fontSize: 12 }],
      [true, { fontSize: 16 }],
    ], { fontWeight: 'bold' })
    expect(result.rules).toEqual({ color: 'red', fontSize: 16 })
  })
})
