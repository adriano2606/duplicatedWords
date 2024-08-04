import fs from 'fs';
import { getDuplicatedWords } from './processTextData.js'; 

const archiveToRead = process.argv[2]

fs.readFile(archiveToRead,'UTF-8', (error,data)=>{
    try{
        console.log(getDuplicatedWords(data))
    } catch (error){

    }
})
