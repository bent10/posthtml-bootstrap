/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('input-group.check', () => {
  it('renders the input-group.check component with default props', async () => {
    const html = await render('<ui:input-group.check />')
    expect(html).toMatchInlineSnapshot(
      `"<input type="checkbox" class="input-group-check-input">"`
    )
  })

  it('renders the input-group.check component with custom HTML tag', async () => {
    const html = await render("<ui:input-group.check type='radio' />")
    expect(html).toMatchInlineSnapshot(
      `"<input type="radio" class="input-group-check-input">"`
    )
  })

  it('applies custom class to the input-group.check component', async () => {
    const html = await render("<ui:input-group.check class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<input type="checkbox" class="input-group-check-input foo">"`
    )
  })
})
