/**
 * Options that can be passed to the PostHTML component plugin.
 */
export interface PostHTMLComponentOptions {
  /**
   * String value as root path for components lookup.
   */
  root?: string

  /**
   * Array of additional multi folders path from route `root` or any defined
   * namespaces root, fallback or custom.
   *
   * @default []
   */
  folders?: string[]

  /**
   * String for tag prefix. The plugin will use RegExp with this string.
   *
   * @default 'ui:'
   */
  tagPrefix?: string

  /**
   * String or boolean value for component tag. Use this with `attribute` prop.
   *
   * @default false
   */
  tag?: boolean | string

  /**
   * String value for component attribute for set path.
   *
   * @default 'src'
   */
  attribute?: string

  /**
   * Array of namespace's root path, fallback path and custom path for override.
   *
   * @default []
   */
  namespaces?: string[]

  /**
   * String value for namespace separator to be used with tag name,
   * e.g. `<x-namespace::foo>`
   *
   * @default '::'
   */
  namespaceSeparator?: string[]

  /**
   * String value for file extension of the components used for retrieve `x-tag`
   * file.
   *
   * @default 'html'
   */
  fileExtension?: string

  /**
   * String value for `<yield>` tag name. Where main content of component is
   * injected.
   *
   * @default 'yield'
   */
  yield?: string

  /**
   * String value for `<slot>` tag name. Used with RegExp by appending,
   * e.g `<slot:slot-name>`.
   *
   * @default 'slot'
   */
  slot?: string

  /**
   * String value for `<fill>` tag name. Used with RegExp by appending,
   * e.g `<fill:fill-name>`.
   *
   * @default 'fill'
   */
  fill?: string

  /**
   * String value for `<push>` tag name.
   *
   * @default 'push'
   */
  push?: string

  /**
   * String value for `<stack>` tag name.
   *
   * @default 'stack'
   */
  stack?: string

  /**
   * String value used as attribute in `<script props>` parsed by the plugin to
   * retrieve props of the component.
   *
   * @default 'props'
   */
  propsScriptAttribute?: string

  /**
   * String value used as object name inside the script to process process
   * before passed to the component.
   *
   * @default 'props'
   */
  propsContext?: string

  /**
   * String value for props attribute to define props as JSON.
   *
   * @default 'props'
   */
  propsAttribute?: string

  /**
   * String value used to retrieve the props passed to slot via
   * `$slots.slotName.props`.
   *
   * @default 'props'
   */
  propsSlot?: string

  /**
   * Object to configure [`posthtml-parser`](https://github.com/posthtml/posthtml-parser). By default, it enables support for
   * self-closing component tags.
   *
   * @default {recognizeSelfClosing: true}
   */
  parserOptions?: object

  /**
   * Object to configure `posthtml-expressions`. You can pre-set locals or
   * customize the delimiters for example.
   *
   * @default {}
   */
  expressions?: object

  /**
   * PostHTML plugins to apply for every parsed components.
   *
   * @default []
   */
  plugins?: import('posthtml').Plugin<unknown>[]

  /**
   * Array of object used to match the tags.
   *
   * @default [{tag: options.tagPrefix}]
   */
  matcher?: object[]

  /**
   * Additional rules for [attributes parser plugin](https://github.com/posthtml/posthtml-attrs-parser).
   *
   * @default {}
   */
  attrsParserRules?: object

  /**
   * Boolean value for enable or disable throw an exception.
   *
   * @default true
   */
  strict?: boolean

  /**
   * Object of utilities methods to be passed to `<script props>`.
   *
   * @default {}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  utilities?: any

  /**
   * An object with tag name and a function modifier of `valid-attributes.js`.
   *
   * @default {}
   */
  elementAttributes?: object

  /**
   * An array of attributes name to be added to default valid attributes.
   *
   * @default ['data-*']
   */
  safelistAttributes?: string[]

  /**
   * An array of attributes name to be removed from default valid attributes.
   *
   * @default []
   */
  blacklistAttributes?: string[]
}
