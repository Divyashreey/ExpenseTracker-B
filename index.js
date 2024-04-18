const express=require('express')
const cors = require('cors')

const mongoose=require('mongoose')
const bodyparser=require('body-parser');

const expenseRoutes=require('./routes/expenseRoutes')
const userRoutes=require('./routes/userRoutes')

const app= express()
app.use(bodyparser.json())
app.use(cors())

app.use('/expense',expenseRoutes)
app.use('/user',userRoutes)




async function connecttoDb(){
    try{
    await mongoose.connect('mongodb+srv://Divya:divya@cluster0.2bakogz.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0')
    console.log("mongo db is running in port 4000"); 
     const port=process.env.PORT||4000
     app.listen(port, function() {
        console.log(`Listening on port ${port}...`)
    })
}
catch(error){
    
console.log(error+" couldnt establish connection");
}}
connecttoDb()

