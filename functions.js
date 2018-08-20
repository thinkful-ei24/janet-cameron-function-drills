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

function decode(str){
  const arr = str.split(" ");
  let code = "";
  for (let i=0; i<arr.length; i++){
    switch(arr[i][0]){
    case "a":
      code += arr[i][1];
      break;
    case "b":
      code += arr[i][2];
      break;
    case "c":
      code += arr[i][3];
      break; 
    case "d":
      code += arr[i][4];
      break; 
    default:
      code += " ";


    }
  } console.log(code);

}

decode('craft block argon meter bells brown croon droop');

function daysInMonth (month, leapYear){
    switch(month){
case 'January':
case 'March':
case 'May':
case 'July':
case 'August':
case 'October':
case 'December':
console.log(`${month} has 31 days.`);
break;
case 'April':
case 'June':
case 'September':
case 'November':
console.log(`${month} has 30 days.`);
case 'February':
if(leapYear){
    console.log(`${month} has 29 days.`)
} else if (!leapYear){
    console.log(`${month} has 28 days.`)
}
default :
console.log("Please enter valid month.")
}

}

daysInMonth("Feb", true);


