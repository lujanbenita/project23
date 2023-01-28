/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            ssr: true,
        },
    },
    images: {
        domains: ['a.storyblok.com'],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        });
        return config;
  },
    env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;