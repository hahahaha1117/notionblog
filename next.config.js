// const withTM = require('next-transpile-modules')(['katex'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gravatar.com'],
  },
  eslint: {
    // dirs: ['components', 'layouts', 'lib', 'pages'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
        ],
      },
    ]
  },
  transpilePackages: ['dayjs'], // 原本你有設定這個，保留它
}

module.exports = nextConfig
