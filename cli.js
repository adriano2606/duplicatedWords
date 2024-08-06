import fs from 'fs';
import path from 'path';
import { getDuplicatedWordsList } from './index/processTextData.js'; 
import { processError } from './errors/erroProcessing.js';
import {outputDuplicatedWords, createFile} from './index/processResult.js';
import {Command} from 'commander';

const program = new Command();

program
    .version(`0.0.1`)
    .option('-t, --text <string>', '.txt source file that will be read')
    .action(options => {
        const {text} = options;
        if (!text) {
            console.error('Please, provide the source file')
            programa.help();
            return;
        }
        const sourcePath = path.resolve(text);

        try {
            processFile(sourcePath)
        } catch (error){
            console.log('Error on processing file', error);
        }
    })

program.parse();

function processFile (text){

    fs.readFile(text,'UTF-8', (error,data)=>{
        try{
            if (error) throw error
            const duplicatedWordsPerParagraph = getDuplicatedWordsList(data)
            const output = outputDuplicatedWords(duplicatedWordsPerParagraph)
            createFile(output)
        } catch (error){
            processError(error)
        }
    })



}