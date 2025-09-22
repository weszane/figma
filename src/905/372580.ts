export function exists(e) {
  return e != null
}
export const entries = Object.entries
export const values = Object.values
export const keys = Object.keys

export function flatten(e) {
  return e.reduce((e, t) => e.concat(t), [])
}
export function omit(e: ObjectOf<any>, t: string[]): ObjectOf<any> {
  let n = {}
  for (let r of keys(e)) !t.includes(r) && (n[r] = e[r])
  return n
}

export function flatMap(e:any[], t: (item: any) => any[]) {
  return flatten(e.map(t))
}
