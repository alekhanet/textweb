module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }

    return config
  },
  images: {
    domains: ['picsum.photos'],
    formats: ['image/jpg', 'image/webp'],
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})