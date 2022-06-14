# Docs Outline

## Overview

This is an outline for the Docs section of the site, likely to be contained under the `/docs/` URL space.

### Goals

The goals and contents of this section were discussed at the [Nov 17th WCCG meeting](https://docs.google.com/document/d/1uCQmHT_UTHtrf1xSfbQD5Ko23CpJrEY53wPIg3QHA5k/edit).

The "docs" category of content is intended to be evrgreen conceptual and reference information that fits into a single hierarchical content outline. Docs should be mostly factual and objective, outside of the shared opinions of the community group on the benefits of web components in general.

As a category, docs are distinct from articles and blog posts, which may be relevant for a point-in-time, have more opinions shared by only a subset of the WCCG, and/or be how-to's, tutorials and news.

### Docs MVP

A [docs MVP](https://github.com/webcomponents-cg/docs-and-guides/issues/33) which could replace the current webcomponents.org includes:

- [What are web components?](https://github.com/webcomponents-cg/docs-and-guides/issues/29)
- [Why web components?](https://github.com/webcomponents-cg/docs-and-guides/issues/30)
- [Related specifications](https://github.com/webcomponents-cg/docs-and-guides/issues/31)
- [Web Component Libraries](https://github.com/webcomponents-cg/docs-and-guides/issues/32)

## Outline
* <details><summary>What are web components?</summary>

  * URL: `/docs/what-are-web-components`
  * Priority: P0
  * Issue: https://github.com/webcomponents-cg/docs-and-guides/issues/29
  * Page content:
    * Custom Elements
    * Shadow DOM
    * Standard JS Modules
  
  </details>

* <details><summary>Why web components?</summary>

  * URL: `/docs/why-web-components`
  * Priority: P0
  * Issue: https://github.com/webcomponents-cg/docs-and-guides/issues/30
  * Page content:
    * What do we mean by interop?
      * Interop with HTML, frameworks, the browser
      * Interop with file formats: Markdown vs MDX, etc.
      * Interoperable composition with slots
      * Interop with the future
    * Use cases
      * Standalone components
      * Component sets and design systems
      * Applications
    * Who's using web components (Possibly separate page)

  </details>

* <details><summary>Related specifications</summary>

  * URL: `/docs/specifications` or `/docs/standards`
  * Priority: P0
  * Issue: https://github.com/webcomponents-cg/docs-and-guides/issues/31
  * Page content:
    * MDN links
    * GitHub repos with proposals
    * What's left, ie. WCCG reports
    * Cross-link to site's Community Protocols page

  </details>

* Using web components
    * <details><summary>Basics</summary>

      * URL: `/docs/using-web-components` or `/docs/using-web-components/basics`
      * Priority: P1
      * Issue:
      * Page content:
        * Importing definitions
        * Using web components in HTML and vanilla JS
        * Definining, the custom element registry, and the single tag name scope
        * Upgrading and `:defined`
        * Children and slots
        * Events

    </details>

    * <details><summary>Styling</summary>

      * URL: `/docs/using-web-components/styling`
      * Priority: P1
      * Issue:
      * Page content:
        * Shadow DOM encapsulation
        * CSS Custom Variables
        * ::part()
        * Attributes (for elements that use attributes for styling)

    </details>

    * <details><summary>Using web components with frameworks</summary>

      * URL: `/docs/using-web-components/frameworks`
      * Priority: P1
      * Issue:
      * Page content:
        * General considerations
          * Setting attributes and properties
          * Listening for events
          * Slots
          * Methods (and refs)
          * Template type-checking and linting
          * SSR
        * Examples in React, Angular, Vue

    </details>

    * <details><summary>Using web components with other tools</summary>

      * URL: `/docs/using-web-components/tools`
      * Priority: P1
      * Issue:
      * Page content:
        * Markdown (how to import in various systems)
          * Eleventy
          * Astro
          * Jekyl, Hugo...
        * CMSes: WordPress, Umbraco, Drupal, Laravel?

    </details>

* <details><summary>Writing web components</summary>

    This section is about the concepts and APIs relevant to writing web components, which should apply to "vanilla" web components as well as most web component libraries. It is not a tutorial on writing vanilla web components.

  </details>

  * <details><summary>Defining custom elements</summary>

    * URL: `/docs/writing-web-components/defining`
    * Priority: P1
    * Issue:
    * Page content:
      * Custom element registries
      * Synchronous upgrade, and upgrade()
      * Self-registering vs not
      * Defensive registration for special cases (CDN distribution)

    </details>

  * <details><summary>Lifecycle</summary>

    * URL: `/docs/writing-web-components/lifecycle`
    * Priority: P1
    * Issue:
    * Page content:
      * Basics: `observedAttributes`, `constructor`, `attributeChangedCallback`...
      * Cleaning up resources in `disconnectedCallback`

    </details>

  * <details><summary>Shadow DOM</summary>

    * URL: `/docs/writing-web-components/shadow-dom`
    * Priority: P1
    * Issue:
    * Page content:
      * attachShadow()
      * open vs closed
      * Encapsulation: DOM, events, CSS
        * Just overview: more detail in Styling and Composition sections
      * Slots

    </details>

  * <details><summary>Styling</summary>

    * URL: `/docs/writing-web-components/styling`
    * Priority: P1
    * Issue:
    * Page content:
      * Encapsulation (more detail than)
      * Shadow selectors: `:host`, `:host()`, and `::slotted()`
      * CSS Custom Properties
      * CSS Shadow Parts: `part` and `::part()`
      * Constructible style sheets
      * Theming
        * Strategies for deep styling

    </details>

  * <details><summary>Dealing with data</summary>

    * URL: `/docs/writing-web-components/data`
    * Priority: P1
    * Issue:
    * Page content:
      * Designing both a property & attribute API
      * Responding to attribute changes (`attributeChangedCallback`)
      * Responding to property changes (accessors)
      * Considerations about when to use methods
      * Reflecting between properties and attributes
      * Using events for data

    </details>

  * <details><summary>Publishing to npm</summary>

    * URL: `/docs/writing-web-components/publishing`
    * Priority: P2
    * Issue:
    * Page content:

    </details>

  * <details><summary>Composition</summary>

    * URL: `/docs/writing-web-components/composition`
    * Priority: P2
    * Issue:
    * Page content:
      * Slots
      * Communicating with events
      * Using children

    </details>

  * <details><summary>Accessibility</summary>

    * URL: `/docs/writing-web-components/accessibility`
    * Priority: P1
    * Issue:
    * Page content:
      * Slots
      * Communicating with events
      * Using children
    
    </details>


  * <details><summary>Forms</summary>

    * URL: `/docs/writing-web-components/forms`
    * Priority: P2
    * Issue:
    * Page content:
      * Shadow DOM scoping and forms
      * Form-associated-custom-elements
      * formdata event

    </details>

  * <details><summary>Web component libraries</summary>

    * URL: `/docs/writing-web-components/libraries`
    * Priority: P0
    * Issue: https://github.com/webcomponents-cg/docs-and-guides/issues/32
    * Page content:
      * Links to client-side libraries

    </details>

  * <details><summary>Tools</summary>

    * URL: `/docs/writing-web-components/tools`
    * Priority: P2
    * Issue:
    * Page content:
      * Links to IDE extensions, linters, etc

    </details>

* <details><summary>Community Protocols</summary>

  * URL: `/docs/community-protocols`
  * Priority: P2
  * Issue:
  * Page content:

  </details>

* <details><summary>Community and Resources</summary>

  * URL: `/docs/resources`
  * Priority: P2
  * Issue:
  * Page content:
    * Links to chats, meetups, Twitter communities, etc.

  </details>

* <details><summary>FAQ</summary>
  * URL: `/docs/faq`
  * Priority: P2
  * Issue:
  * Page content:
    * Myth-busting answers can go here
      * Can custom elements really only take strings?
      * Is it impossible to SSR web components?
      * Why don't web components solve ___ that other frameworks do?
      * ...

  </details>
