'use strict';

/**
 * target-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::target-status.target-status');