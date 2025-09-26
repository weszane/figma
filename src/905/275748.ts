import { setupAdvancedLazyLoader } from '../905/992467'

/**
 * Represents a lazy component factory.
 * Original class name: $$r0
 */
export class LazyComponentFactory {
  private args: ObjectOf

  /**
   * Initializes the LazyComponentFactory with arguments.
   * @param args - Object containing component configuration.
   */
  constructor(args: ObjectOf) {
    this.args = args
  }

  /**
   * Gets the name of the component.
   * Original getter: name
   */
  get name(): string {
    return this.args.name
  }

  /**
   * Creates a lazy-loaded component using the advanced loader.
   * Original method: createLazyComponent
   * @param component - The component to be loaded.
   * @param options - Additional options for loading.
   * @returns The lazy-loaded component.
   */
  createLazyComponent(component: any, options?: any) {
    return setupAdvancedLazyLoader(this.name, component, options)
  }
}

/**
 * Exported alias for LazyComponentFactory.
 * Original export: b
 */
export const b = LazyComponentFactory
