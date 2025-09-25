import { createContext } from 'react'

export let FormattedInputContext = createContext<{
  variableBindingContextKey: any
mismatchedValue: any
  showBindingUI: Fn
  isShowingBindingUI: boolean
  onVariableSelected: Fn
  boundVariableId: any
  isBoundVariableDeleted: boolean
}>(void 0)
export const p = FormattedInputContext
