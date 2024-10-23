// next.config.mjs

export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.tenor.com',
        },
        {
          protocol: 'https',
          hostname: 'i.gifer.com',
        },
        {
          protocol: 'https',
          hostname: 'static.wixstatic.com',
        },
        {
          protocol: 'https',
          hostname: 'i.makeagif.com', 
        },
        
      ],
    },
  };
  