import { forwardRef, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { jsx } from 'react/jsx-runtime'
import { WAFImage } from '../905/675859'
import { SvgComponent } from '../905/714743'
import { A } from '../1617/853774'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { hasLocalFileId } from '../figma_app/155287'
import { getPluginUploadUrl } from '../figma_app/455620'

/**
 * Props for PluginIconDisplay component (original: $$p1)
 */
export interface PluginIconDisplayProps {
  plugin: {
    plugin_id: string
    name: string
    redirect_icon_url?: string
    // Add other plugin properties as needed
  }
}

/**
 * Displays the plugin icon or a fallback SVG if local file id exists.
 * @param props - PluginIconDisplayProps
 */
export function PluginIconDisplay({
  plugin,
}: PluginIconDisplayProps) {
  // Original: $$p1
  return jsx('div', {
    className: cssBuilderInstance.py4.flex.alignCenter.justifyCenter.$,
    children: hasLocalFileId(plugin)
      ? jsx(SvgComponent, {
          svg: A,
          className: cssBuilderInstance.colorIcon.$,
        })
      : jsx(PluginImage, {
          plugin,
          className: cssBuilderInstance.h16.w16.bRadius2.$,
        }),
  })
}

/**
 * Props for PluginImage component (original: $$m0)
 */
export interface PluginImageProps {
  plugin: {
    plugin_id: string
    name: string
    redirect_icon_url?: string
    // Add other plugin properties as needed
  }
  className?: string
}

/**
 * Renders the plugin image based on theme and available URLs.
 * @param props - PluginImageProps
 * @param ref - React ref
 */
export const PluginImage = forwardRef<HTMLImageElement, PluginImageProps>(
  ({ plugin, ...rest }, ref) => {
    // Original: $$m0
    const visibleTheme = useSelector<AppState>(state => state.theme?.visibleTheme)

    // Memoized plugin upload image
    const pluginUploadImage = useMemo(() => {
      const uploadUrl = getPluginUploadUrl(plugin.plugin_id)
      return uploadUrl
        ? jsx(WAFImage, {
            ref,
            src: uploadUrl,
            alt: `${plugin.name} icon`,
            ...rest,
          })
        : null
    }, [rest, plugin.name, plugin.plugin_id, ref])

    // Memoized redirect icon image
    const redirectIconImage = useMemo(() => jsx(WAFImage, {
      ref,
      src: plugin.redirect_icon_url,
      alt: `${plugin.name} icon`,
      ...rest,
    }), [rest, plugin.name, plugin.redirect_icon_url, ref])

    // Prefer upload image in dark theme if available, else fallback
    return visibleTheme === 'dark' && pluginUploadImage ? pluginUploadImage : redirectIconImage
  },
)

// Export refactored names for imports
export const V = PluginImage
export const d = PluginIconDisplay
