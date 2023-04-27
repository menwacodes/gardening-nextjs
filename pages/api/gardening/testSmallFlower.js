const TestCreate = require("../../../models/testModel")

exports.createTest = async(req,res) => {
    try {
        const newTest = await TestCreate.create(req.body)
        res.status(201).json({status: "success", data: {data: newTest}})
    } catch(error) {
        console.error(error)
        res.status(400).json({status: "failure", message: error})
    }
}