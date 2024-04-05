# posthtml-bootstrap

A [PostHTML](https://github.com/posthtml/posthtml/) plugin that allows you to use [Bootstrap](https://getbootstrap.com/) components directly in your HTML code.

## Install

To get started, install the package using npm or yarn:

```bash
npm install -D posthtml-bootstrap
# Or
yarn add -D posthtml-bootstrap
```

## Usage

```js
import posthtml from 'posthtml'
import posthtmlComponent from 'posthtml-component'
import { defineBootstrapUIConfig } from 'posthtml-bootstrap'

// Use default configuration
const config = defineBootstrapUIConfig()
// Create a PostHTML processor with the plugin
const processor = posthtml([posthtmlComponent(config)])

// Your HTML with Bootstrap components
const htmlString = `
<ui:container>
  <ui:row>
    <ui:col>
      <ui:button variant="primary">Click me!</ui:button>
    </ui:col>
  </ui:row>
</ui:container>
`

processor
  .process(htmlString, {
    recognizeSelfClosing: true
  })
  .then(result => {
    console.log(result.html) // Processed HTML with Bootstrap components
  })
```

A wide range of Bootstrap components are available for use with this plugin. You can find the complete list of components in the [`ui`](https://github.com/bent10/posthtml-bootstrap/tree/main/public/ui) directory.

> **Note:** Detailed documentation for each component is currently under development 😉

## Configuration Options

To configure Bootstrap UI, use the following JavaScript snippet:

```js
import { defineBootstrapUIConfig } from 'posthtml-bootstrap'

const config = defineBootstrapUIConfig({
  // Options go here
})
```

Please refer to the [`posthtml-component`](https://posthtml.github.io/posthtml-components/docs.html#options) documentation to review the available options.

### Opinionated options:

The following options are opinionated and cannot be changed:

- **root**: (string) String value as the root path for component lookup. Always `process.cwd()`.
- **tagPrefix**: (string) The prefix used for component tags in your HTML. Always `ui:`.
- **yield**: (string) The tag name used for the main content area within a component. Always `<children />`.
- **attribute**: (string) The attribute used to specify the component path within a tag. Always `@src`.

## Extended Components

`posthtml-bootstrap` allows you to seamlessly integrate your own custom components alongside the built-in Bootstrap components. This is achieved by referencing the folder path containing your custom components in the `folders` property of the configuration.

1. **Create your custom components:**

   Start by creating your custom components as HTML files within a dedicated folder. For example, let's create a `components` folder and add a simple `foo.html` component:

   ```html
   <!-- views/components/foo.html -->
   <div class="foo">This is a custom foo component.</div>
   ```

2. **Configure the plugin:**

   In your JavaScript file, modify the configuration to include the path to your custom components folder:

   ```js
   import { defineBootstrapUIConfig } from 'posthtml-bootstrap'

   const config = defineBootstrapUIConfig({
     folders: ['views/components'] // Add your custom components folder
   })
   ```

3. **Use your custom components:**

   Now you can use your custom component in your HTML just like any other Bootstrap component:

   ```html
   <ui:container>
     <ui:row>
       <ui:col>
         <ui:foo />
       </ui:col>
     </ui:row>
   </ui:container>
   ```

## Custom Utilities

The `utilities` option allows you to provide custom functions that can be accessed within the `<script props>` block of a component.

```js
const config = defineBootstrapUIConfig({
  utilities: {
    formatPrice(price) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(+price)
    }
  }
})
```

Then, use your custom utility function within a component's props script:

```html
<!-- views/components/foo.html -->
<script props>
  const { price } = props

  module.exports = {
    formattedPrice: formatPrice(price)
  }
</script>

<!-- use the formatted price in your component's HTML -->
<p class="foo">The price is: {{formattedPrice}}</p>
```

Finally, use the `ui:foo` component like so:

```html
<ui:foo price="1000" />
```

This will render the formatted price using your custom `formatPrice` function:

```html
<p class="foo">The price is: $1,000.00</p>
```

## Contributing

We 💛&nbsp; issues.

When committing, please conform to [the semantic-release commit standards](https://www.conventionalcommits.org/). Please install `commitizen` and the adapter globally, if you have not already.

```bash
npm i -g commitizen cz-conventional-changelog
```

Now you can use `git cz` or just `cz` instead of `git commit` when committing. You can also use `git-cz`, which is an alias for `cz`.

```bash
git add . && git cz
```

## License

![GitHub](https://img.shields.io/github/license/bent10/posthtml-bootstrap)

A project by [Stilearning](https://stilearning.com) &copy; 2024.
