/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.text', () => {
  it('renders with default props', async () => {
    const html = await render('<ui:form.text>Hello world</ui:form.text>')
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-text">Hello world
      </div>"
    `)
  })

  it('renders with custom props', async () => {
    const html = await render(
      "<ui:form.text as='span' class='foo'>Hello world</ui:form.text>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<span class="form-text foo">Hello world
      </span>"
    `)
  })
})
