import type { ReactElement, ReactNode } from 'react'
import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import { omit } from '../905/372580'

// Helpers for variant name processing
const normalizeAndJoin = (parts: string[]): string => parts.map(p => p.trim()).sort().join(',')
function extractKeys(name: string): string[] {
  return name.split(',').map((entry) => {
    const [key] = entry.split('=')
    return key.trim()
  })
}

type VariantElement = ReactElement<{ name?: string }>
interface ComponentSetProps extends Record<string, any> {
  children: ReactNode
  name?: string
}

export const ComponentSet = forwardRef<unknown, ComponentSetProps>((props, ref) => {
  const { children, name, ...rest } = props

  // Only consider valid React elements from children
  const elements = Children.toArray(children).filter(isValidElement) as VariantElement[]
  if (elements.length === 0) {
    throw new Error(`ComponentSet requires at least one child element${name ? ` in ${name}` : ''}`)
  }

  const firstName = elements[0].props.name ?? ''
  const keys = extractKeys(firstName)

  const targetSignature = normalizeAndJoin(
    keys.map(key => `${key}=${rest[key]?.toString()}`),
  )

  const matched = elements.find((el) => {
    const elName = el.props.name
    return !!elName && normalizeAndJoin(elName.split(',')) === targetSignature
  })

  if (!matched) {
    throw new Error(`Cannot find variant ${targetSignature} in component set${name ? ` ${name}` : ''}`)
  }

  return cloneElement(matched, {
    key: 'selected',
    ...(ref ? { ref } : {}),
    ...omit(rest, keys),
  })
})
