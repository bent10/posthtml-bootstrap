/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('navbar.text', () => {
  it('renders navbar text with default props', async () => {
    const html = await render('<ui:navbar.text />')
    expect(html).toMatchInlineSnapshot(`"<span class="navbar-text"></span>"`)
  })

  it('renders navbar text with additional classes', async () => {
    const html = await render("<ui:navbar.text class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<span class="navbar-text foo"></span>"`
    )
  })

  it('passes additional props to the navbar text element', async () => {
    const html = await render('<ui:navbar.text id="foo" />')
    expect(html).toMatchInlineSnapshot(
      `"<span class="navbar-text" id="foo"></span>"`
    )
  })
})
