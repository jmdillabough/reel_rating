import express from 'express'
const router = express.Router()

import authRoute from '../middleware/authMiddleware.js'
import {createUserList, getAllLists, saveMovieById
} from '../controllers/userListController.js'

router.get('/', authRoute, getAllLists)
router.post('/', authRoute, createUserList)
router.get('/test', (authRoute, saveMovieById))


export default router
