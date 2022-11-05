const path = require('path')
const { dirname } = require('path');
const {
  UserData,
  games,
  Update,
  getTemplates,
  loginQuery,
  lastPlayedGames,
} = require("../model/main.model");
const { data } = require('../data')
const { Gamedata } = require('../gameData')
const { recentdata } = require('../recentplay')

// join pages
async function mainPage(req, res) {
  console.log("This is the starting page ")
  res.sendFile(path.join(__dirname, '../view/index.html'));
}
async function tablePage(req, res) {
  console.log("This is the starting page ")
  res.sendFile(path.join(__dirname, '../view/table.html'));
}
async function gamePage(req, res) {
  console.log("This is the starting page ")
  return res.sendFile(path.join(__dirname, '../view/form.html'));
}

async function loginPage(req, res) {
  console.log("This is the login page ")
  res.sendFile(path.join(__dirname, '../view/login.html'));
}
async function allGamePage(req, res) {
  console.log("This is the login page ")
  res.sendFile(path.join(__dirname, '../view/game.html'));
}

async function recentplayPage(req, res) {
  res.sendFile(path.join(__dirname, '../view/recentPlay.html'));

}

async function ping(req, res) {
  console.log("This is the starting page ");
  res.send("Welcome");
  // res.sendFile(path.join(__dirname, '../view/main.html'));
}

async function userList(req, res) {
  try {
    //   const data = await UserData();
    res.send(data);
  } catch (err) {
    console.log("Error", err);
  }
}
async function createGame(req, res) {
  try {
    let { time, green, violet, red, number, color } = req.body;
    if (!time || !green || !violet || !red || !number || !color) {
      res.send("Errors");
      return false;
    }

    const game = await games(time, green, violet, red, number, color);
    res.send(game);
  } catch (err) {
    console.log("Error", err);
  }
}
async function gameStatusupdate(req, res) {
  try {
    let { status } = req.body;
    const data = await Update(status);
    res.send(data);
  } catch (err) {
    console.log("Error", err);
  }
}
async function getTemplate(req, res) {
  try {
    //   const data = await getTemplates();
    res.send(Gamedata);
  } catch (err) {
    console.log("Error", err);
  }
}
async function Login(req, res) {
  const { id, password } = req.body;
  let loginResponse = await loginQuery(id, password);
  if (loginResponse.length == 0) {
    console.log("Wrong credential ");
    res.send(loginResponse);
  } else if (loginResponse[0].password == password) {
    console.log("You are login Successfully");
    res.send("Login Successfully");
  } else {
    console.log("Wrong Credential");
    res.send("Invalid Credential");
  }
}
async function recentPlayedGames(req, res) {
  // let game = await lastPlayedGames();
  // console.log(game);
  res.send(recentdata);
}

module.exports = { ping, mainPage, userList, tablePage, createGame, gameStatusupdate, gamePage, loginPage, Login, getTemplate, allGamePage, recentPlayedGames, recentplayPage }