const express = require('express');
const router = express.Router();


const { ping, mainPage, userList, tablePage, createGame, gameStatusupdate, gamePage, loginPage, Login, getTemplate, allGamePage, recentPlayedGames, recentplayPage } = require('../controller/main.controller')




// router.get("/mainpage", homepage)
//pages
router.get("/login", loginPage);
router.get("/adminpanel", mainPage);
router.get("/userdata", tablePage)
router.get("/admin/newgame", gamePage)
router.get("/admin/allgame", allGamePage)
router.get('/recentplay', recentplayPage)

router.get("/", ping);
router.get("/admin/userList", userList);
router.post("/admin/createGame", createGame);
router.post("/admin/status", gameStatusupdate);
router.get("/admin/gettemp", getTemplate);
router.post("/adminLogin", Login);
router.get("/admin/recentPlayedGames", recentPlayedGames);



module.exports = router;