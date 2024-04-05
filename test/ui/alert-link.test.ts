/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('alert.link', () => {
  it('renders the alert.link component with default props', async () => {
    const html = await render('<ui:alert.link />')
    expect(html).toMatchInlineSnapshot(`"<a class="alert-link"></a>"`)
  })

  it('applies custom className to the alert.link component', async () => {
    const html = await render("<ui:alert.link className='foo' />")
    expect(html).toMatchInlineSnapshot(`"<a class="alert-link"></a>"`)
  })

  it('renders the alert.link component with provided URL', async () => {
    const html = await render("<ui:alert.link href='/foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<a href="/foo" class="alert-link"></a>"`
    )
  })

  it('renders the alert.link component with custom attributes', async () => {
    const html = await render("<ui:alert.link data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<a class="alert-link" data-testid="foo"></a>"`
    )
  })
})
