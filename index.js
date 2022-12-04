const c_c = require("color-mixer");

const express= require("express");

const app = express()
const port = 9000;

app.use('/',(req,res)=>{
    
    
    var col1='#'+req.query.col1    
    var col2='#'+req.query.col2

    console.log(col1,col2)

    var red =new c_c.Color({hex:col1})
    var blue = new c_c.Color({hex:col2})    

    var mixed = new c_c.Color({mix:[red,blue]})    
    
    res.json({result:mixed.hex()})
})

app.listen(9000, ()=>{
    console.log('listening on port 9000')
})