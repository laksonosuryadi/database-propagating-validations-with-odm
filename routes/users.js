const express = require('express')
const router = express.Router()
const controller = require('../controllers/eventorganizerController')

router.get('/', controller.showEvent)
router.post('/', controller.createEvent)

router.get('/edit/:id', controller.getEditPage)
router.post('/edit/:id', controller.editEvent)

router.get('/delete/:id', controller.deleteEvent)

module.exports = router
