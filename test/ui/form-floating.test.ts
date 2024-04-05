/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.floating', () => {
  it('renders with default props', async () => {
    const html = await render('<ui:form.floating />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-floating">
      </div>"
    `)
  })

  it('renders the children', async () => {
    const html = await render(
      `<ui:form.floating>
        <ui:form.control id="foo" />
        <ui:form.label for="foo">Label text</ui:form.label>
      </ui:form.floating>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-floating">


      <input type="text" class="form-control" id="foo">



      <label class="form-label" for="foo">Label text
      </label>

      </div>"
    `)
  })

  it('applies the provided class', async () => {
    const html = await render("<ui:form.floating class='bar' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-floating bar">
      </div>"
    `)
  })

  it('applies the provided id', async () => {
    const html = await render(
      `<ui:form.floating id='bar'>
        <ui:form.control />
      </ui:form.floating>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-floating" id="bar">


      <input type="text" class="form-control">


      </div>"
    `)
  })
})
