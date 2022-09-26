module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "82.180.143.103"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "u976353708_podadium"),
      user: env("DATABASE_USERNAME", "u976353708_pod"),
      password: env("DATABASE_PASSWORD", "YQ19$rn6Lu%4X$"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
