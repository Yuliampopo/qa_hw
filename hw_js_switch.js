let quantity = 3;
let unit = 'kg';
switch (unit) {
    case 'km':
        console.log(quantity + ' км це ' + quantity * 1000 + ' м');
        break;
    case 'h':
        console.log(quantity + ' год це ' + quantity * 60 + ' хв');
        break;
    case 'kg':
        console.log(quantity + ' кг це ' + quantity * 1000 + ' гр');
        break;
    default:
        console.log('Одиниця вимірювання не підтримується');
}