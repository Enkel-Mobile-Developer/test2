import fsp from 'fs/promises'

async function newArray (array){

    const data_file = await fsp.readFile('./data.csv', 'utf8') 
    var array = data_file.split(/\r?\n/);  
    let result = array.filter((element, i, ar) => ar.indexOf(element) === i);
   return result      
}


const display = await newArray('./data.csv')

console.log(display);