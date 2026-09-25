const fs=require('fs')
fs.writeFile("std.txt","Name:Utkarsh",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File created")
    }
})
fs.readFile('std.txt','utf8',(err,data)=>{
    if(err){
        console.log(`Unsuccesful${err}`)
    }
    else{
        console.log(`File has been read${data}`)
    }
})
fs.appendFile(
    "std.txt",
    "\nAge:28",
    (err,data)=>{
        if(err){
            console.log(err)
        }
        else{
           
                console.log('Data appended');
        }

    }
    

)
fs.unlink('std.txt', (err) => {
    if (err) {
            console.log(`Error deleting file: ${err}`);
     } else {
         console.log('File deleted successfully');
    }
})