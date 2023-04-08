
const fs = require('fs');

console.log("coding");

//fs.mkdirSync("new_file.txt");

//to create file in another folder 
//fs.writeFileSync('new_file_here/jainas.txt',"This is the new created file ") ;

// fs.appendFileSync('jains.txt' , '-->the data is added in the jains file' );

// const a = fs.readFileSync('jains.txt',"utf8");

// console.log(a);

// fs.renameSync('jains.txt','mybio.txt');

// fs.unlinkSync("new_file.txt");

fs.rmdirSync("new_file1.txt");

