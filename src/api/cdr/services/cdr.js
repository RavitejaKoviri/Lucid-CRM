'use strict';

/**
 * cdr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cdr.cdr');