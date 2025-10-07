/**
 * Represents an entity in the system with properties like position, rotation, scale, age, and lifetime.
 * Original class name: $$n1
 */
import type { Position } from "../figma_app/cursor-system"

export class Entity {
  type: string
  id: string
  position: Position
  rotation: number
  scale: number
  age: number
  lifetime: number
  sortOrder: number
  customData: Record<string, any>

  constructor() {
    this.type = "Entity"
    this.id = Math.random().toString()
    this.position = {
      x: 0,
      y: 0,
    }
    this.rotation = 0
    this.scale = 1
    this.age = 0
    this.lifetime = 1
    this.sortOrder = 0
    this.customData = {}
  }

  /**
   * Updates the entity's age and checks if it should continue existing.
   * Original method name: update
   * @param deltaTime - The time elapsed since the last update.
   * @returns True if the entity is still alive, false otherwise.
   */
  update(deltaTime: number): boolean {
    this.age += deltaTime
    return this.age <= this.lifetime
  }
}

/**
 * Manages a collection of entities, handling addition, updating, and sorting.
 * Original class name: $$r0
 */
export class EntityManager {
  private _entities: Entity[]
  private _entitiesToAdd: Entity[]
  lastUpdateTime: number

  constructor() {
    this._entities = []
    this._entitiesToAdd = []
    this.lastUpdateTime = 0
  }

  /**
   * Adds an entity to the manager for later inclusion in the main list.
   * Original method name: addEntity
   * @param entity - The entity to add.
   */
  addEntity(entity: Entity): void {
    this._entitiesToAdd.push(entity)
  }

  /**
   * Calculates the delta time since the last update.
   * Original method name: getDeltaTime
   * @returns The delta time in seconds.
   */
  private getDeltaTime(): number {
    const now = performance.now()
    const delta = now - this.lastUpdateTime
    this.lastUpdateTime = now
    return delta / 1000
  }

  /**
   * Updates all entities, removes dead ones, and adds pending entities.
   * Original method name: update
   * @param deltaTime - Optional delta time; if not provided, calculates it internally.
   */
  update(deltaTime?: number): void {
    const dt = typeof deltaTime === "number" ? deltaTime : this.getDeltaTime()
    this._entities = this._entities.filter(entity => entity.update(dt))
    if (this._entitiesToAdd.length > 0) {
      this._entities = this._entities.concat(this._entitiesToAdd).sort((a, b) => a.sortOrder - b.sortOrder)
      this._entitiesToAdd = []
    }
  }

  /**
   * Retrieves the current list of active entities.
   * Original method name: getEntities
   * @returns The array of entities.
   */
  getEntities(): Entity[] {
    return this._entities
  }
}

// Refactored export names to match the new class names
export const L = EntityManager
export const w = Entity
