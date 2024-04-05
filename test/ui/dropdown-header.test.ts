/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('dropdown.header', () => {
  it('renders dropdown header with default props', async () => {
    const html = await render('<ui:dropdown.header>Header</ui:dropdown.header>')
    expect(html).toMatchInlineSnapshot(
      `"<li><h6 class="dropdown-header">Header</h6></li>"`
    )
  })

  it('renders dropdown header with additional classes', async () => {
    const html = await render(
      "<ui:dropdown.header class='foo'>Header</ui:dropdown.header>"
    )
    expect(html).toMatchInlineSnapshot(
      `"<li><h6 class="dropdown-header foo">Header</h6></li>"`
    )
  })

  it('passes additional props to the h6 element', async () => {
    const html = await render(
      "<ui:dropdown.header id='foo'>Header</ui:dropdown.header>"
    )
    expect(html).toMatchInlineSnapshot(
      `"<li><h6 class="dropdown-header" id="foo">Header</h6></li>"`
    )
  })
})
