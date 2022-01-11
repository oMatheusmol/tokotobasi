module.exports = {
  get: function (resource) {
    return `PORT='3000'

# Be extra careful with NODE_ENV as it will change database connection
# to production settings (values: test | development | production)
NODE_ENV='development'
MIGRATIONS='src/infrastructure/knex/migrations'

# production database settings
DATABASE_HOST='127.0.0.1'
DATABASE_CLIENT='mysql2'
DATABASE_NAME='base_de_dados'
DATABASE_PASSWORD='senha'
DATABASE_USER='usuario'
DATABASE_PORT='3306'

# 1 - just show errors via console.error()
# 0 - do not show errors via console.error()
DEBUG='1'

JWT_SECRET='BLA BLA BLA'
JWT_SECRET_REFRESH='BLA BLA BLA'

# 10 minutes
JWT_SECRET_EXPIRATION_SECS=60000
# 8 days
JWT_SECRET_REFRESH_EXPIRATION_SECS=691200  
`;
  },
};
