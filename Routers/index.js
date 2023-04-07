const express = require('express');
const routes = express.Router();

const taskController = require('../Controllers/index');

routes.get('/', (req, res) => {
    res.json({
        message: 'site is up and set up done'
        })
});

routes.get('/alltasks', taskController.getAllTasks);

routes.post('/create', taskController.createTask);
routes.post('/delete', taskController.deleteTask);
routes.post('/update', taskController.updateTask);

module.exports = routes;