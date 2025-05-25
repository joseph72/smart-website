// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "standalone",
// };

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// const withTM = require('next-transpile-modules')([
//   'antd',
//   '@ant-design/icons',
//   'rc-util',
// ]);

// module.exports = withTM({
//   reactStrictMode: true,
// });

/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  'antd',
  '@ant-design/icons',
  'rc-util',
  'rc-pagination',         // ← ADD THIS
  'rc-picker',             // ← often required
  'rc-select',
  'rc-tabs',
  'rc-field-form',
  'dayjs'                  // ← Antd uses this internally
]);

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
