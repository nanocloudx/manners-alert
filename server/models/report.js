import Sequelize from 'sequelize'
import database from '../database'
import Problem from './problem'
import Age from './age'
import Gender from './gender'

const Report = database.define('report', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  locLatitude: Sequelize.DOUBLE,
  locLongitude: Sequelize.DOUBLE,
  locPostal: Sequelize.STRING,
  locCountry: Sequelize.STRING,
  locPref: Sequelize.STRING,
  locCity: Sequelize.STRING,
  locDistrict: Sequelize.STRING,
  locAddress: Sequelize.STRING,
  locNumber: Sequelize.STRING,
})

Report.belongsTo(Problem)
Report.belongsTo(Age)
Report.belongsTo(Gender)

Report.sync({force: false})

export default Report
