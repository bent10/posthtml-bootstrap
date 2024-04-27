import posthtml from 'posthtml'
import posthtmlComponent from 'posthtml-component'
import {
  defineBootstrapUIConfig,
  PostHTMLComponentOptions
} from '../src/index.js'

export async function render(
  tmpl: string,
  userConfig: PostHTMLComponentOptions = {}
) {
  const config = defineBootstrapUIConfig(userConfig)
  const processor = posthtml([posthtmlComponent(config)])

  const { html } = await processor.process(tmpl, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    recognizeSelfClosing: true
  })

  return html
    .trim()
    .split('\n')
    .map(ln => ln.trim())
    .join('\n')
}
