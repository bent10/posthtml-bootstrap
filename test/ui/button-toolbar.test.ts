/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('button-toolbar', () => {
  it('renders a button toolbar with default props', async () => {
    const html = await render('<ui:button-toolbar />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="btn-toolbar">
      </div>"
    `)
  })

  it('passes additional props to the button toolbar element', async () => {
    const html = await render("<ui:button-toolbar data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="btn-toolbar" data-testid="foo">
      </div>"
    `)
  })
})
