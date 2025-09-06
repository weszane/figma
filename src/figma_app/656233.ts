import { assertNotNullish, isNotNullish } from '../figma_app/95419'
import { qE } from '../figma_app/492908'

// Original: $$a20
/**
 * Ensures the input is an array. If not, wraps it in an array.
 * @param e - The input value.
 * @returns An array containing the input.
 */
export function ensureArray<T>(e: T | T[]): T[] {
  return Array.isArray(e) ? e : [e]
}

// Original: $$s10
/**
 * Moves an element in an array from one position to another.
 * @param e - The array.
 * @param t - The element to move.
 * @param r - The target element to move before/after.
 * @param n - If true, move before; else after.
 * @returns The modified array.
 */
export function moveElement<T>(e: T[], t: T, r?: T, n?: boolean): T[] {
  let i = e.indexOf(t, 0)
  if (i < 0)
    return e
  let a = r == null ? -1 : e.indexOf(r)
  if (a < 0)
    a = n ? 0 : e.length
  else if (n && i < a)
    a -= 1
  else if (!n && i > a)
    a += 1
  let s = e.slice()
  if (i > -1 && a !== i) {
    s.splice(i, 1)
    s.splice(a, 0, t)
  }
  return s
}

// Original: $$o9
/**
 * Adds an element to the array if it's not already present.
 * @param e - The array.
 * @param t - The element to add.
 */
export function addUnique<T>(e: T[], t: T): void {
  if (!e.includes(t))
    e.push(t)
}

// Original: $$l6
/**
 * Adds an element to the beginning of the array if it's not already present.
 * @param e - The array.
 * @param t - The element to add.
 */
export function unshiftUnique<T>(e: T[], t: T): void {
  if (!e.includes(t))
    e.unshift(t)
}

// Original: $$d4
/**
 * Removes the first occurrence of an element from the array.
 * @param e - The array.
 * @param t - The element to remove.
 */
export function removeElement<T>(e: T[], t: T): void {
  let r = e.indexOf(t)
  if (r !== -1)
    e.splice(r, 1)
}

// Original: $$L21
/**
 * Toggles an element in the array: removes if present, adds if not.
 * @param e - The array.
 * @param t - The element to toggle.
 * @returns The modified array.
 */
export function toggleElement<T>(e: T[], t: T): T[] {
  return e.includes(t) ? e.filter(e => e !== t) : e.concat(t)
}

// Original: $$c26
/**
 * Checks if two arrays are equal (shallow comparison).
 * @param e - First array.
 * @param t - Second array.
 * @returns True if equal, false otherwise.
 */
export function arraysEqual<T>(e: T[], t: T[]): boolean {
  if (e.length !== t.length)
    return false
  for (let r = 0; r < e.length; r++) {
    if (e[r] !== t[r])
      return false
  }
  return true
}

// Original: $$u2
/**
 * Checks if all elements in the array are equal (starting from index 1).
 * @param e - The array.
 * @returns True if all equal, false otherwise.
 */
export function allEqual<T>(e: T[]): boolean {
  for (let t = 1; t < e.length; t++) {
    if (e[t] === undefined || e[t] !== e[t - 1])
      return false
  }
  return true
}

// Original: $$p23
/**
 * Shuffles the array in place using Fisher-Yates algorithm.
 * @param e - The array to shuffle.
 * @param t - Optional seed for deterministic shuffle.
 * @returns The shuffled array.
 */
export function shuffle<T>(e: T[], t?: number): T[] {
  let r: T
  let n: number
  let i = e.length
  const random = t
    ? (seed: number = Date.now()) => (9301 * seed + 49297) % 233280 / 233280
    : Math.random
  while (i !== 0) {
    n = Math.floor(random(t) * i)
    i -= 1
    r = e[i]
    e[i] = e[n]
    e[n] = r
  }
  return e
}

// Original: $$_11
/**
 * Picks a random element from the array.
 * @param e - The array.
 * @returns A random element.
 */
export function randomPick<T>(e: T[]): T {
  return e[Math.floor(Math.random() * e.length)]
}

// Sorting functions
// Original: $$h0
/**
 * Sorts an array by a property.
 * @param e - The array.
 * @param t - The property key.
 * @param r - If true, descending.
 * @returns The sorted array.
 */
export function sortByProperty<T>(e: T[], t: keyof T, r: boolean = false): T[] {
  return sortBy(e, e => e[t], r)
}

// Original: $$m22
/**
 * Sorts an array by a selector function.
 * @param e - The array.
 * @param t - Selector function.
 * @param r - If true, descending.
 * @param n - Secondary selector.
 * @param i - If true, secondary descending.
 * @returns The sorted array.
 */
export function sortBy<T>(e: T[], t: (item: T) => any, r: boolean = false, n?: (item: T) => any, i: boolean = false): T[] {
  e.sort((e, a) => {
    if (t(e) === t(a) && n) {
      let t = i ? -1 : 1
      return n(e) < n(a) ? -t : t
    }
    let s = r ? -1 : 1
    return t(e) < t(a) ? -s : s
  })
  return e
}

