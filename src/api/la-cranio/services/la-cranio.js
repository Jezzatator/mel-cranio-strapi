'use strict';

/**
 * la-cranio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::la-cranio.la-cranio');
