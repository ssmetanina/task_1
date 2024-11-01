// создаем переменные x,y,z из странички

const x = parseInt(document.getElementById('x').innerText)
const y = parseInt(document.getElementById('y').innerText)
const z = parseInt(document.getElementById('z').innerText)

// создаем переменные для отражения результата
const result = document.getElementById('check');

//проверяем, существует ли треугольник


function checkTriangle() {
    if (x + y > z && x + z > y && y+z>x) {
        console.log('Существует');

//определение самой длинной стороны
        let a, b, c;
        if (x > y && x > z) {
            a = x; b = y; c=z;
        }
        else if (y>x && y>z) {
            a=y; b=x; c=z
        } else {
            a=z; b=x;c=y;
        }

        //проверяем, является ли прямоугольным

    if (Math.abs(a**2 - (b**2 + c**2))<1e-10) {
        result1 = 'Существует и является прямоугольным';
        document.getElementById('result1').innerText = result1;
    }
    else {
        result1 = 'Существует, но не является прямоугольным';
        document.getElementById('result1').innerText = result1;
    } 
} else {
        result1 = 'Не существует';
        document.getElementById('result1').innerText = result1;
    }
}



result.addEventListener('click', checkTriangle);