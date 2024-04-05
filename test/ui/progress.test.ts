/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('progress', () => {
  it('renders progress with default props', async () => {
    const html = await render('<ui:progress />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar text-bg-primary" style="width: 0%;">
      <span class="visually-hidden">0%</span></div>
      </div>"
    `)
  })

  it('renders progress height', async () => {
    const html = await render(
      "<ui:progress now='4' min='10' max='50' height='2px' />"
    )
    expect(html).toMatchInlineSnapshot(`
      "<div class="progress" role="progressbar" aria-valuenow="10" aria-valuemin="10" aria-valuemax="50">
      <div class="progress-bar text-bg-primary" style="width: 0%; height: 2px;">
      <span class="visually-hidden">0%</span></div>
      </div>"
    `)
  })

  it('renders progress with additional classes', async () => {
    const html = await render("<ui:progress now='75' max='50' class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="progress foo" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50">
      <div class="progress-bar text-bg-primary" style="width: 100%;">
      <span class="visually-hidden">100%</span></div>
      </div>"
    `)
  })

  it('renders progress bar with striped style', async () => {
    const html = await render("<ui:progress now='25' striped />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar text-bg-primary progress-bar-striped" style="width: 25%;">
      <span class="visually-hidden">25%</span></div>
      </div>"
    `)
  })

  it('renders progress bar with animated style', async () => {
    const html = await render("<ui:progress now='50' animated />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar text-bg-primary progress-bar-animated" style="width: 50%;">
      <span class="visually-hidden">50%</span></div>
      </div>"
    `)
  })

  it('renders progress bar with label', async () => {
    const html = await render("<ui:progress now='75' label />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar text-bg-primary" style="width: 75%;">
      75%</div>
      </div>"
    `)
  })

  it('renders progress bar with custom label', async () => {
    const html = await render("<ui:progress now='50' label='[ value ]' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar text-bg-primary" style="width: 50%;">
      50%</div>
      </div>"
    `)
  })

  it('passes additional props to the progress element', async () => {
    const html = await render("<ui:progress now='100' id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" id="foo">
      <div class="progress-bar text-bg-primary" style="width: 100%;">
      <span class="visually-hidden">100%</span></div>
      </div>"
    `)
  })
})
