function setBtnOnCLickListener_get_results() {
    
    var first = document.getElementById("first_number").value;
    var second = document.getElementById("second_number").value;
    var str = document.getElementById("str").value;

    if(first == 0) {
        document.getElementById("first_number").value = 0
        first = 0
    }
    if(second == 0) {
        document.getElementById("second_number").value = 0
        second = 0
    }

    let x = document.getElementById('answer');
	x.style.display = "block"

    document.getElementById("1").textContent = "Число 1) " + first + ", число 2) " + second;
    document.getElementById("2").textContent = first + " + " + second + " = " + (parseFloat(first) + parseFloat(second));
    document.getElementById("3").textContent = first + " - " + second + " = " + (parseFloat(first) - parseFloat(second));
    document.getElementById("4").textContent = first + " * " + second + " = " + (parseFloat(first) * parseFloat(second));
    document.getElementById("5").textContent = first + " / " + second + " = " + (parseFloat(first) / parseFloat(second));
    document.getElementById("6").textContent = first + " % " + second + " = " + (parseFloat(first) % parseFloat(second));
    document.getElementById("7").textContent = "Возведение в квадрат: 1)" +Math.pow(first, 2) +" 2)" +Math.pow(second, 2);
    document.getElementById("8").textContent = "Корень числа: 1) " + Math.sqrt(first) + " 2) " +Math.sqrt(second);
    document.getElementById("9").textContent = "Модуль числа: 1) " + Math.abs(first) + "  2) " +Math.abs(second);

    document.getElementById("10").textContent = "Строка: " + str;
    document.getElementById("11").textContent = "Верхний регистр: " + str.toUpperCase();
    document.getElementById("12").textContent = "Нижний регистр: " + str.toLowerCase();
}

function setBtnOnCLickListener_erase() {
    let x = document.getElementById('answer');
	x.style.display = "none"

    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("str").value = "";
}