console.log("ayush");

const fs = require('fs');

fs.writeFile('write.txt','->file is created',
(err) => {
    console.log('created');
})

fs.appendFile('write.txt','-> data is appended or added ',
(err)=>{
    console.log('executed');
})


fs.readFile('write.txt',"utf-8",(err10,xyz)=>{ // (error[err],data of the readed file )
console.log('done');
console.log(err10);

console.log(xyz);
})
