/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('pagination.ellipsis', () => {
  it('renders pagination ellipsis with default props', async () => {
    const html = await render('<ui:pagination.ellipsis />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&hellip;</span>
      <span class="visually-hidden">More</span>
      </a>
      </li>"
    `)
  })

  it('renders active pagination ellipsis', async () => {
    const html = await render('<ui:pagination.ellipsis active />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item active" aria-current="true">

      <span class="page-link">
      <span aria-hidden="true">&hellip;</span>
      <span class="visually-hidden">More</span>
      </span>
      </li>"
    `)
  })

  it('renders disabled pagination ellipsis', async () => {
    const html = await render('<ui:pagination.ellipsis disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item disabled">

      <span class="page-link">
      <span aria-hidden="true">&hellip;</span>
      <span class="visually-hidden">More</span>
      </span>
      </li>"
    `)
  })

  it('renders pagination ellipsis with text prop', async () => {
    const html = await render(
      '<ui:pagination.ellipsis href="/foo" text="foo" />'
    )
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="/foo" class="page-link">
      <span aria-hidden="true">&hellip;</span>
      <span class="visually-hidden">foo</span>
      </a>
      </li>"
    `)
  })

  it('renders pagination ellipsis with additional classes', async () => {
    const html = await render("<ui:pagination.ellipsis class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link foo">
      <span aria-hidden="true">&hellip;</span>
      <span class="visually-hidden">More</span>
      </a>
      </li>"
    `)
  })

  it('passes additional props to the li element', async () => {
    const html = await render("<ui:pagination.ellipsis id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link" id="foo">
      <span aria-hidden="true">&hellip;</span>
      <span class="visually-hidden">More</span>
      </a>
      </li>"
    `)
  })
})
