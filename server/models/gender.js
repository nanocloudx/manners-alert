import Sequelize from 'sequelize'
import database from '../database'

const Gender = database.define('gender', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING
},{
  timestamps: false
})

Gender.sync({force: false}).then(() => {
  return Gender.bulkCreate(Gender.staticData)
})

Gender.staticData = [{
  id: 1,
  name: '男性'
},{
  id: 2,
  name: '女性'
}]

export default Gender
