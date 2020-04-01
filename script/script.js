'use strict'
let randomName = prompt('Напишите что-нибудь');

function chooseName(prompt){
    prompt = prompt.trim();
    if (prompt !== String(prompt)){
        console.log('Данное значение не явяется строкой');
    }else if(prompt.length > 30){
        prompt = prompt.slice(0,30)
        prompt += '...'
        console.log(prompt);
    }else{
        console.log(prompt);
    }
    
    return;
};

chooseName(randomName);