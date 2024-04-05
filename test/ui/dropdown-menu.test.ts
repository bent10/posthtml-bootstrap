/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('dropdown.menu', () => {
  it('renders dropdown menu with default props', async () => {
    const html = await render(
      `<ui:dropdown>
        <ui:dropdown.menu />
      </ui:dropdown>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown">


      <ul class="dropdown-menu">
      </ul>

      </div>"
    `)
  })

  it('renders dropdown menu with additional classes', async () => {
    const html = await render("<ui:dropdown.menu className='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<ul class="dropdown-menu">
      </ul>"
    `)
  })

  it('renders dropdown menu with aligned position', async () => {
    const html = await render("<ui:dropdown.menu align='start' />")
    expect(html).toMatchInlineSnapshot(`
      "<ul class="dropdown-menu dropdown-menu-start">
      </ul>"
    `)
  })

  it('renders dropdown menu with responsive aligned position', async () => {
    const html = await render("<ui:dropdown.menu align='start xl-end' />")
    expect(html).toMatchInlineSnapshot(`
      "<ul class="dropdown-menu dropdown-menu-start dropdown-menu-xl-end">
      </ul>"
    `)
  })

  it('renders dropdown menu with items', async () => {
    const html = await render(
      `<ui:dropdown.menu items="[{ header: 'Header' },{ text: 'Foo', href: '/foo' },{ text: 'Bar', href: '/bar', active: true },{ divider: true },{ text: 'baz', href: '/baz', disabled: true }]" />`
    )
    expect(html).toMatchInlineSnapshot(`
      "<ul class="dropdown-menu">





      <li><h6 class="dropdown-header">Header</h6></li>





      <li>
      <a href="/foo" class="dropdown-item">
      Foo

      </a></li>





      <li>
      <a href="/bar" class="dropdown-item active" aria-current="true">
      Bar

      </a></li>


      <li><hr class="dropdown-divider"></li>




      <li>
      <a href="/baz" class="dropdown-item disabled" tabindex="-1" aria-disabled="true">
      baz

      </a></li>


      </ul>"
    `)
  })
})
