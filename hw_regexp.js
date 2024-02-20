var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"dmitro.porohov111@yahoo.com" // Нам такі не підходять
    }
];
var valid = [];
var re = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)?@(yahoo.com|gmail.com)$/
for (let i = 0;i < arr.length; i++){
    if (re.test(arr[i].email)) {
        valid.push(arr[i].email)
    }
}
console.log(valid);
