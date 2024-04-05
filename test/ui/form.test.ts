/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form', () => {
  it('renders a form by default', async () => {
    const html = await render('<ui:form />')
    expect(html).toMatchInlineSnapshot(`"<form></form>"`)
  })

  it('renders with the given className', async () => {
    const html = await render("<ui:form class='foo' />")
    expect(html).toMatchInlineSnapshot(`"<form class="foo"></form>"`)
  })

  it('renders as validated when validated prop is true', async () => {
    const html = await render('<ui:form validated />')
    expect(html).toMatchInlineSnapshot(`"<form class="was-validated"></form>"`)
  })

  it('passes through additional props to the form element', async () => {
    const html = await render(`<ui:form id='foo' />`)
    expect(html).toMatchInlineSnapshot(`"<form id="foo"></form>"`)
  })
})
