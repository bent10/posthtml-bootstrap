/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('alert.heading', () => {
  it('renders the alert.heading component with default props', async () => {
    const html = await render('<ui:alert.heading />')
    expect(html).toMatchInlineSnapshot(`
      "<h4 class="alert-heading">
      </h4>"
    `)
  })

  it('renders the alert.heading component with custom props', async () => {
    const html = await render("<ui:alert.heading as='h3' class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<h3 class="alert-heading foo">
      </h3>"
    `)
  })

  it('renders the alert.heading component with additional attributes', async () => {
    const html = await render("<ui:alert.heading data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<h4 class="alert-heading" data-testid="foo">
      </h4>"
    `)
  })

  it('renders the alert.heading component with children', async () => {
    const html = await render(
      '<ui:alert.heading>Alert Heading</ui:alert.heading>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<h4 class="alert-heading">Alert Heading
      </h4>"
    `)
  })
})
