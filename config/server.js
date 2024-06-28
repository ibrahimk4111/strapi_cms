// config/server.js
module.exports = ({ env }) => {
  const host = env('HOST');
  const port = process.env.PORT || 1337;
  console.log(`Strapi is binding to host ${host} on port ${port}`);
  return {
    host,
    port,
    app: {
      keys: env.array('APP_KEYS'),
    }
  };
};
