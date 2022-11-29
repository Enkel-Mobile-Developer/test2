import fsp from 'fs/promises'

async function find_uniqueValues (input_file){

    const data_file = await fsp.readFile(input_file, 'utf8') 
    const clear_data = data_file.split(/\r?\n/);  
    const unique_values = input_file.filter ((element, i, values) => ar.indexOf(element) === i);
   return result      
}


const display_result = await find_uniqueValues ('./data.csv')

console.log(display_result);
