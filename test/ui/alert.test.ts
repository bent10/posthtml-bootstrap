/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('alert', () => {
  it('renders the alert component with default props', async () => {
    const html = await render('<ui:alert />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="alert alert-warning fade show">


      </div>"
    `)
  })

  it('renders the alert component with custom HTML tag', async () => {
    const html = await render("<ui:alert as='section' />")
    expect(html).toMatchInlineSnapshot(`
      "<section class="alert alert-warning fade show">


      </section>"
    `)
  })

  it('applies custom class to the alert component', async () => {
    const html = await render("<ui:alert class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="alert alert-warning fade show foo">


      </div>"
    `)
  })

  it('renders the alert component with dismissible option', async () => {
    const html = await render('<ui:alert dismissible />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="alert alert-warning alert-dismissible fade show">



      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Hide alert"></button>



      </div>"
    `)
  })

  it('renders the alert component with specified variant', async () => {
    const html = await render("<ui:alert variant='info' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="alert alert-info fade show">


      </div>"
    `)
  })

  it('renders the alert component with no animation', async () => {
    const html = await render('<ui:alert no-transition />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="alert alert-warning">


      </div>"
    `)
  })

  it('renders the alert component with custom content', async () => {
    const html = await render('<ui:alert><p>Custom content</p></ui:alert>')
    expect(html).toMatchInlineSnapshot(`
      "<div class="alert alert-warning fade show">
      <p>Custom content</p>

      </div>"
    `)
  })
})
