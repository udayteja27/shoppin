/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "store.storeimages.cdn-apple.com",
          port: "",
          pathname: "**",
        },
      ],
    },
  };
  
  export default nextConfig;