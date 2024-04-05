/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('breadcrumb.item', () => {
  it('renders the breadcrumb.item component with default props', async () => {
    const html = await render('<ui:breadcrumb.item />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="breadcrumb-item">

      <a href="#">
      </a>
      </li>"
    `)
  })

  it('applies custom class to the breadcrumb.item component', async () => {
    const html = await render("<ui:breadcrumb.item class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="breadcrumb-item foo">

      <a href="#">
      </a>
      </li>"
    `)
  })

  it('renders the breadcrumb.item component with text prop', async () => {
    const html = await render("<ui:breadcrumb.item text='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="breadcrumb-item">

      <a href="#">
      foo</a>
      </li>"
    `)
  })

  it('renders the breadcrumb.item component as active', async () => {
    const html = await render('<ui:breadcrumb.item active />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="breadcrumb-item active">

      </li>"
    `)
  })

  it('renders the breadcrumb.item component as active with href', async () => {
    const html = await render(
      "<ui:breadcrumb.item href='/foo' text='foo' active />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<li class="breadcrumb-item active">

      foo</li>"
    `)
  })
})
