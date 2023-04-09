const express = require("express")
const { createUser, getUser, getUserById, updateUser, deleteUser } = require("../../controller/userController")
const router = express.Router()

router.post("/createuser",createUser)
router.get("/getuser",getUser)
router.get("/getuserbyid/:userId",getUserById)
router.patch("/updateuser/:userId",updateUser)
router.delete("/deleteuser/:userId",deleteUser)

module.exports = router