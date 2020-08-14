const bcrypt = require('bcryptjs')

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword)
}

function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login')
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
}
