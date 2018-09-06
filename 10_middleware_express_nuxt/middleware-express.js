const express = require('express')
const app = express()

const router = express.Router();

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post("/track-data",(req,res) => {
    console.log('stored data',req.body.data)
    res.status(200).json({message:"success!"})
})

module.exports = {
    path:'/api',
    handler:router
}