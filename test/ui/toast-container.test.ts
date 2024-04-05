/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('toast.container', () => {
  it('renders toast.container with placement "%s"', async () => {
    const placements = [
      'top-left',
      'top-center',
      'top-right',
      'middle-left',
      'middle-center',
      'middle-right',
      'bottom-left',
      'bottom-center',
      'bottom-right'
    ]
    const rendered: string[] = []

    for (const placement of placements) {
      const html = await render(`<ui:toast.container ${placement} />`)
      rendered.push(html)
    }

    expect(rendered).toMatchInlineSnapshot(`
      [
        "<div class="toast-container p-3 top-0 start-0"></div>",
        "<div class="toast-container p-3 top-0 start-50 translate-middle-x"></div>",
        "<div class="toast-container p-3 top-0 end-0"></div>",
        "<div class="toast-container p-3 top-50 start-0 translate-middle-y"></div>",
        "<div class="toast-container p-3 top-50 start-50 translate-middle"></div>",
        "<div class="toast-container p-3 top-50 end-0 translate-middle-y"></div>",
        "<div class="toast-container p-3 bottom-0 start-0"></div>",
        "<div class="toast-container p-3 bottom-0 start-50 translate-middle-x"></div>",
        "<div class="toast-container p-3 bottom-0 end-0"></div>",
      ]
    `)
  })

  it('renders toast.container with fixed position and placement', async () => {
    const html = await render('<ui:toast.container fixed bottom-left />')
    expect(html).toMatchInlineSnapshot(
      `"<div class="toast-container p-3 position-fixed bottom-0 start-0"></div>"`
    )
  })

  it('renders toast.container with absolute position and placement', async () => {
    const html = await render('<ui:toast.container absolute bottom-left />')
    expect(html).toMatchInlineSnapshot(
      `"<div class="toast-container p-3 position-absolute bottom-0 start-0"></div>"`
    )
  })

  it('renders toast.container with additional classes', async () => {
    const html = await render("<ui:toast.container class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<div class="toast-container p-3 foo"></div>"`
    )
  })

  it('passes additional props to the container div', async () => {
    const html = await render("<ui:toast.container id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<div class="toast-container p-3" id="foo"></div>"`
    )
  })
})
