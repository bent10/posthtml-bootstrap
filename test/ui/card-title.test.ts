/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('card.title', () => {
  it('renders card title with default props', async () => {
    const html = await render('<ui:card.title>title</ui:card.title>')
    expect(html).toMatchInlineSnapshot(`"<h5 class="card-title">title</h5>"`)
  })

  it('renders card title with additional classes', async () => {
    const html = await render(
      "<ui:card.title class='foo'>title</ui:card.title>"
    )
    expect(html).toMatchInlineSnapshot(
      `"<h5 class="card-title foo">title</h5>"`
    )
  })

  it('renders card subtitle when `subtitle` prop is provided', async () => {
    const html = await render(
      "<ui:card.title subtitle='Subtitle'>title</ui:card.title>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<h5 class="card-title">title</h5>

      <h6 class="card-subtitle mb-2 text-body-secondary">Subtitle</h6>"
    `)
  })

  it('passes additional props to the heading element', async () => {
    const html = await render("<ui:card.title id='foo'>title</ui:card.title>")
    expect(html).toMatchInlineSnapshot(
      `"<h5 class="card-title" id="foo">title</h5>"`
    )
  })
})
