/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('breadcrumb', () => {
  it('renders the breadcrumb component with default props', async () => {
    const html = await render('<ui:breadcrumb />')
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Breadcrumb">
      <ol class="breadcrumb">

      </ol>
      </nav>"
    `)
  })

  it('applies custom class to the breadcrumb component', async () => {
    const html = await render("<ui:breadcrumb class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Breadcrumb">
      <ol class="breadcrumb foo">

      </ol>
      </nav>"
    `)
  })

  it('renders the breadcrumb component with specified items', async () => {
    const items = [
      { text: 'foo', href: '/foo' },
      { text: 'bar', href: '/bar' },
      { text: 'baz', href: '/baz' }
    ]
    const html = await render(
      `<ui:breadcrumb items='${JSON.stringify(items)}' />`
    )
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Breadcrumb">
      <ol class="breadcrumb">



      <li class="breadcrumb-item">

      <a href="/foo">


      <svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"></path>
      </svg>

      foo
      </a>
      </li>




      <li class="breadcrumb-item">

      <a href="/bar">


      bar
      </a>
      </li>




      <li class="breadcrumb-item active">



      baz
      </li>


      </ol>
      </nav>"
    `)
  })

  it('renders the breadcrumb component with single items', async () => {
    const items = [{ text: 'foo', href: '/foo' }]
    const html = await render(
      `<ui:breadcrumb items='${JSON.stringify(items)}' />`
    )
    expect(html).toMatchInlineSnapshot(`
      "<nav aria-label="Breadcrumb">
      <ol class="breadcrumb">



      <li class="breadcrumb-item">

      <a href="./">


      <svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"></path>
      </svg>

      foo
      </a>
      </li>


      </ol>
      </nav>"
    `)
  })

  it('renders the breadcrumb component with custom divider', async () => {
    const html = await render("<ui:breadcrumb divider='>' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav style="--bs-breadcrumb-divider: &#039;&gt;&#039;" aria-label="Breadcrumb">
      <ol class="breadcrumb">

      </ol>
      </nav>"
    `)
  })
})
