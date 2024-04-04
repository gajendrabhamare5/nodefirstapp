const Task = require('../models/task')
const getAllTasks = async (req,res)=>{
    /* res.send('get all task'); */

    try {
        const task = await task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({ msg:error })

    }
}

const createTask = async (req,res) =>{
    try {

        const task = await task.create(req.body)
        res.status(201).json({task})

    } catch (error) {
        res.status(500).json({ msg:error })
    }
}

const getTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await task.findone({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}

const deleteTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await task.findOneAndDelete({_id:taskID})

        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})

    } catch (error) {
        res.status(500).json({ msg:error })
    }

}

const updateTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })

        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
        deleteTask
}


