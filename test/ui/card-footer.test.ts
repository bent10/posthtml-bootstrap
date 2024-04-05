/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.footer', () => {
  it('renders a card footer with default props', async () => {
    const html = await render('<ui:card.footer />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-footer">
      </div>"
    `)
  })

  it('renders a card footer with additional classes', async () => {
    const html = await render("<ui:card.footer class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-footer foo">
      </div>"
    `)
  })

  it('passes additional props to the card footer element', async () => {
    const html = await render("<ui:card.footer data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-footer" data-testid="foo">
      </div>"
    `)
  })
})
