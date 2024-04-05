/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('modal.header', () => {
  it('renders modal header with title', async () => {
    const html = await render("<ui:modal.header title='Title' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal-header">
      <h5 class="modal-title">Title</h5></div>"
    `)
  })

  it('renders modal header without title', async () => {
    const html = await render('<ui:modal.header />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal-header">

      <h5 class="modal-title"></h5>
      </div>"
    `)
  })

  it('renders modal header with close button', async () => {
    const html = await render('<ui:modal.header closable />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal-header">

      <h5 class="modal-title"></h5>



      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close modal"></button>

      </div>"
    `)
  })

  it('renders modal header with additional class', async () => {
    const html = await render("<ui:modal.header class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal-header foo">

      <h5 class="modal-title"></h5>
      </div>"
    `)
  })

  it('renders modal header with id', async () => {
    const html = await render("<ui:modal.header id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal-header" id="foo">

      <h5 class="modal-title"></h5>
      </div>"
    `)
  })

  it('renders closable modal header with id and title', async () => {
    const html = await render(
      "<ui:modal.header id='foo' title='Title' closable />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal-header" id="foo">
      <h5 class="modal-title">Title</h5>


      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close modal"></button>

      </div>"
    `)
  })
})
