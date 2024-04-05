/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('link', () => {
  it('renders the link component with default props', async () => {
    const html = await render('<ui:link />')
    expect(html).toMatchInlineSnapshot(`
      "<a class="">
      </a>"
    `)
  })

  it('renders the link component with label prop', async () => {
    const html = await render("<ui:link href='/example' label='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a href="/example" class="">
      foo</a>"
    `)
  })

  it('applies custom class to the link component', async () => {
    const html = await render("<ui:link class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a class=" foo">
      </a>"
    `)
  })

  it('renders the link component with provided URL', async () => {
    const html = await render("<ui:link href='/foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a href="/foo" class="">
      </a>"
    `)
  })

  it('renders the link component as disabled', async () => {
    const html = await render('<ui:link disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<a class="disabled" tabindex="-1" aria-disabled="true">
      </a>"
    `)
  })
})
