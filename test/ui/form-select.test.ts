/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.select', () => {
  it('should render a select element with default props', async () => {
    const html = await render('<ui:form.select />')
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select">

      </select>"
    `)
  })

  it('should render with given id', async () => {
    const html = await render("<ui:form.select id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select" id="foo">

      </select>"
    `)
  })

  it('should render with given class', async () => {
    const html = await render("<ui:form.select class='bar' />")
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select bar">

      </select>"
    `)
  })

  it('should render with sm prop', async () => {
    const html = await render('<ui:form.select sm />')
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select form-select-sm">

      </select>"
    `)
  })

  it('should render with lg prop', async () => {
    const html = await render('<ui:form.select lg />')
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select form-select-lg">

      </select>"
    `)
  })

  it('should render disabled when disabled prop is true', async () => {
    const html = await render('<ui:form.select disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select" disabled="">

      </select>"
    `)
  })

  it('should render readonly when readonly prop is true', async () => {
    const html = await render('<ui:form.select readonly />')
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select">

      </select>"
    `)
  })

  it('should render valid when valid prop is true', async () => {
    const html = await render('<ui:form.select valid />')
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select is-valid">

      </select>"
    `)
  })

  it('should render invalid when invalid prop is true', async () => {
    const html = await render('<ui:form.select invalid />')
    expect(html).toMatchInlineSnapshot(`
      "<select class="form-select is-invalid">

      </select>"
    `)
  })
})
