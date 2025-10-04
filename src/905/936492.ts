/* eslint-disable accessor-pairs */
import { FigmaAvatarElement } from "../905/84612"
import { A3, Di, gy, hO, IS, my, Nz, pd, rX, u_, v2, v3, ZR } from "../905/428481"
import { CommentPinElement } from "../905/512783"
import { Point } from "../905/736624"
import { createAnimationPromise } from "../905/799129"
import { centeredValue } from "../figma_app/62612"
import { aggregateUserComments } from "../figma_app/70421"
import { isPinnedCommentsEnabled } from "../figma_app/591738"
import { Sw } from "../figma_app/805373"

export const CLUSTER_SIZE = 64

/**
 * Creates a template element from HTML string
 * @param html - HTML string to create template from
 * @returns Template element containing the HTML
 */
function createTemplate(html: string): HTMLTemplateElement {
  const template = document.createElement("template")
  template.innerHTML = html
  return template
}

/**
 * Custom element for displaying clustered avatars
 * Manages rendering and updating of avatar elements within a cluster
 */
class FigmaClusterAvatarsElement extends HTMLElement {
  private _lastAvatars: any[] = []
  private _avatars: any[] = []

  constructor() {
    super()
  }

  /**
   * Lifecycle method called when element is added to the DOM
   */
  connectedCallback(): void {
    this.classList.add(u_)
    requestAnimationFrame(() => this.render())
  }

  /**
   * Sets the avatars to display in the cluster (max 5)
   */
  set avatars(avatars: any[]) {
    this._avatars = avatars.slice(0, 5)
  }

  /**
   * Gets avatar elements mapped by user ID
   */
  get avatarElementsById(): Record<string, Element> {
    return Array.from(this.getElementsByTagName("figma-avatar"))
      .reduce((acc, element) => {
        acc[(element as any).id] = element
        return acc
      }, {} as Record<string, Element>)
  }

  /**
   * Gets the ghost avatar element if it exists
   */
  get ghostAvatar(): Element | undefined {
    return this.getElementsByClassName(v2)[0]
  }

  /**
   * Renders the avatar cluster based on current avatars
   */
  render(): void {
    if (this._lastAvatars !== this._avatars) {
      const existingAvatarElements = this.avatarElementsById
      const avatarElements = this._avatars.map((avatarData) => {
        const avatarElement = FigmaAvatarElement.createAvatarElement(
          avatarData,
          existingAvatarElements[avatarData.user_id] as FigmaAvatarElement,
          {
            isInCluster: true,
          },
        )
        avatarElement.classList.add(my)
        return avatarElement
      })

      const userIds = new Set(this._avatars.map(avatar => avatar.user_id))
      const childElements = this.children

      // Remove avatars that are no longer in the list
      Array.from(childElements).forEach((child) => {
        if (!userIds.has((child as any).id)) {
          this.removeChild(child)
        }
      })

      // Add or reorder avatar elements
      avatarElements.forEach((avatarElement, index) => {
        const existingElement = childElements[index]
        if (existingElement?.id !== avatarElement.id) {
          if (existingElement) {
            this.insertBefore(avatarElement, existingElement)
          }
          else {
            this.appendChild(avatarElement)
          }
        }
      })

      // Set display based on whether we have avatars
      this.style.display = avatarElements.length > 0 ? "flex" : "none"

      // Handle ghost avatar for single avatar case
      if (avatarElements.length === 1) {
        const [firstAvatar] = avatarElements
        const ghostAvatar = firstAvatar.cloneNode(true) as HTMLElement
        ghostAvatar.classList.add(v2)
        this.prepend(ghostAvatar)
      }
      else {
        const existingGhostAvatar = this.ghostAvatar
        if (existingGhostAvatar) {
          this.removeChild(existingGhostAvatar)
        }
      }

      this._lastAvatars = this._avatars
    }
  }

  // Define element properties
  static desiredElementName = "figma-cluster-avatars"
  static styles = [FigmaAvatarElement.styles, Nz]
}

