


const stringBuilder = () => {
    let string = ''
    
    return function builder(text) {
        string+=text
        return string+=' '
    }
}


const builder = stringBuilder()

console.log(builder('hey'))
console.log(builder('anas'));
console.log(builder('welcome!'));