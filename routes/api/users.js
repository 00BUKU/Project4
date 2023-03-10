import express from 'express';
const router = express.Router();
import usersCtrl  from '../../controllers/users.js';
import multer from 'multer';
const upload = multer()

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/:id', usersCtrl.getUserById)

/*---------- Protected Routes ----------*/




export default router;