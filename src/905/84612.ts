/* eslint-disable accessor-pairs */
import dompurify from "dompurify"
import { Pp } from "../905/428481"
import { c_, dQ, e7, H, K_, mp, my, Nz, OF, q_, u_, Ws } from "../905/540111"
import { getColorForMultiplayer, getMultiplayerTextColor, multiplayerColors } from "../figma_app/136698"

/**
 * Sanitizes and creates a template element from HTML string
 * @param html - HTML string to sanitize and create template from
 * @returns Template element with sanitized content
 */
function createSanitizedTemplate(html: string): HTMLTemplateElement {
  const template = document.createElement("template")
  template.innerHTML = dompurify().sanitize(html)
  return template
}

/**
 * Figma Avatar Web Component
 * Displays a user avatar with image fallback to initials
 */
export class FigmaAvatarElement extends HTMLElement {
  private _lastClassName: string | undefined = undefined

  // CSS class names mapped from external constants
  private readonly SPAN_CLASS = `${e7} ${Pp}`
  private readonly IMG_CLASS = `${my} ${Pp}`

  constructor() {
    super()
  }

  /**
   * Creates a figma-avatar element with specified properties
   * @param avatarData - Avatar configuration data
   * @param existingElement - Optional existing element to reuse
   * @param options - Additional options for avatar creation
   * @returns Configured figma-avatar element
   */
  static createAvatarElement(
    avatarData: { initial: string, user_id: string, url?: string },
    existingElement?: FigmaAvatarElement | null,
    options?: { isInCluster?: boolean },
  ): FigmaAvatarElement {
    const avatarElement: any = existingElement || document.createElement("figma-avatar")
    avatarElement.initial = avatarData.initial
    avatarElement.id = avatarData.user_id
    avatarElement.src = avatarData.url || ""

    if (options?.isInCluster) {
      avatarElement.classList.add(K_)
    }

    return avatarElement
  }

  /**
   * Creates an error avatar element when image loading fails
   * @returns Div element styled as error avatar
   */
  private createErrorAvatar(): HTMLDivElement {
    const errorElement = document.createElement("div")
    errorElement.classList.add(my)
    return errorElement
  }

  /**
   * Gets the avatar image element
   */
  private get avatarImg(): HTMLImageElement {
    return this.getElementsByTagName("img")[0] as HTMLImageElement
  }

  /**
   * Gets the fallback span element for initials
   */
  private get fallbackSpan(): HTMLSpanElement {
    return this.getElementsByTagName("span")[0] as HTMLSpanElement
  }

  /**
   * Sets the source URL for the avatar image
   */
  set src(value: string) {
    if (value) {
      this.setAttribute("src", value)
    }
    else {
      this.removeAttribute("src")
    }
  }

  /**
   * Sets the initial text for the avatar
   */
  set initial(value: string) {
    if (value) {
      this.setAttribute("initial", value)
    }
    else {
      this.removeAttribute("initial")
    }
  }

  /**
   * Sets additional CSS class names for the avatar
   */
  set className(value: string) {
    if (value) {
      this.setAttribute("className", value)
    }
    else {
      this.removeAttribute("className")
    }
  }

  /**
   * Called when the element is added to the document
   */
  connectedCallback(): void {
    this.classList.add(H)
    const templateContent = FigmaAvatarElement.template.content.cloneNode(true)
    this.append(templateContent)

    // Initialize attributes
    FigmaAvatarElement.observedAttributes.forEach((attr) => {
      this.attributeChangedCallback(attr, "", this.getAttribute(attr) || "")
    })
  }

  /**
   * List of attributes to observe for changes
   */
  static get observedAttributes(): string[] {
    return ["src", "initial", "id", "className"]
  }

  /**
   * Called when an observed attribute changes
   * @param name - Name of the attribute that changed
   * @param oldValue - Previous value of the attribute
   * @param newValue - New value of the attribute
   */
  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (oldValue === newValue || !this.isConnected) {
      return
    }

    const attributes = {
      src: this.getAttribute("src"),
      initial: this.getAttribute("initial"),
      user_id: this.getAttribute("id") || undefined,
      className: this.getAttribute("className") || undefined,
      [name]: newValue,
    }

    const imgElement = this.avatarImg
    const spanElement = this.fallbackSpan

    // Handle image vs initials display
    if (attributes.src) {
      spanElement.style.display = "none"
      imgElement.style.display = "flex"
      imgElement.src = attributes.src
      imgElement.onerror = () => this.replaceChild(this.createErrorAvatar(), this.avatarImg)
    }
    else {
      spanElement.innerText = attributes.initial || "?"
      spanElement.style.display = "flex"

      const backgroundColor = attributes.backgroundColor || getColorForMultiplayer(attributes.user_id, multiplayerColors)
      spanElement.style.backgroundColor = backgroundColor
      spanElement.style.color = getMultiplayerTextColor(backgroundColor)

      imgElement.style.display = "none"
      imgElement.src = ""
    }

