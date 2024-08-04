function processError(error){
    if (error.code === 'ENOENT'){
        throw new Error('No such file or direcctory to be read')
    }
    throw new Error('Application error')
}

export {processError}