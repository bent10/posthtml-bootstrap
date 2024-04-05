/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('pagination.next', () => {
  it('renders pagination next with default props', async () => {
    const html = await render('<ui:pagination.next />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&rsaquo;</span>
      <span class="visually-hidden">Next</span>
      </a>
      </li>"
    `)
  })

  it('renders active pagination next', async () => {
    const html = await render('<ui:pagination.next active />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item active" aria-current="true">

      <span class="page-link">
      <span aria-hidden="true">&rsaquo;</span>
      <span class="visually-hidden">Next</span>
      </span>
      </li>"
    `)
  })

  it('renders disabled pagination next', async () => {
    const html = await render('<ui:pagination.next disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item disabled">

      <span class="page-link">
      <span aria-hidden="true">&rsaquo;</span>
      <span class="visually-hidden">Next</span>
      </span>
      </li>"
    `)
  })

  it('renders pagination next with text prop', async () => {
    const html = await render('<ui:pagination.next href="/foo" text="foo" />')
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="/foo" class="page-link">
      <span aria-hidden="true">&rsaquo;</span>
      <span class="visually-hidden">foo</span>
      </a>
      </li>"
    `)
  })

  it('renders pagination next with additional classes', async () => {
    const html = await render("<ui:pagination.next class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link foo">
      <span aria-hidden="true">&rsaquo;</span>
      <span class="visually-hidden">Next</span>
      </a>
      </li>"
    `)
  })

  it('passes additional props to the li element', async () => {
    const html = await render("<ui:pagination.next id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="page-item">

      <a href="#" class="page-link" id="foo">
      <span aria-hidden="true">&rsaquo;</span>
      <span class="visually-hidden">Next</span>
      </a>
      </li>"
    `)
  })
})
