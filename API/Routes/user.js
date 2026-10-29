import express from 'express'
import { register } from '../Controllers/user.js';
import { login } from '../Controllers/user.js';
import { users } from '../Controllers/user.js';

const router = express.Router();

// Register User
router.post('/register', register);


// Login User
router.post('/login', login);

// Get All Users 
router.get('/all', users);


export default router






