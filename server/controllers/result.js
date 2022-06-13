const Result = require("../models/result");
const Base = require("./base");

const deleteResult = (req, res) => {
  Base.deleteEntity(req, res, Result);
};

const getResults = (req, res) => {
  Base.getEntities(req, res, Result);
};

const getResultById = (req, res) => {
  Base.getEntityById(req, res, Result);
};

const searchResults = async (req, res) => {
  const searchString = req.query.searchString || "";
  await Result.find({ $text: { $search: searchString } }, (err, entities) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: entities });
  }).catch((err) => console.log(err));
};

module.exports = {
  createResult: Base.createEntity(Result),
  updateResult: Base.updateEntity(Result),
  deleteResult,
  getResults,
  getResultById,
  searchResults,
};
