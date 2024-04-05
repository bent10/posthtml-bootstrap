/// <reference types="vitest/globals" />

import { render } from '../renderer.js'

describe('table', () => {
  it('renders a table element', async () => {
    const html = await render('<ui:table />')
    expect(html).toMatchInlineSnapshot(`
      "<table class="table">

      </table>"
    `)
  })

  it('renders caption within table element', async () => {
    const html = await render("<ui:table caption='Table Caption' />")
    expect(html).toMatchInlineSnapshot(`
      "<table class="table">

      <caption>Table Caption</caption>

      </table>"
    `)
  })

  it('renders children within table element', async () => {
    const html = await render(
      `<ui:table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
          </tr>
        </tbody>
      </ui:table>`
    )
    expect(html).toMatchInlineSnapshot(`
      "<table class="table">

      <thead>
      <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
      </tr>
      </tbody>

      </table>"
    `)
  })

  it('applies additional classes to the table element', async () => {
    const html = await render("<ui:table class='foo' />")
    expect(html).toMatchInlineSnapshot(`
      "<table class="table foo">

      </table>"
    `)
  })

  it('applies striped class to the table element', async () => {
    const html = await render('<ui:table striped />')
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-striped">

      </table>"
    `
    )
  })

  it('applies striped-columns class to the table element', async () => {
    const html = await render("<ui:table striped='columns' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-striped-columns">

      </table>"
    `
    )
  })

  it('applies bordered class to the table element', async () => {
    const html = await render('<ui:table bordered />')
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-bordered">

      </table>"
    `
    )
  })

  it('applies borderless class to the table element', async () => {
    const html = await render('<ui:table borderless />')
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-borderless">

      </table>"
    `
    )
  })

  it('applies hover class to the table element', async () => {
    const html = await render('<ui:table hover />')
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-hover">

      </table>"
    `
    )
  })

  it('applies condensed class to the table element', async () => {
    const html = await render('<ui:table condensed />')
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-condensed">

      </table>"
    `
    )
  })

  it('applies dark class to the table element', async () => {
    const html = await render('<ui:table dark />')
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-dark">

      </table>"
    `
    )
  })

  it('applies responsive class to the table element', async () => {
    const html = await render('<ui:table responsive />')
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-responsive">

      </table>"
    `
    )
  })

  it('applies custom responsive class to the table element', async () => {
    const html = await render("<ui:table responsive='md' />")
    expect(html).toMatchInlineSnapshot(
      `
      "<table class="table table-responsive-md">

      </table>"
    `
    )
  })
})
