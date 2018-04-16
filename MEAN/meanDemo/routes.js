const express = require('express');
const router = express.Router();

const Item = require('./item_schema');

router.get('/items', (req,res,next) =>{
    Item.find((err,items)=>{
        if(err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

router.post('/item', (req,res, next) =>{
    console.log(req.body);
    let newItem = new Item ({
        itemName: req.body.itemName,
        itemDone: req.body.itemDone
    }); 
    newItem.save((err)=>{
        if(err){res.json(err)}
        else{res.json({message: "Item added successfully."})};
    });
});

router.put('/item/:id', (req,res,next)=>{
    Item.findOneAndUpdate({_id: req.params.id}, 
        {
            itemDone: req.body.itemDone
        },
        (err, result) => {
            if(err) {
                res.json(err);
            } else {
                res.json("succeeded")
            }
        }
    );
});

router.delete('/item/:id', (req,res,next)=>{
    console.log("reached delete");
    Item.remove({
        _id: req.params.id
        },
        (err,results)=>{
            if(err){
                res.json(err);
            } else {
                res.json(results);
            }
        }
    );
});

module.exports = router;