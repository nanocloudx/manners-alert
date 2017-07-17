import { Router } from 'express'
import Report from '../models/report'
import Problem from '../models/problem'

const router = Router()

router.post('/problem', (req, res) => {
  Report.create({
    locLatitude: req.body.address.latitude,
    locLongitude: req.body.address.longitude,
    locPostal: req.body.address.postal,
    locCountry: req.body.address.country,
    locPref: req.body.address.pref,
    locCity: req.body.address.city,
    locDistrict: req.body.address.district,
    locAddress: req.body.address.address,
    locNumber: req.body.address.number,
    problemId: req.body.problemId,
    genderId: req.body.genderId,
    ageId: req.body.ageId
  }).then(() => {
    res.json({status: 'ok'})
  })
})

router.get('/problem-list', (req, res) => {
  res.json(Problem.staticData)
})

export default router
