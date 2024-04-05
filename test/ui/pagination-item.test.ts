/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('pagination.item', () => {
  it('renders pagination item with default props', async () => {
    const html = await render('<ui:pagination.item />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a class="page-link">

      </a>
      </li>"
    `)
  })

  it('renders active pagination item', async () => {
    const html = await render('<ui:pagination.item active />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item active" aria-current="true">

      <span class="page-link">

      </span>
      </li>"
    `)
  })

  it('renders disabled pagination item', async () => {
    const html = await render('<ui:pagination.item disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item disabled">

      <span class="page-link">

      </span>
      </li>"
    `)
  })

  it('renders pagination item with text prop', async () => {
    const html = await render('<ui:pagination.item href="/foo" text="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="/foo" class="page-link">
      foo
      </a>
      </li>"
    `)
  })

  it('renders pagination item with additional classes', async () => {
    const html = await render("<ui:pagination.item class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a class="page-link foo">

      </a>
      </li>"
    `)
  })

  it('passes additional props to the li element', async () => {
    const html = await render("<ui:pagination.item id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a class="page-link" id="foo">

      </a>
      </li>"
    `)
  })

  it('renders pagination item as anchor element', async () => {
    const html = await render(
      "<ui:pagination.item href='/foo'>foo</ui:pagination.item>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="/foo" class="page-link">
      foo
      </a>
      </li>"
    `)
  })
})
