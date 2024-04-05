/// <reference types="vitest/globals" />

import { defineBootstrapUIConfig } from '../dist/index.js'

it('should returns the default configuration', () => {
  const config = defineBootstrapUIConfig()

  expect(config.root).toBe('')
  expect(config.tagPrefix).toBe('ui:')
  expect(config.yield).toBe('children')
  expect(config.attribute).toBe('@src')
  expect(config.expressions).toEqual({
    missingLocal: null,
    unescapeDelimiters: ['{{~', '~}}']
  })
  expect(config.utilities).toMatchInlineSnapshot(`
    {
      "clsx": [Function],
      "isBooleanLike": [Function],
      "isEnabled": [Function],
      "isFalsy": [Function],
      "isNil": [Function],
      "isNull": [Function],
      "isString": [Function],
      "isTruthy": [Function],
      "jsonLoose": [Function],
      "log": [Function],
      "normalizeBreakpointProp": [Function],
    }
  `)
})
