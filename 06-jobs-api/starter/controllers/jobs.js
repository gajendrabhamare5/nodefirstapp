
const getAllJobs = async (req,res) =>{
    req.send('get all jobs')
}

const getJob = async (req,res) =>{
    req.send('get a single jobs')
}

const createJob = async (req,res) =>{
    req.send('create njobs')
}

const updateJob = async (req,res) =>{
    req.send('update jobs')
}

const deleteJob = async (req,res) =>{
    req.send('delete jobs')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,

}