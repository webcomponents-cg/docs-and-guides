---
layout: layout-about.njk
---

# Introduction

## What are web components?
Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.

## Specifications
Web components are based on four main specifications:

### Custom Elements
The Custom Elements specification lays the foundation for designing and using new types of DOM elements.

### Shadow DOM
The shadow DOM specification defines how to use encapsulated style and markup in web components.

### ES Modules
The ES Modules specification defines the inclusion and reuse of JS documents in a standards based, modular, performant way.

### HTML Template
The HTML template element specification defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.

## How do I use a web component?
The components on this site provide new HTML elements that you can use in your web pages and web applications.

Using a custom element is as simple as importing it, and using the new tags in an HTML document. For example, to use the paper-button element:

```html
<script type="module" src="node_modules/@polymer/paper-button/paper-button.js"></script>
...
<paper-button raised class="indigo">raised</paper-button>
```

There are a number of ways to install custom elements. When you find an element you want to use, look at its README for the commands to install it. Most elements today can be installed with NPM. NPM also handles installing the components' dependencies. For more information on NPM, see npmjs.com.

For example, the paper-button overview describes the install process with npm:

```bash
mkdir my-new-app && cd my-new-app
npm install --save @polymer/paper-button
```

## How do I define a new HTML element?
This section describes the syntax for the cross-browser version of the Web Components specification.

Use JavaScript to define a new HTML element and its tag with the customElements global. Call customElements.define() with the tag name you want to create and a JavaScript class that extends the base HTMLElement.

For example, to define a mobile drawer panel, <app-drawer>:

```js
class AppDrawer extends HTMLElement {...}
window.customElements.define('app-drawer', AppDrawer);
```

To use the new tag:

```html
<app-drawer></app-drawer>
```

Using a custom element is no different to using a <div> or any other element. Instances can be declared on the page, created dynamically in JavaScript, event listeners can be attached, etc.

```html
<script>
// Create with javascript
var newDrawer = document.createElement('app-drawer');
// Add it to the page
document.body.appendChild(newDrawer);
// Attach event listeners
document.querySelector('app-drawer').addEventListener('open', function() {...});
</script>
```

## Creating and using a shadow root
This section describes the syntax for creating shadow DOM with the new cross-browser version (v1) of the shadow DOM specification. Shadow DOM is a new DOM feature that helps you build components. You can think of shadow DOM as a scoped subtree inside your element.

A shadow root is a document fragment that gets attached to a "host" element. The act of attaching a shadow root is how the element gains its shadow DOM. To create shadow DOM for an element, call element.attachShadow():

```js
const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().
// header.shadowRoot === shadowRoot
// shadowRoot.host === header
```

## Libraries for building web components
Many libraries already exist that make it easier to build web components. The libraries section of the site has additional details but here are some you can try out:

- Hybrids is a UI library for creating Web Components with simple and functional API.
- LitElement uses lit-html to render into the element's Shadow DOM and adds API to help manage element properties and attributes.
- Polymer provides a set of features for creating custom elements.
- Slim.js is an opensource lightweight web component library that provides data-binding and extended capabilities for components, using es6 native class inheritance.
- Stencil is an opensource compiler that generates standards-compliant web components.
