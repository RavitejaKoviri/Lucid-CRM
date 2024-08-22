'use strict';

/**
 * campaign-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::campaign-email.campaign-email');