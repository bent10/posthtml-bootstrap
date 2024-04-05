/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('button-toggle', () => {
  it('renders the button-toggle component with default props', async () => {
    const html = await render('<ui:button-toggle>Toggle</ui:button-toggle>')
    expect(html).toMatchInlineSnapshot(`
      "<input type="checkbox" class="btn-check" autocomplete="off">
      <label class="btn btn-secondary">Toggle</label>"
    `)
  })

  it('renders the button-toggle component as checked', async () => {
    const html = await render(
      "<ui:button-toggle id='foo' checked>Toggle</ui:button-toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<input type="checkbox" class="btn-check" id="foo" autocomplete="off" checked="">
      <label class="btn btn-secondary" for="foo">Toggle</label>"
    `)
  })

  it('renders the button-toggle component with type prop', async () => {
    const html = await render(
      "<ui:button-toggle id='foo' type='radio' name='radio'>Toggle</ui:button-toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<input type="radio" class="btn-check" name="radio" id="foo" autocomplete="off">
      <label class="btn btn-secondary" for="foo">Toggle</label>"
    `)
  })

  it('renders the button-toggle component with variant prop', async () => {
    const html = await render(
      "<ui:button-toggle id='foo' variant='primary'>Toggle</ui:button-toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<input type="checkbox" class="btn-check" id="foo" autocomplete="off">
      <label class="btn btn-primary" for="foo">Toggle</label>"
    `)
  })

  it('applies custom class to the button-toggle component', async () => {
    const html = await render(
      "<ui:button-toggle id='foo' class='foo'>Toggle</ui:button-toggle>"
    )
    expect(html).toMatchInlineSnapshot(`
      "<input type="checkbox" class="btn-check foo" id="foo" autocomplete="off">
      <label class="btn btn-secondary foo" for="foo">Toggle</label>"
    `)
  })
})
