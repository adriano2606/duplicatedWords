import fs from 'fs';
import { getDuplicatedWords } from './processTextData.js'; 
import { processError } from './errors/erroProcessing.js';

const archiveToRead = process.argv[2]

fs.readFile(archiveToRead,'UTF-8', (error,data)=>{
    try{
        if (error) throw error
        console.log(getDuplicatedWords(data))
    } catch (error){
        processError(error)
    }
})
