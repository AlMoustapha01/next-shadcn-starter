const componentGenerator = require("./.plop/generators/index");

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator("components", componentGenerator);
};
