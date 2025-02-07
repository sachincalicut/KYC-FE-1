/** @type {import('next').NextConfig} */

const NextConfig = {
  /* config options here */
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost:3000",
        port: "",
        pathname: "/**",
      },
    ],
  },

};

export default NextConfig;





