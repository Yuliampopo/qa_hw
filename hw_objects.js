//Задача 1
var beer = {
    name: "Opillia",
    price: 22,
    country_of_origin: "Ukraine",
    getInfo: function() {
    for (let key in this){
        console.log(key + ': ' + this[key]);
    }
 }
}
beer.getInfo();
beer.type = 'lager';
beer.city_of_origin = 'Ternopil';
beer.getInfo();
//Задача 2
var services = {
    hair_dress: "60 грн",
    shaving: "80 грн",
    head_washing: "100 грн",
    price: function () {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] != 'function') {
                sum += parseInt(this[key]);
            }
        }
        console.log(sum);
    },
    minPrice: function () {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] != 'function' && parseInt(this[key]) < min) {
                min = parseInt(this[key])
            }
        }
        console.log(min);
    },
    maxPrice: function () {
        let max = -1;
        for (let key in this) {
            if (typeof this[key] != 'function' && parseInt(this[key]) > max) {
                max = parseInt(this[key])
            }
        }
        console.log(max);
    }
}
services.price();
services.minPrice();
services.maxPrice();
services.crash_glass = "200 грн"
services.wash_hands = "20 грн"
services.price();
services.minPrice();
services.maxPrice();