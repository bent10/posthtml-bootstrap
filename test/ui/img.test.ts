/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('img', () => {
  it('renders an img element', async () => {
    const html = await render("<ui:img src='image.jpg' />")
    expect(html).toMatchInlineSnapshot(
      `"<img src="image.jpg" class="img-fluid" alt="">"`
    )
  })

  it('renders with the given class', async () => {
    const html = await render("<ui:img src='image.jpg' class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<img src="image.jpg" class="img-fluid foo" alt="">"`
    )
  })

  it('renders with rounded class when rounded prop is true', async () => {
    const html = await render("<ui:img src='image.jpg' rounded />")
    expect(html).toMatchInlineSnapshot(
      `"<img src="image.jpg" class="img-fluid rounded" alt="">"`
    )
  })

  it('renders with rounded-circle class when circle prop is true', async () => {
    const html = await render("<ui:img src='image.jpg' circle />")
    expect(html).toMatchInlineSnapshot(
      `"<img src="image.jpg" class="img-fluid rounded-circle" alt="">"`
    )
  })

  it('renders with img-thumbnail class when thumbnail prop is true', async () => {
    const html = await render("<ui:img src='image.jpg' thumbnail />")
    expect(html).toMatchInlineSnapshot(
      `"<img src="image.jpg" class="img-fluid img-thumbnail" alt="">"`
    )
  })

  it('passes through additional props to the img element', async () => {
    const html = await render("<ui:img src='image.jpg' data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<img src="image.jpg" class="img-fluid" alt="" data-testid="foo">"`
    )
  })
})
