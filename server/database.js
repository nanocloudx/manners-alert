import Sequelize from 'sequelize'

const databaseUrl = process.env.DATABASE_URL || 'postgres://nanocloudx@127.0.0.1:5432/manners-alert'

const sequelize = new Sequelize(databaseUrl, {
  // sequelize model options
})

sequelize.sync({force: false})

export default sequelize
