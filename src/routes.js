import { Router } from 'express'

export const routes = Router()

routes.get('/hello', (req, res) => {
  return res.json({
    message: "Hello World"
  })
})
