// https://browsersl.ist/#q=%3E+0.2%25+and+not+dead+and+fully+supports+es6-module+and+fully+supports+es6-module-dynamic-import+and+supports+resizeobserver%2C%0Amaintained+node+versions

module.exports = [
  // We try to support most markets while also scoping it to browsers that fully supports ESM, and can natively call import()
  // as much of our products and tooling rely on ESM and dynamic imports being available to the runtime.
  '> 0.2% and not dead and fully supports es6-module and fully supports es6-module-dynamic-import and supports resizeobserver',
  // Most of our npm libraries also need to work in Node.js, at least to the LTS versions.
  'maintained node versions',
]
