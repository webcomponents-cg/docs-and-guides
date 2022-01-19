# Using Web Components >> Styling Components Using Shadow DOM

Scoping is the main feature of shadow DOM as it allows for a true separation of concerns between the page styles and the component styles.
However, if shadow DOM was completely unaffected by external styles it would severely limit its use cases.
This article will guide you through the different ways you can style components which are using shadow DOM.

## Style inheritance

The most basic way you can style content inside shadow DOM is through style inheritance.
Style inheritance for web components using shadow DOM works the same way as it works for any other element.
This means any CSS property that's inheritable, such as `font-size` or `color`, will also apply to shadow DOM content as long as it's not already being used.

For example, if you had this style applied to your light DOM:

```css
body {
  font-family: sans-serif;
  font-size: 16px;
  color: brown;
  margin: 0.5rem;
}
```

And used a `my-element` component which has the following shadow DOM:

```html
<style>
  .green {
    color: green;
  }
</style>
<p>This text will inherit the color.</p>
<p class="green">This text will be green.</p>
```

The following would happen:

- Both texts inside `my-element` would have their `font-family` and `font-size` match the one set to the whole page.
- The first text would also change it color to brown, but the second would be green as the `color` for it was defined inside the shadow DOM.
- The `margin` for `my-element` would be unaffected as the `margin` property doesn't inherit.

// TODO Add an image or demo?

## Host styles

The host node of a component is the gateway between light DOM and the component's shadow DOM.
As such, styles can be applied to it both from light DOM and from shadow DOM.
But, styles applies from light DOM will be prioritized over those applied from shadow DOM.

For example, if you had a `my-element` component with the following shadow DOM:

```html
<style>
  /* this is the selector used from the component side to style the host node*/
  :host {
    border: 1px solid black;
  }
</style>
<div>Some content</div>
```

And you used it in the following way:

```html
<style>
  my-element {
    padding: 8px;
  }
  .styled {
    border: 2px dotted red;
  }
</style>

<my-element></my-element>
<my-element class="styled"></my-element>
```

The following will happen:

- Both instances of the component will get an added padding of 8px.
- Only the second one will get it's border changed to be a red dotted border.

// TODO Add an image or demo?

## CSS variables

## Shadow parts

## Slotted children

## A full example

// TODO maybe use vanilla-colorful including it's text input as an example?

## Conclusion
