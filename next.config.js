/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
  //     type: 'asset/resource'
  //   })
  //   return config
  // }

  // webpack(config) {
  //   config.experiments = { ...config.experiments, topLevelAwait: true }
  //   return config;
  // }
}

module.exports = nextConfig


// rules: [
//   {
//     test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
//     type: 'asset/resource',
//   },
// ]