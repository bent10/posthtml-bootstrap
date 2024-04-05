/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.img-overlay', () => {
  it('renders a card img overlay with default props', async () => {
    const html = await render('<ui:card.img-overlay />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-img-overlay">
      </div>"
    `)
  })

  it('renders a card img overlay with additional classes', async () => {
    const html = await render("<ui:card.img-overlay class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-img-overlay foo">
      </div>"
    `)
  })

  it('passes additional props to the card img overlay element', async () => {
    const html = await render("<ui:card.img-overlay data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-img-overlay" data-testid="foo">
      </div>"
    `)
  })
})
