/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.feedback', () => {
  it('renders a div by default', async () => {
    const html = await render('<ui:form.feedback>foo</ui:form.feedback>')
    expect(html).toMatchInlineSnapshot(`
      "<div class="valid-feedback">foo
      </div>"
    `)
  })

  it('renders with the given className', async () => {
    const html = await render("<ui:form.feedback class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="valid-feedback foo">
      </div>"
    `)
  })

  it('renders as valid feedback by default', async () => {
    const html = await render('<ui:form.feedback />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="valid-feedback">
      </div>"
    `)
  })

  it('renders as invalid feedback when type prop is set to "invalid"', async () => {
    const html = await render("<ui:form.feedback type='invalid' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="invalid-feedback">
      </div>"
    `)
  })

  it('renders as a tooltip when tooltip prop is true', async () => {
    const html = await render('<ui:form.feedback tooltip />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="valid-tooltip">
      </div>"
    `)
  })

  it('passes through additional props to the div element', async () => {
    const html = await render("<ui:form.feedback data-testid='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="valid-feedback" data-testid="foo">
      </div>"
    `)
  })
})
