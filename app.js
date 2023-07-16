const fs=require("fs")


/////////////////////////task2//////////////////////
const yargs=require("yargs")


const taskdata=require("./taskdata")

yargs.command({
    command:"add",
    describe:"to add an item",
    builder:{
        id:{
            describe:"to add an id",
            demandOption:true,
            type:"float"

        },
        fname:{
            describe:"to add an first name",
            demandOption:true,
            type:"string"

        },
        lname:{
            describe:"to add an last name",
            demandOption:true,
            type:"string"

        },
        age:{
            describe:"to add the age",
            demandOption:true,
            type:"float"

        },
        city:{
            describe:"to add the city",
            demandOption:true,
            type:"string"

        }

    },

    handler:(x)=>{
        taskdata.addperson(x.id ,x.fname,x.lname,x.age,x.city)
    }
})


// 
yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler:(x)=>{
        taskdata.deletdata(x.id)
    }
})

// ////////////to read the data 

yargs.command({
    command:"read",
    describe:"to read the data",
    builder:{
        id:{
            describe:"this is id describtion",
            // demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        taskdata.readdata(x.id)
    }
})


// /////////////////////////list the data
// ///3

yargs.command({
    command:"list",
    describe:"to list the data",
    
    handler:(x)=>{
        taskdata.listdata()
    }
})


// /to delete in the terminal node app.js delete --id="4"

// console.log(yargs.argv)
// the same as this but show the result one single time
yargs.parse()




























// task1 

// 1 create an object person 
const person={
    fname:"ahmed",
    lname:"hossam",
    age:"20",
    city:"alex"

}

// 2 change the object to json 

const personjson=JSON.stringify(person)
console.log(personjson)

// 3 store in file 
fs.writeFileSync("data.json",personjson)
// 4 read file(json)
console.log(fs.readFileSync("data.json").toString())

// 5 convert to obj
const personobj=JSON.parse(personjson)
console.log(personobj)

// 6 update the data 
person.fname="adel"
person.lname="ahmed"
person.age=40
person.city="cairo"

// convert the obj to json 

const person2json=JSON.stringify(person)

console.log(person2json)

fs.writeFileSync("data2.json",person2json)