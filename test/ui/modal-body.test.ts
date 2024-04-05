/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('modal.body', () => {
  it('renders modal body with default props', async () => {
    const html = await render('<ui:modal.body />')
    expect(html).toMatchInlineSnapshot(`"<div class="modal-body"></div>"`)
  })

  it('renders modal body with additional classes', async () => {
    const html = await render("<ui:modal.body class='foo' />")
    expect(html).toMatchInlineSnapshot(`"<div class="modal-body foo"></div>"`)
  })

  it('passes additional props to the div element', async () => {
    const html = await render("<ui:modal.body id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<div class="modal-body" id="foo"></div>"`
    )
  })
})
