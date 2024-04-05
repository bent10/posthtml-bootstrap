/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('offcanvas', () => {
  it('renders offcanvas with default props', async () => {
    const html = await render('<ui:offcanvas />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas">
      </div>"
    `)
  })

  it('should render the offcanvas with custom HTML tag', async () => {
    const html = await render("<ui:offcanvas as='nav' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav class="offcanvas">
      </nav>"
    `)
  })

  it('renders offcanvas without transition', async () => {
    const html = await render('<ui:offcanvas no-transition />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas">
      </div>"
    `)
  })

  it('renders offcanvas with additional classes', async () => {
    const html = await render("<ui:offcanvas class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas foo">
      </div>"
    `)
  })

  it('renders offcanvas with header and body', async () => {
    const html = await render(
      `<ui:offcanvas>
        <ui:offcanvas.header>Title</ui:offcanvas.header>
        <ui:offcanvas.body>Content</ui:offcanvas.body>
      </ui:offcanvas>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas">


      <div class="offcanvas-header">

      <h5 class="offcanvas-title">Title</h5>
      </div>


      <div class="offcanvas-body">Content
      </div>

      </div>"
    `)
  })

  it('renders offcanvas with static backdrop', async () => {
    const html = await render("<ui:offcanvas backdrop='static' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas" data-bs-backdrop="static">
      </div>"
    `)
  })

  it('renders offcanvas without backdrop', async () => {
    const html = await render("<ui:offcanvas backdrop='false' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas" data-bs-backdrop="false">
      </div>"
    `)
  })

  it('renders offcanvas without Esc key', async () => {
    const html = await render('<ui:offcanvas no-keyboard />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas" data-bs-keyboard="false">
      </div>"
    `)
  })

  it('renders offcanvas with responsive prop', async () => {
    const html = await render("<ui:offcanvas responsive='xl' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas-xl">
      </div>"
    `)
  })

  it('renders offcanvas with specific placement', async () => {
    const html = await render("<ui:offcanvas placement='end' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas offcanvas-end">
      </div>"
    `)
  })
})
