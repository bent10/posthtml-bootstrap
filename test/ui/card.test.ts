/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card', () => {
  it('renders a card with default props', async () => {
    const html = await render('<ui:card />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="card">
      </div>"
    `)
  })

  it('applies background color variant', async () => {
    const html = await render("<ui:card bg='primary' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<div class="card text-bg-primary">
      </div>"
    `
    )
  })

  it('applies border variant', async () => {
    const html = await render("<ui:card border='success' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<div class="card border-success">
      </div>"
    `
    )
  })

  it('passes additional props to the card element', async () => {
    const html = await render("<ui:card data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<div class="card" data-testid="foo">
      </div>"
    `
    )
  })
})
