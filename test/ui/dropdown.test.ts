/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('dropdown', () => {
  it('renders dropdown with default props', async () => {
    const html = await render('<ui:dropdown />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown">
      </div>"
    `)
  })

  it('should render the dropdown component with custom HTML tag', async () => {
    const html = await render("<ui:dropdown as='span' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="dropdown">
      </span>"
    `)
  })

  it('renders dropdown with additional classes', async () => {
    const html = await render("<ui:dropdown class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown foo">
      </div>"
    `)
  })

  it('passes additional props to the dropdown element', async () => {
    const html = await render("<ui:dropdown id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown" id="foo">
      </div>"
    `)
  })

  it('renders dropdown with direction "up"', async () => {
    const html = await render("<ui:dropdown direction='up' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropup">
      </div>"
    `)
  })

  it('renders dropdown with direction "down"', async () => {
    const html = await render("<ui:dropdown direction='down' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown">
      </div>"
    `)
  })

  it('renders dropdown with direction "start"', async () => {
    const html = await render("<ui:dropdown direction='start' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropstart">
      </div>"
    `)
  })

  it('renders dropdown with direction "end"', async () => {
    const html = await render("<ui:dropdown direction='end' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropend">
      </div>"
    `)
  })

  it('renders dropdown with direction "up-centered"', async () => {
    const html = await render("<ui:dropdown direction='up-centered' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropup dropup-centered">
      </div>"
    `)
  })

  it('renders dropdown with direction "down-centered"', async () => {
    const html = await render("<ui:dropdown direction='down-centered' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown dropdown-centered">
      </div>"
    `)
  })

  it('renders with expand prop set to true', async () => {
    const html = await render('<ui:dropdown expand />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown dropdown-expand">
      </div>"
    `)
  })

  it('renders with expand prop set to a specific breakpoint', async () => {
    const html = await render("<ui:dropdown expand='lg' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown dropdown-expand-lg">
      </div>"
    `)
  })

  it('renders with expand prop set to true and direction set to "down"', async () => {
    const html = await render("<ui:dropdown expand direction='down' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown dropdown-expand">
      </div>"
    `)
  })

  it('renders with expand set to "lg" and direction set to "down-centered"', async () => {
    const html = await render(
      "<ui:dropdown expand='lg' direction='down-centered' />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropdown dropdown-centered dropdown-expand-lg">
      </div>"
    `)
  })

  it('renders with expand prop set to true and direction set to "up"', async () => {
    const html = await render("<ui:dropdown expand direction='up' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropup dropup-expand">
      </div>"
    `)
  })

  it('renders with expand set to "lg" and direction set to "up-centered"', async () => {
    const html = await render(
      "<ui:dropdown expand='lg' direction='up-centered' />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropup dropup-centered dropup-expand-lg">
      </div>"
    `)
  })

  it('renders with expand prop set to true and direction set to "start"', async () => {
    const html = await render("<ui:dropdown expand direction='start' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropstart dropstart-expand">
      </div>"
    `)
  })

  it('renders with expand set to "lg" and direction set to "start"', async () => {
    const html = await render("<ui:dropdown expand='lg' direction='start' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropstart dropstart-expand-lg">
      </div>"
    `)
  })

  it('renders with expand prop set to true and direction set to "end"', async () => {
    const html = await render("<ui:dropdown expand direction='end' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropend dropend-expand">
      </div>"
    `)
  })

  it('renders with expand set to "lg" and direction set to "end"', async () => {
    const html = await render("<ui:dropdown expand='lg' direction='end' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="dropend dropend-expand-lg">
      </div>"
    `)
  })
})
