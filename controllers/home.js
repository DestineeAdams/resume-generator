module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    
    postIndex: (req,res) => {
        console.log(req.body)
    }
}