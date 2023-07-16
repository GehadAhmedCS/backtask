// const { Module } = require("module")

// const fname="gehad"
// const lname="ahmed"
// module.exports = fname
// module.exports = lname

//this way of export is not right 
// becouse the export get the final export

const fname="gehad"
const lname="ahmed"
function sum(x,y,z){
    console.log(x+y+z)
}
module.exports={
    f1name:fname,
    l1name:lname,
    function1:sum
}