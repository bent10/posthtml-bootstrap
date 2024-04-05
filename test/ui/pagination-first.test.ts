/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('pagination.first', () => {
  it('renders pagination first with default props', async () => {
    const html = await render('<ui:pagination.first />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&laquo;</span>
      <span class="visually-hidden">First</span>
      </a>
      </li>"
    `)
  })

  it('renders active pagination first', async () => {
    const html = await render('<ui:pagination.first active />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item active" aria-current="true">

      <span class="page-link">
      <span aria-hidden="true">&laquo;</span>
      <span class="visually-hidden">First</span>
      </span>
      </li>"
    `)
  })

  it('renders disabled pagination first', async () => {
    const html = await render('<ui:pagination.first disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item disabled">

      <span class="page-link">
      <span aria-hidden="true">&laquo;</span>
      <span class="visually-hidden">First</span>
      </span>
      </li>"
    `)
  })

  it('renders pagination first with text prop', async () => {
    const html = await render('<ui:pagination.first href="/foo" text="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="/foo" class="page-link">
      <span aria-hidden="true">&laquo;</span>
      <span class="visually-hidden">foo</span>
      </a>
      </li>"
    `)
  })

  it('renders pagination first with additional classes', async () => {
    const html = await render("<ui:pagination.first class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link foo">
      <span aria-hidden="true">&laquo;</span>
      <span class="visually-hidden">First</span>
      </a>
      </li>"
    `)
  })

  it('passes additional props to the li element', async () => {
    const html = await render("<ui:pagination.first id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link" id="foo">
      <span aria-hidden="true">&laquo;</span>
      <span class="visually-hidden">First</span>
      </a>
      </li>"
    `)
  })
})
