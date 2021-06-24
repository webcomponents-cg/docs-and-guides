module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./docs/main.css");
    eleventyConfig.addWatchTarget("./docs/*.{css}");

    const tagsToAlphabetize = [
        'guide',
        'article'
    ];

    for (let i = 0; i < tagsToAlphabetize.length; i++) {
        const tag = tagsToAlphabetize[i];

        eleventyConfig.addCollection(tag, collection => {
            return collection.getFilteredByTag(tag).sort((a, b) => {
                if (a.data.title < b.data.title) {
                    return -1;
                }
                if (a.data.title > b.data.title) {
                    return 1;
                }
                return 0;
            });
        });
    }

    return {
        dir: {
            includes: '_includes',
            input: 'docs',
            layouts: '_layouts',
            output: '_site',
        },
        // Allows using markup and EJS features in markdown
        markdownTemplateEngine: 'ejs',
        templateFormats: [
            'ejs',
            'md',
            'css'
        ],
    };
};