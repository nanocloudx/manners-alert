import Sequelize from 'sequelize'
import database from '../database'

const Problem = database.define('problem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING
},{
  timestamps: false
})

Problem.sync({force: false}).then(() => {
  return Problem.bulkCreate(Problem.staticData)
})

Problem.staticData = [{
  id: 1,
  name: 'タバコ',
  description: '禁煙区域での喫煙、歩きタバコ、タバコのポイ捨てなど'
},{
  id: 2,
  name: 'ゴミ',
  description: 'ポイ捨て、誤った分別、漁る行為など'
},{
  id: 3,
  name: '自動車',
  description: '路上駐車、危険な運転、不必要な警笛など'
},{
  id: 4,
  name: '自転車',
  description: '路上駐輪、無灯火走行、ながらスマホなど'
},{
  id: 5,
  name: '電車内',
  description: '足を投げ出す、大声での会話、痴漢と疑わしいなど'
},{
  id: 6,
  name: '酔っぱらい',
  description: '泥酔らしき嘔吐、座り込み、危険なふらふら歩きなど'
},{
  id: 7,
  name: '汚染行為',
  description: '痰やつばを吐く、トイレ以外での排泄、落書きなど'
},{
  id: 8,
  name: '暴力',
  description: '喧嘩、怒鳴り散らす、器物破損など'
},{
  id: 9,
  name: 'セクシャル',
  description: '公衆でのディープキス、過度な接触行為、露出など'
},{
  id: 10,
  name: '悪徳業者',
  description: '悪質な客引き、宗教勧誘、ネットワーク商法、使途不明の募金など'
},{
  id: 11,
  name: '動物',
  description: '鳩に餌をばら撒く、ペットの糞を放置するなど'
},{
  id: 99,
  name: 'その他',
  description: 'いづれにも当てはまらない場合'
}]

export default Problem