// Original: $$f14, $$g15
export const COLLATOR = new Intl.Collator('en', {
  numeric: true,
  sensitivity: 'base',
})
export const MAX_LENGTH = 200

// Original: $$E5
/**
 * Sorts an array by a property with options.
 * @param e - The array.
 * @param t - The property key.
 * @param r - Options.
 */
export function sortByPropertyWithOptions<T>(e: T[], t: keyof T, r: { isDescending?: boolean, useExpensiveNaturalComparison?: boolean } = {}): void {
  sortByWithOptions(e, e => e[t], r)
}

// Original: $$y29
/**
 * Sorts an array by a selector with options.
 * @param e - The array.
 * @param t - Primary selector.
 * @param r - Options.
 * @param n - Secondary selector.
 */
export function sortByWithOptions<T>(e: T[], t: (item: T) => any, r: { isDescending?: boolean, useExpensiveNaturalComparison?: boolean, isSecondaryDescending?: boolean } = {}, n?: (item: T) => any): void {
  const i = (e: T) => {
    let r = t(e)
    return r && r.toLowerCase ? r.toLowerCase() : ''
  }
  const a = (e: T) => {
    if (!n)
      return ''
    let t = n(e)
    return t && t.toLowerCase ? t.toLowerCase() : ''
  }
  let s = r.isDescending ? -1 : 1
  if (r.useExpensiveNaturalComparison) {
    e.sort((e, t) => COLLATOR.compare(i(e), i(t)) * s)
  }
  else {
    e.sort((e, t) => {
      if (i(e) === i(t) && n) {
        let n = r.isSecondaryDescending ? -1 : 1
        return a(e) < a(t) ? -n : n
      }
      return i(e) < i(t) ? -s : s
    })
  }
}

// Original: $$b16
/**
 * Sorts an array by selectors.
 * @param e - The array.
 * @param t - Primary selector.
 * @param r - If true, descending.
 * @param n - Secondary selector.
 * @param i - If true, secondary descending.
 */
export function sortBySelectors<T>(e: T[], t: (item: T) => any, r: boolean = false, n?: (item: T) => any, i: boolean = false): void {
  const a = (e: (item: T) => any, t: T) => {
    let r = e(t)
    return typeof r == 'string' ? r.toLowerCase() : typeof r == 'number' ? r : ''
  }
  let s = r ? -1 : 1
  e.sort((e, r) => {
    if (a(t, e) === a(t, r) && n) {
      let t = i ? -1 : 1
      return a(n, e) < a(n, r) ? -t : t
    }
    return a(t, e) < a(t, r) ? -s : s
  })
}

// Original: $$T3
/**
 * Sorts an array by date.
 * @param e - The array.
 * @param t - Date selector.
 * @param r - If true, descending.
 * @returns The sorted array.
 */
export function sortByDate<T>(e: T[], t: (item: T) => string | Date, r: boolean = false): T[] {
  return e.sort((e, n) => {
    let i = new Date(t(e)).getTime() < new Date(t(n)).getTime() ? 1 : -1
    return r ? -i : i
  })
}

// Original: $$I27
/**
 * Sorts an array by a date property.
 * @param e - The array.
 * @param t - The property key.
 * @param r - If true, descending.
 * @returns The sorted array.
 */
export function sortByDateProperty<T>(e: T[], t: keyof T, r: boolean = false): T[] {
  return sortByDate(e, e => e[t as any], r)
}

// Original: $$S7
/**
 * Sorts an array by created_at property.
 * @param e - The array.
 * @returns The sorted array.
 */
export function sortByCreatedAt<T extends { created_at: string | Date }>(e: T[]): T[] {
  return sortByDate(e, e => e.created_at)
}

// Original: $$v17
/**
 * Sorts an array by multiple comparers.
 * @param e - The array.
 * @param t - Comparer functions.
 * @returns The sorted array.
 */
export function sortByMultiple<T>(e: T[], ...t: ((a: T, b: T) => number)[]): T[] {
  return e.sort((e, r) => {
    for (let n of t) {
      let t = n(e, r)
      if (t !== 0)
        return t
    }
    return 0
  })
}

// Filtering and finding functions
// Original: $$A19
/**
 * Filters out nullish values.
 * @param e - The array.
 * @returns The filtered array.
 */
export function filterNotNullish<T>(e: T[]): NonNullable<T>[] {
  return e.filter(isNotNullish)
}

// Original: $$x8
/**
 * Finds the next element after index that matches the predicate.
 * @param e - The array.
 * @param t - Starting index.
 * @param r - Predicate.
 * @returns The found element or undefined.
 */
export function findNext<T>(e: T[], t: number, r: (item: T, index: number) => boolean = isNotNullish): T | undefined {
  for (let n = t + 1; n < e.length; n++) {
    let t = e[n]
    if (r(t, n))
      return t
  }
}

// Original: $$N25
/**
 * Finds the previous element before index that matches the predicate.
 * @param e - The array.
 * @param t - Starting index.
 * @param r - Predicate.
 * @returns The found element or undefined.
 */
