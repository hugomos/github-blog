/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sqpphxdkvowxenpgmnhu.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/post-header-images/**',
      }
    ]
  }
}

module.exports = nextConfig
