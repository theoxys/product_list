const path = require("path");
const withSass = require("@zeit/next-sass");

/** @type {import('next').NextConfig} */
module.exports = withSass({
  cssModules: true,
});
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    domains: ["dummyimage.com"],
  },
};
