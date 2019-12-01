const postcssImport = require("postcss-import")
const postcssPreset = require("postcss-preset-env")

module.exports = {
  plugins: [
    postcssImport,
    postcssPreset({
      autoprefixer: { grid: true },
      features: {
        "nesting-rules": true,
      },
      browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
    }),
  ],
}
