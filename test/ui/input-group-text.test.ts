/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('input-group.text', () => {
  it('renders the input-group.Text component with default props', async () => {
    const html = await render('<ui:input-group.text />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="input-group-text">
      </div>"
    `)
  })

  it('renders the input-group.text component with custom HTML tag', async () => {
    const html = await render("<ui:input-group.text as='span' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="input-group-text">
      </span>"
    `)
  })

  it('applies custom class to the input-group.text component', async () => {
    const html = await render("<ui:input-group.text class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="input-group-text foo">
      </div>"
    `)
  })
})