// Register custom element
if ("customElements" in window && !customElements.get(FigmaClusterAvatarsElement.desiredElementName)) {
  customElements.define(FigmaClusterAvatarsElement.desiredElementName, FigmaClusterAvatarsElement)
}

/**
 * Custom element for displaying comment clusters
 * Manages the overall comment cluster UI including avatars, counts, and positioning
 */
export class FigmaCommentClusterElement extends HTMLElement {
  private _avatars: any[] = []
  private _creationChangeType: string | null = null
  private _pinnedToFileIcon: Node | null = null

  constructor() {
    super()
  }

  /**
   * Gets the pinned to file indicator element
   */
  get pinnedThreadToFileIndicator(): Element | undefined {
    return this.getElementsByClassName(v3)[0]
  }

  /**
   * Gets the avatars container element
   */
  get avatarsContainer(): FigmaClusterAvatarsElement | null {
    return this.getElementsByTagName(FigmaClusterAvatarsElement.desiredElementName)[0] as FigmaClusterAvatarsElement
  }

  /**
   * Sets the avatars to display
   */
  set avatars(avatars: any[]) {
    this._avatars = avatars
  }

  /**
   * Sets the creation change type
   */
  set creationChangeType(type: string | null) {
    this._creationChangeType = type
  }

  /**
   * Callback when element is removed (currently empty)
   */
  onRemove(): void { }

  /**
   * Sorts avatars by unread comments and total comments
   * @param avatarsMap - Map of avatar data
   * @returns Sorted array of avatar objects
   */
  static getSortedAvatars(avatarsMap: Map<any, any>): Array<{ user_id: string, initial: string, url: string }> {
    return [...avatarsMap.values()]
      .sort((a, b) => {
        // Both have unread comments
        if (a.num_unread_comments > 0 && b.num_unread_comments > 0) {
          return a.num_comments > b.num_comments ? -1 : 1
        }
        // Only a has unread comments
        if (a.num_unread_comments > 0)
          return -1
        // Only b has unread comments
        if (b.num_unread_comments > 0)
          return 1
        // Neither has unread comments, sort by total comments
        return a.num_comments > b.num_comments ? -1 : 1
      })
      .map(avatar => ({
        user_id: avatar.avatar_user_id,
        initial: avatar.avatar_user_handle[0],
        url: Sw(avatar.avatar_url),
      }))
  }

  /**
   * Sets avatars from a map
   */
  set avatarsMap(avatarsMap: Map<any, any> | null) {
    this.avatars = avatarsMap ? FigmaCommentClusterElement.getSortedAvatars(avatarsMap) : []
  }

  /**
   * Sets minimized state
   */
  set minimized(isMinimized: boolean) {
    if (isMinimized) {
      this.setAttribute("minimized", "true")
    }
    else {
      this.removeAttribute("minimized")
    }
  }

  /**
   * Sets pinned to file state
   */
  set pinnedToFile(isPinned: boolean) {
    if (isPinned) {
      this.setAttribute("pinned-to-file", "true")
    }
    else {
      this.removeAttribute("pinned-to-file")
    }
  }

  /**
   * Sets unread state
   */
  set unread(isUnread: boolean) {
    if (isUnread) {
      this.setAttribute("unread", "true")
    }
    else {
      this.removeAttribute("unread")
    }
  }

  /**
   * Sets dimmed state
   */
  set dimmed(isDimmed: boolean) {
    if (isDimmed) {
      this.setAttribute("dimmed", "true")
    }
    else {
      this.removeAttribute("dimmed")
    }
  }

  /**
   * Sets emphasized state
   */
  set emphasized(isEmphasized: boolean) {
    if (isEmphasized) {
      this.setAttribute("emphasized", "true")
    }
    else {
      this.removeAttribute("emphasized")
    }
  }

  /**
   * Gets the cluster count element
   */
  get clusterCountElement(): HTMLElement {
    return this.getElementsByClassName(A3)[0] as HTMLElement
  }

  /**
   * Gets the avatar cluster element
   */
  get avatarCluster(): Element | undefined {
    return this.getElementsByClassName(IS)[0]
  }

