/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.img', () => {
  it('renders a card img with default props', async () => {
    const html = await render('<ui:card.img />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-img">
      </div>"
    `)
  })

  it('renders a card img with additional classes', async () => {
    const html = await render("<ui:card.img class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-img foo">
      </div>"
    `)
  })

  it('passes additional props to the card img element', async () => {
    const html = await render("<ui:card.img data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="card-img" data-testid="foo">
      </div>"
    `)
  })
})
