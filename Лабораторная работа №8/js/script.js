function getRandomIntNumber(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBtnDinnerOnCLickListener() {
    document.getElementById("1").textContent = "";
    document.getElementById("2.1").textContent = "";
    document.getElementById("2.2").textContent = "";
    document.getElementById("3").textContent = "";

    const count = +prompt('Кол-во человек:');
    let mems = [];
    let mem = "";

    for (let i = 0; i < count; i++) {
        mem = prompt('Имя:');
        mems[i] = mem;
    }
    document.getElementById("4").textContent = "Ужин оплачивает " + mems[Math.floor(Math.random() * mems.length)];
}

function setBtnYearOnCLickListener() {
    document.getElementById("1").textContent = "";
    document.getElementById("2.1").textContent = "";
    document.getElementById("2.2").textContent = "";
    document.getElementById("4").textContent = "";

    const year = +prompt('Год:');
    
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("3").textContent = `${year} - високосный`;
    } else {
        document.getElementById("3").textContent = `${year} - не високосный`;
    }
}

function setBtnBMIOnCLickListener() {
    document.getElementById("1").textContent = "";
    document.getElementById("4").textContent = "";
    document.getElementById("3").textContent = "";

    const weight = +prompt('Вес(кг):');
    const height = +prompt('Рост(см):');
    const bmi = Math.round(weight / (Math.pow(height / 100, 2)));
    let result = "";

    switch(true) {
        case bmi <= 18.5:
            result = "Недостаточный вес";
            break;
        case (bmi > 18.5 &&  bmi <= 25):
            result = "Нормальный вес";
            break;
        case (bmi > 25 &&  bmi <= 30):
            result = "Излишек веса";
            break;
        case bmi > 30:
            result = "Ожирение";
            break;
        default:
            result = "ОШИБКА"
            break;
    }
    document.getElementById("2.1").textContent = `ИМТ: ${bmi}`;
    document.getElementById("2.2").textContent = `Результат: ${result}`;
}

function setBtnLoveOnCLickListener() {
    document.getElementById("4").textContent = "";
    document.getElementById("2.1").textContent = "";
    document.getElementById("2.2").textContent = "";
    document.getElementById("3").textContent = "";

    const man = prompt('Его имя:');
    const woman = prompt('Ее имя:');
    let result = getRandomIntNumber();

    document.getElementById("1").textContent = `${man} подходит к ${woman} на ${result} %!`
}