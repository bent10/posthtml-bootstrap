/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('row', () => {
  it('renders with default props', async () => {
    const html = await render('<ui:row />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="row">
      </div>"
    `)
  })

  it('renders with cols prop as string', async () => {
    const html = await render("<ui:row cols='2' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="row row-cols-2">
      </div>"
    `)
  })

  it('renders with cols prop as array', async () => {
    const html = await render('<ui:row cols="12 sm-6 md-4" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="row row-cols-12 row-cols-sm-6 row-cols-md-4">
      </div>"
    `)
  })

  it('renders with custom class correctly', async () => {
    const html = await render("<ui:row class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="row foo">
      </div>"
    `)
  })
})
