const express = require('express');
const router = express.Router();


const { mainPage, admin,tablepage,newgame,statusupdate } = require('../controller/main.controller')

// router.get("/mainpage", homepage)
router.get("/", mainPage);
router.get("/table",tablepage)
router.get('/admin', admin);
router.post('/admin/newgame',newgame);
router.post('/admin/status',statusupdate);




module.exports = router;