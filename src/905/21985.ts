import type { JSX } from 'react'
import classNames from 'classnames'
import { jsx } from 'react/jsx-runtime'
import { description } from '../905/620622'
import { useSelectionContext } from '../905/751750'
import { generateDescId } from '../905/786321'

export interface DescriptionProps {
  className?: string
  children?: React.ReactNode
}

/**
 * Description component that renders a paragraph with generated description ID
 * @param props - Component props containing className and children
 * @returns JSX element representing the description paragraph
 */
export function Description(props: DescriptionProps): JSX.Element {
  const selectionContext = useSelectionContext()
  const descriptionId = generateDescId(selectionContext)

  return jsx('p', {
    className: classNames(description, props.className),
    id: descriptionId,
    children: props.children,
  })
}

Description.displayName = 'Description'
export const V = Description
