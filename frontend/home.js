import welcome from './welcome'

const makeDynamicRequire = () => {
  require.ensure([], (require) => {
    const login = require('./login')
    login()
  })
}

document.body.addEventListener('click', makeDynamicRequire)


exports.welcome = welcome