/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('flex', () => {
  it('should render a div with the "d-flex" class by default', async () => {
    const html = await render('<ui:flex />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex">
      </div>"
    `)
  })

  it('renders the flex component with custom HTML tag', async () => {
    const html = await render("<ui:flex as='span' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="d-flex">
      </span>"
    `)
  })

  it('should apply "direction" prop', async () => {
    const html = await render("<ui:flex direction='row' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-row">
      </div>"
    `)
  })

  it('should apply multiple "direction" prop', async () => {
    const html = await render("<ui:flex direction='column lg-row' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-column flex-lg-row">
      </div>"
    `)
  })

  it('should apply "justify" prop', async () => {
    const html = await render("<ui:flex justify='start' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex justify-content-start">
      </div>"
    `)
  })

  it('should apply multiple "justify" prop', async () => {
    const html = await render("<ui:flex justify='start lg-center' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex justify-content-start justify-content-lg-center">
      </div>"
    `)
  })

  it('should apply "align" prop', async () => {
    const html = await render("<ui:flex align='start' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex align-items-start">
      </div>"
    `)
  })

  it('should apply multiple "align" prop', async () => {
    const html = await render("<ui:flex align='start lg-stretch' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex align-items-start align-items-lg-stretch">
      </div>"
    `)
  })

  it('should apply "align-self" prop', async () => {
    const html = await render("<ui:flex align-self='start' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex align-self-start">
      </div>"
    `)
  })

  it('should apply multiple "align-self" prop', async () => {
    const html = await render("<ui:flex align-self='start lg-stretch' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex align-self-start align-self-lg-stretch">
      </div>"
    `)
  })

  it('should apply "align-content" prop', async () => {
    const html = await render("<ui:flex align-content='start' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex align-content-start">
      </div>"
    `)
  })

  it('should apply multiple "align-content" prop', async () => {
    const html = await render("<ui:flex align-content='start lg-stretch' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex align-content-start align-content-lg-stretch">
      </div>"
    `)
  })

  it('should apply "order" prop', async () => {
    const html = await render("<ui:flex order='3' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex order-3">
      </div>"
    `)
  })

  it('should apply multiple "order" prop', async () => {
    const html = await render("<ui:flex order='first lg-5' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex order-first order-lg-5">
      </div>"
    `)
  })

  it('should apply "gap" prop', async () => {
    const html = await render("<ui:flex gap='3' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex gap-3">
      </div>"
    `)
  })

  it('should apply multiple "gap" prop', async () => {
    const html = await render("<ui:flex gap='auto lg-5' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex gap-auto gap-lg-5">
      </div>"
    `)
  })

  it('should apply "row-gap" prop', async () => {
    const html = await render("<ui:flex row-gap='3' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex row-gap-3">
      </div>"
    `)
  })

  it('should apply multiple "row-gap" prop', async () => {
    const html = await render("<ui:flex row-gap='auto lg-5' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex row-gap-auto row-gap-lg-5">
      </div>"
    `)
  })

  it('should apply "fill" prop', async () => {
    const html = await render('<ui:flex fill />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-fill">
      </div>"
    `)
  })

  it('should apply breakpoint "fill" prop', async () => {
    const html = await render('<ui:flex fill="lg" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-lg-fill">
      </div>"
    `)
  })

  it('should apply "grow" prop', async () => {
    const html = await render('<ui:flex grow />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-grow-1">
      </div>"
    `)
  })

  it('should apply "grow" prop with value', async () => {
    const html = await render('<ui:flex grow="0" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-grow-0">
      </div>"
    `)
  })

  it('should apply breakpoint "grow" prop', async () => {
    const html = await render('<ui:flex grow="lg-1" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-lg-grow-1">
      </div>"
    `)
  })

  it('should apply "shrink" prop', async () => {
    const html = await render('<ui:flex shrink />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-shrink-1">
      </div>"
    `)
  })

  it('should apply "shrink" prop with value', async () => {
    const html = await render('<ui:flex shrink="0" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-shrink-0">
      </div>"
    `)
  })

  it('should apply breakpoint "shrink" prop', async () => {
    const html = await render('<ui:flex shrink="lg-1" />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-lg-shrink-1">
      </div>"
    `)
  })

  it('should apply "wrap" prop', async () => {
    const html = await render('<ui:flex wrap />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-wrap">
      </div>"
    `)
  })

  it('should apply breakpoint "wrap" prop', async () => {
    const html = await render("<ui:flex wrap='xl' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-xl-wrap">
      </div>"
    `)
  })

  it('should apply "wrap-reverse" prop', async () => {
    const html = await render('<ui:flex wrap-reverse />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-wrap-reverse">
      </div>"
    `)
  })

  it('should apply breakpoint "wrap-reverse" prop', async () => {
    const html = await render("<ui:flex wrap-reverse='xl' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-xl-wrap-reverse">
      </div>"
    `)
  })

  it('should apply "nowrap" prop', async () => {
    const html = await render('<ui:flex nowrap />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-nowrap">
      </div>"
    `)
  })

  it('should apply breakpoint "nowrap" prop', async () => {
    const html = await render("<ui:flex nowrap='xl' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="d-flex flex-xl-nowrap">
      </div>"
    `)
  })
})
