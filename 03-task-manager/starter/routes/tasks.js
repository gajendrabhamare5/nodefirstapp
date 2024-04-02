const express = require ('express')
const router = express.Router()



/* router.get('/', (req, res) => { */
    const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

    router.route('/').get(getAllTasks).post(createTask)
    router.route('./').get(getTask).patch(updateTask).delete(deleteTask)
   /*  res.send('Hello, World!');

  }); */

module.exports = router;