    // Handle class name updates
    if (attributes.className !== this._lastClassName) {
      if (this._lastClassName) {
        imgElement.classList.remove(this._lastClassName)
        spanElement.classList.remove(this._lastClassName)
      }

      if (attributes.className) {
        imgElement.classList.add(attributes.className)
        spanElement.classList.add(attributes.className)
      }

      this._lastClassName = attributes.className
    }
  }

  static desiredElementName = "figma-avatar"
  static styles = Nz
  static template = createSanitizedTemplate(`
    <span class="${e7} ${Pp}"></span>
    <img
      class="${my} ${Pp}"
      draggable=false
    ></img>
`)
}

// Define static properties

/**
 * Figma Avatars Container Web Component
 * Manages a collection of avatars with overflow handling
 */
export class FigmaAvatarsElement extends HTMLElement {
  private lastAvatars: Array<{ initial: string, user_id: string, url?: string }> = []

  // CSS class names mapped from external constants
  private readonly PRIMARY_CONTAINER_CLASS = q_
  private readonly SECONDARY_CONTAINER_CLASS = Ws
  private readonly OVERFLOW_CONTAINER_CLASS = OF
  private readonly OVERFLOW_COUNT_CLASS = c_
  private readonly AVATAR_OVERFLOW_CLASS = mp
  private readonly CONTAINER_CLASS = u_

  constructor() {
    super()
  }

  /**
   * Called when the element is added to the document
   */
  connectedCallback(): void {
    this.classList.add(dQ)
    const templateContent = FigmaAvatarsElement.template.content.cloneNode(true)
    this.append(templateContent)
    this.renderAvatars(this.lastAvatars)
  }

  /**
   * Gets the primary avatars container
   */
  private get avatarsPrimaryContainer(): HTMLDivElement {
    return this.getElementsByClassName(this.PRIMARY_CONTAINER_CLASS)[0] as HTMLDivElement
  }

  /**
   * Gets the secondary avatars container
   */
  private get avatarsSecondaryContainer(): HTMLDivElement {
    return this.getElementsByClassName(this.SECONDARY_CONTAINER_CLASS)[0] as HTMLDivElement
  }

  /**
   * Gets the overflow avatars container
   */
  private get avatarsOverflowContainer(): HTMLDivElement {
    return this.getElementsByClassName(this.OVERFLOW_CONTAINER_CLASS)[0] as HTMLDivElement
  }

  /**
   * Gets the overflow avatar element
   */
  private get overflowAvatar(): FigmaAvatarElement | null {
    const container = this.avatarsOverflowContainer
    return container?.getElementsByTagName("figma-avatar")[0] as FigmaAvatarElement || null
  }

  /**
   * Gets the overflow count element
   */
  private get overflowCount(): HTMLSpanElement | null {
    const container = this.avatarsOverflowContainer
    return container?.getElementsByClassName(this.OVERFLOW_COUNT_CLASS)[0] as HTMLSpanElement || null
  }

  /**
   * Gets the clamp value for limiting displayed avatars
   */
  get clamp(): number | undefined {
    const clampAttr = this.getAttribute("clamp")
    if (clampAttr) {
      return parseInt(clampAttr) || undefined
    }
    return undefined
  }

  /**
   * Sets the clamp value
   */
  set clamp(value: number | undefined) {
    if (value) {
      this.setAttribute("clamp", `${value}`)
    }
    else {
      this.removeAttribute("clamp")
    }
  }

  /**
   * List of attributes to observe for changes
   */
  static get observedAttributes(): string[] {
    return ["clamp"]
  }

  /**
   * Called when an observed attribute changes
   * @param name - Name of the attribute that changed
   * @param oldValue - Previous value of the attribute
   * @param newValue - New value of the attribute
   */
  attributeChangedCallback(_name: string, oldValue: string, newValue: string): void {
    if (this.isConnected && oldValue !== newValue) {
      this.renderAvatars(this.lastAvatars)
    }
  }

  /**
   * Gets all avatar elements indexed by user ID
   */
  private get avatarElements(): Record<string, FigmaAvatarElement> {
    return Array.from(this.getElementsByTagName("figma-avatar"))
      .reduce((acc, element) => {
        acc[element.id] = element as FigmaAvatarElement
        return acc
      }, {} as Record<string, FigmaAvatarElement>)
  }