export function findPrevious<T>(e: T[], t: number, r: (item: T, index: number) => boolean = isNotNullish): T | undefined {
  for (let n = t - 1; n >= 0; n--) {
    let t = e[n]
    if (r(t, n))
      return t
  }
}

// Original: $$C28
/**
 * Finds the nearest element to index that matches the predicate.
 * @param e - The array.
 * @param t - Starting index.
 * @param r - Direction ('left' or 'right').
 * @param a - Predicate.
 * @returns The found element or undefined.
 */
export function findNearest<T>(e: T[], t: number, r: 'left' | 'right' = 'left', a: (item: T, index: number) => boolean = isNotNullish): T | undefined {
  t = qE(t, 0, e.length - 1)
  for (let n = 0; t - n >= 0 || t + n < e.length; n++) {
    let [i, s] = r === 'left' ? [t - n, t + n] : [t + n, t - n]
    if (i >= 0 && i < e.length) {
      let t = e[i]
      if (a(t, i))
        return t
    }
    if (s >= 0 && s < e.length) {
      let t = e[s]
      if (a(t, s))
        return t
    }
  }
}

// Other utilities
// Original: $$w18
/**
 * Pops the last element and returns the rest and the popped element.
 * @param e - The array.
 * @returns Tuple of [rest, last].
 */
export function popLast<T>(e: T[]): [T[], T] {
  let t = [...e]
  let r = assertNotNullish(t.pop(), 'input must be non-empty')
  return [t, r]
}

// Original: $$O13
/**
 * Merges two sorted arrays.
 * @param e - First array.
 * @param t - Second array.
 * @param r - Key selector.
 * @returns Merged array of objects with hasBoth, left, right.
 */
export function mergeSorted<T, U>(e: T[], t: U[], r: (item: T | U) => string = String): Array<{ hasBoth: boolean, left?: T, right?: U }> {
  let n: Record<string, number> = {}
  t.forEach((e, t) => {
    n[r(e)] = t
  })
  let i = 0
  let a = 0
  let s: Array<{ hasBoth: boolean, left?: T, right?: U }> = []
  for (;;) {
    let o = e[i]
    let l = t[a]
    if (o === undefined || l === undefined) {
      if (o === undefined && l === undefined)
        return s
      if (o !== undefined && l === undefined) {
        s.push({ hasBoth: false, left: o, right: undefined })
        i++
      }
      else if (o === undefined && l !== undefined) {
        s.push({ hasBoth: false, left: undefined, right: l })
        a++
      }
    }
    else {
      let e = n[r(o)]
      if (e === undefined || e < a) {
        s.push({ hasBoth: false, left: o, right: undefined })
        i++
      }
      else if (e === a) {
        s.push({ hasBoth: true, left: o, right: l })
        i++
      }
      else {
        s.push({ hasBoth: false, left: undefined, right: l })
        a++
      }
    }
  }
}

// Original: $$R12
/**
 * Maps and filters nullish values.
 * @param e - The array.
 * @param t - Mapper function.
 * @returns The mapped and filtered array.
 */
export function mapFilter<T, U>(e: T[], t: (item: T) => U | null | undefined): U[] {
  let r: U[] = []
  for (let n of e) {
    let e = t(n)
    if (e != null)
      r.push(e)
  }
  return r
}

// Original: $$P24
/**
 * Maps asynchronously and awaits all.
 * @param e - The array.
 * @param t - Async mapper.
 * @returns The array of results.
 */
export async function asyncMap<T, U>(e: T[], t: (item: T) => Promise<U>): Promise<U[]> {
  let r = e.map(t)
  return await Promise.all(r)
}

// Original: Bq (seems like a recursive flatten, but code has 'e' which might be a typo for 'Bq')
/**
 * Flattens a nested array.
 * @param t - The nested array.
 * @param r - Accumulator.
 * @returns The flattened array.
 */
export function flatten<T>(t: (T | T[])[], r: T[] = []): T[] {
  for (let n = 0; n < t.length; n++) {
    let i = t[n]
    Array.isArray(i) ? flatten(i, r) : r.push(i)
  }
  return r
}

// Aliases (keeping original names for compatibility, but refactored internally)
export const AM = sortByProperty
export const Ef = allEqual
export const GK = sortByDate
export const Jk = removeElement
export const KQ = sortByPropertyWithOptions
export const Kg = unshiftUnique
export const LN = sortByCreatedAt
export const M0 = findNext
export const N9 = addUnique
export const Pe = moveElement
export const QP = randomPick
export const RP = mapFilter
export const TR = mergeSorted
export const Tt = COLLATOR
export const Tw = MAX_LENGTH
export const Tz = sortBySelectors
export const Ul = sortByMultiple
export const Vs = popLast
export const WI = filterNotNullish
export const _j = ensureArray
export const g6 = toggleElement
export const hR = sortBy
export const k4 = shuffle
export const lX = asyncMap
export const lq = findPrevious
export const lu = arraysEqual
export const my = sortByDateProperty
export const qg = findNearest
export const v7 = sortByWithOptions
export const Bq = flatten
