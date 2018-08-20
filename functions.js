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
break;
case 'February':
if(leapYear){
    console.log(`${month} has 29 days.`)
} else if (!leapYear){
    console.log(`${month} has 28 days.`)
}
break;
default :
throw new Error ("Please enter valid month.");
}

}

daysInMonth("February", true);


function rockPaperScissors(num){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num !==1 && num !==2 && num!==3){
        throw new Error("Must enter either 1, 2, or 3")
    }
    switch(randomNo){
        case num:
            console.log("It's a tie!");
            break;
        case 1:
            if (num===2){
                console.log("Paper beats rock. We win!");
            }else if(num===3){console.log("Rock beats scissors. Computer wins!")}
            break;
        case 2:
            if (num===1){
                console.log("Paper beats rock. Computer wins!");
            }else if(num===3){console.log("Scissors beat paper. We win!")}
            break;
        case 3:
            if (num===1){
                console.log("Rock beats scissors. We win!");
            }else if(num===2){console.log("Scissors beat paper. Computer wins!")}
            break;    
    }
}

rockPaperScissors(3);

