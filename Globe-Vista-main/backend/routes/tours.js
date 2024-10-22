import express from 'express'
import { createTour,deleteTour,getAllTour,getFeaturedTour,getSingleTour,getTourBySearch,getTourCount,updateTour } from '../controllers/tourController.js'
const router=express.Router()
import { verifyAdmin } from '../utils/verifyToken.js' 

//create new tour
router.post('/',verifyAdmin,createTour)

//update tour
router.put('/:id',verifyAdmin,updateTour)

//delete tour
router.delete('/:id',verifyAdmin,deleteTour)

//get single tour
router.get('/:id',getSingleTour)

//Get All Tours
router.get('/',getAllTour)

//get Tour By Search
router.get("/search/getTourBySearch",getTourBySearch)

//FeaturedTour
router.get("/search/getFeaturedTours",getFeaturedTour)
router.get("/search/getTourCount",getTourCount)



export default router