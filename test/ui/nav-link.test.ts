/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('nav.link', () => {
  it('renders nav.link with default props', async () => {
    const html = await render('<ui:nav.link />')
    expect(html).toMatchInlineSnapshot(`
      "<a class="nav-link">


      </a>"
    `)
  })

  it('renders nav.link as button', async () => {
    const html = await render("<ui:nav.link as='button' />")
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="nav-link">

      </button>"
    `)
  })

  it('renders nav.link with additional classes', async () => {
    const html = await render("<ui:nav.link class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<a class="nav-link foo">


      </a>"
    `)
  })

  it('renders nav.link with active prop', async () => {
    const html = await render(
      `<ui:nav.link active />
      <ui:nav.link as="button" active />`
    )
    expect(html).toMatchInlineSnapshot(`
      "<a class="nav-link active" aria-current="page">


      </a>



      <button type="button" class="nav-link active">

      </button>"
    `)
  })

  it('renders nav.link with disabled prop', async () => {
    const html = await render(
      `<ui:nav.link disabled />
      <ui:nav.link as="button" disabled />`
    )
    expect(html).toMatchInlineSnapshot(`
      "<a class="nav-link disabled" aria-disabled="true">


      </a>



      <button type="button" class="nav-link" disabled>

      </button>"
    `)
  })

  it('renders nav.link as tab', async () => {
    const html = await render("<ui:nav.link toggle target='#foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" id="foo-tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#foo" role="tab" aria-controls="foo">

      </button>"
    `)
  })
})
