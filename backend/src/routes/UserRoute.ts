import  express  from "express";
import UserController from "../controllers/UserController";
import { jwtCheck,jwtParse } from "../middleware/auth";
const router=express.Router();


router.post("/",jwtCheck,UserController.createUser)
router.put("/",jwtCheck, jwtParse,UserController.updateUser)
export default router