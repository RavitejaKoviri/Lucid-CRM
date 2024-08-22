'use strict';

/**
 * cdr router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cdr.cdr');