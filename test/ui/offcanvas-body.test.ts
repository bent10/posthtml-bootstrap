/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('offcanvas.body', () => {
  it('renders offcanvas body with default props', async () => {
    const html = await render('<ui:offcanvas.body />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas-body">
      </div>"
    `)
  })

  it('should render the offcanvas body with custom HTML tag', async () => {
    const html = await render("<ui:offcanvas.body as='section' />")
    expect(html).toMatchInlineSnapshot(`
      "<section class="offcanvas-body">
      </section>"
    `)
  })

  it('renders offcanvas body with additional classes', async () => {
    const html = await render("<ui:offcanvas.body class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<div class="offcanvas-body foo">
      </div>"
    `
    )
  })

  it('passes additional props to the div element', async () => {
    const html = await render("<ui:offcanvas.body id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<div class="offcanvas-body" id="foo">
      </div>"
    `
    )
  })
})
