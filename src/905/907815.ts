import { cloneElement, useCallback, useState } from 'react'

interface ImageLoadProps {
  enabled?: boolean
  children: React.ReactElement
}

interface UseImageLoadState {
  url: string
  status: 'initial' | 'success'
}

interface UseImageLoadReturn {
  status: 'initial' | 'success'
  onLoad: () => void
}

/**
 * Custom hook to manage image loading state
 * @param src - Image source URL
 * @returns Object containing status and onLoad handler
 */
function useImageLoad(src: string): UseImageLoadReturn {
  const [{ url, status }, setState] = useState<UseImageLoadState>({
    url: src,
    status: 'initial',
  })

  const handleLoad = useCallback(() => {
    setState(({ url }) => ({
      url,
      status: 'success',
    }))
  }, [])

  // Reset state when src changes
  if (src !== url) {
    setState({
      url: src,
      status: 'initial',
    })
    return {
      status: 'initial',
      onLoad: handleLoad,
    }
  }

  return {
    status,
    onLoad: handleLoad,
  }
}

/**
 * Component that enhances child image elements with loading state management
 * Original name: $$s0
 */
export function ImageLoadManager({
  // enabled = true,
  children,
}: ImageLoadProps): React.ReactElement {
  const { onLoad } = useImageLoad(children.props.src)

  const handleChildLoad = useCallback((event: React.SyntheticEvent) => {
    onLoad()
    children.props.onLoad?.(event)
  }, [onLoad, children.props])

  return cloneElement(children, {
    onLoad: handleChildLoad,
  })
}

export const B = ImageLoadManager
