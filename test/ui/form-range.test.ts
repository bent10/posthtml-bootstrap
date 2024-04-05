/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.range', () => {
  it('renders a range input by default', async () => {
    const html = await render('<ui:form.range />')
    expect(html).toMatchInlineSnapshot(
      `"<input type="range" class="form-range">"`
    )
  })

  it('renders with the given id', async () => {
    const html = await render("<ui:form.range id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<input type="range" class="form-range" id="foo">"`
    )
  })

  it('renders with the given class', async () => {
    const html = await render("<ui:form.range class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<input type="range" class="form-range foo">"`
    )
  })
})
