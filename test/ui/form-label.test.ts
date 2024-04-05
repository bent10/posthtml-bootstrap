/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('form.label', () => {
  it('renders with default props', async () => {
    const html = await render('<ui:form.label>Label</Form.Label>')
    expect(html).toMatchInlineSnapshot(`
      "<label class="form-label">Label
      </label>"
    `)
  })

  it('renders visuallyHidden label', async () => {
    const html = await render(
      '<ui:form.label visuallyHidden>Label</Form.Label>'
    )
    expect(html).toMatchInlineSnapshot(`
      "<label class="form-label visually-hidden">Label
      </label>"
    `)
  })

  it('renders with custom for prop', async () => {
    const html = await render("<ui:form.label for='bar'>Label</Form.Label>")
    expect(html).toMatchInlineSnapshot(`
      "<label class="form-label" for="bar">Label
      </label>"
    `)
  })

  it('renders with additional class name', async () => {
    const html = await render("<ui:form.label class='qux'>Label</Form.Label>")
    expect(html).toMatchInlineSnapshot(`
      "<label class="form-label qux">Label
      </label>"
    `)
  })

  it('renders as custom component', async () => {
    const html = await render("<ui:form.label as='span'>Label</Form.Label>")
    expect(html).toMatchInlineSnapshot(`
      "<span class="form-label">Label
      </span>"
    `)
  })
})
