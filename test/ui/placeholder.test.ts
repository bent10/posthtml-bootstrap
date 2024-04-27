/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('placeholder', () => {
  it('renders placeholder next with default props', async () => {
    const html = await render('<ui:placeholder />')
    expect(html).toMatchInlineSnapshot(`"<span class="placeholder"></span>"`)
  })

  it('renders placeholder with additional classes', async () => {
    const html = await render("<ui:placeholder class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<span class="placeholder foo"></span>"`
    )
  })

  it('renders placeholder with specified variant', async () => {
    const html = await render("<ui:placeholder variant='primary' />")
    expect(html).toMatchInlineSnapshot(
      `"<span class="placeholder bg-primary"></span>"`
    )
  })

  it('renders placeholder with specified size', async () => {
    const html = await render("<ui:placeholder size='sm' />")
    expect(html).toMatchInlineSnapshot(
      `"<span class="placeholder placeholder-sm"></span>"`
    )
  })

  it('renders placeholder with specified width', async () => {
    const html = await render("<ui:placeholder width='75' />")
    expect(html).toMatchInlineSnapshot(
      `"<span class="placeholder w-75"></span>"`
    )
  })

  it('renders placeholder with specified cols', async () => {
    const html = await render("<ui:placeholder width='sm-6 xl-3' />")
    expect(html).toMatchInlineSnapshot(
      `"<span class="placeholder col-sm-6 col-xl-3"></span>"`
    )
  })

  it('renders placeholder with type', async () => {
    const html = await render("<ui:placeholder type='glow' />")
    expect(html).toMatchInlineSnapshot(
      `"<span class="placeholder-glow"></span>"`
    )
  })

  it('renders placeholder as button', async () => {
    const html = await render(
      "<ui:placeholder size='sm' width='50' is-button />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn btn-sm placeholder w-50" disabled>

      </button>"
    `)
  })

  it('renders placeholder as button with variant', async () => {
    const html = await render("<ui:placeholder variant='primary' is-button />")
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn btn-primary placeholder" disabled>

      </button>"
    `)
  })

  it('renders placeholder as button with size', async () => {
    const html = await render("<ui:placeholder size='lg' is-button />")
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn btn-lg placeholder" disabled>

      </button>"
    `)
  })

  it('renders placeholder as button with specified cols', async () => {
    const html = await render("<ui:placeholder width='sm-6 xl-3' is-button />")
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn placeholder col-sm-6 col-xl-3" disabled>

      </button>"
    `)
  })

  it('not throws invalid width value', async () => {
    const html = await render("<ui:placeholder width='-1' />")
    expect(html).toMatchInlineSnapshot(`"<span class="placeholder"></span>"`)
  })

  it('passes additional props to the placeholder element', async () => {
    const html = await render("<ui:placeholder id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<span class="placeholder" id="foo"></span>"`
    )
  })
})
