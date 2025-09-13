import classNames from 'classnames'
import { jsx, jsxs } from 'react/jsx-runtime'
import { createMediaQuery, useMediaQuery } from '../905/270904'
import { ModalRoot } from '../905/437088'
import { identity, toRem } from '../905/893109'
import { Jn, vo } from '../figma_app/272243'

// Original: let d = 'screen and (max-height: 20rem)';
const MAX_HEIGHT_MEDIA_QUERY = 'screen and (max-height: 20rem)'

// Original: let c = createMediaQuery(`screen and (max-width: 32rem), ${d}`);
const LARGE_BREAKPOINT_MEDIA_QUERY = createMediaQuery(`screen and (max-width: 32rem), ${MAX_HEIGHT_MEDIA_QUERY}`)

// Original: let u = createMediaQuery(`screen and (max-width: 22rem), ${d}`);
const MEDIUM_BREAKPOINT_MEDIA_QUERY = createMediaQuery(`screen and (max-width: 22rem), ${MAX_HEIGHT_MEDIA_QUERY}`)

// Original: let p = createMediaQuery(d);
const SMALL_BREAKPOINT_MEDIA_QUERY = createMediaQuery(MAX_HEIGHT_MEDIA_QUERY)

// Original: let h = { ... };
const MODAL_SIZE_CLASSES = {
  'fit-content': void 0,
  'sm': 'modal__sm__izkk-',
  'md': 'modal__md__rrfZR',
  'lg': 'modal__lg__wd2Q-',
}

/**
 * Modal root component (original: $$g1).
 * @param children - The modal content.
 * @param width - Width of the modal.
 * @param height - Height type.
 * @param overrideCloseButtonColor - Color override for close button.
 * @param htmlAttributes - Additional HTML attributes.
 * @param manager - Manager object.
 */
export function ModalRootComponent({
  children,
  width,
  height = 'fixed',
  overrideCloseButtonColor,
  htmlAttributes,
  ...props
}: {
  children: React.ReactNode
  width: number | 'fit-content' | 'sm' | 'md' | 'lg'
  height?: 'fixed' | 'dynamic' | 'fullscreen' | 'full'
  overrideCloseButtonColor?: string
  htmlAttributes?: React.HTMLAttributes<HTMLElement>
  manager: { preventUserClose: boolean }
  [key: string]: any
}) {
  // Determine size based on width (original: f = typeof t == 'number' || t === 'fit-content' ? 'lg' : t;)
  const size = typeof width === 'number' || width === 'fit-content' ? 'lg' : width

  // Get media query for size (original: y = useMediaQuery(...))
  const isFullscreen = useMediaQuery(
    size === 'sm'
      ? SMALL_BREAKPOINT_MEDIA_QUERY
      : size === 'md'
        ? MEDIUM_BREAKPOINT_MEDIA_QUERY
        : LARGE_BREAKPOINT_MEDIA_QUERY,
  )

  // Set styles or class based on width (original: typeof t == 'number' ? A = ... : _ = h[t];)
  let style: React.CSSProperties | undefined
  let sizeClass: string | undefined
  if (typeof width === 'number') {
    style = { [identity('--fpl-modal-width')]: toRem(width) }
  }
  else {
    sizeClass = MODAL_SIZE_CLASSES[width]
  }

  const preventUserClose = props.manager.preventUserClose

  return jsxs(ModalRoot, {
    ...props,
    style,
    htmlAttributes: {
      ...htmlAttributes,
      'data-modal-fullscreen': isFullscreen || void 0,
    },
    theme: {
      root: classNames('modal__root__37yc9', sizeClass, {
        modal__topAligned__Gtw5q: height === 'dynamic',
        modal__borderedFullscreen__3m9q3: height === 'fullscreen',
      }),
      contents: classNames('modal__contents__sJsR3', {
        modal__full__KNiPx: height === 'full',
      }),
      backdrop: 'modal__backdrop__PcWm1',
    },
    children: [
      children,
      !preventUserClose && jsx(Jn, { overrideColor: overrideCloseButtonColor }),
    ],
  })
}

/**
 * Modal form contents component (original: $$f0).
 * @param children - The form content.
 * @param htmlAttributes - Additional HTML attributes.
 * @param onSubmit - Submit handler.
 */
export function ModalFormContents({
  children,
  htmlAttributes,
  onSubmit,
  ...props
}: {
  children: React.ReactNode
  htmlAttributes?: React.HTMLAttributes<HTMLFormElement>
  onSubmit: (e: React.FormEvent) => void
  [key: string]: any
}) {
  return jsx('form', {
    ...htmlAttributes,
    className: 'utils__contents__try7q',
    onSubmit: (e) => {
      onSubmit(e)
      e.preventDefault()
    },
    ...props,
    children: jsx(vo, { ...props, children }),
  })
}

ModalRootComponent.displayName = 'Modal.Root'
ModalFormContents.displayName = 'Modal.FormContents'

// Original exports: export const Rq = $$f0; export const bL = $$g1;
export const Rq = ModalFormContents
export const bL = ModalRootComponent
