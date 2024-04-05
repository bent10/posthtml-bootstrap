/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('visual-hidden', () => {
  it('renders the visual-hidden component with default props', async () => {
    const html = await render('<ui:visual-hidden>foo</ui:visual-hidden>')
    expect(html).toMatchInlineSnapshot(`
      "<span class="visually-hidden">foo
      </span>"
    `)
  })

  it('renders the visual-hidden component with custom HTML tag', async () => {
    const html = await render(
      "<ui:visual-hidden as='div'>foo</ui:visual-hidden>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="visually-hidden">foo
      </div>"
    `)
  })

  it('applies custom class to the visual-hidden component', async () => {
    const html = await render("<ui:visual-hidden class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="visually-hidden foo">
      </span>"
    `)
  })

  it('renders the visual-hidden component with focusable prop', async () => {
    const html = await render('<ui:visual-hidden focusable />')
    expect(html).toMatchInlineSnapshot(`
      "<span class="visually-hidden visually-hidden-focusable">
      </span>"
    `)
  })
})
