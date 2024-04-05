/// <reference types="vitest" />

import { UserConfig } from 'vite'

export default <UserConfig>{
  ssr: {
    noExternal: ['lodash-es']
  },
  build: {
    ssr: 'src/index.ts'
  },
  test: {
    globals: true,
    include: ['test/*.test.ts', 'test/ui/*.test.ts']
  }
}
