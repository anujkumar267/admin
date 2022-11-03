const path = require('path')
const { UserData, games, Update } = require("../model/main.model");
const { dirname } = require('path');

// async function homepage(req , res) {
//     console.log("sdnjsnj");
//     res.sendFile(path.join(__dirname, '.../view/index.html')); 
//   }

async function mainPage(req, res) {
    console.log("This is the starting page ")
    res.sendFile(path.join(__dirname, '../view/index.html'));
}
async function tablepage(req, res) {
    console.log("This is the starting page ")
    // res.send("Welcome");
    res.sendFile(path.join(__dirname, '../view/table.html'));
}
async function admin(req, res) {
    try {
        // const data = await UserData();
        const data = [{
            "id": 12,
            "userName": "Anuj",
            "mobile": 7505259584
        }]
        res.send(data);
    } catch (err) {
        console.log("Error", err)
    }
}

async function newgame(req, res) {
    try {
        let { status, time, green, violet, red, number } = req.body;
        if (
            !status ||
            !time ||
            !green ||
            !violet ||
            !red ||
            !number
        ) {
            res.send("Error");
            return false;
        }

        const game = await games(status, time, green, violet, red, number);
        res.send(game);
    } catch (err) {
        console.log("Error", err);
    }
}
async function statusupdate(req, res) {
    try {
        let { status } = req.body
        const data = await Update(status);
        res.send(data);
    } catch (err) {
        console.log("Error", err)
    }

}
module.exports = { mainPage, admin, tablepage, newgame, statusupdate }