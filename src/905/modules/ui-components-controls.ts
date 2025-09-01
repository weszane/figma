/**
 * UI Components and Controls Library Module
 * 
 * This module handles UI component systems, form controls, input widgets,
 * dialog systems, and user interface elements extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - Form controls and input components (text inputs, checkboxes, selectors)
 * - Dialog and modal management systems
 * - Panel and container layout components
 * - Color controls and paint panel components
 * - Component browser and picker interfaces
 * - Variable controls and property panels
 * - Button groups and action strips
 * - Tab strips and navigation controls
 */

/**
 * UI Component Types and Interfaces
 */
export interface FormControlProps {
  value?: any
  onChange?: (value: any) => void
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  className?: string
  id?: string
  name?: string
}

export interface TextInputProps extends FormControlProps {
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url'
  multiline?: boolean
  rows?: number
  maxLength?: number
  pattern?: string
  required?: boolean
  autoComplete?: string
}

export interface CheckboxProps extends FormControlProps {
  checked?: boolean
  indeterminate?: boolean
  label?: string
  showFocus?: boolean
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  showCloseButton?: boolean
  allowOverflow?: boolean
  customFooter?: React.ReactNode
  className?: string
}

export interface PanelProps {
  title?: string
  children: React.ReactNode
  collapsible?: boolean
  collapsed?: boolean
  onToggle?: (collapsed: boolean) => void
  className?: string
}

export interface ColorControlProps {
  color: ColorValue
  onChange: (color: ColorValue) => void
  format?: ColorFormat
  showAlpha?: boolean
  disabled?: boolean
}

export interface ColorValue {
  r: number
  g: number
  b: number
  a?: number
}

export interface VariableControlProps {
  variable: VariableReference | null
  onVariableChange: (variable: VariableReference | null) => void
  onValueChange?: (value: any) => void
  showDetachIcon?: boolean
  allowEmpty?: boolean
}

export interface VariableReference {
  id: string
  name: string
  type: VariableType
  valuesByMode: Record<string, any>
}

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'hsb'
export type VariableType = 'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN'

/**
 * CSS Class Constants
 * Original: CSS class definitions from various UI files
 */
