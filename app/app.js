const express = require('express');
const router = require('../router/router');
const { route } = require('../router/router');
const app = express();

//use middleware to parse json payloads into our request model
app.use(express.json());
//reg.body.username req.body.password

//servce actuator - calling local host 3000
app.get('/', (req,res)=>{
res.status(200).json({message: 'service is up'});
});

//use middleware to define router
app.use('/exercise', router);

//use middleware to handle errors and bad url paths
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status=404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        }
    })
})
module.exports = app;


