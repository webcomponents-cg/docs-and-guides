# Docs Outline

* What are web components
  * Custom Elements
  * Shadow DOM
  * Standard JS Modules
* Why web components
  * What do we mean by interop?
    * Interop with HTML, frameworks, the browser
    * Interop with file formats: Markdown vs MDX, etc.
    * Interoperable composition with slots
    * Interop with the future
  * Use cases
    * Standalone components
    * Component sets and design systems
    * Applications
* Related specs
  * MDN links
  * GitHub repos with proposals
  * What's left, ie. WCCG reports
* Using web components
  * Basics
    * Definining, the custom element registry, and the single tag name scope
    * Upgrading, and `:defined`
    * Children and slots
    * Events
  * Using web components in HTML and vanilla JS
  * Styling
    * CSS Custom Properties
    * ::part()s
  * Using web components with frameworks
  * Using web components in...
    * Markdown (how to import in various systems)
    * WordPress
* Writing web components
  * Defining
    * Custom element registries
    * Self-registering vs not
    * Defensive registration for special cases (CDN distribution)
  * Lifecycle
    * Basics: `observedAttributes`, `constructor`, `attributeChangedCallback`...
    * Cleaning up resources in `disconnectedCallback`
  * Shadow DOM
    * attachShadow()
    * open vs closed
    * Encapsulation: DOM, events, CSS
      * Just overview: more detail in Styling and Composition sections
    * Slots
  * Styling
    * Encapsulation (more detail than)
    * Shadow selectors: `:host`, `:host()`, and `::slotted()`
    * CSS Custom Properties
    * CSS Shadow Parts: `part` and `::part()`
    * Constructible style sheets
    * Theming
      * Strategies for deep styling
  * Dealing with data
    * Designing both a property & attribute API
    * Responding to attribute changes (`attributeChangedCallback`)
    * Responding to property changes (accessors)
    * Considerations about when to use methods
    * Reflecting properties to attributes
    * Using events for data
  * Publishing to npm
  * Composition
    * Slots
    * Communicating with events
    * Using children
  * Accessibility
  * Forms
  * Web component libraries
* Community Protocols
* Community and Resources
* FAQ
  * Myth-busting answers can go here
    * Can custom elements really only take strings?
    * Is it impossible to SSR web components?
    * Why don't web components solve ___ that other frameworks do?
    * ...
* Demos and Playgrounds (standalone or to accompany each piece of content?)
