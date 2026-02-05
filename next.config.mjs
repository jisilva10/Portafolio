/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'pub-940ccf6255b54fa799a9b01050e6c227.r2.dev', // For the globe image
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
