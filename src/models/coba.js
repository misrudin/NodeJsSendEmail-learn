const conn = require("../config/db");

module.exports = {
  getCategory: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM category", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
