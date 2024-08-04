function getParagraph(text){
    return text.split('\n')
}

function getWords(text){
    return text.split(' ')
}

function clearWord(word){
    return word.replace(/[!@#$%&*()_+-='"~|,.;/\r]/g, '')
}

function countWords(paragraph){
    const duplicatedWordsObject = {}
    const words = getWords(paragraph)
    words.forEach(word => {
        if (word.length > 2){
            const clearedWord = clearWord(word).toLowerCase()
            duplicatedWordsObject[clearedWord] = (duplicatedWordsObject[clearedWord] || 0) + 1
        }
    })
    return duplicatedWordsObject
}

function getDuplicatedWordsList(text) {
     const paragraphList = getParagraph(text)
     const duplicatedWordsList = paragraphList.flatMap(paragraph => {
        return countWords(paragraph)
     })
     return duplicatedWordsList
}

export {getDuplicatedWordsList}