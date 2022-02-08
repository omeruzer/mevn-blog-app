const express = require('express');
const router = express.Router()

// Multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'../client/public/assets')
    },
    filename: (req,file,cb)=>{
        cb(null, Math.round(Math.random()*1000000)+"-"+file.originalname)
    }
})

const upload = multer({storage:storage})

//Controller
const ArticleController = require('../controllers/ArticleController')

//add
router.post('/add',upload.single('img'),ArticleController.blogAdd)

//get all
router.get('/all',ArticleController.blogAll)

//get selected blog
router.get('/:slug',ArticleController.blogSelected)

//delete
router.delete('/:slug',ArticleController.blogDelete)

//update
router.put('/:slug',ArticleController.blogUpdate)

//sidebar other posts
router.post('/other',ArticleController.sidebarOtherPost)

//all delete
router.delete('/delete/all',ArticleController.blogDeleteAll)

module.exports = router