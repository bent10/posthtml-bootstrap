/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('container', () => {
  it('should render the container component with default props', async () => {
    const html = await render('<ui:container />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="container">
      </div>"
    `)
  })

  it('should render the container component with custom HTML tag', async () => {
    const html = await render("<ui:container as='span' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="container">
      </span>"
    `)
  })

  it('should render the container component fluid', async () => {
    const html = await render('<ui:container fluid />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="container-fluid">
      </div>"
    `)
  })

  it('should render the container component fluid with breakpoint', async () => {
    const html = await render("<ui:container fluid='lg' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="container-lg">
      </div>"
    `)
  })

  it('should render the container component with custom props', async () => {
    const html = await render("<ui:container data-testid='foo' class='bar' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="container bar" data-testid="foo">
      </div>"
    `)
  })
})
