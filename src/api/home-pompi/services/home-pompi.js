'use strict';

/**
 * home-pompi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-pompi.home-pompi');
