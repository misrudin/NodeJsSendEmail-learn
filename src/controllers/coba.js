const cobaModel = require("../models/coba");

module.exports = {
  getCategory: (req, res) => {
    cobaModel
      .getCategory()
      .then(result => {
        res.json(result);
      })
      .catch(err => res.json(err));
  }
};
