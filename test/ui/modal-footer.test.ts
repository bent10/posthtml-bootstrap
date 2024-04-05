/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('modal.footer', () => {
  it('renders modal footer with default props', async () => {
    const html = await render('<ui:modal.footer />')
    expect(html).toMatchInlineSnapshot(`"<div class="modal-footer"></div>"`)
  })

  it('renders modal footer with additional classes', async () => {
    const html = await render("<ui:modal.footer class='foo' />")
    expect(html).toMatchInlineSnapshot(`"<div class="modal-footer foo"></div>"`)
  })

  it('passes additional props to the div element', async () => {
    const html = await render("<ui:modal.footer id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<div class="modal-footer" id="foo"></div>"`
    )
  })
})
