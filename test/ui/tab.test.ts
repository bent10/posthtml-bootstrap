/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('tab', () => {
  it('renders tab with default props', async () => {
    const html = await render('<ui:tab />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-content">
      </div>"
    `)
  })

  it('renders tab content with additional classes', async () => {
    const html = await render('<ui:tab class="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-content foo">
      </div>"
    `)
  })

  it('passes additional props to the div element', async () => {
    const html = await render('<ui:tab id="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-content" id="foo">
      </div>"
    `)
  })
})
