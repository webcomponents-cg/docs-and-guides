import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import markdownItAnchors from "markdown-it-anchor";

export default function(eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

    const markdown = markdownIt(options).use(markdownItAnchors, {
        level: [1, 2, 3, 4],
        permalink: true,
        permalinkSymbol: '#',
        permalinkAttrs: () => ({ 'aria-label': '§' }),
        renderPermalink: (slug, opts, state, idx) => {
			// based on fifth version in
			// https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
			const linkContent = state.tokens[idx + 1].children[0].content;
		  
			// Create the openning <div> for the wrapper
			const headingWrapperTokenOpen = Object.assign(
			  new state.Token('div_open', 'div', 1),
			  {
				attrs: [['class', 'heading-wrapper']],
			  }
			);
			// Create the closing </div> for the wrapper
			const headingWrapperTokenClose = Object.assign(
			  new state.Token('div_close', 'div', -1),
			  {
				attrs: [['class', 'heading-wrapper']],
			  }
			);
		  
			// Create the tokens for the full accessible anchor link
			// <a class="deeplink" href="#your-own-platform-is-the-nearest-you-can-get-help-to-setup">
			//   <span aria-hidden="true">
			//     ${opts.permalinkSymbol}
			//   </span>
			//   <span class="visually-hidden">
			//     Section titled Your "own" platform is the nearest you can(get help to) setup
			//   </span>
			// </a >
			const anchorTokens = [
			  Object.assign(new state.Token('link_open', 'a', 1), {
				attrs: [
				  ...(opts.permalinkClass ? [['class', opts.permalinkClass]] : []),
				  ['href', opts.permalinkHref(slug, state)],
				  ...Object.entries(opts.permalinkAttrs(slug, state)),
				],
			  }),
			  Object.assign(new state.Token('span_open', 'span', 1), {
				attrs: [['aria-hidden', 'true']],
			  }),

			//   <svg class="octicon octicon-link" viewBox="0 0 16 16" aria-hidden="true" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>

			  Object.assign(new state.Token('svg_open', 'svg', 1), {
				attrs: [
					['class', 'octicon octicon-link'],
					['viewBox', '0 0 16 16'],
					['aria-hidden', 'true'],
					['width', '16'],
					['height', '16'],
				]
			  }),
			  Object.assign(new state.Token('path_open', 'path', 1), {
				attrs: [
					['fill-rule', 'evenodd'],
					['d', 'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'],
				]
			  }),

			//   Object.assign(new state.Token('html_block', '', 0), {
			// 	content: opts.permalinkSymbol,
			//   }),

			  Object.assign(new state.Token('path_close', 'path', -1), {}),
			  Object.assign(new state.Token('svg_open', 'svg', -1), {}),
			  Object.assign(new state.Token('span_close', 'span', -1), {}),
			  Object.assign(new state.Token('span_open', 'span', 1), {
				attrs: [['class', 'visually-hidden']],
			  }),
			  Object.assign(new state.Token('html_block', '', 0), {
				content: `Section titled ${linkContent}`,
			  }),
			  Object.assign(new state.Token('span_close', 'span', -1), {}),
			  new state.Token('link_close', 'a', -1),
			];
		  
			// idx is the index of the heading's first token
			// insert the wrapper opening before the heading
			state.tokens.splice(idx, 0, headingWrapperTokenOpen);
			// insert the anchor link tokens after the wrapper opening and the 3 tokens of the heading
			state.tokens.splice(idx + 3 + 1, 0, ...anchorTokens);
			// insert the wrapper closing after all these
			state.tokens.splice(
			  idx + 3 + 1 + anchorTokens.length,
			  0,
			  headingWrapperTokenClose
			);
        },
    });

	eleventyConfig.setLibrary("md", markdown);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPassthroughCopy("docs/*.css");
	eleventyConfig.addPassthroughCopy("docs/assets/**/*");
	return {
		dir: {
			input: "docs",
			output: "dist"
		}
	};
};