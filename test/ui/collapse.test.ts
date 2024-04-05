/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('collapse', () => {
  it('renders collapse with default props', async () => {
    const html = await render('<ui:collapse />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="collapse">
      </div>"
    `)
  })

  it('renders the collapse component with custom HTML tag', async () => {
    const html = await render("<ui:collapse as='span' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="collapse">
      </span>"
    `)
  })

  it('renders collapse with additional classes', async () => {
    const html = await render("<ui:collapse class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="collapse foo">
      </div>"
    `)
  })

  it('renders expanded collapse when `show` prop is true', async () => {
    const html = await render('<ui:collapse show />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="collapse show">
      </div>"
    `)
  })

  it('clears width style when entered (dimension="width")', async () => {
    const html = await render("<ui:collapse dimension='width' show />")
    expect(html).toMatchInlineSnapshot(
      `
      "<div class="collapse collapse-horizontal show">
      </div>"
    `
    )
  })

  it('passes additional props to the collapse element', async () => {
    const html = await render("<ui:collapse id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<div class="collapse" id="foo">
      </div>"
    `
    )
  })
})
