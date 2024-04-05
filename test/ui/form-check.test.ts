/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.check', () => {
  it('renders a checkbox by default', async () => {
    const html = await render('<ui:form.check />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check">
      <input type="checkbox" class="form-check-input">
      </div>"
    `)
  })

  it('renders a radio button when type prop is set to "radio"', async () => {
    const html = await render("<ui:form.check type='radio' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check">
      <input type="radio" class="form-check-input">
      </div>"
    `)
  })

  it('renders a switch when type prop is set to "switch"', async () => {
    const html = await render("<ui:form.check type='switch' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check form-switch">
      <input type="checkbox" class="form-check-input" role="switch">
      </div>"
    `)
  })

  it('renders with the given label', async () => {
    const html = await render("<ui:form.check id='foo' label='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check">
      <input type="checkbox" id="foo" class="form-check-input">

      <label class="form-check-label" for="foo">foo</label>
      </div>"
    `)
  })

  it('renders inline when inline prop is set to true', async () => {
    const html = await render('<ui:form.check inline />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input">
      </div>"
    `)
  })

  it('renders with the check element and its label reversed when reverse prop is set to true', async () => {
    const html = await render(
      "<ui:form.check id='foo' label='Test Label' reverse />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check form-check-reverse">
      <input type="checkbox" id="foo" class="form-check-input">

      <label class="form-check-label" for="foo">Test Label</label>
      </div>"
    `)
  })

  it('applies "is-valid" class to check element when "valid" prop is set to true', async () => {
    const html = await render('<ui:form.check valid />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check">
      <input type="checkbox" class="form-check-input is-valid">
      </div>"
    `)
  })

  it('applies "is-invalid" class to check element when "invalid" prop is set to true', async () => {
    const html = await render('<ui:form.check invalid />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check">
      <input type="checkbox" class="form-check-input is-invalid">
      </div>"
    `)
  })

  it('passes through additional props to the input element', async () => {
    const html = await render("<ui:form.check data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check">
      <input type="checkbox" class="form-check-input" data-testid="foo">
      </div>"
    `)
  })

  it('uses the id prop when it is provided', async () => {
    const html = await render("<ui:form.check id='bar' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="form-check">
      <input type="checkbox" id="bar" class="form-check-input">
      </div>"
    `)
  })
})
