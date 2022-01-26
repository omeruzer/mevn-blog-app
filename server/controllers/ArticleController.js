const express = require('express');
const slugify = require('slugify');

//Models
const Articles = require('../models/Articles');

// Blog Add
const blogAdd = (req,res)=>{
    const title     =   req.body.title
    const slug     =   slugify(req.body.title)
    const author    =   req.body.author
    const content   =   req.body.content

    const newBlog = new Articles({
        title:title,
        slug:slug,
        author:author,
        content:content,
    })

    newBlog.save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });

}

//get all blog
const blogAll = (req,res)=>{
    Articles.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

//get selected blog
const blogSelected = (req,res)=>{
    const slug = req.params.slug

    Articles.find({slug:slug})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
} 

//Blog Delete
const blogDelete = (req,res)=>{
    const slug = req.params.slug
    const blogDel = Articles.find({slug:slug})

    blogDel.findOneAndDelete()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

// Blog Update
const blogUpdate = (req,res)=>{
    const slug = req.params.slug

    const title     =   req.body.title
    const titleSlug     =   slugify(req.body.title)
    const author    =   req.body.author
    const content   =   req.body.content

    const blogUpdate = Articles.find({slug:slug})

    blogUpdate.update({
        title:title,
        slug:titleSlug,
        author:author,
        content:content,
    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
}

module.exports={
    blogAdd,
    blogAll,
    blogSelected,
    blogDelete,
    blogUpdate
}