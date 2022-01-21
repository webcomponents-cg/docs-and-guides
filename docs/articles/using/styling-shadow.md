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

CSS custom properties (colloquially referred to as CSS variables) are used to contain specific values so that they can be reused in other styles.
They also happen to be one of the few ways to style content inside a shadow DOM tree from outside.

For CSS variables to style content in a shadow DOM tree, component creators must have defined which variables will be used to style what.
Think of this as a CSS API for the component.
This way of styling shadow DOM is really useful for use cases such as theming and to give granular control over specific styles.

For example, if you had a `my-button` component with the following shadow DOM:

```html
<style>
  button {
    border: none;
    padding: 0.5rem;
    background-color: var(--primary-color, yellowgreen);
    color: var(--primary-contrast-color, black);
    border-radius: var(--button-radius, 5px);
  }
</style>
<button type="button">Click me</button>
```

And you used it in the following way:

```html
<style>
  .blue-square {
    --primary-color: royalblue;
    --primary-contrast-color: white;
    --button-radius: 0;
  }
</style>
<my-button></my-button>
<my-button class="blue-square"></my-button>
```

The following will happen:

- The first button will be rendered using the defaults for all CSS variables. So, it will be a green button with black text and a slight border radius.
- The second button will have all the values defined in the CSS class applied to it. So, it will be a blue button with white text and no border radius.

// TODO Add an image or demo?

## Shadow parts

Shadow parts are currently the only other way besides using CSS variables to style content inside a shadow DOM tree from outside.
But unlike CSS variables, shadow parts can be used to set any number of styles to a specific node in the shadow DOM tree.

For example, if you had a `my-profile` component with the following shadow DOM:

```html
<style>
  :host {
    display: flex;
  }
  img {
    width: 48px;
    height: 48px;
  }
  div {
    color: seagreen;
  }
</style>

<img part="avatar" src="https://via.placeholder.com/48x48.jpg?text=Avatar" />
<div part="name">Some Name</div>
```

And you used it in the following way:

```html
<style>
  my-profile.round::part(avatar) {
    border-radius: 50%;
    border: 1px solid mediumpurple;
  }

  my-profile.round::part(name) {
    color: mediumpurple;
    font-weight: bold;
  }
</style>

<my-profile></my-profile>
<my-profile class="round"></my-profile>
```

The following will happen:

- The first component will render with only the styles defined in the component code. So, a square 48x48 px image and a green text will display;
- The second component will have both the styles in the component code and the styles from the document itself, but, the styles from the document will have a higher priority. So, a round 48x48 px image with a purple border and a purple bold text will display.

// TODO Add an image or demo?

## Slotted children

## A full example

// TODO maybe use vanilla-colorful including it's text input as an example?

## Conclusion