export const UI_COMPONENT_CLASSES = {
  // Basic Form Controls
  textInput: 'basic_form--textInput--e9Rn5',
  bigTextInput: 'basic_form--bigTextInput--5c4O9 basic_form--textInput--e9Rn5 basic_form--bigInput--OIoA- basic_form--input--mz9WY',
  labeledInputGroup: 'basic_form--labeledInputGroup--aeD6L',
  labeledInputGroupDisabled: 'basic_form--labeledInputGroupDisabled--BKwa0 basic_form--labeledInputGroup--aeD6L',
  hoverLabel: 'basic_form--hoverLabel--LKjBC',
  hoverLabelHasValue: 'basic_form--hoverLabel__hasValue--YDJPR',
  
  // Checkbox Controls
  checkboxContainer: 'basic_form--checkboxContainer--7vOVn',
  checkbox: 'basic_form--checkbox--C-tcA',
  checkboxSvg: 'basic_form--checkboxSvg--JFwlf',
  checkboxShowFocus: 'basic_form--checkboxShowFocus--bZTt6',
  checkboxLabel: 'basic_form--label--p2msE',
  
  // Button Controls
  buttonGroup: 'basic_form--buttonGroup--a5B5-',
  buttonGroupReversed: 'basic_form--buttonGroup_reversed--LKwyG',
  button: 'basic_form--btn--FSrmp ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd',
  buttonSecondary: 'basic_form--btnSecondaryMenu--JITnz basic_form--btn--FSrmp ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd',
  buttonBig: 'basic_form--btnBig--mR0CY ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd basic_form--bigInput--OIoA- basic_form--input--mz9WY',
  fullWidth: 'basic_form--fullWidth--RThzY',
  
  // Dialog Components
  dialogContents: 'dialog-common__contents__qZfqO',
  dialogCustomContents: 'dialog-common__customContents__yo2GE',
  dialogAllowOverflow: 'dialog-common__allowOverflow__tuRL5',
  dialogHeader: 'dialog-common__header__MJCj3',
  dialogTitle: 'dialog-common__title__-bc4G',
  dialogClose: 'dialog-common__close__3JSuS',
  dialogCloseButtonLight: 'dialog-common__closeButtonLight__rljK3',
  dialogCloseButtonDark: 'dialog-common__closeButtonDark__MjzZF',
  dialogBody: 'dialog-common__body__fKWep',
  dialogBodyNoScroll: 'dialog-common__bodyNoScroll__uv5kv',
  dialogFooter: 'dialog-common__footer__YrACL',
  dialogActionStrip: 'dialog-common__actionStrip__QIF--',
  
  // Paint Panel Components
  paintPanelColorValueContainer: 'paint_panels--paintPanelColorValueContainer--squRD paint_panels--colorValueContainer--DGeSP raw_components--borderFocusWithin--BaipZ paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t',
  paintPanelVariableValueContainer: 'paint_panels--paintPanelVariableValueContainer--bxDVz paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t',
  paintPanelValueSelected: 'paint_panels--paintPanelValueSelected--QHJsV',
  paintPanelValueSelectedSecondary: 'paint_panels--paintPanelValueSelectedSecondary--6uSZ2',
  colorInput: 'paint_panels--colorInput--nSz13',
  strokeInput: 'paint_panels--strokeInput--Zg8DO raw_components--flushLeft--YH-5P',
  strokeWeight: 'paint_panels--strokeWeight---jmn2 raw_components--borderFocusWithin--BaipZ',
  
  // Color Controls
  colorControlsWrapper: 'color_controls--colorControlsWrapper--1JzY4',
  sliderContainer: 'color_controls--sliderContainer--JCkl2',
  slider: 'color_controls--slider--dWz2q',
  typeSelect: 'color_controls--typeSelect--wRNzM',
  typeSelectNewUI: 'color_controls--typeSelectNewUI--MrWw5',
  colorInputs: 'color_controls--colorInputs--gDGL3 raw_components--multiValueInput--2UviX raw_components--borderFocusWithin--BaipZ',
  colorInputsNewUI: 'color_controls--colorInputsNewUI--o-7u7',
  
  // Variable Controls
  variableControlWrapper: 'variable_control--comboInputControl--8-2Lm',
  variableControlInput: 'variable_control--inputWrapper--3rpcl',
  variableControlActive: 'variable_control--active--cisjh',
  variableControlWithBorder: 'variable_control--comboInputControlWithBorder--TbOum raw_components--borderFocusWithin--BaipZ',
  variableControlNoBorder: 'variable_control--comboInputControlWithNoBorder--iNf1c',
  applyVariableIcon: 'variable_control--applyVariableIcon--5OLyR',
  detachIconContainer: 'variable_control--detachIconContainer--mq-yv',
  
  // Component Browser
  componentBrowserWrapper: 'component_browser_input--wrapper--VlXZo',
  componentBrowserDisabled: 'component_browser_input--disabled--QH8GR',
  componentBrowserReadonly: 'component_browser_input--readonly--m8lWF',
  componentBrowserChip: 'component_browser_input--chip--TzaRn',
  componentBrowserEmpty: 'component_browser_input--empty--wTZBe',
  componentListTableRow: 'component_browser_component_list--componentsListTableRow--MWiH-',
  componentListTableCell: 'component_browser_component_list--componentsListTableCell--qX8vW',
} as const

/**
 * Text Input Component Manager
 * Original: Text input functionality from 190597.ts
 */
export class TextInputManager {
  private inputElements: Map<string, HTMLInputElement | HTMLTextAreaElement> = new Map()
  private validators: Map<string, (value: string) => boolean> = new Map()

  /**
   * Create and register a text input
   * Original: text input creation from 190597.ts
   */
  createTextInput(props: TextInputProps): HTMLInputElement | HTMLTextAreaElement {
    const input = document.createElement(props.multiline ? 'textarea' : 'input') as HTMLInputElement | HTMLTextAreaElement
    const inputId = props.id || this.generateInputId()
    
    // Set basic properties
    input.id = inputId
    input.className = this.getInputClassName(props)
    input.value = props.value || ''
    input.placeholder = props.placeholder || ''
    input.disabled = props.disabled || false
    input.readOnly = props.readonly || false
    
    if (!props.multiline && props.type) {
      (input as HTMLInputElement).type = props.type
    }
    
    if (props.multiline && props.rows) {
      (input as HTMLTextAreaElement).rows = props.rows
    }
    
    if (props.maxLength) {
      input.maxLength = props.maxLength
    }
    
    if (!props.multiline && props.pattern) {
      (input as HTMLInputElement).pattern = props.pattern
    }
    
    if (!props.multiline && props.required) {
      (input as HTMLInputElement).required = props.required
    }
    
    if (props.name) {
      input.name = props.name
    }
    
    // Add event listeners
    this.addInputEventListeners(input, props)
    
    // Register the input
    this.inputElements.set(inputId, input)
    
    return input
  }

