'use strict'

//Переменные
let lang = prompt('Введите ru иди en'),
namePerson = prompt('Ввеите имя'),
daysArray = [{ru : 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье',
en: 'Monday, thuesday, wensday, thursday, friday, saturday, sunday'}];


//if else и выводы в консоль
if (lang == 'ru'){
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
}else if (lang == 'en'){
    console.log('Monday, thuesday, wensday, thursday, friday, saturday, sunday');
}else{
    console.log('Я же сказал пиши ru или en незачем отсебятину придумывать =Ъ');
}

//switch

switch(lang){
    case 'ru':
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log('Monday, thuesday, wensday, thursday, friday, saturday, sunday');
        break;
    default:
        console.log("Неверно");
}

//Вывод в консоль
console.log(daysArray[0][lang]);

//Тернарные операторы
let result = namePerson == 'Артем' ? 'Директор' : namePerson == 'Максим' ? 'Преподаватель' : 'Студент';
console.log(result);