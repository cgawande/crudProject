const express=require("express")
const router =express.Router()
const userController=require("../controller/userController")



router.get("/",userController.getUser)
router.post("/create",userController.addUser)
router.delete("/deleteUser/:id",userController.deleteUser)
router.patch("/updateUser/:id",userController.updateUser)
module.exports=router;