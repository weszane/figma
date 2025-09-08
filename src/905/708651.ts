import type { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import { forwardRef, useMemo } from 'react'
import { jsx } from 'react/jsx-runtime'

/**
 * Props for SpreadsheetTable (Zu)
 */
export interface SpreadsheetTableProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  gridColumnSizes?: string | (string | number)[]
  stickyTop?: boolean
  stickyRight?: boolean
  stickyBottom?: boolean
  stickyLeft?: boolean
  [key: string]: any
}

/**
 * SpreadsheetTable (Zu)
 * Renders the root table element for the spreadsheet.
 */
export const Zu = forwardRef<HTMLTableElement, SpreadsheetTableProps>((
  {
    children,
    className,
    style,
    gridColumnSizes,
    stickyTop = false,
    stickyRight = false,
    stickyBottom = false,
    stickyLeft = false,
    ...rest
  },
  ref,
) => {
  // Memoize grid column sizes for performance
  const gridTemplateColumns = useMemo(() => {
    if (typeof gridColumnSizes === 'string')
      return gridColumnSizes
    if (Array.isArray(gridColumnSizes)) {
      return gridColumnSizes
        .map(size => typeof size === 'number' ? `${size}px` : size)
        .join(' ')
    }
    return undefined
  }, [gridColumnSizes])

  return jsx('table', {
    ...rest,
    ref,
    className: classNames(
      'spreadsheet--root--GoiEA',
      stickyTop && 'spreadsheet--stickyTop--ndU2j',
      stickyRight && 'spreadsheet--stickyRight--6ryUx',
      stickyBottom && 'spreadsheet--stickyBottom--D4aGd',
      stickyLeft && 'spreadsheet--stickyLeft--Liwg0',
      className,
    ),
    style: {
      gridTemplateColumns,
      ...style,
    },
    children: jsx('tbody', {
      className: 'spreadsheet--body--a1SVF',
      children,
    }),
  })
})

/**
 * Props for SpreadsheetRow ($y)
 */
export interface SpreadsheetRowProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  [key: string]: any
}

/**
 * SpreadsheetRow ($y)
 * Renders a table row for the spreadsheet.
 */
export const $y = forwardRef<HTMLTableRowElement, SpreadsheetRowProps>((
  {
    children,
    className,
    style,
    ...rest
  },
  ref,
) => {
  return jsx('tr', {
    ...rest,
    ref,
    className: classNames('spreadsheet--row--Qg6tf', className),
    style,
    children,
  })
})

/**
 * Props for SpreadsheetCell (Jy)
 */
export interface SpreadsheetCellProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  [key: string]: any
}

/**
 * SpreadsheetCell (Jy)
 * Renders a table cell for the spreadsheet.
 */
export const Jy = forwardRef<HTMLTableCellElement, SpreadsheetCellProps>((
  {
    children,
    className,
    style,
    ...rest
  },
  ref,
) => {
  return jsx('td', {
    ...rest,
    ref,
    className: classNames('spreadsheet--cell--gq5PL', className),
    style,
    children,
  })
})
