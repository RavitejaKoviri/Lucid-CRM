module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4377),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '39b37daa88e9ceb65a405b70f8359010'),
    },
  },
});
