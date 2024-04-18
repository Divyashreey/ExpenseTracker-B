const mongoose=require('mongoose')

const expenseDetailSchema=new mongoose.Schema({
    amount:{
        type:Number
    },
    category:{
        type:String
    },
    date:{
        type:String
    },
    userID:{
        type:String
    }
},{versionKey:false})

const Expense = mongoose.model('ExpenseDetails',expenseDetailSchema)
module.exports={Expense}