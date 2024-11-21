import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {
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