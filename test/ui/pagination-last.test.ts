/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('pagination.last', () => {
  it('renders pagination last with default props', async () => {
    const html = await render('<ui:pagination.last />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&raquo;</span>
      <span class="visually-hidden">Last</span>
      </a>
      </li>"
    `)
  })

  it('renders active pagination last', async () => {
    const html = await render('<ui:pagination.last active />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item active" aria-current="true">

      <span class="page-link">
      <span aria-hidden="true">&raquo;</span>
      <span class="visually-hidden">Last</span>
      </span>
      </li>"
    `)
  })

  it('renders disabled pagination last', async () => {
    const html = await render('<ui:pagination.last disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item disabled">

      <span class="page-link">
      <span aria-hidden="true">&raquo;</span>
      <span class="visually-hidden">Last</span>
      </span>
      </li>"
    `)
  })

  it('renders pagination last with text prop', async () => {
    const html = await render('<ui:pagination.last href="/foo" text="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="/foo" class="page-link">
      <span aria-hidden="true">&raquo;</span>
      <span class="visually-hidden">foo</span>
      </a>
      </li>"
    `)
  })

  it('renders pagination last with additional classes', async () => {
    const html = await render("<ui:pagination.last class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link foo">
      <span aria-hidden="true">&raquo;</span>
      <span class="visually-hidden">Last</span>
      </a>
      </li>"
    `)
  })

  it('passes additional props to the li element', async () => {
    const html = await render("<ui:pagination.last id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link" id="foo">
      <span aria-hidden="true">&raquo;</span>
      <span class="visually-hidden">Last</span>
      </a>
      </li>"
    `)
  })
})
