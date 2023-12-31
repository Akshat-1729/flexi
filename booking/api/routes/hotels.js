import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

import {
 
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin,  updateHotel);
//DELETE
router.delete("/find/:id", deleteHotel);  
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType); 
router.get("/room/:id", getHotelRooms);  

export default router;