/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('input-group', () => {
  it('renders a div by default', async () => {
    const html = await render('<ui:input-group />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="input-group">
      </div>"
    `)
  })

  it('renders with the given class', async () => {
    const html = await render("<ui:input-group class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="input-group foo">
      </div>"
    `)
  })

  it('renders with size variant when sm prop is provided', async () => {
    const html = await render('<ui:input-group sm />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="input-group input-group-sm">
      </div>"
    `)
  })

  it('renders with size variant when lg prop is provided', async () => {
    const html = await render('<ui:input-group lg />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="input-group input-group-lg">
      </div>"
    `)
  })

  it('renders with validation styles when validation prop is true', async () => {
    const html = await render('<ui:input-group validation />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="input-group has-validation">
      </div>"
    `)
  })

  it('passes through additional props to the div element', async () => {
    const html = await render("<ui:input-group data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="input-group" data-testid="foo">
      </div>"
    `)
  })
})
