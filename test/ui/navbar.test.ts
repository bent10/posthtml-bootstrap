/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('navbar', () => {
  it('renders navbar with default props', async () => {
    const html = await render('<ui:navbar />')
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar">
      </nav>"
    `)
  })

  it('renders navbar with custom HTML tag', async () => {
    const html = await render("<ui:navbar as='div' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="navbar">
      </div>"
    `)
  })

  it('renders navbar with additional classes', async () => {
    const html = await render("<ui:navbar class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar foo">
      </nav>"
    `)
  })

  it('renders navbar with bg prop', async () => {
    const html = await render("<ui:navbar bg='primary' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar bg-primary">
      </nav>"
    `)
  })

  it('renders navbar with expand prop', async () => {
    const html = await render("<ui:navbar expand='md' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar navbar-expand-md">
      </nav>"
    `)
  })

  it('renders navbar with fixed prop', async () => {
    const html = await render("<ui:navbar fixed='top' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar fixed-top">
      </nav>"
    `)
  })

  it('renders navbar with sticky prop', async () => {
    const html = await render("<ui:navbar sticky='xl-top' />")
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar sticky-xl-top">
      </nav>"
    `)
  })

  it('renders navbar with expand prop set to true', async () => {
    const html = await render('<ui:navbar expand />')
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar navbar-expand">
      </nav>"
    `)
  })

  it('renders navbar with fixed prop set to true', async () => {
    const html = await render('<ui:navbar fixed />')
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar fixed-top">
      </nav>"
    `)
  })

  it('renders navbar with sticky prop set to true', async () => {
    const html = await render('<ui:navbar sticky />')
    expect(html).toMatchInlineSnapshot(`
      "<nav class="navbar sticky-top">
      </nav>"
    `)
  })
})
