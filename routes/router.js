import express from "express";
import { home, about, contact, guitars } from "../controller/controller.js";
const router = express.Router();

router.get("/", home);

router.get("/about", about);

router.get("/contact", contact);

router.get("/guitars", guitars);

router.get('*', (req, res)=>{
    res.send('404 - page not found')
    })
    


export default router;