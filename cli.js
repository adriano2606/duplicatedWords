import fs from 'fs';
import { getDuplicatedWordsList } from './index/processTextData.js'; 
import { processError } from './errors/erroProcessing.js';
import {outputDuplicatedWords} from './index/processResult.js'

const archiveToRead = process.argv[2]

fs.readFile(archiveToRead,'UTF-8', (error,data)=>{
    try{
        if (error) throw error
        const duplicatedWordsPerParagraph = getDuplicatedWordsList(data)
        outputDuplicatedWords(duplicatedWordsPerParagraph)
    } catch (error){
        processError(error)
    }
})