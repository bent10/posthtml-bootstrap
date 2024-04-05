/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.body', () => {
  it('renders a card body with default props', async () => {
    const html = await render('<ui:card.body />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-body">
      </div>"
    `)
  })

  it('renders a card body with additional classes', async () => {
    const html = await render("<ui:card.body class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-body foo">
      </div>"
    `)
  })

  it('passes additional props to the card body element', async () => {
    const html = await render("<ui:card.body data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-body" data-testid="foo">
      </div>"
    `)
  })
})
