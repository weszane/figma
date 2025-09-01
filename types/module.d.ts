declare module 'redux-optimist' {
  export const BEGIN: 'BEGIN'
  export const COMMIT: 'COMMIT'
  export const REVERT: 'REVERT'
  export function optimist(...args: any[]): any
  export function optimistic(...args: any[]): any
}
