const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllJobs = async (req,res) =>{
    req.send('get all jobs')
}

const getJob = async (req,res) =>{
    req.send('get a single jobs')
}

const createJob = async (req,res) =>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
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