  /**
   * Sets the thread count
   */
  set threadCount(count: number) {
    this.setAttribute("thread-count", `${count}`)
  }

  /**
   * Attributes that trigger attributeChangedCallback
   */
  static get observedAttributes(): string[] {
    return ["unread", "dimmed", "emphasized", "thread-count", "pinned-to-file", "minimized"]
  }

  /**
   * Helper to toggle CSS classes based on attribute values
   */
  private setClassOn(
    element: Element,
    attributeName: string,
    changedAttribute: string,
    newValue: string | null,
    className: string,
  ): void {
    if (changedAttribute === attributeName) {
      if (newValue) {
        element.classList.add(className)
      }
      else {
        element.classList.remove(className)
      }
    }
  }

  /**
   * Lifecycle method called when attributes change
   */
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (!this.isConnected)
      return

    this.setClassOn(this, "unread", name, newValue, gy)
    this.setClassOn(this, "dimmed", name, newValue, rX)
    this.setClassOn(this, "emphasized", name, newValue, hO)

    if (isPinnedCommentsEnabled()) {
      this.setClassOn(this, "minimized", name, newValue, pd)
      this.setClassOn(this.pinnedThreadToFileIndicator!, "pinned-to-file", name, newValue, ZR)
    }

    if (name === "thread-count") {
      const countElement = this.clusterCountElement
      const clusterElement = this.avatarCluster

      if (!countElement || !clusterElement)
        return

      const hadDisplayCount = countElement.hasAttribute("display-thread-count")
      countElement.setAttribute("display-thread-count", newValue || "0")

      if (hadDisplayCount || this._creationChangeType !== "viewport_visible") {
        this.animateClusterThreadCount()
      }
    }
  }

  /**
   * Lifecycle method called when element is added to the DOM
   */
  connectedCallback(): void {
    this.classList.add(Di)
    const clone = FigmaCommentClusterElement.template.content.cloneNode(true)
    this.append(clone)

    FigmaCommentClusterElement.observedAttributes.forEach((attribute) => {
      this.attributeChangedCallback(attribute, null, this.getAttribute(attribute) || null)
    })

    requestAnimationFrame(() => this.render())
  }

  /**
   * Animates element directionally
   */
  private animateDirectionally(
    position: Point | null,
    offset: number,
    callback?: () => void,
  ): Promise<void> {
    if (!position)
      return Promise.resolve()

    const center = {
      x: this.clientWidth / 2,
      y: this.clientHeight / 2,
    }

    const delta = Point.subtract(position, center)
    const transform = `translate3d(${delta.x}px, ${delta.y}px, 0px) scale(0.2)`

    return createAnimationPromise(this, [{
      offset,
      transform,
    }], {
      duration: 200,
    }).then(() => {
      if (callback)
        callback()
    })
  }

  /**
   * Animates aggregation changes
   */
  animateAggregationChange(change: { type: string, position: Point }): Promise<void> {
    const { position } = change

    if (change.type === "join") {
      this.animateDirectionally(position, 1)
      return Promise.resolve()
    }
    else {
      this.animateDirectionally(position, 0)
      return this.animateClusterThreadCount()
    }
  }

  /**
   * Animates the cluster thread count
   */
  private animateClusterThreadCount(): Promise<void> {
    const countElement = this.clusterCountElement
    if (!countElement)
      return Promise.resolve()

    countElement.style.transition = "none"
    countElement.style.opacity = "1"

    return createAnimationPromise(countElement, [], {
      duration: 1000,
    }).then(() => {
      countElement.style.removeProperty("opacity")
      countElement.style.removeProperty("transition")
    })
  }

  /**
   * Renders the comment cluster
   */
  render(): void {
    if (!this.isConnected)
      return

    if (this.avatarsContainer) {
      this.avatarsContainer.avatars = this._avatars.slice(0, 5)
      this.avatarsContainer.render()
    }

    if (isPinnedCommentsEnabled()) {
      this.addIconWhenPinnedToFileIfAbsent()
    }
  }

  /**
   * Positions the cluster element
   */
  positionClusterElement(position: Point, viewport: any): void {
    const zoomScale = viewport.zoomScale
    const xOffset = (zoomScale - 1) * position.x - CLUSTER_SIZE / 2
    const yOffset = (zoomScale - 1) * position.y - CLUSTER_SIZE / 2
    this.style.setProperty(
      "transform",
      `translate3d(${position.x + xOffset}px, ${position.y + yOffset}px, 0px) scale(var(--scale))`,
    )
  }

  /**
   * Gets the viewport rectangle for a cluster
   */
  static getClusterViewportRect(cluster: any, viewport: any): any {
    if (cluster.threads.length === 1) {
      const thread = cluster.threads[0]
      const x = centeredValue(thread.canvasPosition.x, 0, viewport.zoomScale, 1)
        - viewport.offsetX * viewport.zoomScale
        + viewport.width / 2
      const y = centeredValue(thread.canvasPosition.y, 0, viewport.zoomScale, 1)
        - viewport.offsetY * viewport.zoomScale
        + viewport.height / 2
      const comments = aggregateUserComments(thread.comments)
      const pinSize = CommentPinElement.getPinSize(comments.length)

      return {
        x,
        y: y - pinSize.height,
        ...pinSize,
      }
    }

    return {
      x: centeredValue(cluster.x, 0, viewport.zoomScale, 1)
        - viewport.offsetX * viewport.zoomScale
        + viewport.width / 2
        - CLUSTER_SIZE / 2,
      y: centeredValue(cluster.y, 0, viewport.zoomScale, 1)
        - viewport.offsetY * viewport.zoomScale
        + viewport.height / 2
        - CLUSTER_SIZE / 2,
      height: CLUSTER_SIZE,
      width: CLUSTER_SIZE,
    }
  }

  /**
   * Adds pinned to file icon if not already present
   */
  private addIconWhenPinnedToFileIfAbsent(): void {
    if (!this._pinnedToFileIcon) {
      this._pinnedToFileIcon = FigmaCommentClusterElement.pinnedToFileIcon.content.cloneNode(true)
      this.pinnedThreadToFileIndicator?.prepend(this._pinnedToFileIcon)
    }
  }

  static desiredElementName = "figma-comment-cluster"
  static pinnedToFileIcon = createTemplate(`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="8" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8282 8.00021L13.4799 6.40922L14.3638 5.87889L13.6349 5.15002L10.85 2.36511L10.1211 1.63623L9.59082 2.52012L7.9999 5.17169L4.81792 6.23235L3.75726 6.5859L4.54783 7.37647L6.23213 9.06078L3.14622 12.1467L2.79266 12.5002L3.49977 13.2074L3.85332 12.8538L6.93924 9.76788L8.62354 11.4522L9.41411 12.2428L9.76765 11.1821L10.8282 8.00021ZM8.97708 10.3915L9.87954 7.684L9.99652 7.33305L9.99646 7.33309L9.87948 7.68404L8.97704 10.3915L8.97708 10.3915ZM12.751 5.68039L12.751 5.68035L10.3197 3.24899L10.3196 3.24906L12.751 5.68039ZM8.31613 6.12037L8.66702 6.00341L8.66701 6.00343L8.31606 6.12041L5.6085 7.02293L5.60849 7.02292L8.31613 6.12037Z" fill="#007BE5"/>
    </svg>
    `)

  static template = createTemplate(`
    <div class="${IS}" data-testid="avatar-cluster" tabindex="0">
        <div class="${v3}" data-testid="cluster-pinned-to-file-indicator"></div>
        <figma-cluster-avatars></figma-cluster-avatars>
        <div class="${A3}" data-threadCount="0" />
    </div>
    `)

  static styles = [...FigmaClusterAvatarsElement.styles]
}

// Define element properties

// Export the main component
export const FigmaCommentCluster = FigmaCommentClusterElement

// Register custom element
if ("customElements" in window && !customElements.get(FigmaCommentCluster.desiredElementName)) {
  customElements.define(FigmaCommentCluster.desiredElementName, FigmaCommentCluster)
}

export const ip = FigmaCommentClusterElement
export const u5 = CLUSTER_SIZE
