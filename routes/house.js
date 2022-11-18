var express = require('express');
var router = express.Router();
var house_controller = require('../controllers/house');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('house', { title: 'search results house' });

});
router.get('/detail', house_controller.house_view_one_Page);
router.get('/create', house_controller.house_create_Page);
router.get('/update', house_controller.house_update_Page);
router.get('/delete', house_controller.house_delete_Page);

module.exports = router;
