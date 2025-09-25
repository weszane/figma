import { createContext } from 'react'

interface RadioPrimitiveContextType {
  name: string
  value: string
  readonlyGroup?: boolean
  onChange?: (value: string, details: { event: React.ChangeEvent<HTMLInputElement> }) => void
  autofocus?: boolean
}
export let RadioPrimivteContext = createContext<RadioPrimitiveContextType>({
  name: '',
  value: '',
  readonlyGroup: void 0,
  onChange: () => {},
  autofocus: !1,
})
export const r = RadioPrimivteContext
