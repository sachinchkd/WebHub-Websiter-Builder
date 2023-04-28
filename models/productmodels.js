const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname : {type:String, required: true},
    price :{type:Number},
    action:{type:String}
}, {timestamps: true});

export default mongoose.model("product",productSchema);