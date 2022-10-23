import { Router } from "express";

import {  DisplayBcontactsList, 
    DisplayBcontactsAddPage, 
    ProcessBcontactsAddPage, 
    ProcessBcontactsUpdatePage, 
    DisplayBcontactsUpdatePage, 
    ProcessBcontactsDelete } from "../controllers/bcontacts.controller.server.js";

const router = Router();

router.get('/bcontact-list', DisplayBcontactsList);
router.get('/bcontact-add', DisplayBcontactsAddPage);
router.post('/bcontact-add', ProcessBcontactsAddPage);
router.post('/bcontact-update/:id', ProcessBcontactsUpdatePage);
router.get('/bcontact-update/:id', DisplayBcontactsUpdatePage);
router.get('/bcontact-delete/:id', ProcessBcontactsDelete);

export default router;