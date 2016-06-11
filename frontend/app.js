
const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Jack"}
]

console.log(map(users, 'name'))


const handleLogin = () => {
  require.ensure([], (require) => {
    const login = require('./login')
    login()
  }, 'auth')
}

const handleLogout = () => {
  require.ensure([], (require) => {
    const logout = require('./logout')
    logout()
  }, 'auth')
}

document.getElementById('log-in').addEventListener('click', handleLogin)
document.getElementById('log-out').addEventListener('click', handleLogout)


const context = require.context('./routes', false, /\.js$/)

context.keys().forEach((route) => {
  const module = context(route)
  module()
})