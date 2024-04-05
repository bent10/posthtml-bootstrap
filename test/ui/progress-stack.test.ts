/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('progress.stacked', () => {
  it('renders stacked progress bar with default props', async () => {
    const html = await render('<ui:progress.stacked />')
    expect(html).toMatchInlineSnapshot(`"<div class="progress-stacked"></div>"`)
  })

  it('renders stacked progress bar with additional classes', async () => {
    const html = await render("<ui:progress.stacked class='foo' />")
    expect(html).toMatchInlineSnapshot(
      `"<div class="progress-stacked foo"></div>"`
    )
  })

  it('renders stacked progress bars with height', async () => {
    const html = await render("<ui:progress.stacked style='height: 2rem' />")
    expect(html).toMatchInlineSnapshot(
      `"<div class="progress-stacked" style="height: 2rem"></div>"`
    )
  })
})
