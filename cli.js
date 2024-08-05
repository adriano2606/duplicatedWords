import fs from 'fs';
import { getDuplicatedWordsList } from './index/processTextData.js'; 
import { processError } from './errors/erroProcessing.js';
import {outputDuplicatedWords, createFile} from './index/processResult.js'

const archiveToRead = process.argv[2]

fs.readFile(archiveToRead,'UTF-8', (error,data)=>{
    try{
        if (error) throw error
        const duplicatedWordsPerParagraph = getDuplicatedWordsList(data)
        const output = outputDuplicatedWords(duplicatedWordsPerParagraph)
        createFile(output)
    } catch (error){
        processError(error)
    }
})