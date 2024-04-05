/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('figure', async () => {
  it('renders a figure element', async () => {
    const html = await render('<ui:figure />')
    expect(html).toMatchInlineSnapshot(`
      "<figure class="figure">


      </figure>"
    `)
  })

  it('renders children within figure element', async () => {
    const html = await render(
      `<ui:figure>
        <img src='image.jpg' alt='Test' />
      </ui:figure>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<figure class="figure">

      <img src="image.jpg" alt="Test">


      </figure>"
    `)
  })

  it('renders caption within figure element', async () => {
    const html = await render(
      `<ui:figure caption='figure Caption'>
        <img src='image.jpg' alt='Test' />
      </ui:figure>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<figure class="figure">

      <figcaption>figure Caption</figcaption>

      <img src="image.jpg" alt="Test">


      </figure>"
    `)
  })

  it('passes through additional props to the figure element', async () => {
    const html = await render("<ui:figure data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<figure class="figure" data-testid="foo">


      </figure>"
    `
    )
  })
})
