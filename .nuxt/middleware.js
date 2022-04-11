const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['login'] = require('..\\middleware\\login.js')
middleware['login'] = middleware['login'].default || middleware['login']

export default middleware
