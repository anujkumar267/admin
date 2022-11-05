function UserData() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM user_table`;
    global.db.query(sql, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
      console.log(result);
    });
  });
}
function games(status, time, green, violet, red, number, color) {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO game_template(status,time,green,violet,red,number,color) values ("PENDING","${time}","${green}",
      "${violet}","${red}","${number}","${color}") `;
    global.db.query(sql, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
      console.log(result);
    });
  });
}
function Update(status) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE  game_template set status ="${status}" order by id desc limit 1`;
    global.db.query(sql, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
      console.log(result);
    });
  });
}

function getTemplates() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM game_template order by id desc limit 1 `;
    global.db.query(sql, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
      console.log(result);
    });
  });
}

function loginQuery(id, password) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * FROM Login WHERE id = '${id}'`;
    global.db.query(sql, function (err, result) {
      if (err) {
        console.log("please signup first ");
        reject(err);
      }
      resolve(result);
    });
  });
}

function lastPlayedGames() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT number , color FROM game_template `;
    global.db.query(sql, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
      console.log(result);
    });
  });
}

module.exports = {
  UserData,
  games,
  Update,
  getTemplates,
  loginQuery,
  lastPlayedGames,
};
