const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
const {addNewExpense,deleteExpense,getExpense,updateExpense}=require('../controllers/expenseController')

const secretKey='d9i0v4y70ash90r4ee64'

function authenticateToken(request,response,next){
    try{
        const authHeader=request.headers.authorization
        const accessToken=authHeader && authHeader.split(' ')[1]
        
        if(accessToken){
        jwt.verify(accessToken,secretKey,(error,userDetails)=>{
            if(error){
                response.status(403).json({
                    "status":"failure",
                    "message":"access denied"
                })
            }else{
            next()
            }
        })
        
        }else{
            response.status(401).json({
                "status":"failure",
                "message":"access denied"
            })
        }
    }catch(error){
    response.status(401).json({
        "status":failure,
        "message":"access denied"
    })
    }
    }
    

router.post('/new/:userID',authenticateToken,addNewExpense)
 router.get('/all/:userID', authenticateToken,getExpense)
 router.delete('/delete/:id',authenticateToken,deleteExpense)
 router.patch('/update/:id',authenticateToken,updateExpense )

 module.exports=router