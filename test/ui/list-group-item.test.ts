/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('list-group.item', () => {
  it('renders list group item with default props', async () => {
    const html = await render('<ui:list-group.item>foo</ui:list-group.item>')
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group-item">
      foo

      </div>"
    `)
  })

  it('renders list group item with additional classes', async () => {
    const html = await render("<ui:list-group.item class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group-item foo">


      </div>"
    `)
  })

  it('renders active list group item', async () => {
    const html = await render('<ui:list-group.item active />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group-item active" aria-current="true">


      </div>"
    `)
  })

  it('renders disabled list group item', async () => {
    const html = await render('<ui:list-group.item disabled />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group-item disabled" tabindex="-1" aria-disabled="true">


      </div>"
    `)
  })

  it('renders list group item with variant', async () => {
    const html = await render("<ui:list-group.item variant='primary' />")
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group-item list-group-item-primary">


      </div>"
    `)
  })

  it('renders action list group item', async () => {
    const html = await render('<ui:list-group.item action />')
    expect(html).toMatchInlineSnapshot(`
      "<div class="list-group-item list-group-item-action">


      </div>"
    `)
  })

  it('renders list group item as link', async () => {
    const html = await render("<ui:list-group.item href='#' />")
    expect(html).toMatchInlineSnapshot(`
      "<a href="#" class="list-group-item">

      </a>"
    `)
  })

  it('renders list group item as button', async () => {
    const html = await render("<ui:list-group.item as='button' />")
    expect(html).toMatchInlineSnapshot(`
      "<button type="button" class="list-group-item">

      </button>"
    `)
  })

  it('renders list group item as li', async () => {
    const html = await render("<ui:list-group.item as='li' />")
    expect(html).toMatchInlineSnapshot(`
      "<li class="list-group-item">


      </li>"
    `)
  })
})
