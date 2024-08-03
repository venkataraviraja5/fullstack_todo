const postTask = require('../controllers/task')
const express = require('express')
const router = express.Router()

router.post('/post',postTask.task)
router.get('/',postTask.getTasks)
router.delete('/delete/:id',postTask.deleteTask)


module.exports = router