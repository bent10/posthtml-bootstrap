/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('modal', () => {
  it('renders modal with default props', async () => {
    const html = await render('<ui:modal />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade">
      <div class="modal-dialog" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders modal without transition', async () => {
    const html = await render('<ui:modal no-transition />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal">
      <div class="modal-dialog" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders modal with additional classes', async () => {
    const html = await render("<ui:modal class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade foo">
      <div class="modal-dialog" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders modal with header, body, and footer', async () => {
    const html = await render(
      `<ui:modal>
        <ui:modal.header>Title</ui:modal.header>
        <ui:modal.body>Content</ui:modal.body>
        <ui:modal.footer>Footer</ui:modal.footer>
      </ui:modal>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade">
      <div class="modal-dialog" role="document">
      <div class="modal-content">


      <div class="modal-header">

      <h5 class="modal-title">Title</h5>
      </div>

      <div class="modal-body">Content</div>

      <div class="modal-footer">Footer</div>

      </div>
      </div>
      </div>"
    `)
  })

  it('renders modal with static backdrop', async () => {
    const html = await render("<ui:modal backdrop='static' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade" data-bs-backdrop="static">
      <div class="modal-dialog" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders modal without backdrop', async () => {
    const html = await render("<ui:modal backdrop='false' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade" data-bs-backdrop="false">
      <div class="modal-dialog" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders modal without Esc key', async () => {
    const html = await render('<ui:modal no-keyboard />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade" data-bs-keyboard="false">
      <div class="modal-dialog" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders modal dialog with specific size', async () => {
    const html = await render("<ui:modal size='lg' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade">
      <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders fullscreen modal dialog', async () => {
    const html = await render('<ui:modal fullscreen />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade">
      <div class="modal-dialog" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders fullscreen xl modal dialog', async () => {
    const html = await render("<ui:modal fullscreen='xl' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade">
      <div class="modal-dialog" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders centered modal dialog', async () => {
    const html = await render('<ui:modal centered />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade">
      <div class="modal-dialog modal-centered" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })

  it('renders scrollable modal dialog', async () => {
    const html = await render('<ui:modal scrollable />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="modal fade">
      <div class="modal-dialog modal-scrollable" role="document">
      <div class="modal-content"></div>
      </div>
      </div>"
    `)
  })
})
