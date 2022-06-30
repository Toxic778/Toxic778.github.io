var birthday = prompt(`Напишите день рождения`)
if (birthday >= 16 && birthday < 31) {
    alert(`Ваш день рождения ${birthday}, вторая половина месяца`)
}
else if (birthday >= 1 && birthday < 16) {
    alert(`Ваш день рождения ${birthday}, первая половина месяца`)
}
else {
    alert(`error`)
}
var month = prompt(`Ваш месяц рождения цифрой`)
    if (month == 1) {
        alert(`Ваш месяц рождения - январь`)
    }
    else if (month == 2) {
        alert(`Ваш месяц рождения - февраль`)
    }
    else if (month == 3) {
        alert(`Ваш месяц рождения - март`)
    }
    else if (month == 4) {
        alert(`Ваш месяц рождения - апрель`)
    }
    else if (month == 5) {
        alert(`Ваш месяц рождения - май`)
    }
    else if (month == 6) {
        alert(`Ваш месяц рождения - июнь`)
    }
    else if (month == 7) {
        alert(`Ваш месяц рождения - июль`)
    }
    else if (month == 8) {
        alert(`Ваш месяц рождения - август`)
    }
    else if (month == 9) {
        alert(`Ваш месяц рождения - сентябрь`)
    }
    else if (month == 10) {
        alert(`Ваш месяц рождения - октябрь`)
    }
    else if (month == 11) {
        alert(`Ваш месяц рождения - ноябрь`)
    }
    else if (month == 12) {
        alert(`Ваш месяц рождения - декабрь`)
    }
    else {
        alert(`Месяц написан неверно или не написан вообще...`)
    }

document.querySelector('#button').addEventListener('click', () => {
    let day_resultbox = document.querySelector('#input_day').value;
    let month_resultbox = document.querySelector('#input_month').value;

    let aries = 'Вы по гороскопу <b>Овен</b>'
    let taurus = 'Вы по гороскопу <b>Телец</b>'
    let gemini = 'Вы по гороскопу <b>Близнецы</b>'
    let cancer = 'Вы по гороскопу <b>Рак</b>'
    let leo = 'Вы по гороскопу <b>Лев</b>'
    let virgo = 'Вы по гороскопу <b>Дева</b>'
    let libra = 'Вы по гороскопу <b>Весы</b>'
    let scorpius = 'Вы по гороскопу <b>Скорпион</b>'
    let saggitarius = 'Вы по гороскопу <b>Стрелец</b>'
    let capricornus = 'Вы по гороскопу <b>Козерог</b>'
    let aquarius = 'Вы по гороскопу <b>Водолей</b>'
    let pisces = 'Вы по гороскопу <b>Рыбы</b>'
    let message_error = 'Не понимаю, кто вы...'

    if (day_resultbox > 20 && day_resultbox <= 31 && month_resultbox == 3) {
        document.querySelector('#result_box').innerHTML = aries;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 20 && month_resultbox == 4) {
        document.querySelector('#result_box').innerHTML = aries;
    }
    else if (day_resultbox > 20 && day_resultbox <= 30 && month_resultbox == 4) {
        document.querySelector('#result_box').innerHTML = taurus;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 20 && month_resultbox == 5) {
        document.querySelector('#result_box').innerHTML = taurus;
    }
    else if (day_resultbox > 20 && day_resultbox <= 31 && month_resultbox == 5) {
        document.querySelector('#result_box').innerHTML = gemini;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 21 && month_resultbox == 6) {
        document.querySelector('#result_box').innerHTML = gemini;
    }
    else if (day_resultbox > 21 && day_resultbox <= 30 && month_resultbox == 6) {
        document.querySelector('#result_box').innerHTML = cancer;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 22 && month_resultbox == 7) {
        document.querySelector('#result_box').innerHTML = cancer;
    }
    else if (day_resultbox > 22 && day_resultbox <= 31 && month_resultbox == 7) {
        document.querySelector('#result_box').innerHTML = leo;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 22 && month_resultbox == 8) {
        document.querySelector('#result_box').innerHTML = leo;
    }
    else if (day_resultbox > 22 && day_resultbox <= 31 && month_resultbox == 8) {
        document.querySelector('#result_box').innerHTML = virgo;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 22 && month_resultbox == 9) {
        document.querySelector('#result_box').innerHTML = virgo;
    }
    else if (day_resultbox > 22 && day_resultbox <= 30 && month_resultbox == 9) {
        document.querySelector('#result_box').innerHTML = libra;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 22 && month_resultbox == 10) {
        document.querySelector('#result_box').innerHTML = libra;
    }
    else if (day_resultbox > 22 && day_resultbox <= 31 && month_resultbox == 10) {
        document.querySelector('#result_box').innerHTML = scorpius;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 21 && month_resultbox == 11) {
        document.querySelector('#result_box').innerHTML = scorpius;
    }
    else if (day_resultbox > 21 && day_resultbox <= 30 && month_resultbox == 11) {
        document.querySelector('#result_box').innerHTML = saggitarius;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 21 && month_resultbox == 12) {
        document.querySelector('#result_box').innerHTML = saggitarius;
    }
    else if (day_resultbox > 21 && day_resultbox <= 31 && month_resultbox == 12) {
        document.querySelector('#result_box').innerHTML = capricornus;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 19 && month_resultbox == 1) {
        document.querySelector('#result_box').innerHTML = capricornus;
    }
    else if (day_resultbox > 19 && day_resultbox <= 31 && month_resultbox == 1) {
        document.querySelector('#result_box').innerHTML = aquarius;
    }
    else if (day_resultbox >= 1 && day_resultbox <= 19 && month_resultbox == 2) {
        document.querySelector('#result_box').innerHTML = aquarius;
    }
    else if (day_resultbox > 19 && day_resultbox <= 29 && month_resultbox == 2) {
        document.querySelector('#result_box').innerHTML = pisces;
    }
    else if (day_resultbox < 21 && day_resultbox >= 1 && month_resultbox == 3) {
        document.querySelector('#result_box').innerHTML = pisces;
    }
    else {
        document.querySelector('#result_box').innerHTML = message_error;
    }
      //  document.querySelector('#result_box').innerHTML += day_resultbox;
})

