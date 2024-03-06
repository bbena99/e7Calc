var express = require('express');
const { charList } = require('../data/constant');
var router = express.Router();

/* GET users listing. */
router.get('/',(req, res, next)=>{
  res.status(200).send(JSON.stringify(charList));
});
router.get('/:nameNoSpace',(req,res,next)=>{
  charList.forEach(c=>{
    if(c.nameNoSpace===req.params.nameNoSpace)res.status(200).send(c)
  })
  res.status(404).send("ERROR: Did not find character by the name='"+req.params.nameNoSpace+"'")
})

module.exports = router;
