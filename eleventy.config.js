export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets" : "assets"})
  eleventyConfig.addPassthroughCopy({"public" : "/"})

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist",
    },
  };
}