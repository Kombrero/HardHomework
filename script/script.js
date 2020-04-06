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


