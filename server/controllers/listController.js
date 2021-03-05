const List = require("../models/list");

const getLists = async (req, res) => {
  try {
    const listResult = await List.find();
    res.status(200).json(listResult);
  } catch (error) {
    res.status(404).json({ message: "List Not Found!" });
  }
};

const createLists = async (req,res) => {
    const payload = req.body;
    const newItem = new List({ ...payload, createdOn: new Date() })

    try {
        await newItem.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = {getLists, createLists};
