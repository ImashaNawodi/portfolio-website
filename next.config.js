// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          // Define your remote patterns here
          // Example: Allow images from any protocol and any hostname
          protocol: 'https',
          hostname: '**', // Matches any hostname
        },
      ],
    },
    // Other configurations may follow
  }
  