/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('nav', () => {
  it('renders nav with default props', async () => {
    const html = await render('<ui:nav />')
    expect(html).toMatchInlineSnapshot(`
      "<ul class="nav">
      </ul>"
    `)
  })

  it('renders nav with additional classes', async () => {
    const html = await render("<ui:nav class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<ul class="nav foo">
      </ul>"
    `)
  })

  it('renders nav with specified type', async () => {
    const html = await render("<ui:nav type='tabs' />")
    expect(html).toMatchInlineSnapshot(`
      "<ul class="nav nav-tabs">
      </ul>"
    `)
  })

  it('renders nav as navbar nav', async () => {
    const html = await render('<ui:nav navbar />')
    expect(html).toMatchInlineSnapshot(`
      "<ul class="navbar-nav">
      </ul>"
    `)
  })

  it('renders nav with fill option', async () => {
    const html = await render('<ui:nav fill />')
    expect(html).toMatchInlineSnapshot(`
      "<ul class="nav nav-fill">
      </ul>"
    `)
  })

  it('renders nav with justified option', async () => {
    const html = await render('<ui:nav justified />')
    expect(html).toMatchInlineSnapshot(`
      "<ul class="nav nav-justified">
      </ul>"
    `)
  })

  it('renders nav with vertical option', async () => {
    const html = await render('<ui:nav vertical />')
    expect(html).toMatchInlineSnapshot(`
      "<ul class="nav flex-column flex-nowrap">
      </ul>"
    `)
  })
})
