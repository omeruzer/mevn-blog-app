const express = require('express');
const router = express.Router()

//Controller
const ArticleController = require('../controllers/ArticleController')

//add
router.post('/add',ArticleController.blogAdd)

//get all
router.get('/all',ArticleController.blogAll)

//get selected blog
router.get('/:slug',ArticleController.blogSelected)

//delete
router.delete('/:slug',ArticleController.blogDelete)

//update
router.put('/:slug',ArticleController.blogUpdate)

module.exports = router