const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "../config/.env" });

cloudinary.config({
cloud_name: 'duszgpq96', 
api_key: '976782784619354', 
api_secret: '9pMeNcrQeeyJLkf8ph0IWV_toXc' 
});


module.exports = cloudinary;
