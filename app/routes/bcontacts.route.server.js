import { Router } from "express";

import {  DisplayBcontactsList, 
    DisplayBcontactsAddPage, 
    ProcessBcontactsAddPage, 
    ProcessBcontactsUpdatePage, 
    DisplayBcontactsUpdatePage, 
    ProcessBcontactsDelete } from "../controllers/bcontacts.controller.server.js";
   
    import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/bcontact-list', DisplayBcontactsList);
router.get('/bcontact-add', AuthGuard, DisplayBcontactsAddPage);
router.post('/bcontact-add', AuthGuard, ProcessBcontactsAddPage);
router.post('/bcontact-update/:id', AuthGuard, ProcessBcontactsUpdatePage);
router.get('/bcontact-update/:id', AuthGuard, DisplayBcontactsUpdatePage);
router.get('/bcontact-delete/:id', AuthGuard, ProcessBcontactsDelete);

export default router;