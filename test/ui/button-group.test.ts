/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('button-group', () => {
  it('renders a button group with default props', async () => {
    const html = await render('<ui:button-group />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="btn-group">
      </div>"
    `)
  })

  it('renders a vertical button group when vertical prop is true', async () => {
    const html = await render('<ui:button-group vertical />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="btn-group-vertical">
      </div>"
    `)
  })

  it('renders a button group with the specified size', async () => {
    const html = await render("<ui:button-group size='sm' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="btn-group btn-group-sm">
      </div>"
    `)
  })

  it('renders a button group that fills the available width', async () => {
    const html = await render('<ui:button-group fill />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="btn-group d-flex">
      </div>"
    `)
  })

  it('passes additional props to the button group element', async () => {
    const html = await render("<ui:button-group data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="btn-group" data-testid="foo">
      </div>"
    `)
  })
})
