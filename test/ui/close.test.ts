/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('close', () => {
  it('renders the close component with default props', async () => {
    const html = await render('<ui:close />')
    expect(html).toMatchInlineSnapshot(
      `"<button type="button" class="btn-close" aria-label="Close"></button>"`
    )
  })

  it('applies custom class to the close component', async () => {
    const html = await render("<ui:close class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<button type="button" class="btn-close foo" aria-label="Close"></button>"`
    )
  })

  it('renders the close component with dismiss prop', async () => {
    const html = await render('<ui:close dismiss="alert" />')
    expect(html).toMatchInlineSnapshot(
      `"<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>"`
    )
  })

  it('renders the close component with visually hidden label', async () => {
    const html = await render('<ui:close sronly />')
    expect(html).toMatchInlineSnapshot(
      `"<button type="button" class="btn-close visually-hidden" aria-label="Close"></button>"`
    )
  })
})