  /**
   * Renders avatars in a container
   * @param container - Container element to render avatars in
   * @param avatars - Array of avatar data to render
   * @param existingElements - Map of existing avatar elements
   */
  private render(
    container: Element,
    avatars: Array<{ initial: string, user_id: string, url?: string }>,
    existingElements: Record<string, FigmaAvatarElement>,
  ): void {
    const avatarElements = avatars.map(avatar =>
      FigmaAvatarElement.createAvatarElement(avatar, existingElements[avatar.user_id]),
    )

    const userIds = new Set(avatars.map(avatar => avatar.user_id))
    const containerChildren = container.children

    // Remove obsolete avatars
    Array.from(containerChildren).forEach((child) => {
      if (!userIds.has(child.id)) {
        container.removeChild(child)
      }
    })

    // Insert/update avatars in correct order
    avatarElements.reverse().forEach((avatarElement, index) => {
      const existingElement = containerChildren[index] as FigmaAvatarElement
      if (existingElement?.id !== avatarElement.id) {
        if (existingElement) {
          container.insertBefore(avatarElement, existingElement)
        }
        else {
          container.appendChild(avatarElement)
        }
      }
    })

    // Show/hide container based on avatar count
    container.setAttribute("style", `display: ${avatarElements.length > 0 ? "flex" : "none"}`)
  }

  /**
   * Renders all avatars with overflow handling
   * @param avatars - Array of avatar data to render
   */
  private renderAvatars(
    avatars: Array<{ initial: string, user_id: string, url?: string }>,
  ): void {
    if (!this.isConnected
      || !this.avatarsPrimaryContainer
      || !this.avatarsSecondaryContainer
      || !this.avatarsOverflowContainer) {
      return
    }

    // Deduplicate avatars by user ID
    const uniqueUserIds = new Set<string>()
    const uniqueAvatars = avatars.filter((avatar) => {
      const isDuplicate = uniqueUserIds.has(avatar.user_id)
      uniqueUserIds.add(avatar.user_id)
      return !isDuplicate
    })

    const clampValue = this.clamp || uniqueAvatars.length + 1
    const existingAvatarElements = this.avatarElements

    // Render primary avatars
    const primaryAvatars = uniqueAvatars.slice(0, clampValue)
    this.render(this.avatarsPrimaryContainer, primaryAvatars, existingAvatarElements)

    // Handle overflow avatar
    const overflowAvatarData = clampValue < uniqueAvatars.length ? uniqueAvatars[clampValue] : undefined
    const currentOverflowAvatar = this.overflowAvatar

    if (overflowAvatarData && !currentOverflowAvatar) {
      this.avatarsOverflowContainer.style.display = "flex"
      const overflowElement = FigmaAvatarElement.createAvatarElement(
        overflowAvatarData,
        existingAvatarElements[overflowAvatarData.user_id],
      )
      overflowElement.initial = overflowAvatarData.initial
      overflowElement.id = overflowAvatarData.user_id
      overflowElement.src = overflowAvatarData.url || ""
      overflowElement.classList.add(this.AVATAR_OVERFLOW_CLASS)
      this.avatarsOverflowContainer.prepend(overflowElement)
    }
    else if (overflowAvatarData && currentOverflowAvatar) {
      currentOverflowAvatar.initial = overflowAvatarData.initial
      currentOverflowAvatar.id = overflowAvatarData.user_id
      currentOverflowAvatar.src = overflowAvatarData.url || ""
    }
    else if (currentOverflowAvatar) {
      this.avatarsOverflowContainer.removeChild(currentOverflowAvatar)
      this.avatarsOverflowContainer.style.display = "none"
    }

    // Render secondary avatars
    const secondaryStartIndex = clampValue + 1
    const secondaryAvatars = secondaryStartIndex < uniqueAvatars.length
      ? uniqueAvatars.slice(secondaryStartIndex)
      : []
    this.render(this.avatarsSecondaryContainer, secondaryAvatars.slice(0, 2), existingAvatarElements)

    // Update overflow count
    const overflowCountElement = this.overflowCount
    if (secondaryAvatars.length > 0 && overflowCountElement) {
      const overflowCount = `${secondaryAvatars.length + 1}`
      overflowCountElement.style.visibility = "visible"
      this.avatarsOverflowContainer.style.setProperty("--overflowCount", overflowCount)
    }
    else if (overflowCountElement) {
      overflowCountElement.style.visibility = "hidden"
      this.avatarsOverflowContainer.style.removeProperty("--overflowCount")
    }
  }

  /**
   * Sets the avatars to display
   */
  set avatars(
    value: Array<{ initial: string, user_id: string, url?: string }>,
  ) {
    this.renderAvatars(value)
    this.lastAvatars = value
  }

  static desiredElementName: string
  static style: string
  static template: HTMLTemplateElement
}

// Define static properties
FigmaAvatarsElement.desiredElementName = "figma-avatars"
FigmaAvatarsElement.style = Nz
FigmaAvatarsElement.template = createSanitizedTemplate(`
    <div class="${u_}">
      <div class="${Ws}">
      </div>
      <div class="${OF}">
        <span class="${c_}"></span>
      </div>
      <div class="${q_}">
      </div>
    <div>
`)


// Register custom elements
if ("customElements" in window && !customElements.get(FigmaAvatarElement.desiredElementName)) {
  customElements.define(FigmaAvatarsElement.desiredElementName, FigmaAvatarsElement)
  customElements.define(FigmaAvatarElement.desiredElementName, FigmaAvatarElement)
}


export const M = FigmaAvatarElement
export const V = FigmaAvatarsElement
