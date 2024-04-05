/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('offcanvas.header', () => {
  it('renders offcanvas header with title', async () => {
    const html = await render("<ui:offcanvas.header title='Title' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas-header">
      <h5 class="offcanvas-title">Title</h5></div>"
    `)
  })

  it('should render the offcanvas header with custom HTML tag', async () => {
    const html = await render(
      "<ui:offcanvas.header as='header' title='Title' />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<header class="offcanvas-header">
      <h5 class="offcanvas-title">Title</h5></header>"
    `)
  })

  it('renders offcanvas header without title', async () => {
    const html = await render('<ui:offcanvas.header />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas-header">

      <h5 class="offcanvas-title"></h5>
      </div>"
    `)
  })

  it('renders offcanvas header with close button', async () => {
    const html = await render('<ui:offcanvas.header closable />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas-header">

      <h5 class="offcanvas-title"></h5>



      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close offcanvas"></button>

      </div>"
    `)
  })

  it('renders offcanvas header with additional class', async () => {
    const html = await render("<ui:offcanvas.header class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas-header foo">

      <h5 class="offcanvas-title"></h5>
      </div>"
    `)
  })

  it('renders offcanvas header with id', async () => {
    const html = await render("<ui:offcanvas.header id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas-header" id="foo">

      <h5 class="offcanvas-title"></h5>
      </div>"
    `)
  })

  it('renders closable offcanvas header with id and title', async () => {
    const html = await render(
      "<ui:offcanvas.header id='foo' title='Title' closable />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="offcanvas-header" id="foo">
      <h5 class="offcanvas-title">Title</h5>


      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close offcanvas"></button>

      </div>"
    `)
  })
})
