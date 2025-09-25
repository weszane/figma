import classNames from 'classnames'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { getValidationErrors } from '../905/113805'
import { getI18nString } from '../905/303541'
import { findFirstResult } from '../905/331038'
import { canSetFieldValue, getFieldValueOrDefault } from '../905/497882'
import { FieldContainer } from '../905/567946'
import { ButtonPrimitive } from '../905/632989'
import { j } from '../905/834956'
import { V } from '../figma_app/312987'
import { aZ } from '../figma_app/405906'

/**
 * Maps validation error to i18n string.
 * Original function: _
 */
function mapValidationErrorToMessage(error: any): string | undefined {
  if (error && error.type !== 'exception') {
    switch (error.key) {
      case 'MISSING_CATEGORY':
        return getI18nString('community.publishing.category_cant_be_empty')
      case 'CATEGORY_WITH_SUBCATEGORIES':
        return getI18nString('community.publishing.category_sub_cant_be_empty')
    }
  }
}

/** Resource publishing category dropdown type */
const RESOURCE_PUBLISHING_CATEGORY_SELECT_DROPDOWN = 'RESOURCE_PUBLISHING_CATEGORY_SELECT_DROPDOWN'

/**
 * Builds dropdown item for a category.
 * Original function: y
 */
function buildDropdownItem(category: any, selectedCategory: any) {
  return {
    displayText: aZ(category),
    isChecked: selectedCategory?.id === category.id || selectedCategory?.parent_category_id === category.id,
    args: { category },
  }
}

/**
 * Sorts categories, putting 'Other' last.
 * Original function: b
 */
function sortCategoryOtherLast(a: any, b: any) {
  return a.title === 'Other' ? 1 : b.title === 'Other' ? -1 : 0
}

/**
 * CategorySelectDropdown component.
 * Original export: $$v0
 */
export const CategorySelectDropdown = forwardRef<unknown, {
  categoryFieldManager: any
  touched: boolean
  onTouched?: () => void
}>(({ categoryFieldManager, touched, onTouched }, ref) => {
  const dispatch = useDispatch()
  const { setValue, validCategories } = categoryFieldManager
  const canEdit = canSetFieldValue(categoryFieldManager)
  const validationErrors = getValidationErrors(categoryFieldManager, !touched)
  const errorMessage = findFirstResult(validationErrors, mapValidationErrorToMessage)
  const selectedCategory = getFieldValueOrDefault(categoryFieldManager, undefined)
  const isDropdownShowing = useSelector((state: any) => state.dropdownShown?.type === RESOURCE_PUBLISHING_CATEGORY_SELECT_DROPDOWN)
  const dropdownRect = useSelector((state: any) => state.dropdownShown?.data.targetRect)

  /**
   * Memoized dropdown items grouped by parent category.
   */
  const dropdownItems = useMemo(() => {
    return validCategories
      .filter((cat: any) => cat.parent_category_id === null)
      .sort(sortCategoryOtherLast)
      .map((parentCat: any) => {
        const parentItem = buildDropdownItem(parentCat, selectedCategory)
        const children = validCategories
          .filter((cat: any) => cat.parent_category_id === parentCat.id)
          .sort(sortCategoryOtherLast)
          .map((childCat: any) => buildDropdownItem(childCat, selectedCategory))
        return children.length > 0
          ? { ...parentItem, children }
          : parentItem
      })
  }, [selectedCategory, validCategories])

  const buttonRef = useRef<any>(null)
  useImperativeHandle(ref, () => ({
    focus: (opts?: any) => {
      buttonRef.current?.focus(opts)
    },
  }), [])

  return jsx(FieldContainer, {
    label: getI18nString('community.publishing.category'),
    error: errorMessage,
    required: true,
    children: jsxs(V, {
      className: classNames('category_select--dropdownSelector--7houN', {
        'category_select--error--jHste': !!errorMessage,
      }),
      type: RESOURCE_PUBLISHING_CATEGORY_SELECT_DROPDOWN,
      showingDropdown: isDropdownShowing,
      dispatch,
      isMultilevelDropdown: true,
      isDisabled: !canEdit,
      children: [
        jsx(ButtonPrimitive, {
          'ref': buttonRef,
          'className': 'category_select--selectedItem--1HVpe',
          'data-testid': 'resource-publishing-category-select-dropdown-toggle',
          'disabled': !canEdit,
          'children': selectedCategory
            ? aZ(selectedCategory)
            : jsx('span', {
                className: 'category_select--selectedItemPlaceholder--Q5Gcm',
                children: getI18nString('community.publishing.select_a_category'),
              }),
        }),
        isDropdownShowing && dropdownRect && jsx(j, {
          showPoint: false,
          lean: 'right',
          leanPadding: 0,
          items: dropdownItems,
          parentRect: dropdownRect,
          onSelectItem: (item: any) => {
            onTouched?.()
            setValue?.(item.args.category)
            buttonRef.current?.focus()
          },
          dispatch,
          dataTestId: 'resource-publishing-category-select-dropdown',
        }),
      ],
    }),
  })
})

/** Export for usage elsewhere. Original export: P */
export const P = CategorySelectDropdown
