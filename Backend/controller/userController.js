const userModel = require("../model/userModel")
const aws = require("aws-sdk")


    aws.config.update({
        accessKeyId: "AKIAY3L35MCRZNIRGT6N",
        secretAccessKey: "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",
        region: "ap-south-1"
    })

    let uploadFile = async (file) => {
        return new Promise(function (resolve, reject) {
            // this function will upload file to aws and return the link
            let s3 = new aws.S3({ apiVersion: '2006-03-01' }); // we will be using the s3 service of aws
    
            var uploadParams = {
                ACL: "public-read",
                Bucket: "classroom-training-bucket",
                Key: "abc/" + file.originalname,
                Body: file.buffer
            }
    
            s3.upload(uploadParams, function (err, data) {
                if (err) {
                    return reject({ "error": err })
                }
                console.log("file uploaded succesfully")
                return resolve(data.Location)
            })
    
        })
    }


exports.createUser = async (req, res) => {
    try {
        let data = req.body
        let files = req.files
        if (files.length!=0) {
            data.profilepic = await uploadFile(files[0])
        }
        if (Object.keys(data).length == 0) return res.status(400).send({ staus: false, message: "Pls provide data" })
        let createUser = await userModel.create(data)
        return res.status(201).send({ status: true, message: createUser })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

exports.getUser = async (req, res) => {
    try {
        let getUser = await userModel.find()
        return res.status(200).send({ status: true, message: getUser })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

exports.getUserById = async (req, res) => {
    try {
        let userId = req.params.userId
        let getUser = await userModel.findById(userId)
        return res.status(200).send({ status: true, message: getUser })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        let data = req.body
        let userId = req.params.userId
        let files = req.files
        if (files.length!=0) {
            data.profilepic = await createS3link(files)
        }
        let updateUser = await userModel.findByIdAndUpdate(userId, { $set: data }, { new: true })
        return res.status(200).send({ status: true, message: updateUser })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let userId = req.params.userId
        await userModel.findByIdAndDelete(userId)
        return res.status(200).send({ status: true, message: "Deleted Successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}