  /**
   * Create labeled input group
   * Original: labeled input group from 190597.ts
   */
  createLabeledInputGroup(
    label: string, 
    input: HTMLInputElement | HTMLTextAreaElement, 
    disabled: boolean = false
  ): HTMLDivElement {
    const container = document.createElement('div')
    container.className = disabled 
      ? UI_COMPONENT_CLASSES.labeledInputGroupDisabled 
      : UI_COMPONENT_CLASSES.labeledInputGroup

    const labelElement = document.createElement('label')
    labelElement.className = UI_COMPONENT_CLASSES.hoverLabel
    labelElement.textContent = label
    labelElement.setAttribute('for', input.id)

    // Add has-value class if input has value
    if (input.value) {
      labelElement.classList.add(UI_COMPONENT_CLASSES.hoverLabelHasValue.split(' ')[0])
    }

    container.appendChild(labelElement)
    container.appendChild(input)

    // Monitor input value changes to update label
    input.addEventListener('input', () => {
      if (input.value) {
        labelElement.classList.add(UI_COMPONENT_CLASSES.hoverLabelHasValue.split(' ')[0])
      } else {
        labelElement.classList.remove(UI_COMPONENT_CLASSES.hoverLabelHasValue.split(' ')[0])
      }
    })

    return container
  }

  /**
   * Validate input value
   */
  validateInput(inputId: string, value: string): boolean {
    const validator = this.validators.get(inputId)
    return validator ? validator(value) : true
  }

  /**
   * Set input validator
   */
  setInputValidator(inputId: string, validator: (value: string) => boolean): void {
    this.validators.set(inputId, validator)
  }

  /**
   * Get input by ID
   */
  getInput(inputId: string): HTMLInputElement | HTMLTextAreaElement | undefined {
    return this.inputElements.get(inputId)
  }

  /**
   * Update input value
   */
  updateInputValue(inputId: string, value: string): void {
    const input = this.inputElements.get(inputId)
    if (input) {
      input.value = value
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  /**
   * Remove input
   */
  removeInput(inputId: string): void {
    const input = this.inputElements.get(inputId)
    if (input) {
      input.remove()
      this.inputElements.delete(inputId)
      this.validators.delete(inputId)
    }
  }

  /**
   * Get input class name based on props
   */
  private getInputClassName(props: TextInputProps): string {
    if (props.className) {
      return props.className
    }
    
    if (props.multiline) {
      return UI_COMPONENT_CLASSES.bigTextInput
    }
    
    return UI_COMPONENT_CLASSES.textInput
  }

  /**
   * Add event listeners to input
   */
  private addInputEventListeners(input: HTMLInputElement | HTMLTextAreaElement, props: TextInputProps): void {
    if (props.onChange) {
      input.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement
        props.onChange!(target.value)
      })
    }

    // Add validation on blur
    input.addEventListener('blur', () => {
      const isValid = this.validateInput(input.id, input.value)
      if (!isValid) {
        input.classList.add('invalid')
      } else {
        input.classList.remove('invalid')
      }
    })
  }

