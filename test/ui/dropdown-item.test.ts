/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('dropdown.item', () => {
  it('renders dropdown item as button by default', async () => {
    const html = await render('<ui:dropdown.item />')
    expect(html).toMatchInlineSnapshot(`
      "<li>
      <a class="dropdown-item">
      </a></li>"
    `)
  })

  it('renders dropdown item with children', async () => {
    const html = await render(
      "<ui:dropdown.item href='/foo'>Children</Dropdown.Item>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<li>
      <a href="/foo" class="dropdown-item">Children
      </a></li>"
    `)
  })

  it('renders dropdown item as button', async () => {
    const html = await render(
      "<ui:dropdown.item as='button'>Children</Dropdown.Item>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<li>
      <button type="button" class="dropdown-item">Children
      </button></li>"
    `)
  })

  it('applies active class when active prop is true', async () => {
    const html = await render('<ui:dropdown.item active />')
    expect(html).toMatchInlineSnapshot(`
      "<li>
      <a class="dropdown-item active" aria-current="true">
      </a></li>"
    `)
  })

  it('disables the dropdown item when disabled prop is true', async () => {
    const html = await render('<ui:dropdown.item disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<li>
      <a class="dropdown-item disabled" tabindex="-1" aria-disabled="true">
      </a></li>"
    `)
  })

  it('passes additional props to the dropdown item', async () => {
    const html = await render("<ui:dropdown.item data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<li>
      <a class="dropdown-item" data-testid="foo">
      </a></li>"
    `)
  })
})
