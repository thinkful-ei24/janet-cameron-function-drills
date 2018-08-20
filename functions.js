'use strict';

function jediName(firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName('Beyone', 'Knowles'));

function toBeyond (num){
  if (!isFinite(num)){
    console.log('And beyond');
  } else if (isFinite(num) && num >0 ) {
    console.log('To infinity');
  }else if (isFinite(num) && num <0 ) {
    console.log('To negative infinity');
  }else {console.log('Staying home');}
}

toBeyond(Infinity);