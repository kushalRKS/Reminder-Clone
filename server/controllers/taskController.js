const Task = require("../models/task");

const getTasks = async (req, res) => {
  try {
    const listResult = await Task.find();
    res.status(200).json(listResult);
  } catch (error) {
    res.status(404).json({ message: "Task Not Found!" });
  }
};

const createTask = async (req,res) => {
    const payload = req.body;
    const newItem = new Task({ ...payload, createdOn: new Date() })

    try {
        await newItem.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = {getTasks,createTask };
