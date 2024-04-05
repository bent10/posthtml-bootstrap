/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('list-group', () => {
  it('renders list group with default props', async () => {
    const html = await render('<ui:list-group />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group">
      </div>"
    `)
  })

  it('renders list group with additional classes', async () => {
    const html = await render("<ui:list-group class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group foo">
      </div>"
    `)
  })

  it('renders list group as flush', async () => {
    const html = await render('<ui:list-group flush />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group list-group-flush">
      </div>"
    `)
  })

  it('renders list group with numbering', async () => {
    const html = await render('<ui:list-group numbered />')
    expect(html).toMatchInlineSnapshot(`
      "<ol class="list-group list-group-numbered">
      </ol>"
    `)
  })

  it('renders list group horizontally', async () => {
    const html = await render("<ui:list-group horizontal='true lg' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group list-group-horizontal list-group-horizontal-lg">
      </div>"
    `)
  })

  it('renders list group item', async () => {
    const items = [
      { text: 'foo' },
      { href: '/bar', text: 'bar', action: true, active: true },
      { as: 'button', text: 'baz', disabled: true }
    ]
    const html = await render(
      `<ui:list-group items='${JSON.stringify(items)}' />`
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group">






      <div class="list-group-item">

      foo


      </div>





      <a href="/bar" class="list-group-item list-group-item-action active" aria-current="true">

      bar

      </a>





      <button type="button" class="list-group-item" disabled="true">

      baz

      </button>


      </div>"
    `)
  })
})
