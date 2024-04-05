/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.header', () => {
  it('renders a card header with default props', async () => {
    const html = await render('<ui:card.header />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-header">
      </div>"
    `)
  })

  it('renders a card header with additional classes', async () => {
    const html = await render("<ui:card.header class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-header foo">
      </div>"
    `)
  })

  it('passes additional props to the card header element', async () => {
    const html = await render("<ui:card.header data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-header" data-testid="foo">
      </div>"
    `)
  })
})
