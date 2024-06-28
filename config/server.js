module.exports = ({ env }) => {
  
  const host = env('HOST', '0.0.0.0');
  const port = process.env.PORT || 4000;
  console.log(`Strapi is binding to host ${host} on port ${port}`);

  return {
  host,
  port,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'vd6zi0IlWEWTY7Ri9vkSpQ=='),
    },
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
}};
