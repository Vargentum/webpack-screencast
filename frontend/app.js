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


const context = location.pathname.slice(1)
const route = require(`./routes/${context}`)
route()