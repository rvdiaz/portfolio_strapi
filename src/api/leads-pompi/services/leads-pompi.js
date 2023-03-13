'use strict';

/**
 * leads-pompi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leads-pompi.leads-pompi');
