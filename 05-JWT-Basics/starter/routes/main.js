const express = require('express');

const router = express.Router()

const {login,dashboard} = require('../controllers/main')

const authMiddleware = require('../middleware/auth')
function abc(){
    console.log("I AM CALLED");
    return {
        "success" : true,
        "message" : "Route Exists!"
    };
}
router.route('/dashboard').get(function(req,res){
    res.json({
        "message"   :   "Route exists!"
    })
});
router.route('/login').post(login)

module.exports = router
