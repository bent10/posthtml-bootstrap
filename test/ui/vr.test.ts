/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('vr', () => {
  it('renders the vr component with default props', async () => {
    const html = await render('<ui:vr />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="vr">
      </div>"
    `)
  })

  it('renders the vr component with custom HTML tag', async () => {
    const html = await render("<ui:vr as='span' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="vr">
      </span>"
    `)
  })

  it('applies custom className to the vr component', async () => {
    const html = await render("<ui:vr className='custom-vr' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="vr">
      </div>"
    `)
  })
})
