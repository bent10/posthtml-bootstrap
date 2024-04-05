/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.group', () => {
  it('renders with default class', async () => {
    const html = await render('<ui:form.group />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-group">
      </div>"
    `)
  })

  it('renders children correctly', async () => {
    const html = await render(
      `<ui:form.group>
        <ui:form.control />
      </ui:form.group>
      `
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-group">


      <input type="text" class="form-control">


      </div>"
    `)
  })

  it('renders with correct class', async () => {
    const html = await render("<ui:form.group class='row' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-group row">
      </div>"
    `)
  })

  it('renders with correct as prop', async () => {
    const html = await render("<ui:form.group as='section' />")
    expect(html).toMatchInlineSnapshot(`
      "<section class="form-group">
      </section>"
    `)
  })
})
