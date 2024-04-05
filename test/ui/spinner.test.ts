/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('spinner', () => {
  it('renders a border spinner by default', async () => {
    const html = await render('<ui:spinner />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>"
    `)
  })

  it('renders a grow spinner', async () => {
    const html = await render('<ui:spinner grow />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="spinner-grow" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>"
    `)
  })

  it('renders spinner with additional classes', async () => {
    const html = await render("<ui:spinner class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="spinner-border foo" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>"
    `)
  })

  it('renders spinner with variant style', async () => {
    const html = await render("<ui:spinner variant='primary' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>"
    `)
  })

  it('renders spinner with size', async () => {
    const html = await render("<ui:spinner size='sm' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="spinner-border spinner-border-sm" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>"
    `)
  })
  it('renders spinner grow with size', async () => {
    const html = await render("<ui:spinner grow size='sm' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="spinner-grow spinner-grow-sm" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>"
    `)
  })

  it('passes additional props to the div element', async () => {
    const html = await render("<ui:spinner id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="spinner-border" role="status" id="foo">
      <span class="visually-hidden">Loading...</span>
      </div>"
    `)
  })
})
