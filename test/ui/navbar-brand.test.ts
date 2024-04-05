/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('navbar.brand', () => {
  it('renders navbar brand with default props', async () => {
    const html = await render("<ui:navbar.brand href='/' />")
    expect(html).toMatchInlineSnapshot(`
      "<a href="/" class="navbar-brand">
      </a>"
    `)
  })

  it('renders navbar brand with custom HTML tag', async () => {
    const html = await render("<ui:navbar.brand as='div' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="navbar-brand">
      </div>"
    `)
  })

  it('renders navbar brand with additional classes', async () => {
    const html = await render("<ui:navbar.brand class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a class="navbar-brand foo">
      </a>"
    `)
  })

  it('passes additional props to the Link component', async () => {
    const html = await render("<ui:navbar.brand id='foo' aria-label='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a class="navbar-brand" id="foo" aria-label="foo">
      </a>"
    `)
  })
})
