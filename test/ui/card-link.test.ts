/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.link', () => {
  it('renders the card.link component with default props', async () => {
    const html = await render('<ui:card.link />')
    expect(html).toMatchInlineSnapshot(`
      "<a class="card-link">
      </a>"
    `)
  })

  it('renders the card.link component with label prop', async () => {
    const html = await render("<ui:card.link href='/example' label='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a href="/example" class="card-link">
      foo</a>"
    `)
  })

  it('applies custom class to the card.link component', async () => {
    const html = await render("<ui:card.link class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a class="card-link foo">
      </a>"
    `)
  })

  it('renders the card.link component with provided URL', async () => {
    const html = await render("<ui:card.link href='/foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a href="/foo" class="card-link">
      </a>"
    `)
  })

  it('renders the card.link component as disabled', async () => {
    const html = await render('<ui:card.link disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<a class="card-link disabled" tabindex="-1" aria-disabled="true">
      </a>"
    `)
  })
})
