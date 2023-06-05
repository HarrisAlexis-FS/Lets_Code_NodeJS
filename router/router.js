const express = require('express');
const router = express.Router();

//http://localhost:3000/exercise
router.get('/', (req,res, next)=>{
res.status(200).json({
    message: 'Successful - GET',
    metadata: {
        hostname: req.hostname,
        method: req.method,
    },
});
});

router.get("/:id", (req,res, next) => {
    const id = req.params.id
    res.status(200).json({
        message: "successful -GET by ID",
        id: id,
        metadata: {
            hostname:req.hostname,
            method: req.method,
        },
        });
        });

router.put("/example/:id", (req, res)=>{
    const example = req.params.example
    const id = req.params.id
    res.status(200).json({
        message: 'successful -PUT by ID',
        example: example,
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
        });
        });

router.post("/icecream", (req, res)=>{
    const icecream = req.body
    res.status(200).json({
        message: 'successful -POST by ID',
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
        });
        });

router.delete("/tacos/:id", (req, res, next)=>{
    const id = req.params.id
    res.status(200).json({
        message: 'successful -DELETE by ID',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
        });
        });


module.exports = router;