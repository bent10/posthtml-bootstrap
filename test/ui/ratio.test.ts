/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('ratio', () => {
  it('renders the ratio component with default props', async () => {
    const html = await render('<ui:ratio />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="ratio ratio-16x9">
      </div>"
    `)
  })

  it('applies custom aspect ratio to the ratio component', async () => {
    const html = await render("<ui:ratio ratio='4x3' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="ratio ratio-4x3">
      </div>"
    `)
  })

  it('adds rounded class to the ratio component', async () => {
    const html = await render('<ui:ratio rounded />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="ratio ratio-16x9 rounded">
      </div>"
    `)
  })

  it('renders the ratio component with circular border radius', async () => {
    const html = await render('<ui:ratio circle />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="ratio ratio-16x9 rounded-circle">
      </div>"
    `)
  })
})
