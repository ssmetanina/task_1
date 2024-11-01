// создаем переменные x,y,z из странички

const xInput = document.getElementById('x');
const yInput = document.getElementById('y');
const zInput = document.getElementById('z');

// создаем переменную для отражения результата
const result = document.getElementById('result')
const check_bt = document.getElementById('check');
const send_bt = document.getElementById('send');

//проверяем, существует ли треугольник


function check_func() {
    // преобразуем значения в числа
    const x = parseFloat(xInput.value);
    const y = parseFloat(yInput.value);
    const z = parseFloat(zInput.value);

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
        result.value = 'Существует и является прямоугольным';
        send_bt.disabled = false;
    }
    else {
        result.value = 'Существует, но не является прямоугольным';
        send_bt.disabled = false;
    } 
} else {
        result.value = 'Не существует';
        send_bt.disabled = true;;
    }
}

function send_func() {
    if (result.value==='Существует и является прямоугольным' || result.value ==='Существует, но не является прямоугольным')
    {document.getElementById('form_task').submit();
    } 
    else {
        alert('Попробуйте ввести другие числа');
    }
}


check.addEventListener('click', check_func);
send.addEventListener('click', send_func)