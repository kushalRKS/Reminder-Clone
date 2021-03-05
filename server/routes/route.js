const express =  require("express");
const listRouter = express.Router();

const listController = require('../controllers/listController');

listRouter.get('/', listController.getLists);
listRouter.post('/', listController.createLists);

listRouter.get('/test', (req, res) => {
    res.status(200).json("Success");
});

module.exports = listRouter