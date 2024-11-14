import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Log an error message with the path where it occurred
 * @param path - The path where the error occurred
 * @param args - The arguments to log
 */
export const logger = (path: string, ...args: unknown[]) => {
  // eslint-disable-next-line no-console
  console.log(`Error at ${path}:`, ...args)
}

/**
 * Merge Tailwind CSS classes with the ability to use the `cn` function
 * @param inputs - The classes to merge
 * @returns The merged classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
