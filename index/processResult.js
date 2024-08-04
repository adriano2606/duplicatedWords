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
    console.log(output);
    return output
}

export {outputDuplicatedWords}