/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('toast.header', () => {
  it('renders toast header with title', async () => {
    const html = await render("<ui:toast.header title='Title' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast-header">
      <strong class="me-auto">Title</strong></div>"
    `)
  })

  it('renders toast header with subtitle', async () => {
    const html = await render(
      "<ui:toast.header subtitle='Subtitle'>Title</ui:toast.header>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast-header">
      Title<small>Subtitle</small></div>"
    `)
  })

  it('renders toast header with image', async () => {
    const html = await render("<ui:toast.header imgurl='foo.com/bar.jpg' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast-header">

      <img src="foo.com/bar.jpg" class="me-2 rounded" alt="">
      </div>"
    `)
  })

  it('renders toast header with close button', async () => {
    const html = await render('<ui:toast.header closable />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast-header">



      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close toast"></button>

      </div>"
    `)
  })
})
