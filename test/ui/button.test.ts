/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('button', () => {
  it('renders the button component with default props', async () => {
    const html = await render('<ui:button>Button</ui:button>')
    expect(html).toMatchInlineSnapshot(
      `
      "<button type="button" class="btn">
      Button
      </button>"
    `
    )
  })

  it('renders the button component with input tag', async () => {
    const html = await render("<ui:button as='input' value='Button' />")
    expect(html).toMatchInlineSnapshot(
      `"<input type="button" class="btn" value="Button">"`
    )
  })

  it('renders the button component with custom HTML tag', async () => {
    const html = await render("<ui:button as='div'>Button</ui:button>")
    expect(html).toMatchInlineSnapshot(`
      "<div class="btn" role="button">
      Button

      </div>"
    `)
  })

  it('applies custom class to the button component', async () => {
    const html = await render("<ui:button class='btn-foo'>Button</ui:button>")
    expect(html).toMatchInlineSnapshot(
      `
      "<button type="button" class="btn btn-foo">
      Button
      </button>"
    `
    )
  })

  it('renders the button component with specified variant', async () => {
    const html = await render(
      "<ui:button variant='secondary'>Button</ui:button>"
    )
    expect(html).toMatchInlineSnapshot(
      `
      "<button type="button" class="btn btn-secondary">
      Button
      </button>"
    `
    )
  })

  it('renders the button component as a link', async () => {
    const html = await render("<ui:button href='#example'>Button</ui:button>")
    expect(html).toMatchInlineSnapshot(
      `
      "<a href="#example" class="btn" role="button">
      Button
      </a>"
    `
    )
  })

  it('renders the button component with specified size', async () => {
    const html = await render("<ui:button size='lg'>Button</ui:button>")
    expect(html).toMatchInlineSnapshot(
      `
      "<button type="button" class="btn btn-lg">
      Button
      </button>"
    `
    )
  })

  it('renders the button component as disabled', async () => {
    const html = await render('<ui:button disabled>Button</ui:button>')
    expect(html).toMatchInlineSnapshot(
      `
      "<button type="button" class="btn" disabled>
      Button
      </button>"
    `
    )
  })

  it('renders the button component as disabled link', async () => {
    const html = await render(
      '<ui:button href="/foo" disabled>Button</ui:button>'
    )
    expect(html).toMatchInlineSnapshot(
      `
      "<a href="/foo" class="btn disabled" role="button" tabindex="-1" aria-disabled="true">
      Button
      </a>"
    `
    )
  })

  it('renders the button component as active', async () => {
    const html = await render('<ui:button active>Button</ui:button>')
    expect(html).toMatchInlineSnapshot(
      `
      "<button type="button" class="btn active" aria-pressed="true">
      Button
      </button>"
    `
    )
  })

  it('renders the button component with nowrap', async () => {
    const html = await render('<ui:button nowrap>Button</ui:button>')
    expect(html).toMatchInlineSnapshot(
      `
      "<button type="button" class="btn text-nowrap">
      Button
      </button>"
    `
    )
  })

  it('renders the button component with toggle and target', async () => {
    const html = await render(
      '<ui:button toggle="modal" target="#foo">Button</ui:button>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#foo">
      Button
      </button>"
    `)
  })
})
