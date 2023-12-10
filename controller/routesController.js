// const buy = require("../views/buy")

const functionME = async(req,res)=>{
    res.end("hello from controller")
}
const { STRIPE_PUB_KEY, STRIPE_SECRET_KEY } = process.env;
const renderPage = async(req,res)=>{
    try{
        res.render('buy',{
            key: STRIPE_PUB_KEY,
            amount: 2500
        })
    }
    catch(err){
        console.log(err);
    }
}


module.exports = functionME