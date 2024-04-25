export { log } from 'node:console'
export { clsx } from 'clsx'
export { default as jsonLoose } from 'json-loose'
export { isString, isNil, isNull } from 'lodash-es'

/**
 * Checks if a variable is considered enabled.
 *
 * @param input - The variable to be checked for enablement.
 * @returns
 *   `true` if the variable is strictly equal to `true` or an empty string (`''`),
 *   indicating enablement. Otherwise, returns `false`.
 */
export function isEnabled(input: unknown): boolean {
  return input === true || input === ''
}

/**
 * Normalize the breakpoint prop by appending it to the prefix.
 *
 * @param prefix The prefix string.
 * @param prop The breakpoint prop string or an array of strings.
 * @returns The normalized class name string.
 */
export function normalizeBreakpointProp(
  prefix: string,
  prop: string | boolean | Array<string | boolean>
): string {
  if (isBooleanLike(prop)) {
    return isTruthy(prop) ? prefix : ''
  }

  if (prop === 'true') {
  }

  prop =
    typeof prop === 'string' || typeof prop === 'number'
      ? String(prop).split(' ')
      : prop

  if (Array.isArray(prop)) {
    return prop
      .map(item => {
        if (isBooleanLike(item)) {
          return isTruthy(item) ? prefix : ''
        }

        return `${prefix}-${item}`
      })
      .join(' ')
  }

  return ''
}

/**
 * Checks if the input is boolean-like.
 *
 * @param input - The value to check for boolean likeness.
 * @returns
 *   `true` if the input is a boolean or a string with value 'true' or 'false',
 *   otherwise `false`.
 */
export function isBooleanLike(input: unknown) {
  return (
    typeof input === 'boolean' || ['true', 'false'].includes(input as string)
  )
}

/**
 * Checks if the input is truthy.
 *
 * @param input - The value to check for truthiness.
 * @returns `true` if the value is truthy, otherwise `false`.
 */
export function isTruthy(input: unknown) {
  return !!input
}

/**
 * Checks if the input is falsy.
 *
 * @param input - The value to check for falsiness.
 * @returns `true` if the value is falsy, otherwise `false`.
 */
export function isFalsy(input: unknown) {
  return !input
}
