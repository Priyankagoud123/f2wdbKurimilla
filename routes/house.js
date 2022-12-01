var express = require('express');
var router = express.Router();
var house_controller = require('../controllers/house');
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('house', { title: 'search results house' });

});
router.get('/detail',secured, house_controller.house_view_one_Page);
router.get('/create',secured, house_controller.house_create_Page);
router.get('/update',secured, house_controller.house_update_Page);
router.get('/delete',secured, house_controller.house_delete_Page);

module.exports = router;
