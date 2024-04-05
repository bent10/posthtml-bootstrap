/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('pagination', () => {
  it('renders pagination with default props', async () => {
    const html = await render('<ui:pagination />')
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Pagination">
      <ul class="pagination">

      </ul>
      </nav>"
    `)
  })

  it('renders pagination with additional classes', async () => {
    const html = await render("<ui:pagination class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Pagination">
      <ul class="pagination foo">

      </ul>
      </nav>"
    `)
  })

  it('renders pagination with size variant', async () => {
    const html = await render("<ui:pagination size='lg' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Pagination">
      <ul class="pagination pagination-lg">

      </ul>
      </nav>"
    `)
  })

  it('renders pagination with alignment', async () => {
    const html = await render("<ui:pagination align='end' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Pagination">
      <ul class="pagination justify-content-end">

      </ul>
      </nav>"
    `)
  })

  it('passes additional props to the ul element', async () => {
    const html = await render("<ui:pagination id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Pagination">
      <ul class="pagination" id="foo">

      </ul>
      </nav>"
    `)
  })

  it('renders pagination items', async () => {
    const html = await render(
      `<ui:pagination>
        <ui:pagination.first />
        <ui:pagination.prev />
        <ui:pagination.ellipsis />
        <ui:pagination.item href='/1' text='1' />
        <ui:pagination.ellipsis />
        <ui:pagination.next />
        <ui:pagination.last />
      </ui:pagination>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Pagination">
      <ul class="pagination">



      <li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&laquo;</span>
      <span class="visually-hidden">First</span>
      </a>
      </li>



      <li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&lsaquo;</span>
      <span class="visually-hidden">Previous</span>
      </a>
      </li>



      <li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&hellip;</span>
      <span class="visually-hidden">More</span>
      </a>
      </li>



      <li class="page-item">

      <a href="/1" class="page-link">
      1
      </a>
      </li>



      <li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&hellip;</span>
      <span class="visually-hidden">More</span>
      </a>
      </li>



      <li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&rsaquo;</span>
      <span class="visually-hidden">Next</span>
      </a>
      </li>



      <li class="page-item">

      <a href="#" class="page-link">
      <span aria-hidden="true">&raquo;</span>
      <span class="visually-hidden">Last</span>
      </a>
      </li>


      </ul>
      </nav>"
    `)
  })
})
