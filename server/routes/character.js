var express = require('express');
const { charList } = require('../data/constant');
var router = express.Router();

/* GET users listing. */
router.get('/:nameNoSpace',(req,res,next)=>{
  let char = undefined;
  charList.forEach(c=>{
    if(c.nameNoSpace===req.params.nameNoSpace){
      char = c;
    }
  })
  char
    ?res.status(200).send(char)
    :res.status(404).send("ERROR: Did not find character by the name='"+req.params.nameNoSpace+"'")
})
router.get('/',(req, res, next)=>{
  res.status(200).send(JSON.stringify(charList));
});

module.exports = router;
