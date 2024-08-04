function getParagraph(text){
    return text.split('\n')
}

function getWords(text){
    return text.split(' ')
}

function clearWord(word){
    return word.replace(/[!@#$%&*()_+-='"~|,.;/\r]/g, '')
}

function countDuplicatedWords(paragraph){
    const duplicatedWords = {}
    const words = getWords(paragraph)
    words.forEach(word => {
        const clearedWord = clearWord(word)
        duplicatedWords[clearedWord] = (duplicatedWords[clearedWord] || 0) + 1
    })
    return duplicatedWords
}

function getDuplicatedWords(text) {
     const paragraphList = getParagraph(text)
     const duplicatedWordsList = paragraphList.flatMap(paragraph => {
        return countDuplicatedWords(paragraph)
     })
     return duplicatedWordsList
}

export {getDuplicatedWords}