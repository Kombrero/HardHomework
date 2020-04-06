// let day;

// function getWeekDay(date){
//     let date = new Date();
//     let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', '<i>'+'Суббота'+'</i>', '<i>'+'Воскресенье'+'</i>'];
//     day = date.getDate();

//     return week[day];
// }
// let date = new Date();
// getWeekDay(date);
// console.log('getWeekDay(date);: ', getWeekDay(date));

// console.log(day);
// for (i = 0; i < week.length; i++) {
    
//     document.write(week[i] + '<br>' );
// }
let week = ['<i>' + 'Воскресенье' + '</i>', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', '<i>' + 'Суббота' + '</i>'];

function getWeekDay(date) {
    date = date || new Date();
    
    let day = date.getDay();

    return week[day];
}

let date = new Date();

for (i = 0; i < week.length; i++) {
    if (week[i] === getWeekDay(date)){
        document.write('<b>' + week[i] + '</b>' + '<br>')
    }else{
        document.write(week[i] + '<br>' );
    }
        
    }


