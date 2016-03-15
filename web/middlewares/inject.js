/* ================================================================
 * reliable-master by xdf(xudafeng[at]126.com)
 *
 * first created at : Tue Mar 17 2015 00:16:10 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

const render = require('../views/render');

module.exports = function(app) {
  return function *inject(next) {
    this.render = render.call(this, app._options);
    yield next;
  };
};
