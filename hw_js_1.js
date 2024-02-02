let age = prompt("Скільки тобі років?", "18");
if ((Number(age) !== Number(age)) || (Number(age) <= 0)) {
    console.log("Некоректно введені дані")
} else {
    a = age % 100;
    if (a >= 5 && a <= 20) {
        console.log(age + " років");
    } else {
        b = age % 10;
        if (b === 1) {
            console.log(age + " рік");
        } else if (b >= 2 && b <= 4) {
            console.log(age + " роки");
        } else console.log(age + " років");
    }
}