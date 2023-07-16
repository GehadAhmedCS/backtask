const fs=require("fs")

const addperson=(id,fname,lname,age,city)=>{
    const alldata=loaddata()

    // not to dublicate the data
    // we should use filter

    const doublicated=alldata.filter((obj)=>{
        return obj.id===id
    })
    console.log(doublicated)
    if (doublicated.length==0){
    alldata.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
    })
    // function of saving the all data
   savealldata(alldata)
  }
  else{
    console.log("error dublicated id")
 }

}

// create the function loaddata

const loaddata=()=>{
    try{
        // first convert the data from buffer to json
    const datajson=fs.readFileSync("data3.json").toString()
    // convert the json to object
    return JSON.parse(datajson)

    }catch{
        return []
    }
    
}


const savealldata=(alldata)=>{
    const savealldatajson=JSON.stringify(alldata)
    fs.writeFileSync("data3.json",savealldatajson)
}

// ///////////////////////////////////
// delete item

const deletdata= (id) =>{
    const alldata=loaddata()

    const datatokeep=alldata.filter((obj)=>{
        return obj.id !== id
    })
    console.log(datatokeep)
    savealldata(datatokeep)
}
// /////////////////////////red the data
// ////////////


const readdata=(id)=>{
    const alldata=loaddata()

    const itemneeded=alldata.find((obj)=>{
        return obj.id ==id 
    })
    console.log(itemneeded)
}


// //////////////////////////to list the data needed
// list

const listdata=()=>{
    const alldata=loaddata()
    alldata.forEach((obj) => {
        console.log(obj.fname,obj.lname,obj.city)
        
    });
}

module.exports={
    addperson,
    deletdata,
    readdata,
    listdata
}