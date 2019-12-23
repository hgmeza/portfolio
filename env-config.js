const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://hugomeza.herokuapp.com/' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://hugomeza.herokuapp.com/',
}