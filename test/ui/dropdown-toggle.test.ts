/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('dropdown.toggle', () => {
  it('renders dropdown toggle button with default props', async () => {
    const html = await render('<ui:dropdown.toggle>Toggle</ui:dropdown.toggle>')
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders dropdown toggle button with additional classes', async () => {
    const html = await render(
      "<ui:dropdown.toggle class='foo'>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn dropdown-toggle foo" data-bs-toggle="dropdown" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button when split prop is true', async () => {
    const html = await render(
      '<ui:dropdown.toggle split>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders split-style toggle button with additional classes', async () => {
    const html = await render(
      "<ui:dropdown.toggle split class='foo'>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap foo">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with variant prop', async () => {
    const html = await render(
      "<ui:dropdown.toggle variant='primary'>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with variant prop', async () => {
    const html = await render(
      "<ui:dropdown.toggle variant='primary' split>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn btn-primary text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with size prop', async () => {
    const html = await render(
      "<ui:dropdown.toggle size='sm'>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with size prop', async () => {
    const html = await render(
      "<ui:dropdown.toggle size='sm' split>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn btn-sm text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with nowrap prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle nowrap>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with nowrap prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle nowrap split>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with active prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle active>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn active dropdown-toggle" data-bs-toggle="dropdown" aria-pressed="true" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with active prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle active split>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn active text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn active dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-pressed="true" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with disabled prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle disabled>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" disabled="" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with disabled prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle disabled split>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap" disabled="">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" disabled="true" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with autoclose prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle autoclose>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-autoclose="true" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with autoclose prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle autoclose split>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" data-bs-autoclose="true" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with static prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle static>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with static prop', async () => {
    const html = await render(
      '<ui:dropdown.toggle static split>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with offset prop', async () => {
    const html = await render(
      "<ui:dropdown.toggle offset='10,20'>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="10,20" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with offset prop', async () => {
    const html = await render(
      "<ui:dropdown.toggle offset='10,20' split>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" data-bs-offset="10,20" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button with reference prop', async () => {
    const html = await render(
      "<ui:dropdown.toggle reference='parent'>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-reference="parent" aria-expanded="false">
      Toggle</button>"
    `)
  })

  it('renders split-style toggle button with reference prop', async () => {
    const html = await render(
      "<ui:dropdown.toggle reference='parent' split>Toggle</ui:dropdown.toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" data-bs-reference="parent" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })

  it('renders dropdown toggle button without toggler', async () => {
    const html = await render(
      '<ui:dropdown.toggle no-toggler>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
    "<button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
    Toggle</button>"
  `)
  })

  it('renders split-style toggle button with without toggler', async () => {
    const html = await render(
      '<ui:dropdown.toggle no-toggler split>Toggle</ui:dropdown.toggle>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="btn text-nowrap">
      Toggle
      </button>
      <button type="button" class="btn dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">

      <span class="visually-hidden">Toggle Dropdown</span>
      </button>"
    `)
  })
})