  /**
   * Generate unique input ID
   */
  private generateInputId(): string {
    return `text-input-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * Checkbox Component Manager
 * Original: Checkbox functionality from 190597.ts
 */
export class CheckboxManager {
  private checkboxElements: Map<string, HTMLInputElement> = new Map()

  /**
   * Create checkbox component
   * Original: checkbox creation from 190597.ts
   */
  createCheckbox(props: CheckboxProps): HTMLDivElement {
    const container = document.createElement('div')
    container.className = UI_COMPONENT_CLASSES.checkboxContainer

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = props.id || this.generateCheckboxId()
    checkbox.className = UI_COMPONENT_CLASSES.checkbox
    checkbox.checked = props.checked || false
    checkbox.disabled = props.disabled || false
    checkbox.name = props.name || ''

    if (props.indeterminate) {
      checkbox.indeterminate = true
    }

    // Create custom checkbox visual
    const checkboxVisual = this.createCheckboxVisual(props.showFocus || false)

    // Create label if provided
    let label: HTMLLabelElement | null = null
    if (props.label) {
      label = document.createElement('label')
      label.className = UI_COMPONENT_CLASSES.checkboxLabel
      label.textContent = props.label
      label.setAttribute('for', checkbox.id)
    }

    // Add event listeners
    this.addCheckboxEventListeners(checkbox, props)

    // Assemble component
    container.appendChild(checkbox)
    container.appendChild(checkboxVisual)
    if (label) {
      container.appendChild(label)
    }

    // Register checkbox
    this.checkboxElements.set(checkbox.id, checkbox)

    return container
  }

  /**
   * Create checkbox visual element
   * Original: checkbox SVG from 190597.ts
   */
  private createCheckboxVisual(showFocus: boolean): HTMLElement {
    const visual = document.createElement('div')
    visual.className = showFocus 
      ? `${UI_COMPONENT_CLASSES.checkboxSvg} ${UI_COMPONENT_CLASSES.checkboxShowFocus}`
      : UI_COMPONENT_CLASSES.checkboxSvg

    // Create SVG checkmark
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 16 16')
    svg.setAttribute('width', '16')
    svg.setAttribute('height', '16')

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('d', 'M13.5 4.5L6 12l-3.5-3.5')
    path.setAttribute('stroke', 'currentColor')
    path.setAttribute('strokeWidth', '2')
    path.setAttribute('fill', 'none')

    svg.appendChild(path)
    visual.appendChild(svg)

    return visual
  }

  /**
   * Add checkbox event listeners
   */
  private addCheckboxEventListeners(checkbox: HTMLInputElement, props: CheckboxProps): void {
    if (props.onChange) {
      checkbox.addEventListener('change', () => {
        props.onChange!(checkbox.checked)
      })
    }
  }

  /**
   * Get checkbox by ID
   */
  getCheckbox(checkboxId: string): HTMLInputElement | undefined {
    return this.checkboxElements.get(checkboxId)
  }

  /**
   * Update checkbox state
   */
  updateCheckboxState(checkboxId: string, checked: boolean): void {
    const checkbox = this.checkboxElements.get(checkboxId)
    if (checkbox) {
      checkbox.checked = checked
      checkbox.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  /**
   * Generate unique checkbox ID
   */
  private generateCheckboxId(): string {
    return `checkbox-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * Button Component Manager
 * Original: Button functionality from 190597.ts
 */
export class ButtonManager {
  private buttonElements: Map<string, HTMLButtonElement> = new Map()

  /**
   * Create button component
   * Original: button creation from 190597.ts
   */
  createButton(props: ButtonProps): HTMLButtonElement {
    const button = document.createElement('button')
    button.id = this.generateButtonId()
    button.className = this.getButtonClassName(props)
    button.disabled = props.disabled || false
    button.type = props.type || 'button'

    // Set button content
    if (typeof props.children === 'string') {
      button.textContent = props.children
    } else {
      // For React components, we'll use a placeholder
      button.textContent = '[React Component]'
    }

    // Add event listeners
    if (props.onClick) {
      button.addEventListener('click', props.onClick)
    }

    // Register button
    this.buttonElements.set(button.id, button)

    return button
  }

  /**
   * Create button group
   * Original: button group from 190597.ts
   */
  createButtonGroup(buttons: HTMLButtonElement[], reversed: boolean = false): HTMLDivElement {
    const group = document.createElement('div')
    group.className = reversed 
      ? UI_COMPONENT_CLASSES.buttonGroupReversed 
      : UI_COMPONENT_CLASSES.buttonGroup

    buttons.forEach(button => {
      group.appendChild(button)
    })

    return group
  }

  /**
   * Get button class name based on props
   */
  private getButtonClassName(props: ButtonProps): string {
    if (props.className) {
      return props.className
    }

    let className = ''

    // Base button class
    switch (props.variant) {
      case 'secondary':
        className = UI_COMPONENT_CLASSES.buttonSecondary
        break
      default:
        className = UI_COMPONENT_CLASSES.button
        break
    }

    // Size modifier
    if (props.size === 'large') {
      className = UI_COMPONENT_CLASSES.buttonBig
    }

    // Full width modifier
    if (props.fullWidth) {
      className += ` ${UI_COMPONENT_CLASSES.fullWidth}`
    }

    return className
  }

  /**
   * Get button by ID
   */
  getButton(buttonId: string): HTMLButtonElement | undefined {
    return this.buttonElements.get(buttonId)
  }

  /**
   * Update button state
   */
  updateButtonState(buttonId: string, disabled: boolean): void {
    const button = this.buttonElements.get(buttonId)
    if (button) {
      button.disabled = disabled
    }
  }

  /**
   * Generate unique button ID
   */
  private generateButtonId(): string {
    return `button-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * Dialog Component Manager
 * Original: Dialog functionality from 511376.ts
 */
export class DialogManager {
  private openDialogs: Map<string, HTMLElement> = new Map()
  private dialogBackdrop: HTMLElement | null = null

  /**
   * Create dialog component
   * Original: dialog creation from 511376.ts
   */
  createDialog(props: DialogProps): HTMLElement {
    const dialogId = this.generateDialogId()
    const dialog = document.createElement('div')
    dialog.id = dialogId
    dialog.className = this.getDialogClassName(props)
    dialog.setAttribute('role', 'dialog')
    dialog.setAttribute('aria-modal', 'true')

    // Create dialog structure
    const contents = this.createDialogContents(props)
    dialog.appendChild(contents)

    // Handle backdrop
    if (!this.dialogBackdrop) {
      this.createDialogBackdrop()
    }

    // Register dialog
    this.openDialogs.set(dialogId, dialog)

    return dialog
  }

  /**
   * Create dialog contents
   * Original: dialog contents from 511376.ts
   */
  private createDialogContents(props: DialogProps): HTMLElement {
    const contents = document.createElement('div')
    contents.className = props.allowOverflow 
      ? `${UI_COMPONENT_CLASSES.dialogContents} ${UI_COMPONENT_CLASSES.dialogAllowOverflow}`
      : UI_COMPONENT_CLASSES.dialogContents

    // Create header if title provided
    if (props.title || props.showCloseButton) {
      const header = this.createDialogHeader(props.title, props.showCloseButton, props.onClose)
      contents.appendChild(header)
    }

    // Create body
    const body = document.createElement('div')
    body.className = UI_COMPONENT_CLASSES.dialogBody
    
    // Add children content (placeholder for React components)
    const contentDiv = document.createElement('div')
    contentDiv.textContent = '[Dialog Content]'
    body.appendChild(contentDiv)
    
    contents.appendChild(body)

    // Create footer if custom footer provided
    if (props.customFooter) {
      const footer = document.createElement('div')
      footer.className = UI_COMPONENT_CLASSES.dialogFooter
      footer.textContent = '[Custom Footer]'
      contents.appendChild(footer)
    }

    return contents
  }

  /**
   * Create dialog header
   * Original: dialog header from 511376.ts
   */
  private createDialogHeader(
    title?: string, 
    showCloseButton?: boolean, 
    onClose?: () => void
  ): HTMLElement {
    const header = document.createElement('div')
    header.className = UI_COMPONENT_CLASSES.dialogHeader

    if (title) {
      const titleElement = document.createElement('h2')
      titleElement.className = UI_COMPONENT_CLASSES.dialogTitle
      titleElement.textContent = title
      header.appendChild(titleElement)
    }

    if (showCloseButton) {
      const closeButton = document.createElement('button')
      closeButton.className = UI_COMPONENT_CLASSES.dialogClose
      closeButton.setAttribute('aria-label', 'Close dialog')
      closeButton.textContent = '×'
      
      if (onClose) {
        closeButton.addEventListener('click', onClose)
      }
      
      header.appendChild(closeButton)
    }

    return header
  }

  /**
   * Create dialog backdrop
   */
  private createDialogBackdrop(): void {
    this.dialogBackdrop = document.createElement('div')
    this.dialogBackdrop.className = 'dialog-backdrop'
    this.dialogBackdrop.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    `
    document.body.appendChild(this.dialogBackdrop)
  }

  /**
   * Show dialog
   */
  showDialog(dialogId: string): void {
    const dialog = this.openDialogs.get(dialogId)
    if (dialog && this.dialogBackdrop) {
      this.dialogBackdrop.appendChild(dialog)
      this.dialogBackdrop.style.display = 'block'
    }
  }

  /**
   * Hide dialog
   */
  hideDialog(dialogId: string): void {
    const dialog = this.openDialogs.get(dialogId)
    if (dialog) {
      dialog.remove()
      this.openDialogs.delete(dialogId)
      
      // Hide backdrop if no dialogs open
      if (this.openDialogs.size === 0 && this.dialogBackdrop) {
        this.dialogBackdrop.style.display = 'none'
      }
    }
  }

  /**
   * Get dialog class name
   */
  private getDialogClassName(props: DialogProps): string {
    let className = 'dialog-component'
    
    if (props.className) {
      className += ` ${props.className}`
    }
    
    return className
  }

  /**
   * Generate unique dialog ID
   */
  private generateDialogId(): string {
    return `dialog-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * Color Control Manager
 * Original: Color control functionality from 698732.ts and 228217.ts
 */
export class ColorControlManager {
  private colorControls: Map<string, HTMLElement> = new Map()

  /**
   * Create color control component
   * Original: color control creation from 698732.ts
   */
  createColorControl(props: ColorControlProps): HTMLElement {
    const controlId = this.generateControlId()
    const wrapper = document.createElement('div')
    wrapper.id = controlId
    wrapper.className = UI_COMPONENT_CLASSES.colorControlsWrapper

    // Create color input
    const colorInput = this.createColorInput(props)
    wrapper.appendChild(colorInput)

    // Create color sliders if needed
    if (props.format !== 'hex') {
      const sliders = this.createColorSliders(props)
      wrapper.appendChild(sliders)
    }

    // Create alpha slider if enabled
    if (props.showAlpha) {
      const alphaSlider = this.createAlphaSlider(props)
      wrapper.appendChild(alphaSlider)
    }

    // Register control
    this.colorControls.set(controlId, wrapper)

    return wrapper
  }

  /**
   * Create color input field
   * Original: color input from 228217.ts
   */
  private createColorInput(props: ColorControlProps): HTMLElement {
    const container = document.createElement('div')
    container.className = UI_COMPONENT_CLASSES.paintPanelColorValueContainer

    const input = document.createElement('input')
    input.type = 'text'
    input.className = UI_COMPONENT_CLASSES.colorInput
    input.value = this.colorToString(props.color, props.format || 'hex')
    input.disabled = props.disabled || false

    // Add color preview
    const preview = document.createElement('div')
    preview.style.cssText = `
      width: 20px;
      height: 20px;
      border-radius: 2px;
      background-color: ${this.colorToString(props.color, 'rgb')};
      border: 1px solid #ccc;
      margin-right: 8px;
    `

    container.appendChild(preview)
    container.appendChild(input)

    // Add event listeners
    input.addEventListener('input', () => {
      const newColor = this.parseColorString(input.value)
      if (newColor) {
        props.onChange(newColor)
        preview.style.backgroundColor = this.colorToString(newColor, 'rgb')
      }
    })

    return container
  }

  /**
   * Create color sliders
   * Original: slider creation from 698732.ts
   */
  private createColorSliders(props: ColorControlProps): HTMLElement {
    const container = document.createElement('div')
    container.className = UI_COMPONENT_CLASSES.sliderContainer

    const sliderTypes = this.getSliderTypes(props.format || 'rgb')
    
    sliderTypes.forEach(type => {
      const slider = this.createSlider(type, props)
      container.appendChild(slider)
    })

    return container
  }

  /**
   * Create individual slider
   */
  private createSlider(type: string, props: ColorControlProps): HTMLElement {
    const slider = document.createElement('input')
    slider.type = 'range'
    slider.className = UI_COMPONENT_CLASSES.slider
    slider.min = '0'
    slider.max = this.getSliderMax(type)
    slider.value = this.getSliderValue(type, props.color)
    slider.disabled = props.disabled || false

    slider.addEventListener('input', () => {
      const newColor = this.updateColorFromSlider(type, parseInt(slider.value), props.color)
      props.onChange(newColor)
    })

    return slider
  }

  /**
   * Create alpha slider
   */
  private createAlphaSlider(props: ColorControlProps): HTMLElement {
    const slider = document.createElement('input')
    slider.type = 'range'
    slider.className = UI_COMPONENT_CLASSES.slider
    slider.min = '0'
    slider.max = '100'
    slider.value = ((props.color.a || 1) * 100).toString()
    slider.disabled = props.disabled || false

    slider.addEventListener('input', () => {
      const newColor = { ...props.color, a: parseInt(slider.value) / 100 }
      props.onChange(newColor)
    })

    return slider
  }

  /**
   * Convert color to string representation
   */
  private colorToString(color: ColorValue, format: ColorFormat): string {
    switch (format) {
      case 'hex':
        return `#${Math.round(color.r * 255).toString(16).padStart(2, '0')}${Math.round(color.g * 255).toString(16).padStart(2, '0')}${Math.round(color.b * 255).toString(16).padStart(2, '0')}`
      case 'rgb':
        return `rgb(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)})`
      case 'hsl':
        const hsl = this.rgbToHsl(color)
        return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`
      default:
        return '#000000'
    }
  }

  /**
   * Parse color string to ColorValue
   */
  private parseColorString(colorString: string): ColorValue | null {
    // Simple hex color parsing
    const hexMatch = colorString.match(/^#([0-9a-f]{6})$/i)
    if (hexMatch) {
      const hex = hexMatch[1]
      return {
        r: parseInt(hex.substr(0, 2), 16) / 255,
        g: parseInt(hex.substr(2, 2), 16) / 255,
        b: parseInt(hex.substr(4, 2), 16) / 255,
        a: 1
      }
    }
    return null
  }

  /**
   * Convert RGB to HSL
   */
  private rgbToHsl(color: ColorValue): { h: number; s: number; l: number } {
    const { r, g, b } = color
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h: number, s: number
    const l = (max + min) / 2

    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
        default: h = 0
      }
      h /= 6
    }

    return { h: h * 360, s: s * 100, l: l * 100 }
  }

  /**
   * Get slider types for color format
   */
  private getSliderTypes(format: ColorFormat): string[] {
    switch (format) {
      case 'rgb': return ['r', 'g', 'b']
      case 'hsl': return ['h', 's', 'l']
      case 'hsb': return ['h', 's', 'b']
      default: return []
    }
  }

  /**
   * Get slider maximum value
   */
  private getSliderMax(type: string): string {
    switch (type) {
      case 'h': return '360'
      case 's':
      case 'l': return '100'
      case 'brightness': return '100'
      case 'r':
      case 'g':
      case 'b': return '255'
      default: return '100'
    }
  }

  /**
   * Get current slider value
   */
  private getSliderValue(type: string, color: ColorValue): string {
    switch (type) {
      case 'r': return Math.round(color.r * 255).toString()
      case 'g': return Math.round(color.g * 255).toString()
      case 'b': return Math.round(color.b * 255).toString()
      default: return '0'
    }
  }

  /**
   * Update color from slider change
   */
  private updateColorFromSlider(type: string, value: number, currentColor: ColorValue): ColorValue {
    const newColor = { ...currentColor }
    
    switch (type) {
      case 'r': newColor.r = value / 255; break
      case 'g': newColor.g = value / 255; break
      case 'b': newColor.b = value / 255; break
    }
    
    return newColor
  }

  /**
   * Generate unique control ID
   */
  private generateControlId(): string {
    return `color-control-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * Variable Control Manager
 * Original: Variable control functionality from 838262.ts
 */
export class VariableControlManager {
  private variableControls: Map<string, HTMLElement> = new Map()

  /**
   * Create variable control component
   * Original: variable control creation from 838262.ts
   */
  createVariableControl(props: VariableControlProps): HTMLElement {
    const controlId = this.generateControlId()
    const wrapper = document.createElement('div')
    wrapper.id = controlId
    wrapper.className = this.getVariableControlClassName(props)

    // Create input wrapper
    const inputWrapper = document.createElement('div')
    inputWrapper.className = UI_COMPONENT_CLASSES.variableControlInput

    // Create variable input
    const input = this.createVariableInput(props)
    inputWrapper.appendChild(input)

    // Create apply variable icon if needed
    if (props.variable) {
      const applyIcon = this.createApplyVariableIcon()
      inputWrapper.appendChild(applyIcon)
    }

    // Create detach icon if needed
    if (props.showDetachIcon && props.variable) {
      const detachIcon = this.createDetachIcon(props)
      inputWrapper.appendChild(detachIcon)
    }

    wrapper.appendChild(inputWrapper)

    // Register control
    this.variableControls.set(controlId, wrapper)

    return wrapper
  }

  /**
   * Create variable input field
   */
  private createVariableInput(props: VariableControlProps): HTMLElement {
    const input = document.createElement('input')
    input.type = 'text'
    input.value = props.variable ? props.variable.name : ''
    input.placeholder = props.allowEmpty ? 'Select variable...' : 'Variable required'
    input.readOnly = true

    // Add click handler to open variable picker
    input.addEventListener('click', () => {
      this.openVariablePicker(props)
    })

    return input
  }

  /**
   * Create apply variable icon
   * Original: apply variable icon from 838262.ts
   */
  private createApplyVariableIcon(): HTMLElement {
    const icon = document.createElement('div')
    icon.className = UI_COMPONENT_CLASSES.applyVariableIcon
    icon.textContent = '🔗' // Placeholder icon
    return icon
  }

  /**
   * Create detach icon
   * Original: detach icon from 838262.ts
   */
  private createDetachIcon(props: VariableControlProps): HTMLElement {
    const iconContainer = document.createElement('div')
    iconContainer.className = UI_COMPONENT_CLASSES.detachIconContainer

    const icon = document.createElement('button')
    icon.textContent = '×'
    icon.title = 'Detach variable'
    
    icon.addEventListener('click', (e) => {
      e.stopPropagation()
      props.onVariableChange(null)
    })

    iconContainer.appendChild(icon)
    return iconContainer
  }

  /**
   * Open variable picker modal
   */
  private openVariablePicker(props: VariableControlProps): void {
    // Would open a modal with variable selection
    console.warn('Variable picker would open here')
    
    // For demo, just call the callback with a mock variable
    const mockVariable: VariableReference = {
      id: 'var-1',
      name: 'Primary Color',
      type: 'COLOR',
      valuesByMode: { default: { r: 0, g: 0.5, b: 1, a: 1 } }
    }
    
    setTimeout(() => {
      props.onVariableChange(mockVariable)
    }, 100)
  }

  /**
   * Get variable control class name
   */
  private getVariableControlClassName(props: VariableControlProps): string {
    let className = UI_COMPONENT_CLASSES.variableControlWrapper
    
    if (props.variable) {
      className += ` ${UI_COMPONENT_CLASSES.variableControlActive}`
    }
    
    return className
  }

  /**
   * Generate unique control ID
   */
  private generateControlId(): string {
    return `variable-control-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * Factory Functions
 */

/**
 * Create text input manager
 */
export function createTextInputManager(): TextInputManager {
  return new TextInputManager()
}

/**
 * Create checkbox manager
 */
export function createCheckboxManager(): CheckboxManager {
  return new CheckboxManager()
}

/**
 * Create button manager
 */
export function createButtonManager(): ButtonManager {
  return new ButtonManager()
}

/**
 * Create dialog manager
 */
export function createDialogManager(): DialogManager {
  return new DialogManager()
}

/**
 * Create color control manager
 */
export function createColorControlManager(): ColorControlManager {
  return new ColorControlManager()
}

/**
 * Create variable control manager
 */
export function createVariableControlManager(): VariableControlManager {
  return new VariableControlManager()
}

/**
 * Convenience Exports
 */
export {
  ButtonManager as Buttons,
  CheckboxManager as Checkboxes,
  ColorControlManager as ColorControls,
  DialogManager as Dialogs,
  TextInputManager as TextInputs,
  VariableControlManager as VariableControls
}

/**
 * Default Export - Comprehensive UI Components and Controls System
 */
export default {
  TextInputManager,
  CheckboxManager,
  ButtonManager,
  DialogManager,
  ColorControlManager,
  VariableControlManager,
  UI_COMPONENT_CLASSES,
  createTextInputManager,
  createCheckboxManager,
  createButtonManager,
  createDialogManager,
  createColorControlManager,
  createVariableControlManager
}
