const mongoose = require('mongoose')

// module.exports = new mongoose.Schema({
//     sid:String,
//     sems1:Array,
//     sems2:Array,
//     sems3:Array,
//     sems4:Array,
//     sems5:Array,
//     sems6:Array

// })
const schemaObj = {
    sid:String,
    sems1:Array,
    sems2:Array,
    sems3:Array,
    sems4:Array,
    sems5:Array,
    sems6:Array
}

const countSchemas = {}
countSchemas.library = new mongoose.Schema(schemaObj)

countSchemas.food = new mongoose.Schema(schemaObj)

countSchemas.shower = new mongoose.Schema(schemaObj)

countSchemas.hotwater = new mongoose.Schema(schemaObj)

module.exports = countSchemas