const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://ancient-ridge-66906.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://ancient-ridge-66906.herokuapp.com',
}