function pow(number, expo) {
    let result = number;
    for (let i = 1; i < expo; i++){
        result *= number;
    }
    return result
}
console.log(pow(2,8))
