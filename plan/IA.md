# webcomponents.org

## Goals

- **Evangelize WCs**
  - present the viability/maturity of Web Components
    - general evangelism - #UseThePlatform, "works with all frameworks and none",
    - "ways to make web components" : (lit, stencil, svelte, vanilla, ...registeredFeaturedTools)
    - browser support
    - popular framework features that can be implemented with Web Components
      - SSR, SSG, etc explain only that there are ways to do it, not the "how, with code samples"
- **Educate**
  - Provide basic, generic MDN-like documentation for WC topics
    - The WC specs explained - in our own words, not just linked to :)
    - Creating a custom element
      - "Writing web components" section from [Outline](/outline.md)
    - Events
    - Polyfills
    - Scoped Elements
    - Bundlers/bundling/#ToBundleOrNotToBundle
      - Side Effects
- **Showcase WCs**
  - List "featured" components
  - Component catalog/search
- **Content Feed**
  - Community articles about web components
  - "anything goes" as long as its WC related
  - can be tech stack, lib, approach -specific content
- **Grow the community**
  - join the WCCG
  - submitting a WC to be "featured"
  - writing a blogroll article
  - writing an education page/article
  - PRs, Issues to WCCG member projects
- **Highlight WCCG recent work**
  - Showcase work on adding to browser specs/features, RFCs etc
  - Highlight Open WC, Modern Web, Rocket, etc written/maintained by folks in the WCCG
- **About WCCG**
  - Describe the WCCG and its mission, goals
  - list team members


## Audience

- Users of comps
- Devs of comps
- Technology decider/architect/tech lead
- Web component Novice devs
- Experienced component devs


## IA
> ALL routes in this IA are definitely just examples for the ideas i'm presenting. Please don't treat them as finalized, but instead only as placeholders for the conceptual ideas about the content on a page with the name listed - MW

### Simple IA
Full with page descriptions [below](#full-ia)

- Root /
  - /our-work
  - /build-a-web-component
    - /:step-number
  - web-components-explained
    - /:article-slug
  - /featured-components
    - /:component-name-slug
  - /submit-component
  - /articles
    - /:article-slug
  - /become-an-author
  - /highlight-article
  - /about
  - /admin/*


### Full IA

- /
  - Hero section (goal: Evangelize)
    - YES WCs are a thing, read more and we'll prove it!
    - hero heading, hero description, call to action links/buttons to dive deeper
  - Browser support table showing all greens (goal: Evangelize)
  - 3 Featured components (goal: Showcase)
    - Detailed section for each comp with
      - some fancy designed screens of the code, WC in use
      - description of what it does
      - who made it
      - links out to GH, twitter, docs, etc
    - link out to "browse all featured comps"
  - See what people are talking about in WCs (goal: Content feed)
    - see 2 (max) latest posts in blogroll
    - links out to each latest post
    - link out to full blog roll
  - **/our-work** (goal: Highlight WCCG Work)
    - list out spec contributions RFCs
      - links to go thumbs up/comment on RFCs members have created
    - curated list of member-maintained projects with links, descriptions
  - **/build-a-web-component** (goal: Educate)
    - index for a guided, step-by-step tutorial on "building your first web component"
      - starts with the very basics in vanillajs
      - possibly has branches for lit, stencil, svelte, after the basics?
      - possibly has variants of TS, JS, etc
      - adds styles, data, events
      - has next, previous links at the top and bottom meant as a step-by-step tutorial
      - sample code repo/branch/folder for each step
  - **/build-a-web-component/:step-number** (goal: Educate)
    - step N in build tutorial
  - **web-components-explained** (goal: Educate)
    - index page for education articles on specific WC-related topics that deserve their own attention
  - **web-components-explained/:article-slug** (goal:Educate)
    - single page for an article all about a single WC topic
    - slots
    - advanced styling
    - theming
    - etc
  - **/featured-components** (goal: Showcase)
    - index page for featured components
    - grid of short component detail cards, etc
    - link to WC submission form/process 
  - **/featured-components/:component-name-slug** (goal: Showcase)
    - optional, possible full page writeup/docs for a component
    - links to WC github, docs, demo, etc
    - link to WC submission form/process 
  - **/submit-component** (goal: Grow Community)
    - Michael W says don't call it "publishing" a WC to webcomponents.org because it confuses publishing to npm
  - **/articles** (goal: Content Feed)
    - index for all blogroll articles
    - article search/filter
    - 5 latests posts shown on this page with short details, etc
  - **/articles/:article-slug** (goal: Content Feed)
    - article page with author details, publication date, etc
  - **/become-an-author** (goal: Grow Community)
    - submission form to become a featured site author.
    - basically is a "create profile page" for authors with avatar upload, name, description, bio, WCCG involvement, etc
  - **/highlight-article** (goal: Content Feed)
    - doesnt necessarily need to be a full page, just cataloging the need for article link/url submission rather than text submissions
    - submission form to add a WC article details into the blogroll
  - **/about** (goal: About WCCG)
    - describe the WCCG in detail
    - list out and describe the mission/goals of the WCCG
    - list WCCG members with avatars, descriptions
  - **/admin/* **
    - admin area for WCCG core member to maintain all the stuff on the site
      - prune featured componenents
      - manage authors, articles, content
 


## MW Comments/Thoughts
- can we update the logo?
- We should standardize a lit of WC tech stacks to talk about, use in tutorials, etc. The ones currently on the site are rather dated (lookin at you Bower)
- Are we going to advertize Gitter, or the WC slack? Currently its Gitter...

## Open Questions
- Can webcomponents.org become more CMS-driven like a tech blog?
  - have core team authors, featured/guest authors, have authors on docs pages with avatars etc
  - differentiates from MDN because articles can be writen in a familiar, friendly tone, etc
- Do we intend the catalog to be the "google of web components" or just a showcase of a few featured ones as bonafide examples of the power of WCs?
  - Michael W thinks that maintaining a huge catalog is a lot of work, and just showcasing some good ones and changing them up every so often is much easier and also accomplishes the goal of showing what web components can do
- How do components get added to the catalog?
- How do we make sure the catalog stays pruned?
- How do we / do we notify component developers when we prune their components from the catalog for some reason?
- Do we really need docs for "component users" written explicitly as such? I would think that the idea of "install, import, use in HTML, set attrs/props" could be sprinkled throughout the educational materials
