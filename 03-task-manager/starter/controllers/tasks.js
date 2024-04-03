const Task = require('../models/task')
const getAllTasks = (req,res)=>{
    res.send('get all task');
}

const createTask = async (req,res) =>{
const task = await Task.create(req.body)

    res.status(201).json({task})
}
const getTask =(req,res) =>{
    res.send('get tasks')
}
const updateTask =(req,res) =>{
    res.send('update tasks')
}
const deleteTask =(req,res) =>{
    res.send('delete tasks')
}


module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}


