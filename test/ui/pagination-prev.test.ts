/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('pagination.prev', () => {
  it('renders pagination prev with default props', async () => {
    const html = await render('<ui:pagination.prev />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&lsaquo;</span>
      <span class="visually-hidden">Previous</span>
      </a>
      </li>"
    `)
  })

  it('renders active pagination prev', async () => {
    const html = await render('<ui:pagination.prev active />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item active" aria-current="true">

      <span class="page-link">
      <span aria-hidden="true">&lsaquo;</span>
      <span class="visually-hidden">Previous</span>
      </span>
      </li>"
    `)
  })

  it('renders disabled pagination prev', async () => {
    const html = await render('<ui:pagination.prev disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item disabled">

      <span class="page-link">
      <span aria-hidden="true">&lsaquo;</span>
      <span class="visually-hidden">Previous</span>
      </span>
      </li>"
    `)
  })

  it('renders pagination prev with text prop', async () => {
    const html = await render('<ui:pagination.prev href="/foo" text="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="/foo" class="page-link">
      <span aria-hidden="true">&lsaquo;</span>
      <span class="visually-hidden">foo</span>
      </a>
      </li>"
    `)
  })

  it('renders pagination prev with additional classes', async () => {
    const html = await render("<ui:pagination.prev class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link foo">
      <span aria-hidden="true">&lsaquo;</span>
      <span class="visually-hidden">Previous</span>
      </a>
      </li>"
    `)
  })

  it('passes additional props to the li element', async () => {
    const html = await render("<ui:pagination.prev id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link" id="foo">
      <span aria-hidden="true">&lsaquo;</span>
      <span class="visually-hidden">Previous</span>
      </a>
      </li>"
    `)
  })
})
