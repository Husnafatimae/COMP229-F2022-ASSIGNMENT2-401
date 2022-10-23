import {Router} from 'express';
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../controllers/auth.controller.server.js';

const router = Router();

//Display Login Page
router.get('/login', DisplayLoginPage);

//Display Registration Page
router.get('/register', DisplayRegisterPage);

// Process Login page
router.post('/login', ProcessLoginPage);

//Process Registration page
router.post('/register', ProcessRegisterPage);

//Process Logout page
router.get('/logout', ProcessLogoutPage);

export default router;