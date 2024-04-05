/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('toast', () => {
  it('renders toast with default props', async () => {
    const html = await render('<ui:toast />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true">

      </div>"
    `)
  })

  it('renders toast with provided variant', async () => {
    const html = await render("<ui:toast variant='success' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast text-bg-success fade" role="alert" aria-live="assertive" aria-atomic="true">

      </div>"
    `)
  })

  it('renders toast with no-hide prop', async () => {
    const html = await render('<ui:toast no-hide />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">

      </div>"
    `)
  })

  it('renders toast with no-transition prop', async () => {
    const html = await render('<ui:toast no-transition />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-animation="false">

      </div>"
    `)
  })

  it('renders toast with delay prop', async () => {
    const html = await render("<ui:toast delay='1000' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="1000">

      </div>"
    `)
  })
})
