/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('badge', () => {
  it('renders the badge component with default props', async () => {
    const html = await render('<ui:badge />')
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge text-bg-primary">

      </span>"
    `)
  })

  it('renders the badge component with custom HTML tag', async () => {
    const html = await render("<ui:badge as='div' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="badge text-bg-primary">

      </div>"
    `)
  })

  it('applies custom class to the badge component', async () => {
    const html = await render("<ui:badge class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge text-bg-primary foo">

      </span>"
    `)
  })

  it('renders the badge component with specified variant', async () => {
    const html = await render("<ui:badge variant='secondary' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge text-bg-secondary">

      </span>"
    `)
  })

  it('renders the badge component with border', async () => {
    const html = await render('<ui:badge bordered>2</ui:badge>')
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge badge-bordered text-bg-primary">
      2
      </span>"
    `)
  })

  it('renders the badge component with pill shape', async () => {
    const html = await render('<ui:badge pill>2</ui:badge>')
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge text-bg-primary rounded-pill">
      2
      </span>"
    `)
  })

  it('renders the badge component with circle shape', async () => {
    const html = await render('<ui:badge circle>2</ui:badge>')
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge text-bg-primary rounded-circle">
      2
      </span>"
    `)
  })

  it('renders the badge component floated to the top-right corner', async () => {
    const html = await render('<ui:badge floated />')
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge text-bg-primary position-absolute top-0 end-0">

      </span>"
    `)
  })

  it('renders the badge component floated to the bottom-right corner', async () => {
    const html = await render('<ui:badge floated-bottom />')
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge text-bg-primary position-absolute top-auto end-0 bottom-0">

      </span>"
    `)
  })

  it('renders the badge component with visually hidden text', async () => {
    const html = await render(
      "<ui:badge visual-hidden-text='Important notification'>5</ui:badge>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<span class="badge text-bg-primary">
      5



      <span class="visually-hidden">Important notification
      </span>
      </span>"
    `)
  })
})
