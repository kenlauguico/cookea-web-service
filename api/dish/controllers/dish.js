'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Update a dish.
   *
   * @return {Object}
   */

  // async update(ctx) {
  //   const { dishId } = ctx.params;
    
  //   if (dishId) {

  //     console.log("Using dishId: ", dishId)

  //     const { user, times, stage } = ctx.request.body

  //     console.log("User: "+user+", times: "+user+", stage: "+stage)

  //     if (user && times && stage) {
  //       console.log("It's time.")
  //     }

  //   }

  //   // let entity;
  //   // if (ctx.is('multipart')) {
  //   //   const { data, files } = parseMultipartData(ctx);
  //   //   entity = await strapi.services.restaurant.update({ id }, data, {
  //   //     files,
  //   //   });
  //   // } else {
  //   //   entity = await strapi.services.restaurant.update({ id }, ctx.request.body);
  //   // }

  //   // return sanitizeEntity(entity, { model: strapi.models.restaurant });
  // },
};
