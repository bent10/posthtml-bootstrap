/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('toast.body', () => {
  it('renders toast body with default props', async () => {
    const html = await render('<ui:toast.body />')
    expect(html).toMatchInlineSnapshot(`"<div class="toast-body"></div>"`)
  })

  it('renders toast body with additional classes', async () => {
    const html = await render('<ui:toast.body class="foo" />')
    expect(html).toMatchInlineSnapshot(`"<div class="toast-body foo"></div>"`)
  })

  it('passes additional props to the div element', async () => {
    const html = await render('<ui:toast.body id="foo" />')
    expect(html).toMatchInlineSnapshot(
      `"<div class="toast-body" id="foo"></div>"`
    )
  })
})
