# Specifications

Web components is a meta-specification made possible by four other specifications:

- The Custom Elements specification
- The shadow DOM specification
- The HTML Template specification
- The ES Module specification

These four specifications can be used on their own but combined allow developers to define their own tags (custom element), whose styles are encapsulated and isolated (shadow dom), that can be restamped many times (template), and have a consistent way of being integrated into applications (es module).

## The Custom Elements specification
This section applies to the cross-browser version of the Custom Elements specification (v1). See Eric Bidelman’s articles on Custom Elements v1.

The Custom Elements specification lays the foundation for designing and using new types of DOM elements that are fully-featured and conforming. Following the Custom Elements spec, authors can define behaviors and styles for new HTML elements.

- Autonomous custom elements are new HTML tags, defined entirely by the author. They have none of the semantics of existing HTML elements, so all behaviors need to be defined by the author.
- Customized built-ins extend existing HTML elements with custom functionality. They inherit semantics from the elements they extend. The specification for customized built-ins is still a work in progress, and at present is only supported by Chrome.

### Create a custom button as an autonomous custom element
To create an autonomous custom element, extend HTMLElement. The Custom Elements syntax is:

```js
class AutonomousButton extends HTMLElement {
  ...
}
customElements.define("autonomous-button", AutonomousButton);
```

To use the element:
```html
<autonomous-button>Click Me :)</autonomous-button>
```
When the browser sees the <autonomous-button> tag, it constructs and renders a new instance of the AutonomousButton class. However, this element will not behave like an HTML <button> unless the author adds all of the necessary attributes, event listeners, callbacks and accessibility functionality to handle user interactions.

### Create a custom button as a customized built-in
You can extend an existing native HTML element to create a customized built-in*.

The Custom Elements syntax is:
```hs
class CustomizedButton extends HTMLButtonElement {
  ...
}
customElements.define("customized-button", CustomizedButton, { extends: "button" });
```
To use the element:
```html
<button is="customized-button">Click Me :)</button>
```
By extending HTMLButtonElement instead of HTMLElement, CustomizedButton inherits button semantics and behavior.

*The long-term cross-browser support for customized built-in elements is a bit up in the air - please see https://github.com/w3c/webcomponents/issues/509 to learn more.

## The shadow DOM specification
This section is a summary of the shadow DOM specification. See Eric Bidelman’s article on shadow DOM.

The DOM (Document Object Model) is a representation of the structure of an html document. The DOM models a document as a tree, with elements in parent-child relationships.

On its own, the DOM API contains no support for encapsulation. This makes it hard to develop custom elements as style information may “leak” into or out of other elements in the tree; or IDs may overlap between custom elements and other elements in the document.

The shadow DOM API overcomes this limitation by letting you attach DOM subtrees to elements in a web document. These subtrees are encapsulated; style information inside them cannot apply to outside elements, and vice versa.

### Creating shadow DOM for a custom element
In Shadow DOM, use the attachShadow() method to create shadow DOM:

```js
const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; 
```

### Composition and slots
By default, if an element has shadow DOM, the shadow tree is rendered instead of the element's children. To allow children to render, you need to add placeholders for them in your shadow tree. To do this in shadow DOM:

Consider the following shadow tree for `<my-header>`:

```html
<header>
   <h1><slot></slot></h1>
   <button>Menu</button>
</header>
```

The user can add children like this:

```html
<my-header>Shadow DOM</my-header>
The header renders as if the <slot> element was replaced by the children:

<my-header>
  <header>
     <h1>Shadow DOM</h1>
     <button>Menu</button>
  </header>
</my-header>
```

### Styling
Styles inside a shadow tree are scoped to the shadow tree, and don't affect elements outside the shadow tree.

Styles outside the shadow tree also don't match selectors inside the shadow tree. However, inheritable style properties like color still inherit down from host to shadow tree.

To style elements with a shadow root, you can use custom properties if the element’s author has defined them.

```html
<style>
  body { color: white; } 
  .test { background-color: red; }
</style>

<styled-element>
  #shadow-root
    <style>
      div { background-color: blue; }
    </style>
    <div class="test">Test</div>
</styled-element>
```

In this example, the <div> has a blue background, even though the div selector is less specific than the .test selector in the main document. That's because the main document selector doesn't match the <div> in the shadow DOM at all. On the other hand, the white text color set on the document body inherits down to <styled-element> and into its shadow root.

# The ES Module specification
The ES Module specification defines the inclusion and reuse of JS documents in other JS documents.

ES Modules enable web components to be developed in a modular way that is in alignment with other industry accepted implementations for JavaScript application development. You can define the interface of your custom element in a JS file which is then included with an type="module" attribute. ES Module files are merged into one file client side or can be rolled up into single packages ahead of time.

Supposing an element is defined in awesome-explosion.js, you would import it using one of the following script:

```html
<script type="module" src="awesome-explosion.js"></script>
...
<script type="module">
  import 'awesome-explosion.js';
  ...
  import {awesomeExplosion} from '@awesome-things/awesome-explosion';
</script>
```

Now you can use the awesome-explosion element in your own pages:

```html
<awesome-explosion>
...
</awesome-explosion>
```

## The HTML Template specification
The HTML template element specification defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime. There are no corresponding changes to HTML templates for cross-browser specifications.

The content in this section is taken from Eric Bidelman’s article on the HTML Template specification.

The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.

Content between <template></template> tags

- Will not render until it is activated
- Has no effect on other parts of the page - scripts won’t run, images won’t load, audio won’t play - until activated
- Will not appear in the DOM

Templates can be placed anywhere in <head>, <body> or <frameset> and can contain any content that is allowed in those elements.

To declare a template:

```html
<template id="mytemplate">
  <img src="" alt="great image">
  <div class="comment"></div>
</template>
```

To use the template:

```js
var t = document.querySelector('#mytemplate');
// Populate the src at runtime.
t.content.querySelector('img').src = 'logo.png';

var clone = document.importNode(t.content, true);
document.body.appendChild(clone);
```