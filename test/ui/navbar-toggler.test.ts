/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('navbar.toggler', () => {
  it('renders navbar toggler with default props', async () => {
    const html = await render('<ui:navbar.toggler />')
    expect(html).toMatchInlineSnapshot(`
      "<button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>"
    `)
  })

  it('renders navbar toggler for offcanvas', async () => {
    const html = await render('<ui:navbar.toggler offcanvas />')
    expect(html).toMatchInlineSnapshot(`
      "<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>"
    `)
  })

  it('renders navbar toggler with additional classes', async () => {
    const html = await render("<ui:navbar.toggler class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<button class="navbar-toggler foo" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>"
    `)
  })

  it('renders navbar toggler with target', async () => {
    const html = await render("<ui:navbar.toggler target='#foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#foo" aria-controls="foo" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>"
    `)
  })

  it('passes additional props to the navbar toggler element', async () => {
    const html = await render('<ui:navbar.toggler aria-label="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="foo">
      <span class="navbar-toggler-icon"></span>
      </button>"
    `)
  })
})
