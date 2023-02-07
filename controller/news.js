const News = require("../model/News");

const newses = async (req, res) => {
  try {


    const {page, limit} = req.query
    // skip 
    // offset
    // limit
    const news = await News.find({}).skip((page -1 ) * limit).limit(limit)
    // .populate('user')
    res.status(200).send({
      news,
    });
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
};

const create = async (req, res) => {
  try {
    const news = await News.create(req.body);

    res.status(200).send({
      news,
    });
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
};



module.exports = { newses, create };
