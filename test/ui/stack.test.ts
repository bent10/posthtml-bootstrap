/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('stack', () => {
  it('should render a horizontal stack', async () => {
    const html = await render('<ui:stack />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="hstack">
      </div>"
    `)
  })

  it('should render a vertical stack', async () => {
    const html = await render('<ui:stack vertical />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="vstack">
      </div>"
    `)
  })

  it('should render a stack with gap', async () => {
    const html = await render("<ui:stack gap='3' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="hstack gap-3">
      </div>"
    `)
  })

  it('renders with custom as prop', async () => {
    const html = await render("<ui:stack as='ul' />")
    expect(html).toMatchInlineSnapshot(`
      "<ul class="hstack">
      </ul>"
    `)
  })

  it('renders with custom class', async () => {
    const html = await render("<ui:stack class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="hstack foo">
      </div>"
    `)
  })
})
