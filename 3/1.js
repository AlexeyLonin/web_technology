// Запрос и вывод в Alert
function temp(cTemp) {
    alert("Температура по Фаренгейту: " + ((cTemp * 9) / 5 + 32));
}
var hTemp = prompt("Введите температуру в градусах Цельсия:");
temp(hTemp);

// Запрос и вывод на странице
function result() {
    var x, y, z;
    x = document.getElementById("degrees").value;
    x = parseInt(x);

    y = ((x * 9) / 5) + 32;

    z = (x + " градусов Цельсия -  это " + y + " градусов по Фаренгейту");

    document.getElementById("out").innerHTML = z;
}
