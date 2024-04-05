/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.control', () => {
  it('should render an input element with default class', async () => {
    const html = await render('<ui:form.control />')
    expect(html).toMatchInlineSnapshot(
      `"<input type="text" class="form-control">"`
    )
  })

  it('should render a plaintext input element with correct class', async () => {
    const html = await render('<ui:form.control plaintext />')
    expect(html).toMatchInlineSnapshot(
      `"<input type="text" class="form-control-plaintext">"`
    )
  })

  it('should render an input element with lg prop', async () => {
    const html = await render('<ui:form.control lg />')
    expect(html).toMatchInlineSnapshot(
      `"<input type="text" class="form-control form-control-lg">"`
    )
  })

  it('should render an input element with sm prop', async () => {
    const html = await render('<ui:form.control sm />')
    expect(html).toMatchInlineSnapshot(
      `"<input type="text" class="form-control form-control-sm">"`
    )
  })

  it('should render an input element with valid prop', async () => {
    const html = await render('<ui:form.control valid />')
    expect(html).toMatchInlineSnapshot(
      `"<input type="text" class="form-control is-valid">"`
    )
  })

  it('should render an input element with invalid prop', async () => {
    const html = await render('<ui:form.control invalid />')
    expect(html).toMatchInlineSnapshot(
      `"<input type="text" class="form-control is-invalid">"`
    )
  })

  it('should render an input element with provided id', async () => {
    const html = await render("<ui:form.control id='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<input type="text" class="form-control" id="foo">"`
    )
  })
})
