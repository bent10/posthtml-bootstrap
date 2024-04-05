/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('tab.pane', () => {
  it('renders tab pane with default props', async () => {
    const html = await render('<ui:tab.pane />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-pane fade" role="tabpanel" tabindex="0">


      </div>"
    `)
  })

  it('renders tab pane with additional classes', async () => {
    const html = await render("<ui:tab.pane class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-pane fade foo" role="tabpanel" tabindex="0">


      </div>"
    `)
  })

  it('renders show tab pane', async () => {
    const html = await render('<ui:tab.pane show />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-pane fade show" role="tabpanel" tabindex="0">


      </div>"
    `)
  })

  it('renders active tab pane', async () => {
    const html = await render('<ui:tab.pane active />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-pane fade active" role="tabpanel" tabindex="0">


      </div>"
    `)
  })

  it('renders disabled tab pane', async () => {
    const html = await render('<ui:tab.pane disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-pane fade" role="tabpanel" tabindex="0">


      </div>"
    `)
  })

  it('renders tab pane with specified id', async () => {
    const html = await render("<ui:tab.pane id='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div id="foo" class="tab-pane fade" role="tabpanel" tabindex="0" aria-labelledby="foo-tab">


      </div>"
    `)
  })

  it('renders tab pane without transition', async () => {
    const html = await render('<ui:tab.pane no-transition />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-pane" role="tabpanel" tabindex="0">


      </div>"
    `)
  })

  it('passes additional props to the div element', async () => {
    const html = await render("<ui:tab.pane title='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="tab-pane fade" role="tabpanel" tabindex="0" title="foo">


      </div>"
    `)
  })
})
