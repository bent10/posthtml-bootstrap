/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.group', () => {
  it('renders a card group with default props', async () => {
    const html = await render('<ui:card.group />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-group">
      </div>"
    `)
  })

  it('renders a card group with additional classes', async () => {
    const html = await render("<ui:card.group class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-group foo">
      </div>"
    `)
  })

  it('passes additional props to the card group element', async () => {
    const html = await render("<ui:card.group data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-group" data-testid="foo">
      </div>"
    `)
  })
})
