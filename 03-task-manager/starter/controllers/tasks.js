
const getAllTasks = (req,res)=>{
    res.send('grt all task')
}

const createTask =(req,res) =>{
    res.json('req.body')
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


module.export = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}