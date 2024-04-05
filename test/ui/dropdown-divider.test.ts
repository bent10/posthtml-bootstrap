/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('dropdown.divider', () => {
  it('renders dropdown divider with default props', async () => {
    const html = await render('<ui:dropdown.divider />')
    expect(html).toMatchInlineSnapshot(
      `"<li><hr class="dropdown-divider"></li>"`
    )
  })

  it('renders dropdown divider with additional classes', async () => {
    const html = await render("<ui:dropdown.divider class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<li><hr class="dropdown-divider foo"></li>"`
    )
  })

  it('passes additional props to the hr element', async () => {
    const html = await render("<ui:dropdown.divider id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<li><hr class="dropdown-divider" id="foo"></li>"`
    )
  })
})
