  'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


let startGameBot = function(){
  let randomNumber = Math.ceil(Math.random() * 100);
  console.log(randomNumber);
  function getAsk(question) {
    let userEnterNumber = prompt(question);
  if(userEnterNumber === null){
    return 'Игра окончена';
  }else if(userEnterNumber === "" || !isNumber(userEnterNumber)){
    return getAsk('Введи число')
  }else if (userEnterNumber < randomNumber) {
    return getAsk('Загаданное число больше');
  }else if (userEnterNumber > randomNumber) {
    return getAsk('Загаданное число меньше');
  }else {
    return 'Поздравляю вы угадали';
  };
  };
  alert(getAsk('Угадай число 1 - 100'));
};
startGameBot();


