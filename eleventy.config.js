const Nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
	let nunjucksEnvironment = new Nunjucks.Environment(
		new Nunjucks.FileSystemLoader("src/_includes")
	);
  
	eleventyConfig.setLibrary("njk", nunjucksEnvironment);

    eleventyConfig.addPassthroughCopy({
        "./src/admin/config.yml": "./admin/config.yml",
    });
    
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site',
        }
    }
};

