import fs from 'fs'

function filterForDuplicatedWords(paragraphCount){
    return Object.keys(paragraphCount).filter(word => paragraphCount[word] > 1)
}

function outputDuplicatedWords(paragraphList){
    let output = ''
    paragraphList.forEach((paragraph, index) => {
        const duplicatedWords = filterForDuplicatedWords(paragraph)
        const duplicatedWordsWithCount = duplicatedWords.map(word => {
            return `${word}(${paragraph[word]})`
        })
        if (duplicatedWordsWithCount.length){
            output += `Repeated Words in paragraph ${index + 1}: ${duplicatedWordsWithCount.join(', ')}\n`
        }
    })

    if (!output){
        return 'That is great! There are no repeated words!!'
    }
    
    return output
}

async function createFile(content){
    const archiveRead = process.argv[2].replace('./archives/','')
    const pathToSave = './results'
    const totalArchivesOnDir = fs.readdirSync(pathToSave).length
    const newFilePath = `${pathToSave}/result${totalArchivesOnDir+1}-${archiveRead}`
    try{
        await fs.promises.writeFile(newFilePath,content)
        console.log(`File sucessfully created!\nFile path:${newFilePath}`);
    } catch (error){
        console.log(error);
    }
}

export {outputDuplicatedWords, createFile}