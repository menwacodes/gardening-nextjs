module.exports = {
    async redirects() {
    return [
      {
        source: '/',
        destination: '/gardening/food',
        permanent: true,
      },
    ]
  }
}
