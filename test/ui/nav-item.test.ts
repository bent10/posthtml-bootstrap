/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('nav.item', () => {
  it('renders nav.item with default props', async () => {
    const html = await render('<ui:nav.item />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="nav-item">
      </li>"
    `)
  })

  it('renders nav.item as div', async () => {
    const html = await render("<ui:nav.item as='div' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="nav-item">
      </div>"
    `)
  })

  it('renders nav.item with additional classes', async () => {
    const html = await render("<ui:nav.item class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="nav-item foo">
      </li>"
    `)
  })

  it('passes additional props to the div element', async () => {
    const html = await render("<ui:nav.item id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="nav-item" id="foo">
      </li>"
    `)
  })
})
