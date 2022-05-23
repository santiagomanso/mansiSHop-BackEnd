import express from 'express'
import {
  authUser,
  getUserPofile,
  registerUser,
  updateUserPofile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserPofile)
  .put(protect, updateUserPofile)

export default router
