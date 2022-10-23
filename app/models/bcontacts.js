import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BcontactSchema = new Schema({
    name: String, 
    phonenumber: Number, 
    emailaddress: String
}, {
    timestamps: true,
    collection: 'bcontacts'
});

export default mongoose.model('Bcontacts', BcontactSchema);