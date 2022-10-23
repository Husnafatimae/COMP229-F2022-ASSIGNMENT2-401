import bcontactModel from '../models/bcontacts.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayBcontactsList(req, res, next){
    bcontactModel.find(function(err, bcontactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Bcontact List', page: 'bcontacts/list', bcontacts: bcontactsCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayBcontactsAddPage(req, res, next){
    res.render('index', { title: 'Add Bcontact', page: 'bcontacts/edit', bcontact: {}, displayName: UserDisplayName(req) });
}

export function ProcessBcontactsAddPage(req, res, next){
    
    let newBcontact = bcontactModel({
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        emailaddress: req.body.emailaddress
        
    });

    bcontactModel.create(newBcontact, (err, Bcontact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/bcontact-list')
    } )
}

export function DisplayBcontactsUpdatePage(req, res, next){
    let id = req.params.id;

    bcontactModel.findById(id, (err, bcontact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Bcontact', page: 'bcontacts/update', bcontact: bcontact, displayName: UserDisplayName(req) });
    });    
}

export function ProcessBcontactsUpdatePage(req, res, next){

    let id = req.params.id;
    
    let newBcontact = bcontactModel({
        _id: req.body.id,
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        emailaddress: req.body.emailaddress
    });

    bcontactModel.updateOne({_id: id }, newBcontact, (err, Bcontact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/bcontact-list')
    } )
}

export function ProcessBcontactsDelete(req, res, next){
    let id = req.params.id;

    bcontactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/bcontact-list');
    })
}