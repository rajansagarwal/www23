import million from 'million/compiler';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['z.rajan.sh'],
  },
};
 
export default million.next(nextConfig, { auto: true });