import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { PostHTMLComponentOptions } from './types.js'
import * as requiredUtils from './utils.js'

/**
 * Defines the configuration options for the PostHTML Bootstrap UI
 * components.
 *
 * @param options - The configuration options merge with.
 * @returns The configured options for Bootstrap UI components.
 */
export function defineBootstrapUIConfig(
  options: Omit<
    PostHTMLComponentOptions,
    'root' | 'tagPrefix' | 'attribute' | 'yield'
  > = {}
): PostHTMLComponentOptions {
  const { folders = [], utilities, expressions, ...restOpts } = options
  const __dirname = dirname(fileURLToPath(import.meta.url))

  folders.push(resolve(__dirname, './ui'))

  return {
    // users configs
    ...restOpts,
    // opinionated configs
    root: '',
    tagPrefix: 'ui:',
    yield: 'children',
    attribute: '@src',
    // hybrid
    folders,
    expressions: {
      missingLocal: null,
      unescapeDelimiters: ['{{~', '~}}'],
      ...expressions
    },
    utilities: { ...requiredUtils, ...utilities }
  }
}

export type { PostHTMLComponentOptions }
