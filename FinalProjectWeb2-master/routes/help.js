var express= require ("express");
var Campground = require ("../models/campground");
var router=express.Router();

router.get("/",function(req,res){
	res.render("help");
})



module.exports= router;