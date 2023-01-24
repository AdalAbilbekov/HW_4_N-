
function check_age(age){
    if (age > 18){
        return true;
    }else{
        return confirm('Parents have allowed the registration')
    }
}

console.log(check_age(1))

function power_of(x, n){
    let y = 1;
    for (let i = 0; i < n; i++){
        y = y * x;
    }
    return y;
}

console.log(power_of(3, 3))



let checkAge = (age) => {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

 alert(checkAge(14))

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);


let arr = [5, 2, 1, -10, 8];


let bubble_sort = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] < array[j + 1]){
                let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
            }
        }
    }
    return arr;
}

alert(bubble_sort(arr))

let vasya_1 = { name: "Вася", age: 25 };
let petya_1 = { name: "Петя", age: 30 };
let masha_1 = { name: "Маша", age: 28 };

let users_1 = [ vasya_1, petya_1, masha_1 ];

let names = [vasya.name, petya.name, masha.name]

alert( names );

let vasya_2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya_2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha_2 = { name: "Маша", surname: "Петрова", id: 3 };

let users_2 = [ vasya_2, petya_2, masha_2 ];

let usersMapped = (array) =>{
    let new_users = [];
    for (let i in array){
        array[i].full_name = array[i].name + array[i].surname
        new_users.push(array[i])
    }
    return new_users
}


// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
alert( usersMapped(users_2)[0].id ) // 1
alert( usersMapped(users_2)[0].full_name ) // Вася Пупкин

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr_2 = [ vasya, petya, masha ];

function getAverageAge(arr){
    let sum = 0;
    for (let i in arr){
        sum += arr[i].age
    }
    return sum / arr.length;
}

alert( getAverageAge(arr) );