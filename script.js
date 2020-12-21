// SELECTORS:

const txt = document.querySelector("#txt");

const C = document.querySelector('button:nth-child(2)');

const dot = document.querySelector('button:nth-child(17)');

const del = document.querySelector('button:nth-child(18)');

const equal = document.querySelector('button:nth-child(19)');

alert("Hi, My name is:\nMahmoud Nasr\nI wish you enjoy with my project 😊");

// EVENTS LISTENERS:

const clear = () => {

  txt.value = '';

};

C.addEventListener("click",clear);

dot.addEventListener("click", () => {

  const lastChar = txt.value.substring(txt.value.length - 1, txt.value.length);

  if(lastChar == '.'){

    

  }else{

   txt.value += '.';

  }

});

del.addEventListener("click", () => {

  txt.value = txt.value.substring(0, txt.value.length - 1);

});

equal.addEventListener("click", () => {

  if(txt.value.substring(txt.value.length -2, txt.length) == '/0'){

    syntax();

    txt.value = '0';

  }

  txt.value = eval(txt.value);

});

// FUNCTIONS:

function num(num){

  txt.value += +num;

}

function opt(opt){

  const lastChar = txt.value.substring(txt.value.length - 1, txt.value.length);

  if(txt.value == ''){

   txt.value = '';

  }else if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/'){

    

  }else{

   txt.value += opt; 

  }

}

function syntax(){

  alert("SyntaxError\nPress the C button");

}
