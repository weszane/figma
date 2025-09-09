/* eslint-disable no-console */
/**
 * Logger provides various console logging utilities.
 * Original class name: $$n0
 */
export class Logger {
  /**
   * Logs informational messages.
   * @param args - Arguments to log.
   */
  info(...args: unknown[]): void {
    console.info(...args);
  }

  /**
   * Logs general messages.
   * @param args - Arguments to log.
   */
  log(...args: unknown[]): void {
    console.log(...args);
  }

  /**
   * Logs warning messages.
   * @param args - Arguments to log.
   */
  warn(...args: unknown[]): void {
    console.warn(...args);
  }

  /**
   * Logs debug messages.
   * @param args - Arguments to log.
   */
  debug(...args: unknown[]): void {
    console.debug(...args);
  }

  /**
   * Logs error messages.
   * @param args - Arguments to log.
   */
  error(...args: unknown[]): void {
    console.error(...args);
  }

  /**
   * Displays tabular data as a table.
   * @param data - Data to display.
   * @param properties - Optional properties to include.
   */
  table(data: unknown, properties?: string[]): void {
    console.table(data, properties);
  }

  /**
   * Clears the console.
   */
  clear(): void {
    console.clear();
  }
}

/** Singleton instance of Logger (original: $$n0) */
export const logger = new Logger();
export const k = logger;
