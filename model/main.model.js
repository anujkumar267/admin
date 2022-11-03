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
function games(status, time, green, violet, red, number) {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO game_template(status,time,green,violet,red,number) values ("${status}","${time}","${green}",
      "${violet}","${red}","${number}") `;
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
    let sql = `UPDATE  game_template set status ="${status}"`;
    global.db.query(sql, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
      console.log(result);
    });
  });
}

module.exports = { UserData, games, Update };