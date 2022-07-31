module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ec7ad394b20ec0749d065d6c7576bc85'),
  },
});
