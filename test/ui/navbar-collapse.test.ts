/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('navbar.collapse', () => {
  it('renders navbar collapse with default props', async () => {
    const html = await render('<ui:navbar.collapse />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="navbar-collapse collapse">
      </div>"
    `)
  })

  it('renders navbar collapse with custom HTML tag', async () => {
    const html = await render("<ui:navbar.collapse as='section' />")
    expect(html).toMatchInlineSnapshot(`
      "<section class="navbar-collapse collapse">
      </section>"
    `)
  })

  it('renders navbar collapse with additional classes', async () => {
    const html = await render("<ui:navbar.collapse class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="navbar-collapse collapse foo">
      </div>"
    `)
  })

  it('passes additional props to the navbar collapse element', async () => {
    const html = await render('<ui:navbar.collapse id="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="navbar-collapse collapse" id="foo">
      </div>"
    `)
  })
})
