// config/server.js
module.exports = ({ env }) => {
  const host = env('HOST', '0.0.0.0');
  const port = env.int('PORT', process.env.PORT || 1337);
  console.log(`Strapi is binding to host ${host} on port ${port}`);
  return {
    host,
    port,
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};
