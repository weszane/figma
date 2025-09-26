import { createContext } from 'react'

interface ResizeDragContextType {
  isResizing: boolean
  isDragging: boolean
}

const defaultResizeDragContext: ResizeDragContextType = {
  isResizing: false,
  isDragging: false,
}

export const ResizeDragContext = createContext(defaultResizeDragContext)
export const O = ResizeDragContext
