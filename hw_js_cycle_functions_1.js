//Варіант 1
function drawTriangle(height, symbol) {
    let line = '';
    for (let i = 1; i <= height; i++){
        console.log(line += symbol);
    }
}
drawTriangle(5, '*')
//Варіант 2
function drawTriangles(height, symbol) {
    let line = '';
    let i = 1;
    while (i <= height) {
        console.log(line += symbol);
        i++;
    }
}
drawTriangles(5, '*')

