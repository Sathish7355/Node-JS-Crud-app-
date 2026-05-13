const express = require("express");
const router=express.Router()
const stuentcontroller =require("./conroller/studentscontroller")

router.get("/",stuentcontroller.view)
router.get("/adduser",stuentcontroller.adduser)
router.post("/adduser",stuentcontroller.save)
router.get("/edituser/:id",stuentcontroller.edituser)
router.post("/edituser/:id",stuentcontroller.edit)
router.get("/deleteuser/:id",stuentcontroller.delete)



module.exports=router