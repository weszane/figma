import { jsx } from "react/jsx-runtime"

/**
 * FileRowLeft component - original name: $$r0
 * Renders a div with the left side class for file rows.
 */
export const FileRowLeft: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return jsx("div", {
    className: "file_row_sides--fileRowLeft--owCyK",
    children,
  })
}

/**
 * FileRowLeftV2 component - original name: $$a1
 * Renders a div with the v2 left side class for file rows.
 */
export const FileRowLeftV2: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return jsx("div", {
    className: "file_row_sides--fileRowLeft_v2---dnKL",
    children,
  })
}

/**
 * FileRowRight component - original name: $$s2
 * Renders a div with the right side class for file rows.
 */
export const FileRowRight: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return jsx("div", {
    className: "file_row_sides--fileRowRight--BGY2z",
    children,
  })
}

/**
 * FileRowRightV2 component - original name: $$o3
 * Renders a div with the v2 right side class for file rows.
 */
export const FileRowRightV2: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return jsx("div", {
    className: "file_row_sides--fileRowRight_v2--bITuC",
    children,
  })
}

// Refactored exports to use new component names
export const h5 = FileRowLeft
export const Bj = FileRowLeftV2
export const yz = FileRowRight
export const eR = FileRowRightV2
