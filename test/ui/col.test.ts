/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('col', () => {
  it('should render a div with the "col" class by default', async () => {
    const html = await render('<ui:col />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="col">
      </div>"
    `)
  })

  it('renders the col component with custom HTML tag', async () => {
    const html = await render("<ui:col as='span' />")
    expect(html).toMatchInlineSnapshot(`
      "<span class="col">
      </span>"
    `)
  })

  it('should apply "size" prop', async () => {
    const html = await render("<ui:col size='auto' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="col-auto">
      </div>"
    `)
  })

  it('should apply multiple "size" prop', async () => {
    const html = await render("<ui:col size='sm-6 md-4 lg-3' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="col-sm-6 col-md-4 col-lg-3">
      </div>"
    `)
  })

  it('should apply "offset" prop', async () => {
    const html = await render("<ui:col offset='6' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="col offset-6">
      </div>"
    `)
  })

  it('should apply multiple "offset" prop', async () => {
    const html = await render("<ui:col offset='sm-3 md-2 lg-1' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="col offset-sm-3 offset-md-2 offset-lg-1">
      </div>"
    `)
  })

  it('should apply "order" prop', async () => {
    const html = await render("<ui:col order='last' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="col order-last">
      </div>"
    `)
  })

  it('should apply multiple "order" prop', async () => {
    const html = await render("<ui:col order='sm-2 md-1 lg-first' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="col order-sm-2 order-md-1 order-lg-first">
      </div>"
    `)
  })

  it('should apply class prop', async () => {
    const html = await render("<ui:col class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="col foo">
      </div>"
    `)
  })
})
