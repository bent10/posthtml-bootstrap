/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.text', () => {
  it('renders a card text with default props', async () => {
    const html = await render('<ui:card.text />')
    expect(html).toMatchInlineSnapshot(`"<p class="card-text"></p>"`)
  })

  it('renders a card text with additional classes', async () => {
    const html = await render("<ui:card.text class='foo' />")
    expect(html).toMatchInlineSnapshot(`"<p class="card-text foo"></p>"`)
  })

  it('passes additional props to the card text element', async () => {
    const html = await render("<ui:card.text data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<p class="card-text" data-testid="foo"></p>"`
    )
  })
})
