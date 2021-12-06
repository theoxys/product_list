const path = require("path");
const withSass = require("@zeit/next-sass");

/** @type {import('next').NextConfig} */
module.exports = withSass({
  cssModules: true,
});
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["dummyimage.com"],
  },
};
